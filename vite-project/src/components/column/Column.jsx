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
          theme={card.theme}
          date={card.date}
          style={card.style}
          id={card.id}
          key={card.id}
        />
      ))}
    </MainColumn>
  );
}
export default Column;
