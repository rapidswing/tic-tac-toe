import { useDispatch, useSelector } from 'react-redux';

import { addHoverMark, removeHoverMark } from 'features/gameSlice';

import iconX from 'assets/icon-x.svg';
import iconO from 'assets/icon-o.svg';
import xIconOutline from 'assets/icon-x-outline.svg';
import oIconOutline from 'assets/icon-o-outline.svg';

const GameSquare = ({ cell, index }) => {
  const currentTurn = useSelector((state) => state.game.currentTurn);
  const hoverIndex = useSelector((state) => state.game.hoverIndex);
  const dispatch = useDispatch();

  const handleMouseEnter = (index) => {
    dispatch(addHoverMark(Number(index)));
  }

  const handleMouseLeave = (index) => {
    dispatch(removeHoverMark());
  }

  return (
    <button
      className="cell"
      index={index}
      onMouseEnter={(event) => handleMouseEnter(event.target.getAttribute('index'))}
      onMouseLeave={() => handleMouseLeave()}
      value={cell}
    >
      {hoverIndex === index && cell === ' ' ?
        <img src={currentTurn === 'X' ? xIconOutline : oIconOutline} alt="Mark" /> :
        <></>
      }
      {cell === 'X' ? <img src={iconX} alt="X" /> : <></>}
      {cell === 'O' ? <img src={iconO} alt="O" /> : <></>}
    </button>
  )
}

export default GameSquare;