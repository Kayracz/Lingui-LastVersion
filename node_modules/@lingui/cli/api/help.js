"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helpRun = helpRun;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

/**
 * Detect how cli command is being run (npm, yarn) and construct help
 * for follow-up commands based on that.
 *
 * Example:
 * $ yarn extract
 * ...
 * (use "yarn compile" to compile catalogs for production)
 *
 * $ yarn lingui extract
 * ...
 * (use "yarn lingui compile" to compile catalogs for production)
 *
 * $ npm run extract
 * ...
 * (use "npm run compile" to compile catalogs for production)
 */
function helpRun(command) {
  return "".concat(preCommand, " ").concat(command);
}

var commands;

try {
  commands = JSON.parse(process.env.npm_config_argv).original.slice(0, -1);
} catch (e) {
  commands = ["run"];
}

var isYarn = process.env.npm_config_user_agent && process.env.npm_config_user_agent.includes("yarn");
var preCommand = [isYarn ? "yarn" : "npm"].concat((0, _toConsumableArray2.default)(commands)).join(" ");