import React, { Component } from 'react'
import child from './child'

export default class App extends Component {
  //Method -  1 
  constructor(){
    console.log('constructor called!!')
    super()
    this.state=({
      name:'Neelam',

      show: true,
    })
  }
  // method - 2

  static getDrivedStateFromProps(props,state){
    console.log('getDriveStateFromProps method is called !!');
    return null
  }

  UnmountComp = () =>{
    this.setState({
      show :!this.state.show,
    })
  }



// Method - 3 
  render() {
    console.log('render method is called!!!')

    return (
      <div>
        <center>
          <button
            onClick={() => {
              this.setState({ name: "sandhya" });
            }}
          >
            update State:-{this.state.name}
          </button>
          <h1>React Life Cycle Unmounting Phase!!!</h1>

          <button
            onClick={() => {
              this.UnmountComp();
            }}
          >
            unmount component
          </button>
          {this.state.show ? <child /> : <p>Component deleted </p>}
        </center>
      </div>
    );
  }
}
