exports.loadState = function() {
  try {
    var serializedState = localStorage.getItem('state');
    if (serializedState == null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

exports.saveState = function (state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // TODO: Handle Error
  }
}