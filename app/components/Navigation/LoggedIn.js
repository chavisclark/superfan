var React = require('react');

function LoggedIn(props) {
  var { avatar,
        GetProfile,
        name,
        GetArtists,
        GetSuperfan,
        logout
      } = props;

  return (
    <span>
      <div className='nav-main__loginbox loginbox pull-right'>
        <a className="loginbox__userpic pull-left" href="#" onClick={GetProfile}>
          <img alt="Picture" src={avatar} />
        </a>
        <a className="loginbox__username" href="#" onClick={GetProfile}>{name}</a>
        <a className="loginbox__logout" href="#" onClick={logout}>Sign out</a>
        <div className='loginbox__dropdown dropdown'>
          <a data-toggle='dropdown' href='#' id='loginbox__dropdown-toggle'>
            <i className='fa fa-sort-down'></i>
          </a>
          <ul aria-labelled-by='loginbox__dropdown-toggle' className='dropdown-menu' role='menu'>
            <li><a href="#" onClick={GetArtists}>🎹&nbsp;&nbsp;Browse artists</a></li>
            <li><a className="connect-artist" href="#" onClick={GetSuperfan}>🤔&nbsp;&nbsp;Superfan? </a></li>
            <li className='divider'></li>
            <li><a className="connect-artist" href="https://github.com/chavisclark/superfan/README.md" target='_blank'>READ ME</a></li>
          </ul>
        </div>
      </div>
    </span>
  )
}

module.exports = (LoggedIn);