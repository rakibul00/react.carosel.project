import React from 'react'

function Fokas() {
    const FokasText =()=>{
        console.log("You have foksass")
    }
    const BloarText =()=>{
        console.log("You have blur on input ")
    }
  return (
    <div> <br/>
        <h1>focus event</h1>
        <input type="text" onFocus={FokasText} />
        <input type="text" onBlur={BloarText} />
    </div>
  )
}

export default Fokas