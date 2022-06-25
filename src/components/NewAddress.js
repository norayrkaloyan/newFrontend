import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Logout from "./Logout";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NewAddress = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { isAuntheticated } = useContext(AuthContext);
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
    const { name, address, zip, tel, email } = e.target;
    const contactData = {
      user_id,
      name: name.value,
      address: address.value,
      zip: zip.value,
      tel: tel.value,
      email: email.value,
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
        <div id="logout">
          <Logout />
        </div>
        <nav className="nav nav-pills">
          <a className="nav-item nav-link active" href="/newaddress">
            Contact Form
          </a>
          <a className="nav-item nav-link" href="/addressbook">
            Address Book
          </a>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="my-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              name
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

          <div className="my-3 row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-15">
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
              ZIP
            </label>
            <div className="col-sm-15">
              <input
                type="number"
                className="form-control"
                id="zip"
                name="zip"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="tel" className="col-sm-2 col-form-label">
              tel
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
              Email
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

          <div>
            <button
              type="submit"
              className="btn btn-dark btn-sm"
              style={{ width: "100%" }}
            >
              Create
            </button>
          </div>
        </form>
      </>
      <></>
    </>
  );
};

export default NewAddress;
