var React = require('react');
var {Link} = require('react-router');
var styles = require('../../../styles/components/artists');

function FanPowerIncrease() {
  return (
    <div id='fan_power-increase' className='form-inline' style={styles.container}>
      <h2>Thanks for helping our Superfan!</h2> 
      <h3>What's a Superfan you say?</h3>
      <div className='form-actions'>
        <div className='clearfix space-top'></div>
        <Link to='superfan'>
          <button className='btn btn-facebook' type='button'>
              Learn about Superfans
          </button>
        </Link>
        <div className='modal-text'> 
          or 
        </div>
        <Link to='profile'>
          <button className='btn btn-default' type='button'>
              Maybe next time
          </button>
        </Link>                  
      </div>
    </div>
  );
}

module.exports = FanPowerIncrease;