import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Globe, Target, Award, TrendingUp, TrendingDown, Minus } from 'lucide-react';

// Temporary mock data - will be replaced with actual data from Supabase
const mockKeywords = [
  { keyword: "sydney plumber", currentRank: 5, previousRank: 8, trend: "up" },
  { keyword: "emergency plumbing sydney", currentRank: 12, previousRank: 10, trend: "down" },
  { keyword: "plumber near me", currentRank: 15, previousRank: 15, trend: "stable" },
];

const RankingTrend = ({ trend }: { trend: string }) => {
  if (trend === "up") {
    return <TrendingUp className="w-5 h-5 text-green-500" />;
  } else if (trend === "down") {
    return <TrendingDown className="w-5 h-5 text-red-500" />;
  }
  return <Minus className="w-5 h-5 text-yellow-500" />;
};

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
          <p className="text-gray-600 mt-2">Track your local SEO rankings in Sydney</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tracked Websites</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tracked Keywords</p>
                <p className="text-2xl font-bold">3/3</p>
                <p className="text-xs text-gray-500">Free Tier Limit</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Average Position</p>
                <p className="text-2xl font-bold">10.7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Keyword Rankings Table */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold">Keyword Rankings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Keyword
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Previous Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {mockKeywords.map((keyword, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {keyword.keyword}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {keyword.currentRank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {keyword.previousRank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <RankingTrend trend={keyword.trend} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upgrade Card - Show only for free tier */}
        <div className="mt-8">
          <div className="glass-card p-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Upgrade to Pro</h3>
                <p className="text-gray-600">Track up to 10 keywords, get daily ranking updates, and access advanced reporting features.</p>
              </div>
              <button className="button-primary">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
