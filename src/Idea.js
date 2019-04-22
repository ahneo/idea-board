import React from "react";

class Idea extends React.Component {
  state = {
    title: this.props.title,
    body: this.props.body,
    title_blur: false,
    body_blur: true
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
  handleTitleFocus = event => {
    this.setState({
      title_blur: false
    });
  };
  handleBodyFocus = event => {
    this.setState({
      body_blur: false
    });
  };
  handleTitleBlur = event => {
    this.setState({
      title_blur: true
    });
    this.checkIdeaBlur();
  };
  handleBodyBlur = event => {
    this.setState({
      body_blur: true
    });
    this.checkIdeaBlur();
  };
  checkIdeaBlur = () => {
    setTimeout(() => {
      if (this.state.title_blur && this.state.body_blur) {
        this.props.onIdeaBlur(this.props.id, this.state.title, this.state.body);
      }
    }, 50);
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
              onFocus={this.handleTitleFocus}
              onBlur={this.handleTitleBlur}
              autoFocus={true}
            />
            <br />
            <br />
            <textarea
              rows="7"
              cols="20"
              value={this.state.body}
              onChange={this.handleBodyChange}
              onFocus={this.handleBodyFocus}
              onBlur={this.handleBodyBlur}
              maxLength="140"
            />
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
