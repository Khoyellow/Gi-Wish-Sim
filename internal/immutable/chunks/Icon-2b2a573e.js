import {
    S as g,
    i as k,
    s as v,
    e as w,
    b as _,
    A as b,
    h as c,
    E as I,
    k as f,
    l as o,
    m as p,
    n as a,
    p as u,
    G as q,
    N as y
} from "./index-a80b06f5.js";
import {
    b as E
} from "./stores-db8fba2f.js";

function N(l) {
    let e, i;
    return {
        c() {
            e = f("div"), i = f("span"), this.h()
        },
        l(s) {
            e = o(s, "DIV", {
                class: !0,
                style: !0
            });
            var t = p(e);
            i = o(t, "SPAN", {
                class: !0
            }), p(i).forEach(c), t.forEach(c), this.h()
        },
        h() {
            a(i, "class", "svelte-xbn8pl"), a(e, "class", "loader-icon svelte-xbn8pl"), u(e, "--width", l[1]), u(e, "width", l[1])
        },
        m(s, t) {
            _(s, e, t), q(e, i)
        },
        p(s, t) {
            t & 2 && u(e, "--width", s[1]), t & 2 && u(e, "width", s[1])
        },
        d(s) {
            s && c(e)
        }
    }
}

function S(l) {
    let e, i;
    return {
        c() {
            e = f("img"), this.h()
        },
        l(s) {
            e = o(s, "IMG", {
                src: !0,
                alt: !0,
                width: !0,
                height: !0,
                style: !0
            }), this.h()
        },
        h() {
            y(e.src, i = l[4][l[0]]) || a(e, "src", i), a(e, "alt", l[0]), a(e, "width", l[1]), a(e, "height", l[2]), a(e, "style", l[3])
        },
        m(s, t) {
            _(s, e, t)
        },
        p(s, t) {
            t & 17 && !y(e.src, i = s[4][s[0]]) && a(e, "src", i), t & 1 && a(e, "alt", s[0]), t & 2 && a(e, "width", s[1]), t & 4 && a(e, "height", s[2]), t & 8 && a(e, "style", s[3])
        },
        d(s) {
            s && c(e)
        }
    }
}

function A(l) {
    let e;

    function i(n, h) {
        return n[0] !== "loader" ? S : N
    }
    let s = i(l),
        t = s(l);
    return {
        c() {
            t.c(), e = w()
        },
        l(n) {
            t.l(n), e = w()
        },
        m(n, h) {
            t.m(n, h), _(n, e, h)
        },
        p(n, [h]) {
            s === (s = i(n)) && t ? t.p(n, h) : (t.d(1), t = s(n), t && (t.c(), t.m(e.parentNode, e)))
        },
        i: b,
        o: b,
        d(n) {
            t.d(n), n && c(e)
        }
    }
}

function G(l, e, i) {
    let s, t;
    I(l, E, r => i(5, t = r));
    let {
        type: n = ""
    } = e, {
        width: h = "20px"
    } = e, {
        height: m = "auto"
    } = e, {
        style: d = ""
    } = e;
    return l.$$set = r => {
        "type" in r && i(0, n = r.type), "width" in r && i(1, h = r.width), "height" in r && i(2, m = r.height), "style" in r && i(3, d = r.style)
    }, l.$$.update = () => {
        l.$$.dirty & 32 && i(4, s = {
            acquaint: t["acquaint-fate.webp"],
            intertwined: t["intertwined-fate.webp"],
            stardust: t["masterless-stardust.webp"],
            starglitter: t["masterless-starglitter.webp"],
            primogem: t["primogem.webp"],
            genesis: t["genesis.webp"]
        })
    }, [n, h, m, d, s, t]
}
class M extends g {
    constructor(e) {
        super(), k(this, e, G, A, v, {
            type: 0,
            width: 1,
            height: 2,
            style: 3
        })
    }
}
export {
    M as I
};