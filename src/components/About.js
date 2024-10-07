import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-secondary">
        iNotes - Your Note is Secure with Cloud.
      </h1>

      {/* Introduction Card */}
      <div className="card mb-4 bg-secondary text-white">
        <div className="card-body">
          <p>
            The iNotes MERN App is a web-based application designed to help
            users organize and manage their notes efficiently. It provides a
            user-friendly interface to create, edit, and delete notes. The app
            is built using the MERN (MongoDB, Express.js, React.js, Node.js)
            stack, ensuring a smooth and seamless experience.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <h2 className="text-center mb-4 text-secondary">Features</h2>
      <div className="card mb-4">
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              User Authentication: Secure user authentication system using JWT
              (JSON Web Tokens).
            </li>
            <li className="list-group-item">
              Create Notes: Users can create new notes with a title,
              description, and tag.
            </li>
            <li className="list-group-item">
              Edit and Update Notes: Existing notes can be edited and updated
              easily.
            </li>
            <li className="list-group-item">
              Categorize Notes: Notes can be categorized for better
              organization.
            </li>
            <li className="list-group-item">
              Search Functionality: Users can search for specific notes based on
              title or description.
            </li>
            <li className="list-group-item">
              Delete Notes: Unwanted notes can be deleted with a single click.
            </li>
            <li className="list-group-item">
              Drag and Drop: Users can rearrange their notes by dragging and
              dropping them in the desired order.
            </li>
            <li className="list-group-item">
              Responsive Design: The app is designed to be accessible on various
              devices, including desktops, tablets, and mobile phones.
            </li>
          </ul>
        </div>
      </div>

      {/* Technologies Section */}
      <h2 className="text-center mb-4 text-secondary">Technologies</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-white">
            <div className="card-header">Frontend</div>
            <div className="card-body">
              <p>React.js</p>
              <p>Context API (for state management)</p>
              <p>HTML5, CSS3, JavaScript</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-white">
            <div className="card-header">Backend</div>
            <div className="card-body">
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB (Mongoose ODM)</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-dark text-white">
            <div className="card-header">Authentication</div>
            <div className="card-body">
              <p>JSON Web Tokens (JWT)</p>
              <p>Bcrypt.js (for password hashing)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
