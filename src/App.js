//import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtitles -dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtitles -light";
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-3">
      
        <Routes>
          <Route exact path='/about' element={<About/>}>          
          </Route>
          <Route exact path="/" element={<Textform
                showAlert={showAlert}
                heading="Enter text here to analyze"
                mode={mode}
              />        }>
          
          </Route>
        </Routes>
      
      </div>
      </Router>
    </>
  );
}

export default App;
