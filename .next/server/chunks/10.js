exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 3620:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.vercelStegaDecodeAll = exports.vercelStegaDecode = exports.VERCEL_STEGA_REGEX = void 0;
const map_1 = __webpack_require__(802);
const REVERSE_HEX_DIGIT_MAP = Object.fromEntries(Object.entries(map_1.HEX_DIGIT_MAP).map((x)=>x.reverse()));
const HEX_CHARS = `${Object.values(map_1.HEX_DIGIT_MAP).map((x)=>`\\u{${x.toString(16)}}`).join("")}`;
exports.VERCEL_STEGA_REGEX = new RegExp(`(?:[${HEX_CHARS}]{2})+`, "gu");
/**
 * Decodes the first hidden string that's found in the source string back into its original value
 * @param source - The source string with encoded data
 * @returns The decoded JSON value
 */ function vercelStegaDecode(source) {
    const matches = source.match(exports.VERCEL_STEGA_REGEX);
    if (!matches) return;
    return decode(matches[0], true)[0];
}
exports.vercelStegaDecode = vercelStegaDecode;
/**
 * Decodes every hidden string that's found in the source string back into their original values
 * @param source - The source string with encoded data
 * @returns The decoded JSON values
 */ function vercelStegaDecodeAll(source) {
    const matches = source.match(exports.VERCEL_STEGA_REGEX);
    if (!matches) return;
    return matches.map((match)=>decode(match)).flat();
}
exports.vercelStegaDecodeAll = vercelStegaDecodeAll;
function decode(encodedString, firstOnly = false) {
    var _a;
    const encoded = Array.from(encodedString);
    if (encoded.length % 2) {
        throw new Error(`Invalid encoded text length. Expected length to be even, received: ${encoded.length}`);
    }
    const chars = [];
    for(let i = encoded.length * 0.5; i--;){
        const hex = `${REVERSE_HEX_DIGIT_MAP[encoded[i * 2].codePointAt(0)]}${REVERSE_HEX_DIGIT_MAP[encoded[i * 2 + 1].codePointAt(0)]}`;
        chars.unshift(String.fromCharCode(parseInt(hex, 16)));
    }
    const results = [];
    const queue = [
        chars.join("")
    ];
    let breakLimit = 10;
    while(queue.length){
        const string = queue.shift();
        try {
            results.push(JSON.parse(string));
            if (firstOnly) return results;
        } catch (error) {
            if (!breakLimit--) throw error;
            const position = +((_a = error.message.match(/\sposition\s(\d+)$/)) === null || _a === void 0 ? void 0 : _a[1]);
            if (!position) throw error;
            queue.unshift(string.substring(0, position), string.substring(position));
        }
    }
    return results;
}


/***/ }),

