import {
    S as it,
    i as ct,
    s as ut,
    k as d,
    q as F,
    a as M,
    v as Ve,
    l as m,
    m as g,
    r as $,
    h as _,
    c as H,
    w as Ce,
    n as u,
    b as W,
    G as c,
    x as Se,
    H as pe,
    u as ne,
    f as ee,
    t as oe,
    y as qe,
    E as ge,
    e as Fe,
    F as zt,
    N as Oe,
    p as ue,
    O as ve,
    J as Pe,
    a0 as Gt,
    g as Ke,
    d as Qe,
    a5 as _t,
    C as pt,
    L as ot,
    a1 as jt,
    a2 as xt,
    K as Je,
    I as es,
    o as Yt,
    Y as ts,
    Q as Rt,
    a6 as It,
    ah as ss,
    M as ls,
    Z as rs,
    ai as ns,
    ab as Ft,
    aj as $t,
    ak as Jt,
    P as dt,
    $ as as,
    A as De,
    al as os,
    ae as is,
    af as cs
} from "./index-a80b06f5.js";
import {
    f as Ue,
    b as Kt,
    c as us,
    w as fs
} from "./outfits-eb53be92.js";
import {
    Y as ft
} from "./runtime.esm-0af339e4.js";
import {
    f as hs
} from "./index-80f68401.js";
import {
    g as Ze,
    B as _s,
    S as ps,
    O as ds
} from "./WishListResult-3d7b1182.js";
import {
    o as ms,
    q as vs,
    j as gs,
    h as ys,
    F as bs,
    b as mt,
    d as Qt,
    v as Zt,
    m as ks
} from "./stores-db8fba2f.js";
import {
    b as ws,
    d as Is,
    e as Es,
    I as Ds
} from "./_page-4b5c4f6d.js";
import {
    p as He
} from "./audio-6d737711.js";
import {
    I as nt
} from "./Icon-2b2a573e.js";
import {
    H as Xt
} from "./historyIdb-feead984.js";
import {
    A as Et
} from "./env-51d3792f.js";
import {
    f as at,
    l as Dt
} from "./localstore-babdf033.js";

function Os(t) {
    let e, s = t[1]("inventory.text") + "",
        l, r, n = t[1](t[0]) + "",
        o, i, a, h, p, v, y, O, N, T, V, q, G, A, b, S, I, w, C, B, te, J, j, P, Z, R, ie, he;
    return p = new nt({
        props: {
            height: "70%",
            width: "auto",
            style: "position: absolute; left: 5px;top: 50%; transform: translateY(-50%);",
            type: "intertwined"
        }
    }), T = new nt({
        props: {
            height: "70%",
            width: "auto",
            style: "position: absolute; left: 5px;top: 50%; transform: translateY(-50%);",
            type: "acquaint"
        }
    }), b = new nt({
        props: {
            type: "primogem",
            height: "80%",
            width: "auto",
            style: "position: absolute; left: 5px;top: 50%; transform: translateY(-50%);"
        }
    }), B = new nt({
        props: {
            type: "genesis",
            height: "80%",
            width: "auto",
            style: "position: absolute; left: 5px;top: 50%; transform: translateY(-50%);"
        }
    }), {
        c() {
            e = d("h1"), l = F(s), r = F(" / "), o = F(n), i = M(), a = d("div"), h = d("button"), Ve(p.$$.fragment), v = M(), y = F(t[2]), O = M(), N = d("button"), Ve(T.$$.fragment), V = M(), q = F(t[3]), G = M(), A = d("button"), Ve(b.$$.fragment), S = M(), I = F(t[4]), w = M(), C = d("button"), Ve(B.$$.fragment), te = M(), J = F(t[5]), j = M(), P = d("button"), Z = d("i"), this.h()
        },
        l(E) {
            e = m(E, "H1", {
                class: !0
            });
            var L = g(e);
            l = $(L, s), r = $(L, " / "), o = $(L, n), L.forEach(_), i = H(E), a = m(E, "DIV", {
                class: !0
            });
            var X = g(a);
            h = m(X, "BUTTON", {
                class: !0
            });
            var K = g(h);
            Ce(p.$$.fragment, K), v = H(K), y = $(K, t[2]), K.forEach(_), O = H(X), N = m(X, "BUTTON", {
                class: !0
            });
            var se = g(N);
            Ce(T.$$.fragment, se), V = H(se), q = $(se, t[3]), se.forEach(_), G = H(X), A = m(X, "BUTTON", {
                class: !0
            });
            var ye = g(A);
            Ce(b.$$.fragment, ye), S = H(ye), I = $(ye, t[4]), ye.forEach(_), w = H(X), C = m(X, "BUTTON", {
                class: !0
            });
            var Ie = g(C);
            Ce(B.$$.fragment, Ie), te = H(Ie), J = $(Ie, t[5]), Ie.forEach(_), X.forEach(_), j = H(E), P = m(E, "BUTTON", {
                class: !0
            });
            var Ee = g(P);
            Z = m(Ee, "I", {
                class: !0
            }), g(Z).forEach(_), Ee.forEach(_), this.h()
        },
        h() {
            u(e, "class", "title svelte-x5np8h"), u(h, "class", "intertwined svelte-x5np8h"), u(N, "class", "acquiant svelte-x5np8h"), u(A, "class", "primogem svelte-x5np8h"), u(C, "class", "genesis svelte-x5np8h"), u(a, "class", "budget svelte-x5np8h"), u(Z, "class", "gi-close"), u(P, "class", "close svelte-x5np8h")
        },
        m(E, L) {
            W(E, e, L), c(e, l), c(e, r), c(e, o), W(E, i, L), W(E, a, L), c(a, h), Se(p, h, null), c(h, v), c(h, y), c(a, O), c(a, N), Se(T, N, null), c(N, V), c(N, q), c(a, G), c(a, A), Se(b, A, null), c(A, S), c(A, I), c(a, w), c(a, C), Se(B, C, null), c(C, te), c(C, J), W(E, j, L), W(E, P, L), c(P, Z), R = !0, ie || (he = pe(P, "click", t[6]), ie = !0)
        },
        p(E, [L]) {
            (!R || L & 2) && s !== (s = E[1]("inventory.text") + "") && ne(l, s), (!R || L & 3) && n !== (n = E[1](E[0]) + "") && ne(o, n), (!R || L & 4) && ne(y, E[2]), (!R || L & 8) && ne(q, E[3]), (!R || L & 16) && ne(I, E[4]), (!R || L & 32) && ne(J, E[5])
        },
        i(E) {
            R || (ee(p.$$.fragment, E), ee(T.$$.fragment, E), ee(b.$$.fragment, E), ee(B.$$.fragment, E), R = !0)
        },
        o(E) {
            oe(p.$$.fragment, E), oe(T.$$.fragment, E), oe(b.$$.fragment, E), oe(B.$$.fragment, E), R = !1
        },
        d(E) {
            E && _(e), E && _(i), E && _(a), qe(p), qe(T), qe(b), qe(B), E && _(j), E && _(P), ie = !1, he()
        }
    }
}

function Ts(t, e, s) {
    let l, r, n, o, i;
    ge(t, ft, p => s(1, l = p)), ge(t, ms, p => s(2, r = p)), ge(t, vs, p => s(3, n = p)), ge(t, gs, p => s(4, o = p)), ge(t, ys, p => s(5, i = p));
    let {
        activeItem: a = ""
    } = e;
    const h = () => {
        ws.back(), He("close"), bs.set("index")
    };
    return t.$$set = p => {
        "activeItem" in p && s(0, a = p.activeItem)
    }, [a, l, r, n, o, i, h]
}
class As extends it {
    constructor(e) {
        super(), ct(this, e, Ts, Os, ut, {
            activeItem: 0
        })
    }
}

function Ot(t, e, s) {
    const l = t.slice();
    return l[17] = e[s].name, l[18] = e[s].rarity, l[19] = e[s].owned, l
}

