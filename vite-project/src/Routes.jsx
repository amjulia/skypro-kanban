import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { routeObj } from "./lib/const";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import NewCardPage from "./pages/NewCardPage";

function checkLS() {
  try {
    const user = JSON.parse(localStorage.getItem("user"))
    return user;
  } catch (error) {
    localStorage.removeItem("user")
    return null;
  }
}
const AppRoutes = () => {
  //const [isAuth, setIsAuth] = useState(false)
  // const [isAuth, setIsAuth] = useState(localStorage.getItem)
  
  const [user, setUser] = useState(checkLS());
  const navigate = useNavigate();
  function userLogin(newUser) {
    console.log(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
      setUser(newUser)
      navigate(routeObj.MAIN);
  }
function logout() {
  localStorage.removeItem("user");
  setUser(null);
  navigate(routeObj.LOGIN);
}

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={routeObj.MAIN} element={<MainPage user={user} />}>
            <Route path={routeObj.CARD} element={<CardPage />} />
            <Route path={routeObj.EXIT} element={<ExitPage logout={logout} />}  />
            <Route path={routeObj.NEWCARD} element={<NewCardPage />}  />

          </Route>
        </Route>
        
        <Route path={routeObj.LOGIN} element={<LoginPage userLogin={userLogin} />} />
        <Route path={routeObj.REGISTER} element={<RegisterPage userLogin={userLogin}/>} />
        <Route path={routeObj.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
