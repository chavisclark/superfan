var React = require('react');
var LoggedIn = require('./LoggedIn');
var logo = require('../../img/logo.png')

function Navbar(props) {
  var { GoHome, 
        user, 
        GetProfile, 
        logout, 
        GetArtists, 
        GetSuperfan, 
        avatar, 
        name
      } = props;

  return (
    <div className='hidden-sm hidden-xs'>
      <a className="nav-main__logo" href="#" onClick={GoHome}>
        <img alt="Superfan" height="38" src={logo} width="158" />
      </a>
       {!user ? ''
        :
          <LoggedIn GetProfile={GetProfile}
            logout={logout}
            GetArtists={GetArtists}
            GetSuperfan={GetSuperfan}
            avatar={avatar}
            name={name}/>
      }
      <div className='nav-main__links'>
        <a href="#" onClick={GetArtists}>Browse artists</a>
        <a href="#" onClick={GetSuperfan}>What's a Superfan?</a>
      </div>
    </div>
  )
}

module.exports = (Navbar);