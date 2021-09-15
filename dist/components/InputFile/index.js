"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import upload from "../../assets/upload.png";
var InputFile = function InputFile(_ref) {
  var onChangeHandler = _ref.onChangeHandler;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-area__drop"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "upload-area__drop__input",
    type: "file",
    name: "file",
    onChange: onChangeHandler
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: "upload-area__drop__icon",
    src: "https://github.com/datopian/gift-publisher/raw/main/src/assets/upload.png",
    alt: "upload-icon"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "upload-area__drop__text"
  }, "Drag and drop your files", /*#__PURE__*/_react.default.createElement("br", null), "or ", /*#__PURE__*/_react.default.createElement("br", null), "click to select"));
};

InputFile.propTypes = {
  onChangeHandler: _propTypes.default.func.isRequired
};
var _default = InputFile;
exports.default = _default;