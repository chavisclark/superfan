var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles/components/user');

function UserDetails (props) {
  var { avatar, 
        name, 
        surname, 
        fanPower
      } = props;
      
  return (
    <div style={styles.profileDiv}>
      <div style={styles.avatarDiv} className="img-circle">
        <div style={styles.circleDrop} className="img-circle">
          <img style={styles.profileImage} className="img-responsive img-circle profile" src={avatar} />
        </div>
      </div>
      <div style={styles.infoDiv}>
        <span style={styles.nameTag}>{name} {surname}</span>
        <br/>
        Total Fan Power: <b>{fanPower}</b>
      </div>
    </div>
  )
}

UserDetails.propTypes = {
  name: PropTypes.string,
}

module.exports = UserDetails;