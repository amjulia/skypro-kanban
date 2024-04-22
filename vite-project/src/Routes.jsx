import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { routeObj } from "./lib/const";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import NewCardPage from "./pages/NewCardPage";


const AppRoutes = () => {


  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={routeObj.MAIN} element={<MainPage  />}>
            <Route path={routeObj.CARD} element={<CardPage />} />
            <Route path={routeObj.EXIT} element={<ExitPage />}  />
            <Route path={routeObj.NEWCARD} element={<NewCardPage />}  />

          </Route>
        </Route>
        
        <Route path={routeObj.LOGIN} element={<LoginPage />} />
        <Route path={routeObj.REGISTER} element={<RegisterPage />} />
        <Route path={routeObj.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
