import { createSlice, createSelector } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// export const bugAdded = createAction("bugCreated");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");
//Reducer
let lastId = 0;

export const getUnresolveBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByAsignee = (assignee) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.assignee === assignee)
  );
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
        assignee: null,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugAssign: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.bugId);
      bugs[index].assignee = action.payload.assignee;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved, bugAssign } = slice.actions;
export default slice.reducer;
