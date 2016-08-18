var React = require('react');
var {connect} = require('react-redux');
var Navbar = require('./Navigation/Navbar');
var NavbarMobile = require('./Navigation/NavbarMobile');
var styles = require('../styles/components/navigation');

function Navigation(props) {
  var name, avatar,
    { GoHome,
        user,
        GetProfile, 
        logout,
        GetArtists,
        GetSuperfan
    } = props;

    if (user) {
      name = user.name.first;
      avatar = user.avatar;
    }

  return (
    <div>
      <nav className='nav-main' role='main' style={styles.onTop}>
        <Navbar GoHome={GoHome}
            user={user}
            GetProfile={GetProfile}
            logout={logout}
            GetArtists={GetArtists}
            GetSuperfan={GetSuperfan}
            avatar={avatar}
            name={name} />
        <NavbarMobile GoHome={GoHome}
            user={user}
            GetProfile={GetProfile}
            logout={logout}
            GetArtists={GetArtists}
            GetSuperfan={GetSuperfan}
            avatar={avatar}
            name={name} />
      </nav>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user.loggedUser
  };
}

module.exports = connect(mapStateToProps)(Navigation);