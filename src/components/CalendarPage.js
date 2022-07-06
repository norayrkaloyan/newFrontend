import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import Calendar from "react-calendar";
import { AuthContext } from "../context/AuthContext";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";

const CalendarPage = (e) => {
  const { isAuntheticated, events, setEvents } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [datum, setDatum] = useState();

  const selectedDate = date.toLocaleString("de-DE").split(",")[0];
  const handleClick = async (event) => {
    console.log(event.target.name);
    const eventToDelete = event.target.name;
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/events/delete/${eventToDelete}`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
    const result = events.filter(
      (event) => event.datum.split("T")[0] === selectedDate
    );
    setDatum(result);
  };

  const handleDayClick = () => {
    // console.log(date);
    console.log(selectedDate);
    // console.log(events);
    const result = events.filter(
      (event) => event.datum.split("T")[0] === selectedDate
    );
    setDatum(result);
    console.log(datum);
  };

  if (isAuntheticated) return <Navigate to="/" />;

  return (
    <>
      {!isAuntheticated ? (
        <>
          <div>
            <Navbar />
          </div>
          <div>
            <nav className="nav nav-pills">
              <a className="nav-item nav-link " href="/newevent">
                Create new Event
              </a>
              <a className="nav-item nav-link " href="/calendar">
                My Events
              </a>
            </nav>
          </div>
          <div className="app">
            <div className="mycalendar">
              <div className="calendar-container">
                <Calendar
                  onChange={setDate}
                  value={date}
                  calendarType="ISO 8601"
                  defaultView="decade"
                  nextLabel="month>"
                  nextAriaLabel="Go to next month"
                  next2Label="year>>"
                  next2AriaLabel="Go to next year"
                  prevLabel="<month"
                  prevAriaLabel="Go to prev month"
                  prev2Label="<<year"
                  prev2AriaLabel="Go to prev year"
                  onClickDay={handleDayClick}
                />
              </div>
              <p>
                <span className="bold" name="datum">
                  Selected Date:
                </span>
                {date.toDateString()}
              </p>
            </div>
            <div className="eventsDisplay">
              {datum ? (
                datum.map((datum) => (
                  <>
                    <div className="background">
                      <ul className="row" id="myUl" key={datum._id}>
                        <li className="col-1 cffg ">
                          {datum.datum} {datum.title}
                        </li>
                        <li className="col-2 cffg">{datum.address}</li>
                        <li className="col-3 cffg">{datum.zip}</li>
                        <li className="col-4 cffg ">
                          {datum.tel}
                        </li>
                        <li className="col-5 cffg">{datum.email}</li>
                        <li className="col-6 cffg coll-4">{datum.name}{datum.about}</li>
                        <li className="col-7 cffg">
                          <button
                            name={datum._id}
                            onClick={handleClick}
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                          ></button>
                        </li>
                        <div></div>
                      </ul>
                    </div>
                    {/* <div>
                        <div className="notes" key={datum._id}>
                          <div className="entriesContainer">
                            <div className="notesDisplay">
                              <div className="titles ">
                                <div>{datum.title}</div>
                                <button
                                  name={events._id}
                                  onClick={handleClick}
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="infos">
                                <div>{datum.address}</div>
                                <div>{datum.datum}</div>
                                <div>{datum.tel}</div>
                                <div>{datum.about}</div>
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div> */}
                  </>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/homepage" />
      )}
      <div id="extra"></div>
    </>
  );
};

export default CalendarPage;
