import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const user = useSelector((state) => state.user.user);

  if (user === null) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
