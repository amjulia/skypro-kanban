import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { routeObj } from "./lib/const";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false)
  // const [isAuth, setIsAuth] = useState(localStorage.getItem)
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth}  />}>
          <Route path={routeObj.MAIN} element={<MainPage />}>
            <Route path={routeObj.CARD} element={<CardPage />} />
            <Route path={routeObj.EXIT} element={<ExitPage setIsAuth={setIsAuth} />}  />
          </Route>
        </Route>
        
        <Route path={routeObj.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>} />
        <Route path={routeObj.REGISTER} element={<RegisterPage />} />
        <Route path={routeObj.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
