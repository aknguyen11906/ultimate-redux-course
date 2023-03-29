import configureStore from "./store/configStore";
import { bugAdded } from "./store/bugs";
const store = configureStore();

store.subscribe(() => {
  console.log("Store changed");
});

store.dispatch(bugAdded("bug 1"));
store.dispatch(bugAdded("bug 2"));
store.dispatch(bugAdded("bug 3"));
