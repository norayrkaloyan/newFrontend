import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import HomePage from "./components/HomePage.js";
import NewAddress from "./components/NewAddress";
import AddressBook from "./components/AddressBook";
import MyEntries from "./components/MyEntries";

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
        <Route path="/newaddress" element={<NewAddress />} />
        <Route path="/addressbook" element={<AddressBook />} />
        <Route path="/myentries" element={<MyEntries />} />
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
