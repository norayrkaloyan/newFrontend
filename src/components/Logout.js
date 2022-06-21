import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";

const Logout = () => {
  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const handleClick = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    //Wenn angemeldet, Logout Button zeigen, der local Storage cleart & isAuthenticated zu false setzt
    //Wenn nicht angemeldet, entsprechenden Text zeigen
    <div className="d-flex justify-content-center mt-4">
      {isAuthenticated ? (
        // <button onClick={handleClick} className="btn btn-primary">
        //   Logout
        // </button>
        <a
              class="btn btn-outline-primary"
              href="/"
              role="button"
              style={{ width: "100%" }}
              onClick={handleClick}
            >
              Logout
            </a>
      ) : (
        <h1>Du bist nicht angemeldet</h1>
      )}
    </div>
  );
};

export default Logout;
