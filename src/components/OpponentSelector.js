import { useDispatch } from 'react-redux';

import { selectOpponent } from 'features/playerSelectSlice';

function OpponentSelector() {
  const dispatch = useDispatch();

  return (
    <div className="opponent-selector" onClick={(event) => dispatch(selectOpponent(event.target.value))}>
      <button className="opponent-selector-btn" id="vs-cpu-btn" value="CPU">NEW GAME (VS CPU)</button>
      <button className="opponent-selector-btn" id="vs-player-btn" value="HUMAN">NEW GAME (VS PLAYER)</button>
    </div>
  )
}

export default OpponentSelector;