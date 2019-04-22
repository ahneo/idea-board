import React from "react";
import ReactDOM from "react-dom";
import Idea from "./Idea";

class App extends React.Component {
  state = {
    ideas: [],
    ideas_id_count: 5,
    idea_active_id: -1
  };
  componentDidMount() {
    //TODO:call API(GET ideas/) to get ideas
    let ideas = [
      {
        id: 1,
        created_date: "2014-01-01T23:28:56.782Z",
        title: "Idea 1",
        body:
          "paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140."
      },
      {
        id: 2,
        created_date: "2014-01-01T23:28:56.782Z",
        title: "Idea 2",
        body:
          "paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140."
      },
      {
        id: 3,
        created_date: "2014-01-01T23:28:56.782Z",
        title: "Idea 3",
        body:
          "paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140."
      },
      {
        id: 4,
        created_date: "2014-01-01T23:28:56.782Z",
        title: "Idea 4",
        body:
          "paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140."
      },
      {
        id: 5,
        created_date: "2014-01-01T23:28:56.782Z",
        title: "Idea 5",
        body:
          "paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140 characters in the body paragraph of 140."
      }
    ];
    this.setState({
      ideas
    });
  }
  addIdea = event => {
    //TODO:call API(GET ideas/new) to get new idea
    this.setState({
      ideas_id_count: ++this.state.ideas_id_count,
      ideas: [
        ...this.state.ideas,
        {
          id: this.state.ideas_id_count,
          created_date: new Date().toJSON(),
          title: "idea title",
          body: "enter your idea here"
        }
      ],
      idea_active_id: this.state.ideas_id_count
    });
  };
  handleIdeaClick = idea_id => {
    //set state of current active idea
    this.setState({
      idea_active_id: idea_id
    });
  };
  handleIdeaLeave = () => {
    //set state to no active idea
    this.setState({
      idea_active_id: -1
    });
  };
  handleIdeaUpdate = (idea_id, idea_title, idea_body) => {
    //TODO:call API(POST idea/update) to update idea
    this.updateIdea(idea_id, idea_title, idea_body);
  };
  updateIdea = (idea_id, idea_title, idea_body) => {
    this.setState({
      ideas: this.state.ideas.map(function(idea) {
        return idea.id !== idea_id
          ? idea
          : {
              id: idea.id,
              created_date: idea.created_date,
              title: idea_title,
              body: idea_body
            };
      })
    });
  };
  handleIdeaDelete = idea_id => {
    //TODO:call API(POST idea/delete) to delete idea
    this.deleteIdea(idea_id);
  };
  deleteIdea = idea_id => {
    this.setState({
      ideas: this.state.ideas.filter(function(idea) {
        return idea.id !== idea_id;
      })
    });
  };
  render() {
    return (
      <div>
        <header className="header">
          <span className="header__title">Ideas Board!</span>
          <button
            className="header__button"
            onClick={this.addIdea}
            type="button"
          >
            Add new idea!
          </button>
        </header>
        {this.state.ideas.map(idea => {
          return (
            <Idea
              key={idea.id}
              id={idea.id}
              title={idea.title}
              body={idea.body}
              active={this.state.idea_active_id === idea.id}
              onIdeaClick={this.handleIdeaClick}
              onIdeaLeave={this.handleIdeaLeave}
              onIdeaUpdate={this.handleIdeaUpdate}
              onIdeaDelete={this.handleIdeaDelete}
            />
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
