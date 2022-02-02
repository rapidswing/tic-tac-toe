import { useDispatch, useSelector } from 'react-redux';

import { setDifficulty, resetRecord, restartGame, reset, togglePause } from 'features/gameSlice';

import ModalBottom from 'components/Modal/ModalBottom/ModalBottom';
import ModalTop from 'components/Modal/ModalTop/ModalTop';

import './Modal.scss';
import { DIFFICULTIES, MODAL_STATES } from 'utilities/constants';

function Modal() {
  const modalState = useSelector((state) => state.game.modalState);
  const difficulty = useSelector((state) => state.game.difficulty);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(togglePause());
  }

  const handleDifficulty = (id) => {
    dispatch(setDifficulty(id));
  }

  const handleRestartGame = () => {
    dispatch(restartGame());
  }

  const handleQuit = () => {
    dispatch(reset());
  }

  const handleTogglePause = () => {
    dispatch(togglePause());
  }

  const selectModal = () => {
    switch (modalState) {
      case MODAL_STATES.PAUSED: {
        return (
          <>
            <ModalBottom />
            <div className="modal-choices">
              <button onClick={handleTogglePause} id="modal-cancel">NO, CANCEL</button>
              <button onClick={handleRestartGame} id="modal-restart">YES, RESTART</button>
            </div>
          </>
        )
      }
      case MODAL_STATES.QUIT_GAME: {
        return (
          <>
            <ModalTop />
            <ModalBottom />
            <div className="modal-choices">
              <button onClick={handleQuit} id="modal-quit">QUIT</button>
              <button onClick={handleRestartGame} id="modal-nextround">NEXT ROUND</button>
            </div>
          </>
        )
      }
      case MODAL_STATES.SETTINGS: {        
        return (
          <>
            <div className="modal-choices-settings">
              <button onClick={handleCancel} className="modal-choices-cancel">
                <div>CANCEL</div>
              </button>
              <div className="modal-choices-difficulty">
                <button className={difficulty === DIFFICULTIES.EASY && 'active'} id={`${DIFFICULTIES.EASY}`} onClick={(event) => handleDifficulty(event.target.id)}>EASY</button>
                <button className={difficulty === DIFFICULTIES.NORMAL && 'active'} id={`${DIFFICULTIES.NORMAL}`} onClick={(event) => handleDifficulty(event.target.id)}>MEDIUM</button>
                <button className={difficulty === DIFFICULTIES.HARD && 'active'} id={`${DIFFICULTIES.HARD}`} onClick={(event) => handleDifficulty(event.target.id)}>HARD</button>
              </div>
              <button className="modal-choices-quit-game" onClick={handleQuit}>
                <div>QUIT</div>
                <div>GAME</div>
              </button>
            </div>
          </>
        )
      }
      default: {
        break;
      }
    }
  }

  return (
    <div className="modal-background">
      <div className="modal-content">
        {selectModal()}
      </div>
    </div>
  );
}

export default Modal;