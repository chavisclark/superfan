var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var {loadState} = require('../utils/localStorage');
var UserProfileContainer = require('../containers/UserProfileContainer');
var ArtistProfileContainer = require('../containers/ArtistProfileContainer');
var ArtistsContainer = require('../containers/ArtistsContainer');
var SuperfanContainer = require('../containers/SuperfanContainer');

var requireAuth = function() {
  if (!loadState() || !loadState().user.loggedUser) {
      setTimeout(function(){
        location.href = '/'
      }, 2000)
  }
};

var routes = (

    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path='/profile' onEnter={requireAuth} component={UserProfileContainer} />
      <Route path='/artists' component={ArtistsContainer} />
      <Route path='/about-superfan' component={SuperfanContainer} />
      <Route path='/superfan' component={Home} />
      <Route path='/:stagename' component={ArtistProfileContainer} />
    </Route>

);

module.exports = routes;