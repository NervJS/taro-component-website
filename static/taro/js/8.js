(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"101":function(e,t,a){},"70":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}();a(101);var i=a(12),r=_interopRequireDefault(a(0)),c=a(13),l=_interopRequireDefault(a(89));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function PageSwitch(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageSwitch);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageSwitch.__proto__||Object.getPrototypeOf(PageSwitch)).apply(this,arguments));return e.config={"navigationBarTitleText":"Switch组件"},e.state={"isChecked":!0},e.setIsChecked=function(t){var a=t.detail;e.setState({"isChecked":a.value})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageSwitch,i.Component),n(PageSwitch,[{"key":"render","value":function render(){return r.default.createElement(c.View,{"className":"container"},r.default.createElement(l.default,{"title":"Switch"}),r.default.createElement(c.View,{"className":"page-body"},r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"静态展示")),r.default.createElement(c.View,{"className":"switch-list"},r.default.createElement(c.View,{"className":"switch-list__item"},r.default.createElement(c.View,{"className":"switch-list__text"},"关闭"),r.default.createElement(c.Switch,null)),r.default.createElement(c.View,{"className":"switch-list__item"},r.default.createElement(c.View,{"className":"switch-list__text"},"开启中"),r.default.createElement(c.Switch,{"checked":!0})),r.default.createElement(c.View,{"className":"switch-list__item"},r.default.createElement(c.View,{"className":"switch-list__text"},"更换颜色"),r.default.createElement(c.Switch,{"checked":!0,"color":"#6190E8"})),r.default.createElement(c.View,{"className":"switch-list__item"},r.default.createElement(c.View,{"className":"switch-list__text"},"CheckBox形式"),r.default.createElement(c.Switch,{"type":"checkbox"})))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"数据绑定")),r.default.createElement(c.View,{"className":"switch-list"},r.default.createElement(c.View,{"className":"switch-list__item"},r.default.createElement(c.View,{"className":"switch-list__text"},this.state.isChecked?"开启":"关闭"),r.default.createElement(c.Switch,{"onChange":this.setIsChecked,"checked":this.state.isChecked}))))))}}]),PageSwitch}();t.default=s},"89":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),i=a(12),r=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(0)),c=a(13);var l=function(e){function Head(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Head,i.Component),n(Head,[{"key":"render","value":function render(){return r.default.createElement(c.View,{"className":"page-head"},r.default.createElement(c.View,{"className":"page-head-title"},this.props.title),r.default.createElement(c.View,{"className":"page-head-line"}),this.props.desc&&r.default.createElement(c.View,{"className":"page-head-desc"},this.props.desc))}}]),Head}();t.default=l}}]);