import { useDispatch, useSelector } from 'react-redux';

import { addMarkToBoard } from 'features/gameSlice';

import GameSquare from './GameSquare/GameSquare';

import './Board.scss';
import { STATUS } from 'utilities/constants';

function Board() {
  const board = useSelector((state) => state.game.board);
  const status = useSelector((state) => state.game.status);
  const dispatch = useDispatch();

  const handleBoardClick = (event) => {
    if (status !== STATUS.PLAYER_TURN) return;  // not the player's turn
    if (event.target.className !== 'cell' && event.target.parentElement.className !== 'board') return;  // didn't click on cell
    let index = Number(event.target.getAttribute('index'));
    dispatch(addMarkToBoard(index));
  }

  return (
    <div className="board" onClick={(event) => handleBoardClick(event)}>
      {board.map((cell, index) => {
        return (
          <GameSquare
            cell={cell}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Board;