import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import HomePage from "./components/HomePage.js";

function App() {
  return (
    <div className="container-fluid App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/post-login" element={<HomePage />} />
        {/* <Route path="/downloads" element={<Download />} />
         <Route path="/logout" element={<Logout />} />
         <Route path="/calendar" element={<Calendar />}/> */}
      </Routes>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
