import { createStore } from "redux";
import reducer from "./bugs";
import { devToolsEnhancer } from "redux-devtools-extension";

export default function () {
  const store = createStore(reducer);
  return store;
}
