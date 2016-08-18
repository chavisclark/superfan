var React = require('react');
var styles = require('../../../styles/artists');

function Error(props) {
  return (
    <div id='error' className='form-inline' style={styles.container}>
      <h2>Uh oh, {props.name}</h2> 
      <h3>You can't vote using your own Superfan link...</h3>
      <div className='form-actions'>
        <div className='clearfix space-top'></div>
      </div>
    </div>
  )
}

module.exports = Error;