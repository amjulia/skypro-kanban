import { format } from "date-fns";
 import "react-day-picker/dist/style.css";
 import ru from "date-fns/locale/ru";
 import { DayPicker } from "react-day-picker";

function Calendar({selected, setSelected}) {
     
  
    let footer = <p>Выберите срок исполнения.</p>;
    if (selected) {
      footer = <p>Вы выбрали {format(selected, 'PP', {locale: ru})}.</p>;
    }
    return (  
    
        <DayPicker locale={ru}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
      
      
    );
    
}
export default Calendar;