const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

//Action creator
export function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: { description },
  };
}

export function bugRemoved(bugId) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: bugId,
    },
  };
}

//Reducer
let lastId = 0;
export default function reducer(state = [], action) {
  debugger;
  switch (action.type) {
    case "bugAdded": {
      return [
        ...state,
        {
          id: lastId + 1,
          description: action.payload.description,
          resolved: false,
        },
      ];
    }
    case "bugRemoved": {
      return state.filter((bug) => bug.id !== action.payload.id);
    }
    default:
      return state;
  }
}
