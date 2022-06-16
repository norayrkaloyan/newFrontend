import React from "react";
import { Link,Navigate } from "react-router-dom";

const LandingPage = () => {
  const handleLogin = () => {
    <Navigate to="/login" />;
  };

  const handleSignup = () => {
    <Link to="/signup" />;
  };
  return (
    <>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
      <button onClick={handleSignup} className="btn btn-primary">
        Signup
      </button>
    </>
  );
};

export default LandingPage;
