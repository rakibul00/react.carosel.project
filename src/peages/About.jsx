import React, {Component} from "react";
// const name = "rakib"
class About extends Component{
   state ={
    name:"rakib",
    age:19,
    prof4:"font end devloper"
  }
  changeValue(a){
    this.setState(
      {
        prof4:"allah r banda"

      }
    )
  }
  changeMind = this.changeValue.bind(this, this.prof4)
  render(){
    return (
      <>
      {/* <h1> {"my name is "+ this.state.name + "and my age is "+ this.state.age + "and my profation is" + this.state.prof
        } </h1> */}
        <p>
          
          my profation is {this.state.a
          }
          
        </p>
        <button oneclick={this.changeMind} >change value</button>
      </>

    )
  }
}

export default About;