function Ns(t) {
    let e, s, l, r, n, o, i, a, h, p, v = t[5]("outfit.default") + "",
        y, O, N, T, V, q, G, A, b = t[7],
        S = [];
    for (let w = 0; w < b.length; w += 1) S[w] = Tt(Ot(t, b, w));
    let I = t[2] && At(t);
    return {
        c() {
            e = d("div"), s = d("div"), l = d("button"), r = d("picture"), n = d("img"), a = M(), h = d("caption"), p = d("span"), y = F(v), N = M();
            for (let w = 0; w < S.length; w += 1) S[w].c();
            T = M(), V = d("div"), I && I.c(), this.h()
        },
        l(w) {
            e = m(w, "DIV", {
                class: !0,
                style: !0
            });
            var C = g(e);
            s = m(C, "DIV", {
                class: !0
            });
            var B = g(s);
            l = m(B, "BUTTON", {
                class: !0
            });
            var te = g(l);
            r = m(te, "PICTURE", {
                class: !0,
                style: !0
            });
            var J = g(r);
            n = m(J, "IMG", {
                src: !0,
                alt: !0,
                crossorigin: !0,
                class: !0
            }), J.forEach(_), a = H(te), h = m(te, "CAPTION", {
                class: !0
            });
            var j = g(h);
            p = m(j, "SPAN", {});
            var P = g(p);
            y = $(P, v), P.forEach(_), j.forEach(_), te.forEach(_), B.forEach(_), N = H(C);
            for (let R = 0; R < S.length; R += 1) S[R].l(C);
            T = H(C), V = m(C, "DIV", {
                class: !0
            });
            var Z = g(V);
            I && I.l(Z), Z.forEach(_), C.forEach(_), this.h()
        },
        h() {
            Oe(n.src, o = t[4][`face/${t[0]}`]) || u(n, "src", o), u(n, "alt", i = Ze(t[0])), u(n, "crossorigin", "anonymous"), u(n, "class", "svelte-16yccyg"), u(r, "class", "star4 svelte-16yccyg"), ue(r, "background-image", "url('" + t[4]["4star-bg.webp"] + "')"), u(h, "class", "svelte-16yccyg"), u(l, "class", "svelte-16yccyg"), ve(l, "selected", !t[1] || t[1] === "default"), u(s, "class", "column svelte-16yccyg"), Pe(() => t[11].call(s)), u(V, "class", "apply svelte-16yccyg"), u(e, "class", "outfit-toggle svelte-16yccyg"), ue(e, "--width", t[3] + "px")
        },
        m(w, C) {
            W(w, e, C), c(e, s), c(s, l), c(l, r), c(r, n), c(l, a), c(l, h), c(h, p), c(p, y), O = Gt(s, t[11].bind(s)), c(e, N);
            for (let B = 0; B < S.length; B += 1) S[B].m(e, null);
            c(e, T), c(e, V), I && I.m(V, null), q = !0, G || (A = [pe(n, "error", Ss), pe(l, "click", t[10])], G = !0)
        },
        p(w, C) {
            if ((!q || C & 17 && !Oe(n.src, o = w[4][`face/${w[0]}`])) && u(n, "src", o), (!q || C & 1 && i !== (i = Ze(w[0]))) && u(n, "alt", i), (!q || C & 16) && ue(r, "background-image", "url('" + w[4]["4star-bg.webp"] + "')"), (!q || C & 32) && v !== (v = w[5]("outfit.default") + "") && ne(y, v), C & 2 && ve(l, "selected", !w[1] || w[1] === "default"), C & 434) {
                b = w[7];
                let B;
                for (B = 0; B < b.length; B += 1) {
                    const te = Ot(w, b, B);
                    S[B] ? S[B].p(te, C) : (S[B] = Tt(te), S[B].c(), S[B].m(e, T))
                }
                for (; B < S.length; B += 1) S[B].d(1);
                S.length = b.length
            }
            w[2] ? I ? (I.p(w, C), C & 4 && ee(I, 1)) : (I = At(w), I.c(), ee(I, 1), I.m(V, null)) : I && (Ke(), oe(I, 1, 1, () => {
                I = null
            }), Qe()), (!q || C & 8) && ue(e, "--width", w[3] + "px")
        },
        i(w) {
            q || (ee(I), q = !0)
        },
        o(w) {
            oe(I), q = !1
        },
        d(w) {
            w && _(e), O(), _t(S, w), I && I.d(), G = !1, pt(A)
        }
    }
}

function Tt(t) {
    let e, s, l, r, n, o, i, a, h = t[5](`outfit.item.${t[17]}.name`) + "",
        p, v, y, O;

    function N() {
        return t[12](t[17])
    }
    return {
        c() {
            e = d("div"), s = d("button"), l = d("picture"), r = d("img"), o = M(), i = d("caption"), a = d("span"), p = F(h), this.h()
        },
        l(T) {
            e = m(T, "DIV", {
                class: !0,
                "data-text": !0
            });
            var V = g(e);
            s = m(V, "BUTTON", {
                class: !0
            });
            var q = g(s);
            l = m(q, "PICTURE", {
                class: !0,
                style: !0
            });
            var G = g(l);
            r = m(G, "IMG", {
                src: !0,
                alt: !0,
                crossorigin: !0,
                class: !0
            }), G.forEach(_), o = H(q), i = m(q, "CAPTION", {
                class: !0
            });
            var A = g(i);
            a = m(A, "SPAN", {});
            var b = g(a);
            p = $(b, h), b.forEach(_), A.forEach(_), q.forEach(_), V.forEach(_), this.h()
        },
        h() {
            Oe(r.src, n = t[4][`face/${t[17]}`]) || u(r, "src", n), u(r, "alt", Ze(t[17])), u(r, "crossorigin", "anonymous"), u(r, "class", "svelte-16yccyg"), u(l, "class", "star" + t[18] + " svelte-16yccyg"), ue(l, "background-image", "url('" + t[4][`${t[18]}star-bg.webp`] + "')"), u(i, "class", "svelte-16yccyg"), u(s, "class", "svelte-16yccyg"), ve(s, "selected", t[17] === t[1]), u(e, "class", "column svelte-16yccyg"), u(e, "data-text", v = t[5]("inventory.notOwned")), ve(e, "disabled", !t[19])
        },
        m(T, V) {
            W(T, e, V), c(e, s), c(s, l), c(l, r), c(s, o), c(s, i), c(i, a), c(a, p), y || (O = [pe(r, "error", qs), pe(s, "click", N)], y = !0)
        },
        p(T, V) {
            t = T, V & 16 && !Oe(r.src, n = t[4][`face/${t[17]}`]) && u(r, "src", n), V & 16 && ue(l, "background-image", "url('" + t[4][`${t[18]}star-bg.webp`] + "')"), V & 32 && h !== (h = t[5](`outfit.item.${t[17]}.name`) + "") && ne(p, h), V & 130 && ve(s, "selected", t[17] === t[1]), V & 32 && v !== (v = t[5]("inventory.notOwned")) && u(e, "data-text", v)
        },
        d(T) {
            T && _(e), y = !1, pt(O)
        }
    }
}

function At(t) {
    let e, s, l, r;
    return s = new _s({
        props: {
            $$slots: {
                default: [Vs]
            },
            $$scope: {
                ctx: t
            }
        }
    }), s.$on("click", t[9]), {
        c() {
            e = d("div"), Ve(s.$$.fragment)
        },
        l(n) {
            e = m(n, "DIV", {});
            var o = g(e);
            Ce(s.$$.fragment, o), o.forEach(_)
        },
        m(n, o) {
            W(n, e, o), Se(s, e, null), r = !0
        },
        p(n, o) {
            const i = {};
            o & 4194336 && (i.$$scope = {
                dirty: o,
                ctx: n
            }), s.$set(i)
        },
        i(n) {
            r || (ee(s.$$.fragment, n), Pe(() => {
                l || (l = ot(e, Ue, {
                    duration: 200
                }, !0)), l.run(1)
            }), r = !0)
        },
        o(n) {
            oe(s.$$.fragment, n), l || (l = ot(e, Ue, {
                duration: 200
            }, !1)), l.run(0), r = !1
        },
        d(n) {
            n && _(e), qe(s), n && l && l.end()
        }
    }
}

