"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", null, isOpen ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "close",
    onClick: function onClick() {
      return handleCloseModal();
    }
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("p", null, text))) : null);
}
var _default = exports["default"] = Modal;