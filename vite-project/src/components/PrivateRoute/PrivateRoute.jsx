import { Navigate, Outlet } from "react-router-dom";
import { routeObj } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";

function PrivateRoute() {
  const {user} = useUserContext();
  return user ? <Outlet /> : <Navigate to={routeObj.LOGIN} />;
}

export default PrivateRoute;