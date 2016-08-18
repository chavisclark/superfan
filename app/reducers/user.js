var { LOG_IN_USER, 
      RETURN_LOG_IN_USER, 
      LOG_OUT_USER, 
      ADD_ARTIST, 
      INCREMENT } = require('../constants/types');
var {loadState} = require('../utils/localStorage');
var merge = require('lodash/merge');
var localUsers = [];

function user(state, action) {
  if (state === undefined) {
    state = {user: {}}
  }

  switch (action.type) {
    case LOG_IN_USER:
      if (!loadState()){
        return merge({}, {loggedUser: action.data}, {users: localUsers.concat([action.data])}) 
      } else {
          localUsers = loadState().user.users === undefined ? [] : loadState().user.users;
          var userCheck = localUsers.filter(function(user) {
            return user.name.first === action.data.name.first
          });

        if (!userCheck.length) {
          state.loggedUser = action.data

          return merge({}, state, {users: localUsers.concat([action.data])}) 

        } else {
          var mostRecent = userCheck[userCheck.length-1] || '';
          var sameName = mostRecent.username || '';
          var oldVal = sameName.substring(sameName.lastIndexOf("-")+1) || '';
          var parseOldVal = Number.parseInt(oldVal);
          var newVal = !parseOldVal ? 1 : parseOldVal += 1;
          action.data.username = action.data.username + '-' + newVal;
          state.loggedUser = action.data

          return merge({}, state, {users: localUsers.concat([action.data])}) 
        }
      }

    case RETURN_LOG_IN_USER:
      return merge({}, state, {loggedUser: action.data.user}) 

    case LOG_OUT_USER:
      return merge({}, state, {loggedUser: ''});

    case ADD_ARTIST:
      var oldArray = state.loggedUser.myArtists;
      var artistCheck = oldArray.some(function(artist) {
        return artist.login === action.data.login
      });

      if (artistCheck !== true) {
        localUsers = loadState().user.users === undefined ? [] : loadState().user.users;
        if (action.data) {
          var updatedState = merge({}, state, {loggedUser:{myArtists: oldArray.concat([action.data])}});
          
          var newUsersArray = localUsers.filter(function(user){
            return user.username !== updatedState.loggedUser.username
          })
          return merge({}, updatedState, {users: newUsersArray.concat([updatedState.loggedUser])})
        } else {
            return state
        }        
      } else {
          return state
      }

    case INCREMENT:
      localUsers = loadState().user.users === undefined ? [] : loadState().user.users;
      var userCheck = localUsers.filter(function(user) {
        return user.username === action.data.fan
      });
      var newUsersArray = localUsers.filter(function(user){
        return user.username !== action.data.fan
      });
      var fan = userCheck[0];
      fan.fan_power = action.data.power + fan.fan_power;

      return merge({}, state, {users: newUsersArray.concat([fan])})
      
    default:
      return state
  } 
}

module.exports = user;