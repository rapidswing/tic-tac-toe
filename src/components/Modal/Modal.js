import { useDispatch, useSelector } from 'react-redux';

import { PAGES, STATUS } from 'utilities/constants';

import { changePage } from 'features/appSlice';
import { restartGame, reset, togglePause } from 'features/gameSlice';

import ModalTop from 'components/Modal/ModalTop/ModalTop';
import ModalBottom from 'components/Modal/ModalBottom/ModalBottom';

import './Modal.scss';

function Modal() {
  const status = useSelector((state) => state.game.status);
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
        {status === STATUS.PAUSED ?
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