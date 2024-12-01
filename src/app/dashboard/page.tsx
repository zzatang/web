import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold gradient-text mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards for dashboard content */}
          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Keyword Rankings</h2>
            <p className="text-gray-600">Track your keyword positions here</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Performance</h2>
            <p className="text-gray-600">View your ranking performance</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Competitors</h2>
            <p className="text-gray-600">Monitor your competitors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
