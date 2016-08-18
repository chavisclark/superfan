var React = require('react');
var ReactDOM = require('react-dom');
var {Link} = require('react-router');
var MyArtist = require('./MyArtist');

function MyArtistList(props) {
  var {myArtists} = props;
  var artistList = !myArtists.length ? 
  <div className='center-layout middle'>
    <div className='column-block'>
      <h4>When you vote for your favorite artists, they'll end up right here so you can keep track of them... Sweet!</h4>
      <Link to='artists'>
        <button className='btn btn-facebook btn-lg'>
          Bring some artists to your town!
        </button>
      </Link>
    </div>
  </div>
: myArtists.map(function(artist, index){
    return (
          <MyArtist 
            key={index}
            info={artist} />

    );        
  })

  return ( <div className='my-artist-list'>{artistList}</div> ) 
}

module.exports = MyArtistList;