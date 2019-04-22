import React from "react";

class Idea extends React.Component {
  render() {
    const { title, body, active } = this.props;
    return (
      <div className="idea">
        {active ? (
          <div>
            <input type="text" value="idea title" autoFocus />
            <br />
            <input type="textarea" value="enter your idea here" />
          </div>
        ) : (
          <div>
            <span className="idea-title">{title}</span>
            <br />
            <span>{body}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Idea;
