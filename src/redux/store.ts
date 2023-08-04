import { combineReducers, createStore } from "redux";
import toDoListReducer from "./reducer/todoListReducer";

const reducer = combineReducers({
  toDoListReducer,
});

const store = createStore(reducer);

const configureStore = () => {
  return store;
};

export default configureStore;
