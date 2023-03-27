import store from "./customStore";
import { bugAdded, bugRemoved } from "./actions";
store.state = 23;
console.log("khuong", store.getState());
store.subscribe(() => {
  console.log("Store changed");
});

store.dispatch(bugAdded("bug 1"));
console.log(store.getState());
store.dispatch(bugRemoved(1));
console.log(store.getState());
