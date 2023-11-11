"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Modal(_ref) {
  var text = _ref.text;
  var closeModal = function closeModal() {
    var containerModal = document.getElementById('containerModal');
    containerModal.style.display = 'none';
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "containerModal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "close",
    onClick: function onClick() {
      return closeModal();
    }
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("p", null, text))));
}
var _default = exports["default"] = Modal;