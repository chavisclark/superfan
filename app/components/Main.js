var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var {connect} = require('react-redux');
var Navigation = require('./Navigation');
var {AddToMyArtists, LogoutUser} = require('../actions/users');
var githubHelpers = require('../utils/githubHelpers');
var dynamics = require('dynamics.js');
require('normalize.css');
require('../styles/main.css');

var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleHome: function () {
      this.handleCloseMobile()
      this.context.router.push({
        pathname: '/'
      })
  },

  handleLogout: function () {
      this.handleCloseMobile()
      location.href = '/'; 
      this.props.LogoutUser()
  },

  handleGetArtists: function () {
      this.handleCloseMobile()
      this.context.router.push({
        pathname: '/artists'
      })
  },

  handleGetProfile: function () {
      this.handleCloseMobile()
      this.context.router.push({
        pathname: '/profile'
      })
  },

  handleGetSuperfan: function () {
      this.handleCloseMobile()
      this.context.router.push({
        pathname: '/superfan'
      })
  },

  handleCloseMobile: function (){
    var menu = document.getElementById('menu');
    menu.checked = '';
  },

  render: function () {
    var path = this.props.location.pathname;

    return (
        <span>
          <Navigation
            path={path}
            mobileShow={this.show}
            mobileHide={this.hide} 
            logout={this.handleLogout} 
            GoHome={this.handleHome}
            GetArtists={this.handleGetArtists}
            GetProfile={this.handleGetProfile}
            GetSuperfan={this.handleGetSuperfan} />
          {React.cloneElement(
            this.props.children, 
            {key: this.props.location.pathname}
          )}
        </span>
    )
  }
})

function mapStateToProps(state) {
  return {
    state
  };
}

module.exports = connect(mapStateToProps, {AddToMyArtists, LogoutUser})(Main);