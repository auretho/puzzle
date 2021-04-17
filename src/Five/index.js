import React from 'react'; 
import _ from 'lodash';
import {useHistory} from 'react-router-dom';
import './style.scss';

const Five = () => {
  const history = useHistory();
  const circlesArr = [];

  const handleCircleClick = (evt) => {
    const target = evt.target;
    const previousSibling = evt.target.previousSibling;
    const nextSibling = evt.target.nextSibling;

    // cercle avec un Previous & un Next 
    if(previousSibling != null && nextSibling != null){
      target.style.backgroundColor = "skyblue";
      previousSibling.style.backgroundColor = "skyblue";
      nextSibling.style.backgroundColor = "skyblue";

      if(!circlesArr.includes(target)){
        circlesArr.push(target);
      } else{
        _.remove(circlesArr, e => e === target)
          target.style.backgroundColor = "";
        } 
      
      if(!circlesArr.includes(previousSibling)){
        circlesArr.push(previousSibling);
      } else{
        _.remove(circlesArr, e => e === previousSibling)
          previousSibling.style.backgroundColor = "";
        } 
      
      if(!circlesArr.includes(nextSibling)){
        circlesArr.push(nextSibling);
      } else{
        _.remove(circlesArr, e => e === nextSibling)
          nextSibling.style.backgroundColor = "";
        } 
    }
    
    // cercle avec seulement un Previous
    else if(previousSibling && nextSibling === null){
      target.style.backgroundColor = "skyblue";
      previousSibling.style.backgroundColor = "skyblue";

      if(!circlesArr.includes(target)){
        circlesArr.push(target);
      } else{
        _.remove(circlesArr, e => e === target)
          target.style.backgroundColor = "";
        } 
      
      if(!circlesArr.includes(previousSibling)){
        circlesArr.push(previousSibling);
      } else{
        _.remove(circlesArr, e => e === previousSibling)
          previousSibling.style.backgroundColor = "";
        } 
    }
    
    // cercle avec seulement un Next
    else{
      target.style.backgroundColor = "skyblue";
      nextSibling.style.backgroundColor = "skyblue";
      if(!circlesArr.includes(target)){
        circlesArr.push(target);
      } else{
        _.remove(circlesArr, e => e === target)
          target.style.backgroundColor = "";
        } 
      
      if(!circlesArr.includes(nextSibling)){
        circlesArr.push(nextSibling);
      } else{
        _.remove(circlesArr, e => e === nextSibling)
          nextSibling.style.backgroundColor = "";
        } 
    }
    if(circlesArr.length === 5){
      return history.push('/six');
    }
  }

  return(
    <div className="five">
      <div className="grey-circle five-circle" onClick={handleCircleClick}></div>
      <div className="grey-circle five-circle" onClick={handleCircleClick}></div>
      <div className="grey-circle five-circle" onClick={handleCircleClick}></div>
      <div className="grey-circle five-circle" onClick={handleCircleClick}></div>
      <div className="grey-circle five-circle" onClick={handleCircleClick}></div>
    </div>
  )
}

export default Five;