function Vs(t) {
    let e = t[5]("outfit.setOutfit") + "",
        s;
    return {
        c() {
            s = F(e)
        },
        l(l) {
            s = $(l, e)
        },
        m(l, r) {
            W(l, s, r)
        },
        p(l, r) {
            r & 32 && e !== (e = l[5]("outfit.setOutfit") + "") && ne(s, e)
        },
        d(l) {
            l && _(s)
        }
    }
}

function Cs(t) {
    let e, s, l = t[6] && Ns(t);
    return {
        c() {
            l && l.c(), e = Fe()
        },
        l(r) {
            l && l.l(r), e = Fe()
        },
        m(r, n) {
            l && l.m(r, n), W(r, e, n), s = !0
        },
        p(r, [n]) {
            r[6] && l.p(r, n)
        },
        i(r) {
            s || (ee(l), s = !0)
        },
        o(r) {
            oe(l), s = !1
        },
        d(r) {
            l && l.d(r), r && _(e)
        }
    }
}
const Ss = t => t.target.remove(),
    qs = t => t.target.remove();

function Bs(t, e, s) {
    let l, r;
    ge(t, mt, b => s(4, l = b)), ge(t, ft, b => s(5, r = b));
    let {
        charName: n
    } = e;
    const {
        outfitList: o
    } = Is(n), i = o.length > 0;
    let a = o.filter(({
        name: b
    }) => at.get(b) ? .isSet)[0] ? .name;
    const h = o.map(b => {
            const S = at.get(b.name);
            return b.owned = !b.version || S, b
        }),
        {
            applyChange: p,
            selectOutfit: v
        } = zt("outfitChanger");
    let y = a,
        O = !1;
    const N = b => {
            y !== b && (s(2, O = a !== b), s(1, y = b), b === "default" && (s(2, O = !!a), b = null), v(b))
        },
        T = () => {
            a && a !== "default" && at.set(a, !1), y !== "default" && at.set(y, !0), a = y, s(2, O = !1), p()
        };
    let V;
    const q = () => N("default");

    function G() {
        V = this.clientWidth, s(3, V)
    }
    const A = b => N(b);
    return t.$$set = b => {
        "charName" in b && s(0, n = b.charName)
    }, [n, y, O, V, l, r, i, h, N, T, q, G, A]
}
class Ms extends it {
    constructor(e) {
        super(), ct(this, e, Bs, Cs, ut, {
            charName: 0
        })
    }
}

function Nt(t, e, s) {
    const l = t.slice();
    return l[19] = e[s], l[21] = s, l
}

function Hs(t) {
    let e, s, l, r, n;
    return {
        c() {
            e = d("img"), this.h()
        },
        l(o) {
            e = m(o, "IMG", {
                src: !0,
                alt: !0,
                class: !0,
                crossorigin: !0
            }), this.h()
        },
        h() {
            Oe(e.src, s = t[11][`splash-art/${t[0]||t[1]}`]) || u(e, "src", s), u(e, "alt", l = Ze(t[1])), u(e, "class", "splash-art svelte-1pcims7"), u(e, "crossorigin", "anonymous")
        },
        m(o, i) {
            W(o, e, i), r || (n = pe(e, "error", Gs), r = !0)
        },
        p(o, i) {
            i & 2051 && !Oe(e.src, s = o[11][`splash-art/${o[0]||o[1]}`]) && u(e, "src", s), i & 2 && l !== (l = Ze(o[1])) && u(e, "alt", l)
        },
        d(o) {
            o && _(e), r = !1, n()
        }
    }
}

function Ps(t) {
    let e, s, l, r, n, o, i;
    return {
        c() {
            e = d("div"), s = d("img"), this.h()
        },
        l(a) {
            e = m(a, "DIV", {
                class: !0
            });
            var h = g(e);
            s = m(h, "IMG", {
                src: !0,
                alt: !0,
                class: !0,
                crossorigin: !0
            }), h.forEach(_), this.h()
        },
        h() {
            Oe(s.src, l = t[11][t[1]]) || u(s, "src", l), u(s, "alt", t[1]), u(s, "class", r = It(t[7]) + " svelte-1pcims7"), u(s, "crossorigin", "anonymous"), u(e, "class", n = "splash-art weapon " + t[7] + "-parent svelte-1pcims7")
        },
        m(a, h) {
            W(a, e, h), c(e, s), o || (i = pe(s, "error", zs), o = !0)
        },
        p(a, h) {
            h & 2050 && !Oe(s.src, l = a[11][a[1]]) && u(s, "src", l), h & 2 && u(s, "alt", a[1]), h & 128 && r !== (r = It(a[7]) + " svelte-1pcims7") && u(s, "class", r), h & 128 && n !== (n = "splash-art weapon " + a[7] + "-parent svelte-1pcims7") && u(e, "class", n)
        },
        d(a) {
            a && _(e), o = !1, i()
        }
    }
}

function Us(t) {
    let e, s;
    return {
        c() {
            e = d("i"), this.h()
        },
        l(l) {
            e = m(l, "I", {
                class: !0
            }), g(e).forEach(_), this.h()
        },
        h() {
            u(e, "class", s = "anim elemen gi-" + t[7] + " svelte-1pcims7")
        },
        m(l, r) {
            W(l, e, r)
        },
        p(l, r) {
            r & 128 && s !== (s = "anim elemen gi-" + l[7] + " svelte-1pcims7") && u(e, "class", s)
        },
        d(l) {
            l && _(e)
        }
    }
}

function Ls(t) {
    let e, s, l, r;
    return {
        c() {
            e = d("img"), this.h()
        },
        l(n) {
            e = m(n, "IMG", {
                src: !0,
                alt: !0,
                class: !0,
                crossorigin: !0
            }), this.h()
        },
        h() {
            Oe(e.src, s = t[11][`icon-${t[6]}.svg`]) || u(e, "src", s), u(e, "alt", l = "Vision " + t[6]), u(e, "class", r = "anim vision filter-drop " + t[6] + " svelte-1pcims7"), u(e, "crossorigin", "anonymous")
        },
        m(n, o) {
            W(n, e, o)
        },
        p(n, o) {
            o & 2112 && !Oe(e.src, s = n[11][`icon-${n[6]}.svg`]) && u(e, "src", s), o & 64 && l !== (l = "Vision " + n[6]) && u(e, "alt", l), o & 64 && r !== (r = "anim vision filter-drop " + n[6] + " svelte-1pcims7") && u(e, "class", r)
        },
        d(n) {
            n && _(e)
        }
    }
}

function Vt(t, e) {
    let s;
    return {
        key: t,
        first: null,
        c() {
            s = d("i"), this.h()
        },
        l(l) {
            s = m(l, "I", {
                class: !0
            }), g(s).forEach(_), this.h()
        },
        h() {
            u(s, "class", "gi-star svelte-1pcims7"), this.first = s
        },
        m(l, r) {
            W(l, s, r)
        },
        p(l, r) {},
        d(l) {
            l && _(s)
        }
    }
}

