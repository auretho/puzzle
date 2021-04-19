import { useHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import './style.scss';

const Input = ({input, handleInputChange, addLevelToArray}) => {
  let history = useHistory();
  const handleChange = (evt) => {
    handleInputChange(evt.target.value);
  }

  const handleInputSubmit = (evt) => {
    evt.preventDefault();
    if(input.toLowerCase() === 'trois'){
      history.push('/puzzle/quatre');
      handleInputChange('');
      addLevelToArray("three")
    }
  }

  return(
    <div className="input">
      <Icon name="arrow alternate circle down outline" className="input-icon"  size="large"/>
      <form onSubmit={handleInputSubmit}>
        <input type="text" 
              className="input-text"
              value={input}
              onChange={handleChange}/>
      </form>
    </div>
)}

export default Input;
