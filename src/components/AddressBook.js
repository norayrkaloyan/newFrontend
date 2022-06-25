import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AddressBook = () => {
  const { isAuntheticated, results } = useContext(AuthContext);
  if (isAuntheticated) return <Navigate to="/" />;
  // e.preventDefault()
  // const [results, setResults] = useState(); //represents the articles we get as response
  // const [userInfo, setUserInfo] = useState(null);
  // const [query, setQuery] = useState("");
  // const [myContacts,setMyContacts] = useState();

  // useEffect(() => {
  //    const getAllContactsByUserId = async () => {
  //     const token = localStorage.getItem("token");
  //     await axios
  //       .get(`${process.env.REACT_APP_API_URL}/info/me`, {
  //         headers: { token: token },
  //       })
  //       .then((res) => {
  //         console.log(res.data._id);
  //         setUserInfo(res.data._id);
  //       })
  //       .catch((err) => console.log(err));
  //     await axios
  //       .get(`${process.env.REACT_APP_API_URL}/contacts/${userInfo}`)
  //       .then((response) => {
  //         console.log(response.data);
  //         setResults(response.data);
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   getAllContactsByUserId()
  //   // setMyContacts(getAllContactsByUserId());
  //   //console.log(token);
  // }, [userInfo]);

  return (
    <>
      {!isAuntheticated ? (
        <>
          <div>
            <nav className="nav nav-pills">
              <a className="nav-item nav-link " href="/newaddress">
                Contact Form
              </a>
              <a className="nav-item nav-link active" href="/addressbook">
                Address Book
              </a>
            </nav>
          </div>
          <div className="background">
            {results ? (
              results.map((results) => (
                <>
                  <div>
                    <div className="results" key={results._id}>
                      <div className="names cfg">
                        <div>{results.name}</div>
                      </div>
                      <div className="adresses cfg">
                        <div>{results.address}</div>
                      </div>
                      <div className="zip cfg">
                        <div>{results.zip}</div>
                      </div>
                      <div className="tel cfg">
                        <div>{results.tel}</div>
                      </div>
                      <div className="email cfg">
                        <div>{results.email}</div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AddressBook;

// <>
// <div>
// <nav class="nav nav-pills">
//     <a class="nav-item nav-link " href="/newaddress">Contact Form</a>
//     <a class="nav-item nav-link active" href="/addressbook">Address Book</a>
//   </nav>
// </div>
//   <div className="background">
//     {results ? (
//       results.map((results) => (
//         <>
//           <div>
//             <div className="results" key={results._id}>
//               <div className="names cfg">
//                 <div>{results.name}</div>
//               </div>
//               <div className="adresses cfg">
//                 <div>{results.address}</div>
//               </div>
//               <div className="zip cfg">
//                 <div>{results.zip}</div>
//               </div>
//               <div className="tel cfg">
//                 <div>{results.tel}</div>
//               </div>
//               <div className="email cfg">
//                 <div>{results.email}</div>
//               </div>
//             </div>
//           </div>
//         </>
//       ))
//     ) : (
//       <div></div>
//     )}
//   </div>
// </>
