var React = require('react');
var styles = require('../../../styles');

function LoginCheck(props) {
  var { userList,
        ReturnLogin,
        Login 
      } = props;

  var selectExisting,
      list = userList.map(function(_user, index) { 
        return ( <option key={index} name={_user.name.first} value={_user.username}>{_user.name.first} {_user.name.last} </option>)
      });

  if (!list.length) {
    selectExisting = <div style={styles.content}><h3>Hey I'm no magician!</h3> <h5>Log in with Robotbook to create some users first.. Geez</h5></div>
  } else {
     selectExisting = 
      <select className='select-simple input-field' style={styles.fullWidth} onChange={ReturnLogin}>
        <option value="">Select a robot...</option> 
        {list}
      </select>      
  } 
  return (
    <div className='form-inline' style={styles.loginBox}>
      <button type='button' className='btn btn-facebook' onClick={Login}>
        New Login with Robotbook
      </button>
      {!list.length ? ''
      :
        <span>
          <h5>or</h5>
          <h5>Select an existing user</h5>
          {selectExisting}
        </span>
      }
    </div>
  )
}

module.exports = LoginCheck;