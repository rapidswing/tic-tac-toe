import { useDispatch, useSelector } from 'react-redux';

import { restartGame, reset, togglePause } from 'features/gameSlice';

import ModalBottom from 'components/Modal/ModalBottom/ModalBottom';
import ModalTop from 'components/Modal/ModalTop/ModalTop';

import './Modal.scss';
import { MODAL_STATES } from 'utilities/constants';

function Modal() {
  const modalState = useSelector((state) => state.game.modalState);
  const dispatch = useDispatch();

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
            <div className="modal-choices">
              <div>difficulty options</div>
              <button id="modal-clear-history">RESET RECORD</button>
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