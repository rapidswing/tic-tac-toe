import { useSelector } from "react-redux";

import { PAGES } from "utilities/constants";

import NewGame from 'views/NewGame'
// import Game from "views/Game";

import './App.scss';

function App() {
  const page = useSelector((state) => state.app.page);

  return (
    <div className="App">
      {page === PAGES.PLAYER_SELECT &&
        <NewGame />
      }
      {/* {app.page === PAGES.GAME &&
        <Game
          app={app}
          quitApp={quitApp}
        />
      } */}
    </div>
  );
}

export default App;
