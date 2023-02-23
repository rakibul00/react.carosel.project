import React, { Component } from 'react'
import Fetter from './Fetter'

export default class WelcomeAdmin extends Component {
    constructor(props) {
        super(props)
        this.state={
            yourAge:false,
        }
    }
     render() {
        let ami
        if(this.state.yourAge){
            ami= "welcome to my websait"
        }
        else{
            ami =<Fetter/>
        }
        return (
        <div>{ami}</div>
        )
    }
}


