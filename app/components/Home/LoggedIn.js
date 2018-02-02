var React = require('react');
var {Link} = require('react-router');
var styles = require('../../styles');
var LoggedInBucket = require('./LoggedInBucket');

function LoggedIn (props) {
var { name,
     artists,
     recentArtistStage,
     recentArtistAvatar,
     recentArtistName,
     recentArtistLocation,
     recentArtistCurrency,
     facebookShare
   } = props;

  return (
    <span className='center-layout boxCover' style={styles.container}>
      <h2 className='orange-text shadow mobilize-text'>Hey {name}!</h2>
      <div className='col-sm-12 col-xs-12'>
      {artists < 0 ?
        <Link to='/artists'>
          <button className="btn btn-lg btn-success">Check out some new artists</button>
        </Link> 
      : <LoggedInBucket recentArtistStage={recentArtistStage}
          recentArtistAvatar={recentArtistAvatar}
          recentArtistName={recentArtistName}
          recentArtistLocation={recentArtistLocation}
          recentArtistCurrency={recentArtistCurrency}
          facebookShare={facebookShare} />
      }
      </div>
    </span>
  )
}

module.exports = LoggedIn;