function Ws(t) {
    let e, s, l, r, n, o, i, a, h, p, v, y, O, N, T, V, q = (t[5] === "weapon" ? t[10](t[1]) : t[10](`${t[1]}.name`)) + "",
        G, A, b, S = [],
        I = new Map,
        w, C, B, te, J, j, P, Z = t[10]("inventory.firstSummon", {
            values: {
                date: t[4]
            }
        }) + "",
        R, ie, he, E, L, X, K, se, ye, Ie;
    h = new Ms({
        props: {
            charName: t[1]
        }
    });

    function Ee(f, k) {
        return f[5] === "weapon" ? Ps : Hs
    }
    let Te = Ee(t),
        de = Te(t);

    function Le(f, k) {
        return f[6] ? Ls : Us
    }
    let Ae = Le(t),
        re = Ae(t),
        _e = Array(t[3]);
    const We = f => f[21];
    for (let f = 0; f < _e.length; f += 1) {
        let k = Nt(t, _e, f),
            D = We(k);
        I.set(D, S[f] = Vt(D))
    }
    return L = new ps({}), {
        c() {
            e = d("div"), s = d("div"), l = d("button"), r = d("i"), n = M(), o = d("div"), i = F("WishSimulator.App"), a = M(), Ve(h.$$.fragment), p = M(), v = d("div"), de.c(), y = M(), O = d("div"), re.c(), N = M(), T = d("div"), V = d("div"), G = F(q), A = M(), b = d("div");
            for (let f = 0; f < S.length; f += 1) S[f].c();
            w = M(), C = d("div"), B = d("span"), te = F(t[8]), J = M(), j = d("span"), P = d("small"), R = F(Z), ie = F(":"), he = M(), E = d("div"), Ve(L.$$.fragment), this.h()
        },
        l(f) {
            e = m(f, "DIV", {
                class: !0,
                style: !0
            });
            var k = g(e);
            s = m(k, "DIV", {
                class: !0
            });
            var D = g(s);
            l = m(D, "BUTTON", {
                class: !0
            });
            var x = g(l);
            r = m(x, "I", {
                class: !0
            }), g(r).forEach(_), x.forEach(_), n = H(D), o = m(D, "DIV", {
                class: !0
            });
            var Y = g(o);
            i = $(Y, "WishSimulator.App"), Y.forEach(_), a = H(D), Ce(h.$$.fragment, D), p = H(D), v = m(D, "DIV", {
                class: !0,
                style: !0
            });
            var ae = g(v);
            de.l(ae), y = H(ae), O = m(ae, "DIV", {
                class: !0
            });
            var we = g(O);
            re.l(we), N = H(we), T = m(we, "DIV", {
                class: !0
            });
            var le = g(T);
            V = m(le, "DIV", {
                class: !0
            });
            var Ne = g(V);
            G = $(Ne, q), Ne.forEach(_), A = H(le), b = m(le, "DIV", {
                class: !0
            });
            var Ge = g(b);
            for (let ze = 0; ze < S.length; ze += 1) S[ze].l(Ge);
            Ge.forEach(_), le.forEach(_), we.forEach(_), ae.forEach(_), w = H(D), C = m(D, "DIV", {
                class: !0
            });
            var Q = g(C);
            B = m(Q, "SPAN", {
                class: !0
            });
            var Be = g(B);
            te = $(Be, t[8]), Be.forEach(_), J = H(Q), j = m(Q, "SPAN", {
                class: !0
            });
            var fe = g(j);
            P = m(fe, "SMALL", {});
            var me = g(P);
            R = $(me, Z), ie = $(me, ":"), me.forEach(_), fe.forEach(_), Q.forEach(_), he = H(D), E = m(D, "DIV", {
                class: !0
            });
            var $e = g(E);
            Ce(L.$$.fragment, $e), $e.forEach(_), D.forEach(_), k.forEach(_), this.h()
        },
        h() {
            u(r, "class", "gi-close"), u(l, "class", "close svelte-1pcims7"), u(o, "class", "uid svelte-1pcims7"), u(V, "class", "text svelte-1pcims7"), u(b, "class", "star"), u(T, "class", "name svelte-1pcims7"), u(O, "class", "info svelte-1pcims7"), u(v, "class", "splatter svelte-1pcims7"), u(v, "style", t[9]), u(B, "class", "count svelte-1pcims7"), u(j, "class", "svelte-1pcims7"), u(C, "class", "detail svelte-1pcims7"), u(E, "class", "share svelte-1pcims7"), u(s, "class", "container svelte-1pcims7"), u(e, "class", "wish-result svelte-1pcims7"), ue(e, "height", t[2] + "px"), ue(e, "background-image", "url(" + t[11]["detailbg.webp"] + ")")
        },
        m(f, k) {
            W(f, e, k), c(e, s), c(s, l), c(l, r), c(s, n), c(s, o), c(o, i), c(s, a), Se(h, s, null), c(s, p), c(s, v), de.m(v, null), c(v, y), c(v, O), re.m(O, null), c(O, N), c(O, T), c(T, V), c(V, G), c(T, A), c(T, b);
            for (let D = 0; D < S.length; D += 1) S[D].m(b, null);
            c(s, w), c(s, C), c(C, B), c(B, te), c(C, J), c(C, j), c(j, P), c(P, R), c(P, ie), c(s, he), c(s, E), Se(L, E, null), se = !0, ye || (Ie = pe(l, "click", t[12]), ye = !0)
        },
        p(f, [k]) {
            const D = {};
            k & 2 && (D.charName = f[1]), h.$set(D), Te === (Te = Ee(f)) && de ? de.p(f, k) : (de.d(1), de = Te(f), de && (de.c(), de.m(v, y))), Ae === (Ae = Le(f)) && re ? re.p(f, k) : (re.d(1), re = Ae(f), re && (re.c(), re.m(O, N))), (!se || k & 1058) && q !== (q = (f[5] === "weapon" ? f[10](f[1]) : f[10](`${f[1]}.name`)) + "") && ne(G, q), k & 8 && (_e = Array(f[3]), S = jt(S, k, We, 1, f, _e, I, b, xt, Vt, null, Nt)), (!se || k & 512) && u(v, "style", f[9]), (!se || k & 256) && ne(te, f[8]), (!se || k & 1040) && Z !== (Z = f[10]("inventory.firstSummon", {
                values: {
                    date: f[4]
                }
            }) + "") && ne(R, Z), (!se || k & 4) && ue(e, "height", f[2] + "px"), (!se || k & 2048) && ue(e, "background-image", "url(" + f[11]["detailbg.webp"] + ")")
        },
        i(f) {
            se || (ee(h.$$.fragment, f), ee(L.$$.fragment, f), Pe(() => {
                K && K.end(1), X = Je(e, Ue, {
                    duration: 200
                }), X.start()
            }), se = !0)
        },
        o(f) {
            oe(h.$$.fragment, f), oe(L.$$.fragment, f), X && X.invalidate(), K = es(e, Ue, {
                duration: 100
            }), se = !1
        },
        d(f) {
            f && _(e), qe(h), de.d(), re.d();
            for (let k = 0; k < S.length; k += 1) S[k].d();
            qe(L), f && K && K.end(), ye = !1, Ie()
        }
    }
}
const zs = t => t.target.remove(),
    Gs = t => t.target.remove();

function js(t, e, s) {
    let l, r, n, o, i, a;
    ge(t, ft, I => s(10, n = I)), ge(t, Qt, I => s(2, o = I)), ge(t, Zt, I => s(14, i = I)), ge(t, mt, I => s(11, a = I));
    let {
        name: h = ""
    } = e, {
        outfit: p = ""
    } = e, v = 0, y = "", O = "", N = "", T = "", V = 0, q = "";
    Yt(async () => {
        if (!h) return;
        const I = await Xt.getByName(h);
        s(4, {
            time: y,
            vision: N,
            type: O,
            weaponType: T,
            rarity: v
        } = I[0], y, s(6, N), s(5, O), s(7, T), s(3, v));
        const w = I.length;
        O === "weapon" ? (q = n("inventory.extra", {
            values: {
                count: `5 + ${w-5}`
            }
        }), s(8, V = n("inventory.refinement", {
            values: {
                count: w > 5 ? q : w
            }
        }))) : (q = n("inventory.extra", {
            values: {
                count: `6 + ${w-7}`
            }
        }), s(8, V = n("inventory.constellation", {
            values: {
                count: w > 7 ? q : w - 1
            }
        })))
    });
    const G = ts(),
        A = () => {
            He("close"), G("close")
        },
        b = zt("refreshList");
    return Rt("outfitChanger", {
        applyChange() {
            b(h, p), He()
        },
        selectOutfit(I) {
            s(0, p = I), He()
        }
    }), t.$$set = I => {
        "name" in I && s(1, h = I.name), "outfit" in I && s(0, p = I.outfit)
    }, t.$$.update = () => {
        t.$$.dirty & 16388 && s(13, l = o > i ? i : o), t.$$.dirty & 8192 && s(9, r = `width: ${l}px; height: ${l}px`)
    }, [p, h, o, v, y, O, N, T, V, r, n, a, A, l, i]
}
class Ys extends it {
    constructor(e) {
        super(), ct(this, e, js, Ws, ut, {
            name: 1,
            outfit: 0
        })
    }
}

