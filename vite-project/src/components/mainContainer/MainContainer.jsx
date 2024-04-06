import { useEffect, useState } from "react";
import Column from "../column/Column";
import Header from "../header/Header";
import {
  Container,
  Loading,
  MainBlock,
  MainContent,
  MainPage,
  
} from "./MainContainer.styled";
import { allCards } from "../../../data";
import { Wrapper } from "../../styles/shared";


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainContainer() {
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
    <Wrapper>
    <MainPage>
      <Header onCardAdd={onCardAdd} />
      <Container>
        <MainBlock>
          <MainContent>
            {isLoading ? (
              <Loading> Загрузка...</Loading>
            ) : (
              <>
                {statusList.map((status) => {
                  return (
                    <Column
                      key={status}
                      title={status}
                      allCards={cards.filter((card) => card.status === status)}
                    />
                  );
                })}
              </>
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainPage>
    </Wrapper>
  );
}

export default MainContainer;
