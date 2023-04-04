import configureStore from "./store/configStore";
import {
  bugAdded,
  bugResolved,
  getUnresolveBugs,
  bugAssign,
  getBugsByAsignee,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/user";
const store = configureStore();

store.subscribe(() => {
  console.log("Store changed");
});

store.dispatch(userAdded({ name: "user1" }));
store.dispatch(projectAdded({ description: "project 1" }));
store.dispatch(bugAdded({ description: "bug 1" }));
store.dispatch(bugAdded({ description: "bug 2" }));
store.dispatch(bugAdded({ description: "bug 3" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugAssign({ bugId: 1, assignee: "User1" }));
const getBugsByAsignee1 = getBugsByAsignee("User1")(store.getState());
const bugUnResolved = getUnresolveBugs(store.getState());
console.log(getBugsByAsignee1);
console.log(bugUnResolved);
