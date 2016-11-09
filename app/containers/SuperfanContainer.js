var React = require('react');
var {Link} = require('react-router');
var Loading = require('../components/Loading');
var Superfan = require('../components/Superfan');
var pagepiling = require('pagepiling.js');

var SuperfanContainer = React.createClass({
  getInitialState: function (){
    return {
      isLoading: true
    }
  },

  componentDidMount: function() {
    setTimeout(function(){
      this.setState({
        isLoading: false
      })        
    }.bind(this), 1300)
    //pagepiling plugin attaches its css style across the entire app... 
    //I don't want that so I'm dynamically adding here
    if (!document.getElementById("pagepile")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='pagepile';
       ls.href= 'https://d3brgjqtir64ox.cloudfront.net/pagepiling.min.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("pagepile").disabled = false;
    }

    $(document).ready(function() {
        $('#pagepiling').pagepiling({
           sectionsColor: ['#ff7b0d', '#2ebe21', '#1e6596'],           
           navigation: {
             'position': 'right',
             'tooltips': ['🤔', '😍 ', '🙌']
           }
        });
    });
  },

  componentWillUnmount: function(){
    //Disabling pagepiling
    var pageStyle = document.getElementById("pagepile");
    pageStyle.disabled = true;
    $('#pp-nav').remove();
  },

  render: function() {
    var hide = 'hide';
    
    return (
      <span>
        {this.state.isLoading ? <Loading text='Charging up' /> : hide = '' }
        <Superfan hide={hide} />
      </span>
    )    
  }

})

module.exports = SuperfanContainer;