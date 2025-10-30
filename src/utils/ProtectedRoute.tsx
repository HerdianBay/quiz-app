import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const user = sessionStorage.getItem("user");

  if (user === null) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
}
