import {
    S as j,
    i as A,
    s as F,
    e as B,
    b as T,
    A as G,
    h as m,
    E as N,
    F as O,
    k as f,
    a as I,
    q as Q,
    l as _,
    m as k,
    c as W,
    r as Y,
    n as o,
    N as R,
    G as r,
    H as Z,
    Z as z,
    u as J
} from "./index-a80b06f5.js";
import {
    Y as K
} from "./runtime.esm-0af339e4.js";
import {
    a as P,
    h as U
} from "./localstore-babdf033.js";
import {
    b as X,
    j as x
} from "./stores-db8fba2f.js";

function S(t) {
    let a, e, s, i, n, h, c, b, q, p, l = t[3]("shop.recomended.claimingBlessing") + "",
        v, D, g, y = t[3]("shop.recomended.dayRemaining", {
            values: {
                days: `<span>${t[1]}</span>`
            }
        }) + "",
        H, C;
    return {
        c() {
            a = f("section"), e = f("div"), s = f("div"), i = I(), n = f("div"), h = f("div"), c = f("img"), q = I(), p = f("h3"), v = Q(l), D = I(), g = f("h4"), this.h()
        },
        l(d) {
            a = _(d, "SECTION", {
                class: !0
            });
            var u = k(a);
            e = _(u, "DIV", {
                class: !0
            });
            var E = k(e);
            s = _(E, "DIV", {
                class: !0
            }), k(s).forEach(m), i = W(E), n = _(E, "DIV", {
                class: !0
            });
            var w = k(n);
            h = _(w, "DIV", {
                class: !0
            });
            var M = k(h);
            c = _(M, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), M.forEach(m), q = W(w), p = _(w, "H3", {
                class: !0
            });
            var V = k(p);
            v = Y(V, l), V.forEach(m), D = W(w), g = _(w, "H4", {
                class: !0
            });
            var L = k(g);
            L.forEach(m), w.forEach(m), E.forEach(m), u.forEach(m), this.h()
        },
        h() {
            o(s, "class", "bg svelte-a1cqc7"), R(c.src, b = t[2]["welkin-moon-girl.webp"]) || o(c, "src", b), o(c, "alt", "Welkin Moon Girl"), o(c, "class", "svelte-a1cqc7"), o(h, "class", "milestone svelte-a1cqc7"), o(p, "class", "title svelte-a1cqc7"), o(g, "class", "msg svelte-a1cqc7"), o(n, "class", "content svelte-a1cqc7"), o(e, "class", "container svelte-a1cqc7"), o(a, "class", "svelte-a1cqc7")
        },
        m(d, u) {
            T(d, a, u), r(a, e), r(e, s), r(e, i), r(e, n), r(n, h), r(h, c), r(n, q), r(n, p), r(p, v), r(n, D), r(n, g), g.innerHTML = y, H || (C = Z(a, "click", z(t[4])), H = !0)
        },
        p(d, u) {
            u & 4 && !R(c.src, b = d[2]["welkin-moon-girl.webp"]) && o(c, "src", b), u & 8 && l !== (l = d[3]("shop.recomended.claimingBlessing") + "") && J(v, l), u & 10 && y !== (y = d[3]("shop.recomended.dayRemaining", {
                values: {
                    days: `<span>${d[1]}</span>`
                }
            }) + "") && (g.innerHTML = y)
        },
        d(d) {
            d && m(a), H = !1, C()
        }
    }
}

function $(t) {
    let a, e = t[0] && S(t);
    return {
        c() {
            e && e.c(), a = B()
        },
        l(s) {
            e && e.l(s), a = B()
        },
        m(s, i) {
            e && e.m(s, i), T(s, a, i)
        },
        p(s, [i]) {
            s[0] ? e ? e.p(s, i) : (e = S(s), e.c(), e.m(a.parentNode, a)) : e && (e.d(1), e = null)
        },
        i: G,
        o: G,
        d(s) {
            e && e.d(s), s && m(a)
        }
    }
}

function ee(t, a, e) {
    let s, i;
    N(t, X, l => e(2, s = l)), N(t, K, l => e(3, i = l));
    let {
        show: n
    } = a;
    const h = O("closeWelkin"),
        c = O("handleObtained"),
        b = () => {
            h(), x.update(l => {
                const v = l + 8e3;
                return P.set("primogem", v), v
            }), c("primogem", 8e3)
        };
    let q;
    const p = l => {
        e(1, q = U.getData().remaining)
    };
    return t.$$set = l => {
        "show" in l && e(0, n = l.show)
    }, t.$$.update = () => {
        t.$$.dirty & 1 && p()
    }, [n, q, s, i, b]
}
class ne extends j {
    constructor(a) {
        super(), A(this, a, ee, $, F, {
            show: 0
        })
    }
}
export {
    ne as
    default
};