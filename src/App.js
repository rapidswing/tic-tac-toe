import { useDispatch, useSelector } from "react-redux";

import { PAGES } from "utilities/constants";

import NewGame from 'views/NewGame/NewGame'
import Game from "views/Game/Game";

import { loadStateFromLocalStorage } from "features/gameSlice";

import WebFont from 'webfontloader';

import './App.scss';
import { useEffect } from "react";


function App() {
  const page = useSelector((state) => state.app.page);
  const dispatch = useDispatch();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit']
      }
    })
  });

  // attempt to load saved state from localStorage
  useEffect(() => {
    const gameState = localStorage.getItem('gameState');
    if (!gameState) return;
    const parsedGameState = JSON.parse(gameState);
    dispatch(loadStateFromLocalStorage(parsedGameState));
  }, [dispatch]);

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
