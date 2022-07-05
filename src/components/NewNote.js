import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar.js";

const NewNote = () => {
  const [userInfo, setUserInfo] = useState(null);
  // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  //bei Form Submit post request an die API schicken
  //token, den wir zurückbekommen in localStorage speichern
  //bei erfolgreichem Signup auf die /post-login route navigieren

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    async function fetchData() {
      let res = await axios.get(`${process.env.REACT_APP_API_URL}/info/me`, {
        headers: { token: token },
      });
      setUserInfo(res.data._id);
      // console.log(userInfo)
      // console.log(res.data);
    }
    fetchData();
  }, [userInfo]);

  // console.log(userInfo);
  const user_id = userInfo;
  console.log(user_id);

  const handleSubmit = async (e) => {
    const { title, description } = e.target;
    const noteData = {
      user_id,
      title: title.value,
      description: description.value,
    };

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/notes/`, noteData);
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  return (
    <>
      <>
        <div>
          <Navbar />
        </div>
        <body className="newNotePage ">
          <nav className="nav nav-pills">
            <a className="nav-item nav-link " href="/newnote">
              New Note
            </a>
            <a className="nav-item nav-link" href="/myentries">
              My Entries
            </a>
          </nav>
          <form onSubmit={handleSubmit}>
            <div className="my-5 row noteNewDates">
              <label htmlFor="title" className="col-sm-4 col-form-label">
                <p>Title</p>
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                />
              </div>
            </div>

            <div className="my-5 row">
              <label htmlFor="description" className="col-sm-4 col-form-label">
                <p> Your Note</p>
              </label>
              <div className="col-sm-5">
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                ></textarea>
              </div>
            </div>

            <div id="btn">
              <button
                type="submit"
                className="btn btn-outline-primary btn-lg"
              >
                Create
              </button>
            </div>
          </form>
        </body>
        <div id="extra"></div>
      </>
    </>
  );
};

export default NewNote;
