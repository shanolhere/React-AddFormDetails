import React from "react";

const Title = (props) => {
  return (
    <>
      <nav>
        <h1>React.co</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
      </nav>

      <h1 className="title">{props.title}</h1>
    </>
  );
};

export default Title;
