var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');
var {browserHistory} = require('react-router');
var configStore = require('./config/store');
var _Root = require('./containers/_Root');
var sentryKey = '449e192ecc5f44ca9a2d81a08452a8c3';
var sentryAppId = '91991';
var sentryURL = 'https://'+sentryKey+'@app.getsentry.com/'+sentryAppId;
var store = configStore();

var _APP_INFO = {
  name: 'Superfan',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install()

ReactDOM.render(<_Root 
                  history={browserHistory} 
                  store={store} />, 
                  document.getElementById('app')
                );

