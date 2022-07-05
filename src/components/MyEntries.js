import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Pagination from "./Pagination";

const MyEntries = () => {
  const { isAuntheticated, notes, setNotes } = useContext(AuthContext);
  const [articlesPerPage] = useState(5); //defining how many articles per page we want
  const [currentPage, setCurrentPage] = useState(1); //defining that we will start at page 1
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const handleClick = async (event) => {
    console.log(event.target.name);
    const noteToDelete = event.target.name;
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/notes/delete/${noteToDelete}`)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  };
  if (isAuntheticated) return <Navigate to="/" />;
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="myEntriesPage ">
        {!isAuntheticated ? (
          <>
            <div>
              <nav className="nav nav-pills">
                <a className="nav-item nav-link " href="/newnote">
                  New Note
                </a>
                <a className="nav-item nav-link " href="/myentries">
                  My Entries
                </a>
              </nav>
            </div>
            <div className="background">
              {notes ? (
                notes
                  .slice(indexOfFirstArticle, indexOfLastArticle)
                  .map((notes) => (
                    <>
                      <div>
                        <div className="notes" key={notes._id}>
                          <div className="entriesContainer">
                            <div className="notesDisplay">
                              <div className="titles ">
                                <div>{notes.title}</div>
                                <button
                                  name={notes._id}
                                  onClick={handleClick}
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="descriptions ">
                                <div>{notes.description}</div>
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
              ) : (
                <div></div>
              )}
              {notes && (
                <Pagination
                  articlesPerPage={articlesPerPage}
                  totalNumberOfArticles={notes.length}
                  paginate={paginate}
                />
              )}
            </div>
            <div id="extra"></div>
          </>
        ) : (
          <Navigate to="/" />
        )}
      </div>
    </>
  );
};

export default MyEntries;
