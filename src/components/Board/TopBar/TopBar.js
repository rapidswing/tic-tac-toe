import Logo from 'assets/logo.svg';
import IconTurnX from 'assets/icon-x-inactive.svg';
import IconTurnO from 'assets/icon-o-inactive.svg';
import IconRestart from 'assets/icon-restart.svg';

import { useDispatch, useSelector } from 'react-redux';
import { togglePause } from 'features/gameSlice';

import { MARKS } from 'utilities/constants';

import './TopBar.scss';

function TopBar() {
  const currentTurn = useSelector((state) => state.game.currentTurn);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(togglePause());
  }

  return (
    <div className="top-bar">
      <div className="logo">
        <img src={Logo} alt="Tic-Tac-Toe Logo" />
      </div>
      <div className="turn-indicator">
        <img
          src={currentTurn === MARKS.X ? IconTurnX : IconTurnO}
          alt={`Current player: ${currentTurn}`}
        />
        TURN
      </div>
      <div className="restart">
        <button className="restart-btn" onClick={handleRestart}>
          <img src={IconRestart} alt="Restart" />
        </button>
      </div>
    </div>
  )
}

export default TopBar;

