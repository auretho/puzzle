import React from 'react'; 
import './style.scss';

const Three = ({letters, handleFadingCircleClick}) => (
  <div className="three">
    <div className="three-container">
      {letters.map((letter, id) => (
      <div className="three-wrapper" onClick={handleFadingCircleClick} key={id} id={`wrapper-${id}`}>
        <div className="three-circle three-circle-letter grey-circle" >{letter}</div>
        <div className="three-circle circle-empty grey-circle" id={id}></div>
      </div>
      ))}
    </div>
  </div>
)


export default Three;
