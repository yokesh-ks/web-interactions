import e from "react";
import r from "styled-components";
var t,
  n = { exports: {} },
  o = { exports: {} },
  a = {};
var i,
  c,
  f,
  u,
  s,
  p,
  l,
  y,
  d,
  m,
  b,
  v,
  g,
  h,
  x = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function S() {
  return (
    c ||
      ((c = 1),
      (e = o),
      "production" === process.env.NODE_ENV
        ? (e.exports = (function () {
            if (t) return a;
            t = 1;
            var e = "function" == typeof Symbol && Symbol.for,
              r = e ? Symbol.for("react.element") : 60103,
              n = e ? Symbol.for("react.portal") : 60106,
              o = e ? Symbol.for("react.fragment") : 60107,
              i = e ? Symbol.for("react.strict_mode") : 60108,
              c = e ? Symbol.for("react.profiler") : 60114,
              f = e ? Symbol.for("react.provider") : 60109,
              u = e ? Symbol.for("react.context") : 60110,
              s = e ? Symbol.for("react.async_mode") : 60111,
              p = e ? Symbol.for("react.concurrent_mode") : 60111,
              l = e ? Symbol.for("react.forward_ref") : 60112,
              y = e ? Symbol.for("react.suspense") : 60113,
              d = e ? Symbol.for("react.suspense_list") : 60120,
              m = e ? Symbol.for("react.memo") : 60115,
              b = e ? Symbol.for("react.lazy") : 60116,
              v = e ? Symbol.for("react.block") : 60121,
              g = e ? Symbol.for("react.fundamental") : 60117,
              h = e ? Symbol.for("react.responder") : 60118,
              x = e ? Symbol.for("react.scope") : 60119;
            function S(e) {
              if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                  case r:
                    switch ((e = e.type)) {
                      case s:
                      case p:
                      case o:
                      case c:
                      case i:
                      case y:
                        return e;
                      default:
                        switch ((e = e && e.$$typeof)) {
                          case u:
                          case l:
                          case b:
                          case m:
                          case f:
                            return e;
                          default:
                            return t;
                        }
                    }
                  case n:
                    return t;
                }
              }
            }
            function O(e) {
              return S(e) === p;
            }
            return (
              (a.AsyncMode = s),
              (a.ConcurrentMode = p),
              (a.ContextConsumer = u),
              (a.ContextProvider = f),
              (a.Element = r),
              (a.ForwardRef = l),
              (a.Fragment = o),
              (a.Lazy = b),
              (a.Memo = m),
              (a.Portal = n),
              (a.Profiler = c),
              (a.StrictMode = i),
              (a.Suspense = y),
              (a.isAsyncMode = function (e) {
                return O(e) || S(e) === s;
              }),
              (a.isConcurrentMode = O),
              (a.isContextConsumer = function (e) {
                return S(e) === u;
              }),
              (a.isContextProvider = function (e) {
                return S(e) === f;
              }),
              (a.isElement = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === r;
              }),
              (a.isForwardRef = function (e) {
                return S(e) === l;
              }),
              (a.isFragment = function (e) {
                return S(e) === o;
              }),
              (a.isLazy = function (e) {
                return S(e) === b;
              }),
              (a.isMemo = function (e) {
                return S(e) === m;
              }),
              (a.isPortal = function (e) {
                return S(e) === n;
              }),
              (a.isProfiler = function (e) {
                return S(e) === c;
              }),
              (a.isStrictMode = function (e) {
                return S(e) === i;
              }),
              (a.isSuspense = function (e) {
                return S(e) === y;
              }),
              (a.isValidElementType = function (e) {
                return (
                  "string" == typeof e ||
                  "function" == typeof e ||
                  e === o ||
                  e === p ||
                  e === c ||
                  e === i ||
                  e === y ||
                  e === d ||
                  ("object" == typeof e &&
                    null !== e &&
                    (e.$$typeof === b ||
                      e.$$typeof === m ||
                      e.$$typeof === f ||
                      e.$$typeof === u ||
                      e.$$typeof === l ||
                      e.$$typeof === g ||
                      e.$$typeof === h ||
                      e.$$typeof === x ||
                      e.$$typeof === v))
                );
              }),
              (a.typeOf = S),
              a
            );
          })())
        : (e.exports =
            (i ||
              ((i = 1),
              "production" !== process.env.NODE_ENV &&
                (function () {
                  var e = "function" == typeof Symbol && Symbol.for,
                    r = e ? Symbol.for("react.element") : 60103,
                    t = e ? Symbol.for("react.portal") : 60106,
                    n = e ? Symbol.for("react.fragment") : 60107,
                    o = e ? Symbol.for("react.strict_mode") : 60108,
                    a = e ? Symbol.for("react.profiler") : 60114,
                    i = e ? Symbol.for("react.provider") : 60109,
                    c = e ? Symbol.for("react.context") : 60110,
                    f = e ? Symbol.for("react.async_mode") : 60111,
                    u = e ? Symbol.for("react.concurrent_mode") : 60111,
                    s = e ? Symbol.for("react.forward_ref") : 60112,
                    p = e ? Symbol.for("react.suspense") : 60113,
                    l = e ? Symbol.for("react.suspense_list") : 60120,
                    y = e ? Symbol.for("react.memo") : 60115,
                    d = e ? Symbol.for("react.lazy") : 60116,
                    m = e ? Symbol.for("react.block") : 60121,
                    b = e ? Symbol.for("react.fundamental") : 60117,
                    v = e ? Symbol.for("react.responder") : 60118,
                    g = e ? Symbol.for("react.scope") : 60119;
                  function h(e) {
                    if ("object" == typeof e && null !== e) {
                      var l = e.$$typeof;
                      switch (l) {
                        case r:
                          var m = e.type;
                          switch (m) {
                            case f:
                            case u:
                            case n:
                            case a:
                            case o:
                            case p:
                              return m;
                            default:
                              var b = m && m.$$typeof;
                              switch (b) {
                                case c:
                                case s:
                                case d:
                                case y:
                                case i:
                                  return b;
                                default:
                                  return l;
                              }
                          }
                        case t:
                          return l;
                      }
                    }
                  }
                  var S = f,
                    O = u,
                    w = c,
                    E = i,
                    $ = r,
                    j = s,
                    T = n,
                    P = d,
                    k = y,
                    C = t,
                    _ = a,
                    N = o,
                    I = p,
                    R = !1;
                  function A(e) {
                    return h(e) === u;
                  }
                  (x.AsyncMode = S),
                    (x.ConcurrentMode = O),
                    (x.ContextConsumer = w),
                    (x.ContextProvider = E),
                    (x.Element = $),
                    (x.ForwardRef = j),
                    (x.Fragment = T),
                    (x.Lazy = P),
                    (x.Memo = k),
                    (x.Portal = C),
                    (x.Profiler = _),
                    (x.StrictMode = N),
                    (x.Suspense = I),
                    (x.isAsyncMode = function (e) {
                      return (
                        R ||
                          ((R = !0),
                          console.warn(
                            "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                          )),
                        A(e) || h(e) === f
                      );
                    }),
                    (x.isConcurrentMode = A),
                    (x.isContextConsumer = function (e) {
                      return h(e) === c;
                    }),
                    (x.isContextProvider = function (e) {
                      return h(e) === i;
                    }),
                    (x.isElement = function (e) {
                      return (
                        "object" == typeof e && null !== e && e.$$typeof === r
                      );
                    }),
                    (x.isForwardRef = function (e) {
                      return h(e) === s;
                    }),
                    (x.isFragment = function (e) {
                      return h(e) === n;
                    }),
                    (x.isLazy = function (e) {
                      return h(e) === d;
                    }),
                    (x.isMemo = function (e) {
                      return h(e) === y;
                    }),
                    (x.isPortal = function (e) {
                      return h(e) === t;
                    }),
                    (x.isProfiler = function (e) {
                      return h(e) === a;
                    }),
                    (x.isStrictMode = function (e) {
                      return h(e) === o;
                    }),
                    (x.isSuspense = function (e) {
                      return h(e) === p;
                    }),
                    (x.isValidElementType = function (e) {
                      return (
                        "string" == typeof e ||
                        "function" == typeof e ||
                        e === n ||
                        e === u ||
                        e === a ||
                        e === o ||
                        e === p ||
                        e === l ||
                        ("object" == typeof e &&
                          null !== e &&
                          (e.$$typeof === d ||
                            e.$$typeof === y ||
                            e.$$typeof === i ||
                            e.$$typeof === c ||
                            e.$$typeof === s ||
                            e.$$typeof === b ||
                            e.$$typeof === v ||
                            e.$$typeof === g ||
                            e.$$typeof === m))
                      );
                    }),
                    (x.typeOf = h);
                })()),
            x))),
    o.exports
  );
  var e;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ function O() {
  if (p) return s;
  p = 1;
  return (s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
}
function w() {
  return y
    ? l
    : ((y = 1), (l = Function.call.bind(Object.prototype.hasOwnProperty)));
}
if ("production" !== process.env.NODE_ENV) {
  var E = S();
  n.exports = (function () {
    if (v) return b;
    v = 1;
    var e = S(),
      r = (function () {
        if (u) return f;
        u = 1;
        var e = Object.getOwnPropertySymbols,
          r = Object.prototype.hasOwnProperty,
          t = Object.prototype.propertyIsEnumerable;
        function n(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        return (
          (f = (function () {
            try {
              if (!Object.assign) return !1;
              var e = new String("abc");
              if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                return !1;
              for (var r = {}, t = 0; t < 10; t++)
                r["_" + String.fromCharCode(t)] = t;
              if (
                "0123456789" !==
                Object.getOwnPropertyNames(r)
                  .map(function (e) {
                    return r[e];
                  })
                  .join("")
              )
                return !1;
              var n = {};
              return (
                "abcdefghijklmnopqrst".split("").forEach(function (e) {
                  n[e] = e;
                }),
                "abcdefghijklmnopqrst" ===
                  Object.keys(Object.assign({}, n)).join("")
              );
            } catch (e) {
              return !1;
            }
          })()
            ? Object.assign
            : function (o, a) {
                for (var i, c, f = n(o), u = 1; u < arguments.length; u++) {
                  for (var s in (i = Object(arguments[u])))
                    r.call(i, s) && (f[s] = i[s]);
                  if (e) {
                    c = e(i);
                    for (var p = 0; p < c.length; p++)
                      t.call(i, c[p]) && (f[c[p]] = i[c[p]]);
                  }
                }
                return f;
              }),
          f
        );
      })(),
      t = O(),
      n = w(),
      o = (function () {
        if (m) return d;
        m = 1;
        var e = function () {};
        if ("production" !== process.env.NODE_ENV) {
          var r = O(),
            t = {},
            n = w();
          e = function (e) {
            var r = "Warning: " + e;
            "undefined" != typeof console && console.error(r);
            try {
              throw new Error(r);
            } catch (e) {}
          };
        }
        function o(o, a, i, c, f) {
          if ("production" !== process.env.NODE_ENV)
            for (var u in o)
              if (n(o, u)) {
                var s;
                try {
                  if ("function" != typeof o[u]) {
                    var p = Error(
                      (c || "React class") +
                        ": " +
                        i +
                        " type `" +
                        u +
                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                        typeof o[u] +
                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    );
                    throw ((p.name = "Invariant Violation"), p);
                  }
                  s = o[u](a, u, c, i, null, r);
                } catch (e) {
                  s = e;
                }
                if (
                  (!s ||
                    s instanceof Error ||
                    e(
                      (c || "React class") +
                        ": type specification of " +
                        i +
                        " `" +
                        u +
                        "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                        typeof s +
                        ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                    ),
                  s instanceof Error && !(s.message in t))
                ) {
                  t[s.message] = !0;
                  var l = f ? f() : "";
                  e(
                    "Failed " + i + " type: " + s.message + (null != l ? l : "")
                  );
                }
              }
        }
        return (
          (o.resetWarningCache = function () {
            "production" !== process.env.NODE_ENV && (t = {});
          }),
          (d = o)
        );
      })(),
      a = function () {};
    function i() {
      return null;
    }
    return (
      "production" !== process.env.NODE_ENV &&
        (a = function (e) {
          var r = "Warning: " + e;
          "undefined" != typeof console && console.error(r);
          try {
            throw new Error(r);
          } catch (e) {}
        }),
      (b = function (c, f) {
        var u = "function" == typeof Symbol && Symbol.iterator,
          s = "<<anonymous>>",
          p = {
            array: m("array"),
            bigint: m("bigint"),
            bool: m("boolean"),
            func: m("function"),
            number: m("number"),
            object: m("object"),
            string: m("string"),
            symbol: m("symbol"),
            any: d(i),
            arrayOf: function (e) {
              return d(function (r, n, o, a, i) {
                if ("function" != typeof e)
                  return new y(
                    "Property `" +
                      i +
                      "` of component `" +
                      o +
                      "` has invalid PropType notation inside arrayOf."
                  );
                var c = r[n];
                if (!Array.isArray(c))
                  return new y(
                    "Invalid " +
                      a +
                      " `" +
                      i +
                      "` of type `" +
                      g(c) +
                      "` supplied to `" +
                      o +
                      "`, expected an array."
                  );
                for (var f = 0; f < c.length; f++) {
                  var u = e(c, f, o, a, i + "[" + f + "]", t);
                  if (u instanceof Error) return u;
                }
                return null;
              });
            },
            element: d(function (e, r, t, n, o) {
              var a = e[r];
              return c(a)
                ? null
                : new y(
                    "Invalid " +
                      n +
                      " `" +
                      o +
                      "` of type `" +
                      g(a) +
                      "` supplied to `" +
                      t +
                      "`, expected a single ReactElement."
                  );
            }),
            elementType: d(function (r, t, n, o, a) {
              var i = r[t];
              return e.isValidElementType(i)
                ? null
                : new y(
                    "Invalid " +
                      o +
                      " `" +
                      a +
                      "` of type `" +
                      g(i) +
                      "` supplied to `" +
                      n +
                      "`, expected a single ReactElement type."
                  );
            }),
            instanceOf: function (e) {
              return d(function (r, t, n, o, a) {
                if (!(r[t] instanceof e)) {
                  var i = e.name || s;
                  return new y(
                    "Invalid " +
                      o +
                      " `" +
                      a +
                      "` of type `" +
                      ((c = r[t]).constructor && c.constructor.name
                        ? c.constructor.name
                        : s) +
                      "` supplied to `" +
                      n +
                      "`, expected instance of `" +
                      i +
                      "`."
                  );
                }
                var c;
                return null;
              });
            },
            node: d(function (e, r, t, n, o) {
              return v(e[r])
                ? null
                : new y(
                    "Invalid " +
                      n +
                      " `" +
                      o +
                      "` supplied to `" +
                      t +
                      "`, expected a ReactNode."
                  );
            }),
            objectOf: function (e) {
              return d(function (r, o, a, i, c) {
                if ("function" != typeof e)
                  return new y(
                    "Property `" +
                      c +
                      "` of component `" +
                      a +
                      "` has invalid PropType notation inside objectOf."
                  );
                var f = r[o],
                  u = g(f);
                if ("object" !== u)
                  return new y(
                    "Invalid " +
                      i +
                      " `" +
                      c +
                      "` of type `" +
                      u +
                      "` supplied to `" +
                      a +
                      "`, expected an object."
                  );
                for (var s in f)
                  if (n(f, s)) {
                    var p = e(f, s, a, i, c + "." + s, t);
                    if (p instanceof Error) return p;
                  }
                return null;
              });
            },
            oneOf: function (e) {
              if (!Array.isArray(e))
                return (
                  "production" !== process.env.NODE_ENV &&
                    a(
                      arguments.length > 1
                        ? "Invalid arguments supplied to oneOf, expected an array, got " +
                            arguments.length +
                            " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                        : "Invalid argument supplied to oneOf, expected an array."
                    ),
                  i
                );
              function r(r, t, n, o, a) {
                for (var i = r[t], c = 0; c < e.length; c++)
                  if (l(i, e[c])) return null;
                var f = JSON.stringify(e, function (e, r) {
                  return "symbol" === h(r) ? String(r) : r;
                });
                return new y(
                  "Invalid " +
                    o +
                    " `" +
                    a +
                    "` of value `" +
                    String(i) +
                    "` supplied to `" +
                    n +
                    "`, expected one of " +
                    f +
                    "."
                );
              }
              return d(r);
            },
            oneOfType: function (e) {
              if (!Array.isArray(e))
                return (
                  "production" !== process.env.NODE_ENV &&
                    a(
                      "Invalid argument supplied to oneOfType, expected an instance of array."
                    ),
                  i
                );
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                if ("function" != typeof o)
                  return (
                    a(
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                        x(o) +
                        " at index " +
                        r +
                        "."
                    ),
                    i
                  );
              }
              return d(function (r, o, a, i, c) {
                for (var f = [], u = 0; u < e.length; u++) {
                  var s = (0, e[u])(r, o, a, i, c, t);
                  if (null == s) return null;
                  s.data &&
                    n(s.data, "expectedType") &&
                    f.push(s.data.expectedType);
                }
                return new y(
                  "Invalid " +
                    i +
                    " `" +
                    c +
                    "` supplied to `" +
                    a +
                    "`" +
                    (f.length > 0
                      ? ", expected one of type [" + f.join(", ") + "]"
                      : "") +
                    "."
                );
              });
            },
            shape: function (e) {
              return d(function (r, n, o, a, i) {
                var c = r[n],
                  f = g(c);
                if ("object" !== f)
                  return new y(
                    "Invalid " +
                      a +
                      " `" +
                      i +
                      "` of type `" +
                      f +
                      "` supplied to `" +
                      o +
                      "`, expected `object`."
                  );
                for (var u in e) {
                  var s = e[u];
                  if ("function" != typeof s) return b(o, a, i, u, h(s));
                  var p = s(c, u, o, a, i + "." + u, t);
                  if (p) return p;
                }
                return null;
              });
            },
            exact: function (e) {
              return d(function (o, a, i, c, f) {
                var u = o[a],
                  s = g(u);
                if ("object" !== s)
                  return new y(
                    "Invalid " +
                      c +
                      " `" +
                      f +
                      "` of type `" +
                      s +
                      "` supplied to `" +
                      i +
                      "`, expected `object`."
                  );
                var p = r({}, o[a], e);
                for (var l in p) {
                  var d = e[l];
                  if (n(e, l) && "function" != typeof d)
                    return b(i, c, f, l, h(d));
                  if (!d)
                    return new y(
                      "Invalid " +
                        c +
                        " `" +
                        f +
                        "` key `" +
                        l +
                        "` supplied to `" +
                        i +
                        "`.\nBad object: " +
                        JSON.stringify(o[a], null, "  ") +
                        "\nValid keys: " +
                        JSON.stringify(Object.keys(e), null, "  ")
                    );
                  var m = d(u, l, i, c, f + "." + l, t);
                  if (m) return m;
                }
                return null;
              });
            },
          };
        function l(e, r) {
          return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r;
        }
        function y(e, r) {
          (this.message = e),
            (this.data = r && "object" == typeof r ? r : {}),
            (this.stack = "");
        }
        function d(e) {
          if ("production" !== process.env.NODE_ENV)
            var r = {},
              n = 0;
          function o(o, i, c, u, p, l, d) {
            if (((u = u || s), (l = l || c), d !== t)) {
              if (f) {
                var m = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((m.name = "Invariant Violation"), m);
              }
              if (
                "production" !== process.env.NODE_ENV &&
                "undefined" != typeof console
              ) {
                var b = u + ":" + c;
                !r[b] &&
                  n < 3 &&
                  (a(
                    "You are manually calling a React.PropTypes validation function for the `" +
                      l +
                      "` prop on `" +
                      u +
                      "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  ),
                  (r[b] = !0),
                  n++);
              }
            }
            return null == i[c]
              ? o
                ? null === i[c]
                  ? new y(
                      "The " +
                        p +
                        " `" +
                        l +
                        "` is marked as required in `" +
                        u +
                        "`, but its value is `null`."
                    )
                  : new y(
                      "The " +
                        p +
                        " `" +
                        l +
                        "` is marked as required in `" +
                        u +
                        "`, but its value is `undefined`."
                    )
                : null
              : e(i, c, u, p, l);
          }
          var i = o.bind(null, !1);
          return (i.isRequired = o.bind(null, !0)), i;
        }
        function m(e) {
          return d(function (r, t, n, o, a, i) {
            var c = r[t];
            return g(c) !== e
              ? new y(
                  "Invalid " +
                    o +
                    " `" +
                    a +
                    "` of type `" +
                    h(c) +
                    "` supplied to `" +
                    n +
                    "`, expected `" +
                    e +
                    "`.",
                  { expectedType: e }
                )
              : null;
          });
        }
        function b(e, r, t, n, o) {
          return new y(
            (e || "React class") +
              ": " +
              r +
              " type `" +
              t +
              "." +
              n +
              "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
              o +
              "`."
          );
        }
        function v(e) {
          switch (typeof e) {
            case "number":
            case "string":
            case "undefined":
              return !0;
            case "boolean":
              return !e;
            case "object":
              if (Array.isArray(e)) return e.every(v);
              if (null === e || c(e)) return !0;
              var r = (function (e) {
                var r = e && ((u && e[u]) || e["@@iterator"]);
                if ("function" == typeof r) return r;
              })(e);
              if (!r) return !1;
              var t,
                n = r.call(e);
              if (r !== e.entries) {
                for (; !(t = n.next()).done; ) if (!v(t.value)) return !1;
              } else
                for (; !(t = n.next()).done; ) {
                  var o = t.value;
                  if (o && !v(o[1])) return !1;
                }
              return !0;
            default:
              return !1;
          }
        }
        function g(e) {
          var r = typeof e;
          return Array.isArray(e)
            ? "array"
            : e instanceof RegExp
            ? "object"
            : (function (e, r) {
                return (
                  "symbol" === e ||
                  (!!r &&
                    ("Symbol" === r["@@toStringTag"] ||
                      ("function" == typeof Symbol && r instanceof Symbol)))
                );
              })(r, e)
            ? "symbol"
            : r;
        }
        function h(e) {
          if (null == e) return "" + e;
          var r = g(e);
          if ("object" === r) {
            if (e instanceof Date) return "date";
            if (e instanceof RegExp) return "regexp";
          }
          return r;
        }
        function x(e) {
          var r = h(e);
          switch (r) {
            case "array":
            case "object":
              return "an " + r;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + r;
            default:
              return r;
          }
        }
        return (
          (y.prototype = Error.prototype),
          (p.checkPropTypes = o),
          (p.resetWarningCache = o.resetWarningCache),
          (p.PropTypes = p),
          p
        );
      }),
      b
    );
  })()(E.isElement, !0);
} else
  n.exports = (function () {
    if (h) return g;
    h = 1;
    var e = O();
    function r() {}
    function t() {}
    return (
      (t.resetWarningCache = r),
      (g = function () {
        function n(r, t, n, o, a, i) {
          if (i !== e) {
            var c = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((c.name = "Invariant Violation"), c);
          }
        }
        function o() {
          return n;
        }
        n.isRequired = n;
        var a = {
          array: n,
          bigint: n,
          bool: n,
          func: n,
          number: n,
          object: n,
          string: n,
          symbol: n,
          any: n,
          arrayOf: o,
          element: n,
          elementType: n,
          instanceOf: o,
          node: n,
          objectOf: o,
          oneOf: o,
          oneOfType: o,
          shape: o,
          exact: o,
          checkPropTypes: t,
          resetWarningCache: r,
        };
        return (a.PropTypes = a), a;
      })
    );
  })()();
const $ = ({ label: r = "button", size: t = "md", handleClick: n }) => {
  let o = 1;
  return (
    "sm" === t && (o = 0.75),
    "lg" === t && (o = 1.5),
    e.createElement(j, { onClick: n, scale: o }, r)
  );
};
$.propTypes = {
  label: n.exports.string,
  size: n.exports.oneOf(["sm", "md", "lg"]),
  handleClick: n.exports.func,
};
const j = r.button`
  background: #ff416c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: none;
  padding: ${({ scale: e }) => (e ? `${0.5 * e}rem ${1 * e}rem` : "10px 20px")};
  border-radius: 8px;
  box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  -webkit-box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  -moz-box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;
export { $ as Button };
