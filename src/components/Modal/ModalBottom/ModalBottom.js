import { useSelector } from 'react-redux';

import { getBoardResult } from "utilities/helpers";

import { BOARD_RESULTS, STATUS } from 'utilities/constants';

import iconO from 'assets/icon-o.svg';
import iconX from 'assets/icon-x.svg';

function ModalBottom() {
  const board = useSelector((state) => state.game.board);
  const paused = useSelector((state) => state.game.paused);
  const status = useSelector((state) => state.game.status);

  if (status === STATUS.GAME_OVER) {  // game is over
    switch (getBoardResult(board)) {
      case BOARD_RESULTS.X: {  // X won
        return (
          <div className="modal-content-bottom-text">
            <img src={iconX} alt='X icon' />
            <span className="x-win">TAKES THE ROUND</span>
          </div>
        );
      }
      case BOARD_RESULTS.O: {  // O won
        return (
          <div className="modal-content-bottom-text">
            <img src={iconO} alt='O icon' />
            <span className="o-win">TAKES THE ROUND</span>
          </div>
        )
      }
      case BOARD_RESULTS.TIE: {  // tie
        return (
          <div className="modal-content-bottom-text">
            ROUND TIED
          </div>
        )
      }
      default: {
        return <></>
      }
    }
  }
  if (paused) {  // game is paused
    return <div className="modal-content-bottom-text">RESTART GAME?</div>
  }
  return <></>
}

export default ModalBottom;