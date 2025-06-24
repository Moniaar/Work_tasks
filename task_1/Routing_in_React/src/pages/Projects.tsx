import { Link } from "react-router-dom";
import React from "react";


// for typescript to undertand this is a React component
const Projects: React.FC = () => {
  return (
    <>
      <p> I am currently working on some projects. </p>
      <p> Most of them are private, but I will share some details soon. </p>
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="https://github.com/Moniaar">Catch me if you can</Link>
    </>
  );
};

export default Projects;
