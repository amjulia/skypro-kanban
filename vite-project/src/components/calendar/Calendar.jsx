import { CalendarCell, CalendarCells, CalendarContent, CalendarDayName, CalendarDaysNames } from "./Calendar.styled";

function Calendar() {
    return <CalendarContent>
    <CalendarDaysNames>
        <CalendarDayName>пн</CalendarDayName>
        <CalendarDayName>вт</CalendarDayName>
        <CalendarDayName>ср</CalendarDayName>
        <CalendarDayName>чт</CalendarDayName>
        <CalendarDayName>пт</CalendarDayName>
        <CalendarDayName>сб</CalendarDayName>
        <CalendarDayName>вс</CalendarDayName>
    </CalendarDaysNames>
    <CalendarCells>
        <CalendarCell>28</CalendarCell>
        <div className="calendar__cell _other-month">29</div>
        <div className="calendar__cell _other-month">30</div>
        <div className="calendar__cell _cell-day">31</div>
        <div className="calendar__cell _cell-day">1</div>
        <div className="calendar__cell _cell-day _weekend">2</div>
        <div className="calendar__cell _cell-day _weekend">3</div>
        <div className="calendar__cell _cell-day">4</div>
        <div className="calendar__cell _cell-day">5</div>
        <div className="calendar__cell _cell-day ">6</div>
        <div className="calendar__cell _cell-day">7</div>
        <div className="calendar__cell _cell-day _current">8</div>
        <div className="calendar__cell _cell-day _weekend _active-day">9</div>
        <div className="calendar__cell _cell-day _weekend">10</div>
        <div className="calendar__cell _cell-day">11</div>
        <div className="calendar__cell _cell-day">12</div>
        <div className="calendar__cell _cell-day">13</div>
        <div className="calendar__cell _cell-day">14</div>
        <div className="calendar__cell _cell-day">15</div>
        <div className="calendar__cell _cell-day _weekend">16</div>
        <div className="calendar__cell _cell-day _weekend">17</div>
        <div className="calendar__cell _cell-day">18</div>
        <div className="calendar__cell _cell-day">19</div>
        <div className="calendar__cell _cell-day">20</div>
        <div className="calendar__cell _cell-day">21</div>
        <div className="calendar__cell _cell-day">22</div>
        <div className="calendar__cell _cell-day _weekend">23</div>
        <div className="calendar__cell _cell-day _weekend">24</div>
        <div className="calendar__cell _cell-day">25</div>
        <div className="calendar__cell _cell-day">26</div>
        <div className="calendar__cell _cell-day">27</div>
        <div className="calendar__cell _cell-day">28</div>
        <div className="calendar__cell _cell-day">29</div>
        <div className="calendar__cell _cell-day _weekend">30</div>
        <div className="calendar__cell _other-month _weekend">1</div>
    </CalendarCells>
</CalendarContent>
}
export default Calendar;