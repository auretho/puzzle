import React from 'react'; 
import './style.css';
import {Switch, Route} from 'react-router-dom';
import Welcome from '../Welcome';
import One from '../One';
import Two from '../Two';
import Three from '../Three';

class App extends React.Component {  
  state = {
    letters: ['t', 'r', 'o', 'i', 's']
  };

  
  render () {
    return <div className="App">
      <Switch>
        
        <Route exact path="/" component={Welcome}/>
        <Route path="/un" component={One}/>
        <Route path="/deux" component={Two}/>
        <Route path="/trois">
          <Three letters={this.state.letters}/>
        </Route> 

      </Switch>
    </div>
  };
}

export default App;
