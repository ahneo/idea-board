import React from "react";
import ReactDOM from "react-dom";
import Idea from "./Idea";
/*import axios from "axios"; // assuming we are using axios to call the backend REST service */

class App extends React.Component {
  state = {
    ideas: [],
    ideas_id_count: 5,
    idea_active_id: -1
  };
  componentDidMount() {
    /* TODO:call API(GET ideas/) to get ideas
    // Make a request to get ideas
    axios
      .get("baseURL/ideas")
      .then(function(response) {
        // handle success
        this.setState({
          ideas: response.data
        });
      })
      .catch(function(error) {
        // handle error
      })
      .then(function() {
        // always executed
      });
    */
    //get the hard-coded ideas to set initial state
    this.setState({
      ideas: this.getHardCodedIdeas()
    });
  }
  getHardCodedIdeas = () => {
    return [
      {
        id: 1,
        created_date: "2019-01-01T23:28:56.782Z",
        title: "Idea 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices tristique libero. Donec semper neque vitae risus euismod sollicitudin."
      },
      {
        id: 2,
        created_date: "2019-02-02T23:28:56.782Z",
        title: "Idea 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices tristique libero. Donec semper neque vitae risus euismod sollicitudin."
      },
      {
        id: 3,
        created_date: "2019-03-03T23:28:56.782Z",
        title: "Idea 3",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices tristique libero. Donec semper neque vitae risus euismod sollicitudin."
      },
      {
        id: 4,
        created_date: "2019-04-04T23:28:56.782Z",
        title: "Idea 4",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat ante quis risus imperdiet posuere."
      },
      {
        id: 5,
        created_date: "2019-05-05T23:28:56.782Z",
        title: "Idea 5",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis consequat ante quis risus imperdiet posuere."
      }
    ];
  };
  addIdea = event => {
    /*TODO:call API(GET ideas/new) to get new idea
    // Make a request to get ideas
    axios
      .get("baseURL/ideas/new")
      .then(function(response) {
        // handle success
        this.setState({
          ideas: [
            ...this.state.ideas,
            {
              id: response.data.id,
              created_date: response.data.created_date,
              title: "idea title",
              body: "enter your idea here"
            }
          ],
          idea_active_id: response.data.id
        });
      })
      .catch(function(error) {
        // handle error
      })
      .then(function() {
        // always executed
      });
    */
    //add new idea to state without the backend REST service
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
  handleIdeaLeave = idea_id => {
    //set state to no active idea
    if (this.state.idea_active_id === idea_id) {
      this.setState({
        idea_active_id: -1
      });
    }
  };
  handleIdeaUpdate = (idea_id, idea_title, idea_body) => {
    this.updateIdea(idea_id, idea_title, idea_body);
  };
  updateIdea = (idea_id, idea_title, idea_body) => {
    /*TODO:call API(POST idea/update) to update idea
    axios
      .post("baseURL/idea/update", {
        id: idea_id,
        title: idea_title,
        body: idea_body
      })
      .then(function(response) {
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
      })
      .catch(function(error) {
        // handle error
      });
    */
    //update idea to state without calling the backend REST service
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
    this.deleteIdea(idea_id);
  };
  deleteIdea = idea_id => {
    /*TODO:call API(POST idea/delete) to delete idea
    axios
      .post("baseURL/idea/delete", {
        id: idea_id
      })
      .then(function(response) {
        this.setState({
          ideas: this.state.ideas.filter(function(idea) {
            return idea.id !== idea_id;
          })
        });
      })
      .catch(function(error) {
        // handle error
      });
    */
    //delete idea in state without calling the backend REST service
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
        <footer className="footer__info">
          <p>To edit an idea, click on it!</p>
          <p>
            Created by <a href="https://github.com/ahneo/">henryneo</a>
          </p>
          <p>
            Code in <a href="https://github.com/ahneo/idea-board">github</a>
          </p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
