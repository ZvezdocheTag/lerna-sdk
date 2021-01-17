import React from 'react';
import { useSpring, animated } from 'react-spring';

var ExampleComponent = function ExampleComponent(_ref) {
  var props = useSpring({
    opacity: 1,
    from: {
      opacity: 0
    }
  });
  return /*#__PURE__*/React.createElement(animated.div, {
    style: props
  }, "I will fade in");
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
