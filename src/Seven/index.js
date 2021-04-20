import React from 'react'; 
import {useHistory} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import './style.scss';

const Seven = React.memo(({seven, handleFadingCircleClick, addLevelToArray}) => {
  const history = useHistory();
  const wrapperArr = [];

  const handleSevenClick = (evt) => {
    handleFadingCircleClick(evt);
    evt.target.parentElement.nextSibling.classList.remove('seven-hidden');
    evt.target.parentElement.classList.add('seven-hidden');
    wrapperArr.push(evt.target.parentElement);
    if(wrapperArr.length === 7){
      const icon = document.querySelector('.seven-icon');
      setTimeout(() => {
        icon.classList.remove('seven-icon-hidden');
      }, 500);
    }
  }

  const handleIconClick = () => {
    addLevelToArray('seven');
    history.push('/huit');
  }

  return(
    <div className="seven">
      <div className="seven-icon seven-icon-hidden">
        <Icon name="arrow alternate circle right outline"  size="large" onClick={handleIconClick}/>
      </div>
      <div className="seven-container">
        {seven.reverse().map((el, id) => {
          return(
            <div key={id} className="seven-wrapper" >
              <div className="seven-wrapper-one" id={`wrapper-${id}`}>
                <div className="seven-circle three-circle-letter grey-circle">{el}</div>
                <div className="seven-circle circle-empty grey-circle" id={id} onClick={handleSevenClick}></div>
              </div>
              <div className="seven-wrapper-two seven-hidden" id={`wrapper-${id}`}>
                <div className="seven-circle three-circle-letter seven-reversed grey-circle" onClick={handleFadingCircleClick} >{el}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default Seven;
