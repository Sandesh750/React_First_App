import './App.css'
import Navbar from './componants/Navbar'
import TextArea from './componants/TextBox'
import React, { useState } from 'react';
import Alert from './componants/Alert'
import About from './componants/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#273e99';
      showAlert("Dark Mode", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About TextUtils" showAlert={showAlert} toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/about' element={<About mode={mode} toggleMode={toggleMode} />} ></Route>
          <Route exact path='/' element={<TextArea mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} ></Route>
        </Routes>
      </Router>
    </>
  );
}
