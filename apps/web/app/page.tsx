// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // 1. Redirect to Splash first
    router.replace('/splash');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}