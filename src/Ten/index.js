import React, {useEffect, useRef} from 'react'; 
import {useHistory} from 'react-router-dom';
import './style.scss';

const Ten = React.memo(({addLevelToArray, stopTimer}) => {
  const history = useHistory();
  const finalDiv = useRef();
  
  useEffect(() => {
    finalDiv.current.focus();
  })


  const handleTenKeyPress = (evt) => {
    if(evt.key === "x"){
      history.push('/puzzle/onze');
      addLevelToArray('ten');
      stopTimer();
    }
  }

  return (
  <div className="ten full-container" ref={finalDiv} onKeyPressCapture={handleTenKeyPress} tabIndex="0">
      X
  </div>
)})

export default Ten;
