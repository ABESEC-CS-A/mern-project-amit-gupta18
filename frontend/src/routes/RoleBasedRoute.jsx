import { Navigate, Outlet } from "react-router-dom";

export default function RoleBasedRoute({ allowedRoles }) {
  const user = JSON.parse(localStorage.getItem("user")); // { role: 'student' | 'alumni' | 'faculty' | 'admin' }

  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

  return <Outlet />;
}
