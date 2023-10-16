import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mx-3" to="/">
        iNotes
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
        <Link to="/login" role="button" className="btn btn-primary mx-2 px-5">Login</Link>
        <Link to="/signup" role="button"  className="btn btn-primary mx-2 px-5">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
