import reducer from "./bugs";
function createStore(reducer) {
  let state = [];
  let listeners = [];
  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    if (listeners.length > 0) {
      for (let i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    }
  }
  function setState(newValue) {
    state = newValue;
  }
  return {
    getState,
    subscribe,
    setState,
    dispatch,
  };
}
export default createStore(reducer);
