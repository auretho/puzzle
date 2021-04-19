import React from 'react'; 
import {Icon} from 'semantic-ui-react';
import './style.scss';

const Eleven = ({timer}) => (
  <div className="eleven full-container">
      <h1>Bravo, tu as complété les 10 niveaux!</h1>
      <h1>Ton score: {timer}</h1>
      <Icon name="chess" size="big" className="eleven-icon"/>
  </div>
)

export default Eleven;
