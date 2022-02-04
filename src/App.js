import { useEffect } from "react";
import { useSelector } from "react-redux";
import WebFont from 'webfontloader';

import NewGame from 'views/NewGame/NewGame'
import Game from "views/Game/Game";

import { PAGES } from "utilities/constants";

import './App.scss';

function App() {
  const page = useSelector((state) => state.app.page);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit']
      }
    })
  });

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