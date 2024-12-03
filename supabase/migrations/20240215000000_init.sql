-- Enable the necessary extensions
create extension if not exists "uuid-ossp";

-- Create enum types
create type subscription_tier as enum ('free', 'pro');
create type keyword_status as enum ('active', 'paused', 'deleted');

-- Create profiles table (extends Clerk user data)
create table profiles (
    id uuid primary key default uuid_generate_v4(),
    user_id text not null unique,  -- Clerk user ID
    subscription_tier subscription_tier not null default 'free',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint fk_user_id foreign key (user_id) references auth.users (id) on delete cascade
);

-- Create websites table
create table websites (
    id uuid primary key default uuid_generate_v4(),
    user_id text not null,
    domain varchar(255) not null,
    business_name varchar(255) not null,
    location varchar(255) not null default 'Sydney',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint fk_user_id foreign key (user_id) references auth.users (id) on delete cascade,
    constraint unique_domain_per_user unique (user_id, domain)
);

-- Create keywords table
create table keywords (
    id uuid primary key default uuid_generate_v4(),
    website_id uuid not null,
    keyword text not null,
    status keyword_status not null default 'active',
    current_rank integer,
    previous_rank integer,
    best_rank integer,
    last_checked timestamp with time zone,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint fk_website_id foreign key (website_id) references websites (id) on delete cascade,
    constraint unique_keyword_per_website unique (website_id, keyword)
);

-- Create ranking_history table
create table ranking_history (
    id uuid primary key default uuid_generate_v4(),
    keyword_id uuid not null,
    rank integer not null,
    checked_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint fk_keyword_id foreign key (keyword_id) references keywords (id) on delete cascade
);

-- Create RLS Policies

-- Profiles policies
alter table profiles enable row level security;

create policy "Users can view own profile"
    on profiles for select
    using (auth.uid() = user_id);

create policy "Users can update own profile"
    on profiles for update
    using (auth.uid() = user_id);

-- Websites policies
alter table websites enable row level security;

create policy "Users can view own websites"
    on websites for select
    using (auth.uid() = user_id);

create policy "Users can insert own websites"
    on websites for insert
    with check (auth.uid() = user_id);

create policy "Users can update own websites"
    on websites for update
    using (auth.uid() = user_id);

create policy "Users can delete own websites"
    on websites for delete
    using (auth.uid() = user_id);

-- Keywords policies
alter table keywords enable row level security;

create policy "Users can view own keywords"
    on keywords for select
    using (
        exists (
            select 1 from websites
            where websites.id = keywords.website_id
            and websites.user_id = auth.uid()
        )
    );

create policy "Users can insert own keywords"
    on keywords for insert
    with check (
        exists (
            select 1 from websites
            where websites.id = keywords.website_id
            and websites.user_id = auth.uid()
        )
    );

create policy "Users can update own keywords"
    on keywords for update
    using (
        exists (
            select 1 from websites
            where websites.id = keywords.website_id
            and websites.user_id = auth.uid()
        )
    );

create policy "Users can delete own keywords"
    on keywords for delete
    using (
        exists (
            select 1 from websites
            where websites.id = keywords.website_id
            and websites.user_id = auth.uid()
        )
    );

-- Ranking history policies
alter table ranking_history enable row level security;

create policy "Users can view own ranking history"
    on ranking_history for select
    using (
        exists (
            select 1 from keywords
            join websites on websites.id = keywords.website_id
            where keywords.id = ranking_history.keyword_id
            and websites.user_id = auth.uid()
        )
    );

-- Create functions for updated_at trigger
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql;

-- Create updated_at triggers
create trigger update_profiles_updated_at
    before update on profiles
    for each row
    execute function update_updated_at_column();

create trigger update_websites_updated_at
    before update on websites
    for each row
    execute function update_updated_at_column();

create trigger update_keywords_updated_at
    before update on keywords
    for each row
    execute function update_updated_at_column();

-- Create indexes for better query performance
create index idx_websites_user_id on websites(user_id);
create index idx_keywords_website_id on keywords(website_id);
create index idx_ranking_history_keyword_id on ranking_history(keyword_id);
create index idx_ranking_history_checked_at on ranking_history(checked_at);
