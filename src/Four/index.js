import React from 'react'; 
import {useHistory} from 'react-router-dom';
import './style.scss';

const Four = () => {
  const history = useHistory();
  const circlesArr = [];

  const handleCircleClick = (evt) => {
    const previousSibling = evt.target.previousSibling;
    const nextSibling = evt.target.nextSibling;

    if(previousSibling != null && nextSibling != null){
      previousSibling.style.backgroundColor = "skyblue";
      if(!circlesArr.includes(previousSibling)){
        circlesArr.push(previousSibling);
      }
      nextSibling.style.backgroundColor = "skyblue";
      if(!circlesArr.includes(nextSibling)){
        circlesArr.push(nextSibling);
      }      
    }
    else if(previousSibling && nextSibling === null){
      previousSibling.style.backgroundColor = "skyblue";
      if(!circlesArr.includes(previousSibling)){
        circlesArr.push(previousSibling);
      }    
    }
    else{
      nextSibling.style.backgroundColor = "skyblue";
      if(!circlesArr.includes(nextSibling)){
        circlesArr.push(nextSibling);
      }    
    }
    if(circlesArr.length === 5){
      setTimeout(() => {
        return history.push('/cinq')
      }, 500);
    }
  }

  return(
    <div className="four">
      <div className="grey-circle four-circle" onClick={handleCircleClick}></div>
      <div className="grey-circle four-circle" onClick={handleCircleClick}></div>
      <div className="grey-circle four-circle" onClick={handleCircleClick}></div>
      <div className="grey-circle four-circle" onClick={handleCircleClick}></div>
      <div className="grey-circle four-circle" onClick={handleCircleClick}></div>
    </div>
  )
}

export default Four;
