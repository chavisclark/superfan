var React = require('react');

function SelectPrice (props) {
  var { modalText, 
        setPrice, 
        setCurrency
      } = props;
      
  return (
    <div className='steps-nav__select-price'>
        <div className='steps-nav__info'>
            <p className={modalText ? 'modal-text' : ''}>I'd pay up to</p>
        </div>                         
        <div className='demand-price-wrapper form-group' data-title='How much would you pay for a ticket?' data-toggle='tooltip' data-trigger='manual'>
            <select onChange={setPrice} id="price" name="price" required>
                <option value=""></option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
            </select>
            <select onChange={setCurrency} id="currency" name="currency" required>
                <option defaultValue="EUR">€</option>
                <option value="USD">$</option>
                <option value="GBP">£</option>
            </select>
            <div className='clearfix'></div>
        </div>
    </div>
  )
}

module.exports = SelectPrice;