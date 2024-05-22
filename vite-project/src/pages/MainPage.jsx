import MainContainer from "../components/mainContainer/MainContainer";
import { Outlet } from "react-router-dom";



const MainPage = () => {

  return (
    <>
 
       <MainContainer />
      <Outlet/>
    </>
  );
};
export default MainPage;
