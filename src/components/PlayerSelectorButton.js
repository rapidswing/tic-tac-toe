import { useDispatch, useSelector } from "react-redux";

import { toggleSelectedMark } from 'features/playerSelectSlice';

function PlayerSelectButton({ icon, iconActive, mark }) {
  const selectedMark = useSelector((state) => state.playerSelect.selectedMark);
  const dispatch = useDispatch();

  return (
    <button
      className={`player-selector-btn ${selectedMark === mark ? 'active' : ''}`}
      id={`btn-${mark}`}
      onClick={(event) => dispatch(toggleSelectedMark(event.currentTarget.value))}
      value={mark}
    >
      <img
        className="player-selector-icon"
        src={selectedMark === mark ? iconActive : icon}
        alt={`${mark} icon`}
      />
    </button>
  )
}

export default PlayerSelectButton;