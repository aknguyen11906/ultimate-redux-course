import * as actions from "./actionTypes";
export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: { description },
  };
}

export function bugRemoved(bugId) {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: bugId,
    },
  };
}
