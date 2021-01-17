function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var antd = require('antd');

var styles = {"test":"_3ybTi"};

var AntdDatePicker = function AntdDatePicker(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, /*#__PURE__*/React.createElement(antd.DatePicker, null), /*#__PURE__*/React.createElement(antd.Tooltip, {
    title: "prompt text"
  }, /*#__PURE__*/React.createElement("span", null, "Tooltip will show on mouse enter.")), "Example Component: ", text);
};

exports.AntdDatePicker = AntdDatePicker;
//# sourceMappingURL=index.js.map
