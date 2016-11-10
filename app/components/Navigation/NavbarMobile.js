var React = require('react');
var LoggedInMobile = require('./LoggedInMobile');
var logo = require('../../img/logo.png');

function NavbarMobile(props) {
  var { GoHome, 
        user,
        name, 
        GetProfile, 
        avatar, 
        GetArtists, 
        GetSuperfan, 
        logout 
      } = props;

  return (
    <div className="mobileMenuContainer visible-sm visible-xs">
      <a className="nav-main__logo" href="#" onClick={GoHome}>
        <img alt="Superfan" height="38" src={logo} width="158" />
      </a>
      <input id="menu" type="checkbox" name="menu" className="HiddenCheckbox"/>
      <label htmlFor="menu" className="mobileMenuIcon"></label>
      <h2 className="mobileMenuHeader">
        <a className="nav-main__logo" href="#" onClick={GoHome}>
          <img className='img-responsive mobilize pull-right' alt="Superfan" height="38" src={logo} width="158" />
        </a>
      </h2>
      <nav className="mobileMenu">
        <ul className="mobileMenu-list">
          {!user ? ''
           : <LoggedInMobile GetProfile={GetProfile}
                avatar={avatar}
                name={name} /> 
          }
          <li className="mobileMenu-item"><a href="#" onClick={GetArtists} className="mobileMenu-link">🎹&nbsp;&nbsp;Browse artists </a></li>
          <li className="mobileMenu-item"><a href="#" onClick={GetSuperfan} className="mobileMenu-link">🤔&nbsp;&nbsp;Superfan? </a></li>
          <li className="mobileMenu-item"><a href="https://github.com/chavisclark/superfan/blob/master/README.md" target='_blank'className="mobileMenu-link">READ ME</a></li>
          {!user ? '' : <li className="mobileMenu-item"><a href="#" onClick={logout} className="mobileMenu-link">Sign out</a></li>}
        </ul>
      </nav>
    </div>
  )
}

module.exports = (NavbarMobile);