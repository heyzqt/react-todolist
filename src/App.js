import React, { Fragment } from "react";
import "./style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick() {
    this.setState({
      list: [...this.state.list, "item"],
    });
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                in={this.state.isShow}
                timeout={300}
                unmountOnExit
                onEnter={(el) => {
                  el.style.color = "red";
                }}
                classNames="fade"
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.handleAddClick}>add Item</button>
      </Fragment>
    );
  }
}

export default App;
