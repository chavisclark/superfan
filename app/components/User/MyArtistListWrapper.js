var React = require('react');
var ReactDOM = require('react-dom');
var {Link} = require('react-router');
var MyArtistList =require('./MyArtistList');

function MyArtistListWrapper(props) {
  var {myArtists} = props;
  var title = !myArtists.length ? '' : <h3 className='text-center'>My Artists</h3>;
  
  return (
    <div className='mic-bg'>
      {title}
      <div className='center-layout'>
        <MyArtistList myArtists={myArtists}/>
      </div>
    </div>
  ) 
}

module.exports = MyArtistListWrapper;