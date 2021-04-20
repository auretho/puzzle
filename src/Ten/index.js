import React, {useEffect, useRef} from 'react'; 
import {useHistory} from 'react-router-dom';
import './style.scss';

const Ten = React.memo(({addLevelToArray, stopTimer}) => {
  const history = useHistory();
  const finalDiv = useRef();
  const mobile = window.innerWidth <= 480 ? true : false; 
  
  useEffect(() => {
    finalDiv.current.focus();
  })


  const handleTenKeyPress = (evt) => {
    if(evt.key === "x"){
      history.push('/onze');
      addLevelToArray('ten');
      stopTimer();
    }
  }

  const handleMobileTenClick = () => {
    history.push('/onze');
    addLevelToArray('ten');
    stopTimer();
  }

  return (
  <div className="ten full-container" ref={finalDiv} onKeyPressCapture={handleTenKeyPress} tabIndex="0" onClick={mobile ? handleMobileTenClick : null}>
      X
  </div>
)})

export default Ten;
