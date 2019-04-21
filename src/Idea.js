import React from "react";

const Idea = props => {
  return (
    <div className="idea">
      <span className="idea-title">{props.title}</span>
      <br />
      {props.body}
    </div>
  );
};

export default Idea;
