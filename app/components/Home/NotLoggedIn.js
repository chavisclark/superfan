var React = require('react');
var {Link} = require('react-router');
var PropTypes = React.PropTypes;
var Modal = require('../Modal');
var NotLoggedInSelect = require('./NotLoggedInSelect');
var styles = require('../../styles')

function NotLoggedIn (props) {
  var { Login,
        Existing,
        isPopupOpen,
        onClosePopup,
        userList,
        ReturnLogin
      } = props;

  return (
    <span className='center-layout boxCover'> 
      <div className='col-sm-12 col-xs-12'>
        <h1 className='shadow'>Super<span className='orange-text'>fan</span></h1>
        <div className='heading white-text shadow'> 
          A prototype feature 
        </div>
        <Link to='/profile'>
          <button type='button' className='btn btn-facebook white-text' style={styles.clickable} onClick={Login}>
            Create Login with Robotbook
          </button>
        </Link>
        <div className='white-text'> 
          or 
        </div>
        <button type='button' className='btn btn-rectangle white-text' style={styles.clickable} onClick={Existing}>
          Select from existing users
        </button>
        <Modal isOpen={isPopupOpen} closePopupProp={onClosePopup}>
          <div style={styles.form}>
            <NotLoggedInSelect userList={userList} ReturnLogin={ReturnLogin} />
          </div>
        </Modal>
      </div>
    </span>
  )
}

module.exports = NotLoggedIn;