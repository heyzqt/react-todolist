import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store"; //可以不写index.js，React默认会查找文件目录下的index.js文件

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{
              width: "300px",
              marginRight: "20px",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          />
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{ width: "300px", marginTop: "20px", marginLeft: "20px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default ToDoList;
