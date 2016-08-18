var React = require('react');
var {connect} = require('react-redux');
var Loading = require('../components/Loading');
var MainWrapper = require('../components/MainWrapper');
var ArtistBucket = require('../components/Artist/ArtistBucket');
var githubHelpers = require('../utils/githubHelpers');
var styles = require('../styles');

var ArtistsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function (){
    return {
      isLoading: true,
      artists: []
    }
  },

  componentDidMount: function () {
    githubHelpers.getArtists()
    .then(function(artists) { 
      this.setState({
        artists: artists
      })
    }.bind(this))
    setTimeout(function(){
      this.setState({
        isLoading: false
      })        
    }.bind(this), 1300)
  },

  handleGetArtist: function (stagename) {
    this.context.router.push({
      pathname: '/'+stagename
    })
  },

  render: function() {
    var that = this;
    var {artists, isLoading} = this.state;
    var artistList = !artists ? '' 
    :
    artists.map(function(artist, index) {
      return (
        <ArtistBucket
            key={index}
            name={artist.name}
            avatar={artist.avatar_url}
            login={artist.login} 
            onGetArtist={that.handleGetArtist.bind(that, artist.login)} />
        )
    });

    return (
      <MainWrapper>
        <div className='center-layout'>
        { isLoading ? 
          <Loading comment='Calling Github ☎️' />
          :
          artistList
        }
        </div>
      </MainWrapper>
    )
  }
})
function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}

module.exports = connect(mapStateToProps)(ArtistsContainer);