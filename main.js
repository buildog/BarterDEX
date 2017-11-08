require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(326);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(322);
	
	__webpack_require__(323);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(56);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(69);
	__webpack_require__(71);
	__webpack_require__(73);
	__webpack_require__(75);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(215);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(315);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(320);
	__webpack_require__(321);
	module.exports = __webpack_require__(9);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var DESCRIPTORS = __webpack_require__(6);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var META = __webpack_require__(22).KEY;
	var $fails = __webpack_require__(7);
	var shared = __webpack_require__(23);
	var setToStringTag = __webpack_require__(24);
	var uid = __webpack_require__(19);
	var wks = __webpack_require__(25);
	var wksExt = __webpack_require__(26);
	var wksDefine = __webpack_require__(27);
	var enumKeys = __webpack_require__(29);
	var isArray = __webpack_require__(44);
	var anObject = __webpack_require__(12);
	var toIObject = __webpack_require__(32);
	var toPrimitive = __webpack_require__(16);
	var createDesc = __webpack_require__(17);
	var _create = __webpack_require__(45);
	var gOPNExt = __webpack_require__(48);
	var $GOPD = __webpack_require__(50);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(30);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(43).f = $propertyIsEnumerable;
	  __webpack_require__(42).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(28)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var ctx = __webpack_require__(20);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(16);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function () {
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(4).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(5);
	var SRC = __webpack_require__(19)('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(19)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(5);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(5);
	var TAG = __webpack_require__(25)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(23)('wks');
	var uid = __webpack_require__(19);
	var Symbol = __webpack_require__(4).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var LIBRARY = __webpack_require__(28);
	var wksExt = __webpack_require__(26);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = false;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30);
	var gOPS = __webpack_require__(42);
	var pIE = __webpack_require__(43);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(31);
	var enumBugKeys = __webpack_require__(41);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var toIObject = __webpack_require__(32);
	var arrayIndexOf = __webpack_require__(36)(false);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33);
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32);
	var toLength = __webpack_require__(37);
	var toAbsoluteIndex = __webpack_require__(39);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys');
	var uid = __webpack_require__(19);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(46);
	var enumBugKeys = __webpack_require__(41);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(30);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(4).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32);
	var gOPN = __webpack_require__(49).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(31);
	var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(43);
	var createDesc = __webpack_require__(17);
	var toIObject = __webpack_require__(32);
	var toPrimitive = __webpack_require__(16);
	var has = __webpack_require__(5);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(45) });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(46) });


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(32);
	var $getOwnPropertyDescriptor = __webpack_require__(50).f;
	
	__webpack_require__(55)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var fails = __webpack_require__(7);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(57);
	var $getPrototypeOf = __webpack_require__(58);
	
	__webpack_require__(55)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(5);
	var toObject = __webpack_require__(57);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(57);
	var $keys = __webpack_require__(30);
	
	__webpack_require__(55)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(55)('getOwnPropertyNames', function () {
	  return __webpack_require__(48).f;
	});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(55)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(55)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(55)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(55)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(55)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(55)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(68) });


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(30);
	var gOPS = __webpack_require__(42);
	var pIE = __webpack_require__(43);
	var toObject = __webpack_require__(57);
	var IObject = __webpack_require__(33);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { is: __webpack_require__(70) });


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(72).set });


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(50).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(74);
	var test = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34);
	var TAG = __webpack_require__(25)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', { bind: __webpack_require__(76) });


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction = __webpack_require__(21);
	var isObject = __webpack_require__(13);
	var invoke = __webpack_require__(77);
	var arraySlice = [].slice;
	var factories = {};
	
	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11).f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var isObject = __webpack_require__(13);
	var getPrototypeOf = __webpack_require__(58);
	var HAS_INSTANCE = __webpack_require__(25)('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(11).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !isObject(O)) return false;
	  if (!isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
	  return false;
	} });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(81);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt;
	var $trim = __webpack_require__(82).trim;
	var ws = __webpack_require__(83);
	var hex = /^[-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var defined = __webpack_require__(35);
	var fails = __webpack_require__(7);
	var spaces = __webpack_require__(83);
	var space = '[' + spaces + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');
	
	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(85);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat;
	var $trim = __webpack_require__(82).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(83) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var cof = __webpack_require__(34);
	var inheritIfRequired = __webpack_require__(87);
	var toPrimitive = __webpack_require__(16);
	var fails = __webpack_require__(7);
	var gOPN = __webpack_require__(49).f;
	var gOPD = __webpack_require__(50).f;
	var dP = __webpack_require__(11).f;
	var $trim = __webpack_require__(82).trim;
	var NUMBER = 'Number';
	var $Number = global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = cof(__webpack_require__(45)(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var setPrototypeOf = __webpack_require__(72).set;
	module.exports = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toInteger = __webpack_require__(38);
	var aNumberValue = __webpack_require__(89);
	var repeat = __webpack_require__(90);
	var $toFixed = 1.0.toFixed;
	var floor = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';
	
	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR);
	    var f = toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38);
	var defined = __webpack_require__(35);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this));
	  var res = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $fails = __webpack_require__(7);
	var aNumberValue = __webpack_require__(89);
	var $toPrecision = 1.0.toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(8);
	var _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(95) });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(8);
	var isInteger = __webpack_require__(95);
	var abs = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(85);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(81);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8);
	var log1p = __webpack_require__(103);
	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8);
	var $asinh = Math.asinh;
	
	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8);
	var $atanh = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8);
	var sign = __webpack_require__(107);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8);
	var exp = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8);
	var $expm1 = __webpack_require__(111);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { fround: __webpack_require__(113) });


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var sign = __webpack_require__(107);
	var pow = Math.pow;
	var EPSILON = pow(2, -52);
	var EPSILON32 = pow(2, -23);
	var MAX32 = pow(2, 127) * (2 - EPSILON32);
	var MIN32 = pow(2, -126);
	
	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	module.exports = Math.fround || function fround(x) {
	  var $abs = Math.abs(x);
	  var $sign = sign(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8);
	var abs = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8);
	var $imul = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { log1p: __webpack_require__(103) });


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { sign: __webpack_require__(107) });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(111);
	var exp = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(111);
	var exp = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x);
	    var b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toAbsoluteIndex = __webpack_require__(39);
	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var toLength = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw);
	    var len = toLength(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(82)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(127)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38);
	var defined = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(28);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(5);
	var Iterators = __webpack_require__(129);
	var $iterCreate = __webpack_require__(130);
	var setToStringTag = __webpack_require__(24);
	var getPrototypeOf = __webpack_require__(58);
	var ITERATOR = __webpack_require__(25)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(45);
	var descriptor = __webpack_require__(17);
	var setToStringTag = __webpack_require__(24);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(37);
	var context = __webpack_require__(133);
	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134);
	var defined = __webpack_require__(35);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13);
	var cof = __webpack_require__(34);
	var MATCH = __webpack_require__(25)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export = __webpack_require__(8);
	var context = __webpack_require__(133);
	var INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(90)
	});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(37);
	var context = __webpack_require__(133);
	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH);
	    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(35);
	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject(this);
	    var pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8);
	var toISOString = __webpack_require__(156);
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
	});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var fails = __webpack_require__(7);
	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;
	
	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	module.exports = (fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var $toString = DateProto[TO_STRING];
	var getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(18)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive');
	var proto = Date.prototype;
	
	if (!(TO_PRIMITIVE in proto)) __webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(159));


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	var NUMBER = 'number';
	
	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(44) });


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(20);
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var call = __webpack_require__(162);
	var isArrayIter = __webpack_require__(163);
	var toLength = __webpack_require__(37);
	var createProperty = __webpack_require__(164);
	var getIterFn = __webpack_require__(165);
	
	$export($export.S + $export.F * !__webpack_require__(166)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(129);
	var ITERATOR = __webpack_require__(25)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(74);
	var ITERATOR = __webpack_require__(25)('iterator');
	var Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(25)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var createProperty = __webpack_require__(164);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(169)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var fails = __webpack_require__(7);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var html = __webpack_require__(47);
	var cof = __webpack_require__(34);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	var arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length);
	    var klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toAbsoluteIndex(begin, len);
	    var upTo = toAbsoluteIndex(end, len);
	    var size = toLength(upTo - start);
	    var cloned = Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var toObject = __webpack_require__(57);
	var fails = __webpack_require__(7);
	var $sort = [].sort;
	var test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(169)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $forEach = __webpack_require__(173)(0);
	var STRICT = __webpack_require__(169)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(20);
	var IObject = __webpack_require__(33);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var asc = __webpack_require__(174);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(175);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var isArray = __webpack_require__(44);
	var SPECIES = __webpack_require__(25)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $map = __webpack_require__(173)(1);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $filter = __webpack_require__(173)(2);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $some = __webpack_require__(173)(3);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $every = __webpack_require__(173)(4);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(181);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21);
	var toObject = __webpack_require__(57);
	var IObject = __webpack_require__(33);
	var toLength = __webpack_require__(37);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that);
	  var self = IObject(O);
	  var length = toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(181);
	
	$export($export.P + $export.F * !__webpack_require__(169)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $indexOf = __webpack_require__(36)(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	var $native = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this);
	    var length = toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { copyWithin: __webpack_require__(186) });
	
	__webpack_require__(187)('copyWithin');


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(57);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject(this);
	  var len = toLength(O.length);
	  var to = toAbsoluteIndex(target, len);
	  var from = toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
	};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { fill: __webpack_require__(189) });
	
	__webpack_require__(187)('fill');


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(57);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	module.exports = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject(this);
	  var length = toLength(O.length);
	  var aLen = arguments.length;
	  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  var end = aLen > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(173)(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(173)(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(193)('Array');


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var dP = __webpack_require__(11);
	var DESCRIPTORS = __webpack_require__(6);
	var SPECIES = __webpack_require__(25)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(187);
	var step = __webpack_require__(195);
	var Iterators = __webpack_require__(129);
	var toIObject = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 195 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var inheritIfRequired = __webpack_require__(87);
	var dP = __webpack_require__(11).f;
	var gOPN = __webpack_require__(49).f;
	var isRegExp = __webpack_require__(134);
	var $flags = __webpack_require__(197);
	var $RegExp = global.RegExp;
	var Base = $RegExp;
	var proto = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function () {
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = isRegExp(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function () { return Base[key]; },
	      set: function (it) { Base[key] = it; }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(193)('RegExp');


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(199);
	var anObject = __webpack_require__(12);
	var $flags = __webpack_require__(197);
	var DESCRIPTORS = __webpack_require__(6);
	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];
	
	var define = function (fn) {
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(7)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(197)
	});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(201)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(35);
	var wks = __webpack_require__(25);
	
	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY);
	  var fns = exec(defined, SYMBOL, ''[KEY]);
	  var strfn = fns[0];
	  var rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(201)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';
	    var O = defined(this);
	    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(201)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(201)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';
	  var isRegExp = __webpack_require__(134);
	  var _split = $split;
	  var $push = [].push;
	  var $SPLIT = 'split';
	  var LENGTH = 'length';
	  var LAST_INDEX = 'lastIndex';
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          // eslint-disable-next-line no-loop-func
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this);
	    var fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(28);
	var global = __webpack_require__(4);
	var ctx = __webpack_require__(20);
	var classof = __webpack_require__(74);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var aFunction = __webpack_require__(21);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var speciesConstructor = __webpack_require__(208);
	var task = __webpack_require__(209).set;
	var microtask = __webpack_require__(210)();
	var newPromiseCapabilityModule = __webpack_require__(211);
	var perform = __webpack_require__(212);
	var promiseResolve = __webpack_require__(213);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();
	
	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c;
	  var i = 0;
	  var reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  } return true;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(214)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(193)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(166)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 206 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(20);
	var call = __webpack_require__(162);
	var isArrayIter = __webpack_require__(163);
	var anObject = __webpack_require__(12);
	var toLength = __webpack_require__(37);
	var getIterFn = __webpack_require__(165);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(21);
	var SPECIES = __webpack_require__(25)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(20);
	var invoke = __webpack_require__(77);
	var html = __webpack_require__(47);
	var cel = __webpack_require__(15);
	var global = __webpack_require__(4);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(34)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var macrotask = __webpack_require__(209).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(34)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(21);
	
	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}
	
	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 212 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var newPromiseCapability = __webpack_require__(211);
	
	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function (target, src, safe) {
	  for (var key in src) redefine(target, key, src[key], safe);
	  return target;
	};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(216);
	var validate = __webpack_require__(217);
	var MAP = 'Map';
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(218)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(11).f;
	var create = __webpack_require__(45);
	var redefineAll = __webpack_require__(214);
	var ctx = __webpack_require__(20);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var $iterDefine = __webpack_require__(128);
	var step = __webpack_require__(195);
	var setSpecies = __webpack_require__(193);
	var DESCRIPTORS = __webpack_require__(6);
	var fastKey = __webpack_require__(22).fastKey;
	var validate = __webpack_require__(217);
	var SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var redefineAll = __webpack_require__(214);
	var meta = __webpack_require__(22);
	var forOf = __webpack_require__(207);
	var anInstance = __webpack_require__(206);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var $iterDetect = __webpack_require__(166);
	var setToStringTag = __webpack_require__(24);
	var inheritIfRequired = __webpack_require__(87);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(216);
	var validate = __webpack_require__(217);
	var SET = 'Set';
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(218)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var each = __webpack_require__(173)(0);
	var redefine = __webpack_require__(18);
	var meta = __webpack_require__(22);
	var assign = __webpack_require__(68);
	var weak = __webpack_require__(221);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var validate = __webpack_require__(217);
	var WEAK_MAP = 'WeakMap';
	var getWeak = meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = weak.ufstore;
	var tmp = {};
	var InternalMap;
	
	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(validate(this, WEAK_MAP), key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(218)(WEAK_MAP, wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
	  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll = __webpack_require__(214);
	var getWeak = __webpack_require__(22).getWeak;
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var createArrayMethod = __webpack_require__(173);
	var $has = __webpack_require__(5);
	var validate = __webpack_require__(217);
	var arrayFind = createArrayMethod(5);
	var arrayFindIndex = createArrayMethod(6);
	var id = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(221);
	var validate = __webpack_require__(217);
	var WEAK_SET = 'WeakSet';
	
	// 23.4 WeakSet Objects
	__webpack_require__(218)(WEAK_SET, function (get) {
	  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate(this, WEAK_SET), value, true);
	  }
	}, weak, false, true);


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $typed = __webpack_require__(224);
	var buffer = __webpack_require__(225);
	var anObject = __webpack_require__(12);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	var isObject = __webpack_require__(13);
	var ArrayBuffer = __webpack_require__(4).ArrayBuffer;
	var speciesConstructor = __webpack_require__(208);
	var $ArrayBuffer = buffer.ArrayBuffer;
	var $DataView = buffer.DataView;
	var $isView = $typed.ABV && ArrayBuffer.isView;
	var $slice = $ArrayBuffer.prototype.slice;
	var VIEW = $typed.VIEW;
	var ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength;
	    var first = toAbsoluteIndex(start, len);
	    var final = toAbsoluteIndex(end === undefined ? len : end, len);
	    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
	    var viewS = new $DataView(this);
	    var viewT = new $DataView(result);
	    var index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(193)(ARRAY_BUFFER);


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var uid = __webpack_require__(19);
	var TYPED = uid('typed_array');
	var VIEW = uid('view');
	var ABV = !!(global.ArrayBuffer && global.DataView);
	var CONSTR = ABV;
	var i = 0;
	var l = 9;
	var Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var DESCRIPTORS = __webpack_require__(6);
	var LIBRARY = __webpack_require__(28);
	var $typed = __webpack_require__(224);
	var hide = __webpack_require__(10);
	var redefineAll = __webpack_require__(214);
	var fails = __webpack_require__(7);
	var anInstance = __webpack_require__(206);
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	var toIndex = __webpack_require__(226);
	var gOPN = __webpack_require__(49).f;
	var dP = __webpack_require__(11).f;
	var arrayFill = __webpack_require__(189);
	var setToStringTag = __webpack_require__(24);
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH = 'Wrong length!';
	var WRONG_INDEX = 'Wrong index!';
	var $ArrayBuffer = global[ARRAY_BUFFER];
	var $DataView = global[DATA_VIEW];
	var Math = global.Math;
	var RangeError = global.RangeError;
	// eslint-disable-next-line no-shadow-restricted-names
	var Infinity = global.Infinity;
	var BaseBuffer = $ArrayBuffer;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;
	var BUFFER = 'buffer';
	var BYTE_LENGTH = 'byteLength';
	var BYTE_OFFSET = 'byteOffset';
	var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
	var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
	var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	function packIEEE754(value, mLen, nBytes) {
	  var buffer = Array(nBytes);
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var i = 0;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  var e, m, c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	}
	function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = eLen - 7;
	  var i = nBytes - 1;
	  var s = buffer[i--];
	  var e = s & 127;
	  var m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	}
	
	function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	}
	function packI8(it) {
	  return [it & 0xff];
	}
	function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	}
	function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	}
	function packF64(it) {
	  return packIEEE754(it, 52, 8);
	}
	function packF32(it) {
	  return packIEEE754(it, 23, 4);
	}
	
	function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
	}
	
	function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	}
	function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	}
	
	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    var byteLength = toIndex(length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH];
	    var offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    $ArrayBuffer(1);
	  }) || !fails(function () {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(toIndex(length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/ecma262/#sec-toindex
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	module.exports = function (it) {
	  if (it === undefined) return 0;
	  var number = toInteger(it);
	  var length = toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
	};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(224).ABV, {
	  DataView: __webpack_require__(225).DataView
	});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	if (__webpack_require__(6)) {
	  var LIBRARY = __webpack_require__(28);
	  var global = __webpack_require__(4);
	  var fails = __webpack_require__(7);
	  var $export = __webpack_require__(8);
	  var $typed = __webpack_require__(224);
	  var $buffer = __webpack_require__(225);
	  var ctx = __webpack_require__(20);
	  var anInstance = __webpack_require__(206);
	  var propertyDesc = __webpack_require__(17);
	  var hide = __webpack_require__(10);
	  var redefineAll = __webpack_require__(214);
	  var toInteger = __webpack_require__(38);
	  var toLength = __webpack_require__(37);
	  var toIndex = __webpack_require__(226);
	  var toAbsoluteIndex = __webpack_require__(39);
	  var toPrimitive = __webpack_require__(16);
	  var has = __webpack_require__(5);
	  var classof = __webpack_require__(74);
	  var isObject = __webpack_require__(13);
	  var toObject = __webpack_require__(57);
	  var isArrayIter = __webpack_require__(163);
	  var create = __webpack_require__(45);
	  var getPrototypeOf = __webpack_require__(58);
	  var gOPN = __webpack_require__(49).f;
	  var getIterFn = __webpack_require__(165);
	  var uid = __webpack_require__(19);
	  var wks = __webpack_require__(25);
	  var createArrayMethod = __webpack_require__(173);
	  var createArrayIncludes = __webpack_require__(36);
	  var speciesConstructor = __webpack_require__(208);
	  var ArrayIterators = __webpack_require__(194);
	  var Iterators = __webpack_require__(129);
	  var $iterDetect = __webpack_require__(166);
	  var setSpecies = __webpack_require__(193);
	  var arrayFill = __webpack_require__(189);
	  var arrayCopyWithin = __webpack_require__(186);
	  var $DP = __webpack_require__(11);
	  var $GOPD = __webpack_require__(50);
	  var dP = $DP.f;
	  var gOPD = $GOPD.f;
	  var RangeError = global.RangeError;
	  var TypeError = global.TypeError;
	  var Uint8Array = global.Uint8Array;
	  var ARRAY_BUFFER = 'ArrayBuffer';
	  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  var PROTOTYPE = 'prototype';
	  var ArrayProto = Array[PROTOTYPE];
	  var $ArrayBuffer = $buffer.ArrayBuffer;
	  var $DataView = $buffer.DataView;
	  var arrayForEach = createArrayMethod(0);
	  var arrayFilter = createArrayMethod(2);
	  var arraySome = createArrayMethod(3);
	  var arrayEvery = createArrayMethod(4);
	  var arrayFind = createArrayMethod(5);
	  var arrayFindIndex = createArrayMethod(6);
	  var arrayIncludes = createArrayIncludes(true);
	  var arrayIndexOf = createArrayIncludes(false);
	  var arrayValues = ArrayIterators.values;
	  var arrayKeys = ArrayIterators.keys;
	  var arrayEntries = ArrayIterators.entries;
	  var arrayLastIndexOf = ArrayProto.lastIndexOf;
	  var arrayReduce = ArrayProto.reduce;
	  var arrayReduceRight = ArrayProto.reduceRight;
	  var arrayJoin = ArrayProto.join;
	  var arraySort = ArrayProto.sort;
	  var arraySlice = ArrayProto.slice;
	  var arrayToString = ArrayProto.toString;
	  var arrayToLocaleString = ArrayProto.toLocaleString;
	  var ITERATOR = wks('iterator');
	  var TAG = wks('toStringTag');
	  var TYPED_CONSTRUCTOR = uid('typed_constructor');
	  var DEF_CONSTRUCTOR = uid('def_constructor');
	  var ALL_CONSTRUCTORS = $typed.CONSTR;
	  var TYPED_ARRAY = $typed.TYPED;
	  var VIEW = $typed.VIEW;
	  var WRONG_LENGTH = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function () {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });
	
	  var toOffset = function (it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function (it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function (C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function (O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function (C, list) {
	    var index = 0;
	    var length = list.length;
	    var result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function (it, key, internal) {
	    dP(it, key, { get: function () { return this._d[internal]; } });
	  };
	
	  var $from = function from(source /* , mapfn, thisArg */) {
	    var O = toObject(source);
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var iterFn = getIterFn(O);
	    var i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/* ...items */) {
	    var index = 0;
	    var length = arguments.length;
	    var result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this;
	      var length = validate(that).length;
	      var middle = Math.floor(length / 2);
	      var index = 0;
	      var value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this);
	      var length = O.length;
	      var $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1);
	    var length = this.length;
	    var src = toObject(arrayLike);
	    var len = toLength(src.length);
	    var index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function (target, key) {
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };
	
	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });
	
	  if (fails(function () { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function () { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function () { return this[TYPED_ARRAY]; }
	  });
	
	  // eslint-disable-next-line max-statements
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + KEY;
	    var SETTER = 'set' + KEY;
	    var TypedArray = global[NAME];
	    var Base = TypedArray || {};
	    var TAC = TypedArray && getPrototypeOf(TypedArray);
	    var FORCED = !TypedArray || !$typed.ABV;
	    var O = {};
	    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function (that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function (that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function (that, index) {
	      dP(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0;
	        var offset = 0;
	        var buffer, byteLength, length, klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(function () {
	      TypedArray(1);
	    }) || !fails(function () {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function (iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR];
	    var CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    var $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function () { return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });
	
	    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });
	
	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
	
	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });
	
	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () { /* empty */ };


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(229)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var rApply = (__webpack_require__(4).Reflect || {}).apply;
	var fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function () {
	  rApply(function () { /* empty */ });
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target);
	    var L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(8);
	var create = __webpack_require__(45);
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var bind = __webpack_require__(76);
	var rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () { /* empty */ });
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(11);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(8);
	var gOPD = __webpack_require__(50).f;
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var Enumerate = function (iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = [];      // keys
	  var key;
	  for (key in iterated) keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function () {
	  var that = this;
	  var keys = that._k;
	  var key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(50);
	var getPrototypeOf = __webpack_require__(58);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	
	function get(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var desc, proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(50);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(8);
	var getProto = __webpack_require__(58);
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(249) });


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(49);
	var gOPS = __webpack_require__(42);
	var anObject = __webpack_require__(12);
	var Reflect = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it));
	  var getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(11);
	var gOPD = __webpack_require__(50);
	var getPrototypeOf = __webpack_require__(58);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var createDesc = __webpack_require__(17);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	
	function set(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDesc = gOPD.f(anObject(target), propertyKey);
	  var existingDescriptor, proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(8);
	var setProto = __webpack_require__(72);
	
	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export = __webpack_require__(8);
	var $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(187)('includes');


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(255);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var aFunction = __webpack_require__(21);
	var arraySpeciesCreate = __webpack_require__(174);
	
	$export($export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen, A;
	    aFunction(callbackfn);
	    sourceLen = toLength(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
	});
	
	__webpack_require__(187)('flatMap');


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var isArray = __webpack_require__(44);
	var isObject = __webpack_require__(13);
	var toLength = __webpack_require__(37);
	var ctx = __webpack_require__(20);
	var IS_CONCAT_SPREADABLE = __webpack_require__(25)('isConcatSpreadable');
	
	function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  var element, spreadable;
	
	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
	
	      spreadable = false;
	      if (isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
	      }
	
	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }
	
	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	}
	
	module.exports = flattenIntoArray;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(255);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var toInteger = __webpack_require__(38);
	var arraySpeciesCreate = __webpack_require__(174);
	
	$export($export.P, 'Array', {
	  flatten: function flatten(/* depthArg = 1 */) {
	    var depthArg = arguments[0];
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
	    return A;
	  }
	});
	
	__webpack_require__(187)('flatten');


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(259);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37);
	var repeat = __webpack_require__(90);
	var defined = __webpack_require__(35);
	
	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that));
	  var stringLength = S.length;
	  var fillStr = fillString === undefined ? ' ' : String(fillString);
	  var intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength;
	  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(259);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(82)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(82)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export = __webpack_require__(8);
	var defined = __webpack_require__(35);
	var toLength = __webpack_require__(37);
	var isRegExp = __webpack_require__(134);
	var getFlags = __webpack_require__(197);
	var RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function (regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this);
	    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
	    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(8);
	var ownKeys = __webpack_require__(249);
	var toIObject = __webpack_require__(32);
	var gOPD = __webpack_require__(50);
	var createProperty = __webpack_require__(164);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object);
	    var getDesc = gOPD.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
	});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $values = __webpack_require__(268)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(30);
	var toIObject = __webpack_require__(32);
	var isEnum = __webpack_require__(43).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $entries = __webpack_require__(268)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var aFunction = __webpack_require__(21);
	var $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(271), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28) || !__webpack_require__(7)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call
	  __defineSetter__.call(null, K, function () { /* empty */ });
	  delete __webpack_require__(4)[K];
	});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var aFunction = __webpack_require__(21);
	var $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(271), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(58);
	var getOwnPropertyDescriptor = __webpack_require__(50).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(271), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(58);
	var getOwnPropertyDescriptor = __webpack_require__(50).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(271), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(276)('Map') });


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(74);
	var from = __webpack_require__(277);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(207);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(276)('Set') });


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	__webpack_require__(280)('Map');


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(280)('Set');


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
	__webpack_require__(280)('WeakMap');


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
	__webpack_require__(280)('WeakSet');


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	__webpack_require__(285)('Map');


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var ctx = __webpack_require__(20);
	var forOf = __webpack_require__(207);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(285)('Set');


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
	__webpack_require__(285)('WeakMap');


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
	__webpack_require__(285)('WeakSet');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.G, { global: __webpack_require__(4) });


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', { global: __webpack_require__(4) });


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8);
	var cof = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clamp: function clamp(x, lower, upper) {
	    return Math.min(upper, Math.max(lower, x));
	  }
	});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var RAD_PER_DEG = 180 / Math.PI;
	
	$export($export.S, 'Math', {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
	});


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var scale = __webpack_require__(296);
	var fround = __webpack_require__(113);
	
	$export($export.S, 'Math', {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
	});


/***/ }),
/* 296 */
/***/ (function(module, exports) {

	// https://rwaldron.github.io/proposal-math-extensions/
	module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  if (
	    arguments.length === 0
	      // eslint-disable-next-line no-self-compare
	      || x != x
	      // eslint-disable-next-line no-self-compare
	      || inLow != inLow
	      // eslint-disable-next-line no-self-compare
	      || inHigh != inHigh
	      // eslint-disable-next-line no-self-compare
	      || outLow != outLow
	      // eslint-disable-next-line no-self-compare
	      || outHigh != outHigh
	  ) return NaN;
	  if (x === Infinity || x === -Infinity) return x;
	  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
	};


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >> 16;
	    var v1 = $v >> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var DEG_PER_RAD = Math.PI / 180;
	
	$export($export.S, 'Math', {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
	});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { scale: __webpack_require__(296) });


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >>> 16;
	    var v1 = $v >>> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	// http://jfbastien.github.io/papers/Math.signbit.html
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { signbit: function signbit(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
	} });


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var global = __webpack_require__(4);
	var speciesConstructor = __webpack_require__(208);
	var promiseResolve = __webpack_require__(213);
	
	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(8);
	var newPromiseCapability = __webpack_require__(211);
	var perform = __webpack_require__(212);
	
	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	} });


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(215);
	var $export = __webpack_require__(8);
	var shared = __webpack_require__(23)('metadata');
	var store = shared.store || (shared.store = new (__webpack_require__(220))());
	
	var getOrCreateMetadataMap = function (target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function (target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  var keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
	  return keys;
	};
	var toMetaKey = function (it) {
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function (O) {
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var getOrCreateMetadataMap = metadata.map;
	var store = metadata.store;
	
	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
	  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	  if (metadataMap.size) return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	} });


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryHasOwnMetadata = metadata.has;
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;
	
	var ordinaryGetMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(219);
	var from = __webpack_require__(277);
	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;
	
	var ordinaryMetadataKeys = function (O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P);
	  var parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;
	
	var ordinaryHasMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;
	
	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	var $metadata = __webpack_require__(308);
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(21);
	var toMetaKey = $metadata.key;
	var ordinaryDefineOwnMetadata = $metadata.set;
	
	$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	  return function decorator(target, targetKey) {
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(8);
	var microtask = __webpack_require__(210)();
	var process = __webpack_require__(4).process;
	var isNode = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export = __webpack_require__(8);
	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var microtask = __webpack_require__(210)();
	var OBSERVABLE = __webpack_require__(25)('observable');
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var anInstance = __webpack_require__(206);
	var redefineAll = __webpack_require__(214);
	var hide = __webpack_require__(10);
	var forOf = __webpack_require__(207);
	var RETURN = forOf.RETURN;
	
	var getMethod = function (fn) {
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function (subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function (subscription) {
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function (subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function (observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer);
	    var subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  } if (subscriptionClosed(this)) cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() { closeSubscription(this); }
	});
	
	var SubscriptionObserver = function (subscription) {
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function (value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var j = 0; j < items.length; ++j) {
	            observer.next(items[j]);
	            if (done) return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function () { return this; });
	
	$export($export.G, { Observable: $Observable });
	
	__webpack_require__(193)('Observable');


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var navigator = global.navigator;
	var slice = [].slice;
	var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function (set) {
	  return function (fn, time /* , ...args */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : false;
	    return set(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
	    } : fn, time);
	  };
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $task = __webpack_require__(209);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	var $iterators = __webpack_require__(194);
	var getKeys = __webpack_require__(30);
	var redefine = __webpack_require__(18);
	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(129);
	var wks = __webpack_require__(25);
	var ITERATOR = wks('iterator');
	var TO_STRING_TAG = wks('toStringTag');
	var ArrayValues = Iterators.Array;
	
	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};
	
	for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
	}


/***/ }),
/* 322 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(324);
	module.exports = __webpack_require__(9).RegExp.escape;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8);
	var $re = __webpack_require__(325)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 325 */
/***/ (function(module, exports) {

	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _electron = __webpack_require__(327);
	
	var _menu = __webpack_require__(328);
	
	var _api = __webpack_require__(329);
	
	var _events = __webpack_require__(460);
	
	var _config = __webpack_require__(349);
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Bootstrap of Electron 🚀
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
	
	
	var api = new _api.API();
	
	// Keep a global reference of the window object, if you don't, the window will
	// be closed automatically when the JavaScript object is garbage collected.
	var mainWindow = null;
	var menu = void 0;
	
	var installExtensions = function () {
	    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var installer, extensions, forceDownload, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name;
	
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (true) {
	                            _context.next = 36;
	                            break;
	                        }
	
	                        __webpack_require__(467)();
	
	                        installer = __webpack_require__(474); // eslint-disable-line global-require
	
	                        extensions = ['REACT_DEVELOPER_TOOLS', 'REACT_PERF'];
	                        forceDownload = !!({"NODE_ENV":"production"}).UPGRADE_EXTENSIONS;
	                        _iteratorNormalCompletion = true;
	                        _didIteratorError = false;
	                        _iteratorError = undefined;
	                        _context.prev = 8;
	                        _iterator = extensions[Symbol.iterator]();
	
	                    case 10:
	                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                            _context.next = 22;
	                            break;
	                        }
	
	                        name = _step.value;
	                        _context.prev = 12;
	                        _context.next = 15;
	                        return installer.default(installer[name], forceDownload);
	
	                    case 15:
	                        _context.next = 19;
	                        break;
	
	                    case 17:
	                        _context.prev = 17;
	                        _context.t0 = _context['catch'](12);
	
	                    case 19:
	                        _iteratorNormalCompletion = true;
	                        _context.next = 10;
	                        break;
	
	                    case 22:
	                        _context.next = 28;
	                        break;
	
	                    case 24:
	                        _context.prev = 24;
	                        _context.t1 = _context['catch'](8);
	                        _didIteratorError = true;
	                        _iteratorError = _context.t1;
	
	                    case 28:
	                        _context.prev = 28;
	                        _context.prev = 29;
	
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	
	                    case 31:
	                        _context.prev = 31;
	
	                        if (!_didIteratorError) {
	                            _context.next = 34;
	                            break;
	                        }
	
	                        throw _iteratorError;
	
	                    case 34:
	                        return _context.finish(31);
	
	                    case 35:
	                        return _context.finish(28);
	
	                    case 36:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, undefined, [[8, 24, 28, 36], [12, 17], [29,, 31, 35]]);
	    }));
	
	    return function installExtensions() {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	_electron.app.on('ready', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
	    var eventsConfig, eventsElectron;
	    return regeneratorRuntime.wrap(function _callee2$(_context2) {
	        while (1) {
	            switch (_context2.prev = _context2.next) {
	                case 0:
	                    _context2.next = 2;
	                    return installExtensions();
	
	                case 2:
	
	                    mainWindow = new _electron.BrowserWindow({
	                        width: 420,
	                        height: 786,
	                        minWidth: 400,
	                        show: false,
	                        backgroundColor: '#F8FAFF'
	                    });
	
	                    // Bootstrap listeners
	                    eventsConfig = { api: api, emitter: mainWindow.webContents, listener: _electron.ipcMain, config: _config.main };
	                    eventsElectron = { app: _electron.app, emitter: mainWindow.webContents, mainWindow: mainWindow, api: api, config: _config.main, listener: _electron.ipcMain };
	
	
	                    (0, _events.electronEvents)(eventsElectron);
	
	                    (0, _events.shepherdEvents)(eventsConfig);
	                    (0, _events.tradeEvents)(eventsConfig);
	                    (0, _events.portfolioEvents)(eventsConfig);
	                    (0, _events.orderbookEvents)(eventsConfig);
	
	                    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
	
	                    mainWindow.webContents.on('did-finish-load', function () {
	                        mainWindow.show();
	                        mainWindow.focus();
	                    });
	
	                    mainWindow.on('closed', function () {
	                        mainWindow = null;
	                    });
	
	                    mainWindow.on('enter-full-screen', function () {
	                        // Send async message to renderer process to update the store
	                        mainWindow.webContents.send('fullscreen-toggled', true);
	                    });
	
	                    mainWindow.on('leave-full-screen', function () {
	                        // Send async message to renderer process to update the store
	                        mainWindow.webContents.send('fullscreen-toggled', false);
	                    });
	
	                    if (false) {
	                        mainWindow.openDevTools();
	                        mainWindow.webContents.on('context-menu', function (e, props) {
	                            var x = props.x,
	                                y = props.y;
	
	
	                            _electron.Menu.buildFromTemplate([{
	                                label: 'Inspect element',
	                                click: function click() {
	                                    mainWindow.inspectElement(x, y);
	                                }
	                            }]).popup(mainWindow);
	                        });
	                    }
	
	                    // Check if we are on a MAC
	                    if (process.platform === 'darwin') {
	                        // Create our menu entries so that we can use MAC shortcuts
	                        _electron.Menu.setApplicationMenu(_electron.Menu.buildFromTemplate([{
	                            label: 'Edit',
	                            submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'pasteandmatchstyle' }, { role: 'delete' }, { role: 'selectall' }, { role: 'quit' }]
	                        }, {
	                            label: 'View',
	                            submenu: [{ role: 'reload' }, { role: 'forcereload' }, { role: 'toggledevtools' }, { type: 'separator' }, { role: 'resetzoom' }, { role: 'zoomin' }, { role: 'zoomout' }, { type: 'separator' }, { role: 'togglefullscreen' }]
	                        }, {
	                            role: 'window',
	                            submenu: [{ role: 'minimize' }, { role: 'close' }]
	                        }]));
	                    }
	
	                case 17:
	                case 'end':
	                    return _context2.stop();
	            }
	        }
	    }, _callee2, undefined);
	})));

/***/ }),
/* 327 */
/***/ (function(module, exports) {

	module.exports = require("electron");

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _electron = __webpack_require__(327);
	
	var menuTemplate = function menuTemplate() {
	    return [{
	        label: 'barterDEX',
	        submenu: [{
	            label: 'Quit',
	            accelerator: 'Command+Q',
	            click: function click() {
	                _electron.app.quit(); // This is a standart function to quit app.
	            }
	        }]
	    }, {
	        label: 'View',
	        submenu: [{
	            label: 'About App',
	            click: function click() {
	                _electron.ipcMain.emit('show-about-window-event'); // In such way we can trigger function in the main process.
	            }
	        }, {
	            label: 'Reload',
	            accelerator: 'CmdOrCtrl+R',
	            click: function click(item, focusedWindow) {
	                focusedWindow.reload(); // reload the page
	            }
	        }]
	    }, {
	        label: 'Edit',
	        submenu: [{ label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' }, { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' }, { type: 'separator' }, { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' }, { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' }, { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' }, { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }]
	    }, {
	        label: 'Help',
	        submenu: [{
	            label: 'View Licence',
	            click: function click() {
	                _electron.shell.openExternal('https://github.com/DmytroVasin/TimeTracker/blob/master/LICENSE');
	            }
	        }, { type: 'separator' }, { label: 'Version 1.0.0-alpha.6', enabled: 'FALSE' }]
	    }];
	};
	
	module.exports = menuTemplate;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.API = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _electronLog = __webpack_require__(330);
	
	var _electronLog2 = _interopRequireDefault(_electronLog);
	
	var _request = __webpack_require__(348);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _config = __webpack_require__(349);
	
	var _socket = __webpack_require__(354);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _fsExtra = __webpack_require__(413);
	
	var _fsExtra2 = _interopRequireDefault(_fsExtra);
	
	var _psNode = __webpack_require__(454);
	
	var _psNode2 = _interopRequireDefault(_psNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var exec = __webpack_require__(372).exec;
	var EventEmitter = __webpack_require__(391);
	
	var osPlatform = _config.main.osPlatform;
	var homeDir = _config.main.homeDir;
	var defaultCoinsListFile = _config.main.defaultCoinsListFile;
	var marketmakerBin = _config.main.marketmakerBin;
	var marketmakerDir = _config.main.marketmakerDir;
	
	var isJsonString = function isJsonString(str) {
	    try {
	        JSON.parse(str);
	    } catch (e) {
	        return false;
	    }
	    return true;
	};
	
	var Emitter = function (_EventEmitter) {
	    _inherits(Emitter, _EventEmitter);
	
	    function Emitter(_ref) {
	        var config = _ref.config;
	
	        _classCallCheck(this, Emitter);
	
	        var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));
	
	        _this.config = config;
	        _this.userLogout = false;
	        return _this;
	    }
	
	    _createClass(Emitter, [{
	        key: 'apiRequest',
	        value: function apiRequest(_ref2) {
	            var data = _ref2.data,
	                url = _ref2.url;
	
	            data.gui = 'buildog';
	            var jsonData = JSON.stringify(data);
	            // Custom Header pass
	            var headersOpt = {
	                'Content-Type': 'application/json',
	                'Content-Length': Buffer.byteLength(jsonData)
	            };
	
	            return new Promise(function (resolve, reject) {
	                (0, _request2.default)({
	                    method: 'post',
	                    url: url,
	                    form: jsonData,
	                    headers: headersOpt,
	                    json: true
	                }, function (error, response, body) {
	                    if (error) {
	                        return reject(error);
	                    }
	
	                    return resolve(body);
	                });
	            });
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            this.userpass = '';
	            this.mypubkey = '';
	            this.coins = '';
	            this.emit('logoutCallback', { type: 'success' });
	        }
	    }, {
	        key: 'bootstrap',
	        value: function bootstrap(data) {
	            var self = this;
	            self.userLogout = false;
	            var passphrase = data.passphrase.trim();
	
	            var coinsListFile = marketmakerDir + '/coins.json';
	            var coinslist = _fsExtra2.default.readJsonSync(defaultCoinsListFile, { throws: false });
	
	            var copyFile = function copyFile() {
	                _fsExtra2.default.copy(defaultCoinsListFile, coinsListFile).then(function () {
	                    console.log('file copied!');
	                    return self.execMarketMaker({ coinslist: coinslist, passphrase: passphrase });
	                }).catch(function (err) {
	                    console.error(err);
	                });
	            };
	
	            // Wait for endoint to respond before accepting others requests
	            self.endpointCheckInterval = setInterval(function () {
	                self.getUserpass(passphrase).then(function () {
	                    clearInterval(self.endpointCheckInterval);
	                }).catch(function () {
	                    console.log('login endpoint not yet ready');
	                });
	            }, 1000);
	
	            return this.checkMMStatus().then(function (instance) {
	                if (instance === 0) {
	                    console.log('marketmaker not running');
	                    _fsExtra2.default.pathExists(coinsListFile, function (err, exists) {
	                        if (exists === true) {
	                            console.log('coinslist file exist, updating');
	                            _fsExtra2.default.unlinkSync(coinsListFile);
	                            copyFile();
	                        } else if (exists === false) {
	                            console.log('coinslist file doesn\'t exist');
	                            copyFile();
	                        }
	                        if (err) {
	                            console.log(err); // => null
	                        }
	                    });
	                } else {
	                    console.log('found ' + instance + ' marketmaker process');
	                }
	            });
	        }
	    }, {
	        key: 'checkMMStatus',
	        value: function checkMMStatus() {
	            var self = this;
	
	            return new Promise(function (resolve) {
	                return _psNode2.default.lookup({}, function (err, instances) {
	                    if (err) {
	                        throw new Error(err);
	                    }
	
	                    var countInstances = instances.filter(function (instance) {
	                        return instance.command.indexOf('marketmaker') !== -1;
	                    }).length;
	                    self.emit('MMStatus', countInstances === 0 ? 'closed' : 'open');
	
	                    return resolve(countInstances);
	                });
	            });
	        }
	    }, {
	        key: 'execMarketMaker',
	        value: function execMarketMaker(data) {
	            console.log('exec marketmaker');
	
	            var self = this;
	            // start marketmaker via exec
	            var params = {
	                gui: 'buildog',
	                client: 1,
	                userhome: homeDir,
	                passphrase: data.passphrase.trim()
	            };
	
	            if (osPlatform !== 'win32') {
	                params.coins = data.coinslist;
	                params = JSON.stringify(params);
	                params = '\'' + params + '\'';
	            } else {
	                params = JSON.stringify(params);
	                params = params.replace(/"/g, '\\"');
	                params = '"' + params + '"';
	            }
	
	            exec('"' + marketmakerBin + '" ' + params, { cwd: marketmakerDir }, function (error, stdout, stderr) {
	                console.log('stdout: ' + stdout);
	                if (stderr.length) {
	                    console.log('stderr: ' + stderr);
	                    !self.userLogout && self.emit('notifier', { error: 9, desc: stderr });
	                }
	            });
	        }
	    }, {
	        key: 'fetchMarket',
	        value: function fetchMarket() {
	            var self = this;
	            (0, _request2.default)('http://coincap.io/front', function (error, response, body) {
	                isJsonString(body) && self.emit('marketUpdate', { data: JSON.parse(body) });
	            });
	        }
	    }, {
	        key: 'fetchCoins',
	        value: function fetchCoins() {
	            var self = this;
	
	            self.getCoins().then(function (coinsList) {
	                self.emit('coinsList', coinsList);
	            });
	        }
	    }, {
	        key: 'fetchBots',
	        value: function fetchBots() {
	            var _this2 = this;
	
	            var self = this;
	            var data = { userpass: self.userpass, method: 'bot_list' };
	            var url = 'http://127.0.0.1:7783';
	
	            var fetch = new Promise(function (resolve, reject) {
	                return _this2.apiRequest({ data: data, url: url }).then(function (result) {
	                    console.log('botIDs');
	                    console.log(result);
	                    resolve(result);
	                }).catch(function (error) {
	                    console.log('error getcoin ' + coin);
	                    reject(error);
	                });
	            });
	
	            var getstatus = function getstatus(botList) {
	                return botList.map(function (botID) {
	                    return self.botstatus(botID).then(function (botStatus) {
	                        return botStatus;
	                    });
	                });
	            };
	
	            return fetch.then(function (botList) {
	                return Promise.all(getstatus(botList));
	            }).then(function (botlist) {
	                return self.emit('botstatus', botlist);
	            });
	        }
	    }, {
	        key: 'getUserpass',
	        value: function getUserpass(passphrase) {
	            var _this3 = this;
	
	            var self = this;
	            var data = { method: 'passphrase', passphrase: passphrase };
	            var url = 'http://127.0.0.1:7783';
	
	            return new Promise(function (resolve, reject) {
	                return _this3.apiRequest({ data: data, url: url }).then(function (result) {
	                    var userpass = result.userpass,
	                        mypubkey = result.mypubkey;
	
	                    console.log('logged in!');
	                    self.userpass = userpass;
	                    self.mypubkey = mypubkey;
	                    self.getCoins(false).then(function (coinsList) {
	                        // coinsList may return an object instead of an array if it's the first call which return the userpass.
	                        self.emit('coinsList', coinsList.coins || coinsList);
	                        self.emit('updateUserInfo', { userpass: userpass, mypubkey: mypubkey, passphrase: passphrase });
	                    });
	
	                    resolve('logged in');
	                }).catch(function (error) {
	                    reject(error);
	                });
	            });
	        }
	    }, {
	        key: 'balance',
	        value: function balance(_ref3) {
	            var _this4 = this;
	
	            var coin = _ref3.coin,
	                address = _ref3.address;
	
	            var self = this;
	            var data = { userpass: self.userpass, method: 'balance', coin: coin, address: address };
	            var url = 'http://127.0.0.1:7783';
	
	            return new Promise(function (resolve, reject) {
	                return _this4.apiRequest({ data: data, url: url }).then(function (result) {
	                    resolve(result);
	                }).catch(function (error) {
	                    console.log('error getbalance ' + coin);
	                    reject(error);
	                });
	            });
	        }
	    }, {
	        key: 'getCoins',
	        value: function getCoins() {
	            var _this5 = this;
	
	            var fetchBalance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	            var self = this;
	            var data = { userpass: self.userpass, method: 'getcoins' };
	            var url = 'http://127.0.0.1:7783';
	
	            var fetch = new Promise(function (resolve, reject) {
	                return _this5.apiRequest({ data: data, url: url }).then(function (result) {
	                    resolve(result);
	                }).catch(function (error) {
	                    console.log('error getcoin ' + coin);
	                    reject(error);
	                });
	            });
	
	            var updateBalance = function updateBalance(coinList) {
	                return coinList.map(function (coin) {
	                    if (coin.electrum && fetchBalance) {
	                        return self.balance({ coin: coin.coin, address: coin.smartaddress }).then(function (coinBalance) {
	                            coin.balance = coinBalance.balance;
	                            return coin;
	                        });
	                    }
	
	                    return coin;
	                });
	            };
	
	            return fetch.then(function (coinList) {
	                return Promise.all(updateBalance(coinList || []));
	            });
	        }
	    }, {
	        key: 'disableCoin',
	        value: function disableCoin(_ref4) {
	            var _this6 = this;
	
	            var _ref4$coin = _ref4.coin,
	                coin = _ref4$coin === undefined ? '' : _ref4$coin,
	                type = _ref4.type;
	
	            var self = this;
	
	            var data = { userpass: self.userpass, method: 'disable', coin: coin };
	
	            var url = 'http://127.0.0.1:7783';
	
	            this.apiRequest({ data: data, url: url }).then(function (result) {
	                self.fetchPortfolio(function () {
	                    return _this6.emit('updateTrade', { coin: coin, type: type });
	                });
	            }).catch(function (error) {
	                self.emit('notifier', { error: 3 });
	            });
	        }
	    }, {
	        key: 'enableCoin',
	        value: function enableCoin(_ref5) {
	            var _ref5$coin = _ref5.coin,
	                coin = _ref5$coin === undefined ? '' : _ref5$coin,
	                type = _ref5.type,
	                _ref5$electrum = _ref5.electrum,
	                electrum = _ref5$electrum === undefined ? false : _ref5$electrum,
	                ipaddr = _ref5.ipaddr,
	                port = _ref5.port;
	
	            var self = this;
	            var data = void 0;
	
	            if (electrum) {
	                data = { userpass: self.userpass, method: 'electrum', coin: coin, ipaddr: ipaddr, port: port };
	            } else {
	                data = { userpass: self.userpass, method: 'enable', coin: coin };
	            }
	            var url = 'http://127.0.0.1:7783';
	            console.log('enabling ' + coin);
	
	            this.apiRequest({ data: data, url: url }).then(function (result) {
	                if (result.error) {
	                    return self.emit('notifier', { error: 3, desc: result.error });
	                }
	                self.getCoins(false).then(function (coinsList) {
	                    self.emit('coinsList', coinsList);
	                    self.emit('coinEnabled', { coin: coin });
	                    if (type) {
	                        self.emit('updateTrade', { coin: coin, type: type });
	                    }
	                });
	            }).catch(function (error) {
	                self.emit('notifier', { error: 3 });
	            });
	        }
	    }, {
	        key: 'fetchPortfolio',
	        value: function fetchPortfolio() {
	            var self = this;
	            var data = { userpass: self.userpass, method: 'portfolio' };
	            var url = 'http://127.0.0.1:7783';
	            this.apiRequest({ data: data, url: url }).then(function (result) {
	                // body.portfolio.map((item) => item.balance = self.balance({ coin: item.coin, address: item.address }))
	
	                self.emit('setPortfolio', { portfolio: result.portfolio });
	            }).catch(function (error) {
	                self.emit('notifier', { error: 4, desc: marketmakerBin });
	            });
	        }
	    }, {
	        key: 'orderbook',
	        value: function orderbook(_ref6) {
	            var base = _ref6.base,
	                rel = _ref6.rel;
	
	            var self = this;
	            var data = { userpass: this.userpass, method: 'orderbook', base: base, rel: rel };
	            var url = 'http://127.0.0.1:7783';
	            this.apiRequest({ data: data, url: url }).then(function (result) {
	                self.emit('orderbook', { base: base, rel: rel, data: result });
	            }).catch(function (error) {
	                self.emit('notifier', { error: 5 });
	            });
	        }
	    }, {
	        key: 'trade',
	        value: function trade(_ref7) {
	            var _ref7$method = _ref7.method,
	                method = _ref7$method === undefined ? 'bot_sell' : _ref7$method,
	                base = _ref7.base,
	                rel = _ref7.rel,
	                price = _ref7.price,
	                volume = _ref7.volume,
	                smartaddress = _ref7.smartaddress;
	
	            var self = this;
	
	            console.log(smartaddress);
	            var data = { userpass: self.userpass, method: method, base: base, rel: rel };
	
	            if (method === 'bot_sell') {
	                data.basevolume = volume;
	                data.minprice = price;
	            } else {
	                data.relvolume = volume;
	                data.maxprice = price;
	            }
	
	            var url = 'http://127.0.0.1:7783';
	
	            var tradeRequest = function tradeRequest() {
	                return self.apiRequest({ data: data, url: url }).then(function (result) {
	                    console.log(method + ' submitted');
	                    console.log(result);
	                    if (!result.error) {
	                        self.emit('trade', result);
	                    } else {
	                        self.emit('notifier', { error: 7, desc: result.error });
	                    }
	                }).catch(function (error) {
	                    self.emit('notifier', { error: 7 });
	                });
	            };
	
	            return self.inventory({ coin: rel }).then(function (_ref8) {
	                var alice = _ref8.alice;
	
	                // volume/3 + 5*txfee <- 3 times and txfee 3 times
	                if (alice.length < 6) {
	                    var txfee = volume / 3 + 2 * (volume / 100);
	                    var mainSplit = volume + 5 * txfee;
	
	                    self.emit('loading', { type: 'add', key: 7 });
	
	                    return self.withdraw({
	                        address: smartaddress,
	                        coin: rel,
	                        amounts: [_defineProperty({}, smartaddress, mainSplit), _defineProperty({}, smartaddress, mainSplit), _defineProperty({}, smartaddress, mainSplit), _defineProperty({}, smartaddress, txfee), _defineProperty({}, smartaddress, txfee), _defineProperty({}, smartaddress, txfee)]
	                    }).then(function (withdrawResult) {
	                        self.sendrawtransaction({ coin: rel, signedtx: withdrawResult.hex }).then(function () {
	                            setTimeout(function () {
	                                self.emit('loading', { type: 'delete', key: 7 });
	                                tradeRequest();
	                            }, 80000);
	                        });
	                    });
	                }
	
	                return tradeRequest();
	            });
	        }
	    }, {
	        key: 'botstatus',
	        value: function botstatus(botid) {
	            var _this7 = this;
	
	            var self = this;
	            var data = { userpass: self.userpass, method: 'bot_status', botid: botid };
	            var url = 'http://127.0.0.1:7783';
	
	            return new Promise(function (resolve, reject) {
	                return _this7.apiRequest({ data: data, url: url }).then(function (result) {
	                    console.log(botid + ' status');
	                    console.log(result);
	                    resolve(result);
	                }).catch(function (error) {
	                    console.log('error botstatus ' + botid);
	                    reject(error);
	                });
	            });
	        }
	    }, {
	        key: 'toggleBot',
	        value: function toggleBot(_ref15) {
	            var _this8 = this;
	
	            var botid = _ref15.botid,
	                method = _ref15.method;
	
	            var self = this;
	            var data = { userpass: self.userpass, method: method, botid: botid };
	            var url = 'http://127.0.0.1:7783';
	
	            return new Promise(function (resolve, reject) {
	                return _this8.apiRequest({ data: data, url: url }).then(function (result) {
	                    console.log(botid + ' ' + method);
	                    if (method === 'bot_stop') {
	                        self.emit('botStopped', result);
	                    } else {
	                        self.emit('botResumed', result);
	                    }
	
	                    resolve(result);
	                }).catch(function (error) {
	                    console.log('error botstop ' + botid);
	                    reject(error);
	                });
	            });
	        }
	    }, {
	        key: 'sendrawtransaction',
	        value: function sendrawtransaction(_ref16) {
	            var _this9 = this;
	
	            var coin = _ref16.coin,
	                signedtx = _ref16.signedtx,
	                confirmation = _ref16.confirmation;
	
	            var self = this;
	            var data = { userpass: self.userpass, method: 'sendrawtransaction', coin: coin, signedtx: signedtx };
	            var url = 'http://127.0.0.1:7783';
	            console.log(data);
	            return new Promise(function (resolve, reject) {
	                return _this9.apiRequest({ data: data, url: url }).then(function (result) {
	                    console.log('sendWithdraw ' + coin);
	                    console.log(result);
	                    resolve(result);
	                    confirmation && self.emit('sendrawtransaction', result);
	                }).catch(function (error) {
	                    console.log('error sendWithdraw ' + coin);
	                    reject(error);
	                });
	            });
	        }
	    }, {
	        key: 'withdraw',
	        value: function withdraw(_ref17) {
	            var _this10 = this;
	
	            var address = _ref17.address,
	                coin = _ref17.coin,
	                amount = _ref17.amount,
	                amounts = _ref17.amounts,
	                confirmation = _ref17.confirmation;
	
	            var outputs = amounts || [_defineProperty({}, address, amount)];
	            var self = this;
	            var data = { userpass: self.userpass,
	                method: 'withdraw',
	                coin: coin,
	                outputs: outputs };
	
	            console.log(data);
	            var url = 'http://127.0.0.1:7783';
	            return new Promise(function (resolve, reject) {
	                return _this10.apiRequest({ data: data, url: url }).then(function (result) {
	                    confirmation && console.log('withdraw for ' + coin);
	                    !confirmation && console.log('split balance into UTXOS for ' + coin);
	                    console.log(result);
	                    if (result.complete) {
	                        confirmation && self.emit('confirmWithdraw', result);
	                    } else if (confirmation) {
	                        self.emit('notifier', { error: 10, desc: result.error });
	                    } else {
	                        self.emit('notifier', { error: 11 });
	                    }
	                    resolve(result);
	                }).catch(function (error) {
	                    console.log('error withdraw');
	                    reject(error);
	                });
	            });
	        }
	    }, {
	        key: 'inventory',
	        value: function inventory(_ref19) {
	            var _this11 = this;
	
	            var coin = _ref19.coin;
	
	            var self = this;
	            var data = { userpass: self.userpass, method: 'inventory', coin: coin };
	            var url = 'http://127.0.0.1:7783';
	            console.log('inventory for ' + coin);
	
	            return new Promise(function (resolve, reject) {
	                return _this11.apiRequest({ data: data, url: url }).then(function (result) {
	                    console.log(result);
	                    resolve(result);
	                }).catch(function (error) {
	                    console.log('error inventory ' + coin);
	                    reject(error);
	                });
	            });
	        }
	    }, {
	        key: 'listunspent',
	        value: function listunspent(_ref20) {
	            var _this12 = this;
	
	            var coin = _ref20.coin,
	                address = _ref20.address;
	
	            var self = this;
	            var data = { userpass: self.userpass, method: 'listunspent', coin: coin, address: address };
	            var url = 'http://127.0.0.1:7783';
	            console.log('listunspent for ' + coin);
	
	            return new Promise(function (resolve, reject) {
	                return _this12.apiRequest({ data: data, url: url }).then(function (result) {
	                    console.log(result);
	                    resolve(result);
	                }).catch(function (error) {
	                    console.log('error listunspent');
	                    reject(error);
	                });
	            });
	        }
	    }]);
	
	    return Emitter;
	}(EventEmitter);
	
	var API = exports.API = function API() {
	    return new Emitter({ config: _config.main, log: _electronLog2.default });
	};

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (process.type === 'renderer') {
	  module.exports = __webpack_require__(331);
	} else {
	  module.exports = __webpack_require__(332);
	}

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = null;
	
	var ipcRenderer;
	try {
	  ipcRenderer = __webpack_require__(327).ipcRenderer;
	} catch (e) {
	  ipcRenderer = null;
	}
	
	if (ipcRenderer) {
	  module.exports = {
	    error:   log.bind(null, 'error'),
	    warn:    log.bind(null, 'warn'),
	    info:    log.bind(null, 'info'),
	    verbose: log.bind(null, 'verbose'),
	    debug:   log.bind(null, 'debug'),
	    silly:   log.bind(null, 'silly'),
	    log:     log.bind(null, 'info')
	  };
	
	  module.exports.default = module.exports;
	
	  ipcRenderer.on('__ELECTRON_LOG_RENDERER__', function(event, level, text) {
	    if (level === 'verbose') {
	      level = 'log';
	    } else if (level === 'silly') {
	      level = 'debug';
	    }
	
	    console[level](text);
	  });
	}
	
	function log() {
	  var data = Array.prototype.slice.call(arguments);
	
	  data = data.map(function(obj) {
	    if (obj instanceof Error) {
	      obj = obj.stack || obj;
	    }
	
	    return obj;
	  });
	
	  ipcRenderer.send('__ELECTRON_LOG__', data);
	}


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var electron;
	try {
	  electron = __webpack_require__(327);
	} catch (e) {
	  electron = null;
	}
	
	var log                      = __webpack_require__(333);
	var transportConsole         = __webpack_require__(334);
	var transportFile            = __webpack_require__(338);
	var transportLogS            = __webpack_require__(343);
	var transportRendererConsole = __webpack_require__(347);
	
	var transports = {
	  console: transportConsole,
	  file: transportFile,
	  logS: transportLogS,
	  rendererConsole: transportRendererConsole
	};
	
	module.exports = {
	  transports: transports,
	
	  error:   log.bind(null, transports, 'error'),
	  warn:    log.bind(null, transports, 'warn'),
	  info:    log.bind(null, transports, 'info'),
	  verbose: log.bind(null, transports, 'verbose'),
	  debug:   log.bind(null, transports, 'debug'),
	  silly:   log.bind(null, transports, 'silly'),
	  log:     log.bind(null, transports, 'info')
	};
	
	module.exports.default = module.exports;
	
	if (electron && electron.ipcMain) {
	  electron.ipcMain.on('__ELECTRON_LOG__', onRendererLog);
	  var appName = electron.app.getName();
	  if (appName !== 'Electron') {
	    transportFile.appName = appName;
	  }
	}
	
	function onRendererLog(event, data) {
	  if (Array.isArray(data)) {
	    data.unshift(transports);
	    log.apply(null, data);
	  }
	}


/***/ }),
/* 333 */
/***/ (function(module, exports) {

	// jshint -W040
	'use strict';
	
	var LEVELS = ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];
	
	module.exports = log;
	
	function log(transports, level, text) {
	  var data = Array.prototype.slice.call(arguments, 2);
	
	  var msg = {
	    data: data,
	    date: new Date(),
	    level: level
	  };
	
	  for (var i in transports) {
	    // jshint -W089
	    if (!transports.hasOwnProperty(i) || typeof transports[i] !== 'function') {
	      continue;
	    }
	
	    var transport = transports[i];
	
	    if (transport === false || !compareLevels(transport.level, level)) {
	      continue;
	    }
	
	    if (transport.level === false) continue;
	
	    transport.call(null, msg);
	  }
	}
	
	function compareLevels(passLevel, checkLevel) {
	  var pass = LEVELS.indexOf(passLevel);
	  var check = LEVELS.indexOf(checkLevel);
	  if (check === -1 || pass === -1) {
	    return true;
	  }
	  return check <= pass;
	}

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var format = __webpack_require__(335);
	
	transport.level  = 'silly';
	transport.format = '[{h}:{i}:{s}.{ms}] [{level}] {text}';
	
	module.exports = transport;
	
	function transport(msg) {
	  var text = format.format(msg, transport.format);
	  if (console[msg.level]) {
	    console[msg.level](text);
	  } else {
	    console.log(text);
	  }
	}
	


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(336);
	var EOL  = __webpack_require__(337).EOL;
	
	module.exports = {
	  format: format,
	  pad: pad,
	  stringifyArray: stringifyArray
	};
	
	function format(msg, formatter) {
	  if (typeof formatter === 'function') {
	    return formatter(msg);
	  }
	
	  var date = msg.date;
	
	  return formatter
	    .replace('{level}', msg.level)
	    .replace('{text}', stringifyArray(msg.data))
	    .replace('{y}', date.getFullYear())
	    .replace('{m}', pad(date.getMonth() + 1))
	    .replace('{d}', pad(date.getDate()))
	    .replace('{h}', pad(date.getHours()))
	    .replace('{i}', pad(date.getMinutes()))
	    .replace('{s}', pad(date.getSeconds()))
	    .replace('{ms}', pad(date.getMilliseconds(), 3));
	}
	
	function stringifyArray(data) {
	  data = data.map(function formatErrors(arg) {
	    return arg instanceof Error ? arg.stack + EOL : arg;
	  });
	  return util.format.apply(util, data);
	}
	
	function pad(number, zeros) {
	  zeros = zeros || 2;
	  return (new Array(zeros + 1).join('0') + number).substr(-zeros, zeros);
	}


/***/ }),
/* 336 */
/***/ (function(module, exports) {

	module.exports = require("util");

/***/ }),
/* 337 */
/***/ (function(module, exports) {

	module.exports = require("os");

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var fs               = __webpack_require__(339);
	var EOL              = __webpack_require__(337).EOL;
	var format           = __webpack_require__(335);
	var consoleTransport = __webpack_require__(334);
	var findLogPath      = __webpack_require__(340);
	
	transport.findLogPath  = findLogPath;
	transport.format       = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}';
	transport.level        = 'warn';
	transport.maxSize      = 1024 * 1024;
	transport.streamConfig = undefined;
	
	module.exports = transport;
	
	function transport(msg) {
	  var text = format.format(msg, transport.format) + EOL;
	
	  if (transport.stream === undefined) {
	    initSteamConfig();
	    openStream();
	  }
	
	  if (transport.level === false) {
	    return;
	  }
	
	  var needLogRotation = transport.maxSize > 0 &&
	    getStreamSize(transport.stream) > transport.maxSize;
	
	  if (needLogRotation) {
	    archiveLog(transport.stream);
	    openStream();
	  }
	
	  transport.stream.write(text);
	}
	
	function initSteamConfig() {
	  transport.file = transport.file || findLogPath(transport.appName);
	
	  if (!transport.file) {
	    transport.level = false;
	    logConsole('Could not set a log file');
	  }
	}
	
	function openStream() {
	  if (transport.level === false) {
	    return;
	  }
	
	  transport.stream = fs.createWriteStream(
	    transport.file,
	    transport.streamConfig || { flags: 'a' }
	  );
	}
	
	function getStreamSize(stream) {
	  if (!stream) {
	    return 0;
	  }
	
	  if (stream.logSizeAtStart === undefined) {
	    try {
	      stream.logSizeAtStart = fs.statSync(stream.path).size;
	    } catch (e) {
	      stream.logSizeAtStart = 0;
	    }
	  }
	
	  return stream.logSizeAtStart + stream.bytesWritten;
	}
	
	function archiveLog(stream) {
	  if (stream.end) {
	    stream.end();
	  }
	
	  try {
	    fs.renameSync(stream.path, stream.path.replace(/log$/, 'old.log'));
	  } catch (e) {
	    logConsole('Could not rotate log', e);
	  }
	}
	
	function logConsole(message, error) {
	  var data = ['electron-log.transports.file: ' + message];
	
	  if (error) {
	    data.push(error);
	  }
	
	  consoleTransport({ data: data, date: new Date(), level: 'warn' });
	}


/***/ }),
/* 339 */
/***/ (function(module, exports) {

	module.exports = require("fs");

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var fs   = __webpack_require__(339);
	var path = __webpack_require__(341);
	var os   = __webpack_require__(337);
	var getAppName = __webpack_require__(342);
	
	module.exports = findLogPath;
	
	/**
	 * Try to determine a platform-specific path where can write logs
	 * @param {string} [appName] Used to determine the last part of a log path
	 * @return {string|boolean}
	 */
	function findLogPath(appName) {
	  appName = appName || getAppName();
	  if (!appName) {
	    return false;
	  }
	
	  var homeDir = os.homedir ? os.homedir() : ({"NODE_ENV":"production"})['HOME'];
	  
	  var dir;
	  switch (process.platform) {
	    case 'linux': {
	      dir = prepareDir(({"NODE_ENV":"production"})['XDG_CONFIG_HOME'], appName)
	        .or(homeDir, '.config', appName)
	        .or(({"NODE_ENV":"production"})['XDG_DATA_HOME'], appName)
	        .or(homeDir, '.local', 'share', appName)
	        .result;
	      break;
	    }
	
	    case 'darwin': {
	      dir = prepareDir(homeDir, 'Library', 'Logs', appName)
	        .or(homeDir, 'Library', 'Application Support', appName)
	        .result;
	      break;
	    }
	
	    case 'win32': {
	      dir = prepareDir(({"NODE_ENV":"production"})['APPDATA'], appName)
	        .or(homeDir, 'AppData', 'Roaming', appName)
	        .result;
	      break;
	    }
	  }
	
	  if (dir) {
	    return path.join(dir, 'log.log');
	  } else {
	    return false;
	  }
	}
	
	
	
	function prepareDir(dirPath) {
	  // jshint -W040
	  if (!this || this.or !== prepareDir || !this.result) {
	    if (!dirPath) {
	      return { or: prepareDir };
	    }
	
	    //noinspection JSCheckFunctionSignatures
	    dirPath = path.join.apply(path, arguments);
	    mkDir(dirPath);
	
	    try {
	      fs.accessSync(dirPath, fs.W_OK);
	    } catch (e) {
	      return { or: prepareDir };
	    }
	  }
	
	  return {
	    or: prepareDir,
	    result: (this ? this.result : false) || dirPath
	  };
	}
	
	function mkDir(dirPath, root) {
	  var dirs = dirPath.split(path.sep);
	  var dir = dirs.shift();
	  root = (root || '') + dir + path.sep;
	
	  try {
	    fs.mkdirSync(root);
	  } catch (e) {
	    if (!fs.statSync(root).isDirectory()) {
	      throw new Error(e);
	    }
	  }
	
	  return !dirs.length || mkDir(dirs.join(path.sep), root);
	}


/***/ }),
/* 341 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	// jshint -W074
	'use strict';
	
	/** @name process.resourcesPath */
	
	var fs   = __webpack_require__(339);
	var path = __webpack_require__(341);
	var consoleTransport = __webpack_require__(334);
	
	module.exports = getAppName;
	
	function getAppName() {
	  try {
	    var name = loadPackageName();
	    if (name) {
	      return name;
	    }
	    return warn('electron-log: unable to load the app name from package.json');
	  } catch (e) {
	    return warn('electron-log: ' + e.message);
	  }
	}
	
	/**
	 * Try to load main app package
	 * @throws {Error}
	 * @return {Object|null}
	 */
	function loadPackageName() {
	  var packageFile;
	
	  try {
	    if (__webpack_require__.c[0].filename) {
	      packageFile = find(path.dirname(__webpack_require__.c[0].filename));
	    }
	  } catch (e) {}
	
	  if (!packageFile && process.resourcesPath) {
	    packageFile = find(path.join(process.resourcesPath, 'app.asar'));
	    var electronModule = path.join('node_modules', 'electron', 'package.json');
	    if (packageFile && packageFile.indexOf(electronModule) !== -1) {
	      packageFile = null;
	    }
	  }
	
	  if (!packageFile) {
	    packageFile = find(process.cwd());
	  }
	
	  if (!packageFile) {
	    return null;
	  }
	
	  var content = fs.readFileSync(packageFile, 'utf-8');
	  var packageData = JSON.parse(content);
	
	  //noinspection JSUnresolvedVariable
	  return packageData ? packageData.productName || packageData.name : false;
	}
	
	function find(root) {
	  var file;
	
	  while (!file) {
	    var parent;
	    file = path.join(root, 'package.json');
	
	    try {
	      fs.statSync(file);
	    } catch (e) {
	      parent = path.resolve(root, '..');
	      file = null;
	    }
	
	    if (root === parent) {
	      break;
	    }
	
	    root = parent;
	  }
	
	  return file;
	}
	
	function warn(message) {
	  consoleTransport({
	    data: [message],
	    date: new Date(),
	    level: 'warn'
	  });
	}

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	// jshint -W074, -W089
	'use strict';
	
	var http  = __webpack_require__(344);
	var https = __webpack_require__(345);
	var url   = __webpack_require__(346);
	
	transport.client = { name: 'electron-application' };
	transport.depth  = 6;
	transport.level  = false;
	transport.url    = null;
	
	module.exports = transport;
	
	function transport(msg) {
	  if (!transport.url) return;
	
	  var data = jsonDepth({
	    client: transport.client,
	    data: msg.data,
	    date: msg.date.getTime(),
	    level: msg.level
	  }, transport.depth + 1);
	
	  post(transport.url, data);
	}
	
	function post(serverUrl, data) {
	  var urlObject = url.parse(serverUrl);
	  var transport = urlObject.protocol === 'https:' ? https : http;
	
	  var body = JSON.stringify(data);
	
	  var options = {
	    hostname: urlObject.hostname,
	    port:     urlObject.port,
	    path:     urlObject.path,
	    method:   'POST',
	    headers:  {
	      'Content-Type':  'application/json',
	      'Content-Length': body.length
	    }
	  };
	
	  var request = transport.request(options);
	  request.write(body);
	  request.end();
	}
	
	function jsonDepth(json, depth) {
	  if (depth < 1) {
	    if (Array.isArray(json))  return '[array]';
	    if (typeof json === 'object')  return '[object]';
	    return json;
	  }
	
	  if (Array.isArray(json)) {
	    return json.map(function(child) {
	      return jsonDepth(child, depth - 1);
	    });
	  }
	
	  if (json && typeof json.getMonth === 'function') {
	    return json;
	  }
	
	  if (json === null) {
	    return null;
	  }
	
	  if (typeof json === 'object') {
	    if (typeof json.toJSON === 'function') {
	      json = json.toJSON();
	    }
	
	    var newJson = {};
	    for (var i in json) {
	      //noinspection JSUnfilteredForInLoop
	      newJson[i] = jsonDepth(json[i], depth - 1);
	    }
	
	    return newJson;
	  }
	
	  return json;
	}

/***/ }),
/* 344 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ }),
/* 345 */
/***/ (function(module, exports) {

	module.exports = require("https");

/***/ }),
/* 346 */
/***/ (function(module, exports) {

	module.exports = require("url");

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var BrowserWindow;
	try {
	  BrowserWindow = __webpack_require__(327).BrowserWindow;
	} catch (e) {
	  BrowserWindow = null;
	}
	
	var format = __webpack_require__(335);
	
	transport.level  = BrowserWindow ? 'silly' : false;
	transport.format = '[{h}:{i}:{s}.{ms}] {text}';
	
	module.exports = transport;
	
	function transport(msg) {
	  if (!BrowserWindow) return;
	
	  var text = format.format(msg, transport.format);
	  BrowserWindow.getAllWindows().forEach(function(wnd) {
	    wnd.webContents.send('__ELECTRON_LOG_RENDERER__', msg.level, text);
	  });
	}


/***/ }),
/* 348 */
/***/ (function(module, exports) {

	module.exports = require("request");

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _os = __webpack_require__(337);
	
	var _os2 = _interopRequireDefault(_os);
	
	var _fs = __webpack_require__(339);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(341);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _passphrasegenerator = __webpack_require__(350);
	
	var _package = __webpack_require__(352);
	
	var _package2 = _interopRequireDefault(_package);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var osPlatform = _os2.default.platform(); /*
	                                              Configuration store for the dependencies and frame config
	                                          */
	
	
	var homeDir = __webpack_require__(337).homedir();
	
	var env = ("production");
	var assetChainPorts = {
	    marketmaker: '7779',
	    komodod: '7771',
	    SUPERNET: '11341',
	    REVS: '10196',
	    WLC: '12167',
	    PANGEA: '10074',
	    DEX: '9503',
	    JUMBLR: '10789',
	    BET: '11222',
	    CRYPTO: '10420',
	    HODL: '8010',
	    SHARK: '14104',
	    BOTS: '10151',
	    MGW: '15524',
	    KV: '9747',
	    CEAL: '13097',
	    MESH: '8400',
	    USD: '13967',
	    CHF: '15312',
	    CAD: '8720',
	    BRL: '9914',
	    BGN: '9110',
	    AUD: '8045',
	    PLN: '13493',
	    PHP: '11181',
	    NZD: '10915',
	    NOK: '11588',
	    MYR: '10688',
	    MXN: '13970',
	    KRW: '14020',
	    JPY: '13145',
	    INR: '10536',
	    ILS: '14638',
	    IDR: '14459',
	    HKD: '15409',
	    HUF: '13699',
	    GBP: '11505',
	    EUR: '8065',
	    DKK: '13830',
	    CNY: '10384',
	    ZAR: '15160',
	    TRY: '13924',
	    THB: '11847',
	    SGD: '14475',
	    SEK: '11447',
	    RON: '8675',
	    RUB: '8199',
	    CZK: '9482'
	};
	
	// SETTING OS DIR TO RUN MARKETMAKER FROM
	// SETTING APP ICON FOR LINUX AND WINDOWS
	var marketmakerBin = void 0;
	var marketmakerDir = void 0;
	var marketmakerIcon = void 0;
	
	/* Handle binaries paths */
	var marketmaker = __webpack_require__(353).path;
	
	var paths = { marketmaker: marketmaker };
	var transformBinaryPath = function transformBinaryPath(name) {
	    return paths[name].replace('bin', 'node_modules/' + name + '/bin').replace('app.asar', 'app.asar.unpacked');
	};
	
	marketmakerBin = paths.marketmaker;
	
	if (_os2.default.platform() === 'darwin') {
	    // fixPath();
	    marketmakerDir = homeDir + '/Library/Application Support/marketmaker';
	
	    if (env !== 'development') {
	        marketmakerBin = transformBinaryPath('marketmaker');
	    }
	}
	
	if (_os2.default.platform() === 'linux') {
	    marketmakerDir = homeDir + '/.marketmaker';
	    if (env !== 'development') {
	        marketmakerBin = marketmakerBin.replace('bin/linux', 'node_modules/marketmaker/bin/linux').replace('app.asar', 'app.asar.unpacked');
	    }
	}
	
	if (_os2.default.platform() === 'win32') {
	    homeDir += '\\AppData\\Roaming';
	    marketmakerDir = homeDir + '\\marketmaker';
	    // marketmakerDir = path.normalize(marketmakerDir);
	    marketmakerIcon = _path2.default.join(__dirname, '/app/assets/icons/agama_icons/agama_app_icon.ico');
	
	    homeDir = homeDir.replace(/\\\\/g, '\\');
	    marketmakerDir = marketmakerDir.replace(/\\\\/g, '\\');
	
	    if (env !== 'development') {
	        marketmakerBin = marketmakerBin.replace('bin', 'node_modules\\marketmaker\\bin').replace('app.asar', 'app.asar.unpacked');
	    }
	}
	
	// DEFAULT COINS LIST FOR MARKETMAKER
	var defaultCoinsListFile = _path2.default.join(__dirname, './coins.json');
	
	exports.default = {
	    main: { homeDir: homeDir, env: env, assetChainPorts: assetChainPorts, osPlatform: osPlatform, defaultCoinsListFile: defaultCoinsListFile, marketmakerBin: marketmakerBin, marketmakerDir: marketmakerDir, marketmakerIcon: marketmakerIcon },
	    PassPhraseGenerator: _passphrasegenerator.PassPhraseGenerator,
	    appVersion: _package2.default.version
	};
	module.exports = exports['default'];

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PassPhraseGenerator = undefined;
	
	var _wordlist = __webpack_require__(351);
	
	var PassPhraseGenerator = exports.PassPhraseGenerator = {
	    seeds: 0,
	    seedLimit: 512,
	
	    push: function push(seed) {
	        Math.seedrandom(seed, true);
	        this.seeds++;
	    },
	    isDone: function isDone() {
	        if (this.seeds == this.seedLimit) {
	            return true;
	        }
	        return false;
	    },
	    percentage: function percentage() {
	        return Math.round(this.seeds / this.seedLimit * 100);
	    },
	
	
	    passPhrase: '',
	
	    wordCount: 2048,
	
	    words: _wordlist.ClientWordList,
	
	    generatePassPhrase: function generatePassPhrase(bitsval) {
	        var crypto = window.crypto || window.msCrypto;
	
	        var bits = bitsval;
	
	        var random = new Uint32Array(bits / 32);
	
	        crypto.getRandomValues(random);
	
	        var i = 0,
	            l = random.length,
	            n = this.wordCount,
	            words = [],
	            x = void 0,
	            w1 = void 0,
	            w2 = void 0,
	            w3 = void 0;
	
	        for (; i < l; i++) {
	            x = random[i];
	            w1 = x % n;
	            w2 = ((x / n >> 0) + w1) % n;
	            w3 = (((x / n >> 0) / n >> 0) + w2) % n;
	
	            words.push(this.words[w1]);
	            words.push(this.words[w2]);
	            words.push(this.words[w3]);
	        }
	
	        this.passPhrase = words.join(' ');
	
	        crypto.getRandomValues(random);
	
	        return this.passPhrase;
	    },
	
	
	    // checks if it's possible that the pass phrase words supplied as the first parameter
	    // were generated with the number of bits supplied as the second parameter
	    isPassPhraseValid: function isPassPhraseValid(passPhraseWords, bits) {
	        // the required number of words based on the number of bits
	        // mirrors the generatePassPhrase function above
	        var wordsCount = bits / 32 * 3;
	        return passPhraseWords && passPhraseWords.length === wordsCount;
	    },
	
	
	    // checks if all pass phrase words are valid
	    // i.e. checks if all words are contained in ClientWordList
	    arePassPhraseWordsValid: function arePassPhraseWordsValid(passPhraseWords) {
	        if (!passPhraseWords) {
	            return false;
	        }
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = passPhraseWords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var word = _step.value;
	
	                if (this.words.indexOf(word) === -1) {
	                    return false;
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        return true;
	    },
	    reset: function reset() {
	        this.passPhrase = '';
	        this.seeds = 0;
	    }
	}; /** ****************************************************************************
	    * Copyright © 2016 The Waves Core Developers.                             	  *
	    *                                                                            *
	    * See the LICENSE files at     											  *
	    * the top-level directory of this distribution for the individual copyright  *
	    * holder information and the developer policies on copyright and licensing.  *
	    *                                                                            *
	    * Unless otherwise agreed in a custom licensing agreement, no part of the    *
	    * Waves software, including this file, may be copied, modified, propagated,  *
	    * or distributed except according to the terms contained in the LICENSE.txt  *
	    * file.                                                                      *
	    *                                                                            *
	    * Removal or modification of this copyright notice is prohibited.            *
	    *                                                                            *
	    ******************************************************************************/
	
	/**
	 * @depends {../3rdparty/jquery-2.1.0.js}
	 */

/***/ }),
/* 351 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md
	var ClientWordList = exports.ClientWordList = ['abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse', 'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act', 'action', 'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit', 'adult', 'advance', 'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent', 'agree', 'ahead', 'aim', 'air', 'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert', 'alien', 'all', 'alley', 'allow', 'almost', 'alone', 'alpha', 'already', 'also', 'alter', 'always', 'amateur', 'amazing', 'among', 'amount', 'amused', 'analyst', 'anchor', 'ancient', 'anger', 'angle', 'angry', 'animal', 'ankle', 'announce', 'annual', 'another', 'answer', 'antenna', 'antique', 'anxiety', 'any', 'apart', 'apology', 'appear', 'apple', 'approve', 'april', 'arch', 'arctic', 'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around', 'arrange', 'arrest', 'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault', 'asset', 'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract', 'auction', 'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake', 'aware', 'away', 'awesome', 'awful', 'awkward', 'axis', 'baby', 'bachelor', 'bacon', 'badge', 'bag', 'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain', 'barrel', 'base', 'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become', 'beef', 'before', 'begin', 'behave', 'behind', 'believe', 'below', 'belt', 'bench', 'benefit', 'best', 'betray', 'better', 'between', 'beyond', 'bicycle', 'bid', 'bike', 'bind', 'biology', 'bird', 'birth', 'bitter', 'black', 'blade', 'blame', 'blanket', 'blast', 'bleak', 'bless', 'blind', 'blood', 'blossom', 'blouse', 'blue', 'blur', 'blush', 'board', 'boat', 'body', 'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring', 'borrow', 'boss', 'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain', 'brand', 'brass', 'brave', 'bread', 'breeze', 'brick', 'bridge', 'brief', 'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze', 'broom', 'brother', 'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb', 'bulk', 'bullet', 'bundle', 'bunker', 'burden', 'burger', 'burst', 'bus', 'business', 'busy', 'butter', 'buyer', 'buzz', 'cabbage', 'cabin', 'cable', 'cactus', 'cage', 'cake', 'call', 'calm', 'camera', 'camp', 'can', 'canal', 'cancel', 'candy', 'cannon', 'canoe', 'canvas', 'canyon', 'capable', 'capital', 'captain', 'car', 'carbon', 'card', 'cargo', 'carpet', 'carry', 'cart', 'case', 'cash', 'casino', 'castle', 'casual', 'cat', 'catalog', 'catch', 'category', 'cattle', 'caught', 'cause', 'caution', 'cave', 'ceiling', 'celery', 'cement', 'census', 'century', 'cereal', 'certain', 'chair', 'chalk', 'champion', 'change', 'chaos', 'chapter', 'charge', 'chase', 'chat', 'cheap', 'check', 'cheese', 'chef', 'cherry', 'chest', 'chicken', 'chief', 'child', 'chimney', 'choice', 'choose', 'chronic', 'chuckle', 'chunk', 'churn', 'cigar', 'cinnamon', 'circle', 'citizen', 'city', 'civil', 'claim', 'clap', 'clarify', 'claw', 'clay', 'clean', 'clerk', 'clever', 'click', 'client', 'cliff', 'climb', 'clinic', 'clip', 'clock', 'clog', 'close', 'cloth', 'cloud', 'clown', 'club', 'clump', 'cluster', 'clutch', 'coach', 'coast', 'coconut', 'code', 'coffee', 'coil', 'coin', 'collect', 'color', 'column', 'combine', 'come', 'comfort', 'comic', 'common', 'company', 'concert', 'conduct', 'confirm', 'congress', 'connect', 'consider', 'control', 'convince', 'cook', 'cool', 'copper', 'copy', 'coral', 'core', 'corn', 'correct', 'cost', 'cotton', 'couch', 'country', 'couple', 'course', 'cousin', 'cover', 'coyote', 'crack', 'cradle', 'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy', 'cream', 'credit', 'creek', 'crew', 'cricket', 'crime', 'crisp', 'critic', 'crop', 'cross', 'crouch', 'crowd', 'crucial', 'cruel', 'cruise', 'crumble', 'crunch', 'crush', 'cry', 'crystal', 'cube', 'culture', 'cup', 'cupboard', 'curious', 'current', 'curtain', 'curve', 'cushion', 'custom', 'cute', 'cycle', 'dad', 'damage', 'damp', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal', 'debate', 'debris', 'decade', 'december', 'decide', 'decline', 'decorate', 'decrease', 'deer', 'defense', 'define', 'defy', 'degree', 'delay', 'deliver', 'demand', 'demise', 'denial', 'dentist', 'deny', 'depart', 'depend', 'deposit', 'depth', 'deputy', 'derive', 'describe', 'desert', 'design', 'desk', 'despair', 'destroy', 'detail', 'detect', 'develop', 'device', 'devote', 'diagram', 'dial', 'diamond', 'diary', 'dice', 'diesel', 'diet', 'differ', 'digital', 'dignity', 'dilemma', 'dinner', 'dinosaur', 'direct', 'dirt', 'disagree', 'discover', 'disease', 'dish', 'dismiss', 'disorder', 'display', 'distance', 'divert', 'divide', 'divorce', 'dizzy', 'doctor', 'document', 'dog', 'doll', 'dolphin', 'domain', 'donate', 'donkey', 'donor', 'door', 'dose', 'double', 'dove', 'draft', 'dragon', 'drama', 'drastic', 'draw', 'dream', 'dress', 'drift', 'drill', 'drink', 'drip', 'drive', 'drop', 'drum', 'dry', 'duck', 'dumb', 'dune', 'during', 'dust', 'dutch', 'duty', 'dwarf', 'dynamic', 'eager', 'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'echo', 'ecology', 'economy', 'edge', 'edit', 'educate', 'effort', 'egg', 'eight', 'either', 'elbow', 'elder', 'electric', 'elegant', 'element', 'elephant', 'elevator', 'elite', 'else', 'embark', 'embody', 'embrace', 'emerge', 'emotion', 'employ', 'empower', 'empty', 'enable', 'enact', 'end', 'endless', 'endorse', 'enemy', 'energy', 'enforce', 'engage', 'engine', 'enhance', 'enjoy', 'enlist', 'enough', 'enrich', 'enroll', 'ensure', 'enter', 'entire', 'entry', 'envelope', 'episode', 'equal', 'equip', 'era', 'erase', 'erode', 'erosion', 'error', 'erupt', 'escape', 'essay', 'essence', 'estate', 'eternal', 'ethics', 'evidence', 'evil', 'evoke', 'evolve', 'exact', 'example', 'excess', 'exchange', 'excite', 'exclude', 'excuse', 'execute', 'exercise', 'exhaust', 'exhibit', 'exile', 'exist', 'exit', 'exotic', 'expand', 'expect', 'expire', 'explain', 'expose', 'express', 'extend', 'extra', 'eye', 'eyebrow', 'fabric', 'face', 'faculty', 'fade', 'faint', 'faith', 'fall', 'false', 'fame', 'family', 'famous', 'fan', 'fancy', 'fantasy', 'farm', 'fashion', 'fat', 'fatal', 'father', 'fatigue', 'fault', 'favorite', 'feature', 'february', 'federal', 'fee', 'feed', 'feel', 'female', 'fence', 'festival', 'fetch', 'fever', 'few', 'fiber', 'fiction', 'field', 'figure', 'file', 'film', 'filter', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fiscal', 'fish', 'fit', 'fitness', 'fix', 'flag', 'flame', 'flash', 'flat', 'flavor', 'flee', 'flight', 'flip', 'float', 'flock', 'floor', 'flower', 'fluid', 'flush', 'fly', 'foam', 'focus', 'fog', 'foil', 'fold', 'follow', 'food', 'foot', 'force', 'forest', 'forget', 'fork', 'fortune', 'forum', 'forward', 'fossil', 'foster', 'found', 'fox', 'fragile', 'frame', 'frequent', 'fresh', 'friend', 'fringe', 'frog', 'front', 'frost', 'frown', 'frozen', 'fruit', 'fuel', 'fun', 'funny', 'furnace', 'fury', 'future', 'gadget', 'gain', 'galaxy', 'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp', 'gate', 'gather', 'gauge', 'gaze', 'general', 'genius', 'genre', 'gentle', 'genuine', 'gesture', 'ghost', 'giant', 'gift', 'giggle', 'ginger', 'giraffe', 'girl', 'give', 'glad', 'glance', 'glare', 'glass', 'glide', 'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glue', 'goat', 'goddess', 'gold', 'good', 'goose', 'gorilla', 'gospel', 'gossip', 'govern', 'gown', 'grab', 'grace', 'grain', 'grant', 'grape', 'grass', 'gravity', 'great', 'green', 'grid', 'grief', 'grit', 'grocery', 'group', 'grow', 'grunt', 'guard', 'guess', 'guide', 'guilt', 'guitar', 'gun', 'gym', 'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy', 'harbor', 'hard', 'harsh', 'harvest', 'hat', 'have', 'hawk', 'hazard', 'head', 'health', 'heart', 'heavy', 'hedgehog', 'height', 'hello', 'helmet', 'help', 'hen', 'hero', 'hidden', 'high', 'hill', 'hint', 'hip', 'hire', 'history', 'hobby', 'hockey', 'hold', 'hole', 'holiday', 'hollow', 'home', 'honey', 'hood', 'hope', 'horn', 'horror', 'horse', 'hospital', 'host', 'hotel', 'hour', 'hover', 'hub', 'huge', 'human', 'humble', 'humor', 'hundred', 'hungry', 'hunt', 'hurdle', 'hurry', 'hurt', 'husband', 'hybrid', 'ice', 'icon', 'idea', 'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image', 'imitate', 'immense', 'immune', 'impact', 'impose', 'improve', 'impulse', 'inch', 'include', 'income', 'increase', 'index', 'indicate', 'indoor', 'industry', 'infant', 'inflict', 'inform', 'inhale', 'inherit', 'initial', 'inject', 'injury', 'inmate', 'inner', 'innocent', 'input', 'inquiry', 'insane', 'insect', 'inside', 'inspire', 'install', 'intact', 'interest', 'into', 'invest', 'invite', 'involve', 'iron', 'island', 'isolate', 'issue', 'item', 'ivory', 'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel', 'job', 'join', 'joke', 'journey', 'joy', 'judge', 'juice', 'jump', 'jungle', 'junior', 'junk', 'just', 'kangaroo', 'keen', 'keep', 'ketchup', 'key', 'kick', 'kid', 'kidney', 'kind', 'kingdom', 'kiss', 'kit', 'kitchen', 'kite', 'kitten', 'kiwi', 'knee', 'knife', 'knock', 'know', 'lab', 'label', 'labor', 'ladder', 'lady', 'lake', 'lamp', 'language', 'laptop', 'large', 'later', 'latin', 'laugh', 'laundry', 'lava', 'law', 'lawn', 'lawsuit', 'layer', 'lazy', 'leader', 'leaf', 'learn', 'leave', 'lecture', 'left', 'leg', 'legal', 'legend', 'leisure', 'lemon', 'lend', 'length', 'lens', 'leopard', 'lesson', 'letter', 'level', 'liar', 'liberty', 'library', 'license', 'life', 'lift', 'light', 'like', 'limb', 'limit', 'link', 'lion', 'liquid', 'list', 'little', 'live', 'lizard', 'load', 'loan', 'lobster', 'local', 'lock', 'logic', 'lonely', 'long', 'loop', 'lottery', 'loud', 'lounge', 'love', 'loyal', 'lucky', 'luggage', 'lumber', 'lunar', 'lunch', 'luxury', 'lyrics', 'machine', 'mad', 'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal', 'man', 'manage', 'mandate', 'mango', 'mansion', 'manual', 'maple', 'marble', 'march', 'margin', 'marine', 'market', 'marriage', 'mask', 'mass', 'master', 'match', 'material', 'math', 'matrix', 'matter', 'maximum', 'maze', 'meadow', 'mean', 'measure', 'meat', 'mechanic', 'medal', 'media', 'melody', 'melt', 'member', 'memory', 'mention', 'menu', 'mercy', 'merge', 'merit', 'merry', 'mesh', 'message', 'metal', 'method', 'middle', 'midnight', 'milk', 'million', 'mimic', 'mind', 'minimum', 'minor', 'minute', 'miracle', 'mirror', 'misery', 'miss', 'mistake', 'mix', 'mixed', 'mixture', 'mobile', 'model', 'modify', 'mom', 'moment', 'monitor', 'monkey', 'monster', 'month', 'moon', 'moral', 'more', 'morning', 'mosquito', 'mother', 'motion', 'motor', 'mountain', 'mouse', 'move', 'movie', 'much', 'muffin', 'mule', 'multiply', 'muscle', 'museum', 'mushroom', 'music', 'must', 'mutual', 'myself', 'mystery', 'myth', 'naive', 'name', 'napkin', 'narrow', 'nasty', 'nation', 'nature', 'near', 'neck', 'need', 'negative', 'neglect', 'neither', 'nephew', 'nerve', 'nest', 'net', 'network', 'neutral', 'never', 'news', 'next', 'nice', 'night', 'noble', 'noise', 'nominee', 'noodle', 'normal', 'north', 'nose', 'notable', 'note', 'nothing', 'notice', 'novel', 'now', 'nuclear', 'number', 'nurse', 'nut', 'oak', 'obey', 'object', 'oblige', 'obscure', 'observe', 'obtain', 'obvious', 'occur', 'ocean', 'october', 'odor', 'off', 'offer', 'office', 'often', 'oil', 'okay', 'old', 'olive', 'olympic', 'omit', 'once', 'one', 'onion', 'online', 'only', 'open', 'opera', 'opinion', 'oppose', 'option', 'orange', 'orbit', 'orchard', 'order', 'ordinary', 'organ', 'orient', 'original', 'orphan', 'ostrich', 'other', 'outdoor', 'outer', 'output', 'outside', 'oval', 'oven', 'over', 'own', 'owner', 'oxygen', 'oyster', 'ozone', 'pact', 'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic', 'panther', 'paper', 'parade', 'parent', 'park', 'parrot', 'party', 'pass', 'patch', 'path', 'patient', 'patrol', 'pattern', 'pause', 'pave', 'payment', 'peace', 'peanut', 'pear', 'peasant', 'pelican', 'pen', 'penalty', 'pencil', 'people', 'pepper', 'perfect', 'permit', 'person', 'pet', 'phone', 'photo', 'phrase', 'physical', 'piano', 'picnic', 'picture', 'piece', 'pig', 'pigeon', 'pill', 'pilot', 'pink', 'pioneer', 'pipe', 'pistol', 'pitch', 'pizza', 'place', 'planet', 'plastic', 'plate', 'play', 'please', 'pledge', 'pluck', 'plug', 'plunge', 'poem', 'poet', 'point', 'polar', 'pole', 'police', 'pond', 'pony', 'pool', 'popular', 'portion', 'position', 'possible', 'post', 'potato', 'pottery', 'poverty', 'powder', 'power', 'practice', 'praise', 'predict', 'prefer', 'prepare', 'present', 'pretty', 'prevent', 'price', 'pride', 'primary', 'print', 'priority', 'prison', 'private', 'prize', 'problem', 'process', 'produce', 'profit', 'program', 'project', 'promote', 'proof', 'property', 'prosper', 'protect', 'proud', 'provide', 'public', 'pudding', 'pull', 'pulp', 'pulse', 'pumpkin', 'punch', 'pupil', 'puppy', 'purchase', 'purity', 'purpose', 'purse', 'push', 'put', 'puzzle', 'pyramid', 'quality', 'quantum', 'quarter', 'question', 'quick', 'quit', 'quiz', 'quote', 'rabbit', 'raccoon', 'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally', 'ramp', 'ranch', 'random', 'range', 'rapid', 'rare', 'rate', 'rather', 'raven', 'raw', 'razor', 'ready', 'real', 'reason', 'rebel', 'rebuild', 'recall', 'receive', 'recipe', 'record', 'recycle', 'reduce', 'reflect', 'reform', 'refuse', 'region', 'regret', 'regular', 'reject', 'relax', 'release', 'relief', 'rely', 'remain', 'remember', 'remind', 'remove', 'render', 'renew', 'rent', 'reopen', 'repair', 'repeat', 'replace', 'report', 'require', 'rescue', 'resemble', 'resist', 'resource', 'response', 'result', 'retire', 'retreat', 'return', 'reunion', 'reveal', 'review', 'reward', 'rhythm', 'rib', 'ribbon', 'rice', 'rich', 'ride', 'ridge', 'rifle', 'right', 'rigid', 'ring', 'riot', 'ripple', 'risk', 'ritual', 'rival', 'river', 'road', 'roast', 'robot', 'robust', 'rocket', 'romance', 'roof', 'rookie', 'room', 'rose', 'rotate', 'rough', 'round', 'route', 'royal', 'rubber', 'rude', 'rug', 'rule', 'run', 'runway', 'rural', 'sad', 'saddle', 'sadness', 'safe', 'sail', 'salad', 'salmon', 'salon', 'salt', 'salute', 'same', 'sample', 'sand', 'satisfy', 'satoshi', 'sauce', 'sausage', 'save', 'say', 'scale', 'scan', 'scare', 'scatter', 'scene', 'scheme', 'school', 'science', 'scissors', 'scorpion', 'scout', 'scrap', 'screen', 'script', 'scrub', 'sea', 'search', 'season', 'seat', 'second', 'secret', 'section', 'security', 'seed', 'seek', 'segment', 'select', 'sell', 'seminar', 'senior', 'sense', 'sentence', 'series', 'service', 'session', 'settle', 'setup', 'seven', 'shadow', 'shaft', 'shallow', 'share', 'shed', 'shell', 'sheriff', 'shield', 'shift', 'shine', 'ship', 'shiver', 'shock', 'shoe', 'shoot', 'shop', 'short', 'shoulder', 'shove', 'shrimp', 'shrug', 'shuffle', 'shy', 'sibling', 'sick', 'side', 'siege', 'sight', 'sign', 'silent', 'silk', 'silly', 'silver', 'similar', 'simple', 'since', 'sing', 'siren', 'sister', 'situate', 'six', 'size', 'skate', 'sketch', 'ski', 'skill', 'skin', 'skirt', 'skull', 'slab', 'slam', 'sleep', 'slender', 'slice', 'slide', 'slight', 'slim', 'slogan', 'slot', 'slow', 'slush', 'small', 'smart', 'smile', 'smoke', 'smooth', 'snack', 'snake', 'snap', 'sniff', 'snow', 'soap', 'soccer', 'social', 'sock', 'soda', 'soft', 'solar', 'soldier', 'solid', 'solution', 'solve', 'someone', 'song', 'soon', 'sorry', 'sort', 'soul', 'sound', 'soup', 'source', 'south', 'space', 'spare', 'spatial', 'spawn', 'speak', 'special', 'speed', 'spell', 'spend', 'sphere', 'spice', 'spider', 'spike', 'spin', 'spirit', 'split', 'spoil', 'sponsor', 'spoon', 'sport', 'spot', 'spray', 'spread', 'spring', 'spy', 'square', 'squeeze', 'squirrel', 'stable', 'stadium', 'staff', 'stage', 'stairs', 'stamp', 'stand', 'start', 'state', 'stay', 'steak', 'steel', 'stem', 'step', 'stereo', 'stick', 'still', 'sting', 'stock', 'stomach', 'stone', 'stool', 'story', 'stove', 'strategy', 'street', 'strike', 'strong', 'struggle', 'student', 'stuff', 'stumble', 'style', 'subject', 'submit', 'subway', 'success', 'such', 'sudden', 'suffer', 'sugar', 'suggest', 'suit', 'summer', 'sun', 'sunny', 'sunset', 'super', 'supply', 'supreme', 'sure', 'surface', 'surge', 'surprise', 'surround', 'survey', 'suspect', 'sustain', 'swallow', 'swamp', 'swap', 'swarm', 'swear', 'sweet', 'swift', 'swim', 'swing', 'switch', 'sword', 'symbol', 'symptom', 'syrup', 'system', 'table', 'tackle', 'tag', 'tail', 'talent', 'talk', 'tank', 'tape', 'target', 'task', 'taste', 'tattoo', 'taxi', 'teach', 'team', 'tell', 'ten', 'tenant', 'tennis', 'tent', 'term', 'test', 'text', 'thank', 'that', 'theme', 'then', 'theory', 'there', 'they', 'thing', 'this', 'thought', 'three', 'thrive', 'throw', 'thumb', 'thunder', 'ticket', 'tide', 'tiger', 'tilt', 'timber', 'time', 'tiny', 'tip', 'tired', 'tissue', 'title', 'toast', 'tobacco', 'today', 'toddler', 'toe', 'together', 'toilet', 'token', 'tomato', 'tomorrow', 'tone', 'tongue', 'tonight', 'tool', 'tooth', 'top', 'topic', 'topple', 'torch', 'tornado', 'tortoise', 'toss', 'total', 'tourist', 'toward', 'tower', 'town', 'toy', 'track', 'trade', 'traffic', 'tragic', 'train', 'transfer', 'trap', 'trash', 'travel', 'tray', 'treat', 'tree', 'trend', 'trial', 'tribe', 'trick', 'trigger', 'trim', 'trip', 'trophy', 'trouble', 'truck', 'true', 'truly', 'trumpet', 'trust', 'truth', 'try', 'tube', 'tuition', 'tumble', 'tuna', 'tunnel', 'turkey', 'turn', 'turtle', 'twelve', 'twenty', 'twice', 'twin', 'twist', 'two', 'type', 'typical', 'ugly', 'umbrella', 'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold', 'unhappy', 'uniform', 'unique', 'unit', 'universe', 'unknown', 'unlock', 'until', 'unusual', 'unveil', 'update', 'upgrade', 'uphold', 'upon', 'upper', 'upset', 'urban', 'urge', 'usage', 'use', 'used', 'useful', 'useless', 'usual', 'utility', 'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van', 'vanish', 'vapor', 'various', 'vast', 'vault', 'vehicle', 'velvet', 'vendor', 'venture', 'venue', 'verb', 'verify', 'version', 'very', 'vessel', 'veteran', 'viable', 'vibrant', 'vicious', 'victory', 'video', 'view', 'village', 'vintage', 'violin', 'virtual', 'virus', 'visa', 'visit', 'visual', 'vital', 'vivid', 'vocal', 'voice', 'void', 'volcano', 'volume', 'vote', 'voyage', 'wage', 'wagon', 'wait', 'walk', 'wall', 'walnut', 'want', 'warfare', 'warm', 'warrior', 'wash', 'wasp', 'waste', 'water', 'wave', 'way', 'wealth', 'weapon', 'wear', 'weasel', 'weather', 'web', 'wedding', 'weekend', 'weird', 'welcome', 'west', 'wet', 'whale', 'what', 'wheat', 'wheel', 'when', 'where', 'whip', 'whisper', 'wide', 'width', 'wife', 'wild', 'will', 'win', 'window', 'wine', 'wing', 'wink', 'winner', 'winter', 'wire', 'wisdom', 'wise', 'wish', 'witness', 'wolf', 'woman', 'wonder', 'wood', 'wool', 'word', 'work', 'world', 'worry', 'worth', 'wrap', 'wreck', 'wrestle', 'wrist', 'write', 'wrong', 'yard', 'year', 'yellow', 'you', 'young', 'youth', 'zebra', 'zero', 'zone', 'zoo'];

/***/ }),
/* 352 */
/***/ (function(module, exports) {

	module.exports = {"name":"barterDEX","author":"buildog","version":"1.3.4","description":"barterDEX Electron App","main":"main.js","scripts":{"patch":"node patch.js","fixperms":"chmod +x ./node_modules/marketmaker/bin/linux/x64/marketmaker && chmod +x ./node_modules/marketmaker/bin/darwin/x64/marketmaker && chmod +x ./node_modules/marketmaker/bin/win32/x64/marketmaker.exe","lint":"eslint app test *.js","dist-main":"cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config ./config/webpack.config.electron.js --progress --profile --colors","dist-renderer":"cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config ./config/webpack.config.prod.js --progress --profile --colors","dist":"npm run patch && npm run dist-main && npm run dist-renderer","start":"npm run dist && cross-env NODE_ENV=production electron ./main","start-hot":"cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./main.dev","hot-server":"node -r babel-register server.js","dev":"concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\"","release":"npm run dist && npm run package-all","package-all":"npm run dist &&  build -mwl","package-mac":"build -m","package-win":"build -w","package-linux":"build -l"},"bin":{"electron":"./node_modules/.bin/electron"},"license":"GNU","devDependencies":{"asar":"^0.12.3","babel-core":"^6.14.0","babel-eslint":"^6.1.2","babel-loader":"^6.2.5","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dev-expression":"^0.2.1","babel-plugin-syntax-decorators":"^6.13.0","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-typecheck":"^3.9.0","babel-plugin-webpack-loaders":"^0.7.1","babel-polyfill":"^6.13.0","babel-preset-es2015":"^6.14.0","babel-preset-react":"^6.11.1","babel-preset-react-hmre":"^1.1.1","babel-preset-react-optimize":"^1.0.1","babel-preset-stage-0":"^6.5.0","babel-register":"^6.14.0","classnames":"^2.2.5","concurrently":"^2.2.0","copy-webpack-plugin":"^4.0.1","cross-env":"^2.0.1","css-loader":"^0.24.0","del":"^2.2.2","devtron":"^1.3.0","electron":"1.7.9","electron-builder":"^19.19.1","electron-debug":"^1.0.1","electron-devtools-installer":"^2.0.1","electron-packager":"^9.1.0","eslint":"^3.4.0","eslint-config-airbnb":"^10.0.1","eslint-import-resolver-webpack":"^0.5.1","eslint-plugin-import":"^2.7.0","eslint-plugin-jsx-a11y":"^2.2.0","eslint-plugin-react":"^6.10.3","express":"^4.14.0","extract-text-webpack-plugin":"^1.0.1","json-loader":"^0.5.7","node-libs-browser":"^1.0.0","postcss":"^5.1.2","postcss-cssnext":"^3.0.0","postcss-extend":"^1.0.5","postcss-import":"^10.0.0","postcss-loader":"^2.0.6","postcss-nested":"^2.0.2","postcss-reporter":"^4.0.0","postcss-simple-vars":"^4.0.0","react-addons-test-utils":"^15.3.1","spectron":"^3.3.0","style-loader":"^0.13.1","svg-inline-loader":"^0.8.0","url-loader":"^0.5.9","webpack":"^1.13.2","webpack-dev-middleware":"^1.6.1","webpack-hot-middleware":"^2.12.2","webpack-merge":"^0.14.1"},"build":{"extraResources":"../dist","appId":"org.barterdex.desktop","directories":{"output":"release"},"asarUnpack":["**/app/node_modules/marketmaker/*"],"win":{"target":["nsis"],"icon":"resources/windows/icon.ico"},"nsis":{"oneClick":true,"installerHeaderIcon":"resources/windows/setup-icon.ico"},"mac":{"icon":"resources/osx/icon.icns","category":"your.app.category.type"},"dmg":{"icon":"resources/icons/icon.png"}},"dependencies":{"cross-spawn":"^5.1.0","cryptocoins-icons":"^2.6.0","electron-log":"^2.2.7","fix-path":"^2.1.0","format-currency":"^1.0.0","fs-extra":"^4.0.2","marketmaker":"https://github.com/buildog/marketmaker.git","mobx":"^2.4.4","mobx-react":"^3.5.5","mobx-react-devtools":"^4.2.5","moment":"^2.18.1","ps-node":"^0.1.6","qrcode.react":"^0.7.2","react":"^15.4.1","react-cryptocoins":"^1.0.2","react-dom":"^15.3.1","react-input-autosize":"^2.0.1","react-router":"^2.7.0","react-table":"^6.5.3","react-toggle":"^4.0.2","recharts":"^1.0.0-apha.5","request":"^2.81.0","rimraf":"^2.6.1","shelljs":"^0.7.8","socket.io-client":"^2.0.3","source-map-support":"^0.4.2"}}

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	var os = __webpack_require__(337)
	var path = __webpack_require__(341)
	
	var platform = os.platform()
	if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
	  console.error('Unsupported platform.')
	  process.exit(1)
	}
	
	var arch = os.arch()
	if (platform === 'darwin' && arch !== 'x64') {
	  console.error('Unsupported architecture.')
	  process.exit(1)
	}
	
	var marketmakerPath = path.join(
	  __dirname,
	  'bin',
	  platform,
	  arch,
	  platform === 'win32' ? 'marketmaker.exe' : 'marketmaker'
	)
	
	exports.path = marketmakerPath;


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(355);
	var parser = __webpack_require__(360);
	var Manager = __webpack_require__(366);
	var debug = __webpack_require__(357)('socket.io-client');
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = lookup;
	
	/**
	 * Managers cache.
	 */
	
	var cache = exports.managers = {};
	
	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */
	
	function lookup (uri, opts) {
	  if (typeof uri === 'object') {
	    opts = uri;
	    uri = undefined;
	  }
	
	  opts = opts || {};
	
	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;
	
	  var io;
	
	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	  if (parsed.query && !opts.query) {
	    opts.query = parsed.query;
	  }
	  return io.socket(parsed.path, opts);
	}
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = parser.protocol;
	
	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */
	
	exports.connect = lookup;
	
	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */
	
	exports.Manager = __webpack_require__(366);
	exports.Socket = __webpack_require__(408);


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var parseuri = __webpack_require__(356);
	var debug = __webpack_require__(357)('socket.io-client:url');
	
	/**
	 * Module exports.
	 */
	
	module.exports = url;
	
	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */
	
	function url (uri, loc) {
	  var obj = uri;
	
	  // default to window.location
	  loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;
	
	  // relative path support
	  if ('string' === typeof uri) {
	    if ('/' === uri.charAt(0)) {
	      if ('/' === uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }
	
	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' !== typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }
	
	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }
	
	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }
	
	  obj.path = obj.path || '/';
	
	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;
	
	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));
	
	  return obj;
	}


/***/ }),
/* 356 */
/***/ (function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];
	
	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');
	
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	
	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;
	
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	
	    return uri;
	};


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(358);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }
	
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs(args) {
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return;
	
	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = ({"NODE_ENV":"production"}).DEBUG;
	  }
	
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(359);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor(namespace) {
	  var hash = 0, i;
	
	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }
	
	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function createDebug(namespace) {
	
	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;
	
	    var self = debug;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);
	
	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	
	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	
	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }
	
	  return debug;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  exports.names = [];
	  exports.skips = [];
	
	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ }),
/* 359 */
/***/ (function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(357)('socket.io-parser');
	var Emitter = __webpack_require__(361);
	var hasBin = __webpack_require__(362);
	var binary = __webpack_require__(364);
	var isBuf = __webpack_require__(365);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = 4;
	
	/**
	 * Packet types.
	 *
	 * @api public
	 */
	
	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];
	
	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */
	
	exports.CONNECT = 0;
	
	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */
	
	exports.DISCONNECT = 1;
	
	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */
	
	exports.EVENT = 2;
	
	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */
	
	exports.ACK = 3;
	
	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */
	
	exports.ERROR = 4;
	
	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */
	
	exports.BINARY_EVENT = 5;
	
	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */
	
	exports.BINARY_ACK = 6;
	
	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */
	
	exports.Encoder = Encoder;
	
	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */
	
	exports.Decoder = Decoder;
	
	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */
	
	function Encoder() {}
	
	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */
	
	Encoder.prototype.encode = function(obj, callback){
	  if ((obj.type === exports.EVENT || obj.type === exports.ACK) && hasBin(obj.data)) {
	    obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK;
	  }
	
	  debug('encoding packet %j', obj);
	
	  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};
	
	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */
	
	function encodeAsString(obj) {
	
	  // first is type
	  var str = '' + obj.type;
	
	  // attachments if we have them
	  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
	    str += obj.attachments + '-';
	  }
	
	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' !== obj.nsp) {
	    str += obj.nsp + ',';
	  }
	
	  // immediately followed by the id
	  if (null != obj.id) {
	    str += obj.id;
	  }
	
	  // json data
	  if (null != obj.data) {
	    str += JSON.stringify(obj.data);
	  }
	
	  debug('encoded %j as %s', obj, str);
	  return str;
	}
	
	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */
	
	function encodeAsBinary(obj, callback) {
	
	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;
	
	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }
	
	  binary.removeBlobs(obj, writeEncoding);
	}
	
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */
	
	function Decoder() {
	  this.reconstructor = null;
	}
	
	/**
	 * Mix in `Emitter` with Decoder.
	 */
	
	Emitter(Decoder.prototype);
	
	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */
	
	Decoder.prototype.add = function(obj) {
	  var packet;
	  if (typeof obj === 'string') {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);
	
	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};
	
	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */
	
	function decodeString(str) {
	  var i = 0;
	  // look up type
	  var p = {
	    type: Number(str.charAt(0))
	  };
	
	  if (null == exports.types[p.type]) return error();
	
	  // look up attachments if type binary
	  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
	    var buf = '';
	    while (str.charAt(++i) !== '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) !== '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }
	
	  // look up namespace (if any)
	  if ('/' === str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' === c) break;
	      p.nsp += c;
	      if (i === str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }
	
	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i === str.length) break;
	    }
	    p.id = Number(p.id);
	  }
	
	  // look up json data
	  if (str.charAt(++i)) {
	    p = tryParse(p, str.substr(i));
	  }
	
	  debug('decoded %s as %j', str, p);
	  return p;
	}
	
	function tryParse(p, str) {
	  try {
	    p.data = JSON.parse(str);
	  } catch(e){
	    return error();
	  }
	  return p; 
	}
	
	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */
	
	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};
	
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */
	
	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}
	
	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */
	
	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};
	
	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */
	
	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};
	
	function error() {
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	/* global Blob File */
	
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(363);
	
	var toString = Object.prototype.toString;
	var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
	var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Supports Buffer, ArrayBuffer, Blob and File.
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary (obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	
	  if (isArray(obj)) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      if (hasBinary(obj[i])) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  if ((typeof global.Buffer === 'function' && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	     (typeof global.ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
	     (withNativeBlob && obj instanceof Blob) ||
	     (withNativeFile && obj instanceof File)
	    ) {
	    return true;
	  }
	
	  // see: https://github.com/Automattic/has-binary/pull/4
	  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
	    return hasBinary(obj.toJSON(), true);
	  }
	
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
	      return true;
	    }
	  }
	
	  return false;
	}


/***/ }),
/* 363 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	/*global Blob,File*/
	
	/**
	 * Module requirements
	 */
	
	var isArray = __webpack_require__(363);
	var isBuf = __webpack_require__(365);
	var toString = Object.prototype.toString;
	var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
	var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';
	
	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */
	
	exports.deconstructPacket = function(packet) {
	  var buffers = [];
	  var packetData = packet.data;
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData, buffers);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};
	
	function _deconstructPacket(data, buffers) {
	  if (!data) return data;
	
	  if (isBuf(data)) {
	    var placeholder = { _placeholder: true, num: buffers.length };
	    buffers.push(data);
	    return placeholder;
	  } else if (isArray(data)) {
	    var newData = new Array(data.length);
	    for (var i = 0; i < data.length; i++) {
	      newData[i] = _deconstructPacket(data[i], buffers);
	    }
	    return newData;
	  } else if (typeof data === 'object' && !(data instanceof Date)) {
	    var newData = {};
	    for (var key in data) {
	      newData[key] = _deconstructPacket(data[key], buffers);
	    }
	    return newData;
	  }
	  return data;
	}
	
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */
	
	exports.reconstructPacket = function(packet, buffers) {
	  packet.data = _reconstructPacket(packet.data, buffers);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};
	
	function _reconstructPacket(data, buffers) {
	  if (!data) return data;
	
	  if (data && data._placeholder) {
	    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
	  } else if (isArray(data)) {
	    for (var i = 0; i < data.length; i++) {
	      data[i] = _reconstructPacket(data[i], buffers);
	    }
	  } else if (typeof data === 'object') {
	    for (var key in data) {
	      data[key] = _reconstructPacket(data[key], buffers);
	    }
	  }
	
	  return data;
	}
	
	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */
	
	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;
	
	    // convert any blob
	    if ((withNativeBlob && obj instanceof Blob) ||
	        (withNativeFile && obj instanceof File)) {
	      pendingBlobs++;
	
	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }
	
	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };
	
	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }
	
	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};


/***/ }),
/* 365 */
/***/ (function(module, exports) {

	
	module.exports = isBuf;
	
	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */
	
	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var eio = __webpack_require__(367);
	var Socket = __webpack_require__(408);
	var Emitter = __webpack_require__(361);
	var parser = __webpack_require__(360);
	var on = __webpack_require__(410);
	var bind = __webpack_require__(411);
	var debug = __webpack_require__(357)('socket.io-client:manager');
	var indexOf = __webpack_require__(407);
	var Backoff = __webpack_require__(412);
	
	/**
	 * IE6+ hasOwnProperty
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Module exports
	 */
	
	module.exports = Manager;
	
	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */
	
	function Manager (uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' === typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};
	
	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  var _parser = opts.parser || parser;
	  this.encoder = new _parser.Encoder();
	  this.decoder = new _parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}
	
	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */
	
	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};
	
	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */
	
	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.generateId(nsp);
	    }
	  }
	};
	
	/**
	 * generate `socket.id` for the given `nsp`
	 *
	 * @param {String} nsp
	 * @return {String}
	 * @api private
	 */
	
	Manager.prototype.generateId = function (nsp) {
	  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
	};
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Manager.prototype);
	
	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};
	
	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};
	
	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};
	
	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};
	
	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};
	
	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};
	
	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */
	
	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};
	
	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */
	
	Manager.prototype.open =
	Manager.prototype.connect = function (fn, opts) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;
	
	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;
	
	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });
	
	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });
	
	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);
	
	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);
	
	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	
	  this.subs.push(openSub);
	  this.subs.push(errorSub);
	
	  return this;
	};
	
	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */
	
	Manager.prototype.onopen = function () {
	  debug('open');
	
	  // clear old subs
	  this.cleanup();
	
	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');
	
	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};
	
	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */
	
	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};
	
	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};
	
	/**
	 * Called with data.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};
	
	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */
	
	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};
	
	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */
	
	Manager.prototype.socket = function (nsp, opts) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp, opts);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.generateId(nsp);
	    });
	
	    if (this.autoConnect) {
	      // manually call here since connecting event is fired before listening
	      onConnecting();
	    }
	  }
	
	  function onConnecting () {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }
	
	  return socket;
	};
	
	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */
	
	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;
	
	  this.close();
	};
	
	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;
	  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;
	
	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};
	
	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */
	
	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};
	
	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */
	
	Manager.prototype.cleanup = function () {
	  debug('cleanup');
	
	  var subsLength = this.subs.length;
	  for (var i = 0; i < subsLength; i++) {
	    var sub = this.subs.shift();
	    sub.destroy();
	  }
	
	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;
	
	  this.decoder.destroy();
	};
	
	/**
	 * Close the current socket.
	 *
	 * @api private
	 */
	
	Manager.prototype.close =
	Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' === this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};
	
	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */
	
	Manager.prototype.onclose = function (reason) {
	  debug('onclose');
	
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};
	
	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */
	
	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;
	
	  var self = this;
	
	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);
	
	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;
	
	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);
	
	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;
	
	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);
	
	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	};
	
	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */
	
	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(368);


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(369);
	
	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(376);


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var transports = __webpack_require__(370);
	var Emitter = __webpack_require__(361);
	var debug = __webpack_require__(357)('engine.io-client:socket');
	var index = __webpack_require__(407);
	var parser = __webpack_require__(376);
	var parseuri = __webpack_require__(356);
	var parseqs = __webpack_require__(384);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Socket;
	
	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */
	
	function Socket (uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);
	
	  opts = opts || {};
	
	  if (uri && 'object' === typeof uri) {
	    opts = uri;
	    uri = null;
	  }
	
	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }
	
	  this.secure = null != opts.secure ? opts.secure
	    : (global.location && 'https:' === location.protocol);
	
	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }
	
	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port
	      ? location.port
	      : (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.transportOptions = opts.transportOptions || {};
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.prevBufferLen = 0;
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
	
	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
	  this.forceNode = !!opts.forceNode;
	
	  // other options for Node.js client
	  var freeGlobal = typeof global === 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	
	    if (opts.localAddress) {
	      this.localAddress = opts.localAddress;
	    }
	  }
	
	  // set on handshake
	  this.id = null;
	  this.upgrades = null;
	  this.pingInterval = null;
	  this.pingTimeout = null;
	
	  // set on heartbeat
	  this.pingIntervalTimer = null;
	  this.pingTimeoutTimer = null;
	
	  this.open();
	}
	
	Socket.priorWebsocketSuccess = false;
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	Socket.protocol = parser.protocol; // this is an int
	
	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */
	
	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(375);
	Socket.transports = __webpack_require__(370);
	Socket.parser = __webpack_require__(376);
	
	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */
	
	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);
	
	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;
	
	  // transport name
	  query.transport = name;
	
	  // per-transport options
	  var options = this.transportOptions[name] || {};
	
	  // session id if we already have one
	  if (this.id) query.sid = this.id;
	
	  var transport = new transports[name]({
	    query: query,
	    socket: this,
	    agent: options.agent || this.agent,
	    hostname: options.hostname || this.hostname,
	    port: options.port || this.port,
	    secure: options.secure || this.secure,
	    path: options.path || this.path,
	    forceJSONP: options.forceJSONP || this.forceJSONP,
	    jsonp: options.jsonp || this.jsonp,
	    forceBase64: options.forceBase64 || this.forceBase64,
	    enablesXDR: options.enablesXDR || this.enablesXDR,
	    timestampRequests: options.timestampRequests || this.timestampRequests,
	    timestampParam: options.timestampParam || this.timestampParam,
	    policyPort: options.policyPort || this.policyPort,
	    pfx: options.pfx || this.pfx,
	    key: options.key || this.key,
	    passphrase: options.passphrase || this.passphrase,
	    cert: options.cert || this.cert,
	    ca: options.ca || this.ca,
	    ciphers: options.ciphers || this.ciphers,
	    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
	    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
	    extraHeaders: options.extraHeaders || this.extraHeaders,
	    forceNode: options.forceNode || this.forceNode,
	    localAddress: options.localAddress || this.localAddress,
	    requestTimeout: options.requestTimeout || this.requestTimeout,
	    protocols: options.protocols || void (0)
	  });
	
	  return transport;
	};
	
	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}
	
	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';
	
	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }
	
	  transport.open();
	  this.setTransport(transport);
	};
	
	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */
	
	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;
	
	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }
	
	  // set up transport
	  this.transport = transport;
	
	  // set up transport listeners
	  transport
	  .on('drain', function () {
	    self.onDrain();
	  })
	  .on('packet', function (packet) {
	    self.onPacket(packet);
	  })
	  .on('error', function (e) {
	    self.onError(e);
	  })
	  .on('close', function () {
	    self.onClose('transport close');
	  });
	};
	
	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */
	
	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 });
	  var failed = false;
	  var self = this;
	
	  Socket.priorWebsocketSuccess = false;
	
	  function onTransportOpen () {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;
	
	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' === msg.type && 'probe' === msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
	
	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' === self.readyState) return;
	          debug('changing transport and sending upgrade packet');
	
	          cleanup();
	
	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }
	
	  function freezeTransport () {
	    if (failed) return;
	
	    // Any callback called by transport should be ignored since now
	    failed = true;
	
	    cleanup();
	
	    transport.close();
	    transport = null;
	  }
	
	  // Handle any error that happens while probing
	  function onerror (err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;
	
	    freezeTransport();
	
	    debug('probe transport "%s" failed because of error: %s', name, err);
	
	    self.emit('upgradeError', error);
	  }
	
	  function onTransportClose () {
	    onerror('transport closed');
	  }
	
	  // When the socket is closed while we're probing
	  function onclose () {
	    onerror('socket closed');
	  }
	
	  // When the socket is upgraded while we're probing
	  function onupgrade (to) {
	    if (transport && to.name !== transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }
	
	  // Remove all listeners on the transport and on self
	  function cleanup () {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }
	
	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);
	
	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);
	
	  transport.open();
	};
	
	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */
	
	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
	  this.emit('open');
	  this.flush();
	
	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};
	
	/**
	 * Handles a packet.
	 *
	 * @api private
	 */
	
	Socket.prototype.onPacket = function (packet) {
	  if ('opening' === this.readyState || 'open' === this.readyState ||
	      'closing' === this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
	
	    this.emit('packet', packet);
	
	    // Socket is live - any packet counts
	    this.emit('heartbeat');
	
	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(JSON.parse(packet.data));
	        break;
	
	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;
	
	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;
	
	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};
	
	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */
	
	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' === this.readyState) return;
	  this.setPing();
	
	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};
	
	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */
	
	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' === self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};
	
	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};
	
	/**
	* Sends a ping packet.
	*
	* @api private
	*/
	
	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};
	
	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */
	
	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);
	
	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;
	
	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};
	
	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */
	
	Socket.prototype.flush = function () {
	  if ('closed' !== this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};
	
	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */
	
	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */
	
	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' === typeof data) {
	    fn = data;
	    data = undefined;
	  }
	
	  if ('function' === typeof options) {
	    fn = options;
	    options = null;
	  }
	
	  if ('closing' === this.readyState || 'closed' === this.readyState) {
	    return;
	  }
	
	  options = options || {};
	  options.compress = false !== options.compress;
	
	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};
	
	/**
	 * Closes the connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.readyState = 'closing';
	
	    var self = this;
	
	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }
	
	  function close () {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }
	
	  function cleanupAndClose () {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }
	
	  function waitForUpgrade () {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }
	
	  return this;
	};
	
	/**
	 * Called upon transport error
	 *
	 * @api private
	 */
	
	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};
	
	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */
	
	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;
	
	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);
	
	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');
	
	    // ensure transport won't stay open
	    this.transport.close();
	
	    // ignore further transport communication
	    this.transport.removeAllListeners();
	
	    // set ready state
	    this.readyState = 'closed';
	
	    // clear session id
	    this.id = null;
	
	    // emit close event
	    this.emit('close', reason, desc);
	
	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};
	
	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */
	
	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */
	
	var XMLHttpRequest = __webpack_require__(371);
	var XHR = __webpack_require__(373);
	var JSONP = __webpack_require__(387);
	var websocket = __webpack_require__(388);
	
	/**
	 * Export transports.
	 */
	
	exports.polling = polling;
	exports.websocket = websocket;
	
	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */
	
	function polling (opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;
	
	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    xd = opts.hostname !== location.hostname || port !== opts.port;
	    xs = opts.secure !== isSSL;
	  }
	
	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);
	
	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
	 *
	 * This can be used with JS designed for browsers to improve reuse of code and
	 * allow the use of existing libraries.
	 *
	 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
	 *
	 * @author Dan DeFelippi <dan@driverdan.com>
	 * @contributor David Ellis <d.f.ellis@ieee.org>
	 * @license MIT
	 */
	
	var fs = __webpack_require__(339);
	var Url = __webpack_require__(346);
	var spawn = __webpack_require__(372).spawn;
	
	/**
	 * Module exports.
	 */
	
	module.exports = XMLHttpRequest;
	
	// backwards-compat
	XMLHttpRequest.XMLHttpRequest = XMLHttpRequest;
	
	/**
	 * `XMLHttpRequest` constructor.
	 *
	 * Supported options for the `opts` object are:
	 *
	 *  - `agent`: An http.Agent instance; http.globalAgent may be used; if 'undefined', agent usage is disabled
	 *
	 * @param {Object} opts optional "options" object
	 */
	
	function XMLHttpRequest(opts) {
	  "use strict";
	
	  /**
	   * Private variables
	   */
	  var self = this;
	  var http = __webpack_require__(344);
	  var https = __webpack_require__(345);
	
	  // Holds http.js objects
	  var request;
	  var response;
	
	  // Request settings
	  var settings = {};
	
	  // Disable header blacklist.
	  // Not part of XHR specs.
	  var disableHeaderCheck = false;
	
	  // Set some default headers
	  var defaultHeaders = {
	    "User-Agent": "node-XMLHttpRequest",
	    "Accept": "*/*"
	  };
	
	  var headers = defaultHeaders;
	
	  // These headers are not user setable.
	  // The following are allowed but banned in the spec:
	  // * user-agent
	  var forbiddenRequestHeaders = [
	    "accept-charset",
	    "accept-encoding",
	    "access-control-request-headers",
	    "access-control-request-method",
	    "connection",
	    "content-length",
	    "content-transfer-encoding",
	    "cookie",
	    "cookie2",
	    "date",
	    "expect",
	    "host",
	    "keep-alive",
	    "origin",
	    "referer",
	    "te",
	    "trailer",
	    "transfer-encoding",
	    "upgrade",
	    "via"
	  ];
	
	  // These request methods are not allowed
	  var forbiddenRequestMethods = [
	    "TRACE",
	    "TRACK",
	    "CONNECT"
	  ];
	
	  // Send flag
	  var sendFlag = false;
	  // Error flag, used when errors occur or abort is called
	  var errorFlag = false;
	
	  // Event listeners
	  var listeners = {};
	
	  /**
	   * Constants
	   */
	
	  this.UNSENT = 0;
	  this.OPENED = 1;
	  this.HEADERS_RECEIVED = 2;
	  this.LOADING = 3;
	  this.DONE = 4;
	
	  /**
	   * Public vars
	   */
	
	  // Current state
	  this.readyState = this.UNSENT;
	
	  // default ready state change handler in case one is not set or is set late
	  this.onreadystatechange = null;
	
	  // Result & response
	  this.responseText = "";
	  this.responseXML = "";
	  this.status = null;
	  this.statusText = null;
	
	  /**
	   * Private methods
	   */
	
	  /**
	   * Check if the specified header is allowed.
	   *
	   * @param string header Header to validate
	   * @return boolean False if not allowed, otherwise true
	   */
	  var isAllowedHttpHeader = function(header) {
	    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
	  };
	
	  /**
	   * Check if the specified method is allowed.
	   *
	   * @param string method Request method to validate
	   * @return boolean False if not allowed, otherwise true
	   */
	  var isAllowedHttpMethod = function(method) {
	    return (method && forbiddenRequestMethods.indexOf(method) === -1);
	  };
	
	  /**
	   * Public methods
	   */
	
	  /**
	   * Open the connection. Currently supports local server requests.
	   *
	   * @param string method Connection method (eg GET, POST)
	   * @param string url URL for the connection.
	   * @param boolean async Asynchronous connection. Default is true.
	   * @param string user Username for basic authentication (optional)
	   * @param string password Password for basic authentication (optional)
	   */
	  this.open = function(method, url, async, user, password) {
	    this.abort();
	    errorFlag = false;
	
	    // Check for valid request method
	    if (!isAllowedHttpMethod(method)) {
	      throw "SecurityError: Request method not allowed";
	    }
	
	    settings = {
	      "method": method,
	      "url": url.toString(),
	      "async": (typeof async !== "boolean" ? true : async),
	      "user": user || null,
	      "password": password || null
	    };
	
	    setState(this.OPENED);
	  };
	
	  /**
	   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
	   * This does not conform to the W3C spec.
	   *
	   * @param boolean state Enable or disable header checking.
	   */
	  this.setDisableHeaderCheck = function(state) {
	    disableHeaderCheck = state;
	  };
	
	  /**
	   * Sets a header for the request.
	   *
	   * @param string header Header name
	   * @param string value Header value
	   * @return boolean Header added
	   */
	  this.setRequestHeader = function(header, value) {
	    if (this.readyState != this.OPENED) {
	      throw "INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN";
	      return false;
	    }
	    if (!isAllowedHttpHeader(header)) {
	      console.warn('Refused to set unsafe header "' + header + '"');
	      return false;
	    }
	    if (sendFlag) {
	      throw "INVALID_STATE_ERR: send flag is true";
	      return false;
	    }
	    headers[header] = value;
	    return true;
	  };
	
	  /**
	   * Gets a header from the server response.
	   *
	   * @param string header Name of header to get.
	   * @return string Text of the header or null if it doesn't exist.
	   */
	  this.getResponseHeader = function(header) {
	    if (typeof header === "string"
	      && this.readyState > this.OPENED
	      && response.headers[header.toLowerCase()]
	      && !errorFlag
	    ) {
	      return response.headers[header.toLowerCase()];
	    }
	
	    return null;
	  };
	
	  /**
	   * Gets all the response headers.
	   *
	   * @return string A string with all response headers separated by CR+LF
	   */
	  this.getAllResponseHeaders = function() {
	    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
	      return "";
	    }
	    var result = "";
	
	    for (var i in response.headers) {
	      // Cookie headers are excluded
	      if (i !== "set-cookie" && i !== "set-cookie2") {
	        result += i + ": " + response.headers[i] + "\r\n";
	      }
	    }
	    return result.substr(0, result.length - 2);
	  };
	
	  /**
	   * Gets a request header
	   *
	   * @param string name Name of header to get
	   * @return string Returns the request header or empty string if not set
	   */
	  this.getRequestHeader = function(name) {
	    // @TODO Make this case insensitive
	    if (typeof name === "string" && headers[name]) {
	      return headers[name];
	    }
	
	    return "";
	  };
	
	  /**
	   * Sends the request to the server.
	   *
	   * @param string data Optional data to send as request body.
	   */
	  this.send = function(data) {
	    if (this.readyState != this.OPENED) {
	      throw "INVALID_STATE_ERR: connection must be opened before send() is called";
	    }
	
	    if (sendFlag) {
	      throw "INVALID_STATE_ERR: send has already been called";
	    }
	
	    var ssl = false, local = false;
	    var url = Url.parse(settings.url);
	    var host;
	    // Determine the server
	    switch (url.protocol) {
	      case 'https:':
	        ssl = true;
	        // SSL & non-SSL both need host, no break here.
	      case 'http:':
	        host = url.hostname;
	        break;
	
	      case 'file:':
	        local = true;
	        break;
	
	      case undefined:
	      case '':
	        host = "localhost";
	        break;
	
	      default:
	        throw "Protocol not supported.";
	    }
	
	    // Load files off the local filesystem (file://)
	    if (local) {
	      if (settings.method !== "GET") {
	        throw "XMLHttpRequest: Only GET method is supported";
	      }
	
	      if (settings.async) {
	        fs.readFile(url.pathname, 'utf8', function(error, data) {
	          if (error) {
	            self.handleError(error);
	          } else {
	            self.status = 200;
	            self.responseText = data;
	            setState(self.DONE);
	          }
	        });
	      } else {
	        try {
	          this.responseText = fs.readFileSync(url.pathname, 'utf8');
	          this.status = 200;
	          setState(self.DONE);
	        } catch(e) {
	          this.handleError(e);
	        }
	      }
	
	      return;
	    }
	
	    // Default to port 80. If accessing localhost on another port be sure
	    // to use http://localhost:port/path
	    var port = url.port || (ssl ? 443 : 80);
	    // Add query string if one is used
	    var uri = url.pathname + (url.search ? url.search : '');
	
	    // Set the Host header or the server may reject the request
	    headers["Host"] = host;
	    if (!((ssl && port === 443) || port === 80)) {
	      headers["Host"] += ':' + url.port;
	    }
	
	    // Set Basic Auth if necessary
	    if (settings.user) {
	      if (typeof settings.password == "undefined") {
	        settings.password = "";
	      }
	      var authBuf = new Buffer(settings.user + ":" + settings.password);
	      headers["Authorization"] = "Basic " + authBuf.toString("base64");
	    }
	
	    // Set content length header
	    if (settings.method === "GET" || settings.method === "HEAD") {
	      data = null;
	    } else if (data) {
	      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);
	
	      if (!headers["Content-Type"]) {
	        headers["Content-Type"] = "text/plain;charset=UTF-8";
	      }
	    } else if (settings.method === "POST") {
	      // For a post with no data set Content-Length: 0.
	      // This is required by buggy servers that don't meet the specs.
	      headers["Content-Length"] = 0;
	    }
	
	    var agent = false;
	    if (opts && opts.agent) {
	      agent = opts.agent;
	    }
	    var options = {
	      host: host,
	      port: port,
	      path: uri,
	      method: settings.method,
	      headers: headers,
	      agent: agent
	    };
	
	    if (ssl) {
	      options.pfx = opts.pfx;
	      options.key = opts.key;
	      options.passphrase = opts.passphrase;
	      options.cert = opts.cert;
	      options.ca = opts.ca;
	      options.ciphers = opts.ciphers;
	      options.rejectUnauthorized = opts.rejectUnauthorized;
	    }
	
	    // Reset error flag
	    errorFlag = false;
	
	    // Handle async requests
	    if (settings.async) {
	      // Use the proper protocol
	      var doRequest = ssl ? https.request : http.request;
	
	      // Request is being sent, set send flag
	      sendFlag = true;
	
	      // As per spec, this is called here for historical reasons.
	      self.dispatchEvent("readystatechange");
	
	      // Handler for the response
	      var responseHandler = function(resp) {
	        // Set response var to the response we got back
	        // This is so it remains accessable outside this scope
	        response = resp;
	        // Check for redirect
	        // @TODO Prevent looped redirects
	        if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
	          // Change URL to the redirect location
	          settings.url = response.headers.location;
	          var url = Url.parse(settings.url);
	          // Set host var in case it's used later
	          host = url.hostname;
	          // Options for the new request
	          var newOptions = {
	            hostname: url.hostname,
	            port: url.port,
	            path: url.path,
	            method: response.statusCode === 303 ? 'GET' : settings.method,
	            headers: headers
	          };
	
	          if (ssl) {
	            newOptions.pfx = opts.pfx;
	            newOptions.key = opts.key;
	            newOptions.passphrase = opts.passphrase;
	            newOptions.cert = opts.cert;
	            newOptions.ca = opts.ca;
	            newOptions.ciphers = opts.ciphers;
	            newOptions.rejectUnauthorized = opts.rejectUnauthorized;
	          }
	
	          // Issue the new request
	          request = doRequest(newOptions, responseHandler).on('error', errorHandler);
	          request.end();
	          // @TODO Check if an XHR event needs to be fired here
	          return;
	        }
	
	        if (response && response.setEncoding) {
	          response.setEncoding("utf8");
	        }
	
	        setState(self.HEADERS_RECEIVED);
	        self.status = response.statusCode;
	
	        response.on('data', function(chunk) {
	          // Make sure there's some data
	          if (chunk) {
	            self.responseText += chunk;
	          }
	          // Don't emit state changes if the connection has been aborted.
	          if (sendFlag) {
	            setState(self.LOADING);
	          }
	        });
	
	        response.on('end', function() {
	          if (sendFlag) {
	            // Discard the 'end' event if the connection has been aborted
	            setState(self.DONE);
	            sendFlag = false;
	          }
	        });
	
	        response.on('error', function(error) {
	          self.handleError(error);
	        });
	      }
	
	      // Error handler for the request
	      var errorHandler = function(error) {
	        self.handleError(error);
	      }
	
	      // Create the request
	      request = doRequest(options, responseHandler).on('error', errorHandler);
	
	      // Node 0.4 and later won't accept empty data. Make sure it's needed.
	      if (data) {
	        request.write(data);
	      }
	
	      request.end();
	
	      self.dispatchEvent("loadstart");
	    } else { // Synchronous
	      // Create a temporary file for communication with the other Node process
	      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
	      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
	      fs.writeFileSync(syncFile, "", "utf8");
	      // The async request the other Node process executes
	      var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
	        + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
	        + "var options = " + JSON.stringify(options) + ";"
	        + "var responseText = '';"
	        + "var req = doRequest(options, function(response) {"
	        + "response.setEncoding('utf8');"
	        + "response.on('data', function(chunk) {"
	        + "  responseText += chunk;"
	        + "});"
	        + "response.on('end', function() {"
	        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-STATUS:' + response.statusCode + ',' + responseText, 'utf8');"
	        + "fs.unlinkSync('" + syncFile + "');"
	        + "});"
	        + "response.on('error', function(error) {"
	        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
	        + "fs.unlinkSync('" + syncFile + "');"
	        + "});"
	        + "}).on('error', function(error) {"
	        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
	        + "fs.unlinkSync('" + syncFile + "');"
	        + "});"
	        + (data ? "req.write('" + data.replace(/'/g, "\\'") + "');":"")
	        + "req.end();";
	      // Start the other Node Process, executing this string
	      var syncProc = spawn(process.argv[0], ["-e", execString]);
	      var statusText;
	      while(fs.existsSync(syncFile)) {
	        // Wait while the sync file is empty
	      }
	      self.responseText = fs.readFileSync(contentFile, 'utf8');
	      // Kill the child process once the file has data
	      syncProc.stdin.end();
	      // Remove the temporary file
	      fs.unlinkSync(contentFile);
	      if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
	        // If the file returned an error, handle it
	        var errorObj = self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, "");
	        self.handleError(errorObj);
	      } else {
	        // If the file returned okay, parse its data and move to the DONE state
	        self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
	        self.responseText = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1");
	        setState(self.DONE);
	      }
	    }
	  };
	
	  /**
	   * Called when an error is encountered to deal with it.
	   */
	  this.handleError = function(error) {
	    this.status = 503;
	    this.statusText = error;
	    this.responseText = error.stack;
	    errorFlag = true;
	    setState(this.DONE);
	  };
	
	  /**
	   * Aborts a request.
	   */
	  this.abort = function() {
	    if (request) {
	      request.abort();
	      request = null;
	    }
	
	    headers = defaultHeaders;
	    this.responseText = "";
	    this.responseXML = "";
	
	    errorFlag = true;
	
	    if (this.readyState !== this.UNSENT
	        && (this.readyState !== this.OPENED || sendFlag)
	        && this.readyState !== this.DONE) {
	      sendFlag = false;
	      setState(this.DONE);
	    }
	    this.readyState = this.UNSENT;
	  };
	
	  /**
	   * Adds an event listener. Preferred method of binding to events.
	   */
	  this.addEventListener = function(event, callback) {
	    if (!(event in listeners)) {
	      listeners[event] = [];
	    }
	    // Currently allows duplicate callbacks. Should it?
	    listeners[event].push(callback);
	  };
	
	  /**
	   * Remove an event callback that has already been bound.
	   * Only works on the matching funciton, cannot be a copy.
	   */
	  this.removeEventListener = function(event, callback) {
	    if (event in listeners) {
	      // Filter will return a new array with the callback removed
	      listeners[event] = listeners[event].filter(function(ev) {
	        return ev !== callback;
	      });
	    }
	  };
	
	  /**
	   * Dispatch any events, including both "on" methods and events attached using addEventListener.
	   */
	  this.dispatchEvent = function(event) {
	    if (typeof self["on" + event] === "function") {
	      self["on" + event]();
	    }
	    if (event in listeners) {
	      for (var i = 0, len = listeners[event].length; i < len; i++) {
	        listeners[event][i].call(self);
	      }
	    }
	  };
	
	  /**
	   * Changes readyState and calls onreadystatechange.
	   *
	   * @param int state New state
	   */
	  var setState = function(state) {
	    if (self.readyState !== state) {
	      self.readyState = state;
	
	      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
	        self.dispatchEvent("readystatechange");
	      }
	
	      if (self.readyState === self.DONE && !errorFlag) {
	        self.dispatchEvent("load");
	        // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
	        self.dispatchEvent("loadend");
	      }
	    }
	  };
	};


/***/ }),
/* 372 */
/***/ (function(module, exports) {

	module.exports = require("child_process");

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module requirements.
	 */
	
	var XMLHttpRequest = __webpack_require__(371);
	var Polling = __webpack_require__(374);
	var Emitter = __webpack_require__(361);
	var inherit = __webpack_require__(385);
	var debug = __webpack_require__(357)('engine.io-client:polling-xhr');
	
	/**
	 * Module exports.
	 */
	
	module.exports = XHR;
	module.exports.Request = Request;
	
	/**
	 * Empty function
	 */
	
	function empty () {}
	
	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function XHR (opts) {
	  Polling.call(this, opts);
	  this.requestTimeout = opts.requestTimeout;
	  this.extraHeaders = opts.extraHeaders;
	
	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    this.xd = opts.hostname !== global.location.hostname ||
	      port !== opts.port;
	    this.xs = opts.secure !== isSSL;
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(XHR, Polling);
	
	/**
	 * XHR supports binary
	 */
	
	XHR.prototype.supportsBinary = true;
	
	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */
	
	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  opts.requestTimeout = this.requestTimeout;
	
	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;
	
	  return new Request(opts);
	};
	
	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};
	
	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	function Request (opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined !== opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	  this.requestTimeout = opts.requestTimeout;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	
	  this.create();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */
	
	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;
	
	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	
	    if ('POST' === this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }
	
	    try {
	      xhr.setRequestHeader('Accept', '*/*');
	    } catch (e) {}
	
	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }
	
	    if (this.requestTimeout) {
	      xhr.timeout = this.requestTimeout;
	    }
	
	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 2) {
	          var contentType;
	          try {
	            contentType = xhr.getResponseHeader('Content-Type');
	          } catch (e) {}
	          if (contentType === 'application/octet-stream') {
	            xhr.responseType = 'arraybuffer';
	          }
	        }
	        if (4 !== xhr.readyState) return;
	        if (200 === xhr.status || 1223 === xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }
	
	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }
	
	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};
	
	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */
	
	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};
	
	/**
	 * Called if we have data.
	 *
	 * @api private
	 */
	
	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};
	
	/**
	 * Called upon error.
	 *
	 * @api private
	 */
	
	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};
	
	/**
	 * Cleans up house.
	 *
	 * @api private
	 */
	
	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' === typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }
	
	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }
	
	  if (global.document) {
	    delete Request.requests[this.index];
	  }
	
	  this.xhr = null;
	};
	
	/**
	 * Called upon load.
	 *
	 * @api private
	 */
	
	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type');
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response || this.xhr.responseText;
	    } else {
	      data = this.xhr.responseText;
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};
	
	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */
	
	Request.prototype.hasXDR = function () {
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};
	
	/**
	 * Aborts the request.
	 *
	 * @api public
	 */
	
	Request.prototype.abort = function () {
	  this.cleanup();
	};
	
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	
	Request.requestsCount = 0;
	Request.requests = {};
	
	if (global.document) {
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}
	
	function unloadHandler () {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(375);
	var parseqs = __webpack_require__(384);
	var parser = __webpack_require__(376);
	var inherit = __webpack_require__(385);
	var yeast = __webpack_require__(386);
	var debug = __webpack_require__(357)('engine.io-client:polling');
	
	/**
	 * Module exports.
	 */
	
	module.exports = Polling;
	
	/**
	 * Is XHR2 supported?
	 */
	
	var hasXHR2 = (function () {
	  var XMLHttpRequest = __webpack_require__(371);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();
	
	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */
	
	function Polling (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(Polling, Transport);
	
	/**
	 * Transport name.
	 */
	
	Polling.prototype.name = 'polling';
	
	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */
	
	Polling.prototype.doOpen = function () {
	  this.poll();
	};
	
	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */
	
	Polling.prototype.pause = function (onPause) {
	  var self = this;
	
	  this.readyState = 'pausing';
	
	  function pause () {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }
	
	  if (this.polling || !this.writable) {
	    var total = 0;
	
	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }
	
	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};
	
	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */
	
	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};
	
	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */
	
	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function (packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' === self.readyState) {
	      self.onOpen();
	    }
	
	    // if its a close packet, we close the ongoing requests
	    if ('close' === packet.type) {
	      self.onClose();
	      return false;
	    }
	
	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };
	
	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);
	
	  // if an event did not trigger closing
	  if ('closed' !== this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');
	
	    if ('open' === this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};
	
	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */
	
	Polling.prototype.doClose = function () {
	  var self = this;
	
	  function close () {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }
	
	  if ('open' === this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};
	
	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */
	
	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function () {
	    self.writable = true;
	    self.emit('drain');
	  };
	
	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';
	
	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // avoid port if default for schema
	  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
	     ('http' === schema && Number(this.port) !== 80))) {
	    port = ':' + this.port;
	  }
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(376);
	var Emitter = __webpack_require__(361);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Transport;
	
	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */
	
	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	  this.forceNode = opts.forceNode;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	  this.localAddress = opts.localAddress;
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Transport.prototype);
	
	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */
	
	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};
	
	/**
	 * Opens the transport.
	 *
	 * @api public
	 */
	
	Transport.prototype.open = function () {
	  if ('closed' === this.readyState || '' === this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }
	
	  return this;
	};
	
	/**
	 * Closes the transport.
	 *
	 * @api private
	 */
	
	Transport.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.doClose();
	    this.onClose();
	  }
	
	  return this;
	};
	
	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	Transport.prototype.send = function (packets) {
	  if ('open' === this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};
	
	/**
	 * Called upon open
	 *
	 * @api private
	 */
	
	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};
	
	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */
	
	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};
	
	/**
	 * Called with a decoded packet.
	 */
	
	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon close.
	 *
	 * @api private
	 */
	
	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var keys = __webpack_require__(377);
	var hasBinary = __webpack_require__(362);
	var sliceBuffer = __webpack_require__(378);
	var after = __webpack_require__(379);
	var utf8 = __webpack_require__(380);
	
	var base64encoder;
	if (global && global.ArrayBuffer) {
	  base64encoder = __webpack_require__(382);
	}
	
	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */
	
	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
	
	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
	
	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;
	
	/**
	 * Current protocol version.
	 */
	
	exports.protocol = 3;
	
	/**
	 * Packet types.
	 */
	
	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};
	
	var packetslist = keys(packets);
	
	/**
	 * Premade error packet.
	 */
	
	var err = { type: 'error', data: 'parser error' };
	
	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */
	
	var Blob = __webpack_require__(383);
	
	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */
	
	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if (typeof supportsBinary === 'function') {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }
	
	  if (typeof utf8encode === 'function') {
	    callback = utf8encode;
	    utf8encode = null;
	  }
	
	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;
	
	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }
	
	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }
	
	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];
	
	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
	  }
	
	  return callback('' + encoded);
	
	};
	
	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}
	
	/**
	 * Encode packet helpers for binary types
	 */
	
	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);
	
	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }
	
	  return callback(resultBuffer.buffer);
	}
	
	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}
	
	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }
	
	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);
	
	  return callback(blob);
	}
	
	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */
	
	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }
	
	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};
	
	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */
	
	exports.decodePacket = function (data, binaryType, utf8decode) {
	  if (data === undefined) {
	    return err;
	  }
	  // String data
	  if (typeof data === 'string') {
	    if (data.charAt(0) === 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }
	
	    if (utf8decode) {
	      data = tryDecode(data);
	      if (data === false) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);
	
	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }
	
	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }
	
	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};
	
	function tryDecode(data) {
	  try {
	    data = utf8.decode(data, { strict: false });
	  } catch (e) {
	    return false;
	  }
	  return data;
	}
	
	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */
	
	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!base64encoder) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }
	
	  var data = base64encoder.decode(msg.substr(1));
	
	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }
	
	  return { type: type, data: data };
	};
	
	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary === 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }
	
	  var isBinary = hasBinary(packets);
	
	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }
	
	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }
	
	  if (!packets.length) {
	    return callback('0:');
	  }
	
	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};
	
	/**
	 * Async array map using after
	 */
	
	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);
	
	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };
	
	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}
	
	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */
	
	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data !== 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }
	
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var packet;
	  if (data === '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	  var length = '', n, msg;
	
	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	
	    if (chr !== ':') {
	      length += chr;
	      continue;
	    }
	
	    if (length === '' || (length != (n = Number(length)))) {
	      // parser error - ignoring payload
	      return callback(err, 0, 1);
	    }
	
	    msg = data.substr(i + 1, n);
	
	    if (length != msg.length) {
	      // parser error - ignoring payload
	      return callback(err, 0, 1);
	    }
	
	    if (msg.length) {
	      packet = exports.decodePacket(msg, binaryType, false);
	
	      if (err.type === packet.type && err.data === packet.data) {
	        // parser error in individual packet - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      var ret = callback(packet, i + n, l);
	      if (false === ret) return;
	    }
	
	    // advance cursor
	    i += n;
	    length = '';
	  }
	
	  if (length !== '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	};
	
	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */
	
	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }
	
	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);
	
	    var resultArray = new Uint8Array(totalLength);
	
	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }
	
	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }
	
	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;
	
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });
	
	    return callback(resultArray.buffer);
	  });
	};
	
	/**
	 * Encode as Blob
	 */
	
	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }
	
	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;
	
	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;
	
	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};
	
	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */
	
	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var bufferTail = data;
	  var buffers = [];
	
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';
	
	    for (var i = 1; ; i++) {
	      if (tailArray[i] === 255) break;
	
	      // 310 = char length of Number.MAX_VALUE
	      if (msgLength.length > 310) {
	        return callback(err, 0, 1);
	      }
	
	      msgLength += tailArray[i];
	    }
	
	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);
	
	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }
	
	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }
	
	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};


/***/ }),
/* 377 */
/***/ (function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */
	
	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;
	
	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ }),
/* 378 */
/***/ (function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */
	
	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;
	
	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }
	
	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }
	
	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }
	
	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ }),
/* 379 */
/***/ (function(module, exports) {

	module.exports = after
	
	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count
	
	    return (count === 0) ? callback() : proxy
	
	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count
	
	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}
	
	function noop() {}


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*! https://mths.be/utf8js v2.1.2 by @mathias */
	;(function(root) {
	
		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;
	
		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}
	
		function checkScalarValue(codePoint, strict) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				if (strict) {
					throw Error(
						'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
						' is not a scalar value'
					);
				}
				return false;
			}
			return true;
		}
		/*--------------------------------------------------------------------------*/
	
		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}
	
		function encodeCodePoint(codePoint, strict) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				if (!checkScalarValue(codePoint, strict)) {
					codePoint = 0xFFFD;
				}
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}
	
		function utf8encode(string, opts) {
			opts = opts || {};
			var strict = false !== opts.strict;
	
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint, strict);
			}
			return byteString;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}
	
			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}
	
			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}
	
		function decodeSymbol(strict) {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;
	
			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}
	
			if (byteIndex == byteCount) {
				return false;
			}
	
			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}
	
			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}
	
			throw Error('Invalid UTF-8 detected');
		}
	
		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString, opts) {
			opts = opts || {};
			var strict = false !== opts.strict;
	
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol(strict)) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}
	
		/*--------------------------------------------------------------------------*/
	
		var utf8 = {
			'version': '2.1.2',
			'encode': utf8encode,
			'decode': utf8decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(381)(module)))

/***/ }),
/* 381 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 382 */
/***/ (function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(){
	  "use strict";
	
	  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	
	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }
	
	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";
	
	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i+=4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i+1)];
	      encoded3 = lookup[base64.charCodeAt(i+2)];
	      encoded4 = lookup[base64.charCodeAt(i+3)];
	
	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }
	
	    return arraybuffer;
	  };
	})();


/***/ }),
/* 383 */
/***/ (function(module, exports) {

	/**
	 * Create a blob builder even when vendor prefixes exist
	 */
	
	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;
	
	/**
	 * Check if Blob constructor is supported
	 */
	
	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */
	
	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if BlobBuilder is supported
	 */
	
	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;
	
	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */
	
	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;
	
	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }
	
	      ary[i] = buf;
	    }
	  }
	}
	
	function BlobBuilderConstructor(ary, options) {
	  options = options || {};
	
	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);
	
	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }
	
	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};
	
	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};
	
	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();


/***/ }),
/* 384 */
/***/ (function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	
	exports.encode = function (obj) {
	  var str = '';
	
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }
	
	  return str;
	};
	
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	
	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ }),
/* 385 */
/***/ (function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ }),
/* 386 */
/***/ (function(module, exports) {

	'use strict';
	
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;
	
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';
	
	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);
	
	  return encoded;
	}
	
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;
	
	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }
	
	  return decoded;
	}
	
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());
	
	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}
	
	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;
	
	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module requirements.
	 */
	
	var Polling = __webpack_require__(374);
	var inherit = __webpack_require__(385);
	
	/**
	 * Module exports.
	 */
	
	module.exports = JSONPPolling;
	
	/**
	 * Cached regular expressions.
	 */
	
	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;
	
	/**
	 * Global JSONP callbacks.
	 */
	
	var callbacks;
	
	/**
	 * Noop.
	 */
	
	function empty () { }
	
	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */
	
	function JSONPPolling (opts) {
	  Polling.call(this, opts);
	
	  this.query = this.query || {};
	
	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }
	
	  // callback identifier
	  this.index = callbacks.length;
	
	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });
	
	  // append to query string
	  this.query.j = this.index;
	
	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(JSONPPolling, Polling);
	
	/*
	 * JSONP only supports binary as base64 encoded strings
	 */
	
	JSONPPolling.prototype.supportsBinary = false;
	
	/**
	 * Closes the socket.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }
	
	  Polling.prototype.doClose.call(this);
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');
	
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };
	
	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;
	
	  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);
	
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};
	
	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;
	
	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;
	
	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);
	
	    this.form = form;
	    this.area = area;
	  }
	
	  this.form.action = this.uri();
	
	  function complete () {
	    initIframe();
	    fn();
	  }
	
	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }
	
	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }
	
	    iframe.id = self.iframeId;
	
	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }
	
	  initIframe();
	
	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');
	
	  try {
	    this.form.submit();
	  } catch (e) {}
	
	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState === 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(375);
	var parser = __webpack_require__(376);
	var parseqs = __webpack_require__(384);
	var inherit = __webpack_require__(385);
	var yeast = __webpack_require__(386);
	var debug = __webpack_require__(357)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	var NodeWebSocket;
	if (typeof window === 'undefined') {
	  try {
	    NodeWebSocket = __webpack_require__(389);
	  } catch (e) { }
	}
	
	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */
	
	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  WebSocket = NodeWebSocket;
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = WS;
	
	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */
	
	function WS (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
	  this.protocols = opts.protocols;
	  if (!this.usingBrowserWebSocket) {
	    WebSocket = NodeWebSocket;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(WS, Transport);
	
	/**
	 * Transport name.
	 *
	 * @api public
	 */
	
	WS.prototype.name = 'websocket';
	
	/*
	 * WebSockets support binary
	 */
	
	WS.prototype.supportsBinary = true;
	
	/**
	 * Opens socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }
	
	  var uri = this.uri();
	  var protocols = this.protocols;
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	  if (this.localAddress) {
	    opts.localAddress = this.localAddress;
	  }
	
	  try {
	    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
	  } catch (err) {
	    return this.emit('error', err);
	  }
	
	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }
	
	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'nodebuffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }
	
	  this.addEventListeners();
	};
	
	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */
	
	WS.prototype.addEventListeners = function () {
	  var self = this;
	
	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};
	
	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */
	
	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!self.usingBrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }
	
	          if (self.perMessageDeflate) {
	            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }
	
	        // Sometimes the websocket has already been closed but the browser didn't
	        // have a chance of informing us about it yet, in that case send will
	        // throw an error
	        try {
	          if (self.usingBrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }
	
	        --total || done();
	      });
	    })(packets[i]);
	  }
	
	  function done () {
	    self.emit('flush');
	
	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};
	
	/**
	 * Called upon close
	 *
	 * @api private
	 */
	
	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};
	
	/**
	 * Closes socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';
	
	  // avoid port if default for schema
	  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
	    ('ws' === schema && Number(this.port) !== 80))) {
	    port = ':' + this.port;
	  }
	
	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};
	
	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */
	
	WS.prototype.check = function () {
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	
	'use strict';
	
	const WebSocket = __webpack_require__(390);
	
	WebSocket.Server = __webpack_require__(406);
	WebSocket.Receiver = __webpack_require__(402);
	WebSocket.Sender = __webpack_require__(405);
	
	module.exports = WebSocket;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	
	'use strict';
	
	const EventEmitter = __webpack_require__(391);
	const crypto = __webpack_require__(392);
	const Ultron = __webpack_require__(393);
	const https = __webpack_require__(345);
	const http = __webpack_require__(344);
	const url = __webpack_require__(346);
	
	const PerMessageDeflate = __webpack_require__(394);
	const EventTarget = __webpack_require__(399);
	const Extensions = __webpack_require__(400);
	const constants = __webpack_require__(401);
	const Receiver = __webpack_require__(402);
	const Sender = __webpack_require__(405);
	
	const protocolVersions = [8, 13];
	const closeTimeout = 30 * 1000; // Allow 30 seconds to terminate the connection cleanly.
	
	/**
	 * Class representing a WebSocket.
	 *
	 * @extends EventEmitter
	 */
	class WebSocket extends EventEmitter {
	  /**
	   * Create a new `WebSocket`.
	   *
	   * @param {String} address The URL to which to connect
	   * @param {(String|String[])} protocols The subprotocols
	   * @param {Object} options Connection options
	   */
	  constructor (address, protocols, options) {
	    super();
	
	    if (!protocols) {
	      protocols = [];
	    } else if (typeof protocols === 'string') {
	      protocols = [protocols];
	    } else if (!Array.isArray(protocols)) {
	      options = protocols;
	      protocols = [];
	    }
	
	    this.readyState = WebSocket.CONNECTING;
	    this.bytesReceived = 0;
	    this.extensions = {};
	    this.protocol = '';
	
	    this._binaryType = constants.BINARY_TYPES[0];
	    this._finalize = this.finalize.bind(this);
	    this._finalizeCalled = false;
	    this._closeMessage = null;
	    this._closeTimer = null;
	    this._closeCode = null;
	    this._receiver = null;
	    this._sender = null;
	    this._socket = null;
	    this._ultron = null;
	
	    if (Array.isArray(address)) {
	      initAsServerClient.call(this, address[0], address[1], address[2], options);
	    } else {
	      initAsClient.call(this, address, protocols, options);
	    }
	  }
	
	  get CONNECTING () { return WebSocket.CONNECTING; }
	  get CLOSING () { return WebSocket.CLOSING; }
	  get CLOSED () { return WebSocket.CLOSED; }
	  get OPEN () { return WebSocket.OPEN; }
	
	  /**
	   * @type {Number}
	   */
	  get bufferedAmount () {
	    var amount = 0;
	
	    if (this._socket) {
	      amount = this._socket.bufferSize + this._sender.bufferedBytes;
	    }
	    return amount;
	  }
	
	  /**
	   * This deviates from the WHATWG interface since ws doesn't support the required
	   * default "blob" type (instead we define a custom "nodebuffer" type).
	   *
	   * @type {String}
	   */
	  get binaryType () {
	    return this._binaryType;
	  }
	
	  set binaryType (type) {
	    if (constants.BINARY_TYPES.indexOf(type) < 0) return;
	
	    this._binaryType = type;
	
	    //
	    // Allow to change `binaryType` on the fly.
	    //
	    if (this._receiver) this._receiver.binaryType = type;
	  }
	
	  /**
	   * Set up the socket and the internal resources.
	   *
	   * @param {net.Socket} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @private
	   */
	  setSocket (socket, head) {
	    socket.setTimeout(0);
	    socket.setNoDelay();
	
	    this._receiver = new Receiver(this.extensions, this.maxPayload, this.binaryType);
	    this._sender = new Sender(socket, this.extensions);
	    this._ultron = new Ultron(socket);
	    this._socket = socket;
	
	    // socket cleanup handlers
	    this._ultron.on('close', this._finalize);
	    this._ultron.on('error', this._finalize);
	    this._ultron.on('end', this._finalize);
	
	    // ensure that the head is added to the receiver
	    if (head && head.length > 0) {
	      socket.unshift(head);
	      head = null;
	    }
	
	    // subsequent packets are pushed to the receiver
	    this._ultron.on('data', (data) => {
	      this.bytesReceived += data.length;
	      this._receiver.add(data);
	    });
	
	    // receiver event handlers
	    this._receiver.onmessage = (data, flags) => this.emit('message', data, flags);
	    this._receiver.onping = (data, flags) => {
	      this.pong(data, !this._isServer, true);
	      this.emit('ping', data, flags);
	    };
	    this._receiver.onpong = (data, flags) => this.emit('pong', data, flags);
	    this._receiver.onclose = (code, reason) => {
	      this._closeMessage = reason;
	      this._closeCode = code;
	      this.close(code, reason);
	    };
	    this._receiver.onerror = (error, code) => {
	      // close the connection when the receiver reports a HyBi error code
	      this.close(code, '');
	      this.emit('error', error);
	    };
	
	    // sender event handlers
	    this._sender.onerror = (error) => {
	      this.close(1002, '');
	      this.emit('error', error);
	    };
	
	    this.readyState = WebSocket.OPEN;
	    this.emit('open');
	  }
	
	  /**
	   * Clean up and release internal resources.
	   *
	   * @param {(Boolean|Error)} Indicates whether or not an error occurred
	   * @private
	   */
	  finalize (error) {
	    if (this._finalizeCalled) return;
	
	    this.readyState = WebSocket.CLOSING;
	    this._finalizeCalled = true;
	
	    clearTimeout(this._closeTimer);
	    this._closeTimer = null;
	
	    //
	    // If the connection was closed abnormally (with an error), or if the close
	    // control frame was malformed or not received then the close code must be
	    // 1006.
	    //
	    if (error) this._closeCode = 1006;
	
	    if (this._socket) {
	      this._ultron.destroy();
	      this._socket.on('error', function onerror () {
	        this.destroy();
	      });
	
	      if (!error) this._socket.end();
	      else this._socket.destroy();
	
	      this._socket = null;
	      this._ultron = null;
	    }
	
	    if (this._sender) {
	      this._sender = this._sender.onerror = null;
	    }
	
	    if (this._receiver) {
	      this._receiver.cleanup(() => this.emitClose());
	      this._receiver = null;
	    } else {
	      this.emitClose();
	    }
	  }
	
	  /**
	   * Emit the `close` event.
	   *
	   * @private
	   */
	  emitClose () {
	    this.readyState = WebSocket.CLOSED;
	    this.emit('close', this._closeCode || 1006, this._closeMessage || '');
	
	    if (this.extensions[PerMessageDeflate.extensionName]) {
	      this.extensions[PerMessageDeflate.extensionName].cleanup();
	    }
	
	    this.extensions = null;
	
	    this.removeAllListeners();
	    this.on('error', constants.NOOP); // Catch all errors after this.
	  }
	
	  /**
	   * Pause the socket stream.
	   *
	   * @public
	   */
	  pause () {
	    if (this.readyState !== WebSocket.OPEN) throw new Error('not opened');
	
	    this._socket.pause();
	  }
	
	  /**
	   * Resume the socket stream
	   *
	   * @public
	   */
	  resume () {
	    if (this.readyState !== WebSocket.OPEN) throw new Error('not opened');
	
	    this._socket.resume();
	  }
	
	  /**
	   * Start a closing handshake.
	   *
	   * @param {Number} code Status code explaining why the connection is closing
	   * @param {String} data A string explaining why the connection is closing
	   * @public
	   */
	  close (code, data) {
	    if (this.readyState === WebSocket.CLOSED) return;
	    if (this.readyState === WebSocket.CONNECTING) {
	      if (this._req && !this._req.aborted) {
	        this._req.abort();
	        this.emit('error', new Error('closed before the connection is established'));
	        this.finalize(true);
	      }
	      return;
	    }
	
	    if (this.readyState === WebSocket.CLOSING) {
	      if (this._closeCode && this._socket) this._socket.end();
	      return;
	    }
	
	    this.readyState = WebSocket.CLOSING;
	    this._sender.close(code, data, !this._isServer, (err) => {
	      if (err) this.emit('error', err);
	
	      if (this._socket) {
	        if (this._closeCode) this._socket.end();
	        //
	        // Ensure that the connection is cleaned up even when the closing
	        // handshake fails.
	        //
	        clearTimeout(this._closeTimer);
	        this._closeTimer = setTimeout(this._finalize, closeTimeout, true);
	      }
	    });
	  }
	
	  /**
	   * Send a ping message.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} mask Indicates whether or not to mask `data`
	   * @param {Boolean} failSilently Indicates whether or not to throw if `readyState` isn't `OPEN`
	   * @public
	   */
	  ping (data, mask, failSilently) {
	    if (this.readyState !== WebSocket.OPEN) {
	      if (failSilently) return;
	      throw new Error('not opened');
	    }
	
	    if (typeof data === 'number') data = data.toString();
	    if (mask === undefined) mask = !this._isServer;
	    this._sender.ping(data || constants.EMPTY_BUFFER, mask);
	  }
	
	  /**
	   * Send a pong message.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} mask Indicates whether or not to mask `data`
	   * @param {Boolean} failSilently Indicates whether or not to throw if `readyState` isn't `OPEN`
	   * @public
	   */
	  pong (data, mask, failSilently) {
	    if (this.readyState !== WebSocket.OPEN) {
	      if (failSilently) return;
	      throw new Error('not opened');
	    }
	
	    if (typeof data === 'number') data = data.toString();
	    if (mask === undefined) mask = !this._isServer;
	    this._sender.pong(data || constants.EMPTY_BUFFER, mask);
	  }
	
	  /**
	   * Send a data message.
	   *
	   * @param {*} data The message to send
	   * @param {Object} options Options object
	   * @param {Boolean} options.compress Specifies whether or not to compress `data`
	   * @param {Boolean} options.binary Specifies whether `data` is binary or text
	   * @param {Boolean} options.fin Specifies whether the fragment is the last one
	   * @param {Boolean} options.mask Specifies whether or not to mask `data`
	   * @param {Function} cb Callback which is executed when data is written out
	   * @public
	   */
	  send (data, options, cb) {
	    if (typeof options === 'function') {
	      cb = options;
	      options = {};
	    }
	
	    if (this.readyState !== WebSocket.OPEN) {
	      if (cb) cb(new Error('not opened'));
	      else throw new Error('not opened');
	      return;
	    }
	
	    if (typeof data === 'number') data = data.toString();
	
	    const opts = Object.assign({
	      binary: typeof data !== 'string',
	      mask: !this._isServer,
	      compress: true,
	      fin: true
	    }, options);
	
	    if (!this.extensions[PerMessageDeflate.extensionName]) {
	      opts.compress = false;
	    }
	
	    this._sender.send(data || constants.EMPTY_BUFFER, opts, cb);
	  }
	
	  /**
	   * Forcibly close the connection.
	   *
	   * @public
	   */
	  terminate () {
	    if (this.readyState === WebSocket.CLOSED) return;
	    if (this.readyState === WebSocket.CONNECTING) {
	      if (this._req && !this._req.aborted) {
	        this._req.abort();
	        this.emit('error', new Error('closed before the connection is established'));
	        this.finalize(true);
	      }
	      return;
	    }
	
	    this.finalize(true);
	  }
	}
	
	WebSocket.CONNECTING = 0;
	WebSocket.OPEN = 1;
	WebSocket.CLOSING = 2;
	WebSocket.CLOSED = 3;
	
	//
	// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
	// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
	//
	['open', 'error', 'close', 'message'].forEach((method) => {
	  Object.defineProperty(WebSocket.prototype, `on${method}`, {
	    /**
	     * Return the listener of the event.
	     *
	     * @return {(Function|undefined)} The event listener or `undefined`
	     * @public
	     */
	    get () {
	      const listeners = this.listeners(method);
	      for (var i = 0; i < listeners.length; i++) {
	        if (listeners[i]._listener) return listeners[i]._listener;
	      }
	    },
	    /**
	     * Add a listener for the event.
	     *
	     * @param {Function} listener The listener to add
	     * @public
	     */
	    set (listener) {
	      const listeners = this.listeners(method);
	      for (var i = 0; i < listeners.length; i++) {
	        //
	        // Remove only the listeners added via `addEventListener`.
	        //
	        if (listeners[i]._listener) this.removeListener(method, listeners[i]);
	      }
	      this.addEventListener(method, listener);
	    }
	  });
	});
	
	WebSocket.prototype.addEventListener = EventTarget.addEventListener;
	WebSocket.prototype.removeEventListener = EventTarget.removeEventListener;
	
	module.exports = WebSocket;
	
	/**
	 * Initialize a WebSocket server client.
	 *
	 * @param {http.IncomingMessage} req The request object
	 * @param {net.Socket} socket The network socket between the server and client
	 * @param {Buffer} head The first packet of the upgraded stream
	 * @param {Object} options WebSocket attributes
	 * @param {Number} options.protocolVersion The WebSocket protocol version
	 * @param {Object} options.extensions The negotiated extensions
	 * @param {Number} options.maxPayload The maximum allowed message size
	 * @param {String} options.protocol The chosen subprotocol
	 * @private
	 */
	function initAsServerClient (req, socket, head, options) {
	  this.protocolVersion = options.protocolVersion;
	  this.extensions = options.extensions;
	  this.maxPayload = options.maxPayload;
	  this.protocol = options.protocol;
	
	  this.upgradeReq = req;
	  this._isServer = true;
	
	  this.setSocket(socket, head);
	}
	
	/**
	 * Initialize a WebSocket client.
	 *
	 * @param {String} address The URL to which to connect
	 * @param {String[]} protocols The list of subprotocols
	 * @param {Object} options Connection options
	 * @param {String} options.protocol Value of the `Sec-WebSocket-Protocol` header
	 * @param {(Boolean|Object)} options.perMessageDeflate Enable/disable permessage-deflate
	 * @param {String} options.localAddress Local interface to bind for network connections
	 * @param {Number} options.protocolVersion Value of the `Sec-WebSocket-Version` header
	 * @param {Object} options.headers An object containing request headers
	 * @param {String} options.origin Value of the `Origin` or `Sec-WebSocket-Origin` header
	 * @param {http.Agent} options.agent Use the specified Agent
	 * @param {String} options.host Value of the `Host` header
	 * @param {Number} options.family IP address family to use during hostname lookup (4 or 6).
	 * @param {Function} options.checkServerIdentity A function to validate the server hostname
	 * @param {Boolean} options.rejectUnauthorized Verify or not the server certificate
	 * @param {String} options.passphrase The passphrase for the private key or pfx
	 * @param {String} options.ciphers The ciphers to use or exclude
	 * @param {(String|String[]|Buffer|Buffer[])} options.cert The certificate key
	 * @param {(String|String[]|Buffer|Buffer[])} options.key The private key
	 * @param {(String|Buffer)} options.pfx The private key, certificate, and CA certs
	 * @param {(String|String[]|Buffer|Buffer[])} options.ca Trusted certificates
	 * @private
	 */
	function initAsClient (address, protocols, options) {
	  options = Object.assign({
	    protocolVersion: protocolVersions[1],
	    protocol: protocols.join(','),
	    perMessageDeflate: true,
	    localAddress: null,
	    headers: null,
	    family: null,
	    origin: null,
	    agent: null,
	    host: null,
	
	    //
	    // SSL options.
	    //
	    checkServerIdentity: null,
	    rejectUnauthorized: null,
	    passphrase: null,
	    ciphers: null,
	    cert: null,
	    key: null,
	    pfx: null,
	    ca: null
	  }, options);
	
	  if (protocolVersions.indexOf(options.protocolVersion) === -1) {
	    throw new Error(
	      `unsupported protocol version: ${options.protocolVersion} ` +
	      `(supported versions: ${protocolVersions.join(', ')})`
	    );
	  }
	
	  this.protocolVersion = options.protocolVersion;
	  this._isServer = false;
	  this.url = address;
	
	  const serverUrl = url.parse(address);
	  const isUnixSocket = serverUrl.protocol === 'ws+unix:';
	
	  if (!serverUrl.host && (!isUnixSocket || !serverUrl.path)) {
	    throw new Error('invalid url');
	  }
	
	  const isSecure = serverUrl.protocol === 'wss:' || serverUrl.protocol === 'https:';
	  const key = crypto.randomBytes(16).toString('base64');
	  const httpObj = isSecure ? https : http;
	
	  //
	  // Prepare extensions.
	  //
	  const extensionsOffer = {};
	  var perMessageDeflate;
	
	  if (options.perMessageDeflate) {
	    perMessageDeflate = new PerMessageDeflate(
	      options.perMessageDeflate !== true ? options.perMessageDeflate : {},
	      false
	    );
	    extensionsOffer[PerMessageDeflate.extensionName] = perMessageDeflate.offer();
	  }
	
	  const requestOptions = {
	    port: serverUrl.port || (isSecure ? 443 : 80),
	    host: serverUrl.hostname,
	    path: '/',
	    headers: {
	      'Sec-WebSocket-Version': options.protocolVersion,
	      'Sec-WebSocket-Key': key,
	      'Connection': 'Upgrade',
	      'Upgrade': 'websocket'
	    }
	  };
	
	  if (options.headers) Object.assign(requestOptions.headers, options.headers);
	  if (Object.keys(extensionsOffer).length) {
	    requestOptions.headers['Sec-WebSocket-Extensions'] = Extensions.format(extensionsOffer);
	  }
	  if (options.protocol) {
	    requestOptions.headers['Sec-WebSocket-Protocol'] = options.protocol;
	  }
	  if (options.origin) {
	    if (options.protocolVersion < 13) {
	      requestOptions.headers['Sec-WebSocket-Origin'] = options.origin;
	    } else {
	      requestOptions.headers.Origin = options.origin;
	    }
	  }
	  if (options.host) requestOptions.headers.Host = options.host;
	  if (serverUrl.auth) requestOptions.auth = serverUrl.auth;
	
	  if (options.localAddress) requestOptions.localAddress = options.localAddress;
	  if (options.family) requestOptions.family = options.family;
	
	  if (isUnixSocket) {
	    const parts = serverUrl.path.split(':');
	
	    requestOptions.socketPath = parts[0];
	    requestOptions.path = parts[1];
	  } else if (serverUrl.path) {
	    //
	    // Make sure that path starts with `/`.
	    //
	    if (serverUrl.path.charAt(0) !== '/') {
	      requestOptions.path = `/${serverUrl.path}`;
	    } else {
	      requestOptions.path = serverUrl.path;
	    }
	  }
	
	  var agent = options.agent;
	
	  //
	  // A custom agent is required for these options.
	  //
	  if (
	    options.rejectUnauthorized != null ||
	    options.checkServerIdentity ||
	    options.passphrase ||
	    options.ciphers ||
	    options.cert ||
	    options.key ||
	    options.pfx ||
	    options.ca
	  ) {
	    if (options.passphrase) requestOptions.passphrase = options.passphrase;
	    if (options.ciphers) requestOptions.ciphers = options.ciphers;
	    if (options.cert) requestOptions.cert = options.cert;
	    if (options.key) requestOptions.key = options.key;
	    if (options.pfx) requestOptions.pfx = options.pfx;
	    if (options.ca) requestOptions.ca = options.ca;
	    if (options.checkServerIdentity) {
	      requestOptions.checkServerIdentity = options.checkServerIdentity;
	    }
	    if (options.rejectUnauthorized != null) {
	      requestOptions.rejectUnauthorized = options.rejectUnauthorized;
	    }
	
	    if (!agent) agent = new httpObj.Agent(requestOptions);
	  }
	
	  if (agent) requestOptions.agent = agent;
	
	  this._req = httpObj.get(requestOptions);
	
	  this._req.on('error', (error) => {
	    if (this._req.aborted) return;
	
	    this._req = null;
	    this.emit('error', error);
	    this.finalize(true);
	  });
	
	  this._req.on('response', (res) => {
	    if (!this.emit('unexpected-response', this._req, res)) {
	      this._req.abort();
	      this.emit('error', new Error(`unexpected server response (${res.statusCode})`));
	      this.finalize(true);
	    }
	  });
	
	  this._req.on('upgrade', (res, socket, head) => {
	    this.emit('headers', res.headers, res);
	
	    //
	    // The user may have closed the connection from a listener of the `headers`
	    // event.
	    //
	    if (this.readyState !== WebSocket.CONNECTING) return;
	
	    this._req = null;
	
	    const digest = crypto.createHash('sha1')
	      .update(key + constants.GUID, 'binary')
	      .digest('base64');
	
	    if (res.headers['sec-websocket-accept'] !== digest) {
	      socket.destroy();
	      this.emit('error', new Error('invalid server key'));
	      return this.finalize(true);
	    }
	
	    const serverProt = res.headers['sec-websocket-protocol'];
	    const protList = (options.protocol || '').split(/, */);
	    var protError;
	
	    if (!options.protocol && serverProt) {
	      protError = 'server sent a subprotocol even though none requested';
	    } else if (options.protocol && !serverProt) {
	      protError = 'server sent no subprotocol even though requested';
	    } else if (serverProt && protList.indexOf(serverProt) === -1) {
	      protError = 'server responded with an invalid protocol';
	    }
	
	    if (protError) {
	      socket.destroy();
	      this.emit('error', new Error(protError));
	      return this.finalize(true);
	    }
	
	    if (serverProt) this.protocol = serverProt;
	
	    const serverExtensions = Extensions.parse(res.headers['sec-websocket-extensions']);
	
	    if (perMessageDeflate && serverExtensions[PerMessageDeflate.extensionName]) {
	      try {
	        perMessageDeflate.accept(serverExtensions[PerMessageDeflate.extensionName]);
	      } catch (err) {
	        socket.destroy();
	        this.emit('error', new Error('invalid extension parameter'));
	        return this.finalize(true);
	      }
	
	      this.extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
	    }
	
	    this.setSocket(socket, head);
	  });
	}


/***/ }),
/* 391 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 392 */
/***/ (function(module, exports) {

	module.exports = require("crypto");

/***/ }),
/* 393 */
/***/ (function(module, exports) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * An auto incrementing id which we can use to create "unique" Ultron instances
	 * so we can track the event emitters that are added through the Ultron
	 * interface.
	 *
	 * @type {Number}
	 * @private
	 */
	var id = 0;
	
	/**
	 * Ultron is high-intelligence robot. It gathers intelligence so it can start improving
	 * upon his rudimentary design. It will learn from your EventEmitting patterns
	 * and exterminate them.
	 *
	 * @constructor
	 * @param {EventEmitter} ee EventEmitter instance we need to wrap.
	 * @api public
	 */
	function Ultron(ee) {
	  if (!(this instanceof Ultron)) return new Ultron(ee);
	
	  this.id = id++;
	  this.ee = ee;
	}
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @returns {Ultron}
	 * @api public
	 */
	Ultron.prototype.on = function on(event, fn, context) {
	  fn.__ultron = this.id;
	  this.ee.on(event, fn, context);
	
	  return this;
	};
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @returns {Ultron}
	 * @api public
	 */
	Ultron.prototype.once = function once(event, fn, context) {
	  fn.__ultron = this.id;
	  this.ee.once(event, fn, context);
	
	  return this;
	};
	
	/**
	 * Remove the listeners we assigned for the given event.
	 *
	 * @returns {Ultron}
	 * @api public
	 */
	Ultron.prototype.remove = function remove() {
	  var args = arguments
	    , ee = this.ee
	    , event;
	
	  //
	  // When no event names are provided we assume that we need to clear all the
	  // events that were assigned through us.
	  //
	  if (args.length === 1 && 'string' === typeof args[0]) {
	    args = args[0].split(/[, ]+/);
	  } else if (!args.length) {
	    if (ee.eventNames) {
	      args = ee.eventNames();
	    } else if (ee._events) {
	      args = [];
	
	      for (event in ee._events) {
	        if (has.call(ee._events, event)) args.push(event);
	      }
	
	      if (Object.getOwnPropertySymbols) {
	        args = args.concat(Object.getOwnPropertySymbols(ee._events));
	      }
	    }
	  }
	
	  for (var i = 0; i < args.length; i++) {
	    var listeners = ee.listeners(args[i]);
	
	    for (var j = 0; j < listeners.length; j++) {
	      event = listeners[j];
	
	      //
	      // Once listeners have a `listener` property that stores the real listener
	      // in the EventEmitter that ships with Node.js.
	      //
	      if (event.listener) {
	        if (event.listener.__ultron !== this.id) continue;
	        delete event.listener.__ultron;
	      } else {
	        if (event.__ultron !== this.id) continue;
	        delete event.__ultron;
	      }
	
	      ee.removeListener(args[i], event);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Destroy the Ultron instance, remove all listeners and release all references.
	 *
	 * @returns {Boolean}
	 * @api public
	 */
	Ultron.prototype.destroy = function destroy() {
	  if (!this.ee) return false;
	
	  this.remove();
	  this.ee = null;
	
	  return true;
	};
	
	//
	// Expose the module.
	//
	module.exports = Ultron;


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	const safeBuffer = __webpack_require__(395);
	const zlib = __webpack_require__(397);
	
	const bufferUtil = __webpack_require__(398);
	
	const Buffer = safeBuffer.Buffer;
	
	const AVAILABLE_WINDOW_BITS = [8, 9, 10, 11, 12, 13, 14, 15];
	const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
	const EMPTY_BLOCK = Buffer.from([0x00]);
	const DEFAULT_WINDOW_BITS = 15;
	const DEFAULT_MEM_LEVEL = 8;
	
	/**
	 * Per-message Deflate implementation.
	 */
	class PerMessageDeflate {
	  constructor (options, isServer, maxPayload) {
	    this._options = options || {};
	    this._isServer = !!isServer;
	    this._inflate = null;
	    this._deflate = null;
	    this.params = null;
	    this._maxPayload = maxPayload || 0;
	    this.threshold = this._options.threshold === undefined ? 1024 : this._options.threshold;
	  }
	
	  static get extensionName () {
	    return 'permessage-deflate';
	  }
	
	  /**
	   * Create extension parameters offer.
	   *
	   * @return {Object} Extension parameters
	   * @public
	   */
	  offer () {
	    const params = {};
	
	    if (this._options.serverNoContextTakeover) {
	      params.server_no_context_takeover = true;
	    }
	    if (this._options.clientNoContextTakeover) {
	      params.client_no_context_takeover = true;
	    }
	    if (this._options.serverMaxWindowBits) {
	      params.server_max_window_bits = this._options.serverMaxWindowBits;
	    }
	    if (this._options.clientMaxWindowBits) {
	      params.client_max_window_bits = this._options.clientMaxWindowBits;
	    } else if (this._options.clientMaxWindowBits == null) {
	      params.client_max_window_bits = true;
	    }
	
	    return params;
	  }
	
	  /**
	   * Accept extension offer.
	   *
	   * @param {Array} paramsList Extension parameters
	   * @return {Object} Accepted configuration
	   * @public
	   */
	  accept (paramsList) {
	    paramsList = this.normalizeParams(paramsList);
	
	    var params;
	    if (this._isServer) {
	      params = this.acceptAsServer(paramsList);
	    } else {
	      params = this.acceptAsClient(paramsList);
	    }
	
	    this.params = params;
	    return params;
	  }
	
	  /**
	   * Releases all resources used by the extension.
	   *
	   * @public
	   */
	  cleanup () {
	    if (this._inflate) {
	      if (this._inflate.writeInProgress) {
	        this._inflate.pendingClose = true;
	      } else {
	        this._inflate.close();
	        this._inflate = null;
	      }
	    }
	    if (this._deflate) {
	      if (this._deflate.writeInProgress) {
	        this._deflate.pendingClose = true;
	      } else {
	        this._deflate.close();
	        this._deflate = null;
	      }
	    }
	  }
	
	  /**
	   * Accept extension offer from client.
	   *
	   * @param {Array} paramsList Extension parameters
	   * @return {Object} Accepted configuration
	   * @private
	   */
	  acceptAsServer (paramsList) {
	    const accepted = {};
	    const result = paramsList.some((params) => {
	      if ((
	        this._options.serverNoContextTakeover === false &&
	        params.server_no_context_takeover
	      ) || (
	        this._options.serverMaxWindowBits === false &&
	        params.server_max_window_bits
	      ) || (
	        typeof this._options.serverMaxWindowBits === 'number' &&
	        typeof params.server_max_window_bits === 'number' &&
	        this._options.serverMaxWindowBits > params.server_max_window_bits
	      ) || (
	        typeof this._options.clientMaxWindowBits === 'number' &&
	        !params.client_max_window_bits
	      )) {
	        return;
	      }
	
	      if (
	        this._options.serverNoContextTakeover ||
	        params.server_no_context_takeover
	      ) {
	        accepted.server_no_context_takeover = true;
	      }
	      if (this._options.clientNoContextTakeover) {
	        accepted.client_no_context_takeover = true;
	      }
	      if (
	        this._options.clientNoContextTakeover !== false &&
	        params.client_no_context_takeover
	      ) {
	        accepted.client_no_context_takeover = true;
	      }
	      if (typeof this._options.serverMaxWindowBits === 'number') {
	        accepted.server_max_window_bits = this._options.serverMaxWindowBits;
	      } else if (typeof params.server_max_window_bits === 'number') {
	        accepted.server_max_window_bits = params.server_max_window_bits;
	      }
	      if (typeof this._options.clientMaxWindowBits === 'number') {
	        accepted.client_max_window_bits = this._options.clientMaxWindowBits;
	      } else if (
	        this._options.clientMaxWindowBits !== false &&
	        typeof params.client_max_window_bits === 'number'
	      ) {
	        accepted.client_max_window_bits = params.client_max_window_bits;
	      }
	      return true;
	    });
	
	    if (!result) throw new Error(`Doesn't support the offered configuration`);
	
	    return accepted;
	  }
	
	  /**
	   * Accept extension response from server.
	   *
	   * @param {Array} paramsList Extension parameters
	   * @return {Object} Accepted configuration
	   * @private
	   */
	  acceptAsClient (paramsList) {
	    const params = paramsList[0];
	
	    if (this._options.clientNoContextTakeover != null) {
	      if (
	        this._options.clientNoContextTakeover === false &&
	        params.client_no_context_takeover
	      ) {
	        throw new Error('Invalid value for "client_no_context_takeover"');
	      }
	    }
	    if (this._options.clientMaxWindowBits != null) {
	      if (
	        this._options.clientMaxWindowBits === false &&
	        params.client_max_window_bits
	      ) {
	        throw new Error('Invalid value for "client_max_window_bits"');
	      }
	      if (
	        typeof this._options.clientMaxWindowBits === 'number' && (
	        !params.client_max_window_bits ||
	        params.client_max_window_bits > this._options.clientMaxWindowBits
	      )) {
	        throw new Error('Invalid value for "client_max_window_bits"');
	      }
	    }
	
	    return params;
	  }
	
	  /**
	   * Normalize extensions parameters.
	   *
	   * @param {Array} paramsList Extension parameters
	   * @return {Array} Normalized extensions parameters
	   * @private
	   */
	  normalizeParams (paramsList) {
	    return paramsList.map((params) => {
	      Object.keys(params).forEach((key) => {
	        var value = params[key];
	        if (value.length > 1) {
	          throw new Error(`Multiple extension parameters for ${key}`);
	        }
	
	        value = value[0];
	
	        switch (key) {
	          case 'server_no_context_takeover':
	          case 'client_no_context_takeover':
	            if (value !== true) {
	              throw new Error(`invalid extension parameter value for ${key} (${value})`);
	            }
	            params[key] = true;
	            break;
	          case 'server_max_window_bits':
	          case 'client_max_window_bits':
	            if (typeof value === 'string') {
	              value = parseInt(value, 10);
	              if (!~AVAILABLE_WINDOW_BITS.indexOf(value)) {
	                throw new Error(`invalid extension parameter value for ${key} (${value})`);
	              }
	            }
	            if (!this._isServer && value === true) {
	              throw new Error(`Missing extension parameter value for ${key}`);
	            }
	            params[key] = value;
	            break;
	          default:
	            throw new Error(`Not defined extension parameter (${key})`);
	        }
	      });
	      return params;
	    });
	  }
	
	  /**
	   * Decompress data.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @public
	   */
	  decompress (data, fin, callback) {
	    const endpoint = this._isServer ? 'client' : 'server';
	
	    if (!this._inflate) {
	      const maxWindowBits = this.params[`${endpoint}_max_window_bits`];
	      this._inflate = zlib.createInflateRaw({
	        windowBits: typeof maxWindowBits === 'number' ? maxWindowBits : DEFAULT_WINDOW_BITS
	      });
	    }
	    this._inflate.writeInProgress = true;
	
	    var totalLength = 0;
	    const buffers = [];
	    var err;
	
	    const onData = (data) => {
	      totalLength += data.length;
	      if (this._maxPayload < 1 || totalLength <= this._maxPayload) {
	        return buffers.push(data);
	      }
	
	      err = new Error('max payload size exceeded');
	      err.closeCode = 1009;
	      this._inflate.reset();
	    };
	
	    const onError = (err) => {
	      cleanup();
	      callback(err);
	    };
	
	    const cleanup = () => {
	      if (!this._inflate) return;
	
	      this._inflate.removeListener('error', onError);
	      this._inflate.removeListener('data', onData);
	      this._inflate.writeInProgress = false;
	
	      if (
	        (fin && this.params[`${endpoint}_no_context_takeover`]) ||
	        this._inflate.pendingClose
	      ) {
	        this._inflate.close();
	        this._inflate = null;
	      }
	    };
	
	    this._inflate.on('error', onError).on('data', onData);
	    this._inflate.write(data);
	    if (fin) this._inflate.write(TRAILER);
	
	    this._inflate.flush(() => {
	      cleanup();
	      if (err) callback(err);
	      else callback(null, bufferUtil.concat(buffers, totalLength));
	    });
	  }
	
	  /**
	   * Compress data.
	   *
	   * @param {Buffer} data Data to compress
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @public
	   */
	  compress (data, fin, callback) {
	    if (!data || data.length === 0) {
	      process.nextTick(callback, null, EMPTY_BLOCK);
	      return;
	    }
	
	    const endpoint = this._isServer ? 'server' : 'client';
	
	    if (!this._deflate) {
	      const maxWindowBits = this.params[`${endpoint}_max_window_bits`];
	      this._deflate = zlib.createDeflateRaw({
	        flush: zlib.Z_SYNC_FLUSH,
	        windowBits: typeof maxWindowBits === 'number' ? maxWindowBits : DEFAULT_WINDOW_BITS,
	        memLevel: this._options.memLevel || DEFAULT_MEM_LEVEL
	      });
	    }
	    this._deflate.writeInProgress = true;
	
	    var totalLength = 0;
	    const buffers = [];
	
	    const onData = (data) => {
	      totalLength += data.length;
	      buffers.push(data);
	    };
	
	    const onError = (err) => {
	      cleanup();
	      callback(err);
	    };
	
	    const cleanup = () => {
	      if (!this._deflate) return;
	
	      this._deflate.removeListener('error', onError);
	      this._deflate.removeListener('data', onData);
	      this._deflate.writeInProgress = false;
	
	      if (
	        (fin && this.params[`${endpoint}_no_context_takeover`]) ||
	        this._deflate.pendingClose
	      ) {
	        this._deflate.close();
	        this._deflate = null;
	      }
	    };
	
	    this._deflate.on('error', onError).on('data', onData);
	    this._deflate.write(data);
	    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
	      cleanup();
	      var data = bufferUtil.concat(buffers, totalLength);
	      if (fin) data = data.slice(0, data.length - 4);
	      callback(null, data);
	    });
	  }
	}
	
	module.exports = PerMessageDeflate;


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(396)


/***/ }),
/* 396 */
/***/ (function(module, exports) {

	module.exports = require("buffer");

/***/ }),
/* 397 */
/***/ (function(module, exports) {

	module.exports = require("zlib");

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	
	'use strict';
	
	const safeBuffer = __webpack_require__(395);
	
	const Buffer = safeBuffer.Buffer;
	
	/**
	 * Merges an array of buffers into a new buffer.
	 *
	 * @param {Buffer[]} list The array of buffers to concat
	 * @param {Number} totalLength The total length of buffers in the list
	 * @return {Buffer} The resulting buffer
	 * @public
	 */
	const concat = (list, totalLength) => {
	  const target = Buffer.allocUnsafe(totalLength);
	  var offset = 0;
	
	  for (var i = 0; i < list.length; i++) {
	    const buf = list[i];
	    buf.copy(target, offset);
	    offset += buf.length;
	  }
	
	  return target;
	};
	
	try {
	  const bufferUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bufferutil\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	  module.exports = Object.assign({ concat }, bufferUtil.BufferUtil || bufferUtil);
	} catch (e) /* istanbul ignore next */ {
	  /**
	   * Masks a buffer using the given mask.
	   *
	   * @param {Buffer} source The buffer to mask
	   * @param {Buffer} mask The mask to use
	   * @param {Buffer} output The buffer where to store the result
	   * @param {Number} offset The offset at which to start writing
	   * @param {Number} length The number of bytes to mask.
	   * @public
	   */
	  const mask = (source, mask, output, offset, length) => {
	    for (var i = 0; i < length; i++) {
	      output[offset + i] = source[i] ^ mask[i & 3];
	    }
	  };
	
	  /**
	   * Unmasks a buffer using the given mask.
	   *
	   * @param {Buffer} buffer The buffer to unmask
	   * @param {Buffer} mask The mask to use
	   * @public
	   */
	  const unmask = (buffer, mask) => {
	    // Required until https://github.com/nodejs/node/issues/9006 is resolved.
	    const length = buffer.length;
	    for (var i = 0; i < length; i++) {
	      buffer[i] ^= mask[i & 3];
	    }
	  };
	
	  module.exports = { concat, mask, unmask };
	}


/***/ }),
/* 399 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Class representing an event.
	 *
	 * @private
	 */
	class Event {
	  /**
	   * Create a new `Event`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} target A reference to the target to which the event was dispatched
	   */
	  constructor (type, target) {
	    this.target = target;
	    this.type = type;
	  }
	}
	
	/**
	 * Class representing a message event.
	 *
	 * @extends Event
	 * @private
	 */
	class MessageEvent extends Event {
	  /**
	   * Create a new `MessageEvent`.
	   *
	   * @param {(String|Buffer|ArrayBuffer|Buffer[])} data The received data
	   * @param {Boolean} isBinary Specifies if `data` is binary
	   * @param {WebSocket} target A reference to the target to which the event was dispatched
	   */
	  constructor (data, isBinary, target) {
	    super('message', target);
	
	    this.binary = isBinary; // non-standard.
	    this.data = data;
	  }
	}
	
	/**
	 * Class representing a close event.
	 *
	 * @extends Event
	 * @private
	 */
	class CloseEvent extends Event {
	  /**
	   * Create a new `CloseEvent`.
	   *
	   * @param {Number} code The status code explaining why the connection is being closed
	   * @param {String} reason A human-readable string explaining why the connection is closing
	   * @param {WebSocket} target A reference to the target to which the event was dispatched
	   */
	  constructor (code, reason, target) {
	    super('close', target);
	
	    this.wasClean = code === undefined || code === 1000;
	    this.reason = reason;
	    this.target = target;
	    this.type = 'close';
	    this.code = code;
	  }
	}
	
	/**
	 * Class representing an open event.
	 *
	 * @extends Event
	 * @private
	 */
	class OpenEvent extends Event {
	  /**
	   * Create a new `OpenEvent`.
	   *
	   * @param {WebSocket} target A reference to the target to which the event was dispatched
	   */
	  constructor (target) {
	    super('open', target);
	  }
	}
	
	/**
	 * This provides methods for emulating the `EventTarget` interface. It's not
	 * meant to be used directly.
	 *
	 * @mixin
	 */
	const EventTarget = {
	  /**
	   * Register an event listener.
	   *
	   * @param {String} method A string representing the event type to listen for
	   * @param {Function} listener The listener to add
	   * @public
	   */
	  addEventListener (method, listener) {
	    if (typeof listener !== 'function') return;
	
	    function onMessage (data, flags) {
	      listener.call(this, new MessageEvent(data, !!flags.binary, this));
	    }
	
	    function onClose (code, message) {
	      listener.call(this, new CloseEvent(code, message, this));
	    }
	
	    function onError (event) {
	      event.type = 'error';
	      event.target = this;
	      listener.call(this, event);
	    }
	
	    function onOpen () {
	      listener.call(this, new OpenEvent(this));
	    }
	
	    if (method === 'message') {
	      onMessage._listener = listener;
	      this.on(method, onMessage);
	    } else if (method === 'close') {
	      onClose._listener = listener;
	      this.on(method, onClose);
	    } else if (method === 'error') {
	      onError._listener = listener;
	      this.on(method, onError);
	    } else if (method === 'open') {
	      onOpen._listener = listener;
	      this.on(method, onOpen);
	    } else {
	      this.on(method, listener);
	    }
	  },
	
	  /**
	   * Remove an event listener.
	   *
	   * @param {String} method A string representing the event type to remove
	   * @param {Function} listener The listener to remove
	   * @public
	   */
	  removeEventListener (method, listener) {
	    const listeners = this.listeners(method);
	
	    for (var i = 0; i < listeners.length; i++) {
	      if (listeners[i] === listener || listeners[i]._listener === listener) {
	        this.removeListener(method, listeners[i]);
	      }
	    }
	  }
	};
	
	module.exports = EventTarget;


/***/ }),
/* 400 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Parse the `Sec-WebSocket-Extensions` header into an object.
	 *
	 * @param {String} value field value of the header
	 * @return {Object} The parsed object
	 * @public
	 */
	const parse = (value) => {
	  value = value || '';
	
	  const extensions = {};
	
	  value.split(',').forEach((v) => {
	    const params = v.split(';');
	    const token = params.shift().trim();
	    const paramsList = extensions[token] = extensions[token] || [];
	    const parsedParams = {};
	
	    params.forEach((param) => {
	      const parts = param.trim().split('=');
	      const key = parts[0];
	      var value = parts[1];
	
	      if (value === undefined) {
	        value = true;
	      } else {
	        // unquote value
	        if (value[0] === '"') {
	          value = value.slice(1);
	        }
	        if (value[value.length - 1] === '"') {
	          value = value.slice(0, value.length - 1);
	        }
	      }
	      (parsedParams[key] = parsedParams[key] || []).push(value);
	    });
	
	    paramsList.push(parsedParams);
	  });
	
	  return extensions;
	};
	
	/**
	 * Serialize a parsed `Sec-WebSocket-Extensions` header to a string.
	 *
	 * @param {Object} value The object to format
	 * @return {String} A string representing the given value
	 * @public
	 */
	const format = (value) => {
	  return Object.keys(value).map((token) => {
	    var paramsList = value[token];
	    if (!Array.isArray(paramsList)) paramsList = [paramsList];
	    return paramsList.map((params) => {
	      return [token].concat(Object.keys(params).map((k) => {
	        var p = params[k];
	        if (!Array.isArray(p)) p = [p];
	        return p.map((v) => v === true ? k : `${k}=${v}`).join('; ');
	      })).join('; ');
	    }).join(', ');
	  }).join(', ');
	};
	
	module.exports = { format, parse };


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	const safeBuffer = __webpack_require__(395);
	
	const Buffer = safeBuffer.Buffer;
	
	exports.BINARY_TYPES = ['nodebuffer', 'arraybuffer', 'fragments'];
	exports.GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
	exports.EMPTY_BUFFER = Buffer.alloc(0);
	exports.NOOP = () => {};


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	
	'use strict';
	
	const safeBuffer = __webpack_require__(395);
	
	const PerMessageDeflate = __webpack_require__(394);
	const isValidUTF8 = __webpack_require__(403);
	const bufferUtil = __webpack_require__(398);
	const ErrorCodes = __webpack_require__(404);
	const constants = __webpack_require__(401);
	
	const Buffer = safeBuffer.Buffer;
	
	const GET_INFO = 0;
	const GET_PAYLOAD_LENGTH_16 = 1;
	const GET_PAYLOAD_LENGTH_64 = 2;
	const GET_MASK = 3;
	const GET_DATA = 4;
	const INFLATING = 5;
	
	/**
	 * HyBi Receiver implementation.
	 */
	class Receiver {
	  /**
	   * Creates a Receiver instance.
	   *
	   * @param {Object} extensions An object containing the negotiated extensions
	   * @param {Number} maxPayload The maximum allowed message length
	   * @param {String} binaryType The type for binary data
	   */
	  constructor (extensions, maxPayload, binaryType) {
	    this.binaryType = binaryType || constants.BINARY_TYPES[0];
	    this.extensions = extensions || {};
	    this.maxPayload = maxPayload | 0;
	
	    this.bufferedBytes = 0;
	    this.buffers = [];
	
	    this.compressed = false;
	    this.payloadLength = 0;
	    this.fragmented = 0;
	    this.masked = false;
	    this.fin = false;
	    this.mask = null;
	    this.opcode = 0;
	
	    this.totalPayloadLength = 0;
	    this.messageLength = 0;
	    this.fragments = [];
	
	    this.cleanupCallback = null;
	    this.hadError = false;
	    this.dead = false;
	    this.loop = false;
	
	    this.onmessage = null;
	    this.onclose = null;
	    this.onerror = null;
	    this.onping = null;
	    this.onpong = null;
	
	    this.state = GET_INFO;
	  }
	
	  /**
	   * Consumes bytes from the available buffered data.
	   *
	   * @param {Number} bytes The number of bytes to consume
	   * @return {Buffer} Consumed bytes
	   * @private
	   */
	  readBuffer (bytes) {
	    var offset = 0;
	    var dst;
	    var l;
	
	    this.bufferedBytes -= bytes;
	
	    if (bytes === this.buffers[0].length) return this.buffers.shift();
	
	    if (bytes < this.buffers[0].length) {
	      dst = this.buffers[0].slice(0, bytes);
	      this.buffers[0] = this.buffers[0].slice(bytes);
	      return dst;
	    }
	
	    dst = Buffer.allocUnsafe(bytes);
	
	    while (bytes > 0) {
	      l = this.buffers[0].length;
	
	      if (bytes >= l) {
	        this.buffers[0].copy(dst, offset);
	        offset += l;
	        this.buffers.shift();
	      } else {
	        this.buffers[0].copy(dst, offset, 0, bytes);
	        this.buffers[0] = this.buffers[0].slice(bytes);
	      }
	
	      bytes -= l;
	    }
	
	    return dst;
	  }
	
	  /**
	   * Checks if the number of buffered bytes is bigger or equal than `n` and
	   * calls `cleanup` if necessary.
	   *
	   * @param {Number} n The number of bytes to check against
	   * @return {Boolean} `true` if `bufferedBytes >= n`, else `false`
	   * @private
	   */
	  hasBufferedBytes (n) {
	    if (this.bufferedBytes >= n) return true;
	
	    this.loop = false;
	    if (this.dead) this.cleanup(this.cleanupCallback);
	    return false;
	  }
	
	  /**
	   * Adds new data to the parser.
	   *
	   * @public
	   */
	  add (data) {
	    if (this.dead) return;
	
	    this.bufferedBytes += data.length;
	    this.buffers.push(data);
	    this.startLoop();
	  }
	
	  /**
	   * Starts the parsing loop.
	   *
	   * @private
	   */
	  startLoop () {
	    this.loop = true;
	
	    while (this.loop) {
	      switch (this.state) {
	        case GET_INFO:
	          this.getInfo();
	          break;
	        case GET_PAYLOAD_LENGTH_16:
	          this.getPayloadLength16();
	          break;
	        case GET_PAYLOAD_LENGTH_64:
	          this.getPayloadLength64();
	          break;
	        case GET_MASK:
	          this.getMask();
	          break;
	        case GET_DATA:
	          this.getData();
	          break;
	        default: // `INFLATING`
	          this.loop = false;
	      }
	    }
	  }
	
	  /**
	   * Reads the first two bytes of a frame.
	   *
	   * @private
	   */
	  getInfo () {
	    if (!this.hasBufferedBytes(2)) return;
	
	    const buf = this.readBuffer(2);
	
	    if ((buf[0] & 0x30) !== 0x00) {
	      this.error(new Error('RSV2 and RSV3 must be clear'), 1002);
	      return;
	    }
	
	    const compressed = (buf[0] & 0x40) === 0x40;
	
	    if (compressed && !this.extensions[PerMessageDeflate.extensionName]) {
	      this.error(new Error('RSV1 must be clear'), 1002);
	      return;
	    }
	
	    this.fin = (buf[0] & 0x80) === 0x80;
	    this.opcode = buf[0] & 0x0f;
	    this.payloadLength = buf[1] & 0x7f;
	
	    if (this.opcode === 0x00) {
	      if (compressed) {
	        this.error(new Error('RSV1 must be clear'), 1002);
	        return;
	      }
	
	      if (!this.fragmented) {
	        this.error(new Error(`invalid opcode: ${this.opcode}`), 1002);
	        return;
	      } else {
	        this.opcode = this.fragmented;
	      }
	    } else if (this.opcode === 0x01 || this.opcode === 0x02) {
	      if (this.fragmented) {
	        this.error(new Error(`invalid opcode: ${this.opcode}`), 1002);
	        return;
	      }
	
	      this.compressed = compressed;
	    } else if (this.opcode > 0x07 && this.opcode < 0x0b) {
	      if (!this.fin) {
	        this.error(new Error('FIN must be set'), 1002);
	        return;
	      }
	
	      if (compressed) {
	        this.error(new Error('RSV1 must be clear'), 1002);
	        return;
	      }
	
	      if (this.payloadLength > 0x7d) {
	        this.error(new Error('invalid payload length'), 1002);
	        return;
	      }
	    } else {
	      this.error(new Error(`invalid opcode: ${this.opcode}`), 1002);
	      return;
	    }
	
	    if (!this.fin && !this.fragmented) this.fragmented = this.opcode;
	
	    this.masked = (buf[1] & 0x80) === 0x80;
	
	    if (this.payloadLength === 126) this.state = GET_PAYLOAD_LENGTH_16;
	    else if (this.payloadLength === 127) this.state = GET_PAYLOAD_LENGTH_64;
	    else this.haveLength();
	  }
	
	  /**
	   * Gets extended payload length (7+16).
	   *
	   * @private
	   */
	  getPayloadLength16 () {
	    if (!this.hasBufferedBytes(2)) return;
	
	    this.payloadLength = this.readBuffer(2).readUInt16BE(0, true);
	    this.haveLength();
	  }
	
	  /**
	   * Gets extended payload length (7+64).
	   *
	   * @private
	   */
	  getPayloadLength64 () {
	    if (!this.hasBufferedBytes(8)) return;
	
	    const buf = this.readBuffer(8);
	    const num = buf.readUInt32BE(0, true);
	
	    //
	    // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
	    // if payload length is greater than this number.
	    //
	    if (num > Math.pow(2, 53 - 32) - 1) {
	      this.error(new Error('max payload size exceeded'), 1009);
	      return;
	    }
	
	    this.payloadLength = (num * Math.pow(2, 32)) + buf.readUInt32BE(4, true);
	    this.haveLength();
	  }
	
	  /**
	   * Payload length has been read.
	   *
	   * @private
	   */
	  haveLength () {
	    if (this.opcode < 0x08 && this.maxPayloadExceeded(this.payloadLength)) {
	      return;
	    }
	
	    if (this.masked) this.state = GET_MASK;
	    else this.state = GET_DATA;
	  }
	
	  /**
	   * Reads mask bytes.
	   *
	   * @private
	   */
	  getMask () {
	    if (!this.hasBufferedBytes(4)) return;
	
	    this.mask = this.readBuffer(4);
	    this.state = GET_DATA;
	  }
	
	  /**
	   * Reads data bytes.
	   *
	   * @private
	   */
	  getData () {
	    var data = constants.EMPTY_BUFFER;
	
	    if (this.payloadLength) {
	      if (!this.hasBufferedBytes(this.payloadLength)) return;
	
	      data = this.readBuffer(this.payloadLength);
	      if (this.masked) bufferUtil.unmask(data, this.mask);
	    }
	
	    if (this.opcode > 0x07) {
	      this.controlMessage(data);
	    } else if (this.compressed) {
	      this.state = INFLATING;
	      this.decompress(data);
	    } else if (this.pushFragment(data)) {
	      this.dataMessage();
	    }
	  }
	
	  /**
	   * Decompresses data.
	   *
	   * @param {Buffer} data Compressed data
	   * @private
	   */
	  decompress (data) {
	    const extension = this.extensions[PerMessageDeflate.extensionName];
	
	    extension.decompress(data, this.fin, (err, buf) => {
	      if (err) {
	        this.error(err, err.closeCode === 1009 ? 1009 : 1007);
	        return;
	      }
	
	      if (this.pushFragment(buf)) this.dataMessage();
	      this.startLoop();
	    });
	  }
	
	  /**
	   * Handles a data message.
	   *
	   * @private
	   */
	  dataMessage () {
	    if (this.fin) {
	      const messageLength = this.messageLength;
	      const fragments = this.fragments;
	
	      this.totalPayloadLength = 0;
	      this.messageLength = 0;
	      this.fragmented = 0;
	      this.fragments = [];
	
	      if (this.opcode === 2) {
	        var data;
	
	        if (this.binaryType === 'nodebuffer') {
	          data = toBuffer(fragments, messageLength);
	        } else if (this.binaryType === 'arraybuffer') {
	          data = toArrayBuffer(toBuffer(fragments, messageLength));
	        } else {
	          data = fragments;
	        }
	
	        this.onmessage(data, { masked: this.masked, binary: true });
	      } else {
	        const buf = toBuffer(fragments, messageLength);
	
	        if (!isValidUTF8(buf)) {
	          this.error(new Error('invalid utf8 sequence'), 1007);
	          return;
	        }
	
	        this.onmessage(buf.toString(), { masked: this.masked });
	      }
	    }
	
	    this.state = GET_INFO;
	  }
	
	  /**
	   * Handles a control message.
	   *
	   * @param {Buffer} data Data to handle
	   * @private
	   */
	  controlMessage (data) {
	    if (this.opcode === 0x08) {
	      if (data.length === 0) {
	        this.onclose(1000, '', { masked: this.masked });
	        this.loop = false;
	        this.cleanup(this.cleanupCallback);
	      } else if (data.length === 1) {
	        this.error(new Error('invalid payload length'), 1002);
	      } else {
	        const code = data.readUInt16BE(0, true);
	
	        if (!ErrorCodes.isValidErrorCode(code)) {
	          this.error(new Error(`invalid status code: ${code}`), 1002);
	          return;
	        }
	
	        const buf = data.slice(2);
	
	        if (!isValidUTF8(buf)) {
	          this.error(new Error('invalid utf8 sequence'), 1007);
	          return;
	        }
	
	        this.onclose(code, buf.toString(), { masked: this.masked });
	        this.loop = false;
	        this.cleanup(this.cleanupCallback);
	      }
	
	      return;
	    }
	
	    const flags = { masked: this.masked, binary: true };
	
	    if (this.opcode === 0x09) this.onping(data, flags);
	    else this.onpong(data, flags);
	
	    this.state = GET_INFO;
	  }
	
	  /**
	   * Handles an error.
	   *
	   * @param {Error} err The error
	   * @param {Number} code Close code
	   * @private
	   */
	  error (err, code) {
	    this.onerror(err, code);
	    this.hadError = true;
	    this.loop = false;
	    this.cleanup(this.cleanupCallback);
	  }
	
	  /**
	   * Checks payload size, disconnects socket when it exceeds `maxPayload`.
	   *
	   * @param {Number} length Payload length
	   * @private
	   */
	  maxPayloadExceeded (length) {
	    if (length === 0 || this.maxPayload < 1) return false;
	
	    const fullLength = this.totalPayloadLength + length;
	
	    if (fullLength <= this.maxPayload) {
	      this.totalPayloadLength = fullLength;
	      return false;
	    }
	
	    this.error(new Error('max payload size exceeded'), 1009);
	    return true;
	  }
	
	  /**
	   * Appends a fragment in the fragments array after checking that the sum of
	   * fragment lengths does not exceed `maxPayload`.
	   *
	   * @param {Buffer} fragment The fragment to add
	   * @return {Boolean} `true` if `maxPayload` is not exceeded, else `false`
	   * @private
	   */
	  pushFragment (fragment) {
	    if (fragment.length === 0) return true;
	
	    const totalLength = this.messageLength + fragment.length;
	
	    if (this.maxPayload < 1 || totalLength <= this.maxPayload) {
	      this.messageLength = totalLength;
	      this.fragments.push(fragment);
	      return true;
	    }
	
	    this.error(new Error('max payload size exceeded'), 1009);
	    return false;
	  }
	
	  /**
	   * Releases resources used by the receiver.
	   *
	   * @param {Function} cb Callback
	   * @public
	   */
	  cleanup (cb) {
	    this.dead = true;
	
	    if (!this.hadError && (this.loop || this.state === INFLATING)) {
	      this.cleanupCallback = cb;
	    } else {
	      this.extensions = null;
	      this.fragments = null;
	      this.buffers = null;
	      this.mask = null;
	
	      this.cleanupCallback = null;
	      this.onmessage = null;
	      this.onclose = null;
	      this.onerror = null;
	      this.onping = null;
	      this.onpong = null;
	
	      if (cb) cb();
	    }
	  }
	}
	
	module.exports = Receiver;
	
	/**
	 * Makes a buffer from a list of fragments.
	 *
	 * @param {Buffer[]} fragments The list of fragments composing the message
	 * @param {Number} messageLength The length of the message
	 * @return {Buffer}
	 * @private
	 */
	function toBuffer (fragments, messageLength) {
	  if (fragments.length === 1) return fragments[0];
	  if (fragments.length > 1) return bufferUtil.concat(fragments, messageLength);
	  return constants.EMPTY_BUFFER;
	}
	
	/**
	 * Converts a buffer to an `ArrayBuffer`.
	 *
	 * @param {Buffer} The buffer to convert
	 * @return {ArrayBuffer} Converted buffer
	 */
	function toArrayBuffer (buf) {
	  if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
	    return buf.buffer;
	  }
	
	  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
	}


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	
	'use strict';
	
	try {
	  const isValidUTF8 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"utf-8-validate\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	  module.exports = typeof isValidUTF8 === 'object'
	    ? isValidUTF8.Validation.isValidUTF8  // utf-8-validate@<3.0.0
	    : isValidUTF8;
	} catch (e) /* istanbul ignore next */ {
	  module.exports = () => true;
	}


/***/ }),
/* 404 */
/***/ (function(module, exports) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	
	'use strict';
	
	module.exports = {
	  isValidErrorCode: function (code) {
	    return (code >= 1000 && code <= 1013 && code !== 1004 && code !== 1005 && code !== 1006) ||
	      (code >= 3000 && code <= 4999);
	  },
	  1000: 'normal',
	  1001: 'going away',
	  1002: 'protocol error',
	  1003: 'unsupported data',
	  1004: 'reserved',
	  1005: 'reserved for extensions',
	  1006: 'reserved for extensions',
	  1007: 'inconsistent or invalid data',
	  1008: 'policy violation',
	  1009: 'message too big',
	  1010: 'extension handshake missing',
	  1011: 'an unexpected condition prevented the request from being fulfilled',
	  1012: 'service restart',
	  1013: 'try again later'
	};


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	
	'use strict';
	
	const safeBuffer = __webpack_require__(395);
	const crypto = __webpack_require__(392);
	
	const PerMessageDeflate = __webpack_require__(394);
	const bufferUtil = __webpack_require__(398);
	const ErrorCodes = __webpack_require__(404);
	
	const Buffer = safeBuffer.Buffer;
	
	/**
	 * HyBi Sender implementation.
	 */
	class Sender {
	  /**
	   * Creates a Sender instance.
	   *
	   * @param {net.Socket} socket The connection socket
	   * @param {Object} extensions An object containing the negotiated extensions
	   */
	  constructor (socket, extensions) {
	    this.perMessageDeflate = (extensions || {})[PerMessageDeflate.extensionName];
	    this._socket = socket;
	
	    this.firstFragment = true;
	    this.compress = false;
	
	    this.bufferedBytes = 0;
	    this.deflating = false;
	    this.queue = [];
	
	    this.onerror = null;
	  }
	
	  /**
	   * Frames a piece of data according to the HyBi WebSocket protocol.
	   *
	   * @param {Buffer} data The data to frame
	   * @param {Object} options Options object
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} options.readOnly Specifies whether `data` can be modified
	   * @param {Boolean} options.fin Specifies whether or not to set the FIN bit
	   * @param {Boolean} options.mask Specifies whether or not to mask `data`
	   * @param {Boolean} options.rsv1 Specifies whether or not to set the RSV1 bit
	   * @return {Buffer[]} The framed data as a list of `Buffer` instances
	   * @public
	   */
	  static frame (data, options) {
	    const merge = data.length < 1024 || (options.mask && options.readOnly);
	    var offset = options.mask ? 6 : 2;
	    var payloadLength = data.length;
	
	    if (data.length >= 65536) {
	      offset += 8;
	      payloadLength = 127;
	    } else if (data.length > 125) {
	      offset += 2;
	      payloadLength = 126;
	    }
	
	    const target = Buffer.allocUnsafe(merge ? data.length + offset : offset);
	
	    target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
	    if (options.rsv1) target[0] |= 0x40;
	
	    if (payloadLength === 126) {
	      target.writeUInt16BE(data.length, 2, true);
	    } else if (payloadLength === 127) {
	      target.writeUInt32BE(0, 2, true);
	      target.writeUInt32BE(data.length, 6, true);
	    }
	
	    if (!options.mask) {
	      target[1] = payloadLength;
	      if (merge) {
	        data.copy(target, offset);
	        return [target];
	      }
	
	      return [target, data];
	    }
	
	    const mask = crypto.randomBytes(4);
	
	    target[1] = payloadLength | 0x80;
	    target[offset - 4] = mask[0];
	    target[offset - 3] = mask[1];
	    target[offset - 2] = mask[2];
	    target[offset - 1] = mask[3];
	
	    if (merge) {
	      bufferUtil.mask(data, mask, target, offset, data.length);
	      return [target];
	    }
	
	    bufferUtil.mask(data, mask, data, 0, data.length);
	    return [target, data];
	  }
	
	  /**
	   * Sends a close message to the other peer.
	   *
	   * @param {(Number|undefined)} code The status code component of the body
	   * @param {String} data The message component of the body
	   * @param {Boolean} mask Specifies whether or not to mask the message
	   * @param {Function} cb Callback
	   * @public
	   */
	  close (code, data, mask, cb) {
	    if (code !== undefined && (typeof code !== 'number' || !ErrorCodes.isValidErrorCode(code))) {
	      throw new Error('first argument must be a valid error code number');
	    }
	
	    const buf = Buffer.allocUnsafe(2 + (data ? Buffer.byteLength(data) : 0));
	
	    buf.writeUInt16BE(code || 1000, 0, true);
	    if (buf.length > 2) buf.write(data, 2);
	
	    if (this.deflating) {
	      this.enqueue([this.doClose, buf, mask, cb]);
	    } else {
	      this.doClose(buf, mask, cb);
	    }
	  }
	
	  /**
	   * Frames and sends a close message.
	   *
	   * @param {Buffer} data The message to send
	   * @param {Boolean} mask Specifies whether or not to mask `data`
	   * @param {Function} cb Callback
	   * @private
	   */
	  doClose (data, mask, cb) {
	    this.sendFrame(Sender.frame(data, {
	      fin: true,
	      rsv1: false,
	      opcode: 0x08,
	      mask,
	      readOnly: false
	    }), cb);
	  }
	
	  /**
	   * Sends a ping message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} mask Specifies whether or not to mask `data`
	   * @public
	   */
	  ping (data, mask) {
	    var readOnly = true;
	
	    if (!Buffer.isBuffer(data)) {
	      if (data instanceof ArrayBuffer) {
	        data = Buffer.from(data);
	      } else if (ArrayBuffer.isView(data)) {
	        data = viewToBuffer(data);
	      } else {
	        data = Buffer.from(data);
	        readOnly = false;
	      }
	    }
	
	    if (this.deflating) {
	      this.enqueue([this.doPing, data, mask, readOnly]);
	    } else {
	      this.doPing(data, mask, readOnly);
	    }
	  }
	
	  /**
	   * Frames and sends a ping message.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} mask Specifies whether or not to mask `data`
	   * @param {Boolean} readOnly Specifies whether `data` can be modified
	   * @private
	   */
	  doPing (data, mask, readOnly) {
	    this.sendFrame(Sender.frame(data, {
	      fin: true,
	      rsv1: false,
	      opcode: 0x09,
	      mask,
	      readOnly
	    }));
	  }
	
	  /**
	   * Sends a pong message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} mask Specifies whether or not to mask `data`
	   * @public
	   */
	  pong (data, mask) {
	    var readOnly = true;
	
	    if (!Buffer.isBuffer(data)) {
	      if (data instanceof ArrayBuffer) {
	        data = Buffer.from(data);
	      } else if (ArrayBuffer.isView(data)) {
	        data = viewToBuffer(data);
	      } else {
	        data = Buffer.from(data);
	        readOnly = false;
	      }
	    }
	
	    if (this.deflating) {
	      this.enqueue([this.doPong, data, mask, readOnly]);
	    } else {
	      this.doPong(data, mask, readOnly);
	    }
	  }
	
	  /**
	   * Frames and sends a pong message.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} mask Specifies whether or not to mask `data`
	   * @param {Boolean} readOnly Specifies whether `data` can be modified
	   * @private
	   */
	  doPong (data, mask, readOnly) {
	    this.sendFrame(Sender.frame(data, {
	      fin: true,
	      rsv1: false,
	      opcode: 0x0a,
	      mask,
	      readOnly
	    }));
	  }
	
	  /**
	   * Sends a data message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Object} options Options object
	   * @param {Boolean} options.compress Specifies whether or not to compress `data`
	   * @param {Boolean} options.binary Specifies whether `data` is binary or text
	   * @param {Boolean} options.fin Specifies whether the fragment is the last one
	   * @param {Boolean} options.mask Specifies whether or not to mask `data`
	   * @param {Function} cb Callback
	   * @public
	   */
	  send (data, options, cb) {
	    var opcode = options.binary ? 2 : 1;
	    var rsv1 = options.compress;
	    var readOnly = true;
	
	    if (!Buffer.isBuffer(data)) {
	      if (data instanceof ArrayBuffer) {
	        data = Buffer.from(data);
	      } else if (ArrayBuffer.isView(data)) {
	        data = viewToBuffer(data);
	      } else {
	        data = Buffer.from(data);
	        readOnly = false;
	      }
	    }
	
	    if (this.firstFragment) {
	      this.firstFragment = false;
	      if (rsv1 && this.perMessageDeflate) {
	        rsv1 = data.length >= this.perMessageDeflate.threshold;
	      }
	      this.compress = rsv1;
	    } else {
	      rsv1 = false;
	      opcode = 0;
	    }
	
	    if (options.fin) this.firstFragment = true;
	
	    if (this.perMessageDeflate) {
	      const opts = {
	        fin: options.fin,
	        rsv1,
	        opcode,
	        mask: options.mask,
	        readOnly
	      };
	
	      if (this.deflating) {
	        this.enqueue([this.dispatch, data, this.compress, opts, cb]);
	      } else {
	        this.dispatch(data, this.compress, opts, cb);
	      }
	    } else {
	      this.sendFrame(Sender.frame(data, {
	        fin: options.fin,
	        rsv1: false,
	        opcode,
	        mask: options.mask,
	        readOnly
	      }), cb);
	    }
	  }
	
	  /**
	   * Dispatches a data message.
	   *
	   * @param {Buffer} data The message to send
	   * @param {Boolean} compress Specifies whether or not to compress `data`
	   * @param {Object} options Options object
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} options.readOnly Specifies whether `data` can be modified
	   * @param {Boolean} options.fin Specifies whether or not to set the FIN bit
	   * @param {Boolean} options.mask Specifies whether or not to mask `data`
	   * @param {Boolean} options.rsv1 Specifies whether or not to set the RSV1 bit
	   * @param {Function} cb Callback
	   * @private
	   */
	  dispatch (data, compress, options, cb) {
	    if (!compress) {
	      this.sendFrame(Sender.frame(data, options), cb);
	      return;
	    }
	
	    this.deflating = true;
	    this.perMessageDeflate.compress(data, options.fin, (err, buf) => {
	      if (err) {
	        if (cb) cb(err);
	        else this.onerror(err);
	        return;
	      }
	
	      options.readOnly = false;
	      this.sendFrame(Sender.frame(buf, options), cb);
	      this.deflating = false;
	      this.dequeue();
	    });
	  }
	
	  /**
	   * Executes queued send operations.
	   *
	   * @private
	   */
	  dequeue () {
	    while (!this.deflating && this.queue.length) {
	      const params = this.queue.shift();
	
	      this.bufferedBytes -= params[1].length;
	      params[0].apply(this, params.slice(1));
	    }
	  }
	
	  /**
	   * Enqueues a send operation.
	   *
	   * @param {Array} params Send operation parameters.
	   * @private
	   */
	  enqueue (params) {
	    this.bufferedBytes += params[1].length;
	    this.queue.push(params);
	  }
	
	  /**
	   * Sends a frame.
	   *
	   * @param {Buffer[]} list The frame to send
	   * @param {Function} cb Callback
	   * @private
	   */
	  sendFrame (list, cb) {
	    if (list.length === 2) {
	      this._socket.write(list[0]);
	      this._socket.write(list[1], cb);
	    } else {
	      this._socket.write(list[0], cb);
	    }
	  }
	}
	
	module.exports = Sender;
	
	/**
	 * Converts an `ArrayBuffer` view into a buffer.
	 *
	 * @param {(DataView|TypedArray)} view The view to convert
	 * @return {Buffer} Converted view
	 * @private
	 */
	function viewToBuffer (view) {
	  const buf = Buffer.from(view.buffer);
	
	  if (view.byteLength !== view.buffer.byteLength) {
	    return buf.slice(view.byteOffset, view.byteOffset + view.byteLength);
	  }
	
	  return buf;
	}


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	
	'use strict';
	
	const safeBuffer = __webpack_require__(395);
	const EventEmitter = __webpack_require__(391);
	const crypto = __webpack_require__(392);
	const Ultron = __webpack_require__(393);
	const http = __webpack_require__(344);
	const url = __webpack_require__(346);
	
	const PerMessageDeflate = __webpack_require__(394);
	const Extensions = __webpack_require__(400);
	const constants = __webpack_require__(401);
	const WebSocket = __webpack_require__(390);
	
	const Buffer = safeBuffer.Buffer;
	
	/**
	 * Class representing a WebSocket server.
	 *
	 * @extends EventEmitter
	 */
	class WebSocketServer extends EventEmitter {
	  /**
	   * Create a `WebSocketServer` instance.
	   *
	   * @param {Object} options Configuration options
	   * @param {String} options.host The hostname where to bind the server
	   * @param {Number} options.port The port where to bind the server
	   * @param {http.Server} options.server A pre-created HTTP/S server to use
	   * @param {Function} options.verifyClient An hook to reject connections
	   * @param {Function} options.handleProtocols An hook to handle protocols
	   * @param {String} options.path Accept only connections matching this path
	   * @param {Boolean} options.noServer Enable no server mode
	   * @param {Boolean} options.clientTracking Specifies whether or not to track clients
	   * @param {(Boolean|Object)} options.perMessageDeflate Enable/disable permessage-deflate
	   * @param {Number} options.maxPayload The maximum allowed message size
	   * @param {Function} callback A listener for the `listening` event
	   */
	  constructor (options, callback) {
	    super();
	
	    options = Object.assign({
	      maxPayload: 100 * 1024 * 1024,
	      perMessageDeflate: true,
	      handleProtocols: null,
	      clientTracking: true,
	      verifyClient: null,
	      noServer: false,
	      backlog: null, // use default (511 as implemented in net.js)
	      server: null,
	      host: null,
	      path: null,
	      port: null
	    }, options);
	
	    if (options.port == null && !options.server && !options.noServer) {
	      throw new TypeError('missing or invalid options');
	    }
	
	    if (options.port != null) {
	      this._server = http.createServer((req, res) => {
	        const body = http.STATUS_CODES[426];
	
	        res.writeHead(426, {
	          'Content-Length': body.length,
	          'Content-Type': 'text/plain'
	        });
	        res.end(body);
	      });
	      this._server.allowHalfOpen = false;
	      this._server.listen(options.port, options.host, options.backlog, callback);
	    } else if (options.server) {
	      this._server = options.server;
	    }
	
	    if (this._server) {
	      this._ultron = new Ultron(this._server);
	      this._ultron.on('listening', () => this.emit('listening'));
	      this._ultron.on('error', (err) => this.emit('error', err));
	      this._ultron.on('upgrade', (req, socket, head) => {
	        this.handleUpgrade(req, socket, head, (client) => {
	          this.emit(`connection${req.url}`, client);
	          this.emit('connection', client);
	        });
	      });
	    }
	
	    if (options.clientTracking) this.clients = new Set();
	    this.options = options;
	    this.path = options.path;
	  }
	
	  /**
	   * Close the server.
	   *
	   * @param {Function} cb Callback
	   * @public
	   */
	  close (cb) {
	    //
	    // Terminate all associated clients.
	    //
	    if (this.clients) {
	      for (const client of this.clients) client.terminate();
	    }
	
	    const server = this._server;
	
	    if (server) {
	      this._ultron.destroy();
	      this._ultron = this._server = null;
	
	      //
	      // Close the http server if it was internally created.
	      //
	      if (this.options.port != null) return server.close(cb);
	    }
	
	    if (cb) cb();
	  }
	
	  /**
	   * See if a given request should be handled by this server instance.
	   *
	   * @param {http.IncomingMessage} req Request object to inspect
	   * @return {Boolean} `true` if the request is valid, else `false`
	   * @public
	   */
	  shouldHandle (req) {
	    if (this.options.path && url.parse(req.url).pathname !== this.options.path) {
	      return false;
	    }
	
	    return true;
	  }
	
	  /**
	   * Handle a HTTP Upgrade request.
	   *
	   * @param {http.IncomingMessage} req The request object
	   * @param {net.Socket} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Function} cb Callback
	   * @public
	   */
	  handleUpgrade (req, socket, head, cb) {
	    socket.on('error', socketError);
	
	    const version = +req.headers['sec-websocket-version'];
	
	    if (
	      req.method !== 'GET' || req.headers.upgrade.toLowerCase() !== 'websocket' ||
	      !req.headers['sec-websocket-key'] || (version !== 8 && version !== 13) ||
	      !this.shouldHandle(req)
	    ) {
	      return abortConnection(socket, 400);
	    }
	
	    var protocol = (req.headers['sec-websocket-protocol'] || '').split(/, */);
	
	    //
	    // Optionally call external protocol selection handler.
	    //
	    if (this.options.handleProtocols) {
	      protocol = this.options.handleProtocols(protocol, req);
	      if (protocol === false) return abortConnection(socket, 401);
	    } else {
	      protocol = protocol[0];
	    }
	
	    //
	    // Optionally call external client verification handler.
	    //
	    if (this.options.verifyClient) {
	      const info = {
	        origin: req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
	        secure: !!(req.connection.authorized || req.connection.encrypted),
	        req
	      };
	
	      if (this.options.verifyClient.length === 2) {
	        this.options.verifyClient(info, (verified, code, message) => {
	          if (!verified) return abortConnection(socket, code || 401, message);
	
	          this.completeUpgrade(protocol, version, req, socket, head, cb);
	        });
	        return;
	      } else if (!this.options.verifyClient(info)) {
	        return abortConnection(socket, 401);
	      }
	    }
	
	    this.completeUpgrade(protocol, version, req, socket, head, cb);
	  }
	
	  /**
	   * Upgrade the connection to WebSocket.
	   *
	   * @param {String} protocol The chosen subprotocol
	   * @param {Number} version The WebSocket protocol version
	   * @param {http.IncomingMessage} req The request object
	   * @param {net.Socket} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Function} cb Callback
	   * @private
	   */
	  completeUpgrade (protocol, version, req, socket, head, cb) {
	    //
	    // Destroy the socket if the client has already sent a FIN packet.
	    //
	    if (!socket.readable || !socket.writable) return socket.destroy();
	
	    const key = crypto.createHash('sha1')
	      .update(req.headers['sec-websocket-key'] + constants.GUID, 'binary')
	      .digest('base64');
	
	    const headers = [
	      'HTTP/1.1 101 Switching Protocols',
	      'Upgrade: websocket',
	      'Connection: Upgrade',
	      `Sec-WebSocket-Accept: ${key}`
	    ];
	
	    if (protocol) headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
	
	    const offer = Extensions.parse(req.headers['sec-websocket-extensions']);
	    var extensions;
	
	    try {
	      extensions = acceptExtensions(this.options, offer);
	    } catch (err) {
	      return abortConnection(socket, 400);
	    }
	
	    const props = Object.keys(extensions);
	
	    if (props.length) {
	      const serverExtensions = props.reduce((obj, key) => {
	        obj[key] = [extensions[key].params];
	        return obj;
	      }, {});
	
	      headers.push(`Sec-WebSocket-Extensions: ${Extensions.format(serverExtensions)}`);
	    }
	
	    //
	    // Allow external modification/inspection of handshake headers.
	    //
	    this.emit('headers', headers, req);
	
	    socket.write(headers.concat('', '').join('\r\n'));
	
	    const client = new WebSocket([req, socket, head], null, {
	      maxPayload: this.options.maxPayload,
	      protocolVersion: version,
	      extensions,
	      protocol
	    });
	
	    if (this.clients) {
	      this.clients.add(client);
	      client.on('close', () => this.clients.delete(client));
	    }
	
	    socket.removeListener('error', socketError);
	    cb(client);
	  }
	}
	
	module.exports = WebSocketServer;
	
	/**
	 * Handle premature socket errors.
	 *
	 * @private
	 */
	function socketError () {
	  this.destroy();
	}
	
	/**
	 * Accept WebSocket extensions.
	 *
	 * @param {Object} options The `WebSocketServer` configuration options
	 * @param {Object} offer The parsed value of the `sec-websocket-extensions` header
	 * @return {Object} Accepted extensions
	 * @private
	 */
	function acceptExtensions (options, offer) {
	  const pmd = options.perMessageDeflate;
	  const extensions = {};
	
	  if (pmd && offer[PerMessageDeflate.extensionName]) {
	    const perMessageDeflate = new PerMessageDeflate(
	      pmd !== true ? pmd : {},
	      true,
	      options.maxPayload
	    );
	
	    perMessageDeflate.accept(offer[PerMessageDeflate.extensionName]);
	    extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
	  }
	
	  return extensions;
	}
	
	/**
	 * Close the connection when preconditions are not fulfilled.
	 *
	 * @param {net.Socket} socket The socket of the upgrade request
	 * @param {Number} code The HTTP response status code
	 * @param {String} [message] The HTTP response body
	 * @private
	 */
	function abortConnection (socket, code, message) {
	  if (socket.writable) {
	    message = message || http.STATUS_CODES[code];
	    socket.write(
	      `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` +
	      'Connection: close\r\n' +
	      'Content-type: text/html\r\n' +
	      `Content-Length: ${Buffer.byteLength(message)}\r\n` +
	      '\r\n' +
	      message
	    );
	  }
	
	  socket.removeListener('error', socketError);
	  socket.destroy();
	}


/***/ }),
/* 407 */
/***/ (function(module, exports) {

	
	var indexOf = [].indexOf;
	
	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(360);
	var Emitter = __webpack_require__(361);
	var toArray = __webpack_require__(409);
	var on = __webpack_require__(410);
	var bind = __webpack_require__(411);
	var debug = __webpack_require__(357)('socket.io-client:socket');
	var parseqs = __webpack_require__(384);
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = Socket;
	
	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */
	
	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};
	
	/**
	 * Shortcut to `Emitter#emit`.
	 */
	
	var emit = Emitter.prototype.emit;
	
	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */
	
	function Socket (io, nsp, opts) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (opts && opts.query) {
	    this.query = opts.query;
	  }
	  if (this.io.autoConnect) this.open();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */
	
	Socket.prototype.subEvents = function () {
	  if (this.subs) return;
	
	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};
	
	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */
	
	Socket.prototype.open =
	Socket.prototype.connect = function () {
	  if (this.connected) return this;
	
	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' === this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};
	
	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};
	
	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }
	
	  var args = toArray(arguments);
	  var packet = { type: parser.EVENT, data: args };
	
	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;
	
	  // event ack callback
	  if ('function' === typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }
	
	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }
	
	  delete this.flags;
	
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};
	
	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */
	
	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');
	
	  // write connect packet if necessary
	  if ('/' !== this.nsp) {
	    if (this.query) {
	      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
	      debug('sending connect packet with query %s', query);
	      this.packet({type: parser.CONNECT, query: query});
	    } else {
	      this.packet({type: parser.CONNECT});
	    }
	  }
	};
	
	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */
	
	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};
	
	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onpacket = function (packet) {
	  if (packet.nsp !== this.nsp) return;
	
	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;
	
	    case parser.EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.ACK:
	      this.onack(packet);
	      break;
	
	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;
	
	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;
	
	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};
	
	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);
	
	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }
	
	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};
	
	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */
	
	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);
	
	    self.packet({
	      type: parser.ACK,
	      id: id,
	      data: args
	    });
	  };
	};
	
	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' === typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};
	
	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */
	
	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};
	
	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */
	
	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];
	
	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};
	
	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */
	
	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};
	
	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */
	
	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }
	
	  this.io.destroy(this);
	};
	
	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.close =
	Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }
	
	  // remove socket from pool
	  this.destroy();
	
	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};
	
	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.compress = function (compress) {
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};


/***/ }),
/* 409 */
/***/ (function(module, exports) {

	module.exports = toArray
	
	function toArray(list, index) {
	    var array = []
	
	    index = index || 0
	
	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }
	
	    return array
	}


/***/ }),
/* 410 */
/***/ (function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = on;
	
	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */
	
	function on (obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function () {
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ }),
/* 411 */
/***/ (function(module, exports) {

	/**
	 * Slice reference.
	 */
	
	var slice = [].slice;
	
	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ }),
/* 412 */
/***/ (function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */
	
	module.exports = Backoff;
	
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};
	
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	
	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};
	
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};
	
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};
	
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	
	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};
	


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const assign = __webpack_require__(414)
	
	const fs = {}
	
	// Export graceful-fs:
	assign(fs, __webpack_require__(415))
	// Export extra methods:
	assign(fs, __webpack_require__(424))
	assign(fs, __webpack_require__(433))
	assign(fs, __webpack_require__(428))
	assign(fs, __webpack_require__(437))
	assign(fs, __webpack_require__(439))
	assign(fs, __webpack_require__(444))
	assign(fs, __webpack_require__(445))
	assign(fs, __webpack_require__(446))
	assign(fs, __webpack_require__(447))
	assign(fs, __webpack_require__(453))
	assign(fs, __webpack_require__(432))
	
	module.exports = fs


/***/ }),
/* 414 */
/***/ (function(module, exports) {

	'use strict'
	
	// simple mutable assign
	function assign () {
	  const args = [].slice.call(arguments).filter(i => i)
	  const dest = args.shift()
	  args.forEach(src => {
	    Object.keys(src).forEach(key => {
	      dest[key] = src[key]
	    })
	  })
	
	  return dest
	}
	
	module.exports = assign


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

	// This is adapted from https://github.com/normalize/mz
	// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors
	const u = __webpack_require__(416).fromCallback
	const fs = __webpack_require__(417)
	
	const api = [
	  'access',
	  'appendFile',
	  'chmod',
	  'chown',
	  'close',
	  'fchmod',
	  'fchown',
	  'fdatasync',
	  'fstat',
	  'fsync',
	  'ftruncate',
	  'futimes',
	  'lchown',
	  'link',
	  'lstat',
	  'mkdir',
	  'open',
	  'readFile',
	  'readdir',
	  'readlink',
	  'realpath',
	  'rename',
	  'rmdir',
	  'stat',
	  'symlink',
	  'truncate',
	  'unlink',
	  'utimes',
	  'writeFile'
	]
	// Add methods that are only in some Node.js versions
	// fs.copyFile was added in Node.js v8.5.0
	typeof fs.copyFile === 'function' && api.push('copyFile')
	// fs.mkdtemp() was added in Node.js v5.10.0
	typeof fs.mkdtemp === 'function' && api.push('mkdtemp')
	
	// Export all keys:
	Object.keys(fs).forEach(key => {
	  exports[key] = fs[key]
	})
	
	// Universalify async methods:
	api.forEach(method => {
	  exports[method] = u(fs[method])
	})
	
	// We differ from mz/fs in that we still ship the old, broken, fs.exists()
	// since we are a drop-in replacement for the native module
	exports.exists = function (filename, callback) {
	  if (typeof callback === 'function') {
	    return fs.exists(filename, callback)
	  }
	  return new Promise(resolve => {
	    return fs.exists(filename, resolve)
	  })
	}
	
	// fs.read() & fs.write need special treatment due to multiple callback args
	
	exports.read = function (fd, buffer, offset, length, position, callback) {
	  if (typeof callback === 'function') {
	    return fs.read(fd, buffer, offset, length, position, callback)
	  }
	  return new Promise((resolve, reject) => {
	    fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
	      if (err) return reject(err)
	      resolve({ bytesRead, buffer })
	    })
	  })
	}
	
	// Function signature can be
	// fs.write(fd, buffer[, offset[, length[, position]]], callback)
	// OR
	// fs.write(fd, string[, position[, encoding]], callback)
	// so we need to handle both cases
	exports.write = function (fd, buffer, a, b, c, callback) {
	  if (typeof arguments[arguments.length - 1] === 'function') {
	    return fs.write(fd, buffer, a, b, c, callback)
	  }
	
	  // Check for old, depricated fs.write(fd, string[, position[, encoding]], callback)
	  if (typeof buffer === 'string') {
	    return new Promise((resolve, reject) => {
	      fs.write(fd, buffer, a, b, (err, bytesWritten, buffer) => {
	        if (err) return reject(err)
	        resolve({ bytesWritten, buffer })
	      })
	    })
	  }
	
	  return new Promise((resolve, reject) => {
	    fs.write(fd, buffer, a, b, c, (err, bytesWritten, buffer) => {
	      if (err) return reject(err)
	      resolve({ bytesWritten, buffer })
	    })
	  })
	}


/***/ }),
/* 416 */
/***/ (function(module, exports) {

	'use strict'
	
	exports.fromCallback = function (fn) {
	  return Object.defineProperty(function () {
	    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments)
	    else {
	      return new Promise((resolve, reject) => {
	        arguments[arguments.length] = (err, res) => {
	          if (err) return reject(err)
	          resolve(res)
	        }
	        arguments.length++
	        fn.apply(this, arguments)
	      })
	    }
	  }, 'name', { value: fn.name })
	}
	
	exports.fromPromise = function (fn) {
	  return Object.defineProperty(function () {
	    const cb = arguments[arguments.length - 1]
	    if (typeof cb !== 'function') return fn.apply(this, arguments)
	    else fn.apply(this, arguments).then(r => cb(null, r), cb)
	  }, 'name', { value: fn.name })
	}


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(339)
	var polyfills = __webpack_require__(418)
	var legacy = __webpack_require__(421)
	var queue = []
	
	var util = __webpack_require__(336)
	
	function noop () {}
	
	var debug = noop
	if (util.debuglog)
	  debug = util.debuglog('gfs4')
	else if (/\bgfs4\b/i.test(({"NODE_ENV":"production"}).NODE_DEBUG || ''))
	  debug = function() {
	    var m = util.format.apply(util, arguments)
	    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ')
	    console.error(m)
	  }
	
	if (/\bgfs4\b/i.test(({"NODE_ENV":"production"}).NODE_DEBUG || '')) {
	  process.on('exit', function() {
	    debug(queue)
	    __webpack_require__(423).equal(queue.length, 0)
	  })
	}
	
	module.exports = patch(__webpack_require__(419))
	if (({"NODE_ENV":"production"}).TEST_GRACEFUL_FS_GLOBAL_PATCH) {
	  module.exports = patch(fs)
	}
	
	// Always patch fs.close/closeSync, because we want to
	// retry() whenever a close happens *anywhere* in the program.
	// This is essential when multiple graceful-fs instances are
	// in play at the same time.
	module.exports.close =
	fs.close = (function (fs$close) { return function (fd, cb) {
	  return fs$close.call(fs, fd, function (err) {
	    if (!err)
	      retry()
	
	    if (typeof cb === 'function')
	      cb.apply(this, arguments)
	  })
	}})(fs.close)
	
	module.exports.closeSync =
	fs.closeSync = (function (fs$closeSync) { return function (fd) {
	  // Note that graceful-fs also retries when fs.closeSync() fails.
	  // Looks like a bug to me, although it's probably a harmless one.
	  var rval = fs$closeSync.apply(fs, arguments)
	  retry()
	  return rval
	}})(fs.closeSync)
	
	function patch (fs) {
	  // Everything that references the open() function needs to be in here
	  polyfills(fs)
	  fs.gracefulify = patch
	  fs.FileReadStream = ReadStream;  // Legacy name.
	  fs.FileWriteStream = WriteStream;  // Legacy name.
	  fs.createReadStream = createReadStream
	  fs.createWriteStream = createWriteStream
	  var fs$readFile = fs.readFile
	  fs.readFile = readFile
	  function readFile (path, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null
	
	    return go$readFile(path, options, cb)
	
	    function go$readFile (path, options, cb) {
	      return fs$readFile(path, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$readFile, [path, options, cb]])
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments)
	          retry()
	        }
	      })
	    }
	  }
	
	  var fs$writeFile = fs.writeFile
	  fs.writeFile = writeFile
	  function writeFile (path, data, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null
	
	    return go$writeFile(path, data, options, cb)
	
	    function go$writeFile (path, data, options, cb) {
	      return fs$writeFile(path, data, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$writeFile, [path, data, options, cb]])
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments)
	          retry()
	        }
	      })
	    }
	  }
	
	  var fs$appendFile = fs.appendFile
	  if (fs$appendFile)
	    fs.appendFile = appendFile
	  function appendFile (path, data, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null
	
	    return go$appendFile(path, data, options, cb)
	
	    function go$appendFile (path, data, options, cb) {
	      return fs$appendFile(path, data, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$appendFile, [path, data, options, cb]])
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments)
	          retry()
	        }
	      })
	    }
	  }
	
	  var fs$readdir = fs.readdir
	  fs.readdir = readdir
	  function readdir (path, options, cb) {
	    var args = [path]
	    if (typeof options !== 'function') {
	      args.push(options)
	    } else {
	      cb = options
	    }
	    args.push(go$readdir$cb)
	
	    return go$readdir(args)
	
	    function go$readdir$cb (err, files) {
	      if (files && files.sort)
	        files.sort()
	
	      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	        enqueue([go$readdir, [args]])
	      else {
	        if (typeof cb === 'function')
	          cb.apply(this, arguments)
	        retry()
	      }
	    }
	  }
	
	  function go$readdir (args) {
	    return fs$readdir.apply(fs, args)
	  }
	
	  if (process.version.substr(0, 4) === 'v0.8') {
	    var legStreams = legacy(fs)
	    ReadStream = legStreams.ReadStream
	    WriteStream = legStreams.WriteStream
	  }
	
	  var fs$ReadStream = fs.ReadStream
	  ReadStream.prototype = Object.create(fs$ReadStream.prototype)
	  ReadStream.prototype.open = ReadStream$open
	
	  var fs$WriteStream = fs.WriteStream
	  WriteStream.prototype = Object.create(fs$WriteStream.prototype)
	  WriteStream.prototype.open = WriteStream$open
	
	  fs.ReadStream = ReadStream
	  fs.WriteStream = WriteStream
	
	  function ReadStream (path, options) {
	    if (this instanceof ReadStream)
	      return fs$ReadStream.apply(this, arguments), this
	    else
	      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
	  }
	
	  function ReadStream$open () {
	    var that = this
	    open(that.path, that.flags, that.mode, function (err, fd) {
	      if (err) {
	        if (that.autoClose)
	          that.destroy()
	
	        that.emit('error', err)
	      } else {
	        that.fd = fd
	        that.emit('open', fd)
	        that.read()
	      }
	    })
	  }
	
	  function WriteStream (path, options) {
	    if (this instanceof WriteStream)
	      return fs$WriteStream.apply(this, arguments), this
	    else
	      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
	  }
	
	  function WriteStream$open () {
	    var that = this
	    open(that.path, that.flags, that.mode, function (err, fd) {
	      if (err) {
	        that.destroy()
	        that.emit('error', err)
	      } else {
	        that.fd = fd
	        that.emit('open', fd)
	      }
	    })
	  }
	
	  function createReadStream (path, options) {
	    return new ReadStream(path, options)
	  }
	
	  function createWriteStream (path, options) {
	    return new WriteStream(path, options)
	  }
	
	  var fs$open = fs.open
	  fs.open = open
	  function open (path, flags, mode, cb) {
	    if (typeof mode === 'function')
	      cb = mode, mode = null
	
	    return go$open(path, flags, mode, cb)
	
	    function go$open (path, flags, mode, cb) {
	      return fs$open(path, flags, mode, function (err, fd) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$open, [path, flags, mode, cb]])
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments)
	          retry()
	        }
	      })
	    }
	  }
	
	  return fs
	}
	
	function enqueue (elem) {
	  debug('ENQUEUE', elem[0].name, elem[1])
	  queue.push(elem)
	}
	
	function retry () {
	  var elem = queue.shift()
	  if (elem) {
	    debug('RETRY', elem[0].name, elem[1])
	    elem[0].apply(null, elem[1])
	  }
	}


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(419)
	var constants = __webpack_require__(420)
	
	var origCwd = process.cwd
	var cwd = null
	
	var platform = ({"NODE_ENV":"production"}).GRACEFUL_FS_PLATFORM || process.platform
	
	process.cwd = function() {
	  if (!cwd)
	    cwd = origCwd.call(process)
	  return cwd
	}
	try {
	  process.cwd()
	} catch (er) {}
	
	var chdir = process.chdir
	process.chdir = function(d) {
	  cwd = null
	  chdir.call(process, d)
	}
	
	module.exports = patch
	
	function patch (fs) {
	  // (re-)implement some things that are known busted or missing.
	
	  // lchmod, broken prior to 0.6.2
	  // back-port the fix here.
	  if (constants.hasOwnProperty('O_SYMLINK') &&
	      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
	    patchLchmod(fs)
	  }
	
	  // lutimes implementation, or no-op
	  if (!fs.lutimes) {
	    patchLutimes(fs)
	  }
	
	  // https://github.com/isaacs/node-graceful-fs/issues/4
	  // Chown should not fail on einval or eperm if non-root.
	  // It should not fail on enosys ever, as this just indicates
	  // that a fs doesn't support the intended operation.
	
	  fs.chown = chownFix(fs.chown)
	  fs.fchown = chownFix(fs.fchown)
	  fs.lchown = chownFix(fs.lchown)
	
	  fs.chmod = chmodFix(fs.chmod)
	  fs.fchmod = chmodFix(fs.fchmod)
	  fs.lchmod = chmodFix(fs.lchmod)
	
	  fs.chownSync = chownFixSync(fs.chownSync)
	  fs.fchownSync = chownFixSync(fs.fchownSync)
	  fs.lchownSync = chownFixSync(fs.lchownSync)
	
	  fs.chmodSync = chmodFixSync(fs.chmodSync)
	  fs.fchmodSync = chmodFixSync(fs.fchmodSync)
	  fs.lchmodSync = chmodFixSync(fs.lchmodSync)
	
	  fs.stat = statFix(fs.stat)
	  fs.fstat = statFix(fs.fstat)
	  fs.lstat = statFix(fs.lstat)
	
	  fs.statSync = statFixSync(fs.statSync)
	  fs.fstatSync = statFixSync(fs.fstatSync)
	  fs.lstatSync = statFixSync(fs.lstatSync)
	
	  // if lchmod/lchown do not exist, then make them no-ops
	  if (!fs.lchmod) {
	    fs.lchmod = function (path, mode, cb) {
	      if (cb) process.nextTick(cb)
	    }
	    fs.lchmodSync = function () {}
	  }
	  if (!fs.lchown) {
	    fs.lchown = function (path, uid, gid, cb) {
	      if (cb) process.nextTick(cb)
	    }
	    fs.lchownSync = function () {}
	  }
	
	  // on Windows, A/V software can lock the directory, causing this
	  // to fail with an EACCES or EPERM if the directory contains newly
	  // created files.  Try again on failure, for up to 60 seconds.
	
	  // Set the timeout this long because some Windows Anti-Virus, such as Parity
	  // bit9, may lock files for up to a minute, causing npm package install
	  // failures. Also, take care to yield the scheduler. Windows scheduling gives
	  // CPU to a busy looping process, which can cause the program causing the lock
	  // contention to be starved of CPU by node, so the contention doesn't resolve.
	  if (platform === "win32") {
	    fs.rename = (function (fs$rename) { return function (from, to, cb) {
	      var start = Date.now()
	      var backoff = 0;
	      fs$rename(from, to, function CB (er) {
	        if (er
	            && (er.code === "EACCES" || er.code === "EPERM")
	            && Date.now() - start < 60000) {
	          setTimeout(function() {
	            fs.stat(to, function (stater, st) {
	              if (stater && stater.code === "ENOENT")
	                fs$rename(from, to, CB);
	              else
	                cb(er)
	            })
	          }, backoff)
	          if (backoff < 100)
	            backoff += 10;
	          return;
	        }
	        if (cb) cb(er)
	      })
	    }})(fs.rename)
	  }
	
	  // if read() returns EAGAIN, then just try it again.
	  fs.read = (function (fs$read) { return function (fd, buffer, offset, length, position, callback_) {
	    var callback
	    if (callback_ && typeof callback_ === 'function') {
	      var eagCounter = 0
	      callback = function (er, _, __) {
	        if (er && er.code === 'EAGAIN' && eagCounter < 10) {
	          eagCounter ++
	          return fs$read.call(fs, fd, buffer, offset, length, position, callback)
	        }
	        callback_.apply(this, arguments)
	      }
	    }
	    return fs$read.call(fs, fd, buffer, offset, length, position, callback)
	  }})(fs.read)
	
	  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
	    var eagCounter = 0
	    while (true) {
	      try {
	        return fs$readSync.call(fs, fd, buffer, offset, length, position)
	      } catch (er) {
	        if (er.code === 'EAGAIN' && eagCounter < 10) {
	          eagCounter ++
	          continue
	        }
	        throw er
	      }
	    }
	  }})(fs.readSync)
	}
	
	function patchLchmod (fs) {
	  fs.lchmod = function (path, mode, callback) {
	    fs.open( path
	           , constants.O_WRONLY | constants.O_SYMLINK
	           , mode
	           , function (err, fd) {
	      if (err) {
	        if (callback) callback(err)
	        return
	      }
	      // prefer to return the chmod error, if one occurs,
	      // but still try to close, and report closing errors if they occur.
	      fs.fchmod(fd, mode, function (err) {
	        fs.close(fd, function(err2) {
	          if (callback) callback(err || err2)
	        })
	      })
	    })
	  }
	
	  fs.lchmodSync = function (path, mode) {
	    var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)
	
	    // prefer to return the chmod error, if one occurs,
	    // but still try to close, and report closing errors if they occur.
	    var threw = true
	    var ret
	    try {
	      ret = fs.fchmodSync(fd, mode)
	      threw = false
	    } finally {
	      if (threw) {
	        try {
	          fs.closeSync(fd)
	        } catch (er) {}
	      } else {
	        fs.closeSync(fd)
	      }
	    }
	    return ret
	  }
	}
	
	function patchLutimes (fs) {
	  if (constants.hasOwnProperty("O_SYMLINK")) {
	    fs.lutimes = function (path, at, mt, cb) {
	      fs.open(path, constants.O_SYMLINK, function (er, fd) {
	        if (er) {
	          if (cb) cb(er)
	          return
	        }
	        fs.futimes(fd, at, mt, function (er) {
	          fs.close(fd, function (er2) {
	            if (cb) cb(er || er2)
	          })
	        })
	      })
	    }
	
	    fs.lutimesSync = function (path, at, mt) {
	      var fd = fs.openSync(path, constants.O_SYMLINK)
	      var ret
	      var threw = true
	      try {
	        ret = fs.futimesSync(fd, at, mt)
	        threw = false
	      } finally {
	        if (threw) {
	          try {
	            fs.closeSync(fd)
	          } catch (er) {}
	        } else {
	          fs.closeSync(fd)
	        }
	      }
	      return ret
	    }
	
	  } else {
	    fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb) }
	    fs.lutimesSync = function () {}
	  }
	}
	
	function chmodFix (orig) {
	  if (!orig) return orig
	  return function (target, mode, cb) {
	    return orig.call(fs, target, mode, function (er) {
	      if (chownErOk(er)) er = null
	      if (cb) cb.apply(this, arguments)
	    })
	  }
	}
	
	function chmodFixSync (orig) {
	  if (!orig) return orig
	  return function (target, mode) {
	    try {
	      return orig.call(fs, target, mode)
	    } catch (er) {
	      if (!chownErOk(er)) throw er
	    }
	  }
	}
	
	
	function chownFix (orig) {
	  if (!orig) return orig
	  return function (target, uid, gid, cb) {
	    return orig.call(fs, target, uid, gid, function (er) {
	      if (chownErOk(er)) er = null
	      if (cb) cb.apply(this, arguments)
	    })
	  }
	}
	
	function chownFixSync (orig) {
	  if (!orig) return orig
	  return function (target, uid, gid) {
	    try {
	      return orig.call(fs, target, uid, gid)
	    } catch (er) {
	      if (!chownErOk(er)) throw er
	    }
	  }
	}
	
	
	function statFix (orig) {
	  if (!orig) return orig
	  // Older versions of Node erroneously returned signed integers for
	  // uid + gid.
	  return function (target, cb) {
	    return orig.call(fs, target, function (er, stats) {
	      if (!stats) return cb.apply(this, arguments)
	      if (stats.uid < 0) stats.uid += 0x100000000
	      if (stats.gid < 0) stats.gid += 0x100000000
	      if (cb) cb.apply(this, arguments)
	    })
	  }
	}
	
	function statFixSync (orig) {
	  if (!orig) return orig
	  // Older versions of Node erroneously returned signed integers for
	  // uid + gid.
	  return function (target) {
	    var stats = orig.call(fs, target)
	    if (stats.uid < 0) stats.uid += 0x100000000
	    if (stats.gid < 0) stats.gid += 0x100000000
	    return stats;
	  }
	}
	
	// ENOSYS means that the fs doesn't support the op. Just ignore
	// that, because it doesn't matter.
	//
	// if there's no getuid, or if getuid() is something other
	// than 0, and the error is EINVAL or EPERM, then just ignore
	// it.
	//
	// This specific case is a silent failure in cp, install, tar,
	// and most other unix tools that manage permissions.
	//
	// When running as root, or if other types of errors are
	// encountered, then it's strict.
	function chownErOk (er) {
	  if (!er)
	    return true
	
	  if (er.code === "ENOSYS")
	    return true
	
	  var nonroot = !process.getuid || process.getuid() !== 0
	  if (nonroot) {
	    if (er.code === "EINVAL" || er.code === "EPERM")
	      return true
	  }
	
	  return false
	}


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	var fs = __webpack_require__(339)
	
	module.exports = clone(fs)
	
	function clone (obj) {
	  if (obj === null || typeof obj !== 'object')
	    return obj
	
	  if (obj instanceof Object)
	    var copy = { __proto__: obj.__proto__ }
	  else
	    var copy = Object.create(null)
	
	  Object.getOwnPropertyNames(obj).forEach(function (key) {
	    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key))
	  })
	
	  return copy
	}


/***/ }),
/* 420 */
/***/ (function(module, exports) {

	module.exports = require("constants");

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

	var Stream = __webpack_require__(422).Stream
	
	module.exports = legacy
	
	function legacy (fs) {
	  return {
	    ReadStream: ReadStream,
	    WriteStream: WriteStream
	  }
	
	  function ReadStream (path, options) {
	    if (!(this instanceof ReadStream)) return new ReadStream(path, options);
	
	    Stream.call(this);
	
	    var self = this;
	
	    this.path = path;
	    this.fd = null;
	    this.readable = true;
	    this.paused = false;
	
	    this.flags = 'r';
	    this.mode = 438; /*=0666*/
	    this.bufferSize = 64 * 1024;
	
	    options = options || {};
	
	    // Mixin options into this
	    var keys = Object.keys(options);
	    for (var index = 0, length = keys.length; index < length; index++) {
	      var key = keys[index];
	      this[key] = options[key];
	    }
	
	    if (this.encoding) this.setEncoding(this.encoding);
	
	    if (this.start !== undefined) {
	      if ('number' !== typeof this.start) {
	        throw TypeError('start must be a Number');
	      }
	      if (this.end === undefined) {
	        this.end = Infinity;
	      } else if ('number' !== typeof this.end) {
	        throw TypeError('end must be a Number');
	      }
	
	      if (this.start > this.end) {
	        throw new Error('start must be <= end');
	      }
	
	      this.pos = this.start;
	    }
	
	    if (this.fd !== null) {
	      process.nextTick(function() {
	        self._read();
	      });
	      return;
	    }
	
	    fs.open(this.path, this.flags, this.mode, function (err, fd) {
	      if (err) {
	        self.emit('error', err);
	        self.readable = false;
	        return;
	      }
	
	      self.fd = fd;
	      self.emit('open', fd);
	      self._read();
	    })
	  }
	
	  function WriteStream (path, options) {
	    if (!(this instanceof WriteStream)) return new WriteStream(path, options);
	
	    Stream.call(this);
	
	    this.path = path;
	    this.fd = null;
	    this.writable = true;
	
	    this.flags = 'w';
	    this.encoding = 'binary';
	    this.mode = 438; /*=0666*/
	    this.bytesWritten = 0;
	
	    options = options || {};
	
	    // Mixin options into this
	    var keys = Object.keys(options);
	    for (var index = 0, length = keys.length; index < length; index++) {
	      var key = keys[index];
	      this[key] = options[key];
	    }
	
	    if (this.start !== undefined) {
	      if ('number' !== typeof this.start) {
	        throw TypeError('start must be a Number');
	      }
	      if (this.start < 0) {
	        throw new Error('start must be >= zero');
	      }
	
	      this.pos = this.start;
	    }
	
	    this.busy = false;
	    this._queue = [];
	
	    if (this.fd === null) {
	      this._open = fs.open;
	      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
	      this.flush();
	    }
	  }
	}


/***/ }),
/* 422 */
/***/ (function(module, exports) {

	module.exports = require("stream");

/***/ }),
/* 423 */
/***/ (function(module, exports) {

	module.exports = require("assert");

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

	const u = __webpack_require__(416).fromCallback
	module.exports = {
	  copy: u(__webpack_require__(425))
	}


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	const path = __webpack_require__(341)
	const ncp = __webpack_require__(426)
	const mkdir = __webpack_require__(428)
	const pathExists = __webpack_require__(432).pathExists
	
	function copy (src, dest, options, callback) {
	  if (typeof options === 'function' && !callback) {
	    callback = options
	    options = {}
	  } else if (typeof options === 'function' || options instanceof RegExp) {
	    options = {filter: options}
	  }
	  callback = callback || function () {}
	  options = options || {}
	
	  // Warn about using preserveTimestamps on 32-bit node:
	  if (options.preserveTimestamps && process.arch === 'ia32') {
	    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
	    see https://github.com/jprichardson/node-fs-extra/issues/269`)
	  }
	
	  // don't allow src and dest to be the same
	  const basePath = process.cwd()
	  const currentPath = path.resolve(basePath, src)
	  const targetPath = path.resolve(basePath, dest)
	  if (currentPath === targetPath) return callback(new Error('Source and destination must not be the same.'))
	
	  fs.lstat(src, (err, stats) => {
	    if (err) return callback(err)
	
	    let dir = null
	    if (stats.isDirectory()) {
	      const parts = dest.split(path.sep)
	      parts.pop()
	      dir = parts.join(path.sep)
	    } else {
	      dir = path.dirname(dest)
	    }
	
	    pathExists(dir, (err, dirExists) => {
	      if (err) return callback(err)
	      if (dirExists) return ncp(src, dest, options, callback)
	      mkdir.mkdirs(dir, err => {
	        if (err) return callback(err)
	        ncp(src, dest, options, callback)
	      })
	    })
	  })
	}
	
	module.exports = copy


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

	// imported from ncp (this is temporary, will rewrite)
	
	var fs = __webpack_require__(417)
	var path = __webpack_require__(341)
	var utimes = __webpack_require__(427)
	
	function ncp (source, dest, options, callback) {
	  if (!callback) {
	    callback = options
	    options = {}
	  }
	
	  var basePath = process.cwd()
	  var currentPath = path.resolve(basePath, source)
	  var targetPath = path.resolve(basePath, dest)
	
	  var filter = options.filter
	  var transform = options.transform
	  var overwrite = options.overwrite
	  // If overwrite is undefined, use clobber, otherwise default to true:
	  if (overwrite === undefined) overwrite = options.clobber
	  if (overwrite === undefined) overwrite = true
	  var errorOnExist = options.errorOnExist
	  var dereference = options.dereference
	  var preserveTimestamps = options.preserveTimestamps === true
	
	  var started = 0
	  var finished = 0
	  var running = 0
	
	  var errored = false
	
	  startCopy(currentPath)
	
	  function startCopy (source) {
	    started++
	    if (filter) {
	      if (filter instanceof RegExp) {
	        console.warn('Warning: fs-extra: Passing a RegExp filter is deprecated, use a function')
	        if (!filter.test(source)) {
	          return doneOne(true)
	        }
	      } else if (typeof filter === 'function') {
	        if (!filter(source, dest)) {
	          return doneOne(true)
	        }
	      }
	    }
	    return getStats(source)
	  }
	
	  function getStats (source) {
	    var stat = dereference ? fs.stat : fs.lstat
	    running++
	    stat(source, function (err, stats) {
	      if (err) return onError(err)
	
	      // We need to get the mode from the stats object and preserve it.
	      var item = {
	        name: source,
	        mode: stats.mode,
	        mtime: stats.mtime, // modified time
	        atime: stats.atime, // access time
	        stats: stats // temporary
	      }
	
	      if (stats.isDirectory()) {
	        return onDir(item)
	      } else if (stats.isFile() || stats.isCharacterDevice() || stats.isBlockDevice()) {
	        return onFile(item)
	      } else if (stats.isSymbolicLink()) {
	        // Symlinks don't really need to know about the mode.
	        return onLink(source)
	      }
	    })
	  }
	
	  function onFile (file) {
	    var target = file.name.replace(currentPath, targetPath.replace('$', '$$$$')) // escapes '$' with '$$'
	    isWritable(target, function (writable) {
	      if (writable) {
	        copyFile(file, target)
	      } else {
	        if (overwrite) {
	          rmFile(target, function () {
	            copyFile(file, target)
	          })
	        } else if (errorOnExist) {
	          onError(new Error(target + ' already exists'))
	        } else {
	          doneOne()
	        }
	      }
	    })
	  }
	
	  function copyFile (file, target) {
	    var readStream = fs.createReadStream(file.name)
	    var writeStream = fs.createWriteStream(target, { mode: file.mode })
	
	    readStream.on('error', onError)
	    writeStream.on('error', onError)
	
	    if (transform) {
	      transform(readStream, writeStream, file)
	    } else {
	      writeStream.on('open', function () {
	        readStream.pipe(writeStream)
	      })
	    }
	
	    writeStream.once('close', function () {
	      fs.chmod(target, file.mode, function (err) {
	        if (err) return onError(err)
	        if (preserveTimestamps) {
	          utimes.utimesMillis(target, file.atime, file.mtime, function (err) {
	            if (err) return onError(err)
	            return doneOne()
	          })
	        } else {
	          doneOne()
	        }
	      })
	    })
	  }
	
	  function rmFile (file, done) {
	    fs.unlink(file, function (err) {
	      if (err) return onError(err)
	      return done()
	    })
	  }
	
	  function onDir (dir) {
	    var target = dir.name.replace(currentPath, targetPath.replace('$', '$$$$')) // escapes '$' with '$$'
	    isWritable(target, function (writable) {
	      if (writable) {
	        return mkDir(dir, target)
	      }
	      copyDir(dir.name)
	    })
	  }
	
	  function mkDir (dir, target) {
	    fs.mkdir(target, dir.mode, function (err) {
	      if (err) return onError(err)
	      // despite setting mode in fs.mkdir, doesn't seem to work
	      // so we set it here.
	      fs.chmod(target, dir.mode, function (err) {
	        if (err) return onError(err)
	        copyDir(dir.name)
	      })
	    })
	  }
	
	  function copyDir (dir) {
	    fs.readdir(dir, function (err, items) {
	      if (err) return onError(err)
	      items.forEach(function (item) {
	        startCopy(path.join(dir, item))
	      })
	      return doneOne()
	    })
	  }
	
	  function onLink (link) {
	    var target = link.replace(currentPath, targetPath)
	    fs.readlink(link, function (err, resolvedPath) {
	      if (err) return onError(err)
	      checkLink(resolvedPath, target)
	    })
	  }
	
	  function checkLink (resolvedPath, target) {
	    if (dereference) {
	      resolvedPath = path.resolve(basePath, resolvedPath)
	    }
	    isWritable(target, function (writable) {
	      if (writable) {
	        return makeLink(resolvedPath, target)
	      }
	      fs.readlink(target, function (err, targetDest) {
	        if (err) return onError(err)
	
	        if (dereference) {
	          targetDest = path.resolve(basePath, targetDest)
	        }
	        if (targetDest === resolvedPath) {
	          return doneOne()
	        }
	        return rmFile(target, function () {
	          makeLink(resolvedPath, target)
	        })
	      })
	    })
	  }
	
	  function makeLink (linkPath, target) {
	    fs.symlink(linkPath, target, function (err) {
	      if (err) return onError(err)
	      return doneOne()
	    })
	  }
	
	  function isWritable (path, done) {
	    fs.lstat(path, function (err) {
	      if (err) {
	        if (err.code === 'ENOENT') return done(true)
	        return done(false)
	      }
	      return done(false)
	    })
	  }
	
	  function onError (err) {
	    // ensure callback is defined & called only once:
	    if (!errored && callback !== undefined) {
	      errored = true
	      return callback(err)
	    }
	  }
	
	  function doneOne (skipped) {
	    if (!skipped) running--
	    finished++
	    if ((started === finished) && (running === 0)) {
	      if (callback !== undefined) {
	        return callback(null)
	      }
	    }
	  }
	}
	
	module.exports = ncp


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	const os = __webpack_require__(337)
	const path = __webpack_require__(341)
	
	// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
	function hasMillisResSync () {
	  let tmpfile = path.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2))
	  tmpfile = path.join(os.tmpdir(), tmpfile)
	
	  // 550 millis past UNIX epoch
	  const d = new Date(1435410243862)
	  fs.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141')
	  const fd = fs.openSync(tmpfile, 'r+')
	  fs.futimesSync(fd, d, d)
	  fs.closeSync(fd)
	  return fs.statSync(tmpfile).mtime > 1435410243000
	}
	
	function hasMillisRes (callback) {
	  let tmpfile = path.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2))
	  tmpfile = path.join(os.tmpdir(), tmpfile)
	
	  // 550 millis past UNIX epoch
	  const d = new Date(1435410243862)
	  fs.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', err => {
	    if (err) return callback(err)
	    fs.open(tmpfile, 'r+', (err, fd) => {
	      if (err) return callback(err)
	      fs.futimes(fd, d, d, err => {
	        if (err) return callback(err)
	        fs.close(fd, err => {
	          if (err) return callback(err)
	          fs.stat(tmpfile, (err, stats) => {
	            if (err) return callback(err)
	            callback(null, stats.mtime > 1435410243000)
	          })
	        })
	      })
	    })
	  })
	}
	
	function timeRemoveMillis (timestamp) {
	  if (typeof timestamp === 'number') {
	    return Math.floor(timestamp / 1000) * 1000
	  } else if (timestamp instanceof Date) {
	    return new Date(Math.floor(timestamp.getTime() / 1000) * 1000)
	  } else {
	    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type')
	  }
	}
	
	function utimesMillis (path, atime, mtime, callback) {
	  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
	  fs.open(path, 'r+', (err, fd) => {
	    if (err) return callback(err)
	    fs.futimes(fd, atime, mtime, futimesErr => {
	      fs.close(fd, closeErr => {
	        if (callback) callback(futimesErr || closeErr)
	      })
	    })
	  })
	}
	
	module.exports = {
	  hasMillisRes,
	  hasMillisResSync,
	  timeRemoveMillis,
	  utimesMillis
	}


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	const u = __webpack_require__(416).fromCallback
	const mkdirs = u(__webpack_require__(429))
	const mkdirsSync = __webpack_require__(431)
	
	module.exports = {
	  mkdirs: mkdirs,
	  mkdirsSync: mkdirsSync,
	  // alias
	  mkdirp: mkdirs,
	  mkdirpSync: mkdirsSync,
	  ensureDir: mkdirs,
	  ensureDirSync: mkdirsSync
	}


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	const path = __webpack_require__(341)
	const invalidWin32Path = __webpack_require__(430).invalidWin32Path
	
	const o777 = parseInt('0777', 8)
	
	function mkdirs (p, opts, callback, made) {
	  if (typeof opts === 'function') {
	    callback = opts
	    opts = {}
	  } else if (!opts || typeof opts !== 'object') {
	    opts = { mode: opts }
	  }
	
	  if (process.platform === 'win32' && invalidWin32Path(p)) {
	    const errInval = new Error(p + ' contains invalid WIN32 path characters.')
	    errInval.code = 'EINVAL'
	    return callback(errInval)
	  }
	
	  let mode = opts.mode
	  const xfs = opts.fs || fs
	
	  if (mode === undefined) {
	    mode = o777 & (~process.umask())
	  }
	  if (!made) made = null
	
	  callback = callback || function () {}
	  p = path.resolve(p)
	
	  xfs.mkdir(p, mode, er => {
	    if (!er) {
	      made = made || p
	      return callback(null, made)
	    }
	    switch (er.code) {
	      case 'ENOENT':
	        if (path.dirname(p) === p) return callback(er)
	        mkdirs(path.dirname(p), opts, (er, made) => {
	          if (er) callback(er, made)
	          else mkdirs(p, opts, callback, made)
	        })
	        break
	
	      // In the case of any other error, just see if there's a dir
	      // there already.  If so, then hooray!  If not, then something
	      // is borked.
	      default:
	        xfs.stat(p, (er2, stat) => {
	          // if the stat fails, then that's super weird.
	          // let the original error be the failure reason.
	          if (er2 || !stat.isDirectory()) callback(er, made)
	          else callback(null, made)
	        })
	        break
	    }
	  })
	}
	
	module.exports = mkdirs


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const path = __webpack_require__(341)
	
	// get drive on windows
	function getRootPath (p) {
	  p = path.normalize(path.resolve(p)).split(path.sep)
	  if (p.length > 0) return p[0]
	  return null
	}
	
	// http://stackoverflow.com/a/62888/10333 contains more accurate
	// TODO: expand to include the rest
	const INVALID_PATH_CHARS = /[<>:"|?*]/
	
	function invalidWin32Path (p) {
	  const rp = getRootPath(p)
	  p = p.replace(rp, '')
	  return INVALID_PATH_CHARS.test(p)
	}
	
	module.exports = {
	  getRootPath,
	  invalidWin32Path
	}


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	const path = __webpack_require__(341)
	const invalidWin32Path = __webpack_require__(430).invalidWin32Path
	
	const o777 = parseInt('0777', 8)
	
	function mkdirsSync (p, opts, made) {
	  if (!opts || typeof opts !== 'object') {
	    opts = { mode: opts }
	  }
	
	  let mode = opts.mode
	  const xfs = opts.fs || fs
	
	  if (process.platform === 'win32' && invalidWin32Path(p)) {
	    const errInval = new Error(p + ' contains invalid WIN32 path characters.')
	    errInval.code = 'EINVAL'
	    throw errInval
	  }
	
	  if (mode === undefined) {
	    mode = o777 & (~process.umask())
	  }
	  if (!made) made = null
	
	  p = path.resolve(p)
	
	  try {
	    xfs.mkdirSync(p, mode)
	    made = made || p
	  } catch (err0) {
	    switch (err0.code) {
	      case 'ENOENT':
	        if (path.dirname(p) === p) throw err0
	        made = mkdirsSync(path.dirname(p), opts, made)
	        mkdirsSync(p, opts, made)
	        break
	
	      // In the case of any other error, just see if there's a dir
	      // there already.  If so, then hooray!  If not, then something
	      // is borked.
	      default:
	        let stat
	        try {
	          stat = xfs.statSync(p)
	        } catch (err1) {
	          throw err0
	        }
	        if (!stat.isDirectory()) throw err0
	        break
	    }
	  }
	
	  return made
	}
	
	module.exports = mkdirsSync


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	const u = __webpack_require__(416).fromPromise
	const fs = __webpack_require__(415)
	
	function pathExists (path) {
	  return fs.access(path).then(() => true).catch(() => false)
	}
	
	module.exports = {
	  pathExists: u(pathExists),
	  pathExistsSync: fs.existsSync
	}


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  copySync: __webpack_require__(434)
	}


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	const path = __webpack_require__(341)
	const copyFileSync = __webpack_require__(435)
	const mkdir = __webpack_require__(428)
	
	function copySync (src, dest, options) {
	  if (typeof options === 'function' || options instanceof RegExp) {
	    options = {filter: options}
	  }
	
	  options = options || {}
	  options.recursive = !!options.recursive
	
	  // default to true for now
	  options.clobber = 'clobber' in options ? !!options.clobber : true
	  // overwrite falls back to clobber
	  options.overwrite = 'overwrite' in options ? !!options.overwrite : options.clobber
	  options.dereference = 'dereference' in options ? !!options.dereference : false
	  options.preserveTimestamps = 'preserveTimestamps' in options ? !!options.preserveTimestamps : false
	
	  options.filter = options.filter || function () { return true }
	
	  // Warn about using preserveTimestamps on 32-bit node:
	  if (options.preserveTimestamps && process.arch === 'ia32') {
	    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
	    see https://github.com/jprichardson/node-fs-extra/issues/269`)
	  }
	
	  const stats = (options.recursive && !options.dereference) ? fs.lstatSync(src) : fs.statSync(src)
	  const destFolder = path.dirname(dest)
	  const destFolderExists = fs.existsSync(destFolder)
	  let performCopy = false
	
	  if (options.filter instanceof RegExp) {
	    console.warn('Warning: fs-extra: Passing a RegExp filter is deprecated, use a function')
	    performCopy = options.filter.test(src)
	  } else if (typeof options.filter === 'function') performCopy = options.filter(src, dest)
	
	  if (stats.isFile() && performCopy) {
	    if (!destFolderExists) mkdir.mkdirsSync(destFolder)
	    copyFileSync(src, dest, {
	      overwrite: options.overwrite,
	      errorOnExist: options.errorOnExist,
	      preserveTimestamps: options.preserveTimestamps
	    })
	  } else if (stats.isDirectory() && performCopy) {
	    if (!fs.existsSync(dest)) mkdir.mkdirsSync(dest)
	    const contents = fs.readdirSync(src)
	    contents.forEach(content => {
	      const opts = options
	      opts.recursive = true
	      copySync(path.join(src, content), path.join(dest, content), opts)
	    })
	  } else if (options.recursive && stats.isSymbolicLink() && performCopy) {
	    const srcPath = fs.readlinkSync(src)
	    fs.symlinkSync(srcPath, dest)
	  }
	}
	
	module.exports = copySync


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	
	const BUF_LENGTH = 64 * 1024
	const _buff = __webpack_require__(436)(BUF_LENGTH)
	
	function copyFileSync (srcFile, destFile, options) {
	  const overwrite = options.overwrite
	  const errorOnExist = options.errorOnExist
	  const preserveTimestamps = options.preserveTimestamps
	
	  if (fs.existsSync(destFile)) {
	    if (overwrite) {
	      fs.unlinkSync(destFile)
	    } else if (errorOnExist) {
	      throw new Error(`${destFile} already exists`)
	    } else return
	  }
	
	  const fdr = fs.openSync(srcFile, 'r')
	  const stat = fs.fstatSync(fdr)
	  const fdw = fs.openSync(destFile, 'w', stat.mode)
	  let bytesRead = 1
	  let pos = 0
	
	  while (bytesRead > 0) {
	    bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos)
	    fs.writeSync(fdw, _buff, 0, bytesRead)
	    pos += bytesRead
	  }
	
	  if (preserveTimestamps) {
	    fs.futimesSync(fdw, stat.atime, stat.mtime)
	  }
	
	  fs.closeSync(fdr)
	  fs.closeSync(fdw)
	}
	
	module.exports = copyFileSync


/***/ }),
/* 436 */
/***/ (function(module, exports) {

	/* eslint-disable node/no-deprecated-api */
	module.exports = function (size) {
	  if (typeof Buffer.allocUnsafe === 'function') {
	    try {
	      return Buffer.allocUnsafe(size)
	    } catch (e) {
	      return new Buffer(size)
	    }
	  }
	  return new Buffer(size)
	}


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const u = __webpack_require__(416).fromCallback
	const rimraf = __webpack_require__(438)
	
	module.exports = {
	  remove: u(rimraf),
	  removeSync: rimraf.sync
	}


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	const path = __webpack_require__(341)
	const assert = __webpack_require__(423)
	
	const isWindows = (process.platform === 'win32')
	
	function defaults (options) {
	  const methods = [
	    'unlink',
	    'chmod',
	    'stat',
	    'lstat',
	    'rmdir',
	    'readdir'
	  ]
	  methods.forEach(m => {
	    options[m] = options[m] || fs[m]
	    m = m + 'Sync'
	    options[m] = options[m] || fs[m]
	  })
	
	  options.maxBusyTries = options.maxBusyTries || 3
	}
	
	function rimraf (p, options, cb) {
	  let busyTries = 0
	
	  if (typeof options === 'function') {
	    cb = options
	    options = {}
	  }
	
	  assert(p, 'rimraf: missing path')
	  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
	  assert.equal(typeof cb, 'function', 'rimraf: callback function required')
	  assert(options, 'rimraf: invalid options argument provided')
	  assert.equal(typeof options, 'object', 'rimraf: options should be object')
	
	  defaults(options)
	
	  rimraf_(p, options, function CB (er) {
	    if (er) {
	      if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') &&
	          busyTries < options.maxBusyTries) {
	        busyTries++
	        let time = busyTries * 100
	        // try again, with the same exact callback as this one.
	        return setTimeout(() => rimraf_(p, options, CB), time)
	      }
	
	      // already gone
	      if (er.code === 'ENOENT') er = null
	    }
	
	    cb(er)
	  })
	}
	
	// Two possible strategies.
	// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
	// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
	//
	// Both result in an extra syscall when you guess wrong.  However, there
	// are likely far more normal files in the world than directories.  This
	// is based on the assumption that a the average number of files per
	// directory is >= 1.
	//
	// If anyone ever complains about this, then I guess the strategy could
	// be made configurable somehow.  But until then, YAGNI.
	function rimraf_ (p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  // sunos lets the root user unlink directories, which is... weird.
	  // so we have to lstat here and make sure it's not a dir.
	  options.lstat(p, (er, st) => {
	    if (er && er.code === 'ENOENT') {
	      return cb(null)
	    }
	
	    // Windows can EPERM on stat.  Life is suffering.
	    if (er && er.code === 'EPERM' && isWindows) {
	      return fixWinEPERM(p, options, er, cb)
	    }
	
	    if (st && st.isDirectory()) {
	      return rmdir(p, options, er, cb)
	    }
	
	    options.unlink(p, er => {
	      if (er) {
	        if (er.code === 'ENOENT') {
	          return cb(null)
	        }
	        if (er.code === 'EPERM') {
	          return (isWindows)
	            ? fixWinEPERM(p, options, er, cb)
	            : rmdir(p, options, er, cb)
	        }
	        if (er.code === 'EISDIR') {
	          return rmdir(p, options, er, cb)
	        }
	      }
	      return cb(er)
	    })
	  })
	}
	
	function fixWinEPERM (p, options, er, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	  if (er) {
	    assert(er instanceof Error)
	  }
	
	  options.chmod(p, 666, er2 => {
	    if (er2) {
	      cb(er2.code === 'ENOENT' ? null : er)
	    } else {
	      options.stat(p, (er3, stats) => {
	        if (er3) {
	          cb(er3.code === 'ENOENT' ? null : er)
	        } else if (stats.isDirectory()) {
	          rmdir(p, options, er, cb)
	        } else {
	          options.unlink(p, cb)
	        }
	      })
	    }
	  })
	}
	
	function fixWinEPERMSync (p, options, er) {
	  let stats
	
	  assert(p)
	  assert(options)
	  if (er) {
	    assert(er instanceof Error)
	  }
	
	  try {
	    options.chmodSync(p, 666)
	  } catch (er2) {
	    if (er2.code === 'ENOENT') {
	      return
	    } else {
	      throw er
	    }
	  }
	
	  try {
	    stats = options.statSync(p)
	  } catch (er3) {
	    if (er3.code === 'ENOENT') {
	      return
	    } else {
	      throw er
	    }
	  }
	
	  if (stats.isDirectory()) {
	    rmdirSync(p, options, er)
	  } else {
	    options.unlinkSync(p)
	  }
	}
	
	function rmdir (p, options, originalEr, cb) {
	  assert(p)
	  assert(options)
	  if (originalEr) {
	    assert(originalEr instanceof Error)
	  }
	  assert(typeof cb === 'function')
	
	  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
	  // if we guessed wrong, and it's not a directory, then
	  // raise the original error.
	  options.rmdir(p, er => {
	    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
	      rmkids(p, options, cb)
	    } else if (er && er.code === 'ENOTDIR') {
	      cb(originalEr)
	    } else {
	      cb(er)
	    }
	  })
	}
	
	function rmkids (p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  options.readdir(p, (er, files) => {
	    if (er) return cb(er)
	
	    let n = files.length
	    let errState
	
	    if (n === 0) return options.rmdir(p, cb)
	
	    files.forEach(f => {
	      rimraf(path.join(p, f), options, er => {
	        if (errState) {
	          return
	        }
	        if (er) return cb(errState = er)
	        if (--n === 0) {
	          options.rmdir(p, cb)
	        }
	      })
	    })
	  })
	}
	
	// this looks simpler, and is strictly *faster*, but will
	// tie up the JavaScript thread and fail on excessively
	// deep directory trees.
	function rimrafSync (p, options) {
	  let st
	
	  options = options || {}
	  defaults(options)
	
	  assert(p, 'rimraf: missing path')
	  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
	  assert(options, 'rimraf: missing options')
	  assert.equal(typeof options, 'object', 'rimraf: options should be object')
	
	  try {
	    st = options.lstatSync(p)
	  } catch (er) {
	    if (er.code === 'ENOENT') {
	      return
	    }
	
	    // Windows can EPERM on stat.  Life is suffering.
	    if (er.code === 'EPERM' && isWindows) {
	      fixWinEPERMSync(p, options, er)
	    }
	  }
	
	  try {
	    // sunos lets the root user unlink directories, which is... weird.
	    if (st && st.isDirectory()) {
	      rmdirSync(p, options, null)
	    } else {
	      options.unlinkSync(p)
	    }
	  } catch (er) {
	    if (er.code === 'ENOENT') {
	      return
	    } else if (er.code === 'EPERM') {
	      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
	    } else if (er.code !== 'EISDIR') {
	      throw er
	    }
	    rmdirSync(p, options, er)
	  }
	}
	
	function rmdirSync (p, options, originalEr) {
	  assert(p)
	  assert(options)
	  if (originalEr) {
	    assert(originalEr instanceof Error)
	  }
	
	  try {
	    options.rmdirSync(p)
	  } catch (er) {
	    if (er.code === 'ENOTDIR') {
	      throw originalEr
	    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
	      rmkidsSync(p, options)
	    } else if (er.code !== 'ENOENT') {
	      throw er
	    }
	  }
	}
	
	function rmkidsSync (p, options) {
	  assert(p)
	  assert(options)
	  options.readdirSync(p).forEach(f => rimrafSync(path.join(p, f), options))
	
	  // We only end up here once we got ENOTEMPTY at least once, and
	  // at this point, we are guaranteed to have removed all the kids.
	  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
	  // try really hard to delete stuff on windows, because it has a
	  // PROFOUNDLY annoying habit of not closing handles promptly when
	  // files are deleted, resulting in spurious ENOTEMPTY errors.
	  const retries = isWindows ? 100 : 1
	  let i = 0
	  do {
	    let threw = true
	    try {
	      const ret = options.rmdirSync(p, options)
	      threw = false
	      return ret
	    } finally {
	      if (++i < retries && threw) continue // eslint-disable-line
	    }
	  } while (true)
	}
	
	module.exports = rimraf
	rimraf.sync = rimrafSync


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const u = __webpack_require__(416).fromCallback
	const jsonFile = __webpack_require__(440)
	
	jsonFile.outputJson = u(__webpack_require__(442))
	jsonFile.outputJsonSync = __webpack_require__(443)
	// aliases
	jsonFile.outputJSON = jsonFile.outputJson
	jsonFile.outputJSONSync = jsonFile.outputJsonSync
	jsonFile.writeJSON = jsonFile.writeJson
	jsonFile.writeJSONSync = jsonFile.writeJsonSync
	jsonFile.readJSON = jsonFile.readJson
	jsonFile.readJSONSync = jsonFile.readJsonSync
	
	module.exports = jsonFile


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const u = __webpack_require__(416).fromCallback
	const jsonFile = __webpack_require__(441)
	
	module.exports = {
	  // jsonfile exports
	  readJson: u(jsonFile.readFile),
	  readJsonSync: jsonFile.readFileSync,
	  writeJson: u(jsonFile.writeFile),
	  writeJsonSync: jsonFile.writeFileSync
	}


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

	var _fs
	try {
	  _fs = __webpack_require__(417)
	} catch (_) {
	  _fs = __webpack_require__(339)
	}
	
	function readFile (file, options, callback) {
	  if (callback == null) {
	    callback = options
	    options = {}
	  }
	
	  if (typeof options === 'string') {
	    options = {encoding: options}
	  }
	
	  options = options || {}
	  var fs = options.fs || _fs
	
	  var shouldThrow = true
	  if ('throws' in options) {
	    shouldThrow = options.throws
	  }
	
	  fs.readFile(file, options, function (err, data) {
	    if (err) return callback(err)
	
	    data = stripBom(data)
	
	    var obj
	    try {
	      obj = JSON.parse(data, options ? options.reviver : null)
	    } catch (err2) {
	      if (shouldThrow) {
	        err2.message = file + ': ' + err2.message
	        return callback(err2)
	      } else {
	        return callback(null, null)
	      }
	    }
	
	    callback(null, obj)
	  })
	}
	
	function readFileSync (file, options) {
	  options = options || {}
	  if (typeof options === 'string') {
	    options = {encoding: options}
	  }
	
	  var fs = options.fs || _fs
	
	  var shouldThrow = true
	  if ('throws' in options) {
	    shouldThrow = options.throws
	  }
	
	  try {
	    var content = fs.readFileSync(file, options)
	    content = stripBom(content)
	    return JSON.parse(content, options.reviver)
	  } catch (err) {
	    if (shouldThrow) {
	      err.message = file + ': ' + err.message
	      throw err
	    } else {
	      return null
	    }
	  }
	}
	
	function stringify (obj, options) {
	  var spaces
	  var EOL = '\n'
	  if (typeof options === 'object' && options !== null) {
	    if (options.spaces) {
	      spaces = options.spaces
	    }
	    if (options.EOL) {
	      EOL = options.EOL
	    }
	  }
	
	  var str = JSON.stringify(obj, options ? options.replacer : null, spaces)
	
	  return str.replace(/\n/g, EOL) + EOL
	}
	
	function writeFile (file, obj, options, callback) {
	  if (callback == null) {
	    callback = options
	    options = {}
	  }
	  options = options || {}
	  var fs = options.fs || _fs
	
	  var str = ''
	  try {
	    str = stringify(obj, options)
	  } catch (err) {
	    // Need to return whether a callback was passed or not
	    if (callback) callback(err, null)
	    return
	  }
	
	  fs.writeFile(file, str, options, callback)
	}
	
	function writeFileSync (file, obj, options) {
	  options = options || {}
	  var fs = options.fs || _fs
	
	  var str = stringify(obj, options)
	  // not sure if fs.writeFileSync returns anything, but just in case
	  return fs.writeFileSync(file, str, options)
	}
	
	function stripBom (content) {
	  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
	  if (Buffer.isBuffer(content)) content = content.toString('utf8')
	  content = content.replace(/^\uFEFF/, '')
	  return content
	}
	
	var jsonfile = {
	  readFile: readFile,
	  readFileSync: readFileSync,
	  writeFile: writeFile,
	  writeFileSync: writeFileSync
	}
	
	module.exports = jsonfile


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const path = __webpack_require__(341)
	const mkdir = __webpack_require__(428)
	const pathExists = __webpack_require__(432).pathExists
	const jsonFile = __webpack_require__(440)
	
	function outputJson (file, data, options, callback) {
	  if (typeof options === 'function') {
	    callback = options
	    options = {}
	  }
	
	  const dir = path.dirname(file)
	
	  pathExists(dir, (err, itDoes) => {
	    if (err) return callback(err)
	    if (itDoes) return jsonFile.writeJson(file, data, options, callback)
	
	    mkdir.mkdirs(dir, err => {
	      if (err) return callback(err)
	      jsonFile.writeJson(file, data, options, callback)
	    })
	  })
	}
	
	module.exports = outputJson


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	const path = __webpack_require__(341)
	const mkdir = __webpack_require__(428)
	const jsonFile = __webpack_require__(440)
	
	function outputJsonSync (file, data, options) {
	  const dir = path.dirname(file)
	
	  if (!fs.existsSync(dir)) {
	    mkdir.mkdirsSync(dir)
	  }
	
	  jsonFile.writeJsonSync(file, data, options)
	}
	
	module.exports = outputJsonSync


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	// most of this code was written by Andrew Kelley
	// licensed under the BSD license: see
	// https://github.com/andrewrk/node-mv/blob/master/package.json
	
	// this needs a cleanup
	
	const u = __webpack_require__(416).fromCallback
	const fs = __webpack_require__(417)
	const ncp = __webpack_require__(426)
	const path = __webpack_require__(341)
	const remove = __webpack_require__(437).remove
	const mkdirp = __webpack_require__(428).mkdirs
	
	function move (src, dest, options, callback) {
	  if (typeof options === 'function') {
	    callback = options
	    options = {}
	  }
	
	  const overwrite = options.overwrite || options.clobber || false
	
	  isSrcSubdir(src, dest, (err, itIs) => {
	    if (err) return callback(err)
	    if (itIs) return callback(new Error(`Cannot move '${src}' to a subdirectory of itself, '${dest}'.`))
	    mkdirp(path.dirname(dest), err => {
	      if (err) return callback(err)
	      doRename()
	    })
	  })
	
	  function doRename () {
	    if (path.resolve(src) === path.resolve(dest)) {
	      fs.access(src, callback)
	    } else if (overwrite) {
	      fs.rename(src, dest, err => {
	        if (!err) return callback()
	
	        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST') {
	          remove(dest, err => {
	            if (err) return callback(err)
	            options.overwrite = false // just overwriteed it, no need to do it again
	            move(src, dest, options, callback)
	          })
	          return
	        }
	
	        // weird Windows shit
	        if (err.code === 'EPERM') {
	          setTimeout(() => {
	            remove(dest, err => {
	              if (err) return callback(err)
	              options.overwrite = false
	              move(src, dest, options, callback)
	            })
	          }, 200)
	          return
	        }
	
	        if (err.code !== 'EXDEV') return callback(err)
	        moveAcrossDevice(src, dest, overwrite, callback)
	      })
	    } else {
	      fs.link(src, dest, err => {
	        if (err) {
	          if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
	            return moveAcrossDevice(src, dest, overwrite, callback)
	          }
	          return callback(err)
	        }
	        return fs.unlink(src, callback)
	      })
	    }
	  }
	}
	
	function moveAcrossDevice (src, dest, overwrite, callback) {
	  fs.stat(src, (err, stat) => {
	    if (err) return callback(err)
	
	    if (stat.isDirectory()) {
	      moveDirAcrossDevice(src, dest, overwrite, callback)
	    } else {
	      moveFileAcrossDevice(src, dest, overwrite, callback)
	    }
	  })
	}
	
	function moveFileAcrossDevice (src, dest, overwrite, callback) {
	  const flags = overwrite ? 'w' : 'wx'
	  const ins = fs.createReadStream(src)
	  const outs = fs.createWriteStream(dest, { flags })
	
	  ins.on('error', err => {
	    ins.destroy()
	    outs.destroy()
	    outs.removeListener('close', onClose)
	
	    // may want to create a directory but `out` line above
	    // creates an empty file for us: See #108
	    // don't care about error here
	    fs.unlink(dest, () => {
	      // note: `err` here is from the input stream errror
	      if (err.code === 'EISDIR' || err.code === 'EPERM') {
	        moveDirAcrossDevice(src, dest, overwrite, callback)
	      } else {
	        callback(err)
	      }
	    })
	  })
	
	  outs.on('error', err => {
	    ins.destroy()
	    outs.destroy()
	    outs.removeListener('close', onClose)
	    callback(err)
	  })
	
	  outs.once('close', onClose)
	  ins.pipe(outs)
	
	  function onClose () {
	    fs.unlink(src, callback)
	  }
	}
	
	function moveDirAcrossDevice (src, dest, overwrite, callback) {
	  const options = {
	    overwrite: false
	  }
	
	  if (overwrite) {
	    remove(dest, err => {
	      if (err) return callback(err)
	      startNcp()
	    })
	  } else {
	    startNcp()
	  }
	
	  function startNcp () {
	    ncp(src, dest, options, err => {
	      if (err) return callback(err)
	      remove(src, callback)
	    })
	  }
	}
	
	// return true if dest is a subdir of src, otherwise false.
	// extract dest base dir and check if that is the same as src basename
	function isSrcSubdir (src, dest, cb) {
	  fs.stat(src, (err, st) => {
	    if (err) return cb(err)
	    if (st.isDirectory()) {
	      const baseDir = dest.split(path.dirname(src) + path.sep)[1]
	      if (baseDir) {
	        const destBasename = baseDir.split(path.sep)[0]
	        if (destBasename) return cb(null, src !== dest && dest.indexOf(src) > -1 && destBasename === path.basename(src))
	        return cb(null, false)
	      }
	      return cb(null, false)
	    }
	    return cb(null, false)
	  })
	}
	
	module.exports = {
	  move: u(move)
	}


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	const path = __webpack_require__(341)
	const copySync = __webpack_require__(433).copySync
	const removeSync = __webpack_require__(437).removeSync
	const mkdirpSync = __webpack_require__(428).mkdirsSync
	const buffer = __webpack_require__(436)
	
	function moveSync (src, dest, options) {
	  options = options || {}
	  const overwrite = options.overwrite || options.clobber || false
	
	  src = path.resolve(src)
	  dest = path.resolve(dest)
	
	  if (src === dest) return fs.accessSync(src)
	
	  if (isSrcSubdir(src, dest)) throw new Error(`Cannot move '${src}' into itself '${dest}'.`)
	
	  mkdirpSync(path.dirname(dest))
	  tryRenameSync()
	
	  function tryRenameSync () {
	    if (overwrite) {
	      try {
	        return fs.renameSync(src, dest)
	      } catch (err) {
	        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST' || err.code === 'EPERM') {
	          removeSync(dest)
	          options.overwrite = false // just overwriteed it, no need to do it again
	          return moveSync(src, dest, options)
	        }
	
	        if (err.code !== 'EXDEV') throw err
	        return moveSyncAcrossDevice(src, dest, overwrite)
	      }
	    } else {
	      try {
	        fs.linkSync(src, dest)
	        return fs.unlinkSync(src)
	      } catch (err) {
	        if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
	          return moveSyncAcrossDevice(src, dest, overwrite)
	        }
	        throw err
	      }
	    }
	  }
	}
	
	function moveSyncAcrossDevice (src, dest, overwrite) {
	  const stat = fs.statSync(src)
	
	  if (stat.isDirectory()) {
	    return moveDirSyncAcrossDevice(src, dest, overwrite)
	  } else {
	    return moveFileSyncAcrossDevice(src, dest, overwrite)
	  }
	}
	
	function moveFileSyncAcrossDevice (src, dest, overwrite) {
	  const BUF_LENGTH = 64 * 1024
	  const _buff = buffer(BUF_LENGTH)
	
	  const flags = overwrite ? 'w' : 'wx'
	
	  const fdr = fs.openSync(src, 'r')
	  const stat = fs.fstatSync(fdr)
	  const fdw = fs.openSync(dest, flags, stat.mode)
	  let bytesRead = 1
	  let pos = 0
	
	  while (bytesRead > 0) {
	    bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos)
	    fs.writeSync(fdw, _buff, 0, bytesRead)
	    pos += bytesRead
	  }
	
	  fs.closeSync(fdr)
	  fs.closeSync(fdw)
	  return fs.unlinkSync(src)
	}
	
	function moveDirSyncAcrossDevice (src, dest, overwrite) {
	  const options = {
	    overwrite: false
	  }
	
	  if (overwrite) {
	    removeSync(dest)
	    tryCopySync()
	  } else {
	    tryCopySync()
	  }
	
	  function tryCopySync () {
	    copySync(src, dest, options)
	    return removeSync(src)
	  }
	}
	
	// return true if dest is a subdir of src, otherwise false.
	// extract dest base dir and check if that is the same as src basename
	function isSrcSubdir (src, dest) {
	  try {
	    return fs.statSync(src).isDirectory() &&
	           src !== dest &&
	           dest.indexOf(src) > -1 &&
	           dest.split(path.dirname(src) + path.sep)[1].split(path.sep)[0] === path.basename(src)
	  } catch (e) {
	    return false
	  }
	}
	
	module.exports = {
	  moveSync
	}


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const u = __webpack_require__(416).fromCallback
	const fs = __webpack_require__(339)
	const path = __webpack_require__(341)
	const mkdir = __webpack_require__(428)
	const remove = __webpack_require__(437)
	
	const emptyDir = u(function emptyDir (dir, callback) {
	  callback = callback || function () {}
	  fs.readdir(dir, (err, items) => {
	    if (err) return mkdir.mkdirs(dir, callback)
	
	    items = items.map(item => path.join(dir, item))
	
	    deleteItem()
	
	    function deleteItem () {
	      const item = items.pop()
	      if (!item) return callback()
	      remove.remove(item, err => {
	        if (err) return callback(err)
	        deleteItem()
	      })
	    }
	  })
	})
	
	function emptyDirSync (dir) {
	  let items
	  try {
	    items = fs.readdirSync(dir)
	  } catch (err) {
	    return mkdir.mkdirsSync(dir)
	  }
	
	  items.forEach(item => {
	    item = path.join(dir, item)
	    remove.removeSync(item)
	  })
	}
	
	module.exports = {
	  emptyDirSync,
	  emptydirSync: emptyDirSync,
	  emptyDir,
	  emptydir: emptyDir
	}


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const file = __webpack_require__(448)
	const link = __webpack_require__(449)
	const symlink = __webpack_require__(450)
	
	module.exports = {
	  // file
	  createFile: file.createFile,
	  createFileSync: file.createFileSync,
	  ensureFile: file.createFile,
	  ensureFileSync: file.createFileSync,
	  // link
	  createLink: link.createLink,
	  createLinkSync: link.createLinkSync,
	  ensureLink: link.createLink,
	  ensureLinkSync: link.createLinkSync,
	  // symlink
	  createSymlink: symlink.createSymlink,
	  createSymlinkSync: symlink.createSymlinkSync,
	  ensureSymlink: symlink.createSymlink,
	  ensureSymlinkSync: symlink.createSymlinkSync
	}


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const u = __webpack_require__(416).fromCallback
	const path = __webpack_require__(341)
	const fs = __webpack_require__(417)
	const mkdir = __webpack_require__(428)
	const pathExists = __webpack_require__(432).pathExists
	
	function createFile (file, callback) {
	  function makeFile () {
	    fs.writeFile(file, '', err => {
	      if (err) return callback(err)
	      callback()
	    })
	  }
	
	  fs.stat(file, (err, stats) => { // eslint-disable-line handle-callback-err
	    if (!err && stats.isFile()) return callback()
	    const dir = path.dirname(file)
	    pathExists(dir, (err, dirExists) => {
	      if (err) return callback(err)
	      if (dirExists) return makeFile()
	      mkdir.mkdirs(dir, err => {
	        if (err) return callback(err)
	        makeFile()
	      })
	    })
	  })
	}
	
	function createFileSync (file) {
	  let stats
	  try {
	    stats = fs.statSync(file)
	  } catch (e) {}
	  if (stats && stats.isFile()) return
	
	  const dir = path.dirname(file)
	  if (!fs.existsSync(dir)) {
	    mkdir.mkdirsSync(dir)
	  }
	
	  fs.writeFileSync(file, '')
	}
	
	module.exports = {
	  createFile: u(createFile),
	  createFileSync
	}


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const u = __webpack_require__(416).fromCallback
	const path = __webpack_require__(341)
	const fs = __webpack_require__(417)
	const mkdir = __webpack_require__(428)
	const pathExists = __webpack_require__(432).pathExists
	
	function createLink (srcpath, dstpath, callback) {
	  function makeLink (srcpath, dstpath) {
	    fs.link(srcpath, dstpath, err => {
	      if (err) return callback(err)
	      callback(null)
	    })
	  }
	
	  pathExists(dstpath, (err, destinationExists) => {
	    if (err) return callback(err)
	    if (destinationExists) return callback(null)
	    fs.lstat(srcpath, (err, stat) => {
	      if (err) {
	        err.message = err.message.replace('lstat', 'ensureLink')
	        return callback(err)
	      }
	
	      const dir = path.dirname(dstpath)
	      pathExists(dir, (err, dirExists) => {
	        if (err) return callback(err)
	        if (dirExists) return makeLink(srcpath, dstpath)
	        mkdir.mkdirs(dir, err => {
	          if (err) return callback(err)
	          makeLink(srcpath, dstpath)
	        })
	      })
	    })
	  })
	}
	
	function createLinkSync (srcpath, dstpath, callback) {
	  const destinationExists = fs.existsSync(dstpath)
	  if (destinationExists) return undefined
	
	  try {
	    fs.lstatSync(srcpath)
	  } catch (err) {
	    err.message = err.message.replace('lstat', 'ensureLink')
	    throw err
	  }
	
	  const dir = path.dirname(dstpath)
	  const dirExists = fs.existsSync(dir)
	  if (dirExists) return fs.linkSync(srcpath, dstpath)
	  mkdir.mkdirsSync(dir)
	
	  return fs.linkSync(srcpath, dstpath)
	}
	
	module.exports = {
	  createLink: u(createLink),
	  createLinkSync
	}


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const u = __webpack_require__(416).fromCallback
	const path = __webpack_require__(341)
	const fs = __webpack_require__(417)
	const _mkdirs = __webpack_require__(428)
	const mkdirs = _mkdirs.mkdirs
	const mkdirsSync = _mkdirs.mkdirsSync
	
	const _symlinkPaths = __webpack_require__(451)
	const symlinkPaths = _symlinkPaths.symlinkPaths
	const symlinkPathsSync = _symlinkPaths.symlinkPathsSync
	
	const _symlinkType = __webpack_require__(452)
	const symlinkType = _symlinkType.symlinkType
	const symlinkTypeSync = _symlinkType.symlinkTypeSync
	
	const pathExists = __webpack_require__(432).pathExists
	
	function createSymlink (srcpath, dstpath, type, callback) {
	  callback = (typeof type === 'function') ? type : callback
	  type = (typeof type === 'function') ? false : type
	
	  pathExists(dstpath, (err, destinationExists) => {
	    if (err) return callback(err)
	    if (destinationExists) return callback(null)
	    symlinkPaths(srcpath, dstpath, (err, relative) => {
	      if (err) return callback(err)
	      srcpath = relative.toDst
	      symlinkType(relative.toCwd, type, (err, type) => {
	        if (err) return callback(err)
	        const dir = path.dirname(dstpath)
	        pathExists(dir, (err, dirExists) => {
	          if (err) return callback(err)
	          if (dirExists) return fs.symlink(srcpath, dstpath, type, callback)
	          mkdirs(dir, err => {
	            if (err) return callback(err)
	            fs.symlink(srcpath, dstpath, type, callback)
	          })
	        })
	      })
	    })
	  })
	}
	
	function createSymlinkSync (srcpath, dstpath, type, callback) {
	  callback = (typeof type === 'function') ? type : callback
	  type = (typeof type === 'function') ? false : type
	
	  const destinationExists = fs.existsSync(dstpath)
	  if (destinationExists) return undefined
	
	  const relative = symlinkPathsSync(srcpath, dstpath)
	  srcpath = relative.toDst
	  type = symlinkTypeSync(relative.toCwd, type)
	  const dir = path.dirname(dstpath)
	  const exists = fs.existsSync(dir)
	  if (exists) return fs.symlinkSync(srcpath, dstpath, type)
	  mkdirsSync(dir)
	  return fs.symlinkSync(srcpath, dstpath, type)
	}
	
	module.exports = {
	  createSymlink: u(createSymlink),
	  createSymlinkSync
	}


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const path = __webpack_require__(341)
	const fs = __webpack_require__(417)
	const pathExists = __webpack_require__(432).pathExists
	
	/**
	 * Function that returns two types of paths, one relative to symlink, and one
	 * relative to the current working directory. Checks if path is absolute or
	 * relative. If the path is relative, this function checks if the path is
	 * relative to symlink or relative to current working directory. This is an
	 * initiative to find a smarter `srcpath` to supply when building symlinks.
	 * This allows you to determine which path to use out of one of three possible
	 * types of source paths. The first is an absolute path. This is detected by
	 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
	 * see if it exists. If it does it's used, if not an error is returned
	 * (callback)/ thrown (sync). The other two options for `srcpath` are a
	 * relative url. By default Node's `fs.symlink` works by creating a symlink
	 * using `dstpath` and expects the `srcpath` to be relative to the newly
	 * created symlink. If you provide a `srcpath` that does not exist on the file
	 * system it results in a broken symlink. To minimize this, the function
	 * checks to see if the 'relative to symlink' source file exists, and if it
	 * does it will use it. If it does not, it checks if there's a file that
	 * exists that is relative to the current working directory, if does its used.
	 * This preserves the expectations of the original fs.symlink spec and adds
	 * the ability to pass in `relative to current working direcotry` paths.
	 */
	
	function symlinkPaths (srcpath, dstpath, callback) {
	  if (path.isAbsolute(srcpath)) {
	    return fs.lstat(srcpath, (err, stat) => {
	      if (err) {
	        err.message = err.message.replace('lstat', 'ensureSymlink')
	        return callback(err)
	      }
	      return callback(null, {
	        'toCwd': srcpath,
	        'toDst': srcpath
	      })
	    })
	  } else {
	    const dstdir = path.dirname(dstpath)
	    const relativeToDst = path.join(dstdir, srcpath)
	    return pathExists(relativeToDst, (err, exists) => {
	      if (err) return callback(err)
	      if (exists) {
	        return callback(null, {
	          'toCwd': relativeToDst,
	          'toDst': srcpath
	        })
	      } else {
	        return fs.lstat(srcpath, (err, stat) => {
	          if (err) {
	            err.message = err.message.replace('lstat', 'ensureSymlink')
	            return callback(err)
	          }
	          return callback(null, {
	            'toCwd': srcpath,
	            'toDst': path.relative(dstdir, srcpath)
	          })
	        })
	      }
	    })
	  }
	}
	
	function symlinkPathsSync (srcpath, dstpath) {
	  let exists
	  if (path.isAbsolute(srcpath)) {
	    exists = fs.existsSync(srcpath)
	    if (!exists) throw new Error('absolute srcpath does not exist')
	    return {
	      'toCwd': srcpath,
	      'toDst': srcpath
	    }
	  } else {
	    const dstdir = path.dirname(dstpath)
	    const relativeToDst = path.join(dstdir, srcpath)
	    exists = fs.existsSync(relativeToDst)
	    if (exists) {
	      return {
	        'toCwd': relativeToDst,
	        'toDst': srcpath
	      }
	    } else {
	      exists = fs.existsSync(srcpath)
	      if (!exists) throw new Error('relative srcpath does not exist')
	      return {
	        'toCwd': srcpath,
	        'toDst': path.relative(dstdir, srcpath)
	      }
	    }
	  }
	}
	
	module.exports = {
	  symlinkPaths,
	  symlinkPathsSync
	}


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const fs = __webpack_require__(417)
	
	function symlinkType (srcpath, type, callback) {
	  callback = (typeof type === 'function') ? type : callback
	  type = (typeof type === 'function') ? false : type
	  if (type) return callback(null, type)
	  fs.lstat(srcpath, (err, stats) => {
	    if (err) return callback(null, 'file')
	    type = (stats && stats.isDirectory()) ? 'dir' : 'file'
	    callback(null, type)
	  })
	}
	
	function symlinkTypeSync (srcpath, type) {
	  let stats
	
	  if (type) return type
	  try {
	    stats = fs.lstatSync(srcpath)
	  } catch (e) {
	    return 'file'
	  }
	  return (stats && stats.isDirectory()) ? 'dir' : 'file'
	}
	
	module.exports = {
	  symlinkType,
	  symlinkTypeSync
	}


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	const u = __webpack_require__(416).fromCallback
	const fs = __webpack_require__(417)
	const path = __webpack_require__(341)
	const mkdir = __webpack_require__(428)
	const pathExists = __webpack_require__(432).pathExists
	
	function outputFile (file, data, encoding, callback) {
	  if (typeof encoding === 'function') {
	    callback = encoding
	    encoding = 'utf8'
	  }
	
	  const dir = path.dirname(file)
	  pathExists(dir, (err, itDoes) => {
	    if (err) return callback(err)
	    if (itDoes) return fs.writeFile(file, data, encoding, callback)
	
	    mkdir.mkdirs(dir, err => {
	      if (err) return callback(err)
	
	      fs.writeFile(file, data, encoding, callback)
	    })
	  })
	}
	
	function outputFileSync (file, data, encoding) {
	  const dir = path.dirname(file)
	  if (fs.existsSync(dir)) {
	    return fs.writeFileSync.apply(fs, arguments)
	  }
	  mkdir.mkdirsSync(dir)
	  fs.writeFileSync.apply(fs, arguments)
	}
	
	module.exports = {
	  outputFile: u(outputFile),
	  outputFileSync
	}


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(455);


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

	var ChildProcess = __webpack_require__(372);
	var IS_WIN = process.platform === 'win32';
	var TableParser = __webpack_require__(456);
	/**
	 * End of line.
	 * Basically, the EOL should be:
	 * - windows: \r\n
	 * - *nix: \n
	 * But i'm trying to get every possibilities covered.
	 */
	var EOL = /(\r\n)|(\n\r)|\n|\r/;
	var SystemEOL = __webpack_require__(337).EOL;
	
	/**
	 * Execute child process
	 * @type {Function}
	 * @param {String[]} args
	 * @param {Function} callback
	 * @param {Object=null} callback.err
	 * @param {Object[]} callback.stdout
	 */
	
	var Exec = module.exports = exports = function (args, callback) {
	  var spawn = ChildProcess.spawn;
	
	  // on windows, if use ChildProcess.exec(`wmic process get`), the stdout will gives you nothing
	  // that's why I use `cmd` instead
	  if (IS_WIN) {
	
	    var CMD = spawn('cmd');
	    var stdout = '';
	    var stderr = null;
	
	    CMD.stdout.on('data', function (data) {
	      stdout += data.toString();
	    });
	
	    CMD.stderr.on('data', function (data) {
	
	      if (stderr === null) {
	        stderr = data.toString();
	      }
	      else {
	        stderr += data.toString();
	      }
	    });
	
	    CMD.on('exit', function () {
	
	      var beginRow;
	      stdout = stdout.split(EOL);
	
	      // Find the line index for the titles
	      stdout.forEach(function (out, index) {
	        if (out && typeof beginRow == 'undefined' && out.indexOf('CommandLine') === 0) {
	          beginRow = index;
	        }
	      });
	
	      // get rid of the start (copyright) and the end (current pwd)
	      stdout.splice(stdout.length - 1, 1);
	      stdout.splice(0, beginRow);
	
	      callback(stderr, stdout.join(SystemEOL) || false);
	    });
	
	    CMD.stdin.write('wmic process get ProcessId,ParentProcessId,CommandLine \n');
	    CMD.stdin.end();
	  }
	  else {
	    if (typeof args === 'string') {
	      args = args.split(/\s+/);
	    }
	    const child = spawn('ps', args);
	    var stdout = '';
	    var stderr = null;
	
	    child.stdout.on('data', function (data) {
	      stdout += data.toString();
	    });
	
	    child.stderr.on('data', function (data) {
	
	      if (stderr === null) {
	        stderr = data.toString();
	      }
	      else {
	        stderr += data.toString();
	      }
	    });
	
	    child.on('exit', function () {
	      if (stderr) {
	        return callback(stderr.toString());
	      }
	      else {
	        callback(null, stdout || false);
	      }
	    });
	  }
	};
	
	/**
	 * Query Process: Focus on pid & cmd
	 * @param query
	 * @param {String|String[]} query.pid
	 * @param {String} query.command RegExp String
	 * @param {String} query.arguments RegExp String
	 * @param {String|array} query.psargs
	 * @param {Function} callback
	 * @param {Object=null} callback.err
	 * @param {Object[]} callback.processList
	 * @return {Object}
	 */
	
	exports.lookup = function (query, callback) {
	
	  /**
	   * add 'lx' as default ps arguments, since the default ps output in linux like "ubuntu", wont include command arguments
	   */
	  var exeArgs = query.psargs || ['lx'];
	  var filter = {};
	  var idList;
	
	  // Lookup by PID
	  if (query.pid) {
	
	    if (Array.isArray(query.pid)) {
	      idList = query.pid;
	    }
	    else {
	      idList = [query.pid];
	    }
	
	    // Cast all PIDs as Strings
	    idList = idList.map(function (v) {
	      return String(v);
	    });
	
	  }
	
	
	  if (query.command) {
	    filter['command'] = new RegExp(query.command, 'i');
	  }
	
	  if (query.arguments) {
	    filter['arguments'] = new RegExp(query.arguments, 'i');
	  }
	
	  if (query.ppid) {
	    filter['ppid'] = new RegExp(query.ppid);
	  }
	
	  return Exec(exeArgs, function (err, output) {
	    if (err) {
	      return callback(err);
	    }
	    else {
	      var processList = parseGrid(output);
	      var resultList = [];
	
	      processList.forEach(function (p) {
	
	        var flt;
	        var type;
	        var result = true;
	
	        if (idList && idList.indexOf(String(p.pid)) < 0) {
	          return;
	        }
	
	        for (type in filter) {
	          flt = filter[type];
	          result = flt.test(p[type]) ? result : false;
	        }
	
	        if (result) {
	          resultList.push(p);
	        }
	      });
	
	      callback(null, resultList);
	    }
	  });
	};
	
	/**
	 * Kill process
	 * @param pid
	 * @param {Object|String} signal
	 * @param {String} signal.signal
	 * @param {number} signal.timeout
	 * @param next
	 */
	
	exports.kill = function( pid, signal, next ){
	  //opts are optional
	  if(arguments.length == 2 && typeof signal == 'function'){
	    next = signal;
	    signal = undefined;
	  }
	
	  var checkTimeoutSeconds = (signal && signal.timeout) || 30;
	
	  if (typeof signal === 'object') {
	    signal = signal.signal;
	  }
	
	  try {
	    process.kill(pid, signal);
	  } catch(e) {
	    return next && next(e);
	  }
	
	  var checkConfident = 0;
	  var checkTimeoutTimer = null;
	  var checkIsTimeout = false;
	
	  function checkKilled(finishCallback) {
	    exports.lookup({ pid: pid }, function(err, list) {
	      if (checkIsTimeout) return;
	
	      if (err) {
	        clearTimeout(checkTimeoutTimer);
	        finishCallback && finishCallback(err);
	      } else if(list.length > 0) {
	        checkConfident = (checkConfident - 1) || 0;
	        checkKilled(finishCallback);
	      } else {
	        checkConfident++;
	        if (checkConfident === 5) {
	          clearTimeout(checkTimeoutTimer);
	          finishCallback && finishCallback();
	        } else {
	          checkKilled(finishCallback);
	        }
	      }
	    });
	  }
	
	  next && checkKilled(next);
	
	  checkTimeoutTimer = next && setTimeout(function() {
	    checkIsTimeout = true;
	    next(new Error('Kill process timeout'));
	  }, checkTimeoutSeconds * 1000);
	};
	
	/**
	 * Parse the stdout into readable object.
	 * @param {String} output
	 */
	
	function parseGrid(output) {
	  if (!output) {
	    return [];
	  }
	  return formatOutput(TableParser.parse(output));
	}
	
	/**
	 * format the structure, extract pid, command, arguments, ppid
	 * @param data
	 * @return {Array}
	 */
	
	function formatOutput(data) {
	  var formatedData = [];
	  data.forEach(function (d) {
	    var pid = ( d.PID && d.PID[0] ) || ( d.ProcessId && d.ProcessId[0] ) || undefined;
	    var cmd = d.CMD || d.CommandLine || d.COMMAND || undefined;
	    var ppid = ( d.PPID && d.PPID[0] ) || ( d.ParentProcessId && d.ParentProcessId[0] ) || undefined;
	
	    if (pid && cmd) {
	      var command = cmd[0];
	      var args = '';
	
	      if (cmd.length > 1) {
	        args = cmd.slice(1);
	      }
	
	      formatedData.push({
	        pid: pid,
	        command: command,
	        arguments: args,
	        ppid: ppid
	      });
	    }
	  });
	
	  return formatedData;
	}


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__( 457 );

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 *
	 * 1, define the edge ( begin and end ) of every title field
	 * 2, parse all the lines except the title line, get all the connected-domains
	 * 3, group all the connected-domains vertically overlapped.
	 * 4, a domain group belongs to a title field if they vertically overlapped
	 * 5, calculate all the edge info through the group domain and title field relations.
	 */
	var ConnectedDomain = __webpack_require__(458);
	var EMPTY_EX = /\s/;
	
	/**
	 * The output sting of cmd to parse
	 * @param output
	 * @returns {Array}
	 */
	module.exports.parse = function (output) {
	
	  // Split into lines
	  // Basically, the EOL should be:
	  // - windows: \r\n
	  // - *nix: \n
	  // But i'm trying to get every possibilities covered.
	  var linesTmp = output.split(/(\r\n)|(\n\r)|\n|\r/);
	
	  // valid lines
	  var lines = [];
	  // title field info, mapped with filed name.
	  var titleInfo = {};
	  // the two dimensional array of the lines
	  var twoDimArray = [];
	
	  // get rid of all the empty lines.
	  linesTmp.forEach(function (line) {
	    if (line && line.trim()) {
	      lines.push(line);
	    }
	  });
	
	  // build title fields edge info
	  // build two dimensional array for Connected-Domain to parse.
	  lines.forEach(function (line, index) {
	
	    // Treat the first line as the title fields line
	    if (index == 0) {
	      var fields = line.split(/\s+/);
	
	      // record the beginning and ending for each field
	      fields.forEach(function (field, idx) {
	
	        if (field) {
	          var info = titleInfo[field] = {};
	          var indexBegin = line.indexOf(field);
	          var indexEnd = indexBegin + field.length;
	
	          if (idx == 0) {
	            info.titleBegin = 0;
	          }
	          else {
	            info.titleBegin = indexBegin;
	          }
	
	          if (idx == fields.length - 1) {
	            info.titleEnd = line.length - 1;
	          }
	          else {
	            info.titleEnd = indexEnd;
	          }
	        }
	      });
	    }
	    else {
	      twoDimArray[index - 1] = line.split('');
	    }
	  });
	
	  // In the connected-domain aspect of view, all the blanks are connected, and all the non-blanks are connected.
	  var connectedDomains = ConnectedDomain(twoDimArray, function (value) {
	    if (EMPTY_EX.test(value)) {
	      return -1;
	    }
	    else {
	      return 1;
	    }
	  }, true);
	
	  // all the connected domains grouped if they are vertically overlapped.
	  var valuesDomainsVerticalGroups = [];
	
	  // sore the domain list make 'x' in ascending order, it will prevent the situation that:
	  // 1, two domains are not overlapped, so two groups are created for them at first
	  // 2, another domain is found overlapped with both of the domains at the first step.
	  // 3, In this situation the three groups have to be merged, which is complicated to implement.
	  //
	  // If the list is sorted in this order, this situation can't happen, because:
	  // - 1, If two non-overlapped domains A, B ( the "x" value of A less than B ) are found first.
	  // - 2, Since the list is in 'x' ascending order, the 'x' values of the following domains must larger or equal to the "x" of B, which means they will never overlapped with domain A.
	  // - 3, So this situation can't happen.
	  connectedDomains.domains.sort(function (a, b) {
	    return a.bounding.x - b.bounding.x;
	  });
	
	  // Group domains vertically overlapped.
	  connectedDomains.domains.forEach(function (domain) {
	    // only handle un-empty domain
	    if (domain.identifier === 1) {
	      var overlapped = false;
	
	      // If overlapped
	      valuesDomainsVerticalGroups.forEach(function (group) {
	        var bounding = domain.bounding;
	        var left = bounding.x;
	        var right = bounding.x + bounding.w;
	
	        if (overlap(left, right, group.begin, group.end)) {
	
	          overlapped = true;
	          group.domains.push(domain);
	          group.begin = group.begin > left ? left : group.begin;
	          group.end = group.end < right ? right : group.end;
	        }
	      });
	
	      // If not overlapped with any group, then create a new group
	      if (!overlapped) {
	        valuesDomainsVerticalGroups.push({
	          begin: domain.bounding.x,
	          end: domain.bounding.x + domain.bounding.w,
	          domains: [domain]
	        });
	      }
	    }
	  });
	
	  // connect all the groups to the title fields
	  valuesDomainsVerticalGroups.forEach(function (group) {
	    var title = null;
	    var info = null;
	    var overlapped = false;
	
	    var minimunLeftDistance = null;
	    var nearestLeftTitle = null;
	    var distance = null;
	
	    for (title in titleInfo) {
	      info = titleInfo[title];
	
	      /**
	       * The calculation below is to find the nearest left title field to the group, in case no overlapped title field found.
	       */
	      if (group.begin > info.titleBegin) {
	        distance = group.begin - info.titleBegin;
	
	        if (!nearestLeftTitle || ( distance < minimunLeftDistance )) {
	          nearestLeftTitle = title;
	          minimunLeftDistance = distance;
	        }
	      }
	
	      if (overlap(group.begin, group.end, info.titleBegin, info.titleEnd)) {
	
	        overlapped = true;
	        info.titleBegin = info.titleBegin > group.begin ? group.begin : info.titleBegin;
	        info.titleEnd = info.titleEnd < group.end ? group.end : info.titleEnd;
	      }
	    }
	
	    // Groups not match any title field belongs to the nearest left title field
	    if (!overlapped && nearestLeftTitle) {
	      var nearestTitleField = titleInfo[nearestLeftTitle];
	      nearestTitleField.titleBegin = nearestTitleField.titleBegin > group.begin ? group.begin : nearestTitleField.titleBegin;
	      nearestTitleField.titleEnd = nearestTitleField.titleEnd < group.end ? group.end : nearestTitleField.titleEnd;
	
	    }
	  });
	
	  // The final result
	  var result = [];
	
	  // Since we have got all the title bounding edges, we can split all the lines into values now
	  lines.forEach(function (line, index) {
	    // skip the first line
	    if (index > 0) {
	
	      var lineItem = {};
	      var title = null;
	      var info = null;
	      var value = null;
	      for (title in titleInfo) {
	        info = titleInfo[title];
	        value = line.substring(info.titleBegin, info.titleEnd + 1);
	        lineItem[title] = splitValue(value.trim());
	      }
	
	      result.push(lineItem);
	    }
	  });
	
	  return result;
	};
	
	/**
	 * Test if two bounding overlapped vertically
	 * @param begin1
	 * @param end1
	 * @param begin2
	 * @param end2
	 * @returns {boolean}
	 */
	function overlap(begin1, end1, begin2, end2) {
	  return ( begin1 > begin2 && begin1 < end2 ) || // 2--1--2--1 or 2--1--1--2
	    ( end1 > begin2 && end1 < end2 ) ||     // 1--2--1--2 or 2--1--1--2
	    ( begin1 <= begin2 && end1 >= end2 );// 21--12 or 1--2--2--1
	}
	
	/**
	 * transform a string value into array. It's not just split(), but also to consider some chunk that wrapped with `"`, like below:
	 *      "C:\Program Files\Google\Chrome\Application\chrome.exe" --type=renderer --lang=zh-CN, `C:\Program Files\Google\Chrome\Application\chrome.exe` should be treated as a whole,
	 *      also, be careful don't be mislead by format like `--name="neekey"`, even more complicated: `--name="Neekey Ni"`
	 * so, `"C:\Program Files\Internet Explorer\iexplore.exe" --name="Jack Neekey"` should split into:
	 *  - C:\Program Files\Internet Explorer\iexplore.exe  // without `"`
	 *  - --name="Jack Neekey"                             // with `"`
	 */
	function splitValue(value) {
	
	  var match = value.match(/"/g);
	
	  // If only one " found, then just ignore it
	  if (!match || match.length == 1) {
	    return value.split(/\s+/);
	  }
	  else {
	    var result = [];
	    var chunk = null;
	    var ifInWrappedChunk = false;
	    var ifInPureWrappedChunk = false;
	    var quotaCount = 0;
	
	    // If the match length is a even, than nothing special, if a odd, ignore the last one.
	    var maxQuotaCount = match.length % 2 == 0 ? match.length : match.length - 1;
	
	    var previousItem = null;
	    var values = value.split('');
	
	    values.forEach(function (item, index) {
	
	      if (item !== ' ') {
	
	        if (item === '"') {
	          // quota chunk begin
	          if (ifInWrappedChunk === false && quotaCount <= maxQuotaCount) {
	            ifInWrappedChunk = true;
	            quotaCount++;
	
	            // pure quota chunk begin
	            if (previousItem === ' ' || previousItem === null) {
	              ifInPureWrappedChunk = true;
	              chunk = '';
	            }
	            // normal continue
	            else {
	              chunk += item;
	            }
	          }
	          // quota chunk end
	          else if (ifInWrappedChunk === true) {
	            ifInWrappedChunk = false;
	            quotaCount++;
	
	            // pure quota chunk end
	            if (ifInPureWrappedChunk === true) {
	              ifInPureWrappedChunk = false;
	              result.push(chunk);
	              chunk = null;
	            }
	            // normal continue
	            else {
	              chunk += item;
	            }
	          }
	        }
	        // normal begin
	        else if (ifInWrappedChunk === false && ( previousItem === ' ' || previousItem === null )) {
	          chunk = item;
	        }
	        // normal or quota chunk continue.
	        else {
	          chunk += item;
	        }
	      }
	      // quota chunk continue, in quota chunk, blank is valid.
	      else if (ifInWrappedChunk) {
	        chunk += item;
	      }
	      // if not in quota chunk, them a blank means an end. But make sure chunk is exist, cause that could be blanks at the beginning.
	      else if (chunk !== null) {
	        result.push(chunk);
	        chunk = null;
	      }
	
	      previousItem = item;
	
	      // If this is the last one, but chunk is not end
	      if (index == ( values.length - 1 ) && chunk !== null) {
	        result.push(chunk);
	        chunk = null;
	      }
	    });
	
	    return result;
	  }
	}


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__( 459 );

/***/ }),
/* 459 */
/***/ (function(module, exports) {

	/**
	 * calculate all the connected domains based on the given two-dimensional array
	 */
	
	/**
	 * @param {Array} tdArray
	 * @param {Function} indicator It receive the raw point data as the first parameter and decide what kind of domain the point belongs to, it should return a string as a domain identifier.
	 * @param {Boolean} hardlink If use hard link. Default to false.
	 * @return {Object} [{ bounding: { w: 12, h: 19, x: 0, y: 1 }, points: [ { x: 1, y: 2, point: {} } ], identifier: 'blue', domainId: 1 } ]
	 */
	module.exports = function( tdArray, indicator, hardlink ){
	
	    hardlink = hardlink || false;
	
	    if( !tdArray ){
	        throw new Error( 'tdArray must be provided' );
	    }
	
	    if( !indicator ){
	        throw new Error( 'indicator must be provided' );
	    }
	
	    // clone 一份数据，因为需要对饮用进行修改，方便执行
	    tdArray = JSON.parse( JSON.stringify( tdArray ) );
	
	    // Result
	    var domains = {};
	    var domainUUID = 0;
	    var pointsHash = {};
	
	    // 遍历数组，划分domain
	
	    tdArray.forEach(function( row, y ){
	
	        row.forEach(function( colItem, x ){
	
	            // get the current point identifier.
	            var identifier = indicator( colItem, x, y );
	
	            // get neighbours
	            // Except for Undefined every data type is valid.
	            var neighbours = [];
	
	            // top neighbour
	            if( tdArray[ y - 1 ] && tdArray[ y - 1 ][ x ] !== undefined ){
	                neighbours.push( pointsHash[ x + '_' + ( y - 1 ) ] );
	            }
	
	            // left neighbour
	            if( row[ x - 1 ] !== undefined ){
	                neighbours.push( pointsHash[ ( x - 1 ) + '_' + y ] );
	            }
	
	            // soft link will treat corner link as domain link.
	            if( !hardlink ){
	                // top left neighbour
	                if( tdArray[ y - 1 ] && tdArray[ y - 1 ][ x - 1 ] !== undefined ){
	                    neighbours.push( pointsHash[ ( x - 1 ) + '_' + ( y - 1 ) ] );
	                }
	
	                // top right neighbour
	                if( tdArray[ y - 1 ] && tdArray[ y - 1 ][ x + 1 ] !== undefined ){
	                    neighbours.push( pointsHash[ ( x + 1 ) + '_' + ( y - 1 ) ] );
	                }
	            }
	
	            if( neighbours.length ){
	                var matched = false;
	
	                neighbours.forEach(function( neighbour ){
	
	                    if( neighbour.identifier == identifier ){
	
	                        // If the neighbour is the first neighbour has the same identifier
	                        if( !matched ){
	                            addPointToDomain( colItem, x, y, neighbour.domainId );
	                            matched = true;
	                        }
	
	                        // If more than one neighbour matched, check if these neighbours belong to the same domain
	                        // If not, merge these domains since they connects to each other.
	                        else {
	                            var colItemPoint = pointsHash[ x + '_' + y ];
	                            if( neighbour.domainId != colItemPoint.domainId ){
	                                mergeDomains( neighbour.domainId, colItemPoint.domainId );
	                            }
	                        }
	                    }
	                });
	
	                if( !matched ){
	                    addNewDomain( colItem, x, y, identifier );
	                }
	            }
	            else {
	                addNewDomain( colItem, x, y, identifier );
	            }
	        });
	    });
	
	    // some summary
	    var result = {
	        domains: [],
	        totalDomains: 0,
	        groupByIdentifier: {},
	        totalIdentifiers: 0
	    };
	
	    var domainId = null;
	    var identifier = null;
	    var domain = null;
	    for( domainId in domains ){
	        domain = domains[ domainId ];
	        domain.bounding = calculateBounding( domain.points );
	        identifier = domain.identifier;
	
	        result.domains.push( domain );
	        result.totalDomains++;
	
	        if( !( identifier in result.groupByIdentifier ) ){
	            result.groupByIdentifier[ identifier ] = [];
	            result.totalIdentifiers++;
	        }
	
	        result.groupByIdentifier[ identifier ].push( domain );
	    }
	
	
	    function calculateBounding( points ){
	
	        var minX = null;
	        var minY = null;
	        var maxX = null;
	        var maxY = null;
	
	        points.forEach(function( point ){
	
	            if( minX === null || point.x < minX ){
	                minX = point.x;
	            }
	
	            if( minY === null || point.y < minY ){
	                minY = point.y;
	            }
	
	            if( maxX === null || point.x > maxX ){
	                maxX = point.x;
	            }
	
	            if( maxY === null || point.y > maxY ){
	                maxY = point.y;
	            }
	        });
	
	        var w = maxX - minX;
	        var h = maxY - minY;
	
	        return {
	            x: minX,
	            y: minY,
	            w: w,
	            h: h
	        };
	    }
	
	    /**
	     *
	     * @param point
	     * @param x
	     * @param y
	     * @param identifier
	     */
	    function addNewDomain( point, x, y, identifier ){
	
	        var newDomain = {
	            identifier: identifier,
	            domainId: ++domainUUID,
	            bounding: {},
	            points: []
	        };
	
	        var newPoint = {
	            value: point,
	            x: x,
	            y: y,
	            identifier: identifier,
	            domainId: newDomain.domainId
	        };
	
	        pointsHash[ x + '_' + y ] = {
	            value: point,
	            identifier: identifier,
	            domainId: newDomain.domainId
	        };
	
	        newDomain.points.push( newPoint );
	
	        domains[ newDomain.domainId ] = newDomain;
	    }
	
	    /**
	     * add a point to a existing domain, and attach properties domainId and identifier to point.
	     * @param point
	     * @param x
	     * @param y
	     * @param domainId
	     */
	    function addPointToDomain( point, x, y, domainId ){
	
	        var domain = domains[ domainId ];
	        var newPoint = {
	            value: point,
	            x: x,
	            y: y,
	            identifier: domain.identifier,
	            domainId: domainId
	        };
	
	        pointsHash[ x + '_' + y ] = {
	            value: point,
	            identifier: domain.identifier,
	            domainId: domainId
	        };
	
	        domain.points.push( newPoint );
	    }
	
	    /**
	     * 将 domainB 合并到 domainA
	     * @param domainAId
	     * @param domainBId
	     */
	    function mergeDomains( domainAId, domainBId ){
	
	        var domainA = domains[ domainAId ];
	        var domainB = domains[ domainBId ];
	
	        if( domainA.identifier == domainB.identifier ){
	            // 更新 domainB 的domainId
	
	            domainB.domainId = domainA.domainId;
	
	            domainB.points.forEach(function( point ){
	                point.domainId = domainA.domainId;
	                pointsHash[ point.x + '_' + point.y ].domainId = domainA.domainId;
	            });
	
	            domainA.points = domainA.points.concat( domainB.points );
	
	            // 删除domainB
	            delete domains[ domainBId ];
	        }
	    }
	
	    return result;
	};

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _events = __webpack_require__(461);
	
	Object.keys(_events).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _events[key];
	    }
	  });
	});
	
	var _events2 = __webpack_require__(463);
	
	Object.keys(_events2).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _events2[key];
	    }
	  });
	});
	
	var _events3 = __webpack_require__(464);
	
	Object.keys(_events3).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _events3[key];
	    }
	  });
	});
	
	var _events4 = __webpack_require__(465);
	
	Object.keys(_events4).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _events4[key];
	    }
	  });
	});
	
	var _events5 = __webpack_require__(466);
	
	Object.keys(_events5).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _events5[key];
	    }
	  });
	});

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.electronEvents = undefined;
	
	var _electronLog = __webpack_require__(330);
	
	var _electronLog2 = _interopRequireDefault(_electronLog);
	
	var _logging = __webpack_require__(462);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	    Electron Events handler
	*/
	
	var electronEvents = exports.electronEvents = function electronEvents(_ref) {
	    var app = _ref.app,
	        mainWindow = _ref.mainWindow,
	        api = _ref.api,
	        listener = _ref.listener,
	        emitter = _ref.emitter;
	
	    // api.removeAllListeners();
	
	    // Start logging
	    _logging.Logging.setLogging();
	
	    // Listen API emitter for loading or errors and forward to stores
	    api.on('loading', function (args) {
	        emitter.send('loading', args);
	    });
	
	    api.on('notifier', function (args) {
	        emitter.send('notifier', args);
	    });
	
	    // Close properly
	    var close = function close(event) {
	        event && event.preventDefault();
	        // On OS X it is common for applications and their menu bar
	        // to stay active until the user quits explicitly with Cmd + Q
	        _electronLog2.default.info('All windows closed. Shutting down');
	        emitter.send('willClose');
	    };
	
	    listener.on('readyToQuit', function () {
	        api.removeAllListeners();
	        setTimeout(function () {
	            return mainWindow.close();
	        }, 2000);
	    });
	
	    /*
	        Send bug report
	    */
	    listener.on('sendBugReport', function () {
	        _logging.Logging.sendBugReport();
	    });
	
	    /*
	        Forward loading from the app to the LoaderStore
	    */
	    listener.on('loading', function (event, arg) {
	        return event.sender.send('loading', arg);
	    });
	
	    /*
	        Forward notifier from the app to the LoaderStore
	    */
	    listener.on('notifier', function (event, arg) {
	        return event.sender.send('notifier', arg);
	    });
	
	    /*
	        Refresh window
	    */
	
	    listener.on('criticalRefresh', function () {
	        mainWindow.reload();
	    });
	
	    /*
	        App restart
	    */
	
	    listener.on('restart', function () {
	        app.relaunch();
	        app.exit();
	    });
	
	    /*
	        Toggle the fullscreen mode
	    */
	    listener.on('toggle-fullscreen-editor-window', function () {
	        mainWindow.setFullScreen(!mainWindow.isFullScreen());
	    });
	
	    /*
	        Minimize window
	    */
	
	    listener.on('minimize', function () {
	        mainWindow.minimize();
	    });
	
	    /*
	        Close window
	    */
	
	    listener.on('close', function (event) {
	        return close(event);
	    });
	    app.on('will-quit', function () {
	        return close();
	    });
	
	    app.on('window-all-closed', function () {
	        app.quit();
	    });
	};

/***/ }),
/* 462 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	    Logging
	*/
	
	var setLogging = function setLogging() {};
	var sendBugReport = function sendBugReport() {
	    return new Promise(function () {});
	};
	
	exports.default = { Logging: { setLogging: setLogging, sendBugReport: sendBugReport } };
	module.exports = exports["default"];

/***/ }),
/* 463 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	    Iguana Events handler
	*/
	
	var MMStates = {
	    initial: false,
	    open: 'open',
	    close: 'closed'
	};
	
	var mmsState = MMStates.initial;
	var checkMMInterval = void 0;
	var passphrase = void 0;
	
	var stopMMStatus = function stopMMStatus() {
	    mmsState = MMStates.initial;
	    checkMMInterval && clearInterval(checkMMInterval);
	};
	
	var shepherdEvents = exports.shepherdEvents = function shepherdEvents(_ref) {
	    var api = _ref.api,
	        emitter = _ref.emitter,
	        listener = _ref.listener;
	
	    listener.on('shepherd-command', function (event, arg) {
	        switch (arg.command) {
	            case 'ping':
	                break;
	            case 'login':
	                checkMMInterval = setInterval(function () {
	                    return api.checkMMStatus();
	                }, 1000);
	                emitter.send('loading', { type: 'add', key: 1 });
	                api.bootstrap({ passphrase: arg.passphrase });
	                break;
	            case 'logout':
	                api.logout();
	                break;
	            default:
	                break;
	        }
	    });
	
	    api.on('logoutCallback', function (data) {
	        if (!data.error) {
	            passphrase = '';
	            stopMMStatus();
	            emitter.send('resetUserInfo', data);
	        }
	    });
	
	    api.on('MMStatus', function (status) {
	        // WIP:count and trigger and error if too much attemps
	        if (status === MMStates.close && mmsState === MMStates.open) {
	            emitter.send('notifier', { error: 9 });
	        }
	
	        if (status === MMStates.close && mmsState !== MMStates.close) {
	            emitter.send('loading', { type: 'add', key: 2 });
	            mmsState = MMStates.close;
	        }
	    });
	
	    api.on('updateUserInfo', function (data) {
	        emitter.send('updateUserInfo', data);
	        emitter.send('loading', { type: 'delete', key: 1 });
	        emitter.send('loading', { type: 'delete', key: 2 });
	    });
	};

/***/ }),
/* 464 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	    portfolio Events handler
	*/
	
	var portfolioEvents = exports.portfolioEvents = function portfolioEvents(_ref) {
	    var api = _ref.api,
	        emitter = _ref.emitter,
	        listener = _ref.listener;
	
	    listener.on('enableCoin', function (e, params) {
	        emitter.send('loading', { type: 'add', key: 4 });
	        api.enableCoin(params);
	    });
	
	    listener.on('disableCoin', function (e, params) {
	        api.disableCoin(params);
	    });
	
	    listener.on('refreshPortfolio', function () {
	        api.fetchMarket();
	        api.fetchCoins();
	        api.fetchBots();
	    });
	
	    listener.on('withdraw', function (e, params) {
	        emitter.send('loading', { type: 'add', key: 6 });
	        api.withdraw(params);
	    });
	
	    listener.on('confirmWithdraw', function (e, params) {
	        api.sendrawtransaction(params);
	    });
	
	    api.on('setPortfolio', function (data) {
	        /* intercept callback from API and update the store */
	        emitter.send('setPortfolio', data);
	    });
	
	    api.on('coinEnabled', function () {
	        emitter.send('loading', { type: 'delete', key: 4 });
	    });
	
	    api.on('marketUpdate', function (data) {
	        return emitter.send('marketUpdate', data);
	    });
	
	    api.on('coinsList', function (coins) {
	        emitter.send('coinsList', coins);
	    });
	
	    api.on('confirmWithdraw', function (data) {
	        emitter.send('loading', { type: 'delete', key: 6 });
	        /* intercept callback from API and update the store */
	        emitter.send('confirmWithdraw', data);
	    });
	
	    api.on('sendrawtransaction', function (data) {
	        /* intercept callback from API and update the store */
	        emitter.send('sendrawtransaction', data);
	    });
	};

/***/ }),
/* 465 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	    Market Events handler
	*/
	
	var tradeEvents = exports.tradeEvents = function tradeEvents(_ref) {
	    var api = _ref.api,
	        emitter = _ref.emitter,
	        listener = _ref.listener;
	
	    listener.on('trade', function (e, params) {
	        emitter.send('loading', { type: 'add', key: 5 });
	        api.trade(params);
	    });
	
	    listener.on('toggleBot', function (e, params) {
	        api.toggleBot(params);
	    });
	
	    // update trademethod when coins are activated
	    api.on('updateTrade', function (params) {
	        emitter.send('loading', { type: 'delete', key: 4 });
	        emitter.send('updateTrade', params);
	    });
	
	    // cb trade
	    api.on('trade', function (params) {
	        emitter.send('loading', { type: 'delete', key: 5 });
	        emitter.send('growler', { key: 0 });
	        emitter.send('trade', params);
	    });
	
	    api.on('botStopped', function () {
	        emitter.send('growler', { key: 1 });
	    });
	
	    api.on('botResumed', function () {
	        emitter.send('growler', { key: 2 });
	    });
	
	    api.on('botstatus', function (result) {
	        return emitter.send('botstatus', result);
	    });
	};

/***/ }),
/* 466 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	    portfolio Events handler
	*/
	
	var orderbookEvents = exports.orderbookEvents = function orderbookEvents(_ref) {
	    var api = _ref.api,
	        emitter = _ref.emitter,
	        listener = _ref.listener;
	
	    listener.on('orderbook', function (e, params) {
	        return api.orderbook(params);
	    });
	    // update trademethod when coins are activated
	    api.on('orderbook', function (params) {
	        emitter.send('orderbook', params);
	    });
	};

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	const electron = __webpack_require__(327);
	const localShortcut = __webpack_require__(468);
	const isDev = __webpack_require__(472);
	
	const app = electron.app;
	const BrowserWindow = electron.BrowserWindow;
	const isMacOS = process.platform === 'darwin';
	
	function devTools(win) {
		win = win || BrowserWindow.getFocusedWindow();
	
		if (win) {
			win.toggleDevTools();
		}
	}
	
	function openDevTools(win, showDevTools) {
		win = win || BrowserWindow.getFocusedWindow();
	
		if (win) {
			const mode = showDevTools === true ? undefined : showDevTools;
			win.webContents.openDevTools({mode});
		}
	}
	
	function refresh(win) {
		win = win || BrowserWindow.getFocusedWindow();
	
		if (win) {
			win.webContents.reloadIgnoringCache();
		}
	}
	
	function inspectElements() {
		const win = BrowserWindow.getFocusedWindow();
		const inspect = () => {
			win.devToolsWebContents.executeJavaScript('DevToolsAPI.enterInspectElementMode()');
		};
	
		if (win) {
			if (win.webContents.isDevToolsOpened()) {
				inspect();
			} else {
				win.webContents.on('devtools-opened', inspect);
				win.openDevTools();
			}
		}
	}
	
	module.exports = opts => {
		opts = Object.assign({
			enabled: null,
			showDevTools: false
		}, opts);
	
		if (opts.enabled === false || (opts.enabled === null && !isDev)) {
			return;
		}
	
		app.on('browser-window-created', (e, win) => {
			if (opts.showDevTools) {
				openDevTools(win, opts.showDevTools);
			}
		});
	
		app.on('ready', () => {
			// Activate devtron for the user if they have it installed and it's not already added
			try {
				const devtronAlreadyAdded = BrowserWindow.getDevToolsExtensions &&
					{}.hasOwnProperty.call(BrowserWindow.getDevToolsExtensions(), 'devtron');
	
				if (!devtronAlreadyAdded) {
					BrowserWindow.addDevToolsExtension(__webpack_require__(473).path);
				}
			} catch (err) {}
	
			localShortcut.register('CmdOrCtrl+Shift+C', inspectElements);
			localShortcut.register(isMacOS ? 'Cmd+Alt+I' : 'Ctrl+Shift+I', devTools);
			localShortcut.register('F12', devTools);
	
			localShortcut.register('CmdOrCtrl+R', refresh);
			localShortcut.register('F5', refresh);
		});
	};
	
	module.exports.refresh = refresh;
	module.exports.devTools = devTools;
	module.exports.openDevTools = openDevTools;


/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	const {app, BrowserWindow} = __webpack_require__(327);
	const isAccelerator = __webpack_require__(469);
	const equals = __webpack_require__(470);
	const {toKeyEvent} = __webpack_require__(471);
	const _debug = __webpack_require__(357);
	
	const debug = _debug('electron-localshortcut');
	
	// A placeholder to register shortcuts
	// on any window of the app.
	const ANY_WINDOW = {};
	
	const windowsWithShortcuts = new WeakMap();
	
	const title = win => {
		if (win) {
			try {
				return win.getTitle();
			} catch (err) {
				return 'A destroyed window';
			}
		}
	
		return 'An falsy value';
	};
	
	function _checkAccelerator(accelerator) {
		if (!isAccelerator(accelerator)) {
			const w = {};
			Error.captureStackTrace(w);
			const msg = `
	WARNING: ${accelerator} is not a valid accelerator.
	
	${w.stack.split('\n').slice(4).join('\n')}
	`;
			console.error(msg);
		}
	}
	
	/**
	 * Disable all of the shortcuts registered on the BrowserWindow instance.
	 * Registered shortcuts no more works on the `window` instance, but the module
	 * keep a reference on them. You can reactivate them later by calling `enableAll`
	 * method on the same window instance.
	 * @param  {BrowserWindow} win BrowserWindow instance
	 * @return {Undefined}
	 */
	function disableAll(win) {
		debug(`Disabling all shortcuts on window ${title(win)}`);
		const wc = win.webContents;
		const shortcutsOfWindow = windowsWithShortcuts.get(wc);
	
		for (const shortcut of shortcutsOfWindow) {
			shortcut.enabled = false;
		}
	}
	
	/**
	 * Enable all of the shortcuts registered on the BrowserWindow instance that
	 * you had previously disabled calling `disableAll` method.
	 * @param  {BrowserWindow} win BrowserWindow instance
	 * @return {Undefined}
	 */
	function enableAll(win) {
		debug(`Enabling all shortcuts on window ${title(win)}`);
		const wc = win.webContents;
		const shortcutsOfWindow = windowsWithShortcuts.get(wc);
	
		for (const shortcut of shortcutsOfWindow) {
			shortcut.enabled = true;
		}
	}
	
	/**
	 * Unregisters all of the shortcuts registered on any focused BrowserWindow
	 * instance. This method does not unregister any shortcut you registered on
	 * a particular window instance.
	 * @param  {BrowserWindow} win BrowserWindow instance
	 * @return {Undefined}
	 */
	function unregisterAll(win) {
		debug(`Unregistering all shortcuts on window ${title(win)}`);
		const wc = win.webContents;
		const shortcutsOfWindow = windowsWithShortcuts.get(wc);
	
		// Remove listener from window
		shortcutsOfWindow.removeListener();
	
		windowsWithShortcuts.delete(wc);
	}
	
	function _normalizeEvent(input) {
		const normalizedEvent = {
			code: input.code,
			key: input.key
		};
	
		['alt', 'shift', 'meta'].forEach(prop => {
			if (typeof input[prop] !== 'undefined') {
				normalizedEvent[`${prop}Key`] = input[prop];
			}
		});
	
		if (typeof input.control !== 'undefined') {
			normalizedEvent.ctrlKey = input.control;
		}
	
		return normalizedEvent;
	}
	
	function _findShortcut(event, shortcutsOfWindow) {
		let i = 0;
		for (const shortcut of shortcutsOfWindow) {
			if (equals(shortcut.eventStamp, event)) {
				return i;
			}
			i++;
		}
		return -1;
	}
	
	const _onBeforeInput = shortcutsOfWindow => (e, input) => {
		if (input.type === 'keyUp') {
			return;
		}
	
		const event = _normalizeEvent(input);
	
		debug(`before-input-event: ${input} is translated to: ${event}`);
		for (const {eventStamp, callback} of shortcutsOfWindow) {
			if (equals(eventStamp, event)) {
				debug(`eventStamp: ${eventStamp} match`);
				callback();
				return;
			}
			debug(`eventStamp: ${eventStamp} no match`);
		}
	};
	
	/**
	* Registers the shortcut `accelerator`on the BrowserWindow instance.
	 * @param  {BrowserWindow} win - BrowserWindow instance to register.
	 * This argument could be omitted, in this case the function register
	 * the shortcut on all app windows.
	 * @param  {String} accelerator - the shortcut to register
	 * @param  {Function} callback    This function is called when the shortcut is pressed
	 * and the window is focused and not minimized.
	 * @return {Undefined}
	 */
	function register(win, accelerator, callback) {
		let wc;
		if (typeof callback === 'undefined') {
			wc = ANY_WINDOW;
			callback = accelerator;
			accelerator = win;
		} else {
			wc = win.webContents;
		}
	
		debug(`Registering callback for ${accelerator} on window ${title(win)}`);
		_checkAccelerator(accelerator);
	
		debug(`${accelerator} seems a valid shortcut sequence.`);
	
		let shortcutsOfWindow;
		if (windowsWithShortcuts.has(wc)) {
			debug(`Window has others shortcuts registered.`);
			shortcutsOfWindow = windowsWithShortcuts.get(wc);
		} else {
			debug(`This is the first shortcut of the window.`);
			shortcutsOfWindow = [];
			windowsWithShortcuts.set(wc, shortcutsOfWindow);
	
			if (wc === ANY_WINDOW) {
				const keyHandler = _onBeforeInput(shortcutsOfWindow);
				const enableAppShortcuts = (e, win) => {
					const wc = win.webContents;
					wc.on('before-input-event', keyHandler);
					wc.once(
						'closed',
						() => wc.removeListener('before-input-event', keyHandler)
					);
				};
	
				// Enable shortcut on current windows
				const windows = BrowserWindow.getAllWindows();
	
				windows.forEach(win => enableAppShortcuts(null, win));
	
				// Enable shortcut on future windows
				app.on(
					'browser-window-created',
					enableAppShortcuts
				);
	
				shortcutsOfWindow.removeListener = () => {
					const windows = BrowserWindow.getAllWindows();
					windows.forEach(win =>
						win.webContents.removeListener(
							'before-input-event',
							keyHandler
						)
					);
					app.removeListener(
						'browser-window-created',
						enableAppShortcuts
					);
				};
			} else {
				const keyHandler = _onBeforeInput(shortcutsOfWindow);
				wc.on('before-input-event', keyHandler);
	
				// Save a reference to allow remove of listener from elsewhere
				shortcutsOfWindow.removeListener = () => wc.removeListener('before-input-event', keyHandler);
				wc.once('closed', shortcutsOfWindow.removeListener);
			}
		}
	
		debug(`Adding shortcut to window set.`);
	
		const eventStamp = toKeyEvent(accelerator);
	
		shortcutsOfWindow.push({
			eventStamp,
			callback,
			enabled: true
		});
	
		debug(`Shortcut registered.`);
	}
	
	/**
	 * Unregisters the shortcut of `accelerator` registered on the BrowserWindow instance.
	 * @param  {BrowserWindow} win - BrowserWindow instance to unregister.
	 * This argument could be omitted, in this case the function unregister the shortcut
	 * on all app windows. If you registered the shortcut on a particular window instance, it will do nothing.
	 * @param  {String} accelerator - the shortcut to unregister
	 * @return {Undefined}
	 */
	function unregister(win, accelerator) {
		let wc;
		if (typeof accelerator === 'undefined') {
			wc = ANY_WINDOW;
			accelerator = win;
		} else {
			if (win.isDestroyed()) {
				debug(`Early return because window is destroyed.`);
				return;
			}
			wc = win.webContents;
		}
	
		debug(`Unregistering callback for ${accelerator} on window ${title(win)}`);
	
		_checkAccelerator(accelerator);
	
		debug(`${accelerator} seems a valid shortcut sequence.`);
	
		if (!windowsWithShortcuts.has(wc)) {
			debug(`Early return because window has never had shortcuts registered.`);
			return;
		}
	
		const shortcutsOfWindow = windowsWithShortcuts.get(wc);
	
		const eventStamp = toKeyEvent(accelerator);
		const shortcutIdx = _findShortcut(eventStamp, shortcutsOfWindow);
		if (shortcutIdx === -1) {
			return;
		}
	
		shortcutsOfWindow.splice(shortcutIdx, 1);
	
		// If the window has no more shortcuts,
		// we remove it early from the WeakMap
		// and unregistering the event listener
		if (shortcutsOfWindow.length === 0) {
			// Remove listener from window
			shortcutsOfWindow.removeListener();
	
			// Remove window from shrtcuts catalog
			windowsWithShortcuts.delete(wc);
		}
	}
	
	/**
	 * Returns `true` or `false` depending on whether the shortcut `accelerator`
	 * is registered on `window`.
	 * @param  {BrowserWindow} win - BrowserWindow instance to check. This argument
	 * could be omitted, in this case the function returns whether the shortcut
	 * `accelerator` is registered on all app windows. If you registered the
	 * shortcut on a particular window instance, it return false.
	 * @param  {String} accelerator - the shortcut to check
	 * @return {Boolean} - if the shortcut `accelerator` is registered on `window`.
	 */
	function isRegistered(win, accelerator) {
		_checkAccelerator(accelerator);
	}
	
	module.exports = {
		register,
		unregister,
		isRegistered,
		unregisterAll,
		enableAll,
		disableAll
	};


/***/ }),
/* 469 */
/***/ (function(module, exports) {

	"use strict";
	
	const modifiers = /^(Command|Cmd|Control|Ctrl|CommandOrControl|CmdOrCtrl|Alt|Option|AltGr|Shift|Super)$/;
	const keyCodes = /^([0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]']|F1*[1-9]|F10|F2[0-4]|Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen)$/;
	
	module.exports = function (str) {
		let parts = str.split("+");
		let keyFound = false;
	    return parts.every((val, index) => {
			const isKey = keyCodes.test(val);
			const isModifier = modifiers.test(val);
			if (isKey) {
				// Key must be unique
				if (keyFound) return false;
				keyFound = true;
			}
			// Key is required
			if (index === parts.length - 1 && !keyFound) return false;
	        return isKey || isModifier;
	    });
	};


/***/ }),
/* 470 */
/***/ (function(module, exports) {

	'use strict';
	
	function _lower(key) {
		if (typeof key !== 'string') {
			return key;
		}
		return key.toLowerCase();
	}
	
	function areEqual(ev1, ev2) {
		if (ev1 === ev2) {
			// Same object
			// console.log(`Events are same.`)
			return true;
		}
	
		for (const prop of ['altKey', 'ctrlKey', 'shiftKey', 'metaKey']) {
			const [value1, value2] = [ev1[prop], ev2[prop]];
	
			if (Boolean(value1) !== Boolean(value2)) {
				// One of the prop is different
				// console.log(`Comparing prop ${prop}: ${value1} ${value2}`);
				return false;
			}
		}
	
		if ((_lower(ev1.key) === _lower(ev2.key) && ev1.key !== undefined) ||
			(ev1.code === ev2.code && ev1.code !== undefined)) {
			// Events are equals
			return true;
		}
	
		// Key or code are differents
		// console.log(`key or code are differents. ${ev1.key} !== ${ev2.key} ${ev1.code} !== ${ev2.code}`);
	
		return false;
	}
	
	module.exports = areEqual;


/***/ }),
/* 471 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	const modifiers = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|Alt|Option|AltGr|Shift|Super)/i;
	const keyCodes = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i;
	
	function reduceModifier({accelerator, event}, modifier) {
		switch (modifier) {
			case 'command':
			case 'cmd': {
				if (event.metaKey) {
					throw new Error('Double `Command` modifier specified.');
				}
	
				return {
					event: Object.assign({}, event, {metaKey: true}),
					accelerator: accelerator.slice(modifier.length)
				};
			}
			case 'super': {
				if (event.metaKey) {
					throw new Error('Double `Super` modifier specified.');
				}
	
				return {
					event: Object.assign({}, event, {metaKey: true}),
					accelerator: accelerator.slice(modifier.length)
				};
			}
			case 'control':
			case 'ctrl': {
				if (event.ctrlKey) {
					throw new Error('Double `Control` modifier specified.');
				}
	
				return {
					event: Object.assign({}, event, {ctrlKey: true}),
					accelerator: accelerator.slice(modifier.length)
				};
			}
			case 'commandorcontrol':
			case 'cmdorctrl': {
				if (process.platform === 'darwin') {
					if (event.metaKey) {
						throw new Error('Double `Command` modifier specified.');
					}
	
					return {
						event: Object.assign({}, event, {metaKey: true}),
						accelerator: accelerator.slice(modifier.length)
					};
				}
	
				if (event.ctrlKey) {
					throw new Error('Double `Control` modifier specified.');
				}
	
				return {
					event: Object.assign({}, event, {ctrlKey: true}),
					accelerator: accelerator.slice(modifier.length)
				};
			}
			case 'option':
			case 'altgr':
			case 'alt': {
				if (event.altKey) {
					throw new Error('Double `Alt` modifier specified.');
				}
	
				return {
					event: Object.assign({}, event, {altKey: true}),
					accelerator: accelerator.slice(modifier.length)
				};
			}
			case 'shift': {
				if (event.shiftKey) {
					throw new Error('Double `Shift` modifier specified.');
				}
	
				return {
					event: Object.assign({}, event, {shiftKey: true}),
					accelerator: accelerator.slice(modifier.length)
				};
			}
	
			default:
				console.error(modifier);
		}
	}
	
	function reducePlus({accelerator, event}) {
		return {
			event,
			accelerator: accelerator.trim().slice(1)
		};
	}
	
	function reduceKey({accelerator, event}, key) {
		return {
			event: Object.assign({}, event, {key}),
			accelerator: accelerator.trim().slice(key.length)
		};
	}
	
	const domKeys = Object.assign(Object.create(null), {
		plus: 'Add',
		space: ' ',
		tab: 'Tab',
		backspace: 'Backspace',
		delete: 'Delete',
		insert: 'Insert',
		return: 'Return',
		enter: 'Return',
		up: 'ArrowUp',
		down: 'ArrowDown',
		left: 'ArrowLeft',
		right: 'ArrowRight',
		home: 'Home',
		end: 'End',
		pageup: 'PageUp',
		pagedown: 'PageDown',
		escape: 'Escape',
		esc: 'Escape',
		volumeup: 'AudioVolumeUp',
		volumedown: 'AudioVolumeDown',
		volumemute: 'AudioVolumeMute',
		medianexttrack: 'MediaTrackNext',
		mediaprevioustrack: 'MediaTrackPrevious',
		mediastop: 'MediaStop',
		mediaplaypause: 'MediaPlayPause',
		printscreen: 'PrintScreen'
	});
	
	// Add function keys
	for (let i = 1; i <= 24; i++) {
		domKeys[`f${i}`] = `F${i}`;
	}
	
	function reduceCode({accelerator, event}, {code, key}) {
		return {
			event: Object.assign({}, event, {key}, code ? {code} : null),
			accelerator: accelerator.trim().slice((key && key.length) || 0)
		};
	}
	
	/**
	 * This function transform an Electron Accelerator string into
	 * a DOM KeyboardEvent object.
	 *
	 * @param  {string} accelerator an Electron Accelerator string, e.g. `Ctrl+C` or `Shift+Space`.
	 * @return {object} a DOM KeyboardEvent object derivate from the `accelerator` argument.
	 */
	function toKeyEvent(accelerator) {
		let state = {accelerator, event: {}};
		while (state.accelerator !== '') {
			const modifierMatch = state.accelerator.match(modifiers);
			if (modifierMatch) {
				const modifier = modifierMatch[0].toLowerCase();
				state = reduceModifier(state, modifier);
			} else if (state.accelerator.trim()[0] === '+') {
				state = reducePlus(state);
			} else {
				const codeMatch = state.accelerator.match(keyCodes);
				if (codeMatch) {
					const code = codeMatch[0].toLowerCase();
					if (code in domKeys) {
						state = reduceCode(state, {
							code: domKeys[code],
							key: code
						});
					} else {
						state = reduceKey(state, code);
					}
				} else {
					throw new Error(`Unvalid accelerator: "${state.accelerator}"`);
				}
			}
		}
		return state.event;
	}
	
	function match(accelerator, keyEvent) {
		if (toKeyEvent(accelerator).code === keyEvent.code) {
			return true;
		}
		return false;
	}
	
	exports.reduceModifier = reduceModifier;
	exports.reducePlus = reducePlus;
	exports.reduceKey = reduceKey;
	exports.reduceCode = reduceCode;
	exports.toKeyEvent = toKeyEvent;
	exports.match = match;


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	const getFromEnv = parseInt(({"NODE_ENV":"production"}).ELECTRON_IS_DEV, 10) === 1;
	const isEnvSet = 'ELECTRON_IS_DEV' in ({"NODE_ENV":"production"});
	
	module.exports = isEnvSet ? getFromEnv : (process.defaultApp || /node_modules[\\/]electron[\\/]/.test(process.execPath));


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

	const electron = __webpack_require__(327)
	
	exports.install = () => {
	  if (process.type === 'renderer') {
	    console.log(`Installing Devtron from ${__dirname}`)
	    if (electron.remote.BrowserWindow.getDevToolsExtensions &&
	        electron.remote.BrowserWindow.getDevToolsExtensions().devtron) return true
	    return electron.remote.BrowserWindow.addDevToolsExtension(__dirname)
	  } else if (process.type === 'browser') {
	    console.log(`Installing Devtron from ${__dirname}`)
	    if (electron.BrowserWindow.getDevToolsExtensions &&
	        electron.BrowserWindow.getDevToolsExtensions().devtron) return true
	    return electron.BrowserWindow.addDevToolsExtension(__dirname)
	  } else {
	    throw new Error('Devtron can only be installed from an Electron process.')
	  }
	}
	
	exports.uninstall = () => {
	  if (process.type === 'renderer') {
	    console.log(`Uninstalling Devtron from ${__dirname}`)
	    return electron.remote.BrowserWindow.removeDevToolsExtension('devtron')
	  } else if (process.type === 'browser') {
	    console.log(`Uninstalling Devtron from ${__dirname}`)
	    return electron.BrowserWindow.removeDevToolsExtension('devtron')
	  } else {
	    throw new Error('Devtron can only be uninstalled from an Electron process.')
	  }
	}
	
	exports.path = __dirname


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CYCLEJS_DEVTOOL = exports.REACT_PERF = exports.REDUX_DEVTOOLS = exports.VUEJS_DEVTOOLS = exports.ANGULARJS_BATARANG = exports.JQUERY_DEBUGGER = exports.BACKBONE_DEBUGGER = exports.REACT_DEVELOPER_TOOLS = exports.EMBER_INSPECTOR = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _electron = __webpack_require__(327);
	
	var _electron2 = _interopRequireDefault(_electron);
	
	var _fs = __webpack_require__(339);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(341);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _semver = __webpack_require__(475);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _downloadChromeExtension = __webpack_require__(476);
	
	var _downloadChromeExtension2 = _interopRequireDefault(_downloadChromeExtension);
	
	var _utils = __webpack_require__(495);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _ref = _electron.remote || _electron2.default,
	    BrowserWindow = _ref.BrowserWindow;
	
	var IDMap = {};
	var IDMapPath = _path2.default.resolve((0, _utils.getPath)(), 'IDMap.json');
	if (_fs2.default.existsSync(IDMapPath)) {
	  IDMap = JSON.parse(_fs2.default.readFileSync(IDMapPath, 'utf8'));
	}
	
	var install = function install(extensionReference) {
	  var forceDownload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  if (Array.isArray(extensionReference)) {
	    return Promise.all(extensionReference.map(function (extension) {
	      return install(extension, forceDownload);
	    }));
	  }
	  var chromeStoreID = void 0;
	  if ((typeof extensionReference === 'undefined' ? 'undefined' : _typeof(extensionReference)) === 'object' && extensionReference.id) {
	    chromeStoreID = extensionReference.id;
	    if (!_semver2.default.satisfies(process.versions.electron, extensionReference.electron)) {
	      return Promise.reject(new Error('Version of Electron: ' + process.versions.electron + ' does not match required range ' + extensionReference.electron + ' for extension ' + chromeStoreID));
	    }
	  } else if (typeof extensionReference === 'string') {
	    chromeStoreID = extensionReference;
	  } else {
	    return Promise.reject(new Error('Invalid extensionReference passed in: "' + extensionReference + '"'));
	  }
	  var extensionName = IDMap[chromeStoreID];
	  var extensionInstalled = extensionName && BrowserWindow.getDevToolsExtensions && BrowserWindow.getDevToolsExtensions()[extensionName];
	  if (!forceDownload && extensionInstalled) {
	    return Promise.resolve(IDMap[chromeStoreID]);
	  }
	  return (0, _downloadChromeExtension2.default)(chromeStoreID, forceDownload).then(function (extensionFolder) {
	    // Use forceDownload, but already installed
	    if (extensionInstalled) {
	      BrowserWindow.removeDevToolsExtension(extensionName);
	    }
	    var name = BrowserWindow.addDevToolsExtension(extensionFolder); // eslint-disable-line
	    _fs2.default.writeFileSync(IDMapPath, JSON.stringify(Object.assign(IDMap, _defineProperty({}, chromeStoreID, name))));
	    return Promise.resolve(name);
	  });
	};
	
	exports.default = install;
	var EMBER_INSPECTOR = exports.EMBER_INSPECTOR = {
	  id: 'bmdblncegkenkacieihfhpjfppoconhi',
	  electron: '^1.2.1'
	};
	var REACT_DEVELOPER_TOOLS = exports.REACT_DEVELOPER_TOOLS = {
	  id: 'fmkadmapgofadopljbjfkapdkoienihi',
	  electron: '^1.2.1'
	};
	var BACKBONE_DEBUGGER = exports.BACKBONE_DEBUGGER = {
	  id: 'bhljhndlimiafopmmhjlgfpnnchjjbhd',
	  electron: '^1.2.1'
	};
	var JQUERY_DEBUGGER = exports.JQUERY_DEBUGGER = {
	  id: 'dbhhnnnpaeobfddmlalhnehgclcmjimi',
	  electron: '^1.2.1'
	};
	var ANGULARJS_BATARANG = exports.ANGULARJS_BATARANG = {
	  id: 'ighdmehidhipcmcojjgiloacoafjmpfk',
	  electron: '^1.2.1'
	};
	var VUEJS_DEVTOOLS = exports.VUEJS_DEVTOOLS = {
	  id: 'nhdogjmejiglipccpnnnanhbledajbpd',
	  electron: '^1.2.1'
	};
	var REDUX_DEVTOOLS = exports.REDUX_DEVTOOLS = {
	  id: 'lmhkpmbekcpmknklioeibfkpmmfibljd',
	  electron: '^1.2.1'
	};
	var REACT_PERF = exports.REACT_PERF = {
	  id: 'hacmcodfllhbnekmghgdlplbdnahmhmm',
	  electron: '^1.2.6'
	};
	var CYCLEJS_DEVTOOL = exports.CYCLEJS_DEVTOOL = {
	  id: 'dfgplfmhhmdekalbpejekgfegkonjpfp',
	  electron: '^1.2.1'
	};

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */ var debug;
	/* nomin */ if (typeof process === 'object' &&
	    /* nomin */ ({"NODE_ENV":"production"}) &&
	    /* nomin */ ({"NODE_ENV":"production"}).NODE_DEBUG &&
	    /* nomin */ /\bsemver\b/i.test(({"NODE_ENV":"production"}).NODE_DEBUG))
	  /* nomin */ debug = function() {
	    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */ args.unshift('SEMVER');
	    /* nomin */ console.log.apply(console, args);
	    /* nomin */ };
	/* nomin */ else
	  /* nomin */ debug = function() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
	                            '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
	                                 '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
	                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
	                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
	             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] +
	                src[PRERELEASE] + '?' +
	                src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
	                 src[PRERELEASELOOSE] + '?' +
	                 src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:' + src[PRERELEASE] + ')?' +
	                   src[BUILD] + '?' +
	                   ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:' + src[PRERELEASELOOSE] + ')?' +
	                        src[BUILD] + '?' +
	                        ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
	                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
	                   '\\s+-\\s+' +
	                   '(' + src[XRANGEPLAIN] + ')' +
	                   '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s+-\\s+' +
	                        '(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i])
	    re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer)
	    return version;
	
	  if (typeof version !== 'string')
	    return null;
	
	  if (version.length > MAX_LENGTH)
	    return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version))
	    return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose)
	      return version;
	    else
	      version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH)
	    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
	
	  if (!(this instanceof SemVer))
	    return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m)
	    throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
	    throw new TypeError('Invalid major version')
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
	    throw new TypeError('Invalid minor version')
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
	    throw new TypeError('Invalid patch version')
	
	  // numberify any prerelease numeric ids
	  if (!m[4])
	    this.prerelease = [];
	  else
	    this.prerelease = m[4].split('.').map(function(id) {
	      if (/^[0-9]+$/.test(id)) {
	        var num = +id;
	        if (num >= 0 && num < MAX_SAFE_INTEGER)
	          return num;
	      }
	      return id;
	    });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function() {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length)
	    this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.toString = function() {
	  return this.version;
	};
	
	SemVer.prototype.compare = function(other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) ||
	         compareIdentifiers(this.minor, other.minor) ||
	         compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length)
	    return -1;
	  else if (!this.prerelease.length && other.prerelease.length)
	    return 1;
	  else if (!this.prerelease.length && !other.prerelease.length)
	    return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined)
	      return 0;
	    else if (b === undefined)
	      return 1;
	    else if (a === undefined)
	      return -1;
	    else if (a === b)
	      continue;
	    else
	      return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function(release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0)
	        this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
	        this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0)
	        this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0)
	        this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0)
	        this.prerelease = [0];
	      else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1]))
	            this.prerelease = [identifier, 0];
	        } else
	          this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof(loose) === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre'+key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return (anum && !bnum) ? -1 :
	         (bnum && !anum) ? 1 :
	         a < b ? -1 :
	         a > b ? 1 :
	         0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(new SemVer(b, loose));
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '': case '=': case '==': ret = eq(a, b, loose); break;
	    case '!=': ret = neq(a, b, loose); break;
	    case '>': ret = gt(a, b, loose); break;
	    case '>=': ret = gte(a, b, loose); break;
	    case '<': ret = lt(a, b, loose); break;
	    case '<=': ret = lte(a, b, loose); break;
	    default: throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose)
	      return comp;
	    else
	      comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator))
	    return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY)
	    this.value = '';
	  else
	    this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function(comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m)
	    throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=')
	    this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2])
	    this.semver = ANY;
	  else
	    this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.toString = function() {
	  return this.value;
	};
	
	Comparator.prototype.test = function(version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY)
	    return true;
	
	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	Comparator.prototype.intersects = function(comp, loose) {
	  if (!(comp instanceof Comparator)) {
	    throw new TypeError('a Comparator is required');
	  }
	
	  var rangeTmp;
	
	  if (this.operator === '') {
	    rangeTmp = new Range(comp.value, loose);
	    return satisfies(this.value, rangeTmp, loose);
	  } else if (comp.operator === '') {
	    rangeTmp = new Range(this.value, loose);
	    return satisfies(comp.semver, rangeTmp, loose);
	  }
	
	  var sameDirectionIncreasing =
	    (this.operator === '>=' || this.operator === '>') &&
	    (comp.operator === '>=' || comp.operator === '>');
	  var sameDirectionDecreasing =
	    (this.operator === '<=' || this.operator === '<') &&
	    (comp.operator === '<=' || comp.operator === '<');
	  var sameSemVer = this.semver.version === comp.semver.version;
	  var differentDirectionsInclusive =
	    (this.operator === '>=' || this.operator === '<=') &&
	    (comp.operator === '>=' || comp.operator === '<=');
	  var oppositeDirectionsLessThan =
	    cmp(this.semver, '<', comp.semver, loose) &&
	    ((this.operator === '>=' || this.operator === '>') &&
	    (comp.operator === '<=' || comp.operator === '<'));
	  var oppositeDirectionsGreaterThan =
	    cmp(this.semver, '>', comp.semver, loose) &&
	    ((this.operator === '<=' || this.operator === '<') &&
	    (comp.operator === '>=' || comp.operator === '>'));
	
	  return sameDirectionIncreasing || sameDirectionDecreasing ||
	    (sameSemVer && differentDirectionsInclusive) ||
	    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
	};
	
	
	exports.Range = Range;
	function Range(range, loose) {
	  if (range instanceof Range) {
	    if (range.loose === loose) {
	      return range;
	    } else {
	      return new Range(range.raw, loose);
	    }
	  }
	
	  if (range instanceof Comparator) {
	    return new Range(range.value, loose);
	  }
	
	  if (!(this instanceof Range))
	    return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function(c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.format = function() {
	  this.range = this.set.map(function(comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function() {
	  return this.range;
	};
	
	Range.prototype.parseRange = function(range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function(comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function(comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function(comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	Range.prototype.intersects = function(range, loose) {
	  if (!(range instanceof Range)) {
	    throw new TypeError('a Range is required');
	  }
	
	  return this.set.some(function(thisComparators) {
	    return thisComparators.every(function(thisComparator) {
	      return range.set.some(function(rangeComparators) {
	        return rangeComparators.every(function(rangeComparator) {
	          return thisComparator.intersects(rangeComparator, loose);
	        });
	      });
	    });
	  });
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function(comp) {
	    return comp.map(function(c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr +
	            ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p +
	            ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p)) {
	      if (M === '0')
	        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	      else
	        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p + pr +
	              ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p +
	              ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function(comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX)
	      gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm)
	        m = 0;
	      if (xp)
	        p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm)
	          M = +M + 1;
	        else
	          m = +m + 1;
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0,
	                       from, fM, fm, fp, fpr, fb,
	                       to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM))
	    from = '';
	  else if (isX(fm))
	    from = '>=' + fM + '.0.0';
	  else if (isX(fp))
	    from = '>=' + fM + '.' + fm + '.0';
	  else
	    from = '>=' + from;
	
	  if (isX(tM))
	    to = '';
	  else if (isX(tm))
	    to = '<' + (+tM + 1) + '.0.0';
	  else if (isX(tp))
	    to = '<' + tM + '.' + (+tm + 1) + '.0';
	  else if (tpr)
	    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
	  else
	    to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function(version) {
	  if (!version)
	    return false;
	
	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version))
	      return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version))
	      return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY)
	        continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch)
	          return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  var max = null;
	  var maxSV = null;
	  try {
	    var rangeObj = new Range(range, loose);
	  } catch (er) {
	    return null;
	  }
	  versions.forEach(function (v) {
	    if (rangeObj.test(v)) { // satisfies(v, range, loose)
	      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
	        max = v;
	        maxSV = new SemVer(max, loose);
	      }
	    }
	  })
	  return max;
	}
	
	exports.minSatisfying = minSatisfying;
	function minSatisfying(versions, range, loose) {
	  var min = null;
	  var minSV = null;
	  try {
	    var rangeObj = new Range(range, loose);
	  } catch (er) {
	    return null;
	  }
	  versions.forEach(function (v) {
	    if (rangeObj.test(v)) { // satisfies(v, range, loose)
	      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
	        min = v;
	        minSV = new SemVer(min, loose);
	      }
	    }
	  })
	  return min;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function(comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0')
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) &&
	        ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
	}
	
	exports.intersects = intersects;
	function intersects(r1, r2, loose) {
	  r1 = new Range(r1, loose)
	  r2 = new Range(r2, loose)
	  return r1.intersects(r2)
	}


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fs = __webpack_require__(339);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(341);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _rimraf = __webpack_require__(477);
	
	var _rimraf2 = _interopRequireDefault(_rimraf);
	
	var _crossUnzip = __webpack_require__(492);
	
	var _crossUnzip2 = _interopRequireDefault(_crossUnzip);
	
	var _utils = __webpack_require__(495);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var downloadChromeExtension = function downloadChromeExtension(chromeStoreID, forceDownload) {
	  var attempts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
	
	  var extensionsStore = (0, _utils.getPath)();
	  if (!_fs2.default.existsSync(extensionsStore)) {
	    _fs2.default.mkdirSync(extensionsStore);
	  }
	  var extensionFolder = _path2.default.resolve(extensionsStore + '/' + chromeStoreID);
	  return new Promise(function (resolve, reject) {
	    if (!_fs2.default.existsSync(extensionFolder) || forceDownload) {
	      (function () {
	        if (_fs2.default.existsSync(extensionFolder)) {
	          _rimraf2.default.sync(extensionFolder);
	        }
	        var fileURL = 'https://clients2.google.com/service/update2/crx?response=redirect&x=id%3D' + chromeStoreID + '%26uc&prodversion=32'; // eslint-disable-line
	        var filePath = _path2.default.resolve(extensionFolder + '.crx');
	        (0, _utils.downloadFile)(fileURL, filePath).then(function () {
	          (0, _crossUnzip2.default)(filePath, extensionFolder, function (err) {
	            if (err && !_fs2.default.existsSync(_path2.default.resolve(extensionFolder, 'manifest.json'))) {
	              return reject(err);
	            }
	            resolve(extensionFolder);
	          });
	        }).catch(function (err) {
	          console.log('Failed to fetch extension, trying ' + (attempts - 1) + ' more times'); // eslint-disable-line
	          if (attempts <= 1) {
	            return reject(err);
	          }
	          setTimeout(function () {
	            downloadChromeExtension(chromeStoreID, forceDownload, attempts - 1).then(resolve).catch(reject);
	          }, 200);
	        });
	      })();
	    } else {
	      resolve(extensionFolder);
	    }
	  });
	};
	
	exports.default = downloadChromeExtension;

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = rimraf
	rimraf.sync = rimrafSync
	
	var assert = __webpack_require__(423)
	var path = __webpack_require__(341)
	var fs = __webpack_require__(339)
	var glob = __webpack_require__(478)
	var _0666 = parseInt('666', 8)
	
	var defaultGlobOpts = {
	  nosort: true,
	  silent: true
	}
	
	// for EMFILE handling
	var timeout = 0
	
	var isWindows = (process.platform === "win32")
	
	function defaults (options) {
	  var methods = [
	    'unlink',
	    'chmod',
	    'stat',
	    'lstat',
	    'rmdir',
	    'readdir'
	  ]
	  methods.forEach(function(m) {
	    options[m] = options[m] || fs[m]
	    m = m + 'Sync'
	    options[m] = options[m] || fs[m]
	  })
	
	  options.maxBusyTries = options.maxBusyTries || 3
	  options.emfileWait = options.emfileWait || 1000
	  if (options.glob === false) {
	    options.disableGlob = true
	  }
	  options.disableGlob = options.disableGlob || false
	  options.glob = options.glob || defaultGlobOpts
	}
	
	function rimraf (p, options, cb) {
	  if (typeof options === 'function') {
	    cb = options
	    options = {}
	  }
	
	  assert(p, 'rimraf: missing path')
	  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
	  assert.equal(typeof cb, 'function', 'rimraf: callback function required')
	  assert(options, 'rimraf: invalid options argument provided')
	  assert.equal(typeof options, 'object', 'rimraf: options should be object')
	
	  defaults(options)
	
	  var busyTries = 0
	  var errState = null
	  var n = 0
	
	  if (options.disableGlob || !glob.hasMagic(p))
	    return afterGlob(null, [p])
	
	  options.lstat(p, function (er, stat) {
	    if (!er)
	      return afterGlob(null, [p])
	
	    glob(p, options.glob, afterGlob)
	  })
	
	  function next (er) {
	    errState = errState || er
	    if (--n === 0)
	      cb(errState)
	  }
	
	  function afterGlob (er, results) {
	    if (er)
	      return cb(er)
	
	    n = results.length
	    if (n === 0)
	      return cb()
	
	    results.forEach(function (p) {
	      rimraf_(p, options, function CB (er) {
	        if (er) {
	          if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") &&
	              busyTries < options.maxBusyTries) {
	            busyTries ++
	            var time = busyTries * 100
	            // try again, with the same exact callback as this one.
	            return setTimeout(function () {
	              rimraf_(p, options, CB)
	            }, time)
	          }
	
	          // this one won't happen if graceful-fs is used.
	          if (er.code === "EMFILE" && timeout < options.emfileWait) {
	            return setTimeout(function () {
	              rimraf_(p, options, CB)
	            }, timeout ++)
	          }
	
	          // already gone
	          if (er.code === "ENOENT") er = null
	        }
	
	        timeout = 0
	        next(er)
	      })
	    })
	  }
	}
	
	// Two possible strategies.
	// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
	// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
	//
	// Both result in an extra syscall when you guess wrong.  However, there
	// are likely far more normal files in the world than directories.  This
	// is based on the assumption that a the average number of files per
	// directory is >= 1.
	//
	// If anyone ever complains about this, then I guess the strategy could
	// be made configurable somehow.  But until then, YAGNI.
	function rimraf_ (p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  // sunos lets the root user unlink directories, which is... weird.
	  // so we have to lstat here and make sure it's not a dir.
	  options.lstat(p, function (er, st) {
	    if (er && er.code === "ENOENT")
	      return cb(null)
	
	    // Windows can EPERM on stat.  Life is suffering.
	    if (er && er.code === "EPERM" && isWindows)
	      fixWinEPERM(p, options, er, cb)
	
	    if (st && st.isDirectory())
	      return rmdir(p, options, er, cb)
	
	    options.unlink(p, function (er) {
	      if (er) {
	        if (er.code === "ENOENT")
	          return cb(null)
	        if (er.code === "EPERM")
	          return (isWindows)
	            ? fixWinEPERM(p, options, er, cb)
	            : rmdir(p, options, er, cb)
	        if (er.code === "EISDIR")
	          return rmdir(p, options, er, cb)
	      }
	      return cb(er)
	    })
	  })
	}
	
	function fixWinEPERM (p, options, er, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	  if (er)
	    assert(er instanceof Error)
	
	  options.chmod(p, _0666, function (er2) {
	    if (er2)
	      cb(er2.code === "ENOENT" ? null : er)
	    else
	      options.stat(p, function(er3, stats) {
	        if (er3)
	          cb(er3.code === "ENOENT" ? null : er)
	        else if (stats.isDirectory())
	          rmdir(p, options, er, cb)
	        else
	          options.unlink(p, cb)
	      })
	  })
	}
	
	function fixWinEPERMSync (p, options, er) {
	  assert(p)
	  assert(options)
	  if (er)
	    assert(er instanceof Error)
	
	  try {
	    options.chmodSync(p, _0666)
	  } catch (er2) {
	    if (er2.code === "ENOENT")
	      return
	    else
	      throw er
	  }
	
	  try {
	    var stats = options.statSync(p)
	  } catch (er3) {
	    if (er3.code === "ENOENT")
	      return
	    else
	      throw er
	  }
	
	  if (stats.isDirectory())
	    rmdirSync(p, options, er)
	  else
	    options.unlinkSync(p)
	}
	
	function rmdir (p, options, originalEr, cb) {
	  assert(p)
	  assert(options)
	  if (originalEr)
	    assert(originalEr instanceof Error)
	  assert(typeof cb === 'function')
	
	  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
	  // if we guessed wrong, and it's not a directory, then
	  // raise the original error.
	  options.rmdir(p, function (er) {
	    if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
	      rmkids(p, options, cb)
	    else if (er && er.code === "ENOTDIR")
	      cb(originalEr)
	    else
	      cb(er)
	  })
	}
	
	function rmkids(p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  options.readdir(p, function (er, files) {
	    if (er)
	      return cb(er)
	    var n = files.length
	    if (n === 0)
	      return options.rmdir(p, cb)
	    var errState
	    files.forEach(function (f) {
	      rimraf(path.join(p, f), options, function (er) {
	        if (errState)
	          return
	        if (er)
	          return cb(errState = er)
	        if (--n === 0)
	          options.rmdir(p, cb)
	      })
	    })
	  })
	}
	
	// this looks simpler, and is strictly *faster*, but will
	// tie up the JavaScript thread and fail on excessively
	// deep directory trees.
	function rimrafSync (p, options) {
	  options = options || {}
	  defaults(options)
	
	  assert(p, 'rimraf: missing path')
	  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
	  assert(options, 'rimraf: missing options')
	  assert.equal(typeof options, 'object', 'rimraf: options should be object')
	
	  var results
	
	  if (options.disableGlob || !glob.hasMagic(p)) {
	    results = [p]
	  } else {
	    try {
	      options.lstatSync(p)
	      results = [p]
	    } catch (er) {
	      results = glob.sync(p, options.glob)
	    }
	  }
	
	  if (!results.length)
	    return
	
	  for (var i = 0; i < results.length; i++) {
	    var p = results[i]
	
	    try {
	      var st = options.lstatSync(p)
	    } catch (er) {
	      if (er.code === "ENOENT")
	        return
	
	      // Windows can EPERM on stat.  Life is suffering.
	      if (er.code === "EPERM" && isWindows)
	        fixWinEPERMSync(p, options, er)
	    }
	
	    try {
	      // sunos lets the root user unlink directories, which is... weird.
	      if (st && st.isDirectory())
	        rmdirSync(p, options, null)
	      else
	        options.unlinkSync(p)
	    } catch (er) {
	      if (er.code === "ENOENT")
	        return
	      if (er.code === "EPERM")
	        return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
	      if (er.code !== "EISDIR")
	        throw er
	
	      rmdirSync(p, options, er)
	    }
	  }
	}
	
	function rmdirSync (p, options, originalEr) {
	  assert(p)
	  assert(options)
	  if (originalEr)
	    assert(originalEr instanceof Error)
	
	  try {
	    options.rmdirSync(p)
	  } catch (er) {
	    if (er.code === "ENOENT")
	      return
	    if (er.code === "ENOTDIR")
	      throw originalEr
	    if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
	      rmkidsSync(p, options)
	  }
	}
	
	function rmkidsSync (p, options) {
	  assert(p)
	  assert(options)
	  options.readdirSync(p).forEach(function (f) {
	    rimrafSync(path.join(p, f), options)
	  })
	
	  // We only end up here once we got ENOTEMPTY at least once, and
	  // at this point, we are guaranteed to have removed all the kids.
	  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
	  // try really hard to delete stuff on windows, because it has a
	  // PROFOUNDLY annoying habit of not closing handles promptly when
	  // files are deleted, resulting in spurious ENOTEMPTY errors.
	  var retries = isWindows ? 100 : 1
	  var i = 0
	  do {
	    var threw = true
	    try {
	      var ret = options.rmdirSync(p, options)
	      threw = false
	      return ret
	    } finally {
	      if (++i < retries && threw)
	        continue
	    }
	  } while (true)
	}


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

	// Approach:
	//
	// 1. Get the minimatch set
	// 2. For each pattern in the set, PROCESS(pattern, false)
	// 3. Store matches per-set, then uniq them
	//
	// PROCESS(pattern, inGlobStar)
	// Get the first [n] items from pattern that are all strings
	// Join these together.  This is PREFIX.
	//   If there is no more remaining, then stat(PREFIX) and
	//   add to matches if it succeeds.  END.
	//
	// If inGlobStar and PREFIX is symlink and points to dir
	//   set ENTRIES = []
	// else readdir(PREFIX) as ENTRIES
	//   If fail, END
	//
	// with ENTRIES
	//   If pattern[n] is GLOBSTAR
	//     // handle the case where the globstar match is empty
	//     // by pruning it out, and testing the resulting pattern
	//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
	//     // handle other cases.
	//     for ENTRY in ENTRIES (not dotfiles)
	//       // attach globstar + tail onto the entry
	//       // Mark that this entry is a globstar match
	//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
	//
	//   else // not globstar
	//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
	//       Test ENTRY against pattern[n]
	//       If fails, continue
	//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
	//
	// Caveat:
	//   Cache all stats and readdirs results to minimize syscall.  Since all
	//   we ever care about is existence and directory-ness, we can just keep
	//   `true` for files, and [children,...] for directories, or `false` for
	//   things that don't exist.
	
	module.exports = glob
	
	var fs = __webpack_require__(339)
	var rp = __webpack_require__(479)
	var minimatch = __webpack_require__(481)
	var Minimatch = minimatch.Minimatch
	var inherits = __webpack_require__(485)
	var EE = __webpack_require__(391).EventEmitter
	var path = __webpack_require__(341)
	var assert = __webpack_require__(423)
	var isAbsolute = __webpack_require__(486)
	var globSync = __webpack_require__(487)
	var common = __webpack_require__(488)
	var alphasort = common.alphasort
	var alphasorti = common.alphasorti
	var setopts = common.setopts
	var ownProp = common.ownProp
	var inflight = __webpack_require__(489)
	var util = __webpack_require__(336)
	var childrenIgnored = common.childrenIgnored
	var isIgnored = common.isIgnored
	
	var once = __webpack_require__(491)
	
	function glob (pattern, options, cb) {
	  if (typeof options === 'function') cb = options, options = {}
	  if (!options) options = {}
	
	  if (options.sync) {
	    if (cb)
	      throw new TypeError('callback provided to sync glob')
	    return globSync(pattern, options)
	  }
	
	  return new Glob(pattern, options, cb)
	}
	
	glob.sync = globSync
	var GlobSync = glob.GlobSync = globSync.GlobSync
	
	// old api surface
	glob.glob = glob
	
	function extend (origin, add) {
	  if (add === null || typeof add !== 'object') {
	    return origin
	  }
	
	  var keys = Object.keys(add)
	  var i = keys.length
	  while (i--) {
	    origin[keys[i]] = add[keys[i]]
	  }
	  return origin
	}
	
	glob.hasMagic = function (pattern, options_) {
	  var options = extend({}, options_)
	  options.noprocess = true
	
	  var g = new Glob(pattern, options)
	  var set = g.minimatch.set
	
	  if (!pattern)
	    return false
	
	  if (set.length > 1)
	    return true
	
	  for (var j = 0; j < set[0].length; j++) {
	    if (typeof set[0][j] !== 'string')
	      return true
	  }
	
	  return false
	}
	
	glob.Glob = Glob
	inherits(Glob, EE)
	function Glob (pattern, options, cb) {
	  if (typeof options === 'function') {
	    cb = options
	    options = null
	  }
	
	  if (options && options.sync) {
	    if (cb)
	      throw new TypeError('callback provided to sync glob')
	    return new GlobSync(pattern, options)
	  }
	
	  if (!(this instanceof Glob))
	    return new Glob(pattern, options, cb)
	
	  setopts(this, pattern, options)
	  this._didRealPath = false
	
	  // process each pattern in the minimatch set
	  var n = this.minimatch.set.length
	
	  // The matches are stored as {<filename>: true,...} so that
	  // duplicates are automagically pruned.
	  // Later, we do an Object.keys() on these.
	  // Keep them as a list so we can fill in when nonull is set.
	  this.matches = new Array(n)
	
	  if (typeof cb === 'function') {
	    cb = once(cb)
	    this.on('error', cb)
	    this.on('end', function (matches) {
	      cb(null, matches)
	    })
	  }
	
	  var self = this
	  this._processing = 0
	
	  this._emitQueue = []
	  this._processQueue = []
	  this.paused = false
	
	  if (this.noprocess)
	    return this
	
	  if (n === 0)
	    return done()
	
	  var sync = true
	  for (var i = 0; i < n; i ++) {
	    this._process(this.minimatch.set[i], i, false, done)
	  }
	  sync = false
	
	  function done () {
	    --self._processing
	    if (self._processing <= 0) {
	      if (sync) {
	        process.nextTick(function () {
	          self._finish()
	        })
	      } else {
	        self._finish()
	      }
	    }
	  }
	}
	
	Glob.prototype._finish = function () {
	  assert(this instanceof Glob)
	  if (this.aborted)
	    return
	
	  if (this.realpath && !this._didRealpath)
	    return this._realpath()
	
	  common.finish(this)
	  this.emit('end', this.found)
	}
	
	Glob.prototype._realpath = function () {
	  if (this._didRealpath)
	    return
	
	  this._didRealpath = true
	
	  var n = this.matches.length
	  if (n === 0)
	    return this._finish()
	
	  var self = this
	  for (var i = 0; i < this.matches.length; i++)
	    this._realpathSet(i, next)
	
	  function next () {
	    if (--n === 0)
	      self._finish()
	  }
	}
	
	Glob.prototype._realpathSet = function (index, cb) {
	  var matchset = this.matches[index]
	  if (!matchset)
	    return cb()
	
	  var found = Object.keys(matchset)
	  var self = this
	  var n = found.length
	
	  if (n === 0)
	    return cb()
	
	  var set = this.matches[index] = Object.create(null)
	  found.forEach(function (p, i) {
	    // If there's a problem with the stat, then it means that
	    // one or more of the links in the realpath couldn't be
	    // resolved.  just return the abs value in that case.
	    p = self._makeAbs(p)
	    rp.realpath(p, self.realpathCache, function (er, real) {
	      if (!er)
	        set[real] = true
	      else if (er.syscall === 'stat')
	        set[p] = true
	      else
	        self.emit('error', er) // srsly wtf right here
	
	      if (--n === 0) {
	        self.matches[index] = set
	        cb()
	      }
	    })
	  })
	}
	
	Glob.prototype._mark = function (p) {
	  return common.mark(this, p)
	}
	
	Glob.prototype._makeAbs = function (f) {
	  return common.makeAbs(this, f)
	}
	
	Glob.prototype.abort = function () {
	  this.aborted = true
	  this.emit('abort')
	}
	
	Glob.prototype.pause = function () {
	  if (!this.paused) {
	    this.paused = true
	    this.emit('pause')
	  }
	}
	
	Glob.prototype.resume = function () {
	  if (this.paused) {
	    this.emit('resume')
	    this.paused = false
	    if (this._emitQueue.length) {
	      var eq = this._emitQueue.slice(0)
	      this._emitQueue.length = 0
	      for (var i = 0; i < eq.length; i ++) {
	        var e = eq[i]
	        this._emitMatch(e[0], e[1])
	      }
	    }
	    if (this._processQueue.length) {
	      var pq = this._processQueue.slice(0)
	      this._processQueue.length = 0
	      for (var i = 0; i < pq.length; i ++) {
	        var p = pq[i]
	        this._processing--
	        this._process(p[0], p[1], p[2], p[3])
	      }
	    }
	  }
	}
	
	Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
	  assert(this instanceof Glob)
	  assert(typeof cb === 'function')
	
	  if (this.aborted)
	    return
	
	  this._processing++
	  if (this.paused) {
	    this._processQueue.push([pattern, index, inGlobStar, cb])
	    return
	  }
	
	  //console.error('PROCESS %d', this._processing, pattern)
	
	  // Get the first [n] parts of pattern that are all strings.
	  var n = 0
	  while (typeof pattern[n] === 'string') {
	    n ++
	  }
	  // now n is the index of the first one that is *not* a string.
	
	  // see if there's anything else
	  var prefix
	  switch (n) {
	    // if not, then this is rather simple
	    case pattern.length:
	      this._processSimple(pattern.join('/'), index, cb)
	      return
	
	    case 0:
	      // pattern *starts* with some non-trivial item.
	      // going to readdir(cwd), but not include the prefix in matches.
	      prefix = null
	      break
	
	    default:
	      // pattern has some string bits in the front.
	      // whatever it starts with, whether that's 'absolute' like /foo/bar,
	      // or 'relative' like '../baz'
	      prefix = pattern.slice(0, n).join('/')
	      break
	  }
	
	  var remain = pattern.slice(n)
	
	  // get the list of entries.
	  var read
	  if (prefix === null)
	    read = '.'
	  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
	    if (!prefix || !isAbsolute(prefix))
	      prefix = '/' + prefix
	    read = prefix
	  } else
	    read = prefix
	
	  var abs = this._makeAbs(read)
	
	  //if ignored, skip _processing
	  if (childrenIgnored(this, read))
	    return cb()
	
	  var isGlobStar = remain[0] === minimatch.GLOBSTAR
	  if (isGlobStar)
	    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb)
	  else
	    this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb)
	}
	
	Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
	  var self = this
	  this._readdir(abs, inGlobStar, function (er, entries) {
	    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
	  })
	}
	
	Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
	
	  // if the abs isn't a dir, then nothing can match!
	  if (!entries)
	    return cb()
	
	  // It will only match dot entries if it starts with a dot, or if
	  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
	  var pn = remain[0]
	  var negate = !!this.minimatch.negate
	  var rawGlob = pn._glob
	  var dotOk = this.dot || rawGlob.charAt(0) === '.'
	
	  var matchedEntries = []
	  for (var i = 0; i < entries.length; i++) {
	    var e = entries[i]
	    if (e.charAt(0) !== '.' || dotOk) {
	      var m
	      if (negate && !prefix) {
	        m = !e.match(pn)
	      } else {
	        m = e.match(pn)
	      }
	      if (m)
	        matchedEntries.push(e)
	    }
	  }
	
	  //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)
	
	  var len = matchedEntries.length
	  // If there are no matched entries, then nothing matches.
	  if (len === 0)
	    return cb()
	
	  // if this is the last remaining pattern bit, then no need for
	  // an additional stat *unless* the user has specified mark or
	  // stat explicitly.  We know they exist, since readdir returned
	  // them.
	
	  if (remain.length === 1 && !this.mark && !this.stat) {
	    if (!this.matches[index])
	      this.matches[index] = Object.create(null)
	
	    for (var i = 0; i < len; i ++) {
	      var e = matchedEntries[i]
	      if (prefix) {
	        if (prefix !== '/')
	          e = prefix + '/' + e
	        else
	          e = prefix + e
	      }
	
	      if (e.charAt(0) === '/' && !this.nomount) {
	        e = path.join(this.root, e)
	      }
	      this._emitMatch(index, e)
	    }
	    // This was the last one, and no stats were needed
	    return cb()
	  }
	
	  // now test all matched entries as stand-ins for that part
	  // of the pattern.
	  remain.shift()
	  for (var i = 0; i < len; i ++) {
	    var e = matchedEntries[i]
	    var newPattern
	    if (prefix) {
	      if (prefix !== '/')
	        e = prefix + '/' + e
	      else
	        e = prefix + e
	    }
	    this._process([e].concat(remain), index, inGlobStar, cb)
	  }
	  cb()
	}
	
	Glob.prototype._emitMatch = function (index, e) {
	  if (this.aborted)
	    return
	
	  if (isIgnored(this, e))
	    return
	
	  if (this.paused) {
	    this._emitQueue.push([index, e])
	    return
	  }
	
	  var abs = isAbsolute(e) ? e : this._makeAbs(e)
	
	  if (this.mark)
	    e = this._mark(e)
	
	  if (this.absolute)
	    e = abs
	
	  if (this.matches[index][e])
	    return
	
	  if (this.nodir) {
	    var c = this.cache[abs]
	    if (c === 'DIR' || Array.isArray(c))
	      return
	  }
	
	  this.matches[index][e] = true
	
	  var st = this.statCache[abs]
	  if (st)
	    this.emit('stat', e, st)
	
	  this.emit('match', e)
	}
	
	Glob.prototype._readdirInGlobStar = function (abs, cb) {
	  if (this.aborted)
	    return
	
	  // follow all symlinked directories forever
	  // just proceed as if this is a non-globstar situation
	  if (this.follow)
	    return this._readdir(abs, false, cb)
	
	  var lstatkey = 'lstat\0' + abs
	  var self = this
	  var lstatcb = inflight(lstatkey, lstatcb_)
	
	  if (lstatcb)
	    fs.lstat(abs, lstatcb)
	
	  function lstatcb_ (er, lstat) {
	    if (er && er.code === 'ENOENT')
	      return cb()
	
	    var isSym = lstat && lstat.isSymbolicLink()
	    self.symlinks[abs] = isSym
	
	    // If it's not a symlink or a dir, then it's definitely a regular file.
	    // don't bother doing a readdir in that case.
	    if (!isSym && lstat && !lstat.isDirectory()) {
	      self.cache[abs] = 'FILE'
	      cb()
	    } else
	      self._readdir(abs, false, cb)
	  }
	}
	
	Glob.prototype._readdir = function (abs, inGlobStar, cb) {
	  if (this.aborted)
	    return
	
	  cb = inflight('readdir\0'+abs+'\0'+inGlobStar, cb)
	  if (!cb)
	    return
	
	  //console.error('RD %j %j', +inGlobStar, abs)
	  if (inGlobStar && !ownProp(this.symlinks, abs))
	    return this._readdirInGlobStar(abs, cb)
	
	  if (ownProp(this.cache, abs)) {
	    var c = this.cache[abs]
	    if (!c || c === 'FILE')
	      return cb()
	
	    if (Array.isArray(c))
	      return cb(null, c)
	  }
	
	  var self = this
	  fs.readdir(abs, readdirCb(this, abs, cb))
	}
	
	function readdirCb (self, abs, cb) {
	  return function (er, entries) {
	    if (er)
	      self._readdirError(abs, er, cb)
	    else
	      self._readdirEntries(abs, entries, cb)
	  }
	}
	
	Glob.prototype._readdirEntries = function (abs, entries, cb) {
	  if (this.aborted)
	    return
	
	  // if we haven't asked to stat everything, then just
	  // assume that everything in there exists, so we can avoid
	  // having to stat it a second time.
	  if (!this.mark && !this.stat) {
	    for (var i = 0; i < entries.length; i ++) {
	      var e = entries[i]
	      if (abs === '/')
	        e = abs + e
	      else
	        e = abs + '/' + e
	      this.cache[e] = true
	    }
	  }
	
	  this.cache[abs] = entries
	  return cb(null, entries)
	}
	
	Glob.prototype._readdirError = function (f, er, cb) {
	  if (this.aborted)
	    return
	
	  // handle errors, and cache the information
	  switch (er.code) {
	    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
	    case 'ENOTDIR': // totally normal. means it *does* exist.
	      var abs = this._makeAbs(f)
	      this.cache[abs] = 'FILE'
	      if (abs === this.cwdAbs) {
	        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
	        error.path = this.cwd
	        error.code = er.code
	        this.emit('error', error)
	        this.abort()
	      }
	      break
	
	    case 'ENOENT': // not terribly unusual
	    case 'ELOOP':
	    case 'ENAMETOOLONG':
	    case 'UNKNOWN':
	      this.cache[this._makeAbs(f)] = false
	      break
	
	    default: // some unusual error.  Treat as failure.
	      this.cache[this._makeAbs(f)] = false
	      if (this.strict) {
	        this.emit('error', er)
	        // If the error is handled, then we abort
	        // if not, we threw out of here
	        this.abort()
	      }
	      if (!this.silent)
	        console.error('glob error', er)
	      break
	  }
	
	  return cb()
	}
	
	Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
	  var self = this
	  this._readdir(abs, inGlobStar, function (er, entries) {
	    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
	  })
	}
	
	
	Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
	  //console.error('pgs2', prefix, remain[0], entries)
	
	  // no entries means not a dir, so it can never have matches
	  // foo.txt/** doesn't match foo.txt
	  if (!entries)
	    return cb()
	
	  // test without the globstar, and with every child both below
	  // and replacing the globstar.
	  var remainWithoutGlobStar = remain.slice(1)
	  var gspref = prefix ? [ prefix ] : []
	  var noGlobStar = gspref.concat(remainWithoutGlobStar)
	
	  // the noGlobStar pattern exits the inGlobStar state
	  this._process(noGlobStar, index, false, cb)
	
	  var isSym = this.symlinks[abs]
	  var len = entries.length
	
	  // If it's a symlink, and we're in a globstar, then stop
	  if (isSym && inGlobStar)
	    return cb()
	
	  for (var i = 0; i < len; i++) {
	    var e = entries[i]
	    if (e.charAt(0) === '.' && !this.dot)
	      continue
	
	    // these two cases enter the inGlobStar state
	    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
	    this._process(instead, index, true, cb)
	
	    var below = gspref.concat(entries[i], remain)
	    this._process(below, index, true, cb)
	  }
	
	  cb()
	}
	
	Glob.prototype._processSimple = function (prefix, index, cb) {
	  // XXX review this.  Shouldn't it be doing the mounting etc
	  // before doing stat?  kinda weird?
	  var self = this
	  this._stat(prefix, function (er, exists) {
	    self._processSimple2(prefix, index, er, exists, cb)
	  })
	}
	Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {
	
	  //console.error('ps2', prefix, exists)
	
	  if (!this.matches[index])
	    this.matches[index] = Object.create(null)
	
	  // If it doesn't exist, then just mark the lack of results
	  if (!exists)
	    return cb()
	
	  if (prefix && isAbsolute(prefix) && !this.nomount) {
	    var trail = /[\/\\]$/.test(prefix)
	    if (prefix.charAt(0) === '/') {
	      prefix = path.join(this.root, prefix)
	    } else {
	      prefix = path.resolve(this.root, prefix)
	      if (trail)
	        prefix += '/'
	    }
	  }
	
	  if (process.platform === 'win32')
	    prefix = prefix.replace(/\\/g, '/')
	
	  // Mark this as a match
	  this._emitMatch(index, prefix)
	  cb()
	}
	
	// Returns either 'DIR', 'FILE', or false
	Glob.prototype._stat = function (f, cb) {
	  var abs = this._makeAbs(f)
	  var needDir = f.slice(-1) === '/'
	
	  if (f.length > this.maxLength)
	    return cb()
	
	  if (!this.stat && ownProp(this.cache, abs)) {
	    var c = this.cache[abs]
	
	    if (Array.isArray(c))
	      c = 'DIR'
	
	    // It exists, but maybe not how we need it
	    if (!needDir || c === 'DIR')
	      return cb(null, c)
	
	    if (needDir && c === 'FILE')
	      return cb()
	
	    // otherwise we have to stat, because maybe c=true
	    // if we know it exists, but not what it is.
	  }
	
	  var exists
	  var stat = this.statCache[abs]
	  if (stat !== undefined) {
	    if (stat === false)
	      return cb(null, stat)
	    else {
	      var type = stat.isDirectory() ? 'DIR' : 'FILE'
	      if (needDir && type === 'FILE')
	        return cb()
	      else
	        return cb(null, type, stat)
	    }
	  }
	
	  var self = this
	  var statcb = inflight('stat\0' + abs, lstatcb_)
	  if (statcb)
	    fs.lstat(abs, statcb)
	
	  function lstatcb_ (er, lstat) {
	    if (lstat && lstat.isSymbolicLink()) {
	      // If it's a symlink, then treat it as the target, unless
	      // the target does not exist, then treat it as a file.
	      return fs.stat(abs, function (er, stat) {
	        if (er)
	          self._stat2(f, abs, null, lstat, cb)
	        else
	          self._stat2(f, abs, er, stat, cb)
	      })
	    } else {
	      self._stat2(f, abs, er, lstat, cb)
	    }
	  }
	}
	
	Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
	  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
	    this.statCache[abs] = false
	    return cb()
	  }
	
	  var needDir = f.slice(-1) === '/'
	  this.statCache[abs] = stat
	
	  if (abs.slice(-1) === '/' && stat && !stat.isDirectory())
	    return cb(null, false, stat)
	
	  var c = true
	  if (stat)
	    c = stat.isDirectory() ? 'DIR' : 'FILE'
	  this.cache[abs] = this.cache[abs] || c
	
	  if (needDir && c === 'FILE')
	    return cb()
	
	  return cb(null, c, stat)
	}


/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = realpath
	realpath.realpath = realpath
	realpath.sync = realpathSync
	realpath.realpathSync = realpathSync
	realpath.monkeypatch = monkeypatch
	realpath.unmonkeypatch = unmonkeypatch
	
	var fs = __webpack_require__(339)
	var origRealpath = fs.realpath
	var origRealpathSync = fs.realpathSync
	
	var version = process.version
	var ok = /^v[0-5]\./.test(version)
	var old = __webpack_require__(480)
	
	function newError (er) {
	  return er && er.syscall === 'realpath' && (
	    er.code === 'ELOOP' ||
	    er.code === 'ENOMEM' ||
	    er.code === 'ENAMETOOLONG'
	  )
	}
	
	function realpath (p, cache, cb) {
	  if (ok) {
	    return origRealpath(p, cache, cb)
	  }
	
	  if (typeof cache === 'function') {
	    cb = cache
	    cache = null
	  }
	  origRealpath(p, cache, function (er, result) {
	    if (newError(er)) {
	      old.realpath(p, cache, cb)
	    } else {
	      cb(er, result)
	    }
	  })
	}
	
	function realpathSync (p, cache) {
	  if (ok) {
	    return origRealpathSync(p, cache)
	  }
	
	  try {
	    return origRealpathSync(p, cache)
	  } catch (er) {
	    if (newError(er)) {
	      return old.realpathSync(p, cache)
	    } else {
	      throw er
	    }
	  }
	}
	
	function monkeypatch () {
	  fs.realpath = realpath
	  fs.realpathSync = realpathSync
	}
	
	function unmonkeypatch () {
	  fs.realpath = origRealpath
	  fs.realpathSync = origRealpathSync
	}


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var pathModule = __webpack_require__(341);
	var isWindows = process.platform === 'win32';
	var fs = __webpack_require__(339);
	
	// JavaScript implementation of realpath, ported from node pre-v6
	
	var DEBUG = ({"NODE_ENV":"production"}).NODE_DEBUG && /fs/.test(({"NODE_ENV":"production"}).NODE_DEBUG);
	
	function rethrow() {
	  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
	  // is fairly slow to generate.
	  var callback;
	  if (DEBUG) {
	    var backtrace = new Error;
	    callback = debugCallback;
	  } else
	    callback = missingCallback;
	
	  return callback;
	
	  function debugCallback(err) {
	    if (err) {
	      backtrace.message = err.message;
	      err = backtrace;
	      missingCallback(err);
	    }
	  }
	
	  function missingCallback(err) {
	    if (err) {
	      if (process.throwDeprecation)
	        throw err;  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
	      else if (!process.noDeprecation) {
	        var msg = 'fs: missing callback ' + (err.stack || err.message);
	        if (process.traceDeprecation)
	          console.trace(msg);
	        else
	          console.error(msg);
	      }
	    }
	  }
	}
	
	function maybeCallback(cb) {
	  return typeof cb === 'function' ? cb : rethrow();
	}
	
	var normalize = pathModule.normalize;
	
	// Regexp that finds the next partion of a (partial) path
	// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
	if (isWindows) {
	  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
	} else {
	  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
	}
	
	// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
	if (isWindows) {
	  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
	} else {
	  var splitRootRe = /^[\/]*/;
	}
	
	exports.realpathSync = function realpathSync(p, cache) {
	  // make p is absolute
	  p = pathModule.resolve(p);
	
	  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
	    return cache[p];
	  }
	
	  var original = p,
	      seenLinks = {},
	      knownHard = {};
	
	  // current character position in p
	  var pos;
	  // the partial path so far, including a trailing slash if any
	  var current;
	  // the partial path without a trailing slash (except when pointing at a root)
	  var base;
	  // the partial path scanned in the previous round, with slash
	  var previous;
	
	  start();
	
	  function start() {
	    // Skip over roots
	    var m = splitRootRe.exec(p);
	    pos = m[0].length;
	    current = m[0];
	    base = m[0];
	    previous = '';
	
	    // On windows, check that the root exists. On unix there is no need.
	    if (isWindows && !knownHard[base]) {
	      fs.lstatSync(base);
	      knownHard[base] = true;
	    }
	  }
	
	  // walk down the path, swapping out linked pathparts for their real
	  // values
	  // NB: p.length changes.
	  while (pos < p.length) {
	    // find the next part
	    nextPartRe.lastIndex = pos;
	    var result = nextPartRe.exec(p);
	    previous = current;
	    current += result[0];
	    base = previous + result[1];
	    pos = nextPartRe.lastIndex;
	
	    // continue if not a symlink
	    if (knownHard[base] || (cache && cache[base] === base)) {
	      continue;
	    }
	
	    var resolvedLink;
	    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
	      // some known symbolic link.  no need to stat again.
	      resolvedLink = cache[base];
	    } else {
	      var stat = fs.lstatSync(base);
	      if (!stat.isSymbolicLink()) {
	        knownHard[base] = true;
	        if (cache) cache[base] = base;
	        continue;
	      }
	
	      // read the link if it wasn't read before
	      // dev/ino always return 0 on windows, so skip the check.
	      var linkTarget = null;
	      if (!isWindows) {
	        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
	        if (seenLinks.hasOwnProperty(id)) {
	          linkTarget = seenLinks[id];
	        }
	      }
	      if (linkTarget === null) {
	        fs.statSync(base);
	        linkTarget = fs.readlinkSync(base);
	      }
	      resolvedLink = pathModule.resolve(previous, linkTarget);
	      // track this, if given a cache.
	      if (cache) cache[base] = resolvedLink;
	      if (!isWindows) seenLinks[id] = linkTarget;
	    }
	
	    // resolve the link, then start over
	    p = pathModule.resolve(resolvedLink, p.slice(pos));
	    start();
	  }
	
	  if (cache) cache[original] = p;
	
	  return p;
	};
	
	
	exports.realpath = function realpath(p, cache, cb) {
	  if (typeof cb !== 'function') {
	    cb = maybeCallback(cache);
	    cache = null;
	  }
	
	  // make p is absolute
	  p = pathModule.resolve(p);
	
	  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
	    return process.nextTick(cb.bind(null, null, cache[p]));
	  }
	
	  var original = p,
	      seenLinks = {},
	      knownHard = {};
	
	  // current character position in p
	  var pos;
	  // the partial path so far, including a trailing slash if any
	  var current;
	  // the partial path without a trailing slash (except when pointing at a root)
	  var base;
	  // the partial path scanned in the previous round, with slash
	  var previous;
	
	  start();
	
	  function start() {
	    // Skip over roots
	    var m = splitRootRe.exec(p);
	    pos = m[0].length;
	    current = m[0];
	    base = m[0];
	    previous = '';
	
	    // On windows, check that the root exists. On unix there is no need.
	    if (isWindows && !knownHard[base]) {
	      fs.lstat(base, function(err) {
	        if (err) return cb(err);
	        knownHard[base] = true;
	        LOOP();
	      });
	    } else {
	      process.nextTick(LOOP);
	    }
	  }
	
	  // walk down the path, swapping out linked pathparts for their real
	  // values
	  function LOOP() {
	    // stop if scanned past end of path
	    if (pos >= p.length) {
	      if (cache) cache[original] = p;
	      return cb(null, p);
	    }
	
	    // find the next part
	    nextPartRe.lastIndex = pos;
	    var result = nextPartRe.exec(p);
	    previous = current;
	    current += result[0];
	    base = previous + result[1];
	    pos = nextPartRe.lastIndex;
	
	    // continue if not a symlink
	    if (knownHard[base] || (cache && cache[base] === base)) {
	      return process.nextTick(LOOP);
	    }
	
	    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
	      // known symbolic link.  no need to stat again.
	      return gotResolvedLink(cache[base]);
	    }
	
	    return fs.lstat(base, gotStat);
	  }
	
	  function gotStat(err, stat) {
	    if (err) return cb(err);
	
	    // if not a symlink, skip to the next path part
	    if (!stat.isSymbolicLink()) {
	      knownHard[base] = true;
	      if (cache) cache[base] = base;
	      return process.nextTick(LOOP);
	    }
	
	    // stat & read the link if not read before
	    // call gotTarget as soon as the link target is known
	    // dev/ino always return 0 on windows, so skip the check.
	    if (!isWindows) {
	      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
	      if (seenLinks.hasOwnProperty(id)) {
	        return gotTarget(null, seenLinks[id], base);
	      }
	    }
	    fs.stat(base, function(err) {
	      if (err) return cb(err);
	
	      fs.readlink(base, function(err, target) {
	        if (!isWindows) seenLinks[id] = target;
	        gotTarget(err, target);
	      });
	    });
	  }
	
	  function gotTarget(err, target, base) {
	    if (err) return cb(err);
	
	    var resolvedLink = pathModule.resolve(previous, target);
	    if (cache) cache[base] = resolvedLink;
	    gotResolvedLink(resolvedLink);
	  }
	
	  function gotResolvedLink(resolvedLink) {
	    // resolve the link, then start over
	    p = pathModule.resolve(resolvedLink, p.slice(pos));
	    start();
	  }
	};


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = minimatch
	minimatch.Minimatch = Minimatch
	
	var path = { sep: '/' }
	try {
	  path = __webpack_require__(341)
	} catch (er) {}
	
	var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
	var expand = __webpack_require__(482)
	
	var plTypes = {
	  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
	  '?': { open: '(?:', close: ')?' },
	  '+': { open: '(?:', close: ')+' },
	  '*': { open: '(?:', close: ')*' },
	  '@': { open: '(?:', close: ')' }
	}
	
	// any single thing other than /
	// don't need to escape / when using new RegExp()
	var qmark = '[^/]'
	
	// * => any number of characters
	var star = qmark + '*?'
	
	// ** when dots are allowed.  Anything goes, except .. and .
	// not (^ or / followed by one or two dots followed by $ or /),
	// followed by anything, any number of times.
	var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'
	
	// not a ^ or / followed by a dot,
	// followed by anything, any number of times.
	var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'
	
	// characters that need to be escaped in RegExp.
	var reSpecials = charSet('().*{}+?[]^$\\!')
	
	// "abc" -> { a:true, b:true, c:true }
	function charSet (s) {
	  return s.split('').reduce(function (set, c) {
	    set[c] = true
	    return set
	  }, {})
	}
	
	// normalizes slashes.
	var slashSplit = /\/+/
	
	minimatch.filter = filter
	function filter (pattern, options) {
	  options = options || {}
	  return function (p, i, list) {
	    return minimatch(p, pattern, options)
	  }
	}
	
	function ext (a, b) {
	  a = a || {}
	  b = b || {}
	  var t = {}
	  Object.keys(b).forEach(function (k) {
	    t[k] = b[k]
	  })
	  Object.keys(a).forEach(function (k) {
	    t[k] = a[k]
	  })
	  return t
	}
	
	minimatch.defaults = function (def) {
	  if (!def || !Object.keys(def).length) return minimatch
	
	  var orig = minimatch
	
	  var m = function minimatch (p, pattern, options) {
	    return orig.minimatch(p, pattern, ext(def, options))
	  }
	
	  m.Minimatch = function Minimatch (pattern, options) {
	    return new orig.Minimatch(pattern, ext(def, options))
	  }
	
	  return m
	}
	
	Minimatch.defaults = function (def) {
	  if (!def || !Object.keys(def).length) return Minimatch
	  return minimatch.defaults(def).Minimatch
	}
	
	function minimatch (p, pattern, options) {
	  if (typeof pattern !== 'string') {
	    throw new TypeError('glob pattern string required')
	  }
	
	  if (!options) options = {}
	
	  // shortcut: comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    return false
	  }
	
	  // "" only matches ""
	  if (pattern.trim() === '') return p === ''
	
	  return new Minimatch(pattern, options).match(p)
	}
	
	function Minimatch (pattern, options) {
	  if (!(this instanceof Minimatch)) {
	    return new Minimatch(pattern, options)
	  }
	
	  if (typeof pattern !== 'string') {
	    throw new TypeError('glob pattern string required')
	  }
	
	  if (!options) options = {}
	  pattern = pattern.trim()
	
	  // windows support: need to use /, not \
	  if (path.sep !== '/') {
	    pattern = pattern.split(path.sep).join('/')
	  }
	
	  this.options = options
	  this.set = []
	  this.pattern = pattern
	  this.regexp = null
	  this.negate = false
	  this.comment = false
	  this.empty = false
	
	  // make the set of regexps etc.
	  this.make()
	}
	
	Minimatch.prototype.debug = function () {}
	
	Minimatch.prototype.make = make
	function make () {
	  // don't do it more than once.
	  if (this._made) return
	
	  var pattern = this.pattern
	  var options = this.options
	
	  // empty patterns and comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    this.comment = true
	    return
	  }
	  if (!pattern) {
	    this.empty = true
	    return
	  }
	
	  // step 1: figure out negation, etc.
	  this.parseNegate()
	
	  // step 2: expand braces
	  var set = this.globSet = this.braceExpand()
	
	  if (options.debug) this.debug = console.error
	
	  this.debug(this.pattern, set)
	
	  // step 3: now we have a set, so turn each one into a series of path-portion
	  // matching patterns.
	  // These will be regexps, except in the case of "**", which is
	  // set to the GLOBSTAR object for globstar behavior,
	  // and will not contain any / characters
	  set = this.globParts = set.map(function (s) {
	    return s.split(slashSplit)
	  })
	
	  this.debug(this.pattern, set)
	
	  // glob --> regexps
	  set = set.map(function (s, si, set) {
	    return s.map(this.parse, this)
	  }, this)
	
	  this.debug(this.pattern, set)
	
	  // filter out everything that didn't compile properly.
	  set = set.filter(function (s) {
	    return s.indexOf(false) === -1
	  })
	
	  this.debug(this.pattern, set)
	
	  this.set = set
	}
	
	Minimatch.prototype.parseNegate = parseNegate
	function parseNegate () {
	  var pattern = this.pattern
	  var negate = false
	  var options = this.options
	  var negateOffset = 0
	
	  if (options.nonegate) return
	
	  for (var i = 0, l = pattern.length
	    ; i < l && pattern.charAt(i) === '!'
	    ; i++) {
	    negate = !negate
	    negateOffset++
	  }
	
	  if (negateOffset) this.pattern = pattern.substr(negateOffset)
	  this.negate = negate
	}
	
	// Brace expansion:
	// a{b,c}d -> abd acd
	// a{b,}c -> abc ac
	// a{0..3}d -> a0d a1d a2d a3d
	// a{b,c{d,e}f}g -> abg acdfg acefg
	// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
	//
	// Invalid sets are not expanded.
	// a{2..}b -> a{2..}b
	// a{b}c -> a{b}c
	minimatch.braceExpand = function (pattern, options) {
	  return braceExpand(pattern, options)
	}
	
	Minimatch.prototype.braceExpand = braceExpand
	
	function braceExpand (pattern, options) {
	  if (!options) {
	    if (this instanceof Minimatch) {
	      options = this.options
	    } else {
	      options = {}
	    }
	  }
	
	  pattern = typeof pattern === 'undefined'
	    ? this.pattern : pattern
	
	  if (typeof pattern === 'undefined') {
	    throw new TypeError('undefined pattern')
	  }
	
	  if (options.nobrace ||
	    !pattern.match(/\{.*\}/)) {
	    // shortcut. no need to expand.
	    return [pattern]
	  }
	
	  return expand(pattern)
	}
	
	// parse a component of the expanded set.
	// At this point, no pattern may contain "/" in it
	// so we're going to return a 2d array, where each entry is the full
	// pattern, split on '/', and then turned into a regular expression.
	// A regexp is made at the end which joins each array with an
	// escaped /, and another full one which joins each regexp with |.
	//
	// Following the lead of Bash 4.1, note that "**" only has special meaning
	// when it is the *only* thing in a path portion.  Otherwise, any series
	// of * is equivalent to a single *.  Globstar behavior is enabled by
	// default, and can be disabled by setting options.noglobstar.
	Minimatch.prototype.parse = parse
	var SUBPARSE = {}
	function parse (pattern, isSub) {
	  if (pattern.length > 1024 * 64) {
	    throw new TypeError('pattern is too long')
	  }
	
	  var options = this.options
	
	  // shortcuts
	  if (!options.noglobstar && pattern === '**') return GLOBSTAR
	  if (pattern === '') return ''
	
	  var re = ''
	  var hasMagic = !!options.nocase
	  var escaping = false
	  // ? => one single character
	  var patternListStack = []
	  var negativeLists = []
	  var stateChar
	  var inClass = false
	  var reClassStart = -1
	  var classStart = -1
	  // . and .. never match anything that doesn't start with .,
	  // even when options.dot is set.
	  var patternStart = pattern.charAt(0) === '.' ? '' // anything
	  // not (start or / followed by . or .. followed by / or end)
	  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
	  : '(?!\\.)'
	  var self = this
	
	  function clearStateChar () {
	    if (stateChar) {
	      // we had some state-tracking character
	      // that wasn't consumed by this pass.
	      switch (stateChar) {
	        case '*':
	          re += star
	          hasMagic = true
	        break
	        case '?':
	          re += qmark
	          hasMagic = true
	        break
	        default:
	          re += '\\' + stateChar
	        break
	      }
	      self.debug('clearStateChar %j %j', stateChar, re)
	      stateChar = false
	    }
	  }
	
	  for (var i = 0, len = pattern.length, c
	    ; (i < len) && (c = pattern.charAt(i))
	    ; i++) {
	    this.debug('%s\t%s %s %j', pattern, i, re, c)
	
	    // skip over any that are escaped.
	    if (escaping && reSpecials[c]) {
	      re += '\\' + c
	      escaping = false
	      continue
	    }
	
	    switch (c) {
	      case '/':
	        // completely not allowed, even escaped.
	        // Should already be path-split by now.
	        return false
	
	      case '\\':
	        clearStateChar()
	        escaping = true
	      continue
	
	      // the various stateChar values
	      // for the "extglob" stuff.
	      case '?':
	      case '*':
	      case '+':
	      case '@':
	      case '!':
	        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)
	
	        // all of those are literals inside a class, except that
	        // the glob [!a] means [^a] in regexp
	        if (inClass) {
	          this.debug('  in class')
	          if (c === '!' && i === classStart + 1) c = '^'
	          re += c
	          continue
	        }
	
	        // if we already have a stateChar, then it means
	        // that there was something like ** or +? in there.
	        // Handle the stateChar, then proceed with this one.
	        self.debug('call clearStateChar %j', stateChar)
	        clearStateChar()
	        stateChar = c
	        // if extglob is disabled, then +(asdf|foo) isn't a thing.
	        // just clear the statechar *now*, rather than even diving into
	        // the patternList stuff.
	        if (options.noext) clearStateChar()
	      continue
	
	      case '(':
	        if (inClass) {
	          re += '('
	          continue
	        }
	
	        if (!stateChar) {
	          re += '\\('
	          continue
	        }
	
	        patternListStack.push({
	          type: stateChar,
	          start: i - 1,
	          reStart: re.length,
	          open: plTypes[stateChar].open,
	          close: plTypes[stateChar].close
	        })
	        // negation is (?:(?!js)[^/]*)
	        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
	        this.debug('plType %j %j', stateChar, re)
	        stateChar = false
	      continue
	
	      case ')':
	        if (inClass || !patternListStack.length) {
	          re += '\\)'
	          continue
	        }
	
	        clearStateChar()
	        hasMagic = true
	        var pl = patternListStack.pop()
	        // negation is (?:(?!js)[^/]*)
	        // The others are (?:<pattern>)<type>
	        re += pl.close
	        if (pl.type === '!') {
	          negativeLists.push(pl)
	        }
	        pl.reEnd = re.length
	      continue
	
	      case '|':
	        if (inClass || !patternListStack.length || escaping) {
	          re += '\\|'
	          escaping = false
	          continue
	        }
	
	        clearStateChar()
	        re += '|'
	      continue
	
	      // these are mostly the same in regexp and glob
	      case '[':
	        // swallow any state-tracking char before the [
	        clearStateChar()
	
	        if (inClass) {
	          re += '\\' + c
	          continue
	        }
	
	        inClass = true
	        classStart = i
	        reClassStart = re.length
	        re += c
	      continue
	
	      case ']':
	        //  a right bracket shall lose its special
	        //  meaning and represent itself in
	        //  a bracket expression if it occurs
	        //  first in the list.  -- POSIX.2 2.8.3.2
	        if (i === classStart + 1 || !inClass) {
	          re += '\\' + c
	          escaping = false
	          continue
	        }
	
	        // handle the case where we left a class open.
	        // "[z-a]" is valid, equivalent to "\[z-a\]"
	        if (inClass) {
	          // split where the last [ was, make sure we don't have
	          // an invalid re. if so, re-walk the contents of the
	          // would-be class to re-translate any characters that
	          // were passed through as-is
	          // TODO: It would probably be faster to determine this
	          // without a try/catch and a new RegExp, but it's tricky
	          // to do safely.  For now, this is safe and works.
	          var cs = pattern.substring(classStart + 1, i)
	          try {
	            RegExp('[' + cs + ']')
	          } catch (er) {
	            // not a valid class!
	            var sp = this.parse(cs, SUBPARSE)
	            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
	            hasMagic = hasMagic || sp[1]
	            inClass = false
	            continue
	          }
	        }
	
	        // finish up the class.
	        hasMagic = true
	        inClass = false
	        re += c
	      continue
	
	      default:
	        // swallow any state char that wasn't consumed
	        clearStateChar()
	
	        if (escaping) {
	          // no need
	          escaping = false
	        } else if (reSpecials[c]
	          && !(c === '^' && inClass)) {
	          re += '\\'
	        }
	
	        re += c
	
	    } // switch
	  } // for
	
	  // handle the case where we left a class open.
	  // "[abc" is valid, equivalent to "\[abc"
	  if (inClass) {
	    // split where the last [ was, and escape it
	    // this is a huge pita.  We now have to re-walk
	    // the contents of the would-be class to re-translate
	    // any characters that were passed through as-is
	    cs = pattern.substr(classStart + 1)
	    sp = this.parse(cs, SUBPARSE)
	    re = re.substr(0, reClassStart) + '\\[' + sp[0]
	    hasMagic = hasMagic || sp[1]
	  }
	
	  // handle the case where we had a +( thing at the *end*
	  // of the pattern.
	  // each pattern list stack adds 3 chars, and we need to go through
	  // and escape any | chars that were passed through as-is for the regexp.
	  // Go through and escape them, taking care not to double-escape any
	  // | chars that were already escaped.
	  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
	    var tail = re.slice(pl.reStart + pl.open.length)
	    this.debug('setting tail', re, pl)
	    // maybe some even number of \, then maybe 1 \, followed by a |
	    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
	      if (!$2) {
	        // the | isn't already escaped, so escape it.
	        $2 = '\\'
	      }
	
	      // need to escape all those slashes *again*, without escaping the
	      // one that we need for escaping the | character.  As it works out,
	      // escaping an even number of slashes can be done by simply repeating
	      // it exactly after itself.  That's why this trick works.
	      //
	      // I am sorry that you have to see this.
	      return $1 + $1 + $2 + '|'
	    })
	
	    this.debug('tail=%j\n   %s', tail, tail, pl, re)
	    var t = pl.type === '*' ? star
	      : pl.type === '?' ? qmark
	      : '\\' + pl.type
	
	    hasMagic = true
	    re = re.slice(0, pl.reStart) + t + '\\(' + tail
	  }
	
	  // handle trailing things that only matter at the very end.
	  clearStateChar()
	  if (escaping) {
	    // trailing \\
	    re += '\\\\'
	  }
	
	  // only need to apply the nodot start if the re starts with
	  // something that could conceivably capture a dot
	  var addPatternStart = false
	  switch (re.charAt(0)) {
	    case '.':
	    case '[':
	    case '(': addPatternStart = true
	  }
	
	  // Hack to work around lack of negative lookbehind in JS
	  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
	  // like 'a.xyz.yz' doesn't match.  So, the first negative
	  // lookahead, has to look ALL the way ahead, to the end of
	  // the pattern.
	  for (var n = negativeLists.length - 1; n > -1; n--) {
	    var nl = negativeLists[n]
	
	    var nlBefore = re.slice(0, nl.reStart)
	    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
	    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
	    var nlAfter = re.slice(nl.reEnd)
	
	    nlLast += nlAfter
	
	    // Handle nested stuff like *(*.js|!(*.json)), where open parens
	    // mean that we should *not* include the ) in the bit that is considered
	    // "after" the negated section.
	    var openParensBefore = nlBefore.split('(').length - 1
	    var cleanAfter = nlAfter
	    for (i = 0; i < openParensBefore; i++) {
	      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
	    }
	    nlAfter = cleanAfter
	
	    var dollar = ''
	    if (nlAfter === '' && isSub !== SUBPARSE) {
	      dollar = '$'
	    }
	    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
	    re = newRe
	  }
	
	  // if the re is not "" at this point, then we need to make sure
	  // it doesn't match against an empty path part.
	  // Otherwise a/* will match a/, which it should not.
	  if (re !== '' && hasMagic) {
	    re = '(?=.)' + re
	  }
	
	  if (addPatternStart) {
	    re = patternStart + re
	  }
	
	  // parsing just a piece of a larger pattern.
	  if (isSub === SUBPARSE) {
	    return [re, hasMagic]
	  }
	
	  // skip the regexp for non-magical patterns
	  // unescape anything in it, though, so that it'll be
	  // an exact match against a file etc.
	  if (!hasMagic) {
	    return globUnescape(pattern)
	  }
	
	  var flags = options.nocase ? 'i' : ''
	  try {
	    var regExp = new RegExp('^' + re + '$', flags)
	  } catch (er) {
	    // If it was an invalid regular expression, then it can't match
	    // anything.  This trick looks for a character after the end of
	    // the string, which is of course impossible, except in multi-line
	    // mode, but it's not a /m regex.
	    return new RegExp('$.')
	  }
	
	  regExp._glob = pattern
	  regExp._src = re
	
	  return regExp
	}
	
	minimatch.makeRe = function (pattern, options) {
	  return new Minimatch(pattern, options || {}).makeRe()
	}
	
	Minimatch.prototype.makeRe = makeRe
	function makeRe () {
	  if (this.regexp || this.regexp === false) return this.regexp
	
	  // at this point, this.set is a 2d array of partial
	  // pattern strings, or "**".
	  //
	  // It's better to use .match().  This function shouldn't
	  // be used, really, but it's pretty convenient sometimes,
	  // when you just want to work with a regex.
	  var set = this.set
	
	  if (!set.length) {
	    this.regexp = false
	    return this.regexp
	  }
	  var options = this.options
	
	  var twoStar = options.noglobstar ? star
	    : options.dot ? twoStarDot
	    : twoStarNoDot
	  var flags = options.nocase ? 'i' : ''
	
	  var re = set.map(function (pattern) {
	    return pattern.map(function (p) {
	      return (p === GLOBSTAR) ? twoStar
	      : (typeof p === 'string') ? regExpEscape(p)
	      : p._src
	    }).join('\\\/')
	  }).join('|')
	
	  // must match entire pattern
	  // ending in a * or ** will make it less strict.
	  re = '^(?:' + re + ')$'
	
	  // can match anything, as long as it's not this.
	  if (this.negate) re = '^(?!' + re + ').*$'
	
	  try {
	    this.regexp = new RegExp(re, flags)
	  } catch (ex) {
	    this.regexp = false
	  }
	  return this.regexp
	}
	
	minimatch.match = function (list, pattern, options) {
	  options = options || {}
	  var mm = new Minimatch(pattern, options)
	  list = list.filter(function (f) {
	    return mm.match(f)
	  })
	  if (mm.options.nonull && !list.length) {
	    list.push(pattern)
	  }
	  return list
	}
	
	Minimatch.prototype.match = match
	function match (f, partial) {
	  this.debug('match', f, this.pattern)
	  // short-circuit in the case of busted things.
	  // comments, etc.
	  if (this.comment) return false
	  if (this.empty) return f === ''
	
	  if (f === '/' && partial) return true
	
	  var options = this.options
	
	  // windows: need to use /, not \
	  if (path.sep !== '/') {
	    f = f.split(path.sep).join('/')
	  }
	
	  // treat the test path as a set of pathparts.
	  f = f.split(slashSplit)
	  this.debug(this.pattern, 'split', f)
	
	  // just ONE of the pattern sets in this.set needs to match
	  // in order for it to be valid.  If negating, then just one
	  // match means that we have failed.
	  // Either way, return on the first hit.
	
	  var set = this.set
	  this.debug(this.pattern, 'set', set)
	
	  // Find the basename of the path by looking for the last non-empty segment
	  var filename
	  var i
	  for (i = f.length - 1; i >= 0; i--) {
	    filename = f[i]
	    if (filename) break
	  }
	
	  for (i = 0; i < set.length; i++) {
	    var pattern = set[i]
	    var file = f
	    if (options.matchBase && pattern.length === 1) {
	      file = [filename]
	    }
	    var hit = this.matchOne(file, pattern, partial)
	    if (hit) {
	      if (options.flipNegate) return true
	      return !this.negate
	    }
	  }
	
	  // didn't get any hits.  this is success if it's a negative
	  // pattern, failure otherwise.
	  if (options.flipNegate) return false
	  return this.negate
	}
	
	// set partial to true to test if, for example,
	// "/a/b" matches the start of "/*/b/*/d"
	// Partial means, if you run out of file before you run
	// out of pattern, then that's fine, as long as all
	// the parts match.
	Minimatch.prototype.matchOne = function (file, pattern, partial) {
	  var options = this.options
	
	  this.debug('matchOne',
	    { 'this': this, file: file, pattern: pattern })
	
	  this.debug('matchOne', file.length, pattern.length)
	
	  for (var fi = 0,
	      pi = 0,
	      fl = file.length,
	      pl = pattern.length
	      ; (fi < fl) && (pi < pl)
	      ; fi++, pi++) {
	    this.debug('matchOne loop')
	    var p = pattern[pi]
	    var f = file[fi]
	
	    this.debug(pattern, p, f)
	
	    // should be impossible.
	    // some invalid regexp stuff in the set.
	    if (p === false) return false
	
	    if (p === GLOBSTAR) {
	      this.debug('GLOBSTAR', [pattern, p, f])
	
	      // "**"
	      // a/**/b/**/c would match the following:
	      // a/b/x/y/z/c
	      // a/x/y/z/b/c
	      // a/b/x/b/x/c
	      // a/b/c
	      // To do this, take the rest of the pattern after
	      // the **, and see if it would match the file remainder.
	      // If so, return success.
	      // If not, the ** "swallows" a segment, and try again.
	      // This is recursively awful.
	      //
	      // a/**/b/**/c matching a/b/x/y/z/c
	      // - a matches a
	      // - doublestar
	      //   - matchOne(b/x/y/z/c, b/**/c)
	      //     - b matches b
	      //     - doublestar
	      //       - matchOne(x/y/z/c, c) -> no
	      //       - matchOne(y/z/c, c) -> no
	      //       - matchOne(z/c, c) -> no
	      //       - matchOne(c, c) yes, hit
	      var fr = fi
	      var pr = pi + 1
	      if (pr === pl) {
	        this.debug('** at the end')
	        // a ** at the end will just swallow the rest.
	        // We have found a match.
	        // however, it will not swallow /.x, unless
	        // options.dot is set.
	        // . and .. are *never* matched by **, for explosively
	        // exponential reasons.
	        for (; fi < fl; fi++) {
	          if (file[fi] === '.' || file[fi] === '..' ||
	            (!options.dot && file[fi].charAt(0) === '.')) return false
	        }
	        return true
	      }
	
	      // ok, let's see if we can swallow whatever we can.
	      while (fr < fl) {
	        var swallowee = file[fr]
	
	        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)
	
	        // XXX remove this slice.  Just pass the start index.
	        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
	          this.debug('globstar found match!', fr, fl, swallowee)
	          // found a match.
	          return true
	        } else {
	          // can't swallow "." or ".." ever.
	          // can only swallow ".foo" when explicitly asked.
	          if (swallowee === '.' || swallowee === '..' ||
	            (!options.dot && swallowee.charAt(0) === '.')) {
	            this.debug('dot detected!', file, fr, pattern, pr)
	            break
	          }
	
	          // ** swallows a segment, and continue.
	          this.debug('globstar swallow a segment, and continue')
	          fr++
	        }
	      }
	
	      // no match was found.
	      // However, in partial mode, we can't say this is necessarily over.
	      // If there's more *pattern* left, then
	      if (partial) {
	        // ran out of file
	        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
	        if (fr === fl) return true
	      }
	      return false
	    }
	
	    // something other than **
	    // non-magic patterns just have to match exactly
	    // patterns with magic have been turned into regexps.
	    var hit
	    if (typeof p === 'string') {
	      if (options.nocase) {
	        hit = f.toLowerCase() === p.toLowerCase()
	      } else {
	        hit = f === p
	      }
	      this.debug('string match', p, f, hit)
	    } else {
	      hit = f.match(p)
	      this.debug('pattern match', p, f, hit)
	    }
	
	    if (!hit) return false
	  }
	
	  // Note: ending in / means that we'll get a final ""
	  // at the end of the pattern.  This can only match a
	  // corresponding "" at the end of the file.
	  // If the file ends in /, then it can only match a
	  // a pattern that ends in /, unless the pattern just
	  // doesn't have any more for it. But, a/b/ should *not*
	  // match "a/b/*", even though "" matches against the
	  // [^/]*? pattern, except in partial mode, where it might
	  // simply not be reached yet.
	  // However, a/b/ should still satisfy a/*
	
	  // now either we fell off the end of the pattern, or we're done.
	  if (fi === fl && pi === pl) {
	    // ran out of pattern and filename at the same time.
	    // an exact hit!
	    return true
	  } else if (fi === fl) {
	    // ran out of file, but still had pattern left.
	    // this is ok if we're doing the match as part of
	    // a glob fs traversal.
	    return partial
	  } else if (pi === pl) {
	    // ran out of pattern, still have file left.
	    // this is only acceptable if we're on the very last
	    // empty segment of a file with a trailing slash.
	    // a/* should match a/b/
	    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
	    return emptyFileEnd
	  }
	
	  // should be unreachable.
	  throw new Error('wtf?')
	}
	
	// replace stuff like \* with *
	function globUnescape (s) {
	  return s.replace(/\\(.)/g, '$1')
	}
	
	function regExpEscape (s) {
	  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
	}


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

	var concatMap = __webpack_require__(483);
	var balanced = __webpack_require__(484);
	
	module.exports = expandTop;
	
	var escSlash = '\0SLASH'+Math.random()+'\0';
	var escOpen = '\0OPEN'+Math.random()+'\0';
	var escClose = '\0CLOSE'+Math.random()+'\0';
	var escComma = '\0COMMA'+Math.random()+'\0';
	var escPeriod = '\0PERIOD'+Math.random()+'\0';
	
	function numeric(str) {
	  return parseInt(str, 10) == str
	    ? parseInt(str, 10)
	    : str.charCodeAt(0);
	}
	
	function escapeBraces(str) {
	  return str.split('\\\\').join(escSlash)
	            .split('\\{').join(escOpen)
	            .split('\\}').join(escClose)
	            .split('\\,').join(escComma)
	            .split('\\.').join(escPeriod);
	}
	
	function unescapeBraces(str) {
	  return str.split(escSlash).join('\\')
	            .split(escOpen).join('{')
	            .split(escClose).join('}')
	            .split(escComma).join(',')
	            .split(escPeriod).join('.');
	}
	
	
	// Basically just str.split(","), but handling cases
	// where we have nested braced sections, which should be
	// treated as individual members, like {a,{b,c},d}
	function parseCommaParts(str) {
	  if (!str)
	    return [''];
	
	  var parts = [];
	  var m = balanced('{', '}', str);
	
	  if (!m)
	    return str.split(',');
	
	  var pre = m.pre;
	  var body = m.body;
	  var post = m.post;
	  var p = pre.split(',');
	
	  p[p.length-1] += '{' + body + '}';
	  var postParts = parseCommaParts(post);
	  if (post.length) {
	    p[p.length-1] += postParts.shift();
	    p.push.apply(p, postParts);
	  }
	
	  parts.push.apply(parts, p);
	
	  return parts;
	}
	
	function expandTop(str) {
	  if (!str)
	    return [];
	
	  // I don't know why Bash 4.3 does this, but it does.
	  // Anything starting with {} will have the first two bytes preserved
	  // but *only* at the top level, so {},a}b will not expand to anything,
	  // but a{},b}c will be expanded to [a}c,abc].
	  // One could argue that this is a bug in Bash, but since the goal of
	  // this module is to match Bash's rules, we escape a leading {}
	  if (str.substr(0, 2) === '{}') {
	    str = '\\{\\}' + str.substr(2);
	  }
	
	  return expand(escapeBraces(str), true).map(unescapeBraces);
	}
	
	function identity(e) {
	  return e;
	}
	
	function embrace(str) {
	  return '{' + str + '}';
	}
	function isPadded(el) {
	  return /^-?0\d/.test(el);
	}
	
	function lte(i, y) {
	  return i <= y;
	}
	function gte(i, y) {
	  return i >= y;
	}
	
	function expand(str, isTop) {
	  var expansions = [];
	
	  var m = balanced('{', '}', str);
	  if (!m || /\$$/.test(m.pre)) return [str];
	
	  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
	  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
	  var isSequence = isNumericSequence || isAlphaSequence;
	  var isOptions = m.body.indexOf(',') >= 0;
	  if (!isSequence && !isOptions) {
	    // {a},b}
	    if (m.post.match(/,.*\}/)) {
	      str = m.pre + '{' + m.body + escClose + m.post;
	      return expand(str);
	    }
	    return [str];
	  }
	
	  var n;
	  if (isSequence) {
	    n = m.body.split(/\.\./);
	  } else {
	    n = parseCommaParts(m.body);
	    if (n.length === 1) {
	      // x{{a,b}}y ==> x{a}y x{b}y
	      n = expand(n[0], false).map(embrace);
	      if (n.length === 1) {
	        var post = m.post.length
	          ? expand(m.post, false)
	          : [''];
	        return post.map(function(p) {
	          return m.pre + n[0] + p;
	        });
	      }
	    }
	  }
	
	  // at this point, n is the parts, and we know it's not a comma set
	  // with a single entry.
	
	  // no need to expand pre, since it is guaranteed to be free of brace-sets
	  var pre = m.pre;
	  var post = m.post.length
	    ? expand(m.post, false)
	    : [''];
	
	  var N;
	
	  if (isSequence) {
	    var x = numeric(n[0]);
	    var y = numeric(n[1]);
	    var width = Math.max(n[0].length, n[1].length)
	    var incr = n.length == 3
	      ? Math.abs(numeric(n[2]))
	      : 1;
	    var test = lte;
	    var reverse = y < x;
	    if (reverse) {
	      incr *= -1;
	      test = gte;
	    }
	    var pad = n.some(isPadded);
	
	    N = [];
	
	    for (var i = x; test(i, y); i += incr) {
	      var c;
	      if (isAlphaSequence) {
	        c = String.fromCharCode(i);
	        if (c === '\\')
	          c = '';
	      } else {
	        c = String(i);
	        if (pad) {
	          var need = width - c.length;
	          if (need > 0) {
	            var z = new Array(need + 1).join('0');
	            if (i < 0)
	              c = '-' + z + c.slice(1);
	            else
	              c = z + c;
	          }
	        }
	      }
	      N.push(c);
	    }
	  } else {
	    N = concatMap(n, function(el) { return expand(el, false) });
	  }
	
	  for (var j = 0; j < N.length; j++) {
	    for (var k = 0; k < post.length; k++) {
	      var expansion = pre + N[j] + post[k];
	      if (!isTop || isSequence || expansion)
	        expansions.push(expansion);
	    }
	  }
	
	  return expansions;
	}
	


/***/ }),
/* 483 */
/***/ (function(module, exports) {

	module.exports = function (xs, fn) {
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        var x = fn(xs[i], i);
	        if (isArray(x)) res.push.apply(res, x);
	        else res.push(x);
	    }
	    return res;
	};
	
	var isArray = Array.isArray || function (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
	};


/***/ }),
/* 484 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = balanced;
	function balanced(a, b, str) {
	  if (a instanceof RegExp) a = maybeMatch(a, str);
	  if (b instanceof RegExp) b = maybeMatch(b, str);
	
	  var r = range(a, b, str);
	
	  return r && {
	    start: r[0],
	    end: r[1],
	    pre: str.slice(0, r[0]),
	    body: str.slice(r[0] + a.length, r[1]),
	    post: str.slice(r[1] + b.length)
	  };
	}
	
	function maybeMatch(reg, str) {
	  var m = str.match(reg);
	  return m ? m[0] : null;
	}
	
	balanced.range = range;
	function range(a, b, str) {
	  var begs, beg, left, right, result;
	  var ai = str.indexOf(a);
	  var bi = str.indexOf(b, ai + 1);
	  var i = ai;
	
	  if (ai >= 0 && bi > 0) {
	    begs = [];
	    left = str.length;
	
	    while (i >= 0 && !result) {
	      if (i == ai) {
	        begs.push(i);
	        ai = str.indexOf(a, i + 1);
	      } else if (begs.length == 1) {
	        result = [ begs.pop(), bi ];
	      } else {
	        beg = begs.pop();
	        if (beg < left) {
	          left = beg;
	          right = bi;
	        }
	
	        bi = str.indexOf(b, i + 1);
	      }
	
	      i = ai < bi && ai >= 0 ? ai : bi;
	    }
	
	    if (begs.length) {
	      result = [ left, right ];
	    }
	  }
	
	  return result;
	}


/***/ }),
/* 485 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ }),
/* 486 */
/***/ (function(module, exports) {

	'use strict';
	
	function posix(path) {
		return path.charAt(0) === '/';
	}
	
	function win32(path) {
		// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
		var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
		var result = splitDeviceRe.exec(path);
		var device = result[1] || '';
		var isUnc = Boolean(device && device.charAt(1) !== ':');
	
		// UNC paths are always absolute
		return Boolean(result[2] || isUnc);
	}
	
	module.exports = process.platform === 'win32' ? win32 : posix;
	module.exports.posix = posix;
	module.exports.win32 = win32;


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = globSync
	globSync.GlobSync = GlobSync
	
	var fs = __webpack_require__(339)
	var rp = __webpack_require__(479)
	var minimatch = __webpack_require__(481)
	var Minimatch = minimatch.Minimatch
	var Glob = __webpack_require__(478).Glob
	var util = __webpack_require__(336)
	var path = __webpack_require__(341)
	var assert = __webpack_require__(423)
	var isAbsolute = __webpack_require__(486)
	var common = __webpack_require__(488)
	var alphasort = common.alphasort
	var alphasorti = common.alphasorti
	var setopts = common.setopts
	var ownProp = common.ownProp
	var childrenIgnored = common.childrenIgnored
	var isIgnored = common.isIgnored
	
	function globSync (pattern, options) {
	  if (typeof options === 'function' || arguments.length === 3)
	    throw new TypeError('callback provided to sync glob\n'+
	                        'See: https://github.com/isaacs/node-glob/issues/167')
	
	  return new GlobSync(pattern, options).found
	}
	
	function GlobSync (pattern, options) {
	  if (!pattern)
	    throw new Error('must provide pattern')
	
	  if (typeof options === 'function' || arguments.length === 3)
	    throw new TypeError('callback provided to sync glob\n'+
	                        'See: https://github.com/isaacs/node-glob/issues/167')
	
	  if (!(this instanceof GlobSync))
	    return new GlobSync(pattern, options)
	
	  setopts(this, pattern, options)
	
	  if (this.noprocess)
	    return this
	
	  var n = this.minimatch.set.length
	  this.matches = new Array(n)
	  for (var i = 0; i < n; i ++) {
	    this._process(this.minimatch.set[i], i, false)
	  }
	  this._finish()
	}
	
	GlobSync.prototype._finish = function () {
	  assert(this instanceof GlobSync)
	  if (this.realpath) {
	    var self = this
	    this.matches.forEach(function (matchset, index) {
	      var set = self.matches[index] = Object.create(null)
	      for (var p in matchset) {
	        try {
	          p = self._makeAbs(p)
	          var real = rp.realpathSync(p, self.realpathCache)
	          set[real] = true
	        } catch (er) {
	          if (er.syscall === 'stat')
	            set[self._makeAbs(p)] = true
	          else
	            throw er
	        }
	      }
	    })
	  }
	  common.finish(this)
	}
	
	
	GlobSync.prototype._process = function (pattern, index, inGlobStar) {
	  assert(this instanceof GlobSync)
	
	  // Get the first [n] parts of pattern that are all strings.
	  var n = 0
	  while (typeof pattern[n] === 'string') {
	    n ++
	  }
	  // now n is the index of the first one that is *not* a string.
	
	  // See if there's anything else
	  var prefix
	  switch (n) {
	    // if not, then this is rather simple
	    case pattern.length:
	      this._processSimple(pattern.join('/'), index)
	      return
	
	    case 0:
	      // pattern *starts* with some non-trivial item.
	      // going to readdir(cwd), but not include the prefix in matches.
	      prefix = null
	      break
	
	    default:
	      // pattern has some string bits in the front.
	      // whatever it starts with, whether that's 'absolute' like /foo/bar,
	      // or 'relative' like '../baz'
	      prefix = pattern.slice(0, n).join('/')
	      break
	  }
	
	  var remain = pattern.slice(n)
	
	  // get the list of entries.
	  var read
	  if (prefix === null)
	    read = '.'
	  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
	    if (!prefix || !isAbsolute(prefix))
	      prefix = '/' + prefix
	    read = prefix
	  } else
	    read = prefix
	
	  var abs = this._makeAbs(read)
	
	  //if ignored, skip processing
	  if (childrenIgnored(this, read))
	    return
	
	  var isGlobStar = remain[0] === minimatch.GLOBSTAR
	  if (isGlobStar)
	    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar)
	  else
	    this._processReaddir(prefix, read, abs, remain, index, inGlobStar)
	}
	
	
	GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
	  var entries = this._readdir(abs, inGlobStar)
	
	  // if the abs isn't a dir, then nothing can match!
	  if (!entries)
	    return
	
	  // It will only match dot entries if it starts with a dot, or if
	  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
	  var pn = remain[0]
	  var negate = !!this.minimatch.negate
	  var rawGlob = pn._glob
	  var dotOk = this.dot || rawGlob.charAt(0) === '.'
	
	  var matchedEntries = []
	  for (var i = 0; i < entries.length; i++) {
	    var e = entries[i]
	    if (e.charAt(0) !== '.' || dotOk) {
	      var m
	      if (negate && !prefix) {
	        m = !e.match(pn)
	      } else {
	        m = e.match(pn)
	      }
	      if (m)
	        matchedEntries.push(e)
	    }
	  }
	
	  var len = matchedEntries.length
	  // If there are no matched entries, then nothing matches.
	  if (len === 0)
	    return
	
	  // if this is the last remaining pattern bit, then no need for
	  // an additional stat *unless* the user has specified mark or
	  // stat explicitly.  We know they exist, since readdir returned
	  // them.
	
	  if (remain.length === 1 && !this.mark && !this.stat) {
	    if (!this.matches[index])
	      this.matches[index] = Object.create(null)
	
	    for (var i = 0; i < len; i ++) {
	      var e = matchedEntries[i]
	      if (prefix) {
	        if (prefix.slice(-1) !== '/')
	          e = prefix + '/' + e
	        else
	          e = prefix + e
	      }
	
	      if (e.charAt(0) === '/' && !this.nomount) {
	        e = path.join(this.root, e)
	      }
	      this._emitMatch(index, e)
	    }
	    // This was the last one, and no stats were needed
	    return
	  }
	
	  // now test all matched entries as stand-ins for that part
	  // of the pattern.
	  remain.shift()
	  for (var i = 0; i < len; i ++) {
	    var e = matchedEntries[i]
	    var newPattern
	    if (prefix)
	      newPattern = [prefix, e]
	    else
	      newPattern = [e]
	    this._process(newPattern.concat(remain), index, inGlobStar)
	  }
	}
	
	
	GlobSync.prototype._emitMatch = function (index, e) {
	  if (isIgnored(this, e))
	    return
	
	  var abs = this._makeAbs(e)
	
	  if (this.mark)
	    e = this._mark(e)
	
	  if (this.absolute) {
	    e = abs
	  }
	
	  if (this.matches[index][e])
	    return
	
	  if (this.nodir) {
	    var c = this.cache[abs]
	    if (c === 'DIR' || Array.isArray(c))
	      return
	  }
	
	  this.matches[index][e] = true
	
	  if (this.stat)
	    this._stat(e)
	}
	
	
	GlobSync.prototype._readdirInGlobStar = function (abs) {
	  // follow all symlinked directories forever
	  // just proceed as if this is a non-globstar situation
	  if (this.follow)
	    return this._readdir(abs, false)
	
	  var entries
	  var lstat
	  var stat
	  try {
	    lstat = fs.lstatSync(abs)
	  } catch (er) {
	    if (er.code === 'ENOENT') {
	      // lstat failed, doesn't exist
	      return null
	    }
	  }
	
	  var isSym = lstat && lstat.isSymbolicLink()
	  this.symlinks[abs] = isSym
	
	  // If it's not a symlink or a dir, then it's definitely a regular file.
	  // don't bother doing a readdir in that case.
	  if (!isSym && lstat && !lstat.isDirectory())
	    this.cache[abs] = 'FILE'
	  else
	    entries = this._readdir(abs, false)
	
	  return entries
	}
	
	GlobSync.prototype._readdir = function (abs, inGlobStar) {
	  var entries
	
	  if (inGlobStar && !ownProp(this.symlinks, abs))
	    return this._readdirInGlobStar(abs)
	
	  if (ownProp(this.cache, abs)) {
	    var c = this.cache[abs]
	    if (!c || c === 'FILE')
	      return null
	
	    if (Array.isArray(c))
	      return c
	  }
	
	  try {
	    return this._readdirEntries(abs, fs.readdirSync(abs))
	  } catch (er) {
	    this._readdirError(abs, er)
	    return null
	  }
	}
	
	GlobSync.prototype._readdirEntries = function (abs, entries) {
	  // if we haven't asked to stat everything, then just
	  // assume that everything in there exists, so we can avoid
	  // having to stat it a second time.
	  if (!this.mark && !this.stat) {
	    for (var i = 0; i < entries.length; i ++) {
	      var e = entries[i]
	      if (abs === '/')
	        e = abs + e
	      else
	        e = abs + '/' + e
	      this.cache[e] = true
	    }
	  }
	
	  this.cache[abs] = entries
	
	  // mark and cache dir-ness
	  return entries
	}
	
	GlobSync.prototype._readdirError = function (f, er) {
	  // handle errors, and cache the information
	  switch (er.code) {
	    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
	    case 'ENOTDIR': // totally normal. means it *does* exist.
	      var abs = this._makeAbs(f)
	      this.cache[abs] = 'FILE'
	      if (abs === this.cwdAbs) {
	        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
	        error.path = this.cwd
	        error.code = er.code
	        throw error
	      }
	      break
	
	    case 'ENOENT': // not terribly unusual
	    case 'ELOOP':
	    case 'ENAMETOOLONG':
	    case 'UNKNOWN':
	      this.cache[this._makeAbs(f)] = false
	      break
	
	    default: // some unusual error.  Treat as failure.
	      this.cache[this._makeAbs(f)] = false
	      if (this.strict)
	        throw er
	      if (!this.silent)
	        console.error('glob error', er)
	      break
	  }
	}
	
	GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {
	
	  var entries = this._readdir(abs, inGlobStar)
	
	  // no entries means not a dir, so it can never have matches
	  // foo.txt/** doesn't match foo.txt
	  if (!entries)
	    return
	
	  // test without the globstar, and with every child both below
	  // and replacing the globstar.
	  var remainWithoutGlobStar = remain.slice(1)
	  var gspref = prefix ? [ prefix ] : []
	  var noGlobStar = gspref.concat(remainWithoutGlobStar)
	
	  // the noGlobStar pattern exits the inGlobStar state
	  this._process(noGlobStar, index, false)
	
	  var len = entries.length
	  var isSym = this.symlinks[abs]
	
	  // If it's a symlink, and we're in a globstar, then stop
	  if (isSym && inGlobStar)
	    return
	
	  for (var i = 0; i < len; i++) {
	    var e = entries[i]
	    if (e.charAt(0) === '.' && !this.dot)
	      continue
	
	    // these two cases enter the inGlobStar state
	    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
	    this._process(instead, index, true)
	
	    var below = gspref.concat(entries[i], remain)
	    this._process(below, index, true)
	  }
	}
	
	GlobSync.prototype._processSimple = function (prefix, index) {
	  // XXX review this.  Shouldn't it be doing the mounting etc
	  // before doing stat?  kinda weird?
	  var exists = this._stat(prefix)
	
	  if (!this.matches[index])
	    this.matches[index] = Object.create(null)
	
	  // If it doesn't exist, then just mark the lack of results
	  if (!exists)
	    return
	
	  if (prefix && isAbsolute(prefix) && !this.nomount) {
	    var trail = /[\/\\]$/.test(prefix)
	    if (prefix.charAt(0) === '/') {
	      prefix = path.join(this.root, prefix)
	    } else {
	      prefix = path.resolve(this.root, prefix)
	      if (trail)
	        prefix += '/'
	    }
	  }
	
	  if (process.platform === 'win32')
	    prefix = prefix.replace(/\\/g, '/')
	
	  // Mark this as a match
	  this._emitMatch(index, prefix)
	}
	
	// Returns either 'DIR', 'FILE', or false
	GlobSync.prototype._stat = function (f) {
	  var abs = this._makeAbs(f)
	  var needDir = f.slice(-1) === '/'
	
	  if (f.length > this.maxLength)
	    return false
	
	  if (!this.stat && ownProp(this.cache, abs)) {
	    var c = this.cache[abs]
	
	    if (Array.isArray(c))
	      c = 'DIR'
	
	    // It exists, but maybe not how we need it
	    if (!needDir || c === 'DIR')
	      return c
	
	    if (needDir && c === 'FILE')
	      return false
	
	    // otherwise we have to stat, because maybe c=true
	    // if we know it exists, but not what it is.
	  }
	
	  var exists
	  var stat = this.statCache[abs]
	  if (!stat) {
	    var lstat
	    try {
	      lstat = fs.lstatSync(abs)
	    } catch (er) {
	      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
	        this.statCache[abs] = false
	        return false
	      }
	    }
	
	    if (lstat && lstat.isSymbolicLink()) {
	      try {
	        stat = fs.statSync(abs)
	      } catch (er) {
	        stat = lstat
	      }
	    } else {
	      stat = lstat
	    }
	  }
	
	  this.statCache[abs] = stat
	
	  var c = true
	  if (stat)
	    c = stat.isDirectory() ? 'DIR' : 'FILE'
	
	  this.cache[abs] = this.cache[abs] || c
	
	  if (needDir && c === 'FILE')
	    return false
	
	  return c
	}
	
	GlobSync.prototype._mark = function (p) {
	  return common.mark(this, p)
	}
	
	GlobSync.prototype._makeAbs = function (f) {
	  return common.makeAbs(this, f)
	}


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

	exports.alphasort = alphasort
	exports.alphasorti = alphasorti
	exports.setopts = setopts
	exports.ownProp = ownProp
	exports.makeAbs = makeAbs
	exports.finish = finish
	exports.mark = mark
	exports.isIgnored = isIgnored
	exports.childrenIgnored = childrenIgnored
	
	function ownProp (obj, field) {
	  return Object.prototype.hasOwnProperty.call(obj, field)
	}
	
	var path = __webpack_require__(341)
	var minimatch = __webpack_require__(481)
	var isAbsolute = __webpack_require__(486)
	var Minimatch = minimatch.Minimatch
	
	function alphasorti (a, b) {
	  return a.toLowerCase().localeCompare(b.toLowerCase())
	}
	
	function alphasort (a, b) {
	  return a.localeCompare(b)
	}
	
	function setupIgnores (self, options) {
	  self.ignore = options.ignore || []
	
	  if (!Array.isArray(self.ignore))
	    self.ignore = [self.ignore]
	
	  if (self.ignore.length) {
	    self.ignore = self.ignore.map(ignoreMap)
	  }
	}
	
	// ignore patterns are always in dot:true mode.
	function ignoreMap (pattern) {
	  var gmatcher = null
	  if (pattern.slice(-3) === '/**') {
	    var gpattern = pattern.replace(/(\/\*\*)+$/, '')
	    gmatcher = new Minimatch(gpattern, { dot: true })
	  }
	
	  return {
	    matcher: new Minimatch(pattern, { dot: true }),
	    gmatcher: gmatcher
	  }
	}
	
	function setopts (self, pattern, options) {
	  if (!options)
	    options = {}
	
	  // base-matching: just use globstar for that.
	  if (options.matchBase && -1 === pattern.indexOf("/")) {
	    if (options.noglobstar) {
	      throw new Error("base matching requires globstar")
	    }
	    pattern = "**/" + pattern
	  }
	
	  self.silent = !!options.silent
	  self.pattern = pattern
	  self.strict = options.strict !== false
	  self.realpath = !!options.realpath
	  self.realpathCache = options.realpathCache || Object.create(null)
	  self.follow = !!options.follow
	  self.dot = !!options.dot
	  self.mark = !!options.mark
	  self.nodir = !!options.nodir
	  if (self.nodir)
	    self.mark = true
	  self.sync = !!options.sync
	  self.nounique = !!options.nounique
	  self.nonull = !!options.nonull
	  self.nosort = !!options.nosort
	  self.nocase = !!options.nocase
	  self.stat = !!options.stat
	  self.noprocess = !!options.noprocess
	  self.absolute = !!options.absolute
	
	  self.maxLength = options.maxLength || Infinity
	  self.cache = options.cache || Object.create(null)
	  self.statCache = options.statCache || Object.create(null)
	  self.symlinks = options.symlinks || Object.create(null)
	
	  setupIgnores(self, options)
	
	  self.changedCwd = false
	  var cwd = process.cwd()
	  if (!ownProp(options, "cwd"))
	    self.cwd = cwd
	  else {
	    self.cwd = path.resolve(options.cwd)
	    self.changedCwd = self.cwd !== cwd
	  }
	
	  self.root = options.root || path.resolve(self.cwd, "/")
	  self.root = path.resolve(self.root)
	  if (process.platform === "win32")
	    self.root = self.root.replace(/\\/g, "/")
	
	  // TODO: is an absolute `cwd` supposed to be resolved against `root`?
	  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
	  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd)
	  if (process.platform === "win32")
	    self.cwdAbs = self.cwdAbs.replace(/\\/g, "/")
	  self.nomount = !!options.nomount
	
	  // disable comments and negation in Minimatch.
	  // Note that they are not supported in Glob itself anyway.
	  options.nonegate = true
	  options.nocomment = true
	
	  self.minimatch = new Minimatch(pattern, options)
	  self.options = self.minimatch.options
	}
	
	function finish (self) {
	  var nou = self.nounique
	  var all = nou ? [] : Object.create(null)
	
	  for (var i = 0, l = self.matches.length; i < l; i ++) {
	    var matches = self.matches[i]
	    if (!matches || Object.keys(matches).length === 0) {
	      if (self.nonull) {
	        // do like the shell, and spit out the literal glob
	        var literal = self.minimatch.globSet[i]
	        if (nou)
	          all.push(literal)
	        else
	          all[literal] = true
	      }
	    } else {
	      // had matches
	      var m = Object.keys(matches)
	      if (nou)
	        all.push.apply(all, m)
	      else
	        m.forEach(function (m) {
	          all[m] = true
	        })
	    }
	  }
	
	  if (!nou)
	    all = Object.keys(all)
	
	  if (!self.nosort)
	    all = all.sort(self.nocase ? alphasorti : alphasort)
	
	  // at *some* point we statted all of these
	  if (self.mark) {
	    for (var i = 0; i < all.length; i++) {
	      all[i] = self._mark(all[i])
	    }
	    if (self.nodir) {
	      all = all.filter(function (e) {
	        var notDir = !(/\/$/.test(e))
	        var c = self.cache[e] || self.cache[makeAbs(self, e)]
	        if (notDir && c)
	          notDir = c !== 'DIR' && !Array.isArray(c)
	        return notDir
	      })
	    }
	  }
	
	  if (self.ignore.length)
	    all = all.filter(function(m) {
	      return !isIgnored(self, m)
	    })
	
	  self.found = all
	}
	
	function mark (self, p) {
	  var abs = makeAbs(self, p)
	  var c = self.cache[abs]
	  var m = p
	  if (c) {
	    var isDir = c === 'DIR' || Array.isArray(c)
	    var slash = p.slice(-1) === '/'
	
	    if (isDir && !slash)
	      m += '/'
	    else if (!isDir && slash)
	      m = m.slice(0, -1)
	
	    if (m !== p) {
	      var mabs = makeAbs(self, m)
	      self.statCache[mabs] = self.statCache[abs]
	      self.cache[mabs] = self.cache[abs]
	    }
	  }
	
	  return m
	}
	
	// lotta situps...
	function makeAbs (self, f) {
	  var abs = f
	  if (f.charAt(0) === '/') {
	    abs = path.join(self.root, f)
	  } else if (isAbsolute(f) || f === '') {
	    abs = f
	  } else if (self.changedCwd) {
	    abs = path.resolve(self.cwd, f)
	  } else {
	    abs = path.resolve(f)
	  }
	
	  if (process.platform === 'win32')
	    abs = abs.replace(/\\/g, '/')
	
	  return abs
	}
	
	
	// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
	// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
	function isIgnored (self, path) {
	  if (!self.ignore.length)
	    return false
	
	  return self.ignore.some(function(item) {
	    return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path))
	  })
	}
	
	function childrenIgnored (self, path) {
	  if (!self.ignore.length)
	    return false
	
	  return self.ignore.some(function(item) {
	    return !!(item.gmatcher && item.gmatcher.match(path))
	  })
	}


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

	var wrappy = __webpack_require__(490)
	var reqs = Object.create(null)
	var once = __webpack_require__(491)
	
	module.exports = wrappy(inflight)
	
	function inflight (key, cb) {
	  if (reqs[key]) {
	    reqs[key].push(cb)
	    return null
	  } else {
	    reqs[key] = [cb]
	    return makeres(key)
	  }
	}
	
	function makeres (key) {
	  return once(function RES () {
	    var cbs = reqs[key]
	    var len = cbs.length
	    var args = slice(arguments)
	
	    // XXX It's somewhat ambiguous whether a new callback added in this
	    // pass should be queued for later execution if something in the
	    // list of callbacks throws, or if it should just be discarded.
	    // However, it's such an edge case that it hardly matters, and either
	    // choice is likely as surprising as the other.
	    // As it happens, we do go ahead and schedule it for later execution.
	    try {
	      for (var i = 0; i < len; i++) {
	        cbs[i].apply(null, args)
	      }
	    } finally {
	      if (cbs.length > len) {
	        // added more in the interim.
	        // de-zalgo, just in case, but don't call again.
	        cbs.splice(0, len)
	        process.nextTick(function () {
	          RES.apply(null, args)
	        })
	      } else {
	        delete reqs[key]
	      }
	    }
	  })
	}
	
	function slice (args) {
	  var length = args.length
	  var array = []
	
	  for (var i = 0; i < length; i++) array[i] = args[i]
	  return array
	}


/***/ }),
/* 490 */
/***/ (function(module, exports) {

	// Returns a wrapper function that returns a wrapped callback
	// The wrapper function should do some stuff, and return a
	// presumably different callback function.
	// This makes sure that own properties are retained, so that
	// decorations and such are not lost along the way.
	module.exports = wrappy
	function wrappy (fn, cb) {
	  if (fn && cb) return wrappy(fn)(cb)
	
	  if (typeof fn !== 'function')
	    throw new TypeError('need wrapper function')
	
	  Object.keys(fn).forEach(function (k) {
	    wrapper[k] = fn[k]
	  })
	
	  return wrapper
	
	  function wrapper() {
	    var args = new Array(arguments.length)
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i]
	    }
	    var ret = fn.apply(this, args)
	    var cb = args[args.length-1]
	    if (typeof ret === 'function' && ret !== cb) {
	      Object.keys(cb).forEach(function (k) {
	        ret[k] = cb[k]
	      })
	    }
	    return ret
	  }
	}


/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

	var wrappy = __webpack_require__(490)
	module.exports = wrappy(once)
	module.exports.strict = wrappy(onceStrict)
	
	once.proto = once(function () {
	  Object.defineProperty(Function.prototype, 'once', {
	    value: function () {
	      return once(this)
	    },
	    configurable: true
	  })
	
	  Object.defineProperty(Function.prototype, 'onceStrict', {
	    value: function () {
	      return onceStrict(this)
	    },
	    configurable: true
	  })
	})
	
	function once (fn) {
	  var f = function () {
	    if (f.called) return f.value
	    f.called = true
	    return f.value = fn.apply(this, arguments)
	  }
	  f.called = false
	  return f
	}
	
	function onceStrict (fn) {
	  var f = function () {
	    if (f.called)
	      throw new Error(f.onceError)
	    f.called = true
	    return f.value = fn.apply(this, arguments)
	  }
	  var name = fn.name || 'Function wrapped with `once`'
	  f.onceError = name + " shouldn't be called more than once"
	  f.called = false
	  return f
	}


/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	var spawn = __webpack_require__(372).spawn
	var slice = Array.prototype.slice
	
	var unzip = process.platform === 'win32' ? forWin32 : forUnix
	unzip.unzip = unzip
	module.exports = unzip
	
	// todo: progress feedback
	
	// https://github.com/fritx/win-7zip
	function forWin32 (inPath, outPath, callback) {
	  var _7z = __webpack_require__(493)['7z']
	
	  // very 奇葩
	  // eg. 7z x archive.zip -oc:\Doc
	  run(_7z, ['x', inPath, '-y', '-o' + outPath], callback)
	}
	
	function forUnix (inPath, outPath, callback) {
	  run('unzip', ['-o', inPath, '-d', outPath], callback)
	}
	
	// https://nodejs.org/api/child_process.html#child_process_event_error
	// Note that the 'exit' event may or may not fire after an error has occurred.
	// If you are listening to both the 'exit' and 'error' events,
	// it is important to guard against accidentally invoking handler functions multiple times.
	function run (bin, args, callback) {
	  callback = onceify(callback)
	
	  var prc = spawn(bin, args, {
	    stdio: 'ignore'
	  })
	  prc.on('error', function (err) {
	    callback(err)
	  })
	  prc.on('exit', function (code) {
	    callback(code ? new Error('Exited with code ' + code) : null)
	  })
	}
	
	// http://stackoverflow.com/questions/30234908/javascript-v8-optimisation-and-leaking-arguments
	// javascript V8 optimisation and “leaking arguments”
	// making callback to be invoked only once
	function onceify (fn) {
	  var called = false
	  return function () {
	    if (called) return
	    called = true
	    fn.apply(this, slice.call(arguments)) // slice arguments
	  }
	}


/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

	var resolve = __webpack_require__(341).resolve
	var bin = __webpack_require__(494).bin
	
	module.exports = map_obj(bin, function(v){
	  return resolve(__dirname, v)
	})
	
	function map_obj(obj, fn){
	  return Object.keys(obj).reduce(function(m, k){
	    m[k] = fn(obj[k])
	    return m
	  }, {})
	}


/***/ }),
/* 494 */
/***/ (function(module, exports) {

	module.exports = {"_args":[[{"raw":"7zip@0.0.6","scope":null,"escapedName":"7zip","name":"7zip","rawSpec":"0.0.6","spec":"0.0.6","type":"version"},"/Users/builldog/Documents/supernet/BarterDEX/node_modules/electron-devtools-installer"]],"_from":"7zip@0.0.6","_id":"7zip@0.0.6","_inCache":true,"_location":"/7zip","_nodeVersion":"5.11.0","_npmOperationalInternal":{"host":"packages-12-west.internal.npmjs.com","tmp":"tmp/7zip-0.0.6.tgz_1463274735811_0.1922009070403874"},"_npmUser":{"name":"fritx","email":"uxfritz@163.com"},"_npmVersion":"3.8.6","_phantomChildren":{},"_requested":{"raw":"7zip@0.0.6","scope":null,"escapedName":"7zip","name":"7zip","rawSpec":"0.0.6","spec":"0.0.6","type":"version"},"_requiredBy":["/electron-devtools-installer"],"_resolved":"https://registry.npmjs.org/7zip/-/7zip-0.0.6.tgz","_shasum":"9cafb171af82329490353b4816f03347aa150a30","_shrinkwrap":null,"_spec":"7zip@0.0.6","_where":"/Users/builldog/Documents/supernet/BarterDEX/node_modules/electron-devtools-installer","bin":{"7z":"7zip-lite/7z.exe"},"bugs":{"url":"https://github.com/fritx/win-7zip/issues"},"dependencies":{},"description":"7zip Windows Package via Node.js","devDependencies":{},"directories":{},"dist":{"shasum":"9cafb171af82329490353b4816f03347aa150a30","tarball":"https://registry.npmjs.org/7zip/-/7zip-0.0.6.tgz"},"gitHead":"ece5481873f357545c99a9e2f9e1cdb3fe76de2d","homepage":"https://github.com/fritx/win-7zip#readme","keywords":["7z","7zip","7-zip","windows","install"],"license":"GNU LGPL","main":"index.js","maintainers":[{"name":"fritx","email":"uxfritz@163.com"}],"name":"7zip","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+ssh://git@github.com/fritx/win-7zip.git"},"scripts":{"test":"mocha"},"version":"0.0.6"}

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.downloadFile = exports.getPath = undefined;
	
	var _electron = __webpack_require__(327);
	
	var _electron2 = _interopRequireDefault(_electron);
	
	var _fs = __webpack_require__(339);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(341);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _https = __webpack_require__(345);
	
	var _https2 = _interopRequireDefault(_https);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getPath = exports.getPath = function getPath() {
	  var savePath = (_electron.remote || _electron2.default).app.getPath('userData');
	  return _path2.default.resolve(savePath + '/extensions');
	};
	
	// Use https.get fallback for Electron < 1.4.5
	
	var _ref = _electron.remote || _electron2.default,
	    net = _ref.net;
	
	var request = net ? net.request : _https2.default.get;
	
	var downloadFile = exports.downloadFile = function downloadFile(from, to) {
	  return new Promise(function (resolve, reject) {
	    var req = request(from);
	    req.on('response', function (res) {
	      // Shouldn't handle redirect with `electron.net`, this is for https.get fallback
	      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
	        return downloadFile(res.headers.location, to).then(resolve).catch(reject);
	      }
	      res.pipe(_fs2.default.createWriteStream(to)).on('close', resolve);
	    });
	    req.on('error', reject);
	    req.end();
	  });
	};

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map