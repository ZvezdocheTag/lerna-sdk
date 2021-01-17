import React from 'react';
import Button from 'react-bootstrap/Button';

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text, /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Button, {
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
  }, "Dark"), ' ', /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Link")));
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
