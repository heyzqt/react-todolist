import React, { Fragment } from "react";
import "./style.css";
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.isShow}
          timeout={300}
          unmountOnExit
          onEnter={(el) => {
            el.style.color = "red";
          }}
          classNames="fade"
          appear={true}
        >
          <div>hello world</div>
        </CSSTransition>
        <button onClick={this.handleClick}>change state</button>
      </Fragment>
    );
  }
}

export default App;
