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
import Eight from '../Eight';
import InputEight from '../Eight/Input';
import Nine from '../Nine';
import InputNine from '../Nine/Input';
import Ten from '../Ten';
import Eleven from '../Eleven';



class App extends React.Component {  
  state = {
    levels: [],
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
    seven: ['m', 'e', 'm', 'o', 'i', 'r', 'e'],
    nine: [
      {
        item: "c", 
        pos: 'absolute',
        top: '50px',
        left: '620px'
      },
      {
        item: "r", 
        pos: 'absolute',
        top: '320px',
        left: '380px'
      },
      {
        item: "o", 
        pos: 'absolute',
        top: '180px',
        left: '950px'
      },
      {
        item: "i", 
        pos: 'absolute',
        top: '300px',
        left: '840px'
      },
      {
        item: "x", 
        pos: 'absolute',
        top: '220px',
        left: '550px'
      },
    ],
    timer: '',
    seconds: 0,
  }

  addLevelToArray = (newLevel) => {
    this.state.levels.push(newLevel) // A REVOIR
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

  updateTimer = () => {
    const { seconds } = this.state;
    this.setState({ seconds: seconds + 1 });
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    if(hour < 10){
      hour = "0" + hour;
    }
    if(min < 10){
      min = "0" + min;
    }
    if(secs < 10){
      secs = "0" + secs;
    }
    const correctTime = seconds < 3600 ? min + ':' + secs : hour + ":" + min + ':' + secs
    this.setState({ timer: correctTime });
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(this.updateTimer, 1000);
  }

  render () {

    return <div className="app">
        <Link to="/">
          <Icon name="chess knight" size="big" className="home-icon" color="grey"/>
        </Link>

      <Switch>
        <Route exact path="/"><Welcome addLevelToArray={this.addLevelToArray} /></Route>

        <Route path='/un'><One addLevelToArray={this.addLevelToArray}/></Route>        
        
        <Route path="/deux"><Two addLevelToArray={this.addLevelToArray}/></Route>        
        
        <Route path="/trois">
          <Three letters={this.state.letters} handleFadingCircleClick={this.handleFadingCircleClick}/>
          <InputThree input={this.state.input} handleInputChange={this.handleInputChange} addLevelToArray={this.addLevelToArray}/>
        </Route> 
        
        <Route path="/quatre"><Four addLevelToArray={this.addLevelToArray}/></Route>
        
        <Route path="/cinq"><Five addLevelToArray={this.addLevelToArray}/></Route>        
        
        <Route path="/six">
          <Six six={this.state.six} handleFadingCircleClick={this.handleFadingCircleClick}/>
          <InputSix input={this.state.input} handleInputChange={this.handleInputChange} addLevelToArray={this.addLevelToArray}/>
        </Route>

        <Route path="/sept"><Seven seven={this.state.seven} handleFadingCircleClick={this.handleFadingCircleClick} addLevelToArray={this.addLevelToArray}/></Route>
        
        <Route path="/huit">
          <Eight />
          <InputEight input={this.state.input} handleInputChange={this.handleInputChange} addLevelToArray={this.addLevelToArray}/>
        </Route>
        
        <Route path="/neuf">
          <Nine nine={this.state.nine}/>
          <InputNine input={this.state.input} handleInputChange={this.handleInputChange} addLevelToArray={this.addLevelToArray}/>
        </Route> 

        <Route path="/dix">
          <Ten addLevelToArray={this.addLevelToArray} stopTimer={this.stopTimer}/>
        </Route>    

        <Route path="/onze">
          <Eleven timer={this.state.timer}/>
        </Route>  
      </Switch>

    </div>
  };
}

export default App;
