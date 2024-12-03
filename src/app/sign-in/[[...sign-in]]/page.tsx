import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="glass-card p-8 rounded-2xl w-full max-w-md">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500',
              card: 'shadow-none bg-transparent',
              headerTitle: 'text-2xl font-bold gradient-text',
              headerSubtitle: 'text-gray-600',
              socialButtonsBlockButton: 'border border-gray-200 hover:bg-gray-50',
              formFieldInput: 'rounded-lg border-gray-200',
              footerActionLink: 'text-indigo-600 hover:text-indigo-500',
            },
            layout: {
              socialButtonsPlacement: "bottom",
              privacyPageUrl: "https://clerk.dev/privacy",
              termsPageUrl: "https://clerk.dev/terms",
            },
          }}
          afterSignInUrl="/dashboard"
        />
      </div>
    </div>
  );
}
