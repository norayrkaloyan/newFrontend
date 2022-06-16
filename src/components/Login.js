import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  //bei Form Submit post request an die API schicken
  //token, den wir zurückbekommen in localStorage speichern
  //bei erfolgreichem Login auf die /post-login route navigieren

  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const loginData = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        loginData
      );
      const token = res.headers.authorization;
      //token im localStorage speichern
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) return <Navigate to="../post-login" />;

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label
          htmlFor="inputPassword"
          className="col-sm-2 col-form-label"
        >
          Password
        </label>
        <div className="col-sm-5">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Jetzt einloggen
      </button>
    </form>
  );
};

export default Login;
