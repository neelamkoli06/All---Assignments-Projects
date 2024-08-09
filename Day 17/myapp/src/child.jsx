import React, { Component } from 'react'

export default class child extends Component {

    componentWillUnmount(){
        console.log('componentWillUnmount method is called!!')
    }
  render() {
    return (
      <div>
        <h1>child component 1</h1>
        <h1>child component 2</h1>
      </div>
    )
  }
}