function Ct(t, e, s) {
    const l = t.slice();
    return l[46] = e[s], l
}

function St(t, e, s) {
    const l = t.slice();
    return l[50] = e[s], l[52] = s, l
}

function qt(t, e, s) {
    const l = t.slice();
    return l[53] = e[s], l[52] = s, l
}

function Bt(t) {
    let e, s;
    const l = [t[11]];
    let r = {};
    for (let n = 0; n < l.length; n += 1) r = Ft(r, l[n]);
    return e = new Ys({
        props: r
    }), e.$on("close", t[27]), {
        c() {
            Ve(e.$$.fragment)
        },
        l(n) {
            Ce(e.$$.fragment, n)
        },
        m(n, o) {
            Se(e, n, o), s = !0
        },
        p(n, o) {
            const i = o[0] & 2048 ? $t(l, [Jt(n[11])]) : {};
            e.$set(i)
        },
        i(n) {
            s || (ee(e.$$.fragment, n), s = !0)
        },
        o(n) {
            oe(e.$$.fragment, n), s = !1
        },
        d(n) {
            qe(e, n)
        }
    }
}

function Mt(t) {
    let e, s;
    return {
        c() {
            e = d("img"), this.h()
        },
        l(l) {
            e = m(l, "IMG", {
                src: !0,
                alt: !0,
                class: !0,
                crossorigin: !0
            }), this.h()
        },
        h() {
            Oe(e.src, s = t[14][`element-${t[53]}-bg.webp`]) || u(e, "src", s), u(e, "alt", "Background"), u(e, "class", "bg svelte-spo7y6"), u(e, "crossorigin", "anonymous"), ve(e, "active", t[4] === t[52])
        },
        m(l, r) {
            W(l, e, r)
        },
        p(l, r) {
            r[0] & 16384 && !Oe(e.src, s = l[14][`element-${l[53]}-bg.webp`]) && u(e, "src", s), r[0] & 16 && ve(e, "active", l[4] === l[52])
        },
        d(l) {
            l && _(e)
        }
    }
}

function Rs(t) {
    return {
        c: De,
        l: De,
        m: De,
        p: De,
        i: De,
        o: De,
        d: De
    }
}

function Fs(t) {
    let e, s, l, r;
    const n = [Js, $s],
        o = [];

    function i(a, h) {
        return a[9].length < 1 ? 0 : 1
    }
    return e = i(t), s = o[e] = n[e](t), {
        c() {
            s.c(), l = Fe()
        },
        l(a) {
            s.l(a), l = Fe()
        },
        m(a, h) {
            o[e].m(a, h), W(a, l, h), r = !0
        },
        p(a, h) {
            let p = e;
            e = i(a), e === p ? o[e].p(a, h) : (Ke(), oe(o[p], 1, 1, () => {
                o[p] = null
            }), Qe(), s = o[e], s ? s.p(a, h) : (s = o[e] = n[e](a), s.c()), ee(s, 1), s.m(l.parentNode, l))
        },
        i(a) {
            r || (ee(s), r = !0)
        },
        o(a) {
            oe(s), r = !1
        },
        d(a) {
            o[e].d(a), a && _(l)
        }
    }
}

function $s(t) {
    let e = [],
        s = new Map,
        l, r, n = t[9];
    const o = i => i[50];
    for (let i = 0; i < n.length; i += 1) {
        let a = St(t, n, i),
            h = o(a);
        s.set(h, e[i] = Ht(h, a))
    }
    return {
        c() {
            for (let i = 0; i < e.length; i += 1) e[i].c();
            l = Fe()
        },
        l(i) {
            for (let a = 0; a < e.length; a += 1) e[a].l(i);
            l = Fe()
        },
        m(i, a) {
            for (let h = 0; h < e.length; h += 1) e[h].m(i, a);
            W(i, l, a), r = !0
        },
        p(i, a) {
            if (a[0] & 33554944) {
                n = i[9], Ke();
                for (let h = 0; h < e.length; h += 1) e[h].r();
                e = jt(e, a, o, 1, i, n, s, l.parentNode, os, Ht, l, St);
                for (let h = 0; h < e.length; h += 1) e[h].a();
                Qe()
            }
        },
        i(i) {
            if (!r) {
                for (let a = 0; a < n.length; a += 1) ee(e[a]);
                r = !0
            }
        },
        o(i) {
            for (let a = 0; a < e.length; a += 1) oe(e[a]);
            r = !1
        },
        d(i) {
            for (let a = 0; a < e.length; a += 1) e[a].d(i);
            i && _(l)
        }
    }
}

function Js(t) {
    let e, s = t[13]("history.noData") + "",
        l;
    return {
        c() {
            e = d("span"), l = F(s), this.h()
        },
        l(r) {
            e = m(r, "SPAN", {
                style: !0
            });
            var n = g(e);
            l = $(n, s), n.forEach(_), this.h()
        },
        h() {
            ue(e, "color", "white"), ue(e, "padding", "2rem"), ue(e, "font-size", "1.2rem")
        },
        m(r, n) {
            W(r, e, n), c(e, l)
        },
        p(r, n) {
            n[0] & 8192 && s !== (s = r[13]("history.noData") + "") && ne(l, s)
        },
        i: De,
        o: De,
        d(r) {
            r && _(e)
        }
    }
}

function Ht(t, e) {
    let s, l, r, n, o, i = De,
        a;
    const h = [e[50]];
    let p = {};
    for (let v = 0; v < h.length; v += 1) p = Ft(p, h[v]);
    return l = new Ds({
        props: p
    }), l.$on("click", e[25]), {
        key: t,
        first: null,
        c() {
            s = d("div"), Ve(l.$$.fragment), r = M(), this.h()
        },
        l(v) {
            s = m(v, "DIV", {
                class: !0
            });
            var y = g(s);
            Ce(l.$$.fragment, y), r = H(y), y.forEach(_), this.h()
        },
        h() {
            u(s, "class", "item svelte-spo7y6"), this.first = s
        },
        m(v, y) {
            W(v, s, y), Se(l, s, null), c(s, r), a = !0
        },
        p(v, y) {
            e = v;
            const O = y[0] & 512 ? $t(h, [Jt(e[50])]) : {};
            l.$set(O)
        },
        r() {
            o = s.getBoundingClientRect()
        },
        f() {
            is(s), i()
        },
        a() {
            i(), i = cs(s, o, hs, {
                duration: e[31]
            })
        },
        i(v) {
            a || (ee(l.$$.fragment, v), n || Pe(() => {
                n = Je(s, Ue, {
                    duration: 300,
                    delay: Math.sqrt(e[52] * 2500)
                }), n.start()
            }), a = !0)
        },
        o(v) {
            oe(l.$$.fragment, v), a = !1
        },
        d(v) {
            v && _(s), qe(l)
        }
    }
}

function Ks(t) {
    let e, s = t[13]("waiting") + "",
        l, r;
    return {
        c() {
            e = d("span"), l = F(s), r = F("..."), this.h()
        },
        l(n) {
            e = m(n, "SPAN", {
                style: !0
            });
            var o = g(e);
            l = $(o, s), r = $(o, "..."), o.forEach(_), this.h()
        },
        h() {
            ue(e, "color", "white"), ue(e, "padding", "2rem"), ue(e, "font-size", "1.2rem")
        },
        m(n, o) {
            W(n, e, o), c(e, l), c(e, r)
        },
        p(n, o) {
            o[0] & 8192 && s !== (s = n[13]("waiting") + "") && ne(l, s)
        },
        i: De,
        o: De,
        d(n) {
            n && _(e)
        }
    }
}

