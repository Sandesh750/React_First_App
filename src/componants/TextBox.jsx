import React, { useState } from "react";

function TextArea(props) {

  const upper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase", "Success");
  }

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase", "Success");
  }

  const capitalCase = () => {
    let arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    props.showAlert("Capitalised", "Success");
    setText(arr.join(" "));
  }

  const clearText = () => {
    setText("");
    props.showAlert("Text Clear", "Success");
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "Success");

  }

  const removeSpace = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Text Removed", "Success");
  }

  const change = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
        <h1 className="my-3">Enter Your Text here</h1>
        <div className="mb-3">
          <textarea className="form-control" rows="8" value={text} onChange={change} style={{ backgroundColor: props.mode === 'dark' ? '#505384' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} ></textarea>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={upper} >UPPERCASE</button>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={lowerCase} >lovercase</button>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={capitalCase} >Capitalised</button>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={copyText} >Copy Text</button>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={removeSpace} >Remove Extra Spaces</button>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={clearText} >Clear</button>
        </div>
      </div >
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summery</h2>
        <h6>world and Character in Text</h6>
        <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} worlds And {text.length} Characters.</p>
        <h6>Time To Read</h6>
        <p>{0.008 * text.split('').filter((ele) => { return ele.length !== 0 }).length} Minuts to Read</p>
        <h6>Text Preview</h6>
        <p>{text.length > 0 ? text : "Enter anything in above to preview it here"}</p>
      </div>
    </>
  );
}
export default TextArea;
