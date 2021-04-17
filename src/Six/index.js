import React from 'react'; 
import './style.scss';

const Six = ({multiplication}) => {

  const handleSixCircle = (evt) => {
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
    <div className="six">
      <div className="six-container">
        {multiplication.map((el, id) => {
          return(
            <div className="six-wrapper" onClick={handleSixCircle} key={id} id={`wrapper-${id}`}>
              <div className="six-circle six-circle-item grey-circle" 
                  style={{position: `${el.pos}`, top: `${el.top}`, left: `${el.left}`}}>{el.item}</div>
              <div className="six-circle three-circle-empty grey-circle" style={{position: `${el.pos}`, top: `${el.top}`, left: `${el.left}`}} id={id}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Six;
