import Card, { allCards } from "../card/Card";


function Column({name}) {
     return (<div className="main__column column">
     <div className="column__title">
         <p>{name}</p>
     </div>
     <Card allCards = {allCards.filter((card) => card.columnTitle === name)} />
 </div>)
}
export default Column;