import React, { Fragment } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  componentDidMount() {
    //建议在componentDidMount中执行网络请求
    axios
      .get("/api/todolist")
      .then(() => {
        alert("success");
      })
      .catch(() => {
        alert("error");
      });
  }

  handleInputChange(e) {
    const value = e.currentTarget.value;
    this.setState(() => ({
      inputValue: value,
    }));
  }

  handleBtnClick() {
    if (!this.state.inputValue) {
      alert("值为空或者值格式不对");
      return;
    }
    this.setState((prevSteta) => ({
      list: [...prevSteta.list, prevSteta.inputValue],
      inputValue: "",
    }));
  }

  handleItemDelete(index) {
    this.setState((prevSteta) => {
      const list = [...prevSteta.list];
      list.splice(index, 1);
      return { list };
    });

    // 错误的写法，React中不允许直接改变state中的数据(immutable)，会影响React的性能
    // 推荐是使用上面的写法，将state数据拷贝出来作为一个副本，对副本进行操作处理
    // this.state.list.splice(index, 1);
    // this.setState({
    //   list: this.state.list,
    // });
  }

  //大块的包含逻辑的代码，可以封装成1个组件或者是1个函数，在调用时代码会更清晰优雅
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          pos={index}
          deleteItem={this.handleItemDelete}
        ></TodoItem>
      );
    });
  }

  render() {
    return (
      <Fragment>
        {/* label标签和表单组件绑定 */}
        <label
          htmlFor="inputArea"
          ref={(label) => {
            this.label = label;
          }}
        >
          输入内容
        </label>
        <input
          id="inputArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
}

export default ToDoList;
