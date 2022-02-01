import PlayerSelect from 'components/PlayerSelect/PlayerSelect';
import OpponentSelect from 'components/OpponentSelect/OpponentSelect';

import Logo from 'assets/logo.svg';

import './NewGame.scss';

function NewGame() {
  return (
    <div className="new-game-container">
      <div className="new-game">
        <img src={Logo} alt="Tic-Tac-Toe logo" />
        <PlayerSelect />
        <OpponentSelect />
      </div>
    </div>
  )
};

export default NewGame;