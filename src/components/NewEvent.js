import axios from "axios";
import React from "react";
import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
//////////////////
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const NewEvent = () => {
  const { isAuntheticated, userInfo } = useContext(AuthContext);
  // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  //bei Form Submit post request an die API schicken
  //token, den wir zurückbekommen in localStorage speichern
  //bei erfolgreichem Signup auf die /post-login route navigieren
  const [value] = React.useState(new Date());
  // const [ending, setEnding] = React.useState(new Date());
  const [datum, setDatum] = React.useState(new Date());
  const handleChangeStart = (newValue) => {
    console.log(newValue.toLocaleString('de-DE').split(",")[0]);
    setDatum(newValue.toLocaleString('de-DE').split(",")[0]);
  };
  // const handleChangeEnd = (newValue) => {
  //   console.log(newValue);
  //   setEnding(newValue);
  // };
  // console.log(value);

  const user_id = userInfo;

  const handleSubmit = async (e) => {
    const { title, name, address, zip, tel, email, about } = e.target;
    const eventData = {
      user_id,
      // ending,
      datum,
      title: title.value,
      name: name.value,
      address: address.value,
      zip: zip.value,
      tel: tel.value,
      email: email.value,
      about: about.value,
    };

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/events/`, eventData);
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  if (isAuntheticated) return <Navigate to="/login" />;
  return (
    <>
      <>
        <div>
          <Navbar />
        </div>

        <nav className="nav nav-pills">
          <a className="nav-item nav-link " href="/newevent">
            Create new Event
          </a>
          <a className="nav-item nav-link" href="/calendar">
            My Events
          </a>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="newcontactpage">
            <h2>Let`s create new Event</h2>
            <div className="newcontactdates">
              <div className="new-name-address-zip">
                <div className="my-2 row">
                  <label htmlFor="title" className="col-sm-2 col-form-label">
                    <p> Title</p>
                  </label>
                  <div className="col-sm-15">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                    />
                  </div>
                </div>

                <div className="my-4 row">
                  <label htmlFor="address" className="col-sm-2 col-form-label">
                    <p> Address</p>
                  </label>
                  <div className="col-sm-20">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                    />
                  </div>
                </div>

                <div className="my-3 row">
                  <label htmlFor="zip" className="col-sm-2 col-form-label">
                    <p> Zip</p>
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="number"
                      className="form-control"
                      id="zip"
                      name="zip"
                    />
                  </div>
                </div>
                  <div className="col-sm-7" style={{ margin: "5% 30%",padding:"2%",backgroundColor:"white" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  {/* <DateTimePicker
                    id="starttime"
                    name="starttime"
                    label="Start"
                    value={value}
                    onChange={handleChangeStart}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                  <DesktopDatePicker
                    id="starttime"
                    name="starttime"
                    label="Datum"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChangeStart}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {/* <DateTimePicker
                    id="endtime"
                    name="endtime"
                    label="End "
                    value={value}
                    onChange={handleChangeEnd}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                </Stack>
              </LocalizationProvider>
            </div>
                
                {/* /////////// */}
              </div>

              <div className="new-tel-email">
                <div className="my-2 row">
                  <label htmlFor="name" className="col-sm-2 col-form-label">
                    <h6>Contact Infos:</h6>
                    <p> Name</p>
                  </label>
                  <div className="col-sm-15">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="tel" className="col-sm-2 col-form-label">
                    <p> Tel</p>
                  </label>
                  <div className="col-sm-15">
                    <input
                      type="number"
                      className="form-control"
                      id="tel"
                      name="tel"
                    />
                  </div>
                </div>

                <div className="my-3 row">
                  <label htmlFor="email" className="col-sm-2 col-form-label">
                    <p> Email</p>
                  </label>
                  <div className="col-sm-15">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>

                <div className="my-3 row">
                  <label htmlFor="about" className="col-sm-2 col-form-label">
                    <p> About</p>
                  </label>
                  <div className="col-sm-15">
                    <textarea
                      type="text"
                      className="form-control"
                      id="about"
                      name="about"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-btn">
              <button type="submit" className="btn btn-outline-primary btn-lg">
                Create
              </button>
            </div>
          </div>
        </form>
        <div id="extra"></div>
      </>
    </>
  );
};

export default NewEvent;