function Qs(t) {
    let e;
    return {
        c() {
            e = d("i"), this.h()
        },
        l(s) {
            e = m(s, "I", {
                class: !0
            }), g(e).forEach(_), this.h()
        },
        h() {
            u(e, "class", "gi-caret-down svelte-spo7y6")
        },
        m(s, l) {
            W(s, e, l)
        },
        d(s) {
            s && _(e)
        }
    }
}

function Zs(t) {
    let e;
    return {
        c() {
            e = d("i"), this.h()
        },
        l(s) {
            e = m(s, "I", {
                class: !0
            }), g(e).forEach(_), this.h()
        },
        h() {
            u(e, "class", "gi-caret-up svelte-spo7y6")
        },
        m(s, l) {
            W(s, e, l)
        },
        d(s) {
            s && _(e)
        }
    }
}

function Pt(t) {
    let e, s, l, r, n, o = ["release", "rarity", "name", "quantity"],
        i = [];
    for (let p = 0; p < 4; p += 1) i[p] = Ut(Ct(t, o, p));
    let a = t[6] === "character" && Lt(t),
        h = t[6] === "weapon" && Wt(t);
    return {
        c() {
            e = d("div");
            for (let p = 0; p < 4; p += 1) i[p].c();
            s = M(), a && a.c(), l = M(), h && h.c(), this.h()
        },
        l(p) {
            e = m(p, "DIV", {
                class: !0
            });
            var v = g(e);
            for (let y = 0; y < 4; y += 1) i[y].l(v);
            s = H(v), a && a.l(v), l = H(v), h && h.l(v), v.forEach(_), this.h()
        },
        h() {
            u(e, "class", "order-list svelte-spo7y6")
        },
        m(p, v) {
            W(p, e, v);
            for (let y = 0; y < 4; y += 1) i[y].m(e, null);
            c(e, s), a && a.m(e, null), c(e, l), h && h.m(e, null), n = !0
        },
        p(p, v) {
            if (v[0] & 4202752) {
                o = ["release", "rarity", "name", "quantity"];
                let y;
                for (y = 0; y < 4; y += 1) {
                    const O = Ct(p, o, y);
                    i[y] ? i[y].p(O, v) : (i[y] = Ut(O), i[y].c(), i[y].m(e, s))
                }
                for (; y < 4; y += 1) i[y].d(1)
            }
            p[6] === "character" ? a ? a.p(p, v) : (a = Lt(p), a.c(), a.m(e, l)) : a && (a.d(1), a = null), p[6] === "weapon" ? h ? h.p(p, v) : (h = Wt(p), h.c(), h.m(e, null)) : h && (h.d(1), h = null)
        },
        i(p) {
            n || (Pe(() => {
                r || (r = ot(e, Ue, {
                    duration: 200
                }, !0)), r.run(1)
            }), n = !0)
        },
        o(p) {
            r || (r = ot(e, Ue, {
                duration: 200
            }, !1)), r.run(0), n = !1
        },
        d(p) {
            p && _(e), _t(i, p), a && a.d(), h && h.d(), p && r && r.end()
        }
    }
}

function Ut(t) {
    let e, s = t[13](`inventory.${t[46]}`) + "",
        l, r, n;

    function o() {
        return t[34](t[46])
    }
    return {
        c() {
            e = d("a"), l = F(s), this.h()
        },
        l(i) {
            e = m(i, "A", {
                href: !0,
                class: !0
            });
            var a = g(e);
            l = $(a, s), a.forEach(_), this.h()
        },
        h() {
            u(e, "href", "##"), u(e, "class", "svelte-spo7y6"), ve(e, "selected", t[8] == t[46])
        },
        m(i, a) {
            W(i, e, a), c(e, l), r || (n = pe(e, "click", dt(o)), r = !0)
        },
        p(i, a) {
            t = i, a[0] & 8192 && s !== (s = t[13](`inventory.${t[46]}`) + "") && ne(l, s), a[0] & 256 && ve(e, "selected", t[8] == t[46])
        },
        d(i) {
            i && _(e), r = !1, n()
        }
    }
}

function Lt(t) {
    let e, s = t[13]("inventory.element") + "",
        l, r, n;
    return {
        c() {
            e = d("a"), l = F(s), this.h()
        },
        l(o) {
            e = m(o, "A", {
                href: !0,
                class: !0
            });
            var i = g(e);
            l = $(i, s), i.forEach(_), this.h()
        },
        h() {
            u(e, "href", "##"), u(e, "class", "svelte-spo7y6"), ve(e, "selected", t[8] == "element")
        },
        m(o, i) {
            W(o, e, i), c(e, l), r || (n = pe(e, "click", dt(t[35])), r = !0)
        },
        p(o, i) {
            i[0] & 8192 && s !== (s = o[13]("inventory.element") + "") && ne(l, s), i[0] & 256 && ve(e, "selected", o[8] == "element")
        },
        d(o) {
            o && _(e), r = !1, n()
        }
    }
}

function Wt(t) {
    let e, s = t[13]("inventory.type") + "",
        l, r, n;
    return {
        c() {
            e = d("a"), l = F(s), this.h()
        },
        l(o) {
            e = m(o, "A", {
                href: !0,
                class: !0
            });
            var i = g(e);
            l = $(i, s), i.forEach(_), this.h()
        },
        h() {
            u(e, "href", "##"), u(e, "class", "svelte-spo7y6"), ve(e, "selected", t[8] == "type")
        },
        m(o, i) {
            W(o, e, i), c(e, l), r || (n = pe(e, "click", dt(t[36])), r = !0)
        },
        p(o, i) {
            i[0] & 8192 && s !== (s = o[13]("inventory.type") + "") && ne(l, s), i[0] & 256 && ve(e, "selected", o[8] == "type")
        },
        d(o) {
            o && _(e), r = !1, n()
        }
    }
}

