import React,{useState} from "react";

export default function Textform(props) {
    const[text,setText]=useState('');

    const handleOnChange=(event)=>{
        console.log('on Change');
        setText(event.target.value);
    }
   const handleUpClick=()=>{
        console.log('on clicked'+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }
    const handleLoClick=()=>{
      console.log('on clicked'+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to lowercase','success');
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert('text has been clear','success');
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('extra space has been removed','success');
  }

  const handleCopy=()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('text has been copied','success');
  }
  return (
    <>
    <div className="container" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">      
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008*text.split(' ').length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text in above textboz to preview it here'}</p>
      </div>
    </>
  );
}
