var React = require('react');
var dynamics = require('dynamics.js');
var PropTypes = React.PropTypes;
var Modal = require('../Modal');
var MyArtistShare = require('./MyArtistShare')
var {connect} = require('react-redux');
var styles = require('../../styles/components/user');

var MyArtist = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },    

    getInitialState: function () {
        return {
            isPopupOpen: false
        }
    },

    handlePromote: function() {
        this.setState({
            isPopupOpen: true
        });
    },

    handleGetProfile: function() {
        this.context.router.push({
            pathname: '/'+this.props.info.login
        })
    },

    handleFacebookShare: function() {
        location.href = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.hostname + (window.location.port ? ':' + window.location.port: '') +  '/' + this.props.info.login + '?fan=' + this.props.user.username;
        this.handleClosePopup();
    },

    handleTwitterShare: function() {
        location.href = 'https://twitter.com/intent/tweet?url=' + window.location.hostname + (window.location.port ? ':' + window.location.port: '') +  '/' + this.props.info.login + '?fan=' + this.props.user.username + '&via=stagelinktweet&related=stagelinktweet';
        this.handleClosePopup();
    },

    handleClosePopup: function() {
        this.setState({
          isPopupOpen: false
        });
    },

    animateModal: function() {
      // Animate the popover
        var modal = document.querySelector('span')
        while (modal !== null) {
          var div = document.getElementById('modal-box')
          while (div !== null) {
            dynamics.animate(div, {
              translateY: -100
            }, {
              type: dynamics.spring,
              friction: 400,
              duration: 1300
            })
          break;
          } 
        break;
        }  
    },
    
    componentDidUpdate: function() {
      if (this.state.isPopupOpen === true) {
        this.animateModal()
      }
    },

    render: function() {
      var {info} = this.props;
      return (
        <div style={styles.bucket} className='col-lg-3 col-md-4 col-sm-4'>
          <div style={styles.label} className='hoverable'> 
              <img className="img-responsive" style={styles.clickable} src={info.avatar_url} onClick={this.handleGetProfile}/>
              <label className="btn btn-facebook form-control" onClick={this.handlePromote}>PROMOTE</label>
          </div>
          <Modal isOpen={this.state.isPopupOpen} closePopupProp={this.handleClosePopup}>
              <MyArtistShare
                  name={info.name}
                  stagename={info.login}
                  facebookShare={this.handleFacebookShare}
                  twitterShare={this.handleTwitterShare}
                  onClosePopup={this.handleClosePopup} />
          </Modal>
        </div>
      );
    }
})

function mapStateToProps(state) {
  return {
    user: state.user.loggedUser
  };
}

module.exports = connect(mapStateToProps)(MyArtist);