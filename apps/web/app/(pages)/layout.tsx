
import Navbar from "@/components/navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Persistent Sidebar or Navbar for dashboard/inventory/orders/settings */}
      <Navbar/>

      {/* Main content area for whichever page is currently active */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}