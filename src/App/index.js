import React from 'react'; 
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import {Switch, Route} from 'react-router-dom';
import Welcome from '../Welcome';
import Input from '../Input';
import One from '../One';
import Two from '../Two';
import Three from '../Three';

class App extends React.Component {  
  state = {
    letters: ['t', 'r', 'o', 'i', 's'],
    input: '',
  };

  handleInputChange = (text) => {
    this.setState({
      input: text,
    });
  }
  
  render () {
    return <div className="app">
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/un" component={One}/>
        <Route path="/deux" component={Two}/>
        <Route path="/trois">
          <Three letters={this.state.letters}/>
          <Input input={this.state.input} handleInputChange={this.handleInputChange}/>
        </Route> 
      </Switch>

    </div>
  };
}

export default App;
