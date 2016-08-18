var React = require('react');
var {connect} = require('react-redux');
var MainWrapper = require('../components/MainWrapper');
var Banner = require('../components/Artist/Banner');
var VoteContainer = require('../components/Artist/VoteContainer');
var githubHelpers = require('../utils/githubHelpers');

var ArtistProfileContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    
    getInitialState: function() {
        return {
            isLoading: true,
            currentArtist: {},
            voted: false,
        }
    },

    componentDidMount: function() {
      var stagename = this.props.routeParams.stagename;
        githubHelpers.getArtistInfo(stagename)
        .then(function(artist) { 
          this.setState({
            isLoading: false,
            currentArtist: artist,
          })
        }.bind(this))
    },

    render: function() {
      var demand,
          voted,
          artistSearch;
      
      var {state, location} = this.props;
      var {currentArtist} = this.state;

      if (state.user.loggedUser) {

          artistSearch = state.user.loggedUser.myArtists.filter(function(artist) {
            return artist.login === currentArtist.login;
          }.bind(this))

        if (artistSearch.length) {
          var voted = true;
          var demand = artistSearch[0].location;
        } 
      }

      return (
        <MainWrapper>
          <Banner 
            name={currentArtist.name}
            stagename={currentArtist.login}
            avatar={currentArtist.avatar_url}
            voted={voted} 
            demand={demand} />
          <VoteContainer
            name={currentArtist.name} 
            stagename={currentArtist.login} 
            voted={voted}
            demand={demand} 
            query={location.query.fan} />
        </MainWrapper>
      )      
  }

})

function mapStateToProps(state) {
  return {
    state
  };
}

module.exports = connect(mapStateToProps)(ArtistProfileContainer);