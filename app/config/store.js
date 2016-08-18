var createStore = require('redux').createStore;
var rootReducer = require ('../reducers');
var {loadState, saveState } = require('../utils/localStorage');
var throttle = require('lodash/throttle');
var persistedState = loadState();

function configStore() {
  var store = createStore(
      rootReducer,
      persistedState
  );

  store.subscribe(throttle(function(){
    saveState({
      user: store.getState().user
    });
  }, 1000))

  return store
}

module.exports = configStore;