import { useDispatch, useSelector } from 'react-redux';

import ModalBottom from 'components/Modal/ModalBottom/ModalBottom';
import ModalTop from 'components/Modal/ModalTop/ModalTop';
import {
  setDifficulty,
  toggleSettings,
  restartGame,
  reset,
  togglePause
} from 'features/gameSlice';

import { DIFFICULTIES, MODAL_STATES, PAGES } from 'utilities/constants';

import './Modal.scss';

function Modal() {
  const modalState = useSelector((state) => state.game.modalState);
  const difficulty = useSelector((state) => state.game.difficulty);
  const page = useSelector((state) => state.app.page);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(toggleSettings());
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
              <div className="modal-choices-difficulty">
                <button className={difficulty === DIFFICULTIES.EASY ? 'active' : undefined} id={`${DIFFICULTIES.EASY}`} onClick={(event) => handleDifficulty(event.target.id)}>EASY</button>
                <button className={difficulty === DIFFICULTIES.NORMAL ? 'active' : undefined} id={`${DIFFICULTIES.NORMAL}`} onClick={(event) => handleDifficulty(event.target.id)}>MEDIUM</button>
                <button className={difficulty === DIFFICULTIES.HARD ? 'active' : undefined} id={`${DIFFICULTIES.HARD}`} onClick={(event) => handleDifficulty(event.target.id)}>HARD</button>
              </div>
              <div className="modal-choices-quit-or-cancel">
                <button className="modal-choices-cancel" onClick={handleCancel}>
                  <div>RETURN</div>
                  <div>TO GAME</div>
                </button>
                {page !== PAGES.NEW_GAME &&
                  <button className="modal-choices-quit-game" onClick={handleQuit}>
                    <div>QUIT</div>
                    <div>GAME</div>
                  </button>
                }
              </div>
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