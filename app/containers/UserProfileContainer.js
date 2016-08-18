var React = require('react');
var ReactRouter = require('react-router');
var {connect} = require('react-redux');
var MainWrapper = require('../components/MainWrapper');
var UserDetails = require('../components/User/UserDetails');
var MyArtistListWrapper = require('../components/User/MyArtistListWrapper');
var styles = require('../styles');

function UserProfileContainer (props) {
    var {user} = props;
    if (user) {
      return (
        <MainWrapper>
          <div className="jumbotron" style={styles.transparentBg}>
            <div className="col-md-4">
              <div className="profile-info">
                <UserDetails 
                    name={user.name.first}
                    surname={user.name.last}
                    avatar={user.avatar}
                    fanPower={user.fan_power} />
              </div>
            </div>
            <div className="my-artist-box col-md-8">
              <MyArtistListWrapper myArtists={user.myArtists}/>
            </div>
          </div>
        </MainWrapper>
      )      
    } else {
        return (<div></div>)
    }
}

function mapStateToProps(state) {
  return {
    user: state.user.loggedUser
  };
}

module.exports = connect(mapStateToProps)(UserProfileContainer);