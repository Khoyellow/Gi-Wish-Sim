import {
    S as ee,
    i as te,
    s as se,
    a as u,
    k as r,
    q as C,
    M as ae,
    h as l,
    c as m,
    l as o,
    m as n,
    r as S,
    n as a,
    N as le,
    b as Y,
    G as t,
    u as Z,
    A as x,
    E as re,
    F as oe,
    o as ce
} from "../../chunks/index-a80b06f5.js";
import {
    p as ie
} from "../../chunks/stores-7f31061a.js";

function ne(d) {
    let _, b, c, f, $, h, e, y, N, z, W, I, D, M, F, B, L, v, O, T = d[0].status + "",
        A, P, k, q = d[0].error.message + "",
        G, V, E, j, J, p, w, K;
    return document.title = _ = "Error " + d[0].status, {
        c() {
            b = u(), c = r("section"), f = r("img"), h = u(), e = r("div"), y = r("i"), N = u(), z = r("i"), W = u(), I = r("i"), D = u(), M = r("i"), F = u(), B = r("i"), L = u(), v = r("h1"), O = C("Error "), A = C(T), P = u(), k = r("h2"), G = C(q), V = u(), E = r("p"), j = C("We find some problem with the page you're looking for .."), J = u(), p = r("a"), w = r("i"), K = C(" Back To The Beginning .."), this.h()
        },
        l(i) {
            ae('[data-svelte="svelte-h15ndx"]', document.head).forEach(l), b = m(i), c = o(i, "SECTION", {
                class: !0
            });
            var H = n(c);
            f = o(H, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), h = m(H), e = o(H, "DIV", {
                class: !0
            });
            var s = n(e);
            y = o(s, "I", {
                class: !0
            }), n(y).forEach(l), N = m(s), z = o(s, "I", {
                class: !0
            }), n(z).forEach(l), W = m(s), I = o(s, "I", {
                class: !0
            }), n(I).forEach(l), D = m(s), M = o(s, "I", {
                class: !0
            }), n(M).forEach(l), F = m(s), B = o(s, "I", {
                class: !0
            }), n(B).forEach(l), L = m(s), v = o(s, "H1", {
                class: !0
            });
            var Q = n(v);
            O = S(Q, "Error "), A = S(Q, T), Q.forEach(l), P = m(s), k = o(s, "H2", {
                class: !0
            });
            var U = n(k);
            G = S(U, q), U.forEach(l), V = m(s), E = o(s, "P", {
                class: !0
            });
            var X = n(E);
            j = S(X, "We find some problem with the page you're looking for .."), X.forEach(l), J = m(s), p = o(s, "A", {
                href: !0,
                class: !0
            });
            var R = n(p);
            w = o(R, "I", {
                class: !0
            }), n(w).forEach(l), K = S(R, " Back To The Beginning .."), R.forEach(l), s.forEach(l), H.forEach(l), this.h()
        },
        h() {
            a(f, "class", "bg svelte-zkbm4y"), le(f.src, $ = "https://cdn.wishsimulator.app/images/background/bg" + d[1](1, 25) + ".webp") || a(f, "src", $), a(f, "alt", "background"), a(y, "class", "gi-primo-star top-left svelte-zkbm4y"), a(z, "class", "gi-primo-star top-right svelte-zkbm4y"), a(I, "class", "gi-primo-star bottom-left svelte-zkbm4y"), a(M, "class", "gi-primo-star bottom-right svelte-zkbm4y"), a(B, "class", "gi-inazuma icon-bg svelte-zkbm4y"), a(v, "class", "svelte-zkbm4y"), a(k, "class", "svelte-zkbm4y"), a(E, "class", "svelte-zkbm4y"), a(w, "class", "gi-reply svelte-zkbm4y"), a(p, "href", "/"), a(p, "class", "svelte-zkbm4y"), a(e, "class", "container svelte-zkbm4y"), a(c, "class", "svelte-zkbm4y")
        },
        m(i, g) {
            Y(i, b, g), Y(i, c, g), t(c, f), t(c, h), t(c, e), t(e, y), t(e, N), t(e, z), t(e, W), t(e, I), t(e, D), t(e, M), t(e, F), t(e, B), t(e, L), t(e, v), t(v, O), t(v, A), t(e, P), t(e, k), t(k, G), t(e, V), t(e, E), t(E, j), t(e, J), t(e, p), t(p, w), t(p, K)
        },
        p(i, [g]) {
            g & 1 && _ !== (_ = "Error " + i[0].status) && (document.title = _), g & 1 && T !== (T = i[0].status + "") && Z(A, T), g & 1 && q !== (q = i[0].error.message + "") && Z(G, q)
        },
        i: x,
        o: x,
        d(i) {
            i && l(b), i && l(c)
        }
    }
}

function he(d, _, b) {
    let c;
    re(d, ie, h => b(0, c = h));
    const f = (h, e) => (h = Math.ceil(h), e = Math.floor(e), Math.floor(Math.random() * (e - h + 1)) + h),
        $ = oe("isBannerLoaded");
    return ce($), [c, f]
}
class fe extends ee {
    constructor(_) {
        super(), te(this, _, he, ne, se, {})
    }
}
export {
    fe as
    default
};