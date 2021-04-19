import React from 'react'; 
import './style.scss';

const Nine = React.memo(({nine}) => {
  let letterArr= [];

  const handleRedCircleClick = (evt) => {
    const wrapperId = evt.target.parentElement.id.split('-')[1];
    const emptyCircle = document.querySelectorAll('.circle-empty');
    const emptyCircleArr = [].slice.call(emptyCircle);
    emptyCircleArr.map(el => {
      if(el.id === wrapperId){
        el.style.visibility = "hidden";
        evt.target.previousSibling.classList.add('item-animated')  
        return setTimeout(() => {
          evt.target.previousSibling.classList.remove('item-animated')  
        }, 500);    
      }
      else{
        return el.style.visibility = "";
      }
    })
  }

  const handleNineClick = (evt) => {
    handleRedCircleClick(evt)
    const letterShown = evt.target.previousSibling.textContent;
    letterArr.push(letterShown);

    if(letterArr[0] === "c" ){
    } else{
        letterArr = [];
        evt.target.previousSibling.style.backgroundColor = "rgba(255, 0, 0)";
        setTimeout(() => {
          evt.target.previousSibling.style.backgroundColor = "";
        }, 250);
    }

    if(letterArr[1] != null){
      if(letterArr[1] === "r"){
      } else{
        letterArr = [];
        evt.target.previousSibling.style.backgroundColor = "rgba(255, 0, 0)";
        setTimeout(() => {
          evt.target.previousSibling.style.backgroundColor = "";
        }, 250);
      }
    }

    if(letterArr[2] != null){
      if(letterArr[2] === "o"){
      } else{
        letterArr = [];
        evt.target.previousSibling.style.backgroundColor = "rgba(255, 0, 0)";
        setTimeout(() => {
          evt.target.previousSibling.style.backgroundColor = "";
        }, 250);
      }
    }

    if(letterArr[3] != null){
      if(letterArr[3] === "i"){
      } else{
        letterArr = [];
        evt.target.previousSibling.style.backgroundColor = "rgba(255, 0, 0)";
        setTimeout(() => {
          evt.target.previousSibling.style.backgroundColor = "";
        }, 250);
      }
    }

    if(letterArr[4] != null){
      if(letterArr[4] === "x"){
        evt.target.previousSibling.style.backgroundColor = "rgb(2, 160, 2)";
        setTimeout(() => {
          evt.target.previousSibling.style.backgroundColor = "";
        }, 250);
        letterArr = [];
      } else{
        letterArr = [];
        evt.target.previousSibling.style.backgroundColor = "rgba(255, 0, 0)";
        setTimeout(() => {
          evt.target.previousSibling.style.backgroundColor = "";
        }, 250);
      }
    }
  }

  return(
  <div className="nine full-container">
      {nine.map((el, id) => (
          <div className="nine-wrapper" onClick={handleNineClick} key={id} id={`wrapper-${id}`}>
            <div className="nine-circle six-circle-item grey-circle" 
                 style={{position: `${el.pos}`, top: `${el.top}`, left: `${el.left}`}}>{el.item}
            </div>
            <div className="nine-circle circle-empty grey-circle" 
                 style={{position: `${el.pos}`, top: `${el.top}`, left: `${el.left}`}} id={id}>
            </div>
          </div>
        )
      )}
  </div>
)})

export default Nine;
