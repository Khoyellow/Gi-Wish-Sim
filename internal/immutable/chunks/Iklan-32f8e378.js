import {
    S,
    i as C,
    s as E,
    a as y,
    e as d,
    c as v,
    b as n,
    A as o,
    h as a,
    E as x,
    k as _,
    l as u,
    m as b,
    n as p,
    N as m
} from "./index-a80b06f5.js";
import {
    i as P
} from "./stores-db8fba2f.js";
const k = !1;

function j(f) {
    return {
        c: o,
        l: o,
        m: o,
        d: o
    }
}

function I(f) {
    let c, s;

    function r(e, l) {
        return e[2] ? w : (c == null && (c = !!window.location.href.includes("archon")), c ? T : R)
    }
    let t = r(f),
        i = t(f);
    return {
        c() {
            i.c(), s = d()
        },
        l(e) {
            i.l(e), s = d()
        },
        m(e, l) {
            i.m(e, l), n(e, s, l)
        },
        p(e, l) {
            t !== (t = r(e)) && (i.d(1), i = t(e), i && (i.c(), i.m(s.parentNode, s)))
        },
        d(e) {
            i.d(e), e && a(s)
        }
    }
}

function R(f) {
    let c, s, r, t, i;
    return {
        c() {
            c = _("script"), r = y(), t = _("script"), this.h()
        },
        l(e) {
            c = u(e, "SCRIPT", {
                type: !0,
                src: !0
            });
            var l = b(c);
            l.forEach(a), r = v(e), t = u(e, "SCRIPT", {
                type: !0,
                src: !0
            });
            var h = b(t);
            h.forEach(a), this.h()
        },
        h() {
            p(c, "type", "text/javascript"), m(c.src, s = "//pl17416355.profitablecpmgate.com/3e/70/98/3e7098724a8a6321d737e1bd39d9ffed.js") || p(c, "src", s), p(t, "type", "text/javascript"), m(t.src, i = "//pl17419889.profitablecpmgate.com/fb/35/45/fb3545e433a3f40f53c83f80f24037ec.js") || p(t, "src", i)
        },
        m(e, l) {
            n(e, c, l), n(e, r, l), n(e, t, l)
        },
        d(e) {
            e && a(c), e && a(r), e && a(t)
        }
    }
}

function T(f) {
    let c, s, r, t, i;
    return {
        c() {
            c = _("script"), r = y(), t = _("script"), this.h()
        },
        l(e) {
            c = u(e, "SCRIPT", {
                type: !0,
                src: !0
            });
            var l = b(c);
            l.forEach(a), r = v(e), t = u(e, "SCRIPT", {
                type: !0,
                src: !0
            });
            var h = b(t);
            h.forEach(a), this.h()
        },
        h() {
            p(c, "type", "text/javascript"), m(c.src, s = "//pl18093985.highperformancecpmgate.com/13/89/0b/13890b0e6b21eeaba5b7b7c6b418a07d.js") || p(c, "src", s), p(t, "type", "text/javascript"), m(t.src, i = "//pl18094041.highperformancecpmgate.com/7b/81/e9/7b81e914bf27791f4b7aa4ec7b0b352b.js") || p(t, "src", i)
        },
        m(e, l) {
            n(e, c, l), n(e, r, l), n(e, t, l)
        },
        d(e) {
            e && a(c), e && a(r), e && a(t)
        }
    }
}

function w(f) {
    let c, s;
    return {
        c() {
            c = _("script"), this.h()
        },
        l(r) {
            c = u(r, "SCRIPT", {
                "data-cfasync": !0,
                type: !0,
                "data-adel": !0,
                src: !0,
                czid: !0
            });
            var t = b(c);
            t.forEach(a), this.h()
        },
        h() {
            p(c, "data-cfasync", "false"), p(c, "type", "text/javascript"), p(c, "data-adel", "atag"), m(c.src, s = "//acacdn.com/script/atg.js") || p(c, "src", s), p(c, "czid", "v1xd6wvvpe")
        },
        m(r, t) {
            n(r, c, t)
        },
        d(r) {
            r && a(c)
        }
    }
}

function N(f) {
    let c, s, r = f[0] === "banner" && j(),
        t = f[1] && !k && I(f);
    return {
        c() {
            r && r.c(), c = y(), t && t.c(), s = d()
        },
        l(i) {
            r && r.l(i), c = v(i), t && t.l(i), s = d()
        },
        m(i, e) {
            r && r.m(i, e), n(i, c, e), t && t.m(i, e), n(i, s, e)
        },
        p(i, [e]) {
            i[0] === "banner" ? r || (r = j(), r.c(), r.m(c.parentNode, c)) : r && (r.d(1), r = null), i[1] && !k ? t ? t.p(i, e) : (t = I(i), t.c(), t.m(s.parentNode, s)) : t && (t.d(1), t = null)
        },
        i: o,
        o,
        d(i) {
            r && r.d(i), i && a(c), t && t.d(i), i && a(s)
        }
    }
}

function q(f, c, s) {
    let r;
    x(f, P, e => s(2, r = e));
    let {
        type: t = ""
    } = c, {
        head: i = !1
    } = c;
    return f.$$set = e => {
        "type" in e && s(0, t = e.type), "head" in e && s(1, i = e.head)
    }, [t, i, r]
}
class A extends S {
    constructor(c) {
        super(), C(this, c, q, N, E, {
            type: 0,
            head: 1
        })
    }
}
export {
    A as I
};