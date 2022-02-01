import iconX from 'assets/icon-x.svg';
import iconO from 'assets/icon-o.svg';
import xIconOutline from 'assets/icon-x-outline.svg';
import oIconOutline from 'assets/icon-o-outline.svg';

const GameSquare = ({ cell, index }) => {
  return (
    <button
      className="cell"
      index={index}
      // onMouseEnter={() => dispatchHoverMark({ type: 'onMouseEnter', payload: { index: index } })}
      // onMouseLeave={() => dispatchHoverMark({ type: 'onMouseLeave' })}
      value={cell}
    >
      {/* {(hoverMark.index === index && cell === ' ') ?
        <img src={hoverMark.mark === 'X' ? xIconOutline : oIconOutline} alt="Mark" /> :
        <></>
      } */}
      {cell === 'X' ? <img src={iconX} alt="X" /> : <></>}
      {cell === 'O' ? <img src={iconO} alt="O" /> : <></>}
    </button>
  )
}

export default GameSquare;