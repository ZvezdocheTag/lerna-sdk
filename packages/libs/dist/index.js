function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactSpring = require('react-spring');

var ExampleComponent = function ExampleComponent(_ref) {
  var props = reactSpring.useSpring({
    opacity: 1,
    from: {
      opacity: 0
    }
  });
  return /*#__PURE__*/React.createElement(reactSpring.animated.div, {
    style: props
  }, "I will fade in");
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
