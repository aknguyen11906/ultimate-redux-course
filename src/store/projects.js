import { createSlice } from "@reduxjs/toolkit";

// export const bugAdded = createAction("bugCreated");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");
//Reducer
let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    projectResolved: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects[index].resolved = true;
    },
  },
});

export const { projectAdded, projectRemoved, projectResolved } = slice.actions;
export default slice.reducer;
