import { useSelector } from "react-redux";

import { PAGES } from "utilities/constants";

import NewGame from 'views/NewGame/NewGame'
import Game from "views/Game/Game";

import './App.scss';

function App() {
  const page = useSelector((state) => state.app.page);

  return (
    <div className="App">
      {page === PAGES.NEW_GAME &&
        <NewGame />
      }
      {page === PAGES.GAME &&
        <Game />
      }
    </div>
  );
}

export default App;
