var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../../styles/components/artists');

function Voted (props) {
  var {name, stagename, demand} = props;
  
  return (
    <div className='event-infobox__desc'>
        <h2 className='hidden-md hidden-lg'>
          <span>{!name && !stagename ? '' : name || '@'+stagename}</span>
          <span className="fa fa-check-circle artist--verified ico-info" data-toggle="tooltip" title="Verified artist"></span>
        </h2>
        <div className='hidden-sm hidden-xs'>
          <h2 style={styles.header}> 
            Keep sharing to help bring <span className='no-break'>{name}</span> to <span className='no-break'>{demand}!</span>
          </h2>
            <a className="btn btn-cta" href="#steps-nav">
              Spread the word
            </a>
        </div>
    </div>
  )
}

module.exports = Voted;