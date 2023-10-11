const About = () => {
  return (
    <div>
      <h1>iNotes - Your Note is Secure with Cloud.</h1>
      <p>
        The iNotes MERN App is a web-based application designed to help users
        organize and manage their notes efficiently. It provides a user-friendly
        interface to create, edit, and delete notes. The app is built using the
        MERN (MongoDB, Express.js, React.js, Node.js) stack, ensuring a smooth
        and seamless experience.
      </p>
      <h1>Features</h1>
      <p>
        User Authentication: Secure user authentication system using JWT (JSON
        Web Tokens). Create Notes: Users can create new notes with a title,
        content, and category. Edit and Update Notes: Existing notes can be
        edited and updated easily. Categorize Notes: Notes can be categorized
        for better organization. Search Functionality: Users can search for
        specific notes based on title or content. Delete Notes: Unwanted notes
        can be deleted with a single click. Responsive Design: The app is
        designed to be accessible on various devices, including desktops,
        tablets, and mobile phones.
      </p>
      <h1>Technologies</h1>
      <h4>Frontend:</h4>
      <p>React.js Redux (for state management) HTML5, CSS3, JavaScript</p>
      <h4>Backend:</h4>
      <p> Node.js Express.js MongoDB (Mongoose ODM)</p>
      <h4>Authentication:</h4>
      <p>JSON Web Tokens (JWT) Bcrypt.js (for password hashing)</p>
    </div>
  );
};

export default About;
