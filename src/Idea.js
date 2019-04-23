import React from "react";

class Idea extends React.Component {
  state = {
    MAX_CHARACTERS: 140,
    REMAINING_CHARACTER_COUNT: 15,
    title: this.props.title,
    body: this.props.body,
    isTitleBlurred: false,
    isBodyBlurred: true,
    isMouseEntered: false
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
      isTitleBlurred: false
    });
  };
  handleBodyFocus = event => {
    this.setState({
      isBodyBlurred: false
    });
  };
  handleTitleBlur = event => {
    this.setState({
      isTitleBlurred: true
    });
    this.checkIdeaBlur();
    //trigger an update request when title field is blurred
    this.props.onIdeaUpdate(this.props.id, this.state.title, this.state.body);
  };
  handleBodyBlur = event => {
    this.setState({
      isBodyBlurred: true
    });
    this.checkIdeaBlur();
    //trigger an update request when body field is blurred
    this.props.onIdeaUpdate(this.props.id, this.state.title, this.state.body);
  };
  checkIdeaBlur = () => {
    setTimeout(() => {
      if (this.state.isTitleBlurred && this.state.isBodyBlurred) {
        this.props.onIdeaLeave(this.props.id);
      }
    }, 20);
  };
  handleMouseEnter = event => {
    this.setState({
      isMouseEntered: true
    });
  };
  handleMouseLeave = event => {
    this.setState({
      isMouseEntered: false
    });
  };
  handleIdeaDelete = event => {
    event.stopPropagation();
    this.props.onIdeaDelete(this.props.id);
  };
  render() {
    const { id, title, body, active } = this.props;
    return (
      <div
        className="idea"
        onClick={this.handleIdeaClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {active ? (
          <div>
            <input
              className="input__idea__title"
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
              onFocus={this.handleTitleFocus}
              onBlur={this.handleTitleBlur}
              autoFocus={true}
            />
            <textarea
              className="input__idea__body"
              rows="7"
              cols="18"
              value={this.state.body}
              onChange={this.handleBodyChange}
              onFocus={this.handleBodyFocus}
              onBlur={this.handleBodyBlur}
              maxLength="140"
            />
            {this.state.MAX_CHARACTERS - this.state.body.length <
            this.state.REMAINING_CHARACTER_COUNT ? (
              <p className="text__characters__left">
                {this.state.MAX_CHARACTERS - this.state.body.length} characters
                left
              </p>
            ) : null}
          </div>
        ) : (
          <div>
            <span className="span__idea__title">{title}</span>
            {this.state.isMouseEntered ? (
              <button
                className="button__idea__delete"
                onClick={this.handleIdeaDelete}
              />
            ) : null}
            <br />
            <span>{body}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Idea;
