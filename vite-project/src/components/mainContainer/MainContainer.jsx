import Column from "../column/Column";
import { Container, MainBlock, MainContent, MainPage } from "./MainContainer.styled";


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainContainer({ cards }) {
  return (
    <MainPage>
      <Container>
        <MainBlock>
          <MainContent>
            {statusList.map((status) => {
              return (
                <Column
                  key={status}
                  title={status}
                  allCards={cards.filter((card) => card.status === status)}
                />
              );
            })}
          </MainContent>
        </MainBlock>
      </Container>
    </MainPage>
  );
}

export default MainContainer;
