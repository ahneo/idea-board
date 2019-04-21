import React from "react";

class Idea extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div className="idea">
        <span className="idea-title">{title}</span>
        <br />
        {body}
      </div>
    );
  }
}

export default Idea;
