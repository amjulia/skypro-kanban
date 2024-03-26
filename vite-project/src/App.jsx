import "./App.css";
import Header from "./components/header/Header";
import PopNewCard from "./components/popups/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse";
import MainContainer from "./components/mainContainer/MainContainer";
import PopUser from "./components/popups/PopUser";
import { useState, useEffect } from "react";
import { allCards } from "../data";
import { GlobalStyle } from "./components/Global.styled";
import { Loading, Wrapper } from "./App.styled";

function App() {
  const [cards, setCards] = useState(allCards);
  const onCardAdd = () => {
    const newCard = {
      id: cards.length + 1,
      theme: "Новая задача",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
      style: "card__theme _orange",
    };
    setCards([...cards, newCard]);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />

        <Header onCardAdd={onCardAdd} />
        {isLoading ? (
          <Loading> Загрузка...</Loading>
        ) : (
          <MainContainer cards={cards} />
        )}
      </Wrapper>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
