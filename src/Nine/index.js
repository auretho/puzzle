import React from 'react'; 
import './style.scss';

const Nine = ({nine, handleFadingCircleClick}) => {
  let letterArr= [];

  const handleNineClick = (evt) => {
    handleFadingCircleClick(evt);
    const letterShown = evt.target.previousSibling.textContent;
    letterArr.push(letterShown);

    if(letterArr[0] === "c" ){
    } else{
      letterArr = [];
    }

    if(letterArr[1] != null){
      if(letterArr[1] === "r"){
      } else{
        letterArr = [];
      }
    }

    if(letterArr[2] != null){
      if(letterArr[2] === "o"){
      } else{
        letterArr = [];
      }
    }

    if(letterArr[3] != null){
      if(letterArr[3] === "i"){
      } else{
        letterArr = [];
      }
    }

    if(letterArr[4] != null){
      if(letterArr[4] === "x"){
        console.log('gagné ma soeur!!');
      } else{
        letterArr = [];
      }
    }
  }

  return(
  <div className="nine full-container">
      {nine.map((el, id) => (
          <div className="nine-wrapper" onClick={handleNineClick} key={id} id={`wrapper-${id}`}>
            <div className="nine-circle six-circle-item grey-circle" 
                style={{position: `${el.pos}`, top: `${el.top}`, left: `${el.left}`}}>{el.item}</div>
            <div className="nine-circle circle-empty grey-circle" style={{position: `${el.pos}`, top: `${el.top}`, left: `${el.left}`}} id={id}></div>
          </div>
        )
      )}
  </div>
)}

export default Nine;
