var React = require('react');
var SelectPrice = require('./SelectPrice');
var styles = require('../../../styles/components/artists');

function ForgotPrice (props) {
  var { setPrice,
        setCurrency,
        hasPrice,
        Request
      } = props;
  return (
    <div id='forgotPrice' className='form-inline' style={styles.container}>
      <h2>Oops you forgot to enter a price...</h2> 
      <h3>How much would you pay?</h3>
      <SelectPrice modalText={true} setPrice={setPrice} setCurrency={setCurrency} />
      <div className='form-actions'>
        <div className='clearfix space-top'></div>
        {hasPrice ?    
            <button className='btn btn-facebook' type='button' onClick={Request}>
                Continue request with Robotbook
            </button>
          : ''
        }
      </div>
    </div>
  )
}

module.exports = ForgotPrice;