function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      listeners.splice(listeners.indexOf(listener), 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => {
      listener();
    });
    return action;
  }

  return {
    getState,
    subscribe,
    dispatch
  };
}

module.exports = createStore;
