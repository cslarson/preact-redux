(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["redux"], factory);
	else if(typeof exports === 'object')
		exports["PreactRedux"] = factory(require("redux"));
	else
		root["PreactRedux"] = factory(root["Redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(6);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(7);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {(function (global, factory) {
		 true ? factory(exports, __webpack_require__(16), __webpack_require__(15), __webpack_require__(4)) :
		typeof define === 'function' && define.amd ? define(['exports', 'proptypes', 'preact-svg', 'preact'], factory) :
		(factory((global.preactCompat = global.preactCompat || {}),global.PropTypes,global.preactSvg,global.preact));
	}(this, function (exports,PropTypes,SVG,preact) { 'use strict';

		PropTypes = 'default' in PropTypes ? PropTypes['default'] : PropTypes;
		SVG = 'default' in SVG ? SVG['default'] : SVG;

		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.createClass = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      Object.defineProperty(target, descriptor.key, descriptor);
		    }
		  }

		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

		var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol["for"] && Symbol["for"]('react.element') || 0xeac7;

		var AUTOBIND_BLACKLIST = {
			constructor: 1,
			render: 1,
			shouldComponentUpdate: 1,
			componentWillRecieveProps: 1,
			componentWillUpdate: 1,
			componentDidUpdate: 1,
			componentWillMount: 1,
			componentDidMount: 1,
			componentWillUnmount: 1,
			componentDidUnmount: 1
		};

		var BYPASS_HOOK = {};

		var DEV = typeof process !== 'undefined' && process.env && ("development") !== 'production';

		var EmptyComponent = function () {
			return null;
		};

		var VNode = preact.h('').constructor;
		VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;

		Object.defineProperty(VNode.prototype, 'type', {
			get: function () {
				return this.nodeName;
			},
			set: function (v) {
				this.nodeName = v;
			}
		});

		Object.defineProperty(VNode.prototype, 'props', {
			get: function () {
				return this.attributes;
			},
			set: function (v) {
				this.attributes = v;
			}
		});

		function render$1(vnode, parent, callback) {
			var prev = parent._preactCompatRendered;
			if (prev && prev.parentNode !== parent) prev = null;
			var out = preact.render(vnode, parent, prev);
			parent._preactCompatRendered = out;
			if (typeof callback === 'function') callback();
			return out && out._component;
		}

		function unmountComponentAtNode(container) {
			var existing = container._preactCompatRendered;
			if (existing && existing.parentNode === container) {
				preact.render(preact.h(EmptyComponent), container, existing);
				return true;
			}
			return false;
		}

		var ARR = [];

		var Children = {
			map: function (children, fn, ctx) {
				children = Children.toArray(children);
				if (ctx && ctx !== children) fn = fn.bind(ctx);
				return children.map(fn);
			},
			forEach: function (children, fn, ctx) {
				children = Children.toArray(children);
				if (ctx && ctx !== children) fn = fn.bind(ctx);
				children.forEach(fn);
			},
			count: function (children) {
				children = Children.toArray(children);
				return children.length;
			},
			only: function (children) {
				children = Children.toArray(children);
				if (children.length !== 1) throw new Error('Children.only() expects only one child.');
				return children[0];
			},
			toArray: function (children) {
				return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
			}
		};

		var currentComponent = void 0;

		function createFactory(type) {
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return createElement.apply(undefined, [type].concat(args));
			};
		}

		var DOM = {};
		for (var i = ELEMENTS.length; i--;) {
			DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
		}

		function createElement() {
			var vnode = preact.h.apply(undefined, arguments);

			if (vnode.nodeName === 'svg') {
				vnode.nodeName = SVG;
			}

			applyClassName(vnode);

			var ref = vnode.attributes && vnode.attributes.ref;
			if (currentComponent && ref && typeof ref === 'string') {
				vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
			}

			return vnode;
		}

		function cloneElement(element, props) {
			for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
				children[_key2 - 2] = arguments[_key2];
			}

			return createElement.apply(undefined, [element.nodeName || element.type, extend({}, element.attributes || element.props || {}, props)].concat(children));
		}

		function isValidElement(element) {
			return element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE;
		}

		function createStringRefProxy(name, component) {
			return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
				if (component && component.refs) {
					component.refs[name] = resolved;
					if (resolved === null) {
						delete component._refProxies[name];
						component = null;
					}
				}
			});
		}

		function applyClassName(_ref) {
			var attributes = _ref.attributes;

			if (!attributes) return;
			var cl = attributes.className || attributes["class"];
			if (cl) attributes.className = cl;
		}

		function extend(base) {
			for (var _len3 = arguments.length, objs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
				objs[_key3 - 1] = arguments[_key3];
			}

			for (var i = 0; i < objs.length; i++) {
				for (var key in objs[i]) {
					if (objs[i].hasOwnProperty(key)) {
						var v = objs[i][key];
						if (v !== null && v !== undefined) {
							base[key] = v;
						}
					}
				}
			}
			return base;
		}

		var findDOMNode = function (component) {
			return component.base || component;
		};

		function F() {}

		function createClass(obj) {
			var cl = function (props, context) {
				Component$1.call(this, props, context, BYPASS_HOOK);
				extend(this, obj);
				bindAll(this);
				newComponentHook.call(this, props, context);
			};

			if (obj.propTypes) {
				cl.propTypes = obj.propTypes;
			}
			if (obj.defaultProps) {
				cl.defaultProps = obj.defaultProps;
			}
			if (obj.getDefaultProps) {
				cl.defaultProps = obj.getDefaultProps();
			}

			F.prototype = Component$1.prototype;
			cl.prototype = new F();
			cl.prototype.constructor = cl;

			cl.displayName = obj.displayName || 'Component';

			return cl;
		}

		function bindAll(ctx) {
			for (var i in ctx) {
				var v = ctx[i];
				if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
					(ctx[i] = v.bind(ctx)).__bound = true;
				}
			}
		}

		function callMethod(ctx, m, args) {
			if (typeof m === 'string') {
				m = ctx.constructor.prototype[m];
			}
			if (typeof m === 'function') {
				return m.apply(ctx, args);
			}
		}

		function multihook() {
			for (var _len4 = arguments.length, hooks = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				hooks[_key4] = arguments[_key4];
			}

			return function () {
				var ret = void 0;

				for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
					args[_key5] = arguments[_key5];
				}

				for (var i = 0; i < hooks.length; i++) {
					var r = callMethod(this, hooks[i], args);
					if (r !== undefined) ret = r;
				}
				return ret;
			};
		}

		function newComponentHook(props, context) {
			propsHook.call(this, props, context);
			this.componentWillReceiveProps = multihook(this.componentWillReceiveProps || 'componentWillReceiveProps', propsHook);
			this.render = multihook(beforeRender, this.render || 'render', afterRender);
		}

		function propsHook(props) {
			if (!props) return;

			var c = props.children;
			if (c && c.length === 1) {
				props.children = c[0];

				if (props.children && typeof props.children === 'object') {
					props.children.length = 1;
					props.children[0] = props.children;
				}
			}

			if (DEV) {
				var propTypes = this.propTypes || this.constructor.propTypes;
				if (propTypes) {
					for (var prop in propTypes) {
						if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop] === 'function') {
							var err = propTypes[prop](props, prop, this.constructor.name, 'prop');
							if (err) throw err;
						}
					}
				}
			}
		}

		function beforeRender() {
			currentComponent = this;
		}

		function afterRender() {
			if (currentComponent === this) {
				currentComponent = null;
			}
		}

		var Component$1 = function (_PreactComponent) {
			babelHelpers.inherits(Component, _PreactComponent);

			function Component(props, context, opts) {
				babelHelpers.classCallCheck(this, Component);

				var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props, context));

				_this.refs = {};
				_this._refProxies = {};
				if (opts !== BYPASS_HOOK) {
					newComponentHook.call(_this, props, context);
				}
				return _this;
			}

			babelHelpers.createClass(Component, [{
				key: 'getDOMNode',
				value: function getDOMNode() {
					return this.base;
				}
			}, {
				key: 'isMounted',
				value: function isMounted() {
					return !!this.base;
				}
			}]);
			return Component;
		}(preact.Component);

		var index = { DOM: DOM, PropTypes: PropTypes, Children: Children, render: render$1, createClass: createClass, createFactory: createFactory, createElement: createElement, cloneElement: cloneElement, isValidElement: isValidElement, findDOMNode: findDOMNode, unmountComponentAtNode: unmountComponentAtNode, Component: Component$1 };

		exports.DOM = DOM;
		exports.PropTypes = PropTypes;
		exports.Children = Children;
		exports.render = render$1;
		exports.createClass = createClass;
		exports.createFactory = createFactory;
		exports.createElement = createElement;
		exports.cloneElement = cloneElement;
		exports.isValidElement = isValidElement;
		exports.findDOMNode = findDOMNode;
		exports.unmountComponentAtNode = unmountComponentAtNode;
		exports.Component = Component$1;
		exports['default'] = index;

	}));
	//# sourceMappingURL=preact-compat.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(5).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _preactCompat = __webpack_require__(1);

	exports["default"] = _preactCompat.PropTypes.shape({
	  subscribe: _preactCompat.PropTypes.func.isRequired,
	  dispatch: _preactCompat.PropTypes.func.isRequired,
	  getState: _preactCompat.PropTypes.func.isRequired
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {!function(global, factory) {
	     true ? module.exports = factory() : 'function' == typeof define && define.amd ? define(factory) : global.preact = factory();
	}(this, function() {
	    'use strict';
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	    }
	    function extend(obj, props) {
	        for (var i in props) if (hasOwnProperty.call(props, i)) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        var out = {};
	        for (var i in obj) out[i] = obj[i];
	        return out;
	    }
	    function memoize(fn, mem) {
	        mem = mem || {};
	        return function(k) {
	            return hasOwnProperty.call(mem, k) ? mem[k] : mem[k] = fn(k);
	        };
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p];
	        return obj;
	    }
	    function toArray(obj) {
	        var arr = [], i = obj.length;
	        for (;i--; ) arr[i] = obj[i];
	        return arr;
	    }
	    function styleObjToCss(s) {
	        var str = '';
	        for (var prop in s) if (hasOwnProperty.call(s, prop)) {
	            var val = s[prop];
	            if (!empty(val)) {
	                str += jsToCss(prop);
	                str += ': ';
	                str += val;
	                if ('number' == typeof val && !NON_DIMENSION_PROPS[prop]) str += 'px';
	                str += '; ';
	            }
	        }
	        return str;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function normalize(obj, prop, fn) {
	        var v = obj[prop];
	        if (v && !isString(v)) obj[prop] = fn(v);
	    }
	    function optionsHook(name, a, b) {
	        return hook(options, name, a, b);
	    }
	    function hook(obj, name, a, b, c) {
	        if (obj[name]) return obj[name](a, b, c); else ;
	    }
	    function deepHook(obj, type) {
	        do hook(obj, type); while (obj = obj._component);
	    }
	    function h(nodeName, attributes) {
	        var len = arguments.length, children = void 0, arr = void 0, lastSimple = void 0;
	        if (len > 2) {
	            children = [];
	            for (var i = 2; len > i; i++) {
	                var _p = arguments[i];
	                if (!falsey(_p)) {
	                    if (_p.join) arr = _p; else {
	                        arr = SHARED_TEMP_ARRAY;
	                        arr[0] = _p;
	                    }
	                    for (var j = 0; j < arr.length; j++) {
	                        var child = arr[j], simple = !(falsey(child) || child instanceof VNode);
	                        if (simple) child = String(child);
	                        if (simple && lastSimple) children[children.length - 1] += child; else if (!falsey(child)) children.push(child);
	                        lastSimple = simple;
	                    }
	                } else ;
	            }
	        }
	        if (attributes && attributes.children) delete attributes.children;
	        var p = new VNode(nodeName, attributes || void 0, children || void 0);
	        optionsHook('vnode', p);
	        return p;
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0], len = path.length;
	        return function(e) {
	            var _component$setState;
	            var t = this, s = component.state, obj = s, v = void 0, i = void 0;
	            if (isString(eventPath)) {
	                v = delve(e, eventPath);
	                if (empty(v) && (t = t._component)) v = delve(t, eventPath);
	            } else v = (t.nodeName + t.type).match(/^input(checkbox|radio)$/i) ? t.checked : t.value;
	            if (isFunction(v)) v = v.call(t);
	            if (len > 1) {
	                for (i = 0; len - 1 > i; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || setImmediate)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var currentItems = items, p = void 0;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            for (;p = currentItems.pop(); ) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(_ref) {
	        var nodeName = _ref.nodeName;
	        return isFunction(nodeName) && !nodeName.prototype.render;
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY) || EMPTY_BASE;
	    }
	    function ensureNodeData(node) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = {});
	    }
	    function getNodeType(node) {
	        return node.nodeType;
	    }
	    function appendChildren(parent, children) {
	        var len = children.length, many = len > 2, into = many ? document.createDocumentFragment() : parent;
	        for (var i = 0; len > i; i++) into.appendChild(children[i]);
	        if (many) parent.appendChild(into);
	    }
	    function getAccessor(node, name, value, cache) {
	        if ('type' !== name && 'style' !== name && name in node) return node[name];
	        var attrs = node[ATTR_KEY];
	        if (cache !== !1 && attrs && hasOwnProperty.call(attrs, name)) return attrs[name];
	        if ('class' === name) return node.className;
	        if ('style' === name) return node.style.cssText; else return value;
	    }
	    function setAccessor(node, name, value) {
	        if ('class' === name) node.className = value || ''; else if ('style' === name) node.style.cssText = value || ''; else if ('dangerouslySetInnerHTML' === name) {
	            if (value && value.__html) node.innerHTML = value.__html;
	        } else if ('key' === name || name in node && 'type' !== name) {
	            node[name] = value;
	            if (falsey(value)) node.removeAttribute(name);
	        } else setComplexAccessor(node, name, value);
	        ensureNodeData(node)[name] = value;
	    }
	    function setComplexAccessor(node, name, value) {
	        if ('on' !== name.substring(0, 2)) {
	            var type = typeof value;
	            if (falsey(value)) node.removeAttribute(name); else if ('function' !== type && 'object' !== type) node.setAttribute(name, value);
	        } else {
	            var _type = normalizeEventName(name), l = node._listeners || (node._listeners = {}), fn = !l[_type] ? 'add' : !value ? 'remove' : null;
	            if (fn) node[fn + 'EventListener'](_type, eventProxy);
	            l[_type] = value;
	        }
	    }
	    function eventProxy(e) {
	        var fn = this._listeners[normalizeEventName(e.type)];
	        if (fn) return fn.call(this, optionsHook('event', e) || e); else ;
	    }
	    function getNodeAttributes(node) {
	        return node[ATTR_KEY] || getRawNodeAttributes(node) || EMPTY;
	    }
	    function getRawNodeAttributes(node) {
	        var list = node.attributes;
	        if (!list || !list.getNamedItem) return list; else return getAttributesAsObject(list);
	    }
	    function getAttributesAsObject(list) {
	        var attrs = void 0;
	        for (var i = list.length; i--; ) {
	            var item = list[i];
	            if (!attrs) attrs = {};
	            attrs[item.name] = item.value;
	        }
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isFunctionalComponent(vnode)) return !0;
	        var nodeName = vnode.nodeName;
	        if (isFunction(nodeName)) return node._componentConstructor === nodeName;
	        if (3 === getNodeType(node)) return isString(vnode); else return toLowerCase(node.nodeName) === nodeName;
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes), c = vnode.children;
	        if (c) props.children = c;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (hasOwnProperty.call(defaultProps, i) && !(i in props)) props[i] = defaultProps[i];
	        return props;
	    }
	    function collectNode(node) {
	        cleanNode(node);
	        var name = normalizeName(node.nodeName), list = nodes[name];
	        if (list) list.push(node); else nodes[name] = [ node ];
	    }
	    function createNode(nodeName) {
	        var name = normalizeName(nodeName), list = nodes[name], node = list && list.pop() || document.createElement(nodeName);
	        ensureNodeData(node);
	        return node;
	    }
	    function cleanNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	        if (3 !== getNodeType(node)) {
	            if (!node[ATTR_KEY]) node[ATTR_KEY] = getRawNodeAttributes(node);
	            node._component = node._componentConstructor = null;
	        }
	    }
	    function diff(dom, vnode, context) {
	        var originalAttributes = vnode.attributes;
	        for (;isFunctionalComponent(vnode); ) vnode = buildFunctionalComponent(vnode, context);
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context);
	        if (isString(vnode)) {
	            if (dom) {
	                var type = getNodeType(dom);
	                if (3 === type) {
	                    dom[TEXT_CONTENT] = vnode;
	                    return dom;
	                } else if (1 === type) collectNode(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var out = dom, nodeName = vnode.nodeName || UNDEFINED_ELEMENT;
	        if (!dom) out = createNode(nodeName); else if (toLowerCase(dom.nodeName) !== nodeName) {
	            out = createNode(nodeName);
	            appendChildren(out, toArray(dom.childNodes));
	            recollectNodeTree(dom);
	        }
	        innerDiffNode(out, vnode, context);
	        diffAttributes(out, vnode);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        return out;
	    }
	    function innerDiffNode(dom, vnode, context) {
	        var children = void 0, keyed = void 0, keyedLen = 0, len = dom.childNodes.length, childrenLen = 0;
	        if (len) {
	            children = [];
	            for (var i = 0; len > i; i++) {
	                var child = dom.childNodes[i], props = child._component && child._component.props, key = props ? props.key : getAccessor(child, 'key');
	                if (!empty(key)) {
	                    if (!keyed) keyed = {};
	                    keyed[key] = child;
	                    keyedLen++;
	                } else children[childrenLen++] = child;
	            }
	        }
	        var vchildren = vnode.children, vlen = vchildren && vchildren.length, min = 0;
	        if (vlen) for (var i = 0; vlen > i; i++) {
	            var vchild = vchildren[i], child = void 0;
	            if (keyedLen) {
	                var attrs = vchild.attributes, key = attrs && attrs.key;
	                if (!empty(key) && hasOwnProperty.call(keyed, key)) {
	                    child = keyed[key];
	                    keyed[key] = null;
	                    keyedLen--;
	                }
	            }
	            if (!child && childrenLen > min) for (var j = min; childrenLen > j; j++) {
	                var c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = null;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = diff(child, vchild, context);
	            if (dom.childNodes[i] !== child) {
	                var c = child.parentNode !== dom && child._component, next = dom.childNodes[i + 1];
	                if (c) deepHook(c, 'componentWillMount');
	                if (next) dom.insertBefore(child, next); else dom.appendChild(child);
	                if (c) deepHook(c, 'componentDidMount');
	            }
	        }
	        if (keyedLen) for (var i in keyed) if (hasOwnProperty.call(keyed, i) && keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (childrenLen > min) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var attrs = node[ATTR_KEY];
	        if (attrs) hook(attrs, 'ref', null);
	        var component = node._component;
	        if (component) unmountComponent(node, component, !unmountOnly); else {
	            if (!unmountOnly) {
	                if (1 !== getNodeType(node)) {
	                    var p = node.parentNode;
	                    if (p) p.removeChild(node);
	                    return;
	                }
	                collectNode(node);
	            }
	            var c = node.childNodes;
	            if (c && c.length) removeOrphanedChildren(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, vnode) {
	        var old = getNodeAttributes(dom) || EMPTY, attrs = vnode.attributes || EMPTY, name = void 0, value = void 0;
	        for (name in old) if (empty(attrs[name])) setAccessor(dom, name, null);
	        if (attrs !== EMPTY) for (name in attrs) if (hasOwnProperty.call(attrs, name)) {
	            value = attrs[name];
	            if (!empty(value) && value != getAccessor(dom, name)) setAccessor(dom, name, value);
	        }
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(ctor, props, context) {
	        var list = components[ctor.name], len = list && list.length, c = void 0;
	        for (var i = 0; len > i; i++) {
	            c = list[i];
	            if (c.constructor === ctor) {
	                list.splice(i, 1);
	                return c;
	            }
	        }
	        return new ctor(props, context);
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context) {
	        var d = component._disableRendering;
	        component._ref = props.ref;
	        delete props.ref;
	        delete props.key;
	        component._disableRendering = !0;
	        if (context) {
	            if (!component.prevContext) component.prevContext = component.context;
	            component.context = context;
	        }
	        if (component.base) hook(component, 'componentWillReceiveProps', props, component.context);
	        if (!component.prevProps) component.prevProps = component.props;
	        component.props = props;
	        component._disableRendering = d;
	        if (!opts || opts.render !== !1) if (opts && opts.renderSync || options.syncComponentUpdates !== !1) renderComponent(component); else triggerComponentRender(component);
	        hook(component, '_ref', component);
	    }
	    function renderComponent(component, opts) {
	        if (!component._disableRendering) {
	            var skip = void 0, rendered = void 0, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (hook(component, 'shouldComponentUpdate', props, state, context) === !1) skip = !0; else hook(component, 'componentWillUpdate', props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = null;
	            component._dirty = !1;
	            if (!skip) {
	                rendered = hook(component, 'render', props, state, context);
	                var childComponent = rendered && rendered.nodeName, childContext = component.getChildContext ? component.getChildContext() : context, toUnmount = void 0, base = void 0;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = component._component;
	                    if (inst && inst.constructor !== childComponent) {
	                        toUnmount = inst;
	                        inst = null;
	                    }
	                    var childProps = getNodeProps(rendered);
	                    if (inst) setComponentProps(inst, childProps, SYNC_RENDER, childContext); else {
	                        inst = createComponent(childComponent, childProps, childContext);
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        if (component.base) deepHook(inst, 'componentWillMount');
	                        setComponentProps(inst, childProps, NO_RENDER, childContext);
	                        renderComponent(inst, DOM_RENDER);
	                        if (component.base) deepHook(inst, 'componentDidMount');
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = component.base;
	                    toUnmount = component._component;
	                    if (toUnmount) cbase = component._component = null;
	                    if (component.base || opts && opts.build) base = diff(cbase, rendered || EMPTY_BASE, childContext);
	                }
	                if (component.base && base !== component.base) {
	                    var p = component.base.parentNode;
	                    if (p) p.replaceChild(base, component.base);
	                }
	                if (toUnmount) unmountComponent(toUnmount.base, toUnmount, !0);
	                component.base = base;
	                if (base) {
	                    var componentRef = component, t = component;
	                    for (;t = t._parentComponent; ) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	                if (isUpdate) hook(component, 'componentDidUpdate', previousProps, previousState, previousContext);
	            }
	            var cb = component._renderCallbacks, fn = void 0;
	            if (cb) for (;fn = cb.pop(); ) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context) {
	        var c = dom && dom._component, oldDom = dom;
	        var isOwner = c && dom._componentConstructor === vnode.nodeName;
	        for (;c && !isOwner && (c = c._parentComponent); ) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner) {
	            setComponentProps(c, getNodeProps(vnode), SYNC_RENDER, context);
	            dom = c.base;
	        } else {
	            if (c) {
	                unmountComponent(dom, c, !0);
	                dom = oldDom = null;
	            }
	            dom = createComponentFromVNode(vnode, dom, context);
	            if (oldDom && dom !== oldDom) recollectNodeTree(oldDom);
	        }
	        return dom;
	    }
	    function createComponentFromVNode(vnode, dom, context) {
	        var props = getNodeProps(vnode);
	        var component = createComponent(vnode.nodeName, props, context);
	        if (dom && !component.base) component.base = dom;
	        setComponentProps(component, props, NO_RENDER, context);
	        renderComponent(component, DOM_RENDER);
	        return component.base;
	    }
	    function unmountComponent(dom, component, remove) {
	        hook(component, '_ref', null);
	        hook(component, 'componentWillUnmount');
	        var inner = component._component;
	        if (inner) unmountComponent(dom, inner);
	        var base = component.base;
	        if (base) {
	            if (remove !== !1) {
	                var p = base.parentNode;
	                if (p) p.removeChild(base);
	            }
	            removeOrphanedChildren(base.childNodes, !0);
	        }
	        if (remove) {
	            component._parentComponent = null;
	            collectComponent(component);
	        }
	        hook(component, 'componentDidUnmount');
	    }
	    function Component(props, context) {
	        this._dirty = this._disableRendering = !1;
	        this._linkedStates = {};
	        this._renderCallbacks = [];
	        this.prevState = this.prevProps = this.prevContext = this.base = this._parentComponent = this._component = this._ref = null;
	        this.context = context || {};
	        this.props = props || {};
	        this.state = hook(this, 'getInitialState') || {};
	    }
	    function render(vnode, parent, merge) {
	        var existing = merge && merge._component && merge._componentConstructor === vnode.nodeName, built = diff(merge, vnode), c = !existing && built._component;
	        if (c) deepHook(c, 'componentWillMount');
	        if (built.parentNode !== parent) parent.appendChild(built);
	        if (c) deepHook(c, 'componentDidMount');
	        return built;
	    }
	    var NO_RENDER = {
	        render: !1
	    };
	    var SYNC_RENDER = {
	        renderSync: !0
	    };
	    var DOM_RENDER = {
	        build: !0
	    };
	    var EMPTY = {};
	    var EMPTY_BASE = '';
	    var HAS_DOM = 'undefined' != typeof document;
	    var TEXT_CONTENT = !HAS_DOM || 'textContent' in document ? 'textContent' : 'nodeValue';
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol('preactattr') : '__preactattr_';
	    var UNDEFINED_ELEMENT = 'undefined';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var isFunction = function(obj) {
	        return 'function' == typeof obj;
	    };
	    var isString = function(obj) {
	        return 'string' == typeof obj;
	    };
	    var hasOwnProperty = {}.hasOwnProperty;
	    var empty = function(x) {
	        return null == x;
	    };
	    var falsey = function(value) {
	        return value === !1 || null == value;
	    };
	    var jsToCss = memoize(function(s) {
	        return s.replace(/([A-Z])/g, '-$1').toLowerCase();
	    });
	    var toLowerCase = memoize(function(s) {
	        return s.toLowerCase();
	    });
	    var ch = void 0;
	    try {
	        ch = new MessageChannel();
	    } catch (e) {}
	    var setImmediate = ch ? function(f) {
	        ch.port1.onmessage = f;
	        ch.port2.postMessage('');
	    } : setTimeout;
	    var options = {
	        vnode: function(n) {
	            var attrs = n.attributes;
	            if (attrs && !isFunction(n.nodeName)) {
	                var p = attrs.className;
	                if (p) {
	                    attrs['class'] = p;
	                    delete attrs.className;
	                }
	                if (attrs['class']) normalize(attrs, 'class', hashToClassName);
	                if (attrs.style) normalize(attrs, 'style', styleObjToCss);
	            }
	        }
	    };
	    var SHARED_TEMP_ARRAY = [];
	    var items = [];
	    var itemsOffline = [];
	    var normalizeEventName = memoize(function(t) {
	        return t.replace(/^on/i, '').toLowerCase();
	    });
	    var nodes = {};
	    var normalizeName = memoize(function(name) {
	        return name.toUpperCase();
	    });
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates, cacheKey = key + '|' + (eventPath || '');
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) this._renderCallbacks.push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this);
	        },
	        render: function() {
	            return null;
	        }
	    });
	    var preact = {
	        h: h,
	        Component: Component,
	        render: render,
	        rerender: rerender,
	        options: options,
	        hooks: options
	    };
	    return preact;
	});
	//# sourceMappingURL=preact.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _preactCompat = __webpack_require__(1);

	var _storeShape = __webpack_require__(3);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	  }
	  /* eslint-disable no-console */
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _preactCompat.Children.only(children);
	  };

	  return Provider;
	}(_preactCompat.Component);

	exports["default"] = Provider;


	if (true) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _preactCompat.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = connect;

	var _preactCompat = __webpack_require__(1);

	var _storeShape = __webpack_require__(3);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(8);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(9);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _isPlainObject = __webpack_require__(14);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(10);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(11);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function checkStateShape(stateProps, dispatch) {
	  (0, _invariant2["default"])((0, _isPlainObject2["default"])(stateProps), '`%sToProps` must return an object. Instead received %s.', dispatch ? 'mapDispatch' : 'mapState', stateProps);
	  return stateProps;
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;
	  var mapDispatch = (0, _isPlainObject2["default"])(mapDispatchToProps) ? (0, _wrapActionCreators2["default"])(mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var checkMergedEquals = finalMergeProps !== defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  // Helps track hot reloading.

	  var version = nextVersion++;

	  function computeMergedProps(stateProps, dispatchProps, parentProps) {
	    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	    (0, _invariant2["default"])((0, _isPlainObject2["default"])(mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	    return mergedProps;
	  }

	  return function wrapWithConnect(WrappedComponent) {
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + _this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + _this.constructor.displayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        return checkStateShape(stateProps);
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        return isFactory ? this.computeStateProps(store, props) : checkStateShape(mappedState);
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        return checkStateShape(dispatchProps, true);
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        return isFactory ? this.computeDispatchProps(store, props) : checkStateShape(mappedDispatch, true);
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var prevStoreState = this.state.storeState;
	        var storeState = this.store.getState();

	        if (!pure || prevStoreState !== storeState) {
	          this.hasStoreStateChanged = true;
	          this.setState({ storeState: storeState });
	        }
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var renderedElement = this.renderedElement;


	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _preactCompat.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _preactCompat.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_preactCompat.Component);

	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (true) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(17);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            try {
	                targetComponent[keys[i]] = sourceComponent[keys[i]];
	            } catch (error) {

	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isHostObject = __webpack_require__(12),
	    isObjectLike = __webpack_require__(13);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototypeOf(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,module,__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports !== 'undefined' && typeof module !== 'undefined'){factory(exports,module,require('preact'));}else {var mod={exports:{}};factory(mod.exports,mod,global.preact);global.preactSvg = mod.exports;}})(this,function(exports,module,_preact){'use strict';var _extends=Object.assign || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj) {if(keys.indexOf(i) >= 0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i] = obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var DOM=typeof document !== 'undefined' && !!document.createElement;var SVG_ATTRS=['viewBox'];var PROP_TO_ATTR_MAP={'className':'class'};var EMPTY={};var updateMode=false;if(DOM){(function(){var div=document.createElement('div');var oldCreate=document.createElement;document.createElement = function(name){if(updateMode || name === 'svg'){var el=document.createElementNS('http://www.w3.org/2000/svg',name);for(var key in el) {if(~SVG_ATTRS.indexOf(key) || !(key in div) || PROP_TO_ATTR_MAP.hasOwnProperty(key)){overwriteProperty(el,key);}}return el;}return oldCreate.call(document,name);};})();}var PROPERTY_ERRORS={};var hasPropertyErrors=false;function overwriteProperty(el,key){var err=PROPERTY_ERRORS[key];if(err === false){Object.defineProperty(el,key,contentPropertyDef(key));}else {attemptOverwriteProperty(el,key);}}function attemptOverwriteProperty(el,key){try{Object.defineProperty(el,key,contentPropertyDef(key));PROPERTY_ERRORS[key] = false;}catch(e) {if(!PROPERTY_ERRORS[key]){var err=el.nodeName + ': ' + e;PROPERTY_ERRORS[key] = err;if(!hasPropertyErrors && 'undefined' !== typeof console && console.warn){hasPropertyErrors = true;console.warn('Error overwriting some SVG properties.',{errors:PROPERTY_ERRORS});}}}}var memoize=function memoize(fn){var mem=arguments.length <= 1 || arguments[1] === undefined?{}:arguments[1];return function(k){return mem.hasOwnProperty(k)?mem[k]:mem[k] = fn(k);};};var contentPropertyDef=memoize(function(prop){var attr=arguments.length <= 1 || arguments[1] === undefined?PROP_TO_ATTR_MAP[prop] || prop:arguments[1];return (function(){return {set:function set(v){if(v === null || v === undefined)this.removeAttribute(attr);else this.setAttribute(attr,v);},get:function get(){return this.getAttribute(attr);}};})();});var SVG=(function(_Component){_inherits(SVG,_Component);function SVG(){_classCallCheck(this,SVG);_Component.apply(this,arguments);}SVG.prototype.componentWillUpdate = function componentWillUpdate(){updateMode = true;};SVG.prototype.componentDidUpdate = function componentDidUpdate(){updateMode = false;if(this.base){for(var i in this.props) {if(~SVG_ATTRS.indexOf(i) || PROPERTY_ERRORS.hasOwnProperty(i) && PROPERTY_ERRORS[i] !== false){this.base.setAttribute(i,this.props[i]);}}}};SVG.prototype.render = function render(_ref){var children=_ref.children;var props=_objectWithoutProperties(_ref,['children']);if(!this.hasRendered){this.hasRendered = updateMode = true;this.setState(EMPTY,setStateUpdateProxy(this));}for(var i in props) {if(~SVG_ATTRS.indexOf(i) || PROPERTY_ERRORS.hasOwnProperty(i) && PROPERTY_ERRORS[i] !== false){delete props[i];}}return _preact.h('svg',_extends({version:'1.1',xmlns:'http://www.w3.org/2000/svg'},props),children);};return SVG;})(_preact.Component);module.exports = SVG;function setStateUpdateProxy(component){return function(){component.componentDidUpdate();component = null;};}});

	//# sourceMappingURL=preact-svg.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.PropTypes = mod.exports;
	  }
	})(this, function (exports, module) {

	  'use strict';

	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	  var ReactElement = {};

	  ReactElement.isValidElement = function (object) {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  var ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };

	  var emptyFunction = {
	    thatReturns: function thatReturns(what) {
	      return function () {
	        return what;
	      };
	    }
	  };

	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  var ANONYMOUS = '<<anonymous>>';

	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  function createChainableTypeChecker(validate) {
	    function checkType(isRequired, props, propName, componentName, location, propFullName) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (props[propName] == null) {
	        var locationName = ReactPropTypeLocationNames[location];
	        if (isRequired) {
	          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        var locationName = ReactPropTypeLocationNames[location];

	        var preciseType = getPreciseType(propValue);

	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturns(null));
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var propType = getPropType(propValue);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!ReactElement.isValidElement(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	      });
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (propValue === expectedValues[i]) {
	          return null;
	        }
	      }

	      var locationName = ReactPropTypeLocationNames[location];
	      var valuesString = JSON.stringify(expectedValues);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	      });
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName) == null) {
	          return null;
	        }
	      }

	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || ReactElement.isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      return 'object';
	    }
	    return propType;
	  }

	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  module.exports = ReactPropTypes;
	});

	//# sourceMappingURL=index.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }
/******/ ])
});
;