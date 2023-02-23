import React from 'react'

function Kyebord() {
    const onKeyDownText =()=>{
        alert("kye preadst")
    }
    const onKeyUpText =()=>{
        console.log("kye uped")
    }
  return (
    <div>
        <h1>
            Kyebord even 
        </h1>
        <input type="text"onKeyDown={onKeyDownText} />
        <input type="text"onKeyUp={onKeyUpText} />

    </div>
  )
}

export default Kyebord