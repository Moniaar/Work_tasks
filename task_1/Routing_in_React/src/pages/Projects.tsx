import { Link } from "react-router-dom";
import React from "react";


const Projects: React.FC = () => {
  return (
    <>
      <p>testing this</p>
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/Contact">Contact me here</Link>
    </>
  );
};

export default Projects;
