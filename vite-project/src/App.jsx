import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';
import PopNewCard from './components/popups/PopNewCard';
import PopBrowse from './components/popups/PopBrowse';
import MainContainer from './components/mainContainer/MainContainer';


function App() {
  
  return (
    <>
     
    <div className="wrapper">
		
		
			<div className="pop-exit" id="popExit">
				<div className="pop-exit__container">
					<div className="pop-exit__block">
						<div className="pop-exit__ttl">
							<h2>Выйти из аккаунта?</h2>
						</div>
						<form className="pop-exit__form" id="formExit" action="#">
							<div className="pop-exit__form-group">
								<button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
								<button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="pop-new-card" id="popNewCard">
				<PopNewCard />
			</div>

			<div className="pop-browse" id="popBrowse">
			<PopBrowse />
			</div>
		
		

		<header className="header">
		<Header />
		</header>
		<main className="main">
		<MainContainer />
		</main>
		
    </div>

    <script src="js/script.js"></script>

    </>
  )
}

export default App
