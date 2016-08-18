var React = require('react');

function Voted(props) {
  var { name, 
        stagename, 
        location, 
        facebookShare
      } = props;

  return (
    <nav className='steps-nav' id='steps-nav'>
        <div className='steps-nav__select-step'>
            <div className='steps-nav__teaser hidden-xs'>
                <div className='heading'>
                    Thanks for your vote!
                </div>
                <div className='text'>
                   Spread the word by sharing this link with your friends.
                </div>
            </div>
            <div className='steps-nav__steps'>
                <div className='form-inline newish' id='new_demand'>
                    <div className='steps-nav__select-city'>
                        <div className='steps-nav__info'>
                            <p>We want {name ? name : '@'+stagename} <br /> in <b>{location}</b></p>
                        </div>
                    </div>
                    <div className='form-actions'>
                        <button className='btn btn-facebook fa-2x' name='submit' onClick={facebookShare}>
                            <i className='fa fa-facebook fa-2x'></i> Share!
                        </button>
                        <div className='clearfix'></div>
                    </div>
                </div>
            </div>
        </div>
    </nav> 
  )
}

module.exports = Voted;