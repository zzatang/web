import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="glass-card p-8 rounded-2xl">
        <SignUp appearance={{
          elements: {
            formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-500',
            card: 'shadow-none',
          }
        }}/>
      </div>
    </div>
  );
}
