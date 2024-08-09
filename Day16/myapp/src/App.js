import React, { Component } from 'react'

export default class App extends Component {
  // 1
  constructor(props){
    super(props)
    this.state = ({
      name:'Ninja-Hathodi',
      skill:'Ninja-Techniques',
      color:'Blue',

    })
  }
  // static method

  static getDrivedStateFromProps(props,state){
    console.log('getDriveStateFromProps Method is called!!');
    console.log(state);
    console.log(props);

    return null;
  }
  // ---------
  componentDidMount(){
    console.log('componentDidMount method called!!');

    setTimeout(()=>{
      this.setState({
        color:'pink'
      })
    },3000)

    // --------
    setTimeout(()=>{
      this.setState({
        color:'magenta'
      })
    },5000)
  }


  render() {
    console.log('render method called!!')
    return (
      <div>
        <h1 style={{color:this.state.color}}> React class Component mounting phase!!</h1>

        <button onClick={()=>this.setState({name:'Amara',color:'green'})}>Update state</button>
        <h1>Name:{this.state.name}</h1>
      
        
      </div>
    )
  }
}
