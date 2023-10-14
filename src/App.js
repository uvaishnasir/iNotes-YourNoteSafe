import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./contexts/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Alerts from "./components/Alerts";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        {/* <Alerts message = "This is the alert."/> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup/>} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
