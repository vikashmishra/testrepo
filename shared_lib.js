function _typeof(e) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
}
(function (n, o) {
    var u, i, f, r, a, c, d, h, l, e, s, p, y, v, g, m, b, x, w, E, t, k, L, C, T, R, M, A, S, q, _, O, D, X, N, H, j, B, F;
    for (
        function (e, o) {
            var x,
                r,
                w,
                t,
                E,
                a,
                c,
                k,
                L,
                d,
                C,
                n,
                T =
                    [].indexOf ||
                    function (e) {
                        for (var t = 0, n = this.length; t < n; t++) if ((t in this) && this[t] === e) return t;
                        return -1;
                    },
                i = e.document,
                R = "before",
                M = "after",
                A = "readyState",
                S = "addEventListener",
                s = "removeEventListener",
                q = "dispatchEvent",
                _ = "XMLHttpRequest",
                u = "FormData",
                O = ["load", "loadend", "loadstart"],
                D = ["progress", "abort", "error", "timeout"],
                X = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
            isNaN(X) && (X = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])),
                (n = Array.prototype).indexOf ||
                    (n.indexOf = function (e) {
                        for (var t, n = (t = 0), r = this.length; t < r; n = ++t) if (this[n] === e) return n;
                        return -1;
                    }),
                (d = function (e, t) {
                    return Array.prototype.slice.call(e, t);
                }),
                (a = function (e) {
                    return "returnValue" === e || "totalSize" === e || "position" === e;
                }),
                (k = function (e, t) {
                    for (var n in e)
                        if ((e[n], !a(n)))
                            try {
                                t[n] = e[n];
                            } catch (e) {}
                    return t;
                }),
                (L = function (e, i, s) {
                    for (
                        var t,
                            n = function (o) {
                                return function (e) {
                                    var t,
                                        n,
                                        r = {};
                                    for (t in e) a(t) || ((n = e[t]), (r[t] = n === i ? s : n));
                                    return s[q](o, r);
                                };
                            },
                            r = 0,
                            o = e.length;
                        r < o;
                        r++
                    )
                        (t = e[r]), s._has(t) && (i["on" + t] = n(t));
                }),
                (c = function (t) {
                    var e;
                    if (null != i.createEventObject) return ((e = i.createEventObject()).type = t), e;
                    try {
                        return new Event(t);
                    } catch (e) {
                        return { type: t };
                    }
                }),
                ((C = (x = function (a) {
                    var r = {},
                        u = function (e) {
                            return r[e] || [];
                        },
                        f = {
                            addEventListener: function (e, t, n) {
                                (r[e] = u(e)), 0 <= r[e].indexOf(t) || ((n = n === o ? r[e].length : n), r[e].splice(n, 0, t));
                            },
                            removeEventListener: function (e, t) {
                                return e === o ? void (r = {}) : (t === o && (r[e] = []), void (-1 !== (t = u(e).indexOf(t)) && u(e).splice(t, 1)));
                            },
                            dispatchEvent: function () {
                                var e,
                                    t,
                                    n,
                                    r,
                                    o,
                                    i = d(arguments),
                                    s = i.shift();
                                for (a || (i[0] = k(i[0], c(s))), (t = f["on" + s]) && t.apply(f, i), e = n = 0, r = (o = u(s).concat(u("*"))).length; n < r; e = ++n) o[e].apply(f, i);
                            },
                            _has: function (e) {
                                return !(!r[e] && !f["on" + e]);
                            },
                        };
                    return (
                        a &&
                            ((f.listeners = function (e) {
                                return d(u(e));
                            }),
                            (f.on = f[S]),
                            (f.off = f[s]),
                            (f.fire = f[q]),
                            (f.once = function (e, t) {
                                var n = function () {
                                    return f.off(e, n), t.apply(null, arguments);
                                };
                                return f.on(e, n);
                            }),
                            (f.destroy = function () {
                                return (r = {});
                            })),
                        f
                    );
                })(!0)).EventEmitter = x),
                (C[R] = function (e, t) {
                    if (e.length < 1 || 2 < e.length) throw "invalid hook";
                    return C[S](R, e, t);
                }),
                (C[M] = function (e, t) {
                    if (e.length < 2 || 3 < e.length) throw "invalid hook";
                    return C[S](M, e, t);
                }),
                (C.enable = function () {
                    (e[_] = t), r && (e[u] = w);
                }),
                (C.disable = function () {
                    (e[_] = C[_]), r && (e[u] = r);
                }),
                (E = C.headers = function (e, t) {
                    var n, r, o, i, s, a, u;
                    switch ((null == t && (t = {}), _typeof(e))) {
                        case "object":
                            for (r in ((n = []), e)) (i = e[r]), (o = r.toLowerCase()), n.push(o + ":\t" + i);
                            return n.join("\n");
                        case "string":
                            for (s = 0, a = (n = e.split("\n")).length; s < a; s++) (u = n[s]), /([^:]+):\s*(.+)/.test(u) && ((o = null != (u = RegExp.$1) ? u.toLowerCase() : void 0), (u = RegExp.$2), null == t[o] && (t[o] = u));
                            return t;
                    }
                }),
                (r = e[u]),
                (w = function (e) {
                    var t, n;
                    (this.fd = e ? new r(e) : new r()),
                        (this.form = e),
                        (t = []),
                        Object.defineProperty(this, "entries", {
                            get: function () {
                                return (e
                                    ? d(e.querySelectorAll("input,select"))
                                          .filter(function (e) {
                                              var t;
                                              return ("checkbox" !== (t = e.type) && "radio" !== t) || e.checked;
                                          })
                                          .map(function (e) {
                                              return [e.name, "file" === e.type ? e.files : e.value];
                                          })
                                    : []
                                ).concat(t);
                            },
                        }),
                        (this.append =
                            ((n = this),
                            function () {
                                var e = d(arguments);
                                return t.push(e), n.fd.append.apply(n.fd, e);
                            }));
                }),
                r && ((C[u] = r), (e[u] = w)),
                (n = e[_]),
                (C[_] = n),
                (t = e[_] = function () {
                    var e,
                        t,
                        n,
                        r,
                        o,
                        f = new C[_](),
                        c = {},
                        i = null,
                        s = void 0,
                        d = void 0,
                        l = void 0,
                        a = function () {
                            var e, t, n, r;
                            if (((l.status = i || f.status), (-1 === i && X < 10) || (l.statusText = f.statusText), -1 !== i))
                                for (e in (r = E(f.getAllResponseHeaders()))) (n = r[e]), l.headers[e] || ((t = e.toLowerCase()), (l.headers[t] = n));
                        },
                        u = function () {
                            f.responseType && "text" !== f.responseType
                                ? "document" === f.responseType
                                    ? ((l.xml = f.responseXML), (l.data = f.responseXML))
                                    : (l.data = f.response)
                                : ((l.text = f.responseText), (l.data = f.responseText)),
                                ("responseURL" in f) && (l.finalUrl = f.responseURL);
                        },
                        p = function () {
                            (b.status = l.status), (b.statusText = l.statusText);
                        },
                        h = function () {
                            ("text" in l) && (b.responseText = l.text), ("xml" in l) && (b.responseXML = l.xml), ("data" in l) && (b.response = l.data), ("finalUrl" in l) && (b.responseURL = l.finalUrl);
                        },
                        y = function (e) {
                            for (; g < e && g < 4; ) (b[A] = ++g), 1 === g && b[q]("loadstart", {}), 2 === g && p(), 4 === g && (p(), h()), b[q]("readystatechange", {}), 4 === g && setTimeout(v, 0);
                        },
                        v = function () {
                            s || b[q]("load", {}), b[q]("loadend", {}), s && (b[A] = 0);
                        },
                        g = 0,
                        m = function (e) {
                            var t, n;
                            return 4 !== e
                                ? void y(e)
                                : ((t = C.listeners(M)),
                                  void (n = function () {
                                      var e;
                                      return t.length ? (2 === (e = t.shift()).length ? (e(c, l), n()) : 3 === e.length && c.async ? e(c, l, n) : n()) : y(4);
                                  })());
                        },
                        b = (c.xhr = x());
                    (f.onreadystatechange = function () {
                        try {
                            2 === f[A] && a();
                        } catch (e) {}
                        4 === f[A] && ((d = !1), a(), u()), m(f[A]);
                    }),
                        (t = function () {
                            s = !0;
                        }),
                        b[S]("error", t),
                        b[S]("timeout", t),
                        b[S]("abort", t),
                        b[S]("progress", function () {
                            g < 3 ? m(3) : b[q]("readystatechange", {});
                        }),
                        (("withCredentials" in f) || C.addWithCredentials) && (b.withCredentials = !1);
                    for (n = b.status = 0, r = (o = D.concat(O)).length; n < r; n++) (e = o[n]), (b["on" + e] = null);
                    return (
                        (b.open = function (e, t, n, r, o) {
                            (g = 0), (d = s = !1), (c.headers = {}), (c.headerNames = {}), (c.status = 0), (l = { headers: {} }), (c.method = e), (c.url = t), (c.async = !1 !== n), (c.user = r), (c.pass = o), m(1);
                        }),
                        (b.send = function (e) {
                            for (var n, s, a, r, o, t = ["type", "timeout", "withCredentials"], i = 0, u = t.length; i < u; i++) ((a = "type" === (s = t[i]) ? "responseType" : s) in b) && (c[s] = b[a]);
                            (c.body = e),
                                (o = function () {
                                    var e, t, n, r, o, i;
                                    for (L(D, f, b), b.upload && L(D.concat(O), f.upload, b.upload), d = !0, f.open(c.method, c.url, c.async, c.user, c.pass), o = ["type", "timeout", "withCredentials"], n = 0, r = o.length; n < r; n++)
                                        (a = "type" === (s = o[n]) ? "responseType" : s), (s in c) && (f[a] = c[s]);
                                    for (e in (i = c.headers)) (t = i[e]), e && f.setRequestHeader(e, t);
                                    c.body instanceof w && (c.body = c.body.fd), f.send(c.body);
                                }),
                                (n = C.listeners(R)),
                                (r = function () {
                                    var e, t;
                                    return n.length
                                        ? (((e = function (e) {
                                              return "object" != _typeof(e) || ("number" != typeof e.status && "number" != typeof l.status) ? void r() : (k(e, l), T.call(e, "data") < 0 && (e.data = e.response || e.text), void m(4));
                                          }).head = function (e) {
                                              return k(e, l), m(2);
                                          }),
                                          (e.progress = function (e) {
                                              return k(e, l), m(3);
                                          }),
                                          1 === (t = n.shift()).length ? e(t(c)) : 2 === t.length && c.async ? t(c, e) : e())
                                        : o();
                                })();
                        }),
                        (b.abort = function () {
                            (i = -1), d ? f.abort() : b[q]("abort", {});
                        }),
                        (b.setRequestHeader = function (e, t) {
                            var n = null != e ? e.toLowerCase() : void 0,
                                e = (c.headerNames[n] = c.headerNames[n] || e);
                            c.headers[e] && (t = c.headers[e] + ", " + t), (c.headers[e] = t);
                        }),
                        (b.getResponseHeader = function (e) {
                            e = null != e ? e.toLowerCase() : void 0;
                            return l.headers[e];
                        }),
                        (b.getAllResponseHeaders = function () {
                            return E(l.headers);
                        }),
                        f.overrideMimeType &&
                            (b.overrideMimeType = function () {
                                return f.overrideMimeType.apply(f, arguments);
                            }),
                        f.upload && (b.upload = c.upload = x()),
                        b
                    );
                }),
                "function" == typeof define && define.amd
                    ? define("xhook", [], function () {
                          return C;
                      })
                    : ((this.exports || this).xhook = C);
        }.call(this, n),
            b = !1,
            A = function (e) {
                var t, n;
                for (t in (b || g(), e)) (n = e[t]), k("adding slave: " + t), (A[t] = n);
            },
            s = {},
            p = function (e, t) {
                var n;
                return s[e] ? s[e] : (((n = h.createElement("iframe")).id = n.name = y()), k("creating iframe " + n.id), (n.src = "" + e + t), n.setAttribute("style", "display:none;"), h.body.appendChild(n), (s[e] = n.contentWindow));
            },
            x = !(g = function () {
                var i, o, s;
                return (
                    (b = !0),
                    (o = function (e, t) {
                        e[0];
                        var n = e[1],
                            r = w(n, "Blob"),
                            o = w(n, "File");
                        return r || o
                            ? (((r = new FileReader()).onload = function () {
                                  return (e[1] = null), o && (e[2] = n.name), t(["XD_BLOB", e, this.result, n.type]);
                              }),
                              r.readAsArrayBuffer(n),
                              1)
                            : 0;
                    }),
                    (i = function (a, n) {
                        var r;
                        a.forEach(function (e, t) {
                            var n,
                                r,
                                o,
                                i = e[0],
                                s = e[1];
                            if (w(s, "FileList")) for (a.splice(t, 1), r = 0, o = s.length; r < o; r++) (n = s[r]), a.splice(t, 0, [i, n]);
                        }),
                            (r = 0),
                            a.forEach(function (e, t) {
                                r += o(e, function (e) {
                                    (a[t] = e), 0 == --r && n();
                                });
                            }),
                            0 === r && n();
                    }),
                    (s = function (e, t) {
                        var n, r, o;
                        return (
                            t.on("xhr-event", function () {
                                return e.xhr.dispatchEvent.apply(null, arguments);
                            }),
                            t.on("xhr-upload-event", function () {
                                return e.xhr.upload.dispatchEvent.apply(null, arguments);
                            }),
                            ((r = O(e)).headers = e.headers),
                            e.withCredentials && (a.master && (r.headers[a.master] = h.cookie), (r.slaveCookie = a.slave)),
                            (o = function () {
                                return t.emit("request", r);
                            }),
                            e.body && ((r.body = e.body), w(r.body, "FormData")) ? ((n = r.body.entries), (r.body = ["XD_FD", n]), void i(n, o)) : void o()
                        );
                    }),
                    ("addWithCredentials" in H) || (H.addWithCredentials = !0),
                    H.before(function (e, t) {
                        var n,
                            r,
                            o = R(e.url);
                        return o && o.origin !== d
                            ? A[o.origin]
                                ? (k("proxying request to slave: '" + o.origin + "'"),
                                  !1 === e.async
                                      ? (X("sync not supported"), t())
                                      : ((n = p(o.origin, A[o.origin])),
                                        (r = c(y(), n)).on("response", function (e) {
                                            return t(e), r.close();
                                        }),
                                        e.xhr.addEventListener("abort", function () {
                                            return r.emit("abort");
                                        }),
                                        void (r.ready
                                            ? s(e, r)
                                            : r.once("ready", function () {
                                                  return s(e, r);
                                              }))))
                                : (o && k("no slave matching: '" + o.origin + "'"), t())
                            : t();
                    })
                );
            }),
            C = function (e) {
                var t, n;
                for (t in (x || m(), e)) (n = e[t]), k("adding master: " + t), (C[t] = n);
            },
            m = function () {
                return (
                    (x = !0),
                    k("handling incoming sockets..."),
                    (v = function (e, l) {
                        var t, p, n;
                        for (t in ("null" === e && (e = "*"), (p = null), C)) {
                            n = C[t];
                            try {
                                if (D(t).test(e)) {
                                    p = D(n);
                                    break;
                                }
                            } catch (e) {}
                        }
                        return p
                            ? (l.once("request", function (e) {
                                  var t, n, r, o, i, s, a, u, f, c, d;
                                  if ((k("request: " + e.method + " " + e.url), !(s = R(e.url)) || !p.test(s.path))) return X("blocked request to path: '" + s.path + "' by regex: " + p), void l.close();
                                  for (i in ((u = new XMLHttpRequest()).open(e.method, e.url),
                                  u.addEventListener("*", function (e) {
                                      return l.emit("xhr-event", e.type, O(e));
                                  }),
                                  u.upload &&
                                      u.upload.addEventListener("*", function (e) {
                                          return l.emit("xhr-upload-event", e.type, O(e));
                                      }),
                                  l.once("abort", function () {
                                      return u.abort();
                                  }),
                                  (u.onreadystatechange = function () {
                                      var e;
                                      if (4 === u.readyState) {
                                          e = { status: u.status, statusText: u.statusText, data: u.response, headers: H.headers(u.getAllResponseHeaders()) };
                                          try {
                                              e.text = u.responseText;
                                          } catch (e) {}
                                          return l.emit("response", e);
                                      }
                                  }),
                                  e.withCredentials && ((u.withCredentials = !0), e.slaveCookie && (e.headers[e.slaveCookie] = h.cookie)),
                                  e.timeout && (u.timeout = e.timeout),
                                  e.type && (u.responseType = e.type),
                                  (d = e.headers)))
                                      (a = d[i]), u.setRequestHeader(i, a);
                                  if (e.body instanceof Array && "XD_FD" === e.body[0]) {
                                      for (o = new H.FormData(), f = 0, c = (r = e.body[1]).length; f < c; f++)
                                          "XD_BLOB" === (t = r[f])[0] && 4 === t.length && ((n = new Blob([t[2]], { type: t[3] })), ((t = t[1])[1] = n)), o.append.apply(o, t);
                                      e.body = o;
                                  }
                                  u.send(e.body || null);
                              }),
                              void k("slave listening for requests on socket: " + l.id))
                            : void X("blocked request from: '" + e + "'");
                    }),
                    n === n.parent ? X("slaves must be in an iframe") : n.parent.postMessage("XDPING_" + i, "*")
                );
            },
            f = "XD_CHECK",
            q = {},
            E = !(v = null),
            c = function (n, t) {
                var e,
                    r,
                    o,
                    i,
                    s = !1,
                    a = (q[n] = H.EventEmitter(!0));
                return (
                    (a.id = n),
                    a.once("close", function () {
                        return a.destroy(), a.close();
                    }),
                    (i = []),
                    (a.emit = function () {
                        var e = S(arguments),
                            t = "string" == typeof e[1] ? " -> " + e[1] : "";
                        k("send socket: " + n + ": " + e[0] + t), e.unshift(n), s ? o(e) : i.push(e);
                    }),
                    (o = function (e) {
                        E && (e = JSON.stringify(e)), t.postMessage(e, "*");
                    }),
                    (a.close = function () {
                        a.emit("close"), k("close socket: " + n), (q[n] = null);
                    }),
                    a.once(f, function (e) {
                        for (E = "string" == typeof e, s = a.ready = !0, a.emit("ready"), k("ready socket: " + n + " (emit #" + i.length + " pending)"); i.length; ) o(i.shift());
                    }),
                    (r = 0),
                    (e = function () {
                        t.postMessage([n, f, {}], "*"), s || (r++ >= N.timeout / u ? (X("Timeout waiting on iframe socket"), l.fire("timeout"), a.fire("abort")) : setTimeout(e, u));
                    }),
                    setTimeout(e),
                    k("new socket: " + n),
                    a
                );
            },
            T = function (e) {
                return h.addEventListener ? n.addEventListener("message", e) : n.attachEvent("onmessage", e);
            },
            _ = function () {
                return T(function (e) {
                    var t,
                        n,
                        r = e.data;
                    if ("string" == typeof r) {
                        if (/^XDPING(_(V\d+))?$/.test(r) && RegExp.$2 !== i) return X("your master is not compatible with your slave, check your xdomain.js version");
                        if (/^xdomain-/.test(r)) r = r.split(",");
                        else if (E)
                            try {
                                r = JSON.parse(r);
                            } catch (e) {
                                return;
                            }
                    }
                    if (r instanceof Array && ((t = r.shift()), /^xdomain-/.test(t) && null !== (n = q[t]))) {
                        if (n === o) {
                            if (!v) return;
                            (n = c(t, e.source)), v(e.origin, n);
                        }
                        (e = "string" == typeof r[1] ? " -> " + r[1] : ""), k("receive socket: " + t + ": " + r[0] + e), n.fire.apply(n, r);
                    }
                });
            },
            H = (this.exports || this).xhook,
            (N = function (e) {
                e && (e.masters && C(e.masters), e.slaves && A(e.slaves));
            }).masters = C,
            N.slaves = A,
            N.debug = !1,
            N.timeout = 15e3,
            u = 100,
            a = N.cookies = { master: "Master-Cookie", slave: "Slave-Cookie" },
            h = n.document,
            t = n.location,
            d = N.origin = t.protocol + "//" + t.host,
            y = function () {
                return "xdomain-" + Math.round(Math.random() * Math.pow(2, 32)).toString(16);
            },
            S = function (e, t) {
                return Array.prototype.slice.call(e, t);
            },
            r = n.console || {},
            l = null,
            M = function () {
                (l = H.EventEmitter(!0)), (N.on = l.on), (N.off = l.off);
            },
            H && M(),
            k = (L = function (t) {
                return function (e) {
                    (e = "xdomain (" + d + "): " + e), l.fire(t, e), ("log" === t && !N.debug) || ((t in N) ? N[t](e) : (t in r) ? r[t](e) : "warn" === t && alert(e));
                };
            })("log"),
            X = L("warn"),
            j = 0,
            B = (F = ["postMessage", "JSON"]).length;
        j < B;
        j++
    )
        if (!n[(e = F[j])]) return void X("requires '" + e + "' and this browser does not support it");
    (w = function (e, t) {
        return t in n && e instanceof n[t];
    }),
        (i = "V1"),
        (R = N.parseUrl = function (e) {
            return /^((https?:)?\/\/[^\/\?]+)(\/.*)?/.test(e) ? { origin: (RegExp.$2 ? "" : t.protocol) + RegExp.$1, path: RegExp.$3 } : (k("failed to parse absolute url: " + e), null);
        }),
        (D = function (e) {
            return e instanceof RegExp
                ? e
                : ((e = e
                      .toString()
                      .replace(/\W/g, function (e) {
                          return "\\" + e;
                      })
                      .replace(/\\\*/g, ".*")),
                  new RegExp("^" + e + "$"));
        }),
        (O = function (e) {
            var t,
                n,
                r,
                o = {};
            for (t in e) "returnValue" !== t && "function" != (r = _typeof((n = e[t]))) && "object" !== r && (o[t] = n);
            return o;
        }),
        (function () {
            for (
                var e,
                    t,
                    n,
                    r,
                    o,
                    i,
                    s = {
                        debug: function (e) {
                            return "string" == typeof e ? (N.debug = "false" !== e) : void 0;
                        },
                        slave: function (e) {
                            var t;
                            if (e && (t = R(e))) return ((e = {})[t.origin] = t.path), A(e);
                        },
                        master: function (e) {
                            var t;
                            if (e && (t = "*" === e ? { origin: "*", path: "*" } : R(e))) return ((e = {})[t.origin] = t.path.replace(/^\//, "") ? t.path : "*"), C(e);
                        },
                    },
                    a = h.getElementsByTagName("script"),
                    u = 0,
                    f = a.length;
                u < f;
                u++
            )
                if (((n = a[u]), /xdomain/.test(n.src))) for (r = 0, o = (i = ["", "data-"]).length; r < o; r++) for (e in ((t = i[r]), s)) (0, s[e])(n.getAttribute(t + e));
        })(),
        _(),
        "function" == typeof define && define.amd
            ? define("xdomain", ["xhook"], function (e) {
                  return (H = e), M(), N;
              })
            : ((this.exports || this).xdomain = N);
}.call(this, window));
function _typeof(e) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
}
!(function (r, o) {
    function a(e) {
        f[f.length] = e;
    }
    function s(e) {
        l.className = l.className.replace(RegExp("\\b" + e + "\\b"), "");
    }
    function i(e, t) {
        for (var n = 0, r = e.length; n < r; n++) t.call(e, e[n], n);
    }
    function e() {
        l.className = l.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g, "");
        var t = r.innerWidth || l.clientWidth,
            e = r.outerWidth || r.screen.width;
        (m.screen.innerWidth = t),
            (m.screen.outerWidth = e),
            a("w-" + t),
            i(d.screens, function (e) {
                e < t
                    ? (d.screensCss.gt && a("gt-" + e), d.screensCss.gte && a("gte-" + e))
                    : t < e
                    ? (d.screensCss.lt && a("lt-" + e), d.screensCss.lte && a("lte-" + e))
                    : t === e && (d.screensCss.lte && a("lte-" + e), d.screensCss.eq && a("e-q" + e), d.screensCss.gte && a("gte-" + e));
            });
        var e = r.innerHeight || l.clientHeight,
            n = r.outerHeight || r.screen.height;
        (m.screen.innerHeight = e), (m.screen.outerHeight = n), m.feature("portrait", t < e), m.feature("landscape", e < t);
    }
    function t() {
        r.clearTimeout(w), (w = r.setTimeout(e, 100));
    }
    var n = r.document,
        c = r.navigator,
        u = r.location,
        l = n.documentElement,
        f = [],
        d = {
            screens: [240, 320, 480, 640, 768, 800, 1024, 1280, 1440, 1680, 1920],
            screensCss: { gt: !0, gte: !1, lt: !0, lte: !1, eq: !1 },
            browsers: [{ ie: { min: 6, max: 10 } }],
            browserCss: { gt: !0, gte: !1, lt: !0, lte: !1, eq: !0 },
            section: "-section",
            page: "-page",
            head: "head",
        };
    if (r.head_conf) for (var p in r.head_conf) r.head_conf[p] !== o && (d[p] = r.head_conf[p]);
    var m = (r[d.head] = function () {
        m.ready.apply(null, arguments);
    });
    switch (
        ((m.feature = function (e, t, n) {
            return e ? ("[object Function]" === Object.prototype.toString.call(t) && (t = t.call()), a((t ? "" : "no-") + e), (m[e] = !!t), n || (s("no-" + e), s(e), m.feature())) : ((l.className += " " + f.join(" ")), (f = [])), m;
        }),
        m.feature("js", !0),
        (p = c.userAgent.toLowerCase()),
        (c = /mobile|midp/.test(p)),
        m.feature("mobile", c, !0),
        m.feature("desktop", !c, !0),
        (c = (p =
            /(chrome|firefox)[ \/]([\w.]+)/.exec(p) ||
            /(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(p) ||
            /(android)(?:.*version)?[ \/]([\w.]+)/.exec(p) ||
            /(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(p) ||
            /(msie) ([\w.]+)/.exec(p) ||
            [])[1]),
        (p = parseFloat(p[2])),
        c)
    ) {
        case "msie":
            (c = "ie"), (p = n.documentMode || p);
            break;
        case "firefox":
            c = "ff";
            break;
        case "ipod":
        case "ipad":
        case "iphone":
            c = "ios";
            break;
        case "webkit":
            c = "safari";
    }
    (m.browser = { name: c, version: p }), (m.browser[c] = !0);
    for (var h = 0, g = d.browsers.length; h < g; h++)
        for (var b in d.browsers[h])
            if (c === b) {
                a(b);
                for (var y = d.browsers[h][b].max, v = d.browsers[h][b].min; v <= y; v++)
                    v < p
                        ? (d.browserCss.gt && a("gt-" + b + v), d.browserCss.gte && a("gte-" + b + v))
                        : p < v
                        ? (d.browserCss.lt && a("lt-" + b + v), d.browserCss.lte && a("lte-" + b + v))
                        : p === v && (d.browserCss.lte && a("lte-" + b + v), d.browserCss.eq && a("eq-" + b + v), d.browserCss.gte && a("gte-" + b + v));
            } else a("no-" + b);
    "ie" === c &&
        p < 9 &&
        i("abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "), function (e) {
            n.createElement(e);
        }),
        i(u.pathname.split("/"), function (e, t) {
            var n;
            2 < this.length && this[t + 1] !== o
                ? t &&
                  a(
                      this.slice(1, t + 1)
                          .join("-")
                          .toLowerCase() + d.section
                  )
                : (0 < (e = (n = e || "index").indexOf(".")) && (n = n.substring(0, e)), (l.id = n.toLowerCase() + d.page), t || a("root" + d.section));
        }),
        (m.screen = { height: r.screen.height, width: r.screen.width }),
        e();
    var w = 0;
    r.addEventListener ? r.addEventListener("resize", t, !1) : r.attachEvent("onresize", t);
})(window),
    (function (e) {
        function t(e) {
            var t,
                n = e.charAt(0).toUpperCase() + e.substr(1);
            e: {
                for (t in (e = (e + " " + s.join(n + " ") + n).split(" ")))
                    if (void 0 !== o[e[t]]) {
                        t = !0;
                        break e;
                    }
                t = !1;
            }
            return !!t;
        }
        var n,
            r = e.document.createElement("i"),
            o = r.style,
            a = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
            s = ["Webkit", "Moz", "O", "ms", "Khtml"],
            i = e[(e.head_conf && e.head_conf.head) || "head"],
            c = {
                gradient: function () {
                    return (
                        (o.cssText = ("background-image:" + a.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));background-image:") + a.join("linear-gradient(left top,#eee,#fff);background-image:")).slice(0, -17)),
                        !!o.backgroundImage
                    );
                },
                rgba: function () {
                    return (o.cssText = "background-color:rgba(0,0,0,0.5)"), !!o.backgroundColor;
                },
                opacity: function () {
                    return "" === r.style.opacity;
                },
                textshadow: function () {
                    return "" === o.textShadow;
                },
                multiplebgs: function () {
                    return (o.cssText = "background:url(//:),url(//:),red url(//:)"), /(url\s*\(.*?){3}/.test(o.background);
                },
                boxshadow: function () {
                    return t("boxShadow");
                },
                borderimage: function () {
                    return t("borderImage");
                },
                borderradius: function () {
                    return t("borderRadius");
                },
                cssreflections: function () {
                    return t("boxReflect");
                },
                csstransforms: function () {
                    return t("transform");
                },
                csstransitions: function () {
                    return t("transition");
                },
                touch: function () {
                    return "ontouchstart" in e;
                },
                retina: function () {
                    return 1 < e.devicePixelRatio;
                },
                fontface: function () {
                    var e = i.browser.version;
                    switch (i.browser.name) {
                        case "ie":
                            return 9 <= e;
                        case "chrome":
                            return 13 <= e;
                        case "ff":
                            return 6 <= e;
                        case "ios":
                            return 5 <= e;
                        case "android":
                            return !1;
                        case "webkit":
                            return 5.1 <= e;
                        case "opera":
                            return 10 <= e;
                        default:
                            return !1;
                    }
                },
            };
        for (n in c) c[n] && i.feature(n, c[n].call(), !0);
        i.feature();
    })(window),
    (function (r, o) {
        function a() {}
        function s(e, t) {
            if (e) {
                "object" === _typeof(e) && (e = [].slice.call(e));
                for (var n = 0, r = e.length; n < r; n++) t.call(e, e[n], n);
            }
        }
        function i(e, t) {
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return t !== o && null !== t && n === e;
        }
        function c(e) {
            return i("Function", e);
        }
        function u(e) {
            (e = e || a)._done || (e(), (e._done = 1));
        }
        function l(e) {
            var t = {};
            if ("object" === _typeof(e)) for (var n in e) e[n] && (t = { name: n, url: e[n] });
            else t = { name: -1 !== (n = (t = (t = e.split("/"))[t.length - 1]).indexOf("?")) ? t.substring(0, n) : t, url: e };
            return (e = w[t.name]) && e.url === t.url ? e : (w[t.name] = t);
        }
        function f(e) {
            for (var t in (e = e || w)) if (e.hasOwnProperty(t) && e[t].state !== L) return;
            return 1;
        }
        function d(e, t) {
            (t = t || a),
                e.state === L
                    ? t()
                    : e.state === E
                    ? x.ready(e.name, t)
                    : e.state === C
                    ? e.onpreload.push(function () {
                          d(e, t);
                      })
                    : ((e.state = E),
                      p(e, function () {
                          (e.state = L),
                              t(),
                              s(v[e.name], function (e) {
                                  u(e);
                              }),
                              h &&
                                  f() &&
                                  s(v.ALL, function (e) {
                                      u(e);
                                  });
                      }));
        }
        function p(e, t) {
            var n,
                t = t || a;
            /\.css[^\.]*$/.test(e.url)
                ? (((n = g.createElement("link")).type = "text/" + (e.type || "css")), (n.rel = "stylesheet"), (n.href = e.url))
                : (((n = g.createElement("script")).type = "text/" + (e.type || "javascript")), (n.src = e.url)),
                (n.onload = n.onreadystatechange = function (e) {
                    ("load" === (e = e || r.event).type || (/loaded|complete/.test(n.readyState) && (!g.documentMode || g.documentMode < 9))) && ((n.onload = n.onreadystatechange = n.onerror = null), t());
                }),
                (n.onerror = function () {
                    (n.onload = n.onreadystatechange = n.onerror = null), t();
                }),
                (n.async = !1),
                (n.defer = !1);
            e = g.head || g.getElementsByTagName("head")[0];
            e.insertBefore(n, e.lastChild);
        }
        function e() {
            g.body
                ? h ||
                  ((h = !0),
                  s(b, function (e) {
                      u(e);
                  }))
                : (r.clearTimeout(x.readyTimeout), (x.readyTimeout = r.setTimeout(e, 50)));
        }
        function t() {
            g.addEventListener ? (g.removeEventListener("DOMContentLoaded", t, !1), e()) : "complete" === g.readyState && (g.detachEvent("onreadystatechange", t), e());
        }
        var m,
            h,
            g = r.document,
            b = [],
            y = [],
            v = {},
            w = {},
            n = "async" in g.createElement("script") || "MozAppearance" in g.documentElement.style || r.opera,
            k = (r.head_conf && r.head_conf.head) || "head",
            x = (r[k] =
                r[k] ||
                function () {
                    x.ready.apply(null, arguments);
                }),
            C = 1,
            E = 3,
            L = 4;
        if (
            ((x.load = n
                ? function () {
                      var n = arguments,
                          r = n[n.length - 1],
                          o = {};
                      return (
                          c(r) || (r = null),
                          s(n, function (e, t) {
                              e !== r &&
                                  ((e = l(e)),
                                  d(
                                      (o[e.name] = e),
                                      r && t === n.length - 2
                                          ? function () {
                                                f(o) && u(r);
                                            }
                                          : null
                                  ));
                          }),
                          x
                      );
                  }
                : function () {
                      var e = arguments,
                          t = [].slice.call(e, 1),
                          n = t[0];
                      return (
                          m
                              ? n
                                  ? (s(t, function (e) {
                                        var t;
                                        c(e) ||
                                            ((t = l(e)).state === o &&
                                                ((t.state = C),
                                                (t.onpreload = []),
                                                p({ url: t.url, type: "cache" }, function () {
                                                    (t.state = 2),
                                                        s(t.onpreload, function (e) {
                                                            e.call();
                                                        });
                                                })));
                                    }),
                                    d(
                                        l(e[0]),
                                        c(n)
                                            ? n
                                            : function () {
                                                  x.load.apply(null, t);
                                              }
                                    ))
                                  : d(l(e[0]))
                              : y.push(function () {
                                    x.load.apply(null, e);
                                }),
                          x
                      );
                  }),
            (x.js = x.load),
            (x.test = function (e, t, n, r) {
                return (
                    (t = !!(e = "object" === _typeof(e) ? e : { test: e, success: !!t && (i("Array", t) ? t : [t]), failure: !!n && (i("Array", n) ? n : [n]), callback: r || a }).test) && e.success
                        ? (e.success.push(e.callback), x.load.apply(null, e.success))
                        : !t && e.failure
                        ? (e.failure.push(e.callback), x.load.apply(null, e.failure))
                        : r(),
                    x
                );
            }),
            (x.ready = function (e, t) {
                if (e === g) return h ? u(t) : b.push(t), x;
                if ((c(e) && ((t = e), (e = "ALL")), "string" != typeof e || !c(t))) return x;
                var n = w[e];
                return (n && n.state === L) || ("ALL" === e && f() && h) ? u(t) : (n = v[e]) ? n.push(t) : (v[e] = [t]), x;
            }),
            x.ready(g, function () {
                f() &&
                    s(v.ALL, function (e) {
                        u(e);
                    }),
                    x.feature && x.feature("domloaded", !0);
            }),
            "complete" === g.readyState)
        )
            e();
        else if (g.addEventListener) g.addEventListener("DOMContentLoaded", t, !1), r.addEventListener("load", e, !1);
        else {
            g.attachEvent("onreadystatechange", t), r.attachEvent("onload", e);
            var T = !1;
            try {
                T = null == r.frameElement && g.documentElement;
            } catch (e) {}
            T &&
                T.doScroll &&
                (function t() {
                    if (!h) {
                        try {
                            T.doScroll("left");
                        } catch (e) {
                            return r.clearTimeout(x.readyTimeout), void (x.readyTimeout = r.setTimeout(t, 50));
                        }
                        e();
                    }
                })();
        }
        setTimeout(function () {
            (m = !0),
                s(y, function (e) {
                    e();
                });
        }, 300);
    })(window);
function _typeof(n) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                  return typeof n;
              }
            : function (n) {
                  return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
              })(n);
}
(function () {
    function f(n) {
        return n instanceof f ? n : this instanceof f ? void (this._wrapped = n) : new f(n);
    }
    var n = this,
        t = n._,
        o = {},
        u = Array.prototype,
        r = Object.prototype,
        e = Function.prototype,
        i = u.push,
        c = u.slice,
        l = u.concat,
        s = r.toString,
        a = r.hasOwnProperty,
        p = u.forEach,
        h = u.map,
        v = u.reduce,
        y = u.reduceRight,
        d = u.filter,
        m = u.every,
        g = u.some,
        b = u.indexOf,
        _ = u.lastIndexOf,
        x = Array.isArray,
        r = Object.keys,
        j = e.bind;
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = f), (exports._ = f)) : (n._ = f), (f.VERSION = "1.4.4");
    var w = (f.each = f.forEach = function (n, t, r) {
        if (null != n)
            if (p && n.forEach === p) n.forEach(t, r);
            else if (n.length === +n.length) {
                for (var e = 0, u = n.length; e < u; e++) if (t.call(r, n[e], e, n) === o) return;
            } else for (var i in n) if (f.has(n, i) && t.call(r, n[i], i, n) === o) return;
    });
    f.map = f.collect = function (n, e, u) {
        var i = [];
        return null == n
            ? i
            : h && n.map === h
            ? n.map(e, u)
            : (w(n, function (n, t, r) {
                  i[i.length] = e.call(u, n, t, r);
              }),
              i);
    };
    var A = "Reduce of empty array with no initial value";
    (f.reduce = f.foldl = f.inject = function (n, e, u, i) {
        var o = 2 < arguments.length;
        if ((null == n && (n = []), v && n.reduce === v)) return i && (e = f.bind(e, i)), o ? n.reduce(e, u) : n.reduce(e);
        if (
            (w(n, function (n, t, r) {
                o ? (u = e.call(i, u, n, t, r)) : ((u = n), (o = !0));
            }),
            !o)
        )
            throw new TypeError(A);
        return u;
    }),
        (f.reduceRight = f.foldr = function (e, u, i, o) {
            var c = 2 < arguments.length;
            if ((null == e && (e = []), y && e.reduceRight === y)) return o && (u = f.bind(u, o)), c ? e.reduceRight(u, i) : e.reduceRight(u);
            var l,
                a = e.length;
            if (
                (a !== +a && ((l = f.keys(e)), (a = l.length)),
                w(e, function (n, t, r) {
                    (t = l ? l[--a] : --a), c ? (i = u.call(o, i, e[t], t, r)) : ((i = e[t]), (c = !0));
                }),
                !c)
            )
                throw new TypeError(A);
            return i;
        }),
        (f.find = f.detect = function (n, e, u) {
            var i;
            return (
                O(n, function (n, t, r) {
                    return e.call(u, n, t, r) ? ((i = n), !0) : void 0;
                }),
                i
            );
        }),
        (f.filter = f.select = function (n, e, u) {
            var i = [];
            return null == n
                ? i
                : d && n.filter === d
                ? n.filter(e, u)
                : (w(n, function (n, t, r) {
                      e.call(u, n, t, r) && (i[i.length] = n);
                  }),
                  i);
        }),
        (f.reject = function (n, e, u) {
            return f.filter(
                n,
                function (n, t, r) {
                    return !e.call(u, n, t, r);
                },
                u
            );
        }),
        (f.every = f.all = function (n, e, u) {
            e = e || f.identity;
            var i = !0;
            return null == n
                ? i
                : m && n.every === m
                ? n.every(e, u)
                : (w(n, function (n, t, r) {
                      return (i = i && e.call(u, n, t, r)) ? void 0 : o;
                  }),
                  !!i);
        });
    var O = (f.some = f.any = function (n, e, u) {
        e = e || f.identity;
        var i = !1;
        return null == n
            ? i
            : g && n.some === g
            ? n.some(e, u)
            : (w(n, function (n, t, r) {
                  return (i = i || e.call(u, n, t, r)) ? o : void 0;
              }),
              !!i);
    });
    (f.contains = f.include = function (n, t) {
        return (
            null != n &&
            (b && n.indexOf === b
                ? -1 != n.indexOf(t)
                : O(n, function (n) {
                      return n === t;
                  }))
        );
    }),
        (f.invoke = function (n, t) {
            var r = c.call(arguments, 2),
                e = f.isFunction(t);
            return f.map(n, function (n) {
                return (e ? t : n[t]).apply(n, r);
            });
        }),
        (f.pluck = function (n, t) {
            return f.map(n, function (n) {
                return n[t];
            });
        }),
        (f.where = function (n, r, t) {
            return f.isEmpty(r)
                ? t
                    ? null
                    : []
                : f[t ? "find" : "filter"](n, function (n) {
                      for (var t in r) if (r[t] !== n[t]) return !1;
                      return !0;
                  });
        }),
        (f.findWhere = function (n, t) {
            return f.where(n, t, !0);
        }),
        (f.max = function (n, e, u) {
            if (!e && f.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
            if (!e && f.isEmpty(n)) return -1 / 0;
            var i = { computed: -1 / 0, value: -1 / 0 };
            return (
                w(n, function (n, t, r) {
                    r = e ? e.call(u, n, t, r) : n;
                    r >= i.computed && (i = { value: n, computed: r });
                }),
                i.value
            );
        }),
        (f.min = function (n, e, u) {
            if (!e && f.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
            if (!e && f.isEmpty(n)) return 1 / 0;
            var i = { computed: 1 / 0, value: 1 / 0 };
            return (
                w(n, function (n, t, r) {
                    r = e ? e.call(u, n, t, r) : n;
                    i.computed > r && (i = { value: n, computed: r });
                }),
                i.value
            );
        }),
        (f.shuffle = function (n) {
            var t,
                r = 0,
                e = [];
            return (
                w(n, function (n) {
                    (t = f.random(r++)), (e[r - 1] = e[t]), (e[t] = n);
                }),
                e
            );
        });
    function E(t) {
        return f.isFunction(t)
            ? t
            : function (n) {
                  return n[t];
              };
    }
    f.sortBy = function (n, t, e) {
        var u = E(t);
        return f.pluck(
            f
                .map(n, function (n, t, r) {
                    return { value: n, index: t, criteria: u.call(e, n, t, r) };
                })
                .sort(function (n, t) {
                    var r = n.criteria,
                        e = t.criteria;
                    if (r !== e) {
                        if (e < r || void 0 === r) return 1;
                        if (r < e || void 0 === e) return -1;
                    }
                    return n.index < t.index ? -1 : 1;
                }),
            "value"
        );
    };
    function k(r, n, e, u) {
        var i = {},
            o = E(n || f.identity);
        return (
            w(r, function (n, t) {
                t = o.call(e, n, t, r);
                u(i, t, n);
            }),
            i
        );
    }
    (f.groupBy = function (n, t, r) {
        return k(n, t, r, function (n, t, r) {
            (f.has(n, t) ? n[t] : (n[t] = [])).push(r);
        });
    }),
        (f.countBy = function (n, t, r) {
            return k(n, t, r, function (n, t) {
                f.has(n, t) || (n[t] = 0), n[t]++;
            });
        }),
        (f.sortedIndex = function (n, t, r, e) {
            for (var u = (r = null == r ? f.identity : E(r)).call(e, t), i = 0, o = n.length; i < o; ) {
                var c = (i + o) >>> 1;
                u > r.call(e, n[c]) ? (i = 1 + c) : (o = c);
            }
            return i;
        }),
        (f.toArray = function (n) {
            return n ? (f.isArray(n) ? c.call(n) : n.length === +n.length ? f.map(n, f.identity) : f.values(n)) : [];
        }),
        (f.size = function (n) {
            return null == n ? 0 : (n.length === +n.length ? n : f.keys(n)).length;
        }),
        (f.first = f.head = f.take = function (n, t, r) {
            return null == n ? void 0 : null == t || r ? n[0] : c.call(n, 0, t);
        }),
        (f.initial = function (n, t, r) {
            return c.call(n, 0, n.length - (null == t || r ? 1 : t));
        }),
        (f.last = function (n, t, r) {
            return null == n ? void 0 : null == t || r ? n[n.length - 1] : c.call(n, Math.max(n.length - t, 0));
        }),
        (f.rest = f.tail = f.drop = function (n, t, r) {
            return c.call(n, null == t || r ? 1 : t);
        }),
        (f.compact = function (n) {
            return f.filter(n, f.identity);
        });
    function F(n, t, r) {
        return (
            w(n, function (n) {
                f.isArray(n) ? (t ? i.apply(r, n) : F(n, t, r)) : r.push(n);
            }),
            r
        );
    }
    (f.flatten = function (n, t) {
        return F(n, t, []);
    }),
        (f.without = function (n) {
            return f.difference(n, c.call(arguments, 1));
        }),
        (f.uniq = f.unique = function (r, e, n, t) {
            f.isFunction(e) && ((t = n), (n = e), (e = !1));
            var t = n ? f.map(r, n, t) : r,
                u = [],
                i = [];
            return (
                w(t, function (n, t) {
                    (e ? t && i[i.length - 1] === n : f.contains(i, n)) || (i.push(n), u.push(r[t]));
                }),
                u
            );
        }),
        (f.union = function () {
            return f.uniq(l.apply(u, arguments));
        }),
        (f.intersection = function (n) {
            var r = c.call(arguments, 1);
            return f.filter(f.uniq(n), function (t) {
                return f.every(r, function (n) {
                    return 0 <= f.indexOf(n, t);
                });
            });
        }),
        (f.difference = function (n) {
            var t = l.apply(u, c.call(arguments, 1));
            return f.filter(n, function (n) {
                return !f.contains(t, n);
            });
        }),
        (f.zip = function () {
            for (var n = c.call(arguments), t = f.max(f.pluck(n, "length")), r = Array(t), e = 0; e < t; e++) r[e] = f.pluck(n, "" + e);
            return r;
        }),
        (f.object = function (n, t) {
            if (null == n) return {};
            for (var r = {}, e = 0, u = n.length; e < u; e++) t ? (r[n[e]] = t[e]) : (r[n[e][0]] = n[e][1]);
            return r;
        }),
        (f.indexOf = function (n, t, r) {
            if (null == n) return -1;
            var e = 0,
                u = n.length;
            if (r) {
                if ("number" != typeof r) return n[(e = f.sortedIndex(n, t))] === t ? e : -1;
                e = r < 0 ? Math.max(0, u + r) : r;
            }
            if (b && n.indexOf === b) return n.indexOf(t, r);
            for (; e < u; e++) if (n[e] === t) return e;
            return -1;
        }),
        (f.lastIndexOf = function (n, t, r) {
            if (null == n) return -1;
            var e = null != r;
            if (_ && n.lastIndexOf === _) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
            for (var u = e ? r : n.length; u--; ) if (n[u] === t) return u;
            return -1;
        }),
        (f.range = function (n, t, r) {
            arguments.length <= 1 && ((t = n || 0), (n = 0)), (r = arguments[2] || 1);
            for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); u < e; ) (i[u++] = n), (n += r);
            return i;
        }),
        (f.bind = function (n, t) {
            if (n.bind === j && j) return j.apply(n, c.call(arguments, 1));
            var r = c.call(arguments, 2);
            return function () {
                return n.apply(t, r.concat(c.call(arguments)));
            };
        }),
        (f.partial = function (n) {
            var t = c.call(arguments, 1);
            return function () {
                return n.apply(this, t.concat(c.call(arguments)));
            };
        }),
        (f.bindAll = function (t) {
            var n = c.call(arguments, 1);
            return (
                0 === n.length && (n = f.functions(t)),
                w(n, function (n) {
                    t[n] = f.bind(t[n], t);
                }),
                t
            );
        }),
        (f.memoize = function (t, r) {
            var e = {};
            return (
                (r = r || f.identity),
                function () {
                    var n = r.apply(this, arguments);
                    return f.has(e, n) ? e[n] : (e[n] = t.apply(this, arguments));
                }
            );
        }),
        (f.delay = function (n, t) {
            var r = c.call(arguments, 2);
            return setTimeout(function () {
                return n.apply(null, r);
            }, t);
        }),
        (f.defer = function (n) {
            return f.delay.apply(f, [n, 1].concat(c.call(arguments, 1)));
        }),
        (f.throttle = function (r, e) {
            function u() {
                (a = new Date()), (c = null), (l = r.apply(i, o));
            }
            var i,
                o,
                c,
                l,
                a = 0;
            return function () {
                var n = new Date(),
                    t = e - (n - a);
                return (i = this), (o = arguments), t <= 0 ? (clearTimeout(c), (c = null), (a = n), (l = r.apply(i, o))) : (c = c || setTimeout(u, t)), l;
            };
        }),
        (f.debounce = function (e, u, i) {
            var o, c;
            return function () {
                var n = this,
                    t = arguments,
                    r = i && !o;
                return (
                    clearTimeout(o),
                    (o = setTimeout(function () {
                        (o = null), i || (c = e.apply(n, t));
                    }, u)),
                    r && (c = e.apply(n, t)),
                    c
                );
            };
        }),
        (f.once = function (n) {
            var t,
                r = !1;
            return function () {
                return r || ((r = !0), (t = n.apply(this, arguments)), (n = null)), t;
            };
        }),
        (f.wrap = function (t, r) {
            return function () {
                var n = [t];
                return i.apply(n, arguments), r.apply(this, n);
            };
        }),
        (f.compose = function () {
            var r = arguments;
            return function () {
                for (var n = arguments, t = r.length - 1; 0 <= t; t--) n = [r[t].apply(this, n)];
                return n[0];
            };
        }),
        (f.after = function (n, t) {
            return n <= 0
                ? t()
                : function () {
                      return --n < 1 ? t.apply(this, arguments) : void 0;
                  };
        }),
        (f.keys =
            r ||
            function (n) {
                if (n !== Object(n)) throw new TypeError("Invalid object");
                var t,
                    r = [];
                for (t in n) f.has(n, t) && (r[r.length] = t);
                return r;
            }),
        (f.values = function (n) {
            var t,
                r = [];
            for (t in n) f.has(n, t) && r.push(n[t]);
            return r;
        }),
        (f.pairs = function (n) {
            var t,
                r = [];
            for (t in n) f.has(n, t) && r.push([t, n[t]]);
            return r;
        }),
        (f.invert = function (n) {
            var t,
                r = {};
            for (t in n) f.has(n, t) && (r[n[t]] = t);
            return r;
        }),
        (f.functions = f.methods = function (n) {
            var t,
                r = [];
            for (t in n) f.isFunction(n[t]) && r.push(t);
            return r.sort();
        }),
        (f.extend = function (r) {
            return (
                w(c.call(arguments, 1), function (n) {
                    if (n) for (var t in n) r[t] = n[t];
                }),
                r
            );
        }),
        (f.pick = function (t) {
            var r = {},
                n = l.apply(u, c.call(arguments, 1));
            return (
                w(n, function (n) {
                    n in t && (r[n] = t[n]);
                }),
                r
            );
        }),
        (f.omit = function (n) {
            var t,
                r = {},
                e = l.apply(u, c.call(arguments, 1));
            for (t in n) f.contains(e, t) || (r[t] = n[t]);
            return r;
        }),
        (f.defaults = function (r) {
            return (
                w(c.call(arguments, 1), function (n) {
                    if (n) for (var t in n) null == r[t] && (r[t] = n[t]);
                }),
                r
            );
        }),
        (f.clone = function (n) {
            return f.isObject(n) ? (f.isArray(n) ? n.slice() : f.extend({}, n)) : n;
        }),
        (f.tap = function (n, t) {
            return t(n), n;
        });
    function S(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        if ((n instanceof f && (n = n._wrapped), t instanceof f && (t = t._wrapped), (a = s.call(n)) != s.call(t))) return !1;
        switch (a) {
            case "[object String]":
                return n == t + "";
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase;
        }
        if ("object" != _typeof(n) || "object" != _typeof(t)) return !1;
        for (var u = r.length; u--; ) if (r[u] == n) return e[u] == t;
        r.push(n), e.push(t);
        var i = 0,
            o = !0;
        if ("[object Array]" == a) {
            if ((o = (i = n.length) == t.length)) for (; i-- && (o = S(n[i], t[i], r, e)); );
        } else {
            var c,
                l = n.constructor,
                a = t.constructor;
            if (l !== a && !(f.isFunction(l) && l instanceof l && f.isFunction(a) && a instanceof a)) return !1;
            for (c in n) if (f.has(n, c) && (i++, !(o = f.has(t, c) && S(n[c], t[c], r, e)))) break;
            if (o) {
                for (c in t) if (f.has(t, c) && !i--) break;
                o = !i;
            }
        }
        return r.pop(), e.pop(), o;
    }
    (f.isEqual = function (n, t) {
        return S(n, t, [], []);
    }),
        (f.isEmpty = function (n) {
            if (null == n) return !0;
            if (f.isArray(n) || f.isString(n)) return 0 === n.length;
            for (var t in n) if (f.has(n, t)) return !1;
            return !0;
        }),
        (f.isElement = function (n) {
            return !(!n || 1 !== n.nodeType);
        }),
        (f.isArray =
            x ||
            function (n) {
                return "[object Array]" == s.call(n);
            }),
        (f.isObject = function (n) {
            return n === Object(n);
        }),
        w(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
            f["is" + t] = function (n) {
                return s.call(n) == "[object " + t + "]";
            };
        }),
        f.isArguments(arguments) ||
            (f.isArguments = function (n) {
                return !(!n || !f.has(n, "callee"));
            }),
        "function" != typeof /./ &&
            (f.isFunction = function (n) {
                return "function" == typeof n;
            }),
        (f.isFinite = function (n) {
            return isFinite(n) && !isNaN(parseFloat(n));
        }),
        (f.isNaN = function (n) {
            return f.isNumber(n) && n != +n;
        }),
        (f.isBoolean = function (n) {
            return !0 === n || !1 === n || "[object Boolean]" == s.call(n);
        }),
        (f.isNull = function (n) {
            return null === n;
        }),
        (f.isUndefined = function (n) {
            return void 0 === n;
        }),
        (f.has = function (n, t) {
            return a.call(n, t);
        }),
        (f.noConflict = function () {
            return (n._ = t), this;
        }),
        (f.identity = function (n) {
            return n;
        }),
        (f.times = function (n, t, r) {
            for (var e = Array(n), u = 0; u < n; u++) e[u] = t.call(r, u);
            return e;
        }),
        (f.random = function (n, t) {
            return null == t && ((t = n), (n = 0)), n + Math.floor(Math.random() * (t - n + 1));
        });
    var R = { escape: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;" } };
    R.unescape = f.invert(R.escape);
    var I = { escape: RegExp("[" + f.keys(R.escape).join("") + "]", "g"), unescape: RegExp("(" + f.keys(R.unescape).join("|") + ")", "g") };
    f.each(["escape", "unescape"], function (t) {
        f[t] = function (n) {
            return null == n
                ? ""
                : ("" + n).replace(I[t], function (n) {
                      return R[t][n];
                  });
        };
    }),
        (f.result = function (n, t) {
            if (null == n) return null;
            t = n[t];
            return f.isFunction(t) ? t.call(n) : t;
        }),
        (f.mixin = function (r) {
            w(f.functions(r), function (n) {
                var t = (f[n] = r[n]);
                f.prototype[n] = function () {
                    var n = [this._wrapped];
                    return i.apply(n, arguments), B.call(this, t.apply(f, n));
                };
            });
        });
    var M = 0;
    (f.uniqueId = function (n) {
        var t = ++M + "";
        return n ? n + t : t;
    }),
        (f.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
    var N = /(.)^/,
        T = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "    ": "t", "\u2028": "u2028", "\u2029": "u2029" },
        q = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    (f.template = function (i, n, t) {
        var r;
        t = f.defaults({}, t, f.templateSettings);
        var e = RegExp([(t.escape || N).source, (t.interpolate || N).source, (t.evaluate || N).source].join("|") + "|$", "g"),
            o = 0,
            c = "__p+='";
        i.replace(e, function (n, t, r, e, u) {
            return (
                (c += i.slice(o, u).replace(q, function (n) {
                    return "\\" + T[n];
                })),
                t && (c += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'"),
                r && (c += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"),
                e && (c += "';\n" + e + "\n__p+='"),
                (o = u + n.length),
                n
            );
        }),
            (c += "';\n"),
            t.variable || (c = "with(obj||{}){\n" + c + "}\n"),
            (c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n");
        try {
            r = Function(t.variable || "obj", "_", c);
        } catch (n) {
            throw ((n.source = c), n);
        }
        if (n) return r(n, f);
        n = function (n) {
            return r.call(this, n, f);
        };
        return (n.source = "function(" + (t.variable || "obj") + "){\n" + c + "}"), n;
    }),
        (f.chain = function (n) {
            return f(n).chain();
        });
    var B = function (n) {
        return this._chain ? f(n).chain() : n;
    };
    f.mixin(f),
        w(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
            var r = u[t];
            f.prototype[t] = function () {
                var n = this._wrapped;
                return r.apply(n, arguments), ("shift" != t && "splice" != t) || 0 !== n.length || delete n[0], B.call(this, n);
            };
        }),
        w(["concat", "join", "slice"], function (n) {
            var t = u[n];
            f.prototype[n] = function () {
                return B.call(this, t.apply(this._wrapped, arguments));
            };
        }),
        f.extend(f.prototype, {
            chain: function () {
                return (this._chain = !0), this;
            },
            value: function () {
                return this._wrapped;
            },
        });
}.call(this));
(function () {
    var t = this,
        e = t.Backbone,
        a = Array.prototype.slice,
        u = Array.prototype.splice,
        h = "undefined" != typeof exports ? exports : (t.Backbone = {});
    h.VERSION = "0.9.2";
    var l = t._;
    l || "undefined" == typeof require || (l = require("underscore"));
    var r = t.jQuery || t.Zepto || t.ender;
    (h.setDomLibrary = function (t) {
        r = t;
    }),
        (h.noConflict = function () {
            return (t.Backbone = e), this;
        }),
        (h.emulateHTTP = !1),
        (h.emulateJSON = !1);
    var c = /\s+/,
        i = (h.Events = {
            on: function (t, e, i) {
                var s, n, r, o, a;
                if (!e) return this;
                for (t = t.split(c), s = this._callbacks || (this._callbacks = {}); (n = t.shift()); ) ((r = (a = s[n]) ? a.tail : {}).next = o = {}), (r.context = i), (r.callback = e), (s[n] = { tail: o, next: a ? a.next : r });
                return this;
            },
            off: function (t, e, i) {
                var s, n, r, o, a, h;
                if ((n = this._callbacks)) {
                    if (!t && !e && !i) return delete this._callbacks, this;
                    for (t = t ? t.split(c) : l.keys(n); (s = t.shift()); )
                        if (((r = n[s]), delete n[s], r && (e || i))) for (o = r.tail; (r = r.next) !== o; ) (a = r.callback), (h = r.context), ((e && a !== e) || (i && h !== i)) && this.on(s, a, h);
                    return this;
                }
            },
            trigger: function (t) {
                var e, i, s, n, r, o;
                if (!(s = this._callbacks)) return this;
                for (r = s.all, t = t.split(c), o = a.call(arguments, 1); (e = t.shift()); ) {
                    if ((i = s[e])) for (n = i.tail; (i = i.next) !== n; ) i.callback.apply(i.context || this, o);
                    if ((i = r)) for (n = i.tail, e = [e].concat(o); (i = i.next) !== n; ) i.callback.apply(i.context || this, e);
                }
                return this;
            },
        });
    (i.bind = i.on), (i.unbind = i.off);
    var d = (h.Model = function (t, e) {
        var i;
        (t = t || {}),
            e && e.parse && (t = this.parse(t)),
            (i = S(this, "defaults")) && (t = l.extend({}, i, t)),
            e && e.collection && (this.collection = e.collection),
            (this.attributes = {}),
            (this._escapedAttributes = {}),
            (this.cid = l.uniqueId("c")),
            (this.changed = {}),
            (this._silent = {}),
            (this._pending = {}),
            this.set(t, { silent: !0 }),
            (this.changed = {}),
            (this._silent = {}),
            (this._pending = {}),
            (this._previousAttributes = l.clone(this.attributes)),
            this.initialize.apply(this, arguments);
    });
    l.extend(d.prototype, i, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return l.clone(this.attributes);
        },
        get: function (t) {
            return this.attributes[t];
        },
        escape: function (t) {
            var e;
            return (e = this._escapedAttributes[t]) ? e : ((e = this.get(t)), (this._escapedAttributes[t] = l.escape(null == e ? "" : "" + e)));
        },
        has: function (t) {
            return null != this.get(t);
        },
        set: function (t, e, i) {
            var s, n;
            if ((l.isObject(t) || null == t ? ((s = t), (i = e)) : ((s = {})[t] = e), (i = i || {}), !s)) return this;
            if ((s instanceof d && (s = s.attributes), i.unset)) for (n in s) s[n] = void 0;
            if (!this._validate(s, i)) return !1;
            this.idAttribute in s && (this.id = s[this.idAttribute]);
            var e = (i.changes = {}),
                r = this.attributes,
                o = this._escapedAttributes,
                a = this._previousAttributes || {};
            for (n in s)
                (t = s[n]),
                    (!l.isEqual(r[n], t) || (i.unset && l.has(r, n))) && (delete o[n], ((i.silent ? this._silent : e)[n] = !0)),
                    i.unset ? delete r[n] : (r[n] = t),
                    l.isEqual(a[n], t) && l.has(r, n) == l.has(a, n) ? (delete this.changed[n], delete this._pending[n]) : ((this.changed[n] = t), i.silent || (this._pending[n] = !0));
            return i.silent || this.change(i), this;
        },
        unset: function (t, e) {
            return ((e = e || {}).unset = !0), this.set(t, null, e);
        },
        clear: function (t) {
            return ((t = t || {}).unset = !0), this.set(l.clone(this.attributes), t);
        },
        fetch: function (s) {
            var s = s ? l.clone(s) : {},
                n = this,
                r = s.success;
            return (
                (s.success = function (t, e, i) {
                    if (!n.set(n.parse(t, i), s)) return !1;
                    r && r(n, t);
                }),
                (s.error = h.wrapError(s.error, n, s)),
                (this.sync || h.sync).call(this, "read", this, s)
            );
        },
        save: function (t, e, s) {
            var n, i;
            if ((l.isObject(t) || null == t ? ((n = t), (s = e)) : ((n = {})[t] = e), (s = s ? l.clone(s) : {}).wait)) {
                if (!this._validate(n, s)) return !1;
                i = l.clone(this.attributes);
            }
            if (((t = l.extend({}, s, { silent: !0 })), n && !this.set(n, s.wait ? t : s))) return !1;
            var r = this,
                o = s.success;
            return (
                (s.success = function (t, e, i) {
                    if (((e = r.parse(t, i)), s.wait && (delete s.wait, (e = l.extend(n || {}, e))), !r.set(e, s))) return !1;
                    o ? o(r, t) : r.trigger("sync", r, t, s);
                }),
                (s.error = h.wrapError(s.error, r, s)),
                (e = this.isNew() ? "create" : "update"),
                (e = (this.sync || h.sync).call(this, e, this, s)),
                s.wait && this.set(i, t),
                e
            );
        },
        destroy: function (e) {
            function i() {
                s.trigger("destroy", s, s.collection, e);
            }
            var e = e ? l.clone(e) : {},
                s = this,
                n = e.success;
            if (this.isNew()) return i(), !1;
            (e.success = function (t) {
                e.wait && i(), n ? n(s, t) : s.trigger("sync", s, t, e);
            }),
                (e.error = h.wrapError(e.error, s, e));
            var t = (this.sync || h.sync).call(this, "delete", this, e);
            return e.wait || i(), t;
        },
        url: function () {
            var t = S(this, "urlRoot") || S(this.collection, "url") || k();
            return this.isNew() ? t : t + ("/" == t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function (t) {
            return t;
        },
        clone: function () {
            return new this.constructor(this.attributes);
        },
        isNew: function () {
            return null == this.id;
        },
        change: function (t) {
            t = t || {};
            var e,
                i = this._changing;
            for (e in ((this._changing = !0), this._silent)) this._pending[e] = !0;
            var s = l.extend({}, t.changes, this._silent);
            for (e in ((this._silent = {}), s)) this.trigger("change:" + e, this, this.get(e), t);
            if (i) return this;
            for (; !l.isEmpty(this._pending); ) {
                for (e in ((this._pending = {}), this.trigger("change", this, t), this.changed)) this._pending[e] || this._silent[e] || delete this.changed[e];
                this._previousAttributes = l.clone(this.attributes);
            }
            return (this._changing = !1), this;
        },
        hasChanged: function (t) {
            return arguments.length ? l.has(this.changed, t) : !l.isEmpty(this.changed);
        },
        changedAttributes: function (t) {
            if (!t) return !!this.hasChanged() && l.clone(this.changed);
            var e,
                i,
                s = !1,
                n = this._previousAttributes;
            for (i in t) l.isEqual(n[i], (e = t[i])) || ((s = s || {})[i] = e);
            return s;
        },
        previous: function (t) {
            return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null;
        },
        previousAttributes: function () {
            return l.clone(this._previousAttributes);
        },
        isValid: function () {
            return !this.validate(this.attributes);
        },
        _validate: function (t, e) {
            if (e.silent || !this.validate) return !0;
            (t = l.extend({}, this.attributes, t)), (t = this.validate(t, e));
            return !t || (e && e.error ? e.error(this, t, e) : this.trigger("error", this, t, e), !1);
        },
    });
    var s = (h.Collection = function (t, e) {
        (e = e || {}).model && (this.model = e.model), e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, { silent: !0, parse: e.parse });
    });
    l.extend(s.prototype, i, {
        model: d,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e);
            });
        },
        add: function (t, e) {
            var i,
                s,
                n,
                r,
                o,
                a = {},
                h = {},
                c = [];
            for (e = e || {}, i = 0, s = (t = l.isArray(t) ? t.slice() : [t]).length; i < s; i++) {
                if (!(n = t[i] = this._prepareModel(t[i], e))) throw Error("Can't add an invalid model to a collection");
                (r = n.cid), (o = n.id), a[r] || this._byCid[r] || (null != o && (h[o] || this._byId[o])) ? c.push(i) : (a[r] = h[o] = n);
            }
            for (i = c.length; i--; ) t.splice(c[i], 1);
            for (i = 0, s = t.length; i < s; i++) (n = t[i]).on("all", this._onModelEvent, this), null != (this._byCid[n.cid] = n).id && (this._byId[n.id] = n);
            if (((this.length += s), u.apply(this.models, [null != e.at ? e.at : this.models.length, 0].concat(t)), this.comparator && this.sort({ silent: !0 }), e.silent)) return this;
            for (i = 0, s = this.models.length; i < s; i++) a[(n = this.models[i]).cid] && ((e.index = i), n.trigger("add", n, this, e));
            return this;
        },
        remove: function (t, e) {
            var i, s, n, r;
            for (e = e || {}, i = 0, s = (t = l.isArray(t) ? t.slice() : [t]).length; i < s; i++)
                (r = this.getByCid(t[i]) || this.get(t[i])) &&
                    (delete this._byId[r.id], delete this._byCid[r.cid], (n = this.indexOf(r)), this.models.splice(n, 1), this.length--, e.silent || ((e.index = n), r.trigger("remove", r, this, e)), this._removeReference(r));
            return this;
        },
        push: function (t, e) {
            return (t = this._prepareModel(t, e)), this.add(t, e), t;
        },
        pop: function (t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t), e;
        },
        unshift: function (t, e) {
            return (t = this._prepareModel(t, e)), this.add(t, l.extend({ at: 0 }, e)), t;
        },
        shift: function (t) {
            var e = this.at(0);
            return this.remove(e, t), e;
        },
        get: function (t) {
            return null == t ? void 0 : this._byId[null != t.id ? t.id : t];
        },
        getByCid: function (t) {
            return t && this._byCid[t.cid || t];
        },
        at: function (t) {
            return this.models[t];
        },
        where: function (i) {
            return l.isEmpty(i)
                ? []
                : this.filter(function (t) {
                      for (var e in i) if (i[e] !== t.get(e)) return !1;
                      return !0;
                  });
        },
        sort: function (t) {
            if (((t = t || {}), !this.comparator)) throw Error("Cannot sort a set without a comparator");
            var e = l.bind(this.comparator, this);
            return 1 == this.comparator.length ? (this.models = this.sortBy(e)) : this.models.sort(e), t.silent || this.trigger("reset", this, t), this;
        },
        pluck: function (e) {
            return l.map(this.models, function (t) {
                return t.get(e);
            });
        },
        reset: function (t, e) {
            (t = t || []), (e = e || {});
            for (var i = 0, s = this.models.length; i < s; i++) this._removeReference(this.models[i]);
            return this._reset(), this.add(t, l.extend({ silent: !0 }, e)), e.silent || this.trigger("reset", this, e), this;
        },
        fetch: function (s) {
            void 0 === (s = s ? l.clone(s) : {}).parse && (s.parse = !0);
            var n = this,
                r = s.success;
            return (
                (s.success = function (t, e, i) {
                    n[s.add ? "add" : "reset"](n.parse(t, i), s), r && r(n, t);
                }),
                (s.error = h.wrapError(s.error, n, s)),
                (this.sync || h.sync).call(this, "read", this, s)
            );
        },
        create: function (i, s) {
            var n = this,
                s = s ? l.clone(s) : {};
            if (!(i = this._prepareModel(i, s))) return !1;
            s.wait || n.add(i, s);
            var r = s.success;
            return (
                (s.success = function (t, e) {
                    s.wait && n.add(t, s), r ? r(t, e) : t.trigger("sync", i, e, s);
                }),
                i.save(null, s),
                i
            );
        },
        parse: function (t) {
            return t;
        },
        chain: function () {
            return l(this.models).chain();
        },
        _reset: function () {
            (this.length = 0), (this.models = []), (this._byId = {}), (this._byCid = {});
        },
        _prepareModel: function (t, e) {
            return (e = e || {}), t instanceof d ? t.collection || (t.collection = this) : (t = new (e.collection = this).model(t, e))._validate(t.attributes, e) || (t = !1), t;
        },
        _removeReference: function (t) {
            this == t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function (t, e, i, s) {
            (("add" == t || "remove" == t) && i != this) ||
                ("destroy" == t && this.remove(e, s), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], (this._byId[e.id] = e)), this.trigger.apply(this, arguments));
        },
    }),
        l.each(
            "forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(
                ","
            ),
            function (t) {
                s.prototype[t] = function () {
                    return l[t].apply(l, [this.models].concat(l.toArray(arguments)));
                };
            }
        );
    var n = (h.Router = function (t) {
            (t = t || {}).routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
        }),
        o = /:\w+/g,
        f = /\*\w+/g,
        p = /[-[\]{}()+?.,\\^$|#\s]/g;
    l.extend(n.prototype, i, {
        initialize: function () {},
        route: function (e, i, s) {
            return (
                h.history || (h.history = new g()),
                l.isRegExp(e) || (e = this._routeToRegExp(e)),
                (s = s || this[i]),
                h.history.route(
                    e,
                    l.bind(function (t) {
                        (t = this._extractParameters(e, t)), s && s.apply(this, t), this.trigger.apply(this, ["route:" + i].concat(t)), h.history.trigger("route", this, i, t);
                    }, this)
                ),
                this
            );
        },
        navigate: function (t, e) {
            h.history.navigate(t, e);
        },
        _bindRoutes: function () {
            if (this.routes) {
                var t,
                    e = [];
                for (t in this.routes) e.unshift([t, this.routes[t]]);
                t = 0;
                for (var i = e.length; t < i; t++) this.route(e[t][0], e[t][1], this[e[t][1]]);
            }
        },
        _routeToRegExp: function (t) {
            return (t = t.replace(p, "\\$&").replace(o, "([^/]+)").replace(f, "(.*?)")), RegExp("^" + t + "$");
        },
        _extractParameters: function (t, e) {
            return t.exec(e).slice(1);
        },
    });
    var g = (h.History = function () {
            (this.handlers = []), l.bindAll(this, "checkUrl");
        }),
        v = /^[#\/]/,
        m = /msie [\w.]+/;
    (g.started = !1),
        l.extend(g.prototype, i, {
            interval: 50,
            getHash: function (t) {
                return (t = (t || window).location.href.match(/#(.*)$/)) ? t[1] : "";
            },
            getFragment: function (t, e) {
                return (
                    null == t && (this._hasPushState || e ? ((t = window.location.pathname), (e = window.location.search) && (t += e)) : (t = this.getHash())),
                    t.indexOf(this.options.root) || (t = t.substr(this.options.root.length)),
                    t.replace(v, "")
                );
            },
            start: function (t) {
                if (g.started) throw Error("Backbone.history has already been started");
                (g.started = !0),
                    (this.options = l.extend({}, { root: "/" }, this.options, t)),
                    (this._wantsHashChange = !1 !== this.options.hashChange),
                    (this._wantsPushState = !!this.options.pushState),
                    (this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState));
                var t = this.getFragment(),
                    e = document.documentMode;
                return (
                    (e = m.exec(navigator.userAgent.toLowerCase()) && (!e || e <= 7)) && ((this.iframe = r('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow), this.navigate(t)),
                    this._hasPushState
                        ? r(window).bind("popstate", this.checkUrl)
                        : this._wantsHashChange && "onhashchange" in window && !e
                        ? r(window).bind("hashchange", this.checkUrl)
                        : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                    (this.fragment = t),
                    (e = (t = window.location).pathname == this.options.root),
                    this._wantsHashChange && this._wantsPushState && !this._hasPushState && !e
                        ? ((this.fragment = this.getFragment(null, !0)), window.location.replace(this.options.root + "#" + this.fragment), !0)
                        : (this._wantsPushState &&
                              this._hasPushState &&
                              e &&
                              t.hash &&
                              ((this.fragment = this.getHash().replace(v, "")), window.history.replaceState({}, document.title, t.protocol + "//" + t.host + this.options.root + this.fragment)),
                          this.options.silent ? void 0 : this.loadUrl())
                );
            },
            stop: function () {
                r(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), (g.started = !1);
            },
            route: function (t, e) {
                this.handlers.unshift({ route: t, callback: e });
            },
            checkUrl: function () {
                var t = this.getFragment();
                if ((t == this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t == this.fragment)) return !1;
                this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash());
            },
            loadUrl: function (t) {
                var e = (this.fragment = this.getFragment(t));
                return l.any(this.handlers, function (t) {
                    if (t.route.test(e)) return t.callback(e), !0;
                });
            },
            navigate: function (t, e) {
                if (!g.started) return !1;
                (e && !0 !== e) || (e = { trigger: e });
                var i = (t || "").replace(v, "");
                this.fragment != i &&
                    (this._hasPushState
                        ? (0 != i.indexOf(this.options.root) && (i = this.options.root + i), (this.fragment = i), window.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i))
                        : this._wantsHashChange
                        ? ((this.fragment = i),
                          this._updateHash(window.location, i, e.replace),
                          this.iframe && i != this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, i, e.replace)))
                        : window.location.assign(this.options.root + t),
                    e.trigger && this.loadUrl(t));
            },
            _updateHash: function (t, e, i) {
                i ? t.replace(t.toString().replace(/(javascript:|#).*$/, "") + "#" + e) : (t.hash = e);
            },
        });
    var _ = (h.View = function (t) {
            (this.cid = l.uniqueId("view")), this._configure(t || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents();
        }),
        y = /^(\S+)\s*(.*)$/,
        b = "model,collection,el,id,attributes,className,tagName".split(",");
    l.extend(_.prototype, i, {
        tagName: "div",
        $: function (t) {
            return this.$el.find(t);
        },
        initialize: function () {},
        render: function () {
            return this;
        },
        remove: function () {
            return this.$el.remove(), this;
        },
        make: function (t, e, i) {
            return (t = document.createElement(t)), e && r(t).attr(e), i && r(t).html(i), t;
        },
        setElement: function (t, e) {
            return this.$el && this.undelegateEvents(), (this.$el = t instanceof r ? t : r(t)), (this.el = this.$el[0]), !1 !== e && this.delegateEvents(), this;
        },
        delegateEvents: function (t) {
            if ((t = t || S(this, "events")))
                for (var e in (this.undelegateEvents(), t)) {
                    var i = t[e];
                    if ((l.isFunction(i) || (i = this[t[e]]), !i)) throw Error('Method "' + t[e] + '" does not exist');
                    var s = (n = e.match(y))[1],
                        n = n[2],
                        i = l.bind(i, this),
                        s = s + (".delegateEvents" + this.cid);
                    "" === n ? this.$el.bind(s, i) : this.$el.delegate(n, s, i);
                }
        },
        undelegateEvents: function () {
            this.$el.unbind(".delegateEvents" + this.cid);
        },
        _configure: function (t) {
            this.options && (t = l.extend({}, this.options, t));
            for (var e = 0, i = b.length; e < i; e++) {
                var s = b[e];
                t[s] && (this[s] = t[s]);
            }
            this.options = t;
        },
        _ensureElement: function () {
            var t;
            this.el ? this.setElement(this.el, !1) : ((t = S(this, "attributes") || {}), this.id && (t.id = this.id), this.className && (t.class = this.className), this.setElement(this.make(this.tagName, t), !1));
        },
    }),
        (d.extend = s.extend = n.extend = _.extend = function (t, e) {
            e = E(this, t, e);
            return (e.extend = this.extend), e;
        });
    var w = { create: "POST", update: "PUT", delete: "DELETE", read: "GET" };
    (h.sync = function (t, e, i) {
        var s = w[t],
            n = { type: s, dataType: "json" };
        return (
            (i = i || {}).url || (n.url = S(e, "url") || k()),
            i.data || !e || ("create" != t && "update" != t) || ((n.contentType = "application/json"), (n.data = JSON.stringify(e.toJSON()))),
            h.emulateJSON && ((n.contentType = "application/x-www-form-urlencoded"), (n.data = n.data ? { model: n.data } : {})),
            !h.emulateHTTP ||
                ("PUT" !== s && "DELETE" !== s) ||
                (h.emulateJSON && (n.data._method = s),
                (n.type = "POST"),
                (n.beforeSend = function (t) {
                    t.setRequestHeader("X-HTTP-Method-Override", s);
                })),
            "GET" === n.type || h.emulateJSON || (n.processData = !1),
            r.ajax(l.extend(n, i))
        );
    }),
        (h.wrapError = function (i, s, n) {
            return function (t, e) {
                (e = t === s ? e : t), i ? i(s, e, n) : s.trigger("error", s, e, n);
            };
        });
    function x() {}
    var E = function (t, e, i) {
            var s =
                e && e.hasOwnProperty("constructor")
                    ? e.constructor
                    : function () {
                          t.apply(this, arguments);
                      };
            return l.extend(s, t), (x.prototype = t.prototype), (s.prototype = new x()), e && l.extend(s.prototype, e), i && l.extend(s, i), ((s.prototype.constructor = s).__super__ = t.prototype), s;
        },
        S = function (t, e) {
            return t && t[e] ? (l.isFunction(t[e]) ? t[e]() : t[e]) : null;
        },
        k = function () {
            throw Error('A "url" property or function must be specified');
        };
}.call(this));
function _typeof(e) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
}
!(function () {
    var r,
        t = Object.prototype.toString;
    Array.isArray =
        Array.isArray ||
        function (e) {
            return "[object Array]" == t.call(e);
        };
    var n,
        i,
        o,
        s = String.prototype.trim;
    o = s
        ? function (e) {
              return null == e ? "" : s.call(e);
          }
        : ((i = /\S/.test(" ") ? ((n = /^[\s\xA0]+/), /[\s\xA0]+$/) : ((n = /^\s+/), /\s+$/)),
          function (e) {
              return null == e ? "" : e.toString().replace(n, "").replace(i, "");
          });
    function a() {}
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
        c = {};
    (a.prototype = {
        otag: "{{",
        ctag: "}}",
        pragmas: {},
        buffer: [],
        pragmas_implemented: { "IMPLICIT-ITERATOR": !0 },
        context: {},
        render: function (e, t, n, r) {
            if ((r || ((this.context = t), (this.buffer = [])), this.includes("", e))) {
                e = this.render_pragmas(e);
                var i = this.render_section(e, t, n);
                if ((!1 === i && (i = this.render_tags(e, t, n, r)), r)) return i;
                this.sendLines(i);
            } else {
                if (r) return e;
                this.send(e);
            }
        },
        send: function (e) {
            "" !== e && this.buffer.push(e);
        },
        sendLines: function (e) {
            if (e) {
                e = e.split("\n");
                for (var t = 0; t < e.length; t++) this.send(e[t]);
            }
        },
        render_pragmas: function (e) {
            if (!this.includes("%", e)) return e;
            var r = this,
                t = this.getCachedRegex("render_pragmas", function (e, t) {
                    return RegExp(e + "%([\\w-]+) ?([\\w]+=[\\w]+)?" + t, "g");
                });
            return e.replace(t, function (e, t, n) {
                if (!r.pragmas_implemented[t]) throw { message: "This implementation of mustache doesn't understand the '" + t + "' pragma" };
                return (r.pragmas[t] = {}), n && ((e = n.split("=")), (r.pragmas[t][e[0]] = e[1])), "";
            });
        },
        render_partial: function (e, t, n) {
            if (((e = o(e)), !n || void 0 === n[e])) throw { message: "unknown_partial '" + e + "'" };
            return t && "object" == _typeof(t[e]) ? this.render(n[e], t[e], n, !0) : this.render(n[e], t, n, !0);
        },
        render_section: function (e, a, c) {
            if (!this.includes("#", e) && !this.includes("^", e)) return !1;
            var u = this,
                t = this.getCachedRegex("render_section", function (e, t) {
                    return RegExp("^([\\s\\S]*?)" + e + "(\\^|\\#)\\s*(.+)\\s*" + t + "\n*([\\s\\S]*?)" + e + "\\/\\s*\\3\\s*" + t + "\\s*([\\s\\S]*)$", "g");
                });
            return e.replace(t, function (e, t, n, r, i, o) {
                var s;
                return (
                    (e = t ? u.render_tags(t, a, c, !0) : ""),
                    (o = o ? u.render(o, a, c, !0) : ""),
                    (r = u.find(r, a)),
                    "^" === n
                        ? (s = !r || (Array.isArray(r) && 0 === r.length) ? u.render(i, a, c, !0) : "")
                        : "#" === n &&
                          (s = Array.isArray(r)
                              ? u
                                    .map(r, function (e) {
                                        return u.render(i, u.create_context(e), c, !0);
                                    })
                                    .join("")
                              : u.is_object(r)
                              ? u.render(i, u.create_context(r), c, !0)
                              : "function" == typeof r
                              ? r.call(a, i, function (e) {
                                    return u.render(e, a, c, !0);
                                })
                              : r
                              ? u.render(i, a, c, !0)
                              : ""),
                    e + s + o
                );
            });
        },
        render_tags: function (e, r, i, t) {
            function o() {
                return s.getCachedRegex("render_tags", function (e, t) {
                    return RegExp(e + "(=|!|>|&|\\{|%)?([^#\\^]+?)\\1?" + t + "+", "g");
                });
            }
            function n(e, t, n) {
                switch (t) {
                    case "!":
                        return "";
                    case "=":
                        return s.set_delimiters(n), (a = o()), "";
                    case ">":
                        return s.render_partial(n, r, i);
                    case "{":
                    case "&":
                        return s.find(n, r);
                    default:
                        return (
                            (e = s.find(n, r)),
                            String(e).replace(/&(?!\w+;)|[<>"']/g, function (e) {
                                return u[e] || e;
                            })
                        );
                }
            }
            var s = this,
                a = o();
            e = e.split("\n");
            for (var c = 0; c < e.length; c++) (e[c] = e[c].replace(a, n, this)), t || this.send(e[c]);
            if (t) return e.join("\n");
        },
        set_delimiters: function (e) {
            (e = e.split(" ")), (this.otag = this.escape_regex(e[0])), (this.ctag = this.escape_regex(e[1]));
        },
        escape_regex: function (e) {
            return arguments.callee.sRE || (arguments.callee.sRE = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g")), e.replace(arguments.callee.sRE, "\\$1");
        },
        find: function (e, t) {
            var n, r;
            return (
                (e = o(e)).match(/([a-z_]+)\./gi)
                    ? (!1 !== (r = this.walk_context(e, t)) && 0 !== r && !r) || (n = r)
                    : !1 === t[e] || 0 === t[e] || t[e]
                    ? (n = t[e])
                    : (!1 !== this.context[e] && 0 !== this.context[e] && !this.context[e]) || (n = this.context[e]),
                "function" == typeof n ? n.apply(t) : void 0 !== n ? n : ""
            );
        },
        walk_context: function (e, t) {
            for (var n = e.split("."), r = null != t[n[0]] ? t : this.context, i = r[n.shift()]; null != i && 0 < n.length; ) i = (r = i)[n.shift()];
            return "function" == typeof i ? i.apply(r) : i;
        },
        includes: function (e, t) {
            return -1 != t.indexOf(this.otag + e);
        },
        create_context: function (e) {
            if (this.is_object(e)) return e;
            var t = ".";
            this.pragmas["IMPLICIT-ITERATOR"] && (t = this.pragmas["IMPLICIT-ITERATOR"].iterator);
            var n = {};
            return (n[t] = e), n;
        },
        is_object: function (e) {
            return e && "object" == _typeof(e);
        },
        map: function (e, t) {
            if ("function" == typeof e.map) return e.map(t);
            for (var n = [], r = e.length, i = 0; i < r; i++) n.push(t(e[i]));
            return n;
        },
        getCachedRegex: function (e, t) {
            var n = c[this.otag],
                r = (n = n || (c[this.otag] = {}))[this.ctag];
            return (n = (r = r || (n[this.ctag] = {}))[e]) || (n = r[e] = t(this.otag, this.ctag)), n;
        },
    }),
        (r = {
            name: "mustache.js",
            version: "0.4.0",
            to_html: function (e, t, n, r) {
                var i = new a();
                if ((r && (i.send = r), i.render(e, t || {}, n), !r)) return i.buffer.join("\n");
            },
        }),
        (function () {
            function o(e) {
                return "".trim ? e.trim() : e.replace(/^\s+/, "").replace(/\s+$/, "");
            }
            var s = {
                VERSION: "0.10.2",
                templates: {},
                $: ("undefined" != typeof window && (window.jQuery || window.Zepto)) || null,
                addTemplate: function (n, e) {
                    if ("object" === _typeof(n)) for (var t in n) this.addTemplate(t, n[t]);
                    else
                        s[n]
                            ? console.error("Invalid name: " + n + ".")
                            : s.templates[n]
                            ? console.error('Template "' + n + '  " exists')
                            : ((s.templates[n] = e),
                              (s[n] = function (e, t) {
                                  e = e || {};
                                  e = r.to_html(s.templates[n], e, s.templates);
                                  return s.$ && !t ? s.$(o(e)) : e;
                              }));
                },
                clearAll: function () {
                    for (var e in s.templates) delete s[e];
                    s.templates = {};
                },
                refresh: function () {
                    s.clearAll(), s.grabTemplates();
                },
                grabTemplates: function () {
                    for (var e, t = document.getElementsByTagName("script"), n = [], r = 0, i = t.length; r < i; r++)
                        (e = t[r]) && e.innerHTML && e.id && ("text/html" === e.type || "text/x-icanhaz" === e.type) && (s.addTemplate(e.id, o(e.innerHTML)), n.unshift(e));
                    for (r = 0, i = n.length; r < i; r++) n[r].parentNode.removeChild(n[r]);
                },
            };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), (exports.ich = s)) : (this.ich = s),
                "undefined" != typeof document &&
                    (s.$
                        ? s.$(function () {
                              s.grabTemplates();
                          })
                        : document.addEventListener(
                              "DOMContentLoaded",
                              function () {
                                  s.grabTemplates();
                              },
                              !0
                          ));
        })();
})();
(window.btoa && window.atob) ||
    (function () {
        var t = "undefined" != typeof exports ? exports : this,
            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function c(t) {
            this.message = t;
        }
        ((c.prototype = new Error()).name = "InvalidCharacterError"),
            t.btoa ||
                (t.btoa = function (t) {
                    for (var e, o, r = 0, n = i, a = ""; t.charAt(0 | r) || ((n = "="), r % 1); a += n.charAt(63 & (e >> (8 - (r % 1) * 8)))) {
                        if (255 < (o = t.charCodeAt((r += 0.75)))) throw new c("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                        e = (e << 8) | o;
                    }
                    return a;
                }),
            t.atob ||
                (t.atob = function (t) {
                    if ((t = t.replace(/=+$/, "")).length % 4 == 1) throw new c("'atob' failed: The string to be decoded is not correctly encoded.");
                    for (var e, o, r = 0, n = 0, a = ""; (o = t.charAt(n++)); ~o && ((e = r % 4 ? 64 * e + o : o), r++ % 4) && (a += String.fromCharCode(255 & (e >> ((-2 * r) & 6))))) o = i.indexOf(o);
                    return a;
                });
    })();
