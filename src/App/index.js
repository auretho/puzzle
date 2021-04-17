import React from 'react'; 
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import {Icon} from 'semantic-ui-react';
import {Link, Switch, Route} from 'react-router-dom';
import Welcome from '../Welcome';
import One from '../One';
import Two from '../Two';
import Three from '../Three';
import InputThree from '../Three/Input';
import Four from '../Four';
import Five from '../Five';
import Six from '../Six';
import InputSix from '../Six/Input';
import Seven from '../Seven';



class App extends React.Component {  
  state = {
    input: '',
    letters: ['t', 'r', 'o', 'i', 's'],
    six: [
      {
        item: 5, 
        pos: 'absolute',
        top: '50px',
        left: '420px'
      },
      {
        item: "x", 
        pos: 'absolute',
        top: '320px',
        left: '240px'
      },
      {
        item: 4, 
        pos: 'absolute',
        top: '180px',
        left: '750px'
      },
    ],
    seven: ['m', 'e', 'm', 'o', 'i', 'r', 'e']
  }

  handleInputChange = (text) => {
    this.setState({
      input: text,
    });
  }

  handleFadingCircleClick = (evt) => {
    const wrapperId = evt.target.parentElement.id.split('-')[1];
    const emptyCircle = document.querySelectorAll('.circle-empty');
    const emptyCircleArr = [].slice.call(emptyCircle);
    emptyCircleArr.map(el => {
      if(el.id === wrapperId){
        el.style.visibility = "hidden";
        evt.target.previousSibling.classList.add('item-animated')  
        return setTimeout(() => {
          evt.target.previousSibling.classList.remove('item-animated')  
        }, 500);    
      }
      else{
        return el.style.visibility = "";
      }
    })
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
          <Three letters={this.state.letters} handleFadingCircleClick={this.handleFadingCircleClick}/>
          <InputThree input={this.state.input} handleInputChange={this.handleInputChange}/>
        </Route> 
        <Route path="/quatre" component={Four}/>
        <Route path="/cinq" component={Five}/>
        <Route path="/six">
          <Six six={this.state.six} handleFadingCircleClick={this.handleFadingCircleClick}/>
          <InputSix input={this.state.input} handleInputChange={this.handleInputChange}/>
        </Route>
        <Route path="/sept">
          <Seven seven={this.state.seven} handleFadingCircleClick={this.handleFadingCircleClick}/>
        </Route>
      </Switch>

    </div>
  };
}

export default App;
