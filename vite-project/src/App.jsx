
import './App.css'
import Header from './components/header/Header';
import PopNewCard from './components/popups/PopNewCard';
import PopBrowse from './components/popups/PopBrowse';
import MainContainer from './components/mainContainer/MainContainer';
import PopUser from './components/popups/PopUser';
import { useState } from "react";
import { allCards } from '../data';



function App() {
	const [cards, setCards] = useState(allCards);
	const onCardAdd = () => {
		const newCard = {
			id: cards.length + 1,
			theme: "Новая задача",
			title: "Новая задача",
			date: "30.10.23",
			status: "Без статуса",
			style: "card__theme _orange"
		}
		setCards([...cards, newCard])
		
	}
  return (
    <>
     
    <div className="wrapper">
		
		
			<div className="pop-exit" id="popExit">
				<PopUser />				
			</div>

			<div className="pop-new-card" id="popNewCard">
				<PopNewCard />
			</div>

			<div className="pop-browse" id="popBrowse">
			<PopBrowse />
			</div>
		
		<header className="header">
			<Header onCardAdd={onCardAdd} />
		</header>

		<main className="main">
			<MainContainer cards={cards}  />
		</main>
		
    </div>

    <script src="js/script.js"></script>

    </>
  )
}

export default App
