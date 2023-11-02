"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extract;
Object.defineProperty(exports, "babel", {
  enumerable: true,
  get: function get() {
    return _babel.default;
  }
});
Object.defineProperty(exports, "typescript", {
  enumerable: true,
  get: function get() {
    return _typescript.default;
  }
});

var _ora = _interopRequireDefault(require("ora"));

var _babel = _interopRequireDefault(require("./babel"));

var _typescript = _interopRequireDefault(require("./typescript"));

var R = _interopRequireWildcard(require("ramda"));

var extractors = {
  babel: _babel.default,
  typescript: _typescript.default
};

function extract(filename, targetPath, options) {
  return R.values(extractors).some(function (ext) {
    if (!ext.match(filename)) return false;
    var spinner;
    if (options.verbose) spinner = (0, _ora.default)().start(filename);

    try {
      ext.extract(filename, targetPath, options);
    } catch (e) {
      if (options.verbose && spinner) {
        spinner.fail(e.message);
      } else {
        console.error("Cannot process file ".concat(e.message));
      }

      return true;
    }

    if (options.verbose && spinner) spinner.succeed();
    return true;
  });
}