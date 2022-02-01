import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TopBar from 'components/Board/TopBar/TopBar';
import Board from 'components/Board/Board';
// import BottomBar from './BottomBar/BottomBar';
import Modal from 'components/Modal/Modal';

import { getAvailableMoves, getCpuMoveIndex } from 'utilities/helpers';
import { STATUS } from 'utilities/constants';

import './Game.scss';
import { addMarkToBoard, setFirstTurn } from 'features/gameSlice';

function Game() {
  const board = useSelector((state) => state.game.board);
  const paused = useSelector((state) => state.game.paused);
  const status = useSelector((state) => state.game.status);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (status) {
      case STATUS.INITIAL_GAME_LOAD: {
        dispatch(setFirstTurn());
        break;
      }
      case STATUS.CPU_TURN: {
        let availableMoves = getAvailableMoves(board);
        dispatch(addMarkToBoard(getCpuMoveIndex(availableMoves)));
        break;
      }
      default: {
        break;
      }
    }
  }, [board, dispatch, status])

  return (
    <div className="game">
      {
        (status === STATUS.GAME_OVER || paused) ?
          <Modal /> :
          <></>
      }
      <TopBar />
      <Board />
      {/* <BottomBar /> */}
    </div>
  );
}

export default Game;