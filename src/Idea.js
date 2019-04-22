import React from "react";

class Idea extends React.Component {
  state = {
    title: this.props.title,
    body: this.props.body
  };
  handleIdeaClick = event => {
    this.props.onIdeaClick(this.props.id);
  };
  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };
  handleBodyChange = event => {
    this.setState({
      body: event.target.value
    });
  };
  render() {
    const { id, title, body, active } = this.props;
    return (
      <div className="idea" onClick={this.handleIdeaClick}>
        {active ? (
          <div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
              autoFocus={true}
            />
            <br />
            <br />
            <textarea
              rows="7"
              cols="20"
              onChange={this.handleBodyChange}
              maxLength="140"
            >
              {this.state.body}
            </textarea>
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
