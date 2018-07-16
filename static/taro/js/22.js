(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"122":function(e,t,r){},"84":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();r(122);var a=r(12),o=_interopRequireDefault(r(0)),i=r(13),s=_interopRequireDefault(r(89));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){function PageView(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageView);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageView.__proto__||Object.getPrototypeOf(PageView)).apply(this,arguments));return e.config={"navigationBarTitleText":"Progress组件"},e.state={"progress":0},e.handleStart=function(){e._timmer||e.state.progress>100||(e._timmer=setInterval(function(){var t=e.state.progress+2;if(t>100)return e.handleStop();e.setState({"progress":t})},100))},e.handleStop=function(){e._timmer&&(clearInterval(e._timmer),e._timmer=null)},e.handleReset=function(){e.handleStop(),e.setState({"progress":0})},e._timmer=null,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageView,a.Component),n(PageView,[{"key":"render","value":function render(){var e=this.state.progress;return o.default.createElement(i.View,{"className":"container"},o.default.createElement(s.default,{"title":"Progress"}),o.default.createElement(i.View,{"className":"page-body"},o.default.createElement(i.View,{"className":"page-section"},o.default.createElement(i.View,{"className":"progress-block"},o.default.createElement(i.View,{"className":"page-section-spacing"},o.default.createElement(i.Progress,{"percent":20,"showInfo":!0,"strokeWidth":2}))),o.default.createElement(i.View,{"className":"progress-block"},o.default.createElement(i.View,{"className":"page-section-spacing"},o.default.createElement(i.Progress,{"percent":40,"strokeWidth":2,"active":!0})),o.default.createElement(i.View,{"className":"page-section-spacing"},o.default.createElement(i.Progress,{"percent":60,"strokeWidth":2,"active":!0})),o.default.createElement(i.View,{"className":"page-section-spacing"},o.default.createElement(i.Progress,{"percent":80,"strokeWidth":2,"active":!0,"activeColor":"blue"}))),o.default.createElement(i.View,{"className":"progress-block"},o.default.createElement(i.View,{"className":"page-section-spacing "},o.default.createElement(i.Progress,{"active":!0,"showInfo":!0,"strokeWidth":2,"percent":e,"activeColor":"#3C7FE8"}),o.default.createElement(i.View,null,o.default.createElement(i.Button,{"onClick":this.handleStart},"加载"),o.default.createElement(i.Button,{"onClick":this.handleStop},"暂停"),o.default.createElement(i.Button,{"onClick":this.handleReset},"重置")))))))}}]),PageView}();t.default=l},"89":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(12),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(0)),i=r(13);var s=function(e){function Head(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Head,a.Component),n(Head,[{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page-head"},o.default.createElement(i.View,{"className":"page-head-title"},this.props.title),o.default.createElement(i.View,{"className":"page-head-line"}),this.props.desc&&o.default.createElement(i.View,{"className":"page-head-desc"},this.props.desc))}}]),Head}();t.default=s}}]);