/***/ 72200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.vercelStegaEncode = void 0;
const map_1 = __webpack_require__(802);
/**
 * Encodes JSON as a hidden string
 * @param json - The JSON data to encode
 * @returns The hidden string
 */ function vercelStegaEncode(json) {
    const string = JSON.stringify(json);
    return Array.from(string).map((character)=>{
        const charCode = character.charCodeAt(0);
        if (charCode > 255) {
            throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${string} on character ${character} (${charCode})`);
        }
        return Array.from(charCode.toString(16).padStart(2, "0")).map((hex)=>String.fromCodePoint(map_1.HEX_DIGIT_MAP[hex])).join("");
    }).join("");
}
exports.vercelStegaEncode = vercelStegaEncode;


/***/ }),

/***/ 90536:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __createBinding = (void 0) && (void 0).__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = (void 0) && (void 0).__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
__exportStar(__webpack_require__(72200), exports);
__exportStar(__webpack_require__(3620), exports);
__exportStar(__webpack_require__(24400), exports);


/***/ }),

/***/ 802:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HEX_DIGIT_MAP = void 0;
exports.HEX_DIGIT_MAP = {
    0: 0x200b,
    1: 0x200c,
    2: 0x200d,
    3: 0x2062,
    4: 0x2063,
    5: 0x2060,
    6: 0xfeff,
    7: 0x2061,
    8: 0x1d173,
    9: 0x1d174,
    a: 0x1d175,
    b: 0x1d176,
    c: 0x1d177,
    d: 0x1d178,
    e: 0x1d179,
    f: 0x1d17a
};


/***/ }),

/***/ 24400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.vercelStegaSplit = void 0;
const decode_1 = __webpack_require__(3620);
/**
 * Splits out encoded data from a string, if any is found
 * @param original - The original string
 * @returns The cleaned string and encoded data, separately
 */ function vercelStegaSplit(original) {
    var _a;
    return {
        cleaned: original.replace(decode_1.VERCEL_STEGA_REGEX, ""),
        encoded: ((_a = original.match(decode_1.VERCEL_STEGA_REGEX)) === null || _a === void 0 ? void 0 : _a[0]) || ""
    };
}
exports.vercelStegaSplit = vercelStegaSplit;


/***/ }),

/***/ 53727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(arg) {
    if (Array.isArray) {
        return Array.isArray(arg);
    }
    return objectToString(arg) === "[object Array]";
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === "boolean";
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === "number";
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === "string";
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === "symbol";
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return objectToString(re) === "[object RegExp]";
}
exports.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return objectToString(d) === "[object Date]";
}
exports.isDate = isDate;
function isError(e) {
    return objectToString(e) === "[object Error]" || e instanceof Error;
}
exports.isError = isError;
function isFunction(arg) {
    return typeof arg === "function";
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(14300).Buffer.isBuffer;
function objectToString(o) {
    return Object.prototype.toString.call(o);
}


/***/ }),

/***/ 31104:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ 
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (false) {}
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
     false && (0) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === "%%") {
            return;
        }
        index++;
        if (match === "%c") {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem("debug", namespaces);
        } else {
            exports.storage.removeItem("debug");
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __webpack_require__(60726)(exports);
const { formatters  } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
    }
};


/***/ }),

/***/ 60726:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ 
function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __webpack_require__(81769);
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
                // Anything else let's inspect with %O
                args.unshift("%O");
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") {
                    return "%";
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === "function") {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) {
                continue;
            }
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") {
                createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            } else {
                createDebug.names.push(new RegExp("^" + namespaces + "$"));
            }
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>"-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === "*") {
            return true;
        }
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) {
                return false;
            }
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;


/***/ }),

/***/ 6060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ 
if (typeof process === "undefined" || process.type === "renderer" || false === true || process.__nwjs) {
    module.exports = __webpack_require__(31104);
} else {
    module.exports = __webpack_require__(93859);
}


/***/ }),

/***/ 93859:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/**
 * Module dependencies.
 */ 
const tty = __webpack_require__(76224);
const util = __webpack_require__(73837);
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __webpack_require__(31367);
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === "null") {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name , useColors  } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = "\x1b[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1b[0m");
    } else {
        args[0] = getDate() + name + " " + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return "";
    }
    return new Date().toISOString() + " ";
}
/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.format(...args) + "\n");
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __webpack_require__(60726)(exports);
const { formatters  } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split("\n").map((str)=>str.trim()).join(" ");
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 88684:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __webpack_require__(6060)("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};


/***/ }),

/***/ 89698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var url = __webpack_require__(57310);
var URL = url.URL;
var http = __webpack_require__(13685);
var https = __webpack_require__(95687);
var Writable = (__webpack_require__(12781).Writable);
var assert = __webpack_require__(39491);
var debug = __webpack_require__(88684);
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
// Error types with codes
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        self._processResponse(response);
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    abortRequest(this._currentRequest);
    this.emit("abort");
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            /* istanbul ignore else */ if (request === self._currentRequest) {
                // Report any write errors
                /* istanbul ignore if */ if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    /* istanbul ignore else */ if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    abortRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        this.emit("error", new TooManyRedirectsError());
        return;
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = url.parse(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Determine the URL of the redirection
    var redirectUrl;
    try {
        redirectUrl = url.resolve(currentUrl, location);
    } catch (cause) {
        this.emit("error", new RedirectionError({
            cause: cause
        }));
        return;
    }
    // Create the redirected request
    debug("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url.parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrlParts.protocol !== currentUrlParts.protocol && redirectUrlParts.protocol !== "https:" || redirectUrlParts.host !== currentHost && !isSubdomain(redirectUrlParts.host, currentHost)) {
        removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        try {
            beforeRedirect(this._options, responseDetails, requestDetails);
        } catch (err) {
            this.emit("error", err);
            return;
        }
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    try {
        this._performRequest();
    } catch (cause) {
        this.emit("error", new RedirectionError({
            cause: cause
        }));
    }
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters
            if (isString(input)) {
                var parsed;
                try {
                    parsed = urlToOptions(new URL(input));
                } catch (err) {
                    /* istanbul ignore next */ parsed = url.parse(input);
                }
                if (!isString(parsed.protocol)) {
                    throw new InvalidUrlError({
                        input
                    });
                }
                input = parsed;
            } else if (URL && input instanceof URL) {
                input = urlToOptions(input);
            } else {
                callback = options;
                options = input;
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
/* istanbul ignore next */ function noop() {}
// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
    var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? /* istanbul ignore next */ urlObject.hostname.slice(1, -1) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
    };
    if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
    }
    return options;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        Error.captureStackTrace(this, this.constructor);
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    CustomError.prototype.constructor = CustomError;
    CustomError.prototype.name = "Error [" + code + "]";
    return CustomError;
}
function abortRequest(request) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.abort();
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;


/***/ }),

/***/ 53730:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var Readable = (__webpack_require__(2442).Readable);
var inherits = __webpack_require__(72001);
module.exports = from2;
from2.ctor = ctor;
from2.obj = obj;
var Proto = ctor();
function toFunction(list) {
    list = list.slice();
    return function(_, cb) {
        var err = null;
        var item = list.length ? list.shift() : null;
        if (item instanceof Error) {
            err = item;
            item = null;
        }
        cb(err, item);
    };
}
function from2(opts, read) {
    if (typeof opts !== "object" || Array.isArray(opts)) {
        read = opts;
        opts = {};
    }
    var rs = new Proto(opts);
    rs._from = Array.isArray(read) ? toFunction(read) : read || noop;
    return rs;
}
function ctor(opts, read) {
    if (typeof opts === "function") {
        read = opts;
        opts = {};
    }
    opts = defaults(opts);
    inherits(Class, Readable);
    function Class(override) {
        if (!(this instanceof Class)) return new Class(override);
        this._reading = false;
        this._callback = check;
        this.destroyed = false;
        Readable.call(this, override || opts);
        var self = this;
        var hwm = this._readableState.highWaterMark;
        function check(err, data) {
            if (self.destroyed) return;
            if (err) return self.destroy(err);
            if (data === null) return self.push(null);
            self._reading = false;
            if (self.push(data)) self._read(hwm);
        }
    }
    Class.prototype._from = read || noop;
    Class.prototype._read = function(size) {
        if (this._reading || this.destroyed) return;
        this._reading = true;
        this._from(size, this._callback);
    };
    Class.prototype.destroy = function(err) {
        if (this.destroyed) return;
        this.destroyed = true;
        var self = this;
        process.nextTick(function() {
            if (err) self.emit("error", err);
            self.emit("close");
        });
    };
    return Class;
}
function obj(opts, read) {
    if (typeof opts === "function" || Array.isArray(opts)) {
        read = opts;
        opts = {};
    }
    opts = defaults(opts);
    opts.objectMode = true;
    opts.highWaterMark = 16;
    return from2(opts, read);
}
function noop() {}
function defaults(opts) {
    opts = opts || {};
    return opts;
}


/***/ }),

/***/ 7245:
/***/ ((module) => {

"use strict";

var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
};


/***/ }),

/***/ 44696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/ var pna = __webpack_require__(96567);
/*</replacement>*/ /*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj){
        keys.push(key);
    }
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
/*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ var Readable = __webpack_require__(44862);
var Writable = __webpack_require__(43477);
util.inherits(Duplex, Readable);
{
    // avoid scope creep, the keys array can then be collected
    var keys = objectKeys(Writable.prototype);
    for(var v = 0; v < keys.length; v++){
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
    }
}function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options && options.readable === false) this.readable = false;
    if (options && options.writable === false) this.writable = false;
    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
    this.once("end", onend);
}
Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._writableState.highWaterMark;
    }
});
// the no-half-open enforcer
function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    pna.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, "destroyed", {
    get: function() {
        if (this._readableState === undefined || this._writableState === undefined) {
            return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});
Duplex.prototype._destroy = function(err, cb) {
    this.push(null);
    this.end();
    pna.nextTick(cb, err);
};


/***/ }),

/***/ 24212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;
var Transform = __webpack_require__(21861);
/*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ util.inherits(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};


/***/ }),

/***/ 44862:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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

/*<replacement>*/ var pna = __webpack_require__(96567);
/*</replacement>*/ module.exports = Readable;
/*<replacement>*/ var isArray = __webpack_require__(7245);
/*</replacement>*/ /*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = (__webpack_require__(82361).EventEmitter);
var EElistenerCount = function(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = __webpack_require__(50844);
/*</replacement>*/ /*<replacement>*/ var Buffer = (__webpack_require__(32557).Buffer);
var OurUint8Array = (typeof global !== "undefined" ? global :  false ? 0 : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/ /*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ /*<replacement>*/ var debugUtil = __webpack_require__(73837);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
} else {
    debug = function() {};
}
/*</replacement>*/ var BufferList = __webpack_require__(78845);
var destroyImpl = __webpack_require__(75468);
var StringDecoder;
util.inherits(Readable, Stream);
var kProxyEvents = [
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream) {
    Duplex = Duplex || __webpack_require__(44696);
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    var isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    var hwm = options.highWaterMark;
    var readableHwm = options.readableHighWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    if (hwm || hwm === 0) this.highWaterMark = hwm;
    else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;
    else this.highWaterMark = defaultHwm;
    // cast to ints.
    this.highWaterMark = Math.floor(this.highWaterMark);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = (__webpack_require__(56265)/* .StringDecoder */ .s);
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || __webpack_require__(44696);
    if (!(this instanceof Readable)) return new Readable(options);
    this._readableState = new ReadableState(options, this);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, "destroyed", {
    get: function() {
        if (this._readableState === undefined) {
            return false;
        }
        return this._readableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    this.push(null);
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = "";
            }
            skipChunkCheck = true;
        }
    } else {
        skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
            stream.emit("error", er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
                if (state.endEmitted) stream.emit("error", new Error("stream.unshift() after end event"));
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) {
                stream.emit("error", new Error("stream.push() after EOF"));
            } else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else {
                    addChunk(stream, state, chunk, false);
                }
            }
        } else if (!addToFront) {
            state.reading = false;
        }
    }
    return needMoreData(state);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit("data", chunk);
        stream.read(0);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
    }
    return er;
}
// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = (__webpack_require__(56265)/* .StringDecoder */ .s);
    this._readableState.decoder = new StringDecoder(enc);
    this._readableState.encoding = enc;
    return this;
};
// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
        n = MAX_HWM;
    } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug("need readable", doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
    } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = true;
        n = 0;
    } else {
        state.length -= n;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
};
function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    // emit 'readable' now to make sure it gets picked up.
    emitReadable(stream);
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync) pna.nextTick(emitReadable_, stream);
        else emitReadable_(stream);
    }
}
function emitReadable_(stream) {
    debug("emit readable");
    stream.emit("readable");
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    var len = state.length;
    while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark){
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
        else len = state.length;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    this.emit("error", new Error("_read() is not implemented"));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) pna.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug("onend");
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug("cleanup");
        // cleanup event handlers once the pipe is broken
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    // If the user pushes more data while we're writing to dest then we'll end up
    // in ondata again. However, we only want to increase awaitDrain once because
    // dest will only emit one 'drain' event for the multiple writes.
    // => Introduce a guard on increasing awaitDrain.
    var increasedAwaitDrain = false;
    src.on("data", ondata);
    function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
                increasedAwaitDrain = true;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) dest.emit("error", er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, "error", onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit("pipe", src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug("pipe resume");
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++){
            dests[i].emit("unpipe", this, {
                hasUnpiped: false
            });
        }
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    if (ev === "data") {
        // Start flowing on next tick if stream isn't explicitly paused
        if (this._readableState.flowing !== false) this.resume();
    } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.emittedReadable = false;
            if (!state.reading) {
                pna.nextTick(nReadingNextTick, this);
            } else if (state.length) {
                emitReadable(this);
            }
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
function nReadingNextTick(self1) {
    debug("readable nexttick read 0");
    self1.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
    }
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    if (!state.reading) {
        debug("resume read 0");
        stream.read(0);
    }
    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (false !== this._readableState.flowing) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
    }
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while(state.flowing && stream.read() !== null){}
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream){
        if (this[i] === undefined && typeof stream[i] === "function") {
            this[i] = function(method) {
                return function() {
                    return stream[method].apply(stream, arguments);
                };
            }(i);
        }
    }
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++){
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    }
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._readableState.highWaterMark;
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.head.data;
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else {
        // read part of list
        ret = fromListPartial(n, state.buffer, state.decoder);
    }
    return ret;
}
// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
        // slice is the same for buffers and strings
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
        // first chunk is a perfect match
        ret = list.shift();
    } else {
        // result spans more than one buffer
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
}
// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while(p = p.next){
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;
        else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
            if (nb === str.length) {
                ++c;
                if (p.next) list.head = p.next;
                else list.head = list.tail = null;
            } else {
                list.head = p;
                p.data = str.slice(nb);
            }
            break;
        }
        ++c;
    }
    list.length -= c;
    return ret;
}
// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
    var ret = Buffer.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while(p = p.next){
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
            if (nb === buf.length) {
                ++c;
                if (p.next) list.head = p.next;
                else list.head = list.tail = null;
            } else {
                list.head = p;
                p.data = buf.slice(nb);
            }
            break;
        }
        ++c;
    }
    list.length -= c;
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    // If we get here before consuming all the bytes, then that is a
    // bug in node.  Should never happen.
    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
    }
}
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}


/***/ }),

/***/ 21861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;
var Duplex = __webpack_require__(44696);
/*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ util.inherits(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (!cb) {
        return this.emit("error", new Error("write callback called multiple times"));
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
    }
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on("prefinish", prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === "function") {
        this._flush(function(er, data) {
            done(_this, er, data);
        });
    } else {
        done(this, null, null);
    }
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    throw new Error("_transform() is not implemented");
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = true;
    }
};
Transform.prototype._destroy = function(err, cb) {
    var _this2 = this;
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
    });
};
function done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null) stream.push(data);
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (stream._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return stream.push(null);
}


/***/ }),

/***/ 43477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

/*<replacement>*/ var pna = __webpack_require__(96567);
/*</replacement>*/ module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var asyncWrite =  true && [
    "v0.10",
    "v0.9."
].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ /*<replacement>*/ var internalUtil = {
    deprecate: __webpack_require__(59966)
};
/*</replacement>*/ /*<replacement>*/ var Stream = __webpack_require__(50844);
/*</replacement>*/ /*<replacement>*/ var Buffer = (__webpack_require__(32557).Buffer);
var OurUint8Array = (typeof global !== "undefined" ? global :  false ? 0 : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/ var destroyImpl = __webpack_require__(75468);
util.inherits(Writable, Stream);
function nop() {}
function WritableState(options, stream) {
    Duplex = Duplex || __webpack_require__(44696);
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    var isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    var hwm = options.highWaterMark;
    var writableHwm = options.writableHighWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    if (hwm || hwm === 0) this.highWaterMark = hwm;
    else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;
    else this.highWaterMark = defaultHwm;
    // cast to ints.
    this.highWaterMark = Math.floor(this.highWaterMark);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer " + "instead.", "DEP0003")
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else {
    realHasInstance = function(object) {
        return object instanceof this;
    };
}
function Writable(options) {
    Duplex = Duplex || __webpack_require__(44696);
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
    }
    this._writableState = new WritableState(options, this);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
};
function writeAfterEnd(stream, cb) {
    var er = new Error("write after end");
    // TODO: defer error events consistently everywhere, not just the cb
    stream.emit("error", er);
    pna.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    if (chunk === null) {
        er = new TypeError("May not write null values to stream");
    } else if (typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
    }
    if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
    }
    return valid;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== "function") cb = nop;
    if (state.ended) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    var state = this._writableState;
    state.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer.from(chunk, encoding);
    }
    return chunk;
}
Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) {
            last.next = state.lastBufferedRequest;
        } else {
            state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
    } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        pna.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
        }
        if (sync) {
            /*<replacement>*/ asyncWrite(afterWrite, stream, state, finished, cb);
        /*</replacement>*/ } else {
            afterWrite(stream, state, finished, cb);
        }
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else {
            state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) {
                break;
            }
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new Error("_write() is not implemented"));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
};
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) {
            stream.emit("error", err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function") {
            state.pendingcb++;
            state.finalCalled = true;
            pna.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) pna.nextTick(cb);
        else stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, "destroyed", {
    get: function() {
        if (this._writableState === undefined) {
            return false;
        }
        return this._writableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    this.end();
    cb(err);
};


/***/ }),

/***/ 78845:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Buffer = (__webpack_require__(32557).Buffer);
var util = __webpack_require__(73837);
function copyBuffer(src, target, offset) {
    src.copy(target, offset);
}
module.exports = function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    BufferList.prototype.push = function push(v) {
        var entry = {
            data: v,
            next: null
        };
        if (this.length > 0) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
        ++this.length;
    };
    BufferList.prototype.unshift = function unshift(v) {
        var entry = {
            data: v,
            next: this.head
        };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
    };
    BufferList.prototype.shift = function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;
        else this.head = this.head.next;
        --this.length;
        return ret;
    };
    BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
    };
    BufferList.prototype.join = function join(s) {
        if (this.length === 0) return "";
        var p = this.head;
        var ret = "" + p.data;
        while(p = p.next){
            ret += s + p.data;
        }
        return ret;
    };
    BufferList.prototype.concat = function concat(n) {
        if (this.length === 0) return Buffer.alloc(0);
        var ret = Buffer.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while(p){
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
        }
        return ret;
    };
    return BufferList;
}();
if (util && util.inspect && util.inspect.custom) {
    module.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({
            length: this.length
        });
        return this.constructor.name + " " + obj;
    };
}


/***/ }),

/***/ 75468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/*<replacement>*/ var pna = __webpack_require__(96567);
/*</replacement>*/ // undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) {
            cb(err);
        } else if (err) {
            if (!this._writableState) {
                pna.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                pna.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) {
        this._readableState.destroyed = true;
    }
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) {
        this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) {
                pna.nextTick(emitErrorNT, _this, err);
            } else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                pna.nextTick(emitErrorNT, _this, err);
            }
        } else if (cb) {
            cb(err);
        }
    });
    return this;
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit("error", err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy
};


/***/ }),

/***/ 50844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(12781);


/***/ }),

/***/ 2442:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

var Stream = __webpack_require__(12781);
if (process.env.READABLE_STREAM === "disable" && Stream) {
    module.exports = Stream;
    exports = module.exports = Stream.Readable;
    exports.Readable = Stream.Readable;
    exports.Writable = Stream.Writable;
    exports.Duplex = Stream.Duplex;
    exports.Transform = Stream.Transform;
    exports.PassThrough = Stream.PassThrough;
    exports.Stream = Stream;
} else {
    exports = module.exports = __webpack_require__(44862);
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = __webpack_require__(43477);
    exports.Duplex = __webpack_require__(44696);
    exports.Transform = __webpack_require__(21861);
    exports.PassThrough = __webpack_require__(24212);
}


/***/ }),

/***/ 56265:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

/*<replacement>*/ var Buffer = (__webpack_require__(32557).Buffer);
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch(encoding && encoding.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while(true){
        switch(enc){
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return enc;
            default:
                if (retried) return; // undefined
                enc = ("" + enc).toLowerCase();
                retried = true;
        }
    }
}
;
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.s = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else {
        i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return "�";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return "�";
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "�";
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
    } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}


/***/ }),

/***/ 97353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const { Transform , PassThrough  } = __webpack_require__(12781);
const zlib = __webpack_require__(59796);
const mimicResponse = __webpack_require__(24159);
module.exports = (response)=>{
    const contentEncoding = (response.headers["content-encoding"] || "").toLowerCase();
    delete response.headers["content-encoding"];
    if (![
        "gzip",
        "deflate",
        "br"
    ].includes(contentEncoding)) {
        return response;
    }
    // TODO: Remove this when targeting Node.js 12.
    const isBrotli = contentEncoding === "br";
    if (isBrotli && typeof zlib.createBrotliDecompress !== "function") {
        response.destroy(new Error("Brotli is not supported on Node.js < 12"));
        return response;
    }
    let isEmpty = true;
    const checker = new Transform({
        transform (data, _encoding, callback) {
            isEmpty = false;
            callback(null, data);
        },
        flush (callback) {
            callback();
        }
    });
    const finalStream = new PassThrough({
        autoDestroy: false,
        destroy (error, callback) {
            response.destroy();
            callback(error);
        }
    });
    const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
    decompressStream.once("error", (error)=>{
        if (isEmpty && !response.readable) {
            finalStream.end();
            return;
        }
        finalStream.destroy(error);
    });
    mimicResponse(response, finalStream);
    response.pipe(checker).pipe(decompressStream).pipe(finalStream);
    return finalStream;
};


/***/ }),

/***/ 18451:
/***/ ((module) => {

"use strict";

function groq(strings) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    const lastIndex = strings.length - 1;
    return strings.slice(0, lastIndex).reduce((acc, str, i)=>{
        return acc + str + keys[i];
    }, "") + strings[lastIndex];
}
module.exports = groq; //# sourceMappingURL=groq.js.map


/***/ }),

/***/ 69561:
/***/ ((module) => {

"use strict";

module.exports = (flag, argv)=>{
    argv = argv || process.argv;
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const pos = argv.indexOf(prefix + flag);
    const terminatorPos = argv.indexOf("--");
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ 72001:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

try {
    var util = __webpack_require__(73837);
    /* istanbul ignore next */ if (typeof util.inherits !== "function") throw "";
    module.exports = util.inherits;
} catch (e) {
    /* istanbul ignore next */ module.exports = __webpack_require__(56595);
}


/***/ }),

/***/ 56595:
/***/ ((module) => {

"use strict";

if (typeof Object.create === "function") {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        }
    };
} else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
        }
    };
}


/***/ }),

/***/ 52841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const from = __webpack_require__(53730);
const pIsPromise = __webpack_require__(84135);
const intoStream = (input)=>{
    if (Array.isArray(input)) {
        input = input.slice();
    }
    let promise;
    let iterator;
    let asyncIterator;
    prepare(input);
    function prepare(value) {
        input = value;
        if (input instanceof ArrayBuffer || ArrayBuffer.isView(input) && !Buffer.isBuffer(input)) {
            input = Buffer.from(input);
        }
        promise = pIsPromise(input) ? input : null;
        // We don't iterate on strings and buffers since slicing them is ~7x faster
        const shouldIterate = !promise && input[Symbol.iterator] && typeof input !== "string" && !Buffer.isBuffer(input);
        iterator = shouldIterate ? input[Symbol.iterator]() : null;
        const shouldAsyncIterate = !promise && input[Symbol.asyncIterator];
        asyncIterator = shouldAsyncIterate ? input[Symbol.asyncIterator]() : null;
    }
    return from(function reader(size, callback) {
        if (promise) {
            (async ()=>{
                try {
                    await prepare(await promise);
                    reader.call(this, size, callback);
                } catch (error) {
                    callback(error);
                }
            })();
            return;
        }
        if (iterator) {
            const object = iterator.next();
            setImmediate(callback, null, object.done ? null : object.value);
            return;
        }
        if (asyncIterator) {
            (async ()=>{
                try {
                    const object = await asyncIterator.next();
                    setImmediate(callback, null, object.done ? null : object.value);
                } catch (error) {
                    setImmediate(callback, error);
                }
            })();
            return;
        }
        if (input.length === 0) {
            setImmediate(callback, null, null);
            return;
        }
        const chunk = input.slice(0, size);
        input = input.slice(size);
        setImmediate(callback, null, chunk);
    });
};
module.exports = intoStream;
module.exports.object = (input)=>{
    if (Array.isArray(input)) {
        input = input.slice();
    }
    let promise;
    let iterator;
    let asyncIterator;
    prepare(input);
    function prepare(value) {
        input = value;
        promise = pIsPromise(input) ? input : null;
        iterator = !promise && input[Symbol.iterator] ? input[Symbol.iterator]() : null;
        asyncIterator = !promise && input[Symbol.asyncIterator] ? input[Symbol.asyncIterator]() : null;
    }
    return from.obj(function reader(size, callback) {
        if (promise) {
            (async ()=>{
                try {
                    await prepare(await promise);
                    reader.call(this, size, callback);
                } catch (error) {
                    callback(error);
                }
            })();
            return;
        }
        if (iterator) {
            const object = iterator.next();
            setImmediate(callback, null, object.done ? null : object.value);
            return;
        }
        if (asyncIterator) {
            (async ()=>{
                try {
                    const object = await asyncIterator.next();
                    setImmediate(callback, null, object.done ? null : object.value);
                } catch (error) {
                    setImmediate(callback, error);
                }
            })();
            return;
        }
        this.push(input);
        setImmediate(callback, null, null);
    });
};


/***/ }),

/***/ 14351:
/***/ ((module) => {

"use strict";

const denyList = new Set([
    "ENOTFOUND",
    "ENETUNREACH",
    // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_CRL",
    "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
    "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
    "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
    "CERT_SIGNATURE_FAILURE",
    "CRL_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CRL_NOT_YET_VALID",
    "CRL_HAS_EXPIRED",
    "ERROR_IN_CERT_NOT_BEFORE_FIELD",
    "ERROR_IN_CERT_NOT_AFTER_FIELD",
    "ERROR_IN_CRL_LAST_UPDATE_FIELD",
    "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
    "OUT_OF_MEM",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "CERT_CHAIN_TOO_LONG",
    "CERT_REVOKED",
    "INVALID_CA",
    "PATH_LENGTH_EXCEEDED",
    "INVALID_PURPOSE",
    "CERT_UNTRUSTED",
    "CERT_REJECTED",
    "HOSTNAME_MISMATCH"
]);
// TODO: Use `error?.code` when targeting Node.js 14
module.exports = (error)=>!denyList.has(error && error.code);


/***/ }),

/***/ 28730:
/***/ ((module) => {

"use strict";

const isStream = (stream)=>stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
isStream.writable = (stream)=>isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
isStream.readable = (stream)=>isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
isStream.duplex = (stream)=>isStream.writable(stream) && isStream.readable(stream);
isStream.transform = (stream)=>isStream.duplex(stream) && typeof stream._transform === "function";
module.exports = isStream;


/***/ }),

/***/ 52620:
/***/ ((module) => {

"use strict";
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */ 
var objectTag = "[object Object]";
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") {
        try {
            result = !!(value + "");
        } catch (e) {}
    }
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
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
 */ function isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
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
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;


/***/ }),

/***/ 24159:
/***/ ((module) => {

"use strict";

// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProperties = [
    "aborted",
    "complete",
    "headers",
    "httpVersion",
    "httpVersionMinor",
    "httpVersionMajor",
    "method",
    "rawHeaders",
    "rawTrailers",
    "setTimeout",
    "socket",
    "statusCode",
    "statusMessage",
    "trailers",
    "url"
];
module.exports = (fromStream, toStream)=>{
    if (toStream._readableState.autoDestroy) {
        throw new Error("The second stream must have the `autoDestroy` option set to `false`");
    }
    const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));
    const properties = {};
    for (const property of fromProperties){
        // Don't overwrite existing properties.
        if (property in toStream) {
            continue;
        }
        properties[property] = {
            get () {
                const value = fromStream[property];
                const isFunction = typeof value === "function";
                return isFunction ? value.bind(fromStream) : value;
            },
            set (value) {
                fromStream[property] = value;
            },
            enumerable: true,
            configurable: false
        };
    }
    Object.defineProperties(toStream, properties);
    fromStream.once("aborted", ()=>{
        toStream.destroy();
        toStream.emit("aborted");
    });
    fromStream.once("close", ()=>{
        if (fromStream.complete) {
            if (toStream.readable) {
                toStream.once("end", ()=>{
                    toStream.emit("close");
                });
            } else {
                toStream.emit("close");
            }
        } else {
            toStream.emit("close");
        }
    });
    return toStream;
};


/***/ }),

/***/ 81769:
/***/ ((module) => {

"use strict";
/**
 * Helpers.
 */ 
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
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
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
        return parse(val);
    } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
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
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + "s";
    }
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}


/***/ }),

/***/ 84135:
/***/ ((module) => {

"use strict";

const isObject = (value)=>value !== null && (typeof value === "object" || typeof value === "function");
module.exports = (value)=>value instanceof Promise || isObject(value) && typeof value.then === "function" && typeof value.catch === "function";


/***/ }),

/***/ 96567:
/***/ ((module) => {

"use strict";

if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
    module.exports = {
        nextTick: nextTick
    };
} else {
    module.exports = process;
}
function nextTick(fn, arg1, arg2, arg3) {
    if (typeof fn !== "function") {
        throw new TypeError('"callback" argument must be a function');
    }
    var len = arguments.length;
    var args, i;
    switch(len){
        case 0:
        case 1:
            return process.nextTick(fn);
        case 2:
            return process.nextTick(function afterTickOne() {
                fn.call(null, arg1);
            });
        case 3:
            return process.nextTick(function afterTickTwo() {
                fn.call(null, arg1, arg2);
            });
        case 4:
            return process.nextTick(function afterTickThree() {
                fn.call(null, arg1, arg2, arg3);
            });
        default:
            args = new Array(len - 1);
            i = 0;
            while(i < args.length){
                args[i++] = arguments[i];
            }
            return process.nextTick(function afterTick() {
                fn.apply(null, args);
            });
    }
}


/***/ }),

/***/ 63813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var through = __webpack_require__(91429);
var speedometer = __webpack_require__(19228);
module.exports = function(options, onprogress) {
    if (typeof options === "function") return module.exports(null, options);
    options = options || {};
    var length = options.length || 0;
    var time = options.time || 0;
    var drain = options.drain || false;
    var transferred = options.transferred || 0;
    var nextUpdate = Date.now() + time;
    var delta = 0;
    var speed = speedometer(options.speed || 5000);
    var startTime = Date.now();
    var update = {
        percentage: 0,
        transferred: transferred,
        length: length,
        remaining: length,
        eta: 0,
        runtime: 0
    };
    var emit = function(ended) {
        update.delta = delta;
        update.percentage = ended ? 100 : length ? transferred / length * 100 : 0;
        update.speed = speed(delta);
        update.eta = Math.round(update.remaining / update.speed);
        update.runtime = parseInt((Date.now() - startTime) / 1000);
        nextUpdate = Date.now() + time;
        delta = 0;
        tr.emit("progress", update);
    };
    var write = function(chunk, enc, callback) {
        var len = options.objectMode ? 1 : chunk.length;
        transferred += len;
        delta += len;
        update.transferred = transferred;
        update.remaining = length >= transferred ? length - transferred : 0;
        if (Date.now() >= nextUpdate) emit(false);
        callback(null, chunk);
    };
    var end = function(callback) {
        emit(true);
        callback();
    };
    var tr = through(options.objectMode ? {
        objectMode: true,
        highWaterMark: 16
    } : {}, write, end);
    var onlength = function(newLength) {
        length = newLength;
        update.length = length;
        update.remaining = length - update.transferred;
        tr.emit("length", length);
    };
    // Expose `onlength()` handler as `setLength()` to support custom use cases where length
    // is not known until after a few chunks have already been pumped, or is
    // calculated on the fly.
    tr.setLength = onlength;
    tr.on("pipe", function(stream) {
        if (typeof length === "number") return;
        // Support http module
        if (stream.readable && !stream.writable && stream.headers) {
            return onlength(parseInt(stream.headers["content-length"] || 0));
        }
        // Support streams with a length property
        if (typeof stream.length === "number") {
            return onlength(stream.length);
        }
        // Support request module
        stream.on("response", function(res) {
            if (!res || !res.headers) return;
            if (res.headers["content-encoding"] === "gzip") return;
            if (res.headers["content-length"]) {
                return onlength(parseInt(res.headers["content-length"]));
            }
        });
    });
    if (drain) tr.resume();
    if (onprogress) tr.on("progress", onprogress);
    tr.progress = function() {
        update.speed = speed(0);
        update.eta = Math.round(update.remaining / update.speed);
        return update;
    };
    return tr;
};


/***/ }),

/***/ 5032:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __createBinding = (void 0) && (void 0).__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = (void 0) && (void 0).__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
var Observable_1 = __webpack_require__(74064);
Object.defineProperty(exports, "Observable", ({
    enumerable: true,
    get: function() {
        return Observable_1.Observable;
    }
}));
var ConnectableObservable_1 = __webpack_require__(73034);
Object.defineProperty(exports, "ConnectableObservable", ({
    enumerable: true,
    get: function() {
        return ConnectableObservable_1.ConnectableObservable;
    }
}));
var observable_1 = __webpack_require__(1895);
Object.defineProperty(exports, "observable", ({
    enumerable: true,
    get: function() {
        return observable_1.observable;
    }
}));
var animationFrames_1 = __webpack_require__(85810);
Object.defineProperty(exports, "animationFrames", ({
    enumerable: true,
    get: function() {
        return animationFrames_1.animationFrames;
    }
}));
var Subject_1 = __webpack_require__(75465);
Object.defineProperty(exports, "Subject", ({
    enumerable: true,
    get: function() {
        return Subject_1.Subject;
    }
}));
var BehaviorSubject_1 = __webpack_require__(16216);
Object.defineProperty(exports, "BehaviorSubject", ({
    enumerable: true,
    get: function() {
        return BehaviorSubject_1.BehaviorSubject;
    }
}));
var ReplaySubject_1 = __webpack_require__(58843);
Object.defineProperty(exports, "ReplaySubject", ({
    enumerable: true,
    get: function() {
        return ReplaySubject_1.ReplaySubject;
    }
}));
var AsyncSubject_1 = __webpack_require__(74451);
Object.defineProperty(exports, "AsyncSubject", ({
    enumerable: true,
    get: function() {
        return AsyncSubject_1.AsyncSubject;
    }
}));
var asap_1 = __webpack_require__(81403);
Object.defineProperty(exports, "asap", ({
    enumerable: true,
    get: function() {
        return asap_1.asap;
    }
}));
Object.defineProperty(exports, "asapScheduler", ({
    enumerable: true,
    get: function() {
        return asap_1.asapScheduler;
    }
}));
var async_1 = __webpack_require__(16476);
Object.defineProperty(exports, "async", ({
    enumerable: true,
    get: function() {
        return async_1.async;
    }
}));
Object.defineProperty(exports, "asyncScheduler", ({
    enumerable: true,
    get: function() {
        return async_1.asyncScheduler;
    }
}));
var queue_1 = __webpack_require__(2921);
Object.defineProperty(exports, "queue", ({
    enumerable: true,
    get: function() {
        return queue_1.queue;
    }
}));
Object.defineProperty(exports, "queueScheduler", ({
    enumerable: true,
    get: function() {
        return queue_1.queueScheduler;
    }
}));
var animationFrame_1 = __webpack_require__(69502);
Object.defineProperty(exports, "animationFrame", ({
    enumerable: true,
    get: function() {
        return animationFrame_1.animationFrame;
    }
}));
Object.defineProperty(exports, "animationFrameScheduler", ({
    enumerable: true,
    get: function() {
        return animationFrame_1.animationFrameScheduler;
    }
}));
var VirtualTimeScheduler_1 = __webpack_require__(10803);
Object.defineProperty(exports, "VirtualTimeScheduler", ({
    enumerable: true,
    get: function() {
        return VirtualTimeScheduler_1.VirtualTimeScheduler;
    }
}));
Object.defineProperty(exports, "VirtualAction", ({
    enumerable: true,
    get: function() {
        return VirtualTimeScheduler_1.VirtualAction;
    }
}));
var Scheduler_1 = __webpack_require__(60894);
Object.defineProperty(exports, "Scheduler", ({
    enumerable: true,
    get: function() {
        return Scheduler_1.Scheduler;
    }
}));
var Subscription_1 = __webpack_require__(31484);
Object.defineProperty(exports, "Subscription", ({
    enumerable: true,
    get: function() {
        return Subscription_1.Subscription;
    }
}));
var Subscriber_1 = __webpack_require__(10592);
Object.defineProperty(exports, "Subscriber", ({
    enumerable: true,
    get: function() {
        return Subscriber_1.Subscriber;
    }
}));
var Notification_1 = __webpack_require__(45545);
Object.defineProperty(exports, "Notification", ({
    enumerable: true,
    get: function() {
        return Notification_1.Notification;
    }
}));
Object.defineProperty(exports, "NotificationKind", ({
    enumerable: true,
    get: function() {
        return Notification_1.NotificationKind;
    }
}));
var pipe_1 = __webpack_require__(78976);
Object.defineProperty(exports, "pipe", ({
    enumerable: true,
    get: function() {
        return pipe_1.pipe;
    }
}));
var noop_1 = __webpack_require__(80589);
Object.defineProperty(exports, "noop", ({
    enumerable: true,
    get: function() {
        return noop_1.noop;
    }
}));
var identity_1 = __webpack_require__(78557);
Object.defineProperty(exports, "identity", ({
    enumerable: true,
    get: function() {
        return identity_1.identity;
    }
}));
var isObservable_1 = __webpack_require__(2188);
Object.defineProperty(exports, "isObservable", ({
    enumerable: true,
    get: function() {
        return isObservable_1.isObservable;
    }
}));
var lastValueFrom_1 = __webpack_require__(13196);
Object.defineProperty(exports, "lastValueFrom", ({
    enumerable: true,
    get: function() {
        return lastValueFrom_1.lastValueFrom;
    }
}));
var firstValueFrom_1 = __webpack_require__(46296);
Object.defineProperty(exports, "firstValueFrom", ({
    enumerable: true,
    get: function() {
        return firstValueFrom_1.firstValueFrom;
    }
}));
var ArgumentOutOfRangeError_1 = __webpack_require__(40624);
Object.defineProperty(exports, "ArgumentOutOfRangeError", ({
    enumerable: true,
    get: function() {
        return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    }
}));
var EmptyError_1 = __webpack_require__(21253);
Object.defineProperty(exports, "EmptyError", ({
    enumerable: true,
    get: function() {
        return EmptyError_1.EmptyError;
    }
}));
var NotFoundError_1 = __webpack_require__(38892);
Object.defineProperty(exports, "NotFoundError", ({
    enumerable: true,
    get: function() {
        return NotFoundError_1.NotFoundError;
    }
}));
var ObjectUnsubscribedError_1 = __webpack_require__(43293);
Object.defineProperty(exports, "ObjectUnsubscribedError", ({
    enumerable: true,
    get: function() {
        return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    }
}));
var SequenceError_1 = __webpack_require__(97189);
Object.defineProperty(exports, "SequenceError", ({
    enumerable: true,
    get: function() {
        return SequenceError_1.SequenceError;
    }
}));
var timeout_1 = __webpack_require__(85280);
Object.defineProperty(exports, "TimeoutError", ({
    enumerable: true,
    get: function() {
        return timeout_1.TimeoutError;
    }
}));
var UnsubscriptionError_1 = __webpack_require__(97058);
Object.defineProperty(exports, "UnsubscriptionError", ({
    enumerable: true,
    get: function() {
        return UnsubscriptionError_1.UnsubscriptionError;
    }
}));
var bindCallback_1 = __webpack_require__(83386);
Object.defineProperty(exports, "bindCallback", ({
    enumerable: true,
    get: function() {
        return bindCallback_1.bindCallback;
    }
}));
var bindNodeCallback_1 = __webpack_require__(71844);
Object.defineProperty(exports, "bindNodeCallback", ({
    enumerable: true,
    get: function() {
        return bindNodeCallback_1.bindNodeCallback;
    }
}));
var combineLatest_1 = __webpack_require__(35855);
Object.defineProperty(exports, "combineLatest", ({
    enumerable: true,
    get: function() {
        return combineLatest_1.combineLatest;
    }
}));
var concat_1 = __webpack_require__(36802);
Object.defineProperty(exports, "concat", ({
    enumerable: true,
    get: function() {
        return concat_1.concat;
    }
}));
var connectable_1 = __webpack_require__(29800);
Object.defineProperty(exports, "connectable", ({
    enumerable: true,
    get: function() {
        return connectable_1.connectable;
    }
}));
var defer_1 = __webpack_require__(16825);
Object.defineProperty(exports, "defer", ({
    enumerable: true,
    get: function() {
        return defer_1.defer;
    }
}));
var empty_1 = __webpack_require__(63136);
Object.defineProperty(exports, "empty", ({
    enumerable: true,
    get: function() {
        return empty_1.empty;
    }
}));
var forkJoin_1 = __webpack_require__(49232);
Object.defineProperty(exports, "forkJoin", ({
    enumerable: true,
    get: function() {
        return forkJoin_1.forkJoin;
    }
}));
var from_1 = __webpack_require__(37719);
Object.defineProperty(exports, "from", ({
    enumerable: true,
    get: function() {
        return from_1.from;
    }
}));
var fromEvent_1 = __webpack_require__(56996);
Object.defineProperty(exports, "fromEvent", ({
    enumerable: true,
    get: function() {
        return fromEvent_1.fromEvent;
    }
}));
var fromEventPattern_1 = __webpack_require__(45634);
Object.defineProperty(exports, "fromEventPattern", ({
    enumerable: true,
    get: function() {
        return fromEventPattern_1.fromEventPattern;
    }
}));
var generate_1 = __webpack_require__(87539);
Object.defineProperty(exports, "generate", ({
    enumerable: true,
    get: function() {
        return generate_1.generate;
    }
}));
var iif_1 = __webpack_require__(78635);
Object.defineProperty(exports, "iif", ({
    enumerable: true,
    get: function() {
        return iif_1.iif;
    }
}));
var interval_1 = __webpack_require__(49077);
Object.defineProperty(exports, "interval", ({
    enumerable: true,
    get: function() {
        return interval_1.interval;
    }
}));
var merge_1 = __webpack_require__(48619);
Object.defineProperty(exports, "merge", ({
    enumerable: true,
    get: function() {
        return merge_1.merge;
    }
}));
var never_1 = __webpack_require__(90358);
Object.defineProperty(exports, "never", ({
    enumerable: true,
    get: function() {
        return never_1.never;
    }
}));
var of_1 = __webpack_require__(71774);
Object.defineProperty(exports, "of", ({
    enumerable: true,
    get: function() {
        return of_1.of;
    }
}));
var onErrorResumeNext_1 = __webpack_require__(31477);
Object.defineProperty(exports, "onErrorResumeNext", ({
    enumerable: true,
    get: function() {
        return onErrorResumeNext_1.onErrorResumeNext;
    }
}));
var pairs_1 = __webpack_require__(58300);
Object.defineProperty(exports, "pairs", ({
    enumerable: true,
    get: function() {
        return pairs_1.pairs;
    }
}));
var partition_1 = __webpack_require__(72232);
Object.defineProperty(exports, "partition", ({
    enumerable: true,
    get: function() {
        return partition_1.partition;
    }
}));
var race_1 = __webpack_require__(76877);
Object.defineProperty(exports, "race", ({
    enumerable: true,
    get: function() {
        return race_1.race;
    }
}));
var range_1 = __webpack_require__(14480);
Object.defineProperty(exports, "range", ({
    enumerable: true,
    get: function() {
        return range_1.range;
    }
}));
var throwError_1 = __webpack_require__(82149);
Object.defineProperty(exports, "throwError", ({
    enumerable: true,
    get: function() {
        return throwError_1.throwError;
    }
}));
var timer_1 = __webpack_require__(86855);
Object.defineProperty(exports, "timer", ({
    enumerable: true,
    get: function() {
        return timer_1.timer;
    }
}));
var using_1 = __webpack_require__(90572);
Object.defineProperty(exports, "using", ({
    enumerable: true,
    get: function() {
        return using_1.using;
    }
}));
var zip_1 = __webpack_require__(76736);
Object.defineProperty(exports, "zip", ({
    enumerable: true,
    get: function() {
        return zip_1.zip;
    }
}));
var scheduled_1 = __webpack_require__(26588);
Object.defineProperty(exports, "scheduled", ({
    enumerable: true,
    get: function() {
        return scheduled_1.scheduled;
    }
}));
var empty_2 = __webpack_require__(63136);
Object.defineProperty(exports, "EMPTY", ({
    enumerable: true,
    get: function() {
        return empty_2.EMPTY;
    }
}));
var never_2 = __webpack_require__(90358);
Object.defineProperty(exports, "NEVER", ({
    enumerable: true,
    get: function() {
        return never_2.NEVER;
    }
}));
__exportStar(__webpack_require__(78447), exports);
var config_1 = __webpack_require__(69265);
Object.defineProperty(exports, "config", ({
    enumerable: true,
    get: function() {
        return config_1.config;
    }
}));
var audit_1 = __webpack_require__(62251);
Object.defineProperty(exports, "audit", ({
    enumerable: true,
    get: function() {
        return audit_1.audit;
    }
}));
var auditTime_1 = __webpack_require__(2281);
Object.defineProperty(exports, "auditTime", ({
    enumerable: true,
    get: function() {
        return auditTime_1.auditTime;
    }
}));
var buffer_1 = __webpack_require__(23994);
Object.defineProperty(exports, "buffer", ({
    enumerable: true,
    get: function() {
        return buffer_1.buffer;
    }
}));
var bufferCount_1 = __webpack_require__(57342);
Object.defineProperty(exports, "bufferCount", ({
    enumerable: true,
    get: function() {
        return bufferCount_1.bufferCount;
    }
}));
var bufferTime_1 = __webpack_require__(24528);
Object.defineProperty(exports, "bufferTime", ({
    enumerable: true,
    get: function() {
        return bufferTime_1.bufferTime;
    }
}));
var bufferToggle_1 = __webpack_require__(26730);
Object.defineProperty(exports, "bufferToggle", ({
    enumerable: true,
    get: function() {
        return bufferToggle_1.bufferToggle;
    }
}));
var bufferWhen_1 = __webpack_require__(57104);
Object.defineProperty(exports, "bufferWhen", ({
    enumerable: true,
    get: function() {
        return bufferWhen_1.bufferWhen;
    }
}));
var catchError_1 = __webpack_require__(23230);
Object.defineProperty(exports, "catchError", ({
    enumerable: true,
    get: function() {
        return catchError_1.catchError;
    }
}));
var combineAll_1 = __webpack_require__(69134);
Object.defineProperty(exports, "combineAll", ({
    enumerable: true,
    get: function() {
        return combineAll_1.combineAll;
    }
}));
var combineLatestAll_1 = __webpack_require__(12650);
Object.defineProperty(exports, "combineLatestAll", ({
    enumerable: true,
    get: function() {
        return combineLatestAll_1.combineLatestAll;
    }
}));
var combineLatestWith_1 = __webpack_require__(63796);
Object.defineProperty(exports, "combineLatestWith", ({
    enumerable: true,
    get: function() {
        return combineLatestWith_1.combineLatestWith;
    }
}));
var concatAll_1 = __webpack_require__(96348);
Object.defineProperty(exports, "concatAll", ({
    enumerable: true,
    get: function() {
        return concatAll_1.concatAll;
    }
}));
var concatMap_1 = __webpack_require__(94170);
Object.defineProperty(exports, "concatMap", ({
    enumerable: true,
    get: function() {
        return concatMap_1.concatMap;
    }
}));
var concatMapTo_1 = __webpack_require__(10672);
Object.defineProperty(exports, "concatMapTo", ({
    enumerable: true,
    get: function() {
        return concatMapTo_1.concatMapTo;
    }
}));
var concatWith_1 = __webpack_require__(84579);
Object.defineProperty(exports, "concatWith", ({
    enumerable: true,
    get: function() {
        return concatWith_1.concatWith;
    }
}));
var connect_1 = __webpack_require__(98414);
Object.defineProperty(exports, "connect", ({
    enumerable: true,
    get: function() {
        return connect_1.connect;
    }
}));
var count_1 = __webpack_require__(60727);
Object.defineProperty(exports, "count", ({
    enumerable: true,
    get: function() {
        return count_1.count;
    }
}));
var debounce_1 = __webpack_require__(79709);
Object.defineProperty(exports, "debounce", ({
    enumerable: true,
    get: function() {
        return debounce_1.debounce;
    }
}));
var debounceTime_1 = __webpack_require__(22069);
Object.defineProperty(exports, "debounceTime", ({
    enumerable: true,
    get: function() {
        return debounceTime_1.debounceTime;
    }
}));
var defaultIfEmpty_1 = __webpack_require__(18411);
Object.defineProperty(exports, "defaultIfEmpty", ({
    enumerable: true,
    get: function() {
        return defaultIfEmpty_1.defaultIfEmpty;
    }
}));
var delay_1 = __webpack_require__(42835);
Object.defineProperty(exports, "delay", ({
    enumerable: true,
    get: function() {
        return delay_1.delay;
    }
}));
var delayWhen_1 = __webpack_require__(44270);
Object.defineProperty(exports, "delayWhen", ({
    enumerable: true,
    get: function() {
        return delayWhen_1.delayWhen;
    }
}));
var dematerialize_1 = __webpack_require__(69153);
Object.defineProperty(exports, "dematerialize", ({
    enumerable: true,
    get: function() {
        return dematerialize_1.dematerialize;
    }
}));
var distinct_1 = __webpack_require__(51499);
Object.defineProperty(exports, "distinct", ({
    enumerable: true,
    get: function() {
        return distinct_1.distinct;
    }
}));
var distinctUntilChanged_1 = __webpack_require__(33808);
Object.defineProperty(exports, "distinctUntilChanged", ({
    enumerable: true,
    get: function() {
        return distinctUntilChanged_1.distinctUntilChanged;
    }
}));
var distinctUntilKeyChanged_1 = __webpack_require__(90780);
Object.defineProperty(exports, "distinctUntilKeyChanged", ({
    enumerable: true,
    get: function() {
        return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    }
}));
var elementAt_1 = __webpack_require__(91359);
Object.defineProperty(exports, "elementAt", ({
    enumerable: true,
    get: function() {
        return elementAt_1.elementAt;
    }
}));
var endWith_1 = __webpack_require__(68764);
Object.defineProperty(exports, "endWith", ({
    enumerable: true,
    get: function() {
        return endWith_1.endWith;
    }
}));
var every_1 = __webpack_require__(92568);
Object.defineProperty(exports, "every", ({
    enumerable: true,
    get: function() {
        return every_1.every;
    }
}));
var exhaust_1 = __webpack_require__(61239);
Object.defineProperty(exports, "exhaust", ({
    enumerable: true,
    get: function() {
        return exhaust_1.exhaust;
    }
}));
var exhaustAll_1 = __webpack_require__(68271);
Object.defineProperty(exports, "exhaustAll", ({
    enumerable: true,
    get: function() {
        return exhaustAll_1.exhaustAll;
    }
}));
var exhaustMap_1 = __webpack_require__(94685);
Object.defineProperty(exports, "exhaustMap", ({
    enumerable: true,
    get: function() {
        return exhaustMap_1.exhaustMap;
    }
}));
var expand_1 = __webpack_require__(30235);
Object.defineProperty(exports, "expand", ({
    enumerable: true,
    get: function() {
        return expand_1.expand;
    }
}));
var filter_1 = __webpack_require__(5419);
Object.defineProperty(exports, "filter", ({
    enumerable: true,
    get: function() {
        return filter_1.filter;
    }
}));
var finalize_1 = __webpack_require__(36788);
Object.defineProperty(exports, "finalize", ({
    enumerable: true,
    get: function() {
        return finalize_1.finalize;
    }
}));
var find_1 = __webpack_require__(26914);
Object.defineProperty(exports, "find", ({
    enumerable: true,
    get: function() {
        return find_1.find;
    }
}));
var findIndex_1 = __webpack_require__(24592);
Object.defineProperty(exports, "findIndex", ({
    enumerable: true,
    get: function() {
        return findIndex_1.findIndex;
    }
}));
var first_1 = __webpack_require__(38752);
Object.defineProperty(exports, "first", ({
    enumerable: true,
    get: function() {
        return first_1.first;
    }
}));
var groupBy_1 = __webpack_require__(43684);
Object.defineProperty(exports, "groupBy", ({
    enumerable: true,
    get: function() {
        return groupBy_1.groupBy;
    }
}));
var ignoreElements_1 = __webpack_require__(92074);
Object.defineProperty(exports, "ignoreElements", ({
    enumerable: true,
    get: function() {
        return ignoreElements_1.ignoreElements;
    }
}));
var isEmpty_1 = __webpack_require__(35536);
Object.defineProperty(exports, "isEmpty", ({
    enumerable: true,
    get: function() {
        return isEmpty_1.isEmpty;
    }
}));
var last_1 = __webpack_require__(9293);
Object.defineProperty(exports, "last", ({
    enumerable: true,
    get: function() {
        return last_1.last;
    }
}));
var map_1 = __webpack_require__(14309);
Object.defineProperty(exports, "map", ({
    enumerable: true,
    get: function() {
        return map_1.map;
    }
}));
var mapTo_1 = __webpack_require__(69024);
Object.defineProperty(exports, "mapTo", ({
    enumerable: true,
    get: function() {
        return mapTo_1.mapTo;
    }
}));
var materialize_1 = __webpack_require__(80210);
Object.defineProperty(exports, "materialize", ({
    enumerable: true,
    get: function() {
        return materialize_1.materialize;
    }
}));
var max_1 = __webpack_require__(1714);
Object.defineProperty(exports, "max", ({
    enumerable: true,
    get: function() {
        return max_1.max;
    }
}));
var mergeAll_1 = __webpack_require__(98608);
Object.defineProperty(exports, "mergeAll", ({
    enumerable: true,
    get: function() {
        return mergeAll_1.mergeAll;
    }
}));
var flatMap_1 = __webpack_require__(76160);
Object.defineProperty(exports, "flatMap", ({
    enumerable: true,
    get: function() {
        return flatMap_1.flatMap;
    }
}));
var mergeMap_1 = __webpack_require__(49586);
Object.defineProperty(exports, "mergeMap", ({
    enumerable: true,
    get: function() {
        return mergeMap_1.mergeMap;
    }
}));
var mergeMapTo_1 = __webpack_require__(55013);
Object.defineProperty(exports, "mergeMapTo", ({
    enumerable: true,
    get: function() {
        return mergeMapTo_1.mergeMapTo;
    }
}));
var mergeScan_1 = __webpack_require__(85090);
Object.defineProperty(exports, "mergeScan", ({
    enumerable: true,
    get: function() {
        return mergeScan_1.mergeScan;
    }
}));
var mergeWith_1 = __webpack_require__(55196);
Object.defineProperty(exports, "mergeWith", ({
    enumerable: true,
    get: function() {
        return mergeWith_1.mergeWith;
    }
}));
var min_1 = __webpack_require__(42017);
Object.defineProperty(exports, "min", ({
    enumerable: true,
    get: function() {
        return min_1.min;
    }
}));
var multicast_1 = __webpack_require__(53807);
Object.defineProperty(exports, "multicast", ({
    enumerable: true,
    get: function() {
        return multicast_1.multicast;
    }
}));
var observeOn_1 = __webpack_require__(39755);
Object.defineProperty(exports, "observeOn", ({
    enumerable: true,
    get: function() {
        return observeOn_1.observeOn;
    }
}));
var onErrorResumeNextWith_1 = __webpack_require__(69048);
Object.defineProperty(exports, "onErrorResumeNextWith", ({
    enumerable: true,
    get: function() {
        return onErrorResumeNextWith_1.onErrorResumeNextWith;
    }
}));
var pairwise_1 = __webpack_require__(16042);
Object.defineProperty(exports, "pairwise", ({
    enumerable: true,
    get: function() {
        return pairwise_1.pairwise;
    }
}));
var pluck_1 = __webpack_require__(77420);
Object.defineProperty(exports, "pluck", ({
    enumerable: true,
    get: function() {
        return pluck_1.pluck;
    }
}));
var publish_1 = __webpack_require__(92601);
Object.defineProperty(exports, "publish", ({
    enumerable: true,
    get: function() {
        return publish_1.publish;
    }
}));
var publishBehavior_1 = __webpack_require__(86837);
Object.defineProperty(exports, "publishBehavior", ({
    enumerable: true,
    get: function() {
        return publishBehavior_1.publishBehavior;
    }
}));
var publishLast_1 = __webpack_require__(44129);
Object.defineProperty(exports, "publishLast", ({
    enumerable: true,
    get: function() {
        return publishLast_1.publishLast;
    }
}));
var publishReplay_1 = __webpack_require__(76607);
Object.defineProperty(exports, "publishReplay", ({
    enumerable: true,
    get: function() {
        return publishReplay_1.publishReplay;
    }
}));
var raceWith_1 = __webpack_require__(61967);
Object.defineProperty(exports, "raceWith", ({
    enumerable: true,
    get: function() {
        return raceWith_1.raceWith;
    }
}));
var reduce_1 = __webpack_require__(23793);
Object.defineProperty(exports, "reduce", ({
    enumerable: true,
    get: function() {
        return reduce_1.reduce;
    }
}));
var repeat_1 = __webpack_require__(88846);
Object.defineProperty(exports, "repeat", ({
    enumerable: true,
    get: function() {
        return repeat_1.repeat;
    }
}));
var repeatWhen_1 = __webpack_require__(87471);
Object.defineProperty(exports, "repeatWhen", ({
    enumerable: true,
    get: function() {
        return repeatWhen_1.repeatWhen;
    }
}));
var retry_1 = __webpack_require__(63434);
Object.defineProperty(exports, "retry", ({
    enumerable: true,
    get: function() {
        return retry_1.retry;
    }
}));
var retryWhen_1 = __webpack_require__(30905);
Object.defineProperty(exports, "retryWhen", ({
    enumerable: true,
    get: function() {
        return retryWhen_1.retryWhen;
    }
}));
var refCount_1 = __webpack_require__(12775);
Object.defineProperty(exports, "refCount", ({
    enumerable: true,
    get: function() {
        return refCount_1.refCount;
    }
}));
var sample_1 = __webpack_require__(65340);
Object.defineProperty(exports, "sample", ({
    enumerable: true,
    get: function() {
        return sample_1.sample;
    }
}));
var sampleTime_1 = __webpack_require__(78379);
Object.defineProperty(exports, "sampleTime", ({
    enumerable: true,
    get: function() {
        return sampleTime_1.sampleTime;
    }
}));
var scan_1 = __webpack_require__(74867);
Object.defineProperty(exports, "scan", ({
    enumerable: true,
    get: function() {
        return scan_1.scan;
    }
}));
var sequenceEqual_1 = __webpack_require__(12666);
Object.defineProperty(exports, "sequenceEqual", ({
    enumerable: true,
    get: function() {
        return sequenceEqual_1.sequenceEqual;
    }
}));
var share_1 = __webpack_require__(12766);
Object.defineProperty(exports, "share", ({
    enumerable: true,
    get: function() {
        return share_1.share;
    }
}));
var shareReplay_1 = __webpack_require__(10931);
Object.defineProperty(exports, "shareReplay", ({
    enumerable: true,
    get: function() {
        return shareReplay_1.shareReplay;
    }
}));
var single_1 = __webpack_require__(59237);
Object.defineProperty(exports, "single", ({
    enumerable: true,
    get: function() {
        return single_1.single;
    }
}));
var skip_1 = __webpack_require__(53082);
Object.defineProperty(exports, "skip", ({
    enumerable: true,
    get: function() {
        return skip_1.skip;
    }
}));
var skipLast_1 = __webpack_require__(84447);
Object.defineProperty(exports, "skipLast", ({
    enumerable: true,
    get: function() {
        return skipLast_1.skipLast;
    }
}));
var skipUntil_1 = __webpack_require__(52696);
Object.defineProperty(exports, "skipUntil", ({
    enumerable: true,
    get: function() {
        return skipUntil_1.skipUntil;
    }
}));
var skipWhile_1 = __webpack_require__(2177);
Object.defineProperty(exports, "skipWhile", ({
    enumerable: true,
    get: function() {
        return skipWhile_1.skipWhile;
    }
}));
var startWith_1 = __webpack_require__(21732);
Object.defineProperty(exports, "startWith", ({
    enumerable: true,
    get: function() {
        return startWith_1.startWith;
    }
}));
var subscribeOn_1 = __webpack_require__(67082);
Object.defineProperty(exports, "subscribeOn", ({
    enumerable: true,
    get: function() {
        return subscribeOn_1.subscribeOn;
    }
}));
var switchAll_1 = __webpack_require__(14658);
Object.defineProperty(exports, "switchAll", ({
    enumerable: true,
    get: function() {
        return switchAll_1.switchAll;
    }
}));
var switchMap_1 = __webpack_require__(69381);
Object.defineProperty(exports, "switchMap", ({
    enumerable: true,
    get: function() {
        return switchMap_1.switchMap;
    }
}));
var switchMapTo_1 = __webpack_require__(1299);
Object.defineProperty(exports, "switchMapTo", ({
    enumerable: true,
    get: function() {
        return switchMapTo_1.switchMapTo;
    }
}));
var switchScan_1 = __webpack_require__(85705);
Object.defineProperty(exports, "switchScan", ({
    enumerable: true,
    get: function() {
        return switchScan_1.switchScan;
    }
}));
var take_1 = __webpack_require__(56357);
Object.defineProperty(exports, "take", ({
    enumerable: true,
    get: function() {
        return take_1.take;
    }
}));
var takeLast_1 = __webpack_require__(16233);
Object.defineProperty(exports, "takeLast", ({
    enumerable: true,
    get: function() {
        return takeLast_1.takeLast;
    }
}));
var takeUntil_1 = __webpack_require__(36008);
Object.defineProperty(exports, "takeUntil", ({
    enumerable: true,
    get: function() {
        return takeUntil_1.takeUntil;
    }
}));
var takeWhile_1 = __webpack_require__(96270);
Object.defineProperty(exports, "takeWhile", ({
    enumerable: true,
    get: function() {
        return takeWhile_1.takeWhile;
    }
}));
var tap_1 = __webpack_require__(60456);
Object.defineProperty(exports, "tap", ({
    enumerable: true,
    get: function() {
        return tap_1.tap;
    }
}));
var throttle_1 = __webpack_require__(62082);
Object.defineProperty(exports, "throttle", ({
    enumerable: true,
    get: function() {
        return throttle_1.throttle;
    }
}));
var throttleTime_1 = __webpack_require__(57767);
Object.defineProperty(exports, "throttleTime", ({
    enumerable: true,
    get: function() {
        return throttleTime_1.throttleTime;
    }
}));
var throwIfEmpty_1 = __webpack_require__(41559);
Object.defineProperty(exports, "throwIfEmpty", ({
    enumerable: true,
    get: function() {
        return throwIfEmpty_1.throwIfEmpty;
    }
}));
var timeInterval_1 = __webpack_require__(19831);
Object.defineProperty(exports, "timeInterval", ({
    enumerable: true,
    get: function() {
        return timeInterval_1.timeInterval;
    }
}));
var timeout_2 = __webpack_require__(85280);
Object.defineProperty(exports, "timeout", ({
    enumerable: true,
    get: function() {
        return timeout_2.timeout;
    }
}));
var timeoutWith_1 = __webpack_require__(97472);
Object.defineProperty(exports, "timeoutWith", ({
    enumerable: true,
    get: function() {
        return timeoutWith_1.timeoutWith;
    }
}));
var timestamp_1 = __webpack_require__(36258);
Object.defineProperty(exports, "timestamp", ({
    enumerable: true,
    get: function() {
        return timestamp_1.timestamp;
    }
}));
var toArray_1 = __webpack_require__(61621);
Object.defineProperty(exports, "toArray", ({
    enumerable: true,
    get: function() {
        return toArray_1.toArray;
    }
}));
var window_1 = __webpack_require__(42803);
Object.defineProperty(exports, "window", ({
    enumerable: true,
    get: function() {
        return window_1.window;
    }
}));
var windowCount_1 = __webpack_require__(37031);
Object.defineProperty(exports, "windowCount", ({
    enumerable: true,
    get: function() {
        return windowCount_1.windowCount;
    }
}));
var windowTime_1 = __webpack_require__(27823);
Object.defineProperty(exports, "windowTime", ({
    enumerable: true,
    get: function() {
        return windowTime_1.windowTime;
    }
}));
var windowToggle_1 = __webpack_require__(83837);
Object.defineProperty(exports, "windowToggle", ({
    enumerable: true,
    get: function() {
        return windowToggle_1.windowToggle;
    }
}));
var windowWhen_1 = __webpack_require__(76996);
Object.defineProperty(exports, "windowWhen", ({
    enumerable: true,
    get: function() {
        return windowWhen_1.windowWhen;
    }
}));
var withLatestFrom_1 = __webpack_require__(81561);
Object.defineProperty(exports, "withLatestFrom", ({
    enumerable: true,
    get: function() {
        return withLatestFrom_1.withLatestFrom;
    }
}));
var zipAll_1 = __webpack_require__(6101);
Object.defineProperty(exports, "zipAll", ({
    enumerable: true,
    get: function() {
        return zipAll_1.zipAll;
    }
}));
var zipWith_1 = __webpack_require__(1525);
Object.defineProperty(exports, "zipWith", ({
    enumerable: true,
    get: function() {
        return zipWith_1.zipWith;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 74451:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsyncSubject = void 0;
var Subject_1 = __webpack_require__(75465);
var AsyncSubject = function(_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) {
            subscriber.error(thrownError);
        } else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject.prototype.next = function(value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject.prototype.complete = function() {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject;
}(Subject_1.Subject);
exports.AsyncSubject = AsyncSubject; //# sourceMappingURL=AsyncSubject.js.map


/***/ }),

/***/ 16216:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.BehaviorSubject = void 0;
var Subject_1 = __webpack_require__(75465);
var BehaviorSubject = function(_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject);
exports.BehaviorSubject = BehaviorSubject; //# sourceMappingURL=BehaviorSubject.js.map


/***/ }),

/***/ 45545:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
var empty_1 = __webpack_require__(63136);
var of_1 = __webpack_require__(71774);
var throwError_1 = __webpack_require__(82149);
var isFunction_1 = __webpack_require__(81093);
var NotificationKind;
(function(NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var Notification = function() {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
    }
    Notification.prototype.observe = function(observer) {
        return observeNotification(this, observer);
    };
    Notification.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    };
    Notification.prototype.accept = function(nextOrObserver, error, complete) {
        var _a;
        return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
    };
    Notification.prototype.toObservable = function() {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === "N" ? of_1.of(value) : kind === "E" ? throwError_1.throwError(function() {
            return error;
        }) : kind === "C" ? empty_1.EMPTY : 0;
        if (!result) {
            throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
    };
    Notification.createNext = function(value) {
        return new Notification("N", value);
    };
    Notification.createError = function(err) {
        return new Notification("E", undefined, err);
    };
    Notification.createComplete = function() {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification("C");
    return Notification;
}();
exports.Notification = Notification;
function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== "string") {
        throw new TypeError('Invalid notification, missing "kind"');
    }
    kind === "N" ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}
exports.observeNotification = observeNotification; //# sourceMappingURL=Notification.js.map


/***/ }),

/***/ 27028:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
exports.COMPLETE_NOTIFICATION = function() {
    return createNotification("C", undefined, undefined);
}();
function errorNotification(error) {
    return createNotification("E", undefined, error);
}
exports.errorNotification = errorNotification;
function nextNotification(value) {
    return createNotification("N", value, undefined);
}
exports.nextNotification = nextNotification;
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
}
exports.createNotification = createNotification; //# sourceMappingURL=NotificationFactories.js.map


/***/ }),

/***/ 74064:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Observable = void 0;
var Subscriber_1 = __webpack_require__(10592);
var Subscription_1 = __webpack_require__(31484);
var observable_1 = __webpack_require__(1895);
var pipe_1 = __webpack_require__(78976);
var config_1 = __webpack_require__(69265);
var isFunction_1 = __webpack_require__(81093);
var errorContext_1 = __webpack_require__(50460);
var Observable = function() {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscriber = new Subscriber_1.SafeSubscriber({
                next: function(value) {
                    try {
                        next(value);
                    } catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++){
            operations[_i] = arguments[_i];
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable.create = function(subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
} //# sourceMappingURL=Observable.js.map


/***/ }),

/***/ 58843:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ReplaySubject = void 0;
var Subject_1 = __webpack_require__(75465);
var dateTimestampProvider_1 = __webpack_require__(36089);
var ReplaySubject = function(_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) {
            _bufferSize = Infinity;
        }
        if (_windowTime === void 0) {
            _windowTime = Infinity;
        }
        if (_timestampProvider === void 0) {
            _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
        }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function(value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for(var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2){
            subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function() {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for(var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2){
                last = i;
            }
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
}(Subject_1.Subject);
exports.ReplaySubject = ReplaySubject; //# sourceMappingURL=ReplaySubject.js.map


/***/ }),

/***/ 60894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Scheduler = void 0;
var dateTimestampProvider_1 = __webpack_require__(36089);
var Scheduler = function() {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider_1.dateTimestampProvider.now;
    return Scheduler;
}();
exports.Scheduler = Scheduler; //# sourceMappingURL=Scheduler.js.map


/***/ }),

/***/ 75465:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AnonymousSubject = exports.Subject = void 0;
var Observable_1 = __webpack_require__(74064);
var Subscription_1 = __webpack_require__(31484);
var ObjectUnsubscribedError_1 = __webpack_require__(43293);
var arrRemove_1 = __webpack_require__(72898);
var errorContext_1 = __webpack_require__(50460);
var Subject = function(_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function() {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function(value) {
        var _this = this;
        errorContext_1.errorContext(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for(var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()){
                        var observer = _c.value;
                        observer.next(value);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            }
        });
    };
    Subject.prototype.error = function(err) {
        var _this = this;
        errorContext_1.errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while(observers.length){
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function() {
        var _this = this;
        errorContext_1.errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while(observers.length){
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return Subscription_1.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription_1.Subscription(function() {
            _this.currentObservers = null;
            arrRemove_1.arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        } else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function() {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable);
exports.Subject = Subject;
var AnonymousSubject = function(_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject);
exports.AnonymousSubject = AnonymousSubject; //# sourceMappingURL=Subject.js.map


/***/ }),

/***/ 10592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
var isFunction_1 = __webpack_require__(81093);
var Subscription_1 = __webpack_require__(31484);
var config_1 = __webpack_require__(69265);
var reportUnhandledError_1 = __webpack_require__(14469);
var noop_1 = __webpack_require__(80589);
var NotificationFactories_1 = __webpack_require__(27028);
var timeoutProvider_1 = __webpack_require__(34606);
var errorContext_1 = __webpack_require__(50460);
var Subscriber = function(_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (Subscription_1.isSubscription(destination)) {
                destination.add(_this);
            }
        } else {
            _this.destination = exports.EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function(value) {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        } else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function(err) {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        } else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        } else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription_1.Subscription);
exports.Subscriber = Subscriber;
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            } catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            } catch (error) {
                handleUnhandledError(error);
            }
        } else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            } catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}();
var SafeSubscriber = function(_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined
            };
        } else {
            var context_1;
            if (_this && config_1.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
                };
            } else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber);
exports.SafeSubscriber = SafeSubscriber;
function handleUnhandledError(error) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        errorContext_1.captureError(error);
    } else {
        reportUnhandledError_1.reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config_1.config.onStoppedNotification;
    onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
exports.EMPTY_OBSERVER = {
    closed: true,
    next: noop_1.noop,
    error: defaultErrorHandler,
    complete: noop_1.noop
}; //# sourceMappingURL=Subscriber.js.map


/***/ }),

/***/ 31484:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
var isFunction_1 = __webpack_require__(81093);
var UnsubscriptionError_1 = __webpack_require__(97058);
var arrRemove_1 = __webpack_require__(72898);
var Subscription = function() {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for(var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally{
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        } finally{
                            if (e_1) throw e_1.error;
                        }
                    }
                } else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction_1.isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                } catch (e) {
                    errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [
                        e
                    ];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for(var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()){
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
            if (errors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            } else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    };
    Subscription.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        } else if (Array.isArray(_parentage)) {
            arrRemove_1.arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = function() {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    }();
    return Subscription;
}();
exports.Subscription = Subscription;
exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
}
exports.isSubscription = isSubscription;
function execFinalizer(finalizer) {
    if (isFunction_1.isFunction(finalizer)) {
        finalizer();
    } else {
        finalizer.unsubscribe();
    }
} //# sourceMappingURL=Subscription.js.map


/***/ }),

/***/ 69265:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.config = void 0;
exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
}; //# sourceMappingURL=config.js.map


/***/ }),

/***/ 46296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.firstValueFrom = void 0;
var EmptyError_1 = __webpack_require__(21253);
var Subscriber_1 = __webpack_require__(10592);
function firstValueFrom(source, config) {
    var hasConfig = typeof config === "object";
    return new Promise(function(resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
            next: function(value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function() {
                if (hasConfig) {
                    resolve(config.defaultValue);
                } else {
                    reject(new EmptyError_1.EmptyError());
                }
            }
        });
        source.subscribe(subscriber);
    });
}
exports.firstValueFrom = firstValueFrom; //# sourceMappingURL=firstValueFrom.js.map


/***/ }),

/***/ 13196:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.lastValueFrom = void 0;
var EmptyError_1 = __webpack_require__(21253);
function lastValueFrom(source, config) {
    var hasConfig = typeof config === "object";
    return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function(value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function() {
                if (_hasValue) {
                    resolve(_value);
                } else if (hasConfig) {
                    resolve(config.defaultValue);
                } else {
                    reject(new EmptyError_1.EmptyError());
                }
            }
        });
    });
}
exports.lastValueFrom = lastValueFrom; //# sourceMappingURL=lastValueFrom.js.map


/***/ }),

/***/ 73034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ConnectableObservable = void 0;
var Observable_1 = __webpack_require__(74064);
var Subscription_1 = __webpack_require__(31484);
var refCount_1 = __webpack_require__(12775);
var OperatorSubscriber_1 = __webpack_require__(15691);
var lift_1 = __webpack_require__(24629);
var ConnectableObservable = function(_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) {
            _this.lift = source.lift;
        }
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
    };
    ConnectableObservable.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, undefined, function() {
                _this._teardown();
                subject_1.complete();
            }, function(err) {
                _this._teardown();
                subject_1.error(err);
            }, function() {
                return _this._teardown();
            })));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function() {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable;
}(Observable_1.Observable);
exports.ConnectableObservable = ConnectableObservable; //# sourceMappingURL=ConnectableObservable.js.map


/***/ }),

/***/ 83386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bindCallback = void 0;
var bindCallbackInternals_1 = __webpack_require__(21691);
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
exports.bindCallback = bindCallback; //# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ 21691:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bindCallbackInternals = void 0;
var isScheduler_1 = __webpack_require__(2910);
var Observable_1 = __webpack_require__(74064);
var subscribeOn_1 = __webpack_require__(67082);
var mapOneOrManyArgs_1 = __webpack_require__(24076);
var observeOn_1 = __webpack_require__(39755);
var AsyncSubject_1 = __webpack_require__(74451);
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        } else {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++){
                    args[_i] = arguments[_i];
                }
                return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
            };
        }
    }
    if (scheduler) {
        return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
        };
    }
    return function() {
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function(subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
                    function() {
                        var results = [];
                        for(var _i = 0; _i < arguments.length; _i++){
                            results[_i] = arguments[_i];
                        }
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) {
                            subject.complete();
                        }
                    }
                ]));
                if (isComplete_1) {
                    subject.complete();
                }
                isAsync_1 = true;
            }
            return subs;
        });
    };
}
exports.bindCallbackInternals = bindCallbackInternals; //# sourceMappingURL=bindCallbackInternals.js.map


/***/ }),

/***/ 71844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bindNodeCallback = void 0;
var bindCallbackInternals_1 = __webpack_require__(21691);
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
exports.bindNodeCallback = bindNodeCallback; //# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ 35855:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineLatestInit = exports.combineLatest = void 0;
var Observable_1 = __webpack_require__(74064);
var argsArgArrayOrObject_1 = __webpack_require__(89840);
var from_1 = __webpack_require__(37719);
var identity_1 = __webpack_require__(78557);
var mapOneOrManyArgs_1 = __webpack_require__(24076);
var args_1 = __webpack_require__(907);
var createObject_1 = __webpack_require__(28884);
var OperatorSubscriber_1 = __webpack_require__(15691);
var executeSchedule_1 = __webpack_require__(87588);
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) {
        return from_1.from([], scheduler);
    }
    var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
        return createObject_1.createObject(keys, values);
    } : identity_1.identity));
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.combineLatest = combineLatest;
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) {
        valueTransform = identity_1.identity;
    }
    return function(subscriber) {
        maybeSchedule(scheduler, function() {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function(i) {
                maybeSchedule(scheduler, function() {
                    var source = from_1.from(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) {
                            subscriber.next(valueTransform(values.slice()));
                        }
                    }, function() {
                        if (!--active) {
                            subscriber.complete();
                        }
                    }));
                }, subscriber);
            };
            for(var i = 0; i < length; i++){
                _loop_1(i);
            }
        }, subscriber);
    };
}
exports.combineLatestInit = combineLatestInit;
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
        executeSchedule_1.executeSchedule(subscription, scheduler, execute);
    } else {
        execute();
    }
} //# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ 36802:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concat = void 0;
var concatAll_1 = __webpack_require__(96348);
var args_1 = __webpack_require__(907);
var from_1 = __webpack_require__(37719);
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
}
exports.concat = concat; //# sourceMappingURL=concat.js.map


/***/ }),

/***/ 29800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.connectable = void 0;
var Subject_1 = __webpack_require__(75465);
var Observable_1 = __webpack_require__(74064);
var defer_1 = __webpack_require__(16825);
var DEFAULT_CONFIG = {
    connector: function() {
        return new Subject_1.Subject();
    },
    resetOnDisconnect: true
};
function connectable(source, config) {
    if (config === void 0) {
        config = DEFAULT_CONFIG;
    }
    var connection = null;
    var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new Observable_1.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function() {
        if (!connection || connection.closed) {
            connection = defer_1.defer(function() {
                return source;
            }).subscribe(subject);
            if (resetOnDisconnect) {
                connection.add(function() {
                    return subject = connector();
                });
            }
        }
        return connection;
    };
    return result;
}
exports.connectable = connectable; //# sourceMappingURL=connectable.js.map


/***/ }),

/***/ 16825:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defer = void 0;
var Observable_1 = __webpack_require__(74064);
var innerFrom_1 = __webpack_require__(94681);
function defer(observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
        innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
    });
}
exports.defer = defer; //# sourceMappingURL=defer.js.map


/***/ }),

/***/ 85810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.animationFrames = void 0;
var Observable_1 = __webpack_require__(74064);
var performanceTimestampProvider_1 = __webpack_require__(83004);
var animationFrameProvider_1 = __webpack_require__(71078);
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
exports.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    return new Observable_1.Observable(function(subscriber) {
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = function() {
            if (!subscriber.closed) {
                id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
                    id = 0;
                    var now = provider.now();
                    subscriber.next({
                        timestamp: timestampProvider ? now : timestamp,
                        elapsed: now - start
                    });
                    run();
                });
            }
        };
        run();
        return function() {
            if (id) {
                animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            }
        };
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory(); //# sourceMappingURL=animationFrames.js.map


/***/ }),

/***/ 63136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.empty = exports.EMPTY = void 0;
var Observable_1 = __webpack_require__(74064);
exports.EMPTY = new Observable_1.Observable(function(subscriber) {
    return subscriber.complete();
});
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return subscriber.complete();
        });
    });
} //# sourceMappingURL=empty.js.map


/***/ }),

/***/ 49232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.forkJoin = void 0;
var Observable_1 = __webpack_require__(74064);
var argsArgArrayOrObject_1 = __webpack_require__(89840);
var innerFrom_1 = __webpack_require__(94681);
var args_1 = __webpack_require__(907);
var OperatorSubscriber_1 = __webpack_require__(15691);
var mapOneOrManyArgs_1 = __webpack_require__(24076);
var createObject_1 = __webpack_require__(28884);
function forkJoin() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable_1.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex) {
            var hasValue = false;
            innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function() {
                return remainingCompletions--;
            }, undefined, function() {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) {
                        subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
                    }
                    subscriber.complete();
                }
            }));
        };
        for(var sourceIndex = 0; sourceIndex < length; sourceIndex++){
            _loop_1(sourceIndex);
        }
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.forkJoin = forkJoin; //# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ 37719:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.from = void 0;
var scheduled_1 = __webpack_require__(26588);
var innerFrom_1 = __webpack_require__(94681);
function from(input, scheduler) {
    return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
}
exports.from = from; //# sourceMappingURL=from.js.map


/***/ }),

/***/ 56996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromEvent = void 0;
var innerFrom_1 = __webpack_require__(94681);
var Observable_1 = __webpack_require__(74064);
var mergeMap_1 = __webpack_require__(49586);
var isArrayLike_1 = __webpack_require__(83700);
var isFunction_1 = __webpack_require__(81093);
var mapOneOrManyArgs_1 = __webpack_require__(24076);
var nodeEventEmitterMethods = [
    "addListener",
    "removeListener"
];
var eventTargetMethods = [
    "addEventListener",
    "removeEventListener"
];
var jqueryMethods = [
    "on",
    "off"
];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike_1.isArrayLike(target)) {
            return mergeMap_1.mergeMap(function(subTarget) {
                return fromEvent(subTarget, eventName, options);
            })(innerFrom_1.innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError("Invalid event target");
    }
    return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
            return remove(handler);
        };
    });
}
exports.fromEvent = fromEvent;
function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function isNodeStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
} //# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ 45634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromEventPattern = void 0;
var Observable_1 = __webpack_require__(74064);
var isFunction_1 = __webpack_require__(81093);
var mapOneOrManyArgs_1 = __webpack_require__(24076);
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
            var e = [];
            for(var _i = 0; _i < arguments.length; _i++){
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function() {
            return removeHandler(handler, retValue);
        } : undefined;
    });
}
exports.fromEventPattern = fromEventPattern; //# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ 58723:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromSubscribable = void 0;
var Observable_1 = __webpack_require__(74064);
function fromSubscribable(subscribable) {
    return new Observable_1.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
    });
}
exports.fromSubscribable = fromSubscribable; //# sourceMappingURL=fromSubscribable.js.map


/***/ }),

/***/ 87539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.generate = void 0;
var identity_1 = __webpack_require__(78557);
var isScheduler_1 = __webpack_require__(2910);
var defer_1 = __webpack_require__(16825);
var scheduleIterable_1 = __webpack_require__(19734);
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) {
        _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler;
    } else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
            resultSelector = identity_1.identity;
            scheduler = resultSelectorOrScheduler;
        } else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function gen() {
        var state;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    state = initialState;
                    _a.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        resultSelector(state)
                    ];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    state = iterate(state);
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }
    return defer_1.defer(scheduler ? function() {
        return scheduleIterable_1.scheduleIterable(gen(), scheduler);
    } : gen);
}
exports.generate = generate; //# sourceMappingURL=generate.js.map


/***/ }),

/***/ 78635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.iif = void 0;
var defer_1 = __webpack_require__(16825);
function iif(condition, trueResult, falseResult) {
    return defer_1.defer(function() {
        return condition() ? trueResult : falseResult;
    });
}
exports.iif = iif; //# sourceMappingURL=iif.js.map


/***/ }),

/***/ 94681:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __asyncValues = (void 0) && (void 0).__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;
var isArrayLike_1 = __webpack_require__(83700);
var isPromise_1 = __webpack_require__(9202);
var Observable_1 = __webpack_require__(74064);
var isInteropObservable_1 = __webpack_require__(75296);
var isAsyncIterable_1 = __webpack_require__(95760);
var throwUnobservableError_1 = __webpack_require__(43249);
var isIterable_1 = __webpack_require__(44370);
var isReadableStreamLike_1 = __webpack_require__(84016);
var isFunction_1 = __webpack_require__(81093);
var reportUnhandledError_1 = __webpack_require__(14469);
var observable_1 = __webpack_require__(1895);
function innerFrom(input) {
    if (input instanceof Observable_1.Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike_1.isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise_1.isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable_1.isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.innerFrom = innerFrom;
function fromInteropObservable(obj) {
    return new Observable_1.Observable(function(subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
}
exports.fromInteropObservable = fromInteropObservable;
function fromArrayLike(array) {
    return new Observable_1.Observable(function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++){
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
exports.fromArrayLike = fromArrayLike;
function fromPromise(promise) {
    return new Observable_1.Observable(function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, reportUnhandledError_1.reportUnhandledError);
    });
}
exports.fromPromise = fromPromise;
function fromIterable(iterable) {
    return new Observable_1.Observable(function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        subscriber.complete();
    });
}
exports.fromIterable = fromIterable;
function fromAsyncIterable(asyncIterable) {
    return new Observable_1.Observable(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
exports.fromAsyncIterable = fromAsyncIterable;
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
}
exports.fromReadableStreamLike = fromReadableStreamLike;
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1:
                    return [
                        4,
                        asyncIterable_1.next()
                    ];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [
                        3,
                        4
                    ];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [
                            2
                        ];
                    }
                    _b.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        11
                    ];
                case 6:
                    _b.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        _a.call(asyncIterable_1)
                    ];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (e_2) throw e_2.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    subscriber.complete();
                    return [
                        2
                    ];
            }
        });
    });
} //# sourceMappingURL=innerFrom.js.map


/***/ }),

/***/ 49077:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.interval = void 0;
var async_1 = __webpack_require__(16476);
var timer_1 = __webpack_require__(86855);
function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    if (period < 0) {
        period = 0;
    }
    return timer_1.timer(period, period, scheduler);
}
exports.interval = interval; //# sourceMappingURL=interval.js.map


/***/ }),

/***/ 48619:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.merge = void 0;
var mergeAll_1 = __webpack_require__(98608);
var innerFrom_1 = __webpack_require__(94681);
var empty_1 = __webpack_require__(63136);
var args_1 = __webpack_require__(907);
var from_1 = __webpack_require__(37719);
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
}
exports.merge = merge; //# sourceMappingURL=merge.js.map


/***/ }),

/***/ 90358:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.never = exports.NEVER = void 0;
var Observable_1 = __webpack_require__(74064);
var noop_1 = __webpack_require__(80589);
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never; //# sourceMappingURL=never.js.map


/***/ }),

/***/ 71774:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.of = void 0;
var args_1 = __webpack_require__(907);
var from_1 = __webpack_require__(37719);
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return from_1.from(args, scheduler);
}
exports.of = of; //# sourceMappingURL=of.js.map


/***/ }),

/***/ 31477:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.onErrorResumeNext = void 0;
var Observable_1 = __webpack_require__(74064);
var argsOrArgArray_1 = __webpack_require__(60679);
var OperatorSubscriber_1 = __webpack_require__(15691);
var noop_1 = __webpack_require__(80589);
var innerFrom_1 = __webpack_require__(94681);
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return new Observable_1.Observable(function(subscriber) {
        var sourceIndex = 0;
        var subscribeNext = function() {
            if (sourceIndex < nextSources.length) {
                var nextSource = void 0;
                try {
                    nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
                } catch (err) {
                    subscribeNext();
                    return;
                }
                var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, noop_1.noop, noop_1.noop);
                nextSource.subscribe(innerSubscriber);
                innerSubscriber.add(subscribeNext);
            } else {
                subscriber.complete();
            }
        };
        subscribeNext();
    });
}
exports.onErrorResumeNext = onErrorResumeNext; //# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ 58300:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pairs = void 0;
var from_1 = __webpack_require__(37719);
function pairs(obj, scheduler) {
    return from_1.from(Object.entries(obj), scheduler);
}
exports.pairs = pairs; //# sourceMappingURL=pairs.js.map


/***/ }),

/***/ 72232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.partition = void 0;
var not_1 = __webpack_require__(22980);
var filter_1 = __webpack_require__(5419);
var innerFrom_1 = __webpack_require__(94681);
function partition(source, predicate, thisArg) {
    return [
        filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)),
        filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))
    ];
}
exports.partition = partition; //# sourceMappingURL=partition.js.map


/***/ }),

/***/ 76877:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.raceInit = exports.race = void 0;
var Observable_1 = __webpack_require__(74064);
var innerFrom_1 = __webpack_require__(94681);
var argsOrArgArray_1 = __webpack_require__(60679);
var OperatorSubscriber_1 = __webpack_require__(15691);
function race() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        sources[_i] = arguments[_i];
    }
    sources = argsOrArgArray_1.argsOrArgArray(sources);
    return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
}
exports.race = race;
function raceInit(sources) {
    return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = function(i) {
            subscriptions.push(innerFrom_1.innerFrom(sources[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                if (subscriptions) {
                    for(var s = 0; s < subscriptions.length; s++){
                        s !== i && subscriptions[s].unsubscribe();
                    }
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        };
        for(var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++){
            _loop_1(i);
        }
    };
}
exports.raceInit = raceInit; //# sourceMappingURL=race.js.map


/***/ }),

/***/ 14480:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.range = void 0;
var Observable_1 = __webpack_require__(74064);
var empty_1 = __webpack_require__(63136);
function range(start, count, scheduler) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count <= 0) {
        return empty_1.EMPTY;
    }
    var end = count + start;
    return new Observable_1.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
            if (n < end) {
                subscriber.next(n++);
                this.schedule();
            } else {
                subscriber.complete();
            }
        });
    } : function(subscriber) {
        var n = start;
        while(n < end && !subscriber.closed){
            subscriber.next(n++);
        }
        subscriber.complete();
    });
}
exports.range = range; //# sourceMappingURL=range.js.map


/***/ }),

/***/ 82149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.throwError = void 0;
var Observable_1 = __webpack_require__(74064);
var isFunction_1 = __webpack_require__(81093);
function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
    };
    var init = function(subscriber) {
        return subscriber.error(errorFactory());
    };
    return new Observable_1.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
    } : init);
}
exports.throwError = throwError; //# sourceMappingURL=throwError.js.map


/***/ }),

/***/ 86855:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timer = void 0;
var Observable_1 = __webpack_require__(74064);
var async_1 = __webpack_require__(16476);
var isScheduler_1 = __webpack_require__(2910);
var isDate_1 = __webpack_require__(78978);
function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    if (scheduler === void 0) {
        scheduler = async_1.async;
    }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        } else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_1.Observable(function(subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function() {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                } else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
exports.timer = timer; //# sourceMappingURL=timer.js.map


/***/ }),

/***/ 90572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.using = void 0;
var Observable_1 = __webpack_require__(74064);
var innerFrom_1 = __webpack_require__(94681);
var empty_1 = __webpack_require__(63136);
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function() {
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using; //# sourceMappingURL=using.js.map


/***/ }),

/***/ 76736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.zip = void 0;
var Observable_1 = __webpack_require__(74064);
var innerFrom_1 = __webpack_require__(94681);
var argsOrArgArray_1 = __webpack_require__(60679);
var empty_1 = __webpack_require__(63136);
var OperatorSubscriber_1 = __webpack_require__(15691);
var args_1 = __webpack_require__(907);
function zip() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var sources = argsOrArgArray_1.argsOrArgArray(args);
    return sources.length ? new Observable_1.Observable(function(subscriber) {
        var buffers = sources.map(function() {
            return [];
        });
        var completed = sources.map(function() {
            return false;
        });
        subscriber.add(function() {
            buffers = completed = null;
        });
        var _loop_1 = function(sourceIndex) {
            innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                buffers[sourceIndex].push(value);
                if (buffers.every(function(buffer) {
                    return buffer.length;
                })) {
                    var result = buffers.map(function(buffer) {
                        return buffer.shift();
                    });
                    subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
                    if (buffers.some(function(buffer, i) {
                        return !buffer.length && completed[i];
                    })) {
                        subscriber.complete();
                    }
                }
            }, function() {
                completed[sourceIndex] = true;
                !buffers[sourceIndex].length && subscriber.complete();
            }));
        };
        for(var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++){
            _loop_1(sourceIndex);
        }
        return function() {
            buffers = completed = null;
        };
    }) : empty_1.EMPTY;
}
exports.zip = zip; //# sourceMappingURL=zip.js.map


/***/ }),

/***/ 15691:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;
var Subscriber_1 = __webpack_require__(10592);
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
exports.createOperatorSubscriber = createOperatorSubscriber;
var OperatorSubscriber = function(_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
            try {
                onNext(value);
            } catch (err) {
                destination.error(err);
            }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
            try {
                onError(err);
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
            try {
                onComplete();
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function() {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber_1.Subscriber);
exports.OperatorSubscriber = OperatorSubscriber; //# sourceMappingURL=OperatorSubscriber.js.map


/***/ }),

/***/ 62251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.audit = void 0;
var lift_1 = __webpack_require__(24629);
var innerFrom_1 = __webpack_require__(94681);
var OperatorSubscriber_1 = __webpack_require__(15691);
function audit(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function() {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function() {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) {
                innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
            }
        }, function() {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
exports.audit = audit; //# sourceMappingURL=audit.js.map


/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.auditTime = void 0;
var async_1 = __webpack_require__(16476);
var audit_1 = __webpack_require__(62251);
var timer_1 = __webpack_require__(86855);
function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    return audit_1.audit(function() {
        return timer_1.timer(duration, scheduler);
    });
}
exports.auditTime = auditTime; //# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ 23994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.buffer = void 0;
var lift_1 = __webpack_require__(24629);
var noop_1 = __webpack_require__(80589);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
function buffer(closingNotifier) {
    return lift_1.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return currentBuffer.push(value);
        }, function() {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            var b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, noop_1.noop));
        return function() {
            currentBuffer = null;
        };
    });
}
exports.buffer = buffer; //# sourceMappingURL=buffer.js.map


/***/ }),

/***/ 57342:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bufferCount = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var arrRemove_1 = __webpack_require__(72898);
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a, e_2, _b;
            var toEmit = null;
            if (count++ % startBufferEvery === 0) {
                buffers.push([]);
            }
            try {
                for(var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                    if (bufferSize <= buffer.length) {
                        toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                        toEmit.push(buffer);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (toEmit) {
                try {
                    for(var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()){
                        var buffer = toEmit_1_1.value;
                        arrRemove_1.arrRemove(buffers, buffer);
                        subscriber.next(buffer);
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
        }, function() {
            var e_3, _a;
            try {
                for(var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()){
                    var buffer = buffers_2_1.value;
                    subscriber.next(buffer);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffers = null;
        }));
    });
}
exports.bufferCount = bufferCount; //# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ 24528:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bufferTime = void 0;
var Subscription_1 = __webpack_require__(31484);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var arrRemove_1 = __webpack_require__(72898);
var async_1 = __webpack_require__(16476);
var args_1 = __webpack_require__(907);
var executeSchedule_1 = __webpack_require__(87588);
function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++){
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function(record) {
            var buffer = record.buffer, subs = record.subs;
            subs.unsubscribe();
            arrRemove_1.arrRemove(bufferRecords, record);
            subscriber.next(buffer);
            restartOnEmit && startBuffer();
        };
        var startBuffer = function() {
            if (bufferRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var buffer = [];
                var record_1 = {
                    buffer: buffer,
                    subs: subs
                };
                bufferRecords.push(record_1);
                executeSchedule_1.executeSchedule(subs, scheduler, function() {
                    return emit(record_1);
                }, bufferTimeSpan);
            }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
            executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        } else {
            restartOnEmit = true;
        }
        startBuffer();
        var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            var recordsCopy = bufferRecords.slice();
            try {
                for(var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()){
                    var record = recordsCopy_1_1.value;
                    var buffer = record.buffer;
                    buffer.push(value);
                    maxBufferSize <= buffer.length && emit(record);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1.return)) _a.call(recordsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length){
                subscriber.next(bufferRecords.shift().buffer);
            }
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, undefined, function() {
            return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
    });
}
exports.bufferTime = bufferTime; //# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ 26730:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bufferToggle = void 0;
var Subscription_1 = __webpack_require__(31484);
var lift_1 = __webpack_require__(24629);
var innerFrom_1 = __webpack_require__(94681);
var OperatorSubscriber_1 = __webpack_require__(15691);
var noop_1 = __webpack_require__(80589);
var arrRemove_1 = __webpack_require__(72898);
function bufferToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
            var buffer = [];
            buffers.push(buffer);
            var closingSubscription = new Subscription_1.Subscription();
            var emitBuffer = function() {
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(buffers.length > 0){
                subscriber.next(buffers.shift());
            }
            subscriber.complete();
        }));
    });
}
exports.bufferToggle = bufferToggle; //# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ 57104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bufferWhen = void 0;
var lift_1 = __webpack_require__(24629);
var noop_1 = __webpack_require__(80589);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
function bufferWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function() {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            var b = buffer;
            buffer = [];
            b && subscriber.next(b);
            innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
        };
        openBuffer();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
            buffer && subscriber.next(buffer);
            subscriber.complete();
        }, undefined, function() {
            return buffer = closingSubscriber = null;
        }));
    });
}
exports.bufferWhen = bufferWhen; //# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ 23230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.catchError = void 0;
var innerFrom_1 = __webpack_require__(94681);
var OperatorSubscriber_1 = __webpack_require__(15691);
var lift_1 = __webpack_require__(24629);
function catchError(selector) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function(err) {
            handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            } else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
exports.catchError = catchError; //# sourceMappingURL=catchError.js.map


/***/ }),

/***/ 69134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineAll = void 0;
var combineLatestAll_1 = __webpack_require__(12650);
exports.combineAll = combineLatestAll_1.combineLatestAll; //# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ 10336:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineLatest = void 0;
var combineLatest_1 = __webpack_require__(35855);
var lift_1 = __webpack_require__(24629);
var argsOrArgArray_1 = __webpack_require__(60679);
var mapOneOrManyArgs_1 = __webpack_require__(24076);
var pipe_1 = __webpack_require__(78976);
var args_1 = __webpack_require__(907);
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
        combineLatest_1.combineLatestInit(__spreadArray([
            source
        ], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
    });
}
exports.combineLatest = combineLatest; //# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ 12650:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineLatestAll = void 0;
var combineLatest_1 = __webpack_require__(35855);
var joinAllInternals_1 = __webpack_require__(61360);
function combineLatestAll(project) {
    return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
}
exports.combineLatestAll = combineLatestAll; //# sourceMappingURL=combineLatestAll.js.map


/***/ }),

/***/ 63796:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineLatestWith = void 0;
var combineLatest_1 = __webpack_require__(10336);
function combineLatestWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.combineLatestWith = combineLatestWith; //# sourceMappingURL=combineLatestWith.js.map


/***/ }),

/***/ 91979:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concat = void 0;
var lift_1 = __webpack_require__(24629);
var concatAll_1 = __webpack_require__(96348);
var args_1 = __webpack_require__(907);
var from_1 = __webpack_require__(37719);
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return lift_1.operate(function(source, subscriber) {
        concatAll_1.concatAll()(from_1.from(__spreadArray([
            source
        ], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.concat = concat; //# sourceMappingURL=concat.js.map


/***/ }),

/***/ 96348:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatAll = void 0;
var mergeAll_1 = __webpack_require__(98608);
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll; //# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ 94170:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatMap = void 0;
var mergeMap_1 = __webpack_require__(49586);
var isFunction_1 = __webpack_require__(81093);
function concatMap(project, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
}
exports.concatMap = concatMap; //# sourceMappingURL=concatMap.js.map


/***/ }),

/***/ 10672:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatMapTo = void 0;
var concatMap_1 = __webpack_require__(94170);
var isFunction_1 = __webpack_require__(81093);
function concatMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
        return innerObservable;
    }, resultSelector) : concatMap_1.concatMap(function() {
        return innerObservable;
    });
}
exports.concatMapTo = concatMapTo; //# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ 84579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatWith = void 0;
var concat_1 = __webpack_require__(91979);
function concatWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.concatWith = concatWith; //# sourceMappingURL=concatWith.js.map


/***/ }),

/***/ 98414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.connect = void 0;
var Subject_1 = __webpack_require__(75465);
var innerFrom_1 = __webpack_require__(94681);
var lift_1 = __webpack_require__(24629);
var fromSubscribable_1 = __webpack_require__(58723);
var DEFAULT_CONFIG = {
    connector: function() {
        return new Subject_1.Subject();
    }
};
function connect(selector, config) {
    if (config === void 0) {
        config = DEFAULT_CONFIG;
    }
    var connector = config.connector;
    return lift_1.operate(function(source, subscriber) {
        var subject = connector();
        innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}
exports.connect = connect; //# sourceMappingURL=connect.js.map


/***/ }),

/***/ 60727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.count = void 0;
var reduce_1 = __webpack_require__(23793);
function count(predicate) {
    return reduce_1.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
    }, 0);
}
exports.count = count; //# sourceMappingURL=count.js.map


/***/ }),

/***/ 79709:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.debounce = void 0;
var lift_1 = __webpack_require__(24629);
var noop_1 = __webpack_require__(80589);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
function debounce(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function() {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
            innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = durationSubscriber = null;
        }));
    });
}
exports.debounce = debounce; //# sourceMappingURL=debounce.js.map


/***/ }),

/***/ 22069:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.debounceTime = void 0;
var async_1 = __webpack_require__(16476);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    return lift_1.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function() {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = activeTask = null;
        }));
    });
}
exports.debounceTime = debounceTime; //# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ 18411:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defaultIfEmpty = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function defaultIfEmpty(defaultValue) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            if (!hasValue) {
                subscriber.next(defaultValue);
            }
            subscriber.complete();
        }));
    });
}
exports.defaultIfEmpty = defaultIfEmpty; //# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),

/***/ 42835:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.delay = void 0;
var async_1 = __webpack_require__(16476);
var delayWhen_1 = __webpack_require__(44270);
var timer_1 = __webpack_require__(86855);
function delay(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    var duration = timer_1.timer(due, scheduler);
    return delayWhen_1.delayWhen(function() {
        return duration;
    });
}
exports.delay = delay; //# sourceMappingURL=delay.js.map


/***/ }),

/***/ 44270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.delayWhen = void 0;
var concat_1 = __webpack_require__(36802);
var take_1 = __webpack_require__(56357);
var ignoreElements_1 = __webpack_require__(92074);
var mapTo_1 = __webpack_require__(69024);
var mergeMap_1 = __webpack_require__(49586);
var innerFrom_1 = __webpack_require__(94681);
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function(source) {
            return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
    }
    return mergeMap_1.mergeMap(function(value, index) {
        return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value));
    });
}
exports.delayWhen = delayWhen; //# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ 69153:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.dematerialize = void 0;
var Notification_1 = __webpack_require__(45545);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function dematerialize() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(notification) {
            return Notification_1.observeNotification(notification, subscriber);
        }));
    });
}
exports.dematerialize = dematerialize; //# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ 51499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.distinct = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var noop_1 = __webpack_require__(80589);
var innerFrom_1 = __webpack_require__(94681);
function distinct(keySelector, flushes) {
    return lift_1.operate(function(source, subscriber) {
        var distinctKeys = new Set();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            return distinctKeys.clear();
        }, noop_1.noop));
    });
}
exports.distinct = distinct; //# sourceMappingURL=distinct.js.map


/***/ }),

/***/ 33808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.distinctUntilChanged = void 0;
var identity_1 = __webpack_require__(78557);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) {
        keySelector = identity_1.identity;
    }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return lift_1.operate(function(source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
exports.distinctUntilChanged = distinctUntilChanged;
function defaultCompare(a, b) {
    return a === b;
} //# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ 90780:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.distinctUntilKeyChanged = void 0;
var distinctUntilChanged_1 = __webpack_require__(33808);
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
    });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged; //# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ 91359:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.elementAt = void 0;
var ArgumentOutOfRangeError_1 = __webpack_require__(40624);
var filter_1 = __webpack_require__(5419);
var throwIfEmpty_1 = __webpack_require__(41559);
var defaultIfEmpty_1 = __webpack_require__(18411);
var take_1 = __webpack_require__(56357);
function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(filter_1.filter(function(v, i) {
            return i === index;
        }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }));
    };
}
exports.elementAt = elementAt; //# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ 68764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.endWith = void 0;
var concat_1 = __webpack_require__(36802);
var of_1 = __webpack_require__(71774);
function endWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++){
        values[_i] = arguments[_i];
    }
    return function(source) {
        return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
    };
}
exports.endWith = endWith; //# sourceMappingURL=endWith.js.map


/***/ }),

/***/ 92568:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.every = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function every(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.every = every; //# sourceMappingURL=every.js.map


/***/ }),

/***/ 61239:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.exhaust = void 0;
var exhaustAll_1 = __webpack_require__(68271);
exports.exhaust = exhaustAll_1.exhaustAll; //# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ 68271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.exhaustAll = void 0;
var exhaustMap_1 = __webpack_require__(94685);
var identity_1 = __webpack_require__(78557);
function exhaustAll() {
    return exhaustMap_1.exhaustMap(identity_1.identity);
}
exports.exhaustAll = exhaustAll; //# sourceMappingURL=exhaustAll.js.map


/***/ }),

/***/ 94685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.exhaustMap = void 0;
var map_1 = __webpack_require__(14309);
var innerFrom_1 = __webpack_require__(94681);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return function(source) {
            return source.pipe(exhaustMap(function(a, i) {
                return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
                    return resultSelector(a, b, i, ii);
                }));
            }));
        };
    }
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(outerValue) {
            if (!innerSub) {
                innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
            }
        }, function() {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
exports.exhaustMap = exhaustMap; //# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ 30235:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.expand = void 0;
var lift_1 = __webpack_require__(24629);
var mergeInternals_1 = __webpack_require__(28652);
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
}
exports.expand = expand; //# sourceMappingURL=expand.js.map


/***/ }),

/***/ 5419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.filter = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function filter(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
    });
}
exports.filter = filter; //# sourceMappingURL=filter.js.map


/***/ }),

/***/ 36788:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.finalize = void 0;
var lift_1 = __webpack_require__(24629);
function finalize(callback) {
    return lift_1.operate(function(source, subscriber) {
        try {
            source.subscribe(subscriber);
        } finally{
            subscriber.add(callback);
        }
    });
}
exports.finalize = finalize; //# sourceMappingURL=finalize.js.map


/***/ }),

/***/ 26914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createFind = exports.find = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function find(predicate, thisArg) {
    return lift_1.operate(createFind(predicate, thisArg, "value"));
}
exports.find = find;
function createFind(predicate, thisArg, emit) {
    var findIndex = emit === "index";
    return function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex ? i : value);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(findIndex ? -1 : undefined);
            subscriber.complete();
        }));
    };
}
exports.createFind = createFind; //# sourceMappingURL=find.js.map


/***/ }),

/***/ 24592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.findIndex = void 0;
var lift_1 = __webpack_require__(24629);
var find_1 = __webpack_require__(26914);
function findIndex(predicate, thisArg) {
    return lift_1.operate(find_1.createFind(predicate, thisArg, "index"));
}
exports.findIndex = findIndex; //# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ 38752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.first = void 0;
var EmptyError_1 = __webpack_require__(21253);
var filter_1 = __webpack_require__(5419);
var take_1 = __webpack_require__(56357);
var defaultIfEmpty_1 = __webpack_require__(18411);
var throwIfEmpty_1 = __webpack_require__(41559);
var identity_1 = __webpack_require__(78557);
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
            return predicate(v, i, source);
        }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new EmptyError_1.EmptyError();
        }));
    };
}
exports.first = first; //# sourceMappingURL=first.js.map


/***/ }),

/***/ 76160:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.flatMap = void 0;
var mergeMap_1 = __webpack_require__(49586);
exports.flatMap = mergeMap_1.mergeMap; //# sourceMappingURL=flatMap.js.map


/***/ }),

/***/ 43684:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.groupBy = void 0;
var Observable_1 = __webpack_require__(74064);
var innerFrom_1 = __webpack_require__(94681);
var Subject_1 = __webpack_require__(75465);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function groupBy(keySelector, elementOrOptions, duration, connector) {
    return lift_1.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === "function") {
            element = elementOrOptions;
        } else {
            duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        }
        var groups = new Map();
        var notify = function(cb) {
            groups.forEach(cb);
            cb(subscriber);
        };
        var handleError = function(err) {
            return notify(function(consumer) {
                return consumer.error(err);
            });
        };
        var activeGroups = 0;
        var teardownAttempted = false;
        var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            try {
                var key_1 = keySelector(value);
                var group_1 = groups.get(key_1);
                if (!group_1) {
                    groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
                    var grouped = createGroupedObservable(key_1, group_1);
                    subscriber.next(grouped);
                    if (duration) {
                        var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function() {
                            group_1.complete();
                            durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                        }, undefined, undefined, function() {
                            return groups.delete(key_1);
                        });
                        groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
                    }
                }
                group_1.next(element ? element(value) : value);
            } catch (err) {
                handleError(err);
            }
        }, function() {
            return notify(function(consumer) {
                return consumer.complete();
            });
        }, handleError, function() {
            return groups.clear();
        }, function() {
            teardownAttempted = true;
            return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            var result = new Observable_1.Observable(function(groupSubscriber) {
                activeGroups++;
                var innerSub = groupSubject.subscribe(groupSubscriber);
                return function() {
                    innerSub.unsubscribe();
                    --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
exports.groupBy = groupBy; //# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ 92074:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ignoreElements = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var noop_1 = __webpack_require__(80589);
function ignoreElements() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
    });
}
exports.ignoreElements = ignoreElements; //# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ 35536:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isEmpty = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function isEmpty() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            subscriber.next(false);
            subscriber.complete();
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.isEmpty = isEmpty; //# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ 61360:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.joinAllInternals = void 0;
var identity_1 = __webpack_require__(78557);
var mapOneOrManyArgs_1 = __webpack_require__(24076);
var pipe_1 = __webpack_require__(78976);
var mergeMap_1 = __webpack_require__(49586);
var toArray_1 = __webpack_require__(61621);
function joinAllInternals(joinFn, project) {
    return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
        return joinFn(sources);
    }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
}
exports.joinAllInternals = joinAllInternals; //# sourceMappingURL=joinAllInternals.js.map


/***/ }),

/***/ 9293:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.last = void 0;
var EmptyError_1 = __webpack_require__(21253);
var filter_1 = __webpack_require__(5419);
var takeLast_1 = __webpack_require__(16233);
var throwIfEmpty_1 = __webpack_require__(41559);
var defaultIfEmpty_1 = __webpack_require__(18411);
var identity_1 = __webpack_require__(78557);
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
            return predicate(v, i, source);
        }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new EmptyError_1.EmptyError();
        }));
    };
}
exports.last = last; //# sourceMappingURL=last.js.map


/***/ }),

/***/ 14309:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.map = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function map(project, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
exports.map = map; //# sourceMappingURL=map.js.map


/***/ }),

/***/ 69024:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mapTo = void 0;
var map_1 = __webpack_require__(14309);
function mapTo(value) {
    return map_1.map(function() {
        return value;
    });
}
exports.mapTo = mapTo; //# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ 80210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.materialize = void 0;
var Notification_1 = __webpack_require__(45545);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function materialize() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            subscriber.next(Notification_1.Notification.createNext(value));
        }, function() {
            subscriber.next(Notification_1.Notification.createComplete());
            subscriber.complete();
        }, function(err) {
            subscriber.next(Notification_1.Notification.createError(err));
            subscriber.complete();
        }));
    });
}
exports.materialize = materialize; //# sourceMappingURL=materialize.js.map


/***/ }),

/***/ 1714:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.max = void 0;
var reduce_1 = __webpack_require__(23793);
var isFunction_1 = __webpack_require__(81093);
function max(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
        return x > y ? x : y;
    });
}
exports.max = max; //# sourceMappingURL=max.js.map


/***/ }),

/***/ 70766:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.merge = void 0;
var lift_1 = __webpack_require__(24629);
var argsOrArgArray_1 = __webpack_require__(60679);
var mergeAll_1 = __webpack_require__(98608);
var args_1 = __webpack_require__(907);
var from_1 = __webpack_require__(37719);
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    args = argsOrArgArray_1.argsOrArgArray(args);
    return lift_1.operate(function(source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([
            source
        ], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.merge = merge; //# sourceMappingURL=merge.js.map


/***/ }),

/***/ 98608:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeAll = void 0;
var mergeMap_1 = __webpack_require__(49586);
var identity_1 = __webpack_require__(78557);
function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll; //# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ 28652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeInternals = void 0;
var innerFrom_1 = __webpack_require__(94681);
var executeSchedule_1 = __webpack_require__(87588);
var OperatorSubscriber_1 = __webpack_require__(15691);
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            } else {
                subscriber.next(innerValue);
            }
        }, function() {
            innerComplete = true;
        }, undefined, function() {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function() {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function() {
                                return doInnerSub(bufferedValue);
                            });
                        } else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while(buffer.length && active < concurrent){
                        _loop_1();
                    }
                    checkComplete();
                } catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
    }));
    return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
exports.mergeInternals = mergeInternals; //# sourceMappingURL=mergeInternals.js.map


/***/ }),

/***/ 49586:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeMap = void 0;
var map_1 = __webpack_require__(14309);
var innerFrom_1 = __webpack_require__(94681);
var lift_1 = __webpack_require__(24629);
var mergeInternals_1 = __webpack_require__(28652);
var isFunction_1 = __webpack_require__(81093);
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap(function(a, i) {
            return map_1.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            })(innerFrom_1.innerFrom(project(a, i)));
        }, concurrent);
    } else if (typeof resultSelector === "number") {
        concurrent = resultSelector;
    }
    return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
    });
}
exports.mergeMap = mergeMap; //# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ 55013:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeMapTo = void 0;
var mergeMap_1 = __webpack_require__(49586);
var isFunction_1 = __webpack_require__(81093);
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap_1.mergeMap(function() {
            return innerObservable;
        }, resultSelector, concurrent);
    }
    if (typeof resultSelector === "number") {
        concurrent = resultSelector;
    }
    return mergeMap_1.mergeMap(function() {
        return innerObservable;
    }, concurrent);
}
exports.mergeMapTo = mergeMapTo; //# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ 85090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeScan = void 0;
var lift_1 = __webpack_require__(24629);
var mergeInternals_1 = __webpack_require__(28652);
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    return lift_1.operate(function(source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
            return accumulator(state, value, index);
        }, concurrent, function(value) {
            state = value;
        }, false, undefined, function() {
            return state = null;
        });
    });
}
exports.mergeScan = mergeScan; //# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ 55196:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeWith = void 0;
var merge_1 = __webpack_require__(70766);
function mergeWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.mergeWith = mergeWith; //# sourceMappingURL=mergeWith.js.map


/***/ }),

/***/ 42017:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.min = void 0;
var reduce_1 = __webpack_require__(23793);
var isFunction_1 = __webpack_require__(81093);
function min(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
        return x < y ? x : y;
    });
}
exports.min = min; //# sourceMappingURL=min.js.map


/***/ }),

/***/ 53807:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.multicast = void 0;
var ConnectableObservable_1 = __webpack_require__(73034);
var isFunction_1 = __webpack_require__(81093);
var connect_1 = __webpack_require__(98414);
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
    };
    if (isFunction_1.isFunction(selector)) {
        return connect_1.connect(selector, {
            connector: subjectFactory
        });
    }
    return function(source) {
        return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
    };
}
exports.multicast = multicast; //# sourceMappingURL=multicast.js.map


/***/ }),

/***/ 39755:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.observeOn = void 0;
var executeSchedule_1 = __webpack_require__(87588);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                return subscriber.next(value);
            }, delay);
        }, function() {
            return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                return subscriber.complete();
            }, delay);
        }, function(err) {
            return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                return subscriber.error(err);
            }, delay);
        }));
    });
}
exports.observeOn = observeOn; //# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ 69048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.onErrorResumeNext = exports.onErrorResumeNextWith = void 0;
var argsOrArgArray_1 = __webpack_require__(60679);
var onErrorResumeNext_1 = __webpack_require__(31477);
function onErrorResumeNextWith() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return function(source) {
        return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([
            source
        ], __read(nextSources)));
    };
}
exports.onErrorResumeNextWith = onErrorResumeNextWith;
exports.onErrorResumeNext = onErrorResumeNextWith; //# sourceMappingURL=onErrorResumeNextWith.js.map


/***/ }),

/***/ 16042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pairwise = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function pairwise() {
    return lift_1.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([
                p,
                value
            ]);
            hasPrev = true;
        }));
    });
}
exports.pairwise = pairwise; //# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ 1933:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.partition = void 0;
var not_1 = __webpack_require__(22980);
var filter_1 = __webpack_require__(5419);
function partition(predicate, thisArg) {
    return function(source) {
        return [
            filter_1.filter(predicate, thisArg)(source),
            filter_1.filter(not_1.not(predicate, thisArg))(source)
        ];
    };
}
exports.partition = partition; //# sourceMappingURL=partition.js.map


/***/ }),

/***/ 77420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pluck = void 0;
var map_1 = __webpack_require__(14309);
function pluck() {
    var properties = [];
    for(var _i = 0; _i < arguments.length; _i++){
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error("list of properties cannot be empty.");
    }
    return map_1.map(function(x) {
        var currentProp = x;
        for(var i = 0; i < length; i++){
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== "undefined") {
                currentProp = p;
            } else {
                return undefined;
            }
        }
        return currentProp;
    });
}
exports.pluck = pluck; //# sourceMappingURL=pluck.js.map


/***/ }),

/***/ 92601:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.publish = void 0;
var Subject_1 = __webpack_require__(75465);
var multicast_1 = __webpack_require__(53807);
var connect_1 = __webpack_require__(98414);
function publish(selector) {
    return selector ? function(source) {
        return connect_1.connect(selector)(source);
    } : function(source) {
        return multicast_1.multicast(new Subject_1.Subject())(source);
    };
}
exports.publish = publish; //# sourceMappingURL=publish.js.map


/***/ }),

/***/ 86837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.publishBehavior = void 0;
var BehaviorSubject_1 = __webpack_require__(16216);
var ConnectableObservable_1 = __webpack_require__(73034);
function publishBehavior(initialValue) {
    return function(source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
            return subject;
        });
    };
}
exports.publishBehavior = publishBehavior; //# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ 44129:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.publishLast = void 0;
var AsyncSubject_1 = __webpack_require__(74451);
var ConnectableObservable_1 = __webpack_require__(73034);
function publishLast() {
    return function(source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
            return subject;
        });
    };
}
exports.publishLast = publishLast; //# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ 76607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.publishReplay = void 0;
var ReplaySubject_1 = __webpack_require__(58843);
var multicast_1 = __webpack_require__(53807);
var isFunction_1 = __webpack_require__(81093);
function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
    }
    var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function(source) {
        return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
    };
}
exports.publishReplay = publishReplay; //# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ 21338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.race = void 0;
var argsOrArgArray_1 = __webpack_require__(60679);
var raceWith_1 = __webpack_require__(61967);
function race() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return raceWith_1.raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
}
exports.race = race; //# sourceMappingURL=race.js.map


/***/ }),

/***/ 61967:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.raceWith = void 0;
var race_1 = __webpack_require__(76877);
var lift_1 = __webpack_require__(24629);
var identity_1 = __webpack_require__(78557);
function raceWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        race_1.raceInit(__spreadArray([
            source
        ], __read(otherSources)))(subscriber);
    });
}
exports.raceWith = raceWith; //# sourceMappingURL=raceWith.js.map


/***/ }),

/***/ 23793:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.reduce = void 0;
var scanInternals_1 = __webpack_require__(77305);
var lift_1 = __webpack_require__(24629);
function reduce(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}
exports.reduce = reduce; //# sourceMappingURL=reduce.js.map


/***/ }),

/***/ 12775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.refCount = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function refCount() {
    return lift_1.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, undefined, function() {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) {
                sharedConnection.unsubscribe();
            }
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
            connection = source.connect();
        }
    });
}
exports.refCount = refCount; //# sourceMappingURL=refCount.js.map


/***/ }),

/***/ 88846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.repeat = void 0;
var empty_1 = __webpack_require__(63136);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
var timer_1 = __webpack_require__(86855);
function repeat(countOrConfig) {
    var _a;
    var count = Infinity;
    var delay;
    if (countOrConfig != null) {
        if (typeof countOrConfig === "object") {
            _a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay;
        } else {
            count = countOrConfig;
        }
    }
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var sourceSub;
        var resubscribe = function() {
            sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
            sourceSub = null;
            if (delay != null) {
                var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
                var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                    notifierSubscriber_1.unsubscribe();
                    subscribeToSource();
                });
                notifier.subscribe(notifierSubscriber_1);
            } else {
                subscribeToSource();
            }
        };
        var subscribeToSource = function() {
            var syncUnsub = false;
            sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
                if (++soFar < count) {
                    if (sourceSub) {
                        resubscribe();
                    } else {
                        syncUnsub = true;
                    }
                } else {
                    subscriber.complete();
                }
            }));
            if (syncUnsub) {
                resubscribe();
            }
        };
        subscribeToSource();
    });
}
exports.repeat = repeat; //# sourceMappingURL=repeat.js.map


/***/ }),

/***/ 87471:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.repeatWhen = void 0;
var innerFrom_1 = __webpack_require__(94681);
var Subject_1 = __webpack_require__(75465);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function repeatWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function() {
            return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        };
        var getCompletionSubject = function() {
            if (!completions$) {
                completions$ = new Subject_1.Subject();
                innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                    if (innerSub) {
                        subscribeForRepeatWhen();
                    } else {
                        syncResub = true;
                    }
                }, function() {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        var subscribeForRepeatWhen = function() {
            isMainComplete = false;
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}
exports.repeatWhen = repeatWhen; //# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ 63434:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.retry = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var identity_1 = __webpack_require__(78557);
var timer_1 = __webpack_require__(86855);
var innerFrom_1 = __webpack_require__(94681);
function retry(configOrCount) {
    if (configOrCount === void 0) {
        configOrCount = Infinity;
    }
    var config;
    if (configOrCount && typeof configOrCount === "object") {
        config = configOrCount;
    } else {
        config = {
            count: configOrCount
        };
    }
    var _a = config.count, count = _a === void 0 ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
    return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = function() {
            var syncUnsub = false;
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                if (resetOnSuccess) {
                    soFar = 0;
                }
                subscriber.next(value);
            }, undefined, function(err) {
                if (soFar++ < count) {
                    var resub_1 = function() {
                        if (innerSub) {
                            innerSub.unsubscribe();
                            innerSub = null;
                            subscribeForRetry();
                        } else {
                            syncUnsub = true;
                        }
                    };
                    if (delay != null) {
                        var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
                        var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                            notifierSubscriber_1.unsubscribe();
                            resub_1();
                        }, function() {
                            subscriber.complete();
                        });
                        notifier.subscribe(notifierSubscriber_1);
                    } else {
                        resub_1();
                    }
                } else {
                    subscriber.error(err);
                }
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRetry();
            }
        };
        subscribeForRetry();
    });
}
exports.retry = retry; //# sourceMappingURL=retry.js.map


/***/ }),

/***/ 30905:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.retryWhen = void 0;
var innerFrom_1 = __webpack_require__(94681);
var Subject_1 = __webpack_require__(75465);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function retryWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function() {
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function(err) {
                if (!errors$) {
                    errors$ = new Subject_1.Subject();
                    innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                        return innerSub ? subscribeForRetryWhen() : syncResub = true;
                    }));
                }
                if (errors$) {
                    errors$.next(err);
                }
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}
exports.retryWhen = retryWhen; //# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ 65340:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.sample = void 0;
var innerFrom_1 = __webpack_require__(94681);
var lift_1 = __webpack_require__(24629);
var noop_1 = __webpack_require__(80589);
var OperatorSubscriber_1 = __webpack_require__(15691);
function sample(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
        }));
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        }, noop_1.noop));
    });
}
exports.sample = sample; //# sourceMappingURL=sample.js.map


/***/ }),

/***/ 78379:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.sampleTime = void 0;
var async_1 = __webpack_require__(16476);
var sample_1 = __webpack_require__(65340);
var interval_1 = __webpack_require__(49077);
function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    return sample_1.sample(interval_1.interval(period, scheduler));
}
exports.sampleTime = sampleTime; //# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ 74867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scan = void 0;
var lift_1 = __webpack_require__(24629);
var scanInternals_1 = __webpack_require__(77305);
function scan(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
}
exports.scan = scan; //# sourceMappingURL=scan.js.map


/***/ }),

/***/ 77305:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scanInternals = void 0;
var OperatorSubscriber_1 = __webpack_require__(15691);
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var i = index++;
            state = hasState ? accumulator(state, value, i) : (hasState = true, value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
            hasState && subscriber.next(state);
            subscriber.complete();
        }));
    };
}
exports.scanInternals = scanInternals; //# sourceMappingURL=scanInternals.js.map


/***/ }),

/***/ 12666:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.sequenceEqual = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
function sequenceEqual(compareTo, comparator) {
    if (comparator === void 0) {
        comparator = function(a, b) {
            return a === b;
        };
    }
    return lift_1.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function(isEqual) {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        var createSubscriber = function(selfState, otherState) {
            var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(a) {
                var buffer = otherState.buffer, complete = otherState.complete;
                if (buffer.length === 0) {
                    complete ? emit(false) : selfState.buffer.push(a);
                } else {
                    !comparator(a, buffer.shift()) && emit(false);
                }
            }, function() {
                selfState.complete = true;
                var complete = otherState.complete, buffer = otherState.buffer;
                complete && emit(buffer.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
    });
}
exports.sequenceEqual = sequenceEqual;
function createState() {
    return {
        buffer: [],
        complete: false
    };
} //# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ 12766:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.share = void 0;
var innerFrom_1 = __webpack_require__(94681);
var Subject_1 = __webpack_require__(75465);
var Subscriber_1 = __webpack_require__(10592);
var lift_1 = __webpack_require__(24629);
function share(options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.connector, connector = _a === void 0 ? function() {
        return new Subject_1.Subject();
    } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function(wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = undefined;
        };
        var reset = function() {
            cancelReset();
            connection = subject = undefined;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
            var conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return lift_1.operate(function(source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
            subscriber.add(function() {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection && refCount > 0) {
                connection = new Subscriber_1.SafeSubscriber({
                    next: function(value) {
                        return dest.next(value);
                    },
                    error: function(err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function() {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    }
                });
                innerFrom_1.innerFrom(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
exports.share = share;
function handleReset(reset, on) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++){
        args[_i - 2] = arguments[_i];
    }
    if (on === true) {
        reset();
        return;
    }
    if (on === false) {
        return;
    }
    var onSubscriber = new Subscriber_1.SafeSubscriber({
        next: function() {
            onSubscriber.unsubscribe();
            reset();
        }
    });
    return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
} //# sourceMappingURL=share.js.map


/***/ }),

/***/ 10931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.shareReplay = void 0;
var ReplaySubject_1 = __webpack_require__(58843);
var share_1 = __webpack_require__(12766);
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b, _c;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === "object") {
        _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
    } else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
    }
    return share_1.share({
        connector: function() {
            return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
    });
}
exports.shareReplay = shareReplay; //# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ 59237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.single = void 0;
var EmptyError_1 = __webpack_require__(21253);
var SequenceError_1 = __webpack_require__(97189);
var NotFoundError_1 = __webpack_require__(38892);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function single(predicate) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new SequenceError_1.SequenceError("Too many matching values"));
                hasValue = true;
                singleValue = value;
            }
        }, function() {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            } else {
                subscriber.error(seenValue ? new NotFoundError_1.NotFoundError("No matching values") : new EmptyError_1.EmptyError());
            }
        }));
    });
}
exports.single = single; //# sourceMappingURL=single.js.map


/***/ }),

/***/ 53082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.skip = void 0;
var filter_1 = __webpack_require__(5419);
function skip(count) {
    return filter_1.filter(function(_, index) {
        return count <= index;
    });
}
exports.skip = skip; //# sourceMappingURL=skip.js.map


/***/ }),

/***/ 84447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.skipLast = void 0;
var identity_1 = __webpack_require__(78557);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function skipLast(skipCount) {
    return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var valueIndex = seen++;
            if (valueIndex < skipCount) {
                ring[valueIndex] = value;
            } else {
                var index = valueIndex % skipCount;
                var oldValue = ring[index];
                ring[index] = value;
                subscriber.next(oldValue);
            }
        }));
        return function() {
            ring = null;
        };
    });
}
exports.skipLast = skipLast; //# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ 52696:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.skipUntil = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
var noop_1 = __webpack_require__(80589);
function skipUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
            taking = true;
        }, noop_1.noop);
        innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return taking && subscriber.next(value);
        }));
    });
}
exports.skipUntil = skipUntil; //# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ 2177:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.skipWhile = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function skipWhile(predicate) {
    return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
    });
}
exports.skipWhile = skipWhile; //# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ 21732:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.startWith = void 0;
var concat_1 = __webpack_require__(36802);
var args_1 = __webpack_require__(907);
var lift_1 = __webpack_require__(24629);
function startWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++){
        values[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(values);
    return lift_1.operate(function(source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
    });
}
exports.startWith = startWith; //# sourceMappingURL=startWith.js.map


/***/ }),

/***/ 67082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.subscribeOn = void 0;
var lift_1 = __webpack_require__(24629);
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return lift_1.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
}
exports.subscribeOn = subscribeOn; //# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ 14658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.switchAll = void 0;
var switchMap_1 = __webpack_require__(69381);
var identity_1 = __webpack_require__(78557);
function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
}
exports.switchAll = switchAll; //# sourceMappingURL=switchAll.js.map


/***/ }),

/***/ 69381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.switchMap = void 0;
var innerFrom_1 = __webpack_require__(94681);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function switchMap(project, resultSelector) {
    return lift_1.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
            return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
                return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
            }, function() {
                innerSubscriber = null;
                checkComplete();
            }));
        }, function() {
            isComplete = true;
            checkComplete();
        }));
    });
}
exports.switchMap = switchMap; //# sourceMappingURL=switchMap.js.map


/***/ }),

/***/ 1299:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.switchMapTo = void 0;
var switchMap_1 = __webpack_require__(69381);
var isFunction_1 = __webpack_require__(81093);
function switchMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
        return innerObservable;
    }, resultSelector) : switchMap_1.switchMap(function() {
        return innerObservable;
    });
}
exports.switchMapTo = switchMapTo; //# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ 85705:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.switchScan = void 0;
var switchMap_1 = __webpack_require__(69381);
var lift_1 = __webpack_require__(24629);
function switchScan(accumulator, seed) {
    return lift_1.operate(function(source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function(value, index) {
            return accumulator(state, value, index);
        }, function(_, innerValue) {
            return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
            state = null;
        };
    });
}
exports.switchScan = switchScan; //# sourceMappingURL=switchScan.js.map


/***/ }),

/***/ 56357:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.take = void 0;
var empty_1 = __webpack_require__(63136);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function take(count) {
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (++seen <= count) {
                subscriber.next(value);
                if (count <= seen) {
                    subscriber.complete();
                }
            }
        }));
    });
}
exports.take = take; //# sourceMappingURL=take.js.map


/***/ }),

/***/ 16233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.takeLast = void 0;
var empty_1 = __webpack_require__(63136);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function takeLast(count) {
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            buffer.push(value);
            count < buffer.length && buffer.shift();
        }, function() {
            var e_1, _a;
            try {
                for(var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()){
                    var value = buffer_1_1.value;
                    subscriber.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffer = null;
        }));
    });
}
exports.takeLast = takeLast; //# sourceMappingURL=takeLast.js.map


/***/ }),

/***/ 36008:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.takeUntil = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
var noop_1 = __webpack_require__(80589);
function takeUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            return subscriber.complete();
        }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
exports.takeUntil = takeUntil; //# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ 96270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.takeWhile = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) {
        inclusive = false;
    }
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}
exports.takeWhile = takeWhile; //# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ 60456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.tap = void 0;
var isFunction_1 = __webpack_require__(81093);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var identity_1 = __webpack_require__(78557);
function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? {
        next: observerOrNext,
        error: error,
        complete: complete
    } : observerOrNext;
    return tapObserver ? lift_1.operate(function(source, subscriber) {
        var _a;
        (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
        var isUnsub = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var _a;
            (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
            subscriber.next(value);
        }, function() {
            var _a;
            isUnsub = false;
            (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            subscriber.complete();
        }, function(err) {
            var _a;
            isUnsub = false;
            (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
            subscriber.error(err);
        }, function() {
            var _a, _b;
            if (isUnsub) {
                (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            }
            (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
        }));
    }) : identity_1.identity;
}
exports.tap = tap; //# sourceMappingURL=tap.js.map


/***/ }),

/***/ 62082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.throttle = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
function throttle(durationSelector, config) {
    return lift_1.operate(function(source, subscriber) {
        var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function() {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function() {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function(value) {
            return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        };
        var send = function() {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
exports.throttle = throttle; //# sourceMappingURL=throttle.js.map


/***/ }),

/***/ 57767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.throttleTime = void 0;
var async_1 = __webpack_require__(16476);
var throttle_1 = __webpack_require__(62082);
var timer_1 = __webpack_require__(86855);
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    var duration$ = timer_1.timer(duration, scheduler);
    return throttle_1.throttle(function() {
        return duration$;
    }, config);
}
exports.throttleTime = throttleTime; //# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ 41559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.throwIfEmpty = void 0;
var EmptyError_1 = __webpack_require__(21253);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
    }
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
    });
}
exports.throwIfEmpty = throwIfEmpty;
function defaultErrorFactory() {
    return new EmptyError_1.EmptyError();
} //# sourceMappingURL=throwIfEmpty.js.map


/***/ }),

/***/ 19831:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TimeInterval = exports.timeInterval = void 0;
var async_1 = __webpack_require__(16476);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    return lift_1.operate(function(source, subscriber) {
        var last = scheduler.now();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var now = scheduler.now();
            var interval = now - last;
            last = now;
            subscriber.next(new TimeInterval(value, interval));
        }));
    });
}
exports.timeInterval = timeInterval;
var TimeInterval = function() {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}();
exports.TimeInterval = TimeInterval; //# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ 85280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timeout = exports.TimeoutError = void 0;
var async_1 = __webpack_require__(16476);
var isDate_1 = __webpack_require__(78978);
var lift_1 = __webpack_require__(24629);
var innerFrom_1 = __webpack_require__(94681);
var createErrorClass_1 = __webpack_require__(28694);
var OperatorSubscriber_1 = __webpack_require__(15691);
var executeSchedule_1 = __webpack_require__(87588);
exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) {
            info = null;
        }
        _super(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = info;
    };
});
function timeout(config, schedulerArg) {
    var _a = isDate_1.isValidDate(config) ? {
        first: config
    } : typeof config === "number" ? {
        each: config
    } : config, first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
    if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
    }
    return lift_1.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function(delay) {
            timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                try {
                    originalSourceSubscription.unsubscribe();
                    innerFrom_1.innerFrom(_with({
                        meta: meta,
                        lastValue: lastValue,
                        seen: seen
                    })).subscribe(subscriber);
                } catch (err) {
                    subscriber.error(err);
                }
            }, delay);
        };
        originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            seen++;
            subscriber.next(lastValue = value);
            each > 0 && startTimer(each);
        }, undefined, undefined, function() {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
                timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            }
            lastValue = null;
        }));
        !seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
    });
}
exports.timeout = timeout;
function timeoutErrorFactory(info) {
    throw new exports.TimeoutError(info);
} //# sourceMappingURL=timeout.js.map


/***/ }),

/***/ 97472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timeoutWith = void 0;
var async_1 = __webpack_require__(16476);
var isDate_1 = __webpack_require__(78978);
var timeout_1 = __webpack_require__(85280);
function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
    if (isDate_1.isValidDate(due)) {
        first = due;
    } else if (typeof due === "number") {
        each = due;
    }
    if (withObservable) {
        _with = function() {
            return withObservable;
        };
    } else {
        throw new TypeError("No observable provided to switch to");
    }
    if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
    }
    return timeout_1.timeout({
        first: first,
        each: each,
        scheduler: scheduler,
        with: _with
    });
}
exports.timeoutWith = timeoutWith; //# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ 36258:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timestamp = void 0;
var dateTimestampProvider_1 = __webpack_require__(36089);
var map_1 = __webpack_require__(14309);
function timestamp(timestampProvider) {
    if (timestampProvider === void 0) {
        timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
    }
    return map_1.map(function(value) {
        return {
            value: value,
            timestamp: timestampProvider.now()
        };
    });
}
exports.timestamp = timestamp; //# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ 61621:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toArray = void 0;
var reduce_1 = __webpack_require__(23793);
var lift_1 = __webpack_require__(24629);
var arrReducer = function(arr, value) {
    return arr.push(value), arr;
};
function toArray() {
    return lift_1.operate(function(source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
    });
}
exports.toArray = toArray; //# sourceMappingURL=toArray.js.map


/***/ }),

/***/ 42803:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.window = void 0;
var Subject_1 = __webpack_require__(75465);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var noop_1 = __webpack_require__(80589);
var innerFrom_1 = __webpack_require__(94681);
function window(windowBoundaries) {
    return lift_1.operate(function(source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function(err) {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            windowSubject.complete();
            subscriber.next(windowSubject = new Subject_1.Subject());
        }, noop_1.noop, errorHandler));
        return function() {
            windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}
exports.window = window; //# sourceMappingURL=window.js.map


/***/ }),

/***/ 37031:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.windowCount = void 0;
var Subject_1 = __webpack_require__(75465);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return lift_1.operate(function(source, subscriber) {
        var windows = [
            new Subject_1.Subject()
        ];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()){
                    var window_1 = windows_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            var c = count - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) {
                windows.shift().complete();
            }
            if (++count % startEvery === 0) {
                var window_2 = new Subject_1.Subject();
                windows.push(window_2);
                subscriber.next(window_2.asObservable());
            }
        }, function() {
            while(windows.length > 0){
                windows.shift().complete();
            }
            subscriber.complete();
        }, function(err) {
            while(windows.length > 0){
                windows.shift().error(err);
            }
            subscriber.error(err);
        }, function() {
            starts = null;
            windows = null;
        }));
    });
}
exports.windowCount = windowCount; //# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ 27823:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.windowTime = void 0;
var Subject_1 = __webpack_require__(75465);
var async_1 = __webpack_require__(16476);
var Subscription_1 = __webpack_require__(31484);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var arrRemove_1 = __webpack_require__(72898);
var args_1 = __webpack_require__(907);
var executeSchedule_1 = __webpack_require__(87588);
function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++){
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function(record) {
            var window = record.window, subs = record.subs;
            window.complete();
            subs.unsubscribe();
            arrRemove_1.arrRemove(windowRecords, record);
            restartOnClose && startWindow();
        };
        var startWindow = function() {
            if (windowRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var window_1 = new Subject_1.Subject();
                var record_1 = {
                    window: window_1,
                    subs: subs,
                    seen: 0
                };
                windowRecords.push(record_1);
                subscriber.next(window_1.asObservable());
                executeSchedule_1.executeSchedule(subs, scheduler, function() {
                    return closeWindow(record_1);
                }, windowTimeSpan);
            }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        } else {
            restartOnClose = true;
        }
        startWindow();
        var loop = function(cb) {
            return windowRecords.slice().forEach(cb);
        };
        var terminate = function(cb) {
            loop(function(_a) {
                var window = _a.window;
                return cb(window);
            });
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            loop(function(record) {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, function() {
            return terminate(function(consumer) {
                return consumer.complete();
            });
        }, function(err) {
            return terminate(function(consumer) {
                return consumer.error(err);
            });
        }));
        return function() {
            windowRecords = null;
        };
    });
}
exports.windowTime = windowTime; //# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ 83837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.windowToggle = void 0;
var Subject_1 = __webpack_require__(75465);
var Subscription_1 = __webpack_require__(31484);
var lift_1 = __webpack_require__(24629);
var innerFrom_1 = __webpack_require__(94681);
var OperatorSubscriber_1 = __webpack_require__(15691);
var noop_1 = __webpack_require__(80589);
var arrRemove_1 = __webpack_require__(72898);
function windowToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var windows = [];
        var handleError = function(err) {
            while(0 < windows.length){
                windows.shift().error(err);
            }
            subscriber.error(err);
        };
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
            var window = new Subject_1.Subject();
            windows.push(window);
            var closingSubscription = new Subscription_1.Subscription();
            var closeWindow = function() {
                arrRemove_1.arrRemove(windows, window);
                window.complete();
                closingSubscription.unsubscribe();
            };
            var closingNotifier;
            try {
                closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
            } catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window.asObservable());
            closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            var windowsCopy = windows.slice();
            try {
                for(var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()){
                    var window_1 = windowsCopy_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(0 < windows.length){
                windows.shift().complete();
            }
            subscriber.complete();
        }, handleError, function() {
            while(0 < windows.length){
                windows.shift().unsubscribe();
            }
        }));
    });
}
exports.windowToggle = windowToggle; //# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ 76996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.windowWhen = void 0;
var Subject_1 = __webpack_require__(75465);
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
function windowWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var window;
        var closingSubscriber;
        var handleError = function(err) {
            window.error(err);
            subscriber.error(err);
        };
        var openWindow = function() {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window === null || window === void 0 ? void 0 : window.complete();
            window = new Subject_1.Subject();
            subscriber.next(window.asObservable());
            var closingNotifier;
            try {
                closingNotifier = innerFrom_1.innerFrom(closingSelector());
            } catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        };
        openWindow();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return window.next(value);
        }, function() {
            window.complete();
            subscriber.complete();
        }, handleError, function() {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window = null;
        }));
    });
}
exports.windowWhen = windowWhen; //# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ 81561:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.withLatestFrom = void 0;
var lift_1 = __webpack_require__(24629);
var OperatorSubscriber_1 = __webpack_require__(15691);
var innerFrom_1 = __webpack_require__(94681);
var identity_1 = __webpack_require__(78557);
var noop_1 = __webpack_require__(80589);
var args_1 = __webpack_require__(907);
function withLatestFrom() {
    var inputs = [];
    for(var _i = 0; _i < arguments.length; _i++){
        inputs[_i] = arguments[_i];
    }
    var project = args_1.popResultSelector(inputs);
    return lift_1.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
            return false;
        });
        var ready = false;
        var _loop_1 = function(i) {
            innerFrom_1.innerFrom(inputs[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
                }
            }, noop_1.noop));
        };
        for(var i = 0; i < len; i++){
            _loop_1(i);
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (ready) {
                var values = __spreadArray([
                    value
                ], __read(otherValues));
                subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
            }
        }));
    });
}
exports.withLatestFrom = withLatestFrom; //# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ 78173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.zip = void 0;
var zip_1 = __webpack_require__(76736);
var lift_1 = __webpack_require__(24629);
function zip() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        sources[_i] = arguments[_i];
    }
    return lift_1.operate(function(source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([
            source
        ], __read(sources))).subscribe(subscriber);
    });
}
exports.zip = zip; //# sourceMappingURL=zip.js.map


/***/ }),

/***/ 6101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.zipAll = void 0;
var zip_1 = __webpack_require__(76736);
var joinAllInternals_1 = __webpack_require__(61360);
function zipAll(project) {
    return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
}
exports.zipAll = zipAll; //# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ 1525:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.zipWith = void 0;
var zip_1 = __webpack_require__(78173);
function zipWith() {
    var otherInputs = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherInputs[_i] = arguments[_i];
    }
    return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
}
exports.zipWith = zipWith; //# sourceMappingURL=zipWith.js.map


/***/ }),

/***/ 19074:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleArray = void 0;
var Observable_1 = __webpack_require__(74064);
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
            if (i === input.length) {
                subscriber.complete();
            } else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
exports.scheduleArray = scheduleArray; //# sourceMappingURL=scheduleArray.js.map


/***/ }),

/***/ 40157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleAsyncIterable = void 0;
var Observable_1 = __webpack_require__(74064);
var executeSchedule_1 = __webpack_require__(87588);
function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error("Iterable cannot be null");
    }
    return new Observable_1.Observable(function(subscriber) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                iterator.next().then(function(result) {
                    if (result.done) {
                        subscriber.complete();
                    } else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
exports.scheduleAsyncIterable = scheduleAsyncIterable; //# sourceMappingURL=scheduleAsyncIterable.js.map


/***/ }),

/***/ 19734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleIterable = void 0;
var Observable_1 = __webpack_require__(74064);
var iterator_1 = __webpack_require__(72237);
var isFunction_1 = __webpack_require__(81093);
var executeSchedule_1 = __webpack_require__(87588);
function scheduleIterable(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var iterator;
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            iterator = input[iterator_1.iterator]();
            executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                var _a;
                var value;
                var done;
                try {
                    _a = iterator.next(), value = _a.value, done = _a.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                } else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function() {
            return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
}
exports.scheduleIterable = scheduleIterable; //# sourceMappingURL=scheduleIterable.js.map


/***/ }),

/***/ 16340:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleObservable = void 0;
var innerFrom_1 = __webpack_require__(94681);
var observeOn_1 = __webpack_require__(39755);
var subscribeOn_1 = __webpack_require__(67082);
function scheduleObservable(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}
exports.scheduleObservable = scheduleObservable; //# sourceMappingURL=scheduleObservable.js.map


/***/ }),

/***/ 75247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.schedulePromise = void 0;
var innerFrom_1 = __webpack_require__(94681);
var observeOn_1 = __webpack_require__(39755);
var subscribeOn_1 = __webpack_require__(67082);
function schedulePromise(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}
exports.schedulePromise = schedulePromise; //# sourceMappingURL=schedulePromise.js.map


/***/ }),

/***/ 53185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleReadableStreamLike = void 0;
var scheduleAsyncIterable_1 = __webpack_require__(40157);
var isReadableStreamLike_1 = __webpack_require__(84016);
function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
}
exports.scheduleReadableStreamLike = scheduleReadableStreamLike; //# sourceMappingURL=scheduleReadableStreamLike.js.map


/***/ }),

/***/ 26588:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduled = void 0;
var scheduleObservable_1 = __webpack_require__(16340);
var schedulePromise_1 = __webpack_require__(75247);
var scheduleArray_1 = __webpack_require__(19074);
var scheduleIterable_1 = __webpack_require__(19734);
var scheduleAsyncIterable_1 = __webpack_require__(40157);
var isInteropObservable_1 = __webpack_require__(75296);
var isPromise_1 = __webpack_require__(9202);
var isArrayLike_1 = __webpack_require__(83700);
var isIterable_1 = __webpack_require__(44370);
var isAsyncIterable_1 = __webpack_require__(95760);
var throwUnobservableError_1 = __webpack_require__(43249);
var isReadableStreamLike_1 = __webpack_require__(84016);
var scheduleReadableStreamLike_1 = __webpack_require__(53185);
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        if (isArrayLike_1.isArrayLike(input)) {
            return scheduleArray_1.scheduleArray(input, scheduler);
        }
        if (isPromise_1.isPromise(input)) {
            return schedulePromise_1.schedulePromise(input, scheduler);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
            return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable_1.isIterable(input)) {
            return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
            return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.scheduled = scheduled; //# sourceMappingURL=scheduled.js.map


/***/ }),

/***/ 92611:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Action = void 0;
var Subscription_1 = __webpack_require__(31484);
var Action = function(_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(Subscription_1.Subscription);
exports.Action = Action; //# sourceMappingURL=Action.js.map


/***/ }),

/***/ 46543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AnimationFrameAction = void 0;
var AsyncAction_1 = __webpack_require__(81503);
var animationFrameProvider_1 = __webpack_require__(71078);
var AnimationFrameAction = function(_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
            return scheduler.flush(undefined);
        }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction);
exports.AnimationFrameAction = AnimationFrameAction; //# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ 99625:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AnimationFrameScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__(69454);
var AnimationFrameScheduler = function(_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while((action = actions[0]) && action.id === flushId && actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler);
exports.AnimationFrameScheduler = AnimationFrameScheduler; //# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ 75153:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsapAction = void 0;
var AsyncAction_1 = __webpack_require__(81503);
var immediateProvider_1 = __webpack_require__(67502);
var AsapAction = function(_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            immediateProvider_1.immediateProvider.clearImmediate(id);
            if (scheduler._scheduled === id) {
                scheduler._scheduled = undefined;
            }
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction);
exports.AsapAction = AsapAction; //# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ 45572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsapScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__(69454);
var AsapScheduler = function(_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while((action = actions[0]) && action.id === flushId && actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler);
exports.AsapScheduler = AsapScheduler; //# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ 81503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsyncAction = void 0;
var Action_1 = __webpack_require__(92611);
var intervalProvider_1 = __webpack_require__(68296);
var arrRemove_1 = __webpack_require__(72898);
var AsyncAction = function(_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function(state, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider_1.intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function(state, delay) {
        if (this.closed) {
            return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = e ? e : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function() {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove_1.arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action_1.Action);
exports.AsyncAction = AsyncAction; //# sourceMappingURL=AsyncAction.js.map


/***/ }),

/***/ 69454:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsyncScheduler = void 0;
var Scheduler_1 = __webpack_require__(60894);
var AsyncScheduler = function(_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler_1.Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while (action = actions.shift());
        this._active = false;
        if (error) {
            while(action = actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler);
exports.AsyncScheduler = AsyncScheduler; //# sourceMappingURL=AsyncScheduler.js.map


/***/ }),

/***/ 92666:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.QueueAction = void 0;
var AsyncAction_1 = __webpack_require__(81503);
var QueueAction = function(_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null && delay > 0 || delay == null && this.delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction);
exports.QueueAction = QueueAction; //# sourceMappingURL=QueueAction.js.map


/***/ }),

/***/ 7242:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.QueueScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__(69454);
var QueueScheduler = function(_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler);
exports.QueueScheduler = QueueScheduler; //# sourceMappingURL=QueueScheduler.js.map


/***/ }),

/***/ 10803:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
var AsyncAction_1 = __webpack_require__(81503);
var Subscription_1 = __webpack_require__(31484);
var AsyncScheduler_1 = __webpack_require__(69454);
var VirtualTimeScheduler = function(_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) {
            schedulerActionCtor = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Infinity;
        }
        var _this = _super.call(this, schedulerActionCtor, function() {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while((action = actions[0]) && action.delay <= maxFrames){
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while(action = actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler);
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = function(_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (Number.isFinite(delay)) {
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        } else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    VirtualAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return 1;
    };
    VirtualAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function(state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            } else if (a.index > b.index) {
                return 1;
            } else {
                return -1;
            }
        } else if (a.delay > b.delay) {
            return 1;
        } else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction);
exports.VirtualAction = VirtualAction; //# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ 69502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.animationFrame = exports.animationFrameScheduler = void 0;
var AnimationFrameAction_1 = __webpack_require__(46543);
var AnimationFrameScheduler_1 = __webpack_require__(99625);
exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
exports.animationFrame = exports.animationFrameScheduler; //# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ 71078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.animationFrameProvider = void 0;
var Subscription_1 = __webpack_require__(31484);
exports.animationFrameProvider = {
    schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new Subscription_1.Subscription(function() {
            return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
    },
    requestAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    delegate: undefined
}; //# sourceMappingURL=animationFrameProvider.js.map


/***/ }),

/***/ 81403:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.asap = exports.asapScheduler = void 0;
var AsapAction_1 = __webpack_require__(75153);
var AsapScheduler_1 = __webpack_require__(45572);
exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
exports.asap = exports.asapScheduler; //# sourceMappingURL=asap.js.map


/***/ }),

/***/ 16476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.async = exports.asyncScheduler = void 0;
var AsyncAction_1 = __webpack_require__(81503);
var AsyncScheduler_1 = __webpack_require__(69454);
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler; //# sourceMappingURL=async.js.map


/***/ }),

/***/ 36089:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.dateTimestampProvider = void 0;
exports.dateTimestampProvider = {
    now: function() {
        return (exports.dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined
}; //# sourceMappingURL=dateTimestampProvider.js.map


/***/ }),

/***/ 67502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.immediateProvider = void 0;
var Immediate_1 = __webpack_require__(63094);
var setImmediate = Immediate_1.Immediate.setImmediate, clearImmediate = Immediate_1.Immediate.clearImmediate;
exports.immediateProvider = {
    setImmediate: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
    },
    clearImmediate: function(handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=immediateProvider.js.map


/***/ }),

/***/ 68296:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.intervalProvider = void 0;
exports.intervalProvider = {
    setInterval: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++){
            args[_i - 2] = arguments[_i];
        }
        var delegate = exports.intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([
                handler,
                timeout
            ], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([
            handler,
            timeout
        ], __read(args)));
    },
    clearInterval: function(handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=intervalProvider.js.map


/***/ }),

/***/ 83004:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.performanceTimestampProvider = void 0;
exports.performanceTimestampProvider = {
    now: function() {
        return (exports.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined
}; //# sourceMappingURL=performanceTimestampProvider.js.map


/***/ }),

/***/ 2921:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.queue = exports.queueScheduler = void 0;
var QueueAction_1 = __webpack_require__(92666);
var QueueScheduler_1 = __webpack_require__(7242);
exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler; //# sourceMappingURL=queue.js.map


/***/ }),

/***/ 34606:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timeoutProvider = void 0;
exports.timeoutProvider = {
    setTimeout: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++){
            args[_i - 2] = arguments[_i];
        }
        var delegate = exports.timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([
                handler,
                timeout
            ], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([
            handler,
            timeout
        ], __read(args)));
    },
    clearTimeout: function(handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=timeoutProvider.js.map


/***/ }),

/***/ 72237:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.iterator = exports.getSymbolIterator = void 0;
function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
        return "@@iterator";
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator(); //# sourceMappingURL=iterator.js.map


/***/ }),

/***/ 1895:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.observable = void 0;
exports.observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}(); //# sourceMappingURL=observable.js.map


/***/ }),

/***/ 78447:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
})); //# sourceMappingURL=types.js.map


/***/ }),

/***/ 40624:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ArgumentOutOfRangeError = void 0;
var createErrorClass_1 = __webpack_require__(28694);
exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = "ArgumentOutOfRangeError";
        this.message = "argument out of range";
    };
}); //# sourceMappingURL=ArgumentOutOfRangeError.js.map


/***/ }),

/***/ 21253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EmptyError = void 0;
var createErrorClass_1 = __webpack_require__(28694);
exports.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
    return function EmptyErrorImpl() {
        _super(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
    };
}); //# sourceMappingURL=EmptyError.js.map


/***/ }),

/***/ 63094:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TestTools = exports.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
exports.Immediate = {
    setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function() {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function(handle) {
        findAndClearHandle(handle);
    }
};
exports.TestTools = {
    pending: function() {
        return Object.keys(activeHandles).length;
    }
}; //# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ 38892:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NotFoundError = void 0;
var createErrorClass_1 = __webpack_require__(28694);
exports.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = "NotFoundError";
        this.message = message;
    };
}); //# sourceMappingURL=NotFoundError.js.map


/***/ }),

/***/ 43293:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ObjectUnsubscribedError = void 0;
var createErrorClass_1 = __webpack_require__(28694);
exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
    };
}); //# sourceMappingURL=ObjectUnsubscribedError.js.map


/***/ }),

/***/ 97189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SequenceError = void 0;
var createErrorClass_1 = __webpack_require__(28694);
exports.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = "SequenceError";
        this.message = message;
    };
}); //# sourceMappingURL=SequenceError.js.map


/***/ }),

/***/ 97058:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UnsubscriptionError = void 0;
var createErrorClass_1 = __webpack_require__(28694);
exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
    };
}); //# sourceMappingURL=UnsubscriptionError.js.map


/***/ }),

/***/ 907:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
var isFunction_1 = __webpack_require__(81093);
var isScheduler_1 = __webpack_require__(2910);
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction_1.isFunction(last(args)) ? args.pop() : undefined;
}
exports.popResultSelector = popResultSelector;
function popScheduler(args) {
    return isScheduler_1.isScheduler(last(args)) ? args.pop() : undefined;
}
exports.popScheduler = popScheduler;
function popNumber(args, defaultValue) {
    return typeof last(args) === "number" ? args.pop() : defaultValue;
}
exports.popNumber = popNumber; //# sourceMappingURL=args.js.map


/***/ }),

/***/ 89840:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.argsArgArrayOrObject = void 0;
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
            return {
                args: first_1,
                keys: null
            };
        }
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function(key) {
                    return first_1[key];
                }),
                keys: keys
            };
        }
    }
    return {
        args: args,
        keys: null
    };
}
exports.argsArgArrayOrObject = argsArgArrayOrObject;
function isPOJO(obj) {
    return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
} //# sourceMappingURL=argsArgArrayOrObject.js.map


/***/ }),

/***/ 60679:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.argsOrArgArray = void 0;
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
exports.argsOrArgArray = argsOrArgArray; //# sourceMappingURL=argsOrArgArray.js.map


/***/ }),

/***/ 72898:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.arrRemove = void 0;
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
exports.arrRemove = arrRemove; //# sourceMappingURL=arrRemove.js.map


/***/ }),

/***/ 28694:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createErrorClass = void 0;
function createErrorClass(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
exports.createErrorClass = createErrorClass; //# sourceMappingURL=createErrorClass.js.map


/***/ }),

/***/ 28884:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createObject = void 0;
function createObject(keys, values) {
    return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
    }, {});
}
exports.createObject = createObject; //# sourceMappingURL=createObject.js.map


/***/ }),

/***/ 50460:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.captureError = exports.errorContext = void 0;
var config_1 = __webpack_require__(69265);
var context = null;
function errorContext(cb) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = {
                errorThrown: false,
                error: null
            };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    } else {
        cb();
    }
}
exports.errorContext = errorContext;
function captureError(err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
exports.captureError = captureError; //# sourceMappingURL=errorContext.js.map


/***/ }),

/***/ 87588:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.executeSchedule = void 0;
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) {
        delay = 0;
    }
    if (repeat === void 0) {
        repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        } else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
exports.executeSchedule = executeSchedule; //# sourceMappingURL=executeSchedule.js.map


/***/ }),

/***/ 78557:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.identity = void 0;
function identity(x) {
    return x;
}
exports.identity = identity; //# sourceMappingURL=identity.js.map


/***/ }),

/***/ 83700:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isArrayLike = void 0;
exports.isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
}; //# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ 95760:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isAsyncIterable = void 0;
var isFunction_1 = __webpack_require__(81093);
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
exports.isAsyncIterable = isAsyncIterable; //# sourceMappingURL=isAsyncIterable.js.map


/***/ }),

/***/ 78978:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isValidDate = void 0;
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
exports.isValidDate = isValidDate; //# sourceMappingURL=isDate.js.map


/***/ }),

/***/ 81093:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isFunction = void 0;
function isFunction(value) {
    return typeof value === "function";
}
exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map


/***/ }),

/***/ 75296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isInteropObservable = void 0;
var observable_1 = __webpack_require__(1895);
var isFunction_1 = __webpack_require__(81093);
function isInteropObservable(input) {
    return isFunction_1.isFunction(input[observable_1.observable]);
}
exports.isInteropObservable = isInteropObservable; //# sourceMappingURL=isInteropObservable.js.map


/***/ }),

/***/ 44370:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isIterable = void 0;
var iterator_1 = __webpack_require__(72237);
var isFunction_1 = __webpack_require__(81093);
function isIterable(input) {
    return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
}
exports.isIterable = isIterable; //# sourceMappingURL=isIterable.js.map


/***/ }),

/***/ 2188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isObservable = void 0;
var Observable_1 = __webpack_require__(74064);
var isFunction_1 = __webpack_require__(81093);
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
}
exports.isObservable = isObservable; //# sourceMappingURL=isObservable.js.map


/***/ }),

/***/ 9202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isPromise = void 0;
var isFunction_1 = __webpack_require__(81093);
function isPromise(value) {
    return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
}
exports.isPromise = isPromise; //# sourceMappingURL=isPromise.js.map


/***/ }),

/***/ 84016:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __await = (void 0) && (void 0).__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = (void 0) && (void 0).__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
var isFunction_1 = __webpack_require__(81093);
function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [
                        4,
                        __await(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        __await(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        __await(value)
                    ];
                case 6:
                    return [
                        4,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
function isReadableStreamLike(obj) {
    return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
exports.isReadableStreamLike = isReadableStreamLike; //# sourceMappingURL=isReadableStreamLike.js.map


/***/ }),

/***/ 2910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isScheduler = void 0;
var isFunction_1 = __webpack_require__(81093);
function isScheduler(value) {
    return value && isFunction_1.isFunction(value.schedule);
}
exports.isScheduler = isScheduler; //# sourceMappingURL=isScheduler.js.map


/***/ }),

/***/ 24629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.operate = exports.hasLift = void 0;
var isFunction_1 = __webpack_require__(81093);
function hasLift(source) {
    return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
exports.hasLift = hasLift;
function operate(init) {
    return function(source) {
        if (hasLift(source)) {
            return source.lift(function(liftedSource) {
                try {
                    return init(liftedSource, this);
                } catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError("Unable to lift unknown Observable type");
    };
}
exports.operate = operate; //# sourceMappingURL=lift.js.map


/***/ }),

/***/ 24076:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mapOneOrManyArgs = void 0;
var map_1 = __webpack_require__(14309);
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map_1.map(function(args) {
        return callOrApply(fn, args);
    });
}
exports.mapOneOrManyArgs = mapOneOrManyArgs; //# sourceMappingURL=mapOneOrManyArgs.js.map


/***/ }),

/***/ 80589:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.noop = void 0;
function noop() {}
exports.noop = noop; //# sourceMappingURL=noop.js.map


/***/ }),

/***/ 22980:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.not = void 0;
function not(pred, thisArg) {
    return function(value, index) {
        return !pred.call(thisArg, value, index);
    };
}
exports.not = not; //# sourceMappingURL=not.js.map


/***/ }),

/***/ 78976:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pipeFromArray = exports.pipe = void 0;
var identity_1 = __webpack_require__(78557);
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++){
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}
exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map


/***/ }),

/***/ 14469:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.reportUnhandledError = void 0;
var config_1 = __webpack_require__(69265);
var timeoutProvider_1 = __webpack_require__(34606);
function reportUnhandledError(err) {
    timeoutProvider_1.timeoutProvider.setTimeout(function() {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        } else {
            throw err;
        }
    });
}
exports.reportUnhandledError = reportUnhandledError; //# sourceMappingURL=reportUnhandledError.js.map


/***/ }),

/***/ 43249:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInvalidObservableTypeError = void 0;
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
exports.createInvalidObservableTypeError = createInvalidObservableTypeError; //# sourceMappingURL=throwUnobservableError.js.map


/***/ }),

/***/ 55991:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeAll = exports.merge = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.concat = exports.combineLatestWith = exports.combineLatest = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = void 0;
exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.race = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.partition = exports.pairwise = exports.onErrorResumeNext = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = void 0;
exports.zipWith = exports.zipAll = exports.zip = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = void 0;
var audit_1 = __webpack_require__(62251);
Object.defineProperty(exports, "audit", ({
    enumerable: true,
    get: function() {
        return audit_1.audit;
    }
}));
var auditTime_1 = __webpack_require__(2281);
Object.defineProperty(exports, "auditTime", ({
    enumerable: true,
    get: function() {
        return auditTime_1.auditTime;
    }
}));
var buffer_1 = __webpack_require__(23994);
Object.defineProperty(exports, "buffer", ({
    enumerable: true,
    get: function() {
        return buffer_1.buffer;
    }
}));
var bufferCount_1 = __webpack_require__(57342);
Object.defineProperty(exports, "bufferCount", ({
    enumerable: true,
    get: function() {
        return bufferCount_1.bufferCount;
    }
}));
var bufferTime_1 = __webpack_require__(24528);
Object.defineProperty(exports, "bufferTime", ({
    enumerable: true,
    get: function() {
        return bufferTime_1.bufferTime;
    }
}));
var bufferToggle_1 = __webpack_require__(26730);
Object.defineProperty(exports, "bufferToggle", ({
    enumerable: true,
    get: function() {
        return bufferToggle_1.bufferToggle;
    }
}));
var bufferWhen_1 = __webpack_require__(57104);
Object.defineProperty(exports, "bufferWhen", ({
    enumerable: true,
    get: function() {
        return bufferWhen_1.bufferWhen;
    }
}));
var catchError_1 = __webpack_require__(23230);
Object.defineProperty(exports, "catchError", ({
    enumerable: true,
    get: function() {
        return catchError_1.catchError;
    }
}));
var combineAll_1 = __webpack_require__(69134);
Object.defineProperty(exports, "combineAll", ({
    enumerable: true,
    get: function() {
        return combineAll_1.combineAll;
    }
}));
var combineLatestAll_1 = __webpack_require__(12650);
Object.defineProperty(exports, "combineLatestAll", ({
    enumerable: true,
    get: function() {
        return combineLatestAll_1.combineLatestAll;
    }
}));
var combineLatest_1 = __webpack_require__(10336);
Object.defineProperty(exports, "combineLatest", ({
    enumerable: true,
    get: function() {
        return combineLatest_1.combineLatest;
    }
}));
var combineLatestWith_1 = __webpack_require__(63796);
Object.defineProperty(exports, "combineLatestWith", ({
    enumerable: true,
    get: function() {
        return combineLatestWith_1.combineLatestWith;
    }
}));
var concat_1 = __webpack_require__(91979);
Object.defineProperty(exports, "concat", ({
    enumerable: true,
    get: function() {
        return concat_1.concat;
    }
}));
var concatAll_1 = __webpack_require__(96348);
Object.defineProperty(exports, "concatAll", ({
    enumerable: true,
    get: function() {
        return concatAll_1.concatAll;
    }
}));
var concatMap_1 = __webpack_require__(94170);
Object.defineProperty(exports, "concatMap", ({
    enumerable: true,
    get: function() {
        return concatMap_1.concatMap;
    }
}));
var concatMapTo_1 = __webpack_require__(10672);
Object.defineProperty(exports, "concatMapTo", ({
    enumerable: true,
    get: function() {
        return concatMapTo_1.concatMapTo;
    }
}));
var concatWith_1 = __webpack_require__(84579);
Object.defineProperty(exports, "concatWith", ({
    enumerable: true,
    get: function() {
        return concatWith_1.concatWith;
    }
}));
var connect_1 = __webpack_require__(98414);
Object.defineProperty(exports, "connect", ({
    enumerable: true,
    get: function() {
        return connect_1.connect;
    }
}));
var count_1 = __webpack_require__(60727);
Object.defineProperty(exports, "count", ({
    enumerable: true,
    get: function() {
        return count_1.count;
    }
}));
var debounce_1 = __webpack_require__(79709);
Object.defineProperty(exports, "debounce", ({
    enumerable: true,
    get: function() {
        return debounce_1.debounce;
    }
}));
var debounceTime_1 = __webpack_require__(22069);
Object.defineProperty(exports, "debounceTime", ({
    enumerable: true,
    get: function() {
        return debounceTime_1.debounceTime;
    }
}));
var defaultIfEmpty_1 = __webpack_require__(18411);
Object.defineProperty(exports, "defaultIfEmpty", ({
    enumerable: true,
    get: function() {
        return defaultIfEmpty_1.defaultIfEmpty;
    }
}));
var delay_1 = __webpack_require__(42835);
Object.defineProperty(exports, "delay", ({
    enumerable: true,
    get: function() {
        return delay_1.delay;
    }
}));
var delayWhen_1 = __webpack_require__(44270);
Object.defineProperty(exports, "delayWhen", ({
    enumerable: true,
    get: function() {
        return delayWhen_1.delayWhen;
    }
}));
var dematerialize_1 = __webpack_require__(69153);
Object.defineProperty(exports, "dematerialize", ({
    enumerable: true,
    get: function() {
        return dematerialize_1.dematerialize;
    }
}));
var distinct_1 = __webpack_require__(51499);
Object.defineProperty(exports, "distinct", ({
    enumerable: true,
    get: function() {
        return distinct_1.distinct;
    }
}));
var distinctUntilChanged_1 = __webpack_require__(33808);
Object.defineProperty(exports, "distinctUntilChanged", ({
    enumerable: true,
    get: function() {
        return distinctUntilChanged_1.distinctUntilChanged;
    }
}));
var distinctUntilKeyChanged_1 = __webpack_require__(90780);
Object.defineProperty(exports, "distinctUntilKeyChanged", ({
    enumerable: true,
    get: function() {
        return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    }
}));
var elementAt_1 = __webpack_require__(91359);
Object.defineProperty(exports, "elementAt", ({
    enumerable: true,
    get: function() {
        return elementAt_1.elementAt;
    }
}));
var endWith_1 = __webpack_require__(68764);
Object.defineProperty(exports, "endWith", ({
    enumerable: true,
    get: function() {
        return endWith_1.endWith;
    }
}));
var every_1 = __webpack_require__(92568);
Object.defineProperty(exports, "every", ({
    enumerable: true,
    get: function() {
        return every_1.every;
    }
}));
var exhaust_1 = __webpack_require__(61239);
Object.defineProperty(exports, "exhaust", ({
    enumerable: true,
    get: function() {
        return exhaust_1.exhaust;
    }
}));
var exhaustAll_1 = __webpack_require__(68271);
Object.defineProperty(exports, "exhaustAll", ({
    enumerable: true,
    get: function() {
        return exhaustAll_1.exhaustAll;
    }
}));
var exhaustMap_1 = __webpack_require__(94685);
Object.defineProperty(exports, "exhaustMap", ({
    enumerable: true,
    get: function() {
        return exhaustMap_1.exhaustMap;
    }
}));
var expand_1 = __webpack_require__(30235);
Object.defineProperty(exports, "expand", ({
    enumerable: true,
    get: function() {
        return expand_1.expand;
    }
}));
var filter_1 = __webpack_require__(5419);
Object.defineProperty(exports, "filter", ({
    enumerable: true,
    get: function() {
        return filter_1.filter;
    }
}));
var finalize_1 = __webpack_require__(36788);
Object.defineProperty(exports, "finalize", ({
    enumerable: true,
    get: function() {
        return finalize_1.finalize;
    }
}));
var find_1 = __webpack_require__(26914);
Object.defineProperty(exports, "find", ({
    enumerable: true,
    get: function() {
        return find_1.find;
    }
}));
var findIndex_1 = __webpack_require__(24592);
Object.defineProperty(exports, "findIndex", ({
    enumerable: true,
    get: function() {
        return findIndex_1.findIndex;
    }
}));
var first_1 = __webpack_require__(38752);
Object.defineProperty(exports, "first", ({
    enumerable: true,
    get: function() {
        return first_1.first;
    }
}));
var groupBy_1 = __webpack_require__(43684);
Object.defineProperty(exports, "groupBy", ({
    enumerable: true,
    get: function() {
        return groupBy_1.groupBy;
    }
}));
var ignoreElements_1 = __webpack_require__(92074);
Object.defineProperty(exports, "ignoreElements", ({
    enumerable: true,
    get: function() {
        return ignoreElements_1.ignoreElements;
    }
}));
var isEmpty_1 = __webpack_require__(35536);
Object.defineProperty(exports, "isEmpty", ({
    enumerable: true,
    get: function() {
        return isEmpty_1.isEmpty;
    }
}));
var last_1 = __webpack_require__(9293);
Object.defineProperty(exports, "last", ({
    enumerable: true,
    get: function() {
        return last_1.last;
    }
}));
var map_1 = __webpack_require__(14309);
Object.defineProperty(exports, "map", ({
    enumerable: true,
    get: function() {
        return map_1.map;
    }
}));
var mapTo_1 = __webpack_require__(69024);
Object.defineProperty(exports, "mapTo", ({
    enumerable: true,
    get: function() {
        return mapTo_1.mapTo;
    }
}));
var materialize_1 = __webpack_require__(80210);
Object.defineProperty(exports, "materialize", ({
    enumerable: true,
    get: function() {
        return materialize_1.materialize;
    }
}));
var max_1 = __webpack_require__(1714);
Object.defineProperty(exports, "max", ({
    enumerable: true,
    get: function() {
        return max_1.max;
    }
}));
var merge_1 = __webpack_require__(70766);
Object.defineProperty(exports, "merge", ({
    enumerable: true,
    get: function() {
        return merge_1.merge;
    }
}));
var mergeAll_1 = __webpack_require__(98608);
Object.defineProperty(exports, "mergeAll", ({
    enumerable: true,
    get: function() {
        return mergeAll_1.mergeAll;
    }
}));
var flatMap_1 = __webpack_require__(76160);
Object.defineProperty(exports, "flatMap", ({
    enumerable: true,
    get: function() {
        return flatMap_1.flatMap;
    }
}));
var mergeMap_1 = __webpack_require__(49586);
Object.defineProperty(exports, "mergeMap", ({
    enumerable: true,
    get: function() {
        return mergeMap_1.mergeMap;
    }
}));
var mergeMapTo_1 = __webpack_require__(55013);
Object.defineProperty(exports, "mergeMapTo", ({
    enumerable: true,
    get: function() {
        return mergeMapTo_1.mergeMapTo;
    }
}));
var mergeScan_1 = __webpack_require__(85090);
Object.defineProperty(exports, "mergeScan", ({
    enumerable: true,
    get: function() {
        return mergeScan_1.mergeScan;
    }
}));
var mergeWith_1 = __webpack_require__(55196);
Object.defineProperty(exports, "mergeWith", ({
    enumerable: true,
    get: function() {
        return mergeWith_1.mergeWith;
    }
}));
var min_1 = __webpack_require__(42017);
Object.defineProperty(exports, "min", ({
    enumerable: true,
    get: function() {
        return min_1.min;
    }
}));
var multicast_1 = __webpack_require__(53807);
Object.defineProperty(exports, "multicast", ({
    enumerable: true,
    get: function() {
        return multicast_1.multicast;
    }
}));
var observeOn_1 = __webpack_require__(39755);
Object.defineProperty(exports, "observeOn", ({
    enumerable: true,
    get: function() {
        return observeOn_1.observeOn;
    }
}));
var onErrorResumeNextWith_1 = __webpack_require__(69048);
Object.defineProperty(exports, "onErrorResumeNext", ({
    enumerable: true,
    get: function() {
        return onErrorResumeNextWith_1.onErrorResumeNext;
    }
}));
var pairwise_1 = __webpack_require__(16042);
Object.defineProperty(exports, "pairwise", ({
    enumerable: true,
    get: function() {
        return pairwise_1.pairwise;
    }
}));
var partition_1 = __webpack_require__(1933);
Object.defineProperty(exports, "partition", ({
    enumerable: true,
    get: function() {
        return partition_1.partition;
    }
}));
var pluck_1 = __webpack_require__(77420);
Object.defineProperty(exports, "pluck", ({
    enumerable: true,
    get: function() {
        return pluck_1.pluck;
    }
}));
var publish_1 = __webpack_require__(92601);
Object.defineProperty(exports, "publish", ({
    enumerable: true,
    get: function() {
        return publish_1.publish;
    }
}));
var publishBehavior_1 = __webpack_require__(86837);
Object.defineProperty(exports, "publishBehavior", ({
    enumerable: true,
    get: function() {
        return publishBehavior_1.publishBehavior;
    }
}));
var publishLast_1 = __webpack_require__(44129);
Object.defineProperty(exports, "publishLast", ({
    enumerable: true,
    get: function() {
        return publishLast_1.publishLast;
    }
}));
var publishReplay_1 = __webpack_require__(76607);
Object.defineProperty(exports, "publishReplay", ({
    enumerable: true,
    get: function() {
        return publishReplay_1.publishReplay;
    }
}));
var race_1 = __webpack_require__(21338);
Object.defineProperty(exports, "race", ({
    enumerable: true,
    get: function() {
        return race_1.race;
    }
}));
var raceWith_1 = __webpack_require__(61967);
Object.defineProperty(exports, "raceWith", ({
    enumerable: true,
    get: function() {
        return raceWith_1.raceWith;
    }
}));
var reduce_1 = __webpack_require__(23793);
Object.defineProperty(exports, "reduce", ({
    enumerable: true,
    get: function() {
        return reduce_1.reduce;
    }
}));
var repeat_1 = __webpack_require__(88846);
Object.defineProperty(exports, "repeat", ({
    enumerable: true,
    get: function() {
        return repeat_1.repeat;
    }
}));
var repeatWhen_1 = __webpack_require__(87471);
Object.defineProperty(exports, "repeatWhen", ({
    enumerable: true,
    get: function() {
        return repeatWhen_1.repeatWhen;
    }
}));
var retry_1 = __webpack_require__(63434);
Object.defineProperty(exports, "retry", ({
    enumerable: true,
    get: function() {
        return retry_1.retry;
    }
}));
var retryWhen_1 = __webpack_require__(30905);
Object.defineProperty(exports, "retryWhen", ({
    enumerable: true,
    get: function() {
        return retryWhen_1.retryWhen;
    }
}));
var refCount_1 = __webpack_require__(12775);
Object.defineProperty(exports, "refCount", ({
    enumerable: true,
    get: function() {
        return refCount_1.refCount;
    }
}));
var sample_1 = __webpack_require__(65340);
Object.defineProperty(exports, "sample", ({
    enumerable: true,
    get: function() {
        return sample_1.sample;
    }
}));
var sampleTime_1 = __webpack_require__(78379);
Object.defineProperty(exports, "sampleTime", ({
    enumerable: true,
    get: function() {
        return sampleTime_1.sampleTime;
    }
}));
var scan_1 = __webpack_require__(74867);
Object.defineProperty(exports, "scan", ({
    enumerable: true,
    get: function() {
        return scan_1.scan;
    }
}));
var sequenceEqual_1 = __webpack_require__(12666);
Object.defineProperty(exports, "sequenceEqual", ({
    enumerable: true,
    get: function() {
        return sequenceEqual_1.sequenceEqual;
    }
}));
var share_1 = __webpack_require__(12766);
Object.defineProperty(exports, "share", ({
    enumerable: true,
    get: function() {
        return share_1.share;
    }
}));
var shareReplay_1 = __webpack_require__(10931);
Object.defineProperty(exports, "shareReplay", ({
    enumerable: true,
    get: function() {
        return shareReplay_1.shareReplay;
    }
}));
var single_1 = __webpack_require__(59237);
Object.defineProperty(exports, "single", ({
    enumerable: true,
    get: function() {
        return single_1.single;
    }
}));
var skip_1 = __webpack_require__(53082);
Object.defineProperty(exports, "skip", ({
    enumerable: true,
    get: function() {
        return skip_1.skip;
    }
}));
var skipLast_1 = __webpack_require__(84447);
Object.defineProperty(exports, "skipLast", ({
    enumerable: true,
    get: function() {
        return skipLast_1.skipLast;
    }
}));
var skipUntil_1 = __webpack_require__(52696);
Object.defineProperty(exports, "skipUntil", ({
    enumerable: true,
    get: function() {
        return skipUntil_1.skipUntil;
    }
}));
var skipWhile_1 = __webpack_require__(2177);
Object.defineProperty(exports, "skipWhile", ({
    enumerable: true,
    get: function() {
        return skipWhile_1.skipWhile;
    }
}));
var startWith_1 = __webpack_require__(21732);
Object.defineProperty(exports, "startWith", ({
    enumerable: true,
    get: function() {
        return startWith_1.startWith;
    }
}));
var subscribeOn_1 = __webpack_require__(67082);
Object.defineProperty(exports, "subscribeOn", ({
    enumerable: true,
    get: function() {
        return subscribeOn_1.subscribeOn;
    }
}));
var switchAll_1 = __webpack_require__(14658);
Object.defineProperty(exports, "switchAll", ({
    enumerable: true,
    get: function() {
        return switchAll_1.switchAll;
    }
}));
var switchMap_1 = __webpack_require__(69381);
Object.defineProperty(exports, "switchMap", ({
    enumerable: true,
    get: function() {
        return switchMap_1.switchMap;
    }
}));
var switchMapTo_1 = __webpack_require__(1299);
Object.defineProperty(exports, "switchMapTo", ({
    enumerable: true,
    get: function() {
        return switchMapTo_1.switchMapTo;
    }
}));
var switchScan_1 = __webpack_require__(85705);
Object.defineProperty(exports, "switchScan", ({
    enumerable: true,
    get: function() {
        return switchScan_1.switchScan;
    }
}));
var take_1 = __webpack_require__(56357);
Object.defineProperty(exports, "take", ({
    enumerable: true,
    get: function() {
        return take_1.take;
    }
}));
var takeLast_1 = __webpack_require__(16233);
Object.defineProperty(exports, "takeLast", ({
    enumerable: true,
    get: function() {
        return takeLast_1.takeLast;
    }
}));
var takeUntil_1 = __webpack_require__(36008);
Object.defineProperty(exports, "takeUntil", ({
    enumerable: true,
    get: function() {
        return takeUntil_1.takeUntil;
    }
}));
var takeWhile_1 = __webpack_require__(96270);
Object.defineProperty(exports, "takeWhile", ({
    enumerable: true,
    get: function() {
        return takeWhile_1.takeWhile;
    }
}));
var tap_1 = __webpack_require__(60456);
Object.defineProperty(exports, "tap", ({
    enumerable: true,
    get: function() {
        return tap_1.tap;
    }
}));
var throttle_1 = __webpack_require__(62082);
Object.defineProperty(exports, "throttle", ({
    enumerable: true,
    get: function() {
        return throttle_1.throttle;
    }
}));
var throttleTime_1 = __webpack_require__(57767);
Object.defineProperty(exports, "throttleTime", ({
    enumerable: true,
    get: function() {
        return throttleTime_1.throttleTime;
    }
}));
var throwIfEmpty_1 = __webpack_require__(41559);
Object.defineProperty(exports, "throwIfEmpty", ({
    enumerable: true,
    get: function() {
        return throwIfEmpty_1.throwIfEmpty;
    }
}));
var timeInterval_1 = __webpack_require__(19831);
Object.defineProperty(exports, "timeInterval", ({
    enumerable: true,
    get: function() {
        return timeInterval_1.timeInterval;
    }
}));
var timeout_1 = __webpack_require__(85280);
Object.defineProperty(exports, "timeout", ({
    enumerable: true,
    get: function() {
        return timeout_1.timeout;
    }
}));
var timeoutWith_1 = __webpack_require__(97472);
Object.defineProperty(exports, "timeoutWith", ({
    enumerable: true,
    get: function() {
        return timeoutWith_1.timeoutWith;
    }
}));
var timestamp_1 = __webpack_require__(36258);
Object.defineProperty(exports, "timestamp", ({
    enumerable: true,
    get: function() {
        return timestamp_1.timestamp;
    }
}));
var toArray_1 = __webpack_require__(61621);
Object.defineProperty(exports, "toArray", ({
    enumerable: true,
    get: function() {
        return toArray_1.toArray;
    }
}));
var window_1 = __webpack_require__(42803);
Object.defineProperty(exports, "window", ({
    enumerable: true,
    get: function() {
        return window_1.window;
    }
}));
var windowCount_1 = __webpack_require__(37031);
Object.defineProperty(exports, "windowCount", ({
    enumerable: true,
    get: function() {
        return windowCount_1.windowCount;
    }
}));
var windowTime_1 = __webpack_require__(27823);
Object.defineProperty(exports, "windowTime", ({
    enumerable: true,
    get: function() {
        return windowTime_1.windowTime;
    }
}));
var windowToggle_1 = __webpack_require__(83837);
Object.defineProperty(exports, "windowToggle", ({
    enumerable: true,
    get: function() {
        return windowToggle_1.windowToggle;
    }
}));
var windowWhen_1 = __webpack_require__(76996);
Object.defineProperty(exports, "windowWhen", ({
    enumerable: true,
    get: function() {
        return windowWhen_1.windowWhen;
    }
}));
var withLatestFrom_1 = __webpack_require__(81561);
Object.defineProperty(exports, "withLatestFrom", ({
    enumerable: true,
    get: function() {
        return withLatestFrom_1.withLatestFrom;
    }
}));
var zip_1 = __webpack_require__(78173);
Object.defineProperty(exports, "zip", ({
    enumerable: true,
    get: function() {
        return zip_1.zip;
    }
}));
var zipAll_1 = __webpack_require__(6101);
Object.defineProperty(exports, "zipAll", ({
    enumerable: true,
    get: function() {
        return zipAll_1.zipAll;
    }
}));
var zipWith_1 = __webpack_require__(1525);
Object.defineProperty(exports, "zipWith", ({
    enumerable: true,
    get: function() {
        return zipWith_1.zipWith;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 32557:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* eslint-disable node/no-deprecated-api */ 
var buffer = __webpack_require__(14300);
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
    }
    return buffer.SlowBuffer(size);
};


/***/ }),

/***/ 19228:
/***/ ((module) => {

"use strict";

var tick = 1;
var maxTick = 65535;
var resolution = 4;
var inc = function() {
    tick = tick + 1 & maxTick;
};
var timer = setInterval(inc, 1000 / resolution | 0);
if (timer.unref) timer.unref();
module.exports = function(seconds) {
    var size = resolution * (seconds || 5);
    var buffer = [
        0
    ];
    var pointer = 1;
    var last = tick - 1 & maxTick;
    return function(delta) {
        var dist = tick - last & maxTick;
        if (dist > size) dist = size;
        last = tick;
        while(dist--){
            if (pointer === size) pointer = 0;
            buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1];
            pointer++;
        }
        if (delta) buffer[pointer - 1] += delta;
        var top = buffer[pointer - 1];
        var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer];
        return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length;
    };
};


/***/ }),

/***/ 31367:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(22037);
const hasFlag = __webpack_require__(69561);
const env = process.env;
let forceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
    forceColor = false;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = true;
}
if ("FORCE_COLOR" in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(stream) {
    if (forceColor === false) {
        return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
    }
    if (hasFlag("color=256")) {
        return 2;
    }
    if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
    }
    const min = forceColor ? 1 : 0;
    if (process.platform === "win32") {
        // Node.js 7.5.0 is the first version of Node.js to include a patch to
        // libuv that enables 256 color output on Windows. Anything earlier and it
        // won't work. However, here we target Node.js 8 at minimum as it is an LTS
        // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
        // release that supports 256 colors. Windows 10 build 14931 is the first release
        // that supports 16m/TrueColor.
        const osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    if ("CI" in env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI"
        ].some((sign)=>sign in env) || env.CI_NAME === "codeship") {
            return 1;
        }
        return min;
    }
    if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
        return 3;
    }
    if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch(env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ("COLORTERM" in env) {
        return 1;
    }
    if (env.TERM === "dumb") {
        return min;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
};


/***/ }),

/***/ 12746:
/***/ ((module) => {

"use strict";

var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
};


/***/ }),

/***/ 22613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/ var pna = __webpack_require__(96567);
/*</replacement>*/ /*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj){
        keys.push(key);
    }
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
/*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ var Readable = __webpack_require__(63459);
var Writable = __webpack_require__(79466);
util.inherits(Duplex, Readable);
{
    // avoid scope creep, the keys array can then be collected
    var keys = objectKeys(Writable.prototype);
    for(var v = 0; v < keys.length; v++){
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
    }
}function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options && options.readable === false) this.readable = false;
    if (options && options.writable === false) this.writable = false;
    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
    this.once("end", onend);
}
Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._writableState.highWaterMark;
    }
});
// the no-half-open enforcer
function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    pna.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, "destroyed", {
    get: function() {
        if (this._readableState === undefined || this._writableState === undefined) {
            return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});
Duplex.prototype._destroy = function(err, cb) {
    this.push(null);
    this.end();
    pna.nextTick(cb, err);
};


/***/ }),

/***/ 27172:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;
var Transform = __webpack_require__(95660);
/*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ util.inherits(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};


/***/ }),

/***/ 63459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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

/*<replacement>*/ var pna = __webpack_require__(96567);
/*</replacement>*/ module.exports = Readable;
/*<replacement>*/ var isArray = __webpack_require__(12746);
/*</replacement>*/ /*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = (__webpack_require__(82361).EventEmitter);
var EElistenerCount = function(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = __webpack_require__(86815);
/*</replacement>*/ /*<replacement>*/ var Buffer = (__webpack_require__(32557).Buffer);
var OurUint8Array = (typeof global !== "undefined" ? global :  false ? 0 : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/ /*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ /*<replacement>*/ var debugUtil = __webpack_require__(73837);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
} else {
    debug = function() {};
}
/*</replacement>*/ var BufferList = __webpack_require__(4569);
var destroyImpl = __webpack_require__(48994);
var StringDecoder;
util.inherits(Readable, Stream);
var kProxyEvents = [
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream) {
    Duplex = Duplex || __webpack_require__(22613);
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    var isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    var hwm = options.highWaterMark;
    var readableHwm = options.readableHighWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    if (hwm || hwm === 0) this.highWaterMark = hwm;
    else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;
    else this.highWaterMark = defaultHwm;
    // cast to ints.
    this.highWaterMark = Math.floor(this.highWaterMark);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = (__webpack_require__(84262)/* .StringDecoder */ .s);
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || __webpack_require__(22613);
    if (!(this instanceof Readable)) return new Readable(options);
    this._readableState = new ReadableState(options, this);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, "destroyed", {
    get: function() {
        if (this._readableState === undefined) {
            return false;
        }
        return this._readableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    this.push(null);
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = "";
            }
            skipChunkCheck = true;
        }
    } else {
        skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
            stream.emit("error", er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
                if (state.endEmitted) stream.emit("error", new Error("stream.unshift() after end event"));
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) {
                stream.emit("error", new Error("stream.push() after EOF"));
            } else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else {
                    addChunk(stream, state, chunk, false);
                }
            }
        } else if (!addToFront) {
            state.reading = false;
        }
    }
    return needMoreData(state);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit("data", chunk);
        stream.read(0);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
    }
    return er;
}
// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = (__webpack_require__(84262)/* .StringDecoder */ .s);
    this._readableState.decoder = new StringDecoder(enc);
    this._readableState.encoding = enc;
    return this;
};
// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
        n = MAX_HWM;
    } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug("need readable", doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
    } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = true;
        n = 0;
    } else {
        state.length -= n;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
};
function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    // emit 'readable' now to make sure it gets picked up.
    emitReadable(stream);
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync) pna.nextTick(emitReadable_, stream);
        else emitReadable_(stream);
    }
}
function emitReadable_(stream) {
    debug("emit readable");
    stream.emit("readable");
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    var len = state.length;
    while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark){
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
        else len = state.length;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    this.emit("error", new Error("_read() is not implemented"));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) pna.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug("onend");
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug("cleanup");
        // cleanup event handlers once the pipe is broken
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    // If the user pushes more data while we're writing to dest then we'll end up
    // in ondata again. However, we only want to increase awaitDrain once because
    // dest will only emit one 'drain' event for the multiple writes.
    // => Introduce a guard on increasing awaitDrain.
    var increasedAwaitDrain = false;
    src.on("data", ondata);
    function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
                increasedAwaitDrain = true;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) dest.emit("error", er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, "error", onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit("pipe", src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug("pipe resume");
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++){
            dests[i].emit("unpipe", this, {
                hasUnpiped: false
            });
        }
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    if (ev === "data") {
        // Start flowing on next tick if stream isn't explicitly paused
        if (this._readableState.flowing !== false) this.resume();
    } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.emittedReadable = false;
            if (!state.reading) {
                pna.nextTick(nReadingNextTick, this);
            } else if (state.length) {
                emitReadable(this);
            }
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
function nReadingNextTick(self1) {
    debug("readable nexttick read 0");
    self1.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
    }
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    if (!state.reading) {
        debug("resume read 0");
        stream.read(0);
    }
    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (false !== this._readableState.flowing) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
    }
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while(state.flowing && stream.read() !== null){}
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream){
        if (this[i] === undefined && typeof stream[i] === "function") {
            this[i] = function(method) {
                return function() {
                    return stream[method].apply(stream, arguments);
                };
            }(i);
        }
    }
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++){
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    }
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._readableState.highWaterMark;
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.head.data;
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else {
        // read part of list
        ret = fromListPartial(n, state.buffer, state.decoder);
    }
    return ret;
}
// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
        // slice is the same for buffers and strings
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
        // first chunk is a perfect match
        ret = list.shift();
    } else {
        // result spans more than one buffer
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
}
// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while(p = p.next){
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;
        else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
            if (nb === str.length) {
                ++c;
                if (p.next) list.head = p.next;
                else list.head = list.tail = null;
            } else {
                list.head = p;
                p.data = str.slice(nb);
            }
            break;
        }
        ++c;
    }
    list.length -= c;
    return ret;
}
// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
    var ret = Buffer.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while(p = p.next){
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
            if (nb === buf.length) {
                ++c;
                if (p.next) list.head = p.next;
                else list.head = list.tail = null;
            } else {
                list.head = p;
                p.data = buf.slice(nb);
            }
            break;
        }
        ++c;
    }
    list.length -= c;
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    // If we get here before consuming all the bytes, then that is a
    // bug in node.  Should never happen.
    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
    }
}
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}


/***/ }),

/***/ 95660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;
var Duplex = __webpack_require__(22613);
/*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ util.inherits(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (!cb) {
        return this.emit("error", new Error("write callback called multiple times"));
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
    }
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on("prefinish", prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === "function") {
        this._flush(function(er, data) {
            done(_this, er, data);
        });
    } else {
        done(this, null, null);
    }
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    throw new Error("_transform() is not implemented");
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = true;
    }
};
Transform.prototype._destroy = function(err, cb) {
    var _this2 = this;
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
    });
};
function done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null) stream.push(data);
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (stream._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return stream.push(null);
}


/***/ }),

/***/ 79466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

/*<replacement>*/ var pna = __webpack_require__(96567);
/*</replacement>*/ module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var asyncWrite =  true && [
    "v0.10",
    "v0.9."
].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var util = Object.create(__webpack_require__(53727));
util.inherits = __webpack_require__(72001);
/*</replacement>*/ /*<replacement>*/ var internalUtil = {
    deprecate: __webpack_require__(59966)
};
/*</replacement>*/ /*<replacement>*/ var Stream = __webpack_require__(86815);
/*</replacement>*/ /*<replacement>*/ var Buffer = (__webpack_require__(32557).Buffer);
var OurUint8Array = (typeof global !== "undefined" ? global :  false ? 0 : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/ var destroyImpl = __webpack_require__(48994);
util.inherits(Writable, Stream);
function nop() {}
function WritableState(options, stream) {
    Duplex = Duplex || __webpack_require__(22613);
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    var isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    var hwm = options.highWaterMark;
    var writableHwm = options.writableHighWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    if (hwm || hwm === 0) this.highWaterMark = hwm;
    else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;
    else this.highWaterMark = defaultHwm;
    // cast to ints.
    this.highWaterMark = Math.floor(this.highWaterMark);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer " + "instead.", "DEP0003")
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else {
    realHasInstance = function(object) {
        return object instanceof this;
    };
}
function Writable(options) {
    Duplex = Duplex || __webpack_require__(22613);
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
    }
    this._writableState = new WritableState(options, this);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
};
function writeAfterEnd(stream, cb) {
    var er = new Error("write after end");
    // TODO: defer error events consistently everywhere, not just the cb
    stream.emit("error", er);
    pna.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    if (chunk === null) {
        er = new TypeError("May not write null values to stream");
    } else if (typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
    }
    if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
    }
    return valid;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== "function") cb = nop;
    if (state.ended) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    var state = this._writableState;
    state.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer.from(chunk, encoding);
    }
    return chunk;
}
Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) {
            last.next = state.lastBufferedRequest;
        } else {
            state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
    } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        pna.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
        }
        if (sync) {
            /*<replacement>*/ asyncWrite(afterWrite, stream, state, finished, cb);
        /*</replacement>*/ } else {
            afterWrite(stream, state, finished, cb);
        }
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else {
            state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) {
                break;
            }
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new Error("_write() is not implemented"));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
};
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) {
            stream.emit("error", err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function") {
            state.pendingcb++;
            state.finalCalled = true;
            pna.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) pna.nextTick(cb);
        else stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, "destroyed", {
    get: function() {
        if (this._writableState === undefined) {
            return false;
        }
        return this._writableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) {
            return;
        }
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    this.end();
    cb(err);
};


/***/ }),

/***/ 4569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Buffer = (__webpack_require__(32557).Buffer);
var util = __webpack_require__(73837);
function copyBuffer(src, target, offset) {
    src.copy(target, offset);
}
module.exports = function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    BufferList.prototype.push = function push(v) {
        var entry = {
            data: v,
            next: null
        };
        if (this.length > 0) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
        ++this.length;
    };
    BufferList.prototype.unshift = function unshift(v) {
        var entry = {
            data: v,
            next: this.head
        };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
    };
    BufferList.prototype.shift = function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;
        else this.head = this.head.next;
        --this.length;
        return ret;
    };
    BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
    };
    BufferList.prototype.join = function join(s) {
        if (this.length === 0) return "";
        var p = this.head;
        var ret = "" + p.data;
        while(p = p.next){
            ret += s + p.data;
        }
        return ret;
    };
    BufferList.prototype.concat = function concat(n) {
        if (this.length === 0) return Buffer.alloc(0);
        var ret = Buffer.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while(p){
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
        }
        return ret;
    };
    return BufferList;
}();
if (util && util.inspect && util.inspect.custom) {
    module.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({
            length: this.length
        });
        return this.constructor.name + " " + obj;
    };
}


/***/ }),

/***/ 48994:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/*<replacement>*/ var pna = __webpack_require__(96567);
/*</replacement>*/ // undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) {
            cb(err);
        } else if (err) {
            if (!this._writableState) {
                pna.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                pna.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) {
        this._readableState.destroyed = true;
    }
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) {
        this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) {
                pna.nextTick(emitErrorNT, _this, err);
            } else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                pna.nextTick(emitErrorNT, _this, err);
            }
        } else if (cb) {
            cb(err);
        }
    });
    return this;
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit("error", err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy
};


/***/ }),

/***/ 86815:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(12781);


/***/ }),

/***/ 60168:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

var Stream = __webpack_require__(12781);
if (process.env.READABLE_STREAM === "disable" && Stream) {
    module.exports = Stream;
    exports = module.exports = Stream.Readable;
    exports.Readable = Stream.Readable;
    exports.Writable = Stream.Writable;
    exports.Duplex = Stream.Duplex;
    exports.Transform = Stream.Transform;
    exports.PassThrough = Stream.PassThrough;
    exports.Stream = Stream;
} else {
    exports = module.exports = __webpack_require__(63459);
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = __webpack_require__(79466);
    exports.Duplex = __webpack_require__(22613);
    exports.Transform = __webpack_require__(95660);
    exports.PassThrough = __webpack_require__(27172);
}


/***/ }),

/***/ 84262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

/*<replacement>*/ var Buffer = (__webpack_require__(32557).Buffer);
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch(encoding && encoding.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while(true){
        switch(enc){
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return enc;
            default:
                if (retried) return; // undefined
                enc = ("" + enc).toLowerCase();
                retried = true;
        }
    }
}
;
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.s = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else {
        i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return "�";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return "�";
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "�";
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
    } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}


/***/ }),

/***/ 91429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var Transform = (__webpack_require__(60168).Transform), inherits = (__webpack_require__(73837).inherits), xtend = __webpack_require__(42539);
function DestroyableTransform(opts) {
    Transform.call(this, opts);
    this._destroyed = false;
}
inherits(DestroyableTransform, Transform);
DestroyableTransform.prototype.destroy = function(err) {
    if (this._destroyed) return;
    this._destroyed = true;
    var self = this;
    process.nextTick(function() {
        if (err) self.emit("error", err);
        self.emit("close");
    });
};
// a noop _transform function
function noop(chunk, enc, callback) {
    callback(null, chunk);
}
// create a new export function, used by both the main export and
// the .ctor export, contains common logic for dealing with arguments
function through2(construct) {
    return function(options, transform, flush) {
        if (typeof options == "function") {
            flush = transform;
            transform = options;
            options = {};
        }
        if (typeof transform != "function") transform = noop;
        if (typeof flush != "function") flush = null;
        return construct(options, transform, flush);
    };
}
// main export, just make me a transform stream!
module.exports = through2(function(options, transform, flush) {
    var t2 = new DestroyableTransform(options);
    t2._transform = transform;
    if (flush) t2._flush = flush;
    return t2;
});
// make me a reusable prototype that I can `new`, or implicitly `new`
// with a constructor call
module.exports.ctor = through2(function(options, transform, flush) {
    function Through2(override) {
        if (!(this instanceof Through2)) return new Through2(override);
        this.options = xtend(options, override);
        DestroyableTransform.call(this, this.options);
    }
    inherits(Through2, DestroyableTransform);
    Through2.prototype._transform = transform;
    if (flush) Through2.prototype._flush = flush;
    return Through2;
});
module.exports.obj = through2(function(options, transform, flush) {
    var t2 = new DestroyableTransform(xtend({
        objectMode: true,
        highWaterMark: 16
    }, options));
    t2._transform = transform;
    if (flush) t2._flush = flush;
    return t2;
});


/***/ }),

/***/ 11394:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var net = __webpack_require__(41808), tls = __webpack_require__(24404), http = __webpack_require__(13685), https = __webpack_require__(95687), events = __webpack_require__(82361), assert = __webpack_require__(39491), util = __webpack_require__(73837), Buffer = (__webpack_require__(50593).Buffer);
exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;
function httpOverHttp(options) {
    var agent = new TunnelingAgent(options);
    agent.request = http.request;
    return agent;
}
function httpsOverHttp(options) {
    var agent = new TunnelingAgent(options);
    agent.request = http.request;
    agent.createSocket = createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function httpOverHttps(options) {
    var agent = new TunnelingAgent(options);
    agent.request = https.request;
    return agent;
}
function httpsOverHttps(options) {
    var agent = new TunnelingAgent(options);
    agent.request = https.request;
    agent.createSocket = createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function TunnelingAgent(options) {
    var self = this;
    self.options = options || {};
    self.proxyOptions = self.options.proxy || {};
    self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
    self.requests = [];
    self.sockets = [];
    self.on("free", function onFree(socket, host, port) {
        for(var i = 0, len = self.requests.length; i < len; ++i){
            var pending = self.requests[i];
            if (pending.host === host && pending.port === port) {
                // Detect the request to connect same origin server,
                // reuse the connection.
                self.requests.splice(i, 1);
                pending.request.onSocket(socket);
                return;
            }
        }
        socket.destroy();
        self.removeSocket(socket);
    });
}
util.inherits(TunnelingAgent, events.EventEmitter);
TunnelingAgent.prototype.addRequest = function addRequest(req, options) {
    var self = this;
    // Legacy API: addRequest(req, host, port, path)
    if (typeof options === "string") {
        options = {
            host: options,
            port: arguments[2],
            path: arguments[3]
        };
    }
    if (self.sockets.length >= this.maxSockets) {
        // We are over limit so we'll add it to the queue.
        self.requests.push({
            host: options.host,
            port: options.port,
            request: req
        });
        return;
    }
    // If we are under maxSockets create a new one.
    self.createConnection({
        host: options.host,
        port: options.port,
        request: req
    });
};
TunnelingAgent.prototype.createConnection = function createConnection(pending) {
    var self = this;
    self.createSocket(pending, function(socket) {
        socket.on("free", onFree);
        socket.on("close", onCloseOrRemove);
        socket.on("agentRemove", onCloseOrRemove);
        pending.request.onSocket(socket);
        function onFree() {
            self.emit("free", socket, pending.host, pending.port);
        }
        function onCloseOrRemove(err) {
            self.removeSocket(socket);
            socket.removeListener("free", onFree);
            socket.removeListener("close", onCloseOrRemove);
            socket.removeListener("agentRemove", onCloseOrRemove);
        }
    });
};
TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
    var self = this;
    var placeholder = {};
    self.sockets.push(placeholder);
    var connectOptions = mergeOptions({}, self.proxyOptions, {
        method: "CONNECT",
        path: options.host + ":" + options.port,
        agent: false
    });
    if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {};
        connectOptions.headers["Proxy-Authorization"] = "Basic " + Buffer.from(connectOptions.proxyAuth).toString("base64");
    }
    debug("making CONNECT request");
    var connectReq = self.request(connectOptions);
    connectReq.useChunkedEncodingByDefault = false // for v0.6
    ;
    connectReq.once("response", onResponse) // for v0.6
    ;
    connectReq.once("upgrade", onUpgrade) // for v0.6
    ;
    connectReq.once("connect", onConnect) // for v0.7 or later
    ;
    connectReq.once("error", onError);
    connectReq.end();
    function onResponse(res) {
        // Very hacky. This is necessary to avoid http-parser leaks.
        res.upgrade = true;
    }
    function onUpgrade(res, socket, head) {
        // Hacky.
        process.nextTick(function() {
            onConnect(res, socket, head);
        });
    }
    function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode === 200) {
            assert.equal(head.length, 0);
            debug("tunneling connection has established");
            self.sockets[self.sockets.indexOf(placeholder)] = socket;
            cb(socket);
        } else {
            debug("tunneling socket could not be established, statusCode=%d", res.statusCode);
            var error = new Error("tunneling socket could not be established, " + "statusCode=" + res.statusCode);
            error.code = "ECONNRESET";
            options.request.emit("error", error);
            self.removeSocket(placeholder);
        }
    }
    function onError(cause) {
        connectReq.removeAllListeners();
        debug("tunneling socket could not be established, cause=%s\n", cause.message, cause.stack);
        var error = new Error("tunneling socket could not be established, " + "cause=" + cause.message);
        error.code = "ECONNRESET";
        options.request.emit("error", error);
        self.removeSocket(placeholder);
    }
};
TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
    var pos = this.sockets.indexOf(socket);
    if (pos === -1) return;
    this.sockets.splice(pos, 1);
    var pending = this.requests.shift();
    if (pending) {
        // If we have pending requests and a socket gets closed a new one
        // needs to be created to take over in the pool for the one that closed.
        this.createConnection(pending);
    }
};
function createSecureSocket(options, cb) {
    var self = this;
    TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        // 0 is dummy port for v0.6
        var secureSocket = tls.connect(0, mergeOptions({}, self.options, {
            servername: options.host,
            socket: socket
        }));
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
    });
}
function mergeOptions(target) {
    for(var i = 1, len = arguments.length; i < len; ++i){
        var overrides = arguments[i];
        if (typeof overrides === "object") {
            var keys = Object.keys(overrides);
            for(var j = 0, keyLen = keys.length; j < keyLen; ++j){
                var k = keys[j];
                if (overrides[k] !== undefined) {
                    target[k] = overrides[k];
                }
            }
        }
    }
    return target;
}
var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
    debug = function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === "string") {
            args[0] = "TUNNEL: " + args[0];
        } else {
            args.unshift("TUNNEL:");
        }
        console.error.apply(console, args);
    };
} else {
    debug = function() {};
}
exports.debug = debug // for test
;


/***/ }),

/***/ 50593:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ 
var buffer = __webpack_require__(14300);
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
    }
    return buffer.SlowBuffer(size);
};


/***/ }),

/***/ 59966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */ 
module.exports = __webpack_require__(73837).deprecate;


/***/ }),

/***/ 42539:
/***/ ((module) => {

"use strict";

module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend() {
    var target = {};
    for(var i = 0; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}


/***/ }),

/***/ 8217:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var middleware$1 = __webpack_require__(78332);
var getIt = __webpack_require__(92608);
var rxjs = __webpack_require__(5032);
var operators = __webpack_require__(55991);
var name = "@sanity/client";
var version = "6.1.1";
const middleware = [
    middleware$1.debug({
        verbose: true,
        namespace: "sanity:client"
    }),
    middleware$1.headers({
        "User-Agent": "".concat(name, " ").concat(version)
    })
];
const MAX_ITEMS_IN_ERROR_MESSAGE = 5;
class ClientError extends Error {
    constructor(res){
        const props = extractErrorProps(res);
        super(props.message);
        this.statusCode = 400;
        Object.assign(this, props);
    }
}
class ServerError extends Error {
    constructor(res){
        const props = extractErrorProps(res);
        super(props.message);
        this.statusCode = 500;
        Object.assign(this, props);
    }
}
function extractErrorProps(res) {
    const body = res.body;
    const props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: stringifyBody(body, res),
        message: "",
        details: void 0
    };
    if (body.error && body.message) {
        props.message = "".concat(body.error, " - ").concat(body.message);
        return props;
    }
    if (isMutationError(body)) {
        const allItems = body.error.items || [];
        const items = allItems.slice(0, MAX_ITEMS_IN_ERROR_MESSAGE).map((item)=>{
            var _a;
            return (_a = item.error) == null ? void 0 : _a.description;
        }).filter(Boolean);
        let itemsStr = items.length ? ":\n- ".concat(items.join("\n- ")) : "";
        if (allItems.length > MAX_ITEMS_IN_ERROR_MESSAGE) {
            itemsStr += "\n...and ".concat(allItems.length - MAX_ITEMS_IN_ERROR_MESSAGE, " more");
        }
        props.message = "".concat(body.error.description).concat(itemsStr);
        props.details = body.error;
        return props;
    }
    if (body.error && body.error.description) {
        props.message = body.error.description;
        props.details = body.error;
        return props;
    }
    props.message = body.error || body.message || httpErrorMessage(res);
    return props;
}
function isMutationError(body) {
    return isPlainObject(body) && isPlainObject(body.error) && body.error.type === "mutationError" && typeof body.error.description === "string";
}
function isPlainObject(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}
function httpErrorMessage(res) {
    const statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
    return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
}
function stringifyBody(body, res) {
    const contentType = (res.headers["content-type"] || "").toLowerCase();
    const isJson = contentType.indexOf("application/json") !== -1;
    return isJson ? JSON.stringify(body, null, 2) : body;
}
const httpError = {
    onResponse: (res)=>{
        if (res.statusCode >= 500) {
            throw new ServerError(res);
        } else if (res.statusCode >= 400) {
            throw new ClientError(res);
        }
        return res;
    }
};
const printWarnings = {
    onResponse: (res)=>{
        const warn = res.headers["x-sanity-warning"];
        const warnings = Array.isArray(warn) ? warn : [
            warn
        ];
        warnings.filter(Boolean).forEach((msg)=>console.warn(msg));
        return res;
    }
};
function defineHttpRequest(envMiddleware, _ref) {
    let { maxRetries =5 , retryDelay  } = _ref;
    const request = getIt.getIt([
        maxRetries > 0 ? middleware$1.retry({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            retryDelay,
            // This option is typed incorrectly in get-it.
            maxRetries,
            shouldRetry
        }) : {},
        ...envMiddleware,
        printWarnings,
        middleware$1.jsonRequest(),
        middleware$1.jsonResponse(),
        middleware$1.progress(),
        httpError,
        middleware$1.observable({
            implementation: rxjs.Observable
        })
    ]);
    function httpRequest(options) {
        let requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : request;
        return requester({
            maxRedirects: 0,
            ...options
        });
    }
    httpRequest.defaultRequester = request;
    return httpRequest;
}
function shouldRetry(err, attempt, options) {
    const isSafe = options.method === "GET" || options.method === "HEAD";
    const uri = options.uri || options.url;
    const isQuery = uri.startsWith("/data/query");
    const isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
    if ((isSafe || isQuery) && isRetriableResponse) return true;
    return middleware$1.retry.shouldRetry(err, attempt, options);
}
const projectHeader = "X-Sanity-Project-ID";
function requestOptions(config) {
    let overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const headers = {};
    const token = overrides.token || config.token;
    if (token) {
        headers.Authorization = "Bearer ".concat(token);
    }
    if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
        headers[projectHeader] = config.projectId;
    }
    const withCredentials = Boolean(typeof overrides.withCredentials === "undefined" ? config.token || config.withCredentials : overrides.withCredentials);
    const timeout = typeof overrides.timeout === "undefined" ? config.timeout : overrides.timeout;
    return Object.assign({}, overrides, {
        headers: Object.assign({}, headers, overrides.headers || {}),
        timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
        proxy: overrides.proxy || config.proxy,
        json: true,
        withCredentials
    });
}
function getSelection(sel) {
    if (typeof sel === "string" || Array.isArray(sel)) {
        return {
            id: sel
        };
    }
    if (typeof sel === "object" && sel !== null && "query" in sel && typeof sel.query === "string") {
        return "params" in sel && typeof sel.params === "object" && sel.params !== null ? {
            query: sel.query,
            params: sel.params
        } : {
            query: sel.query
        };
    }
    const selectionOpts = [
        "* Document ID (<docId>)",
        "* Array of document IDs",
        "* Object containing `query`"
    ].join("\n");
    throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
}
const VALID_ASSET_TYPES = [
    "image",
    "file"
];
const VALID_INSERT_LOCATIONS = [
    "before",
    "after",
    "replace"
];
const dataset = (name)=>{
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) {
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
    }
};
const projectId = (id)=>{
    if (!/^[-a-z0-9]+$/i.test(id)) {
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
    }
};
const validateAssetType = (type)=>{
    if (VALID_ASSET_TYPES.indexOf(type) === -1) {
        throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
    }
};
const validateObject = (op, val)=>{
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
        throw new Error("".concat(op, "() takes an object of properties"));
    }
};
const validateDocumentId = (op, id)=>{
    if (typeof id !== "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes("..")) {
        throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
    }
};
const requireDocumentId = (op, doc)=>{
    if (!doc._id) {
        throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
    }
    validateDocumentId(op, doc._id);
};
const validateInsert = (at, selector, items)=>{
    const signature = "insert(at, selector, items)";
    if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        const valid = VALID_INSERT_LOCATIONS.map((loc)=>'"'.concat(loc, '"')).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
    }
    if (typeof selector !== "string") {
        throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
    }
    if (!Array.isArray(items)) {
        throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
    }
};
const hasDataset = (config)=>{
    if (!config.dataset) {
        throw new Error("`dataset` must be provided to perform queries");
    }
    return config.dataset || "";
};
const requestTag = (tag)=>{
    if (typeof tag !== "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) {
        throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
    }
    return tag;
};
const encodeQueryString = (_ref2)=>{
    let { query , params ={} , options ={}  } = _ref2;
    const searchParams = new URLSearchParams();
    const { tag , ...opts } = options;
    if (tag) searchParams.set("tag", tag);
    searchParams.set("query", query);
    for (const [key, value] of Object.entries(params)){
        searchParams.set("$".concat(key), JSON.stringify(value));
    }
    for (const [key, value] of Object.entries(opts)){
        if (value) searchParams.set(key, "".concat(value));
    }
    return "?".concat(searchParams);
};
var __accessCheck$6 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$6 = (obj, member, getter)=>{
    __accessCheck$6(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$6 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$6 = (obj, member, value, setter)=>{
    __accessCheck$6(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$5, _client2$5;
class BasePatch {
    constructor(selection){
        let operations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.selection = selection;
        this.operations = operations;
    }
    /**
   * Sets the given attributes to the document. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */ set(attrs) {
        return this._assign("set", attrs);
    }
    /**
   * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */ setIfMissing(attrs) {
        return this._assign("setIfMissing", attrs);
    }
    /**
   * Performs a "diff-match-patch" operation on the string attributes provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
   */ diffMatchPatch(attrs) {
        validateObject("diffMatchPatch", attrs);
        return this._assign("diffMatchPatch", attrs);
    }
    /**
   * Unsets the attribute paths provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attribute paths to unset.
   */ unset(attrs) {
        if (!Array.isArray(attrs)) {
            throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        }
        this.operations = Object.assign({}, this.operations, {
            unset: attrs
        });
        return this;
    }
    /**
   * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
   */ inc(attrs) {
        return this._assign("inc", attrs);
    }
    /**
   * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
   */ dec(attrs) {
        return this._assign("dec", attrs);
    }
    /**
   * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
   *
   * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
   * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
   * @param items - Array of items to insert/replace
   */ insert(at, selector, items) {
        validateInsert(at, selector, items);
        return this._assign("insert", {
            [at]: selector,
            items
        });
    }
    /**
   * Append the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
   * @param items - Array of items to append to the array
   */ append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
    }
    /**
   * Prepend the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
   * @param items - Array of items to prepend to the array
   */ prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
    }
    /**
   * Change the contents of an array by removing existing elements and/or adding new elements.
   *
   * @param selector - Attribute or JSONPath expression for array
   * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
   * @param deleteCount - An integer indicating the number of old array elements to remove.
   * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
   */ splice(selector, start, deleteCount, items) {
        const delAll = typeof deleteCount === "undefined" || deleteCount === -1;
        const startIndex = start < 0 ? start - 1 : start;
        const delCount = delAll ? -1 : Math.max(0, start + deleteCount);
        const delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
        const rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
    }
    /**
   * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
   *
   * @param rev - Revision to lock the patch to
   */ ifRevisionId(rev) {
        this.operations.ifRevisionID = rev;
        return this;
    }
    /**
   * Return a plain JSON representation of the patch
   */ serialize() {
        return {
            ...getSelection(this.selection),
            ...this.operations
        };
    }
    /**
   * Return a plain JSON representation of the patch
   */ toJSON() {
        return this.serialize();
    }
    /**
   * Clears the patch of all operations
   */ reset() {
        this.operations = {};
        return this;
    }
    _assign(op, props) {
        let merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        validateObject(op, props);
        this.operations = Object.assign({}, this.operations, {
            [op]: Object.assign({}, merge && this.operations[op] || {}, props)
        });
        return this;
    }
    _set(op, props) {
        return this._assign(op, props, false);
    }
}
const _ObservablePatch = class extends BasePatch {
    constructor(selection, operations, client){
        super(selection, operations);
        __privateAdd$6(this, _client$5, void 0);
        __privateSet$6(this, _client$5, client);
    }
    /**
   * Clones the patch
   */ clone() {
        return new _ObservablePatch(this.selection, {
            ...this.operations
        }, __privateGet$6(this, _client$5));
    }
    commit(options) {
        if (!__privateGet$6(this, _client$5)) {
            throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        const returnFirst = typeof this.selection === "string";
        const opts = Object.assign({
            returnFirst,
            returnDocuments: true
        }, options);
        return __privateGet$6(this, _client$5).mutate({
            patch: this.serialize()
        }, opts);
    }
};
let ObservablePatch = _ObservablePatch;
_client$5 = new WeakMap();
const _Patch = class extends BasePatch {
    constructor(selection, operations, client){
        super(selection, operations);
        __privateAdd$6(this, _client2$5, void 0);
        __privateSet$6(this, _client2$5, client);
    }
    /**
   * Clones the patch
   */ clone() {
        return new _Patch(this.selection, {
            ...this.operations
        }, __privateGet$6(this, _client2$5));
    }
    commit(options) {
        if (!__privateGet$6(this, _client2$5)) {
            throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        const returnFirst = typeof this.selection === "string";
        const opts = Object.assign({
            returnFirst,
            returnDocuments: true
        }, options);
        return __privateGet$6(this, _client2$5).mutate({
            patch: this.serialize()
        }, opts);
    }
};
let Patch = _Patch;
_client2$5 = new WeakMap();
var __accessCheck$5 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$5 = (obj, member, getter)=>{
    __accessCheck$5(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$5 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$5 = (obj, member, value, setter)=>{
    __accessCheck$5(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$4, _client2$4;
const defaultMutateOptions = {
    returnDocuments: false
};
class BaseTransaction {
    constructor(){
        let operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let transactionId = arguments.length > 1 ? arguments[1] : undefined;
        this.operations = operations;
        this.trxId = transactionId;
    }
    /**
   * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create. Requires a `_type` property.
   */ create(doc) {
        validateObject("create", doc);
        return this._add({
            create: doc
        });
    }
    /**
   * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
   */ createIfNotExists(doc) {
        const op = "createIfNotExists";
        validateObject(op, doc);
        requireDocumentId(op, doc);
        return this._add({
            [op]: doc
        });
    }
    /**
   * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
   */ createOrReplace(doc) {
        const op = "createOrReplace";
        validateObject(op, doc);
        requireDocumentId(op, doc);
        return this._add({
            [op]: doc
        });
    }
    /**
   * Deletes the document with the given document ID
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param documentId - Document ID to delete
   */ delete(documentId) {
        validateDocumentId("delete", documentId);
        return this._add({
            delete: {
                id: documentId
            }
        });
    }
    transactionId(id) {
        if (!id) {
            return this.trxId;
        }
        this.trxId = id;
        return this;
    }
    /**
   * Return a plain JSON representation of the transaction
   */ serialize() {
        return [
            ...this.operations
        ];
    }
    /**
   * Return a plain JSON representation of the transaction
   */ toJSON() {
        return this.serialize();
    }
    /**
   * Clears the transaction of all operations
   */ reset() {
        this.operations = [];
        return this;
    }
    _add(mut) {
        this.operations.push(mut);
        return this;
    }
}
const _Transaction = class extends BaseTransaction {
    constructor(operations, client, transactionId){
        super(operations, transactionId);
        __privateAdd$5(this, _client$4, void 0);
        __privateSet$5(this, _client$4, client);
    }
    /**
   * Clones the transaction
   */ clone() {
        return new _Transaction([
            ...this.operations
        ], __privateGet$5(this, _client$4), this.trxId);
    }
    commit(options) {
        if (!__privateGet$5(this, _client$4)) {
            throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return __privateGet$5(this, _client$4).mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
    }
    patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps === "function";
        const isPatch = typeof patchOrDocumentId !== "string" && patchOrDocumentId instanceof Patch;
        if (isPatch) {
            return this._add({
                patch: patchOrDocumentId.serialize()
            });
        }
        if (isBuilder) {
            const patch = patchOps(new Patch(patchOrDocumentId, {}, __privateGet$5(this, _client$4)));
            if (!(patch instanceof Patch)) {
                throw new Error("function passed to `patch()` must return the patch");
            }
            return this._add({
                patch: patch.serialize()
            });
        }
        return this._add({
            patch: {
                id: patchOrDocumentId,
                ...patchOps
            }
        });
    }
};
let Transaction = _Transaction;
_client$4 = new WeakMap();
const _ObservableTransaction = class extends BaseTransaction {
    constructor(operations, client, transactionId){
        super(operations, transactionId);
        __privateAdd$5(this, _client2$4, void 0);
        __privateSet$5(this, _client2$4, client);
    }
    /**
   * Clones the transaction
   */ clone() {
        return new _ObservableTransaction([
            ...this.operations
        ], __privateGet$5(this, _client2$4), this.trxId);
    }
    commit(options) {
        if (!__privateGet$5(this, _client2$4)) {
            throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return __privateGet$5(this, _client2$4).mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
    }
    patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps === "function";
        const isPatch = typeof patchOrDocumentId !== "string" && patchOrDocumentId instanceof ObservablePatch;
        if (isPatch) {
            return this._add({
                patch: patchOrDocumentId.serialize()
            });
        }
        if (isBuilder) {
            const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, __privateGet$5(this, _client2$4)));
            if (!(patch instanceof ObservablePatch)) {
                throw new Error("function passed to `patch()` must return the patch");
            }
            return this._add({
                patch: patch.serialize()
            });
        }
        return this._add({
            patch: {
                id: patchOrDocumentId,
                ...patchOps
            }
        });
    }
};
let ObservableTransaction = _ObservableTransaction;
_client2$4 = new WeakMap();
const excludeFalsey = (param, defValue)=>{
    const value = typeof param === "undefined" ? defValue : param;
    return param === false ? void 0 : value;
};
const getMutationQuery = function() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
        dryRun: options.dryRun,
        returnIds: true,
        returnDocuments: excludeFalsey(options.returnDocuments, true),
        visibility: options.visibility || "sync",
        autoGenerateArrayKeys: options.autoGenerateArrayKeys,
        skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
    };
};
const isResponse = (event)=>event.type === "response";
const getBody = (event)=>event.body;
const indexBy = (docs, attr)=>docs.reduce((indexed, doc)=>{
        indexed[attr(doc)] = doc;
        return indexed;
    }, /* @__PURE__ */ Object.create(null));
const getQuerySizeLimit = 11264;
function _fetch(client, httpRequest, query, params) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const mapResponse = options.filterResponse === false ? (res)=>res : (res)=>res.result;
    return _dataRequest(client, httpRequest, "query", {
        query,
        params
    }, options).pipe(operators.map(mapResponse));
}
function _getDocument(client, httpRequest, id) {
    let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const options = {
        uri: _getDataUrl(client, "doc", id),
        json: true,
        tag: opts.tag
    };
    return _requestObservable(client, httpRequest, options).pipe(operators.filter(isResponse), operators.map((event)=>event.body.documents && event.body.documents[0]));
}
function _getDocuments(client, httpRequest, ids) {
    let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const options = {
        uri: _getDataUrl(client, "doc", ids.join(",")),
        json: true,
        tag: opts.tag
    };
    return _requestObservable(client, httpRequest, options).pipe(operators.filter(isResponse), operators.map((event)=>{
        const indexed = indexBy(event.body.documents || [], (doc)=>doc._id);
        return ids.map((id)=>indexed[id] || null);
    }));
}
function _createIfNotExists(client, httpRequest, doc, options) {
    requireDocumentId("createIfNotExists", doc);
    return _create(client, httpRequest, doc, "createIfNotExists", options);
}
function _createOrReplace(client, httpRequest, doc, options) {
    requireDocumentId("createOrReplace", doc);
    return _create(client, httpRequest, doc, "createOrReplace", options);
}
function _delete(client, httpRequest, selection, options) {
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: [
            {
                delete: getSelection(selection)
            }
        ]
    }, options);
}
function _mutate(client, httpRequest, mutations, options) {
    let mut;
    if (mutations instanceof Patch || mutations instanceof ObservablePatch) {
        mut = {
            patch: mutations.serialize()
        };
    } else if (mutations instanceof Transaction || mutations instanceof ObservableTransaction) {
        mut = mutations.serialize();
    } else {
        mut = mutations;
    }
    const muts = Array.isArray(mut) ? mut : [
        mut
    ];
    const transactionId = options && options.transactionId || void 0;
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: muts,
        transactionId
    }, options);
}
function _dataRequest(client, httpRequest, endpoint, body) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const isMutation = endpoint === "mutate";
    const isQuery = endpoint === "query";
    const strQuery = isMutation ? "" : encodeQueryString(body);
    const useGet = !isMutation && strQuery.length < getQuerySizeLimit;
    const stringQuery = useGet ? strQuery : "";
    const returnFirst = options.returnFirst;
    const { timeout , token , tag , headers  } = options;
    const uri = _getDataUrl(client, endpoint, stringQuery);
    const reqOptions = {
        method: useGet ? "GET" : "POST",
        uri,
        json: true,
        body: useGet ? void 0 : body,
        query: isMutation && getMutationQuery(options),
        timeout,
        headers,
        token,
        tag,
        canUseCdn: isQuery,
        signal: options.signal
    };
    return _requestObservable(client, httpRequest, reqOptions).pipe(operators.filter(isResponse), operators.map(getBody), operators.map((res)=>{
        if (!isMutation) {
            return res;
        }
        const results = res.results || [];
        if (options.returnDocuments) {
            return returnFirst ? results[0] && results[0].document : results.map((mut)=>mut.document);
        }
        const key = returnFirst ? "documentId" : "documentIds";
        const ids = returnFirst ? results[0] && results[0].id : results.map((mut)=>mut.id);
        return {
            transactionId: res.transactionId,
            results,
            [key]: ids
        };
    }));
}
function _create(client, httpRequest, doc, op) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const mutation = {
        [op]: doc
    };
    const opts = Object.assign({
        returnFirst: true,
        returnDocuments: true
    }, options);
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: [
            mutation
        ]
    }, opts);
}
function _requestObservable(client, httpRequest, options) {
    const uri = options.url || options.uri;
    const config = client.config();
    const canUseCdn = typeof options.canUseCdn === "undefined" ? [
        "GET",
        "HEAD"
    ].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0 : options.canUseCdn;
    const useCdn = config.useCdn && canUseCdn;
    const tag = options.tag && config.requestTagPrefix ? [
        config.requestTagPrefix,
        options.tag
    ].join(".") : options.tag || config.requestTagPrefix;
    if (tag) {
        options.query = {
            tag: requestTag(tag),
            ...options.query
        };
    }
    if ([
        "GET",
        "HEAD"
    ].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/query/") === 0) {
        if (config.resultSourceMap) {
            options.query = {
                resultSourceMap: true,
                ...options.query
            };
        }
        if (typeof config.perspective === "string" && config.perspective !== "all") {
            options.query = {
                perspective: config.perspective,
                ...options.query
            };
        }
    }
    const reqOptions = requestOptions(config, Object.assign({}, options, {
        url: _getUrl(client, uri, useCdn)
    }));
    const request = new rxjs.Observable((subscriber)=>// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- the typings thinks it's optional because it's not required to specify it when calling createClient, but it's always defined in practice since SanityClient provides a default
        httpRequest(reqOptions, config.requester).subscribe(subscriber));
    return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
}
function _request(client, httpRequest, options) {
    const observable = _requestObservable(client, httpRequest, options).pipe(operators.filter((event)=>event.type === "response"), operators.map((event)=>event.body));
    return observable;
}
function _getDataUrl(client, operation, path) {
    const config = client.config();
    const catalog = hasDataset(config);
    const baseUri = "/".concat(operation, "/").concat(catalog);
    const uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
    return "/data".concat(uri).replace(/\/($|\?)/, "$1");
}
function _getUrl(client, uri) {
    let canUseCdn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const { url , cdnUrl  } = client.config();
    const base = canUseCdn ? cdnUrl : url;
    return "".concat(base, "/").concat(uri.replace(/^\//, ""));
}
function _withAbortSignal(signal) {
    return (input)=>{
        return new rxjs.Observable((observer)=>{
            const abort = ()=>observer.error(_createAbortError(signal));
            if (signal && signal.aborted) {
                abort();
                return;
            }
            const subscription = input.subscribe(observer);
            signal.addEventListener("abort", abort);
            return ()=>{
                signal.removeEventListener("abort", abort);
                subscription.unsubscribe();
            };
        });
    };
}
const isDomExceptionSupported = Boolean(globalThis.DOMException);
function _createAbortError(signal) {
    var _a, _b;
    if (isDomExceptionSupported) {
        return new DOMException((_a = signal == null ? void 0 : signal.reason) != null ? _a : "The operation was aborted.", "AbortError");
    }
    const error = new Error((_b = signal == null ? void 0 : signal.reason) != null ? _b : "The operation was aborted.");
    error.name = "AbortError";
    return error;
}
var __accessCheck$4 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$4 = (obj, member, getter)=>{
    __accessCheck$4(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$4 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$4 = (obj, member, value, setter)=>{
    __accessCheck$4(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$3, _httpRequest$4, _client2$3, _httpRequest2$4;
class ObservableAssetsClient {
    constructor(client, httpRequest){
        __privateAdd$4(this, _client$3, void 0);
        __privateAdd$4(this, _httpRequest$4, void 0);
        __privateSet$4(this, _client$3, client);
        __privateSet$4(this, _httpRequest$4, httpRequest);
    }
    upload(assetType, body, options) {
        return _upload(__privateGet$4(this, _client$3), __privateGet$4(this, _httpRequest$4), assetType, body, options);
    }
}
_client$3 = new WeakMap();
_httpRequest$4 = new WeakMap();
class AssetsClient {
    constructor(client, httpRequest){
        __privateAdd$4(this, _client2$3, void 0);
        __privateAdd$4(this, _httpRequest2$4, void 0);
        __privateSet$4(this, _client2$3, client);
        __privateSet$4(this, _httpRequest2$4, httpRequest);
    }
    upload(assetType, body, options) {
        const observable = _upload(__privateGet$4(this, _client2$3), __privateGet$4(this, _httpRequest2$4), assetType, body, options);
        return rxjs.lastValueFrom(observable.pipe(operators.filter((event)=>event.type === "response"), operators.map((event)=>event.body.document)));
    }
}
_client2$3 = new WeakMap();
_httpRequest2$4 = new WeakMap();
function _upload(client, httpRequest, assetType, body) {
    let opts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    validateAssetType(assetType);
    let meta = opts.extract || void 0;
    if (meta && !meta.length) {
        meta = [
            "none"
        ];
    }
    const dataset = hasDataset(client.config());
    const assetEndpoint = assetType === "image" ? "images" : "files";
    const options = optionsFromFile(opts, body);
    const { tag , label , title , description , creditLine , filename , source  } = options;
    const query = {
        label,
        title,
        description,
        filename,
        meta,
        creditLine
    };
    if (source) {
        query.sourceId = source.id;
        query.sourceName = source.name;
        query.sourceUrl = source.url;
    }
    return _requestObservable(client, httpRequest, {
        tag,
        method: "POST",
        timeout: options.timeout || 0,
        uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
        headers: options.contentType ? {
            "Content-Type": options.contentType
        } : {},
        query,
        body
    });
}
function optionsFromFile(opts, file) {
    if (typeof File === "undefined" || !(file instanceof File)) {
        return opts;
    }
    return Object.assign({
        filename: opts.preserveFilename === false ? void 0 : file.name,
        contentType: file.type
    }, opts);
}
const BASE_URL = "https://www.sanity.io/help/";
function generateHelpUrl(slug) {
    return BASE_URL + slug;
}
function once(fn) {
    let didCall = false;
    let returnValue;
    return function() {
        if (didCall) {
            return returnValue;
        }
        returnValue = fn(...arguments);
        didCall = true;
        return returnValue;
    };
}
const createWarningPrinter = (message)=>// eslint-disable-next-line no-console
    once(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return console.warn(message.join(" "), ...args);
    });
const printCdnWarning = createWarningPrinter([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]);
const printBrowserTokenWarning = createWarningPrinter([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")
]);
const printNoApiVersionSpecifiedWarning = createWarningPrinter([
    "Using the Sanity client without specifying an API version is deprecated.",
    "See ".concat(generateHelpUrl("js-client-api-version"))
]);
const printNoDefaultExport = createWarningPrinter([
    "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."
]);
const defaultCdnHost = "apicdn.sanity.io";
const defaultConfig = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: true
};
const LOCALHOSTS = [
    "localhost",
    "127.0.0.1",
    "0.0.0.0"
];
const isLocal = (host)=>LOCALHOSTS.indexOf(host) !== -1;
const validateApiVersion = function validateApiVersion2(apiVersion) {
    if (apiVersion === "1" || apiVersion === "X") {
        return;
    }
    const apiDate = new Date(apiVersion);
    const apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
    if (!apiVersionValid) {
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
    }
};
const initConfig = (config, prevConfig)=>{
    const specifiedConfig = Object.assign({}, prevConfig, config);
    if (!specifiedConfig.apiVersion) {
        printNoApiVersionSpecifiedWarning();
    }
    const newConfig = Object.assign({}, defaultConfig, specifiedConfig);
    const projectBased = newConfig.useProjectHostname;
    if (typeof Promise === "undefined") {
        const helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
    }
    if (projectBased && !newConfig.projectId) {
        throw new Error("Configuration must contain `projectId`");
    }
    const isBrowser =  false && 0;
    const isLocalhost = isBrowser && isLocal(window.location.hostname);
    if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
        printBrowserTokenWarning();
    } else if (typeof newConfig.useCdn === "undefined") {
        printCdnWarning();
    }
    if (projectBased) {
        projectId(newConfig.projectId);
    }
    if (newConfig.dataset) {
        dataset(newConfig.dataset);
    }
    if ("requestTagPrefix" in newConfig) {
        newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0;
    }
    newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
    newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
    newConfig.useCdn = newConfig.useCdn !== false && !newConfig.withCredentials;
    validateApiVersion(newConfig.apiVersion);
    const hostParts = newConfig.apiHost.split("://", 2);
    const protocol = hostParts[0];
    const host = hostParts[1];
    const cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
    if (newConfig.useProjectHostname) {
        newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
    } else {
        newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = newConfig.url;
    }
    return newConfig;
};
var defaults = (obj, defaults)=>Object.keys(defaults).concat(Object.keys(obj)).reduce((target, prop)=>{
        target[prop] = typeof obj[prop] === "undefined" ? defaults[prop] : obj[prop];
        return target;
    }, {});
const pick = (obj, props)=>props.reduce((selection, prop)=>{
        if (typeof obj[prop] === "undefined") {
            return selection;
        }
        selection[prop] = obj[prop];
        return selection;
    }, {});
const MAX_URL_LENGTH = 16e3 - 1200;
const possibleOptions = [
    "includePreviousRevision",
    "includeResult",
    "visibility",
    "effectFormat",
    "tag"
];
const defaultOptions = {
    includeResult: true
};
function _listen(query, params) {
    let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const { url , token , withCredentials , requestTagPrefix  } = this.config();
    const tag = opts.tag && requestTagPrefix ? [
        requestTagPrefix,
        opts.tag
    ].join(".") : opts.tag;
    const options = {
        ...defaults(opts, defaultOptions),
        tag
    };
    const listenOpts = pick(options, possibleOptions);
    const qs = encodeQueryString({
        query,
        params,
        options: {
            tag,
            ...listenOpts
        }
    });
    const uri = "".concat(url).concat(_getDataUrl(this, "listen", qs));
    if (uri.length > MAX_URL_LENGTH) {
        return new rxjs.Observable((observer)=>observer.error(new Error("Query too large for listener")));
    }
    const listenFor = options.events ? options.events : [
        "mutation"
    ];
    const shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
    const esOptions = {};
    if (token || withCredentials) {
        esOptions.withCredentials = true;
    }
    if (token) {
        esOptions.headers = {
            Authorization: "Bearer ".concat(token)
        };
    }
    return new rxjs.Observable((observer)=>{
        let es;
        getEventSource().then((eventSource)=>{
            es = eventSource;
        }).catch((reason)=>{
            observer.error(reason);
            stop();
        });
        let reconnectTimer;
        let stopped = false;
        function onError() {
            if (stopped) {
                return;
            }
            emitReconnect();
            if (stopped) {
                return;
            }
            if (es.readyState === es.CLOSED) {
                unsubscribe();
                clearTimeout(reconnectTimer);
                reconnectTimer = setTimeout(open, 100);
            }
        }
        function onChannelError(err) {
            observer.error(cooerceError(err));
        }
        function onMessage(evt) {
            const event = parseEvent(evt);
            return event instanceof Error ? observer.error(event) : observer.next(event);
        }
        function onDisconnect() {
            stopped = true;
            unsubscribe();
            observer.complete();
        }
        function unsubscribe() {
            if (!es) return;
            es.removeEventListener("error", onError);
            es.removeEventListener("channelError", onChannelError);
            es.removeEventListener("disconnect", onDisconnect);
            listenFor.forEach((type)=>es.removeEventListener(type, onMessage));
            es.close();
        }
        function emitReconnect() {
            if (shouldEmitReconnect) {
                observer.next({
                    type: "reconnect"
                });
            }
        }
        async function getEventSource() {
            const { default: EventSource  } = await __webpack_require__.e(/* import() */ 626).then(__webpack_require__.t.bind(__webpack_require__, 49626, 23));
            const evs = new EventSource(uri, esOptions);
            evs.addEventListener("error", onError);
            evs.addEventListener("channelError", onChannelError);
            evs.addEventListener("disconnect", onDisconnect);
            listenFor.forEach((type)=>evs.addEventListener(type, onMessage));
            return evs;
        }
        function open() {
            getEventSource().then((eventSource)=>{
                es = eventSource;
            }).catch((reason)=>{
                observer.error(reason);
                stop();
            });
        }
        function stop() {
            stopped = true;
            unsubscribe();
        }
        return stop;
    });
}
function parseEvent(event) {
    try {
        const data = event.data && JSON.parse(event.data) || {};
        return Object.assign({
            type: event.type
        }, data);
    } catch (err) {
        return err;
    }
}
function cooerceError(err) {
    if (err instanceof Error) {
        return err;
    }
    const evt = parseEvent(err);
    return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
}
function extractErrorMessage(err) {
    if (!err.error) {
        return err.message || "Unknown listener error";
    }
    if (err.error.description) {
        return err.error.description;
    }
    return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
}
var __accessCheck$3 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter)=>{
    __accessCheck$3(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$3 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter)=>{
    __accessCheck$3(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$2, _httpRequest$3, _client2$2, _httpRequest2$3;
class ObservableDatasetsClient {
    constructor(client, httpRequest){
        __privateAdd$3(this, _client$2, void 0);
        __privateAdd$3(this, _httpRequest$3, void 0);
        __privateSet$3(this, _client$2, client);
        __privateSet$3(this, _httpRequest$3, httpRequest);
    }
    /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */ create(name, options) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "PUT", name, options);
    }
    /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */ edit(name, options) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "PATCH", name, options);
    }
    /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */ delete(name) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "DELETE", name);
    }
    /**
   * Fetch a list of datasets for the configured project
   */ list() {
        return _request(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), {
            uri: "/datasets"
        });
    }
}
_client$2 = new WeakMap();
_httpRequest$3 = new WeakMap();
class DatasetsClient {
    constructor(client, httpRequest){
        __privateAdd$3(this, _client2$2, void 0);
        __privateAdd$3(this, _httpRequest2$3, void 0);
        __privateSet$3(this, _client2$2, client);
        __privateSet$3(this, _httpRequest2$3, httpRequest);
    }
    /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */ create(name, options) {
        return rxjs.lastValueFrom(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "PUT", name, options));
    }
    /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */ edit(name, options) {
        return rxjs.lastValueFrom(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "PATCH", name, options));
    }
    /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */ delete(name) {
        return rxjs.lastValueFrom(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "DELETE", name));
    }
    /**
   * Fetch a list of datasets for the configured project
   */ list() {
        return rxjs.lastValueFrom(_request(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), {
            uri: "/datasets"
        }));
    }
}
_client2$2 = new WeakMap();
_httpRequest2$3 = new WeakMap();
function _modify(client, httpRequest, method, name, options) {
    dataset(name);
    return _request(client, httpRequest, {
        method,
        uri: "/datasets/".concat(name),
        body: options
    });
}
var __accessCheck$2 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter)=>{
    __accessCheck$2(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter)=>{
    __accessCheck$2(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$1, _httpRequest$2, _client2$1, _httpRequest2$2;
class ObservableProjectsClient {
    constructor(client, httpRequest){
        __privateAdd$2(this, _client$1, void 0);
        __privateAdd$2(this, _httpRequest$2, void 0);
        __privateSet$2(this, _client$1, client);
        __privateSet$2(this, _httpRequest$2, httpRequest);
    }
    /**
   * Fetch a list of projects the authenticated user has access to
   */ list() {
        return _request(__privateGet$2(this, _client$1), __privateGet$2(this, _httpRequest$2), {
            uri: "/projects"
        });
    }
    /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */ getById(projectId) {
        return _request(__privateGet$2(this, _client$1), __privateGet$2(this, _httpRequest$2), {
            uri: "/projects/".concat(projectId)
        });
    }
}
_client$1 = new WeakMap();
_httpRequest$2 = new WeakMap();
class ProjectsClient {
    constructor(client, httpRequest){
        __privateAdd$2(this, _client2$1, void 0);
        __privateAdd$2(this, _httpRequest2$2, void 0);
        __privateSet$2(this, _client2$1, client);
        __privateSet$2(this, _httpRequest2$2, httpRequest);
    }
    /**
   * Fetch a list of projects the authenticated user has access to
   */ list() {
        return rxjs.lastValueFrom(_request(__privateGet$2(this, _client2$1), __privateGet$2(this, _httpRequest2$2), {
            uri: "/projects"
        }));
    }
    /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */ getById(projectId) {
        return rxjs.lastValueFrom(_request(__privateGet$2(this, _client2$1), __privateGet$2(this, _httpRequest2$2), {
            uri: "/projects/".concat(projectId)
        }));
    }
}
_client2$1 = new WeakMap();
_httpRequest2$2 = new WeakMap();
var __accessCheck$1 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter)=>{
    __accessCheck$1(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter)=>{
    __accessCheck$1(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client, _httpRequest$1, _client2, _httpRequest2$1;
class ObservableUsersClient {
    constructor(client, httpRequest){
        __privateAdd$1(this, _client, void 0);
        __privateAdd$1(this, _httpRequest$1, void 0);
        __privateSet$1(this, _client, client);
        __privateSet$1(this, _httpRequest$1, httpRequest);
    }
    /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */ getById(id) {
        return _request(__privateGet$1(this, _client), __privateGet$1(this, _httpRequest$1), {
            uri: "/users/".concat(id)
        });
    }
}
_client = new WeakMap();
_httpRequest$1 = new WeakMap();
class UsersClient {
    constructor(client, httpRequest){
        __privateAdd$1(this, _client2, void 0);
        __privateAdd$1(this, _httpRequest2$1, void 0);
        __privateSet$1(this, _client2, client);
        __privateSet$1(this, _httpRequest2$1, httpRequest);
    }
    /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */ getById(id) {
        return rxjs.lastValueFrom(_request(__privateGet$1(this, _client2), __privateGet$1(this, _httpRequest2$1), {
            uri: "/users/".concat(id)
        }));
    }
}
_client2 = new WeakMap();
_httpRequest2$1 = new WeakMap();
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _clientConfig, _httpRequest, _clientConfig2, _httpRequest2;
const _ObservableSanityClient = class {
    constructor(httpRequest){
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultConfig;
        /**
     * Private properties
     */ __privateAdd(this, _clientConfig, void 0);
        __privateAdd(this, _httpRequest, void 0);
        /**
     * Instance properties
     */ this.listen = _listen;
        this.config(config);
        __privateSet(this, _httpRequest, httpRequest);
        this.assets = new ObservableAssetsClient(this, __privateGet(this, _httpRequest));
        this.datasets = new ObservableDatasetsClient(this, __privateGet(this, _httpRequest));
        this.projects = new ObservableProjectsClient(this, __privateGet(this, _httpRequest));
        this.users = new ObservableUsersClient(this, __privateGet(this, _httpRequest));
    }
    /**
   * Clone the client - returns a new instance
   */ clone() {
        return new _ObservableSanityClient(__privateGet(this, _httpRequest), this.config());
    }
    config(newConfig) {
        if (newConfig === void 0) {
            return {
                ...__privateGet(this, _clientConfig)
            };
        }
        if (__privateGet(this, _clientConfig) && __privateGet(this, _clientConfig).allowReconfigure === false) {
            throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        }
        __privateSet(this, _clientConfig, initConfig(newConfig, __privateGet(this, _clientConfig) || {}));
        return this;
    }
    /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */ withConfig(newConfig) {
        return new _ObservableSanityClient(__privateGet(this, _httpRequest), {
            ...this.config(),
            ...newConfig
        });
    }
    fetch(query, params) {
        let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return _fetch(this, __privateGet(this, _httpRequest), query, params, options);
    }
    /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */ getDocument(id, options) {
        return _getDocument(this, __privateGet(this, _httpRequest), id, options);
    }
    /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */ getDocuments(ids, options) {
        return _getDocuments(this, __privateGet(this, _httpRequest), ids, options);
    }
    create(document, options) {
        return _create(this, __privateGet(this, _httpRequest), document, "create", options);
    }
    createIfNotExists(document, options) {
        return _createIfNotExists(this, __privateGet(this, _httpRequest), document, options);
    }
    createOrReplace(document, options) {
        return _createOrReplace(this, __privateGet(this, _httpRequest), document, options);
    }
    delete(selection, options) {
        return _delete(this, __privateGet(this, _httpRequest), selection, options);
    }
    mutate(operations, options) {
        return _mutate(this, __privateGet(this, _httpRequest), operations, options);
    }
    /**
   * Create a new buildable patch of operations to perform
   *
   * @param documentId - Document ID(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   */ patch(documentId, operations) {
        return new ObservablePatch(documentId, operations, this);
    }
    /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */ transaction(operations) {
        return new ObservableTransaction(operations, this);
    }
    /**
   * DEPRECATED: Perform an HTTP request against the Sanity API
   *
   * @deprecated Use your own request library!
   * @param options - Request options
   */ request(options) {
        return _request(this, __privateGet(this, _httpRequest), options);
    }
    /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */ getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
    }
    /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */ getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
    }
};
let ObservableSanityClient = _ObservableSanityClient;
_clientConfig = new WeakMap();
_httpRequest = new WeakMap();
const _SanityClient = class {
    constructor(httpRequest){
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultConfig;
        /**
     * Private properties
     */ __privateAdd(this, _clientConfig2, void 0);
        __privateAdd(this, _httpRequest2, void 0);
        /**
     * Instance properties
     */ this.listen = _listen;
        this.config(config);
        __privateSet(this, _httpRequest2, httpRequest);
        this.assets = new AssetsClient(this, __privateGet(this, _httpRequest2));
        this.datasets = new DatasetsClient(this, __privateGet(this, _httpRequest2));
        this.projects = new ProjectsClient(this, __privateGet(this, _httpRequest2));
        this.users = new UsersClient(this, __privateGet(this, _httpRequest2));
        this.observable = new ObservableSanityClient(httpRequest, config);
    }
    /**
   * Clone the client - returns a new instance
   */ clone() {
        return new _SanityClient(__privateGet(this, _httpRequest2), this.config());
    }
    config(newConfig) {
        if (newConfig === void 0) {
            return {
                ...__privateGet(this, _clientConfig2)
            };
        }
        if (__privateGet(this, _clientConfig2) && __privateGet(this, _clientConfig2).allowReconfigure === false) {
            throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        }
        if (this.observable) {
            this.observable.config(newConfig);
        }
        __privateSet(this, _clientConfig2, initConfig(newConfig, __privateGet(this, _clientConfig2) || {}));
        return this;
    }
    /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */ withConfig(newConfig) {
        return new _SanityClient(__privateGet(this, _httpRequest2), {
            ...this.config(),
            ...newConfig
        });
    }
    fetch(query, params) {
        let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return rxjs.lastValueFrom(_fetch(this, __privateGet(this, _httpRequest2), query, params, options));
    }
    /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */ getDocument(id, options) {
        return rxjs.lastValueFrom(_getDocument(this, __privateGet(this, _httpRequest2), id, options));
    }
    /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */ getDocuments(ids, options) {
        return rxjs.lastValueFrom(_getDocuments(this, __privateGet(this, _httpRequest2), ids, options));
    }
    create(document, options) {
        return rxjs.lastValueFrom(_create(this, __privateGet(this, _httpRequest2), document, "create", options));
    }
    createIfNotExists(document, options) {
        return rxjs.lastValueFrom(_createIfNotExists(this, __privateGet(this, _httpRequest2), document, options));
    }
    createOrReplace(document, options) {
        return rxjs.lastValueFrom(_createOrReplace(this, __privateGet(this, _httpRequest2), document, options));
    }
    delete(selection, options) {
        return rxjs.lastValueFrom(_delete(this, __privateGet(this, _httpRequest2), selection, options));
    }
    mutate(operations, options) {
        return rxjs.lastValueFrom(_mutate(this, __privateGet(this, _httpRequest2), operations, options));
    }
    /**
   * Create a new buildable patch of operations to perform
   *
   * @param documentId - Document ID(s)to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   */ patch(documentId, operations) {
        return new Patch(documentId, operations, this);
    }
    /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */ transaction(operations) {
        return new Transaction(operations, this);
    }
    /**
   * Perform a request against the Sanity API
   * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
   *
   * @param options - Request options
   * @returns Promise resolving to the response body
   */ request(options) {
        return rxjs.lastValueFrom(_request(this, __privateGet(this, _httpRequest2), options));
    }
    /**
   * Perform an HTTP request a `/data` sub-endpoint
   * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
   *
   * @deprecated - Use `request()` or your own HTTP library instead
   * @param endpoint - Endpoint to hit (mutate, query etc)
   * @param body - Request body
   * @param options - Request options
   * @internal
   */ dataRequest(endpoint, body, options) {
        return rxjs.lastValueFrom(_dataRequest(this, __privateGet(this, _httpRequest2), endpoint, body, options));
    }
    /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */ getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
    }
    /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */ getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
    }
};
let SanityClient = _SanityClient;
_clientConfig2 = new WeakMap();
_httpRequest2 = new WeakMap();
const httpRequest = defineHttpRequest(middleware, {});
const requester = httpRequest.defaultRequester;
const createClient = (config)=>new SanityClient(defineHttpRequest(middleware, {
        maxRetries: config.maxRetries,
        retryDelay: config.retryDelay
    }), config);
function deprecatedCreateClient(config) {
    printNoDefaultExport();
    return new SanityClient(httpRequest, config);
}
Object.defineProperty(exports, "unstable__adapter", ({
    enumerable: true,
    get: function() {
        return getIt.adapter;
    }
}));
Object.defineProperty(exports, "unstable__environment", ({
    enumerable: true,
    get: function() {
        return getIt.environment;
    }
}));
exports.BasePatch = BasePatch;
exports.BaseTransaction = BaseTransaction;
exports.ClientError = ClientError;
exports.ObservablePatch = ObservablePatch;
exports.ObservableSanityClient = ObservableSanityClient;
exports.ObservableTransaction = ObservableTransaction;
exports.Patch = Patch;
exports.SanityClient = SanityClient;
exports.ServerError = ServerError;
exports.Transaction = Transaction;
exports.createClient = createClient;
exports["default"] = deprecatedCreateClient;
exports.requester = requester; //# sourceMappingURL=index.cjs.map


/***/ }),

/***/ 19402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var client = __webpack_require__(8217);
var isPlainObject = __webpack_require__(52620);
var invariant = __webpack_require__(13568);
var stega = __webpack_require__(90536);
function _interopDefaultCompat(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}
var isPlainObject__default = /*#__PURE__*/ _interopDefaultCompat(isPlainObject);
var invariant__default = /*#__PURE__*/ _interopDefaultCompat(invariant);
const ESCAPE = {
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "'": "\\'",
    "\\": "\\\\"
};
const UNESCAPE = {
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "	",
    "\\'": "'",
    "\\\\": "\\"
};
function normalisedJsonPath(path) {
    return "$".concat(path.map((key)=>{
        if (typeof key === "string") {
            const escapedKey = key.replace(/[\f\n\r\t'\\]/g, (match)=>{
                return ESCAPE[match];
            });
            return "['".concat(escapedKey, "']");
        }
        return "[".concat(key, "]");
    }).join(""));
}
function parseNormalisedJsonPath(path) {
    const parsed = [];
    const parseRe = /\['(.*?)'\]|\[(\d+)\]/g;
    let match;
    while((match = parseRe.exec(path)) !== null){
        if (match[1] !== void 0) {
            const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m)=>{
                return UNESCAPE[m];
            });
            parsed.push(key);
            continue;
        }
        if (match[2] !== void 0) {
            parsed.push(parseInt(match[2], 10));
            continue;
        }
    }
    return parsed;
}
function defineEditLink(_studioUrl) {
    const studioUrl = _studioUrl.replace(/\/$/, "");
    return (sourceDocument, path)=>"".concat(studioUrl, "/intent/edit/id=").concat(sourceDocument._id, ";path=").concat(encodeJsonPathToUriComponent(path));
}
function encodeJsonPathToUriComponent(path) {
    const sourcePath = Array.isArray(path) ? path : parseNormalisedJsonPath(path);
    return encodeURIComponent(sourcePath.map((key, i)=>// eslint-disable-next-line no-nested-ternary
        typeof key === "number" ? "[".concat(key, "]") : i > 0 ? ".".concat(key) : key).join(""));
}
function isRecord(value) {
    return typeof value === "object" && value !== null;
}
function isArray(value) {
    return value !== null && Array.isArray(value);
}
function encode(response, encoder) {
    if (!response.resultSourceMap) {
        throw new TypeError("Missing resultSourceMap");
    }
    response.result = encodeIntoResult(response, encoder);
    return response;
}
function encodeIntoResult(response, encoder) {
    return walkMap(response.result, (value, path)=>{
        if (typeof value !== "string") {
            return value;
        }
        const resolveMappingResult = resolveMapping(path, response.resultSourceMap);
        if (!resolveMappingResult) {
            return value;
        }
        const [mapping, , pathSuffix] = resolveMappingResult;
        if (mapping.type !== "value") {
            return value;
        }
        if (mapping.source.type !== "documentValue") {
            return value;
        }
        const sourceDocument = response.resultSourceMap.documents[mapping.source.document];
        const sourcePath = response.resultSourceMap.paths[mapping.source.path];
        return encoder(value, sourceDocument, sourcePath + pathSuffix);
    });
}
function walkMap(value, mappingFn) {
    let path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    if (isArray(value)) {
        return value.map((v, idx)=>walkMap(v, mappingFn, path.concat(idx)));
    }
    if (isRecord(value)) {
        return Object.fromEntries(Object.entries(value).map((_ref)=>{
            let [k, v] = _ref;
            return [
                k,
                walkMap(v, mappingFn, path.concat(k))
            ];
        }));
    }
    return mappingFn(value, path);
}
function resolveMapping(resultPath, csm, logger) {
    const resultJsonPath = normalisedJsonPath(resultPath);
    if (!csm.mappings) {
        logger == null ? void 0 : logger.error("Missing resultSourceMap.mappings", {
            resultSourceMap: csm
        });
        return void 0;
    }
    if (csm.mappings[resultJsonPath] !== void 0) {
        return [
            csm.mappings[resultJsonPath],
            resultJsonPath,
            ""
        ];
    }
    const mappings = Object.entries(csm.mappings).filter((_ref2)=>{
        let [key] = _ref2;
        return resultJsonPath.startsWith(key);
    }).sort((_ref3, _ref4)=>{
        let [key1] = _ref3;
        let [key2] = _ref4;
        return key2.length - key1.length;
    });
    if (mappings.length == 0) {
        return void 0;
    }
    const [matchedPath, mapping] = mappings[0];
    const pathSuffix = resultJsonPath.substring(matchedPath.length);
    return [
        mapping,
        matchedPath,
        pathSuffix
    ];
}
const filterDefault = (_ref5)=>{
    let { path  } = _ref5;
    const endPath = path.at(-1);
    if (path.at(-2) === "slug" && endPath === "current") {
        return false;
    }
    if (typeof endPath === "string" && endPath.startsWith("_")) {
        return false;
    }
    if (typeof path.at(-2) === "number" && endPath === "style") {
        return false;
    }
    return true;
};
const TRUNCATE_LENGTH = 20;
function createTranscoder(studioUrl, encodeSourceMapAtPath, logger) {
    const createEditLink = defineEditLink(studioUrl);
    const report = {
        encoded: [],
        skipped: []
    };
    const transcode = (input, sourceDocument, sourcePath)=>{
        if ((typeof encodeSourceMapAtPath === "function" ? encodeSourceMapAtPath({
            path: sourcePath,
            filterDefault
        }) : filterDefault({
            path: sourcePath,
            filterDefault
        })) === false) {
            if (logger) {
                report.skipped.push({
                    path: JSON.stringify(sourcePath),
                    value: "".concat(input.slice(0, TRUNCATE_LENGTH)).concat(input.length > TRUNCATE_LENGTH ? "..." : ""),
                    length: input.length
                });
            }
            return input;
        }
        if (logger) {
            report.encoded.push({
                path: JSON.stringify(sourcePath),
                value: "".concat(input.slice(0, TRUNCATE_LENGTH)).concat(input.length > TRUNCATE_LENGTH ? "..." : ""),
                length: input.length
            });
        }
        return "".concat(stega.vercelStegaEncode({
            origin: "sanity.io",
            href: createEditLink(sourceDocument, sourcePath)
        })).concat(input);
    };
    return {
        report,
        transcode,
        walk: (input)=>{
            report.encoded.length = 0;
            report.skipped.length = 0;
            return encode(input, (value, sourceDocument, path)=>transcode(value, sourceDocument, parseNormalisedJsonPath(path)));
        }
    };
}
function transcodeResponse(_ref6) {
    let { studioUrl , encodeSourceMapAtPath , logger  } = _ref6;
    const transcoder = createTranscoder(studioUrl, encodeSourceMapAtPath, logger);
    return {
        onResponse: (response)=>{
            if (!isBodyResponse(response)) {
                return response;
            }
            if (Array.isArray(response.body) || typeof response.body === "string" || isPlainObject__default.default(response.body)) {
                if (!isContentSourceMapBody(response.body)) {
                    if (logger) {
                        logger == null ? void 0 : logger.error("[@sanity/preview-kit]: Missing Content Source Map from response body", response.body);
                    }
                    return response;
                }
                const body = transcoder.walk(response.body);
                if (logger) {
                    const isSkipping = transcoder.report.skipped.length;
                    const isEncoding = transcoder.report.encoded.length;
                    if (isSkipping || isEncoding) {
                        logger == null ? void 0 : logger.groupCollapsed("[@sanity/preview-kit]: Stega encoding source map into result");
                        logger == null ? void 0 : logger.log("[@sanity/preview-kit]: Paths encoded: ".concat(transcoder.report.encoded.length, ", skipped: ").concat(transcoder.report.skipped.length));
                    }
                    if (transcoder.report.encoded.length > 0) {
                        logger == null ? void 0 : logger.log("[@sanity/preview-kit]: Table of encoded paths");
                        logger == null ? void 0 : logger.table(transcoder.report.encoded);
                    }
                    if (transcoder.report.skipped.length > 0) {
                        const skipped = /* @__PURE__ */ new Map();
                        for (const { path  } of transcoder.report.skipped){
                            skipped.set(path, JSON.parse(path));
                        }
                        logger == null ? void 0 : logger.log("[@sanity/preview-kit]: List of skipped paths", [
                            ...skipped.values()
                        ]);
                    }
                    if (isSkipping || isEncoding) {
                        logger == null ? void 0 : logger.groupEnd();
                    }
                }
                return {
                    ...response,
                    body
                };
            }
            return response;
        }
    };
}
function createHttpRequest(_ref7) {
    let { studioUrl , encodeSourceMapAtPath , logger  } = _ref7;
    invariant__default.default(studioUrl, "Missing studioUrl in client config");
    const superRequester = client.requester.clone();
    superRequester.use(transcodeResponse({
        studioUrl,
        encodeSourceMapAtPath,
        logger
    }));
    function httpRequest(options) {
        let requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : superRequester;
        return requester({
            maxRedirects: 0,
            ...options
        });
    }
    httpRequest.defaultRequester = superRequester;
    return httpRequest;
}
function isBodyResponse(response) {
    return typeof response === "object" && response !== null;
}
function isContentSourceMapBody(body) {
    return typeof body === "object" && body !== null && "resultSourceMap" in body;
}
function mapToEditLinks(response, studioUrl) {
    const createEditLink = defineEditLink(studioUrl);
    return encodeIntoResult(response, (_, sourceDocument, path)=>{
        return createEditLink(sourceDocument, path);
    });
}
const createClient = (config)=>{
    const { encodeSourceMap =detectEnableSourceMap() , studioUrl =detectStudioUrl() , logger  } = config;
    let shouldEncodeSourceMap = encodeSourceMap === true;
    if (encodeSourceMap === "auto") {
        shouldEncodeSourceMap = isVercelPreviewEnvironment();
    }
    try {
        if (shouldEncodeSourceMap) {
            logger == null ? void 0 : logger.debug("[@sanity/preview-kit]: Creating source map enabled client");
            const httpRequest = createHttpRequest({
                ...config,
                studioUrl
            });
            return new client.SanityClient(httpRequest, {
                ...config,
                // Source maps by Content Lake are required in order to know where to insert the encoded source maps into strings
                resultSourceMap: true
            });
        }
    } catch (err) {
        console.error("[@sanity/preview-kit]: Error creating client", err, "falling back to non-embedded sourcemap mode");
    }
    return client.createClient(config);
};
function isVercelPreviewEnvironment() {
    try {
        return undefined.VERCEL_ENV === "preview";
    } catch  {}
    try {
        return process.env.VERCEL_ENV === "preview";
    } catch  {}
    return false;
}
function detectEnableSourceMap() {
    try {
        return undefined.SANITY_SOURCE_MAP === "true" || "auto";
    } catch  {}
    try {
        return process.env.SANITY_SOURCE_MAP === "true" || "auto";
    } catch  {}
    return "auto";
}
function detectStudioUrl() {
    try {
        return undefined.SANITY_STUDIO_URL;
    } catch  {}
    try {
        return process.env.SANITY_STUDIO_URL;
    } catch  {}
}
exports.createClient = createClient;
exports.mapToEditLinks = mapToEditLinks; //# sourceMappingURL=client.cjs.map


/***/ }),

/***/ 64571:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

const isReactNative = typeof navigator === "undefined" ? false : navigator.product === "ReactNative";
const defaultOptions = {
    timeout: isReactNative ? 6e4 : 12e4
};
function processOptions(opts) {
    const options = typeof opts === "string" ? Object.assign({
        url: opts
    }, defaultOptions) : Object.assign({}, defaultOptions, opts);
    const url = new URL(options.url, "http://localhost");
    options.timeout = normalizeTimeout(options.timeout);
    if (options.query) {
        for (const [key, value] of Object.entries(options.query)){
            if (value !== void 0) {
                if (Array.isArray(value)) {
                    for (const v of value){
                        url.searchParams.append(key, v);
                    }
                } else {
                    url.searchParams.append(key, value);
                }
            }
        }
    }
    options.method = options.body && !options.method ? "POST" : (options.method || "GET").toUpperCase();
    options.url = url.origin === "http://localhost" ? "".concat(url.pathname, "?").concat(url.searchParams) : url.toString();
    return options;
}
function normalizeTimeout(time) {
    if (time === false || time === 0) {
        return false;
    }
    if (time.connect || time.socket) {
        return time;
    }
    const delay = Number(time);
    if (isNaN(delay)) {
        return normalizeTimeout(defaultOptions.timeout);
    }
    return {
        connect: delay,
        socket: delay
    };
}
const validUrl = /^https?:\/\//i;
function validateOptions(options) {
    if (!validUrl.test(options.url)) {
        throw new Error('"'.concat(options.url, '" is not a valid URL'));
    }
}
exports.processOptions = processOptions;
exports.validateOptions = validateOptions; //# sourceMappingURL=defaultOptionsValidator-6e254980.cjs.map


/***/ }),

/***/ 92608:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var defaultOptionsValidator = __webpack_require__(64571);
var http = __webpack_require__(88849);
var https = __webpack_require__(22286);
var url = __webpack_require__(41041);
var decompressResponse = __webpack_require__(97353);
var follow = __webpack_require__(89698);
var toStream = __webpack_require__(52841);
var isStream = __webpack_require__(28730);
var progressStream = __webpack_require__(63813);
var qs = __webpack_require__(63477);
var tunnel = __webpack_require__(11394);
function _interopDefaultCompat(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}
function _interopNamespaceCompat(e) {
    if (e && typeof e === "object" && "default" in e) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function(k) {
            if (k !== "default") {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function() {
                        return e[k];
                    }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}
var http__default = /*#__PURE__*/ _interopDefaultCompat(http);
var https__default = /*#__PURE__*/ _interopDefaultCompat(https);
var url__default = /*#__PURE__*/ _interopDefaultCompat(url);
var decompressResponse__default = /*#__PURE__*/ _interopDefaultCompat(decompressResponse);
var follow__default = /*#__PURE__*/ _interopDefaultCompat(follow);
var toStream__default = /*#__PURE__*/ _interopDefaultCompat(toStream);
var isStream__default = /*#__PURE__*/ _interopDefaultCompat(isStream);
var progressStream__default = /*#__PURE__*/ _interopDefaultCompat(progressStream);
var qs__default = /*#__PURE__*/ _interopDefaultCompat(qs);
var tunnel__namespace = /*#__PURE__*/ _interopNamespaceCompat(tunnel);
var middlewareReducer = (middleware)=>{
    const applyMiddleware = function(hook, defaultValue) {
        const bailEarly = hook === "onError";
        let value = defaultValue;
        for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            args[_key - 2] = arguments[_key];
        }
        for(let i = 0; i < middleware[hook].length; i++){
            const handler = middleware[hook][i];
            value = handler(value, ...args);
            if (bailEarly && !value) {
                break;
            }
        }
        return value;
    };
    return applyMiddleware;
};
function createPubSub() {
    const subscribers = /* @__PURE__ */ Object.create(null);
    let nextId = 0;
    function subscribe(subscriber) {
        const id = nextId++;
        subscribers[id] = subscriber;
        return function unsubscribe() {
            delete subscribers[id];
        };
    }
    function publish(event) {
        for(const id in subscribers){
            subscribers[id](event);
        }
    }
    return {
        publish,
        subscribe
    };
}
const channelNames = [
    "request",
    "response",
    "progress",
    "error",
    "abort"
];
const middlehooks = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders"
];
function createRequester(initMiddleware, httpRequest) {
    const loadedMiddleware = [];
    const middleware = middlehooks.reduce((ware, name)=>{
        ware[name] = ware[name] || [];
        return ware;
    }, {
        processOptions: [
            defaultOptionsValidator.processOptions
        ],
        validateOptions: [
            defaultOptionsValidator.validateOptions
        ]
    });
    function request(opts) {
        const channels = channelNames.reduce((target, name)=>{
            target[name] = createPubSub();
            return target;
        }, {});
        const applyMiddleware = middlewareReducer(middleware);
        const options = applyMiddleware("processOptions", opts);
        applyMiddleware("validateOptions", options);
        const context = {
            options,
            channels,
            applyMiddleware
        };
        let ongoingRequest = null;
        const unsubscribe = channels.request.subscribe((ctx)=>{
            ongoingRequest = httpRequest(ctx, (err, res)=>onResponse(err, res, ctx));
        });
        channels.abort.subscribe(()=>{
            unsubscribe();
            if (ongoingRequest) {
                ongoingRequest.abort();
            }
        });
        const returnValue = applyMiddleware("onReturn", channels, context);
        if (returnValue === channels) {
            channels.request.publish(context);
        }
        return returnValue;
        function onResponse(reqErr, res, ctx) {
            let error = reqErr;
            let response = res;
            if (!error) {
                try {
                    response = applyMiddleware("onResponse", res, ctx);
                } catch (err) {
                    response = null;
                    error = err;
                }
            }
            error = error && applyMiddleware("onError", error, ctx);
            if (error) {
                channels.error.publish(error);
            } else if (response) {
                channels.response.publish(response);
            }
        }
    }
    request.use = function use(newMiddleware) {
        if (!newMiddleware) {
            throw new Error("Tried to add middleware that resolved to falsey value");
        }
        if (typeof newMiddleware === "function") {
            throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        }
        if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
            throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        }
        middlehooks.forEach((key)=>{
            if (newMiddleware[key]) {
                middleware[key].push(newMiddleware[key]);
            }
        });
        loadedMiddleware.push(newMiddleware);
        return request;
    };
    request.clone = function clone() {
        return createRequester(loadedMiddleware, httpRequest);
    };
    initMiddleware.forEach(request.use);
    return request;
}
function formatHostname(hostname) {
    return hostname.replace(/^\.*/, ".").toLowerCase();
}
function parseNoProxyZone(zoneStr) {
    const zone = zoneStr.trim().toLowerCase();
    const zoneParts = zone.split(":", 2);
    const zoneHost = formatHostname(zoneParts[0]);
    const zonePort = zoneParts[1];
    const hasPort = zone.indexOf(":") > -1;
    return {
        hostname: zoneHost,
        port: zonePort,
        hasPort
    };
}
function uriInNoProxy(uri, noProxy) {
    const port = uri.port || (uri.protocol === "https:" ? "443" : "80");
    const hostname = formatHostname(uri.hostname);
    const noProxyList = noProxy.split(",");
    return noProxyList.map(parseNoProxyZone).some((noProxyZone)=>{
        const isMatchedAt = hostname.indexOf(noProxyZone.hostname);
        const hostnameMatched = isMatchedAt > -1 && isMatchedAt === hostname.length - noProxyZone.hostname.length;
        if (noProxyZone.hasPort) {
            return port === noProxyZone.port && hostnameMatched;
        }
        return hostnameMatched;
    });
}
function getProxyFromUri(uri) {
    const noProxy = process.env.NO_PROXY || process.env.no_proxy || "";
    if (noProxy === "*") {
        return null;
    }
    if (noProxy !== "" && uriInNoProxy(uri, noProxy)) {
        return null;
    }
    if (uri.protocol === "http:") {
        return process.env.HTTP_PROXY || process.env.http_proxy || null;
    }
    if (uri.protocol === "https:") {
        return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null;
    }
    return null;
}
function getHostFromUri(uri) {
    let host = uri.host;
    if (uri.port) {
        if (uri.port === "80" && uri.protocol === "http:" || uri.port === "443" && uri.protocol === "https:") {
            host = uri.hostname;
        }
    }
    return host;
}
function getHostHeaderWithPort(uri) {
    const port = uri.port || (uri.protocol === "https:" ? "443" : "80");
    return "".concat(uri.hostname, ":").concat(port);
}
function rewriteUriForProxy(reqOpts, uri, proxy) {
    const headers = reqOpts.headers || {};
    const options = Object.assign({}, reqOpts, {
        headers
    });
    headers.host = headers.host || getHostHeaderWithPort(uri);
    options.protocol = proxy.protocol || options.protocol;
    options.hostname = proxy.host.replace(/:\d+/, "");
    options.port = proxy.port;
    options.host = getHostFromUri(Object.assign({}, uri, proxy));
    options.href = "".concat(options.protocol, "//").concat(options.host).concat(options.path);
    options.path = url__default.default.format(uri);
    return options;
}
function getProxyOptions(options) {
    let proxy;
    if (options.hasOwnProperty("proxy")) {
        proxy = options.proxy;
    } else {
        const uri = url__default.default.parse(options.url);
        proxy = getProxyFromUri(uri);
    }
    return typeof proxy === "string" ? url__default.default.parse(proxy) : proxy;
}
/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ function concat(stream, cb) {
    const chunks = [];
    stream.on("data", function(chunk) {
        chunks.push(chunk);
    });
    stream.once("end", function() {
        if (cb) cb(null, Buffer.concat(chunks));
        cb = null;
    });
    stream.once("error", function(err) {
        if (cb) cb(err);
        cb = null;
    });
}
function timedOut(req, time) {
    if (req.timeoutTimer) {
        return req;
    }
    const delays = isNaN(time) ? time : {
        socket: time,
        connect: time
    };
    const hostHeader = req.getHeader("host");
    const host = hostHeader ? " to " + hostHeader : "";
    if (delays.connect !== void 0) {
        req.timeoutTimer = setTimeout(function timeoutHandler() {
            req.abort();
            const e = new Error("Connection timed out on request" + host);
            e.code = "ETIMEDOUT";
            req.emit("error", e);
        }, delays.connect);
    }
    req.on("socket", function assign(socket) {
        if (!(socket.connecting || socket._connecting)) {
            connect();
            return;
        }
        socket.once("connect", connect);
    });
    function clear() {
        if (req.timeoutTimer) {
            clearTimeout(req.timeoutTimer);
            req.timeoutTimer = null;
        }
    }
    function connect() {
        clear();
        if (delays.socket !== void 0) {
            req.setTimeout(delays.socket, function socketTimeoutHandler() {
                req.abort();
                const e = new Error("Socket timed out on request" + host);
                e.code = "ESOCKETTIMEDOUT";
                req.emit("error", e);
            });
        }
    }
    return req.on("error", clear);
}
const uriParts = [
    "protocol",
    "slashes",
    "auth",
    "host",
    "port",
    "hostname",
    "hash",
    "search",
    "query",
    "pathname",
    "path",
    "href"
];
const defaultProxyHeaderWhiteList = [
    "accept",
    "accept-charset",
    "accept-encoding",
    "accept-language",
    "accept-ranges",
    "cache-control",
    "content-encoding",
    "content-language",
    "content-location",
    "content-md5",
    "content-range",
    "content-type",
    "connection",
    "date",
    "expect",
    "max-forwards",
    "pragma",
    "referer",
    "te",
    "user-agent",
    "via"
];
const defaultProxyHeaderExclusiveList = [
    "proxy-authorization"
];
function shouldEnable(options) {
    if (typeof options.tunnel !== "undefined") {
        return Boolean(options.tunnel);
    }
    const uri = url__default.default.parse(options.url);
    if (uri.protocol === "https:") {
        return true;
    }
    return false;
}
function applyAgent() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let proxy = arguments.length > 1 ? arguments[1] : undefined;
    const options = Object.assign({}, opts);
    const proxyHeaderWhiteList = defaultProxyHeaderWhiteList.concat(options.proxyHeaderWhiteList || []).map((header)=>header.toLowerCase());
    const proxyHeaderExclusiveList = defaultProxyHeaderExclusiveList.concat(options.proxyHeaderExclusiveList || []).map((header)=>header.toLowerCase());
    const proxyHeaders = getAllowedProxyHeaders(options.headers, proxyHeaderWhiteList);
    proxyHeaders.host = constructProxyHost(options);
    options.headers = Object.keys(options.headers || {}).reduce((headers, header)=>{
        const isAllowed = proxyHeaderExclusiveList.indexOf(header.toLowerCase()) === -1;
        if (isAllowed) {
            headers[header] = options.headers[header];
        }
        return headers;
    }, {});
    const tunnelFn = getTunnelFn(options, proxy);
    const tunnelOptions = constructTunnelOptions(options, proxy, proxyHeaders);
    options.agent = tunnelFn(tunnelOptions);
    return options;
}
function getTunnelFn(options, proxy) {
    const uri = getUriParts(options);
    const tunnelFnName = constructTunnelFnName(uri, proxy);
    return tunnel__namespace[tunnelFnName];
}
function getUriParts(options) {
    return uriParts.reduce((uri, part)=>{
        uri[part] = options[part];
        return uri;
    }, {});
}
function constructTunnelFnName(uri, proxy) {
    const uriProtocol = uri.protocol === "https:" ? "https" : "http";
    const proxyProtocol = proxy.protocol === "https:" ? "Https" : "Http";
    return "".concat(uriProtocol, "Over").concat(proxyProtocol);
}
function constructProxyHost(uri) {
    const port = uri.port;
    const protocol = uri.protocol;
    let proxyHost = "".concat(uri.hostname, ":");
    if (port) {
        proxyHost += port;
    } else if (protocol === "https:") {
        proxyHost += "443";
    } else {
        proxyHost += "80";
    }
    return proxyHost;
}
function getAllowedProxyHeaders(headers, whiteList) {
    return Object.keys(headers).filter((header)=>whiteList.indexOf(header.toLowerCase()) !== -1).reduce((set, header)=>{
        set[header] = headers[header];
        return set;
    }, {});
}
function constructTunnelOptions(options, proxy, proxyHeaders) {
    return {
        proxy: {
            host: proxy.hostname,
            port: +proxy.port,
            proxyAuth: proxy.auth,
            headers: proxyHeaders
        },
        headers: options.headers,
        ca: options.ca,
        cert: options.cert,
        key: options.key,
        passphrase: options.passphrase,
        pfx: options.pfx,
        ciphers: options.ciphers,
        rejectUnauthorized: options.rejectUnauthorized,
        secureOptions: options.secureOptions,
        secureProtocol: options.secureProtocol
    };
}
const adapter = "node";
const reduceResponse = (res, reqUrl, method, body)=>({
        body,
        url: reqUrl,
        method,
        headers: res.headers,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage
    });
var httpRequester = (context, cb)=>{
    const options = context.options;
    const uri = Object.assign({}, url__default.default.parse(options.url));
    const bodyType = isStream__default.default(options.body) ? "stream" : typeof options.body;
    if (bodyType !== "undefined" && bodyType !== "stream" && bodyType !== "string" && !Buffer.isBuffer(options.body)) {
        throw new Error("Request body must be a string, buffer or stream, got ".concat(bodyType));
    }
    const lengthHeader = {};
    if (options.bodySize) {
        lengthHeader["content-length"] = options.bodySize;
    } else if (options.body && bodyType !== "stream") {
        lengthHeader["content-length"] = Buffer.byteLength(options.body);
    }
    let aborted = false;
    const callback = (err, res)=>!aborted && cb(err, res);
    context.channels.abort.subscribe(()=>{
        aborted = true;
    });
    let reqOpts = Object.assign({}, uri, {
        method: options.method,
        headers: Object.assign({}, lowerCaseHeaders(options.headers), lengthHeader),
        maxRedirects: options.maxRedirects
    });
    const proxy = getProxyOptions(options);
    const tunnel = proxy && shouldEnable(options);
    const injectedResponse = context.applyMiddleware("interceptRequest", void 0, {
        adapter,
        context
    });
    if (injectedResponse) {
        const cbTimer = setImmediate(callback, null, injectedResponse);
        const abort = ()=>clearImmediate(cbTimer);
        return {
            abort
        };
    }
    if (options.maxRedirects !== 0) {
        reqOpts.maxRedirects = options.maxRedirects || 5;
    }
    if (proxy && tunnel) {
        reqOpts = applyAgent(reqOpts, proxy);
    } else if (proxy && !tunnel) {
        reqOpts = rewriteUriForProxy(reqOpts, uri, proxy);
    }
    if (!tunnel && proxy && proxy.auth && !reqOpts.headers["proxy-authorization"]) {
        const [username, password] = proxy.auth.username ? [
            proxy.auth.username,
            proxy.auth.password
        ] : proxy.auth.split(":").map((item)=>qs__default.default.unescape(item));
        const auth = Buffer.from("".concat(username, ":").concat(password), "utf8");
        const authBase64 = auth.toString("base64");
        reqOpts.headers["proxy-authorization"] = "Basic ".concat(authBase64);
    }
    const transport = getRequestTransport(reqOpts, proxy, tunnel);
    if (typeof options.debug === "function" && proxy) {
        options.debug("Proxying using %s", reqOpts.agent ? "tunnel agent" : "".concat(reqOpts.host, ":").concat(reqOpts.port));
    }
    const tryCompressed = reqOpts.method !== "HEAD";
    if (tryCompressed && !reqOpts.headers["accept-encoding"] && options.compress !== false) {
        reqOpts.headers["accept-encoding"] = "br, gzip, deflate";
    }
    const finalOptions = context.applyMiddleware("finalizeOptions", reqOpts);
    const request = transport.request(finalOptions, (response)=>{
        const res = tryCompressed ? decompressResponse__default.default(response) : response;
        const resStream = context.applyMiddleware("onHeaders", res, {
            headers: response.headers,
            adapter,
            context
        });
        const reqUrl = response.responseUrl || options.url;
        if (options.stream) {
            callback(null, reduceResponse(res, reqUrl, reqOpts.method, resStream));
            return;
        }
        concat(resStream, (err, data)=>{
            if (err) {
                return callback(err);
            }
            const body = options.rawBody ? data : data.toString();
            const reduced = reduceResponse(res, reqUrl, reqOpts.method, body);
            return callback(null, reduced);
        });
    });
    if (options.timeout) {
        timedOut(request, options.timeout);
    }
    request.once("error", callback);
    const { bodyStream , progress  } = getProgressStream(options);
    context.applyMiddleware("onRequest", {
        options,
        adapter,
        request,
        context,
        progress
    });
    if (bodyStream) {
        bodyStream.pipe(request);
    } else {
        request.end(options.body);
    }
    return {
        abort: ()=>request.abort()
    };
};
function getProgressStream(options) {
    if (!options.body) {
        return {};
    }
    const bodyIsStream = isStream__default.default(options.body);
    const length = options.bodySize || (bodyIsStream ? null : Buffer.byteLength(options.body));
    if (!length) {
        return bodyIsStream ? {
            bodyStream: options.body
        } : {};
    }
    const progress = progressStream__default.default({
        time: 16,
        length
    });
    const bodyStream = bodyIsStream ? options.body : toStream__default.default(options.body);
    return {
        bodyStream: bodyStream.pipe(progress),
        progress
    };
}
function getRequestTransport(reqOpts, proxy, tunnel) {
    const isHttpsRequest = reqOpts.protocol === "https:";
    const transports = reqOpts.maxRedirects === 0 ? {
        http: http__default.default,
        https: https__default.default
    } : {
        http: follow__default.default.http,
        https: follow__default.default.https
    };
    if (!proxy || tunnel) {
        return isHttpsRequest ? transports.https : transports.http;
    }
    let isHttpsProxy = proxy.port === 443;
    if (proxy.protocol) {
        isHttpsProxy = /^https:?/.test(proxy.protocol);
    }
    return isHttpsProxy ? transports.https : transports.http;
}
function lowerCaseHeaders(headers) {
    return Object.keys(headers || {}).reduce((acc, header)=>{
        acc[header.toLowerCase()] = headers[header];
        return acc;
    }, {});
}
const getIt = function() {
    let initMiddleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let httpRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : httpRequester;
    return createRequester(initMiddleware, httpRequest);
};
const environment = "node";
exports.adapter = adapter;
exports.environment = environment;
exports.getIt = getIt; //# sourceMappingURL=index.cjs.map


/***/ }),

/***/ 78332:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var debugIt = __webpack_require__(6060);
var defaultOptionsValidator = __webpack_require__(64571);
var isPlainObject = __webpack_require__(66554);
var http = __webpack_require__(13685);
var https = __webpack_require__(95687);
var progressStream = __webpack_require__(63813);
var allowed = __webpack_require__(14351);
function _interopDefaultCompat(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}
var debugIt__default = /*#__PURE__*/ _interopDefaultCompat(debugIt);
var http__default = /*#__PURE__*/ _interopDefaultCompat(http);
var https__default = /*#__PURE__*/ _interopDefaultCompat(https);
var progressStream__default = /*#__PURE__*/ _interopDefaultCompat(progressStream);
var allowed__default = /*#__PURE__*/ _interopDefaultCompat(allowed);
const leadingSlash = /^\//;
const trailingSlash = /\/$/;
function base(baseUrl) {
    const baseUri = baseUrl.replace(trailingSlash, "");
    return {
        processOptions: (options)=>{
            if (/^https?:\/\//i.test(options.url)) {
                return options;
            }
            const url = [
                baseUri,
                options.url.replace(leadingSlash, "")
            ].join("/");
            return Object.assign({}, options, {
                url
            });
        }
    };
}
const SENSITIVE_HEADERS = [
    "cookie",
    "authorization"
];
const hasOwn = Object.prototype.hasOwnProperty;
const redactKeys = (source, redacted)=>{
    const target = {};
    for(const key in source){
        if (hasOwn.call(source, key)) {
            target[key] = redacted.indexOf(key.toLowerCase()) > -1 ? "<redacted>" : source[key];
        }
    }
    return target;
};
function debug() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const verbose = opts.verbose;
    const namespace = opts.namespace || "get-it";
    const defaultLogger = debugIt__default.default(namespace);
    const log = opts.log || defaultLogger;
    const shortCircuit = log === defaultLogger && !debugIt__default.default.enabled(namespace);
    let requestId = 0;
    return {
        processOptions: (options)=>{
            options.debug = log;
            options.requestId = options.requestId || ++requestId;
            return options;
        },
        onRequest: (event)=>{
            if (shortCircuit || !event) {
                return event;
            }
            const options = event.options;
            log("[%s] HTTP %s %s", options.requestId, options.method, options.url);
            if (verbose && options.body && typeof options.body === "string") {
                log("[%s] Request body: %s", options.requestId, options.body);
            }
            if (verbose && options.headers) {
                const headers = opts.redactSensitiveHeaders === false ? options.headers : redactKeys(options.headers, SENSITIVE_HEADERS);
                log("[%s] Request headers: %s", options.requestId, JSON.stringify(headers, null, 2));
            }
            return event;
        },
        onResponse: (res, context)=>{
            if (shortCircuit || !res) {
                return res;
            }
            const reqId = context.options.requestId;
            log("[%s] Response code: %s %s", reqId, res.statusCode, res.statusMessage);
            if (verbose && res.body) {
                log("[%s] Response body: %s", reqId, stringifyBody(res));
            }
            return res;
        },
        onError: (err, context)=>{
            const reqId = context.options.requestId;
            if (!err) {
                log("[%s] Error encountered, but handled by an earlier middleware", reqId);
                return err;
            }
            log("[%s] ERROR: %s", reqId, err.message);
            return err;
        }
    };
}
function stringifyBody(res) {
    const contentType = (res.headers["content-type"] || "").toLowerCase();
    const isJson = contentType.indexOf("application/json") !== -1;
    return isJson ? tryFormat(res.body) : res.body;
}
function tryFormat(body) {
    try {
        const parsed = typeof body === "string" ? JSON.parse(body) : body;
        return JSON.stringify(parsed, null, 2);
    } catch (err) {
        return body;
    }
}
function headers(_headers) {
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return {
        processOptions: (options)=>{
            const existing = options.headers || {};
            options.headers = opts.override ? Object.assign({}, existing, _headers) : Object.assign({}, _headers, existing);
            return options;
        }
    };
}
class HttpError extends Error {
    constructor(res, ctx){
        super();
        const truncatedUrl = res.url.length > 400 ? "".concat(res.url.slice(0, 399), "…") : res.url;
        let msg = "".concat(res.method, "-request to ").concat(truncatedUrl, " resulted in ");
        msg += "HTTP ".concat(res.statusCode, " ").concat(res.statusMessage);
        this.message = msg.trim();
        this.response = res;
        this.request = ctx.options;
    }
}
function httpErrors() {
    return {
        onResponse: (res, ctx)=>{
            const isHttpError = res.statusCode >= 400;
            if (!isHttpError) {
                return res;
            }
            throw new HttpError(res, ctx);
        }
    };
}
function injectResponse() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (typeof opts.inject !== "function") {
        throw new Error("`injectResponse` middleware requires a `inject` function");
    }
    function inject(prevValue, event) {
        const response = opts.inject(event, prevValue);
        if (!response) {
            return prevValue;
        }
        const options = event.context.options;
        return Object.assign({}, {
            body: "",
            url: options.url,
            method: options.method,
            headers: {},
            statusCode: 200,
            statusMessage: "OK"
        }, response);
    }
    return {
        interceptRequest: inject
    };
}
const isBuffer = typeof Buffer === "undefined" ? ()=>false : (obj)=>Buffer.isBuffer(obj);
const serializeTypes = [
    "boolean",
    "string",
    "number"
];
function jsonRequest() {
    return {
        processOptions: (options)=>{
            const body = options.body;
            if (!body) {
                return options;
            }
            const isStream = typeof body.pipe === "function";
            const shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body) !== -1 || Array.isArray(body) || isPlainObject.isPlainObject(body));
            if (!shouldSerialize) {
                return options;
            }
            return Object.assign({}, options, {
                body: JSON.stringify(options.body),
                headers: Object.assign({}, options.headers, {
                    "Content-Type": "application/json"
                })
            });
        }
    };
}
function jsonResponse(opts) {
    return {
        onResponse: (response)=>{
            const contentType = response.headers["content-type"] || "";
            const shouldDecode = opts && opts.force || contentType.indexOf("application/json") !== -1;
            if (!response.body || !contentType || !shouldDecode) {
                return response;
            }
            return Object.assign({}, response, {
                body: tryParse(response.body)
            });
        },
        processOptions: (options)=>Object.assign({}, options, {
                headers: Object.assign({
                    Accept: "application/json"
                }, options.headers)
            })
    };
    function tryParse(body) {
        try {
            return JSON.parse(body);
        } catch (err) {
            err.message = "Failed to parsed response body as JSON: ".concat(err.message);
            throw err;
        }
    }
}
const isHttpsProto = /^https:/i;
function keepAlive() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const ms = config.ms || 1e3;
    const maxFree = config.maxFree || 256;
    const agentOptions = {
        keepAlive: true,
        keepAliveMsecs: ms,
        maxFreeSockets: maxFree
    };
    const httpAgent = new http__default.default.Agent(agentOptions);
    const httpsAgent = new https__default.default.Agent(agentOptions);
    const agents = {
        http: httpAgent,
        https: httpsAgent
    };
    return {
        finalizeOptions: (options)=>{
            if (options.agent) {
                return options;
            }
            const isHttps = isHttpsProto.test(options.href || options.protocol);
            const keepOpts = options.maxRedirects === 0 ? {
                agent: isHttps ? httpsAgent : httpAgent
            } : {
                agents
            };
            return Object.assign({}, options, keepOpts);
        }
    };
}
function mtls() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!config.ca) {
        throw new Error('Required mtls option "ca" is missing');
    }
    if (!config.cert) {
        throw new Error('Required mtls option "cert" is missing');
    }
    if (!config.key) {
        throw new Error('Required mtls option "key" is missing');
    }
    return {
        finalizeOptions: (options)=>{
            const mtlsOpts = {
                cert: config.cert,
                key: config.key,
                ca: config.ca
            };
            return Object.assign({}, options, mtlsOpts);
        }
    };
}
let actualGlobal;
if (typeof globalThis !== "undefined") {
    actualGlobal = globalThis;
} else if (false) {} else if (typeof global !== "undefined") {
    actualGlobal = global;
} else if (typeof self !== "undefined") {
    actualGlobal = self;
} else {
    actualGlobal = {};
}
var global$1 = actualGlobal;
function observable() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const Observable = opts.implementation || global$1.Observable;
    if (!Observable) {
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
    }
    return {
        onReturn: (channels, context)=>new Observable((observer)=>{
                channels.error.subscribe((err)=>observer.error(err));
                channels.progress.subscribe((event)=>observer.next(Object.assign({
                        type: "progress"
                    }, event)));
                channels.response.subscribe((response)=>{
                    observer.next(Object.assign({
                        type: "response"
                    }, response));
                    observer.complete();
                });
                channels.request.publish(context);
                return ()=>channels.abort.publish();
            })
    };
}
function normalizer(stage) {
    return (prog)=>({
            stage,
            percent: prog.percentage,
            total: prog.length,
            loaded: prog.transferred,
            lengthComputable: !(prog.length === 0 && prog.percentage === 0)
        });
}
function progress() {
    return {
        onHeaders: (response, evt)=>{
            const _progress = progressStream__default.default({
                time: 16
            });
            const normalize = normalizer("download");
            const contentLength = response.headers["content-length"];
            const length = contentLength && Number(contentLength);
            if (!isNaN(length) && length > 0) {
                _progress.setLength(length);
            }
            _progress.on("progress", (prog)=>evt.context.channels.progress.publish(normalize(prog)));
            return response.pipe(_progress);
        },
        onRequest: (evt)=>{
            if (!evt.progress) {
                return;
            }
            const normalize = normalizer("upload");
            evt.progress.on("progress", (prog)=>evt.context.channels.progress.publish(normalize(prog)));
        }
    };
}
const promise = function() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const PromiseImplementation = options.implementation || Promise;
    if (!PromiseImplementation) {
        throw new Error("`Promise` is not available in global scope, and no implementation was passed");
    }
    return {
        onReturn: (channels, context)=>new PromiseImplementation((resolve, reject)=>{
                const cancel = context.options.cancelToken;
                if (cancel) {
                    cancel.promise.then((reason)=>{
                        channels.abort.publish(reason);
                        reject(reason);
                    });
                }
                channels.error.subscribe(reject);
                channels.response.subscribe((response)=>{
                    resolve(options.onlyBody ? response.body : response);
                });
                setTimeout(()=>{
                    try {
                        channels.request.publish(context);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            })
    };
};
class Cancel {
    constructor(message){
        this.__CANCEL__ = true;
        this.message = message;
    }
    toString() {
        return "Cancel".concat(this.message ? ": ".concat(this.message) : "");
    }
}
const _CancelToken = class {
    constructor(executor){
        if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
        }
        let resolvePromise = null;
        this.promise = new Promise((resolve)=>{
            resolvePromise = resolve;
        });
        executor((message)=>{
            if (this.reason) {
                return;
            }
            this.reason = new Cancel(message);
            resolvePromise(this.reason);
        });
    }
};
let CancelToken = _CancelToken;
CancelToken.source = ()=>{
    let cancel;
    const token = new _CancelToken((can)=>{
        cancel = can;
    });
    return {
        token,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- we know from the implementation that it's assigned during `constructor`
        cancel
    };
};
const isCancel = (value)=>!!(value && (value == null ? void 0 : value.__CANCEL__));
promise.Cancel = Cancel;
promise.CancelToken = CancelToken;
promise.isCancel = isCancel;
function proxy(_proxy) {
    if (_proxy !== false && (!_proxy || !_proxy.host)) {
        throw new Error("Proxy middleware takes an object of host, port and auth properties");
    }
    return {
        processOptions: (options)=>Object.assign({
                proxy: _proxy
            }, options)
    };
}
var defaultShouldRetry = (err, num, options)=>{
    if (options.method !== "GET" && options.method !== "HEAD") {
        return false;
    }
    if (err.response && err.response.statusCode) {
        return false;
    }
    return allowed__default.default(err);
};
const isStream = (stream)=>stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
var sharedRetry = (opts)=>{
    const maxRetries = opts.maxRetries || 5;
    const retryDelay = opts.retryDelay || getRetryDelay;
    const allowRetry = opts.shouldRetry;
    return {
        onError: (err, context)=>{
            const options = context.options;
            const max = options.maxRetries || maxRetries;
            const shouldRetry = options.shouldRetry || allowRetry;
            const attemptNumber = options.attemptNumber || 0;
            if (isStream(options.body)) {
                return err;
            }
            if (!shouldRetry(err, attemptNumber, options) || attemptNumber >= max) {
                return err;
            }
            const newContext = Object.assign({}, context, {
                options: Object.assign({}, options, {
                    attemptNumber: attemptNumber + 1
                })
            });
            setTimeout(()=>context.channels.request.publish(newContext), retryDelay(attemptNumber));
            return null;
        }
    };
};
function getRetryDelay(attemptNum) {
    return 100 * Math.pow(2, attemptNum) + Math.random() * 100;
}
const retry = function() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return sharedRetry({
        shouldRetry: defaultShouldRetry,
        ...opts
    });
};
retry.shouldRetry = defaultShouldRetry;
function encode(data) {
    const query = new URLSearchParams();
    const nest = (name, _value)=>{
        const value = _value instanceof Set ? Array.from(_value) : _value;
        if (Array.isArray(value)) {
            if (value.length) {
                for(const index in value){
                    nest("".concat(name, "[").concat(index, "]"), value[index]);
                }
            } else {
                query.append("".concat(name, "[]"), "");
            }
        } else if (typeof value === "object" && value !== null) {
            for (const [key, obj] of Object.entries(value)){
                nest("".concat(name, "[").concat(key, "]"), obj);
            }
        } else {
            query.append(name, value);
        }
    };
    for (const [key, value] of Object.entries(data)){
        nest(key, value);
    }
    return query.toString();
}
function urlEncoded() {
    return {
        processOptions: (options)=>{
            const body = options.body;
            if (!body) {
                return options;
            }
            const isStream = typeof body.pipe === "function";
            const shouldSerialize = !isStream && !isBuffer(body) && isPlainObject.isPlainObject(body);
            if (!shouldSerialize) {
                return options;
            }
            return {
                ...options,
                body: encode(options.body),
                headers: {
                    ...options.headers,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };
        }
    };
}
exports.processOptions = defaultOptionsValidator.processOptions;
exports.validateOptions = defaultOptionsValidator.validateOptions;
exports.Cancel = Cancel;
exports.CancelToken = CancelToken;
exports.base = base;
exports.debug = debug;
exports.headers = headers;
exports.httpErrors = httpErrors;
exports.injectResponse = injectResponse;
exports.jsonRequest = jsonRequest;
exports.jsonResponse = jsonResponse;
exports.keepAlive = keepAlive;
exports.mtls = mtls;
exports.observable = observable;
exports.progress = progress;
exports.promise = promise;
exports.proxy = proxy;
exports.retry = retry;
exports.urlEncoded = urlEncoded; //# sourceMappingURL=middleware.cjs.map


/***/ }),

/***/ 62010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
var client = __webpack_require__(19402);
var groq = __webpack_require__(18451);
function _interopDefaultCompat(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}
var groq__default = /*#__PURE__*/ _interopDefaultCompat(groq);
function createClient(config) {
    let { // eslint-disable-next-line prefer-const, no-process-env
    studioUrl =process.env.NEXT_PUBLIC_SANITY_STUDIO_URL , encodeSourceMap =studioUrl ? "auto" : false  } = config;
    if (encodeSourceMap === "auto" && process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
        encodeSourceMap = true;
    }
    return client.createClient({
        ...config,
        studioUrl,
        encodeSourceMap
    });
}
Object.defineProperty(exports, "Ml", ({
    enumerable: true,
    get: function() {
        return groq__default.default;
    }
}));
exports.eI = createClient; //# sourceMappingURL=index.cjs.map


/***/ }),

/***/ 13568:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "production" === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === "function" ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}



/***/ }),

/***/ 66554:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject)
/* harmony export */ });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function isObject(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
    var ctor, prot;
    if (isObject(o) === false) return false;
    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
    }
    // Most likely a plain Object
    return true;
}



/***/ })

};
;