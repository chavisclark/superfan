var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/components/modal');

function Modal(props) {
  var {isOpen, closePopupProp, children} = props;
  if (isOpen === false) {
    return null
  } else {
      return (
        <section style={styles.popupContainer}>
            <div id='modal-box' style={styles.popup}>
                {children}
            </div>
            <div style={styles.backdrop} onClick={closePopupProp}></div>
        </section> 
      )    
  }
}

module.exports = Modal;