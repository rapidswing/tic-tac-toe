import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// import TopBar from './TopBar/TopBar';
import Board from 'components/Board/Board';
// import BottomBar from './BottomBar/BottomBar';
// import Modal from './Modal/Modal';

import { STATUS } from 'utilities/constants';

import './Game.scss';

function Game() {
  const status = useSelector((state) => state.game.status);

  return (
    <div className="game">
      {/* {
        (status === STATUS.GAME_OVER || status === STATUS.PAUSED) ?
          <Modal /> :
          <></>
      } */}
      {/* <TopBar /> */}
      <Board />
      {/* <BottomBar /> */}
    </div>
  );
}

export default Game;