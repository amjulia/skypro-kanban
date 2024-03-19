import Column from "../column/Column";


function MainContainer() {
   return <div className="container">
       
       <div className="main__block">
           <div className="main__content">
            <Column title={"Без статуса"} />
            <Column title={"Нужно сделать"} />
            <Column title={"В работе"} />
            <Column title={"Тестирование"} />
            <Column title={"Готово"} />
                      
           </div>
       
       </div>
   </div>

}

export default MainContainer;