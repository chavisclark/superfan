var React = require('react');
var {connect} = require('react-redux');
var dynamics = require('dynamics.js');
var Vote = require('./Vote');
var Modal = require('../Modal');
var ForgotPrice = require('./Vote/ForgotPrice');
var Thanks = require('./Vote/Thanks');
var FanPowerIncrease = require('./Vote/FanPowerIncrease');
var LoginCheck = require('./Vote/LoginCheck');
var githubHelpers = require('../../utils/githubHelpers');
var {loadState} = require('../../utils/localStorage');
var {randomUser} = require('../../utils/robotBook');
var {LoginUser, ReturnLogin} = require('../../actions/users');
var {AddToMyArtists, increment} = require('../../actions/users');

var INITIAL_LOCATION = {
  address: 'London, United Kingdom',
  position: {
    latitude: 51.5085300,
    longitude: -0.1257400
  }
};

var INITIAL_MAP_ZOOM_LEVEL = 8;

var ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
};

var VoteContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    
    getInitialState: function() {
        return {
            isGeocodingError: false,
            foundAddress: INITIAL_LOCATION.address,
            price: '',
            currency: 'EUR',
            userList: [],
            isPopupOpen: false,
            forgotPrice: false,
            fanPowerInc: false,
            thanks: false,
            error: false
        }
    },

    geocodeAddress: function (address) {
      this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          this.setState({
            foundAddress: results[0].formatted_address,
            isGeocodingError: false
          });

          this.map.setCenter(results[0].geometry.location);
          this.marker.setPosition(results[0].geometry.location);

          return;
        }

        this.setState({
          foundAddress: null,
          isGeocodingError: true
        });

        this.map.setCenter({
          lat: ATLANTIC_OCEAN.latitude,
          lng: ATLANTIC_OCEAN.longitude
        });

        this.marker.setPosition({
          lat: ATLANTIC_OCEAN.latitude,
          lng: ATLANTIC_OCEAN.longitude
        });

      }.bind(this));
    },

    handleSetLocation: function (event) {
      event.preventDefault();
      var address = event.target.value;
      this.geocodeAddress(address);
    },

    handleSetPrice: function (event) {
      event.preventDefault();
      var price = event.target.value;
      this.setState({
        price: price
      })
    },

    handleSetCurrency: function (event) {
      event.preventDefault();
      var currency = event.target.value;
      this.setState({
        currency: currency
      })
    },
  
    handleLogin: function(e) {
      e.preventDefault();
      var user = randomUser();
      user.username = user.name.first.toLowerCase();
      if (user.username) {
         this.props.LoginUser(user)
         return this.handleVote()
      }      
    },

    handleReturnLogin: function(e) {
        e.preventDefault();
        var userCheck = this.state.userList.filter(function(u) {
          return u.username === e.target.value
        });
        var user = userCheck[0];
        if (user) {
          this.props.ReturnLogin({user})
          return this.handleVote()
        }
    },

    handleVote: function(price) {
      var { query,
            state,
            stagename,
            increment,
            AddToMyArtists
          } = this.props;

      var { foundAddress,
            price,
            currency
          } = this.state;

      if (query) {
        if (query === state.user.loggedUser.username) {
          this.setState({
            isPopupOpen: true,
            error: true
          });
          return;
        } else {
            this.setState({
              isPopupOpen: true,
              fanPowerInc: true
            });

            githubHelpers.getArtistInfo(stagename)
            .then(function(artist) {
              artist.location = foundAddress;
              artist.price = price;
              artist.currency = currency;
              AddToMyArtists(artist)
            }.bind(this))
            increment(query, 3)    
        }
      } else {
          // Close Modal so it can animate open again
          this.setState({
              isPopupOpen: false
            });
          setTimeout(function(){
            this.setState({
                isPopupOpen: true,
                thanks: true
              });
          }.bind(this), 100)

          githubHelpers.getArtistInfo(stagename)
          .then(function(artist) {
            artist.location = foundAddress;
            artist.price = price;
            artist.currency = currency;
            AddToMyArtists(artist)
          }.bind(this)) 

          setTimeout(function(){
            this.setState({
                isPopupOpen: false,
              }); 
            this.context.router.push({
              pathname: 'profile'
            })
          }.bind(this), 2000)
      }
    },
  
    handleRequest: function() {
      if (!this.state.price) {      
        this.setState({
          isPopupOpen: true,
          forgotPrice: true
        });
      } else {
          if (this.props.state.user.loggedUser) {
              this.setState({
                isPopupOpen: true,
                forgotPrice: false,
              });
            return this.handleVote()

          } else {
            this.setState({
              forgotPrice: false,
              isPopupOpen: true,
            });
          }         
      }
    },
    
    isOpen: function () {
      this.setState({
        isPopupOpen: true
      })
    },

    onClosePopup: function() {
        this.setState({
          isPopupOpen: false
        });
    },

    onFacebookShare: function() {
      if (this.props.state.user.loggedUser) {
        location.href = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.hostname + (window.location.port ? ':' + window.location.port: '') +  '/' + this.props.stagename+'?fan='+this.props.state.user.loggedUser.username;
      }
    },

    componentDidMount: function() {
      var mapElement = this.mapElement;
      var { query,
            demand,
            state,
            increment
          } = this.props;

      this.setState({
        userList: !loadState() || loadState().user.users === undefined ? [] : loadState().user.users
      });

      this.map = new google.maps.Map(mapElement, {
        zoom: INITIAL_MAP_ZOOM_LEVEL,
        center: {
          lat: INITIAL_LOCATION.position.latitude,
          lng: INITIAL_LOCATION.position.longitude
        }
      });

      this.marker = new google.maps.Marker({
        map: this.map,
        position: {
          lat: INITIAL_LOCATION.position.latitude,
          lng: INITIAL_LOCATION.position.longitude
        }
      });

      this.geocoder = new google.maps.Geocoder();
      
      if (demand) {
        this.geocodeAddress(demand)
      }

      if (query) {
        if (state.user.loggedUser) {
          if (query === state.user.loggedUser.username) {
              return;
          } else {
              increment(query, 1)        
          }
        } else {
          increment(query, 1) 
        }        
      }
    },

    componentDidUpdate: function() {
      if (this.state.isPopupOpen === true) {
        this.animateModal()
      }
    },

    animateModal: function() {
        var modal = document.querySelector('span')
        while (modal !== null) {
          var div = document.getElementById('modal-box')
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

    setMapElementReference: function (mapElementReference) {
      this.mapElement = mapElementReference;
    },

    render: function() {
      var { forgotPrice,
            isPopupOpen,
            price,
            thanks,
            fanPowerInc,
            user,
            userList,
            foundAddress,
            error, 
            isGeocodingError
          } = this.state;

      var { stagename,
            name,
            state,
            demand,
            voted
          } = this.props;

       return (
        <div>
          <Modal isOpen={isPopupOpen} closePopupProp={this.onClosePopup}>
            {forgotPrice ?
              <ForgotPrice hasPrice={price} 
                  setPrice={this.handleSetPrice} 
                  setCurrency={this.handleSetCurrency}
                  Request={this.handleRequest} />
              : ''}
            {thanks ?
              <Thanks />
              : ''}
            {fanPowerInc ? 
              <FanPowerIncrease />
              : ''}
            {!state.user.loggedUser && !forgotPrice ? 
              <LoginCheck Login={this.handleLogin} 
                  userList={userList} 
                  ReturnLogin={this.handleReturnLogin}/>
              : ''}
            {error ?
              <Error name={state.user.loggedUser.name.first} />
              : ''}
          </Modal>
          <Vote
              animate={this.isOpen} 
              setLocation={this.handleSetLocation}
              setPrice={this.handleSetPrice}
              setCurrency={this.handleSetCurrency} 
              stagename={stagename}
              name={name}
              triggerModal={this.handleRequest}
              hasVoted={voted}
              facebookShare={this.onFacebookShare}
              location={demand} />
          {isGeocodingError ? 
             <p className="bg-danger">Address not found.</p> 
           : <p className="bg-info">{foundAddress}</p> 
          }
          <div className="map" ref={this.setMapElementReference}></div>
        </div>
      )      
    }
})

function mapStateToProps(state) {
  return {
    state
  };
}

module.exports = connect(mapStateToProps, {AddToMyArtists, increment, LoginUser, ReturnLogin})(VoteContainer);