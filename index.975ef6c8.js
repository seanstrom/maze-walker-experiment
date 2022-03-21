// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainPy = require("./main.py");
var _smallJson = require("./mazes/small.json");
var _smallJsonDefault = parcelHelpers.interopDefault(_smallJson);
var _largeJson = require("./mazes/large.json");
var _largeJsonDefault = parcelHelpers.interopDefault(_largeJson);
var _trickyJson = require("./mazes/tricky.json");
var _trickyJsonDefault = parcelHelpers.interopDefault(_trickyJson);
var _indexScss = require("./index.scss");
window.mazes = {
    small: _smallJsonDefault.default,
    large: _largeJsonDefault.default,
    tricky: _trickyJsonDefault.default
};
_mainPy.main();

},{"./main.py":"lKqyR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./index.scss":"lJZlQ","./mazes/small.json":"av36r","./mazes/large.json":"lhUw4","./mazes/tricky.json":"eVQXa"}],"lKqyR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mainJs = require("../.build/main.js");
parcelHelpers.exportAll(_mainJs, exports);

},{"../.build/main.js":"ksBEn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksBEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchNode", ()=>SearchNode
);
parcelHelpers.export(exports, "SearchQueue", ()=>SearchQueue
);
parcelHelpers.export(exports, "SearchStack", ()=>SearchStack
);
parcelHelpers.export(exports, "SearchGreedy", ()=>SearchGreedy
);
parcelHelpers.export(exports, "SearchStar", ()=>SearchStar
);
parcelHelpers.export(exports, "State", ()=>State
);
parcelHelpers.export(exports, "NextStep", ()=>NextStep
);
parcelHelpers.export(exports, "Play", ()=>Play
);
parcelHelpers.export(exports, "Pause", ()=>Pause
);
parcelHelpers.export(exports, "Reset", ()=>Reset
);
parcelHelpers.export(exports, "ChangeMaze", ()=>ChangeMaze
);
parcelHelpers.export(exports, "ChangeStrategy", ()=>ChangeStrategy
);
parcelHelpers.export(exports, "small_maze_id", ()=>small_maze_id
);
parcelHelpers.export(exports, "large_maze_id", ()=>large_maze_id
);
parcelHelpers.export(exports, "tricky_maze_id", ()=>tricky_maze_id
);
parcelHelpers.export(exports, "bfs_strategy_id", ()=>bfs_strategy_id
);
parcelHelpers.export(exports, "dfs_strategy_id", ()=>dfs_strategy_id
);
parcelHelpers.export(exports, "greedy_strategy_id", ()=>greedy_strategy_id
);
parcelHelpers.export(exports, "astar_strategy_id", ()=>astar_strategy_id
);
parcelHelpers.export(exports, "opposite_directions", ()=>opposite_directions
);
parcelHelpers.export(exports, "make_id", ()=>make_id
);
parcelHelpers.export(exports, "add_node", ()=>add_node
);
parcelHelpers.export(exports, "add_edge", ()=>add_edge
);
parcelHelpers.export(exports, "find_markers", ()=>find_markers
);
parcelHelpers.export(exports, "is_valid_space", ()=>is_valid_space
);
parcelHelpers.export(exports, "detect_neighbors", ()=>detect_neighbors
);
parcelHelpers.export(exports, "build_graph_helper", ()=>build_graph_helper
);
parcelHelpers.export(exports, "build_graph", ()=>build_graph
);
parcelHelpers.export(exports, "init", ()=>init
);
parcelHelpers.export(exports, "next_step", ()=>next_step
);
parcelHelpers.export(exports, "play", ()=>play
);
parcelHelpers.export(exports, "pause", ()=>pause
);
parcelHelpers.export(exports, "reset", ()=>reset
);
parcelHelpers.export(exports, "change_maze", ()=>change_maze
);
parcelHelpers.export(exports, "change_strategy", ()=>change_strategy
);
parcelHelpers.export(exports, "py_update", ()=>py_update
);
parcelHelpers.export(exports, "action", ()=>action
);
parcelHelpers.export(exports, "view_cell", ()=>view_cell
);
parcelHelpers.export(exports, "view_row", ()=>view_row
);
parcelHelpers.export(exports, "view", ()=>view
);
parcelHelpers.export(exports, "main", ()=>main
);
// Transcrypt'ed from Python, 2022-03-21 17:12:49
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var _ffiJsJs = require("./ffi.js.js");
var _typingJs = require("./typing.js");
var _dataclassesJs = require("./dataclasses.js");
var __name__ = '__main__';
var SearchNode = _orgTranscryptRuntimeJs.__class__('SearchNode', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    id: null,
    kind: null,
    direction: null,
    parent: null,
    position: null
});
for (let aClass of SearchNode.__bases__)_orgTranscryptRuntimeJs.__mergefields__(SearchNode, aClass);
_orgTranscryptRuntimeJs.__mergefields__(SearchNode, {
    __reprfields__: new Set([
        'id',
        'kind',
        'direction',
        'parent'
    ]),
    __comparefields__: new Set([
        'id',
        'kind',
        'direction',
        'parent'
    ]),
    __initfields__: new Set([
        'id',
        'kind',
        'direction',
        'parent'
    ])
});
var SearchQueue = _orgTranscryptRuntimeJs.__class__('SearchQueue', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            self.search = [];
        });
    },
    get empty () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            return _orgTranscryptRuntimeJs.len(self.search) == 0;
        });
    },
    get add () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, node) {
            self.search.append(node);
        });
    },
    get remove () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            if (!self.empty()) return self.search.py_pop(0);
        });
    }
});
var SearchStack = _orgTranscryptRuntimeJs.__class__('SearchStack', [
    SearchQueue
], {
    __module__: __name__,
    get remove () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            if (!self.empty()) return self.search.py_pop();
        });
    }
});
var SearchGreedy = _orgTranscryptRuntimeJs.__class__('SearchGreedy', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, target_pos) {
            self.search = _ffiJsJs.Heap(self.compare);
            self.target_pos = target_pos;
        });
    },
    get empty () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            return self.search.length == 0;
        });
    },
    get distance () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, node) {
            var __left0__ = node.position;
            var node_x = __left0__[0];
            var node_y = __left0__[1];
            var __left0__ = self.target_pos;
            var target_x = __left0__[0];
            var target_y = __left0__[1];
            var x_distance = _orgTranscryptRuntimeJs.abs(target_x - node_x);
            var y_distance = _orgTranscryptRuntimeJs.abs(target_y - node_y);
            return x_distance + y_distance;
        });
    },
    get compare () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, node_a, node_b) {
            var node_a_distance = self.distance(node_a);
            var node_b_distance = self.distance(node_b);
            if (node_a_distance < node_b_distance) return -1;
            else if (node_a_distance > node_b_distance) return 1;
            else return 0;
        });
    },
    get add () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, node) {
            self.search.push(node);
        });
    },
    get remove () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            return self.search.pop(self.search);
        });
    }
});
var SearchStar = _orgTranscryptRuntimeJs.__class__('SearchStar', [
    SearchGreedy
], {
    __module__: __name__,
    get cost () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, node) {
            var count = 0;
            while(node.parent !== null){
                count++;
                var node = node.parent;
            }
            return count;
        });
    },
    get compare () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, node_a, node_b) {
            var node_a_cost = self.cost(node_a);
            var node_b_cost = self.cost(node_b);
            var node_a_distance = self.distance(node_a);
            var node_b_distance = self.distance(node_b);
            var node_a_value = node_a_distance + node_a_cost;
            var node_b_value = node_b_distance + node_b_cost;
            if (node_a_value < node_b_value) return -1;
            else if (node_a_value > node_b_value) return 1;
            else if (node_a_distance < node_b_distance) return -1;
            else if (node_a_distance > node_b_distance) return 1;
            else return 0;
        });
    }
});
var State = _orgTranscryptRuntimeJs.__class__('State', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    graph: null,
    status: null,
    search: null,
    maze_id: _orgTranscryptRuntimeJs.tuple([
        null
    ]),
    strategy: _orgTranscryptRuntimeJs.tuple([
        null
    ]),
    playing: false,
    path: null,
    layout: null,
    markers: null,
    visited: null,
    current_node: null
});
for (let aClass1 of State.__bases__)_orgTranscryptRuntimeJs.__mergefields__(State, aClass1);
_orgTranscryptRuntimeJs.__mergefields__(State, {
    __reprfields__: new Set([
        'graph',
        'status',
        'search',
        'maze_id',
        'strategy',
        'playing',
        'current_node'
    ]),
    __comparefields__: new Set([
        'graph',
        'status',
        'search',
        'maze_id',
        'strategy',
        'playing',
        'current_node'
    ]),
    __initfields__: new Set([
        'graph',
        'status',
        'search',
        'maze_id',
        'strategy',
        'playing',
        'current_node'
    ])
});
var NextStep = _orgTranscryptRuntimeJs.__class__('NextStep', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    }
});
for (let aClass2 of NextStep.__bases__)_orgTranscryptRuntimeJs.__mergefields__(NextStep, aClass2);
_orgTranscryptRuntimeJs.__mergefields__(NextStep, {
    __reprfields__: new Set([]),
    __comparefields__: new Set([]),
    __initfields__: new Set([])
});
var Play = _orgTranscryptRuntimeJs.__class__('Play', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    speed: 500
});
for (let aClass3 of Play.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Play, aClass3);
_orgTranscryptRuntimeJs.__mergefields__(Play, {
    __reprfields__: new Set([
        'speed'
    ]),
    __comparefields__: new Set([
        'speed'
    ]),
    __initfields__: new Set([
        'speed'
    ])
});
var Pause = _orgTranscryptRuntimeJs.__class__('Pause', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    }
});
for (let aClass4 of Pause.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Pause, aClass4);
_orgTranscryptRuntimeJs.__mergefields__(Pause, {
    __reprfields__: new Set([]),
    __comparefields__: new Set([]),
    __initfields__: new Set([])
});
var Reset = _orgTranscryptRuntimeJs.__class__('Reset', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    }
});
for (let aClass5 of Reset.__bases__)_orgTranscryptRuntimeJs.__mergefields__(Reset, aClass5);
_orgTranscryptRuntimeJs.__mergefields__(Reset, {
    __reprfields__: new Set([]),
    __comparefields__: new Set([]),
    __initfields__: new Set([])
});
var ChangeMaze = _orgTranscryptRuntimeJs.__class__('ChangeMaze', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    maze_id: null
});
for (let aClass6 of ChangeMaze.__bases__)_orgTranscryptRuntimeJs.__mergefields__(ChangeMaze, aClass6);
_orgTranscryptRuntimeJs.__mergefields__(ChangeMaze, {
    __reprfields__: new Set([
        'maze_id'
    ]),
    __comparefields__: new Set([
        'maze_id'
    ]),
    __initfields__: new Set([
        'maze_id'
    ])
});
var ChangeStrategy = _orgTranscryptRuntimeJs.__class__('ChangeStrategy', [
    _orgTranscryptRuntimeJs.object
], {
    __module__: __name__,
    get __init__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            var kwargs = _orgTranscryptRuntimeJs.dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = _orgTranscryptRuntimeJs.tuple();
            let names = self.__initfields__.values();
            for (let arg of args)self[names.next().value] = arg;
            for (let name of kwargs.py_keys())self[name] = kwargs[name];
        });
    },
    get __repr__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self) {
            let names = self.__reprfields__.values();
            let fields = [];
            for (let name of names)fields.push(name + '=' + _orgTranscryptRuntimeJs.repr(self[name]));
            return self.__name__ + '(' + ', '.join(fields) + ')';
        });
    },
    get __eq__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__eq__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ne__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ne__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __lt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__lt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __le__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__le__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __gt__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__gt__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    get __ge__ () {
        return _orgTranscryptRuntimeJs.__get__(this, function(self, other) {
            let names = self.__comparefields__.values();
            let selfFields = [];
            let otherFields = [];
            for (let name of names){
                selfFields.push(self[name]);
                otherFields.push(other[name]);
            }
            return _orgTranscryptRuntimeJs.list(selfFields).__ge__(_orgTranscryptRuntimeJs.list(otherFields));
        });
    },
    strategy_id: null
});
for (let aClass7 of ChangeStrategy.__bases__)_orgTranscryptRuntimeJs.__mergefields__(ChangeStrategy, aClass7);
_orgTranscryptRuntimeJs.__mergefields__(ChangeStrategy, {
    __reprfields__: new Set([
        'strategy_id'
    ]),
    __comparefields__: new Set([
        'strategy_id'
    ]),
    __initfields__: new Set([
        'strategy_id'
    ])
});
var small_maze_id = 'small';
var large_maze_id = 'large';
var tricky_maze_id = 'tricky';
var bfs_strategy_id = 'bfs-strategy';
var dfs_strategy_id = 'dfs-strategy';
var greedy_strategy_id = 'greedy-strategy';
var astar_strategy_id = 'astar-strategy';
var opposite_directions = _orgTranscryptRuntimeJs.dict(_orgTranscryptRuntimeJs.__kwargtrans__({
    up: 'down',
    down: 'up',
    left: 'right',
    right: 'left'
}));
var make_id = function(cell_index, row_index) {
    return '{}'.format(_orgTranscryptRuntimeJs.tuple([
        cell_index,
        row_index
    ]));
};
var add_node = function(graph, node_id, options) {
    if (!graph.hasNode(node_id)) graph.addNode(node_id, options);
};
var add_edge = function(graph, from_node_id, to_node_id, options) {
    if (!graph.hasEdge(from_node_id, to_node_id)) graph.addEdge(from_node_id, to_node_id, options);
};
var find_markers = function(maze_layout) {
    var start_marker = _orgTranscryptRuntimeJs.tuple([
        null,
        null
    ]);
    var finish_marker = _orgTranscryptRuntimeJs.tuple([
        null,
        null
    ]);
    for (var [row_index, row] of _orgTranscryptRuntimeJs.enumerate(maze_layout))for (var [cell_index, cell] of _orgTranscryptRuntimeJs.enumerate(row)){
        var kind = cell['kind'];
        if (kind == 'start') var start_marker = _orgTranscryptRuntimeJs.tuple([
            cell_index,
            row_index
        ]);
        if (kind == 'finish') var finish_marker = _orgTranscryptRuntimeJs.tuple([
            cell_index,
            row_index
        ]);
    }
    return _orgTranscryptRuntimeJs.tuple([
        start_marker,
        finish_marker
    ]);
};
var is_valid_space = function(cell) {
    var kind = cell['kind'];
    var statuses = [
        'open',
        'start',
        'finish'
    ];
    return _orgTranscryptRuntimeJs.__in__(kind, statuses);
};
var detect_neighbors = function(rows, node_pos) {
    var neighbors = [];
    var __left0__ = node_pos;
    var x = __left0__[0];
    var y = __left0__[1];
    var row = rows[y];
    var cells_total = _orgTranscryptRuntimeJs.len(row);
    var rows_total = _orgTranscryptRuntimeJs.len(rows);
    var candidates = [
        _orgTranscryptRuntimeJs.tuple([
            _orgTranscryptRuntimeJs.tuple([
                x,
                y + 1
            ]),
            'down'
        ]),
        _orgTranscryptRuntimeJs.tuple([
            _orgTranscryptRuntimeJs.tuple([
                x + 1,
                y
            ]),
            'right'
        ]),
        _orgTranscryptRuntimeJs.tuple([
            _orgTranscryptRuntimeJs.tuple([
                x - 1,
                y
            ]),
            'left'
        ]),
        _orgTranscryptRuntimeJs.tuple([
            _orgTranscryptRuntimeJs.tuple([
                x,
                y - 1
            ]),
            'up'
        ])
    ];
    for (var [pos, direction] of candidates){
        var __left0__ = pos;
        var _x = __left0__[0];
        var _y = __left0__[1];
        if (0 <= _x && _x < cells_total && 0 <= _y && _y < rows_total) {
            var cell = rows[_y][_x];
            if (is_valid_space(cell)) neighbors.append(_orgTranscryptRuntimeJs.tuple([
                direction,
                pos
            ]));
        }
    }
    return neighbors;
};
var build_graph_helper = function(graph, layout, node_pos) {
    var node_id = make_id(...node_pos);
    var neighbors = detect_neighbors(layout, node_pos);
    add_node(graph, node_id, _orgTranscryptRuntimeJs.dict(_orgTranscryptRuntimeJs.__kwargtrans__({
        position: node_pos
    })));
    for (var [direction, neighbor_pos] of neighbors){
        var neighbor_id = make_id(...neighbor_pos);
        if (graph.hasNode(neighbor_id)) {
            add_edge(graph, node_id, neighbor_id, _orgTranscryptRuntimeJs.dict(_orgTranscryptRuntimeJs.__kwargtrans__({
                direction: direction
            })));
            add_edge(graph, neighbor_id, node_id, _orgTranscryptRuntimeJs.dict(_orgTranscryptRuntimeJs.__kwargtrans__({
                direction: opposite_directions[direction]
            })));
        }
    }
    for (var [_, next_pos] of neighbors){
        var next_id = make_id(...next_pos);
        if (!graph.hasNode(next_id)) build_graph_helper(graph, layout, next_pos);
    }
};
var build_graph = function(maze_layout, start_pos) {
    var graph = _ffiJsJs.Graph();
    build_graph_helper(graph, maze_layout, start_pos);
    return graph;
};
var init = function(maze_id, strategy_id) {
    var maze_layout = _ffiJsJs.window.mazes[maze_id]['rows'];
    var markers = find_markers(maze_layout);
    var __left0__ = markers;
    var start_pos = __left0__[0];
    var finish_pos = __left0__[1];
    var start_id = make_id(...start_pos);
    var maze_graph = build_graph(maze_layout, start_pos);
    var search_node = SearchNode(_orgTranscryptRuntimeJs.__kwargtrans__({
        id: start_id
    }));
    var match_strategy = function(strategy) {
        if (strategy == bfs_strategy_id) return SearchQueue();
        else if (strategy == dfs_strategy_id) return SearchStack();
        else if (strategy == greedy_strategy_id) return SearchGreedy(finish_pos);
        else if (strategy == astar_strategy_id) return SearchStar(finish_pos);
    };
    var search_strategy = match_strategy(strategy_id);
    var to_state = function() {
        return State(_orgTranscryptRuntimeJs.__kwargtrans__({
            playing: false,
            status: 'searching',
            strategy: strategy_id,
            maze_id: maze_id,
            path: _orgTranscryptRuntimeJs.dict(),
            visited: _orgTranscryptRuntimeJs.dict(),
            markers: markers,
            graph: maze_graph,
            layout: maze_layout,
            search: search_strategy,
            current_node: search_node
        }));
    };
    return to_state;
};
var next_step = function(state) {
    if (state.status == 'found') return state;
    if (state.status == 'missing') return state;
    var __left0__ = state.markers;
    var _ = __left0__[0];
    var finish_pos = __left0__[1];
    var target_id = make_id(...finish_pos);
    var neighbors = state.graph.neighbors(state.current_node.id);
    for (var neighbor_id of neighbors){
        var edge = state.graph.edge(state.current_node.id, neighbor_id);
        var position = state.graph.getNodeAttribute(neighbor_id, 'position');
        var direction = state.graph.getEdgeAttribute(edge, 'direction');
        if (!state.visited[neighbor_id]) state.search.add(SearchNode(_orgTranscryptRuntimeJs.__kwargtrans__({
            id: neighbor_id,
            parent: state.current_node,
            position: position,
            direction: direction
        })));
    }
    if (!state.visited[state.current_node.id]) state.visited[state.current_node.id] = true;
    var next_node = !state.search.empty() ? state.search.remove() : state.current_node;
    var match_node = function(node) {
        if (node.id == target_id) return 'found';
        else if (node.id == state.current_node.id) return 'missing';
        else return 'searching';
    };
    var next_status = match_node(next_node);
    var match_status = function(status) {
        if (status == 'found') {
            var path = [];
            var node = next_node;
            while(node !== null){
                path.append(node);
                var node = node.parent;
            }
            for (var piece of path)state.path[piece.id] = true;
        }
        return state.path;
    };
    var next_path = match_status(next_status);
    var next_state = State(_orgTranscryptRuntimeJs.__kwargtrans__(_ffiJsJs.asdict(state)));
    next_state.path = next_path;
    next_state.status = next_status;
    next_state.current_node = next_node;
    return next_state;
};
var play = function(state, msg) {
    var play_action = function(current_state) {
        if (current_state.playing) return action(Play())(current_state);
        else return function __lambda__() {
            return current_state;
        };
    };
    var task = function(dispatch) {
        _ffiJsJs.window.setTimeout(function __lambda__() {
            return dispatch(play_action);
        }, msg.speed);
    };
    var match_state = function(_state) {
        if (_state.playing) return py_update(_state, NextStep());
        else return State(_orgTranscryptRuntimeJs.__kwargtrans__(_ffiJsJs.asdict(_state)));
    };
    var next_state = match_state(state);
    next_state.playing = true;
    return _orgTranscryptRuntimeJs.tuple([
        next_state,
        task
    ]);
};
var pause = function(prev_state) {
    var pause_action = function(state) {
        var next_state = State(_orgTranscryptRuntimeJs.__kwargtrans__(_ffiJsJs.asdict(state)));
        next_state.playing = false;
        return next_state;
    };
    return [
        prev_state,
        function __lambda__(dispatch) {
            return dispatch(pause_action);
        }
    ];
};
var reset = function(state) {
    return init(state.maze_id, state.strategy)();
};
var change_maze = function(state, msg) {
    return init(msg.maze_id, state.strategy)();
};
var change_strategy = function(state, msg) {
    return init(state.maze_id, msg.strategy_id)();
};
var py_update = function(state, msg) {
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === NextStep) return next_step(state);
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === Play) return play(state, msg);
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === Pause) return pause(state);
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === Reset) return reset(state);
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === ChangeMaze) return change_maze(state, msg);
    if (_orgTranscryptRuntimeJs.py_typeof(msg) === ChangeStrategy) return change_strategy(state, msg);
    return state;
};
var action = function(msg) {
    return function __lambda__(state) {
        return py_update(state, msg);
    };
};
var view_cell = function(state, row_index, cell_index, cell) {
    var kind = cell['kind'];
    var cell_id = make_id(cell_index, row_index);
    var current_id = state.current_node.id;
    var path = state.path[cell_id] ? 'path' : '';
    var marker = cell_id == current_id ? 'X' : '';
    var current = cell_id == current_id ? 'current' : '';
    var visited = state.visited[cell_id] ? 'visited' : '';
    var class_names = ' '.join([
        'cell',
        visited,
        path,
        current,
        kind
    ]);
    return _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
        'class': class_names
    }), [
        _ffiJsJs.Html.p(_orgTranscryptRuntimeJs.dict({
        }), [
            _ffiJsJs.Html.text(marker)
        ])
    ]);
};
var view_row = function(state, row_index, row) {
    return _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
        'class': 'row'
    }), function() {
        var __accu0__ = [];
        for (var [cell_index, cell] of _orgTranscryptRuntimeJs.enumerate(row))__accu0__.append(view_cell(state, row_index, cell_index, cell));
        return __accu0__;
    }());
};
var view = function(state) {
    return _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
        'class': 'container'
    }), [
        _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
            'class': 'layout'
        }), [
            _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                'class': 'frame'
            }), [
                _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    'class': 'maze'
                }), function() {
                    var __accu0__ = [];
                    for (var [row_index, row] of _orgTranscryptRuntimeJs.enumerate(state.layout))__accu0__.append(view_row(state, row_index, row));
                    return __accu0__;
                }())
            ]),
            _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                'class': 'controls'
            }), [
                _ffiJsJs.Html.button(_orgTranscryptRuntimeJs.dict({
                    'onclick': state.playing ? action(Pause()) : action(Play())
                }), [
                    _ffiJsJs.Html.text(state.playing ? 'Pause' : 'Play')
                ]),
                _ffiJsJs.Html.button(_orgTranscryptRuntimeJs.dict({
                    'onclick': action(NextStep())
                }), [
                    _ffiJsJs.Html.text('Next')
                ]),
                _ffiJsJs.Html.button(_orgTranscryptRuntimeJs.dict({
                    'onclick': action(Reset())
                }), [
                    _ffiJsJs.Html.text('Reset')
                ]),
                _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    'class': 'input-group'
                }), [
                    _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    }), [
                        _ffiJsJs.Html.input(_orgTranscryptRuntimeJs.dict({
                            'id': bfs_strategy_id,
                            'type': 'radio',
                            'name': 'strategy',
                            'checked': state.strategy == bfs_strategy_id,
                            'onchange': action(ChangeStrategy(bfs_strategy_id))
                        }), []),
                        _ffiJsJs.Html.label(_orgTranscryptRuntimeJs.dict({
                            'for': bfs_strategy_id
                        }), [
                            _ffiJsJs.Html.text('BFS')
                        ])
                    ]),
                    _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    }), [
                        _ffiJsJs.Html.input(_orgTranscryptRuntimeJs.dict({
                            'id': dfs_strategy_id,
                            'type': 'radio',
                            'name': 'strategy',
                            'checked': state.strategy == dfs_strategy_id,
                            'onchange': action(ChangeStrategy(dfs_strategy_id))
                        }), []),
                        _ffiJsJs.Html.label(_orgTranscryptRuntimeJs.dict({
                            'for': dfs_strategy_id
                        }), [
                            _ffiJsJs.Html.text('DFS')
                        ])
                    ]),
                    _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    }), [
                        _ffiJsJs.Html.input(_orgTranscryptRuntimeJs.dict({
                            'id': greedy_strategy_id,
                            'type': 'radio',
                            'name': 'strategy',
                            'checked': state.strategy == greedy_strategy_id,
                            'onchange': action(ChangeStrategy(greedy_strategy_id))
                        }), []),
                        _ffiJsJs.Html.label(_orgTranscryptRuntimeJs.dict({
                            'for': greedy_strategy_id
                        }), [
                            _ffiJsJs.Html.text('GBFS')
                        ])
                    ]),
                    _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    }), [
                        _ffiJsJs.Html.input(_orgTranscryptRuntimeJs.dict({
                            'id': astar_strategy_id,
                            'type': 'radio',
                            'name': 'strategy',
                            'checked': state.strategy == astar_strategy_id,
                            'onchange': action(ChangeStrategy(astar_strategy_id))
                        }), []),
                        _ffiJsJs.Html.label(_orgTranscryptRuntimeJs.dict({
                            'for': astar_strategy_id
                        }), [
                            _ffiJsJs.Html.text('A-Star')
                        ])
                    ])
                ]),
                _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    'class': 'input-group'
                }), [
                    _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    }), [
                        _ffiJsJs.Html.input(_orgTranscryptRuntimeJs.dict({
                            'id': small_maze_id,
                            'type': 'radio',
                            'name': 'maze',
                            'checked': state.maze_id == small_maze_id,
                            'onchange': action(ChangeMaze(small_maze_id))
                        }), []),
                        _ffiJsJs.Html.label(_orgTranscryptRuntimeJs.dict({
                            'for': small_maze_id
                        }), [
                            _ffiJsJs.Html.text('Small Maze')
                        ])
                    ]),
                    _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    }), [
                        _ffiJsJs.Html.input(_orgTranscryptRuntimeJs.dict({
                            'id': large_maze_id,
                            'type': 'radio',
                            'name': 'maze',
                            'checked': state.maze_id == large_maze_id,
                            'onchange': action(ChangeMaze(large_maze_id))
                        }), []),
                        _ffiJsJs.Html.label(_orgTranscryptRuntimeJs.dict({
                            'for': large_maze_id
                        }), [
                            _ffiJsJs.Html.text('Large Maze')
                        ])
                    ]),
                    _ffiJsJs.Html.div(_orgTranscryptRuntimeJs.dict({
                    }), [
                        _ffiJsJs.Html.input(_orgTranscryptRuntimeJs.dict({
                            'id': tricky_maze_id,
                            'type': 'radio',
                            'name': 'maze',
                            'checked': state.maze_id == tricky_maze_id,
                            'onchange': action(ChangeMaze(tricky_maze_id))
                        }), []),
                        _ffiJsJs.Html.label(_orgTranscryptRuntimeJs.dict({
                            'for': tricky_maze_id
                        }), [
                            _ffiJsJs.Html.text('Tricky Maze')
                        ])
                    ])
                ])
            ])
        ])
    ]);
};
var main = function() {
    var element = _ffiJsJs.document.getElementById('root');
    _ffiJsJs.Hyper.app(_orgTranscryptRuntimeJs.__kwargtrans__({
        node: element,
        view: view,
        init: init(large_maze_id, bfs_strategy_id)
    }));
};

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./ffi.js.js":"4SQGX","./dataclasses.js":"gr1Cz","./typing.js":"2pquK"}],"aJoBq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__envir__", ()=>__envir__
);
parcelHelpers.export(exports, "__nest__", ()=>__nest__
);
parcelHelpers.export(exports, "__init__", ()=>__init__
);
parcelHelpers.export(exports, "__get__", ()=>__get__
);
parcelHelpers.export(exports, "__getcm__", ()=>__getcm__
);
parcelHelpers.export(exports, "__getsm__", ()=>__getsm__
);
parcelHelpers.export(exports, "py_metatype", ()=>py_metatype
);
parcelHelpers.export(exports, "object", ()=>object
);
parcelHelpers.export(exports, "__class__", ()=>__class__
);
parcelHelpers.export(exports, "__pragma__", ()=>__pragma__
);
parcelHelpers.export(exports, "__call__", ()=>__call__
);
parcelHelpers.export(exports, "__kwargtrans__", ()=>__kwargtrans__
);
parcelHelpers.export(exports, "__super__", ()=>__super__
);
parcelHelpers.export(exports, "property", ()=>property
);
parcelHelpers.export(exports, "__setproperty__", ()=>__setproperty__
);
parcelHelpers.export(exports, "assert", ()=>assert
);
parcelHelpers.export(exports, "__mergekwargtrans__", ()=>__mergekwargtrans__
);
parcelHelpers.export(exports, "__mergefields__", ()=>__mergefields__
);
parcelHelpers.export(exports, "__withblock__", ()=>__withblock__
);
parcelHelpers.export(exports, "dir", ()=>dir
);
parcelHelpers.export(exports, "setattr", ()=>setattr
);
parcelHelpers.export(exports, "getattr", ()=>getattr
);
parcelHelpers.export(exports, "hasattr", ()=>hasattr
);
parcelHelpers.export(exports, "delattr", ()=>delattr
);
parcelHelpers.export(exports, "__in__", ()=>__in__
);
parcelHelpers.export(exports, "__specialattrib__", ()=>__specialattrib__
);
parcelHelpers.export(exports, "len", ()=>len
);
parcelHelpers.export(exports, "__i__", ()=>__i__
);
parcelHelpers.export(exports, "__k__", ()=>__k__
);
parcelHelpers.export(exports, "__t__", ()=>__t__
);
parcelHelpers.export(exports, "float", ()=>float
);
parcelHelpers.export(exports, "int", ()=>int
);
parcelHelpers.export(exports, "bool", ()=>bool
);
parcelHelpers.export(exports, "py_typeof", ()=>py_typeof
);
parcelHelpers.export(exports, "issubclass", ()=>issubclass
);
parcelHelpers.export(exports, "isinstance", ()=>isinstance
);
parcelHelpers.export(exports, "callable", ()=>callable
);
parcelHelpers.export(exports, "repr", ()=>repr
);
parcelHelpers.export(exports, "chr", ()=>chr
);
parcelHelpers.export(exports, "ord", ()=>ord
);
parcelHelpers.export(exports, "max", ()=>max
);
parcelHelpers.export(exports, "min", ()=>min
);
parcelHelpers.export(exports, "abs", ()=>abs
);
parcelHelpers.export(exports, "round", ()=>round
);
parcelHelpers.export(exports, "__jsUsePyNext__", ()=>__jsUsePyNext__
);
parcelHelpers.export(exports, "__pyUseJsNext__", ()=>__pyUseJsNext__
);
parcelHelpers.export(exports, "py_iter", ()=>py_iter
);
parcelHelpers.export(exports, "py_next", ()=>py_next
);
parcelHelpers.export(exports, "__PyIterator__", ()=>__PyIterator__
);
parcelHelpers.export(exports, "__JsIterator__", ()=>__JsIterator__
);
parcelHelpers.export(exports, "py_reversed", ()=>py_reversed
);
parcelHelpers.export(exports, "zip", ()=>zip
);
parcelHelpers.export(exports, "range", ()=>range
);
parcelHelpers.export(exports, "any", ()=>any
);
parcelHelpers.export(exports, "all", ()=>all
);
parcelHelpers.export(exports, "sum", ()=>sum
);
parcelHelpers.export(exports, "enumerate", ()=>enumerate
);
parcelHelpers.export(exports, "copy", ()=>copy
);
parcelHelpers.export(exports, "deepcopy", ()=>deepcopy
);
parcelHelpers.export(exports, "list", ()=>list
);
parcelHelpers.export(exports, "tuple", ()=>tuple
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "bytearray", ()=>bytearray
);
parcelHelpers.export(exports, "bytes", ()=>bytes
);
parcelHelpers.export(exports, "str", ()=>str
);
parcelHelpers.export(exports, "dict", ()=>dict
);
parcelHelpers.export(exports, "__jsmod__", ()=>__jsmod__
);
parcelHelpers.export(exports, "__mod__", ()=>__mod__
);
parcelHelpers.export(exports, "__pow__", ()=>__pow__
);
parcelHelpers.export(exports, "pow", ()=>pow
);
parcelHelpers.export(exports, "__neg__", ()=>__neg__
);
parcelHelpers.export(exports, "__matmul__", ()=>__matmul__
);
parcelHelpers.export(exports, "__mul__", ()=>__mul__
);
parcelHelpers.export(exports, "__truediv__", ()=>__truediv__
);
parcelHelpers.export(exports, "__floordiv__", ()=>__floordiv__
);
parcelHelpers.export(exports, "__add__", ()=>__add__
);
parcelHelpers.export(exports, "__sub__", ()=>__sub__
);
parcelHelpers.export(exports, "__lshift__", ()=>__lshift__
);
parcelHelpers.export(exports, "__rshift__", ()=>__rshift__
);
parcelHelpers.export(exports, "__or__", ()=>__or__
);
parcelHelpers.export(exports, "__xor__", ()=>__xor__
);
parcelHelpers.export(exports, "__and__", ()=>__and__
);
parcelHelpers.export(exports, "__eq__", ()=>__eq__
);
parcelHelpers.export(exports, "__ne__", ()=>__ne__
);
parcelHelpers.export(exports, "__lt__", ()=>__lt__
);
parcelHelpers.export(exports, "__le__", ()=>__le__
);
parcelHelpers.export(exports, "__gt__", ()=>__gt__
);
parcelHelpers.export(exports, "__ge__", ()=>__ge__
);
parcelHelpers.export(exports, "__imatmul__", ()=>__imatmul__
);
parcelHelpers.export(exports, "__ipow__", ()=>__ipow__
);
parcelHelpers.export(exports, "__ijsmod__", ()=>__ijsmod__
);
parcelHelpers.export(exports, "__imod__", ()=>__imod__
);
parcelHelpers.export(exports, "__imul__", ()=>__imul__
);
parcelHelpers.export(exports, "__idiv__", ()=>__idiv__
);
parcelHelpers.export(exports, "__iadd__", ()=>__iadd__
);
parcelHelpers.export(exports, "__isub__", ()=>__isub__
);
parcelHelpers.export(exports, "__ilshift__", ()=>__ilshift__
);
parcelHelpers.export(exports, "__irshift__", ()=>__irshift__
);
parcelHelpers.export(exports, "__ior__", ()=>__ior__
);
parcelHelpers.export(exports, "__ixor__", ()=>__ixor__
);
parcelHelpers.export(exports, "__iand__", ()=>__iand__
);
parcelHelpers.export(exports, "__getitem__", ()=>__getitem__
);
parcelHelpers.export(exports, "__setitem__", ()=>__setitem__
);
parcelHelpers.export(exports, "__getslice__", ()=>__getslice__
);
parcelHelpers.export(exports, "__setslice__", ()=>__setslice__
);
parcelHelpers.export(exports, "BaseException", ()=>BaseException
);
parcelHelpers.export(exports, "Exception", ()=>Exception
);
parcelHelpers.export(exports, "IterableError", ()=>IterableError
);
parcelHelpers.export(exports, "StopIteration", ()=>StopIteration
);
parcelHelpers.export(exports, "ValueError", ()=>ValueError
);
parcelHelpers.export(exports, "KeyError", ()=>KeyError
);
parcelHelpers.export(exports, "AssertionError", ()=>AssertionError
);
parcelHelpers.export(exports, "NotImplementedError", ()=>NotImplementedError
);
parcelHelpers.export(exports, "IndexError", ()=>IndexError
);
parcelHelpers.export(exports, "AttributeError", ()=>AttributeError
);
parcelHelpers.export(exports, "py_TypeError", ()=>py_TypeError
);
parcelHelpers.export(exports, "Warning", ()=>Warning
);
parcelHelpers.export(exports, "UserWarning", ()=>UserWarning
);
parcelHelpers.export(exports, "DeprecationWarning", ()=>DeprecationWarning
);
parcelHelpers.export(exports, "RuntimeWarning", ()=>RuntimeWarning
);
parcelHelpers.export(exports, "__sort__", ()=>__sort__
);
parcelHelpers.export(exports, "sorted", ()=>sorted
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "filter", ()=>filter
);
parcelHelpers.export(exports, "divmod", ()=>divmod
);
parcelHelpers.export(exports, "__Terminal__", ()=>__Terminal__
);
parcelHelpers.export(exports, "__terminal__", ()=>__terminal__
);
parcelHelpers.export(exports, "print", ()=>print
);
parcelHelpers.export(exports, "input", ()=>input
);
// Transcrypt'ed from Python, 2022-03-17 09:21:19
var __name__ = 'org.transcrypt.__runtime__';
var __envir__ = {
};
__envir__.interpreter_name = 'python';
__envir__.transpiler_name = 'transcrypt';
__envir__.executor_name = __envir__.transpiler_name;
__envir__.transpiler_version = '3.9.0';
function __nest__(headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != '') {
        var tailChain = tailNames.split('.');
        var firstNewIndex = tailChain.length;
        for(var index = 0; index < tailChain.length; index++){
            if (!current.hasOwnProperty(tailChain[index])) {
                firstNewIndex = index;
                break;
            }
            current = current[tailChain[index]];
        }
        for(var index = firstNewIndex; index < tailChain.length; index++){
            current[tailChain[index]] = {
            };
            current = current[tailChain[index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames(value))Object.defineProperty(current, attrib, {
        get () {
            return value[attrib];
        },
        enumerable: true,
        configurable: true
    });
}
function __init__(module) {
    if (!module.__inited__) {
        module.__all__.__init__(module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
}
function __get__(aThis, func, quotedFuncName) {
    if (aThis) {
        if (aThis.hasOwnProperty('__class__') || typeof aThis == 'string' || aThis instanceof String) {
            if (quotedFuncName) Object.defineProperty(aThis, quotedFuncName, {
                value: function() {
                    var args = [].slice.apply(arguments);
                    return func.apply(null, [
                        aThis
                    ].concat(args));
                },
                writable: true,
                enumerable: true,
                configurable: true
            });
            return function() {
                var args = [].slice.apply(arguments);
                return func.apply(null, [
                    aThis.__proxy__ ? aThis.__proxy__ : aThis
                ].concat(args));
            };
        } else return func;
    } else return func;
}
function __getcm__(aThis, func, quotedFuncName) {
    if (aThis.hasOwnProperty('__class__')) return function() {
        var args = [].slice.apply(arguments);
        return func.apply(null, [
            aThis.__class__
        ].concat(args));
    };
    else return function() {
        var args = [].slice.apply(arguments);
        return func.apply(null, [
            aThis
        ].concat(args));
    };
}
function __getsm__(aThis, func, quotedFuncName) {
    return func;
}
var py_metatype = {
    __name__: 'type',
    __bases__: [],
    __new__: function(meta, name, bases, attribs) {
        var cls = function() {
            var args = [].slice.apply(arguments);
            return cls.__new__(args);
        };
        for(var index = bases.length - 1; index >= 0; index--){
            var base = bases[index];
            for(var attrib in base){
                var descrip = Object.getOwnPropertyDescriptor(base, attrib);
                if (descrip == null) continue;
                Object.defineProperty(cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols(base)){
                let descrip = Object.getOwnPropertyDescriptor(base, symbol);
                Object.defineProperty(cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith('py_') ? name.slice(3) : name;
        cls.__bases__ = bases;
        for(var attrib in attribs){
            var descrip = Object.getOwnPropertyDescriptor(attribs, attrib);
            Object.defineProperty(cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols(attribs)){
            let descrip = Object.getOwnPropertyDescriptor(attribs, symbol);
            Object.defineProperty(cls, symbol, descrip);
        }
        return cls;
    }
};
py_metatype.__metaclass__ = py_metatype;
var object = {
    __init__: function(self) {
    },
    __metaclass__: py_metatype,
    __name__: 'object',
    __bases__: [],
    __new__: function(args) {
        var instance = Object.create(this, {
            __class__: {
                value: this,
                enumerable: true
            }
        });
        if ('__getattr__' in this || '__setattr__' in this) {
            instance.__proxy__ = new Proxy(instance, {
                get: function(target, name) {
                    let result = target[name];
                    if (result == undefined) return target.__getattr__(name);
                    else return result;
                },
                set: function(target, name, value) {
                    try {
                        target.__setattr__(name, value);
                    } catch (exception) {
                        target[name] = value;
                    }
                    return true;
                }
            });
            instance = instance.__proxy__;
        }
        this.__init__.apply(null, [
            instance
        ].concat(args));
        return instance;
    }
};
function __class__(name, bases, attribs, meta) {
    if (meta === undefined) meta = bases[0].__metaclass__;
    return meta.__new__(meta, name, bases, attribs);
}
function __pragma__() {
}
function __call__() {
    var args = [].slice.apply(arguments);
    if (typeof args[0] == 'object' && '__call__' in args[0]) return args[0].__call__.apply(args[1], args.slice(2));
    else return args[0].apply(args[1], args.slice(2));
}
__envir__.executor_name = __envir__.transpiler_name;
var __main__ = {
    __file__: ''
};
var __except__ = null;
function __kwargtrans__(anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
function __super__(aClass, methodName) {
    for (let base of aClass.__bases__){
        if (methodName in base) return base[methodName];
    }
    throw new Exception('Superclass method not found');
}
function property(getter, setter) {
    if (!setter) setter = function() {
    };
    return {
        get: function() {
            return getter(this);
        },
        set: function(value) {
            setter(this, value);
        },
        enumerable: true
    };
}
function __setproperty__(anObject, name, descriptor) {
    if (!anObject.hasOwnProperty(name)) Object.defineProperty(anObject, name, descriptor);
}
function assert(condition, message) {
    if (!condition) throw AssertionError(message, new Error());
}
function __mergekwargtrans__(object0, object1) {
    var result = {
    };
    for(var attrib in object0)result[attrib] = object0[attrib];
    for(var attrib in object1)result[attrib] = object1[attrib];
    return result;
}
function __mergefields__(targetClass, sourceClass) {
    let fieldNames = [
        '__reprfields__',
        '__comparefields__',
        '__initfields__'
    ];
    if (sourceClass[fieldNames[0]]) {
        if (targetClass[fieldNames[0]]) for (let fieldName of fieldNames)targetClass[fieldName] = new Set([
            ...targetClass[fieldName],
            ...sourceClass[fieldName]
        ]);
        else for (let fieldName1 of fieldNames)targetClass[fieldName1] = new Set(sourceClass[fieldName1]);
    }
}
function __withblock__(manager, statements) {
    if (hasattr(manager, '__enter__')) try {
        manager.__enter__();
        statements();
        manager.__exit__();
    } catch (exception) {
        if (!manager.__exit__(exception.name, exception, exception.stack)) throw exception;
    }
    else {
        statements();
        manager.close();
    }
}
function dir(obj) {
    var aList = [];
    for(var aKey in obj)aList.push(aKey.startsWith('py_') ? aKey.slice(3) : aKey);
    aList.sort();
    return aList;
}
function setattr(obj, name, value) {
    obj[name] = value;
}
function getattr(obj, name) {
    return name in obj ? obj[name] : obj['py_' + name];
}
function hasattr(obj, name) {
    try {
        return name in obj || 'py_' + name in obj;
    } catch (exception) {
        return false;
    }
}
function delattr(obj, name) {
    if (name in obj) delete obj[name];
    else delete obj['py_' + name];
}
function __in__(element, container) {
    if (container === undefined || container === null) return false;
    if (container.__contains__ instanceof Function) return container.__contains__(element);
    else return container.indexOf ? container.indexOf(element) > -1 : container.hasOwnProperty(element);
}
function __specialattrib__(attrib) {
    return attrib.startswith('__') && attrib.endswith('__') || attrib == 'constructor' || attrib.startswith('py_');
}
function len(anObject) {
    if (anObject === undefined || anObject === null) return 0;
    if (anObject.__len__ instanceof Function) return anObject.__len__();
    if (anObject.length !== undefined) return anObject.length;
    var length = 0;
    for(var attr in anObject)if (!__specialattrib__(attr)) length++;
    return length;
}
function __i__(any1) {
    return py_typeof(any1) == dict ? any1.py_keys() : any1;
}
function __k__(keyed, key) {
    var result = keyed[key];
    if (typeof result == 'undefined') {
        if (keyed instanceof Array) {
            if (key == +key && key >= 0 && keyed.length > key) return result;
            else throw IndexError(key, new Error());
        } else throw KeyError(key, new Error());
    }
    return result;
}
function __t__(target) {
    return target === undefined || target === null ? false : [
        'boolean',
        'number'
    ].indexOf(typeof target) >= 0 ? target : target.__bool__ instanceof Function ? target.__bool__() ? target : false : target.__len__ instanceof Function ? target.__len__() !== 0 ? target : false : target instanceof Function ? target : len(target) !== 0 ? target : false;
}
function float(any2) {
    if (any2 == 'inf') return Infinity;
    else if (any2 == '-inf') return -Infinity;
    else if (any2 == 'nan') return NaN;
    else if (isNaN(parseFloat(any2))) {
        if (any2 === false) return 0;
        else if (any2 === true) return 1;
        else throw ValueError("could not convert string to float: '" + str(any2) + "'", new Error());
    } else return +any2;
}
float.__name__ = 'float';
float.__bases__ = [
    object
];
function int(any3) {
    return float(any3) | 0;
}
int.__name__ = 'int';
int.__bases__ = [
    object
];
function bool(any4) {
    return !!__t__(any4);
}
bool.__name__ = 'bool';
bool.__bases__ = [
    int
];
function py_typeof(anObject) {
    var aType = typeof anObject;
    if (aType == 'object') try {
        return '__class__' in anObject ? anObject.__class__ : object;
    } catch (exception) {
        return aType;
    }
    else return aType == 'boolean' ? bool : aType == 'string' ? str : aType == 'number' ? anObject % 1 == 0 ? int : float : null;
}
function issubclass(aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo){
            if (issubclass(aClass, aClass2)) return true;
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) return true;
        else {
            var bases = [].slice.call(aClass2.__bases__);
            while(bases.length){
                aClass2 = bases.shift();
                if (aClass2 == classinfo) return true;
                if (aClass2.__bases__.length) bases = [].slice.call(aClass2.__bases__).concat(bases);
            }
            return false;
        }
    } catch (exception) {
        return aClass == classinfo || classinfo == object;
    }
}
function isinstance(anObject, classinfo) {
    try {
        return '__class__' in anObject ? issubclass(anObject.__class__, classinfo) : issubclass(py_typeof(anObject), classinfo);
    } catch (exception) {
        return issubclass(py_typeof(anObject), classinfo);
    }
}
function callable(anObject) {
    return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
}
function repr(anObject) {
    try {
        return anObject.__repr__();
    } catch (exception) {
        try {
            return anObject.__str__();
        } catch (exception) {
            try {
                if (anObject == null) return 'None';
                else if (anObject.constructor == Object) {
                    var result = '{';
                    var comma = false;
                    for(var attrib in anObject)if (!__specialattrib__(attrib)) {
                        if (attrib.isnumeric()) var attribRepr = attrib;
                        else var attribRepr = '\'' + attrib + '\'';
                        if (comma) result += ', ';
                        else comma = true;
                        result += attribRepr + ': ' + repr(anObject[attrib]);
                    }
                    result += '}';
                    return result;
                } else return typeof anObject == 'boolean' ? anObject.toString().capitalize() : anObject.toString();
            } catch (exception) {
                return '<object of type: ' + typeof anObject + '>';
            }
        }
    }
}
function chr(charCode) {
    return String.fromCharCode(charCode);
}
function ord(aChar) {
    return aChar.charCodeAt(0);
}
function max(nrOrSeq) {
    return arguments.length == 1 ? Math.max(...nrOrSeq) : Math.max(...arguments);
}
function min(nrOrSeq) {
    return arguments.length == 1 ? Math.min(...nrOrSeq) : Math.min(...arguments);
}
var abs = Math.abs;
function round(number, ndigits) {
    if (ndigits) {
        var scale = Math.pow(10, ndigits);
        number *= scale;
    }
    var rounded = Math.round(number);
    if (rounded - number == 0.5 && rounded % 2) rounded -= 1;
    if (ndigits) rounded /= scale;
    return rounded;
}
function __jsUsePyNext__() {
    try {
        var result = this.__next__();
        return {
            value: result,
            done: false
        };
    } catch (exception) {
        return {
            value: undefined,
            done: true
        };
    }
}
function __pyUseJsNext__() {
    var result = this.next();
    if (result.done) throw StopIteration(new Error());
    else return result.value;
}
function py_iter(iterable) {
    if (typeof iterable == 'string' || '__iter__' in iterable) {
        var result = iterable.__iter__();
        result.next = __jsUsePyNext__;
    } else if ('selector' in iterable) {
        var result = list(iterable).__iter__();
        result.next = __jsUsePyNext__;
    } else if ('next' in iterable) {
        var result = iterable;
        if (!('__next__' in result)) result.__next__ = __pyUseJsNext__;
    } else if (Symbol.iterator in iterable) {
        var result = iterable[Symbol.iterator]();
        result.__next__ = __pyUseJsNext__;
    } else throw IterableError(new Error());
    result[Symbol.iterator] = function() {
        return result;
    };
    return result;
}
function py_next(iterator) {
    try {
        var result = iterator.__next__();
    } catch (exception) {
        var result = iterator.next();
        if (result.done) throw StopIteration(new Error());
        else return result.value;
    }
    if (result == undefined) throw StopIteration(new Error());
    else return result;
}
function __PyIterator__(iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__PyIterator__.prototype.__next__ = function() {
    if (this.index < this.iterable.length) return this.iterable[this.index++];
    else throw StopIteration(new Error());
};
function __JsIterator__(iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__JsIterator__.prototype.next = function() {
    if (this.index < this.iterable.py_keys.length) return {
        value: this.index++,
        done: false
    };
    else return {
        value: undefined,
        done: true
    };
};
function py_reversed(iterable) {
    iterable = iterable.slice();
    iterable.reverse();
    return iterable;
}
function zip() {
    var args = [].slice.call(arguments);
    for(var i = 0; i < args.length; i++){
        if (typeof args[i] == 'string') args[i] = args[i].split('');
        else if (!Array.isArray(args[i])) args[i] = Array.from(args[i]);
    }
    var shortest = args.length == 0 ? [] : args.reduce(function(array0, array1) {
        return array0.length < array1.length ? array0 : array1;
    });
    return shortest.map(function(current1, index) {
        return args.map(function(current) {
            return current[index];
        });
    });
}
function range(start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) step = 1;
    if (step > 0 && start >= stop || step < 0 && start <= stop) return [];
    var result = [];
    for(var i = start; step > 0 ? i < stop : i > stop; i += step)result.push(i);
    return result;
}
function any(iterable) {
    for (let item of iterable){
        if (bool(item)) return true;
    }
    return false;
}
function all(iterable) {
    for (let item of iterable){
        if (!bool(item)) return false;
    }
    return true;
}
function sum(iterable) {
    let result = 0;
    for (let item of iterable)result += item;
    return result;
}
function enumerate(iterable) {
    return zip(range(len(iterable)), iterable);
}
function copy(anObject) {
    if (anObject == null || typeof anObject == "object") return anObject;
    else {
        var result = {
        };
        for(var attrib in obj)if (anObject.hasOwnProperty(attrib)) result[attrib] = anObject[attrib];
        return result;
    }
}
function deepcopy(anObject) {
    if (anObject == null || typeof anObject == "object") return anObject;
    else {
        var result = {
        };
        for(var attrib in obj)if (anObject.hasOwnProperty(attrib)) result[attrib] = deepcopy(anObject[attrib]);
        return result;
    }
}
function list(iterable) {
    let instance = iterable ? Array.from(iterable) : [];
    return instance;
}
Array.prototype.__class__ = list;
list.__name__ = 'list';
list.__bases__ = [
    object
];
Array.prototype.__iter__ = function() {
    return new __PyIterator__(this);
};
Array.prototype.__getslice__ = function(start, stop, step) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    else if (stop > this.length) stop = this.length;
    if (step == 1) return Array.prototype.slice.call(this, start, stop);
    let result = list([]);
    for(let index = start; index < stop; index += step)result.push(this[index]);
    return result;
};
Array.prototype.__setslice__ = function(start, stop, step, source) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    if (step == null) Array.prototype.splice.apply(this, [
        start,
        stop - start
    ].concat(source));
    else {
        let sourceIndex = 0;
        for(let targetIndex = start; targetIndex < stop; targetIndex += step)this[targetIndex] = source[sourceIndex++];
    }
};
Array.prototype.__repr__ = function() {
    if (this.__class__ == set && !this.length) return 'set()';
    let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
    for(let index = 0; index < this.length; index++){
        if (index) result += ', ';
        result += repr(this[index]);
    }
    if (this.__class__ == tuple && this.length == 1) result += ',';
    result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';
    return result;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function(element) {
    this.push(element);
};
Array.prototype.py_clear = function() {
    this.length = 0;
};
Array.prototype.extend = function(aList) {
    this.push.apply(this, aList);
};
Array.prototype.insert = function(index, element) {
    this.splice(index, 0, element);
};
Array.prototype.remove = function(element) {
    let index = this.indexOf(element);
    if (index == -1) throw ValueError("list.remove(x): x not in list", new Error());
    this.splice(index, 1);
};
Array.prototype.index = function(element) {
    return this.indexOf(element);
};
Array.prototype.py_pop = function(index) {
    if (index == undefined) return this.pop();
    else return this.splice(index, 1)[0];
};
Array.prototype.py_sort = function() {
    __sort__.apply(null, [
        this
    ].concat([].slice.apply(arguments)));
};
Array.prototype.__add__ = function(aList) {
    return list(this.concat(aList));
};
Array.prototype.__mul__ = function(scalar) {
    let result = this;
    for(let i = 1; i < scalar; i++)result = result.concat(this);
    return result;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
function tuple(iterable) {
    let instance = iterable ? [].slice.apply(iterable) : [];
    instance.__class__ = tuple;
    return instance;
}
tuple.__name__ = 'tuple';
tuple.__bases__ = [
    object
];
function set(iterable) {
    let instance = [];
    if (iterable) for(let index = 0; index < iterable.length; index++)instance.add(iterable[index]);
    instance.__class__ = set;
    return instance;
}
set.__name__ = 'set';
set.__bases__ = [
    object
];
Array.prototype.__bindexOf__ = function(element) {
    element += '';
    let mindex = 0;
    let maxdex = this.length - 1;
    while(mindex <= maxdex){
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this[index] + '';
        if (middle < element) mindex = index + 1;
        else if (middle > element) maxdex = index - 1;
        else return index;
    }
    return -1;
};
Array.prototype.add = function(element) {
    if (this.indexOf(element) == -1) this.push(element);
};
Array.prototype.discard = function(element) {
    var index = this.indexOf(element);
    if (index != -1) this.splice(index, 1);
};
Array.prototype.isdisjoint = function(other) {
    this.sort();
    for(let i = 0; i < other.length; i++){
        if (this.__bindexOf__(other[i]) != -1) return false;
    }
    return true;
};
Array.prototype.issuperset = function(other) {
    this.sort();
    for(let i = 0; i < other.length; i++){
        if (this.__bindexOf__(other[i]) == -1) return false;
    }
    return true;
};
Array.prototype.issubset = function(other) {
    return set(other.slice()).issuperset(this);
};
Array.prototype.union = function(other) {
    let result = set(this.slice().sort());
    for(let i = 0; i < other.length; i++)if (result.__bindexOf__(other[i]) == -1) result.push(other[i]);
    return result;
};
Array.prototype.intersection = function(other) {
    this.sort();
    let result = set();
    for(let i = 0; i < other.length; i++)if (this.__bindexOf__(other[i]) != -1) result.push(other[i]);
    return result;
};
Array.prototype.difference = function(other) {
    let sother = set(other.slice().sort());
    let result = set();
    for(let i = 0; i < this.length; i++)if (sother.__bindexOf__(this[i]) == -1) result.push(this[i]);
    return result;
};
Array.prototype.symmetric_difference = function(other) {
    return this.union(other).difference(this.intersection(other));
};
Array.prototype.py_update = function() {
    let updated = [].concat.apply(this.slice(), arguments).sort();
    this.py_clear();
    for(let i = 0; i < updated.length; i++)if (updated[i] != updated[i - 1]) this.push(updated[i]);
};
Array.prototype.__eq__ = function(other) {
    if (this.length != other.length) return false;
    if (this.__class__ == set) {
        this.sort();
        other.sort();
    }
    for(let i = 0; i < this.length; i++){
        if (this[i] != other[i]) return false;
    }
    return true;
};
Array.prototype.__ne__ = function(other) {
    return !this.__eq__(other);
};
Array.prototype.__le__ = function(other) {
    if (this.__class__ == set) return this.issubset(other);
    else {
        for(let i = 0; i < this.length; i++){
            if (this[i] > other[i]) return false;
            else if (this[i] < other[i]) return true;
        }
        return true;
    }
};
Array.prototype.__ge__ = function(other) {
    if (this.__class__ == set) return this.issuperset(other);
    else {
        for(let i = 0; i < this.length; i++){
            if (this[i] < other[i]) return false;
            else if (this[i] > other[i]) return true;
        }
        return true;
    }
};
Array.prototype.__lt__ = function(other) {
    return this.__class__ == set ? this.issubset(other) && !this.issuperset(other) : !this.__ge__(other);
};
Array.prototype.__gt__ = function(other) {
    return this.__class__ == set ? this.issuperset(other) && !this.issubset(other) : !this.__le__(other);
};
function bytearray(bytable, encoding) {
    if (bytable == undefined) return new Uint8Array(0);
    else {
        let aType = py_typeof(bytable);
        if (aType == int) return new Uint8Array(bytable);
        else if (aType == str) {
            let aBytes = new Uint8Array(len(bytable));
            for(let i = 0; i < len(bytable); i++)aBytes[i] = bytable.charCodeAt(i);
            return aBytes;
        } else if (aType == list || aType == tuple) return new Uint8Array(bytable);
        else throw py_TypeError;
    }
}
var bytes = bytearray;
Uint8Array.prototype.__add__ = function(aBytes) {
    let result = new Uint8Array(this.length + aBytes.length);
    result.set(this);
    result.set(aBytes, this.length);
    return result;
};
Uint8Array.prototype.__mul__ = function(scalar) {
    let result = new Uint8Array(scalar * this.length);
    for(let i = 0; i < scalar; i++)result.set(this, i * this.length);
    return result;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
function str(stringable) {
    if (typeof stringable === 'number') return stringable.toString();
    else try {
        return stringable.__str__();
    } catch (exception) {
        try {
            return repr(stringable);
        } catch (exception) {
            return String(stringable);
        }
    }
}
String.prototype.__class__ = str;
str.__name__ = 'str';
str.__bases__ = [
    object
];
String.prototype.__iter__ = function() {
    new __PyIterator__(this);
};
String.prototype.__repr__ = function() {
    return (this.indexOf('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"').py_replace('\t', '\\t').py_replace('\n', '\\n');
};
String.prototype.__str__ = function() {
    return this;
};
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.endswith = function(suffix) {
    if (suffix instanceof Array) for(var i = 0; i < suffix.length; i++){
        if (this.slice(-suffix[i].length) == suffix[i]) return true;
    }
    else return suffix == '' || this.slice(-suffix.length) == suffix;
    return false;
};
String.prototype.find = function(sub, start) {
    return this.indexOf(sub, start);
};
String.prototype.__getslice__ = function(start, stop, step) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    var result = '';
    if (step == 1) result = this.substring(start, stop);
    else for(var index = start; index < stop; index += step)result = result.concat(this.charAt(index));
    return result;
};
__setproperty__(String.prototype, 'format', {
    get: function() {
        return __get__(this, function(self) {
            var args = tuple([].slice.apply(arguments).slice(1));
            var autoIndex = 0;
            return self.replace(/\{(\w*)\}/g, function(match, key) {
                if (key == '') key = autoIndex++;
                if (key == +key) return args[key] === undefined ? match : str(args[key]);
                else {
                    for(var index = 0; index < args.length; index++){
                        if (typeof args[index] == 'object' && args[index][key] !== undefined) return str(args[index][key]);
                    }
                    return match;
                }
            });
        });
    },
    enumerable: true
});
String.prototype.isalnum = function() {
    return /^[0-9a-zA-Z]{1,}$/.test(this);
};
String.prototype.isalpha = function() {
    return /^[a-zA-Z]{1,}$/.test(this);
};
String.prototype.isdecimal = function() {
    return /^[0-9]{1,}$/.test(this);
};
String.prototype.isdigit = function() {
    return this.isdecimal();
};
String.prototype.islower = function() {
    return /^[a-z]{1,}$/.test(this);
};
String.prototype.isupper = function() {
    return /^[A-Z]{1,}$/.test(this);
};
String.prototype.isspace = function() {
    return /^[\s]{1,}$/.test(this);
};
String.prototype.isnumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
};
String.prototype.join = function(strings) {
    strings = Array.from(strings);
    return strings.join(this);
};
String.prototype.lower = function() {
    return this.toLowerCase();
};
String.prototype.py_replace = function(old, aNew, maxreplace) {
    return this.split(old, maxreplace).join(aNew);
};
String.prototype.lstrip = function() {
    return this.replace(/^\s*/g, '');
};
String.prototype.rfind = function(sub, start) {
    return this.lastIndexOf(sub, start);
};
String.prototype.rsplit = function(sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip();
    } else var stripped = this;
    if (maxsplit == undefined || maxsplit == -1) return stripped.split(sep);
    else {
        var result = stripped.split(sep);
        if (maxsplit < result.length) {
            var maxrsplit = result.length - maxsplit;
            return [
                result.slice(0, maxrsplit).join(sep)
            ].concat(result.slice(maxrsplit));
        } else return result;
    }
};
String.prototype.rstrip = function() {
    return this.replace(/\s*$/g, '');
};
String.prototype.py_split = function(sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip();
    } else var stripped = this;
    if (maxsplit == undefined || maxsplit == -1) return stripped.split(sep);
    else {
        var result = stripped.split(sep);
        if (maxsplit < result.length) return result.slice(0, maxsplit).concat([
            result.slice(maxsplit).join(sep)
        ]);
        else return result;
    }
};
String.prototype.startswith = function(prefix) {
    if (prefix instanceof Array) for(var i = 0; i < prefix.length; i++){
        if (this.indexOf(prefix[i]) == 0) return true;
    }
    else return this.indexOf(prefix) == 0;
    return false;
};
String.prototype.strip = function() {
    return this.trim();
};
String.prototype.upper = function() {
    return this.toUpperCase();
};
String.prototype.__mul__ = function(scalar) {
    var result = '';
    for(var i = 0; i < scalar; i++)result = result + this;
    return result;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function __contains__(element) {
    return this.hasOwnProperty(element);
}
function __keys__() {
    var keys = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) keys.push(attrib);
    return keys;
}
function __items__() {
    var items = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) items.push([
        attrib,
        this[attrib]
    ]);
    return items;
}
function __del__(key) {
    delete this[key];
}
function __clear__() {
    for(var attrib in this)delete this[attrib];
}
function __getdefault__(aKey, aDefault) {
    var result = this[aKey];
    if (result == undefined) result = this['py_' + aKey];
    return result == undefined ? aDefault == undefined ? null : aDefault : result;
}
function __setdefault__(aKey, aDefault) {
    var result = this[aKey];
    if (result != undefined) return result;
    var val = aDefault == undefined ? null : aDefault;
    this[aKey] = val;
    return val;
}
function __pop__(aKey, aDefault) {
    var result = this[aKey];
    if (result != undefined) {
        delete this[aKey];
        return result;
    } else {
        if (aDefault === undefined) throw KeyError(aKey, new Error());
    }
    return aDefault;
}
function __popitem__() {
    var aKey = Object.keys(this)[0];
    if (aKey == null) throw KeyError("popitem(): dictionary is empty", new Error());
    var result = tuple([
        aKey,
        this[aKey]
    ]);
    delete this[aKey];
    return result;
}
function __update__(aDict) {
    for(var aKey in aDict)this[aKey] = aDict[aKey];
}
function __values__() {
    var values = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) values.push(this[attrib]);
    return values;
}
function __dgetitem__(aKey) {
    return this[aKey];
}
function __dsetitem__(aKey, aValue) {
    this[aKey] = aValue;
}
function dict(objectOrPairs) {
    var instance = {
    };
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) for(var index = 0; index < objectOrPairs.length; index++){
            var pair = objectOrPairs[index];
            if (!(pair instanceof Array) || pair.length != 2) throw ValueError("dict update sequence element #" + index + " has length " + pair.length + "; 2 is required", new Error());
            var key = pair[0];
            var val = pair[1];
            if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                if (!isinstance(objectOrPairs, dict)) val = dict(val);
            }
            instance[key] = val;
        }
    } else {
        if (isinstance(objectOrPairs, dict)) {
            var aKeys = objectOrPairs.py_keys();
            for(var index = 0; index < aKeys.length; index++){
                var key = aKeys[index];
                instance[key] = objectOrPairs[key];
            }
        } else if (objectOrPairs instanceof Object) instance = objectOrPairs;
        else throw ValueError("Invalid type of object for dict creation", new Error());
    }
    __setproperty__(instance, '__class__', {
        value: dict,
        enumerable: false,
        writable: true
    });
    __setproperty__(instance, '__contains__', {
        value: __contains__,
        enumerable: false
    });
    __setproperty__(instance, 'py_keys', {
        value: __keys__,
        enumerable: false
    });
    __setproperty__(instance, '__iter__', {
        value: function() {
            new __PyIterator__(this.py_keys());
        },
        enumerable: false
    });
    __setproperty__(instance, Symbol.iterator, {
        value: function() {
            new __JsIterator__(this.py_keys());
        },
        enumerable: false
    });
    __setproperty__(instance, 'py_items', {
        value: __items__,
        enumerable: false
    });
    __setproperty__(instance, 'py_del', {
        value: __del__,
        enumerable: false
    });
    __setproperty__(instance, 'py_clear', {
        value: __clear__,
        enumerable: false
    });
    __setproperty__(instance, 'py_get', {
        value: __getdefault__,
        enumerable: false
    });
    __setproperty__(instance, 'py_setdefault', {
        value: __setdefault__,
        enumerable: false
    });
    __setproperty__(instance, 'py_pop', {
        value: __pop__,
        enumerable: false
    });
    __setproperty__(instance, 'py_popitem', {
        value: __popitem__,
        enumerable: false
    });
    __setproperty__(instance, 'py_update', {
        value: __update__,
        enumerable: false
    });
    __setproperty__(instance, 'py_values', {
        value: __values__,
        enumerable: false
    });
    __setproperty__(instance, '__getitem__', {
        value: __dgetitem__,
        enumerable: false
    });
    __setproperty__(instance, '__setitem__', {
        value: __dsetitem__,
        enumerable: false
    });
    return instance;
}
dict.__name__ = 'dict';
dict.__bases__ = [
    object
];
function __setdoc__(docString) {
    this.__doc__ = docString;
    return this;
}
__setproperty__(Function.prototype, '__setdoc__', {
    value: __setdoc__,
    enumerable: false
});
function __jsmod__(a, b) {
    if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return a % b;
}
function __mod__(a, b) {
    if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return (a % b + b) % b;
}
function __pow__(a, b) {
    if (typeof a == 'object' && '__pow__' in a) return a.__pow__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rpow__(a);
    else return Math.pow(a, b);
}
var pow = __pow__;
function __neg__(a) {
    if (typeof a == 'object' && '__neg__' in a) return a.__neg__();
    else return -a;
}
function __matmul__(a, b) {
    return a.__matmul__(b);
}
function __mul__(a, b) {
    if (typeof a == 'object' && '__mul__' in a) return a.__mul__(b);
    else if (typeof b == 'object' && '__rmul__' in b) return b.__rmul__(a);
    else if (typeof a == 'string') return a.__mul__(b);
    else if (typeof b == 'string') return b.__rmul__(a);
    else return a * b;
}
function __truediv__(a, b) {
    if (typeof a == 'object' && '__truediv__' in a) return a.__truediv__(b);
    else if (typeof b == 'object' && '__rtruediv__' in b) return b.__rtruediv__(a);
    else if (typeof a == 'object' && '__div__' in a) return a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return b.__rdiv__(a);
    else return a / b;
}
function __floordiv__(a, b) {
    if (typeof a == 'object' && '__floordiv__' in a) return a.__floordiv__(b);
    else if (typeof b == 'object' && '__rfloordiv__' in b) return b.__rfloordiv__(a);
    else if (typeof a == 'object' && '__div__' in a) return a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return b.__rdiv__(a);
    else return Math.floor(a / b);
}
function __add__(a, b) {
    if (typeof a == 'object' && '__add__' in a) return a.__add__(b);
    else if (typeof b == 'object' && '__radd__' in b) return b.__radd__(a);
    else return a + b;
}
function __sub__(a, b) {
    if (typeof a == 'object' && '__sub__' in a) return a.__sub__(b);
    else if (typeof b == 'object' && '__rsub__' in b) return b.__rsub__(a);
    else return a - b;
}
function __lshift__(a, b) {
    if (typeof a == 'object' && '__lshift__' in a) return a.__lshift__(b);
    else if (typeof b == 'object' && '__rlshift__' in b) return b.__rlshift__(a);
    else return a << b;
}
function __rshift__(a, b) {
    if (typeof a == 'object' && '__rshift__' in a) return a.__rshift__(b);
    else if (typeof b == 'object' && '__rrshift__' in b) return b.__rrshift__(a);
    else return a >> b;
}
function __or__(a, b) {
    if (typeof a == 'object' && '__or__' in a) return a.__or__(b);
    else if (typeof b == 'object' && '__ror__' in b) return b.__ror__(a);
    else return a | b;
}
function __xor__(a, b) {
    if (typeof a == 'object' && '__xor__' in a) return a.__xor__(b);
    else if (typeof b == 'object' && '__rxor__' in b) return b.__rxor__(a);
    else return a ^ b;
}
function __and__(a, b) {
    if (typeof a == 'object' && '__and__' in a) return a.__and__(b);
    else if (typeof b == 'object' && '__rand__' in b) return b.__rand__(a);
    else return a & b;
}
function __eq__(a, b) {
    if (typeof a == 'object' && '__eq__' in a) return a.__eq__(b);
    else return a == b;
}
function __ne__(a, b) {
    if (typeof a == 'object' && '__ne__' in a) return a.__ne__(b);
    else return a != b;
}
function __lt__(a, b) {
    if (typeof a == 'object' && '__lt__' in a) return a.__lt__(b);
    else return a < b;
}
function __le__(a, b) {
    if (typeof a == 'object' && '__le__' in a) return a.__le__(b);
    else return a <= b;
}
function __gt__(a, b) {
    if (typeof a == 'object' && '__gt__' in a) return a.__gt__(b);
    else return a > b;
}
function __ge__(a, b) {
    if (typeof a == 'object' && '__ge__' in a) return a.__ge__(b);
    else return a >= b;
}
function __imatmul__(a, b) {
    if ('__imatmul__' in a) return a.__imatmul__(b);
    else return a.__matmul__(b);
}
function __ipow__(a, b) {
    if (typeof a == 'object' && '__pow__' in a) return a.__ipow__(b);
    else if (typeof a == 'object' && '__ipow__' in a) return a.__pow__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rpow__(a);
    else return Math.pow(a, b);
}
function __ijsmod__(a, b) {
    if (typeof a == 'object' && '__imod__' in a) return a.__ismod__(b);
    else if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rmod__(a);
    else return a % b;
}
function __imod__(a, b) {
    if (typeof a == 'object' && '__imod__' in a) return a.__imod__(b);
    else if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return (a % b + b) % b;
}
function __imul__(a, b) {
    if (typeof a == 'object' && '__imul__' in a) return a.__imul__(b);
    else if (typeof a == 'object' && '__mul__' in a) return a = a.__mul__(b);
    else if (typeof b == 'object' && '__rmul__' in b) return a = b.__rmul__(a);
    else if (typeof a == 'string') return a = a.__mul__(b);
    else if (typeof b == 'string') return a = b.__rmul__(a);
    else return a *= b;
}
function __idiv__(a, b) {
    if (typeof a == 'object' && '__idiv__' in a) return a.__idiv__(b);
    else if (typeof a == 'object' && '__div__' in a) return a = a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return a = b.__rdiv__(a);
    else return a /= b;
}
function __iadd__(a, b) {
    if (typeof a == 'object' && '__iadd__' in a) return a.__iadd__(b);
    else if (typeof a == 'object' && '__add__' in a) return a = a.__add__(b);
    else if (typeof b == 'object' && '__radd__' in b) return a = b.__radd__(a);
    else return a += b;
}
function __isub__(a, b) {
    if (typeof a == 'object' && '__isub__' in a) return a.__isub__(b);
    else if (typeof a == 'object' && '__sub__' in a) return a = a.__sub__(b);
    else if (typeof b == 'object' && '__rsub__' in b) return a = b.__rsub__(a);
    else return a -= b;
}
function __ilshift__(a, b) {
    if (typeof a == 'object' && '__ilshift__' in a) return a.__ilshift__(b);
    else if (typeof a == 'object' && '__lshift__' in a) return a = a.__lshift__(b);
    else if (typeof b == 'object' && '__rlshift__' in b) return a = b.__rlshift__(a);
    else return a <<= b;
}
function __irshift__(a, b) {
    if (typeof a == 'object' && '__irshift__' in a) return a.__irshift__(b);
    else if (typeof a == 'object' && '__rshift__' in a) return a = a.__rshift__(b);
    else if (typeof b == 'object' && '__rrshift__' in b) return a = b.__rrshift__(a);
    else return a >>= b;
}
function __ior__(a, b) {
    if (typeof a == 'object' && '__ior__' in a) return a.__ior__(b);
    else if (typeof a == 'object' && '__or__' in a) return a = a.__or__(b);
    else if (typeof b == 'object' && '__ror__' in b) return a = b.__ror__(a);
    else return a |= b;
}
function __ixor__(a, b) {
    if (typeof a == 'object' && '__ixor__' in a) return a.__ixor__(b);
    else if (typeof a == 'object' && '__xor__' in a) return a = a.__xor__(b);
    else if (typeof b == 'object' && '__rxor__' in b) return a = b.__rxor__(a);
    else return a ^= b;
}
function __iand__(a, b) {
    if (typeof a == 'object' && '__iand__' in a) return a.__iand__(b);
    else if (typeof a == 'object' && '__and__' in a) return a = a.__and__(b);
    else if (typeof b == 'object' && '__rand__' in b) return a = b.__rand__(a);
    else return a &= b;
}
function __getitem__(container, key) {
    if (typeof container == 'object' && '__getitem__' in container) return container.__getitem__(key);
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) return container[container.length + key];
    else return container[key];
}
function __setitem__(container, key, value) {
    if (typeof container == 'object' && '__setitem__' in container) container.__setitem__(key, value);
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) container[container.length + key] = value;
    else container[key] = value;
}
function __getslice__(container, lower, upper, step) {
    if (typeof container == 'object' && '__getitem__' in container) return container.__getitem__([
        lower,
        upper,
        step
    ]);
    else return container.__getslice__(lower, upper, step);
}
function __setslice__(container, lower, upper, step, value) {
    if (typeof container == 'object' && '__setitem__' in container) container.__setitem__([
        lower,
        upper,
        step
    ], value);
    else container.__setslice__(lower, upper, step, value);
}
var BaseException = __class__('BaseException', [
    object
], {
    __module__: __name__
});
var Exception = __class__('Exception', [
    BaseException
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self) {
            var kwargs = dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = tuple();
            self.__args__ = args;
            if (kwargs.error != null) self.stack = kwargs.error.stack;
            else if (Error) self.stack = new Error().stack;
            else self.stack = 'No stack trace available';
        });
    },
    get __repr__ () {
        return __get__(this, function(self) {
            if (len(self.__args__) > 1) return '{}{}'.format(self.__class__.__name__, repr(tuple(self.__args__)));
            else if (len(self.__args__)) return '{}({})'.format(self.__class__.__name__, repr(self.__args__[0]));
            else return '{}()'.format(self.__class__.__name__);
        });
    },
    get __str__ () {
        return __get__(this, function(self) {
            if (len(self.__args__) > 1) return str(tuple(self.__args__));
            else if (len(self.__args__)) return str(self.__args__[0]);
            else return '';
        });
    }
});
var IterableError = __class__('IterableError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, error) {
            Exception.__init__(self, "Can't iterate over non-iterable", __kwargtrans__({
                error: error
            }));
        });
    }
});
var StopIteration = __class__('StopIteration', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, error) {
            Exception.__init__(self, 'Iterator exhausted', __kwargtrans__({
                error: error
            }));
        });
    }
});
var ValueError = __class__('ValueError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var KeyError = __class__('KeyError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var AssertionError = __class__('AssertionError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            if (message) Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
            else Exception.__init__(self, __kwargtrans__({
                error: error
            }));
        });
    }
});
var NotImplementedError = __class__('NotImplementedError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var IndexError = __class__('IndexError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var AttributeError = __class__('AttributeError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var py_TypeError = __class__('py_TypeError', [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var Warning = __class__('Warning', [
    Exception
], {
    __module__: __name__
});
var UserWarning = __class__('UserWarning', [
    Warning
], {
    __module__: __name__
});
var DeprecationWarning = __class__('DeprecationWarning', [
    Warning
], {
    __module__: __name__
});
var RuntimeWarning = __class__('RuntimeWarning', [
    Warning
], {
    __module__: __name__
});
var __sort__ = function(iterable, key, reverse) {
    if (typeof key == 'undefined' || key != null && key.hasOwnProperty("__kwargtrans__")) var key = null;
    if (typeof reverse == 'undefined' || reverse != null && reverse.hasOwnProperty("__kwargtrans__")) var reverse = false;
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                case 'iterable':
                    var iterable = __allkwargs0__[__attrib0__];
                    break;
                case 'key':
                    var key = __allkwargs0__[__attrib0__];
                    break;
                case 'reverse':
                    var reverse = __allkwargs0__[__attrib0__];
                    break;
            }
        }
    }
    if (key) iterable.sort(function __lambda__(a, b) {
        if (arguments.length) {
            var __ilastarg0__ = arguments.length - 1;
            if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                var __allkwargs0__ = arguments[__ilastarg0__--];
                for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                    case 'a':
                        var a = __allkwargs0__[__attrib0__];
                        break;
                    case 'b':
                        var b = __allkwargs0__[__attrib0__];
                        break;
                }
            }
        }
        return key(a) > key(b) ? 1 : -1;
    });
    else iterable.sort();
    if (reverse) iterable.reverse();
};
var sorted = function(iterable, key, reverse) {
    if (typeof key == 'undefined' || key != null && key.hasOwnProperty("__kwargtrans__")) var key = null;
    if (typeof reverse == 'undefined' || reverse != null && reverse.hasOwnProperty("__kwargtrans__")) var reverse = false;
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                case 'iterable':
                    var iterable = __allkwargs0__[__attrib0__];
                    break;
                case 'key':
                    var key = __allkwargs0__[__attrib0__];
                    break;
                case 'reverse':
                    var reverse = __allkwargs0__[__attrib0__];
                    break;
            }
        }
    }
    if (py_typeof(iterable) == dict) var result = copy(iterable.py_keys());
    else var result = copy(iterable);
    __sort__(result, key, reverse);
    return result;
};
var map = function(func, iterable) {
    return (function() {
        var __accu0__ = [];
        for (var item of iterable)__accu0__.append(func(item));
        return __accu0__;
    })();
};
var filter = function(func, iterable) {
    if (func == null) var func = bool;
    return (function() {
        var __accu0__ = [];
        for (var item of iterable)if (func(item)) __accu0__.append(item);
        return __accu0__;
    })();
};
var divmod = function(n, d) {
    return tuple([
        Math.floor(n / d),
        __mod__(n, d)
    ]);
};
var __Terminal__ = __class__('__Terminal__', [
    object
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self) {
            self.buffer = '';
            try {
                self.element = document.getElementById('__terminal__');
            } catch (__except0__) {
                self.element = null;
            }
            if (self.element) {
                self.element.style.overflowX = 'auto';
                self.element.style.boxSizing = 'border-box';
                self.element.style.padding = '5px';
                self.element.innerHTML = '_';
            }
        });
    },
    get print () {
        return __get__(this, function(self) {
            var sep = ' ';
            var end = '\n';
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        case 'sep':
                            var sep = __allkwargs0__[__attrib0__];
                            break;
                        case 'end':
                            var end = __allkwargs0__[__attrib0__];
                            break;
                    }
                }
                var args = tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = tuple();
            self.buffer = '{}{}{}'.format(self.buffer, sep.join(function() {
                var __accu0__ = [];
                for (var arg of args)__accu0__.append(str(arg));
                return __accu0__;
            }()), end).__getslice__(-4096, null, 1);
            if (self.element) {
                self.element.innerHTML = self.buffer.py_replace('\n', '<br>').py_replace(' ', '&nbsp');
                self.element.scrollTop = self.element.scrollHeight;
            } else console.log(sep.join(function() {
                var __accu0__ = [];
                for (var arg of args)__accu0__.append(str(arg));
                return __accu0__;
            }()));
        });
    },
    get input () {
        return __get__(this, function(self, question) {
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        case 'question':
                            var question = __allkwargs0__[__attrib0__];
                            break;
                    }
                }
            }
            self.print('{}'.format(question), __kwargtrans__({
                end: ''
            }));
            var answer = window.prompt('\n'.join(self.buffer.py_split('\n').__getslice__(-8, null, 1)));
            self.print(answer);
            return answer;
        });
    }
});
var __terminal__ = __Terminal__();
var print = __terminal__.print;
var input = __terminal__.input;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4SQGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Graphology", ()=>Graphology
);
parcelHelpers.export(exports, "Graph", ()=>Graph
);
parcelHelpers.export(exports, "Hyper", ()=>Hyper
);
parcelHelpers.export(exports, "Html", ()=>Html
);
parcelHelpers.export(exports, "window", ()=>window
);
parcelHelpers.export(exports, "console", ()=>console
);
parcelHelpers.export(exports, "document", ()=>document
);
parcelHelpers.export(exports, "Json", ()=>Json
);
parcelHelpers.export(exports, "Maze", ()=>Maze
);
parcelHelpers.export(exports, "HeapJS", ()=>HeapJS
);
parcelHelpers.export(exports, "Heap", ()=>Heap
);
parcelHelpers.export(exports, "asdict", ()=>asdict
);
// Transcrypt'ed from Python, 2022-03-21 12:57:08
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var _typingJs = require("./typing.js");
var __name__ = 'ffi.js';
var Graphology = require('graphology');
var Graph = function() {
    var kwargs = _orgTranscryptRuntimeJs.dict();
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
            delete kwargs.__kwargtrans__;
        }
        var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(0, __ilastarg0__ + 1));
    } else var args = _orgTranscryptRuntimeJs.tuple();
    return new Graphology(...args, _orgTranscryptRuntimeJs.__kwargtrans__(kwargs));
};
var Hyper = require('hyperapp');
var Html = require('@hyperapp/html');
var window = require('global/window');
var console = require('global/console');
var document = require('global/document');
var Json = window.JSON;
var Maze = require('maze-generation');
var HeapJS = require('heap-js');
var Heap = function() {
    var kwargs = _orgTranscryptRuntimeJs.dict();
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
            delete kwargs.__kwargtrans__;
        }
        var args = _orgTranscryptRuntimeJs.tuple([].slice.apply(arguments).slice(0, __ilastarg0__ + 1));
    } else var args = _orgTranscryptRuntimeJs.tuple();
    return new HeapJS.Heap(...args, _orgTranscryptRuntimeJs.__kwargtrans__(kwargs));
};
var asdict = function(data) {
    var props = _orgTranscryptRuntimeJs.dict();
    var propNames = window.Object['keys'](data);
    for (var propName of propNames){
        if (_orgTranscryptRuntimeJs.__in__('__', propName)) continue;
        else props[propName] = data[propName];
    }
    return props;
};

},{"./org.transcrypt.__runtime__.js":"aJoBq","graphology":"7anno","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","hyperapp":"7OIza","@hyperapp/html":"iA7mS","global/window":"iU6IE","global/console":"ig8ew","global/document":"fUl09","./typing.js":"2pquK","maze-generation":"2QcrI","heap-js":"308oy"}],"7anno":[function(require,module,exports) {
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).graphology = e();
}(this, function() {
    "use strict";
    function t1(e) {
        return t1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, t1(e);
    }
    function e1(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, r1(t, e);
    }
    function n1(t2) {
        return n1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, n1(t2);
    }
    function r1(t3, e2) {
        return r1 = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        }, r1(t3, e2);
    }
    function i1() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
        } catch (t) {
            return !1;
        }
    }
    function o1(t4, e3, n2) {
        return o1 = i1() ? Reflect.construct : function(t, e, n) {
            var i = [
                null
            ];
            i.push.apply(i, e);
            var o = new (Function.bind.apply(t, i));
            return n && r1(o, n.prototype), o;
        }, o1.apply(null, arguments);
    }
    function a1(t5) {
        var e = "function" == typeof Map ? new Map : void 0;
        return a1 = function(t) {
            if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
            var i;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, a);
            }
            function a() {
                return o1(t, arguments, n1(this).constructor);
            }
            return a.prototype = Object.create(t.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r1(a, t);
        }, a1(t5);
    }
    function u1(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    var c1 = function() {
        for(var t = arguments[0], e = 1, n = arguments.length; e < n; e++)if (arguments[e]) for(var r in arguments[e])t[r] = arguments[e][r];
        return t;
    };
    function s1(t, e, n, r) {
        var i = t._nodes.get(e), o = null;
        return i ? o = "mixed" === r ? i.out && i.out[n] || i.undirected && i.undirected[n] : "directed" === r ? i.out && i.out[n] : i.undirected && i.undirected[n] : o;
    }
    function d1(e) {
        return null !== e && "object" === t1(e) && "function" == typeof e.addUndirectedEdgeWithKey && "function" == typeof e.dropNode;
    }
    function h1(e) {
        return "object" === t1(e) && null !== e && e.constructor === Object;
    }
    function p1(t) {
        var e;
        for(e in t)return !1;
        return !0;
    }
    function f1(t, e, n) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            configurable: !1,
            writable: !0,
            value: n
        });
    }
    function l1(t, e, n) {
        var r = {
            enumerable: !0,
            configurable: !0
        };
        "function" == typeof n ? r.get = n : (r.value = n, r.writable = !1), Object.defineProperty(t, e, r);
    }
    function g1(t) {
        return !!h1(t) && !(t.attributes && !Array.isArray(t.attributes));
    }
    "function" == typeof Object.assign && (c1 = Object.assign);
    var y1, w1 = {
        exports: {
        }
    }, v1 = "object" == typeof Reflect ? Reflect : null, b1 = v1 && "function" == typeof v1.apply ? v1.apply : function(t, e, n) {
        return Function.prototype.apply.call(t, e, n);
    };
    y1 = v1 && "function" == typeof v1.ownKeys ? v1.ownKeys : Object.getOwnPropertySymbols ? function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function(t) {
        return Object.getOwnPropertyNames(t);
    };
    var m1 = Number.isNaN || function(t) {
        return t != t;
    };
    function k1() {
        k1.init.call(this);
    }
    w1.exports = k1, w1.exports.once = function(t6, e4) {
        return new Promise(function(n3, r) {
            function i(n) {
                t6.removeListener(e4, o), r(n);
            }
            function o() {
                "function" == typeof t6.removeListener && t6.removeListener("error", i), n3([].slice.call(arguments));
            }
            N(t6, e4, o, {
                once: !0
            }), "error" !== e4 && (function(t, e, n) {
                "function" == typeof t.on && N(t, "error", e, n);
            })(t6, i, {
                once: !0
            });
        });
    }, k1.EventEmitter = k1, k1.prototype._events = void 0, k1.prototype._eventsCount = 0, k1.prototype._maxListeners = void 0;
    var _ = 10;
    function G(t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
    }
    function x(t) {
        return void 0 === t._maxListeners ? k1.defaultMaxListeners : t._maxListeners;
    }
    function E(t, e, n, r) {
        var i, o, a, u;
        if (G(n), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), a = o[e]), void 0 === a) a = o[e] = n, ++t._eventsCount;
        else if ("function" == typeof a ? a = o[e] = r ? [
            n,
            a
        ] : [
            a,
            n
        ] : r ? a.unshift(n) : a.push(n), (i = x(t)) > 0 && a.length > i && !a.warned) {
            a.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = a.length, u = c, console && console.warn && console.warn(u);
        }
        return t;
    }
    function A() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function S(t, e, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        }, i = A.bind(r);
        return i.listener = n, r.wrapFn = i, i;
    }
    function D(t7, e5, n4) {
        var r = t7._events;
        if (void 0 === r) return [];
        var i = r[e5];
        return void 0 === i ? [] : "function" == typeof i ? n4 ? [
            i.listener || i
        ] : [
            i
        ] : n4 ? (function(t) {
            for(var e = new Array(t.length), n = 0; n < e.length; ++n)e[n] = t[n].listener || t[n];
            return e;
        })(i) : U(i, i.length);
    }
    function L(t) {
        var e = this._events;
        if (void 0 !== e) {
            var n = e[t];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
        }
        return 0;
    }
    function U(t, e) {
        for(var n = new Array(e), r = 0; r < e; ++r)n[r] = t[r];
        return n;
    }
    function N(t, e, n, r) {
        if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
        else {
            if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
            t.addEventListener(e, function i(o) {
                r.once && t.removeEventListener(e, i), n(o);
            });
        }
    }
    function j(t) {
        if ("function" != typeof t) throw new Error("obliterator/iterator: expecting a function!");
        this.next = t;
    }
    Object.defineProperty(k1, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return _;
        },
        set: function(t) {
            if ("number" != typeof t || t < 0 || m1(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            _ = t;
        }
    }), k1.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, k1.prototype.setMaxListeners = function(t) {
        if ("number" != typeof t || t < 0 || m1(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this;
    }, k1.prototype.getMaxListeners = function() {
        return x(this);
    }, k1.prototype.emit = function(t) {
        for(var e = [], n = 1; n < arguments.length; n++)e.push(arguments[n]);
        var r = "error" === t, i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
            var o;
            if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
            var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw a.context = o, a;
        }
        var u = i[t];
        if (void 0 === u) return !1;
        if ("function" == typeof u) b1(u, this, e);
        else {
            var c = u.length, s = U(u, c);
            for(n = 0; n < c; ++n)b1(s[n], this, e);
        }
        return !0;
    }, k1.prototype.addListener = function(t, e) {
        return E(this, t, e, !1);
    }, k1.prototype.on = k1.prototype.addListener, k1.prototype.prependListener = function(t, e) {
        return E(this, t, e, !0);
    }, k1.prototype.once = function(t, e) {
        return G(e), this.on(t, S(this, t, e)), this;
    }, k1.prototype.prependOnceListener = function(t, e) {
        return G(e), this.prependListener(t, S(this, t, e)), this;
    }, k1.prototype.removeListener = function(t8, e6) {
        var n, r, i, o, a;
        if (G(e6), void 0 === (r = this._events)) return this;
        if (void 0 === (n = r[t8])) return this;
        if (n === e6 || n.listener === e6) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t8], r.removeListener && this.emit("removeListener", t8, n.listener || e6));
        else if ("function" != typeof n) {
            for(i = -1, o = n.length - 1; o >= 0; o--)if (n[o] === e6 || n[o].listener === e6) {
                a = n[o].listener, i = o;
                break;
            }
            if (i < 0) return this;
            0 === i ? n.shift() : (function(t, e) {
                for(; e + 1 < t.length; e++)t[e] = t[e + 1];
                t.pop();
            })(n, i), 1 === n.length && (r[t8] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t8, a || e6);
        }
        return this;
    }, k1.prototype.off = k1.prototype.removeListener, k1.prototype.removeAllListeners = function(t) {
        var e, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
        if (0 === arguments.length) {
            var i, o = Object.keys(n);
            for(r = 0; r < o.length; ++r)"removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if ("function" == typeof (e = n[t])) this.removeListener(t, e);
        else if (void 0 !== e) for(r = e.length - 1; r >= 0; r--)this.removeListener(t, e[r]);
        return this;
    }, k1.prototype.listeners = function(t) {
        return D(this, t, !0);
    }, k1.prototype.rawListeners = function(t) {
        return D(this, t, !1);
    }, k1.listenerCount = function(t, e) {
        return "function" == typeof t.listenerCount ? t.listenerCount(e) : L.call(t, e);
    }, k1.prototype.listenerCount = L, k1.prototype.eventNames = function() {
        return this._eventsCount > 0 ? y1(this._events) : [];
    }, "undefined" != typeof Symbol && (j.prototype[Symbol.iterator] = function() {
        return this;
    }), j.of = function() {
        var t = arguments, e = t.length, n = 0;
        return new j(function() {
            return n >= e ? {
                done: !0
            } : {
                done: !1,
                value: t[n++]
            };
        });
    }, j.empty = function() {
        return new j(function() {
            return {
                done: !0
            };
        });
    }, j.fromSequence = function(t) {
        var e = 0, n = t.length;
        return new j(function() {
            return e >= n ? {
                done: !0
            } : {
                done: !1,
                value: t[e++]
            };
        });
    }, j.is = function(t) {
        return t instanceof j || "object" == typeof t && null !== t && "function" == typeof t.next;
    };
    var O = j, C = {
    };
    C.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, C.SYMBOL_SUPPORT = "undefined" != typeof Symbol;
    var z = O, M = C, W = M.ARRAY_BUFFER_SUPPORT, P = M.SYMBOL_SUPPORT;
    var R = function(t9) {
        var e = function(t) {
            return "string" == typeof t || Array.isArray(t) || W && ArrayBuffer.isView(t) ? z.fromSequence(t) : "object" != typeof t || null === t ? null : P && "function" == typeof t[Symbol.iterator] ? t[Symbol.iterator]() : "function" == typeof t.next ? t : null;
        }(t9);
        if (!e) throw new Error("obliterator: target is not iterable nor a valid iterator.");
        return e;
    }, K = R, T = function(t, e) {
        for(var n, r = arguments.length > 1 ? e : 1 / 0, i = r !== 1 / 0 ? new Array(r) : [], o = 0, a = K(t);;){
            if (o === r) return i;
            if ((n = a.next()).done) return o !== e && (i.length = o), i;
            i[o++] = n.value;
        }
    }, B = function(t) {
        function n5(e) {
            var n;
            return (n = t.call(this) || this).name = "GraphError", n.message = e, n;
        }
        return e1(n5, t), n5;
    }(a1(Error)), F = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "InvalidArgumentsGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(u1(r), n.prototype.constructor), r;
        }
        return e1(n, t), n;
    }(B), I = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "NotFoundGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(u1(r), n.prototype.constructor), r;
        }
        return e1(n, t), n;
    }(B), Y = function(t) {
        function n(e) {
            var r;
            return (r = t.call(this, e) || this).name = "UsageGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(u1(r), n.prototype.constructor), r;
        }
        return e1(n, t), n;
    }(B);
    function q(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function J(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function V(t, e) {
        this.key = t, this.attributes = e, this.clear();
    }
    function H(t, e, n, r, i) {
        this.key = e, this.attributes = i, this.undirected = t, this.source = n, this.target = r;
    }
    q.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.in = {
        }, this.out = {
        }, this.undirected = {
        };
    }, J.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.in = {
        }, this.out = {
        };
    }, V.prototype.clear = function() {
        this.undirectedDegree = 0, this.undirected = {
        };
    }, H.prototype.attach = function() {
        var t = "out", e = "in";
        this.undirected && (t = e = "undirected");
        var n = this.source.key, r = this.target.key;
        this.source[t][r] = this, this.undirected && n === r || (this.target[e][n] = this);
    }, H.prototype.attachMulti = function() {
        var t = "out", e = "in", n = this.source.key, r = this.target.key;
        this.undirected && (t = e = "undirected");
        var i = this.source[t], o = i[r];
        if (void 0 === o) return i[r] = this, void (this.undirected && n === r || (this.target[e][n] = this));
        o.previous = this, this.next = o, i[r] = this, this.target[e][n] = this;
    }, H.prototype.detach = function() {
        var t = this.source.key, e = this.target.key, n = "out", r = "in";
        this.undirected && (n = r = "undirected"), delete this.source[n][e], delete this.target[r][t];
    }, H.prototype.detachMulti = function() {
        var t = this.source.key, e = this.target.key, n = "out", r = "in";
        this.undirected && (n = r = "undirected"), void 0 === this.previous ? void 0 === this.next ? (delete this.source[n][e], delete this.target[r][t]) : (this.next.previous = void 0, this.source[n][e] = this.next, this.target[r][t] = this.next) : (this.previous.next = this.next, void 0 !== this.next && (this.next.previous = this.previous));
    };
    function Q(t, e, n, r, i, o, a) {
        var u, c, s, d;
        if (r = "" + r, 0 === n) {
            if (!(u = t._nodes.get(r))) throw new I("Graph.".concat(e, ': could not find the "').concat(r, '" node in the graph.'));
            s = i, d = o;
        } else if (3 === n) {
            if (i = "" + i, !(c = t._edges.get(i))) throw new I("Graph.".concat(e, ': could not find the "').concat(i, '" edge in the graph.'));
            var h = c.source.key, p = c.target.key;
            if (r === h) u = c.target;
            else {
                if (r !== p) throw new I("Graph.".concat(e, ': the "').concat(r, '" node is not attached to the "').concat(i, '" edge (').concat(h, ", ").concat(p, ")."));
                u = c.source;
            }
            s = o, d = a;
        } else {
            if (!(c = t._edges.get(r))) throw new I("Graph.".concat(e, ': could not find the "').concat(r, '" edge in the graph.'));
            u = 1 === n ? c.source : c.target, s = i, d = o;
        }
        return [
            u,
            s,
            d
        ];
    }
    var X = [
        {
            name: function(t) {
                return "get".concat(t, "Attribute");
            },
            attacher: function(t10, e, n) {
                t10.prototype[e] = function(t, r, i) {
                    var o = Q(this, e, n, t, r, i), a = o[0], u = o[1];
                    return a.attributes[u];
                };
            }
        },
        {
            name: function(t) {
                return "get".concat(t, "Attributes");
            },
            attacher: function(t11, e, n) {
                t11.prototype[e] = function(t, r) {
                    return Q(this, e, n, t, r)[0].attributes;
                };
            }
        },
        {
            name: function(t) {
                return "has".concat(t, "Attribute");
            },
            attacher: function(t12, e, n) {
                t12.prototype[e] = function(t, r, i) {
                    var o = Q(this, e, n, t, r, i), a = o[0], u = o[1];
                    return a.attributes.hasOwnProperty(u);
                };
            }
        },
        {
            name: function(t) {
                return "set".concat(t, "Attribute");
            },
            attacher: function(t13, e, n) {
                t13.prototype[e] = function(t, r, i, o) {
                    var a = Q(this, e, n, t, r, i, o), u = a[0], c = a[1], s = a[2];
                    return u.attributes[c] = s, this.emit("nodeAttributesUpdated", {
                        key: u.key,
                        type: "set",
                        attributes: u.attributes,
                        name: c
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attribute");
            },
            attacher: function(t14, e, n) {
                t14.prototype[e] = function(t, r, i, o) {
                    var a = Q(this, e, n, t, r, i, o), u = a[0], c = a[1], s = a[2];
                    if ("function" != typeof s) throw new F("Graph.".concat(e, ": updater should be a function."));
                    var d = u.attributes, h = s(d[c]);
                    return d[c] = h, this.emit("nodeAttributesUpdated", {
                        key: u.key,
                        type: "set",
                        attributes: u.attributes,
                        name: c
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "remove".concat(t, "Attribute");
            },
            attacher: function(t15, e, n) {
                t15.prototype[e] = function(t, r, i) {
                    var o = Q(this, e, n, t, r, i), a = o[0], u = o[1];
                    return delete a.attributes[u], this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "remove",
                        attributes: a.attributes,
                        name: u
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "replace".concat(t, "Attributes");
            },
            attacher: function(t16, e, n) {
                t16.prototype[e] = function(t, r, i) {
                    var o = Q(this, e, n, t, r, i), a = o[0], u = o[1];
                    if (!h1(u)) throw new F("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return a.attributes = u, this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "replace",
                        attributes: a.attributes
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "merge".concat(t, "Attributes");
            },
            attacher: function(t17, e, n) {
                t17.prototype[e] = function(t, r, i) {
                    var o = Q(this, e, n, t, r, i), a = o[0], u = o[1];
                    if (!h1(u)) throw new F("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return c1(a.attributes, u), this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "merge",
                        attributes: a.attributes,
                        data: u
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attributes");
            },
            attacher: function(t18, e, n) {
                t18.prototype[e] = function(t, r, i) {
                    var o = Q(this, e, n, t, r, i), a = o[0], u = o[1];
                    if ("function" != typeof u) throw new F("Graph.".concat(e, ": provided updater is not a function."));
                    return a.attributes = u(a.attributes), this.emit("nodeAttributesUpdated", {
                        key: a.key,
                        type: "update",
                        attributes: a.attributes
                    }), this;
                };
            }
        }
    ];
    var Z = [
        {
            name: function(t) {
                return "get".concat(t, "Attribute");
            },
            attacher: function(t19, e, n) {
                t19.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = s1(this, o, a, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return i.attributes[r];
                };
            }
        },
        {
            name: function(t) {
                return "get".concat(t, "Attributes");
            },
            attacher: function(t20, e, n) {
                t20.prototype[e] = function(t) {
                    var r;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 1) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var i = "" + t, o = "" + arguments[1];
                        if (!(r = s1(this, i, o, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(i, '" - "').concat(o, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(r = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return r.attributes;
                };
            }
        },
        {
            name: function(t) {
                return "has".concat(t, "Attribute");
            },
            attacher: function(t21, e, n) {
                t21.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = s1(this, o, a, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return i.attributes.hasOwnProperty(r);
                };
            }
        },
        {
            name: function(t) {
                return "set".concat(t, "Attribute");
            },
            attacher: function(t22, e, n) {
                t22.prototype[e] = function(t, r, i) {
                    var o;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 3) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var a = "" + t, u = "" + r;
                        if (r = arguments[2], i = arguments[3], !(o = s1(this, a, u, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(a, '" - "').concat(u, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(o = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return o.attributes[r] = i, this.emit("edgeAttributesUpdated", {
                        key: o.key,
                        type: "set",
                        attributes: o.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attribute");
            },
            attacher: function(t23, e, n) {
                t23.prototype[e] = function(t, r, i) {
                    var o;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 3) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var a = "" + t, u = "" + r;
                        if (r = arguments[2], i = arguments[3], !(o = s1(this, a, u, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(a, '" - "').concat(u, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(o = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if ("function" != typeof i) throw new F("Graph.".concat(e, ": updater should be a function."));
                    return o.attributes[r] = i(o.attributes[r]), this.emit("edgeAttributesUpdated", {
                        key: o.key,
                        type: "set",
                        attributes: o.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "remove".concat(t, "Attribute");
            },
            attacher: function(t24, e, n) {
                t24.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = s1(this, o, a, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    return delete i.attributes[r], this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "remove",
                        attributes: i.attributes,
                        name: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "replace".concat(t, "Attributes");
            },
            attacher: function(t25, e, n) {
                t25.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = s1(this, o, a, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if (!h1(r)) throw new F("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return i.attributes = r, this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "replace",
                        attributes: i.attributes
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "merge".concat(t, "Attributes");
            },
            attacher: function(t26, e, n) {
                t26.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = s1(this, o, a, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if (!h1(r)) throw new F("Graph.".concat(e, ": provided attributes are not a plain object."));
                    return c1(i.attributes, r), this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "merge",
                        attributes: i.attributes,
                        data: r
                    }), this;
                };
            }
        },
        {
            name: function(t) {
                return "update".concat(t, "Attributes");
            },
            attacher: function(t27, e, n) {
                t27.prototype[e] = function(t, r) {
                    var i;
                    if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new Y("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
                    if (arguments.length > 2) {
                        if (this.multi) throw new Y("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
                        var o = "" + t, a = "" + r;
                        if (r = arguments[2], !(i = s1(this, o, a, n))) throw new I("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
                    } else {
                        if ("mixed" !== n) throw new Y("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
                        if (t = "" + t, !(i = this._edges.get(t))) throw new I("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
                    }
                    if ("function" != typeof r) throw new F("Graph.".concat(e, ": provided updater is not a function."));
                    return i.attributes = r(i.attributes), this.emit("edgeAttributesUpdated", {
                        key: i.key,
                        type: "update",
                        attributes: i.attributes
                    }), this;
                };
            }
        }
    ];
    var $ = O, tt = R, et = function() {
        var t = arguments, e = null, n = -1;
        return new $(function() {
            for(var r = null;;){
                if (null === e) {
                    if (++n >= t.length) return {
                        done: !0
                    };
                    e = tt(t[n]);
                }
                if (!0 !== (r = e.next()).done) break;
                e = null;
            }
            return r;
        });
    }, nt = [
        {
            name: "edges",
            type: "mixed"
        },
        {
            name: "inEdges",
            type: "directed",
            direction: "in"
        },
        {
            name: "outEdges",
            type: "directed",
            direction: "out"
        },
        {
            name: "inboundEdges",
            type: "mixed",
            direction: "in"
        },
        {
            name: "outboundEdges",
            type: "mixed",
            direction: "out"
        },
        {
            name: "directedEdges",
            type: "directed"
        },
        {
            name: "undirectedEdges",
            type: "undirected"
        }
    ];
    function rt(t, e, n, r) {
        var i = !1;
        for(var o in e)if (o !== r) {
            var a = e[o];
            if (i = n(a.key, a.attributes, a.source.key, a.target.key, a.source.attributes, a.target.attributes, a.undirected), t && i) return a.key;
        }
    }
    function it(t, e, n, r) {
        var i, o, a, u = !1;
        for(var c in e)if (c !== r) {
            i = e[c];
            do {
                if (o = i.source, a = i.target, u = n(i.key, i.attributes, o.key, a.key, o.attributes, a.attributes, i.undirected), t && u) return i.key;
                i = i.next;
            }while (void 0 !== i)
        }
    }
    function ot(t, e) {
        var n, r = Object.keys(t), i = r.length, o = 0;
        return new O(function() {
            do if (n) n = n.next;
            else {
                if (o >= i) return {
                    done: !0
                };
                var a = r[o++];
                if (a === e) {
                    n = void 0;
                    continue;
                }
                n = t[a];
            }
            while (!n)
            return {
                done: !1,
                value: {
                    edge: n.key,
                    attributes: n.attributes,
                    source: n.source.key,
                    target: n.target.key,
                    sourceAttributes: n.source.attributes,
                    targetAttributes: n.target.attributes,
                    undirected: n.undirected
                }
            };
        });
    }
    function at(t, e, n, r) {
        var i = e[n];
        if (i) {
            var o = i.source, a = i.target;
            return r(i.key, i.attributes, o.key, a.key, o.attributes, a.attributes, i.undirected) && t ? i.key : void 0;
        }
    }
    function ut(t, e, n, r) {
        var i = e[n];
        if (i) {
            var o = !1;
            do {
                if (o = r(i.key, i.attributes, i.source.key, i.target.key, i.source.attributes, i.target.attributes, i.undirected), t && o) return i.key;
                i = i.next;
            }while (void 0 !== i)
        }
    }
    function ct(t28, e) {
        var n = t28[e];
        return void 0 !== n.next ? new O(function() {
            if (!n) return {
                done: !0
            };
            var t = {
                edge: n.key,
                attributes: n.attributes,
                source: n.source.key,
                target: n.target.key,
                sourceAttributes: n.source.attributes,
                targetAttributes: n.target.attributes,
                undirected: n.undirected
            };
            return n = n.next, {
                done: !1,
                value: t
            };
        }) : O.of({
            edge: n.key,
            attributes: n.attributes,
            source: n.source.key,
            target: n.target.key,
            sourceAttributes: n.source.attributes,
            targetAttributes: n.target.attributes,
            undirected: n.undirected
        });
    }
    function st(t, e) {
        if (0 === t.size) return [];
        if ("mixed" === e || e === t.type) return "function" == typeof Array.from ? Array.from(t._edges.keys()) : T(t._edges.keys(), t._edges.size);
        for(var n, r, i = "undirected" === e ? t.undirectedSize : t.directedSize, o = new Array(i), a = "undirected" === e, u = t._edges.values(), c = 0; !0 !== (n = u.next()).done;)(r = n.value).undirected === a && (o[c++] = r.key);
        return o;
    }
    function dt(t, e, n, r) {
        if (0 !== e.size) {
            for(var i, o, a = "mixed" !== n && n !== e.type, u = "undirected" === n, c = !1, s = e._edges.values(); !0 !== (i = s.next()).done;)if (o = i.value, !a || o.undirected === u) {
                var d = o, h = d.key, p = d.attributes, f = d.source, l = d.target;
                if (c = r(h, p, f.key, l.key, f.attributes, l.attributes, o.undirected), t && c) return h;
            }
        }
    }
    function ht(t29, e7) {
        if (0 === t29.size) return O.empty();
        var n = "mixed" !== e7 && e7 !== t29.type, r = "undirected" === e7, i = t29._edges.values();
        return new O(function() {
            for(var t, e;;){
                if ((t = i.next()).done) return t;
                if (e = t.value, !n || e.undirected === r) break;
            }
            return {
                value: {
                    edge: e.key,
                    attributes: e.attributes,
                    source: e.source.key,
                    target: e.target.key,
                    sourceAttributes: e.source.attributes,
                    targetAttributes: e.target.attributes,
                    undirected: e.undirected
                },
                done: !1
            };
        });
    }
    function pt(t, e, n, r, i, o) {
        var a, u = e ? it : rt;
        if ("undirected" !== n) {
            if ("out" !== r && (a = u(t, i.in, o), t && a)) return a;
            if ("in" !== r && (a = u(t, i.out, o, r ? void 0 : i.key), t && a)) return a;
        }
        if ("directed" !== n && (a = u(t, i.undirected, o), t && a)) return a;
    }
    function ft(t30, e, n, r) {
        var i = [];
        return pt(!1, t30, e, n, r, function(t) {
            i.push(t);
        }), i;
    }
    function lt(t, e, n) {
        var r = O.empty();
        return "undirected" !== t && ("out" !== e && void 0 !== n.in && (r = et(r, ot(n.in))), "in" !== e && void 0 !== n.out && (r = et(r, ot(n.out, e ? void 0 : n.key)))), "directed" !== t && void 0 !== n.undirected && (r = et(r, ot(n.undirected))), r;
    }
    function gt(t, e, n, r, i, o, a) {
        var u, c = n ? ut : at;
        if ("undirected" !== e) {
            if (void 0 !== i.in && "out" !== r && (u = c(t, i.in, o, a), t && u)) return u;
            if (void 0 !== i.out && "in" !== r && (r || i.key !== o) && (u = c(t, i.out, o, a), t && u)) return u;
        }
        if ("directed" !== e && void 0 !== i.undirected && (u = c(t, i.undirected, o, a), t && u)) return u;
    }
    function yt(t31, e, n, r, i) {
        var o = [];
        return gt(!1, t31, e, n, r, i, function(t) {
            o.push(t);
        }), o;
    }
    function wt(t, e, n, r) {
        var i = O.empty();
        return "undirected" !== t && (void 0 !== n.in && "out" !== e && r in n.in && (i = et(i, ct(n.in, r))), void 0 !== n.out && "in" !== e && r in n.out && (e || n.key !== r) && (i = et(i, ct(n.out, r)))), "directed" !== t && void 0 !== n.undirected && r in n.undirected && (i = et(i, ct(n.undirected, r))), i;
    }
    var vt = [
        {
            name: "neighbors",
            type: "mixed"
        },
        {
            name: "inNeighbors",
            type: "directed",
            direction: "in"
        },
        {
            name: "outNeighbors",
            type: "directed",
            direction: "out"
        },
        {
            name: "inboundNeighbors",
            type: "mixed",
            direction: "in"
        },
        {
            name: "outboundNeighbors",
            type: "mixed",
            direction: "out"
        },
        {
            name: "directedNeighbors",
            type: "directed"
        },
        {
            name: "undirectedNeighbors",
            type: "undirected"
        }
    ];
    function bt() {
        this.A = null, this.B = null;
    }
    function mt(t, e, n, r, i) {
        for(var o in r){
            var a = r[o], u = a.source, c = a.target, s = u === n ? c : u;
            if (!e || !e.has(s.key)) {
                var d = i(s.key, s.attributes);
                if (t && d) return s.key;
            }
        }
    }
    function kt(t, e, n, r, i) {
        if ("mixed" !== e) {
            if ("undirected" === e) return mt(t, null, r, r.undirected, i);
            if ("string" == typeof n) return mt(t, null, r, r[n], i);
        }
        var o, a = new bt;
        if ("undirected" !== e) {
            if ("out" !== n) {
                if (o = mt(t, null, r, r.in, i), t && o) return o;
                a.wrap(r.in);
            }
            if ("in" !== n) {
                if (o = mt(t, a, r, r.out, i), t && o) return o;
                a.wrap(r.out);
            }
        }
        if ("directed" !== e && (o = mt(t, a, r, r.undirected, i), t && o)) return o;
    }
    function _t(t, e, n) {
        var r = Object.keys(n), i = r.length, o = 0;
        return new O(function() {
            var a = null;
            do {
                if (o >= i) return t && t.wrap(n), {
                    done: !0
                };
                var u = n[r[o++]], c = u.source, s = u.target;
                a = c === e ? s : c, t && t.has(a.key) && (a = null);
            }while (null === a)
            return {
                done: !1,
                value: {
                    neighbor: a.key,
                    attributes: a.attributes
                }
            };
        });
    }
    function Gt(t32, e8) {
        var n6 = e8.name, r2 = e8.type, i = e8.direction;
        t32.prototype[n6] = function(t33) {
            if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return [];
            t33 = "" + t33;
            var e9 = this._nodes.get(t33);
            if (void 0 === e9) throw new I("Graph.".concat(n6, ': could not find the "').concat(t33, '" node in the graph.'));
            return (function(t34, e, n) {
                if ("mixed" !== t34) {
                    if ("undirected" === t34) return Object.keys(n.undirected);
                    if ("string" == typeof e) return Object.keys(n[e]);
                }
                var r = [];
                return kt(!1, t34, e, n, function(t) {
                    r.push(t);
                }), r;
            })("mixed" === r2 ? this.type : r2, i, e9);
        };
    }
    function xt(t35, e10) {
        var n7 = e10.name, r3 = e10.type, i2 = e10.direction, o = n7.slice(0, -1) + "Entries";
        t35.prototype[o] = function(t36) {
            if ("mixed" !== r3 && "mixed" !== this.type && r3 !== this.type) return O.empty();
            t36 = "" + t36;
            var e11 = this._nodes.get(t36);
            if (void 0 === e11) throw new I("Graph.".concat(o, ': could not find the "').concat(t36, '" node in the graph.'));
            return (function(t, e, n) {
                if ("mixed" !== t) {
                    if ("undirected" === t) return _t(null, n, n.undirected);
                    if ("string" == typeof e) return _t(null, n, n[e]);
                }
                var r = O.empty(), i = new bt;
                return "undirected" !== t && ("out" !== e && (r = et(r, _t(i, n, n.in))), "in" !== e && (r = et(r, _t(i, n, n.out)))), "directed" !== t && (r = et(r, _t(i, n, n.undirected))), r;
            })("mixed" === r3 ? this.type : r3, i2, e11);
        };
    }
    function Et(t, e, n, r, i) {
        for(var o, a, u, c, s, d, h, p = r._nodes.values(), f = r.type; !0 !== (o = p.next()).done;){
            var l = !1;
            if (a = o.value, "undirected" !== f) for(u in c = a.out){
                s = c[u];
                do {
                    if (d = s.target, l = !0, h = i(a.key, d.key, a.attributes, d.attributes, s.key, s.attributes, s.undirected), t && h) return s;
                    s = s.next;
                }while (s)
            }
            if ("directed" !== f) {
                for(u in c = a.undirected)if (!(e && a.key > u)) {
                    s = c[u];
                    do {
                        if ((d = s.target).key !== u && (d = s.source), l = !0, h = i(a.key, d.key, a.attributes, d.attributes, s.key, s.attributes, s.undirected), t && h) return s;
                        s = s.next;
                    }while (s)
                }
            }
            if (n && !l && (h = i(a.key, null, a.attributes, null, null, null, null), t && h)) return null;
        }
    }
    function At(t) {
        if (!h1(t)) throw new F('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
        if (!("key" in t)) throw new F("Graph.import: serialized node is missing its key.");
        if ("attributes" in t && (!h1(t.attributes) || null === t.attributes)) throw new F("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
    }
    function St(t) {
        if (!h1(t)) throw new F('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
        if (!("source" in t)) throw new F("Graph.import: serialized edge is missing its source.");
        if (!("target" in t)) throw new F("Graph.import: serialized edge is missing its target.");
        if ("attributes" in t && (!h1(t.attributes) || null === t.attributes)) throw new F("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
        if ("undirected" in t && "boolean" != typeof t.undirected) throw new F("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
    }
    bt.prototype.wrap = function(t) {
        null === this.A ? this.A = t : null === this.B && (this.B = t);
    }, bt.prototype.has = function(t) {
        return null !== this.A && t in this.A || null !== this.B && t in this.B;
    };
    var Dt, Lt = (Dt = 255 & Math.floor(256 * Math.random()), function() {
        return Dt++;
    }), Ut = new Set([
        "directed",
        "undirected",
        "mixed"
    ]), Nt = new Set([
        "domain",
        "_events",
        "_eventsCount",
        "_maxListeners"
    ]), jt = {
        allowSelfLoops: !0,
        multi: !1,
        type: "mixed"
    };
    function Ot(t, e, n) {
        var r = new t.NodeDataClass(e, n);
        return t._nodes.set(e, r), t.emit("nodeAdded", {
            key: e,
            attributes: n
        }), r;
    }
    function Ct(t, e, n, r, i, o, a, u) {
        if (!r && "undirected" === t.type) throw new Y("Graph.".concat(e, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
        if (r && "directed" === t.type) throw new Y("Graph.".concat(e, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
        if (u && !h1(u)) throw new F("Graph.".concat(e, ': invalid attributes. Expecting an object but got "').concat(u, '"'));
        if (o = "" + o, a = "" + a, u = u || {
        }, !t.allowSelfLoops && o === a) throw new Y("Graph.".concat(e, ': source & target are the same ("').concat(o, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
        var c = t._nodes.get(o), s = t._nodes.get(a);
        if (!c) throw new I("Graph.".concat(e, ': source node "').concat(o, '" not found.'));
        if (!s) throw new I("Graph.".concat(e, ': target node "').concat(a, '" not found.'));
        var d = {
            key: null,
            undirected: r,
            source: o,
            target: a,
            attributes: u
        };
        if (n) i = t._edgeKeyGenerator();
        else if (i = "" + i, t._edges.has(i)) throw new Y("Graph.".concat(e, ': the "').concat(i, '" edge already exists in the graph.'));
        if (!t.multi && (r ? void 0 !== c.undirected[a] : void 0 !== c.out[a])) throw new Y("Graph.".concat(e, ': an edge linking "').concat(o, '" to "').concat(a, "\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));
        var p = new H(r, i, c, s, u);
        t._edges.set(i, p);
        var f = o === a;
        return r ? (c.undirectedDegree++, s.undirectedDegree++, f && t._undirectedSelfLoopCount++) : (c.outDegree++, s.inDegree++, f && t._directedSelfLoopCount++), t.multi ? p.attachMulti() : p.attach(), r ? t._undirectedSize++ : t._directedSize++, d.key = i, t.emit("edgeAdded", d), i;
    }
    function zt(t, e, n, r, i, o, a, u, s) {
        if (!r && "undirected" === t.type) throw new Y("Graph.".concat(e, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
        if (r && "directed" === t.type) throw new Y("Graph.".concat(e, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
        if (u) {
            if (s) {
                if ("function" != typeof u) throw new F("Graph.".concat(e, ': invalid updater function. Expecting a function but got "').concat(u, '"'));
            } else if (!h1(u)) throw new F("Graph.".concat(e, ': invalid attributes. Expecting an object but got "').concat(u, '"'));
        }
        var d;
        if (o = "" + o, a = "" + a, s && (d = u, u = void 0), !t.allowSelfLoops && o === a) throw new Y("Graph.".concat(e, ': source & target are the same ("').concat(o, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
        var p, f, l = t._nodes.get(o), g = t._nodes.get(a);
        if (!n && (p = t._edges.get(i))) {
            if (!(p.source.key === o && p.target.key === a || r && p.source.key === a && p.target.key === o)) throw new Y("Graph.".concat(e, ': inconsistency detected when attempting to merge the "').concat(i, '" edge with "').concat(o, '" source & "').concat(a, '" target vs. ("').concat(p.source.key, '", "').concat(p.target.key, '").'));
            f = p;
        }
        if (f || t.multi || !l || (f = r ? l.undirected[a] : l.out[a]), f) {
            var y = [
                f.key,
                !1,
                !1,
                !1
            ];
            if (s ? !d : !u) return y;
            if (s) {
                var w = f.attributes;
                f.attributes = d(w), t.emit("edgeAttributesUpdated", {
                    type: "replace",
                    key: f.key,
                    attributes: f.attributes
                });
            } else c1(f.attributes, u), t.emit("edgeAttributesUpdated", {
                type: "merge",
                key: f.key,
                attributes: f.attributes,
                data: u
            });
            return y;
        }
        u = u || {
        }, s && d && (u = d(u));
        var v = {
            key: null,
            undirected: r,
            source: o,
            target: a,
            attributes: u
        };
        if (n) i = t._edgeKeyGenerator();
        else if (i = "" + i, t._edges.has(i)) throw new Y("Graph.".concat(e, ': the "').concat(i, '" edge already exists in the graph.'));
        var b = !1, m = !1;
        l || (l = Ot(t, o, {
        }), b = !0, o === a && (g = l, m = !0)), g || (g = Ot(t, a, {
        }), m = !0), p = new H(r, i, l, g, u), t._edges.set(i, p);
        var k = o === a;
        return r ? (l.undirectedDegree++, g.undirectedDegree++, k && t._undirectedSelfLoopCount++) : (l.outDegree++, g.inDegree++, k && t._directedSelfLoopCount++), t.multi ? p.attachMulti() : p.attach(), r ? t._undirectedSize++ : t._directedSize++, v.key = i, t.emit("edgeAdded", v), [
            i,
            !0,
            b,
            m
        ];
    }
    function Mt(t, e) {
        t._edges.delete(e.key);
        var n = e.source, r = e.target, i = e.attributes, o = e.undirected, a = n === r;
        o ? (n.undirectedDegree--, r.undirectedDegree--, a && t._undirectedSelfLoopCount--) : (n.outDegree--, r.inDegree--, a && t._directedSelfLoopCount--), t.multi ? e.detachMulti() : e.detach(), o ? t._undirectedSize-- : t._directedSize--, t.emit("edgeDropped", {
            key: e.key,
            attributes: i,
            source: n.key,
            target: r.key,
            undirected: o
        });
    }
    var Wt = function(n8) {
        function r4(t37) {
            var e;
            if (e = n8.call(this) || this, "boolean" != typeof (t37 = c1({
            }, jt, t37)).multi) throw new F("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(t37.multi, '".'));
            if (!Ut.has(t37.type)) throw new F('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(t37.type, '".'));
            if ("boolean" != typeof t37.allowSelfLoops) throw new F("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(t37.allowSelfLoops, '".'));
            var r = "mixed" === t37.type ? q : "directed" === t37.type ? J : V;
            f1(u1(e), "NodeDataClass", r);
            var i = "geid_" + Lt() + "_", o = 0;
            return f1(u1(e), "_attributes", {
            }), f1(u1(e), "_nodes", new Map), f1(u1(e), "_edges", new Map), f1(u1(e), "_directedSize", 0), f1(u1(e), "_undirectedSize", 0), f1(u1(e), "_directedSelfLoopCount", 0), f1(u1(e), "_undirectedSelfLoopCount", 0), f1(u1(e), "_edgeKeyGenerator", function() {
                var t;
                do t = i + o++;
                while (e._edges.has(t))
                return t;
            }), f1(u1(e), "_options", t37), Nt.forEach(function(t) {
                return f1(u1(e), t, e[t]);
            }), l1(u1(e), "order", function() {
                return e._nodes.size;
            }), l1(u1(e), "size", function() {
                return e._edges.size;
            }), l1(u1(e), "directedSize", function() {
                return e._directedSize;
            }), l1(u1(e), "undirectedSize", function() {
                return e._undirectedSize;
            }), l1(u1(e), "selfLoopCount", function() {
                return e._directedSelfLoopCount + e._undirectedSelfLoopCount;
            }), l1(u1(e), "directedSelfLoopCount", function() {
                return e._directedSelfLoopCount;
            }), l1(u1(e), "undirectedSelfLoopCount", function() {
                return e._undirectedSelfLoopCount;
            }), l1(u1(e), "multi", e._options.multi), l1(u1(e), "type", e._options.type), l1(u1(e), "allowSelfLoops", e._options.allowSelfLoops), l1(u1(e), "implementation", function() {
                return "graphology";
            }), e;
        }
        e1(r4, n8);
        var i3 = r4.prototype;
        return i3._resetInstanceCounters = function() {
            this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
        }, i3.hasNode = function(t) {
            return this._nodes.has("" + t);
        }, i3.hasDirectedEdge = function(t, e) {
            if ("undirected" === this.type) return !1;
            if (1 === arguments.length) {
                var n = "" + t, r = this._edges.get(n);
                return !!r && !r.undirected;
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var i = this._nodes.get(t);
                if (!i) return !1;
                var o = i.out[e];
                return !!o && (!this.multi || !!o.size);
            }
            throw new F("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i3.hasUndirectedEdge = function(t, e) {
            if ("directed" === this.type) return !1;
            if (1 === arguments.length) {
                var n = "" + t, r = this._edges.get(n);
                return !!r && r.undirected;
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var i = this._nodes.get(t);
                if (!i) return !1;
                var o = i.undirected[e];
                return !!o && (!this.multi || !!o.size);
            }
            throw new F("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i3.hasEdge = function(t, e) {
            if (1 === arguments.length) {
                var n = "" + t;
                return this._edges.has(n);
            }
            if (2 === arguments.length) {
                t = "" + t, e = "" + e;
                var r = this._nodes.get(t);
                if (!r) return !1;
                var i = void 0 !== r.out && r.out[e];
                return i || (i = void 0 !== r.undirected && r.undirected[e]), !!i && (!this.multi || !!i.size);
            }
            throw new F("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i3.directedEdge = function(t, e) {
            if ("undirected" !== this.type) {
                if (t = "" + t, e = "" + e, this.multi) throw new Y("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
                var n = this._nodes.get(t);
                if (!n) throw new I('Graph.directedEdge: could not find the "'.concat(t, '" source node in the graph.'));
                if (!this._nodes.has(e)) throw new I('Graph.directedEdge: could not find the "'.concat(e, '" target node in the graph.'));
                var r = n.out && n.out[e] || void 0;
                return r ? r.key : void 0;
            }
        }, i3.undirectedEdge = function(t, e) {
            if ("directed" !== this.type) {
                if (t = "" + t, e = "" + e, this.multi) throw new Y("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
                var n = this._nodes.get(t);
                if (!n) throw new I('Graph.undirectedEdge: could not find the "'.concat(t, '" source node in the graph.'));
                if (!this._nodes.has(e)) throw new I('Graph.undirectedEdge: could not find the "'.concat(e, '" target node in the graph.'));
                var r = n.undirected && n.undirected[e] || void 0;
                return r ? r.key : void 0;
            }
        }, i3.edge = function(t, e) {
            if (this.multi) throw new Y("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new I('Graph.edge: could not find the "'.concat(t, '" source node in the graph.'));
            if (!this._nodes.has(e)) throw new I('Graph.edge: could not find the "'.concat(e, '" target node in the graph.'));
            var r = n.out && n.out[e] || n.undirected && n.undirected[e] || void 0;
            if (r) return r.key;
        }, i3.areDirectedNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new I('Graph.areDirectedNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && (e in n.in || e in n.out);
        }, i3.areOutNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new I('Graph.areOutNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.out;
        }, i3.areInNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new I('Graph.areInNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.in;
        }, i3.areUndirectedNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new I('Graph.areUndirectedNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "directed" !== this.type && e in n.undirected;
        }, i3.areNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new I('Graph.areNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && (e in n.in || e in n.out) || "directed" !== this.type && e in n.undirected;
        }, i3.areInboundNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new I('Graph.areInboundNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.in || "directed" !== this.type && e in n.undirected;
        }, i3.areOutboundNeighbors = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._nodes.get(t);
            if (!n) throw new I('Graph.areOutboundNeighbors: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" !== this.type && e in n.out || "directed" !== this.type && e in n.undirected;
        }, i3.inDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.inDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree;
        }, i3.outDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.outDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.outDegree;
        }, i3.directedDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.directedDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "undirected" === this.type ? 0 : e.inDegree + e.outDegree;
        }, i3.undirectedDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.undirectedDegree: could not find the "'.concat(t, '" node in the graph.'));
            return "directed" === this.type ? 0 : e.undirectedDegree;
        }, i3.inboundDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.inboundDegree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.inDegree), n;
        }, i3.outboundDegree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.outboundDegree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.outDegree), n;
        }, i3.degree = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.degree: could not find the "'.concat(t, '" node in the graph.'));
            var n = 0;
            return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.inDegree + e.outDegree), n;
        }, i3.inDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            if ("undirected" === this.type) return 0;
            var n = e.in[t], r = n ? this.multi ? n.size : 1 : 0;
            return e.inDegree - r;
        }, i3.outDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            if ("undirected" === this.type) return 0;
            var n = e.out[t], r = n ? this.multi ? n.size : 1 : 0;
            return e.outDegree - r;
        }, i3.directedDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            if ("undirected" === this.type) return 0;
            var n = e.out[t], r = n ? this.multi ? n.size : 1 : 0;
            return e.inDegree + e.outDegree - 2 * r;
        }, i3.undirectedDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e = this._nodes.get(t);
            if (!e) throw new I('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            if ("directed" === this.type) return 0;
            var n = e.undirected[t], r = n ? this.multi ? n.size : 1 : 0;
            return e.undirectedDegree - 2 * r;
        }, i3.inboundDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e, n = this._nodes.get(t);
            if (!n) throw new I('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var r = 0, i = 0;
            return "directed" !== this.type && (r += n.undirectedDegree, i += 2 * ((e = n.undirected[t]) ? this.multi ? e.size : 1 : 0)), "undirected" !== this.type && (r += n.inDegree, i += (e = n.out[t]) ? this.multi ? e.size : 1 : 0), r - i;
        }, i3.outboundDegreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e, n = this._nodes.get(t);
            if (!n) throw new I('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var r = 0, i = 0;
            return "directed" !== this.type && (r += n.undirectedDegree, i += 2 * ((e = n.undirected[t]) ? this.multi ? e.size : 1 : 0)), "undirected" !== this.type && (r += n.outDegree, i += (e = n.in[t]) ? this.multi ? e.size : 1 : 0), r - i;
        }, i3.degreeWithoutSelfLoops = function(t) {
            t = "" + t;
            var e, n = this._nodes.get(t);
            if (!n) throw new I('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
            var r = 0, i = 0;
            return "directed" !== this.type && (r += n.undirectedDegree, i += 2 * ((e = n.undirected[t]) ? this.multi ? e.size : 1 : 0)), "undirected" !== this.type && (r += n.inDegree + n.outDegree, i += 2 * ((e = n.out[t]) ? this.multi ? e.size : 1 : 0)), r - i;
        }, i3.source = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new I('Graph.source: could not find the "'.concat(t, '" edge in the graph.'));
            return e.source.key;
        }, i3.target = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new I('Graph.target: could not find the "'.concat(t, '" edge in the graph.'));
            return e.target.key;
        }, i3.extremities = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new I('Graph.extremities: could not find the "'.concat(t, '" edge in the graph.'));
            return [
                e.source.key,
                e.target.key
            ];
        }, i3.opposite = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._edges.get(e);
            if (!n) throw new I('Graph.opposite: could not find the "'.concat(e, '" edge in the graph.'));
            var r = n.source.key, i = n.target.key;
            if (t === r) return i;
            if (t === i) return r;
            throw new I('Graph.opposite: the "'.concat(t, '" node is not attached to the "').concat(e, '" edge (').concat(r, ", ").concat(i, ")."));
        }, i3.hasExtremity = function(t, e) {
            t = "" + t, e = "" + e;
            var n = this._edges.get(t);
            if (!n) throw new I('Graph.hasExtremity: could not find the "'.concat(t, '" edge in the graph.'));
            return n.source.key === e || n.target.key === e;
        }, i3.isUndirected = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new I('Graph.isUndirected: could not find the "'.concat(t, '" edge in the graph.'));
            return e.undirected;
        }, i3.isDirected = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new I('Graph.isDirected: could not find the "'.concat(t, '" edge in the graph.'));
            return !e.undirected;
        }, i3.isSelfLoop = function(t) {
            t = "" + t;
            var e = this._edges.get(t);
            if (!e) throw new I('Graph.isSelfLoop: could not find the "'.concat(t, '" edge in the graph.'));
            return e.source === e.target;
        }, i3.addNode = function(t38, e12) {
            var n9 = function(t, e, n) {
                if (n && !h1(n)) throw new F('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n, '"'));
                if (e = "" + e, n = n || {
                }, t._nodes.has(e)) throw new Y('Graph.addNode: the "'.concat(e, '" node already exist in the graph.'));
                var r = new t.NodeDataClass(e, n);
                return t._nodes.set(e, r), t.emit("nodeAdded", {
                    key: e,
                    attributes: n
                }), r;
            }(this, t38, e12);
            return n9.key;
        }, i3.mergeNode = function(t, e) {
            if (e && !h1(e)) throw new F('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e, '"'));
            t = "" + t, e = e || {
            };
            var n = this._nodes.get(t);
            return n ? (e && (c1(n.attributes, e), this.emit("nodeAttributesUpdated", {
                type: "merge",
                key: t,
                attributes: n.attributes,
                data: e
            })), [
                t,
                !1
            ]) : (n = new this.NodeDataClass(t, e), this._nodes.set(t, n), this.emit("nodeAdded", {
                key: t,
                attributes: e
            }), [
                t,
                !0
            ]);
        }, i3.updateNode = function(t, e) {
            if (e && "function" != typeof e) throw new F('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e, '"'));
            t = "" + t;
            var n = this._nodes.get(t);
            if (n) {
                if (e) {
                    var r = n.attributes;
                    n.attributes = e(r), this.emit("nodeAttributesUpdated", {
                        type: "replace",
                        key: t,
                        attributes: n.attributes
                    });
                }
                return [
                    t,
                    !1
                ];
            }
            var i = e ? e({
            }) : {
            };
            return n = new this.NodeDataClass(t, i), this._nodes.set(t, n), this.emit("nodeAdded", {
                key: t,
                attributes: i
            }), [
                t,
                !0
            ];
        }, i3.dropNode = function(t) {
            t = "" + t;
            var e, n = this._nodes.get(t);
            if (!n) throw new I('Graph.dropNode: could not find the "'.concat(t, '" node in the graph.'));
            if ("undirected" !== this.type) {
                for(var r in n.out){
                    e = n.out[r];
                    do Mt(this, e), e = e.next;
                    while (e)
                }
                for(var i in n.in){
                    e = n.in[i];
                    do Mt(this, e), e = e.next;
                    while (e)
                }
            }
            if ("directed" !== this.type) for(var o in n.undirected){
                e = n.undirected[o];
                do Mt(this, e), e = e.next;
                while (e)
            }
            this._nodes.delete(t), this.emit("nodeDropped", {
                key: t,
                attributes: n.attributes
            });
        }, i3.dropEdge = function(t) {
            var e;
            if (arguments.length > 1) {
                var n = "" + arguments[0], r = "" + arguments[1];
                if (!(e = s1(this, n, r, this.type))) throw new I('Graph.dropEdge: could not find the "'.concat(n, '" -> "').concat(r, '" edge in the graph.'));
            } else if (t = "" + t, !(e = this._edges.get(t))) throw new I('Graph.dropEdge: could not find the "'.concat(t, '" edge in the graph.'));
            return Mt(this, e), this;
        }, i3.dropDirectedEdge = function(t, e) {
            if (arguments.length < 2) throw new Y("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
            if (this.multi) throw new Y("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
            var n = s1(this, t = "" + t, e = "" + e, "directed");
            if (!n) throw new I('Graph.dropDirectedEdge: could not find a "'.concat(t, '" -> "').concat(e, '" edge in the graph.'));
            return Mt(this, n), this;
        }, i3.dropUndirectedEdge = function(t, e) {
            if (arguments.length < 2) throw new Y("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
            if (this.multi) throw new Y("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
            var n = s1(this, t, e, "undirected");
            if (!n) throw new I('Graph.dropUndirectedEdge: could not find a "'.concat(t, '" -> "').concat(e, '" edge in the graph.'));
            return Mt(this, n), this;
        }, i3.clear = function() {
            this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
        }, i3.clearEdges = function() {
            for(var t, e = this._nodes.values(); !0 !== (t = e.next()).done;)t.value.clear();
            this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
        }, i3.getAttribute = function(t) {
            return this._attributes[t];
        }, i3.getAttributes = function() {
            return this._attributes;
        }, i3.hasAttribute = function(t) {
            return this._attributes.hasOwnProperty(t);
        }, i3.setAttribute = function(t, e) {
            return this._attributes[t] = e, this.emit("attributesUpdated", {
                type: "set",
                attributes: this._attributes,
                name: t
            }), this;
        }, i3.updateAttribute = function(t, e) {
            if ("function" != typeof e) throw new F("Graph.updateAttribute: updater should be a function.");
            var n = this._attributes[t];
            return this._attributes[t] = e(n), this.emit("attributesUpdated", {
                type: "set",
                attributes: this._attributes,
                name: t
            }), this;
        }, i3.removeAttribute = function(t) {
            return delete this._attributes[t], this.emit("attributesUpdated", {
                type: "remove",
                attributes: this._attributes,
                name: t
            }), this;
        }, i3.replaceAttributes = function(t) {
            if (!h1(t)) throw new F("Graph.replaceAttributes: provided attributes are not a plain object.");
            return this._attributes = t, this.emit("attributesUpdated", {
                type: "replace",
                attributes: this._attributes
            }), this;
        }, i3.mergeAttributes = function(t) {
            if (!h1(t)) throw new F("Graph.mergeAttributes: provided attributes are not a plain object.");
            return c1(this._attributes, t), this.emit("attributesUpdated", {
                type: "merge",
                attributes: this._attributes,
                data: t
            }), this;
        }, i3.updateAttributes = function(t) {
            if ("function" != typeof t) throw new F("Graph.updateAttributes: provided updater is not a function.");
            return this._attributes = t(this._attributes), this.emit("attributesUpdated", {
                type: "update",
                attributes: this._attributes
            }), this;
        }, i3.updateEachNodeAttributes = function(t, e) {
            if ("function" != typeof t) throw new F("Graph.updateEachNodeAttributes: expecting an updater function.");
            if (e && !g1(e)) throw new F("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
            for(var n, r, i = this._nodes.values(); !0 !== (n = i.next()).done;)(r = n.value).attributes = t(r.key, r.attributes);
            this.emit("eachNodeAttributesUpdated", {
                hints: e || null
            });
        }, i3.updateEachEdgeAttributes = function(t, e) {
            if ("function" != typeof t) throw new F("Graph.updateEachEdgeAttributes: expecting an updater function.");
            if (e && !g1(e)) throw new F("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
            for(var n, r, i, o, a = this._edges.values(); !0 !== (n = a.next()).done;)i = (r = n.value).source, o = r.target, r.attributes = t(r.key, r.attributes, i.key, o.key, i.attributes, o.attributes, r.undirected);
            this.emit("eachEdgeAttributesUpdated", {
                hints: e || null
            });
        }, i3.forEachAdjacencyEntry = function(t) {
            if ("function" != typeof t) throw new F("Graph.forEachAdjacencyEntry: expecting a callback.");
            Et(!1, !1, !1, this, t);
        }, i3.forEachAdjacencyEntryWithOrphans = function(t) {
            if ("function" != typeof t) throw new F("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
            Et(!1, !1, !0, this, t);
        }, i3.forEachAssymetricAdjacencyEntry = function(t) {
            if ("function" != typeof t) throw new F("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
            Et(!1, !0, !1, this, t);
        }, i3.forEachAssymetricAdjacencyEntryWithOrphans = function(t) {
            if ("function" != typeof t) throw new F("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
            Et(!1, !0, !0, this, t);
        }, i3.nodes = function() {
            return "function" == typeof Array.from ? Array.from(this._nodes.keys()) : T(this._nodes.keys(), this._nodes.size);
        }, i3.forEachNode = function(t) {
            if ("function" != typeof t) throw new F("Graph.forEachNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)t((n = e.value).key, n.attributes);
        }, i3.findNode = function(t) {
            if ("function" != typeof t) throw new F("Graph.findNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (t((n = e.value).key, n.attributes)) return n.key;
        }, i3.mapNodes = function(t) {
            if ("function" != typeof t) throw new F("Graph.mapNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(), i = new Array(this.order), o = 0; !0 !== (e = r.next()).done;)n = e.value, i[o++] = t(n.key, n.attributes);
            return i;
        }, i3.someNode = function(t) {
            if ("function" != typeof t) throw new F("Graph.someNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (t((n = e.value).key, n.attributes)) return !0;
            return !1;
        }, i3.everyNode = function(t) {
            if ("function" != typeof t) throw new F("Graph.everyNode: expecting a callback.");
            for(var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;)if (!t((n = e.value).key, n.attributes)) return !1;
            return !0;
        }, i3.filterNodes = function(t) {
            if ("function" != typeof t) throw new F("Graph.filterNodes: expecting a callback.");
            for(var e, n, r = this._nodes.values(), i = []; !0 !== (e = r.next()).done;)t((n = e.value).key, n.attributes) && i.push(n.key);
            return i;
        }, i3.reduceNodes = function(t, e) {
            if ("function" != typeof t) throw new F("Graph.reduceNodes: expecting a callback.");
            if (arguments.length < 2) throw new F("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
            for(var n, r, i = e, o = this._nodes.values(); !0 !== (n = o.next()).done;)i = t(i, (r = n.value).key, r.attributes);
            return i;
        }, i3.nodeEntries = function() {
            var t = this._nodes.values();
            return new O(function() {
                var e = t.next();
                if (e.done) return e;
                var n = e.value;
                return {
                    value: {
                        node: n.key,
                        attributes: n.attributes
                    },
                    done: !1
                };
            });
        }, i3.export = function() {
            var t39 = new Array(this._nodes.size), e13 = 0;
            this._nodes.forEach(function(n11, r) {
                t39[e13++] = (function(t, e) {
                    var n = {
                        key: t
                    };
                    return p1(e.attributes) || (n.attributes = c1({
                    }, e.attributes)), n;
                })(r, n11);
            });
            var n10 = new Array(this._edges.size);
            return e13 = 0, this._edges.forEach(function(t40, r) {
                n10[e13++] = (function(t, e) {
                    var n = {
                        key: t,
                        source: e.source.key,
                        target: e.target.key
                    };
                    return p1(e.attributes) || (n.attributes = c1({
                    }, e.attributes)), e.undirected && (n.undirected = !0), n;
                })(r, t40);
            }), {
                options: {
                    type: this.type,
                    multi: this.multi,
                    allowSelfLoops: this.allowSelfLoops
                },
                attributes: this.getAttributes(),
                nodes: t39,
                edges: n10
            };
        }, i3.import = function(t41) {
            var e14, n12, r5, i, o, a = this, u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (d1(t41)) return t41.forEachNode(function(t, e) {
                u ? a.mergeNode(t, e) : a.addNode(t, e);
            }), t41.forEachEdge(function(t, e, n, r, i, o, c) {
                u ? c ? a.mergeUndirectedEdgeWithKey(t, n, r, e) : a.mergeDirectedEdgeWithKey(t, n, r, e) : c ? a.addUndirectedEdgeWithKey(t, n, r, e) : a.addDirectedEdgeWithKey(t, n, r, e);
            }), this;
            if (!h1(t41)) throw new F("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
            if (t41.attributes) {
                if (!h1(t41.attributes)) throw new F("Graph.import: invalid attributes. Expecting a plain object.");
                u ? this.mergeAttributes(t41.attributes) : this.replaceAttributes(t41.attributes);
            }
            if (t41.nodes) {
                if (r5 = t41.nodes, !Array.isArray(r5)) throw new F("Graph.import: invalid nodes. Expecting an array.");
                for(e14 = 0, n12 = r5.length; e14 < n12; e14++){
                    At(i = r5[e14]);
                    var c2 = i, s = c2.key, p = c2.attributes;
                    u ? this.mergeNode(s, p) : this.addNode(s, p);
                }
            }
            if (t41.edges) {
                if (r5 = t41.edges, !Array.isArray(r5)) throw new F("Graph.import: invalid edges. Expecting an array.");
                for(e14 = 0, n12 = r5.length; e14 < n12; e14++){
                    St(o = r5[e14]);
                    var f = o, l = f.source, g = f.target, y = f.attributes, w = f.undirected, v = void 0 !== w && w;
                    "key" in o ? (u ? v ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : v ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, o.key, l, g, y) : (u ? v ? this.mergeUndirectedEdge : this.mergeDirectedEdge : v ? this.addUndirectedEdge : this.addDirectedEdge).call(this, l, g, y);
                }
            }
            return this;
        }, i3.nullCopy = function(t) {
            var e = new r4(c1({
            }, this._options, t));
            return e.replaceAttributes(c1({
            }, this.getAttributes())), e;
        }, i3.emptyCopy = function(t42) {
            var e = this.nullCopy(t42);
            return this._nodes.forEach(function(t, n) {
                var r = c1({
                }, t.attributes);
                t = new e.NodeDataClass(n, r), e._nodes.set(n, t);
            }), e;
        }, i3.copy = function(t) {
            if ("string" == typeof (t = t || {
            }).type && t.type !== this.type && "mixed" !== t.type) throw new Y('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t.type, '" because this would mean losing information about the current graph.'));
            if ("boolean" == typeof t.multi && t.multi !== this.multi && !0 !== t.multi) throw new Y("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
            if ("boolean" == typeof t.allowSelfLoops && t.allowSelfLoops !== this.allowSelfLoops && !0 !== t.allowSelfLoops) throw new Y("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
            for(var e, n, r = this.emptyCopy(t), i = this._edges.values(); !0 !== (e = i.next()).done;)Ct(r, "copy", !1, (n = e.value).undirected, n.key, n.source.key, n.target.key, c1({
            }, n.attributes));
            return r;
        }, i3.toJSON = function() {
            return this.export();
        }, i3.toString = function() {
            return "[object Graph]";
        }, i3.inspect = function() {
            var e = this, n13 = {
            };
            this._nodes.forEach(function(t, e) {
                n13[e] = t.attributes;
            });
            var r = {
            }, i = {
            };
            this._edges.forEach(function(t, n) {
                var o, a = t.undirected ? "--" : "->", u = "", c = t.source.key, s = t.target.key;
                t.undirected && c > s && (o = c, c = s, s = o);
                var d = "(".concat(c, ")").concat(a, "(").concat(s, ")");
                n.startsWith("geid_") ? e.multi && (void 0 === i[d] ? i[d] = 0 : i[d]++, u += "".concat(i[d], ". ")) : u += "[".concat(n, "]: "), r[u += d] = t.attributes;
            });
            var o2 = {
            };
            for(var a2 in this)this.hasOwnProperty(a2) && !Nt.has(a2) && "function" != typeof this[a2] && "symbol" !== t1(a2) && (o2[a2] = this[a2]);
            return o2.attributes = this._attributes, o2.nodes = n13, o2.edges = r, f1(o2, "constructor", this.constructor), o2;
        }, r4;
    }(w1.exports.EventEmitter);
    "undefined" != typeof Symbol && (Wt.prototype[Symbol.for("nodejs.util.inspect.custom")] = Wt.prototype.inspect), [
        {
            name: function(t) {
                return "".concat(t, "Edge");
            },
            generateKey: !0
        },
        {
            name: function(t) {
                return "".concat(t, "DirectedEdge");
            },
            generateKey: !0,
            type: "directed"
        },
        {
            name: function(t) {
                return "".concat(t, "UndirectedEdge");
            },
            generateKey: !0,
            type: "undirected"
        },
        {
            name: function(t) {
                return "".concat(t, "EdgeWithKey");
            }
        },
        {
            name: function(t) {
                return "".concat(t, "DirectedEdgeWithKey");
            },
            type: "directed"
        },
        {
            name: function(t) {
                return "".concat(t, "UndirectedEdgeWithKey");
            },
            type: "undirected"
        }
    ].forEach(function(t) {
        [
            "add",
            "merge",
            "update"
        ].forEach(function(e) {
            var n = t.name(e), r = "add" === e ? Ct : zt;
            t.generateKey ? Wt.prototype[n] = function(i, o, a) {
                return r(this, n, !0, "undirected" === (t.type || this.type), null, i, o, a, "update" === e);
            } : Wt.prototype[n] = function(i, o, a, u) {
                return r(this, n, !1, "undirected" === (t.type || this.type), i, o, a, u, "update" === e);
            };
        });
    }), (function(t) {
        X.forEach(function(e) {
            var n = e.name, r = e.attacher;
            r(t, n("Node"), 0), r(t, n("Source"), 1), r(t, n("Target"), 2), r(t, n("Opposite"), 3);
        });
    })(Wt), (function(t) {
        Z.forEach(function(e) {
            var n = e.name, r = e.attacher;
            r(t, n("Edge"), "mixed"), r(t, n("DirectedEdge"), "directed"), r(t, n("UndirectedEdge"), "undirected");
        });
    })(Wt), (function(t43) {
        nt.forEach(function(e15) {
            !function(t44, e16) {
                var n = e16.name, r = e16.type, i = e16.direction;
                t44.prototype[n] = function(t, e) {
                    if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return [];
                    if (!arguments.length) return st(this, r);
                    if (1 === arguments.length) {
                        t = "" + t;
                        var o = this._nodes.get(t);
                        if (void 0 === o) throw new I("Graph.".concat(n, ': could not find the "').concat(t, '" node in the graph.'));
                        return ft(this.multi, "mixed" === r ? this.type : r, i, o);
                    }
                    if (2 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var a = this._nodes.get(t);
                        if (!a) throw new I("Graph.".concat(n, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new I("Graph.".concat(n, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return yt(r, this.multi, i, a, e);
                    }
                    throw new F("Graph.".concat(n, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
                };
            }(t43, e15), (function(t45, e17) {
                var n14 = e17.name, r6 = e17.type, i4 = e17.direction, o3 = "forEach" + n14[0].toUpperCase() + n14.slice(1, -1);
                t45.prototype[o3] = function(t, e, n) {
                    if ("mixed" === r6 || "mixed" === this.type || r6 === this.type) {
                        if (1 === arguments.length) return dt(!1, this, r6, n = t);
                        if (2 === arguments.length) {
                            t = "" + t, n = e;
                            var a = this._nodes.get(t);
                            if (void 0 === a) throw new I("Graph.".concat(o3, ': could not find the "').concat(t, '" node in the graph.'));
                            return pt(!1, this.multi, "mixed" === r6 ? this.type : r6, i4, a, n);
                        }
                        if (3 === arguments.length) {
                            t = "" + t, e = "" + e;
                            var u = this._nodes.get(t);
                            if (!u) throw new I("Graph.".concat(o3, ':  could not find the "').concat(t, '" source node in the graph.'));
                            if (!this._nodes.has(e)) throw new I("Graph.".concat(o3, ':  could not find the "').concat(e, '" target node in the graph.'));
                            return gt(!1, r6, this.multi, i4, u, e, n);
                        }
                        throw new F("Graph.".concat(o3, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
                    }
                };
                var a3 = "map" + n14[0].toUpperCase() + n14.slice(1);
                t45.prototype[a3] = function() {
                    var t, e18 = Array.prototype.slice.call(arguments), n = e18.pop();
                    if (0 === e18.length) {
                        var i5 = 0;
                        "directed" !== r6 && (i5 += this.undirectedSize), "undirected" !== r6 && (i5 += this.directedSize), t = new Array(i5);
                        var a = 0;
                        e18.push(function(e, r, i, o, u, c, s) {
                            t[a++] = n(e, r, i, o, u, c, s);
                        });
                    } else t = [], e18.push(function(e, r, i, o, a, u, c) {
                        t.push(n(e, r, i, o, a, u, c));
                    });
                    return this[o3].apply(this, e18), t;
                };
                var u2 = "filter" + n14[0].toUpperCase() + n14.slice(1);
                t45.prototype[u2] = function() {
                    var t46 = Array.prototype.slice.call(arguments), e = t46.pop(), n = [];
                    return t46.push(function(t, r, i, o, a, u, c) {
                        e(t, r, i, o, a, u, c) && n.push(t);
                    }), this[o3].apply(this, t46), n;
                };
                var c3 = "reduce" + n14[0].toUpperCase() + n14.slice(1);
                t45.prototype[c3] = function() {
                    var t, e19, n15 = Array.prototype.slice.call(arguments);
                    if (n15.length < 2 || n15.length > 4) throw new F("Graph.".concat(c3, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n15.length, ")."));
                    if ("function" == typeof n15[n15.length - 1] && "function" != typeof n15[n15.length - 2]) throw new F("Graph.".concat(c3, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
                    2 === n15.length ? (t = n15[0], e19 = n15[1], n15 = []) : 3 === n15.length ? (t = n15[1], e19 = n15[2], n15 = [
                        n15[0]
                    ]) : 4 === n15.length && (t = n15[2], e19 = n15[3], n15 = [
                        n15[0],
                        n15[1]
                    ]);
                    var r = e19;
                    return n15.push(function(e, n, i, o, a, u, c) {
                        r = t(r, e, n, i, o, a, u, c);
                    }), this[o3].apply(this, n15), r;
                };
            })(t43, e15), (function(t47, e20) {
                var n16 = e20.name, r7 = e20.type, i7 = e20.direction, o4 = "find" + n16[0].toUpperCase() + n16.slice(1, -1);
                t47.prototype[o4] = function(t, e, n) {
                    if ("mixed" !== r7 && "mixed" !== this.type && r7 !== this.type) return !1;
                    if (1 === arguments.length) return dt(!0, this, r7, n = t);
                    if (2 === arguments.length) {
                        t = "" + t, n = e;
                        var a = this._nodes.get(t);
                        if (void 0 === a) throw new I("Graph.".concat(o4, ': could not find the "').concat(t, '" node in the graph.'));
                        return pt(!0, this.multi, "mixed" === r7 ? this.type : r7, i7, a, n);
                    }
                    if (3 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var u = this._nodes.get(t);
                        if (!u) throw new I("Graph.".concat(o4, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new I("Graph.".concat(o4, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return gt(!0, r7, this.multi, i7, u, e, n);
                    }
                    throw new F("Graph.".concat(o4, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
                };
                var a4 = "some" + n16[0].toUpperCase() + n16.slice(1, -1);
                t47.prototype[a4] = function() {
                    var t48 = Array.prototype.slice.call(arguments), e = t48.pop();
                    return t48.push(function(t, n, r, i, o, a, u) {
                        return e(t, n, r, i, o, a, u);
                    }), !!this[o4].apply(this, t48);
                };
                var u3 = "every" + n16[0].toUpperCase() + n16.slice(1, -1);
                t47.prototype[u3] = function() {
                    var t49 = Array.prototype.slice.call(arguments), e = t49.pop();
                    return t49.push(function(t, n, r, i, o, a, u) {
                        return !e(t, n, r, i, o, a, u);
                    }), !this[o4].apply(this, t49);
                };
            })(t43, e15), (function(t50, e21) {
                var n17 = e21.name, r = e21.type, i = e21.direction, o = n17.slice(0, -1) + "Entries";
                t50.prototype[o] = function(t, e) {
                    if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return O.empty();
                    if (!arguments.length) return ht(this, r);
                    if (1 === arguments.length) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (!n) throw new I("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                        return lt(r, i, n);
                    }
                    if (2 === arguments.length) {
                        t = "" + t, e = "" + e;
                        var a = this._nodes.get(t);
                        if (!a) throw new I("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
                        if (!this._nodes.has(e)) throw new I("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
                        return wt(r, i, a, e);
                    }
                    throw new F("Graph.".concat(o, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
                };
            })(t43, e15);
        });
    })(Wt), (function(t51) {
        vt.forEach(function(e22) {
            Gt(t51, e22), (function(t52, e23) {
                var n18 = e23.name, r8 = e23.type, i = e23.direction, o = "forEach" + n18[0].toUpperCase() + n18.slice(1, -1);
                t52.prototype[o] = function(t, e) {
                    if ("mixed" === r8 || "mixed" === this.type || r8 === this.type) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (void 0 === n) throw new I("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
                        kt(!1, "mixed" === r8 ? this.type : r8, i, n, e);
                    }
                };
                var a = "map" + n18[0].toUpperCase() + n18.slice(1);
                t52.prototype[a] = function(t53, e) {
                    var n = [];
                    return this[o](t53, function(t, r) {
                        n.push(e(t, r));
                    }), n;
                };
                var u = "filter" + n18[0].toUpperCase() + n18.slice(1);
                t52.prototype[u] = function(t54, e) {
                    var n = [];
                    return this[o](t54, function(t, r) {
                        e(t, r) && n.push(t);
                    }), n;
                };
                var c = "reduce" + n18[0].toUpperCase() + n18.slice(1);
                t52.prototype[c] = function(t55, e, n19) {
                    if (arguments.length < 3) throw new F("Graph.".concat(c, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
                    var r = n19;
                    return this[o](t55, function(t, n) {
                        r = e(r, t, n);
                    }), r;
                };
            })(t51, e22), (function(t56, e24) {
                var n20 = e24.name, r = e24.type, i = e24.direction, o = n20[0].toUpperCase() + n20.slice(1, -1), a = "find" + o;
                t56.prototype[a] = function(t, e) {
                    if ("mixed" === r || "mixed" === this.type || r === this.type) {
                        t = "" + t;
                        var n = this._nodes.get(t);
                        if (void 0 === n) throw new I("Graph.".concat(a, ': could not find the "').concat(t, '" node in the graph.'));
                        return kt(!0, "mixed" === r ? this.type : r, i, n, e);
                    }
                };
                var u = "some" + o;
                t56.prototype[u] = function(t, e) {
                    return !!this[a](t, e);
                };
                var c = "every" + o;
                t56.prototype[c] = function(t57, e) {
                    return !this[a](t57, function(t, n) {
                        return !e(t, n);
                    });
                };
            })(t51, e22), xt(t51, e22);
        });
    })(Wt);
    var Pt = function(t) {
        function n21(e) {
            var n = c1({
                type: "directed"
            }, e);
            if ("multi" in n && !1 !== n.multi) throw new F("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
            if ("directed" !== n.type) throw new F('DirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e1(n21, t), n21;
    }(Wt), Rt = function(t) {
        function n22(e) {
            var n = c1({
                type: "undirected"
            }, e);
            if ("multi" in n && !1 !== n.multi) throw new F("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
            if ("undirected" !== n.type) throw new F('UndirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e1(n22, t), n22;
    }(Wt), Kt = function(t) {
        function n23(e) {
            var n = c1({
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new F("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
            return t.call(this, n) || this;
        }
        return e1(n23, t), n23;
    }(Wt), Tt = function(t) {
        function n24(e) {
            var n = c1({
                type: "directed",
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new F("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
            if ("directed" !== n.type) throw new F('MultiDirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e1(n24, t), n24;
    }(Wt), Bt = function(t) {
        function n25(e) {
            var n = c1({
                type: "undirected",
                multi: !0
            }, e);
            if ("multi" in n && !0 !== n.multi) throw new F("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
            if ("undirected" !== n.type) throw new F('MultiUndirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
            return t.call(this, n) || this;
        }
        return e1(n25, t), n25;
    }(Wt);
    function Ft(t) {
        t.from = function(e, n) {
            var r = c1({
            }, e.options, n), i = new t(r);
            return i.import(e), i;
        };
    }
    return Ft(Wt), Ft(Pt), Ft(Rt), Ft(Kt), Ft(Tt), Ft(Bt), Wt.Graph = Wt, Wt.DirectedGraph = Pt, Wt.UndirectedGraph = Rt, Wt.MultiGraph = Kt, Wt.MultiDirectedGraph = Tt, Wt.MultiUndirectedGraph = Bt, Wt.InvalidArgumentsGraphError = F, Wt.NotFoundGraphError = I, Wt.UsageGraphError = Y, Wt;
}); //# sourceMappingURL=graphology.umd.min.js.map

},{}],"7OIza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memo", ()=>memo
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "h", ()=>h
);
parcelHelpers.export(exports, "app", ()=>app
);
var SSR_NODE = 1;
var TEXT_NODE = 3;
var EMPTY_OBJ = {
};
var EMPTY_ARR = [];
var SVG_NS = "http://www.w3.org/2000/svg";
var id = (a)=>a
;
var map = EMPTY_ARR.map;
var isArray = Array.isArray;
var enqueue = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : setTimeout;
var createClass = (obj)=>{
    var out = "";
    if (typeof obj === "string") return obj;
    if (isArray(obj)) {
        for(var k = 0, tmp; k < obj.length; k++)if (tmp = createClass(obj[k])) out += (out && " ") + tmp;
    } else {
        for(var k in obj)if (obj[k]) out += (out && " ") + k;
    }
    return out;
};
var shouldRestart = (a, b)=>{
    for(var k in {
        ...a,
        ...b
    }){
        if (typeof (isArray(a[k]) ? a[k][0] : a[k]) === "function") b[k] = a[k];
        else if (a[k] !== b[k]) return true;
    }
};
var patchSubs = (oldSubs, newSubs = EMPTY_ARR, dispatch)=>{
    for(var subs = [], i = 0, oldSub, newSub; i < oldSubs.length || i < newSubs.length; i++){
        oldSub = oldSubs[i];
        newSub = newSubs[i];
        subs.push(newSub && newSub !== true ? !oldSub || newSub[0] !== oldSub[0] || shouldRestart(newSub[1], oldSub[1]) ? [
            newSub[0],
            newSub[1],
            (oldSub && oldSub[2](), newSub[0](dispatch, newSub[1])), 
        ] : oldSub : oldSub && oldSub[2]());
    }
    return subs;
};
var getKey = (vdom)=>vdom == null ? vdom : vdom.key
;
var patchProperty = (node, key, oldValue, newValue, listener, isSvg)=>{
    if (key === "key") ;
    else if (key === "style") for(var k in {
        ...oldValue,
        ...newValue
    }){
        oldValue = newValue == null || newValue[k] == null ? "" : newValue[k];
        if (k[0] === "-") node[key].setProperty(k, oldValue);
        else node[key][k] = oldValue;
    }
    else if (key[0] === "o" && key[1] === "n") {
        if (!((node.events || (node.events = {
        }))[key = key.slice(2)] = newValue)) node.removeEventListener(key, listener);
        else if (!oldValue) node.addEventListener(key, listener);
    } else if (!isSvg && key !== "list" && key !== "form" && key in node) node[key] = newValue == null ? "" : newValue;
    else if (newValue == null || newValue === false || key === "class" && !(newValue = createClass(newValue))) node.removeAttribute(key);
    else node.setAttribute(key, newValue);
};
var createNode = (vdom, listener, isSvg)=>{
    var props = vdom.props;
    var node = vdom.type === TEXT_NODE ? document.createTextNode(vdom.tag) : (isSvg = isSvg || vdom.tag === "svg") ? document.createElementNS(SVG_NS, vdom.tag, props.is && props) : document.createElement(vdom.tag, props.is && props);
    for(var k in props)patchProperty(node, k, null, props[k], listener, isSvg);
    for(var i = 0; i < vdom.children.length; i++)node.appendChild(createNode(vdom.children[i] = maybeVNode(vdom.children[i]), listener, isSvg));
    return vdom.node = node;
};
var patch = (parent, node, oldVNode, newVNode, listener, isSvg)=>{
    if (oldVNode === newVNode) ;
    else if (oldVNode != null && oldVNode.type === TEXT_NODE && newVNode.type === TEXT_NODE) {
        if (oldVNode.tag !== newVNode.tag) node.nodeValue = newVNode.tag;
    } else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
        node = parent.insertBefore(createNode(newVNode = maybeVNode(newVNode), listener, isSvg), node);
        if (oldVNode != null) parent.removeChild(oldVNode.node);
    } else {
        var tmpVKid;
        var oldVKid;
        var oldKey;
        var newKey;
        var oldProps = oldVNode.props;
        var newProps = newVNode.props;
        var oldVKids = oldVNode.children;
        var newVKids = newVNode.children;
        var oldHead = 0;
        var newHead = 0;
        var oldTail = oldVKids.length - 1;
        var newTail = newVKids.length - 1;
        isSvg = isSvg || newVNode.tag === "svg";
        for(var i in {
            ...oldProps,
            ...newProps
        })if ((i === "value" || i === "selected" || i === "checked" ? node[i] : oldProps[i]) !== newProps[i]) patchProperty(node, i, oldProps[i], newProps[i], listener, isSvg);
        while(newHead <= newTail && oldHead <= oldTail){
            if ((oldKey = getKey(oldVKids[oldHead])) == null || oldKey !== getKey(newVKids[newHead])) break;
            patch(node, oldVKids[oldHead].node, oldVKids[oldHead], newVKids[newHead] = maybeVNode(newVKids[newHead++], oldVKids[oldHead++]), listener, isSvg);
        }
        while(newHead <= newTail && oldHead <= oldTail){
            if ((oldKey = getKey(oldVKids[oldTail])) == null || oldKey !== getKey(newVKids[newTail])) break;
            patch(node, oldVKids[oldTail].node, oldVKids[oldTail], newVKids[newTail] = maybeVNode(newVKids[newTail--], oldVKids[oldTail--]), listener, isSvg);
        }
        if (oldHead > oldTail) while(newHead <= newTail)node.insertBefore(createNode(newVKids[newHead] = maybeVNode(newVKids[newHead++]), listener, isSvg), (oldVKid = oldVKids[oldHead]) && oldVKid.node);
        else if (newHead > newTail) while(oldHead <= oldTail)node.removeChild(oldVKids[oldHead++].node);
        else {
            for(var keyed = {
            }, newKeyed = {
            }, i = oldHead; i <= oldTail; i++)if ((oldKey = oldVKids[i].key) != null) keyed[oldKey] = oldVKids[i];
            while(newHead <= newTail){
                oldKey = getKey(oldVKid = oldVKids[oldHead]);
                newKey = getKey(newVKids[newHead] = maybeVNode(newVKids[newHead], oldVKid));
                if (newKeyed[oldKey] || newKey != null && newKey === getKey(oldVKids[oldHead + 1])) {
                    if (oldKey == null) node.removeChild(oldVKid.node);
                    oldHead++;
                    continue;
                }
                if (newKey == null || oldVNode.type === SSR_NODE) {
                    if (oldKey == null) {
                        patch(node, oldVKid && oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
                        newHead++;
                    }
                    oldHead++;
                } else {
                    if (oldKey === newKey) {
                        patch(node, oldVKid.node, oldVKid, newVKids[newHead], listener, isSvg);
                        newKeyed[newKey] = true;
                        oldHead++;
                    } else if ((tmpVKid = keyed[newKey]) != null) {
                        patch(node, node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node), tmpVKid, newVKids[newHead], listener, isSvg);
                        newKeyed[newKey] = true;
                    } else patch(node, oldVKid && oldVKid.node, null, newVKids[newHead], listener, isSvg);
                    newHead++;
                }
            }
            while(oldHead <= oldTail)if (getKey(oldVKid = oldVKids[oldHead++]) == null) node.removeChild(oldVKid.node);
            for(var i in keyed)if (newKeyed[i] == null) node.removeChild(keyed[i].node);
        }
    }
    return newVNode.node = node;
};
var propsChanged = (a, b)=>{
    for(var k in a)if (a[k] !== b[k]) return true;
    for(var k in b)if (a[k] !== b[k]) return true;
};
var maybeVNode = (newVNode, oldVNode)=>newVNode !== true && newVNode !== false && newVNode ? typeof newVNode.tag === "function" ? ((!oldVNode || oldVNode.memo == null || propsChanged(oldVNode.memo, newVNode.memo)) && ((oldVNode = newVNode.tag(newVNode.memo)).memo = newVNode.memo), oldVNode) : newVNode : text("")
;
var recycleNode = (node)=>node.nodeType === TEXT_NODE ? text(node.nodeValue, node) : createVNode(node.nodeName.toLowerCase(), EMPTY_OBJ, map.call(node.childNodes, recycleNode), SSR_NODE, node)
;
var createVNode = (tag, props, children, type, node)=>({
        tag,
        props,
        key: props.key,
        children,
        type,
        node
    })
;
var memo = (tag, memo1)=>({
        tag,
        memo: memo1
    })
;
var text = (value, node)=>createVNode(value, EMPTY_OBJ, EMPTY_ARR, TEXT_NODE, node)
;
var h = (tag, props, children = EMPTY_ARR)=>createVNode(tag, props, isArray(children) ? children : [
        children
    ])
;
var app = ({ node , view , subscriptions , dispatch =id , init =EMPTY_OBJ ,  })=>{
    var vdom = node && recycleNode(node);
    var subs = [];
    var state;
    var busy;
    var update = (newState)=>{
        if (state !== newState) {
            if ((state = newState) == null) dispatch = subscriptions = render = id;
            if (subscriptions) subs = patchSubs(subs, subscriptions(state), dispatch);
            if (view && !busy) enqueue(render, busy = true);
        }
    };
    var render = ()=>node = patch(node.parentNode, node, vdom, vdom = view(state), listener, busy = false)
    ;
    var listener = function(event) {
        dispatch(this.events[event.type], event);
    };
    return (dispatch = dispatch((action, props)=>typeof action === "function" ? dispatch(action(state, props)) : isArray(action) ? typeof action[0] === "function" ? dispatch(action[0], action[1]) : action.slice(1).map((fx)=>fx && fx !== true && (fx[0] || fx)(dispatch, fx[1])
        , update(action[0])) : update(action)
    ))(init), dispatch;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iA7mS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>a
);
parcelHelpers.export(exports, "b", ()=>b
);
parcelHelpers.export(exports, "i", ()=>i
);
parcelHelpers.export(exports, "p", ()=>p
);
parcelHelpers.export(exports, "q", ()=>q
);
parcelHelpers.export(exports, "s", ()=>s
);
parcelHelpers.export(exports, "br", ()=>br
);
parcelHelpers.export(exports, "dd", ()=>dd
);
parcelHelpers.export(exports, "dl", ()=>dl
);
parcelHelpers.export(exports, "dt", ()=>dt
);
parcelHelpers.export(exports, "em", ()=>em
);
parcelHelpers.export(exports, "h1", ()=>h1
);
parcelHelpers.export(exports, "h2", ()=>h2
);
parcelHelpers.export(exports, "h3", ()=>h3
);
parcelHelpers.export(exports, "h4", ()=>h4
);
parcelHelpers.export(exports, "h5", ()=>h5
);
parcelHelpers.export(exports, "h6", ()=>h6
);
parcelHelpers.export(exports, "hr", ()=>hr
);
parcelHelpers.export(exports, "li", ()=>li
);
parcelHelpers.export(exports, "ol", ()=>ol
);
parcelHelpers.export(exports, "rp", ()=>rp
);
parcelHelpers.export(exports, "rt", ()=>rt
);
parcelHelpers.export(exports, "td", ()=>td
);
parcelHelpers.export(exports, "th", ()=>th
);
parcelHelpers.export(exports, "tr", ()=>tr
);
parcelHelpers.export(exports, "ul", ()=>ul
);
parcelHelpers.export(exports, "bdi", ()=>bdi
);
parcelHelpers.export(exports, "bdo", ()=>bdo
);
parcelHelpers.export(exports, "col", ()=>col
);
parcelHelpers.export(exports, "del", ()=>del
);
parcelHelpers.export(exports, "dfn", ()=>dfn
);
parcelHelpers.export(exports, "div", ()=>div
);
parcelHelpers.export(exports, "img", ()=>img
);
parcelHelpers.export(exports, "ins", ()=>ins
);
parcelHelpers.export(exports, "kbd", ()=>kbd
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "nav", ()=>nav
);
parcelHelpers.export(exports, "pre", ()=>pre
);
parcelHelpers.export(exports, "rtc", ()=>rtc
);
parcelHelpers.export(exports, "sub", ()=>sub
);
parcelHelpers.export(exports, "sup", ()=>sup
);
parcelHelpers.export(exports, "wbr", ()=>wbr
);
parcelHelpers.export(exports, "abbr", ()=>abbr
);
parcelHelpers.export(exports, "area", ()=>area
);
parcelHelpers.export(exports, "cite", ()=>cite
);
parcelHelpers.export(exports, "code", ()=>code
);
parcelHelpers.export(exports, "data", ()=>data
);
parcelHelpers.export(exports, "form", ()=>form
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "mark", ()=>mark
);
parcelHelpers.export(exports, "ruby", ()=>ruby
);
parcelHelpers.export(exports, "samp", ()=>samp
);
parcelHelpers.export(exports, "span", ()=>span
);
parcelHelpers.export(exports, "time", ()=>time
);
parcelHelpers.export(exports, "aside", ()=>aside
);
parcelHelpers.export(exports, "audio", ()=>audio
);
parcelHelpers.export(exports, "input", ()=>input
);
parcelHelpers.export(exports, "label", ()=>label
);
parcelHelpers.export(exports, "meter", ()=>meter
);
parcelHelpers.export(exports, "param", ()=>param
);
parcelHelpers.export(exports, "small", ()=>small
);
parcelHelpers.export(exports, "table", ()=>table
);
parcelHelpers.export(exports, "tbody", ()=>tbody
);
parcelHelpers.export(exports, "tfoot", ()=>tfoot
);
parcelHelpers.export(exports, "thead", ()=>thead
);
parcelHelpers.export(exports, "track", ()=>track
);
parcelHelpers.export(exports, "video", ()=>video
);
parcelHelpers.export(exports, "button", ()=>button
);
parcelHelpers.export(exports, "canvas", ()=>canvas
);
parcelHelpers.export(exports, "dialog", ()=>dialog
);
parcelHelpers.export(exports, "figure", ()=>figure
);
parcelHelpers.export(exports, "footer", ()=>footer
);
parcelHelpers.export(exports, "header", ()=>header
);
parcelHelpers.export(exports, "iframe", ()=>iframe
);
parcelHelpers.export(exports, "legend", ()=>legend
);
parcelHelpers.export(exports, "object", ()=>object
);
parcelHelpers.export(exports, "option", ()=>option
);
parcelHelpers.export(exports, "output", ()=>output
);
parcelHelpers.export(exports, "select", ()=>select
);
parcelHelpers.export(exports, "source", ()=>source
);
parcelHelpers.export(exports, "strong", ()=>strong
);
parcelHelpers.export(exports, "address", ()=>address
);
parcelHelpers.export(exports, "article", ()=>article
);
parcelHelpers.export(exports, "caption", ()=>caption
);
parcelHelpers.export(exports, "details", ()=>details
);
parcelHelpers.export(exports, "section", ()=>section
);
parcelHelpers.export(exports, "summary", ()=>summary
);
parcelHelpers.export(exports, "picture", ()=>picture
);
parcelHelpers.export(exports, "colgroup", ()=>colgroup
);
parcelHelpers.export(exports, "datalist", ()=>datalist
);
parcelHelpers.export(exports, "fieldset", ()=>fieldset
);
parcelHelpers.export(exports, "menuitem", ()=>menuitem
);
parcelHelpers.export(exports, "optgroup", ()=>optgroup
);
parcelHelpers.export(exports, "progress", ()=>progress
);
parcelHelpers.export(exports, "textarea", ()=>textarea
);
parcelHelpers.export(exports, "blockquote", ()=>blockquote
);
parcelHelpers.export(exports, "figcaption", ()=>figcaption
);
parcelHelpers.export(exports, "text", ()=>_hyperapp.text
);
var _hyperapp = require("hyperapp");
const EMPTY_ARR = [];
const EMPTY_OBJ = {
};
const tag = (tag1)=>(props = EMPTY_OBJ, children = props.tag != null || Array.isArray(props) ? props : EMPTY_ARR)=>_hyperapp.h(tag1, props === children ? EMPTY_OBJ : props, children)
;
const a = tag("a");
const b = tag("b");
const i = tag("i");
const p = tag("p");
const q = tag("q");
const s = tag("s");
const br = tag("br");
const dd = tag("dd");
const dl = tag("dl");
const dt = tag("dt");
const em = tag("em");
const h1 = tag("h1");
const h2 = tag("h2");
const h3 = tag("h3");
const h4 = tag("h4");
const h5 = tag("h5");
const h6 = tag("h6");
const hr = tag("hr");
const li = tag("li");
const ol = tag("ol");
const rp = tag("rp");
const rt = tag("rt");
const td = tag("td");
const th = tag("th");
const tr = tag("tr");
const ul = tag("ul");
const bdi = tag("bdi");
const bdo = tag("bdo");
const col = tag("col");
const del = tag("del");
const dfn = tag("dfn");
const div = tag("div");
const img = tag("img");
const ins = tag("ins");
const kbd = tag("kbd");
const map = tag("map");
const nav = tag("nav");
const pre = tag("pre");
const rtc = tag("rtc");
const sub = tag("sub");
const sup = tag("sup");
const wbr = tag("wbr");
const abbr = tag("abbr");
const area = tag("area");
const cite = tag("cite");
const code = tag("code");
const data = tag("data");
const form = tag("form");
const main = tag("main");
const mark = tag("mark");
const ruby = tag("ruby");
const samp = tag("samp");
const span = tag("span");
const time = tag("time");
const aside = tag("aside");
const audio = tag("audio");
const input = tag("input");
const label = tag("label");
const meter = tag("meter");
const param = tag("param");
const small = tag("small");
const table = tag("table");
const tbody = tag("tbody");
const tfoot = tag("tfoot");
const thead = tag("thead");
const track = tag("track");
const video = tag("video");
const button = tag("button");
const canvas = tag("canvas");
const dialog = tag("dialog");
const figure = tag("figure");
const footer = tag("footer");
const header = tag("header");
const iframe = tag("iframe");
const legend = tag("legend");
const object = tag("object");
const option = tag("option");
const output = tag("output");
const select = tag("select");
const source = tag("source");
const strong = tag("strong");
const address = tag("address");
const article = tag("article");
const caption = tag("caption");
const details = tag("details");
const section = tag("section");
const summary = tag("summary");
const picture = tag("picture");
const colgroup = tag("colgroup");
const datalist = tag("datalist");
const fieldset = tag("fieldset");
const menuitem = tag("menuitem");
const optgroup = tag("optgroup");
const progress = tag("progress");
const textarea = tag("textarea");
const blockquote = tag("blockquote");
const figcaption = tag("figcaption");

},{"hyperapp":"7OIza","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iU6IE":[function(require,module,exports) {
var global = arguments[3];
var win;
if (typeof window !== "undefined") win = window;
else if (typeof global !== "undefined") win = global;
else if (typeof self !== "undefined") win = self;
else win = {
};
module.exports = win;

},{}],"ig8ew":[function(require,module,exports) {
module.exports = console;

},{}],"fUl09":[function(require,module,exports) {
var global = arguments[3];
var topLevel = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {
};
var minDoc = require('min-document');
var doccy;
if (typeof document !== 'undefined') doccy = document;
else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
    if (!doccy) doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
}
module.exports = doccy;

},{"min-document":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"2pquK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClassVar", ()=>ClassVar
);
// Transcrypt'ed from Python, 2022-03-17 14:44:25
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var __name__ = 'typing';
var ClassVar = 'ClassVar';

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2QcrI":[function(require,module,exports) {
const Generator = require('./src/Generator');
const Prando = require('prando');
module.exports = (options)=>{
    let { width , height , seed , algorithm  } = options;
    if (typeof width === 'undefined' || typeof height === 'undefined') throw new Error('An object with the following parameters is required to generate a maze:\n{ height, width, seed (optional), algorithm (optional) }');
    if (typeof algorithm === 'undefined') algorithm = 'DEPTHFIRST';
    if (typeof seed === 'undefined') seed = Math.floor(Math.random() * Math.floor(100000));
    if (typeof width !== 'number' || typeof height !== 'number') throw new Error('Width and height must be numbers');
    if (width === 0 | height === 0) throw new Error('Width and height must be greater than 0');
    else if (width > 3000 || height > 3000) throw new Error('Height and width must be a maximum of 3000');
    const mazeGen = new Generator(width, height);
    const prando = new Prando(seed);
    return mazeGen.generateMaze(algorithm, prando);
};

},{"./src/Generator":"jSn4U","prando":"kEOYQ"}],"jSn4U":[function(require,module,exports) {
const Prando = require('prando');
const Maze = require('./Maze');
class Generator {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    /**
   * Returns the generated maze from the generation algorithm pass as a parameter.
   * @param {*} algorithm the algorithm to use to generate the maze
   * @param {*} prando A prando object constructed with the seed to generate the maze
   */ generateMaze(algorithm = 'DEPTHFIRST', prando = new Prando()) {
        const capitalisedAlgorithm = algorithm.toUpperCase();
        if (capitalisedAlgorithm === 'DEPTHFIRST') return this.depthFirst(prando);
        else if (capitalisedAlgorithm === 'HUNTANDKILL') return this.huntAndKill(prando);
        else throw new Error(`${algorithm} is an Invalid Maze Generation Algorithm`);
    }
    /**
   * Generates a maze using the Depth First algorithm
   * @param {*} prando A prando object constructed with the seed to generate the maze. Used as arandom number generator.
  */ depthFirst(prando) {
        const rng = prando;
        const generatedMaze = new Maze(this.width, this.height);
        const cellStack = [];
        // Set currentCell = random cell
        const randomCell = {
            randomHeight: rng.nextInt(0, this.height - 1),
            randomWidth: rng.nextInt(0, this.width - 1)
        };
        // Select random cell and mark as visited
        let currentCell = {
            x: randomCell.randomWidth,
            y: randomCell.randomHeight
        };
        // Generate the maze
        do {
            generatedMaze.visitCell(currentCell.y, currentCell.x);
            // Generate a list of unvisited neighbours
            const unvisitedNeighbours = generatedMaze.getUnvisitedNeigbourIndices(currentCell.y, currentCell.x);
            // Find which of the unvisited neighbours can be visited
            const validDirections = [];
            for(let i = 0; i < unvisitedNeighbours.length; i++)validDirections.push(unvisitedNeighbours[i].direction);
            if (validDirections.length > 0) {
                // Push current cell to stack to allow for backtracking
                cellStack.push(currentCell);
                // Randomly select a valid direction and remove the wall
                const nextDirection = validDirections[rng.nextInt(0, validDirections.length - 1)];
                generatedMaze.removeWall(currentCell.y, currentCell.x, nextDirection);
                // Move to the cell in the direction of the removed wall
                for(let i = 0; i < unvisitedNeighbours.length; i++)if (unvisitedNeighbours[i].direction === nextDirection) currentCell = {
                    x: unvisitedNeighbours[i].x,
                    y: unvisitedNeighbours[i].y
                };
            } else currentCell = cellStack.pop();
        }while (cellStack.length > 0)
        return generatedMaze;
    }
    /**
   * Generates a maze using the Hunt And Kill algorithm
   * @param {*} prando A prando object constructed with the seed to generate the maze. Used as arandom number generator.
   */ huntAndKill(prando) {
        const rng = prando;
        let generatedMaze = new Maze(this.width, this.height);
        // Set currentCell = random cell
        const randomCell = {
            randomHeight: rng.nextInt(0, this.height - 1),
            randomWidth: rng.nextInt(0, this.width - 1)
        };
        // Select random cell and mark as visited
        let currentCell = {
            x: randomCell.randomWidth,
            y: randomCell.randomHeight
        };
        generatedMaze = this.randomisedWalk(currentCell, rng, generatedMaze);
        while(generatedMaze.getTotalUnvisitedCells() > 0){
            const firstUnvisitedCellNeighbours = generatedMaze.getFirstUnvisitedCellWithVisitedNeighbour();
            currentCell = firstUnvisitedCellNeighbours.firstCell;
            const neighbours = firstUnvisitedCellNeighbours.neighbours;
            generatedMaze.removeWall(currentCell.y, currentCell.x, neighbours[rng.nextInt(0, neighbours.length - 1)].direction);
            generatedMaze.visitCell(currentCell.y, currentCell.x);
            generatedMaze = this.randomisedWalk(currentCell, rng, generatedMaze);
        }
        return generatedMaze;
    }
    /**
   * Get the unvisited neighbours of the current cell
   * @param {[]} unvisitedNeighbours Generated using maze.getUnvisitedNeigbourIndices
   */ getValidDirections(unvisitedNeighbours) {
        const validDirections = [];
        for(let i = 0; i < unvisitedNeighbours.length; i++)validDirections.push(unvisitedNeighbours[i].direction);
        return validDirections;
    }
    /**
   * Performs a randomised walk from the specified current cell
   * @param {{x: int, y: int}} currentCell
   * @param {*} rng Prando random number generator
   * @param {*} maze A Maze object
   * @returns A modified maze object
   */ randomisedWalk(currentCell, rng, maze) {
        const modifiedMaze = maze;
        let unvisitedNeighbours = modifiedMaze.getUnvisitedNeigbourIndices(currentCell.y, currentCell.x);
        let validDirections = this.getValidDirections(unvisitedNeighbours);
        // If there's an unvisited neighbour
        while(validDirections.length > 0){
            // Randomly select a valid direction and remove the wall
            const nextDirection = validDirections[rng.nextInt(0, validDirections.length - 1)];
            modifiedMaze.removeWall(currentCell.y, currentCell.x, nextDirection);
            // Move to the cell in the direction of the removed wall
            for(let i = 0; i < unvisitedNeighbours.length; i++)if (unvisitedNeighbours[i].direction === nextDirection) {
                currentCell = {
                    x: unvisitedNeighbours[i].x,
                    y: unvisitedNeighbours[i].y
                };
                modifiedMaze.visitCell(currentCell.y, currentCell.x);
            }
            // Generate a list of unvisited neighbours
            unvisitedNeighbours = modifiedMaze.getUnvisitedNeigbourIndices(currentCell.y, currentCell.x);
            validDirections = this.getValidDirections(unvisitedNeighbours);
        }
        return modifiedMaze;
    }
}
module.exports = Generator;

},{"prando":"kEOYQ","./Maze":"8W2a3"}],"kEOYQ":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Prando = factory());
})(this, function() {
    'use strict';
    var Prando1 = function() {
        // ================================================================================================================
        // CONSTRUCTOR ----------------------------------------------------------------------------------------------------
        /**
         * Generate a new Prando pseudo-random number generator.
         *
         * @param seed - A number or string seed that determines which pseudo-random number sequence will be created. Defaults to a random seed based on `Math.random()`.
         */ function Prando(seed) {
            this._value = NaN;
            if (typeof seed === "string") // String seed
            this._seed = this.hashCode(seed);
            else if (typeof seed === "number") // Numeric seed
            this._seed = this.getSafeSeed(seed);
            else // Pseudo-random seed
            this._seed = this.getSafeSeed(Prando.MIN + Math.floor((Prando.MAX - Prando.MIN) * Math.random()));
            this.reset();
        }
        // ================================================================================================================
        // PUBLIC INTERFACE -----------------------------------------------------------------------------------------------
        /**
         * Generates a pseudo-random number between a lower (inclusive) and a higher (exclusive) bounds.
         *
         * @param min - The minimum number that can be randomly generated.
         * @param pseudoMax - The maximum number that can be randomly generated (exclusive).
         * @return The generated pseudo-random number.
         */ Prando.prototype.next = function(min, pseudoMax) {
            if (min === void 0) min = 0;
            if (pseudoMax === void 0) pseudoMax = 1;
            this.recalculate();
            return this.map(this._value, Prando.MIN, Prando.MAX, min, pseudoMax);
        };
        /**
         * Generates a pseudo-random integer number in a range (inclusive).
         *
         * @param min - The minimum number that can be randomly generated.
         * @param max - The maximum number that can be randomly generated.
         * @return The generated pseudo-random number.
         */ Prando.prototype.nextInt = function(min, max) {
            if (min === void 0) min = 10;
            if (max === void 0) max = 100;
            this.recalculate();
            return Math.floor(this.map(this._value, Prando.MIN, Prando.MAX, min, max + 1));
        };
        /**
         * Generates a pseudo-random string sequence of a particular length from a specific character range.
         *
         * Note: keep in mind that creating a random string sequence does not guarantee uniqueness; there is always a
         * 1 in (char_length^string_length) chance of collision. For real unique string ids, always check for
         * pre-existing ids, or employ a robust GUID/UUID generator.
         *
         * @param length - Length of the string to be generated.
         * @param chars - Characters that are used when creating the random string. Defaults to all alphanumeric chars (A-Z, a-z, 0-9).
         * @return The generated string sequence.
         */ Prando.prototype.nextString = function(length, chars) {
            if (length === void 0) length = 16;
            if (chars === void 0) chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var str = "";
            while(str.length < length)str += this.nextChar(chars);
            return str;
        };
        /**
         * Generates a pseudo-random string of 1 character specific character range.
         *
         * @param chars - Characters that are used when creating the random string. Defaults to all alphanumeric chars (A-Z, a-z, 0-9).
         * @return The generated character.
         */ Prando.prototype.nextChar = function(chars) {
            if (chars === void 0) chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return chars.substr(this.nextInt(0, chars.length - 1), 1);
        };
        /**
         * Picks a pseudo-random item from an array. The array is left unmodified.
         *
         * Note: keep in mind that while the returned item will be random enough, picking one item from the array at a time
         * does not guarantee nor imply that a sequence of random non-repeating items will be picked. If you want to
         * *pick items in a random order* from an array, instead of *pick one random item from an array*, it's best to
         * apply a *shuffle* transformation to the array instead, then read it linearly.
         *
         * @param array - Array of any type containing one or more candidates for random picking.
         * @return An item from the array.
         */ Prando.prototype.nextArrayItem = function(array) {
            return array[this.nextInt(0, array.length - 1)];
        };
        /**
         * Generates a pseudo-random boolean.
         *
         * @return A value of true or false.
         */ Prando.prototype.nextBoolean = function() {
            this.recalculate();
            return this._value > 0.5;
        };
        /**
         * Skips ahead in the sequence of numbers that are being generated. This is equivalent to
         * calling next() a specified number of times, but faster since it doesn't need to map the
         * new random numbers to a range and return it.
         *
         * @param iterations - The number of items to skip ahead.
         */ Prando.prototype.skip = function(iterations) {
            if (iterations === void 0) iterations = 1;
            while(iterations-- > 0)this.recalculate();
        };
        /**
         * Reset the pseudo-random number sequence back to its starting seed. Further calls to next()
         * will then produce the same sequence of numbers it had produced before. This is equivalent to
         * creating a new Prando instance with the same seed as another Prando instance.
         *
         * Example:
         * let rng = new Prando(12345678);
         * console.log(rng.next()); // 0.6177754114889017
         * console.log(rng.next()); // 0.5784605181725837
         * rng.reset();
         * console.log(rng.next()); // 0.6177754114889017 again
         * console.log(rng.next()); // 0.5784605181725837 again
         */ Prando.prototype.reset = function() {
            this._value = this._seed;
        };
        // ================================================================================================================
        // PRIVATE INTERFACE ----------------------------------------------------------------------------------------------
        Prando.prototype.recalculate = function() {
            this._value = this.xorshift(this._value);
        };
        Prando.prototype.xorshift = function(value) {
            // Xorshift*32
            // Based on George Marsaglia's work: http://www.jstatsoft.org/v08/i14/paper
            value ^= value << 13;
            value ^= value >> 17;
            value ^= value << 5;
            return value;
        };
        Prando.prototype.map = function(val, minFrom, maxFrom, minTo, maxTo) {
            return (val - minFrom) / (maxFrom - minFrom) * (maxTo - minTo) + minTo;
        };
        Prando.prototype.hashCode = function(str) {
            var hash = 0;
            if (str) {
                var l = str.length;
                for(var i = 0; i < l; i++){
                    hash = (hash << 5) - hash + str.charCodeAt(i);
                    hash |= 0;
                    hash = this.xorshift(hash);
                }
            }
            return this.getSafeSeed(hash);
        };
        Prando.prototype.getSafeSeed = function(seed) {
            if (seed === 0) return 1;
            return seed;
        };
        Prando.MIN = -2147483648; // Int32 min
        Prando.MAX = 2147483647; // Int32 max
        return Prando;
    }();
    return Prando1;
});
module.exports.default = module.exports; // Terrible injection just so it works regardless of how it's required

},{}],"8W2a3":[function(require,module,exports) {
const Cell = require('./Cell');
/**
 * A class to represent the generated maze. This is made of cells
 * @see Cell
 */ class Maze {
    /**
     * Constructs a 2D array of cells
     * @param {*} width The width of the maze, i.e. how many cells each row contains
     * @param {*} height The height of the maze, i.e. how many rows the maze contains
     */ constructor(width, height){
        this.cells = [];
        // Create an [i, j] 2D array of cells
        for(let i = 0; i < height; i++){
            const row = [];
            for(let j = 0; j < width; j++)row.push(new Cell());
            this.cells.push(row);
        }
    }
    /**
     * Returns if the cell has been visited or not
     * @param {*} row The row index of the cell
     * @param {*} column The column index of the cell
     * @returns true if the cell has been visited; false if the cell hasn't been visited.
     */ getCellVisited(row, column) {
        return this.cells[row][column].getCellVisited();
    }
    /**
     * Marks a cell as visited
     * @param {*} row The row index of the cell
     * @param {*} column The column index of the cell
     */ visitCell(row, column) {
        this.cells[row][column].setCellVisited(true);
    }
    /**
   * Gets the first unvisited cell in the maze with visited neighbours and returns the cell and the neighbours information
   * @returns If true: the first unvisited cell indicies and the indicies of its neighbours; false if no cell with visitedNeighbours exists
   */ getFirstUnvisitedCellWithVisitedNeighbour() {
        const unvisitedCells = this.getUnvisitedCells();
        for(let i = 0; i < unvisitedCells.length; i++){
            const visitedNeighbours = this.getVisitedNeigbourIndices(unvisitedCells[i].y, unvisitedCells[i].x);
            if (visitedNeighbours.length > 0) return {
                firstCell: unvisitedCells[i],
                neighbours: visitedNeighbours
            };
        }
        return false;
    }
    getUnvisitedCells() {
        const unvisitedCells = [];
        for(let i = 0; i < this.cells.length; i++){
            for(let j = 0; j < this.cells[i].length; j++)if (!this.getCellVisited(i, j)) unvisitedCells.push({
                x: j,
                y: i
            });
        }
        return unvisitedCells;
    }
    getTotalUnvisitedCells() {
        return this.getUnvisitedCells().length;
    }
    /**
     * Removes the wall of the selected cell
     * @param {*} row The row index of the cell
     * @param {*} column The column index of the cell
     * @param {string} direction left;right;up;down. The wall that should be removed.
     */ removeWall(row, column, direction) {
        this.cells[row][column].removeWall(direction);
        if (direction === 'right' && column + 1 < this.cells[row].length) this.cells[row][column + 1].removeWall('left');
        else if (direction === 'left' && column - 1 >= 0) this.cells[row][column - 1].removeWall('right');
        else if (direction === 'up' && row - 1 >= 0) this.cells[row - 1][column].removeWall('down');
        else if (direction === 'down' && row + 1 < this.cells.length) this.cells[row + 1][column].removeWall('up');
    }
    /**
     * Returns if a wall exists in the specified direction
     * @param {*} row The row index of the cell
     * @param {*} column The column index of the cell
     * @param {string} direction left;right;up;down. The wall that should be removed.
     * @returns {boolean} true if the wall exists; false if the wall does not exist.
     */ getWallStatus(row, column, direction) {
        return this.cells[row][column].getWallStatus(direction);
    }
    /**
     * Gets the indicies of neighbouring cells
     * @param {*} row The row index of the cell
     * @param {*} column The column index of the cell
     * @returns {{[]}} An object containing the indicies of neighbouring cells
     */ getCellNeighbourIndices(row, column) {
        const neighbourIndices = {
        };
        const mazeHeight = this.cells.length;
        const mazeWidth = this.cells[0].length;
        // Get up neighbour
        if (row > 0) neighbourIndices.up = {
            y: row - 1,
            x: column
        };
        // Get down neighbour
        if (row < mazeHeight - 1) neighbourIndices.down = {
            y: row + 1,
            x: column
        };
        // Get left neighbour
        if (column > 0) neighbourIndices.left = {
            y: row,
            x: column - 1
        };
        // Get right neighbour
        if (column < mazeWidth - 1) neighbourIndices.right = {
            y: row,
            x: column + 1
        };
        return neighbourIndices;
    }
    /**
    * Calls getCellNeighbourIndices, checks if each neighbour is unvisited and adds the unvisited cell's coordinates to an array
    * @param {*} row The row index of the cell
    * @param {*} column The column index of the cell
    * @returns {[]} The indicies of unvisited neighours of the chosen cell
    */ getUnvisitedNeigbourIndices(row, column) {
        const neighbourIndices = this.getCellNeighbourIndices(row, column);
        const unvisitedNeighbours = [];
        if (typeof neighbourIndices.up !== 'undefined' && this.getCellVisited(neighbourIndices.up.y, neighbourIndices.up.x) === false) {
            const cell = {
                direction: 'up',
                x: neighbourIndices.up.x,
                y: neighbourIndices.up.y
            };
            unvisitedNeighbours.push(cell);
        }
        if (typeof neighbourIndices.down !== 'undefined' && this.getCellVisited(neighbourIndices.down.y, neighbourIndices.down.x) === false) {
            const cell = {
                direction: 'down',
                x: neighbourIndices.down.x,
                y: neighbourIndices.down.y
            };
            unvisitedNeighbours.push(cell);
        }
        if (typeof neighbourIndices.left !== 'undefined' && this.getCellVisited(neighbourIndices.left.y, neighbourIndices.left.x) === false) {
            const cell = {
                direction: 'left',
                x: neighbourIndices.left.x,
                y: neighbourIndices.left.y
            };
            unvisitedNeighbours.push(cell);
        }
        if (typeof neighbourIndices.right !== 'undefined' && this.getCellVisited(neighbourIndices.right.y, neighbourIndices.right.x) === false) {
            const cell = {
                direction: 'right',
                x: neighbourIndices.right.x,
                y: neighbourIndices.right.y
            };
            unvisitedNeighbours.push(cell);
        }
        return unvisitedNeighbours;
    }
    /**
    * Calls getCellNeighbourIndices, checks if each neighbour is visited and adds the visited cell's coordinates to an array
    * @param {*} row The row index of the cell
    * @param {*} column The column index of the cell
    * @returns {[]} The indicies of visited neighours of the chosen cell
  */ getVisitedNeigbourIndices(row, column) {
        const neighbourIndices = this.getCellNeighbourIndices(row, column);
        const unvisitedNeighbours = [];
        if (typeof neighbourIndices.up !== 'undefined' && this.getCellVisited(neighbourIndices.up.y, neighbourIndices.up.x) === true) {
            const cell = {
                direction: 'up',
                x: neighbourIndices.up.x,
                y: neighbourIndices.up.y
            };
            unvisitedNeighbours.push(cell);
        }
        if (typeof neighbourIndices.down !== 'undefined' && this.getCellVisited(neighbourIndices.down.y, neighbourIndices.down.x) === true) {
            const cell = {
                direction: 'down',
                x: neighbourIndices.down.x,
                y: neighbourIndices.down.y
            };
            unvisitedNeighbours.push(cell);
        }
        if (typeof neighbourIndices.left !== 'undefined' && this.getCellVisited(neighbourIndices.left.y, neighbourIndices.left.x) === true) {
            const cell = {
                direction: 'left',
                x: neighbourIndices.left.x,
                y: neighbourIndices.left.y
            };
            unvisitedNeighbours.push(cell);
        }
        if (typeof neighbourIndices.right !== 'undefined' && this.getCellVisited(neighbourIndices.right.y, neighbourIndices.right.x) === true) {
            const cell = {
                direction: 'right',
                x: neighbourIndices.right.x,
                y: neighbourIndices.right.y
            };
            unvisitedNeighbours.push(cell);
        }
        return unvisitedNeighbours;
    }
    /**
     * @returns {string} The string represention of all cells within the maze.
     *  e.g.
     *  _ _ _
     * |    _|
     * |_| | |
     * | | | |
     * |_ _ _|
     **/ toString() {
        let stringRepresentation = '';
        for(let topRow = 0; topRow < this.cells[0].length; topRow++)// Adds a top wall to the top cells
        stringRepresentation += this.cells[0][topRow].walls.up ? ' _' : '  ';
        stringRepresentation += '\n';
        for(let row = 0; row < this.cells.length; row++){
            let rowString = '';
            for(let cell = 0; cell < this.cells[row].length; cell++){
                // Adds a wall to the left most cell
                if (cell === 0 && this.cells[row][cell].walls.left) stringRepresentation += '|';
                rowString += this.cells[row][cell].toString();
            }
            // Add a new line if the last cell of the row
            stringRepresentation += row + 1 < this.cells.length ? rowString + '\n' : rowString;
        }
        return stringRepresentation;
    }
    /**
   * Returns a JSON representation of the maze.
   * The JSON object contains a rows array, which contains an array for each row.
   * Each row array contains the JSON representations of each cell within the Maze for that row.
   */ toJSON() {
        const JSONRepresentation = {
            rows: []
        };
        for(let row = 0; row < this.cells.length; row++){
            const rowArray = [];
            for(let cell = 0; cell < this.cells[row].length; cell++)rowArray.push(this.cells[row][cell].toJSON());
            JSONRepresentation.rows.push(rowArray);
        }
        return JSONRepresentation;
    }
}
module.exports = Maze;

},{"./Cell":"7hsEs"}],"7hsEs":[function(require,module,exports) {
/**
 * A class to represent an individual cell within the maze
 */ class Cell {
    /**
     * Creates a cell with all 4 walls.
     */ constructor(){
        this.walls = {
            left: true,
            right: true,
            up: true,
            down: true
        };
        this.visited = false;
    }
    /**
     * Removes the wall in the specified direction.
     * @param {string} direction left;right;up;down. The wall that should be removed.
     */ removeWall(direction) {
        if (direction === 'left') this.walls.left = false;
        else if (direction === 'right') this.walls.right = false;
        else if (direction === 'up') this.walls.up = false;
        else if (direction === 'down') this.walls.down = false;
        else throw new Error('Invalid direction');
    }
    /**
     * Returns the fall if the wall exists; returns nothing if the wall does not exist.
     * @param {string} direction left;right;up;down. The wall that should be removed.
     * @returns {bool} true if the wall exists; false if the wall does not exist.
     */ getWallStatus(direction) {
        if (direction === 'left') return this.walls.left;
        else if (direction === 'right') return this.walls.right;
        else if (direction === 'up') return this.walls.up;
        else if (direction === 'down') return this.walls.down;
        else throw new Error('Invalid direction');
    }
    /**
     * Marks if a cell has been visited or not
     * @param {bool} visited - The value to set cell.visited to.
     */ setCellVisited(visited) {
        this.visited = visited;
    }
    /**
     * Returns if the cell has been visited or not
     * @returns {bool} Returns true if cell has been visited and false if not
     */ getCellVisited() {
        return this.visited;
    }
    /**
     * @return {string} a string representation of a cell:
     * | shows if the right wall exists
     * _ shows if the down wall exists
     * e.g.:
     *  * _| would show if all walls exist (if the cell is a top left cell).
     *  * _  would show if the right wall does not exist
     *  *  | would show if the down wall does not exist
     */ toString() {
        let representation = '';
        representation += this.walls.down ? '_' : ' ';
        representation += this.walls.right ? '|' : ' ';
        return representation;
    }
    /**
   * Returns the cell as a JSON object
   */ toJSON() {
        return {
            left: this.walls.left,
            right: this.walls.right,
            up: this.walls.up,
            down: this.walls.down,
            visited: this.visited
        };
    }
}
module.exports = Cell;

},{}],"308oy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Heap", ()=>Heap
);
parcelHelpers.export(exports, "toInt", ()=>toInt
);
var __generator = function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
var __read = function(o, n) {
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
var __spreadArray = function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var toInt = function(n) {
    return ~~n;
};
/**
 * Heap
 * @type {Class}
 */ var Heap = function() {
    /**
     * Heap instance constructor.
     * @param  {Function} compare Optional comparison function, defaults to Heap.minComparator<number>
     */ function Heap1(compare) {
        var _this = this;
        if (compare === void 0) compare = Heap1.minComparator;
        this.compare = compare;
        this.heapArray = [];
        this._limit = 0;
        /**
         * Alias of add
         */ this.offer = this.add;
        /**
         * Alias of peek
         */ this.element = this.peek;
        /**
         * Alias of pop
         */ this.poll = this.pop;
        /**
         * Returns the inverse to the comparison function.
         * @return {Function}
         */ this._invertedCompare = function(a, b) {
            return -1 * _this.compare(a, b);
        };
    }
    /*
              Static methods
     */ /**
     * Gets children indices for given index.
     * @param  {Number} idx     Parent index
     * @return {Array(Number)}  Array of children indices
     */ Heap1.getChildrenIndexOf = function(idx) {
        return [
            idx * 2 + 1,
            idx * 2 + 2
        ];
    };
    /**
     * Gets parent index for given index.
     * @param  {Number} idx  Children index
     * @return {Number | undefined}      Parent index, -1 if idx is 0
     */ Heap1.getParentIndexOf = function(idx) {
        if (idx <= 0) return -1;
        var whichChildren = idx % 2 ? 1 : 2;
        return Math.floor((idx - whichChildren) / 2);
    };
    /**
     * Gets sibling index for given index.
     * @param  {Number} idx  Children index
     * @return {Number | undefined}      Sibling index, -1 if idx is 0
     */ Heap1.getSiblingIndexOf = function(idx) {
        if (idx <= 0) return -1;
        var whichChildren = idx % 2 ? 1 : -1;
        return idx + whichChildren;
    };
    /**
     * Min heap comparison function, default.
     * @param  {any} a     First element
     * @param  {any} b     Second element
     * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
     */ Heap1.minComparator = function(a, b) {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    };
    /**
     * Max heap comparison function.
     * @param  {any} a     First element
     * @param  {any} b     Second element
     * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
     */ Heap1.maxComparator = function(a, b) {
        if (b > a) return 1;
        else if (b < a) return -1;
        else return 0;
    };
    /**
     * Min number heap comparison function, default.
     * @param  {Number} a     First element
     * @param  {Number} b     Second element
     * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
     */ Heap1.minComparatorNumber = function(a, b) {
        return a - b;
    };
    /**
     * Max number heap comparison function.
     * @param  {Number} a     First element
     * @param  {Number} b     Second element
     * @return {Number}    0 if they're equal, positive if `a` goes up, negative if `b` goes up
     */ Heap1.maxComparatorNumber = function(a, b) {
        return b - a;
    };
    /**
     * Default equality function.
     * @param  {any} a    First element
     * @param  {any} b    Second element
     * @return {Boolean}  True if equal, false otherwise
     */ Heap1.defaultIsEqual = function(a, b) {
        return a === b;
    };
    /**
     * Prints a heap.
     * @param  {Heap} heap Heap to be printed
     * @returns {String}
     */ Heap1.print = function(heap) {
        function deep(i) {
            var pi = Heap1.getParentIndexOf(i);
            return Math.floor(Math.log2(pi + 1));
        }
        function repeat(str, times) {
            var out = '';
            for(; times > 0; --times)out += str;
            return out;
        }
        var node = 0;
        var lines = [];
        var maxLines = deep(heap.length - 1) + 2;
        var maxLength = 0;
        while(node < heap.length){
            var i1 = deep(node) + 1;
            if (node === 0) i1 = 0;
            // Text representation
            var nodeText = String(heap.get(node));
            if (nodeText.length > maxLength) maxLength = nodeText.length;
            // Add to line
            lines[i1] = lines[i1] || [];
            lines[i1].push(nodeText);
            node += 1;
        }
        return lines.map(function(line, i) {
            var times = Math.pow(2, maxLines - i) - 1;
            return repeat(' ', Math.floor(times / 2) * maxLength) + line.map(function(el) {
                // centered
                var half = (maxLength - el.length) / 2;
                return repeat(' ', Math.ceil(half)) + el + repeat(' ', Math.floor(half));
            }).join(repeat(' ', times * maxLength));
        }).join('\n');
    };
    /*
              Python style
     */ /**
     * Converts an array into an array-heap, in place
     * @param  {Array}    arr      Array to be modified
     * @param  {Function} compare  Optional compare function
     * @return {Heap}              For convenience, it returns a Heap instance
     */ Heap1.heapify = function(arr, compare) {
        var heap = new Heap1(compare);
        heap.heapArray = arr;
        heap.init();
        return heap;
    };
    /**
     * Extract the peek of an array-heap
     * @param  {Array}    heapArr  Array to be modified, should be a heap
     * @param  {Function} compare  Optional compare function
     * @return {any}               Returns the extracted peek
     */ Heap1.heappop = function(heapArr, compare) {
        var heap = new Heap1(compare);
        heap.heapArray = heapArr;
        return heap.pop();
    };
    /**
     * Pushes a item into an array-heap
     * @param  {Array}    heapArr  Array to be modified, should be a heap
     * @param  {any}      item     Item to push
     * @param  {Function} compare  Optional compare function
     */ Heap1.heappush = function(heapArr, item, compare) {
        var heap = new Heap1(compare);
        heap.heapArray = heapArr;
        heap.push(item);
    };
    /**
     * Push followed by pop, faster
     * @param  {Array}    heapArr  Array to be modified, should be a heap
     * @param  {any}      item     Item to push
     * @param  {Function} compare  Optional compare function
     * @return {any}               Returns the extracted peek
     */ Heap1.heappushpop = function(heapArr, item, compare) {
        var heap = new Heap1(compare);
        heap.heapArray = heapArr;
        return heap.pushpop(item);
    };
    /**
     * Replace peek with item
     * @param  {Array}    heapArr  Array to be modified, should be a heap
     * @param  {any}      item     Item as replacement
     * @param  {Function} compare  Optional compare function
     * @return {any}               Returns the extracted peek
     */ Heap1.heapreplace = function(heapArr, item, compare) {
        var heap = new Heap1(compare);
        heap.heapArray = heapArr;
        return heap.replace(item);
    };
    /**
     * Return the `n` most valuable elements of a heap-like Array
     * @param  {Array}    heapArr  Array, should be an array-heap
     * @param  {number}   n        Max number of elements
     * @param  {Function} compare  Optional compare function
     * @return {any}               Elements
     */ Heap1.heaptop = function(heapArr, n, compare) {
        if (n === void 0) n = 1;
        var heap = new Heap1(compare);
        heap.heapArray = heapArr;
        return heap.top(n);
    };
    /**
     * Return the `n` least valuable elements of a heap-like Array
     * @param  {Array}    heapArr  Array, should be an array-heap
     * @param  {number}   n        Max number of elements
     * @param  {Function} compare  Optional compare function
     * @return {any}               Elements
     */ Heap1.heapbottom = function(heapArr, n, compare) {
        if (n === void 0) n = 1;
        var heap = new Heap1(compare);
        heap.heapArray = heapArr;
        return heap.bottom(n);
    };
    /**
     * Return the `n` most valuable elements of an iterable
     * @param  {number}   n        Max number of elements
     * @param  {Iterable} Iterable Iterable list of elements
     * @param  {Function} compare  Optional compare function
     * @return {any}               Elements
     */ Heap1.nlargest = function(n, iterable, compare) {
        var heap = new Heap1(compare);
        heap.heapArray = __spreadArray([], __read(iterable));
        heap.init();
        return heap.top(n);
    };
    /**
     * Return the `n` least valuable elements of an iterable
     * @param  {number}   n        Max number of elements
     * @param  {Iterable} Iterable Iterable list of elements
     * @param  {Function} compare  Optional compare function
     * @return {any}               Elements
     */ Heap1.nsmallest = function(n, iterable, compare) {
        var heap = new Heap1(compare);
        heap.heapArray = __spreadArray([], __read(iterable));
        heap.init();
        return heap.bottom(n);
    };
    /*
              Instance methods
     */ /**
     * Adds an element to the heap. Aliases: `offer`.
     * Same as: push(element)
     * @param {any} element Element to be added
     * @return {Boolean} true
     */ Heap1.prototype.add = function(element) {
        this._sortNodeUp(this.heapArray.push(element) - 1);
        this._applyLimit();
        return true;
    };
    /**
     * Adds an array of elements to the heap.
     * Similar as: push(element, element, ...).
     * @param {Array} elements Elements to be added
     * @return {Boolean} true
     */ Heap1.prototype.addAll = function(elements) {
        var _a;
        var i = this.length;
        (_a = this.heapArray).push.apply(_a, __spreadArray([], __read(elements)));
        for(var l = this.length; i < l; ++i)this._sortNodeUp(i);
        this._applyLimit();
        return true;
    };
    /**
     * Return the bottom (lowest value) N elements of the heap.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */ Heap1.prototype.bottom = function(n) {
        if (n === void 0) n = 1;
        if (this.heapArray.length === 0 || n <= 0) // Nothing to do
        return [];
        else if (this.heapArray.length === 1) // Just the peek
        return [
            this.heapArray[0]
        ];
        else if (n >= this.heapArray.length) // The whole heap
        return __spreadArray([], __read(this.heapArray));
        else {
            // Some elements
            var result = this._bottomN_push(~~n);
            return result;
        }
    };
    /**
     * Check if the heap is sorted, useful for testing purposes.
     * @return {Undefined | Element}  Returns an element if something wrong is found, otherwise it's undefined
     */ Heap1.prototype.check = function() {
        var _this = this;
        return this.heapArray.find(function(el, j) {
            return !!_this.getChildrenOf(j).find(function(ch) {
                return _this.compare(el, ch) > 0;
            });
        });
    };
    /**
     * Remove all of the elements from this heap.
     */ Heap1.prototype.clear = function() {
        this.heapArray = [];
    };
    /**
     * Clone this heap
     * @return {Heap}
     */ Heap1.prototype.clone = function() {
        var cloned = new Heap1(this.comparator());
        cloned.heapArray = this.toArray();
        cloned._limit = this._limit;
        return cloned;
    };
    /**
     * Returns the comparison function.
     * @return {Function}
     */ Heap1.prototype.comparator = function() {
        return this.compare;
    };
    /**
     * Returns true if this queue contains the specified element.
     * @param  {any}      o   Element to be found
     * @param  {Function} fn  Optional comparison function, receives (element, needle)
     * @return {Boolean}
     */ Heap1.prototype.contains = function(o, fn) {
        if (fn === void 0) fn = Heap1.defaultIsEqual;
        return this.heapArray.findIndex(function(el) {
            return fn(el, o);
        }) >= 0;
    };
    /**
     * Initialise a heap, sorting nodes
     * @param  {Array} array Optional initial state array
     */ Heap1.prototype.init = function(array) {
        if (array) this.heapArray = __spreadArray([], __read(array));
        for(var i = Math.floor(this.heapArray.length); i >= 0; --i)this._sortNodeDown(i);
        this._applyLimit();
    };
    /**
     * Test if the heap has no elements.
     * @return {Boolean} True if no elements on the heap
     */ Heap1.prototype.isEmpty = function() {
        return this.length === 0;
    };
    /**
     * Get the leafs of the tree (no children nodes)
     */ Heap1.prototype.leafs = function() {
        if (this.heapArray.length === 0) return [];
        var pi = Heap1.getParentIndexOf(this.heapArray.length - 1);
        return this.heapArray.slice(pi + 1);
    };
    Object.defineProperty(Heap1.prototype, "length", {
        /**
         * Length of the heap.
         * @return {Number}
         */ get: function() {
            return this.heapArray.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heap1.prototype, "limit", {
        /**
         * Get length limit of the heap.
         * @return {Number}
         */ get: function() {
            return this._limit;
        },
        /**
         * Set length limit of the heap.
         * @return {Number}
         */ set: function(_l) {
            this._limit = ~~_l;
            this._applyLimit();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Top node. Aliases: `element`.
     * Same as: `top(1)[0]`
     * @return {any} Top node
     */ Heap1.prototype.peek = function() {
        return this.heapArray[0];
    };
    /**
     * Extract the top node (root). Aliases: `poll`.
     * @return {any} Extracted top node, undefined if empty
     */ Heap1.prototype.pop = function() {
        var last = this.heapArray.pop();
        if (this.length > 0 && last !== undefined) return this.replace(last);
        return last;
    };
    /**
     * Pushes element(s) to the heap.
     * @param  {...any} elements Elements to insert
     * @return {Boolean} True if elements are present
     */ Heap1.prototype.push = function() {
        var elements = [];
        for(var _i = 0; _i < arguments.length; _i++)elements[_i] = arguments[_i];
        if (elements.length < 1) return false;
        else if (elements.length === 1) return this.add(elements[0]);
        else return this.addAll(elements);
    };
    /**
     * Same as push & pop in sequence, but faster
     * @param  {any} element Element to insert
     * @return {any}  Extracted top node
     */ Heap1.prototype.pushpop = function(element) {
        var _a;
        if (this.compare(this.heapArray[0], element) < 0) {
            _a = __read([
                this.heapArray[0],
                element
            ], 2), element = _a[0], this.heapArray[0] = _a[1];
            this._sortNodeDown(0);
        }
        return element;
    };
    /**
     * Remove an element from the heap.
     * @param  {any}   o      Element to be found
     * @param  {Function} fn  Optional function to compare
     * @return {Boolean}      True if the heap was modified
     */ Heap1.prototype.remove = function(o, fn) {
        if (fn === void 0) fn = Heap1.defaultIsEqual;
        if (this.length > 0) {
            if (o === undefined) {
                this.pop();
                return true;
            } else {
                var idx = this.heapArray.findIndex(function(el) {
                    return fn(el, o);
                });
                if (idx >= 0) {
                    if (idx === 0) this.pop();
                    else if (idx === this.length - 1) this.heapArray.pop();
                    else {
                        this.heapArray.splice(idx, 1, this.heapArray.pop());
                        this._sortNodeUp(idx);
                        this._sortNodeDown(idx);
                    }
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Pop the current peek value, and add the new item.
     * @param  {any} element  Element to replace peek
     * @return {any}         Old peek
     */ Heap1.prototype.replace = function(element) {
        var peek = this.heapArray[0];
        this.heapArray[0] = element;
        this._sortNodeDown(0);
        return peek;
    };
    /**
     * Size of the heap
     * @return {Number}
     */ Heap1.prototype.size = function() {
        return this.length;
    };
    /**
     * Return the top (highest value) N elements of the heap.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}    Array of length <= N.
     */ Heap1.prototype.top = function(n) {
        if (n === void 0) n = 1;
        if (this.heapArray.length === 0 || n <= 0) // Nothing to do
        return [];
        else if (this.heapArray.length === 1 || n === 1) // Just the peek
        return [
            this.heapArray[0]
        ];
        else if (n >= this.heapArray.length) // The whole peek
        return __spreadArray([], __read(this.heapArray));
        else {
            // Some elements
            var result = this._topN_push(~~n);
            return result;
        }
    };
    /**
     * Clone the heap's internal array
     * @return {Array}
     */ Heap1.prototype.toArray = function() {
        return __spreadArray([], __read(this.heapArray));
    };
    /**
     * String output, call to Array.prototype.toString()
     * @return {String}
     */ Heap1.prototype.toString = function() {
        return this.heapArray.toString();
    };
    /**
     * Get the element at the given index.
     * @param  {Number} i Index to get
     * @return {any}       Element at that index
     */ Heap1.prototype.get = function(i) {
        return this.heapArray[i];
    };
    /**
     * Get the elements of these node's children
     * @param  {Number} idx Node index
     * @return {Array(any)}  Children elements
     */ Heap1.prototype.getChildrenOf = function(idx) {
        var _this = this;
        return Heap1.getChildrenIndexOf(idx).map(function(i) {
            return _this.heapArray[i];
        }).filter(function(e) {
            return e !== undefined;
        });
    };
    /**
     * Get the element of this node's parent
     * @param  {Number} idx Node index
     * @return {any}     Parent element
     */ Heap1.prototype.getParentOf = function(idx) {
        var pi = Heap1.getParentIndexOf(idx);
        return this.heapArray[pi];
    };
    /**
     * Iterator interface
     */ Heap1.prototype[Symbol.iterator] = function() {
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    if (!this.length) return [
                        3 /*break*/ ,
                        2
                    ];
                    return [
                        4 /*yield*/ ,
                        this.pop()
                    ];
                case 1:
                    _a.sent();
                    return [
                        3 /*break*/ ,
                        0
                    ];
                case 2:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    };
    /**
     * Returns an iterator. To comply with Java interface.
     */ Heap1.prototype.iterator = function() {
        return this;
    };
    /**
     * Limit heap size if needed
     */ Heap1.prototype._applyLimit = function() {
        if (this._limit && this._limit < this.heapArray.length) {
            var rm = this.heapArray.length - this._limit;
            // It's much faster than splice
            while(rm){
                this.heapArray.pop();
                --rm;
            }
        }
    };
    /**
     * Return the bottom (lowest value) N elements of the heap, without corner cases, unsorted
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */ Heap1.prototype._bottomN_push = function(n) {
        // Use an inverted heap
        var bottomHeap = new Heap1(this.compare);
        bottomHeap.limit = n;
        bottomHeap.heapArray = this.heapArray.slice(-n);
        bottomHeap.init();
        var startAt = this.heapArray.length - 1 - n;
        var parentStartAt = Heap1.getParentIndexOf(startAt);
        var indices = [];
        for(var i = startAt; i > parentStartAt; --i)indices.push(i);
        var arr = this.heapArray;
        while(indices.length){
            var i = indices.shift();
            if (this.compare(arr[i], bottomHeap.peek()) > 0) {
                bottomHeap.replace(arr[i]);
                if (i % 2) indices.push(Heap1.getParentIndexOf(i));
            }
        }
        return bottomHeap.toArray();
    };
    /**
     * Move a node to a new index, switching places
     * @param  {Number} j First node index
     * @param  {Number} k Another node index
     */ Heap1.prototype._moveNode = function(j, k) {
        var _a;
        _a = __read([
            this.heapArray[k],
            this.heapArray[j]
        ], 2), this.heapArray[j] = _a[0], this.heapArray[k] = _a[1];
    };
    /**
     * Move a node down the tree (to the leaves) to find a place where the heap is sorted.
     * @param  {Number} i Index of the node
     */ Heap1.prototype._sortNodeDown = function(i) {
        var _this = this;
        var moveIt = i < this.heapArray.length - 1;
        var self = this.heapArray[i];
        var getPotentialParent = function(best, j) {
            if (_this.heapArray.length > j && _this.compare(_this.heapArray[j], _this.heapArray[best]) < 0) best = j;
            return best;
        };
        while(moveIt){
            var childrenIdx = Heap1.getChildrenIndexOf(i);
            var bestChildIndex = childrenIdx.reduce(getPotentialParent, childrenIdx[0]);
            var bestChild = this.heapArray[bestChildIndex];
            if (typeof bestChild !== 'undefined' && this.compare(self, bestChild) > 0) {
                this._moveNode(i, bestChildIndex);
                i = bestChildIndex;
            } else moveIt = false;
        }
    };
    /**
     * Move a node up the tree (to the root) to find a place where the heap is sorted.
     * @param  {Number} i Index of the node
     */ Heap1.prototype._sortNodeUp = function(i) {
        var moveIt = i > 0;
        while(moveIt){
            var pi = Heap1.getParentIndexOf(i);
            if (pi >= 0 && this.compare(this.heapArray[pi], this.heapArray[i]) > 0) {
                this._moveNode(i, pi);
                i = pi;
            } else moveIt = false;
        }
    };
    /**
     * Return the top (highest value) N elements of the heap, without corner cases, unsorted
     * Implementation: push.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */ Heap1.prototype._topN_push = function(n) {
        // Use an inverted heap
        var topHeap = new Heap1(this._invertedCompare);
        topHeap.limit = n;
        var indices = [
            0
        ];
        var arr = this.heapArray;
        while(indices.length){
            var i = indices.shift();
            if (i < arr.length) {
                if (topHeap.length < n) {
                    topHeap.push(arr[i]);
                    indices.push.apply(indices, __spreadArray([], __read(Heap1.getChildrenIndexOf(i))));
                } else if (this.compare(arr[i], topHeap.peek()) < 0) {
                    topHeap.replace(arr[i]);
                    indices.push.apply(indices, __spreadArray([], __read(Heap1.getChildrenIndexOf(i))));
                }
            }
        }
        return topHeap.toArray();
    };
    /**
     * Return the top (highest value) N elements of the heap, without corner cases, unsorted
     * Implementation: init + push.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */ Heap1.prototype._topN_fill = function(n) {
        // Use an inverted heap
        var heapArray = this.heapArray;
        var topHeap = new Heap1(this._invertedCompare);
        topHeap.limit = n;
        topHeap.heapArray = heapArray.slice(0, n);
        topHeap.init();
        var branch = Heap1.getParentIndexOf(n - 1) + 1;
        var indices = [];
        for(var i = branch; i < n; ++i)indices.push.apply(indices, __spreadArray([], __read(Heap1.getChildrenIndexOf(i).filter(function(l) {
            return l < heapArray.length;
        }))));
        if ((n - 1) % 2) indices.push(n);
        while(indices.length){
            var i = indices.shift();
            if (i < heapArray.length) {
                if (this.compare(heapArray[i], topHeap.peek()) < 0) {
                    topHeap.replace(heapArray[i]);
                    indices.push.apply(indices, __spreadArray([], __read(Heap1.getChildrenIndexOf(i))));
                }
            }
        }
        return topHeap.toArray();
    };
    /**
     * Return the top (highest value) N elements of the heap, without corner cases, unsorted
     * Implementation: heap.
     *
     * @param  {Number} n  Number of elements.
     * @return {Array}     Array of length <= N.
     */ Heap1.prototype._topN_heap = function(n) {
        var topHeap = this.clone();
        var result = [];
        for(var i = 0; i < n; ++i)result.push(topHeap.pop());
        return result;
    };
    /**
     * Return index of the top element
     * @param list
     */ Heap1.prototype._topIdxOf = function(list) {
        if (!list.length) return -1;
        var idx = 0;
        var top = list[idx];
        for(var i = 1; i < list.length; ++i){
            var comp = this.compare(list[i], top);
            if (comp < 0) {
                idx = i;
                top = list[i];
            }
        }
        return idx;
    };
    /**
     * Return the top element
     * @param list
     */ Heap1.prototype._topOf = function() {
        var list = [];
        for(var _i = 0; _i < arguments.length; _i++)list[_i] = arguments[_i];
        var heap = new Heap1(this.compare);
        heap.init(list);
        return heap.peek();
    };
    return Heap1;
}();
exports.default = Heap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gr1Cz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataclass", ()=>dataclass
);
// Transcrypt'ed from Python, 2022-03-17 14:48:47
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var __name__ = 'dataclasses';
var dataclass = null;

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJZlQ":[function() {},{}],"av36r":[function(require,module,exports) {
module.exports = JSON.parse("{\"rows\":[[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"}],[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"}],[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"}],[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"finish\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"}],[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"}],[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"}],[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"start\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"}]]}");

},{}],"lhUw4":[function(require,module,exports) {
module.exports = JSON.parse("{\"rows\":[[{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"finish\"}],[{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"}],[{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"}],[{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"}],[{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"}],[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"}],[{\"kind\":\"start\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"}]]}");

},{}],"eVQXa":[function(require,module,exports) {
module.exports = JSON.parse("{\"rows\":[[{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"finish\"}],[{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"}],[{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"}],[{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"}],[{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"}],[{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"wall\"},{\"kind\":\"open\"}],[{\"kind\":\"start\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"wall\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"},{\"kind\":\"open\"}]]}");

},{}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequire942e")

//# sourceMappingURL=index.975ef6c8.js.map
