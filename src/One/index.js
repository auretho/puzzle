import './style.scss';
import {Link} from 'react-router-dom';

const One = ({addLevelToArray}) => (
    <div className="one">
      <Link to="/puzzle/deux" className="grey-circle one-circle" onClick={() => addLevelToArray('one')}/>
    </div>
)

export default One;
