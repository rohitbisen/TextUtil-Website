import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const [Redclr, setRedClr] = useState('light');

  const redmode = () => {
    if (Redclr === 'light') {
      setRedClr('dark');
      document.body.style.backgroundColor = '#8B0000';
      showAlert("Red mode has been enabled.", "success");

    }
    else {
      setRedClr('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");

    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "success");
      document.title = 'TextUtils - Dakmode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';

      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now !!!!';

      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      document.title = 'TextUtils - Lightmode';


    }

  }


  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} Redclr={Redclr} redmode={redmode} />
      <Alert alert={alert} />


      <div className="container my-3">

        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} Redclr={Redclr} />

      </div>


    </>
  );
}

export default App;
