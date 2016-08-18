var chance = require('chance').Chance();
var randomInt = chance.integer({
                        min: 0, max: 10000 });
var randomInt3 = chance.integer({
                        min: 1, max: 3 });

exports.randomUser = function() {
  var user = {
    name: { first: chance.first(),
            last: chance.last() 
          },
    avatar: 'https://robohash.org/set_set'+ randomInt3 +'/bgset_bg'+ randomInt3 +'/'+ randomInt +'?size=500x500',
    fan_power: 5,
    myArtists: []      
  }
  return user
};