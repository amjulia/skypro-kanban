import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import PopNewCard from "./components/popups/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse";
import MainContainer from "./components/mainContainer/MainContainer";
import PopUser from "./components/popups/PopUser";
import { useState, useEffect } from "react";
import { allCards } from "../data";
import { GlobalStyle } from "./components/Global.styled";
import AppRoutes from "./Routes";



function App() {
 
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
   
      <script src="js/script.js"></script>
      
    </>
  );
}

export default App;
