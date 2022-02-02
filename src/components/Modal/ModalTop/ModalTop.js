import { useSelector } from "react-redux";

import { getBoardResult } from "utilities/helpers";

import { STATUS, OPPONENTS, BOARD_RESULTS, BOARD_RESULT_MODES } from "utilities/constants";

function ModalTop() {
  const board = useSelector((state) => state.game.board);
  const opponent = useSelector((state => state.game.opponent));
  const status = useSelector((state) => state.game.status);
  const selectedMark = useSelector((state) => state.game.selectedMark);

  let topText = '';
  let boardResult = getBoardResult(board, BOARD_RESULT_MODES.TYPE);
  if (status === STATUS.GAME_OVER) {  // game is over
    if (boardResult !== BOARD_RESULTS.TIE) {  // it's not a tie
      if (boardResult === selectedMark) {  // you won
        if (opponent === OPPONENTS.HUMAN) {  // you won -> vs a person
          topText = 'PLAYER 1 WINS!';
        } else {  // you won -> vs the CPU
          topText = 'YOU WON!';
        }
      }
      else {  // you lost
        if (opponent === OPPONENTS.HUMAN) {  // you lost -> vs a person
          topText = 'PLAYER 2 WINS!';
        } else {  // you lost -> vs the CPU
          topText = 'OH NO, YOU LOST...';
        }
      }
    } else {  // it's a tie
      // return nothing
    }
  } else { // game is paused
    // return nothing
  }
  return <div className="modal-content-top-text">{topText}</div>
}

export default ModalTop;