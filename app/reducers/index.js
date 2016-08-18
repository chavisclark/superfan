// Combining reducers (Normally I'd have more than just user 
// so it's good to just go ahead and set it using an index
var combineReducers = require ('redux').combineReducers;
var user = require ('./user');

var rootReducer = combineReducers({
  user
});

module.exports = rootReducer;
