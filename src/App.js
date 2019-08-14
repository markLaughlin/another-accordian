import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      message: "Inspirational message to come..."
    }
  }

  render(){
    return (
      <div className="App">
       <h1>Hello from the App component of the Accordian App</h1>
       <button>Click for Inspirational Message One</button>
       <br/>
       <br/>


       <button>Click for Inspirational Message Two</button>
       <br/>
       <br/>


       <button>Click for Inspirational Message Three</button>
       <br/>
       <br/>

       {this.state.message}

      </div>
    );
  }
}

export default App;
