import Notes from "./Notes";
import NewNote from "./NewNote";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Notes />
        </div>
        <div className="col-md-4">
          <NewNote />
        </div>
      </div>
    </div>
  );
};

export default Home;
