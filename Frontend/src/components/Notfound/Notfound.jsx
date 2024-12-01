import "./Notfound.css";
import {NavLink} from "react-router-dom"
const Notfound = () => {
  return (
    <>
      <div className="not-found">

          <h1 id="error">404!!</h1>

          <h2 id="pagenotfound">page not found!</h2>


          <p id="errormsg">
            The page you are looking for might have been removed had its name
            changed or its temporaly unavailable
          </p>
          <NavLink to="/" className="button">Back to home page</NavLink>

      </div>
    </>
  );
};

export default Notfound;
