import React from "react";
import ReactDOM from "react-dom";
import Idea from "./Idea";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ideas: []
    };
  }
  componentDidMount() {
    //TODO:call API to get ideas
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
  render() {
    return (
      <div>
        <header className="header">
          <span className="header__title">Ideas Board!</span>
          <button className="header__button" type="button">
            Add new idea!
          </button>
        </header>
        {this.state.ideas.map(idea => {
          return <Idea key={idea.id} title={idea.title} body={idea.body} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
