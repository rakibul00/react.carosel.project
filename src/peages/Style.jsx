import React from 'react'
 import "./Style.css"
import RakibStyle from "./rakib.module.css";
function Style() {
    const ElementOn = {
        color:"red", backgroundColor:"black", textAlign:"center",
         margin :"20%", 
         padding:"10%",
         borderRadius:"20px"
    };
  return (
    <div>
        <h1 style={ElementOn} >
            my first style componet
        </h1>
        <h2 className='rakib' >
            hello i am rakib and you
        </h2>
        <h2 className={RakibStyle.rakibb} >
            hi how are you kmn acho
        </h2>
    </div>
  )
}

export default Style