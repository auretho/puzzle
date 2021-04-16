import React from 'react'; 
import './style.css';
import {Switch, Route} from 'react-router-dom';
import Welcome from '../Welcome';
import One from '../One';
import Two from '../Two';
import Three from '../Three';

class App extends React.Component {  
  state = {
  };

  
  render () {
    return <div className="App">
      <Switch>
        
        <Route exact path="/" component={Welcome}/>
        <Route path="/un" component={One}/>
        <Route path="/deux" component={Two}/>
        <Route path="/trois" component={Three}/>

      </Switch>
    </div>
  };
}

export default App;
