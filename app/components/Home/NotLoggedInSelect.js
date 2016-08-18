var React = require('react');
var {Link} = require('react-router');
var styles = require('../../styles');

function NotLoggedInSelect (props) {
  var {userList, ReturnLogin} = props;

  var selectExisting,
      list = userList.map(function(user, index) { 
        return (<option key={index} name={user.name.first} value={user.username}>{user.name.first} {user.name.last} </option>)
      });
      
  if (!list.length) {
    selectExisting = 
        <div style={styles.content}>
          <h3>Hey I'm no magician!</h3> 
          <h5>Use Robotbook to create some users first.. Geez</h5>
        </div>
  } else {
     selectExisting = 
        <div>
          <p className='modal-text'>
            All of the data syncs to your localStorage, <br /> so take it easy :)
          </p>
          <select onChange={ReturnLogin}>
            <option value="">Select a robot...</option> 
            {list}
          </select>
        </div>      
  }
  return (
    <span>{selectExisting}</span>
  )
}

module.exports = NotLoggedInSelect;