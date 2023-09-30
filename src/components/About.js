import { useContext, useEffect } from "react"
import noteContext from "../contexts/notes/noteContext"

const About = () => {

  useEffect( ()=>{
    c1.update();
    //eslint-disable-next-line
  }, [])

  const c1 = useContext(noteContext);
  return (
    <div>
      <h1>This is about {c1.state.name} and his course is {c1.state.course}</h1>
    </div>
  )
}

export default About
