import { useState } from 'react';
import { useSelector } from 'react-redux';

import iconX from 'assets/icon-x.svg';
import iconO from 'assets/icon-o.svg';
import iconXOutline from 'assets/icon-x-outline.svg';
import iconOOutline from 'assets/icon-o-outline.svg';

const GameSquare = ({ cell, index }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const currentTurn = useSelector((state) => state.game.currentTurn);

  const handleMouseEnter = (index) => {
    setHoverIndex(Number(index));
  }

  const handleMouseLeave = () => {
    setHoverIndex(-1);
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
        <img src={currentTurn === 'X' ? iconXOutline : iconOOutline} alt="Mark" /> :
        <></>
      }
      {cell === 'X' ? <img src={iconX} alt="X" /> : <></>}
      {cell === 'O' ? <img src={iconO} alt="O" /> : <></>}
    </button>
  )
}

export default GameSquare;