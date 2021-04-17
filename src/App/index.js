import React from 'react'; 
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import {Icon} from 'semantic-ui-react';
import {Link, Switch, Route} from 'react-router-dom';
import Welcome from '../Welcome';
import Input from '../Input';
import One from '../One';
import Two from '../Two';
import Three from '../Three';
import Four from '../Four';
import Five from '../Five';


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
        <Link to="/">
          <Icon name="chess knight" size="big" className="home-icon" color="grey"/>
        </Link>

      <Switch>

        <Route exact path="/" component={Welcome}/>
        <Route path="/un" component={One}/>
        <Route path="/deux" component={Two}/>
        <Route path="/trois">
          <Three letters={this.state.letters}/>
          <Input input={this.state.input} handleInputChange={this.handleInputChange}/>
        </Route> 
        <Route path="/quatre" component={Four}/>
        <Route path="/cinq" component={Five}/>

      </Switch>

    </div>
  };
}

export default App;
