import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoute() {
  const user = sessionStorage.getItem("user");

  if (user) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}
