var React = require('react');

function Section1() {  
  return (
    <div className="section" id="section1">
      <div className="intro">
        <h1>What's a Superfan?</h1>
        <p>Every artist has "Superfans"<br/>These are the fans that will engage in EVERY thing <br/> related to their favorite artist. 
        </p>
      </div>
      <div className="scroll-box">
        <span className="scroll-box-text"> Scroll for next</span>
        <br />
        <span className="hvr-hang"> &#8964;</span>
      </div>
    </div>
  )
}

module.exports = Section1;