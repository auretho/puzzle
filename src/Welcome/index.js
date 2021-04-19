import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

const Welcome = ({addLevelToArray}) => (
    <div className="welcome">
      <h1 className="welcome-title">Bienvenue</h1>
      <Link to="/puzzle/un" className="welcome-circle" onClick={() => addLevelToArray('un')}></Link>
    </div>
)

export default Welcome;
