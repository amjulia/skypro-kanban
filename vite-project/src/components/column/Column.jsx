import Card from "../card/Card";
import { ColumnTitle, MainColumn } from "./Column.styled";


function Column({ title, allCards }) {

  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      {allCards.map((card) => (
        <Card
          title={card.title}
          theme={card.topic}
          date={card.date}
          id={card._id}
          key={card._id}
        />
      ))}
    </MainColumn>
  );
}
export default Column;
