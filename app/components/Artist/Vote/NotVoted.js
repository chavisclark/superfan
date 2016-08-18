var React = require('react');
var SelectPrice = require('./SelectPrice');

function NotVoted(props) {
  var { setPrice,
        setCurrency,
        triggerModal,
        setLocation
      } = props;

  return (
      <nav className='steps-nav' id='steps-nav'>
          <div className='steps-nav__select-step'>
              <div className='steps-nav__teaser hidden-xs'>
                  <div className='heading'>
                      Vote now!
                  </div>
                  <div className='text'>
                      Request a show to access exclusive content and early bird tickets.
                  </div>
                  <i className='icon-lock'></i>
              </div>
              <div className='steps-nav__steps'>
                  <div className='form-inline newish' id='new_demand'>
                      <div className='steps-nav__select-city'>
                          <div className='steps-nav__info'>
                              <p>Please come to</p>
                          </div>
                            <div className="form-group">
                              <label className="sr-only" htmlFor="address">Address</label>
                            </div>
                          <input autoCapitalize='off' autoComplete='off' autoCorrect='off' className='input-field city-autoComplete' data-display-key='name' data-title='Where should the show take place?' data-toggle='tooltip' data-trigger='manual' id='shadow_address' name='shadow_address' placeholder='Type in your town' type='text' onBlur={setLocation} />
                          <input name='address' type='hidden'/>
                      </div>
                      <SelectPrice setPrice={setPrice} setCurrency={setCurrency} />

                      <div className='form-actions'>
                          <button className='btn btn-facebook' type='button' onClick={triggerModal}>
                              Request with Robotbook
                          </button>
                          <div className='clearfix'></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='no-commit'>Your vote does not commit you to buy a ticket</div>
      </nav>
  )
}

module.exports = NotVoted;
