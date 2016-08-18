var React = require('react');
var LoggedIn = require('./LoggedIn');

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
        <img alt="Stagelink - Your fan-powered tour promoter" height="38" src="https://stagelink.s3.amazonaws.com/assets/logo-365305867ab32d75cd2b854048c7be89.png" width="158" />
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