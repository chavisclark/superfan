var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/components/loading');

var Loading = React.createClass({
  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 300
    }
  },

  getInitialState: function () {
    propTypes = {
      text: PropTypes.string,
      speed: PropTypes.number
    }
    this.originalText = this.props.text
    return {
      text: this.originalText
    }
  },
  
  componentDidMount: function () {
    var stopper = this.originalText + '...';
    var message;
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  },


  componentWillUnmount: function () {
    window.clearInterval(this.interval)
  },

  render: function () {
    var {text} = this.state; 
    return (
        <div style={styles.container}>
          <p style={styles.content}>{text}</p>
        </div>
    )
  }
})

module.exports = Loading;