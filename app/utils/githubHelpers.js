var axios = require('axios');
var chance = require('chance').Chance();
var id = "a29d5c2f9d5cf4f9f511";
var sec = "eac0504c7536a4c0e2a2382a041d4fe688bf615f";
var param = "?client_id=" + id + "&client_secret=" + sec;
var getUrl = 'https://api.github.com/users';

var randomInt = chance.integer({
                    min: 1, max: 50 });

function getUserInfo (username) {
  return axios.get(getUrl + '/' + username + param)
}

function getAll (){
  return axios.get(getUrl + '?since=' + randomInt + '' + param)
}

var helpers = {
  getArtists: function () {
    console.info('init github get all function')
    return getAll().then(function(info){
      return info.data.map(function(user){
        return user
      })
    }).catch(function (err){
      console.warn('Error in getArtists', err)
    })
  },

  getArtistInfo: function (username) {
    return getUserInfo(username)
      .then(function(info){
      return info.data
    }).catch(function (err){
      console.warn('Error in getArtistInfo', err)
    })
  }
};

module.exports = helpers;