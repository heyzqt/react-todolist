const defaultState = {
  inputValue: "input message",
  list: ["hello", "world"],
};

//reducer 可以接受state，但是不能改变传入的state的值
export default (state = defaultState, action) => {
  if (action.type === "change-input-data") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === "add-list-data") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === "delete-list-data") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    newState.inputValue = "";
    return newState;
  }
  return state;
};
