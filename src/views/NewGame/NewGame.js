import { useDispatch, useSelector } from 'react-redux';

import OpponentSelect from 'components/OpponentSelect/OpponentSelect';
import { toggleSettings } from 'features/gameSlice';
import PlayerSelect from 'components/PlayerSelect/PlayerSelect';
import Modal from 'components/Modal/Modal';

import { MODAL_STATES } from 'utilities/constants';

import Logo from 'assets/logo.svg';

import './NewGame.scss';

function NewGame() {
  const modalState = useSelector((state) => state.game.modalState);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSettings());
  }

  return (
    <div className="new-game">
      {
        (modalState !== MODAL_STATES.NONE) ?
          <Modal /> :
          <></>
      }
      <img src={Logo} alt="Tic-Tac-Toe logo" onClick={handleClick} className="logo clickable" />
      <PlayerSelect />
      <OpponentSelect />
    </div>
  )
};

export default NewGame;