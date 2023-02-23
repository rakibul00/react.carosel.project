import React from 'react'
import Button from "react-bootstrap/Button"

function ReactBootstap() {
  return (
    <div>
        <button className='btn btn-warning' > Bootstap batton </button>
        <Button style={{color:'black',borderRadius:"20%",margin:"10%",padding:"10%"}} >
            hi rakib
        </Button>
        <button type="button" class="btn btn-success">Success</button>
    </div>
  )
}

export default ReactBootstap