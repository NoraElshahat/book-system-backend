import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("updated", store.getState());
});
export default store;
