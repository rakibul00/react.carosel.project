import React, { Component } from 'react'

export default class Input extends Component {
  FromChange =(event)=> {
    console.log(event.target.name)
  }
  render() {
    return (
      <div className='continer' >
        <input type="text" name='myName' placeholder='my name' className='from-control' onChange={this.FromChange} />
        <input type="text" name='subscriber'placeholder='subscriber' className='from-control' onChange={this.FromChange} />
        <select name="category" onChange={this.FromChange} className="from-control" >
          <option value="programming">programming</option>
          <option value="funny">funny</option>
          option>
          <option value="entertenmint">entertenmint</option>
        </select>
        <input type="date" name='CretionData' onChange={this.FromChange} />
        <textarea name="about"  onChange={this.FromChange} placeholder='tell me a rakib' >
          
        </textarea>
        <h1>
          tomi ki jano 5 ar kto hoi.yes{5+5} hoy
        </h1>
        <h1>
          random number{Math.random()*100}
        </h1>
        
      </div>
    )
  }
}
