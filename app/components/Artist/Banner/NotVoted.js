var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../../styles/components/artists');

function NotVoted (props) {
  var {name, stagename} = props;

  return (
    <div className='event-infobox__desc'>
      <h2 className='hidden-md hidden-lg'>
        <span>{!name && !stagename ? '' : name || '@'+stagename}</span>
        <span className="fa fa-check-circle artist--verified ico-info" data-toggle="tooltip" title="Verified artist"></span>
      </h2>
      <div className='hidden-sm hidden-xs'>
        <h2 style={styles.header}> 
          Dear <span className="artist-name">{!name && !stagename ? '' : name || '@'+stagename} <span className="fa fa-check-circle artist--verified ico-info" title="Verified artist"></span></span>,
          <br />please come to my town! 
        </h2>
          <a className="btn btn-cta" href="#steps-nav">
            Request a show
          </a>
      </div>
    </div>
  )
}

module.exports = NotVoted;