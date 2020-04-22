import {
  CHANGE_INPUT_DATA,
  ADD_LIST_DATA,
  DELETE_LIST_DATA,
  INIT_LIST_DATA
} from "./actionTypes";
const defaultState = {
  inputValue: "input message",
  list: []
};

//reducer 可以接受state，但是不能改变传入的state的值
export default (state = defaultState, action) => {
  if (action.type === INIT_LIST_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    return newState;
  }

  if (action.type === CHANGE_INPUT_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_LIST_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_LIST_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    newState.inputValue = "";
    return newState;
  }
  return state;
};
