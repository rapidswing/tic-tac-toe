import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMarkToBoard, setFirstTurn } from 'features/gameSlice';
import Board from 'components/Board/Board';
import BottomBar from 'components/Board/BottomBar/BottomBar';
import Modal from 'components/Modal/Modal';
import TopBar from 'components/Board/TopBar/TopBar';

import { MARKS, STATUS } from 'utilities/constants';
import { findBestMove } from 'utilities/helpers';

import './Game.scss';

function Game() {
  const board = useSelector((state) => state.game.board);
  const paused = useSelector((state) => state.game.paused);
  const selectedMark = useSelector((state) => state.game.selectedMark);
  const status = useSelector((state) => state.game.status);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (status) {
      case STATUS.INITIAL_GAME_LOAD: {
        dispatch(setFirstTurn());
        break;
      }
      case STATUS.CPU_TURN: {
        let oppositeMark = selectedMark === MARKS.X ? MARKS.O : MARKS.X;
        let cpuMove = findBestMove(board, oppositeMark);
        dispatch(addMarkToBoard(cpuMove));
        break;
      }
      default: {
        break;
      }
    }
  }, [board, dispatch, selectedMark, status])

  return (
    <div className="game">
      {
        (status === STATUS.GAME_OVER || paused) ?
          <Modal /> :
          <></>
      }
      <TopBar />
      <Board />
      <BottomBar />
    </div>
  );
}

export default Game;