var React = require('react');

function Section3() {  
  return (
    <div className="section" id="section3">
      <div className="intro">
        <h1>Why not reward them?</h1>
        <p>This prototype feature lets fans gain points <br/> when they get their friends to vote <br/> 
          <span className='orange-text' style={{'fontSize': '16px'}}>(3 points per new vote)</span>
        </p>
        <h5>&nbsp;</h5>
      </div>
      <div className="scroll-box">
        <span className="scroll-box-text"> Nothing left to scroll</span><br />
        <span className="hvr-hang">😄</span>
      </div>
    </div>
  )
}

module.exports = Section3;