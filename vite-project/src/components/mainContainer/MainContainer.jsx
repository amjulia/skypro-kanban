import Column from "../column/Column";
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainContainer({ cards }) {
  return (
    <div className="container">
      <div className="main__block">
        <div className="main__content">
          {statusList.map((status) => {
            return (
              <Column
                key={status}
                title={status}
                allCards={cards.filter((card) => card.status === status)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