function Xs(t) {
    let e, s, l, r, n, o, i, a, h, p, v, y, O, N, T, V, q = (t[3] ? "" : t[13]("character")) + "",
        G, A, b, S, I, w = (t[3] ? "" : t[13]("weapon")) + "",
        C, B, te, J, j, P, Z, R, ie, he, E, L, X, K, se = t[13]("inventory.sort") + "",
        ye, Ie, Ee = t[13](`inventory.${t[8]}`) + "",
        Te, de, Le, Ae, re, _e, We, f, k, D, x, Y = t[13]("inventory.showAllOption", {
            values: {
                item: t[13](t[6]),
                qty: t[19](t[9])
            }
        }) + "",
        ae, we, le, Ne, Ge;
    document.title = e = t[13]("inventory.text") + " | " + t[13]("title", {
        default: Et
    });
    let Q = t[12] && Bt(t),
        Be = t[15],
        fe = [];
    for (let U = 0; U < Be.length; U += 1) fe[U] = Mt(qt(t, Be, U));
    i = new As({
        props: {
            activeItem: t[6]
        }
    });
    let me = {
        ctx: t,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Ks,
        then: Fs,
        catch: Rs,
        value: 49,
        blocks: [, , , ]
    };
    ss(t[17](), me);

    function $e(U, z) {
        return U[7] ? Zs : Qs
    }
    let ze = $e(t),
        Me = ze(t),
        ce = t[7] && Pt(t);
    return {
        c() {
            s = M(), Q && Q.c(), l = M(), r = d("section");
            for (let U = 0; U < fe.length; U += 1) fe[U].c();
            n = M(), o = d("div"), Ve(i.$$.fragment), p = M(), v = d("div"), y = d("div"), O = d("nav"), N = d("button"), T = d("i"), V = M(), G = F(q), A = M(), b = d("button"), S = d("i"), I = M(), C = F(w), te = M(), J = d("div"), j = d("div"), P = d("div"), me.block.c(), Z = M(), R = d("div"), ie = d("div"), he = d("button"), E = d("i"), L = M(), X = d("div"), K = d("div"), ye = F(se), Ie = F(" / "), Te = F(Ee), de = M(), Me.c(), Le = M(), ce && ce.c(), Ae = M(), re = d("div"), _e = d("input"), We = M(), f = d("label"), k = d("i"), D = F("\u2714"), x = M(), ae = F(Y), this.h()
        },
        l(U) {
            ls('[data-svelte="svelte-jona7c"]', document.head).forEach(_), s = H(U), Q && Q.l(U), l = H(U), r = m(U, "SECTION", {
                class: !0
            });
            var be = g(r);
            for (let ht = 0; ht < fe.length; ht += 1) fe[ht].l(be);
            n = H(be), o = m(be, "DIV", {
                class: !0
            });
            var ke = g(o);
            Ce(i.$$.fragment, ke), ke.forEach(_), p = H(be), v = m(be, "DIV", {
                class: !0
            });
            var je = g(v);
            y = m(je, "DIV", {
                class: !0
            });
            var vt = g(y);
            O = m(vt, "NAV", {
                class: !0
            });
            var Xe = g(O);
            N = m(Xe, "BUTTON", {
                class: !0
            });
            var xe = g(N);
            T = m(xe, "I", {
                class: !0
            }), g(T).forEach(_), V = H(xe), G = $(xe, q), xe.forEach(_), A = H(Xe), b = m(Xe, "BUTTON", {
                class: !0
            });
            var et = g(b);
            S = m(et, "I", {
                class: !0
            }), g(S).forEach(_), I = H(et), C = $(et, w), et.forEach(_), Xe.forEach(_), vt.forEach(_), te = H(je), J = m(je, "DIV", {
                class: !0
            });
            var tt = g(J);
            j = m(tt, "DIV", {
                class: !0,
                style: !0
            });
            var gt = g(j);
            P = m(gt, "DIV", {
                class: !0,
                style: !0
            });
            var yt = g(P);
            me.block.l(yt), yt.forEach(_), gt.forEach(_), Z = H(tt), R = m(tt, "DIV", {
                class: !0
            });
            var bt = g(R);
            ie = m(bt, "DIV", {
                class: !0
            });
            var Ye = g(ie);
            he = m(Ye, "BUTTON", {
                class: !0,
                title: !0
            });
            var kt = g(he);
            E = m(kt, "I", {
                class: !0
            }), g(E).forEach(_), kt.forEach(_), L = H(Ye), X = m(Ye, "DIV", {
                class: !0
            });
            var st = g(X);
            K = m(st, "DIV", {
                class: !0
            });
            var Re = g(K);
            ye = $(Re, se), Ie = $(Re, " / "), Te = $(Re, Ee), de = H(Re), Me.l(Re), Re.forEach(_), Le = H(st), ce && ce.l(st), st.forEach(_), Ae = H(Ye), re = m(Ye, "DIV", {
                class: !0
            });
            var lt = g(re);
            _e = m(lt, "INPUT", {
                type: !0,
                name: !0,
                id: !0,
                class: !0
            }), We = H(lt), f = m(lt, "LABEL", {
                for: !0,
                class: !0
            });
            var rt = g(f);
            k = m(rt, "I", {
                class: !0
            });
            var wt = g(k);
            D = $(wt, "\u2714"), wt.forEach(_), x = H(rt), ae = $(rt, Y), rt.forEach(_), lt.forEach(_), Ye.forEach(_), bt.forEach(_), tt.forEach(_), je.forEach(_), be.forEach(_), this.h()
        },
        h() {
            u(o, "class", "header svelte-spo7y6"), Pe(() => t[28].call(o)), u(T, "class", "gi-character svelte-spo7y6"), u(N, "class", "nav-link svelte-spo7y6"), ve(N, "active", t[6] === "character"), u(S, "class", "gi-weapon svelte-spo7y6"), u(b, "class", "nav-link svelte-spo7y6"), ve(b, "active", t[6] === "weapon"), u(O, "class", "svelte-spo7y6"), u(y, "class", "navigation svelte-spo7y6"), u(P, "class", "list-item svelte-spo7y6"), ue(P, "--item-width", t[1] + "px"), u(j, "class", "container svelte-spo7y6"), ue(j, "--headerHeight", t[2] - t[5] + "px"), u(E, "class", "gi-exchange"), u(he, "class", "sort-button svelte-spo7y6"), u(he, "title", "Reverse Order"), u(K, "class", "selected-order svelte-spo7y6"), u(X, "class", "sort-selector svelte-spo7y6"), u(_e, "type", "checkbox"), u(_e, "name", "showAll"), u(_e, "id", "showAll"), u(_e, "class", "svelte-spo7y6"), u(k, "class", "svelte-spo7y6"), u(f, "for", "showAll"), u(f, "class", "svelte-spo7y6"), u(re, "class", "showAll svelte-spo7y6"), u(ie, "class", "row svelte-spo7y6"), u(R, "class", "filter svelte-spo7y6"), u(J, "class", "body-content svelte-spo7y6"), u(v, "class", "body svelte-spo7y6"), u(r, "class", "svelte-spo7y6")
        },
        m(U, z) {
            W(U, s, z), Q && Q.m(U, z), W(U, l, z), W(U, r, z);
            for (let be = 0; be < fe.length; be += 1) fe[be].m(r, null);
            c(r, n), c(r, o), Se(i, o, null), a = Gt(o, t[28].bind(o)), c(r, p), c(r, v), c(v, y), c(y, O), c(O, N), c(N, T), c(N, V), c(N, G), c(O, A), c(O, b), c(b, S), c(b, I), c(b, C), c(v, te), c(v, J), c(J, j), c(j, P), me.block.m(P, me.anchor = null), me.mount = () => P, me.anchor = null, t[32](j), c(J, Z), c(J, R), c(R, ie), c(ie, he), c(he, E), c(ie, L), c(ie, X), c(X, K), c(K, ye), c(K, Ie), c(K, Te), c(K, de), Me.m(K, null), c(X, Le), ce && ce.m(X, null), c(ie, Ae), c(ie, re), c(re, _e), _e.checked = t[0], c(re, We), c(re, f), c(f, k), c(k, D), c(f, x), c(f, ae), le = !0, Ne || (Ge = [pe(N, "click", t[29]), pe(b, "click", t[30]), pe(he, "click", t[23]), pe(K, "click", rs(t[33])), pe(_e, "change", t[37]), pe(_e, "change", t[38]), pe(r, "click", t[24])], Ne = !0)
        },
        p(U, z) {
            if (t = U, (!le || z[0] & 8192) && e !== (e = t[13]("inventory.text") + " | " + t[13]("title", {
                    default: Et
                })) && (document.title = e), t[12] ? Q ? (Q.p(t, z), z[0] & 4096 && ee(Q, 1)) : (Q = Bt(t), Q.c(), ee(Q, 1), Q.m(l.parentNode, l)) : Q && (Ke(), oe(Q, 1, 1, () => {
                    Q = null
                }), Qe()), z[0] & 49168) {
                Be = t[15];
                let ke;
                for (ke = 0; ke < Be.length; ke += 1) {
                    const je = qt(t, Be, ke);
                    fe[ke] ? fe[ke].p(je, z) : (fe[ke] = Mt(je), fe[ke].c(), fe[ke].m(r, n))
                }
                for (; ke < fe.length; ke += 1) fe[ke].d(1);
                fe.length = Be.length
            }
            const be = {};
            z[0] & 64 && (be.activeItem = t[6]), i.$set(be), (!le || z[0] & 8200) && q !== (q = (t[3] ? "" : t[13]("character")) + "") && ne(G, q), z[0] & 64 && ve(N, "active", t[6] === "character"), (!le || z[0] & 8200) && w !== (w = (t[3] ? "" : t[13]("weapon")) + "") && ne(C, w), z[0] & 64 && ve(b, "active", t[6] === "weapon"), ns(me, t, z), (!le || z[0] & 2) && ue(P, "--item-width", t[1] + "px"), (!le || z[0] & 36) && ue(j, "--headerHeight", t[2] - t[5] + "px"), (!le || z[0] & 8192) && se !== (se = t[13]("inventory.sort") + "") && ne(ye, se), (!le || z[0] & 8448) && Ee !== (Ee = t[13](`inventory.${t[8]}`) + "") && ne(Te, Ee), ze !== (ze = $e(t)) && (Me.d(1), Me = ze(t), Me && (Me.c(), Me.m(K, null))), t[7] ? ce ? (ce.p(t, z), z[0] & 128 && ee(ce, 1)) : (ce = Pt(t), ce.c(), ee(ce, 1), ce.m(X, null)) : ce && (Ke(), oe(ce, 1, 1, () => {
                ce = null
            }), Qe()), z[0] & 1 && (_e.checked = t[0]), (!le || z[0] & 8768) && Y !== (Y = t[13]("inventory.showAllOption", {
                values: {
                    item: t[13](t[6]),
                    qty: t[19](t[9])
                }
            }) + "") && ne(ae, Y)
        },
        i(U) {
            le || (ee(Q), ee(i.$$.fragment, U), h || Pe(() => {
                h = Je(o, Kt, {
                    y: -20
                }), h.start()
            }), B || Pe(() => {
                B = Je(y, t[16], {
                    mobile: t[3]
                }), B.start()
            }), ee(me.block), ee(ce), we || Pe(() => {
                we = Je(J, Ue, {
                    duration: 400
                }), we.start()
            }), le = !0)
        },
        o(U) {
            oe(Q), oe(i.$$.fragment, U);
            for (let z = 0; z < 3; z += 1) {
                const be = me.blocks[z];
                oe(be)
            }
            oe(ce), le = !1
        },
        d(U) {
            U && _(s), Q && Q.d(U), U && _(l), U && _(r), _t(fe, U), qe(i), a(), me.block.d(), me.token = null, me = null, t[32](null), Me.d(), ce && ce.d(), Ne = !1, pt(Ge)
        }
    }
}

