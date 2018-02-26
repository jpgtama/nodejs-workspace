'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map');

Object.keys(_map).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _map[key];
    }
  });
});

var _filter = require('./filter');

Object.keys(_filter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filter[key];
    }
  });
});

var _reduce = require('./reduce');

Object.keys(_reduce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reduce[key];
    }
  });
});