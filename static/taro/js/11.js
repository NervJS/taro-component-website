webpackJsonp([11],{"130":function(e,t,r){var n=r(131);"string"==typeof n&&(n=[[e.i,n,""]]);var a={"hmr":!0,"transform":void 0,"insertInto":void 0};r(61)(n,a);n.locals&&(e.exports=n.locals)},"131":function(e,t,r){(e.exports=r(60)(!1)).push([e.i,".navigator{height:1.70667rem;line-height:1.70667rem;margin:.42667rem 2.13333rem 0;text-align:center;border:.02133rem solid #ccc}",""])},"84":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();r(130);var a=r(12),o=_interopRequireDefault(r(4)),i=r(11),c=_interopRequireDefault(r(88));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function PageSwitch(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageSwitch);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageSwitch.__proto__||Object.getPrototypeOf(PageSwitch)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageSwitch,a.Component),n(PageSwitch,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"container"},o.default.createElement(c.default,{"title":"Navigator"}),o.default.createElement(i.View,{"className":"page-body"},o.default.createElement(i.View,{"className":"page-section"},o.default.createElement("navigator",{"url":"/pages/component/pages/navigatePage/navigatePage","className":"navigator"},o.default.createElement(i.View,{"className":"navigator-text"},"跳转到新页面")),o.default.createElement("navigator",{"url":"/pages/component/pages/redirectPage/redirectPage","className":"navigator","open-type":"redirect"},o.default.createElement(i.View,{"className":"navigator-text"},"在当前页打开")))))}}]),PageSwitch}();t.default=u},"88":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(12),o=(_interopRequireDefault(a),_interopRequireDefault(r(4))),i=r(11);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function Head(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Head,a.Component),n(Head,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page-head"},o.default.createElement(i.View,{"className":"page-head-title"},this.props.title),o.default.createElement(i.View,{"className":"page-head-line"}),this.props.desc&&o.default.createElement(i.View,{"className":"page-head-desc"},this.props.desc))}}]),Head}();t.default=c}});