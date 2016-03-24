'use strict';

exports.__esModule = true;

var _preactCompat = require('preact-compat');

exports["default"] = _preactCompat.PropTypes.shape({
  subscribe: _preactCompat.PropTypes.func.isRequired,
  dispatch: _preactCompat.PropTypes.func.isRequired,
  getState: _preactCompat.PropTypes.func.isRequired
});