import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); //建议把点击事件的绑定写在这里，而不是写在render里面，会减少一些性能损耗
  }

  handleClick() {
    console.log(this)
    this.props.deleteItem(this.props.pos);
  }

  render() {
    return (
      // <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
      <div onClick={this.handleClick}>{this.props.content}</div>
    );
  }
}

export default TodoItem;
