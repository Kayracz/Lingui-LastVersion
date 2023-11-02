"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _ramda = _interopRequireDefault(require("ramda"));

var _pseudolocale = _interopRequireDefault(require("pseudolocale"));

var delimiter = "%&&&%";
_pseudolocale.default.option.delimiter = delimiter; // We do not want prepending and appending because of Plurals structure

_pseudolocale.default.option.prepend = "";
_pseudolocale.default.option.append = "";
/*
Regex should match HTML tags
It was taken from https://haacked.com/archive/2004/10/25/usingregularexpressionstomatchhtml.aspx/
Example: https://regex101.com/r/bDHD9z/3
*/

var HTMLRegex = /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g;
/*
Regex should match js-lingui plurals
Example: https://regex101.com/r/utnbQw/1
*/

var PluralRegex = /{\w*,\s*plural,\s*\w*\s*{|}\s*(zero|one|two|few|many|other)\s*({|})/g;
/*
Regex should match js-lingui variables
Example: https://regex101.com/r/dw1QHb/2
*/

var VariableRegex = /({\s*[a-zA-Z_$][a-zA-Z_$0-9]*\s*})/g;

function addDelimitersHTMLTags(message) {
  return message.replace(HTMLRegex, function (matchedString) {
    return "".concat(delimiter).concat(matchedString).concat(delimiter);
  });
}

function addDelimitersPlural(message) {
  return message.replace(PluralRegex, function (matchedString) {
    return "".concat(delimiter).concat(matchedString).concat(delimiter);
  });
}

function addDelimitersVariables(message) {
  return message.replace(VariableRegex, function (matchedString) {
    return "".concat(delimiter).concat(matchedString).concat(delimiter);
  });
}

var addDelimiters = _ramda.default.compose(addDelimitersVariables, addDelimitersPlural, addDelimitersHTMLTags);

function removeDelimiters(message) {
  return message.replace(new RegExp(delimiter, "g"), "");
}

function _default(message) {
  message = addDelimiters(message);
  message = _pseudolocale.default.str(message);
  return removeDelimiters(message);
}