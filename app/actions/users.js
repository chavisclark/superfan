var types = require('../constants/types');

exports.LoginUser = function (data) {
  return { 
    type: types.LOG_IN_USER, 
    data
  };
}

exports.ReturnLogin = function (data) {
  return {
    type: types.RETURN_LOG_IN_USER,
    data    
  }
}

exports.LogoutUser = function () {
  return { 
    type: types.LOG_OUT_USER
  };
}

exports.AddToMyArtists = function (data) {
  return { 
    type: types.ADD_ARTIST, 
    data
  };
}

exports.increment = function (fan, power) {
  var data = {fan, power}
  return{
    type: types.INCREMENT,
    data    
  }
}