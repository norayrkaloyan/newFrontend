import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import HomePage from "./components/HomePage.js";
import NewAddress from "./components/NewAddress.js";
import AddressBook from "./components/AddressBook.js";
import MyEntries from "./components/MyEntries";
import NewNote from "./components/NewNote";
import CalendarPage from "./components/CalendarPage.js";
import NewEvent from "./components/NewEvent";
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
        <Route path="/newnote" element={<NewNote />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/newevent" element={<NewEvent />} />
      </Routes>
    </div>
  );
}

export default App;
