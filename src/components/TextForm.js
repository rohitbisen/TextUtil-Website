import React, { useState } from 'react'
import './Textform.css';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleLoClick = (event) => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");

    }
    const handleRevClick = (event) => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text has been reversed", "success");

    }
    const handleClrClick = (event) => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared !", "success");
    }

    const handleCopy = () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");

    }

    const handleExtraSpace= () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");

    }


    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode ===  'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="form-group">
                    {/* <label for="myBox">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ===  'dark' ? 'grey' : 'white', 
                    color: props.mode ===  'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea >
                </div>
                <button className="btn btn primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn primary" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn primary" onClick={handleRevClick}>Reverse</button>
                <button className="btn btn primary" onClick={handleClrClick}>Clear Text</button>
                <button className="btn btn primary" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn primary" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode ===  'dark' ? 'white' : 'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>

    )
}
