import { selectOpponent } from 'features/playerSelectSlice';

const OpponentSelector = () => (
  <div className="opponent-selector" onClick={(event) => selectOpponent(event)}>
    <button className="opponent-selector-btn" id="vs-cpu-btn" value="CPU">NEW GAME (VS CPU)</button>
    <button className="opponent-selector-btn" id="vs-player-btn" value="HUMAN">NEW GAME (VS PLAYER)</button>
  </div>
);

export default OpponentSelector;