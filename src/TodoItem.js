import React from "react";
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); //建议把点击事件的绑定写在这里，而不是写在render里面，会减少一些性能损耗
  }

  handleClick() {
    const { deleteItem, pos } = this.props;
    deleteItem(pos);
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>{this.props.content}</div>
        {this.props.msg}
      </div>
    );
  }
}

TodoItem.propTypes = {
  pos: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired,
  msg: PropTypes.string,
};

TodoItem.defaultProps = {
  msg: "hello world",
};

export default TodoItem;
