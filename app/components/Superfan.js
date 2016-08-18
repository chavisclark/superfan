var React = require('react');
var Section1 = require('./Superfan/Section1');
var Section2 = require('./Superfan/Section2');
var Section3 = require('./Superfan/Section3');

function Superfan(props) {
  var {hide} = props;

  return (
    <div id="pagepiling" className={hide} style={{"color": 'white'}}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>

  )
}

module.exports = Superfan;