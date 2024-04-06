import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { routeObj } from "../../lib/const";

function PrivateRoute({isAuth}) {
  return isAuth ? <Outlet /> : <Navigate to={routeObj.LOGIN} />;
}

export default PrivateRoute;