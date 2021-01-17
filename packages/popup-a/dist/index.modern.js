import React from 'react';
import { DatePicker, Tooltip } from 'antd';

var styles = {"test":"_3ybTi"};

var AntdDatePicker = function AntdDatePicker(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, /*#__PURE__*/React.createElement(DatePicker, null), /*#__PURE__*/React.createElement(Tooltip, {
    title: "prompt text"
  }, /*#__PURE__*/React.createElement("span", null, "Tooltip will show on mouse enter.")), "Example Component: ", text);
};

export { AntdDatePicker };
//# sourceMappingURL=index.modern.js.map
