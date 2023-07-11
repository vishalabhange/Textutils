
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if(mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark";
      //flash ->
      // setInterval(() => {
      //   document.title = "TextUtils";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils-Dark";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light";
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar mode={mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>

      {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
        {/* </Switch> */}
      

      </div>
    {/* </BrowserRouter> */}
      
    </>
  );
}

export default App;
