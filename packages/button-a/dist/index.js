function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Button = _interopDefault(require('react-bootstrap/Button'));

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Primary"), ' ', /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Secondary"), ' ', /*#__PURE__*/React.createElement(Button, {
    variant: "success"
  }, "Success"), ' ', /*#__PURE__*/React.createElement(Button, {
    variant: "warning"
  }, "Warning"), ' ', /*#__PURE__*/React.createElement(Button, {
    variant: "danger"
  }, "Danger"), ' ', /*#__PURE__*/React.createElement(Button, {
    variant: "info"
  }, "Info"), ' ', /*#__PURE__*/React.createElement(Button, {
    variant: "light"
  }, "Light"), ' ', /*#__PURE__*/React.createElement(Button, {
    variant: "dark"
  }, "Dark"), " ", /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Link"));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
