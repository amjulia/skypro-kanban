import allCards from "../card/Card";
import Column from "../column/Column";


function MainContainer() {
   return <div className="container">
       
       <div className="main__block">
           <div className="main__content">
            <Column name={"Без статуса"} />
            <Column name={"Нужно сделать"} />
            <Column name={"В работе"} />
            <Column name={"Тестирование"} />
            <Column name={"Готово"} />
       
       
               
           </div>
       
       </div>
   </div>

}

export default MainContainer;