import { allCards } from "../../../data";
import Card from "../card/Card";

function Column({title}) {
     return (<div className="main__column column">
     <div className="column__title">
         <p>{title}</p>
     </div>
     <Card allCards = {allCards.filter((card) => card.columnTitle === title)} />
 </div>)
}
export default Column;