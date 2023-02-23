import React, { Component } from 'react';

 class Try extends Component {
    state ={
        name:"rakib",
        age:19,
    }
  render() {
    return (
      <div>
     <h1>{"the name is " + this.state.name+ " the age is" +this.state.age}</h1>
      </div>
    )
  }
}

export default Try;