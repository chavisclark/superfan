var React = require('react');
var PropTypes = React.PropTypes;
var NotVoted = require('./Vote/NotVoted');
var Voted = require('./Vote/Voted');

function Vote(props){
  var { hasVoted, 
       setCurrency, 
       setLocation, 
       setPrice, 
       triggerModal, 
       name, 
       stagename, 
       location, 
       facebookShare 
     } = props;

  return (
    <div className='voting-section pre-demand blur'>
        <div className='overlay'></div>
        {!hasVoted || hasVoted === false ? 
            <NotVoted setLocation={setLocation} 
                setPrice={setPrice} 
                setCurrency={setCurrency}
                triggerModal={triggerModal} /> 
         : 
            <Voted name={name} 
                stagename={stagename} 
                location={location} 
                facebookShare={facebookShare}/>
        }
    </div>
  );
}

module.exports = Vote;