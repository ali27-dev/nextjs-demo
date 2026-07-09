export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
   <div className="flex">
    {/* <aside>Sidebar</aside> */}
    <main>{children}</main>
    </div>
    </div>
  );
}