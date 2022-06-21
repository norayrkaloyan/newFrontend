import React from "react";
// import { Navigate, Link } from "react-router-dom";

const LandingPage = () => {
  //       const handleSubmit = () => {
  //         // <Link to="/login" />;
  //         <Navigate to="/login"/>
  //       };

  //   const handleSignup = () => {
  //     <Link to="signup" />;
  //   };
  return (
    <div className="landingPage">
      <div className="landingButtons">
        <div>
          <a
            class="btn btn-outline-dark btn-lg"
            href="/login"
            role="button"
            style={{ width: "100%" }}
          >
            Login
          </a>
        </div>
        <div>
          <a
            class="btn btn-outline-dark btn-lg"
            href="/signup"
            role="button"
            style={{ width: "100%" }}
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
