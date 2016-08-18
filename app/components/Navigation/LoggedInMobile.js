var React = require('react');
var styles = require('../../styles/components/navigation');

function LoggedInMobile(props) {
  var { avatar, 
        name, 
        GetProfile
      } = props;

  return (
    <li className="mobileMenu-item space-bottom" >
      <a className="loginbox__userpic no-decoration" style={styles.bucketNoMargin} href="#" onClick={GetProfile}>
        <img alt="Picture" src={avatar} />&nbsp;&nbsp;
        <span className="mobile-username">{name}</span>
      </a>
    </li>
  )
}

module.exports = (LoggedInMobile);