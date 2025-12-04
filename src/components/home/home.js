
import '../../utils/global.css';
import '../../utils/utils.css';
import './home.css';


function Home() {
  return (
    <div className="home fx fx-col">
        <div className='header fx fx-row'>
            <div className='logo'>logo</div>
            <div className='header-actions fx fx-row'>
                <h3>Sobre</h3>
                <h3>Contato</h3>
                <h3>Sair</h3>
            </div>
        </div>

        <div className='content fx fx-row'>
            <div id='mascot-side'></div>
            <div id='start-side'>
                <div className='modal bx-sh fx fx-col' id='start-modal'>
                    <div id='start-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum d tempor incididunt ut labore<br></br> et dolore magna aliqua. Ut enim ad<br></br> minim veniam, quis nostrud <br></br> exercitation ullamco laboris nisi<br></br> ut aliquip ex ea commodo consequat.<br></br></p>
                        
                    </div>
                    <div id='start-actions'>
                        <button>começar</button>
                        <button>sobre</button>
                    </div>
                </div>
            </div>
            </div>

        <div className='footer'>
            home footer
        </div>
    </div>
  );
}

export default Home;
