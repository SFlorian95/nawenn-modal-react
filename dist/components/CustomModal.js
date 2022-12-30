"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./CustomModal.scss");
const CustomModal = _ref => {
  let {
    isDisplayed = false,
    onCloseModal,
    content
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "custom-modal",
    style: {
      display: isDisplayed ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "custom-modal-main"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onCloseModal,
    className: "custom-modal-btn-close"
  }, "X"), /*#__PURE__*/React.createElement("div", {
    className: "custom-modal-content"
  }, content)));
};
var _default = CustomModal;
exports.default = _default;