import React, { useEffect, useState } from "react";
import MainContainer from "../components/mainContainer/MainContainer";
import { allCards } from "../../data";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";


const MainPage = () => {

  return (
    <>
 
       <MainContainer />;
      <Outlet/>
    </>
  );
};
export default MainPage;
