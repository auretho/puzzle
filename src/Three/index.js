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
        setTimeout(() => {
          evt.target.previousSibling.classList.remove('three-circle-letter-animated')  
        }, 500);    
      }
      else{
        el.style.visibility = "";
      }
    })
  }

  return(
    <div className="three">
      <div className="three-container">
        {letters.map((letter, id) => (
        <div className="three-wrapper" onClick={handleTwoCircles} key={id} id={`wrapper-${id}`}>
          <div className="three-circle three-circle-letter" >{letter}</div>
          <div className="three-circle three-circle-empty" id={id}></div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Three;
