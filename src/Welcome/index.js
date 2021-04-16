import './style.scss';
import {Link} from 'react-router-dom';

const Welcome = () => (
    <div className="welcome">
      <h1 className="welcome-title">Bienvenue</h1>
      <Link to="/un" className="welcome-circle"/>
    </div>
)

export default Welcome;
