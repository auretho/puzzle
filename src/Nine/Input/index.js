import { useHistory } from 'react-router-dom';
import './style.scss';

const Input = ({input, handleInputChange, addLevelToArray}) => {
  let history = useHistory();
  const handleChange = (evt) => {
    handleInputChange(evt.target.value);
  }

  const handleInputSubmit = (evt) => {
    evt.preventDefault();
    if(input.toLowerCase() === "croix"){
      addLevelToArray('nine')
      history.push('/puzzle/dix');
      handleInputChange('');
    }
  }

  return(
    <div className="input">
      <form onSubmit={handleInputSubmit}>
        <input type="text" 
              className="input-text"
              value={input}
              onChange={handleChange}/>
      </form>
    </div>
)}

export default Input;
