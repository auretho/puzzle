import React from 'react'; 
import './style.scss';

const Three = ({letters}) => {
  const handleTwoCircles = (evt) => {
    const wrapperId = evt.target.parentElement.id.split('-')[1];
    const emptyCircle = document.querySelectorAll('.three-circle-empty');
    const emptyCircleArr = [].slice.call(emptyCircle);
    emptyCircleArr.map(el => {
      if(el.id === wrapperId){
        el.style.visibility = "hidden";
        evt.target.previousSibling.classList.add('three-circle-letter-animated')  
        return setTimeout(() => {
          evt.target.previousSibling.classList.remove('three-circle-letter-animated')  
        }, 500);    
      }
      else{
        return el.style.visibility = "";
      }
    })
  }

  return(
    <div className="three">
      <div className="three-container">
        {letters.map((letter, id) => (
        <div className="three-wrapper" onClick={handleTwoCircles} key={id} id={`wrapper-${id}`}>
          <div className="three-circle three-circle-letter grey-circle" >{letter}</div>
          <div className="three-circle three-circle-empty grey-circle" id={id}></div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Three;
