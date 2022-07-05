import React from "react";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbarcontainer">
          <div>
            <p>icon</p>
          </div>
          <div>
            <ul className="navs">
              <li>
                <a  href="/homepage">Home</a>
              </li>
              <li>
                <a href="/calendar">Calendar</a>
              </li>
              <li>
                <a href="/addressbook">AddressBook</a>
              </li>
              <li>
                <a href="/myentries">My Entries</a>
              </li>
              <div>
                <Logout/>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a
    //             className="nav-link active"
    //             aria-current="page"
    //             href="/homepage"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/addressbook">
    //             AddressBook
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/myentries">
    //             My Entries
    //           </a>
    //         </li>
    //         {/* <li class="nav-item">
    //       <a class="nav-link disabled">Disabled</a>
    //     </li> */}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