function xs(t, e, s) {
    let l, r, n, o, i, a;
    ge(t, Qt, f => s(2, r = f)), ge(t, ks, f => s(3, n = f)), ge(t, Zt, f => s(26, o = f)), ge(t, ft, f => s(13, i = f)), ge(t, mt, f => s(14, a = f));
    const h = ["dendro", "anemo", "cryo", "hydro", "electro", "pyro", "geo"];
    let p = Math.floor(Math.random() * h.length),
        v = 0;
    setInterval(() => {
        s(4, p = p === h.length - 1 ? 0 : p + 1)
    }, 6500);
    const y = (f, k) => k.mobile ? Kt(f, {
        x: -20,
        duration: 400
    }) : Ue(f, {
        duration: 400
    });
    let O = "character",
        N = !1,
        T = "rarity",
        V = [],
        q = [],
        G = [],
        A = [],
        b = !!Dt.get("showAllItems");
    const {
        getAllHistories: S
    } = Xt, I = async () => {
        const k = (await S()).reduce((x, Y) => {
                const ae = x || {};
                return ae[Y.name] = ae[Y.name] || [], ae[Y.name].push(Y), ae
            }, {}),
            D = Object.values(k).map(x => {
                const {
                    name: Y,
                    type: ae,
                    rarity: we,
                    isOwned: le,
                    vision: Ne,
                    weaponType: Ge
                } = x[0];
                return {
                    name: Y,
                    type: ae,
                    rarity: we,
                    isOwned: le,
                    vision: Ne,
                    weaponType: Ge
                }
            }).map(x => (x.qty = k[x.name].length, x));
        V = D.filter(({
            type: x
        }) => x === "weapon"), q = D.filter(({
            type: x
        }) => x === "character"), te(O), w(), P(T)
    }, w = () => {
        if (b) {
            s(9, A = [...G]);
            return
        }
        s(9, A = [...G].filter(({
            isOwned: f
        }) => f))
    }, C = f => {
        const {
            name: k,
            type: D,
            rarity: x,
            isOwned: Y,
            outfit: ae,
            vision: we,
            weaponType: le,
            qty: Ne
        } = f;
        return {
            name: k,
            type: D,
            rarity: x,
            isOwned: Y,
            outfit: ae,
            vision: we,
            weaponType: le,
            qty: Ne
        }
    }, B = f => f.map(k => k.qty).reduce((k, D) => k + D, 0), te = f => {
        const k = f === "character" ? q : V;
        G = (f === "character" ? us : fs).data.map(x => {
            const Y = C(x),
                ae = k.find(({
                    name: le
                }) => Y.name === le);
            if (Y.type = f, Y.type === "character" && (Y.outfit = Es(Y.name) ? .name), !ae) return Y.qty = 0, Y.isOwned = !1, Y;
            const {
                qty: we
            } = ae;
            return Y.qty = we, Y.isOwned = !0, Y
        })
    }, J = f => {
        O !== f && (He("shopnav"), s(6, O = f), s(8, T = "rarity"), te(f), w(), P(T))
    };
    let j;
    Yt(async () => {
        ds(j, {
            sizeAutoCapable: !1,
            className: "os-theme-light"
        })
    });
    const P = f => {
            f === "release" && (s(9, A = G), w()), f === "rarity" && s(9, A = A.sort((k, D) => D.rarity - k.rarity)), f === "quantity" && s(9, A = A.sort((k, D) => D.qty - k.qty)), f === "name" && s(9, A = A.sort((k, D) => k.name > D.name ? 1 : k.name < D.name ? -1 : 0)), f === "element" && s(9, A = A.sort((k, D) => k.vision > D.vision ? 1 : k.vision < D.vision ? -1 : 0)), f === "type" && s(9, A = A.sort((k, D) => k.weaponType > D.weaponType ? 1 : k.weaponType < D.weaponType ? -1 : 0))
        },
        Z = (f = null, k = null) => {
            s(7, N = k !== null ? k : !N), He(), f && (s(8, T = f), P(f))
        },
        R = () => {
            s(9, A = A.reverse()), He()
        },
        ie = () => {
            s(7, N = !1)
        };
    let he = {},
        E = !1;
    const L = f => {
        He("collectionitem"), s(11, he = f.detail), s(12, E = !0)
    };
    Rt("refreshList", (f, k) => {
        const D = A.findIndex(({
            name: x
        }) => x === f);
        s(9, A[D].outfit = k, A)
    });
    const K = () => s(12, E = !1);

    function se() {
        v = this.clientHeight, s(5, v)
    }
    const ye = () => J("character"),
        Ie = () => J("weapon"),
        Ee = f => 30 * Math.sqrt(f);

    function Te(f) {
        as[f ? "unshift" : "push"](() => {
            j = f, s(10, j)
        })
    }
    const de = () => Z(),
        Le = f => Z(f, !1),
        Ae = () => Z("element", !1),
        re = () => Z("type", !1);

    function _e() {
        b = this.checked, s(0, b)
    }
    const We = () => {
        He(), w(), P(T)
    };
    return t.$$.update = () => {
        t.$$.dirty[0] & 67108864 && s(1, l = 20 / 100 * o), t.$$.dirty[0] & 14 && (n ? s(1, l = 24 / 100 * r) : l < 150 ? s(1, l = 130) : l > 150 && s(1, l = 150)), t.$$.dirty[0] & 1 && Dt.set("showAllItems", b)
    }, [b, l, r, n, p, v, O, N, T, A, j, he, E, i, a, h, y, I, w, B, J, P, Z, R, ie, L, o, K, se, ye, Ie, Ee, Te, de, Le, Ae, re, _e, We]
}
class hl extends it {
    constructor(e) {
        super(), ct(this, e, xs, Xs, ut, {}, null, [-1, -1])
    }
}
export {
    hl as
    default
};