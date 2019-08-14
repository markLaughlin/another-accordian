import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      currentNumber: 0,
      seenOne: false,
      seenTwo: false,
      seenThree: false,
      quotes: ["Inspirational message to come...",
      "The harder you worker, the luckier you get!",
              "The darkest hour is before the dawn.",
              "You can do it if you try!"]
    }
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  handleClickOne(){
    console.log("handleClickOne method ran")
    this.setState({currentNumber: 1})
    this.setState({seenOne: true})
    console.log("this.state.seenOne: ")
    console.log(this.state.seenOne)
  }

  handleClickTwo(){
    console.log("handleClickTwo method ran")
    this.setState({currentNumber: 2})
    this.setState({seenTwo: true})
    console.log("this.state.seenTwo: ")
    console.log(this.state.seenTwo)
  }

  handleClickThree(){
    console.log("handleClickThree method ran")
    this.setState({currentNumber: 3})
    this.setState({seenThree: true})
    console.log("this.state.seenThree: ")
    console.log(this.state.seenThree)
  }

  render(){
    console.log("render method of Mark's App component ran")
    console.log("this.state.seenOne: ")
    console.log(this.state.seenOne)
    console.log("this.state.seenTwo: ")
    console.log(this.state.seenTwo)
    console.log("this.state.seenThree: ")
    console.log(this.state.seenThree)

    let seenAll = (this.state.seenOne === true && this.state.seenTwo ===true && this.state.seenThree === true) ? 
    <p>You've seen all three messages!</p> : 
    ""
 
    return (
      <div className="App">
       <h1>Hello from the App component of Mark's Accordian App</h1>
       <button onClick={this.handleClickOne}>Click for Inspirational Message One</button>
       <br/>
       <br/>


       <button onClick={this.handleClickTwo}>Click for Inspirational Message Two</button>
       <br/>
       <br/>


       <button onClick={this.handleClickThree}> Click for Inspirational Message Three</button>
       <br/>
       <br/>

       {this.state.quotes[this.state.currentNumber]}
       {seenAll}
      </div>
    );
  }
}

export default App;
