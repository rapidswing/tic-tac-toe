import PlayerSelector from 'components/PlayerSelector';
import OpponentSelector from 'components/OpponentSelector';

import Logo from 'assets/logo.svg';

import './NewGame.scss';

function NewGame() {
  <div className="new-game-container">
    <div className="new-game">
      <img src={Logo} alt="Tic-Tac-Toe logo" />
      <PlayerSelector />
      <OpponentSelector />
    </div>
  </div>
};

export default NewGame;