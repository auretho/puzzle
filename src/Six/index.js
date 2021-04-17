import React from 'react'; 
import './style.scss';

const Six = ({six, handleFadingCircleClick}) => (
  <div className="six">
    <div className="six-container">
      {six.map((el, id) => (
          <div className="six-wrapper" onClick={handleFadingCircleClick} key={id} id={`wrapper-${id}`}>
            <div className="six-circle six-circle-item grey-circle" 
                style={{position: `${el.pos}`, top: `${el.top}`, left: `${el.left}`}}>{el.item}</div>
            <div className="six-circle circle-empty grey-circle" style={{position: `${el.pos}`, top: `${el.top}`, left: `${el.left}`}} id={id}></div>
          </div>
        )
      )}
    </div>
  </div>
)

export default Six;
