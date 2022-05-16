import { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : "Hi",
      textNum : "too short"
    };
  }

  inputHandler = (event) => {
    this.setState({
      text : event.target.value
    });

    if(event.target.value.length < 5){
      this.setState({
        textNum : "too short"
      })
    } else{
      this.setState({
        textNum : "long enough"
      })
    }
  }

  deleteHandler = (num) => {
    let temp = "";
    temp = this.state.text.split("").filter((_, index) => {
      return index != num;
    });
    this.setState({
      text : temp.join("")
    })

  }

  render() {
    return (
      <div className='App'>
        <Input 
          onChange={this.inputHandler} 
          text={this.state.text}
          textNum={this.state.textNum}
          deleteHandler={this.deleteHandler}
        />
      </div>
    )
  }
}

export default App;
