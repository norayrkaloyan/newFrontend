import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import Logout from "./Logout";
import LandingPage from "./LandingPage";

const HomePage = () => {
  //Wenn User authentifiziert, Button für Userinfos anzeigen
  //onClick wird request an die protected Route der Api geschickt
  //mithilfe der Response werden ein paar Userinfos angezeigt
  //Wenn User nicht eingeloggt, zur Landing Page navigieren

  // const [userInfo, setUserInfo] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);

  // const handleClick = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   try {
  //     const res = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/info/me`,
  //       { headers: { token: token } }
  //     );
  //     setUserInfo(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="homepage">
            {/* <a  id="logout"
              class="btn btn-outline-primary "
              href="/logout"
              role="button"
              style={{ width: "100%" }}
            >
              Signup
            </a> */}
            <div id="logout">
              <Logout />
            </div>
            <h1 id="welcomeText">What would you like to see?</h1>
            <button className="btn btn-primary">
              <Link to="#">calendar</Link>
            </button>
          </div>
          {/* <h1>
            Du bist jetzt eingeloggt und kannst den Downloadbereich
            nutzen
          </h1>
          <button onClick={handleClick} className="btn btn-primary">
            Userinfos anzeigen
          </button>
          {userInfo && (
            <>
              <p>Deine Id in der DB ist {userInfo._id}</p>
              <p>Deine Mailadresse ist {userInfo.email}</p>
            </>
          )} */}
        </>
      ) : (
        <LandingPage/>
      )}
    </>
  );
};

export default HomePage;