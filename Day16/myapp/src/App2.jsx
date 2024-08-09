import React, { Component } from 'react'

export default class App2 extends Component {
    constructor(){
        super();
        console.log('constructor called!!!');

        this.state = ({
            empName: 'Neel',
            empRoll: 'MERN',
            empEmail: 'neel@gmail.com',
        })
    }
    static getDrivedStateFromprops(props,state){
        console.log('getDriveStateFromprops')
        return null;
    }
    componentDidMount(){
        console.log('component did mount is called!!')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('should componet update method is called!!');
        console.log(nextState);
        return true;
    }
    getSnapshotBeforeUpdate(preProps,preState){
        console.log(preState);
        console.log('getsnapShotbeforemethod called!!');
        return null;
    }
    componentDidUpdate(preProps,preState,snapshot){
        console.log('component did update method will called!!')

        if(this.state.empEmail !== preState.empEmail){
            console.log(this.state.empEmail)
        }
        return true;
    }


  render() {
    console.log('render method called!!!')
    return (
      <div>
        <center>
            <h1>react life cycle updating Phase!!</h1>
            <hr />
            <h1>Your Email is {this.state.empEmail}</h1>

            <button onClick={()=> this.setState({empEmail:'neelamkoli@gmail.com'})}>Update data</button>
        </center>
        
      </div>
    )
  }
}
