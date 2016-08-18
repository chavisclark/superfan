var React = require('react');
var styles = require('../styles');

function MainWrapper (props) {
  var {children, center} = props;
  var dynamicDiv = !center ? styles.transparentBg : styles.content;

  return (
    <div style={dynamicDiv}>
      {children}
    </div>
  )
};

module.exports = MainWrapper;