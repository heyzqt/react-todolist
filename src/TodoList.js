import React, { Fragment } from "react";
import TodoItem from "./TodoItem";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.currentTarget.value,
    });
  }

  handleBtnClick() {
    if (!this.state.inputValue) {
      alert("值为空或者值格式不对");
      return;
    }
    this.setState({
      //   list: this.state.list.concat(this.state.inputValue), //写法一
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
    // 错误的写法，React中不允许直接改变state中的数据(immutable)，会影响React的性能
    // 推荐是使用上面的写法，将state数据拷贝出来作为一个副本，对副本进行操作处理
    // this.state.list.splice(index, 1);
    // this.setState({
    //   list: this.state.list,
    // });
  }

  render() {
    return (
      <Fragment>
        {/* //注释第一种写法 */}
        {
          //注释的第二种写法
        }
        {/* label标签和表单组件绑定 */}
        <label htmlFor="inputArea">输入内容</label>
        <input
          id="inputArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                content={item}
                pos={index}
                deleteItem={this.handleItemDelete.bind(this)}
              ></TodoItem>
              // <li
              //   key={index}
              //   onClick={this.handleItemDelete.bind(this, index)}
              //   dangerouslySetInnerHTML={{ __html: item }} //加载html
              // ></li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default ToDoList;
