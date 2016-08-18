var React = require('react');
var PropTypes = React.PropTypes;

function ArtistBucket (props) {
  var { onGetArtist,
        avatar,
        name,
        login
      } = props;
      
  return (
  <figure className='artist-bucket col-md-4 hoverable' style={styles.clickable} onClick={onGetArtist}>
    <img src={avatar}/>
    <figcaption>
      <h2 className='name'>{name}</h2>
      <span className='login'>@{login}</span>
    </figcaption>
  </figure>
  )
}

var styles = {
  clickable: {
    cursor: 'pointer'
  }
}

module.exports = ArtistBucket;