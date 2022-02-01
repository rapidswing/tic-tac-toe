import { useDispatch, useSelector } from 'react-redux';

import { restartGame, reset, togglePause } from 'features/gameSlice';

import ModalBottom from 'components/Modal/ModalBottom/ModalBottom';
import ModalTop from 'components/Modal/ModalTop/ModalTop';

import './Modal.scss';

function Modal() {
  const paused = useSelector((state) => state.game.paused);
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

  return (
    <div className="modal-background">
      <div className="modal-content">
        {paused ?
          (
            <>
              <ModalBottom />
              <div className="modal-choices">
                <button onClick={handleTogglePause} id="modal-cancel">NO, CANCEL</button>
                <button onClick={handleRestartGame} id="modal-restart">YES, RESTART</button>
              </div>
            </>
          ) : (
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
      </div>
    </div>
  );
}

export default Modal;