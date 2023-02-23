import React from 'react'

function Click() {
    const CopyText =()=>{
        document.write("khankir pola text copy korli kn")
    }
    const onCutText =()=>{
        console.log("Text cut secces")
    }
    const onPasteText =()=>{
        alert("Text Past")
    }
  return (
    <div>
        <p onCopy={CopyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sint.
        </p>
        <h1 onCut={onCutText} >
            this is clibord page you have cut some text from hear
        </h1>
        <input type="text" onPaste={onPasteText} placeholder="put your text here" />
    </div>
  )
}

export default Click