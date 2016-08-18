var React = require('react');
var ReactRouter = require('react-router');
var {connect} = require('react-redux');
var dynamics = require('dynamics.js');
var MainWrapper = require('./MainWrapper');
var NotLoggedIn = require('./Home/NotLoggedIn');
var LoggedIn = require('./Home/LoggedIn');
var {loadState} = require('../utils/localStorage');
var {LoginUser, ReturnLogin} = require('../actions/users');
var {randomUser} = require('../utils/robotBook');
var styles = require('../styles');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      user: {},
      userList: [],
      artist: {},
      isPopupOpen: false
    }
  },

  componentWillMount: function(){
    document.getElementById('app').className += 'orangeBg';
  },

  componentDidMount: function (){
      this.setState({
        userList: !loadState() || loadState().user.users === undefined ? [] : loadState().user.users
      })
  },  

  componentDidUpdate: function() {
    if (this.state.isPopupOpen === true) {
      this.animateModal()
    }
  },

  componentWillUnmount: function() {
      document.getElementById('app').classList.remove('orangeBg');
  },

  handleExistingRequest: function() {
      this.setState({
          isPopupOpen: true
      });
  },

  handleClosePopup: function() {
      this.setState({
        isPopupOpen: false
      });
  },

  handleLogin: function(e) {
    e.preventDefault();
    var user = randomUser();
    user.username = user.name.first.toLowerCase();
    if (user.username) {
       this.props.LoginUser(user)
    }      
  },

  handleReturnLogin: function(e) {
      e.preventDefault();

      var userCheck = this.state.userList.filter(function(u) {
        return u.username === e.target.value
      });
      var user = userCheck[0];
      this.props.ReturnLogin({user})
      this.context.router.push({
        pathname: '/profile'
      })
  },

  handleFacebookShare: function() {
    if (this.props.state.user.loggedUser) {
      var promo = !this.props.state.user.loggedUser.myArtists.length ? 0 : this.props.state.user.loggedUser.myArtists.length
      promo = promo - 1;
      promoArtist = this.props.state.user.loggedUser.myArtists[promo];

      location.href = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.hostname + (window.location.port ? ':' + window.location.port: '') +  '/' + promoArtist.login + '?fan=' + this.props.state.user.loggedUser.username;     
    }
  },

  animateModal: function() {
    // Animate the popover
      var modal = document.querySelector('span')
      // Making sure React has rendered the elements I need in order to animate the DOM
      while (modal !== null) {
        var div = document.getElementById('modal-box');
        while (div !== null) {
          dynamics.animate(div, {
            translateY: -100
          }, {
            type: dynamics.spring,
            friction: 400,
            duration: 1300
          })
          break;
        }      
        break;
      }
  },
  
  render: function() {
    var { user } = this.props.state;
    if (user.loggedUser) {
      var recent, recentArtist;

      recent = !user.loggedUser.myArtists.length ? 0 : user.loggedUser.myArtists.length
      recent = recent - 1;
      recentArtist = user.loggedUser.myArtists[recent];      
    }
    return (
      <div className="jumbotron col-sm-12 white-text" style={styles.transparentBg}>
          <div className='space-top'>&nbsp;</div>
          <MainWrapper center={true} unsplash={true}>
            {!user.loggedUser ?
              <NotLoggedIn
                Login={this.handleLogin} 
                Existing={this.handleExistingRequest}
                ReturnLogin={this.handleReturnLogin}
                userList={this.state.userList}
                isPopupOpen={this.state.isPopupOpen}
                onClosePopup={this.handleClosePopup} />
              :
              <LoggedIn 
                name={user.loggedUser.name.first}
                recentArtistStage={recentArtist ? recentArtist.login : ''}
                recentArtistName={recentArtist ? recentArtist.name : ''}
                recentArtistAvatar={recentArtist ? recentArtist.avatar_url : ''}
                recentArtistPrice={recentArtist ? recentArtist.price : ''}
                recentArtistCurrency={recentArtist ? recentArtist.currency : ''}
                recentArtistLocation={recentArtist ? recentArtist.location : ''}
                facebookShare={this.handleFacebookShare}
                artists={recent} />
            }
          </MainWrapper>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    state
  };
}

module.exports = connect(mapStateToProps, {LoginUser, ReturnLogin})(Home);