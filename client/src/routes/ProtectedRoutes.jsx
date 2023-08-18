import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { loading, isAuth } = useAuth();
  if (loading && !isAuth) return <h1>Loading...</h1>;
  if (!loading && !isAuth) return <Navigate to={"/login"} replace />;

  return <Outlet />;
}

export default ProtectedRoutes;
