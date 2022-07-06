import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Pagination from "./Pagination";
// import { ClipLoader } from "react-spinners";

const AddressBook = () => {
  const { isAuntheticated, results, setResults } =
    useContext(AuthContext);
  const [articlesPerPage] = useState(8); //defining how many articles per page we want
  const [currentPage, setCurrentPage] = useState(1); //defining that we will start at page 1
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  if (isAuntheticated) return <Navigate to="/" />;

  const handleClick = async (event) => {
    console.log(event.target.name);
    const contactToDelete = event.target.name;
    await axios
      .delete(
        `${process.env.REACT_APP_API_URL}/contacts/delete/${contactToDelete}`
      )
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {!isAuntheticated ? (
        <>
          <div>
            <Navbar />
          </div>
          <div>
            <nav className="nav nav-pills">
              <a className="nav-item nav-link " href="/newaddress">
                Create new Contact
              </a>
              <a className="nav-item nav-link " href="/addressbook">
                Address Book
              </a>
            </nav>
          </div>
          {results ? (
            results
              .slice(indexOfFirstArticle, indexOfLastArticle)
              .map((results) => (
                <>
                  <div className="background">
                    <ul className="row" id="myUl" key={results._id}>
                      <li className="col-1 cfg">{results.name}</li>
                      <li className="col-2 cfg">{results.address}</li>
                      <li className="col-3 cfg">{results.zip}</li>
                      <li className="col-4 cfg">{results.tel}</li>
                      <li className="col-5 cfg">{results.email}</li>
                      <li className="col-6 cfg">{results.about}</li>
                      <li className="col-7 cfg">
                        <button
                          name={results._id}
                          onClick={handleClick}
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                        ></button>
                      </li>
                      <div></div>
                    </ul>
                  </div>
                </>
              ))
          ) : (
            <div></div>
            // <h1 className="mustlogin">Please go Home and login</h1>
          )}
          {results && (
            <Pagination
              articlesPerPage={articlesPerPage}
              totalNumberOfArticles={results.length}
              paginate={paginate}
            />
          )}
        </>
      ) : (
        <Navigate to="/homepage" />
      )}
      <div id="extra"></div>
    </>
  );
};

export default AddressBook;


