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
import { Wrapper } from "../../styles/shared";
import { getToDos } from "../../api";



const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainContainer({user}) {
   const [cards, setCards] = useState([]);
  const onCardAdd = () => {
    const newCard = {
      _id: cards.length + 1,
      topic: "Copywriting",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);  
  

  useEffect(() => {
    getToDos({token: user.token}).then((cards) => {
      console.log(cards)
      setCards(cards.tasks)
      setIsLoading(false);
    }).catch((err)=>{setError(err.message)})
    .finally(()=> {
      setIsLoading(false);
    })

  }, [user])

  
  return (
    <Wrapper>
    <MainPage>
      <Header onCardAdd={onCardAdd}  user={user.name}/>
      <Container>
        <MainBlock>
          <MainContent>
          {error ? (<p style={{color: "red"}}>Произошла ошибка, попробуйте позже!</p> ) :   
           (isLoading ? (<Loading> Загрузка...</Loading>) : (
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
              </>)
            )
          }
          </MainContent>
        </MainBlock>
      </Container>
    </MainPage>
    </Wrapper>
  );
}

export default MainContainer;
