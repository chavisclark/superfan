var React = require('react');
var {Link} = require('react-router');
var styles = require('../../styles');

function LoggedInBucket (props) {
  var { recentArtistName,
        recentArtistStage,
        recentArtistAvatar,
        recentArtistLocation,
        recentArtistPrice,
        recentArtistCurrency,
        facebookShare
      } = props;

  return (
    <span>
     <h3 className='space-bottom mobilize-text'>Here's your most recent demand</h3>
     <div className='col-md-4 col-sm-4 hoverable'>
       <Link to={recentArtistStage}>
          <img className='img-responsive center-block mobilize' src={recentArtistAvatar} />
       </Link>
       <div>
        {recentArtistName}
       </div> 
     </div>
     <div className='col-md-8 hidden-xs'  style={styles.cardDrop}> 
       Let's bring <span className='no-break'>{recentArtistName}</span> to <span className='no-break'>{recentArtistLocation}</span>
       <p>
         You'd spend up to {recentArtistPrice} {recentArtistCurrency} to attend!
       </p>
       <Link to='/artists'>
         <button className="btn btn-lg btn-facebook" onClick={facebookShare}>Promote {recentArtistName}</button>
       </Link>
       <div className='white-text'> 
        or 
       </div>
       <Link to='/artists'>
         <button className="btn btn-lg btn-success">Check out some new artists</button>
       </Link>
     </div>
    </span>
  )
}

module.exports = LoggedInBucket;