import {
    S as ue,
    i as fe,
    s as he,
    k as w,
    a as q,
    q as G,
    l as k,
    m as E,
    h as v,
    c as N,
    r as J,
    n as b,
    b as z,
    G as c,
    H as oe,
    Z as ne,
    u as K,
    f as F,
    g as re,
    d as ie,
    J as de,
    K as _e,
    t as M,
    a5 as ce,
    E as W,
    Y as ve,
    o as me,
    e as X,
    _ as ge,
    v as pe,
    w as be,
    p as x,
    x as we,
    y as ke,
    A as Ee
} from "./index-a80b06f5.js";
import {
    Y as Ie
} from "./runtime.esm-0af339e4.js";
import {
    e as ye
} from "./outfits-eb53be92.js";
import {
    p as De
} from "./audio-6d737711.js";
import {
    I as Ve
} from "./Icon-2b2a573e.js";
import {
    b as $e
} from "./stores-db8fba2f.js";

function ee(a, t, l) {
    const e = a.slice();
    return e[8] = t[l], e
}

function te(a, t, l) {
    const e = a.slice();
    return e[11] = t[l], e
}

function se(a) {
    let t, l, e, o, r, p, V, y, H = a[0][a[8]] + "",
        $, d, m, D = a[1](`shop.item.${a[8]}`) + "",
        O, B, S, C, j, Y;
    o = new Ve({
        props: {
            width: "100%",
            type: a[8]
        }
    });
    let A = Array(a[8] === "stardust" ? 4 : 5),
        _ = [];
    for (let s = 0; s < A.length; s += 1) _[s] = le(te(a, A, s));
    return {
        c() {
            t = w("div"), l = w("div"), e = w("div"), pe(o.$$.fragment), r = q(), p = w("div");
            for (let s = 0; s < _.length; s += 1) _[s].c();
            V = q(), y = w("span"), $ = G(H), d = q(), m = w("div"), O = G(D), B = q(), this.h()
        },
        l(s) {
            t = k(s, "DIV", {
                class: !0
            });
            var g = E(t);
            l = k(g, "DIV", {
                class: !0
            });
            var I = E(l);
            e = k(I, "DIV", {
                class: !0,
                style: !0
            });
            var u = E(e);
            be(o.$$.fragment, u), r = N(u), p = k(u, "DIV", {
                class: !0
            });
            var i = E(p);
            for (let h = 0; h < _.length; h += 1) _[h].l(i);
            i.forEach(v), u.forEach(v), V = N(I), y = k(I, "SPAN", {
                class: !0
            });
            var P = E(y);
            $ = J(P, H), P.forEach(v), I.forEach(v), d = N(g), m = k(g, "DIV", {
                class: !0
            });
            var n = E(m);
            O = J(n, D), n.forEach(v), B = N(g), g.forEach(v), this.h()
        },
        h() {
            b(p, "class", "star svelte-gow6ts"), b(e, "class", "pic svelte-gow6ts"), x(e, "background-image", "url('" + a[2][`${a[8]==="stardust"?4:5}star-bg.webp`] + "')"), b(y, "class", "svelte-gow6ts"), b(l, "class", "body svelte-gow6ts"), b(m, "class", "name svelte-gow6ts"), b(t, "class", S = "item " + a[8] + " svelte-gow6ts")
        },
        m(s, g) {
            z(s, t, g), c(t, l), c(l, e), we(o, e, null), c(e, r), c(e, p);
            for (let I = 0; I < _.length; I += 1) _[I].m(p, null);
            c(l, V), c(l, y), c(y, $), c(t, d), c(t, m), c(m, O), c(t, B), C = !0, j || (Y = oe(t, "click", ne(a[5])), j = !0)
        },
        p(s, g) {
            const I = {};
            if (g & 1 && (I.type = s[8]), o.$set(I), g & 1) {
                A = Array(s[8] === "stardust" ? 4 : 5);
                let u;
                for (u = 0; u < A.length; u += 1) {
                    const i = te(s, A, u);
                    _[u] ? _[u].p(i, g) : (_[u] = le(), _[u].c(), _[u].m(p, null))
                }
                for (; u < _.length; u += 1) _[u].d(1);
                _.length = A.length
            }(!C || g & 5) && x(e, "background-image", "url('" + s[2][`${s[8]==="stardust"?4:5}star-bg.webp`] + "')"), (!C || g & 1) && H !== (H = s[0][s[8]] + "") && K($, H), (!C || g & 3) && D !== (D = s[1](`shop.item.${s[8]}`) + "") && K(O, D), (!C || g & 1 && S !== (S = "item " + s[8] + " svelte-gow6ts")) && b(t, "class", S)
        },
        i(s) {
            C || (F(o.$$.fragment, s), C = !0)
        },
        o(s) {
            M(o.$$.fragment, s), C = !1
        },
        d(s) {
            s && v(t), ke(o), ce(_, s), j = !1, Y()
        }
    }
}

function le(a) {
    let t;
    return {
        c() {
            t = w("i"), this.h()
        },
        l(l) {
            t = k(l, "I", {
                class: !0
            }), E(t).forEach(v), this.h()
        },
        h() {
            b(t, "class", "gi-star svelte-gow6ts")
        },
        m(l, e) {
            z(l, t, e)
        },
        p: Ee,
        d(l) {
            l && v(t)
        }
    }
}

function ae(a) {
    let t, l, e = a[0][a[8]] > 0 && se(a);
    return {
        c() {
            e && e.c(), t = X()
        },
        l(o) {
            e && e.l(o), t = X()
        },
        m(o, r) {
            e && e.m(o, r), z(o, t, r), l = !0
        },
        p(o, r) {
            o[0][o[8]] > 0 ? e ? (e.p(o, r), r & 1 && F(e, 1)) : (e = se(o), e.c(), F(e, 1), e.m(t.parentNode, t)) : e && (re(), M(e, 1, 1, () => {
                e = null
            }), ie())
        },
        i(o) {
            l || (F(e), l = !0)
        },
        o(o) {
            M(e), l = !1
        },
        d(o) {
            e && e.d(o), o && v(t)
        }
    }
}

