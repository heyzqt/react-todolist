import { CHANGE_INPUT_DATA } from "./actionTypes";
const defaultState = {
  inputValue: "111",
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state;
};
