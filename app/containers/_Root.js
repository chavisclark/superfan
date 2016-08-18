var React = require('react');
var PropTypes = React.PropTypes;
var {Provider} = require('react-redux');
var {Router} = require ('react-router');
var routes = require ('../config/routes');

var _Root = React.createClass({
  render: function() {
    var { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
        </div>
      </Provider>
    )
  }
})

_Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

module.exports = _Root;