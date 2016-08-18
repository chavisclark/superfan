var React = require('react');
var styles = require('../../../styles/components/artists');

function Thanks() {
  return (
      <div id='thanks' className='form-inline' style={styles.container}>
        <h2>Thanks for your vote</h2> 
        <h3>Wait a sec while we take you to your profile!</h3>
        <div className='form-actions'>
          <div className='clearfix space-top'></div>
        </div>
      </div>
  )
}

module.exports = Thanks;