export default function DashboardLayout({ children }) {
  return (
    <div>
      DashboardLayout
      <div className="grid grid-cols-12 w-full h-screen">
        {/* sideNavbar */}
        <div className="col-span-3">
          <ul>
            <li>User List</li>
            <li>friend list</li>
            <li>nothing to do</li>
          </ul>
        </div>
        {/* Dashboard Content */}
        <div className="col-span-9">{children}</div>
      </div>
      {children}
    </div>
  );
}
