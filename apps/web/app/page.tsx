// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
      <p className="text-gray-600 max-w-md">
        Manage your inventory, track orders, and monitor dashboard analytics all in one place.
      </p>
      <Link 
        href="/dashboard" 
        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}