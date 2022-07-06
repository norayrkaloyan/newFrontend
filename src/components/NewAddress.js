import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";

const NewAddress = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { isAuntheticated } = useContext(AuthContext);
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
    const { name, address, zip, tel, email,about } = e.target;
    const contactData = {
      user_id,
      name: name.value,
      address: address.value,
      zip: zip.value,
      tel: tel.value,
      email: email.value,
      about:about.value,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/contacts/`,
        contactData
      );
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
          <a className="nav-item nav-link " href="/newaddress">
            Create new Contact
          </a>
          <a className="nav-item nav-link" href="/addressbook">
            Address Book
          </a>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="newcontactpage">
            <h2>Let`s create new Contact</h2>
            <div className="newcontactdates">
              <div className="new-name-address-zip">
                <div className="my-2 row">
                  <label htmlFor="name" className="col-sm-2 col-form-label">
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
              </div>

              <div className="new-tel-email">
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
              <button
                type="submit"
                className="btn btn-outline-primary btn-lg"
              >
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

export default NewAddress;
