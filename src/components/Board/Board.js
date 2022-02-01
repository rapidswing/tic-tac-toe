import { useDispatch, useSelector } from 'react-redux';

import { addMarkToBoard } from 'features/gameSlice';

import GameSquare from './GameSquare/GameSquare';

import './Board.scss';

function Board() {
  const board = useSelector((state) => state.game.board);
  const dispatch = useDispatch();

  const handleBoardClick = (event) => {
    if (event.target.className !== 'cell') return;  // didn't click on cell
    let index = Number(event.target.getAttribute('index'));
    dispatch(addMarkToBoard(index));
  }

  return (
    <div className="board" onClick={(event) => handleBoardClick(event)}>
      {board.map((cell, index) => {
        return (
          <GameSquare
            cell={cell}
            // hoverMark={hoverMark}
            // dispatchHoverMark={dispatchHoverMark}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Board;