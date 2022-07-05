import { useState, createContext, useEffect } from "react";
import axios from "axios";

//Wenn die Komponente initial mountet,
//checken, ob es einen token gibt
//wenn nein setIsAutheticated zu false setzen
//wenn ja,  req and die api schicken, setIsAutheticated zu true

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [results, setResults] = useState(); //represents the articles we get as response
  const [userInfo, setUserInfo] = useState(null);
  const [notes, setNotes] = useState(); //represents the articles we get as response
  const [events, setEvents] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const checkIfTokenValid = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/user/verify`,
            { headers: { token: token } }
          );
          if (res.status === 200) {
            setIsAuthenticated(true);

            ///////////////////////////////
            const getAllContactsByUserId = async () => {
              // const token = localStorage.getItem("token");
              await axios
                .get(`${process.env.REACT_APP_API_URL}/info/me`, {
                  headers: { token: token },
                })
                .then((res) => {
                  console.log(res.data._id);
                  setUserInfo(res.data._id);
                })
                .catch((err) => console.log(err));
              await axios
                .get(`${process.env.REACT_APP_API_URL}/contacts/${userInfo}`)
                .then((res) => {
                  // console.log(res.data);
                  setResults(res.data);
                })
                .catch((error) => console.log(error));

              //fetch Notes von User
              await axios
                .get(`${process.env.REACT_APP_API_URL}/notes/${userInfo}`)
                .then((res) => {
                  // console.log(res.data);
                  setNotes(res.data);
                })
                .catch((error) => console.log(error));
              ///////////////////
              //fetch events
              await axios
                .get(`${process.env.REACT_APP_API_URL}/events/${userInfo}`)
                .then((res) => {
                  console.log(res.data);
                  setEvents(res.data);
                })
                .catch((error) => console.log(error));
              ///////////////////
            };
            getAllContactsByUserId();
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsAuthenticated(false);
      }
    };
    checkIfTokenValid();
  }, [userInfo]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        results,
        notes,
        userInfo,
        events,
        setEvents,
        setUserInfo,
        setNotes,
        setResults,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
