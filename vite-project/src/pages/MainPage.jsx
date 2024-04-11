import React, { useEffect, useState } from "react";
import MainContainer from "../components/mainContainer/MainContainer";
import { Outlet } from "react-router-dom";



const MainPage = ({user}) => {

  return (
    <>
 
       <MainContainer user={user} />;
      <Outlet/>
    </>
  );
};
export default MainPage;
