import React from 'react'; 
import { useHistory } from 'react-router-dom';
import './style.scss';

const Two = () => {

  let history = useHistory();
  const resArr = [];

  const handleTwoCircles = (evt) => {
    const {id} = evt.target;
    const circleSelected = document.querySelectorAll('.two-circle');
    const circlesArr = [].slice.call(circleSelected);
    
    circlesArr.map(el => {
      if(el.id === id){
        el.classList.add('two-color');
        return resArr.push(el)
      }
      return el
    })

    if(resArr.length === 3){
      history.push('/trois')
    }
  }
  
  return(
    <div className="two">
      <div className="two-container">
        <div className="two-circle grey-circle" id="1" onClick={handleTwoCircles}/>
        <div className="two-circle grey-circle" id="2" onClick={handleTwoCircles}/>
        <div className="two-circle grey-circle" id="3" onClick={handleTwoCircles}/>
      </div>
    </div>
  )
}

export default Two;
