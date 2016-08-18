var React = require('react');
var PropTypes = React.PropTypes;
var Voted = require('./Banner/Voted');
var NotVoted = require('./Banner/NotVoted');

function Banner (props) {
  var { voted, 
        demand, 
        name, 
        avatar, 
        stagename
      } = props;

  return (
    <div className='event-infobox artist-detail'>
      <div className='header-main__manager'></div>
      <div className='artist-image'>
          <img alt={name} src={avatar} />
      </div>
      <div className='event-infobox__desc'>
        <h2 className='hidden-md hidden-lg'>
          <span>{!name && !stagename ? '' : name || '@'+stagename}</span>
          <span className="fa fa-check-circle artist--verified ico-info" data-toggle="tooltip" title="Verified artist"></span>
        </h2>
        {!voted ? 
            <NotVoted name={name} stagename={stagename} avatar={avatar} /> 
         : 
            <Voted name={name} stagename={stagename} avatar={avatar} demand={demand} />
        }
      </div>
    </div>
  )
}

Banner.propTypes = {
  name: PropTypes.string,
}

module.exports = Banner;