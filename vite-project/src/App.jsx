
import './App.css'
import Header from './components/header/Header';
import PopNewCard from './components/popups/PopNewCard';
import PopBrowse from './components/popups/PopBrowse';
import MainContainer from './components/mainContainer/MainContainer';
import PopUser from './components/popups/PopUser';


function App() {

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