function Oe(a) {
    let t, l, e, o, r, p, V = a[1]("obtained") + "",
        y, H, $, d, m, D = a[1]("extra") + "",
        O, B, S, C, j, Y = a[1]("pressToContinue") + "",
        A, _, s, g, I, u = Object.keys(a[0]),
        i = [];
    for (let n = 0; n < u.length; n += 1) i[n] = ae(ee(a, u, n));
    const P = n => M(i[n], 1, 1, () => {
        i[n] = null
    });
    return {
        c() {
            t = w("section"), l = w("div"), e = w("div"), o = q(), r = w("div"), p = w("h3"), y = G(V), H = q(), $ = w("i"), d = q(), m = w("h4"), O = G(D), B = q(), S = w("div");
            for (let n = 0; n < i.length; n += 1) i[n].c();
            C = q(), j = w("h4"), A = G(Y), this.h()
        },
        l(n) {
            t = k(n, "SECTION", {
                class: !0
            });
            var h = E(t);
            l = k(h, "DIV", {
                class: !0
            });
            var f = E(l);
            e = k(f, "DIV", {
                class: !0
            }), E(e).forEach(v), o = N(f), r = k(f, "DIV", {
                class: !0
            });
            var T = E(r);
            p = k(T, "H3", {
                class: !0
            });
            var Z = E(p);
            y = J(Z, V), H = N(Z), $ = k(Z, "I", {
                class: !0
            }), E($).forEach(v), Z.forEach(v), d = N(T), m = k(T, "H4", {
                class: !0
            });
            var Q = E(m);
            O = J(Q, D), Q.forEach(v), B = N(T), S = k(T, "DIV", {
                class: !0
            });
            var R = E(S);
            for (let L = 0; L < i.length; L += 1) i[L].l(R);
            R.forEach(v), C = N(T), j = k(T, "H4", {
                class: !0
            });
            var U = E(j);
            A = J(U, Y), U.forEach(v), T.forEach(v), f.forEach(v), h.forEach(v), this.h()
        },
        h() {
            b(e, "class", "bg svelte-gow6ts"), b($, "class", "gi-primo-star svelte-gow6ts"), b(p, "class", "title svelte-gow6ts"), b(m, "class", "svelte-gow6ts"), b(S, "class", "milestone svelte-gow6ts"), b(j, "class", "msg svelte-gow6ts"), b(r, "class", "content svelte-gow6ts"), b(l, "class", "container svelte-gow6ts"), b(t, "class", "svelte-gow6ts")
        },
        m(n, h) {
            z(n, t, h), c(t, l), c(l, e), c(l, o), c(l, r), c(r, p), c(p, y), c(p, H), c(p, $), c(r, d), c(r, m), c(m, O), c(r, B), c(r, S);
            for (let f = 0; f < i.length; f += 1) i[f].m(S, null);
            c(r, C), c(r, j), c(j, A), s = !0, g || (I = oe(t, "click", ne(a[3])), g = !0)
        },
        p(n, [h]) {
            if ((!s || h & 2) && V !== (V = n[1]("obtained") + "") && K(y, V), (!s || h & 2) && D !== (D = n[1]("extra") + "") && K(O, D), h & 7) {
                u = Object.keys(n[0]);
                let f;
                for (f = 0; f < u.length; f += 1) {
                    const T = ee(n, u, f);
                    i[f] ? (i[f].p(T, h), F(i[f], 1)) : (i[f] = ae(T), i[f].c(), F(i[f], 1), i[f].m(S, null))
                }
                for (re(), f = u.length; f < i.length; f += 1) P(f);
                ie()
            }(!s || h & 2) && Y !== (Y = n[1]("pressToContinue") + "") && K(A, Y)
        },
        i(n) {
            if (!s) {
                for (let h = 0; h < u.length; h += 1) F(i[h]);
                _ || de(() => {
                    _ = _e(r, a[4], {
                        duration: 200
                    }), _.start()
                }), s = !0
            }
        },
        o(n) {
            i = i.filter(Boolean);
            for (let h = 0; h < i.length; h += 1) M(i[h]);
            s = !1
        },
        d(n) {
            n && v(t), ce(i, n), g = !1, I()
        }
    }
}

function Se(a, t, l) {
    let e, o;
    W(a, Ie, d => l(1, e = d)), W(a, $e, d => l(2, o = d));
    let {
        items: r = {
            genesis: 0,
            intertwined: 0,
            acquaint: 0,
            primogem: 0,
            starglitter: 0,
            stardust: 0
        }
    } = t;
    const p = ve(),
        V = () => {
            p("close")
        },
        y = () => Object.keys(r).reduce((d, m) => d + r[m], 0);
    me(() => {
        if (y() < 1) return V();
        De("obtain")
    });

    function H(d, m) {
        const D = getComputedStyle(d).transform.replace("none", "");
        return {
            delay: m.delay || 0,
            duration: m.duration || 400,
            easing: m.easing || ye,
            css: O => `transform: ${D} scale(${O}); opacity: ${O};`
        }
    }

    function $(d) {
        ge.call(this, a, d)
    }
    return a.$$set = d => {
        "items" in d && l(0, r = d.items)
    }, [r, e, o, V, H, $]
}
class Ne extends ue {
    constructor(t) {
        super(), fe(this, t, Se, Oe, he, {
            items: 0
        })
    }
}
export {
    Ne as
    default
};