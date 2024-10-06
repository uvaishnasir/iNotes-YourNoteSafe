import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  let loggedUser = false;
  if (localStorage.getItem("token")) {
    loggedUser = true;
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setUserName("");
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("name") && loggedUser) {
      setUserName(localStorage.getItem("name"));
    }
  }, [loggedUser]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mx-3" to="/">
        iNotes
      </Link>
      <div
        className="collapse navbar-collapse d-flex justify-content-between"
        id="navbarSupportedContent"
      >
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
      <span className="text-light mx-2">{userName}</span>
      {loggedUser ? (
        <button onClick={handleLogout} className="btn btn-danger mx-2 px-5">
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" role="button" className="btn btn-primary mx-2 px-5">
            Login
          </Link>
          <Link
            to="/signup"
            role="button"
            className="btn btn-primary mx-2 px-5"
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
