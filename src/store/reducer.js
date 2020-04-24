import {
  CHANGE_INPUT_DATA,
  ADD_LIST_DATA,
  DELETE_LIST_DATA
} from "./actionTypes";
const defaultState = {
  inputValue: "111",
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === ADD_LIST_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  } else if (action.type === DELETE_LIST_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
