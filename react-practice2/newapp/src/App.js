import React from 'react'

export default class App extends React.Component{
  constructor(props){
    super(props);
    console.log('Constructor called');

    this.state=({
      id:1,
      name:'Neelam',
      skill:'MERN STACK',
      count:0,
    })
  }
  demo1 =()=>{
    alert('Hello world!!!!');
  }
  demo2=()=>{
    alert('Hello events in react using Arrow fuction')
  }
  // -----------update count----------
  updatecount = () =>{
    this.setState({
      count: this.state.count+1,
    })
  }
  // -----------------reduce count--------

  // reducecount = () =>{
  //   this.setState({
  //     count: this.state.count-1,
  //   })
  // }
  // ----------------------
  updatestate = ()=>{
    this.setState({
      name:'Selena',
      skill:'music',
      package:'1 cr',
    })
  }
  render(){
    console.log(this.state);
    console.log(this.props);
    // normal function
    const Demo4 = ()=>{
      alert("Event in class component using normal function!!")
    }
    return (
      <>
        <h1>welcome to the statefull class component.</h1>
        
        <button onClick={()=>this.updatestate()}>updatestate</button>

        <h1>
          your name is <mark>{this.state.name}</mark> your skill is{" "}
          <mark>{this.state.skill}</mark>
        </h1>

        <h1>Your count is {this.state.count}</h1>
        <button
          onClick={() => {
            this.updatecount();
          }}
        >
          update count
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Reduce Count
        </button>
        <button onClick={this.demo1}>Click Here</button>
        <button onClick={this.demo2}>Click Here</button>
        <button
          onClick={() => {
            alert("Hello React events");
          }}
        >
          Click Here
        </button>
        <button onClick={Demo4}>Click me Normal Function</button>
      </>
    );
  }



}

