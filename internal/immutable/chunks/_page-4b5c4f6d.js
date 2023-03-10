import {
    _ as Ie
} from "./preload-helper-176e53da.js";
import {
    H as Un,
    _ as ss,
    n as Yn,
    u as _s,
    a as Us
} from "./historyIdb-feead984.js";
import {
    S as ze,
    i as Ge,
    s as Oe,
    e as Be,
    b as z,
    f as j,
    g as ke,
    t as U,
    d as Ee,
    h as c,
    E as q,
    o as it,
    Y as at,
    T as ks,
    k as w,
    a as V,
    l as k,
    m as E,
    c as M,
    n as m,
    O as ye,
    p as te,
    G as h,
    H as be,
    Z as Xe,
    U as Es,
    V as ys,
    W as As,
    J as Re,
    L as et,
    C as jt,
    q as J,
    r as C,
    u as K,
    v as ne,
    w as de,
    x as re,
    A as Ne,
    y as ie,
    _ as Gt,
    $ as Ke,
    F as mt,
    a0 as Ft,
    a1 as Is,
    a2 as Ds,
    a3 as Tt,
    a4 as Rt,
    a5 as qe,
    N as Te,
    j as Zn,
    K as Me,
    a6 as Ot,
    P as Mt,
    Q as wt,
    I as xn,
    a7 as Ys,
    D as er,
    a8 as Je,
    a9 as Ce,
    M as tr
} from "./index-a80b06f5.js";
import {
    f as $e,
    c as Ln,
    w as sr,
    o as Jn,
    b as Ye,
    d as lr
} from "./outfits-eb53be92.js";
import {
    p as Se
} from "./audio-6d737711.js";
import {
    d as Bt,
    b as st,
    i as Ht,
    c as Ns,
    s as Ts,
    A as Et,
    B as ct,
    C as Cn,
    t as Jt,
    r as Pt,
    v as Rs,
    n as $n,
    m as Xt,
    z as St,
    x as At,
    D as js,
    q as nt,
    o as rt,
    l as _t,
    k as pt,
    j as dt,
    h as ls,
    E as nr,
    y as rr,
    u as qt,
    F as Nt,
    f as ot,
    e as ht,
    G as vs,
    g as is,
    H as zt
} from "./stores-db8fba2f.js";
import {
    g as Fe,
    b as gs,
    d as Ct,
    p as xt,
    e as es,
    f as Fn,
    a as kt,
    l as ft,
    h as Zs
} from "./localstore-babdf033.js";
import {
    Y as Le,
    D as Wt,
    f as ir,
    o as ar
} from "./runtime.esm-0af339e4.js";
import {
    O as It,
    W as or,
    S as ur,
    g as yt,
    p as $t,
    B as ps
} from "./WishListResult-3d7b1182.js";
import {
    B as Yt,
    a as ts
} from "./accessKey-21d29ba4.js";
import {
    A as Ls
} from "./env-51d3792f.js";
import {
    I as tt
} from "./Icon-2b2a573e.js";
const Hn = [{
        date: "01-Sep-2021",
        description: ["<strong> Raiden Shogun and Kujou Sara </strong> Banner was here !", "<strong> Engulfing Lightning </strong> Weapon Banner has been added"]
    }, {
        date: "10-Sep-2021",
        description: ["Now you can <strong>wishing on previous banner</strong> by clicking <strong>(x)</strong> button on the top right of the page", "Now you can <strong>create screenshot and link to share</strong> when wishing"]
    }, {
        date: "21-Sep-2021",
        description: ["<strong> Sangonomia Kokomi </strong> is ready to pull !", "<strong> Everlasting Moonglow </strong> Weapon Banner has been added"]
    }, {
        date: "30-Sep-2021",
        description: ["Add more previous banner, <strong> Eula, Zhongli, Tartaglia/Childe, Albedo, Ganyu, Xiao, Hu Tao, Venti </strong> is ready to pull ! <br/> Click <strong>(x)</strong> button on the top right of the page to change the banner"]
    }, {
        date: "13-Oct-2021",
        description: ["<strong> Tartaglia </strong> is ready to pull !", "<strong> Polar Star </strong> Weapon Banner has been added"]
    }, {
        date: "2-Nov-2021",
        description: ["<strong> Hu Tao </strong> Character Banner has been added !", "<strong> Thoma </strong> is ready to pull !", "<strong> Staff of Homma </strong> & <strong>Elegy for The End</strong> Weapon Banner has been added"]
    }, {
        date: "24-Nov-2021",
        description: ["<strong> Albedo </strong> Banner was here !", "<strong> Eula </strong> Banner also here !", "<strong> Freedom Sworn & Song of Broken Pines </strong> Weapon Banner has been added"]
    }, {
        date: "08-Des-2021",
        description: ["<strong>Fixing Bugs</strong> of History.", 'if you find any error, follow this steps to reset browser cache specialy only for WIsh Simulator Site . Open Inpect ELement ( CTRL + Shift i ) -> Application -> Storage -> Click on "Clear Site Data" Button', "Ignore the steps above if this is the first time you visit this site or if you already do reset"]
    }, {
        date: "14-Des-2021",
        description: ["<strong> Arrataki Itto </strong> character Banner is ready to pull", "<strong> Redhorn Stonethresher </strong> Weapon Banner has been added !"]
    }, {
        date: "29-Des-2021",
        description: ["Implement Epitomized Path System to Weapon Banner for patch 2.0 and above"]
    }, {
        date: "05-Jan-2022",
        description: ["Now you can pull <strong> Shenhe </strong> and <strong>Yunjin</strong> the Best Waifu!", "<strong>Calamity Queller</strong> Weapon Banner was added"]
    }, {
        date: "25-Jan-2022",
        description: ["<strong>Gong Xi Fa Cai</strong>. Wish you luck on Lantern Rite event", "<strong> Zhongli and Ganyu Rerun Banner </strong> Already out here !", "<strong> Vortex and Amos </strong> Weapon Rerun Banner is ready to pull too !"]
    }, {
        date: "11-Feb-2022",
        description: ["Now you can pull without worry about running out of fate, just activate the <b>Unlimited Fates Option</b> in Menu by clicking the <b>(?)</b> button on top of the page"]
    }, {
        date: "16-Feb-2022",
        description: ["Event Banner Updated, Now you can pull <strong> Yae Miko </strong> here !", "Yae Miko signature Weapon, <strong>Kagura's Verity</strong> is ready to pull too !", "Inventory Updated, Now You can show all Characters and Weapons both you already got or not"]
    }, {
        date: "08-Mar-2022",
        description: ["<strong> Raiden Shogun Rerun </strong> Banner was here !", "<strong> Sangonomia Kokomi </strong> is ready to pull too!", "Weapon Banner Updated, <b> Engulfing Lightning </b> and <b>Everlasting Moonglow</b> already added"]
    }, {
        date: "23-Mar-2022",
        featured: !0,
        description: ["<strong>Due to high number of visitors</strong>, Our monthly bandwidth also increased. We need to upgrade the hosting plan to keep this site alive. So <strong>We'll show some ads </strong> on this site. <br/> We're sorry to you, actually we don't want to ruin your wishing experience. If you feel annoyed with ads, feel free to use Ad blocker, we will not forbit you", 'Or for other solution, you can <strong> <a href="https://ko-fi.com/post/AdFree-Wish-Simulator-Enjoy-Simulator-Without-Ads-G2G2DQ57O" target="_blank"> join membership here</a></strong> to get opportunity to use <strong>Simulator without ads</strong>!']
    }, {
        date: "28-Mar-2022",
        description: ["<strong> Kamisato Ayato </strong> Banner was here !", "<strong> Venti </strong> is ready to pull too!", "Weapon Banner Updated, <b> Haran Geppaku Futsu </b> and <b>Elegy for the End</b> already added"]
    }, {
        date: "17-Apr-2022",
        description: ["<strong> Kamisato Ayaka Rerun </strong> Banner already out !", "Weapon Banner Updated, <b> Mistsplitter Reforged </b> and <b>The Unforged</b> was here too!"]
    }, {
        date: "20-Apr-2022",
        description: ["We recently had to <strong>migrate our server </strong> for other reasons, so the old wishing histories isn't being tracked on the new server, We apologize for the inconvenience. We hope it doesn't happen again in the future, so you can enjoy the simulator peacefully"]
    }, {
        date: "29-May-2022",
        description: ["<strong> Yelan </strong> Banner already out !", "<strong> Xiao 3rd Rerun </strong> Banner was here !", "Weapon Banner Updated, <b> Aqua Simulacra </b> and <b>Primordial Jade Winged Spear</b> are ready to pull !"]
    }, {
        date: "16-Jun-2022",
        description: ["<strong> Arataki Itto Rerun </strong> Banner was here !", "Weapon Banner Updated, <b> Redhorn Stonesthresher </b> and <b>Memory of Dust</b> are ready to pull too!"]
    }, {
        date: "8-Jul-2022",
        description: ["<strong> New!!! </strong> Now you can purchase <strong> Character's Outfit </strong> in the shop. You also can set the costume splash art as result of your wish if you want :D", "<strong> New!!! </strong> Now Blessing of the Welkin Moon is available to purchase"]
    }, {
        date: "12-Jul-2022",
        description: ["<strong>Kazuha 2nd Rerun </strong> and <strong>Klee 3rd Rerun </strong> Banner was here !", "Weapon Banner Updated, <b> Freedom Sworn </b> and <b>Lost Prayers to the Sacred Winds</b> are ready to pull too!", "New Outfit released! <strong>Red Dead of Night</strong> for Diluc and <strong>Ein Immernachtstraum</strong> for Fischl, purchasable on shop."]
    }, {
        date: "21-Jul-2022",
        description: ['<strong>Translation Features</strong> is live now, But  only <strong>EN</strong>, <b>RU</b> <strong>CN-Simplified</strong> and <strong>ID</strong> are available for now, if You want to contribute to add more translation, please go to <u><a href="https://github.com/AguzzTN54/Genshin-Impact-Wish-Simulator" target="_blank">Github Repository </a></u>']
    }, {
        date: "28-Jul-2022",
        description: ["<strong> Yoimiya 2nd Rerun </strong> Banner already out !", "Weapon Banner Updated, <b> Thundering Pulse </b> and <b>Summit Shaper</b> are ready to pull too !"]
    }, {
        date: "22-Agu-2022",
        description: ["<strong> WELCOME to SUMERU !!</strong>", '<strong> Tighnari </strong> Banner already out, with new 4\u2605 Character "<b>Collei</b>"', "Weapon Banner Updated, <b> Hunter's Path </b> and <b>Vortex Vanquisher</b> are ready to pull too !"]
    }, {
        date: "08-Sep-2022",
        description: ["<strong> Kokomi 3rd Rerun </strong> and <strong> Ganyu 3rd Rerun </strong> Banner already out !", "Weapon Banner Updated, <b> Amos Bow </b> and <b>Everlasting Moonglow</b> are ready to pull too !"]
    }, {
        date: "26-Sep-2022",
        description: ['<strong> Cyno </strong> and <strong> Venti 4th Rerun </strong> Banners already out, with new 4\u2605 Character "<b>Candace</b>"', "Weapon Banner Updated, <b> Staff of the Scarlet Sands </b> and <b>Elegy for The End</b> are ready to pull too !", "Now you can obtain Tighnari when you lose 50:50 or when you pull Standard Banner starts from version 3.1"]
    }, {
        date: "11-Oct-2022",
        description: ["<strong> Nilou </strong> and <strong> Albedo 3rd Rerun </strong> Banners already out", "Weapon Banner Updated, <b> Key of Khaj-Nisut </b> and <b>Primordial Jade Cutter</b> are ready to pull too !", "New 4\u2605 Sumeru Weapon Series: <strong>Xiphos' Moonlight</strong> and <strong>Wandering Evenstar</strong>"]
    }, {
        date: "31-Oct-2022",
        description: ["New Character <strong> Nahida </strong> and <strong> Yoimiya 3rd Rerun </strong> Banners already out", "Weapon Banner Updated, <b> A Thousand Floating Dreams </b> and <b>Thundering Pulse</b> are ready to pull too !"]
    }, {
        date: "15-Nov-2022",
        description: ["<strong> Yae Miko 2nd Rerun</strong> and <strong> Tartaglia 3rd Rerun </strong> Banners are ready", "New Character <strong> Layla </strong>", "Weapon Banner Updated, <b> Kagura's Verity </b> and <b>Polar Star</b> are ready to pull too !"]
    }, {
        date: "18-Nov-2022",
        featured: !0,
        description: [`I'm happy to announce that <b> WishSimulator.App already listed on Google Play Store</b>!!! You can get it <a href="https://play.google.com/store/apps/details?id=twa.wishsimulator.app" target="_blank"><b>here</b> </a> <br/> But actually I still prefer to use and install directly from this web. It's literally use the same technology. I'm not sure You'll feel the difference`]
    }, {
        date: "5-Dec-2022",
        description: ["New Character <strong> Wanderer </strong> and <strong> Itto 3rd Rerun </strong> Banners already out", "New 4\u2605 Character <strong> Faruzan </strong> is featured on the current banner too!", "Weapon Banner Updated, <b> Tulaytullah's Remembrance </b> and <b>Redhorn Stonethresher</b> are ready to pull as well"]
    }, {
        date: "23-Dec-2022",
        description: ["<strong> \u{1202D}*\u{1202E} \u0E56\u06E3\u06DCH\u{1D41A}\u{1D491}\u{1D491}\u0263 \u1262\u0113\u2D13 \u0263\u0113\u{1D41A}\u1E5B 2023 \u{1202E}*\u{1202D} </strong>", "<strong> Raiden Shogun</strong> and <strong> Ayato</strong> 2nd Banners has been added!", "Weapon Banner Updated, <b> Engulfing Lightning </b> and <b>Haran Geppaku Futsu</b> are ready to pull too!"]
    }, {
        date: "17-Jan-2023",
        description: ["New 5\u2605 Character <strong> Alhaitham</strong> and <strong> Xiao 3rd Rerun </strong> Banners are ready!", "New 4\u2605 Character <strong> Yaoyao </strong>", "Weapon Banner Updated, <b> Light of Foliar Incision </b> and <b>Primordial Jade Winged-Spear</b> are ready to pull too !", "New Character Outfits  are available! <b>Springbloom Missive</b> for Ayaka and <b>A Sobriquet Under Shade </b> for Lisa."]
    }, {
        date: "1-Feb-2023",
        featured: !0,
        description: ["<strong> Hu Tao 2nd rerun </strong> and <strong> Yelan 1st rerun</strong> Banner has been added !", "Weapon Banner Updated, <b> Staff of Homa </b> and <b>Aqua Simulacra</b> are ready to pull too !"]
    }],
    Js = {
        data: Hn
    };

function Cs(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N, B = l[1] && $s(l);
    const D = l[14].default,
        I = ks(D, l, l[17], null);
    let y = l[2] && Fs(l);
    return {
        c() {
            e = w("div"), t = w("div"), s = w("span"), n = V(), r = w("span"), i = V(), a = w("span"), o = V(), u = w("span"), f = V(), d = w("div"), B && B.c(), _ = V(), v = w("div"), I && I.c(), p = V(), y && y.c(), this.h()
        },
        l(S) {
            e = k(S, "DIV", {
                class: !0,
                style: !0
            });
            var P = E(e);
            t = k(P, "DIV", {
                class: !0
            });
            var Y = E(t);
            s = k(Y, "SPAN", {
                class: !0
            }), E(s).forEach(c), n = M(Y), r = k(Y, "SPAN", {
                class: !0
            }), E(r).forEach(c), i = M(Y), a = k(Y, "SPAN", {
                class: !0
            }), E(a).forEach(c), o = M(Y), u = k(Y, "SPAN", {
                class: !0
            }), E(u).forEach(c), f = M(Y), d = k(Y, "DIV", {
                class: !0,
                style: !0
            });
            var L = E(d);
            B && B.l(L), _ = M(L), v = k(L, "DIV", {
                class: !0
            });
            var G = E(v);
            I && I.l(G), G.forEach(c), p = M(L), y && y.l(L), L.forEach(c), Y.forEach(c), P.forEach(c), this.h()
        },
        h() {
            m(s, "class", "corner top-left svelte-sie8q5"), m(r, "class", "corner top-right svelte-sie8q5"), m(a, "class", "corner bottom-left svelte-sie8q5"), m(u, "class", "corner bottom-right svelte-sie8q5"), m(v, "class", "pop-body svelte-sie8q5"), ye(v, "disclaimer", l[5]), ye(v, "large", !l[1] && !l[2]), m(d, "class", "container svelte-sie8q5"), te(d, "--bg-icon", "url(" + l[8]["modal-bg-icon.png"] + ")"), m(t, "class", "modal-content svelte-sie8q5"), m(e, "class", "modal svelte-sie8q5"), te(e, "height", l[7] + "px")
        },
        m(S, P) {
            z(S, e, P), h(e, t), h(t, s), h(t, n), h(t, r), h(t, i), h(t, a), h(t, o), h(t, u), h(t, f), h(t, d), B && B.m(d, null), h(d, _), h(d, v), I && I.m(v, null), l[16](v), h(d, p), y && y.m(d, null), b = !0, A || (N = [be(t, "click", Xe(l[15])), be(e, "click", l[12])], A = !0)
        },
        p(S, P) {
            S[1] ? B ? B.p(S, P) : (B = $s(S), B.c(), B.m(d, _)) : B && (B.d(1), B = null), I && I.p && (!b || P & 131072) && Es(I, D, S, S[17], b ? As(D, S[17], P, null) : ys(S[17]), null), P & 32 && ye(v, "disclaimer", S[5]), P & 6 && ye(v, "large", !S[1] && !S[2]), S[2] ? y ? (y.p(S, P), P & 4 && j(y, 1)) : (y = Fs(S), y.c(), j(y, 1), y.m(d, null)) : y && (ke(), U(y, 1, 1, () => {
                y = null
            }), Ee()), (!b || P & 256) && te(d, "--bg-icon", "url(" + S[8]["modal-bg-icon.png"] + ")"), (!b || P & 128) && te(e, "height", S[7] + "px")
        },
        i(S) {
            b || (j(I, S), j(y), Re(() => {
                g || (g = et(e, $e, {
                    duration: 80
                }, !0)), g.run(1)
            }), b = !0)
        },
        o(S) {
            U(I, S), U(y), g || (g = et(e, $e, {
                duration: 80
            }, !1)), g.run(0), b = !1
        },
        d(S) {
            S && c(e), B && B.d(), I && I.d(S), l[16](null), y && y.d(), S && g && g.end(), A = !1, jt(N)
        }
    }
}

function $s(l) {
    let e, t;
    return {
        c() {
            e = w("h1"), t = J(l[1]), this.h()
        },
        l(s) {
            e = k(s, "H1", {
                class: !0
            });
            var n = E(e);
            t = C(n, l[1]), n.forEach(c), this.h()
        },
        h() {
            m(e, "class", "pop-header svelte-sie8q5")
        },
        m(s, n) {
            z(s, e, n), h(e, t)
        },
        p(s, n) {
            n & 2 && K(t, s[1])
        },
        d(s) {
            s && c(e)
        }
    }
}

function Fs(l) {
    let e, t = ["cancel", "all"].indexOf(l[4]) > -1,
        s, n = ["confirm", "all"].indexOf(l[4]) > -1,
        r, i = t && Hs(l),
        a = n && Xs(l);
    return {
        c() {
            e = w("div"), i && i.c(), s = V(), a && a.c(), this.h()
        },
        l(o) {
            e = k(o, "DIV", {
                class: !0
            });
            var u = E(e);
            i && i.l(u), s = M(u), a && a.l(u), u.forEach(c), this.h()
        },
        h() {
            m(e, "class", "pop-footer svelte-sie8q5")
        },
        m(o, u) {
            z(o, e, u), i && i.m(e, null), h(e, s), a && a.m(e, null), r = !0
        },
        p(o, u) {
            u & 16 && (t = ["cancel", "all"].indexOf(o[4]) > -1), t ? i ? (i.p(o, u), u & 16 && j(i, 1)) : (i = Hs(o), i.c(), j(i, 1), i.m(e, s)) : i && (ke(), U(i, 1, 1, () => {
                i = null
            }), Ee()), u & 16 && (n = ["confirm", "all"].indexOf(o[4]) > -1), n ? a ? (a.p(o, u), u & 16 && j(a, 1)) : (a = Xs(o), a.c(), j(a, 1), a.m(e, null)) : a && (ke(), U(a, 1, 1, () => {
                a = null
            }), Ee())
        },
        i(o) {
            r || (j(i), j(a), r = !0)
        },
        o(o) {
            U(i), U(a), r = !1
        },
        d(o) {
            o && c(e), i && i.d(), a && a.d()
        }
    }
}

function Hs(l) {
    let e, t;
    return e = new Yt({
        props: {
            type: "cancel"
        }
    }), e.$on("click", l[11]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p: Ne,
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Xs(l) {
    let e, t;
    return e = new Yt({
        props: {
            type: "confirm",
            $$slots: {
                default: [fr]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("click", l[10]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 131592 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function fr(l) {
    let e = (l[3] || l[9]("confirmButton")) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 520 && e !== (e = (s[3] || s[9]("confirmButton")) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function cr(l) {
    let e, t, s = l[0] && Cs(l);
    return {
        c() {
            s && s.c(), e = Be()
        },
        l(n) {
            s && s.l(n), e = Be()
        },
        m(n, r) {
            s && s.m(n, r), z(n, e, r), t = !0
        },
        p(n, [r]) {
            n[0] ? s ? (s.p(n, r), r & 1 && j(s, 1)) : (s = Cs(n), s.c(), j(s, 1), s.m(e.parentNode, e)) : s && (ke(), U(s, 1, 1, () => {
                s = null
            }), Ee())
        },
        i(n) {
            t || (j(s), t = !0)
        },
        o(n) {
            U(s), t = !1
        },
        d(n) {
            s && s.d(n), n && c(e)
        }
    }
}

function dr(l, e, t) {
    let s, n, r;
    q(l, Bt, y => t(7, s = y)), q(l, st, y => t(8, n = y)), q(l, Le, y => t(9, r = y));
    let {
        $$slots: i = {},
        $$scope: a
    } = e, {
        show: o = !1
    } = e, {
        title: u = ""
    } = e, {
        confirm: f = !0
    } = e, {
        confirmText: d = ""
    } = e, {
        button: _ = "all"
    } = e, {
        sfx: v = !0
    } = e, {
        disclaimer: p = !1
    } = e, g;
    it(() => It(g, {
        sizeAutoCapable: !1,
        className: "os-theme-light"
    }));
    const b = at(),
        A = () => {
            b("confirm"), v && Se()
        },
        N = () => {
            b("cancel"), v && Se()
        },
        B = () => {
            b("cancel")
        };

    function D(y) {
        Gt.call(this, l, y)
    }

    function I(y) {
        Ke[y ? "unshift" : "push"](() => {
            g = y, t(6, g)
        })
    }
    return l.$$set = y => {
        "show" in y && t(0, o = y.show), "title" in y && t(1, u = y.title), "confirm" in y && t(2, f = y.confirm), "confirmText" in y && t(3, d = y.confirmText), "button" in y && t(4, _ = y.button), "sfx" in y && t(13, v = y.sfx), "disclaimer" in y && t(5, p = y.disclaimer), "$$scope" in y && t(17, a = y.$$scope)
    }, [o, u, f, d, _, p, g, s, n, r, A, N, B, v, i, D, I, a]
}
class Zt extends ze {
    constructor(e) {
        super(), Ge(this, e, dr, cr, Oe, {
            show: 0,
            title: 1,
            confirm: 2,
            confirmText: 3,
            button: 4,
            sfx: 13,
            disclaimer: 5
        })
    }
}

function qs(l, e, t) {
    const s = l.slice();
    return s[15] = e[t].description, s[16] = e[t].date, s[18] = t, s
}

function Qs(l, e, t) {
    const s = l.slice();
    return s[19] = e[t], s
}

function Ks(l) {
    let e, t = l[6]("installInstruction") + "",
        s;
    return {
        c() {
            e = w("a"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "A", {
                href: !0,
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "href", "/install"), m(e, "class", "svelte-1wge3s8")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r & 64 && t !== (t = n[6]("installInstruction") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function hr(l) {
    let e, t = [],
        s = new Map,
        n, r, i = l[7].reverse();
    const a = o => o[18];
    for (let o = 0; o < i.length; o += 1) {
        let u = qs(l, i, o),
            f = a(u);
        s.set(f, t[o] = el(f, u))
    }
    return {
        c() {
            e = w("div");
            for (let o = 0; o < t.length; o += 1) t[o].c();
            n = V(), r = w("div"), this.h()
        },
        l(o) {
            e = k(o, "DIV", {
                class: !0
            });
            var u = E(e);
            for (let f = 0; f < t.length; f += 1) t[f].l(u);
            n = M(u), r = k(u, "DIV", {
                style: !0
            }), E(r).forEach(c), u.forEach(c), this.h()
        },
        h() {
            te(r, "height", ".5rem"), m(e, "class", "updates svelte-1wge3s8")
        },
        m(o, u) {
            z(o, e, u);
            for (let f = 0; f < t.length; f += 1) t[f].m(e, null);
            h(e, n), h(e, r), l[9](e)
        },
        p(o, u) {
            u & 128 && (i = o[7].reverse(), t = Is(t, u, a, 1, o, i, s, e, Ds, el, n, qs))
        },
        d(o) {
            o && c(e);
            for (let u = 0; u < t.length; u += 1) t[u].d();
            l[9](null)
        }
    }
}

function mr(l) {
    let e, t, s, n = l[6]("menu.keyExpired2", {
            values: {
                key: `<b>${l[3]}</b>`,
                date: `<u>${l[4]}</u>`
            }
        }) + "",
        r, i, a = l[6]("menu.getNewKey") + "",
        o;
    return {
        c() {
            e = w("div"), t = w("div"), s = new Tt(!1), r = V(), i = w("a"), o = J(a), this.h()
        },
        l(u) {
            e = k(u, "DIV", {
                class: !0
            });
            var f = E(e);
            t = k(f, "DIV", {});
            var d = E(t);
            s = Rt(d, !1), r = M(d), i = k(d, "A", {
                href: !0,
                target: !0,
                class: !0
            });
            var _ = E(i);
            o = C(_, a), _.forEach(c), d.forEach(c), f.forEach(c), this.h()
        },
        h() {
            s.a = r, m(i, "href", "https://ko-fi.com/post/AdFree-Wish-Simulator-Enjoy-Simulator-Without-Ads-G2G2DQ57O"), m(i, "target", "_blank"), m(i, "class", "svelte-1wge3s8"), m(e, "class", "updates adExpired svelte-1wge3s8")
        },
        m(u, f) {
            z(u, e, f), h(e, t), s.m(n, t), h(t, r), h(t, i), h(i, o)
        },
        p(u, f) {
            f & 88 && n !== (n = u[6]("menu.keyExpired2", {
                values: {
                    key: `<b>${u[3]}</b>`,
                    date: `<u>${u[4]}</u>`
                }
            }) + "") && s.p(n), f & 64 && a !== (a = u[6]("menu.getNewKey") + "") && K(o, a)
        },
        d(u) {
            u && c(e)
        }
    }
}

function _r(l) {
    let e;
    return {
        c() {
            e = J("( Latest Update )")
        },
        l(t) {
            e = C(t, "( Latest Update )")
        },
        m(t, s) {
            z(t, e, s)
        },
        d(t) {
            t && c(e)
        }
    }
}

function xs(l) {
    let e, t = l[19] + "";
    return {
        c() {
            e = w("p"), this.h()
        },
        l(s) {
            e = k(s, "P", {
                class: !0
            });
            var n = E(e);
            n.forEach(c), this.h()
        },
        h() {
            m(e, "class", "svelte-1wge3s8")
        },
        m(s, n) {
            z(s, e, n), e.innerHTML = t
        },
        p: Ne,
        d(s) {
            s && c(e)
        }
    }
}

function el(l, e) {
    let t, s, n = e[16] + "",
        r, i, a, o, u = e[18] === 0 && _r(),
        f = e[15],
        d = [];
    for (let _ = 0; _ < f.length; _ += 1) d[_] = xs(Qs(e, f, _));
    return {
        key: l,
        first: null,
        c() {
            t = w("span"), s = w("i"), r = J(n), i = V(), u && u.c(), a = V();
            for (let _ = 0; _ < d.length; _ += 1) d[_].c();
            o = Be(), this.h()
        },
        l(_) {
            t = k(_, "SPAN", {
                class: !0
            });
            var v = E(t);
            s = k(v, "I", {
                class: !0
            });
            var p = E(s);
            r = C(p, n), p.forEach(c), i = M(v), u && u.l(v), v.forEach(c), a = M(_);
            for (let g = 0; g < d.length; g += 1) d[g].l(_);
            o = Be(), this.h()
        },
        h() {
            m(s, "class", "tgl svelte-1wge3s8"), m(t, "class", "svelte-1wge3s8"), this.first = t
        },
        m(_, v) {
            z(_, t, v), h(t, s), h(s, r), h(t, i), u && u.m(t, null), z(_, a, v);
            for (let p = 0; p < d.length; p += 1) d[p].m(_, v);
            z(_, o, v)
        },
        p(_, v) {
            if (e = _, v & 128) {
                f = e[15];
                let p;
                for (p = 0; p < f.length; p += 1) {
                    const g = Qs(e, f, p);
                    d[p] ? d[p].p(g, v) : (d[p] = xs(g), d[p].c(), d[p].m(o.parentNode, o))
                }
                for (; p < d.length; p += 1) d[p].d(1);
                d.length = f.length
            }
        },
        d(_) {
            _ && c(t), u && u.d(), _ && c(a), qe(d, _), _ && c(o)
        }
    }
}

function pr(l) {
    let e, t, s = l[6]("fanmade") + "",
        n, r, i, a, o, u, f, d = l[6]("disclaimer") + "",
        _, v, p = !l[5] && Ks(l);

    function g(N, B) {
        return N[4] && N[4] !== "none" ? mr : hr
    }
    let b = g(l),
        A = b(l);
    return {
        c() {
            e = w("section"), t = w("p"), n = J(s), r = V(), i = w("br"), a = V(), p && p.c(), o = V(), A.c(), u = V(), f = w("p"), _ = J(d), this.h()
        },
        l(N) {
            e = k(N, "SECTION", {
                style: !0,
                class: !0
            });
            var B = E(e);
            t = k(B, "P", {
                class: !0
            });
            var D = E(t);
            n = C(D, s), r = M(D), i = k(D, "BR", {}), a = M(D), p && p.l(D), D.forEach(c), o = M(B), A.l(B), u = M(B), f = k(B, "P", {
                class: !0
            });
            var I = E(f);
            _ = C(I, d), I.forEach(c), B.forEach(c), this.h()
        },
        h() {
            m(t, "class", "sp svelte-1wge3s8"), m(f, "class", "credit svelte-1wge3s8"), te(e, "--modalHeight", l[2] + "px"), m(e, "class", "svelte-1wge3s8"), Re(() => l[10].call(e))
        },
        m(N, B) {
            z(N, e, B), h(e, t), h(t, n), h(t, r), h(t, i), h(t, a), p && p.m(t, null), h(e, o), A.m(e, null), h(e, u), h(e, f), h(f, _), v = Ft(e, l[10].bind(e))
        },
        p(N, B) {
            B & 64 && s !== (s = N[6]("fanmade") + "") && K(n, s), N[5] ? p && (p.d(1), p = null) : p ? p.p(N, B) : (p = Ks(N), p.c(), p.m(t, null)), b === (b = g(N)) && A ? A.p(N, B) : (A.d(1), A = b(N), A && (A.c(), A.m(e, u))), B & 64 && d !== (d = N[6]("disclaimer") + "") && K(_, d), B & 4 && te(e, "--modalHeight", N[2] + "px")
        },
        d(N) {
            N && c(e), p && p.d(), A.d(), v()
        }
    }
}

function vr(l) {
    let e, t;
    return e = new Zt({
        props: {
            show: l[0],
            title: l[6]("title"),
            button: "confirm",
            disclaimer: !0,
            $$slots: {
                default: [pr]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("confirm", l[8]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, [n]) {
            const r = {};
            n & 1 && (r.show = s[0]), n & 64 && (r.title = s[6]("title")), n & 4194430 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function gr(l, e, t) {
    let s, n, r;
    q(l, Ht, N => t(12, s = N)), q(l, Ns, N => t(5, n = N)), q(l, Le, N => t(6, r = N));
    let {
        show: i = !0
    } = e, a, o, u = !1, f = "", d = "";
    const _ = mt("closeDisclaimer"),
        v = mt("showAd"),
        p = Hn.filter(({
            featured: N
        }) => !!N),
        g = () => {
            _(), !(n && s) && v(!u)
        };
    it(async () => {
        It(a, {
            sizeAutoCapable: !1,
            className: "os-theme-light"
        });
        const {
            validity: N,
            expiryDate: B,
            storedKey: D
        } = await ts.checkLocal();
        u = N, t(3, f = D), t(4, d = B)
    });

    function b(N) {
        Ke[N ? "unshift" : "push"](() => {
            a = N, t(1, a)
        })
    }

    function A() {
        o = this.clientHeight, t(2, o)
    }
    return l.$$set = N => {
        "show" in N && t(0, i = N.show)
    }, [i, a, o, f, d, n, r, p, g, b, A]
}
class tl extends ze {
    constructor(e) {
        super(), Ge(this, e, gr, vr, Oe, {
            show: 0
        })
    }
}
const xe = l => l[Math.floor(Math.random() * l.length)],
    Ut = l => Ln.data.filter(({
        rarity: e
    }) => e === l).map(e => (e.type = "character", e)),
    bs = l => sr.data.filter(({
        rarity: e
    }) => e === l).map(e => (e.type = "weapon", e)),
    Xn = l => Ut(5).filter(({
        name: e
    }) => l.includes(e)),
    as = (l, e = []) => bs(l).filter(({
        limited: t
    }) => !t).filter(({
        name: t
    }) => !e.includes(t)),
    br = Ut(4).filter(({
        name: l
    }) => !Ln.onlyStandard.includes(l)),
    wr = (l, e = null, t = null) => l.filter(({
        release: s
    }) => {
        if (!s) return !0;
        const [n, r] = s.split("-");
        return !(parseFloat(e) < parseFloat(n) || parseFloat(e) === parseFloat(n) && t <= parseInt(r))
    }),
    os = () => xe(as(3)),
    us = (l = "allExcludeStandard", e = null, t = null, s = []) => {
        let n = br;
        if (l === "beginner") return n = n.filter(({
            name: o
        }) => s.includes(o)), xe(n);
        const r = xe(["weap", "char"]);
        l === "standard" && (n = Ut(4));
        const i = r === "weap" ? as(4) : n;
        let a = wr(i, e, t);
        return s.length > 0 && (a = a.filter(({
            name: o
        }) => !s.includes(o))), xe(a)
    },
    kr = ({
        exclude: l
    }) => {
        const t = xe(["weap", "char"]) === "weap" ? as(5) : Xn(l);
        return xe(t)
    },
    Er = {
        init(l, e) {
            const {
                item: t,
                rateup: s
            } = l;
            return this._character = t, this._rateup = s, this._indexOfBanner = e, this
        },
        _rateupChars() {
            return Ut(4).filter(({
                name: l
            }) => this._rateup.includes(l))
        },
        _featuredChars() {
            let {
                _character: l,
                _indexOfBanner: e
            } = this;
            return Array.isArray(l) && (l = l[e]), Ut(5).find(({
                name: s
            }) => s === l.character)
        },
        get(l, e) {
            const {
                version: t,
                phase: s,
                excluded: n
            } = e;
            if (l === 3) return os();
            if (l === 4) {
                if (xe(["rateup", "std"]) === "rateup" || Fe.get("events4Star")) {
                    const o = xe(this._rateupChars());
                    return Fe.set("events4Star", !1), o
                }
                const i = us("limited", t, s),
                    a = this._rateupChars().map(({
                        name: o
                    }) => o).includes(i.name);
                return Fe.set("events4Star", !a), i
            }
            if (l === 5) {
                const r = this._featuredChars();
                if (Fe.get("events")) return Fe.set("events", !1), r.status = "guaranteed", r;
                if (xe(["limited", "std"]) === "std") {
                    Fe.set("events", !0);
                    const a = xe(Xn(n));
                    return a.status = "lose", a
                }
                return Fe.set("events", !1), r.status = "win", r
            }
        }
    },
    yr = (l, e) => {
        let {
            character: t,
            vision: s
        } = e.featured;
        const n = Fe.get("beginner"),
            r = gs.get() || 0;
        if (gs.set(r + 1), r === 9 && !n) return Fe.set("beginner", !0), {
            type: "character",
            rarity: 4,
            name: t,
            vision: s
        };
        if (r >= 19 && Ts.set(!1), l === 3) return os();
        if (l === 5) {
            const i = Ut(5).filter(({
                name: a
            }) => e.characters.includes(a));
            return xe(i)
        }
        if (l === 4) {
            const i = us("beginner", null, null, e.characters),
                a = t.includes(i.name);
            return !n && a && Fe.set("beginner", !0), i
        }
    },
    Ar = [5.1, 5.1, 5.1, 5.1, 5.1, 5.1, 5.1, 5.1, 56.1, 100, 100],
    Ir = [6, 6, 6, 6, 6, 6, 6, 6, 62, 100, 100],
    fs = [],
    vt = [];
for (let l = 0; l < 73; l++) fs.push(.6);
for (let l = 1; l < 17; l++) {
    const e = .6 + 6 * l;
    fs.push(e)
}
fs.push(100);
for (let l = 0; l < 62; l++) vt.push(.7);
for (let l = 1; l < 12; l++) {
    const e = .7 + 7 * l;
    vt.push(e)
}
vt.push(81.2);
vt.push(84.7);
vt.push(88.2);
vt.push(91.7);
vt.push(95.2);
vt.push(98.7);
vt.push(100);
const ws = l => {
        let e = [];
        for (let n = 0; n < l.length; n++) e[n] = l[n].chance + (e[n - 1] || 0);
        const t = Math.random() * e[e.length - 1];
        return l[e.findIndex(n => n > t)]
    },
    Dr = {
        init(l, e, t) {
            return this._localFate = Ct.init(l, e), this._version = l, this._phase = e, this._featured = t, this
        },
        check() {
            const l = this._localFate.getSelected();
            if (l === null) return {
                localSelectedCourse: l
            };
            this.localFate = Ct.init(this._version, this._phase, l);
            const e = this._localFate.getPoint();
            return this.localPoint = e, e !== 2 ? {
                localSelectedCourse: null,
                localPoint: e
            } : (this._localFate.remove(), {
                localSelectedCourse: l,
                localPoint: e
            })
        },
        updater(l) {
            const e = this._localFate.getSelected();
            if (e === null) return;
            const t = this._featured.findIndex(({
                name: n
            }) => l.name === n);
            if (e - 1 === t) return Et.set(0), ct.set({
                name: null,
                index: null
            }), this._localFate.remove();
            const s = this.localPoint + 1;
            return Et.set(s), this._localFate.set(s)
        }
    },
    Nr = {
        init(l, e, t) {
            return this._weapons = t, this._phase = e, this._version = l, this
        },
        _rateupWeapons() {
            return bs(4).filter(({
                name: l
            }) => this._weapons.rateup.includes(l))
        },
        _featuredWeaponsName() {
            return this._weapons.featured.map(({
                name: l
            }) => l)
        },
        _featuredWeapons() {
            return bs(5).filter(({
                name: l
            }) => this._featuredWeaponsName().includes(l))
        },
        get(l) {
            if (l === 3) return os();
            if (l === 4) {
                const e = Fe.get("weapons4Star"),
                    t = [{
                        type: "rateup",
                        chance: 75
                    }, {
                        type: "std",
                        chance: 25
                    }],
                    {
                        type: s
                    } = ws(t);
                if (s === "rateup" || e) {
                    const i = xe(this._rateupWeapons());
                    return Fe.set("weapons4Star", !1), i
                }
                const n = this._rateupWeapons().map(({
                        name: i
                    }) => i),
                    r = us("weapons", this._version, this._phase, n);
                return Fe.set("weapons4Star", !0), r
            }
            if (l === 5) {
                const {
                    _version: e,
                    _phase: t,
                    _weapons: s
                } = this, n = Dr.init(e, t, s.featured), {
                    localSelectedCourse: r,
                    localPoint: i
                } = n.check(), a = Fe.get("weapons");
                if (i > 1) {
                    Fe.set("weapons", !1);
                    const f = this._featuredWeapons().find(({
                        name: d
                    }) => s.featured[r - 1].name === d);
                    return f.status = "selected", n.updater(f), f
                }
                let o;
                if (a) o = "guaranteed";
                else {
                    const f = [{
                            type: "featured",
                            chance: 75
                        }, {
                            type: "std",
                            chance: 25
                        }],
                        {
                            type: d
                        } = ws(f);
                    if (d === "std") {
                        const _ = xe(as(5, this._featuredWeaponsName()));
                        return Fe.set("weapons", !0), n.updater(_), _.status = "lose", _
                    }
                    o = "win"
                }
                const u = xe(this._featuredWeapons());
                return Fe.set("weapons", !1), n.updater(u), u.status = o, u
            }
        }
    },
    {
        addHistory: Tr,
        countItem: Rr
    } = Un,
    jr = async (l, e, t) => {
        const s = xt.get(l),
            n = es.get(l),
            r = l === "weapons",
            i = (r ? 80 : 90) - 1,
            a = r ? vt[n] || 100 : fs[n] || 100;
        let o = r ? Ir[s] : Ar[s],
            u = 100 - o - a;
        u < 0 && n > i - 1 && (o = 0), u < 0 && (u = 0);
        const f = [{
                rarity: 3,
                chance: u
            }, {
                rarity: 4,
                chance: o
            }, {
                rarity: 5,
                chance: a
            }],
            {
                rarity: d
            } = ws(f);
        let _ = 1;
        d === 5 && (xt.set(l, s + 1), es.set(l, 0), _ = n + 1), d === 4 && (xt.set(l, 0), es.set(l, n + 1), _ = s + 1), d === 3 && (xt.set(l, s + 1), es.set(l, n + 1));
        const p = (await t).getItem(d, l, e);
        p.pity = _, p.banner = l;
        const g = await Rr(p.name);
        await Tr(p);
        const b = g > 6,
            A = { ...p,
                isNew: g < 1
            };
        if (A.type === "character") {
            if (g < 1) return A;
            A.stelaFortuna = !b
        }
        return A.fateType = A.rarity === 3 ? "stardust" : "starglitter", A.fateQty = A.isNew ? 0 : Br(A.rarity, A.type, b), A
    },
    Br = (l, e, t) => {
        if (l === 3) return 15;
        let s;
        const n = l === 4 ? 2 : 10;
        return l === 4 && (s = t ? 5 : 2), l === 5 && (s = t ? 25 : 10), e === "character" ? s : n
    },
    Sr = {
        async init(l, e) {
            const {
                data: t
            } = await ss(Object.assign({
                "../../data/banners/events/1.0.json": () => Ie(() =>
                    import ("./1.0-61c69dfc.js"), [],
                    import.meta.url),
                "../../data/banners/events/1.1.json": () => Ie(() =>
                    import ("./1.1-e1af04de.js"), [],
                    import.meta.url),
                "../../data/banners/events/1.2.json": () => Ie(() =>
                    import ("./1.2-f4153b42.js"), [],
                    import.meta.url),
                "../../data/banners/events/1.3.json": () => Ie(() =>
                    import ("./1.3-7d064ecd.js"), [],
                    import.meta.url),
                "../../data/banners/events/1.4.json": () => Ie(() =>
                    import ("./1.4-3cc5ca59.js"), [],
                    import.meta.url),
                "../../data/banners/events/1.5.json": () => Ie(() =>
                    import ("./1.5-4d85a4af.js"), [],
                    import.meta.url),
                "../../data/banners/events/1.6.json": () => Ie(() =>
                    import ("./1.6-6735b16b.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.0.json": () => Ie(() =>
                    import ("./2.0-c07fe7aa.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.1.json": () => Ie(() =>
                    import ("./2.1-bdea6bb8.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.2.json": () => Ie(() =>
                    import ("./2.2-218365e0.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.3.json": () => Ie(() =>
                    import ("./2.3-0aa8553c.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.4.json": () => Ie(() =>
                    import ("./2.4-858e66ef.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.5.json": () => Ie(() =>
                    import ("./2.5-2e65cacd.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.6.json": () => Ie(() =>
                    import ("./2.6-53579726.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.7.json": () => Ie(() =>
                    import ("./2.7-ec80a2ed.js"), [],
                    import.meta.url),
                "../../data/banners/events/2.8.json": () => Ie(() =>
                    import ("./2.8-adfabfdb.js"), [],
                    import.meta.url),
                "../../data/banners/events/3.0.json": () => Ie(() =>
                    import ("./3.0-b1378883.js"), [],
                    import.meta.url),
                "../../data/banners/events/3.1.json": () => Ie(() =>
                    import ("./3.1-a47c785e.js"), [],
                    import.meta.url),
                "../../data/banners/events/3.2.json": () => Ie(() =>
                    import ("./3.2-c037698e.js"), [],
                    import.meta.url),
                "../../data/banners/events/3.3.json": () => Ie(() =>
                    import ("./3.3-013f586b.js"), [],
                    import.meta.url),
                "../../data/banners/events/3.4.json": () => Ie(() =>
                    import ("./3.4-45fd5e10.js"), [],
                    import.meta.url)
            }), `../../data/banners/events/${l}.json`), {
                standardVersion: s,
                weapons: n,
                events: r
            } = t.find(a => a.phase === e).banners, {
                standard: i
            } = await ss(Object.assign({
                "../../data/banners/standard/1.json": () => Ie(() =>
                    import ("./1-d7bdd9fc.js"), [],
                    import.meta.url),
                "../../data/banners/standard/2.json": () => Ie(() =>
                    import ("./2-8d6c51aa.js"), [],
                    import.meta.url),
                "../../data/banners/standard/3.json": () => Ie(() =>
                    import ("./3-1a1dd4bb.js"), [],
                    import.meta.url)
            }), `../../data/banners/standard/${s}.json`);
            return this._version = l, this._phase = e, this._beginner = Cn, this._events = r, this._isDualBanner = Array.isArray(r.item) && r.item ? .length > 1, this._weapons = n, this._standard = i, this
        },
        _limitedWish(l, e) {
            const {
                item: t
            } = this._events, n = Er.init(this._events, e).get(l, {
                excluded: this._standard.characters,
                version: this._version,
                phase: this._phase
            });
            return n.bannerName = Array.isArray(t) ? t[e].name : t.name, n
        },
        _beginnerWish(l) {
            const e = yr(l, this._beginner);
            return e.bannerName = "beginner", e
        },
        _standardWish(l) {
            let e;
            return l === 3 && (e = os()), l === 4 && (e = us("standard", this._version, this._phase)), l === 5 && (e = kr({
                exclude: this._standard.characters
            })), e.bannerName = this._standard.featured.name, e.status = null, e
        },
        _weaponWish(l) {
            const {
                _weapons: e,
                _phase: t,
                _version: s
            } = this, r = Nr.init(s, t, e).get(l);
            return r.bannerName = e.name, r
        },
        getItem(l, e, t) {
            let s;
            if (e === "beginner" && (s = this._beginnerWish(l)), e === "standard" && (s = this._standardWish(l)), e === "events" && (s = this._limitedWish(l, t)), e === "weapons" && (s = this._weaponWish(l)), !s) return {
                type: null,
                rarity: 0,
                name: null
            };
            const n = new Date;
            return s.time = `${n.toLocaleDateString()} ${n.toLocaleTimeString()}`, s
        }
    },
    Vr = l => {
        if (!l) return !1;
        const e = Jn.filter(({
            characterName: t
        }) => l === t);
        return {
            outfitAvailable: e.length > 0,
            outfitName: e[0] ? .name,
            outfitList: e
        }
    },
    Mr = l => {
        if (!l) return;
        const {
            outfitList: e
        } = Vr(l);
        return e.length < 1 ? null : e.filter(({
            name: s
        }) => Fn.get(s) ? .isSet)[0] || null
    };

function sl(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p;
    return {
        c() {
            e = w("div"), s = V(), n = w("div"), i = V(), a = w("div"), u = V(), f = w("div"), _ = V(), v = w("div"), this.h()
        },
        l(g) {
            e = k(g, "DIV", {
                class: !0
            }), E(e).forEach(c), s = M(g), n = k(g, "DIV", {
                class: !0,
                style: !0
            }), E(n).forEach(c), i = M(g), a = k(g, "DIV", {
                class: !0,
                style: !0
            }), E(a).forEach(c), u = M(g), f = k(g, "DIV", {
                class: !0,
                style: !0
            }), E(f).forEach(c), _ = M(g), v = k(g, "DIV", {
                class: !0,
                style: !0
            }), E(v).forEach(c), this.h()
        },
        h() {
            m(e, "class", t = "star" + l[1] + " orbs in5 svelte-1vbboks"), m(n, "class", r = "in animate star" + l[1] + " orbs in1 svelte-1vbboks"), te(n, "animation-duration", ".7s"), m(a, "class", o = "in animate star" + l[1] + " orbs in2 svelte-1vbboks"), te(a, "animation-duration", "1.2s"), m(f, "class", d = "in animate star" + l[1] + " orbs in3 svelte-1vbboks"), te(f, "animation-duration", "1.1s"), m(v, "class", p = "in animate star" + l[1] + " orbs in4 svelte-1vbboks"), te(v, "animation-duration", ".75s")
        },
        m(g, b) {
            z(g, e, b), z(g, s, b), z(g, n, b), z(g, i, b), z(g, a, b), z(g, u, b), z(g, f, b), z(g, _, b), z(g, v, b)
        },
        p(g, b) {
            b & 2 && t !== (t = "star" + g[1] + " orbs in5 svelte-1vbboks") && m(e, "class", t), b & 2 && r !== (r = "in animate star" + g[1] + " orbs in1 svelte-1vbboks") && m(n, "class", r), b & 2 && o !== (o = "in animate star" + g[1] + " orbs in2 svelte-1vbboks") && m(a, "class", o), b & 2 && d !== (d = "in animate star" + g[1] + " orbs in3 svelte-1vbboks") && m(f, "class", d), b & 2 && p !== (p = "in animate star" + g[1] + " orbs in4 svelte-1vbboks") && m(v, "class", p)
        },
        d(g) {
            g && c(e), g && c(s), g && c(n), g && c(i), g && c(a), g && c(u), g && c(f), g && c(_), g && c(v)
        }
    }
}

function ll(l) {
    let e, t, s, n, r, i, a, o;
    return {
        c() {
            e = w("div"), s = V(), n = w("div"), i = V(), a = w("div"), this.h()
        },
        l(u) {
            e = k(u, "DIV", {
                class: !0,
                style: !0
            }), E(e).forEach(c), s = M(u), n = k(u, "DIV", {
                class: !0,
                style: !0
            }), E(n).forEach(c), i = M(u), a = k(u, "DIV", {
                class: !0,
                style: !0
            }), E(a).forEach(c), this.h()
        },
        h() {
            m(e, "class", t = "out star" + l[1] + " orbs out1 animate svelte-1vbboks"), te(e, "animation-duration", "0.8s"), te(e, "animation-delay", ".1s"), m(n, "class", r = "out animate star" + l[1] + " orbs out2 svelte-1vbboks"), te(n, "animation-duration", "2s"), m(a, "class", o = "out animate star" + l[1] + " orbs out3 svelte-1vbboks"), te(a, "animation-duration", "1.2s"), te(a, "animation-delay", ".1s")
        },
        m(u, f) {
            z(u, e, f), z(u, s, f), z(u, n, f), z(u, i, f), z(u, a, f)
        },
        p(u, f) {
            f & 2 && t !== (t = "out star" + u[1] + " orbs out1 animate svelte-1vbboks") && m(e, "class", t), f & 2 && r !== (r = "out animate star" + u[1] + " orbs out2 svelte-1vbboks") && m(n, "class", r), f & 2 && o !== (o = "out animate star" + u[1] + " orbs out3 svelte-1vbboks") && m(a, "class", o)
        },
        d(u) {
            u && c(e), u && c(s), u && c(n), u && c(i), u && c(a)
        }
    }
}

function zr(l) {
    let e, t, s = l[0] === "in" && sl(l),
        n = l[0] === "out" && ll(l);
    return {
        c() {
            s && s.c(), e = V(), n && n.c(), t = Be()
        },
        l(r) {
            s && s.l(r), e = M(r), n && n.l(r), t = Be()
        },
        m(r, i) {
            s && s.m(r, i), z(r, e, i), n && n.m(r, i), z(r, t, i)
        },
        p(r, [i]) {
            r[0] === "in" ? s ? s.p(r, i) : (s = sl(r), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), r[0] === "out" ? n ? n.p(r, i) : (n = ll(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
        },
        i: Ne,
        o: Ne,
        d(r) {
            s && s.d(r), r && c(e), n && n.d(r), r && c(t)
        }
    }
}

function Gr(l, e, t) {
    let {
        type: s = ""
    } = e, {
        rarity: n = 0
    } = e;
    return it(() => {
        document.querySelectorAll(`.${s}`).forEach(i => {
            i.addEventListener("animationend", () => {
                i.classList.remove("animate")
            })
        })
    }), l.$$set = r => {
        "type" in r && t(0, s = r.type), "rarity" in r && t(1, n = r.rarity)
    }, [s, n]
}
class qn extends ze {
    constructor(e) {
        super(), Ge(this, e, Gr, zr, Oe, {
            type: 0,
            rarity: 1
        })
    }
}

function nl(l, e, t) {
    const s = l.slice();
    return s[32] = e[t].name, s[33] = e[t].rarity, s[34] = e[t].weaponType, s[35] = e[t].type, s[36] = e[t].vision, s[37] = e[t].fateType, s[38] = e[t].fateQty, s[39] = e[t].stelaFortuna, s[40] = e[t].outfit, s[42] = t, s
}

function rl(l, e, t) {
    const s = l.slice();
    return s[43] = e[t], s[42] = t, s
}

function Or(l) {
    let e, t, s, n, r;

    function i(v, p) {
        return v[0].length === 1 ? Ur : Wr
    }
    let a = i(l),
        o = a(l),
        u = l[0],
        f = [];
    for (let v = 0; v < u.length; v += 1) f[v] = _l(nl(l, u, v));
    const d = v => U(f[v], 1, 1, () => {
        f[v] = null
    });
    let _ = l[0][l[6]].type === "character" && pl(l);
    return {
        c() {
            e = w("div"), o.c(), t = V();
            for (let v = 0; v < f.length; v += 1) f[v].c();
            s = V(), _ && _.c(), this.h()
        },
        l(v) {
            e = k(v, "DIV", {
                class: !0
            });
            var p = E(e);
            o.l(p), t = M(p);
            for (let g = 0; g < f.length; g += 1) f[g].l(p);
            s = M(p), _ && _.l(p), p.forEach(c), this.h()
        },
        h() {
            m(e, "class", "container svelte-1taj0re")
        },
        m(v, p) {
            z(v, e, p), o.m(e, null), h(e, t);
            for (let g = 0; g < f.length; g += 1) f[g].m(e, null);
            h(e, s), _ && _.m(e, null), l[21](e), r = !0
        },
        p(v, p) {
            if (l = v, a === (a = i(l)) && o ? o.p(l, p) : (o.d(1), o = a(l), o && (o.c(), j(o, 1), o.m(e, t))), p[0] & 4045) {
                u = l[0];
                let g;
                for (g = 0; g < u.length; g += 1) {
                    const b = nl(l, u, g);
                    f[g] ? (f[g].p(b, p), j(f[g], 1)) : (f[g] = _l(b), f[g].c(), j(f[g], 1), f[g].m(e, s))
                }
                for (ke(), g = u.length; g < f.length; g += 1) d(g);
                Ee()
            }
            l[0][l[6]].type === "character" ? _ ? (_.p(l, p), p[0] & 65 && j(_, 1)) : (_ = pl(l), _.c(), j(_, 1), _.m(e, null)) : _ && (ke(), U(_, 1, 1, () => {
                _ = null
            }), Ee())
        },
        i(v) {
            if (!r) {
                j(o);
                for (let p = 0; p < u.length; p += 1) j(f[p]);
                j(_), n || Re(() => {
                    n = Me(e, l[14], {
                        animeoff: l[9]
                    }), n.start()
                }), r = !0
            }
        },
        o(v) {
            f = f.filter(Boolean);
            for (let p = 0; p < f.length; p += 1) U(f[p]);
            U(_), r = !1
        },
        d(v) {
            v && c(e), o.d(), qe(f, v), _ && _.d(), l[21](null)
        }
    }
}

function Pr(l) {
    let e, t;
    return e = new or({
        props: {
            list: l[0]
        }
    }), e.$on("wishEnd", l[16]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 1 && (r.list = s[0]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Wr(l) {
    let e, t = l[11]("wish.result.skip") + "",
        s, n, r, i, a;
    return {
        c() {
            e = w("button"), s = J(t), n = V(), r = w("i"), this.h()
        },
        l(o) {
            e = k(o, "BUTTON", {
                class: !0
            });
            var u = E(e);
            s = C(u, t), n = M(u), r = k(u, "I", {
                class: !0
            }), E(r).forEach(c), u.forEach(c), this.h()
        },
        h() {
            m(r, "class", "gi-caret-up svelte-1taj0re"), m(e, "class", "skip svelte-1taj0re")
        },
        m(o, u) {
            z(o, e, u), h(e, s), h(e, n), h(e, r), i || (a = be(e, "click", Xe(l[17])), i = !0)
        },
        p(o, u) {
            u[0] & 2048 && t !== (t = o[11]("wish.result.skip") + "") && K(s, t)
        },
        i: Ne,
        o: Ne,
        d(o) {
            o && c(e), i = !1, a()
        }
    }
}

function Ur(l) {
    let e, t, s, n, r;
    return {
        c() {
            e = w("button"), t = w("i"), this.h()
        },
        l(i) {
            e = k(i, "BUTTON", {
                class: !0
            });
            var a = E(e);
            t = k(a, "I", {
                class: !0
            }), E(t).forEach(c), a.forEach(c), this.h()
        },
        h() {
            m(t, "class", "gi-close"), m(e, "class", "close svelte-1taj0re")
        },
        m(i, a) {
            z(i, e, a), h(e, t), n || (r = be(e, "click", l[16]), n = !0)
        },
        p: Ne,
        i(i) {
            s || Re(() => {
                s = Me(e, $e, {
                    delay: 1500
                }), s.start()
            })
        },
        o: Ne,
        d(i) {
            i && c(e), n = !1, r()
        }
    }
}

function il(l) {
    let e, t, s, n, r, i, a, o, u, f, d = [],
        _ = new Map,
        v, p, g, b, A, N, B, D, I = !l[7] && !l[9] && al(l);

    function y(ee, le) {
        return ee[35] === "weapon" ? Lr : ee[2] ? Zr : Yr
    }
    let S = y(l),
        P = S(l);

    function Y(ee, le) {
        return ee[36] ? Cr : Jr
    }
    let L = Y(l),
        G = L(l),
        T = l[2] && ol(l);

    function O(ee, le) {
        return ee[2] ? Hr : ee[35] === "weapon" ? Fr : $r
    }
    let R = O(l),
        W = R(l),
        F = Array(l[33]);
    const oe = ee => ee[42];
    for (let ee = 0; ee < F.length; ee += 1) {
        let le = rl(l, F, ee),
            x = oe(le);
        _.set(x, d[ee] = ul(x, le))
    }
    let Z = l[2] && fl(l),
        H = l[39] && cl(l),
        X = l[35] === "character" && l[37] && dl(l),
        he = l[35] === "weapon" && l[38] > 1 && hl(l),
        _e = l[7] && !l[9] && ml(l);
    return {
        c() {
            e = w("div"), I && I.c(), t = V(), P.c(), s = V(), n = w("div"), G.c(), r = V(), i = w("div"), T && T.c(), a = V(), o = w("div"), W.c(), u = V(), f = w("div");
            for (let ee = 0; ee < d.length; ee += 1) d[ee].c();
            v = V(), Z && Z.c(), p = V(), g = w("div"), H && H.c(), b = V(), X && X.c(), A = V(), he && he.c(), N = V(), _e && _e.c(), this.h()
        },
        l(ee) {
            e = k(ee, "DIV", {
                class: !0,
                style: !0
            });
            var le = E(e);
            I && I.l(le), t = M(le), P.l(le), s = M(le), n = k(le, "DIV", {
                class: !0
            });
            var x = E(n);
            G.l(x), r = M(x), i = k(x, "DIV", {
                class: !0
            });
            var we = E(i);
            T && T.l(we), a = M(we), o = k(we, "DIV", {
                class: !0
            });
            var ue = E(o);
            W.l(ue), ue.forEach(c), u = M(we), f = k(we, "DIV", {
                class: !0
            });
            var me = E(f);
            for (let se = 0; se < d.length; se += 1) d[se].l(me);
            me.forEach(c), v = M(we), Z && Z.l(we), we.forEach(c), p = M(x), g = k(x, "DIV", {
                class: !0
            });
            var ce = E(g);
            H && H.l(ce), b = M(ce), X && X.l(ce), ce.forEach(c), x.forEach(c), A = M(le), he && he.l(le), N = M(le), _e && _e.l(le), le.forEach(c), this.h()
        },
        h() {
            m(o, "class", "text anim svelte-1taj0re"), m(f, "class", "star"), m(i, "class", "name svelte-1taj0re"), m(g, "class", "bonus anim svelte-1taj0re"), m(n, "class", "info svelte-1taj0re"), m(e, "class", B = "splatter star" + l[33] + " svelte-1taj0re"), m(e, "style", l[8])
        },
        m(ee, le) {
            z(ee, e, le), I && I.m(e, null), h(e, t), P.m(e, null), h(e, s), h(e, n), G.m(n, null), h(n, r), h(n, i), T && T.m(i, null), h(i, a), h(i, o), W.m(o, null), h(i, u), h(i, f);
            for (let x = 0; x < d.length; x += 1) d[x].m(f, null);
            h(i, v), Z && Z.m(i, null), h(n, p), h(n, g), H && H.m(g, null), h(g, b), X && X.m(g, null), h(e, A), he && he.m(e, null), h(e, N), _e && _e.m(e, null), D = !0
        },
        p(ee, le) {
            !ee[7] && !ee[9] ? I ? (I.p(ee, le), le[0] & 640 && j(I, 1)) : (I = al(ee), I.c(), j(I, 1), I.m(e, t)) : I && (ke(), U(I, 1, 1, () => {
                I = null
            }), Ee()), S === (S = y(ee)) && P ? P.p(ee, le) : (P.d(1), P = S(ee), P && (P.c(), P.m(e, s))), L === (L = Y(ee)) && G ? G.p(ee, le) : (G.d(1), G = L(ee), G && (G.c(), G.m(n, r))), ee[2] ? T ? T.p(ee, le) : (T = ol(ee), T.c(), T.m(i, a)) : T && (T.d(1), T = null), R === (R = O(ee)) && W ? W.p(ee, le) : (W.d(1), W = R(ee), W && (W.c(), W.m(o, null))), le[0] & 1 && (F = Array(ee[33]), d = Is(d, le, oe, 1, ee, F, _, f, Ds, ul, null, rl)), ee[2] ? Z ? Z.p(ee, le) : (Z = fl(ee), Z.c(), Z.m(i, null)) : Z && (Z.d(1), Z = null), ee[39] ? H ? H.p(ee, le) : (H = cl(ee), H.c(), H.m(g, b)) : H && (H.d(1), H = null), ee[35] === "character" && ee[37] ? X ? (X.p(ee, le), le[0] & 1 && j(X, 1)) : (X = dl(ee), X.c(), j(X, 1), X.m(g, null)) : X && (ke(), U(X, 1, 1, () => {
                X = null
            }), Ee()), ee[35] === "weapon" && ee[38] > 1 ? he ? (he.p(ee, le), le[0] & 1 && j(he, 1)) : (he = hl(ee), he.c(), j(he, 1), he.m(e, N)) : he && (ke(), U(he, 1, 1, () => {
                he = null
            }), Ee()), ee[7] && !ee[9] ? _e ? (_e.p(ee, le), le[0] & 640 && j(_e, 1)) : (_e = ml(ee), _e.c(), j(_e, 1), _e.m(e, null)) : _e && (ke(), U(_e, 1, 1, () => {
                _e = null
            }), Ee()), (!D || le[0] & 1 && B !== (B = "splatter star" + ee[33] + " svelte-1taj0re")) && m(e, "class", B), (!D || le[0] & 256) && m(e, "style", ee[8])
        },
        i(ee) {
            D || (j(I), j(X), j(he), j(_e), D = !0)
        },
        o(ee) {
            U(I), U(X), U(he), U(_e), D = !1
        },
        d(ee) {
            ee && c(e), I && I.d(), P.d(), G.d(), T && T.d(), W.d();
            for (let le = 0; le < d.length; le += 1) d[le].d();
            Z && Z.d(), H && H.d(), X && X.d(), he && he.d(), _e && _e.d()
        }
    }
}

function al(l) {
    let e, t;
    return e = new qn({
        props: {
            type: "in",
            rarity: l[33]
        }
    }), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 1 && (r.rarity = s[33]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Yr(l) {
    let e, t, s, n, r;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(i) {
            e = k(i, "IMG", {
                src: !0,
                alt: !0,
                class: !0,
                crossorigin: !0
            }), this.h()
        },
        h() {
            Te(e.src, t = l[10][`splash-art/${l[40]||l[32]}`]) || m(e, "src", t), m(e, "alt", s = l[32]), m(e, "class", "splash-art anim svelte-1taj0re"), m(e, "crossorigin", "anonymous")
        },
        m(i, a) {
            z(i, e, a), n || (r = be(e, "error", Kr), n = !0)
        },
        p(i, a) {
            a[0] & 1025 && !Te(e.src, t = i[10][`splash-art/${i[40]||i[32]}`]) && m(e, "src", t), a[0] & 1 && s !== (s = i[32]) && m(e, "alt", s)
        },
        d(i) {
            i && c(e), n = !1, r()
        }
    }
}

function Zr(l) {
    let e, t, s, n, r;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(i) {
            e = k(i, "IMG", {
                src: !0,
                alt: !0,
                class: !0,
                crossorigin: !0
            }), this.h()
        },
        h() {
            Te(e.src, t = l[10][`splash-art/${l[2]}`]) || m(e, "src", t), m(e, "alt", s = l[32]), m(e, "class", "splash-art anim svelte-1taj0re"), m(e, "crossorigin", "anonymous")
        },
        m(i, a) {
            z(i, e, a), n || (r = be(e, "error", Qr), n = !0)
        },
        p(i, a) {
            a[0] & 1028 && !Te(e.src, t = i[10][`splash-art/${i[2]}`]) && m(e, "src", t), a[0] & 1 && s !== (s = i[32]) && m(e, "alt", s)
        },
        d(i) {
            i && c(e), n = !1, r()
        }
    }
}

function Lr(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _;
    return {
        c() {
            e = w("div"), t = w("img"), r = V(), i = w("img"), this.h()
        },
        l(v) {
            e = k(v, "DIV", {
                class: !0
            });
            var p = E(e);
            t = k(p, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), r = M(p), i = k(p, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), p.forEach(c), this.h()
        },
        h() {
            Te(t.src, s = l[10][`bg-${l[34]}.webp`]) || m(t, "src", s), m(t, "alt", n = l[34]), m(t, "class", "weaponbg svelte-1taj0re"), Te(i.src, a = l[10][l[32]]) || m(i, "src", a), m(i, "alt", o = l[32]), m(i, "class", u = Ot(l[34]) + " svelte-1taj0re"), m(e, "class", f = "splash-art anim weapon " + l[34] + "-parent svelte-1taj0re")
        },
        m(v, p) {
            z(v, e, p), h(e, t), h(e, r), h(e, i), d || (_ = be(i, "error", qr), d = !0)
        },
        p(v, p) {
            p[0] & 1025 && !Te(t.src, s = v[10][`bg-${v[34]}.webp`]) && m(t, "src", s), p[0] & 1 && n !== (n = v[34]) && m(t, "alt", n), p[0] & 1025 && !Te(i.src, a = v[10][v[32]]) && m(i, "src", a), p[0] & 1 && o !== (o = v[32]) && m(i, "alt", o), p[0] & 1 && u !== (u = Ot(v[34]) + " svelte-1taj0re") && m(i, "class", u), p[0] & 1 && f !== (f = "splash-art anim weapon " + v[34] + "-parent svelte-1taj0re") && m(e, "class", f)
        },
        d(v) {
            v && c(e), d = !1, _()
        }
    }
}

function Jr(l) {
    let e, t;
    return {
        c() {
            e = w("i"), this.h()
        },
        l(s) {
            e = k(s, "I", {
                class: !0
            }), E(e).forEach(c), this.h()
        },
        h() {
            m(e, "class", t = "anim elemen gi-" + l[34] + " svelte-1taj0re")
        },
        m(s, n) {
            z(s, e, n)
        },
        p(s, n) {
            n[0] & 1 && t !== (t = "anim elemen gi-" + s[34] + " svelte-1taj0re") && m(e, "class", t)
        },
        d(s) {
            s && c(e)
        }
    }
}

function Cr(l) {
    let e, t, s, n;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(r) {
            e = k(r, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), this.h()
        },
        h() {
            Te(e.src, t = l[10][`icon-${l[36]}.svg`]) || m(e, "src", t), m(e, "alt", s = "Vision " + l[36]), m(e, "class", n = "anim vision " + l[36] + " svelte-1taj0re")
        },
        m(r, i) {
            z(r, e, i)
        },
        p(r, i) {
            i[0] & 1025 && !Te(e.src, t = r[10][`icon-${r[36]}.svg`]) && m(e, "src", t), i[0] & 1 && s !== (s = "Vision " + r[36]) && m(e, "alt", s), i[0] & 1 && n !== (n = "anim vision " + r[36] + " svelte-1taj0re") && m(e, "class", n)
        },
        d(r) {
            r && c(e)
        }
    }
}

function ol(l) {
    let e, t = l[11]("outfit.obtained") + "",
        s;
    return {
        c() {
            e = w("span"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "SPAN", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "anim svelte-1taj0re")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r[0] & 2048 && t !== (t = n[11]("outfit.obtained") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function $r(l) {
    let e = l[11](`${l[32]}.name`) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 2049 && e !== (e = s[11](`${s[32]}.name`) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function Fr(l) {
    let e = l[11](l[32]) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 2049 && e !== (e = s[11](s[32]) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function Hr(l) {
    let e = l[11](`outfit.item.${l[2]}.name`) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 2052 && e !== (e = s[11](`outfit.item.${s[2]}.name`) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function ul(l, e) {
    let t;
    return {
        key: l,
        first: null,
        c() {
            t = w("i"), this.h()
        },
        l(s) {
            t = k(s, "I", {
                class: !0,
                style: !0
            }), E(t).forEach(c), this.h()
        },
        h() {
            m(t, "class", "gi-star anim svelte-1taj0re"), te(t, "animation-delay", 2 + e[42] * .15 + "s"), this.first = t
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            e = s, n[0] & 1 && te(t, "animation-delay", 2 + e[42] * .15 + "s")
        },
        d(s) {
            s && c(t)
        }
    }
}

function fl(l) {
    let e, t = l[11]("outfit.unlocked", {
            values: {
                character: l[11](`${l[3]}.name`)
            }
        }) + "",
        s;
    return {
        c() {
            e = w("span"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "SPAN", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "anim svelte-1taj0re")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r[0] & 2056 && t !== (t = n[11]("outfit.unlocked", {
                values: {
                    character: n[11](`${n[3]}.name`)
                }
            }) + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function cl(l) {
    let e, t, s, n;
    return {
        c() {
            e = w("div"), t = w("img"), this.h()
        },
        l(r) {
            e = k(r, "DIV", {
                class: !0
            });
            var i = E(e);
            t = k(i, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), i.forEach(c), this.h()
        },
        h() {
            Te(t.src, s = l[10][`stella-fortuna-${l[33]}star.webp`]) || m(t, "src", s), m(t, "alt", "Stella Formula"), m(t, "class", "svelte-1taj0re"), m(e, "class", n = "stella stella" + l[33] + " svelte-1taj0re")
        },
        m(r, i) {
            z(r, e, i), h(e, t)
        },
        p(r, i) {
            i[0] & 1025 && !Te(t.src, s = r[10][`stella-fortuna-${r[33]}star.webp`]) && m(t, "src", s), i[0] & 1 && n !== (n = "stella stella" + r[33] + " svelte-1taj0re") && m(e, "class", n)
        },
        d(r) {
            r && c(e)
        }
    }
}

function dl(l) {
    let e, t, s, n, r = l[38] + "",
        i, a;
    return t = new tt({
        props: {
            type: "starglitter",
            width: "80%"
        }
    }), {
        c() {
            e = w("div"), ne(t.$$.fragment), s = V(), n = w("span"), i = J(r), this.h()
        },
        l(o) {
            e = k(o, "DIV", {
                class: !0
            });
            var u = E(e);
            de(t.$$.fragment, u), s = M(u), n = k(u, "SPAN", {
                class: !0
            });
            var f = E(n);
            i = C(f, r), f.forEach(c), u.forEach(c), this.h()
        },
        h() {
            m(n, "class", "svelte-1taj0re"), m(e, "class", "masterless starglitter svelte-1taj0re")
        },
        m(o, u) {
            z(o, e, u), re(t, e, null), h(e, s), h(e, n), h(n, i), a = !0
        },
        p(o, u) {
            (!a || u[0] & 1) && r !== (r = o[38] + "") && K(i, r)
        },
        i(o) {
            a || (j(t.$$.fragment, o), a = !0)
        },
        o(o) {
            U(t.$$.fragment, o), a = !1
        },
        d(o) {
            o && c(e), ie(t)
        }
    }
}

function hl(l) {
    let e, t, s, n, r, i, a = l[11]("extra") + "",
        o, u, f = l[11](`shop.item.${l[37]}`) + "",
        d, _, v, p, g = l[38] + "",
        b, A, N;
    return s = new tt({
        props: {
            type: l[37],
            width: Ht ? "50px" : "60px"
        }
    }), {
        c() {
            e = w("div"), t = w("div"), ne(s.$$.fragment), n = V(), r = w("div"), i = w("span"), o = J(a), u = V(), d = J(f), _ = V(), v = w("br"), p = J(" x"), b = J(g), this.h()
        },
        l(B) {
            e = k(B, "DIV", {
                class: !0
            });
            var D = E(e);
            t = k(D, "DIV", {
                class: !0
            });
            var I = E(t);
            de(s.$$.fragment, I), I.forEach(c), n = M(D), r = k(D, "DIV", {
                class: !0
            });
            var y = E(r);
            i = k(y, "SPAN", {
                class: !0
            });
            var S = E(i);
            o = C(S, a), S.forEach(c), u = M(y), d = C(y, f), _ = M(y), v = k(y, "BR", {}), p = C(y, " x"), b = C(y, g), y.forEach(c), D.forEach(c), this.h()
        },
        h() {
            m(t, "class", "icon svelte-1taj0re"), m(i, "class", "svelte-1taj0re"), m(r, "class", "text svelte-1taj0re"), m(e, "class", A = "starfate anim " + l[37] + " svelte-1taj0re")
        },
        m(B, D) {
            z(B, e, D), h(e, t), re(s, t, null), h(e, n), h(e, r), h(r, i), h(i, o), h(r, u), h(r, d), h(r, _), h(r, v), h(r, p), h(r, b), N = !0
        },
        p(B, D) {
            const I = {};
            D[0] & 1 && (I.type = B[37]), s.$set(I), (!N || D[0] & 2048) && a !== (a = B[11]("extra") + "") && K(o, a), (!N || D[0] & 2049) && f !== (f = B[11](`shop.item.${B[37]}`) + "") && K(d, f), (!N || D[0] & 1) && g !== (g = B[38] + "") && K(b, g), (!N || D[0] & 1 && A !== (A = "starfate anim " + B[37] + " svelte-1taj0re")) && m(e, "class", A)
        },
        i(B) {
            N || (j(s.$$.fragment, B), N = !0)
        },
        o(B) {
            U(s.$$.fragment, B), N = !1
        },
        d(B) {
            B && c(e), ie(s)
        }
    }
}

function ml(l) {
    let e, t;
    return e = new qn({
        props: {
            type: "out",
            rarity: l[33]
        }
    }), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 1 && (r.rarity = s[33]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function _l(l) {
    let e, t, s = l[6] === l[42] && il(l);
    return {
        c() {
            s && s.c(), e = Be()
        },
        l(n) {
            s && s.l(n), e = Be()
        },
        m(n, r) {
            s && s.m(n, r), z(n, e, r), t = !0
        },
        p(n, r) {
            n[6] === n[42] ? s ? (s.p(n, r), r[0] & 64 && j(s, 1)) : (s = il(n), s.c(), j(s, 1), s.m(e.parentNode, e)) : s && (ke(), U(s, 1, 1, () => {
                s = null
            }), Ee())
        },
        i(n) {
            t || (j(s), t = !0)
        },
        o(n) {
            U(s), t = !1
        },
        d(n) {
            s && s.d(n), n && c(e)
        }
    }
}

function pl(l) {
    let e, t, s;
    return t = new ur({
        props: {
            page: "chars",
            encodedData: l[15](l[6]),
            item: yt(l[0][l[6]].name)
        }
    }), {
        c() {
            e = w("div"), ne(t.$$.fragment), this.h()
        },
        l(n) {
            e = k(n, "DIV", {
                class: !0
            });
            var r = E(e);
            de(t.$$.fragment, r), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "share svelte-1taj0re")
        },
        m(n, r) {
            z(n, e, r), re(t, e, null), s = !0
        },
        p(n, r) {
            const i = {};
            r[0] & 64 && (i.encodedData = n[15](n[6])), r[0] & 65 && (i.item = yt(n[0][n[6]].name)), t.$set(i)
        },
        i(n) {
            s || (j(t.$$.fragment, n), s = !0)
        },
        o(n) {
            U(t.$$.fragment, n), s = !1
        },
        d(n) {
            n && c(e), ie(t)
        }
    }
}

function Xr(l) {
    let e, t, s, n, r, i, a, o, u, f;
    const d = [Pr, Or],
        _ = [];

    function v(p, g) {
        return p[4] || p[1] ? 0 : 1
    }
    return o = v(l), u = _[o] = d[o](l), {
        c() {
            e = w("div"), t = w("div"), s = J("WishSimulator.App"), n = V(), r = w("img"), a = V(), u.c(), this.h()
        },
        l(p) {
            e = k(p, "DIV", {
                class: !0,
                style: !0
            });
            var g = E(e);
            t = k(g, "DIV", {
                class: !0
            });
            var b = E(t);
            s = C(b, "WishSimulator.App"), b.forEach(c), n = M(g), r = k(g, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), a = M(g), u.l(g), g.forEach(c), this.h()
        },
        h() {
            m(t, "class", "uid svelte-1taj0re"), Te(r.src, i = l[10][`genshin-logo${l[12]?"-cn":""}.webp`]) || m(r, "src", i), m(r, "alt", "genshin logo"), m(r, "class", "logo svelte-1taj0re"), ye(r, "cn", l[12]), m(e, "class", "wish-result svelte-1taj0re"), te(e, "background-image", "url(" + l[13] + ")")
        },
        m(p, g) {
            z(p, e, g), h(e, t), h(t, s), h(e, n), h(e, r), h(e, a), _[o].m(e, null), f = !0
        },
        p(p, g) {
            (!f || g[0] & 1024 && !Te(r.src, i = p[10][`genshin-logo${p[12]?"-cn":""}.webp`])) && m(r, "src", i);
            let b = o;
            o = v(p), o === b ? _[o].p(p, g) : (ke(), U(_[b], 1, 1, () => {
                _[b] = null
            }), Ee(), u = _[o], u ? u.p(p, g) : (u = _[o] = d[o](p), u.c()), j(u, 1), u.m(e, null))
        },
        i(p) {
            f || (j(u), f = !0)
        },
        o(p) {
            U(u), f = !1
        },
        d(p) {
            p && c(e), _[o].d()
        }
    }
}
const qr = l => l.target.remove(),
    Qr = l => l.target.remove(),
    Kr = l => l.target.remove();

function xr(l, e, t) {
    let s, n, r, i, a, o, u, f, d;
    q(l, Jt, H => t(9, r = H)), q(l, Pt, H => t(23, i = H)), q(l, st, H => t(10, a = H)), q(l, Bt, H => t(19, o = H)), q(l, Rs, H => t(20, u = H)), q(l, Wt, H => t(24, f = H)), q(l, Le, H => t(11, d = H));
    let {
        list: _ = []
    } = e, {
        skipSplashOneByOne: v = !1
    } = e, {
        outfitName: p = ""
    } = e, {
        outfitOwner: g = ""
    } = e;
    const b = f ? .toLowerCase() || "",
        A = b.includes("cn") || b.includes("ja");
    let N = p ? a["outfit-background.webp"] : a["splash-background.webp"];
    const B = (H, X) => X.animeoff ? $e(H, {
            duration: 500,
            delay: 200
        }) : null,
        D = H => {
            const X = Mr(H.name);
            if (!X) return H;
            const {
                wishBoxPosition: he,
                name: _e
            } = X;
            return H.outfit = _e, H.outfitOffset = he, H
        };
    _ = _.map(D);
    let I = !1,
        y, S = 0,
        P = !1,
        Y;
    const L = () => {
            clearTimeout(Y), t(7, P = !1), Y = setTimeout(() => {
                t(7, P = !0), clearTimeout(Y)
            }, 1100)
        },
        G = () => {
            if (L(), i) return;
            if (S > 0) {
                const X = _[S - 1].rarity;
                Se(`reveal${X}Star`, {
                    paused: !0
                })
            }
            const H = _[S].rarity;
            Se(`reveal${H}Star`)
        },
        T = H => {
            const {
                fateQty: X,
                fateType: he,
                vision: _e,
                rarity: ee,
                name: le,
                stelaFortuna: x,
                outfit: we
            } = _[H];
            return btoa(`${le}/${ee}/${_e}/${+x}/${X}/${he}/${we}`)
        },
        O = H => {
            if (_.length === 1) {
                H === "start" && G();
                return
            }
            if (S > _.length - 2) {
                t(4, I = !0);
                return
            }
            H !== "start" && t(6, S = S + 1), G()
        },
        R = at(),
        W = () => {
            R("wishEnd"), Se("close")
        },
        F = () => {
            Se(), t(1, v = !0)
        },
        oe = () => {
            const {
                outfitName: H
            } = _[0];
            Fn.set(H, !0)
        };
    it(() => {
        p && oe(), !v && (O("start"), y.addEventListener("click", O))
    }), Zn(() => {
        y ? .querySelectorAll(".anim").forEach(H => {
            if (r) return H.classList.remove("anim");
            H.addEventListener("animationend", () => H.classList.remove("anim"))
        })
    });

    function Z(H) {
        Ke[H ? "unshift" : "push"](() => {
            y = H, t(5, y)
        })
    }
    return l.$$set = H => {
        "list" in H && t(0, _ = H.list), "skipSplashOneByOne" in H && t(1, v = H.skipSplashOneByOne), "outfitName" in H && t(2, p = H.outfitName), "outfitOwner" in H && t(3, g = H.outfitOwner)
    }, l.$$.update = () => {
        l.$$.dirty[0] & 1572864 && t(18, s = o > u ? u : o), l.$$.dirty[0] & 262144 && t(8, n = `width: ${s}px; height: ${s}px`)
    }, [_, v, p, g, I, y, S, P, n, r, a, d, A, N, B, T, W, F, s, o, u, Z]
}
class ei extends ze {
    constructor(e) {
        super(), Ge(this, e, xr, Xr, Oe, {
            list: 0,
            skipSplashOneByOne: 1,
            outfitName: 2,
            outfitOwner: 3
        }, null, [-1, -1])
    }
}

function vl(l) {
    let e, t, s;
    return {
        c() {
            e = w("div"), t = w("span"), s = J("i"), this.h()
        },
        l(n) {
            e = k(n, "DIV", {
                class: !0,
                style: !0
            });
            var r = E(e);
            t = k(r, "SPAN", {
                class: !0
            });
            var i = E(t);
            s = C(i, "i"), i.forEach(c), r.forEach(c), this.h()
        },
        h() {
            m(t, "class", "svelte-v7y2hv"), m(e, "class", "notice svelte-v7y2hv"), m(e, "style", l[0])
        },
        m(n, r) {
            z(n, e, r), h(e, t), h(t, s)
        },
        p(n, r) {
            r & 1 && m(e, "style", n[0])
        },
        d(n) {
            n && c(e)
        }
    }
}

function ti(l) {
    let e, t = l[1] && vl(l);
    return {
        c() {
            t && t.c(), e = Be()
        },
        l(s) {
            t && t.l(s), e = Be()
        },
        m(s, n) {
            t && t.m(s, n), z(s, e, n)
        },
        p(s, [n]) {
            s[1] ? t ? t.p(s, n) : (t = vl(s), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null)
        },
        i: Ne,
        o: Ne,
        d(s) {
            t && t.d(s), s && c(e)
        }
    }
}

function si(l, e, t) {
    let s;
    q(l, $n, a => t(3, s = a));
    let {
        name: n = ""
    } = e, {
        style: r = ""
    } = e, i = !1;
    return l.$$set = a => {
        "name" in a && t(2, n = a.name), "style" in a && t(0, r = a.style)
    }, l.$$.update = () => {
        if (l.$$.dirty & 12)
            if (!Array.isArray(n)) t(1, i = !s.includes(n));
            else {
                const a = [];
                n.forEach(o => a.push(s.includes(o))), t(1, i = a.includes(!1))
            }
    }, [r, i, n, s]
}
class Bs extends ze {
    constructor(e) {
        super(), Ge(this, e, si, ti, Oe, {
            name: 2,
            style: 0
        })
    }
}

function gl(l, e, t) {
    const s = l.slice();
    return s[17] = e[t].name, s[18] = e[t].buttonBoxPosition, s[3] = e[t].type, s
}

function bl(l) {
    let e, t;
    return e = new Bs({
        props: {
            name: l[4],
            style: "transform: translateY(-130%) translateX(50%); z-index:+10"
        }
    }), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 16 && (r.name = s[4]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function li(l) {
    let e, t, s, n, r, i, a;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(o) {
            e = k(o, "IMG", {
                src: !0,
                alt: !0,
                style: !0,
                crossorigin: !0,
                class: !0
            }), this.h()
        },
        h() {
            Te(e.src, t = "https://cdn.wishsimulator.app/images/characters/banner-button/" + l[2].character + ".webp") || m(e, "src", t), m(e, "alt", s = l[3] + " Wish"), m(e, "style", n = l[6](l[2].buttonBoxPosition, l[0])), m(e, "crossorigin", "anonymous"), m(e, "class", "svelte-it4zqk")
        },
        m(o, u) {
            z(o, e, u), i || (a = be(e, "error", ai), i = !0)
        },
        p(o, u) {
            u & 4 && !Te(e.src, t = "https://cdn.wishsimulator.app/images/characters/banner-button/" + o[2].character + ".webp") && m(e, "src", t), u & 8 && s !== (s = o[3] + " Wish") && m(e, "alt", s), u & 5 && n !== (n = o[6](o[2].buttonBoxPosition, o[0])) && m(e, "style", n)
        },
        i(o) {
            r || Re(() => {
                r = Me(e, $e, {}), r.start()
            })
        },
        o: Ne,
        d(o) {
            o && c(e), i = !1, a()
        }
    }
}

function ni(l) {
    let e, t = l[1].featured,
        s = [];
    for (let n = 0; n < t.length; n += 1) s[n] = wl(gl(l, t, n));
    return {
        c() {
            for (let n = 0; n < s.length; n += 1) s[n].c();
            e = Be()
        },
        l(n) {
            for (let r = 0; r < s.length; r += 1) s[r].l(n);
            e = Be()
        },
        m(n, r) {
            for (let i = 0; i < s.length; i += 1) s[i].m(n, r);
            z(n, e, r)
        },
        p(n, r) {
            if (r & 99) {
                t = n[1].featured;
                let i;
                for (i = 0; i < t.length; i += 1) {
                    const a = gl(n, t, i);
                    s[i] ? (s[i].p(a, r), j(s[i], 1)) : (s[i] = wl(a), s[i].c(), j(s[i], 1), s[i].m(e.parentNode, e))
                }
                for (; i < s.length; i += 1) s[i].d(1);
                s.length = t.length
            }
        },
        i(n) {
            for (let r = 0; r < t.length; r += 1) j(s[r])
        },
        o: Ne,
        d(n) {
            qe(s, n), n && c(e)
        }
    }
}

function wl(l) {
    let e, t, s, n, r, i;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(a) {
            e = k(a, "IMG", {
                src: !0,
                alt: !0,
                style: !0,
                crossorigin: !0,
                class: !0
            }), this.h()
        },
        h() {
            Te(e.src, t = l[5][l[17]]) || m(e, "src", t), m(e, "alt", "Weapon Wish"), m(e, "style", s = l[6](l[18], l[0])), m(e, "crossorigin", "anonymous"), m(e, "class", "svelte-it4zqk")
        },
        m(a, o) {
            z(a, e, o), r || (i = be(e, "error", ii), r = !0)
        },
        p(a, o) {
            o & 34 && !Te(e.src, t = a[5][a[17]]) && m(e, "src", t), o & 3 && s !== (s = a[6](a[18], a[0])) && m(e, "style", s)
        },
        i(a) {
            n || Re(() => {
                n = Me(e, $e, {}), n.start()
            })
        },
        o: Ne,
        d(a) {
            a && c(e), r = !1, i()
        }
    }
}

function kl(l) {
    let e, t;
    return {
        c() {
            e = w("div"), t = J("-20%"), this.h()
        },
        l(s) {
            e = k(s, "DIV", {
                class: !0
            });
            var n = E(e);
            t = C(n, "-20%"), n.forEach(c), this.h()
        },
        h() {
            m(e, "class", "discount svelte-it4zqk")
        },
        m(s, n) {
            z(s, e, n), h(e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}

function ri(l) {
    let e, t = ["weapons", "events"].includes(l[3]),
        s, n, r, i, a, o, u, f, d, _, v, p = t && bl(l);

    function g(B, D) {
        return B[3] === "weapons" ? ni : li
    }
    let b = g(l),
        A = b(l),
        N = l[3] === "beginner" && kl();
    return {
        c() {
            e = w("button"), p && p.c(), s = V(), n = w("i"), r = V(), i = w("i"), a = V(), o = w("div"), A.c(), u = V(), N && N.c(), this.h()
        },
        l(B) {
            e = k(B, "BUTTON", {
                class: !0
            });
            var D = E(e);
            p && p.l(D), s = M(D), n = k(D, "I", {
                class: !0
            }), E(n).forEach(c), r = M(D), i = k(D, "I", {
                class: !0
            }), E(i).forEach(c), a = M(D), o = k(D, "DIV", {
                class: !0
            });
            var I = E(o);
            A.l(I), I.forEach(c), u = M(D), N && N.l(D), D.forEach(c), this.h()
        },
        h() {
            m(n, "class", "gi-primo-star svelte-it4zqk"), m(i, "class", "gi-companion svelte-it4zqk"), m(o, "class", "picture svelte-it4zqk"), m(e, "class", f = "button " + l[3] + " svelte-it4zqk"), ye(e, "active", l[0])
        },
        m(B, D) {
            z(B, e, D), p && p.m(e, null), h(e, s), h(e, n), h(e, r), h(e, i), h(e, a), h(e, o), A.m(o, null), h(e, u), N && N.m(e, null), d = !0, _ || (v = be(e, "click", l[7]), _ = !0)
        },
        p(B, [D]) {
            D & 8 && (t = ["weapons", "events"].includes(B[3])), t ? p ? (p.p(B, D), D & 8 && j(p, 1)) : (p = bl(B), p.c(), j(p, 1), p.m(e, s)) : p && (ke(), U(p, 1, 1, () => {
                p = null
            }), Ee()), b === (b = g(B)) && A ? A.p(B, D) : (A.d(1), A = b(B), A && (A.c(), j(A, 1), A.m(o, null))), B[3] === "beginner" ? N || (N = kl(), N.c(), N.m(e, null)) : N && (N.d(1), N = null), (!d || D & 8 && f !== (f = "button " + B[3] + " svelte-it4zqk")) && m(e, "class", f), D & 9 && ye(e, "active", B[0])
        },
        i(B) {
            d || (j(p), j(A), d = !0)
        },
        o(B) {
            U(p), d = !1
        },
        d(B) {
            B && c(e), p && p.d(), A.d(), N && N.d(), _ = !1, v()
        }
    }
}
const ii = l => l.target.remove(),
    ai = l => l.target.remove();

function oi(l, e, t) {
    let s, n, r, i, a, o, u, f;
    q(l, Xt, D => t(14, i = D)), q(l, St, D => t(11, a = D)), q(l, At, D => t(12, o = D)), q(l, js, D => t(13, u = D)), q(l, st, D => t(5, f = D));
    let {
        active: d = !1
    } = e, {
        type: _ = "events"
    } = e, {
        weapons: v = []
    } = e, {
        character: p = {}
    } = e, {
        index: g = 0
    } = e;
    const b = (D, I = !1) => {
            if (!D) return;
            const y = { ...D
            };
            return y.t || (y.t = 0), i || (y.t = y.t - 10), I && (y.t = y.t - 10), $t(y)
        },
        A = () => {
            !d || ["weapons", "events"].includes(_) && Yn.openNotice(s)
        },
        N = at(),
        B = () => N("click");
    return l.$$set = D => {
        "active" in D && t(0, d = D.active), "type" in D && t(3, _ = D.type), "weapons" in D && t(1, v = D.weapons), "character" in D && t(2, p = D.character), "index" in D && t(8, g = D.index)
    }, l.$$.update = () => {
        l.$$.dirty & 6400 && t(9, s = `${o}-${a}-${g}`), l.$$.dirty & 8200 && t(10, n = _ === "weapons" && u), l.$$.dirty & 7680 && t(4, r = n ? `fatepoint${o}-${a}` : s), l.$$.dirty & 1 && A()
    }, [d, v, p, _, r, f, b, B, g, s, n, a, o, u]
}
class ui extends ze {
    constructor(e) {
        super(), Ge(this, e, oi, ri, Oe, {
            active: 0,
            type: 3,
            weapons: 1,
            character: 2,
            index: 8
        })
    }
}

function fi(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N, B, D;
    return {
        c() {
            e = w("div"), t = w("button"), s = w("span"), n = J("-"), i = V(), a = w("div"), o = w("span"), u = J(l[2]), f = V(), d = w("input"), _ = V(), v = w("span"), p = J(l[1]), g = V(), b = w("button"), A = w("i"), this.h()
        },
        l(I) {
            e = k(I, "DIV", {
                class: !0
            });
            var y = E(e);
            t = k(y, "BUTTON", {
                class: !0
            });
            var S = E(t);
            s = k(S, "SPAN", {
                style: !0
            });
            var P = E(s);
            n = C(P, "-"), P.forEach(c), S.forEach(c), i = M(y), a = k(y, "DIV", {
                class: !0
            });
            var Y = E(a);
            o = k(Y, "SPAN", {
                style: !0,
                class: !0
            });
            var L = E(o);
            u = C(L, l[2]), L.forEach(c), f = M(Y), d = k(Y, "INPUT", {
                class: !0,
                type: !0,
                max: !0,
                min: !0,
                style: !0
            }), _ = M(Y), v = k(Y, "SPAN", {
                style: !0,
                class: !0
            });
            var G = E(v);
            p = C(G, l[1]), G.forEach(c), Y.forEach(c), g = M(y), b = k(y, "BUTTON", {
                class: !0
            });
            var T = E(b);
            A = k(T, "I", {
                class: !0
            }), E(A).forEach(c), T.forEach(c), y.forEach(c), this.h()
        },
        h() {
            te(s, "font-size", "1.5rem"), te(s, "margin-top", "-0.4rem"), te(s, "margin-left", "0rem"), m(t, "class", "min svelte-m3lbxd"), t.disabled = r = l[0] <= 1, te(o, "pointer-events", "none"), m(o, "class", "svelte-m3lbxd"), m(d, "class", "range svelte-m3lbxd"), m(d, "type", "range"), m(d, "max", l[1]), m(d, "min", l[2]), d.value = l[0], m(d, "style", l[4]), d.disabled = l[3], te(v, "pointer-events", "none"), m(v, "class", "svelte-m3lbxd"), m(a, "class", "control svelte-m3lbxd"), m(A, "class", "gi-plus"), m(b, "class", "plus svelte-m3lbxd"), b.disabled = N = l[0] >= l[1], m(e, "class", "input svelte-m3lbxd")
        },
        m(I, y) {
            z(I, e, y), h(e, t), h(t, s), h(s, n), h(e, i), h(e, a), h(a, o), h(o, u), h(a, f), h(a, d), h(a, _), h(a, v), h(v, p), h(e, g), h(e, b), h(b, A), B || (D = [be(t, "touchstart", Mt(l[8])), be(t, "mousedown", Mt(l[9])), be(t, "mouseleave", l[7]), be(t, "mouseup", l[7]), be(t, "touchend", l[7], {
                passive: !0
            }), be(d, "input", l[5]), be(b, "touchstart", Mt(l[10])), be(b, "mousedown", Mt(l[11])), be(b, "mouseleave", l[7]), be(b, "mouseup", l[7]), be(b, "touchend", l[7], {
                passive: !0
            })], B = !0)
        },
        p(I, [y]) {
            y & 1 && r !== (r = I[0] <= 1) && (t.disabled = r), y & 4 && K(u, I[2]), y & 2 && m(d, "max", I[1]), y & 4 && m(d, "min", I[2]), y & 1 && (d.value = I[0]), y & 16 && m(d, "style", I[4]), y & 8 && (d.disabled = I[3]), y & 2 && K(p, I[1]), y & 3 && N !== (N = I[0] >= I[1]) && (b.disabled = N)
        },
        i: Ne,
        o: Ne,
        d(I) {
            I && c(e), B = !1, jt(D)
        }
    }
}

function ci(l, e, t) {
    let s, {
            rangeVal: n
        } = e,
        {
            maxRange: r
        } = e,
        {
            minRange: i
        } = e,
        {
            disabled: a = !1
        } = e;
    const o = at(),
        u = D => {
            o("rangeChange", {
                value: parseInt(D.target.value)
            })
        };
    let f, d;
    const _ = (D = "plus") => {
            const I = D === "plus" ? v : p;
            I(), f = setTimeout(() => {
                d = setInterval(I, 50)
            }, 500);
            const y = D === "min" && n <= 1,
                S = D === "plus" && n >= r;
            y || S || Se()
        },
        v = () => {
            if (n >= r) return g();
            u({
                target: {
                    value: n + 1
                }
            })
        },
        p = () => {
            if (n <= 1) return g();
            u({
                target: {
                    value: n - 1
                }
            })
        },
        g = () => {
            clearTimeout(f), clearInterval(d)
        },
        b = () => _("min"),
        A = () => _("min"),
        N = () => _("plus"),
        B = () => _("plus");
    return l.$$set = D => {
        "rangeVal" in D && t(0, n = D.rangeVal), "maxRange" in D && t(1, r = D.maxRange), "minRange" in D && t(2, i = D.minRange), "disabled" in D && t(3, a = D.disabled)
    }, l.$$.update = () => {
        l.$$.dirty & 7 && t(4, s = `--min: ${i}; --max: ${r}; --val: ${n}`)
    }, [n, r, i, a, s, u, _, g, b, A, N, B]
}
class di extends ze {
    constructor(e) {
        super(), Ge(this, e, ci, fi, Oe, {
            rangeVal: 0,
            maxRange: 1,
            minRange: 2,
            disabled: 3
        })
    }
}

function hi(l) {
    let e, t, s, n, r, i, a, o;
    return e = new ut({
        props: {
            type: "starglitter",
            $$slots: {
                default: [mi]
            },
            $$scope: {
                ctx: l
            }
        }
    }), s = new ut({
        props: {
            type: "stardust",
            $$slots: {
                default: [_i]
            },
            $$scope: {
                ctx: l
            }
        }
    }), r = new ut({
        props: {
            type: "primogem",
            increament: !1,
            $$slots: {
                default: [pi]
            },
            $$scope: {
                ctx: l
            }
        }
    }), a = new ut({
        props: {
            type: l[0],
            $$slots: {
                default: [vi]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), ne(s.$$.fragment), n = V(), ne(r.$$.fragment), i = V(), ne(a.$$.fragment)
        },
        l(u) {
            de(e.$$.fragment, u), t = M(u), de(s.$$.fragment, u), n = M(u), de(r.$$.fragment, u), i = M(u), de(a.$$.fragment, u)
        },
        m(u, f) {
            re(e, u, f), z(u, t, f), re(s, u, f), z(u, n, f), re(r, u, f), z(u, i, f), re(a, u, f), o = !0
        },
        p(u, f) {
            const d = {};
            f & 516 && (d.$$scope = {
                dirty: f,
                ctx: u
            }), e.$set(d);
            const _ = {};
            f & 520 && (_.$$scope = {
                dirty: f,
                ctx: u
            }), s.$set(_);
            const v = {};
            f & 528 && (v.$$scope = {
                dirty: f,
                ctx: u
            }), r.$set(v);
            const p = {};
            f & 1 && (p.type = u[0]), f & 514 && (p.$$scope = {
                dirty: f,
                ctx: u
            }), a.$set(p)
        },
        i(u) {
            o || (j(e.$$.fragment, u), j(s.$$.fragment, u), j(r.$$.fragment, u), j(a.$$.fragment, u), o = !0)
        },
        o(u) {
            U(e.$$.fragment, u), U(s.$$.fragment, u), U(r.$$.fragment, u), U(a.$$.fragment, u), o = !1
        },
        d(u) {
            ie(e, u), u && c(t), ie(s, u), u && c(n), ie(r, u), u && c(i), ie(a, u)
        }
    }
}

function mi(l) {
    let e;
    return {
        c() {
            e = J(l[2])
        },
        l(t) {
            e = C(t, l[2])
        },
        m(t, s) {
            z(t, e, s)
        },
        p(t, s) {
            s & 4 && K(e, t[2])
        },
        d(t) {
            t && c(e)
        }
    }
}

function _i(l) {
    let e;
    return {
        c() {
            e = J(l[3])
        },
        l(t) {
            e = C(t, l[3])
        },
        m(t, s) {
            z(t, e, s)
        },
        p(t, s) {
            s & 8 && K(e, t[3])
        },
        d(t) {
            t && c(e)
        }
    }
}

function pi(l) {
    let e;
    return {
        c() {
            e = J(l[4])
        },
        l(t) {
            e = C(t, l[4])
        },
        m(t, s) {
            z(t, e, s)
        },
        p(t, s) {
            s & 16 && K(e, t[4])
        },
        d(t) {
            t && c(e)
        }
    }
}

function vi(l) {
    let e;
    return {
        c() {
            e = J(l[1])
        },
        l(t) {
            e = C(t, l[1])
        },
        m(t, s) {
            z(t, e, s)
        },
        p(t, s) {
            s & 2 && K(e, t[1])
        },
        d(t) {
            t && c(e)
        }
    }
}

function gi(l) {
    let e, t, s, n;
    return e = new ut({
        props: {
            type: "primogem",
            increament: !1,
            $$slots: {
                default: [bi]
            },
            $$scope: {
                ctx: l
            }
        }
    }), s = new ut({
        props: {
            type: "genesis",
            $$slots: {
                default: [wi]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), ne(s.$$.fragment)
        },
        l(r) {
            de(e.$$.fragment, r), t = M(r), de(s.$$.fragment, r)
        },
        m(r, i) {
            re(e, r, i), z(r, t, i), re(s, r, i), n = !0
        },
        p(r, i) {
            const a = {};
            i & 528 && (a.$$scope = {
                dirty: i,
                ctx: r
            }), e.$set(a);
            const o = {};
            i & 544 && (o.$$scope = {
                dirty: i,
                ctx: r
            }), s.$set(o)
        },
        i(r) {
            n || (j(e.$$.fragment, r), j(s.$$.fragment, r), n = !0)
        },
        o(r) {
            U(e.$$.fragment, r), U(s.$$.fragment, r), n = !1
        },
        d(r) {
            ie(e, r), r && c(t), ie(s, r)
        }
    }
}

function bi(l) {
    let e;
    return {
        c() {
            e = J(l[4])
        },
        l(t) {
            e = C(t, l[4])
        },
        m(t, s) {
            z(t, e, s)
        },
        p(t, s) {
            s & 16 && K(e, t[4])
        },
        d(t) {
            t && c(e)
        }
    }
}

function wi(l) {
    let e;
    return {
        c() {
            e = J(l[5])
        },
        l(t) {
            e = C(t, l[5])
        },
        m(t, s) {
            z(t, e, s)
        },
        p(t, s) {
            s & 32 && K(e, t[5])
        },
        d(t) {
            t && c(e)
        }
    }
}

function ki(l) {
    let e, t, s, n, r, i = l[6] && hi(l),
        a = !l[6] && gi(l);
    return {
        c() {
            e = w("div"), t = w("div"), i && i.c(), s = V(), a && a.c(), this.h()
        },
        l(o) {
            e = k(o, "DIV", {
                class: !0
            });
            var u = E(e);
            t = k(u, "DIV", {
                class: !0
            });
            var f = E(t);
            i && i.l(f), s = M(f), a && a.l(f), f.forEach(c), u.forEach(c), this.h()
        },
        h() {
            m(t, "class", "fates"), m(e, "class", "funds svelte-5iiyop")
        },
        m(o, u) {
            z(o, e, u), h(e, t), i && i.m(t, null), h(t, s), a && a.m(t, null), r = !0
        },
        p(o, [u]) {
            o[6] && i.p(o, u), o[6] || a.p(o, u)
        },
        i(o) {
            r || (j(i), j(a), n || Re(() => {
                n = Me(e, Ye, {
                    y: -15,
                    duration: 300
                }), n.start()
            }), r = !0)
        },
        o(o) {
            U(i), U(a), r = !1
        },
        d(o) {
            o && c(e), i && i.d(), a && a.d()
        }
    }
}

function Ei(l, e, t) {
    let s, n, r, i, a, o, u;
    q(l, nt, _ => t(7, n = _)), q(l, rt, _ => t(8, r = _)), q(l, _t, _ => t(2, i = _)), q(l, pt, _ => t(3, a = _)), q(l, dt, _ => t(4, o = _)), q(l, ls, _ => t(5, u = _));
    let {
        itemToBuy: f = ""
    } = e;
    const d = ["intertwined", "acquaint"].includes(f);
    return l.$$set = _ => {
        "itemToBuy" in _ && t(0, f = _.itemToBuy)
    }, l.$$.update = () => {
        l.$$.dirty & 385 && t(1, s = f === "intertwined" ? r : n)
    }, [f, s, i, a, o, u, d, n, r]
}
class yi extends ze {
    constructor(e) {
        super(), Ge(this, e, Ei, ki, Oe, {
            itemToBuy: 0
        })
    }
}

function El(l, e, t) {
    const s = l.slice();
    return s[31] = e[t], s[33] = t, s
}

function Ai(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N;
    n = new tt({
        props: {
            type: l[2],
            height: "80%",
            width: "auto",
            style: "position: absolute; left: 5px;top: 50%; transform: translateY(-50%);"
        }
    });
    const B = [Ni, Di],
        D = [];

    function I(R, W) {
        return R[4] ? 0 : 1
    }
    u = I(l), f = D[u] = B[u](l);

    function y(R, W) {
        return R[4] ? Ri : Ti
    }
    let S = y(l),
        P = S(l),
        Y = Array(l[3] || l[18][l[1]] ? .star),
        L = [];
    for (let R = 0; R < Y.length; R += 1) L[R] = yl(El(l, Y, R));

    function G(R, W) {
        return R[4] ? Bi : ji
    }
    let T = G(l),
        O = T(l);
    return {
        c() {
            e = w("div"), t = w("div"), s = w("span"), ne(n.$$.fragment), r = V(), i = J(l[14]), a = V(), o = w("picture"), f.c(), d = V(), _ = w("div"), v = w("div"), P.c(), p = V(), g = w("div");
            for (let R = 0; R < L.length; R += 1) L[R].c();
            b = V(), O.c(), this.h()
        },
        l(R) {
            e = k(R, "DIV", {
                class: !0,
                style: !0
            });
            var W = E(e);
            t = k(W, "DIV", {
                class: !0
            });
            var F = E(t);
            s = k(F, "SPAN", {
                class: !0
            });
            var oe = E(s);
            de(n.$$.fragment, oe), r = M(oe), i = C(oe, l[14]), oe.forEach(c), F.forEach(c), a = M(W), o = k(W, "PICTURE", {
                style: !0,
                class: !0
            });
            var Z = E(o);
            f.l(Z), Z.forEach(c), d = M(W), _ = k(W, "DIV", {
                class: !0,
                style: !0
            });
            var H = E(_);
            v = k(H, "DIV", {
                class: !0
            });
            var X = E(v);
            P.l(X), X.forEach(c), p = M(H), g = k(H, "DIV", {
                class: !0
            });
            var he = E(g);
            for (let _e = 0; _e < L.length; _e += 1) L[_e].l(he);
            he.forEach(c), b = M(H), O.l(H), H.forEach(c), W.forEach(c), this.h()
        },
        h() {
            m(s, "class", "primogem svelte-4ay4oq"), ye(s, "red", l[4] ? l[10] < l[5] : l[9] < 1), m(t, "class", "primo svelte-4ay4oq"), m(o, "style", l[16]), m(o, "class", "svelte-4ay4oq"), m(v, "class", "title svelte-4ay4oq"), m(g, "class", "star"), m(_, "class", "description svelte-4ay4oq"), m(_, "style", l[15]), m(e, "class", A = "item star" + l[3] + " svelte-4ay4oq"), m(e, "style", l[17])
        },
        m(R, W) {
            z(R, e, W), h(e, t), h(t, s), re(n, s, null), h(s, r), h(s, i), h(e, a), h(e, o), D[u].m(o, null), h(e, d), h(e, _), h(_, v), P.m(v, null), h(_, p), h(_, g);
            for (let F = 0; F < L.length; F += 1) L[F].m(g, null);
            h(_, b), O.m(_, null), N = !0
        },
        p(R, W) {
            const F = {};
            W[0] & 4 && (F.type = R[2]), n.$set(F), (!N || W[0] & 16384) && K(i, R[14]), W[0] & 1584 && ye(s, "red", R[4] ? R[10] < R[5] : R[9] < 1);
            let oe = u;
            if (u = I(R), u === oe ? D[u].p(R, W) : (ke(), U(D[oe], 1, 1, () => {
                    D[oe] = null
                }), Ee(), f = D[u], f ? f.p(R, W) : (f = D[u] = B[u](R), f.c()), j(f, 1), f.m(o, null)), (!N || W[0] & 65536) && m(o, "style", R[16]), S === (S = y(R)) && P ? P.p(R, W) : (P.d(1), P = S(R), P && (P.c(), P.m(v, null))), W[0] & 262154) {
                Y = Array(R[3] || R[18][R[1]] ? .star);
                let Z;
                for (Z = 0; Z < Y.length; Z += 1) {
                    const H = El(R, Y, Z);
                    L[Z] ? L[Z].p(H, W) : (L[Z] = yl(), L[Z].c(), L[Z].m(g, null))
                }
                for (; Z < L.length; Z += 1) L[Z].d(1);
                L.length = Y.length
            }
            T === (T = G(R)) && O ? O.p(R, W) : (O.d(1), O = T(R), O && (O.c(), O.m(_, null))), (!N || W[0] & 32768) && m(_, "style", R[15]), (!N || W[0] & 8 && A !== (A = "item star" + R[3] + " svelte-4ay4oq")) && m(e, "class", A), (!N || W[0] & 131072) && m(e, "style", R[17])
        },
        i(R) {
            N || (j(n.$$.fragment, R), j(f), N = !0)
        },
        o(R) {
            U(n.$$.fragment, R), U(f), N = !1
        },
        d(R) {
            R && c(e), ie(n), D[u].d(), P.d(), qe(L, R), O.d()
        }
    }
}

function Ii(l) {
    let e, t, s, n, r, i, a = l[11]("shop.item.genesis") + "",
        o, u, f, d, _, v, p, g = l[11]("shop.item.primogem") + "",
        b, A, N, B, D;
    return n = new tt({
        props: {
            type: "genesis",
            width: "50%"
        }
    }), _ = new tt({
        props: {
            type: "primogem",
            width: "50%"
        }
    }), {
        c() {
            e = w("div"), t = w("div"), s = w("picture"), ne(n.$$.fragment), r = V(), i = w("span"), o = J(a), u = V(), f = w("div"), d = w("picture"), ne(_.$$.fragment), v = V(), p = w("span"), b = J(g), A = V(), N = w("div"), B = w("i"), this.h()
        },
        l(I) {
            e = k(I, "DIV", {
                class: !0,
                style: !0
            });
            var y = E(e);
            t = k(y, "DIV", {
                class: !0
            });
            var S = E(t);
            s = k(S, "PICTURE", {
                class: !0
            });
            var P = E(s);
            de(n.$$.fragment, P), r = M(P), i = k(P, "SPAN", {
                class: !0
            });
            var Y = E(i);
            o = C(Y, a), Y.forEach(c), P.forEach(c), S.forEach(c), u = M(y), f = k(y, "DIV", {
                class: !0
            });
            var L = E(f);
            d = k(L, "PICTURE", {
                class: !0
            });
            var G = E(d);
            de(_.$$.fragment, G), v = M(G), p = k(G, "SPAN", {
                class: !0
            });
            var T = E(p);
            b = C(T, g), T.forEach(c), G.forEach(c), L.forEach(c), A = M(y), N = k(y, "DIV", {
                class: !0
            });
            var O = E(N);
            B = k(O, "I", {
                class: !0
            }), E(B).forEach(c), O.forEach(c), y.forEach(c), this.h()
        },
        h() {
            m(i, "class", "svelte-4ay4oq"), m(s, "class", "svelte-4ay4oq"), m(t, "class", "col genesis svelte-4ay4oq"), m(p, "class", "svelte-4ay4oq"), m(d, "class", "svelte-4ay4oq"), m(f, "class", "col primo-exchange svelte-4ay4oq"), m(B, "class", "gi-arrow-right"), m(N, "class", "divider svelte-4ay4oq"), m(e, "class", "row genesis-exchange svelte-4ay4oq"), m(e, "style", l[17])
        },
        m(I, y) {
            z(I, e, y), h(e, t), h(t, s), re(n, s, null), h(s, r), h(s, i), h(i, o), h(e, u), h(e, f), h(f, d), re(_, d, null), h(d, v), h(d, p), h(p, b), h(e, A), h(e, N), h(N, B), D = !0
        },
        p(I, y) {
            (!D || y[0] & 2048) && a !== (a = I[11]("shop.item.genesis") + "") && K(o, a), (!D || y[0] & 2048) && g !== (g = I[11]("shop.item.primogem") + "") && K(b, g), (!D || y[0] & 131072) && m(e, "style", I[17])
        },
        i(I) {
            D || (j(n.$$.fragment, I), j(_.$$.fragment, I), D = !0)
        },
        o(I) {
            U(n.$$.fragment, I), U(_.$$.fragment, I), D = !1
        },
        d(I) {
            I && c(e), ie(n), ie(_)
        }
    }
}

function Di(l) {
    let e, t;
    return e = new tt({
        props: {
            type: l[1],
            width: "70%"
        }
    }), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 2 && (r.type = s[1]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Ni(l) {
    let e, t, s;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(n) {
            e = k(n, "IMG", {
                src: !0,
                width: !0,
                alt: !0
            }), this.h()
        },
        h() {
            Te(e.src, t = l[19][`thumbnail/${l[1]}.webp`]) || m(e, "src", t), m(e, "width", "75%"), m(e, "alt", s = yt(l[1]))
        },
        m(n, r) {
            z(n, e, r)
        },
        p(n, r) {
            r[0] & 524290 && !Te(e.src, t = n[19][`thumbnail/${n[1]}.webp`]) && m(e, "src", t), r[0] & 2 && s !== (s = yt(n[1])) && m(e, "alt", s)
        },
        i: Ne,
        o: Ne,
        d(n) {
            n && c(e)
        }
    }
}

function Ti(l) {
    let e = l[11](`shop.item.${l[1]}`) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 2050 && e !== (e = s[11](`shop.item.${s[1]}`) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function Ri(l) {
    let e = l[11](`outfit.item.${l[1]}.name`) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 2050 && e !== (e = s[11](`outfit.item.${s[1]}.name`) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function yl(l) {
    let e;
    return {
        c() {
            e = w("i"), this.h()
        },
        l(t) {
            e = k(t, "I", {
                class: !0
            }), E(e).forEach(c), this.h()
        },
        h() {
            m(e, "class", "gi-star svelte-4ay4oq")
        },
        m(t, s) {
            z(t, e, s)
        },
        p: Ne,
        d(t) {
            t && c(e)
        }
    }
}

function ji(l) {
    let e, t = l[11](`shop.description.${l[1]}`) + "",
        s;
    return {
        c() {
            e = w("p"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "P", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "svelte-4ay4oq")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r[0] & 2050 && t !== (t = n[11](`shop.description.${n[1]}`) + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Bi(l) {
    let e, t = l[11](`outfit.item.${l[1]}.description`) + "",
        s;
    return {
        c() {
            e = w("p"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "P", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "svelte-4ay4oq")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r[0] & 2050 && t !== (t = n[11](`outfit.item.${n[1]}.description`) + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Al(l) {
    let e, t = l[11]("shop.consume") + "",
        s, n, r, i, a, o, u;
    return r = new tt({
        props: {
            type: "genesis"
        }
    }), {
        c() {
            e = w("div"), s = J(t), n = V(), ne(r.$$.fragment), i = V(), a = w("span"), o = J(l[8]), this.h()
        },
        l(f) {
            e = k(f, "DIV", {
                class: !0,
                style: !0
            });
            var d = E(e);
            s = C(d, t), n = M(d), de(r.$$.fragment, d), i = M(d), a = k(d, "SPAN", {
                class: !0
            });
            var _ = E(a);
            o = C(_, l[8]), _.forEach(c), d.forEach(c), this.h()
        },
        h() {
            m(a, "class", "svelte-4ay4oq"), ye(a, "red", l[10] < 1), m(e, "class", "consume"), te(e, "display", "inline-flex"), te(e, "align-items", "center")
        },
        m(f, d) {
            z(f, e, d), h(e, s), h(e, n), re(r, e, null), h(e, i), h(e, a), h(a, o), u = !0
        },
        p(f, d) {
            (!u || d[0] & 2048) && t !== (t = f[11]("shop.consume") + "") && K(s, t), (!u || d[0] & 256) && K(o, f[8]), d[0] & 1024 && ye(a, "red", f[10] < 1)
        },
        i(f) {
            u || (j(r.$$.fragment, f), u = !0)
        },
        o(f) {
            U(r.$$.fragment, f), u = !1
        },
        d(f) {
            f && c(e), ie(r)
        }
    }
}

function Il(l) {
    let e, t = l[11]("shop.insufficient") + "",
        s;
    return {
        c() {
            e = w("div"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "DIV", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "error red svelte-4ay4oq")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r[0] & 2048 && t !== (t = n[11]("shop.insufficient") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Dl(l) {
    let e, t = l[11]("outfit.owned") + "",
        s;
    return {
        c() {
            e = w("div"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "DIV", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "error red svelte-4ay4oq")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r[0] & 2048 && t !== (t = n[11]("outfit.owned") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Si(l) {
    let e, t, s, n, r, i, a, o, u, f = l[11]("shop.qty") + "",
        d, _, v, p, g, b, A, N, B, D, I, y, S;
    e = new yi({
        props: {
            itemToBuy: l[1]
        }
    });
    const P = [Ii, Ai],
        Y = [];

    function L(R, W) {
        return R[2] === "genesis" && !R[4] ? 0 : 1
    }
    n = L(l), r = Y[n] = P[n](l), N = new di({
        props: {
            disabled: l[4] || l[9] < 1,
            maxRange: l[12],
            minRange: l[13],
            rangeVal: l[8]
        }
    }), N.$on("rangeChange", l[25]);
    let G = l[2] === "genesis" && !l[4] && Al(l),
        T = (l[4] ? l[10] < l[5] && !l[6] : l[9] < 1) && Il(l),
        O = l[6] && Dl(l);
    return {
        c() {
            ne(e.$$.fragment), t = V(), s = w("div"), r.c(), i = V(), a = w("div"), o = w("div"), u = w("span"), d = J(f), _ = J(" :"), v = V(), p = w("span"), g = J(l[8]), b = V(), A = w("div"), ne(N.$$.fragment), B = V(), G && G.c(), D = V(), T && T.c(), I = V(), O && O.c(), this.h()
        },
        l(R) {
            de(e.$$.fragment, R), t = M(R), s = k(R, "DIV", {
                class: !0
            });
            var W = E(s);
            r.l(W), i = M(W), a = k(W, "DIV", {
                class: !0
            });
            var F = E(a);
            o = k(F, "DIV", {
                class: !0
            });
            var oe = E(o);
            u = k(oe, "SPAN", {});
            var Z = E(u);
            d = C(Z, f), _ = C(Z, " :"), Z.forEach(c), v = M(oe), p = k(oe, "SPAN", {
                style: !0
            });
            var H = E(p);
            g = C(H, l[8]), H.forEach(c), oe.forEach(c), b = M(F), A = k(F, "DIV", {
                class: !0
            });
            var X = E(A);
            de(N.$$.fragment, X), B = M(X), G && G.l(X), D = M(X), T && T.l(X), I = M(X), O && O.l(X), X.forEach(c), F.forEach(c), W.forEach(c), this.h()
        },
        h() {
            te(p, "font-size", "larger"), m(o, "class", "rangeNumber svelte-4ay4oq"), m(A, "class", "rangeInput svelte-4ay4oq"), m(a, "class", "slider svelte-4ay4oq"), m(s, "class", "content svelte-4ay4oq"), Re(() => l[26].call(s))
        },
        m(R, W) {
            re(e, R, W), z(R, t, W), z(R, s, W), Y[n].m(s, null), h(s, i), h(s, a), h(a, o), h(o, u), h(u, d), h(u, _), h(o, v), h(o, p), h(p, g), h(a, b), h(a, A), re(N, A, null), h(A, B), G && G.m(A, null), h(A, D), T && T.m(A, null), h(A, I), O && O.m(A, null), y = Ft(s, l[26].bind(s)), S = !0
        },
        p(R, W) {
            const F = {};
            W[0] & 2 && (F.itemToBuy = R[1]), e.$set(F);
            let oe = n;
            n = L(R), n === oe ? Y[n].p(R, W) : (ke(), U(Y[oe], 1, 1, () => {
                Y[oe] = null
            }), Ee(), r = Y[n], r ? r.p(R, W) : (r = Y[n] = P[n](R), r.c()), j(r, 1), r.m(s, i)), (!S || W[0] & 2048) && f !== (f = R[11]("shop.qty") + "") && K(d, f), (!S || W[0] & 256) && K(g, R[8]);
            const Z = {};
            W[0] & 528 && (Z.disabled = R[4] || R[9] < 1), W[0] & 4096 && (Z.maxRange = R[12]), W[0] & 8192 && (Z.minRange = R[13]), W[0] & 256 && (Z.rangeVal = R[8]), N.$set(Z), R[2] === "genesis" && !R[4] ? G ? (G.p(R, W), W[0] & 20 && j(G, 1)) : (G = Al(R), G.c(), j(G, 1), G.m(A, D)) : G && (ke(), U(G, 1, 1, () => {
                G = null
            }), Ee()), (R[4] ? R[10] < R[5] && !R[6] : R[9] < 1) ? T ? T.p(R, W) : (T = Il(R), T.c(), T.m(A, I)) : T && (T.d(1), T = null), R[6] ? O ? O.p(R, W) : (O = Dl(R), O.c(), O.m(A, null)) : O && (O.d(1), O = null)
        },
        i(R) {
            S || (j(e.$$.fragment, R), j(r), j(N.$$.fragment, R), j(G), S = !0)
        },
        o(R) {
            U(e.$$.fragment, R), U(r), U(N.$$.fragment, R), U(G), S = !1
        },
        d(R) {
            ie(e, R), R && c(t), R && c(s), Y[n].d(), ie(N), G && G.d(), T && T.d(), O && O.d(), y()
        }
    }
}

function Vi(l) {
    let e, t;
    return e = new Zt({
        props: {
            show: l[0],
            title: l[2] !== "genesis" ? l[11]("shop.exchangeHeading") : l[11]("shop.purchaseHeading"),
            confirmText: l[11]("shop.purchaseButton"),
            button: (l[4] ? l[6] || l[10] < l[5] : l[9] < 1) ? "cancel" : "all",
            $$slots: {
                default: [Si]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("cancel", l[20]), e.$on("confirm", l[21]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 1 && (r.show = s[0]), n[0] & 2052 && (r.title = s[2] !== "genesis" ? s[11]("shop.exchangeHeading") : s[11]("shop.purchaseHeading")), n[0] & 2048 && (r.confirmText = s[11]("shop.purchaseButton")), n[0] & 1648 && (r.button = (s[4] ? s[6] || s[10] < s[5] : s[9] < 1) ? "cancel" : "all"), n[0] & 1048574 | n[1] & 8 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Mi(l, e, t) {
    let s, n, r, i, a, o, u, f, d, _, v, p;
    q(l, dt, Z => t(22, a = Z)), q(l, nt, Z => t(27, o = Z)), q(l, rt, Z => t(28, u = Z)), q(l, ls, Z => t(10, f = Z)), q(l, pt, Z => t(23, d = Z)), q(l, _t, Z => t(24, _ = Z)), q(l, Le, Z => t(11, v = Z)), q(l, st, Z => t(19, p = Z));
    let {
        show: g = !1
    } = e, {
        itemToBuy: b = "intertwined"
    } = e, {
        fundType: A = "genesis"
    } = e, {
        itemRarity: N = 0
    } = e, {
        outfit: B = !1
    } = e, {
        price: D = 0
    } = e, {
        isOutfitOwned: I = !1
    } = e;
    const y = {
        starglitter: 5,
        stardust: 125,
        primogem: 160
    };
    let S, P = 1,
        Y = 1,
        L = 0,
        G = 0,
        T = 0;
    const O = at(),
        R = () => {
            O("cancel"), t(8, P = 1)
        },
        W = () => {
            if (B) return O("confirm");
            if (T < 1) {
                O("confirm", {
                    status: "failed",
                    items: {}
                });
                return
            }
            let Z, H;
            const X = P * y[A];
            A === "starglitter" && (Z = _ - X, _t.set(Z)), A === "stardust" && (Z = d - X, pt.set(Z)), A === "primogem" && (Z = a - X, dt.set(Z)), A === "genesis" && (Z = f - P, ls.set(Z)), b === "intertwined" && (H = P + u, rt.set(H)), b === "acquaint" && (H = P + o, nt.set(H)), b === "primogem" && (H = P + a, dt.set(H)), kt.set(b, H), kt.set(A, Z), O("confirm", {
                fundAfterBuy: Z,
                fundType: A,
                itemToBuy: b,
                item: {
                    itemToBuy: b,
                    value: P
                }
            }), t(8, P = 1)
        },
        F = ({
            detail: Z
        }) => t(8, P = Z.value);

    function oe() {
        S = this.clientHeight, t(7, S)
    }
    return l.$$set = Z => {
        "show" in Z && t(0, g = Z.show), "itemToBuy" in Z && t(1, b = Z.itemToBuy), "fundType" in Z && t(2, A = Z.fundType), "itemRarity" in Z && t(3, N = Z.itemRarity), "outfit" in Z && t(4, B = Z.outfit), "price" in Z && t(5, D = Z.price), "isOutfitOwned" in Z && t(6, I = Z.isOutfitOwned)
    }, l.$$.update = () => {
        l.$$.dirty[0] & 2048 && t(18, s = {
            intertwined: {
                description: v("shop.description.intertwined"),
                star: 5
            },
            acquaint: {
                description: v("shop.description.acquaint"),
                star: 5
            }
        }), l.$$.dirty[0] & 29361972 && (A === "starglitter" && (t(9, T = (_ - _ % y.starglitter) / y.starglitter), t(14, G = y.starglitter * P)), A === "stardust" && (t(9, T = (d - d % y.stardust) / y.stardust), t(14, G = y.stardust * P)), A === "primogem" && (t(9, T = (a - a % y.primogem) / y.primogem), t(14, G = y.primogem * P)), A === "genesis" && B && (t(14, G = D), t(9, T = 1)), A === "genesis" && !B && (t(9, T = f), t(14, G = P)), t(12, Y = T > 0 ? T : 1), t(13, L = T > 1 ? 1 : 0)), l.$$.dirty[0] & 128 && t(17, n = `height:${45/100*S}px`), l.$$.dirty[0] & 128 && t(16, r = `height:${45/100*S}px; width:${45/100*S}px`), l.$$.dirty[0] & 128 && t(15, i = `max-width:calc(100% - ${45/100*S}px)`)
    }, [g, b, A, N, B, D, I, S, P, T, f, v, Y, L, G, i, r, n, s, p, R, W, a, d, _, F, oe]
}
class zi extends ze {
    constructor(e) {
        super(), Ge(this, e, Mi, Vi, Oe, {
            show: 0,
            itemToBuy: 1,
            fundType: 2,
            itemRarity: 3,
            outfit: 4,
            price: 5,
            isOutfitOwned: 6
        }, null, [-1, -1])
    }
}

function Gi(l) {
    let e, t;
    return e = new zi({
        props: {
            fundType: "genesis",
            itemToBuy: "primogem",
            show: l[1]
        }
    }), e.$on("cancel", l[3]), e.$on("confirm", l[4]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 2 && (r.show = s[1]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Oi(l) {
    let e, t;
    return {
        c() {
            e = w("span"), t = w("i"), this.h()
        },
        l(s) {
            e = k(s, "SPAN", {
                class: !0
            });
            var n = E(e);
            t = k(n, "I", {
                class: !0
            }), E(t).forEach(c), n.forEach(c), this.h()
        },
        h() {
            m(t, "class", "gi-plus svelte-1uzsndi"), m(e, "class", "svelte-1uzsndi")
        },
        m(s, n) {
            z(s, e, n), h(e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}

function Pi(l) {
    let e, t, s, n, r, i, a, o, u, f = l[2] && Gi(l);
    s = new tt({
        props: {
            type: l[0],
            height: "80%",
            width: "auto",
            style: "position: absolute; left: 5px;top: 50%; transform: translateY(-50%);"
        }
    });
    const d = l[7].default,
        _ = ks(d, l, l[6], null);
    let v = l[2] && Oi();
    return {
        c() {
            f && f.c(), e = V(), t = w("button"), ne(s.$$.fragment), n = V(), _ && _.c(), r = V(), v && v.c(), this.h()
        },
        l(p) {
            f && f.l(p), e = M(p), t = k(p, "BUTTON", {
                class: !0
            });
            var g = E(t);
            de(s.$$.fragment, g), n = M(g), _ && _.l(g), r = M(g), v && v.l(g), g.forEach(c), this.h()
        },
        h() {
            m(t, "class", i = Ot(l[0]) + " svelte-1uzsndi"), ye(t, "increament", l[2])
        },
        m(p, g) {
            f && f.m(p, g), z(p, e, g), z(p, t, g), re(s, t, null), h(t, n), _ && _.m(t, null), h(t, r), v && v.m(t, null), a = !0, o || (u = be(t, "click", l[3]), o = !0)
        },
        p(p, [g]) {
            p[2] && f.p(p, g);
            const b = {};
            g & 1 && (b.type = p[0]), s.$set(b), _ && _.p && (!a || g & 64) && Es(_, d, p, p[6], a ? As(d, p[6], g, null) : ys(p[6]), null), (!a || g & 1 && i !== (i = Ot(p[0]) + " svelte-1uzsndi")) && m(t, "class", i), g & 5 && ye(t, "increament", p[2])
        },
        i(p) {
            a || (j(f), j(s.$$.fragment, p), j(_, p), a = !0)
        },
        o(p) {
            U(f), U(s.$$.fragment, p), U(_, p), a = !1
        },
        d(p) {
            f && f.d(p), p && c(e), p && c(t), ie(s), _ && _.d(p), v && v.d(), o = !1, u()
        }
    }
}

function Wi(l, e, t) {
    let {
        $$slots: s = {},
        $$scope: n
    } = e, {
        type: r = "primogem"
    } = e, {
        increament: i = !0
    } = e;
    const a = r === "primogem" && i;
    let o = !1;
    const u = mt("handleObtained"),
        f = () => {
            r === "primogem" && (o || Se("modal"), t(1, o = !o))
        },
        d = _ => {
            t(1, o = !1);
            const {
                item: v
            } = _.detail;
            u(v.itemToBuy, v.value)
        };
    return l.$$set = _ => {
        "type" in _ && t(0, r = _.type), "increament" in _ && t(5, i = _.increament), "$$scope" in _ && t(6, n = _.$$scope)
    }, [r, o, a, f, d, i, n, s]
}
class ut extends ze {
    constructor(e) {
        super(), Ge(this, e, Wi, Pi, Oe, {
            type: 0,
            increament: 5
        })
    }
}
const {
    clearIDB: Ui
} = Un, Yi = async () => {
    const l = await caches.keys();
    for (const e of l) await caches.delete(e);
    return !0
}, Zi = async ({
    clearCache: l = !1
}) => {
    const e = ft.get("adKey");
    localStorage.clear(), ft.set("animatedBG", !0), ft.set("adKey", e), localStorage.setItem("primogem", 1600), Wt.update(t => (localStorage.setItem("locale", t), t)), await Ui(), l && await Yi(), nt.set(0), ls.set(0), rt.set(0), dt.set(1600), pt.set(0), _t.set(0), ct.set({}), Ts.set(!0), St.set(nr), At.set(rr), qt.set(!1), Pt.set(!1), $n.set([]), Jt.set(!1)
};

function Li(l) {
    let e, t, s, n, r;
    const i = l[3].default,
        a = ks(i, l, l[2], null);
    return {
        c() {
            e = w("div"), a && a.c(), this.h()
        },
        l(o) {
            e = k(o, "DIV", {
                class: !0
            });
            var u = E(e);
            a && a.l(u), u.forEach(c), this.h()
        },
        h() {
            m(e, "class", "toast svelte-1iw3t2z")
        },
        m(o, u) {
            z(o, e, u), a && a.m(e, null), s = !0, n || (r = be(e, "click", l[0]), n = !0)
        },
        p(o, [u]) {
            a && a.p && (!s || u & 4) && Es(a, i, o, o[2], s ? As(i, o[2], u, null) : ys(o[2]), null)
        },
        i(o) {
            s || (j(a, o), Re(() => {
                t || (t = et(e, Ye, {
                    y: -20
                }, !0)), t.run(1)
            }), s = !0)
        },
        o(o) {
            U(a, o), t || (t = et(e, Ye, {
                y: -20
            }, !1)), t.run(0), s = !1
        },
        d(o) {
            o && c(e), a && a.d(o), o && t && t.end(), n = !1, r()
        }
    }
}

function Ji(l, e, t) {
    let {
        $$slots: s = {},
        $$scope: n
    } = e, {
        autoclose: r = !0
    } = e;
    const i = at(),
        a = () => {
            if (!r) return i("close")
        };
    if (r) {
        const o = setTimeout(() => {
            i("close"), clearTimeout(o)
        }, 3e3)
    }
    return l.$$set = o => {
        "autoclose" in o && t(1, r = o.autoclose), "$$scope" in o && t(2, n = o.$$scope)
    }, [a, r, n, s]
}
class cs extends ze {
    constructor(e) {
        super(), Ge(this, e, Ji, Li, Oe, {
            autoclose: 1
        })
    }
}
const ns = {
        "en-US": "English (EN)",
        "id-ID": "Indonesia (ID)",
        "it-IT": "Italiano (IT)",
        "ja-JP": "\u65E5\u672C\u8A9E (JA)",
        "pt-BR": "Portugu\xEAs (PT)",
        "ru-RU": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (RU)",
        "th-TH": "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 (TH)",
        "vi-VN": "Ti\u1EBFng Vi\u1EC7t (VI)",
        "zh-CN": "\u7B80\u4F53\u4E2D\u6587 (ZH)"
    },
    rs = {
        en: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjExNEYyMDE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjExNEYyMTE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMTE0RjFFMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyMTE0RjFGMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EXnauAAABW1JREFUeNrEVm1QVGUUfu7dXZBYvuRj1yATNT5FxCClTNLUFNBJrfxRZjOKkVLqGA2okGGDhA44ToqT1pigA9qAhkho4kiCqRhgCKwBg5IiLCDs8rEid0/vvVfWGD/K/nR27u7Ofc85z/Oe9znnXi52S4Eh49sy9DS1AE6OgJsdYDYDhOFWr8fi+Ej8kByBuoDX0FOtA6dUwVrrignNlxG1vQT7Yg8B492Gx3HsUvBAmxHoNEAdFoyYqDAoUzeF2322djbS0k9h53el6NXdAEY6Aa6PIfBvTQTkGaBeBOxmgCFYFz0Dy5z0GJe7FbzxdAlc1CokJ4SjoSoRsQkLoXawAXTNLKhHZss9JaAY085idbdgN9EbcQfWo2JTIJLOpoCbOw0VR8+BvzUrDFe8X4Th5Blo7K2RmjQfjZWJiE9aBHtnW5lAe69IH9wTCMhrDLCD+epuwiHIFwmHGGCcH5LPpYCfHYrKY2VwPJyHoNYGoKXwNAlvRVItK2qVTzAZi0toyNqNAxT7eT6px2xkBQ+nsI+OSPdrJ4TRJWipXPkc/e4xWbq3OKGI+USSOmwPxX1fQ01nLhB9+AHVs7y/uXpSR3auJa+JXYB/Gi1LKaXiXTlUExRKvzDHinGB1L430+LYqjfS8k8yacmmEyQMCg8BCwN3KSqthN5dtZ+u7s4iYekS+kPMM8qL2nPyLHkq6jto6apDBJuPCVOXHSSvyH0UnVVPOrbYf7Gc6uYtpLqIt6kzt4AeZdV+IrCGyhUeVOkeRGbpw6zpGvVGR1PtjHl0p/DnYTFX20y08ouT5D13D730/kHiSNo2s/4+GE1m2DmpLec2qO8Ap1KxtlGAFwWj4iEYTagJjcTdaw1SOyldRsL31+Ow0joDBna+Ls6WeBIEUL9J+t9nuge1rTVgYyNromb8VBqSI+MNQSBwCgXTCSe3khhMw3vK3Nsnt9p9VfG2z7Af5q9UyqoW/QeFYZ2oUDA/jsdQfyp7G5ufukWVjg7si5dzMJB7f7Y8RO6fjMf/ZEqbMR4PGpGxFszDmXPi9JGalKTyihuTSi08KLXKYxT+3uTc0NSCnJNYHM+OjruPIflYxMUSm7qMsGJCkhZUSnDW1g8YiGAsl8BEUsvEZRoSlysTV1k+E5eLRMZsloFEwrza1hJ+19gHazsrca/yjhfFF+B2UycCfLWIWfkqArQjLM791XW4uXUbnNlIdYpbC3j6QGEjKYXxNMsCEzU1ij0YrKyGnV33ybPQ7z8gbg2jN3wKvb8f0nOv43xeKVw1avB5KbkYYerFmzPHW0CNpRdRHTwDTQG+eL6tAb0+gVifcRkrvipmIjdLupIQWekUolJZ0dZ8XYaYuBx0G+X2cZg1BXYhITCeKcWlCf4whM7E67fK4f6CB37MY3OyubXH0uTGkjK6Mmka1bBUg/PfoJajJyg9V0djlxxmx7GQQpdnP3ZkLogvZD7zyNk7kRKTC6mzX7Dk7TpeRJWeE6VpZn7vHbp+oph4Dzdb9F24jOrJ03F9+svwfXYE3PILsSc6A1Myu7Bu0Q405rNBCi3cNXaPValGfKBgDDpuG5C04TDGTtyML7efgmGA4BAxB4GNVXA5Voiqs9Uwhc8ELwI2TQ2G32hbaAqKsGvFboRkGRATsQ03fjoPeLkC7k6S+J7Uq/IaO3M3e8B7NLraepAQmw3PgM1gFUD3gBmOC+Zi0o2r0OQXQemjscKd3HxkWPkjPfMSGrLT2FhTyYBSrqd8ExAJsOknvclo7NHZasCWjUew+8AFrF3xCtasmQ2HyDlQ7lr9jXFnVjkac1IZIJO6l9t/A3wUAbpPQGuPjpZuqQI79p7D6qhp+EuAAQB9e+n65ZcRTgAAAABJRU5ErkJggg==",
        id: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkxMDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkxMTE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBFMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBGMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D76wCAAAAG9JREFUeNpiPCeo9pSBgUEKiD8z0AfwAvEzFiiDAYmmi+VMDAMERi0etZhmgOXP+w8DYzGbtOQ/KPsfHUP5H+Of9x/fAxkCQPyXThYzA/EHFmYBPmYkAXoB5tHsNGrxqMXUK7mgTR5eOjd9PgMEGACLNBM7Kx9mIgAAAABJRU5ErkJggg==",
        it: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzVCNDMyMDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzVCNDMyMTE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNUI0MzFFMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNUI0MzFGMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oQE2+QAAAJNJREFUeNpiZJjk9pSBgUEKiD8zYAM/PjHy8Ir9fZK47D8/OzcLUOQ/A3bA+O/nz79Xnf0Yftx7wMwiJIhLHS8QP2OBMhiQaGzgH5RmYsAP/kMxIXW8hBSgG0oNNUT5gGZg1OJRi0ctHrV41OJRi4e2xYxUUgMGLNAmDy/Opg/EsL/QSh5v0weqDgSY8agD2wUQYAAUKyFbP8LJRAAAAABJRU5ErkJggg==",
        ja: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREQ2NTU2QjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREQ2NTU2QzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJERDY1NTY5MTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJERDY1NTZBMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sXSjEQAAAbhJREFUeNrklt8rg1EYx79n3k2WrWGY363EkgtJSVntgguJi5UbbuTSrf/CHTeukDulUVJKCRciGVIYiYvNhqZmm9H2eo/nfWlcbW9sk5zT89TpfTqf59c552Wc8xsAlSQR5GYYSPyMwOGPRS5H5O+BeUKUNZhWmxtwYHqBxIWn00vicugbrbAMO1E1OpgdsBR9wYFjCF73IuQYtSghzZDAAwlHVVMPWrfmIZiNmQXvdfbBt72CIjTQSiO78vGFKTqEc1haHOg43FAF1qix8k7Nwp+E4gtUqbYiJjTi9mgT1+OTqnKtCny3sAyBImNpzHVkdb+0mhnw6/MTYsfXtKmZ4pJS9TnVvRgvF36IsejPwVyenCdrmf6cJdXPwEJBIfTNdYgjmMZc7vAQ8ustEPSGzNS4zNkLUUkzT4Fl5Fwcpf3dqhKj+jjttHXh1r1OnW1T0v/pBFNmCB6Ybe3oPNlVE476cywGw9i3D8DvWUM+de97s0G5QOKky2vtaNt2QVddmvkrk0sSfBNzCMy4EDu7oqaToG+wooKuzJqxETAhL/uPhPgYlT2BYDLiGyPyP9/jX/n1eRNgAFs4yk+Ai07FAAAAAElFTkSuQmCC",
        pt: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDhGOEMxMTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDhGOEMxMjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEOEY4QzBGMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEOEY4QzEwMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TFbakQAABKdJREFUeNq8ll1sU2UYx3+n7en6uZVa1oGDwtYxnCw0EhiCxjgjH14oiV6Ampj4GRONRpQ4ZZEYvTAhwSxGjRFilO2GDy8gZuEGTAS2xUHmBvuAuVG70U0o++ranq6tz2mHc8YB48KTnL7pec/7/p////k/z3kV6h4ZAJz8v9e4SX4Wz3uZkoGEFWQgL343wE6Djj4vwJTEOpHPA64/qXIPw6Qj90yfmwdjw529N72pDjJlYufybloD52gKnOfDkk55ZpQ55+x3b8dBcjx2yxzrTJJmiFtYt2CIH9adY0VJCq5PY3ggeEXhueY1/HK9SKRPgFnujHJLxnMD64D6YmFpMCX4pOQSNRuvQKeRfYeqaOv2kpa4K/3DvPd0CwQ09p1ZQs3lMhJJG1gnwJCeK4A5gLPmsWSZbiocoK60i/LKGCe/9/HMru1Eki5MJNG3TGLGbR6j/tMjbHmpm76OPN7qXcmxcDGoU6JA7L/Ax41sXVaje3OGpeQr6qTAEqOu7AKf+3vw+KY4edBF9c7XUdIKRWoILX0VG2N4raPEkk72n6ii2tdD4OEIO8xDlNjHOT1ewGS0AEzJHHv+DkCbYayDxkWitIEdi4LsW96F1y4Ri2K4TRxsq+NseDXL3EFsihOTptLRc4X2kyEutPZzjWKqK4Y40XAAY1L2kvgjk0Z29pfz3eDSHKg1epP9DGNFSmKVbYKvy9rZXdKPQ0mTEJWMLujtdPPlkScYutjDxeYQkXCUPNWE11/A5h2VrKpeQrhjkKZujSfX9LO4YpK4mM9pzrCtSMrOHuGikBrWLGRydaSZssOUSrGq0bT6LPYFZB0bE2UMEpySD6FwHocOt4mBY7icZnpbhvkx+SsWye8Kv5fHX72f3Q1bqf8mTGjwOGt0frI2Jua2agi3CJtdzfhbH6JPwHXpc8DGKa6mjGzqWEvtkl62FEawSlrisghpTIWuKL4FThxWG+lUFNVqodCejyqsB4IR9u5qJFDp5/nabWzwecgMhciI2lapQomNU0EXe4KlhISgjqVfhpummjKmODPiYetvVbzSeR/jkmuL9AvxD+WrR6RsBgjd8OB2W9CSKWFkkFvBas9j+T0uLrRbOFa7n4X2ThTJr742LuBvdpXzaNt6fr5RSFI32HSHm+lcmenkSwP49o9Syls30jDozXrCKMO7LzQyGosRDOfjcJjErfHsnZ9vImNeKkG4eefln6BA9BUdj4YXslL2+KJ/hbDWcnv/45pdTjqKHpGAT4gZjg4V0x6zUpUeIfDYCGvdA9QfLyU46mE8qnJtTCUkKtnUNF99cICnXuxhsE/lte4Kai9XMJoSne0T0yxn1bJ2684lchNziIMn2VvWwxsPSu7OW/i4YT0dl4qkYyqU+8LUbG/CsSHG/pZFvN21komEHWzC0JCaZ+f6dwCaCJLIo9ozSP36cxRJUyI83asXwY2r8OzZAI3D94qsydyn8q579Rx9WzoHe3yX+cjfl5367Hcf7/eXSe+UMrHpsqZvBzoP4FlfKjV7CNjoDaHK/1Pig+zXSPrAHQDOOoHc+bFH39gkdaiOcfq6N2cYneXNuXmcQP4SYAD5sNLFPECeSAAAAABJRU5ErkJggg==",
        ru: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQTJGMDNGQjE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQTJGMDNGQzE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMkYwM0Y5MTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNBMkYwM0ZBMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I9CATwAAAEhJREFUeNpi/P///1MGBgYpIP7MQB/AC8TPWKAMBiSaLpYzMQwQGLWYboCRgeH//9GgHrV41GKqZCdgXhrNTqMWj1pMFQAQYAD5egotBoZoiQAAAABJRU5ErkJggg==",
        th: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQUIyQzc1NTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQUIyQzc1NjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVBQjJDNzUzMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVBQjJDNzU0MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MpuROAAAADdJREFUeNpivMcrykAbwMRAMzA0jWb8////aIAgBwiDSu1ogIwaPZpliAYs9/nERgOEPkYDBBgAYAkIxbRv61QAAAAASUVORK5CYII=",
        vi: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODRDOUJGRDE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ODRDOUJGRTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4NEM5QkZCMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4NEM5QkZDMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MKjEOwAAAg1JREFUeNrMVTtrFVEQnvPae3fvPryPRLmInQn2WkhMIYggGEHs0gqC2FhraSE2grW9VgF/hZWPQmMqCZFAQhTxZu8jZ3fPjLPXRiSsm5iAU83Oznz7zTdzzop37Tk4HpNwbFYXWkjATKAVojYZXTPPTYSZRXbyHSkbdHSsBWRj2b1lZ5YtO/x4dNAlXUgu5+2rVgBB8S+C8BcLKHZLHOZYkGh2XDDnZIj+aTfa1Ebgr1c6phIDa7OmDKRPyaXcn3deH7m2s5TJHkJI7GggDvpnkRNki8geiDWK4ocIL9j+wzGMIVvXqoO4JZlp/97k5LL1zjhIcPtJkL4xzH3aXT3Wokmc/uVpsH47IgPeYianrWBWFngLOYS4cTfaeNxiTO7vIGNEkAE1Ytx65b+f76YvmqLLIRAK2BmueBzcfOmbCFWL9hW6ckOwVCtoF+lA735gj9QsqlPITrpm0m+6lThhgPBwy8drloq4k8/csBDT6K0ZvTYQY++ajXpFMdxX4dp7nRcyvpJ5F+3gub96Pfl4M/n+LDDn7Yklm7m/nJ0qaG5WAbUX851H4eqdhIGkorX7yfaDqL2QG4mUVx7hiku1hA5JJ5R+MiZwKiglwj2wIxWdy3EoioHgwR7meuIyHInJV+nxxJi/mwYb0NRu77NSAQkNFXLr6jGyCOV6wW8QVKr4Z/A//RUcwn4KMAD6MNV+pBmzeAAAAABJRU5ErkJggg==",
        zh: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDUwRENDQzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NDUwRENDRDE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NTBEQ0NBMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU0NTBEQ0NCMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+63sBgQAAAXhJREFUeNrslL1OwzAQx322k+ZDpaFSVSQqOsCChGBl5wkY4AGYeQF2NkYQAxI7ElM3nqE7TAgJtkKaUtQPkto+zgUxwZCgMvUmW5Z+/t0/OcPDesRmU/x7BZKZIZgB0IIh0wmv7KbR3rtOgJnCaGCYQfYkvA3lbarsUdCW6OAhhKhioRIODuZFkyFDxZxlbfqwsJ9yn43b0mlo1eXxWWB6UD8aIsfkIhCRIYl8aApBRLhy1Xe3NLXRvNbxqZ/eC8siqkAQrEAmFi0qOLhxxZKp7wxp+9oqvbVK7pq9xqmb55OQZL1VhcqmlA9ty0OiDC5c1ExWDQRoezdsEvPa4Qgcllz6RQIhF6dhRm3ZPfdxAsF25jZt/5MO1zHnAfWFDAsF8umS3kpBvsDSO8nLqHu8ejAWIXaOQ16xPdHXzo+eihPu638sW0dKhpfsOXFllJtrhX+bRhoc9QJoQNaMTaNgID8VaYrFKdL8edBn+IbM0XP0P6M/BBgAWIia6c9dDfMAAAAASUVORK5CYII="
    },
    ds = {
        set(l) {
            history.pushState({
                page: l
            }, null, null)
        },
        back() {
            !history.state ? .page || history.back()
        }
    };

function Nl(l, e, t) {
    const s = l.slice();
    return s[39] = e[t], s
}

function Tl(l, e, t) {
    const s = l.slice();
    return s[36] = e[t].currency, s
}

function Rl(l, e, t) {
    const s = l.slice();
    return s[33] = e[t], s
}

function jl(l) {
    let e, t;
    return e = new tt({
        props: {
            type: l[2],
            style: "margin: -1% 2% -1% 0"
        }
    }), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 4 && (r.type = s[2]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Ci(l) {
    let e, t, s = (l[4] ? l[7]("menu.yes") : l[7]("menu.no")) + "",
        n, r, i, a, o, u, f, d = l[0] && Bl(l);
    return {
        c() {
            e = w("div"), t = w("button"), n = J(s), r = V(), i = w("i"), o = V(), d && d.c(), this.h()
        },
        l(_) {
            e = k(_, "DIV", {
                class: !0
            });
            var v = E(e);
            t = k(v, "BUTTON", {
                class: !0,
                style: !0
            });
            var p = E(t);
            n = C(p, s), p.forEach(c), r = M(v), i = k(v, "I", {
                class: !0
            }), E(i).forEach(c), o = M(v), d && d.l(v), v.forEach(c), this.h()
        },
        h() {
            m(t, "class", "selected svelte-gf7tpg"), te(t, "width", "100%"), te(t, "height", "100%"), m(i, "class", a = "gi-caret-" + (l[0] ? "up" : "down") + " svelte-gf7tpg"), m(e, "class", "option-select svelte-gf7tpg")
        },
        m(_, v) {
            z(_, e, v), h(e, t), h(t, n), h(e, r), h(e, i), h(e, o), d && d.m(e, null), u || (f = be(t, "click", Xe(l[14])), u = !0)
        },
        p(_, v) {
            v[0] & 144 && s !== (s = (_[4] ? _[7]("menu.yes") : _[7]("menu.no")) + "") && K(n, s), v[0] & 1 && a !== (a = "gi-caret-" + (_[0] ? "up" : "down") + " svelte-gf7tpg") && m(i, "class", a), _[0] ? d ? (d.p(_, v), v[0] & 1 && j(d, 1)) : (d = Bl(_), d.c(), j(d, 1), d.m(e, null)) : d && (d.d(1), d = null)
        },
        i(_) {
            j(d)
        },
        o: Ne,
        d(_) {
            _ && c(e), d && d.d(), u = !1, f()
        }
    }
}

function $i(l) {
    let e, t, s, n = l[7]("menu.resetButton") + "",
        r, i, a;
    return {
        c() {
            e = w("button"), t = w("i"), s = V(), r = J(n), this.h()
        },
        l(o) {
            e = k(o, "BUTTON", {
                class: !0
            });
            var u = E(e);
            t = k(u, "I", {
                class: !0,
                style: !0
            }), E(t).forEach(c), s = M(u), r = C(u, n), u.forEach(c), this.h()
        },
        h() {
            m(t, "class", "gi-delete svelte-gf7tpg"), te(t, "vertical-align", "bottom"), te(t, "line-height", "0"), te(t, "margin-right", ".2rem"), m(e, "class", "option-select svelte-gf7tpg")
        },
        m(o, u) {
            z(o, e, u), h(e, t), h(e, s), h(e, r), i || (a = be(e, "click", l[10]), i = !0)
        },
        p(o, u) {
            u[0] & 128 && n !== (n = o[7]("menu.resetButton") + "") && K(r, n)
        },
        i: Ne,
        o: Ne,
        d(o) {
            o && c(e), i = !1, a()
        }
    }
}

function Fi(l) {
    let e, t, s, n, r, i, a, o;
    return {
        c() {
            e = w("button"), t = w("i"), s = V(), n = J(l[8]), r = J(" - "), i = J(l[9]), this.h()
        },
        l(u) {
            e = k(u, "BUTTON", {
                class: !0
            });
            var f = E(e);
            t = k(f, "I", {
                class: !0
            }), E(t).forEach(c), s = M(f), n = C(f, l[8]), r = C(f, " - "), i = C(f, l[9]), f.forEach(c), this.h()
        },
        h() {
            m(t, "class", "gi-caret-down svelte-gf7tpg"), m(e, "class", "option-select svelte-gf7tpg")
        },
        m(u, f) {
            z(u, e, f), h(e, t), h(e, s), h(e, n), h(e, r), h(e, i), a || (o = be(e, "click", l[13]), a = !0)
        },
        p(u, f) {
            f[0] & 256 && K(n, u[8]), f[0] & 512 && K(i, u[9])
        },
        i: Ne,
        o: Ne,
        d(u) {
            u && c(e), a = !1, o()
        }
    }
}

function Hi(l) {
    let e, t, s = (l[4] === "default" ? l[7]("outfit.default") : l[7](`menu.${l[4]}`)) + "",
        n, r, i, a, o, u, f, d = l[0] && Sl(l);
    return {
        c() {
            e = w("div"), t = w("button"), n = J(s), r = V(), i = w("i"), o = V(), d && d.c(), this.h()
        },
        l(_) {
            e = k(_, "DIV", {
                class: !0
            });
            var v = E(e);
            t = k(v, "BUTTON", {
                class: !0,
                style: !0
            });
            var p = E(t);
            n = C(p, s), p.forEach(c), r = M(v), i = k(v, "I", {
                class: !0
            }), E(i).forEach(c), o = M(v), d && d.l(v), v.forEach(c), this.h()
        },
        h() {
            m(t, "class", "selected svelte-gf7tpg"), te(t, "width", "100%"), te(t, "height", "100%"), m(i, "class", a = "gi-caret-" + (l[0] ? "up" : "down") + " svelte-gf7tpg"), m(e, "class", "option-select wishAmount svelte-gf7tpg")
        },
        m(_, v) {
            z(_, e, v), h(e, t), h(t, n), h(e, r), h(e, i), h(e, o), d && d.m(e, null), u || (f = be(t, "click", Xe(l[14])), u = !0)
        },
        p(_, v) {
            v[0] & 144 && s !== (s = (_[4] === "default" ? _[7]("outfit.default") : _[7](`menu.${_[4]}`)) + "") && K(n, s), v[0] & 1 && a !== (a = "gi-caret-" + (_[0] ? "up" : "down") + " svelte-gf7tpg") && m(i, "class", a), _[0] ? d ? (d.p(_, v), v[0] & 1 && j(d, 1)) : (d = Sl(_), d.c(), j(d, 1), d.m(e, null)) : d && (d.d(1), d = null)
        },
        i(_) {
            j(d)
        },
        o: Ne,
        d(_) {
            _ && c(e), d && d.d(), u = !1, f()
        }
    }
}

function Xi(l) {
    let e, t, s, n, r, i, a, o, u, f = l[0] && Ml(l);
    return {
        c() {
            e = w("div"), t = w("button"), s = J(l[5]), n = V(), r = w("i"), a = V(), f && f.c(), this.h()
        },
        l(d) {
            e = k(d, "DIV", {
                class: !0
            });
            var _ = E(e);
            t = k(_, "BUTTON", {
                class: !0,
                style: !0
            });
            var v = E(t);
            s = C(v, l[5]), v.forEach(c), n = M(_), r = k(_, "I", {
                class: !0
            }), E(r).forEach(c), a = M(_), f && f.l(_), _.forEach(c), this.h()
        },
        h() {
            m(t, "class", "selected svelte-gf7tpg"), te(t, "width", "100%"), te(t, "height", "100%"), m(r, "class", i = "gi-caret-" + (l[0] ? "up" : "down") + " svelte-gf7tpg"), m(e, "class", "option-select locale svelte-gf7tpg")
        },
        m(d, _) {
            z(d, e, _), h(e, t), h(t, s), h(e, n), h(e, r), h(e, a), f && f.m(e, null), o || (u = be(t, "click", Xe(l[14])), o = !0)
        },
        p(d, _) {
            _[0] & 32 && K(s, d[5]), _[0] & 1 && i !== (i = "gi-caret-" + (d[0] ? "up" : "down") + " svelte-gf7tpg") && m(r, "class", i), d[0] ? f ? (f.p(d, _), _[0] & 1 && j(f, 1)) : (f = Ml(d), f.c(), j(f, 1), f.m(e, null)) : f && (f.d(1), f = null)
        },
        i(d) {
            j(f)
        },
        o: Ne,
        d(d) {
            d && c(e), f && f.d(), o = !1, u()
        }
    }
}

function qi(l) {
    let e, t, s, n, r, i = ns[l[4]] + "",
        a, o, u, f, d, _, v, p = l[0] && Gl(l);
    return {
        c() {
            e = w("div"), t = w("button"), s = w("img"), r = V(), a = J(i), o = V(), u = w("i"), d = V(), p && p.c(), this.h()
        },
        l(g) {
            e = k(g, "DIV", {
                class: !0
            });
            var b = E(e);
            t = k(b, "BUTTON", {
                class: !0,
                style: !0
            });
            var A = E(t);
            s = k(A, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), r = M(A), a = C(A, i), A.forEach(c), o = M(b), u = k(b, "I", {
                class: !0
            }), E(u).forEach(c), d = M(b), p && p.l(b), b.forEach(c), this.h()
        },
        h() {
            Te(s.src, n = "data:image/png;base64," + rs[l[4].substring(0, 2)]) || m(s, "src", n), m(s, "alt", "flag"), m(s, "class", "flag svelte-gf7tpg"), m(t, "class", "selected svelte-gf7tpg"), te(t, "width", "100%"), te(t, "height", "100%"), m(u, "class", f = "gi-caret-" + (l[0] ? "up" : "down") + " svelte-gf7tpg"), m(e, "class", "option-select locale svelte-gf7tpg")
        },
        m(g, b) {
            z(g, e, b), h(e, t), h(t, s), h(t, r), h(t, a), h(e, o), h(e, u), h(e, d), p && p.m(e, null), _ || (v = be(t, "click", Xe(l[14])), _ = !0)
        },
        p(g, b) {
            b[0] & 16 && !Te(s.src, n = "data:image/png;base64," + rs[g[4].substring(0, 2)]) && m(s, "src", n), b[0] & 16 && i !== (i = ns[g[4]] + "") && K(a, i), b[0] & 1 && f !== (f = "gi-caret-" + (g[0] ? "up" : "down") + " svelte-gf7tpg") && m(u, "class", f), g[0] ? p ? (p.p(g, b), b[0] & 1 && j(p, 1)) : (p = Gl(g), p.c(), j(p, 1), p.m(e, null)) : p && (p.d(1), p = null)
        },
        i(g) {
            j(p)
        },
        o: Ne,
        d(g) {
            g && c(e), p && p.d(), _ = !1, v()
        }
    }
}

function Qi(l) {
    let e, t, s, n;
    return {
        c() {
            e = w("input"), this.h()
        },
        l(r) {
            e = k(r, "INPUT", {
                type: !0,
                class: !0,
                min: !0
            }), this.h()
        },
        h() {
            m(e, "type", "number"), m(e, "class", "option-select svelte-gf7tpg"), m(e, "min", "0"), e.value = t = l[17](l[2]) || 0
        },
        m(r, i) {
            z(r, e, i), s || (n = be(e, "change", l[18]), s = !0)
        },
        p(r, i) {
            i[0] & 4 && t !== (t = r[17](r[2]) || 0) && e.value !== t && (e.value = t)
        },
        i: Ne,
        o: Ne,
        d(r) {
            r && c(e), s = !1, n()
        }
    }
}

function Bl(l) {
    let e, t, s = l[7]("menu.no") + "",
        n, r, i, a = l[7]("menu.yes") + "",
        o, u, f, d;
    return {
        c() {
            e = w("div"), t = w("button"), n = J(s), r = V(), i = w("button"), o = J(a), this.h()
        },
        l(_) {
            e = k(_, "DIV", {
                class: !0
            });
            var v = E(e);
            t = k(v, "BUTTON", {
                class: !0
            });
            var p = E(t);
            n = C(p, s), p.forEach(c), r = M(v), i = k(v, "BUTTON", {
                class: !0
            });
            var g = E(i);
            o = C(g, a), g.forEach(c), v.forEach(c), this.h()
        },
        h() {
            m(t, "class", "svelte-gf7tpg"), ye(t, "selected", !l[4]), m(i, "class", "svelte-gf7tpg"), ye(i, "selected", l[4]), m(e, "class", "select svelte-gf7tpg")
        },
        m(_, v) {
            z(_, e, v), h(e, t), h(t, n), h(e, r), h(e, i), h(i, o), f || (d = [be(t, "click", Xe(l[24])), be(i, "click", Xe(l[25]))], f = !0)
        },
        p(_, v) {
            v[0] & 128 && s !== (s = _[7]("menu.no") + "") && K(n, s), v[0] & 16 && ye(t, "selected", !_[4]), v[0] & 128 && a !== (a = _[7]("menu.yes") + "") && K(o, a), v[0] & 16 && ye(i, "selected", _[4])
        },
        i(_) {
            u || Re(() => {
                u = Me(e, Ye, {
                    duration: 200,
                    y: -10
                }), u.start()
            })
        },
        o: Ne,
        d(_) {
            _ && c(e), f = !1, jt(d)
        }
    }
}

function Sl(l) {
    let e, t, s = ["default", "unlimited", "manual"],
        n = [];
    for (let r = 0; r < 3; r += 1) n[r] = Vl(Nl(l, s, r));
    return {
        c() {
            e = w("div");
            for (let r = 0; r < 3; r += 1) n[r].c();
            this.h()
        },
        l(r) {
            e = k(r, "DIV", {
                class: !0
            });
            var i = E(e);
            for (let a = 0; a < 3; a += 1) n[a].l(i);
            i.forEach(c), this.h()
        },
        h() {
            m(e, "class", "select svelte-gf7tpg")
        },
        m(r, i) {
            z(r, e, i);
            for (let a = 0; a < 3; a += 1) n[a].m(e, null)
        },
        p(r, i) {
            if (i[0] & 65680) {
                s = ["default", "unlimited", "manual"];
                let a;
                for (a = 0; a < 3; a += 1) {
                    const o = Nl(r, s, a);
                    n[a] ? n[a].p(o, i) : (n[a] = Vl(o), n[a].c(), n[a].m(e, null))
                }
                for (; a < 3; a += 1) n[a].d(1)
            }
        },
        i(r) {
            t || Re(() => {
                t = Me(e, Ye, {
                    duration: 200,
                    y: -10
                }), t.start()
            })
        },
        o: Ne,
        d(r) {
            r && c(e), qe(n, r)
        }
    }
}

function Vl(l) {
    let e, t, s = (l[39] === "default" ? l[7]("outfit.default") : l[7](`menu.${l[39]}`)) + "",
        n, r, i, a;

    function o() {
        return l[23](l[39])
    }
    return {
        c() {
            e = w("button"), t = w("span"), n = J(s), r = V(), this.h()
        },
        l(u) {
            e = k(u, "BUTTON", {
                class: !0
            });
            var f = E(e);
            t = k(f, "SPAN", {
                style: !0
            });
            var d = E(t);
            n = C(d, s), d.forEach(c), r = M(f), f.forEach(c), this.h()
        },
        h() {
            te(t, "text-align", "center"), te(t, "width", "100%"), te(t, "padding", "3%"), m(e, "class", "svelte-gf7tpg"), ye(e, "selected", l[4] === l[39])
        },
        m(u, f) {
            z(u, e, f), h(e, t), h(t, n), h(e, r), i || (a = be(e, "click", o), i = !0)
        },
        p(u, f) {
            l = u, f[0] & 128 && s !== (s = (l[39] === "default" ? l[7]("outfit.default") : l[7](`menu.${l[39]}`)) + "") && K(n, s), f[0] & 16 && ye(e, "selected", l[4] === l[39])
        },
        d(u) {
            u && c(e), i = !1, a()
        }
    }
}

function Ml(l) {
    let e, t, s = Us,
        n = [];
    for (let r = 0; r < s.length; r += 1) n[r] = zl(Tl(l, s, r));
    return {
        c() {
            e = w("div");
            for (let r = 0; r < n.length; r += 1) n[r].c();
            this.h()
        },
        l(r) {
            e = k(r, "DIV", {
                class: !0
            });
            var i = E(e);
            for (let a = 0; a < n.length; a += 1) n[a].l(i);
            i.forEach(c), this.h()
        },
        h() {
            m(e, "class", "select svelte-gf7tpg")
        },
        m(r, i) {
            z(r, e, i);
            for (let a = 0; a < n.length; a += 1) n[a].m(e, null)
        },
        p(r, i) {
            if (i[0] & 32800) {
                s = Us;
                let a;
                for (a = 0; a < s.length; a += 1) {
                    const o = Tl(r, s, a);
                    n[a] ? n[a].p(o, i) : (n[a] = zl(o), n[a].c(), n[a].m(e, null))
                }
                for (; a < n.length; a += 1) n[a].d(1);
                n.length = s.length
            }
        },
        i(r) {
            t || Re(() => {
                t = Me(e, Ye, {
                    duration: 200,
                    y: -10
                }), t.start()
            })
        },
        o: Ne,
        d(r) {
            r && c(e), qe(n, r)
        }
    }
}

function zl(l) {
    let e, t, s = l[36] + "",
        n, r, i, a;

    function o() {
        return l[22](l[36])
    }
    return {
        c() {
            e = w("button"), t = w("span"), n = J(s), r = V(), this.h()
        },
        l(u) {
            e = k(u, "BUTTON", {
                class: !0
            });
            var f = E(e);
            t = k(f, "SPAN", {
                style: !0
            });
            var d = E(t);
            n = C(d, s), d.forEach(c), r = M(f), f.forEach(c), this.h()
        },
        h() {
            te(t, "text-align", "center"), te(t, "width", "100%"), te(t, "padding", "3%"), m(e, "class", "svelte-gf7tpg"), ye(e, "selected", l[5] === l[36])
        },
        m(u, f) {
            z(u, e, f), h(e, t), h(t, n), h(e, r), i || (a = be(e, "click", Xe(o)), i = !0)
        },
        p(u, f) {
            l = u, f[0] & 32 && ye(e, "selected", l[5] === l[36])
        },
        d(u) {
            u && c(e), i = !1, a()
        }
    }
}

function Gl(l) {
    let e, t, s, n, r, i, a, o, u = l[6],
        f = [];
    for (let d = 0; d < u.length; d += 1) f[d] = Ol(Rl(l, u, d));
    return {
        c() {
            e = w("div");
            for (let d = 0; d < f.length; d += 1) f[d].c();
            t = V(), s = w("button"), n = w("a"), r = J("Contribute"), this.h()
        },
        l(d) {
            e = k(d, "DIV", {
                class: !0
            });
            var _ = E(e);
            for (let g = 0; g < f.length; g += 1) f[g].l(_);
            t = M(_), s = k(_, "BUTTON", {
                class: !0
            });
            var v = E(s);
            n = k(v, "A", {
                href: !0,
                target: !0,
                style: !0
            });
            var p = E(n);
            r = C(p, "Contribute"), p.forEach(c), v.forEach(c), _.forEach(c), this.h()
        },
        h() {
            m(n, "href", "https://github.com/AguzzTN54/Genshin-Impact-Wish-Simulator/tree/master/src/locales"), m(n, "target", "_blank"), te(n, "text-align", "left"), te(n, "width", "100%"), te(n, "padding", ".5rem"), te(n, "text-align", "center"), m(s, "class", "svelte-gf7tpg"), m(e, "class", "select svelte-gf7tpg")
        },
        m(d, _) {
            z(d, e, _);
            for (let v = 0; v < f.length; v += 1) f[v].m(e, null);
            h(e, t), h(e, s), h(s, n), h(n, r), a || (o = be(s, "click", Xe(l[20])), a = !0)
        },
        p(d, _) {
            if (_[0] & 4176) {
                u = d[6];
                let v;
                for (v = 0; v < u.length; v += 1) {
                    const p = Rl(d, u, v);
                    f[v] ? f[v].p(p, _) : (f[v] = Ol(p), f[v].c(), f[v].m(e, t))
                }
                for (; v < f.length; v += 1) f[v].d(1);
                f.length = u.length
            }
        },
        i(d) {
            i || Re(() => {
                i = Me(e, Ye, {
                    duration: 200,
                    y: -10
                }), i.start()
            })
        },
        o: Ne,
        d(d) {
            d && c(e), qe(f, d), a = !1, o()
        }
    }
}

function Ol(l) {
    let e, t, s, n, r, i, a = ns[l[33]] + "",
        o, u, f;

    function d() {
        return l[21](l[33])
    }
    return {
        c() {
            e = w("button"), t = w("span"), s = w("img"), r = V(), i = w("span"), o = J(a), this.h()
        },
        l(_) {
            e = k(_, "BUTTON", {
                class: !0
            });
            var v = E(e);
            t = k(v, "SPAN", {
                style: !0
            });
            var p = E(t);
            s = k(p, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), p.forEach(c), r = M(v), i = k(v, "SPAN", {
                style: !0
            });
            var g = E(i);
            o = C(g, a), g.forEach(c), v.forEach(c), this.h()
        },
        h() {
            Te(s.src, n = "data:image/png;base64," + rs[l[33].substring(0, 2)]) || m(s, "src", n), m(s, "alt", "flag"), m(s, "class", "flag svelte-gf7tpg"), te(t, "text-align", "right"), te(t, "padding-right", "1rem"), te(t, "width", "50%"), te(i, "text-align", "left"), te(i, "width", "100%"), m(e, "class", "svelte-gf7tpg"), ye(e, "selected", l[4] === l[33])
        },
        m(_, v) {
            z(_, e, v), h(e, t), h(t, s), h(e, r), h(e, i), h(i, o), u || (f = be(e, "click", Xe(d)), u = !0)
        },
        p(_, v) {
            l = _, v[0] & 64 && !Te(s.src, n = "data:image/png;base64," + rs[l[33].substring(0, 2)]) && m(s, "src", n), v[0] & 64 && a !== (a = ns[l[33]] + "") && K(o, a), v[0] & 80 && ye(e, "selected", l[4] === l[33])
        },
        d(_) {
            _ && c(e), u = !1, f()
        }
    }
}

function Ki(l) {
    let e, t, s, n, r, i, a = l[3] && jl(l);

    function o(d, _) {
        return d[3] ? Qi : d[2] === "locale" ? qi : d[2] === "currency" ? Xi : d[2] === "wishAmount" ? Hi : d[2] === "switchBanner" ? Fi : d[2] === "reset" ? $i : Ci
    }
    let u = o(l),
        f = u(l);
    return {
        c() {
            e = w("div"), t = w("div"), a && a.c(), s = V(), n = J(l[1]), r = V(), f.c(), this.h()
        },
        l(d) {
            e = k(d, "DIV", {
                class: !0
            });
            var _ = E(e);
            t = k(_, "DIV", {
                class: !0
            });
            var v = E(t);
            a && a.l(v), s = M(v), n = C(v, l[1]), v.forEach(c), r = M(_), f.l(_), _.forEach(c), this.h()
        },
        h() {
            m(t, "class", "option-name svelte-gf7tpg"), m(e, "class", "option svelte-gf7tpg"), ye(e, "sub", l[3])
        },
        m(d, _) {
            z(d, e, _), h(e, t), a && a.m(t, null), h(t, s), h(t, n), h(e, r), f.m(e, null), i = !0
        },
        p(d, _) {
            d[3] ? a ? (a.p(d, _), _[0] & 8 && j(a, 1)) : (a = jl(d), a.c(), j(a, 1), a.m(t, s)) : a && (ke(), U(a, 1, 1, () => {
                a = null
            }), Ee()), (!i || _[0] & 2) && K(n, d[1]), u === (u = o(d)) && f ? f.p(d, _) : (f.d(1), f = u(d), f && (f.c(), j(f, 1), f.m(e, null))), _[0] & 8 && ye(e, "sub", d[3])
        },
        i(d) {
            i || (j(a), j(f), i = !0)
        },
        o(d) {
            U(a), i = !1
        },
        d(d) {
            d && c(e), a && a.d(), f.d()
        }
    }
}

function xi(l, e, t) {
    let s, n, r, i, a, o, u, f, d, _, v;
    q(l, pt, X => t(26, n = X)), q(l, _t, X => t(27, r = X)), q(l, nt, X => t(28, i = X)), q(l, rt, X => t(29, a = X)), q(l, dt, X => t(30, o = X)), q(l, Wt, X => t(19, u = X)), q(l, ir, X => t(6, f = X)), q(l, Le, X => t(7, d = X)), q(l, At, X => t(8, _ = X)), q(l, St, X => t(9, v = X));
    let {
        text: p
    } = e, {
        name: g
    } = e, {
        sub: b = !1
    } = e, {
        activeIndicator: A = null
    } = e, {
        showOption: N = !1
    } = e;
    const B = mt("handleOption"),
        D = mt("factoryReset"),
        I = at();
    let y = X => {
        Se(), t(0, N = !N), X && (I("select", {
            selected: X
        }), B(""))
    };
    const S = X => {
            Se(), Wt.set(X), localStorage.setItem("locale", X), B(""), _s.init()
        },
        P = () => {
            Se("prevbanner"), ds.set("previous"), Nt.set("previous-banner")
        },
        Y = () => {
            if (Se(), N) return B("");
            B(g)
        },
        L = X => {
            Se(), ft.set("currency", X), t(5, s = X), _s.init(X), B("")
        },
        G = X => {
            Se(), B(""), I("select", X)
        },
        T = X => {
            let he = 0;
            switch (X) {
                case "primogem":
                    he = o;
                    break;
                case "intertwined":
                    he = a;
                    break;
                case "acquaint":
                    he = i;
                    break;
                case "starglitter":
                    he = r;
                    break;
                case "stardust":
                    he = n;
                    break
            }
            return he
        },
        O = X => {
            let he = parseInt(X.target.value);
            const _e = isNaN(he) ? 0 : he;
            switch (g) {
                case "primogem":
                    dt.set(_e);
                    break;
                case "intertwined":
                    rt.set(_e);
                    break;
                case "acquaint":
                    nt.set(_e);
                    break;
                case "starglitter":
                    _t.set(_e);
                    break;
                case "stardust":
                    pt.set(_e);
                    break
            }
            kt.set(g, _e)
        };

    function R(X) {
        Gt.call(this, l, X)
    }
    const W = X => S(X),
        F = X => L(X),
        oe = X => G(X),
        Z = () => y("no"),
        H = () => y("yes");
    return l.$$set = X => {
        "text" in X && t(1, p = X.text), "name" in X && t(2, g = X.name), "sub" in X && t(3, b = X.sub), "activeIndicator" in X && t(4, A = X.activeIndicator), "showOption" in X && t(0, N = X.showOption)
    }, l.$$.update = () => {
        l.$$.dirty[0] & 524288 && t(5, s = u ? _s.checkUsedCurrency().currency : "")
    }, [N, p, g, b, A, s, f, d, _, v, D, y, S, P, Y, L, G, T, O, u, R, W, F, oe, Z, H]
}
class bt extends ze {
    constructor(e) {
        super(), Ge(this, e, xi, Ki, Oe, {
            text: 1,
            name: 2,
            sub: 3,
            activeIndicator: 4,
            showOption: 0
        }, null, [-1, -1])
    }
}

function Pl(l, e, t) {
    const s = l.slice();
    return s[28] = e[t], s[30] = t, s
}

function ea(l) {
    let e, t, s, n = l[8]("menu.resetPrompt") + "",
        r, i, a, o, u = l[8]("menu.resetDetail") + "",
        f, d, _, v, p, g, b = l[8]("menu.clearCache", {
            values: {
                size: l[6]
            }
        }) + "",
        A, N, B;
    return {
        c() {
            e = w("div"), t = w("div"), s = new Tt(!1), r = V(), i = w("br"), a = V(), o = w("small"), f = J(u), d = V(), _ = w("div"), v = w("input"), p = V(), g = w("label"), A = J(b), this.h()
        },
        l(D) {
            e = k(D, "DIV", {
                class: !0
            });
            var I = E(e);
            t = k(I, "DIV", {
                style: !0
            });
            var y = E(t);
            s = Rt(y, !1), r = M(y), i = k(y, "BR", {}), a = M(y), o = k(y, "SMALL", {});
            var S = E(o);
            f = C(S, u), S.forEach(c), d = M(y), _ = k(y, "DIV", {
                class: !0
            });
            var P = E(_);
            v = k(P, "INPUT", {
                type: !0,
                name: !0,
                id: !0,
                style: !0
            }), p = M(P), g = k(P, "LABEL", {
                for: !0,
                class: !0
            });
            var Y = E(g);
            A = C(Y, b), Y.forEach(c), P.forEach(c), y.forEach(c), I.forEach(c), this.h()
        },
        h() {
            s.a = r, m(v, "type", "checkbox"), m(v, "name", "cache"), m(v, "id", "cache"), te(v, "margin-right", "2%"), m(g, "for", "cache"), m(g, "class", "svelte-2j6qcw"), m(_, "class", "clear-cache svelte-2j6qcw"), te(t, "padding", "1rem"), m(e, "class", "confirmation svelte-2j6qcw")
        },
        m(D, I) {
            z(D, e, I), h(e, t), s.m(n, t), h(t, r), h(t, i), h(t, a), h(t, o), h(o, f), h(t, d), h(t, _), h(_, v), v.checked = l[4], h(_, p), h(_, g), h(g, A), N || (B = be(v, "change", l[19]), N = !0)
        },
        p(D, I) {
            I[0] & 256 && n !== (n = D[8]("menu.resetPrompt") + "") && s.p(n), I[0] & 256 && u !== (u = D[8]("menu.resetDetail") + "") && K(f, u), I[0] & 16 && (v.checked = D[4]), I[0] & 320 && b !== (b = D[8]("menu.clearCache", {
                values: {
                    size: D[6]
                }
            }) + "") && K(A, b)
        },
        d(D) {
            D && c(e), N = !1, B()
        }
    }
}

function Wl(l) {
    let e, t;
    return e = new cs({
        props: {
            $$slots: {
                default: [ta]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("close", l[20]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 256 | n[1] & 1 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function ta(l) {
    let e = l[8]("menu.resetSuccess") + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 256 && e !== (e = s[8]("menu.resetSuccess") + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function Ul(l) {
    let e, t, s, n, r;
    return t = new bt({
        props: {
            sub: !0,
            name: l[28],
            text: l[8](`shop.item.${l[28]}`)
        }
    }), {
        c() {
            e = w("div"), ne(t.$$.fragment)
        },
        l(i) {
            e = k(i, "DIV", {});
            var a = E(e);
            de(t.$$.fragment, a), a.forEach(c)
        },
        m(i, a) {
            z(i, e, a), re(t, e, null), r = !0
        },
        p(i, a) {
            l = i;
            const o = {};
            a[0] & 256 && (o.text = l[8](`shop.item.${l[28]}`)), t.$set(o)
        },
        i(i) {
            r || (j(t.$$.fragment, i), i && Re(() => {
                n && n.end(1), s = Me(e, Ye, {
                    y: -10,
                    delay: Math.sqrt(l[30] * 1e4)
                }), s.start()
            }), r = !0)
        },
        o(i) {
            U(t.$$.fragment, i), s && s.invalidate(), i && (n = xn(e, Ye, {
                y: -10
            })), r = !1
        },
        d(i) {
            i && c(e), ie(t), i && n && n.end()
        }
    }
}

function Yl(l) {
    let e, t, s = l[2] === "manual" && Ul(l);
    return {
        c() {
            s && s.c(), e = Be()
        },
        l(n) {
            s && s.l(n), e = Be()
        },
        m(n, r) {
            s && s.m(n, r), z(n, e, r), t = !0
        },
        p(n, r) {
            n[2] === "manual" ? s ? (s.p(n, r), r[0] & 4 && j(s, 1)) : (s = Ul(n), s.c(), j(s, 1), s.m(e.parentNode, e)) : s && (ke(), U(s, 1, 1, () => {
                s = null
            }), Ee())
        },
        i(n) {
            t || (j(s), t = !0)
        },
        o(n) {
            U(s), t = !1
        },
        d(n) {
            s && s.d(n), n && c(e)
        }
    }
}

function sa(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N, B, D, I, y, S, P, Y, L, G, T, O, R, W, F, oe, Z, H, X, he, _e, ee, le, x, we, ue;
    e = new Zt({
        props: {
            title: l[8]("menu.resetTitle"),
            show: l[3],
            button: "all",
            $$slots: {
                default: [ea]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("confirm", l[15]), e.$on("cancel", l[16]);
    let me = l[5] && Wl(l);
    r = new bt({
        props: {
            text: l[8]("menu.language"),
            name: "locale",
            activeIndicator: l[9],
            showOption: l[0] === "locale"
        }
    }), a = new bt({
        props: {
            text: l[8]("menu.currency"),
            name: "currency",
            showOption: l[0] === "currency"
        }
    }), u = new bt({
        props: {
            name: "wishAmount",
            text: l[8]("menu.fates"),
            showOption: l[0] === "wishAmount",
            activeIndicator: l[2]
        }
    }), u.$on("select", l[14]);
    let ce = ["intertwined", "acquaint", "starglitter", "stardust", "primogem"],
        se = [];
    for (let $ = 0; $ < 5; $ += 1) se[$] = Yl(Pl(l, ce, $));
    const fe = $ => U(se[$], 1, 1, () => {
        se[$] = null
    });
    return _ = new bt({
        props: {
            name: "audio",
            text: l[8]("menu.mute"),
            activeIndicator: l[10],
            showOption: l[0] === "audio"
        }
    }), _.$on("select", l[21]), p = new bt({
        props: {
            name: "animeoff",
            text: l[8]("menu.animeoff"),
            activeIndicator: l[11],
            showOption: l[0] === "animeoff"
        }
    }), p.$on("select", l[22]), b = new bt({
        props: {
            name: "animatedbg",
            text: l[8]("menu.animatedbg"),
            activeIndicator: l[1],
            showOption: l[0] === "animatedbg"
        }
    }), b.$on("select", l[13]), N = new bt({
        props: {
            name: "switchBanner",
            text: l[8]("menu.switchBanner")
        }
    }), D = new bt({
        props: {
            name: "reset",
            text: l[8]("menu.factoryReset")
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), me && me.c(), s = V(), n = w("div"), ne(r.$$.fragment), i = V(), ne(a.$$.fragment), o = V(), ne(u.$$.fragment), f = V();
            for (let $ = 0; $ < 5; $ += 1) se[$].c();
            d = V(), ne(_.$$.fragment), v = V(), ne(p.$$.fragment), g = V(), ne(b.$$.fragment), A = V(), ne(N.$$.fragment), B = V(), ne(D.$$.fragment), I = V(), y = w("h2"), S = J("Notes :"), P = V(), Y = w("div"), L = w("ol"), G = w("li"), T = J(`I tried to create the simulator with pity system almost like the real game, the rate of\r
				getting rare item will increase once you reach a certain pity depending on where banner you\r
				pull. you can go `), O = w("a"), R = J("Here"), W = J(`\r
				to find details of the probability. If you has any idea, please send me feedback by creating\r
				`), F = w("a"), oe = J("new issue here"), Z = V(), H = w("li"), X = J(`This app use Localstorage and IndexedDB to save your pull history, it's native on your\r
				browser, if you clear your browser data, you will lost your data that related to this app\r
				too. No chance to recover it back, because we never store your data on cloud`), he = V(), _e = w("li"), ee = J(`This App does not collect or store any personally identifiable information about you.\r
				However, this app use third party services that may collect information used to identify\r
				you. The information that these third party services request will be retained on your device\r
				and is not collected by me in any way.`), this.h()
        },
        l($) {
            de(e.$$.fragment, $), t = M($), me && me.l($), s = M($), n = k($, "DIV", {
                class: !0
            });
            var Q = E(n);
            de(r.$$.fragment, Q), i = M(Q), de(a.$$.fragment, Q), o = M(Q), de(u.$$.fragment, Q), f = M(Q);
            for (let Ze = 0; Ze < 5; Ze += 1) se[Ze].l(Q);
            d = M(Q), de(_.$$.fragment, Q), v = M(Q), de(p.$$.fragment, Q), g = M(Q), de(b.$$.fragment, Q), A = M(Q), de(N.$$.fragment, Q), B = M(Q), de(D.$$.fragment, Q), I = M(Q), y = k(Q, "H2", {});
            var ae = E(y);
            S = C(ae, "Notes :"), ae.forEach(c), P = M(Q), Y = k(Q, "DIV", {
                class: !0
            });
            var pe = E(Y);
            L = k(pe, "OL", {
                class: !0
            });
            var ve = E(L);
            G = k(ve, "LI", {
                class: !0
            });
            var ge = E(G);
            T = C(ge, `I tried to create the simulator with pity system almost like the real game, the rate of\r
				getting rare item will increase once you reach a certain pity depending on where banner you\r
				pull. you can go `), O = k(ge, "A", {
                href: !0,
                target: !0,
                rel: !0
            });
            var Ae = E(O);
            R = C(Ae, "Here"), Ae.forEach(c), W = C(ge, `\r
				to find details of the probability. If you has any idea, please send me feedback by creating\r
				`), F = k(ge, "A", {
                href: !0,
                target: !0,
                rel: !0
            });
            var Ue = E(F);
            oe = C(Ue, "new issue here"), Ue.forEach(c), ge.forEach(c), Z = M(ve), H = k(ve, "LI", {
                class: !0
            });
            var We = E(H);
            X = C(We, `This app use Localstorage and IndexedDB to save your pull history, it's native on your\r
				browser, if you clear your browser data, you will lost your data that related to this app\r
				too. No chance to recover it back, because we never store your data on cloud`), We.forEach(c), he = M(ve), _e = k(ve, "LI", {
                class: !0
            });
            var Pe = E(_e);
            ee = C(Pe, `This App does not collect or store any personally identifiable information about you.\r
				However, this app use third party services that may collect information used to identify\r
				you. The information that these third party services request will be retained on your device\r
				and is not collected by me in any way.`), Pe.forEach(c), ve.forEach(c), pe.forEach(c), Q.forEach(c), this.h()
        },
        h() {
            m(O, "href", "https://github.com/AguzzTN54/Genshin-Impact-Wish-Simulator#pity-system"), m(O, "target", "_blank"), m(O, "rel", "noopener noreferrer"), m(F, "href", "https://github.com/AguzzTN54/Genshin-Impact-Wish-Simulator/issues"), m(F, "target", "_blank"), m(F, "rel", "noopener noreferrer"), m(G, "class", "svelte-2j6qcw"), m(H, "class", "svelte-2j6qcw"), m(_e, "class", "svelte-2j6qcw"), m(L, "class", "svelte-2j6qcw"), m(Y, "class", "notes svelte-2j6qcw"), m(n, "class", "content-container")
        },
        m($, Q) {
            re(e, $, Q), z($, t, Q), me && me.m($, Q), z($, s, Q), z($, n, Q), re(r, n, null), h(n, i), re(a, n, null), h(n, o), re(u, n, null), h(n, f);
            for (let ae = 0; ae < 5; ae += 1) se[ae].m(n, null);
            h(n, d), re(_, n, null), h(n, v), re(p, n, null), h(n, g), re(b, n, null), h(n, A), re(N, n, null), h(n, B), re(D, n, null), h(n, I), h(n, y), h(y, S), h(n, P), h(n, Y), h(Y, L), h(L, G), h(G, T), h(G, O), h(O, R), h(G, W), h(G, F), h(F, oe), h(L, Z), h(L, H), h(H, X), h(L, he), h(L, _e), h(_e, ee), l[23](n), x = !0, we || (ue = [be(O, "click", Xe(l[18])), be(F, "click", Xe(l[17]))], we = !0)
        },
        p($, Q) {
            const ae = {};
            Q[0] & 256 && (ae.title = $[8]("menu.resetTitle")), Q[0] & 8 && (ae.show = $[3]), Q[0] & 336 | Q[1] & 1 && (ae.$$scope = {
                dirty: Q,
                ctx: $
            }), e.$set(ae), $[5] ? me ? (me.p($, Q), Q[0] & 32 && j(me, 1)) : (me = Wl($), me.c(), j(me, 1), me.m(s.parentNode, s)) : me && (ke(), U(me, 1, 1, () => {
                me = null
            }), Ee());
            const pe = {};
            Q[0] & 256 && (pe.text = $[8]("menu.language")), Q[0] & 512 && (pe.activeIndicator = $[9]), Q[0] & 1 && (pe.showOption = $[0] === "locale"), r.$set(pe);
            const ve = {};
            Q[0] & 256 && (ve.text = $[8]("menu.currency")), Q[0] & 1 && (ve.showOption = $[0] === "currency"), a.$set(ve);
            const ge = {};
            if (Q[0] & 256 && (ge.text = $[8]("menu.fates")), Q[0] & 1 && (ge.showOption = $[0] === "wishAmount"), Q[0] & 4 && (ge.activeIndicator = $[2]), u.$set(ge), Q[0] & 260) {
                ce = ["intertwined", "acquaint", "starglitter", "stardust", "primogem"];
                let De;
                for (De = 0; De < 5; De += 1) {
                    const Ve = Pl($, ce, De);
                    se[De] ? (se[De].p(Ve, Q), j(se[De], 1)) : (se[De] = Yl(Ve), se[De].c(), j(se[De], 1), se[De].m(n, d))
                }
                for (ke(), De = 5; De < 5; De += 1) fe(De);
                Ee()
            }
            const Ae = {};
            Q[0] & 256 && (Ae.text = $[8]("menu.mute")), Q[0] & 1024 && (Ae.activeIndicator = $[10]), Q[0] & 1 && (Ae.showOption = $[0] === "audio"), _.$set(Ae);
            const Ue = {};
            Q[0] & 256 && (Ue.text = $[8]("menu.animeoff")), Q[0] & 2048 && (Ue.activeIndicator = $[11]), Q[0] & 1 && (Ue.showOption = $[0] === "animeoff"), p.$set(Ue);
            const We = {};
            Q[0] & 256 && (We.text = $[8]("menu.animatedbg")), Q[0] & 2 && (We.activeIndicator = $[1]), Q[0] & 1 && (We.showOption = $[0] === "animatedbg"), b.$set(We);
            const Pe = {};
            Q[0] & 256 && (Pe.text = $[8]("menu.switchBanner")), N.$set(Pe);
            const Ze = {};
            Q[0] & 256 && (Ze.text = $[8]("menu.factoryReset")), D.$set(Ze)
        },
        i($) {
            if (!x) {
                j(e.$$.fragment, $), j(me), j(r.$$.fragment, $), j(a.$$.fragment, $), j(u.$$.fragment, $);
                for (let Q = 0; Q < 5; Q += 1) j(se[Q]);
                j(_.$$.fragment, $), j(p.$$.fragment, $), j(b.$$.fragment, $), j(N.$$.fragment, $), j(D.$$.fragment, $), le || Re(() => {
                    le = Me(n, $e, {
                        duration: 200
                    }), le.start()
                }), x = !0
            }
        },
        o($) {
            U(e.$$.fragment, $), U(me), U(r.$$.fragment, $), U(a.$$.fragment, $), U(u.$$.fragment, $), se = se.filter(Boolean);
            for (let Q = 0; Q < 5; Q += 1) U(se[Q]);
            U(_.$$.fragment, $), U(p.$$.fragment, $), U(b.$$.fragment, $), U(N.$$.fragment, $), U(D.$$.fragment, $), x = !1
        },
        d($) {
            ie(e, $), $ && c(t), me && me.d($), $ && c(s), $ && c(n), ie(r), ie(a), ie(u), qe(se, $), ie(_), ie(p), ie(b), ie(N), ie(D), l[23](null), we = !1, jt(ue)
        }
    }
}

function la(l, e, t) {
    let s, n, r, i;
    q(l, Le, W => t(8, s = W)), q(l, Wt, W => t(9, n = W)), q(l, Pt, W => t(10, r = W)), q(l, Jt, W => t(11, i = W));
    let a = "";
    wt("handleOption", W => t(0, a = W));
    const u = (W, F) => {
            const {
                selected: oe
            } = F.detail, Z = oe === "yes";
            if (ft.set(W, Z), W === "muted") return Pt.set(Z);
            if (W === "animeoff") return Jt.set(Z)
        },
        f = mt("animateBG");
    let d = !!ft.get("animatedBG");
    const _ = W => {
        const {
            selected: F
        } = W.detail;
        ft.set("animatedBG", F === "yes"), t(1, d = F === "yes"), f()
    };
    let v = ft.get("wishAmount") || "default";
    const p = ({
        detail: W
    }) => {
        t(2, v = W), ft.set("wishAmount", W), qt.set(W === "unlimited")
    };
    let g = !1,
        b = !1,
        A = !1,
        N = "..B";
    const B = async () => {
        const {
            usage: W
        } = await navigator.storage.estimate(), F = (W / 1e6).toFixed(2);
        t(6, N = `${F}MB`)
    };
    wt("factoryReset", () => {
        t(3, g = !0), Se("modal")
    });
    const I = async () => {
            t(3, g = !1), await Zi({
                clearCache: b
            }), t(5, A = !0), t(2, v = "default")
        },
        y = () => {
            t(3, g = !1)
        };
    let S;
    it(() => {
        It(S, {
            sizeAutoCapable: !1,
            className: "os-theme-light"
        }), B()
    });

    function P(W) {
        Gt.call(this, l, W)
    }

    function Y(W) {
        Gt.call(this, l, W)
    }

    function L() {
        b = this.checked, t(4, b)
    }
    const G = () => t(5, A = !1),
        T = W => u("muted", W),
        O = W => u("animeoff", W);

    function R(W) {
        Ke[W ? "unshift" : "push"](() => {
            S = W, t(7, S)
        })
    }
    return [a, d, v, g, b, A, N, S, s, n, r, i, u, _, p, I, y, P, Y, L, G, T, O, R]
}
class na extends ze {
    constructor(e) {
        super(), Ge(this, e, la, sa, Oe, {}, null, [-1, -1])
    }
}

function Zl(l, e, t) {
    const s = l.slice();
    return s[3] = e[t].description, s[4] = e[t].date, s[6] = t, s
}

function Ll(l, e, t) {
    const s = l.slice();
    return s[7] = e[t], s
}

function ra(l) {
    let e;
    return {
        c() {
            e = J("( Latest Update )")
        },
        l(t) {
            e = C(t, "( Latest Update )")
        },
        m(t, s) {
            z(t, e, s)
        },
        d(t) {
            t && c(e)
        }
    }
}

function Jl(l) {
    let e, t = l[7] + "";
    return {
        c() {
            e = w("p"), this.h()
        },
        l(s) {
            e = k(s, "P", {
                class: !0
            });
            var n = E(e);
            n.forEach(c), this.h()
        },
        h() {
            m(e, "class", "svelte-zfidzt")
        },
        m(s, n) {
            z(s, e, n), e.innerHTML = t
        },
        p: Ne,
        d(s) {
            s && c(e)
        }
    }
}

function Cl(l, e) {
    let t, s, n = e[4] + "",
        r, i, a, o, u = e[6] === 0 && ra(),
        f = e[3],
        d = [];
    for (let _ = 0; _ < f.length; _ += 1) d[_] = Jl(Ll(e, f, _));
    return {
        key: l,
        first: null,
        c() {
            t = w("h2"), s = w("i"), r = J(n), i = V(), u && u.c(), a = V();
            for (let _ = 0; _ < d.length; _ += 1) d[_].c();
            o = Be(), this.h()
        },
        l(_) {
            t = k(_, "H2", {
                class: !0
            });
            var v = E(t);
            s = k(v, "I", {
                class: !0
            });
            var p = E(s);
            r = C(p, n), p.forEach(c), i = M(v), u && u.l(v), v.forEach(c), a = M(_);
            for (let g = 0; g < d.length; g += 1) d[g].l(_);
            o = Be(), this.h()
        },
        h() {
            m(s, "class", "tgl svelte-zfidzt"), m(t, "class", "svelte-zfidzt"), this.first = t
        },
        m(_, v) {
            z(_, t, v), h(t, s), h(s, r), h(t, i), u && u.m(t, null), z(_, a, v);
            for (let p = 0; p < d.length; p += 1) d[p].m(_, v);
            z(_, o, v)
        },
        p(_, v) {
            if (e = _, v & 0) {
                f = e[3];
                let p;
                for (p = 0; p < f.length; p += 1) {
                    const g = Ll(e, f, p);
                    d[p] ? d[p].p(g, v) : (d[p] = Jl(g), d[p].c(), d[p].m(o.parentNode, o))
                }
                for (; p < d.length; p += 1) d[p].d(1);
                d.length = f.length
            }
        },
        d(_) {
            _ && c(t), u && u.d(), _ && c(a), qe(d, _), _ && c(o)
        }
    }
}

function ia(l) {
    let e, t, s, n, r, i, a, o, u = [],
        f = new Map,
        d, _, v, p = [...Js.data].reverse();
    const g = b => b[6];
    for (let b = 0; b < p.length; b += 1) {
        let A = Zl(l, p, b),
            N = g(A);
        f.set(N, u[b] = Cl(N, A))
    }
    return {
        c() {
            e = w("div"), t = w("div"), s = J("You can Check what are changes we made on "), n = w("a"), r = J(`Github Repository\r
		`), i = J(". You can submit an issue if you find something wrong !"), a = V(), o = w("div");
            for (let b = 0; b < u.length; b += 1) u[b].c();
            this.h()
        },
        l(b) {
            e = k(b, "DIV", {
                class: !0
            });
            var A = E(e);
            t = k(A, "DIV", {
                class: !0
            });
            var N = E(t);
            s = C(N, "You can Check what are changes we made on "), n = k(N, "A", {
                href: !0,
                target: !0,
                class: !0
            });
            var B = E(n);
            r = C(B, `Github Repository\r
		`), B.forEach(c), i = C(N, ". You can submit an issue if you find something wrong !"), N.forEach(c), a = M(A), o = k(A, "DIV", {
                class: !0
            });
            var D = E(o);
            for (let I = 0; I < u.length; I += 1) u[I].l(D);
            D.forEach(c), A.forEach(c), this.h()
        },
        h() {
            m(n, "href", "https://github.com/AguzzTN54/Genshin-Impact-Wish-Simulator"), m(n, "target", "_blank"), m(n, "class", "svelte-zfidzt"), m(t, "class", "text svelte-zfidzt"), m(o, "class", "update-item svelte-zfidzt"), m(e, "class", "updates content-container svelte-zfidzt")
        },
        m(b, A) {
            z(b, e, A), h(e, t), h(t, s), h(t, n), h(n, r), h(t, i), h(e, a), h(e, o);
            for (let N = 0; N < u.length; N += 1) u[N].m(o, null);
            l[2](o), _ || (v = be(n, "click", Xe(l[1])), _ = !0)
        },
        p(b, [A]) {
            A & 0 && (p = [...Js.data].reverse(), u = Is(u, A, g, 1, b, p, f, o, Ds, Cl, null, Zl))
        },
        i(b) {
            d || Re(() => {
                d = Me(e, $e, {
                    duration: 200
                }), d.start()
            })
        },
        o: Ne,
        d(b) {
            b && c(e);
            for (let A = 0; A < u.length; A += 1) u[A].d();
            l[2](null), _ = !1, v()
        }
    }
}

function aa(l, e, t) {
    let s;
    it(() => {
        It(s, {
            sizeAutoCapable: !1,
            className: "os-theme-light"
        })
    });

    function n(i) {
        Gt.call(this, l, i)
    }

    function r(i) {
        Ke[i ? "unshift" : "push"](() => {
            s = i, t(0, s)
        })
    }
    return [s, n, r]
}
class oa extends ze {
    constructor(e) {
        super(), Ge(this, e, aa, ia, Oe, {})
    }
}

function $l(l) {
    let e, t, s = l[2]("menu.removeAds") + "",
        n, r, i;
    return {
        c() {
            e = w("div"), t = w("button"), n = J(s), this.h()
        },
        l(a) {
            e = k(a, "DIV", {
                class: !0
            });
            var o = E(e);
            t = k(o, "BUTTON", {
                class: !0
            });
            var u = E(t);
            n = C(u, s), u.forEach(c), o.forEach(c), this.h()
        },
        h() {
            m(t, "class", "svelte-1a9v4yq"), m(e, "class", "menu-item svelte-1a9v4yq"), ye(e, "active", l[0] === "removeAds")
        },
        m(a, o) {
            z(a, e, o), h(e, t), h(t, n), r || (i = be(t, "click", l[8]), r = !0)
        },
        p(a, o) {
            o & 4 && s !== (s = a[2]("menu.removeAds") + "") && K(n, s), o & 1 && ye(e, "active", a[0] === "removeAds")
        },
        d(a) {
            a && c(e), r = !1, i()
        }
    }
}

function ua(l) {
    let e, t, s, n, r = l[2]("menu.options") + "",
        i, a, o, u, f = l[2]("menu.updates") + "",
        d, _, v, p, g = !(l[3] && l[4]) && $l(l);
    return {
        c() {
            e = w("div"), t = w("div"), s = w("div"), n = w("button"), i = J(r), a = V(), o = w("div"), u = w("button"), d = J(f), _ = V(), g && g.c(), this.h()
        },
        l(b) {
            e = k(b, "DIV", {
                class: !0
            });
            var A = E(e);
            t = k(A, "DIV", {
                class: !0,
                style: !0
            });
            var N = E(t);
            s = k(N, "DIV", {
                class: !0
            });
            var B = E(s);
            n = k(B, "BUTTON", {
                class: !0
            });
            var D = E(n);
            i = C(D, r), D.forEach(c), B.forEach(c), a = M(N), o = k(N, "DIV", {
                class: !0
            });
            var I = E(o);
            u = k(I, "BUTTON", {
                class: !0
            });
            var y = E(u);
            d = C(y, f), y.forEach(c), I.forEach(c), _ = M(N), g && g.l(N), N.forEach(c), A.forEach(c), this.h()
        },
        h() {
            m(n, "class", "svelte-1a9v4yq"), m(s, "class", "menu-item svelte-1a9v4yq"), ye(s, "active", l[0] === "options"), m(u, "class", "svelte-1a9v4yq"), m(o, "class", "menu-item svelte-1a9v4yq"), ye(o, "active", l[0] === "updates"), m(t, "class", "menu-list svelte-1a9v4yq"), te(t, "--bg-active", "url('" + l[1]["menu-active.png"] + "')"), m(e, "class", "sidebar svelte-1a9v4yq")
        },
        m(b, A) {
            z(b, e, A), h(e, t), h(t, s), h(s, n), h(n, i), h(t, a), h(t, o), h(o, u), h(u, d), h(t, _), g && g.m(t, null), v || (p = [be(n, "click", l[6]), be(u, "click", l[7])], v = !0)
        },
        p(b, [A]) {
            A & 4 && r !== (r = b[2]("menu.options") + "") && K(i, r), A & 1 && ye(s, "active", b[0] === "options"), A & 4 && f !== (f = b[2]("menu.updates") + "") && K(d, f), A & 1 && ye(o, "active", b[0] === "updates"), b[3] && b[4] ? g && (g.d(1), g = null) : g ? g.p(b, A) : (g = $l(b), g.c(), g.m(t, null)), A & 2 && te(t, "--bg-active", "url('" + b[1]["menu-active.png"] + "')")
        },
        i: Ne,
        o: Ne,
        d(b) {
            b && c(e), g && g.d(), v = !1, jt(p)
        }
    }
}

function fa(l, e, t) {
    let s, n, r, i;
    q(l, st, _ => t(1, s = _)), q(l, Le, _ => t(2, n = _)), q(l, Ns, _ => t(3, r = _)), q(l, Ht, _ => t(4, i = _));
    let {
        activeContent: a
    } = e;
    const o = mt("selectMenu"),
        u = () => o("options"),
        f = () => o("updates"),
        d = () => o("removeAds");
    return l.$$set = _ => {
        "activeContent" in _ && t(0, a = _.activeContent)
    }, [a, s, n, r, i, o, u, f, d]
}
class ca extends ze {
    constructor(e) {
        super(), Ge(this, e, fa, ua, Oe, {
            activeContent: 0
        })
    }
}

function da(l) {
    let e, t, s = l[11]("menu.removeKeyConfirm") + "",
        n;
    return {
        c() {
            e = w("div"), t = w("span"), n = J(s), this.h()
        },
        l(r) {
            e = k(r, "DIV", {
                class: !0
            });
            var i = E(e);
            t = k(i, "SPAN", {});
            var a = E(t);
            n = C(a, s), a.forEach(c), i.forEach(c), this.h()
        },
        h() {
            m(e, "class", "confirmation svelte-1l8shko")
        },
        m(r, i) {
            z(r, e, i), h(e, t), h(t, n)
        },
        p(r, i) {
            i & 2048 && s !== (s = r[11]("menu.removeKeyConfirm") + "") && K(n, s)
        },
        d(r) {
            r && c(e)
        }
    }
}

function Fl(l) {
    let e, t;
    return e = new cs({
        props: {
            $$slots: {
                default: [ha]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("close", l[19]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 8390672 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function ha(l) {
    let e = l[11](l[4]) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 2064 && e !== (e = s[11](s[4]) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function ma(l) {
    let e, t, s = l[11]("menu.inputKeyTxt") + "",
        n, r, i, a, o, u, f, d, _, v, p, g, b, A, N, B, D = l[6] && Hl(l);

    function I(G, T) {
        return G[9] ? ga : G[8] ? va : pa
    }
    let y = I(l),
        S = y(l);
    const P = [ya, Ea],
        Y = [];

    function L(G, T) {
        return G[6] ? 0 : 1
    }
    return p = L(l), g = Y[p] = P[p](l), {
        c() {
            e = w("form"), t = w("label"), n = J(s), r = V(), i = w("div"), a = w("div"), o = w("input"), f = V(), D && D.c(), d = V(), _ = w("div"), S.c(), v = V(), g.c(), this.h()
        },
        l(G) {
            e = k(G, "FORM", {
                class: !0
            });
            var T = E(e);
            t = k(T, "LABEL", {
                for: !0,
                class: !0
            });
            var O = E(t);
            n = C(O, s), O.forEach(c), r = M(T), i = k(T, "DIV", {
                class: !0
            });
            var R = E(i);
            a = k(R, "DIV", {
                class: !0,
                style: !0
            });
            var W = E(a);
            o = k(W, "INPUT", {
                type: !0,
                id: !0,
                placeholder: !0,
                class: !0
            }), f = M(W), D && D.l(W), W.forEach(c), d = M(R), _ = k(R, "DIV", {
                class: !0
            });
            var F = E(_);
            S.l(F), F.forEach(c), v = M(R), g.l(R), R.forEach(c), T.forEach(c), this.h()
        },
        h() {
            m(t, "for", "key"), m(t, "class", "svelte-1l8shko"), m(o, "type", "text"), m(o, "id", "key"), m(o, "placeholder", u = l[11]("menu.inputKeyPlaceholder")), o.disabled = l[6], m(o, "class", "svelte-1l8shko"), ye(o, "error", l[2] || !l[8] && l[6]), m(a, "class", "field"), te(a, "position", "relative"), m(_, "class", "note svelte-1l8shko"), m(i, "class", "input svelte-1l8shko"), m(e, "class", "row svelte-1l8shko")
        },
        m(G, T) {
            z(G, e, T), h(e, t), h(t, n), h(e, r), h(e, i), h(i, a), h(a, o), Ys(o, l[1]), h(a, f), D && D.m(a, null), h(i, d), h(i, _), S.m(_, null), h(i, v), Y[p].m(i, null), A = !0, N || (B = [be(o, "input", l[20]), be(e, "submit", Mt(function() {
                er(l[3] ? null : l[13]) && (l[3] ? null : l[13]).apply(this, arguments)
            }))], N = !0)
        },
        p(G, T) {
            l = G, (!A || T & 2048) && s !== (s = l[11]("menu.inputKeyTxt") + "") && K(n, s), (!A || T & 2048 && u !== (u = l[11]("menu.inputKeyPlaceholder"))) && m(o, "placeholder", u), (!A || T & 64) && (o.disabled = l[6]), T & 2 && o.value !== l[1] && Ys(o, l[1]), T & 324 && ye(o, "error", l[2] || !l[8] && l[6]), l[6] ? D ? D.p(l, T) : (D = Hl(l), D.c(), D.m(a, null)) : D && (D.d(1), D = null), y === (y = I(l)) && S ? S.p(l, T) : (S.d(1), S = y(l), S && (S.c(), S.m(_, null)));
            let O = p;
            p = L(l), p === O ? Y[p].p(l, T) : (ke(), U(Y[O], 1, 1, () => {
                Y[O] = null
            }), Ee(), g = Y[p], g ? g.p(l, T) : (g = Y[p] = P[p](l), g.c()), j(g, 1), g.m(i, null))
        },
        i(G) {
            A || (j(g), b || Re(() => {
                b = Me(e, $e, {}), b.start()
            }), A = !0)
        },
        o(G) {
            U(g), A = !1
        },
        d(G) {
            G && c(e), D && D.d(), S.d(), Y[p].d(), N = !1, jt(B)
        }
    }
}

function _a(l) {
    let e, t, s, n, r = l[11]("menu.checkingKey") + "",
        i, a;
    return t = new tt({
        props: {
            type: "loader"
        }
    }), {
        c() {
            e = w("div"), ne(t.$$.fragment), s = V(), n = w("span"), i = J(r), this.h()
        },
        l(o) {
            e = k(o, "DIV", {
                class: !0
            });
            var u = E(e);
            de(t.$$.fragment, u), s = M(u), n = k(u, "SPAN", {
                class: !0
            });
            var f = E(n);
            i = C(f, r), f.forEach(c), u.forEach(c), this.h()
        },
        h() {
            m(n, "class", "svelte-1l8shko"), m(e, "class", "row loader svelte-1l8shko")
        },
        m(o, u) {
            z(o, e, u), re(t, e, null), h(e, s), h(e, n), h(n, i), a = !0
        },
        p(o, u) {
            (!a || u & 2048) && r !== (r = o[11]("menu.checkingKey") + "") && K(i, r)
        },
        i(o) {
            a || (j(t.$$.fragment, o), a = !0)
        },
        o(o) {
            U(t.$$.fragment, o), a = !1
        },
        d(o) {
            o && c(e), ie(t)
        }
    }
}

function Hl(l) {
    let e, t, s, n, r;
    return {
        c() {
            e = w("button"), t = w("i"), this.h()
        },
        l(i) {
            e = k(i, "BUTTON", {
                class: !0
            });
            var a = E(e);
            t = k(a, "I", {
                class: !0
            }), E(t).forEach(c), a.forEach(c), this.h()
        },
        h() {
            m(t, "class", s = "gi-eye" + (l[1].includes("\u273C") ? "-slash" : "")), m(e, "class", "toggle-visible svelte-1l8shko")
        },
        m(i, a) {
            z(i, e, a), h(e, t), n || (r = be(e, "click", Mt(l[14])), n = !0)
        },
        p(i, a) {
            a & 2 && s !== (s = "gi-eye" + (i[1].includes("\u273C") ? "-slash" : "")) && m(t, "class", s)
        },
        d(i) {
            i && c(e), n = !1, r()
        }
    }
}

function pa(l) {
    let e, t, s = l[11]("menu.getNewKey") + "",
        n, r, i;

    function a(f, d) {
        return f[7] && f[7] !== "none" ? ka : !f[8] && f[6] ? wa : ba
    }
    let o = a(l),
        u = o(l);
    return {
        c() {
            u.c(), e = V(), t = w("a"), n = J(s), this.h()
        },
        l(f) {
            u.l(f), e = M(f), t = k(f, "A", {
                href: !0,
                target: !0
            });
            var d = E(t);
            n = C(d, s), d.forEach(c), this.h()
        },
        h() {
            m(t, "href", "https://ko-fi.com/post/AdFree-Wish-Simulator-Enjoy-Simulator-Without-Ads-G2G2DQ57O"), m(t, "target", "_blank")
        },
        m(f, d) {
            u.m(f, d), z(f, e, d), z(f, t, d), h(t, n), r || (i = be(t, "click", Xe(l[18])), r = !0)
        },
        p(f, d) {
            o === (o = a(f)) && u ? u.p(f, d) : (u.d(1), u = o(f), u && (u.c(), u.m(e.parentNode, e))), d & 2048 && s !== (s = f[11]("menu.getNewKey") + "") && K(n, s)
        },
        d(f) {
            u.d(f), f && c(e), f && c(t), r = !1, i()
        }
    }
}

function va(l) {
    let e, t = l[11]("menu.adFreeUser") + "",
        s;
    return {
        c() {
            e = w("span"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "SPAN", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "keyValid svelte-1l8shko")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r & 2048 && t !== (t = n[11]("menu.adFreeUser") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function ga(l) {
    let e, t = l[11]("menu.verifyFail") + "",
        s;
    return {
        c() {
            e = w("span"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "SPAN", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "invalid svelte-1l8shko")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r & 2048 && t !== (t = n[11]("menu.verifyFail") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function ba(l) {
    let e, t = l[11]("menu.noKey") + "",
        s;
    return {
        c() {
            e = w("span"), s = J(t)
        },
        l(n) {
            e = k(n, "SPAN", {});
            var r = E(e);
            s = C(r, t), r.forEach(c)
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r & 2048 && t !== (t = n[11]("menu.noKey") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function wa(l) {
    let e, t = l[11]("menu.invalidKey") + "",
        s;
    return {
        c() {
            e = w("span"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "SPAN", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "invalid svelte-1l8shko")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r & 2048 && t !== (t = n[11]("menu.invalidKey") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function ka(l) {
    let e, t = l[11]("menu.keyExpired1") + "",
        s;
    return {
        c() {
            e = w("span"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "SPAN", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "invalid svelte-1l8shko")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r & 2048 && t !== (t = n[11]("menu.keyExpired1") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Ea(l) {
    let e, t;
    return e = new Yt({
        props: {
            disabled: !l[1] || l[3],
            $$slots: {
                default: [Aa]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("click", l[13]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 10 && (r.disabled = !s[1] || s[3]), n & 8390664 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function ya(l) {
    let e, t;
    return e = new Yt({
        props: {
            type: "cancel",
            $$slots: {
                default: [Ia]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("click", l[17]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 8390656 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Aa(l) {
    let e = (l[3] ? l[11]("waiting") : l[11]("menu.removeAds")) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 2056 && e !== (e = (s[3] ? s[11]("waiting") : s[11]("menu.removeAds")) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function Ia(l) {
    let e = l[11]("menu.removeKey") + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 2048 && e !== (e = s[11]("menu.removeKey") + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function Da(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p = l[11]("menu.authorNotes") + "",
        g, b, A;
    e = new Zt({
        props: {
            title: l[11]("menu.removeKey"),
            show: l[10],
            button: "all",
            $$slots: {
                default: [da]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("confirm", l[15]), e.$on("cancel", l[16]);
    let N = l[0] && Fl(l);
    const B = [_a, ma],
        D = [];

    function I(y, S) {
        return y[5] ? 0 : 1
    }
    return r = I(l), i = D[r] = B[r](l), {
        c() {
            ne(e.$$.fragment), t = V(), N && N.c(), s = V(), n = w("div"), i.c(), a = V(), o = w("div"), u = w("picture"), f = w("img"), _ = V(), v = w("p"), g = J(p), this.h()
        },
        l(y) {
            de(e.$$.fragment, y), t = M(y), N && N.l(y), s = M(y), n = k(y, "DIV", {
                class: !0,
                style: !0
            });
            var S = E(n);
            i.l(S), a = M(S), o = k(S, "DIV", {
                class: !0
            });
            var P = E(o);
            u = k(P, "PICTURE", {
                class: !0
            });
            var Y = E(u);
            f = k(Y, "IMG", {
                src: !0,
                alt: !0,
                crossorigin: !0,
                class: !0
            }), Y.forEach(c), _ = M(P), v = k(P, "P", {
                class: !0
            });
            var L = E(v);
            g = C(L, p), L.forEach(c), P.forEach(c), S.forEach(c), this.h()
        },
        h() {
            Te(f.src, d = l[12]["imbroke.webp"]) || m(f, "src", d), m(f, "alt", "I'm Broke"), m(f, "crossorigin", "anonymous"), m(f, "class", "svelte-1l8shko"), m(u, "class", "svelte-1l8shko"), m(v, "class", "svelte-1l8shko"), m(o, "class", "admin-note svelte-1l8shko"), m(n, "class", "content-container svelte-1l8shko"), te(n, "--bg-icon", "url('" + l[12]["modal-bg-icon.png"] + "')")
        },
        m(y, S) {
            re(e, y, S), z(y, t, S), N && N.m(y, S), z(y, s, S), z(y, n, S), D[r].m(n, null), h(n, a), h(n, o), h(o, u), h(u, f), h(o, _), h(o, v), h(v, g), A = !0
        },
        p(y, [S]) {
            const P = {};
            S & 2048 && (P.title = y[11]("menu.removeKey")), S & 1024 && (P.show = y[10]), S & 8390656 && (P.$$scope = {
                dirty: S,
                ctx: y
            }), e.$set(P), y[0] ? N ? (N.p(y, S), S & 1 && j(N, 1)) : (N = Fl(y), N.c(), j(N, 1), N.m(s.parentNode, s)) : N && (ke(), U(N, 1, 1, () => {
                N = null
            }), Ee());
            let Y = r;
            r = I(y), r === Y ? D[r].p(y, S) : (ke(), U(D[Y], 1, 1, () => {
                D[Y] = null
            }), Ee(), i = D[r], i ? i.p(y, S) : (i = D[r] = B[r](y), i.c()), j(i, 1), i.m(n, a)), (!A || S & 4096 && !Te(f.src, d = y[12]["imbroke.webp"])) && m(f, "src", d), (!A || S & 2048) && p !== (p = y[11]("menu.authorNotes") + "") && K(g, p), (!A || S & 4096) && te(n, "--bg-icon", "url('" + y[12]["modal-bg-icon.png"] + "')")
        },
        i(y) {
            A || (j(e.$$.fragment, y), j(N), j(i), b || Re(() => {
                b = Me(n, $e, {
                    duration: 200
                }), b.start()
            }), A = !0)
        },
        o(y) {
            U(e.$$.fragment, y), U(N), U(i), A = !1
        },
        d(y) {
            ie(e, y), y && c(t), N && N.d(y), y && c(s), y && c(n), D[r].d()
        }
    }
}

function Na(l, e, t) {
    let s, n;
    q(l, Le, L => t(11, s = L)), q(l, st, L => t(12, n = L));
    let r = !1,
        i = "",
        a = "",
        o = !1,
        u = !1,
        f = "";
    const d = async () => {
        Se(), t(3, u = !0);
        const {
            msg: L,
            validity: G
        } = await ts.verify(i);
        if (t(2, o = !G), G) return window.location.reload();
        t(4, f = L), t(3, u = !1), t(0, r = !0)
    };
    let _ = !0,
        v = !1,
        p = "",
        g = !1,
        b = !1;
    const A = async () => {
            const {
                validity: L,
                storedKey: G,
                status: T,
                expiryDate: O
            } = await ts.checkLocal();
            t(9, b = T === "offline"), a = G, t(6, v = !!G), t(8, g = L), t(7, p = O), v && t(1, i = "\u273C\u273C\u273C\u273C\u273C"), t(5, _ = !1)
        },
        N = () => {
            t(1, i = i.includes("\u273C") ? a : "\u273C\u273C\u273C\u273C\u273C")
        };
    let B = !1;
    const D = () => {
            ts.clear(), A(), t(10, B = !1), t(1, i = "")
        },
        I = () => t(10, B = !1),
        y = () => {
            t(10, B = !0), Se()
        };
    it(A);

    function S(L) {
        Gt.call(this, l, L)
    }
    const P = () => t(0, r = !1);

    function Y() {
        i = this.value, t(1, i)
    }
    return [r, i, o, u, f, _, v, p, g, b, B, s, n, d, N, D, I, y, S, P, Y]
}
class Ta extends ze {
    constructor(e) {
        super(), Ge(this, e, Na, Da, Oe, {})
    }
}

function Ra(l) {
    let e, t;
    return e = new Ta({}), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function ja(l) {
    let e, t;
    return e = new oa({}), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Ba(l) {
    let e, t;
    return e = new na({}), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function Xl(l) {
    let e, t, s, n, r = l[2]("menu.rotate") + "",
        i;
    return {
        c() {
            e = w("div"), t = w("i"), s = V(), n = w("span"), i = J(r), this.h()
        },
        l(a) {
            e = k(a, "DIV", {
                class: !0
            });
            var o = E(e);
            t = k(o, "I", {
                class: !0
            }), E(t).forEach(c), s = M(o), n = k(o, "SPAN", {});
            var u = E(n);
            i = C(u, r), u.forEach(c), o.forEach(c), this.h()
        },
        h() {
            m(t, "class", "gi-rotate-phone svelte-1llkzao"), m(e, "class", "rotate svelte-1llkzao")
        },
        m(a, o) {
            z(a, e, o), h(e, t), h(e, s), h(e, n), h(n, i)
        },
        p(a, o) {
            o & 4 && r !== (r = a[2]("menu.rotate") + "") && K(i, r)
        },
        d(a) {
            a && c(e)
        }
    }
}

function Sa(l) {
    let e, t, s, n = l[2]("menu.text") + "",
        r, i, a = l[2](`menu.${l[0]}`) + "",
        o, u, f, d, _, v, p, g, b, A, N, B, D, I, y, S;
    p = new ca({
        props: {
            activeContent: l[0]
        }
    });
    const P = [Ba, ja, Ra],
        Y = [];

    function L(T, O) {
        return T[0] === "options" ? 0 : T[0] === "updates" ? 1 : T[0] === "removeAds" ? 2 : -1
    }~(A = L(l)) && (N = Y[A] = P[A](l));
    let G = l[3] && !l[4] && Xl(l);
    return {
        c() {
            e = w("section"), t = w("div"), s = w("h1"), r = J(n), i = J(" / "), o = J(a), u = V(), f = w("button"), d = w("i"), _ = V(), v = w("div"), ne(p.$$.fragment), g = V(), b = w("div"), N && N.c(), B = V(), G && G.c(), this.h()
        },
        l(T) {
            e = k(T, "SECTION", {
                style: !0,
                class: !0
            });
            var O = E(e);
            t = k(O, "DIV", {
                class: !0
            });
            var R = E(t);
            s = k(R, "H1", {});
            var W = E(s);
            r = C(W, n), i = C(W, " / "), o = C(W, a), W.forEach(c), u = M(R), f = k(R, "BUTTON", {
                class: !0
            });
            var F = E(f);
            d = k(F, "I", {
                class: !0
            }), E(d).forEach(c), F.forEach(c), R.forEach(c), _ = M(O), v = k(O, "DIV", {
                class: !0
            });
            var oe = E(v);
            de(p.$$.fragment, oe), g = M(oe), b = k(oe, "DIV", {
                class: !0
            });
            var Z = E(b);
            N && N.l(Z), B = M(Z), G && G.l(Z), Z.forEach(c), oe.forEach(c), O.forEach(c), this.h()
        },
        h() {
            m(d, "class", "gi-close"), m(f, "class", "close svelte-1llkzao"), m(t, "class", "head svelte-1llkzao"), m(b, "class", "content svelte-1llkzao"), m(v, "class", "container svelte-1llkzao"), te(e, "height", l[1] + "px"), m(e, "class", "svelte-1llkzao")
        },
        m(T, O) {
            z(T, e, O), h(e, t), h(t, s), h(s, r), h(s, i), h(s, o), h(t, u), h(t, f), h(f, d), h(e, _), h(e, v), re(p, v, null), h(v, g), h(v, b), ~A && Y[A].m(b, null), h(b, B), G && G.m(b, null), I = !0, y || (S = be(f, "click", l[5]), y = !0)
        },
        p(T, [O]) {
            (!I || O & 4) && n !== (n = T[2]("menu.text") + "") && K(r, n), (!I || O & 5) && a !== (a = T[2](`menu.${T[0]}`) + "") && K(o, a);
            const R = {};
            O & 1 && (R.activeContent = T[0]), p.$set(R);
            let W = A;
            A = L(T), A !== W && (N && (ke(), U(Y[W], 1, 1, () => {
                Y[W] = null
            }), Ee()), ~A ? (N = Y[A], N || (N = Y[A] = P[A](T), N.c()), j(N, 1), N.m(b, B)) : N = null), T[3] && !T[4] ? G ? G.p(T, O) : (G = Xl(T), G.c(), G.m(b, null)) : G && (G.d(1), G = null), (!I || O & 2) && te(e, "height", T[1] + "px")
        },
        i(T) {
            I || (j(p.$$.fragment, T), j(N), Re(() => {
                D || (D = et(e, $e, {
                    duration: 200
                }, !0)), D.run(1)
            }), I = !0)
        },
        o(T) {
            U(p.$$.fragment, T), U(N), D || (D = et(e, $e, {
                duration: 200
            }, !1)), D.run(0), I = !1
        },
        d(T) {
            T && c(e), ie(p), ~A && Y[A].d(), G && G.d(), T && D && D.end(), y = !1, S()
        }
    }
}

function Va(l, e, t) {
    let s, n, r, i;
    q(l, Bt, d => t(1, s = d)), q(l, Le, d => t(2, n = d)), q(l, Ht, d => t(3, r = d)), q(l, Xt, d => t(4, i = d));
    let a = "options";
    wt("selectMenu", d => {
        a !== d && (t(0, a = d), Se("shopnav"))
    });
    const u = at();
    return [a, s, n, r, i, () => {
        u("close"), Se("close")
    }]
}
class Ma extends ze {
    constructor(e) {
        super(), Ge(this, e, Va, Sa, Oe, {})
    }
}

function za(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _;
    return {
        c() {
            e = w("div"), t = Je("svg"), s = Je("g"), n = Je("metadata"), r = Je("circle"), i = Je("path"), a = Je("path"), o = Je("path"), u = Je("path"), f = Je("path"), d = Je("path"), _ = Je("path"), this.h()
        },
        l(v) {
            e = k(v, "DIV", {
                class: !0
            });
            var p = E(e);
            t = Ce(p, "svg", {
                xmlns: !0,
                "xml:space": !0,
                width: !0,
                height: !0,
                version: !0,
                style: !0,
                viewBox: !0,
                "xmlns:xlink": !0,
                class: !0
            });
            var g = E(t);
            s = Ce(g, "g", {
                id: !0
            });
            var b = E(s);
            n = Ce(b, "metadata", {
                id: !0
            }), E(n).forEach(c), r = Ce(b, "circle", {
                class: !0,
                cx: !0,
                cy: !0,
                r: !0
            }), E(r).forEach(c), i = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(i).forEach(c), a = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(a).forEach(c), o = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(o).forEach(c), u = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(u).forEach(c), f = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(f).forEach(c), d = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(d).forEach(c), _ = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(_).forEach(c), b.forEach(c), g.forEach(c), p.forEach(c), this.h()
        },
        h() {
            m(n, "id", "CorelCorpID_0Corel-Layer"), m(r, "class", "fil0 svelte-nlfdwu"), m(r, "cx", "254424"), m(r, "cy", "253230"), m(r, "r", "235000"), m(i, "class", "fil1 svelte-nlfdwu"), m(i, "d", "M255693 0c13547,26247 28024,32190 42571,35155 86821,17695 155401,85552 174155,171983 3340,15397 8488,34162 36428,46862 -23707,12700 -32662,29168 -35212,42704 -17117,90856 -89026,162369 -180088,178895 -13076,2373 -26000,6154 -39547,30861 -11853,-20473 -28814,-28563 -42256,-31076 -92318,-17262 -164722,-91085 -179876,-184128 -1926,-11825 -6468,-24556 -31868,-35563 27093,-10160 29923,-25044 31812,-36761 14555,-90240 82951,-162462 171176,-182650 16150,-3695 39159,-5802 52705,-36282z"), m(a, "class", "fil2 svelte-nlfdwu"), m(a, "d", "M255542 30055c11940,23132 24698,28369 37519,30983 76516,15594 136957,75398 153485,151571 2944,13569 7481,30107 32104,41300 -20893,11192 -28785,25706 -31032,37635 -15086,80073 -78460,143098 -158714,157663 -11524,2091 -22915,5423 -34854,27198 -10446,-18043 -25394,-25173 -37240,-27388 -81362,-15213 -145172,-80274 -158528,-162274 -1697,-10422 -5700,-21642 -28085,-31342 23877,-8954 26371,-22072 28036,-32398 12828,-79530 73106,-143180 150860,-160972 14233,-3257 34511,-5114 46449,-31976z"), m(o, "class", "fil1 svelte-nlfdwu"), m(o, "d", "M330264 271900c123,-533 12562,-25081 10158,-32020 -1162,-1427 -2401,-2861 -3702,-5015 -10709,-2024 -12079,-25210 -13164,-33686 -14482,-47196 -72342,-40941 -75929,-52261 -358,-5588 -312,-4871 -670,-10459 -7941,-1020 -13237,1312 -15009,8106 -10178,3252 -5167,18577 -5501,26637 -1026,-642 -5493,-4403 -5588,-4447 -15337,-7251 -37943,31295 -36627,45876 -2865,18246 -4687,19434 -13733,25783 -2850,2000 -600,259 -2382,1933l565 8165c13533,41301 39679,48402 77665,53316 -1307,1383 991,2598 -2457,4085 -17607,7585 -16560,12591 -21001,31019 -1670,3686 -3464,12046 -2869,16028 -138,14893 63684,19907 79345,971 1836,-15767 -2789,-25064 -10248,-39071 -6148,-5850 -3857,-7275 -14719,-8437 -5230,-2021 -2896,1743 -3630,-4393 21183,67 46793,-11256 59496,-32130zm-57388 55269c4914,9251 4765,12192 14138,13865 -8154,-4650 -10703,-14461 -18651,-21822 -5039,-2075 -10340,-4118 -13672,-3026 -6579,2156 -10978,6676 -17718,15712 8536,-3503 10646,-9555 18301,-13067 7391,5619 -1300,14794 -3372,23823 -1079,4703 476,9454 2036,12648 -2369,-10300 409,-16090 6895,-17943 3642,6892 3606,8549 8908,12534 -3457,-7528 -12293,-20101 -7056,-29210 3890,-1154 4734,2232 10191,6486zm-30308 -71245c-9691,1465 -6106,3188 -12543,6960 -10988,6437 -14245,-5177 -25718,-6891 2209,18389 33672,21098 38261,-69zm30053 0c9691,1465 6106,3188 12543,6960 10987,6437 14245,-5177 25718,-6891 -2209,18389 -33672,21098 -38261,-69zm-15561 31599c6016,-1307 5913,-1191 7499,-6781 -3798,-269 -10937,-717 -14214,-158 1060,4275 2615,5911 6715,6939z"), m(u, "class", "fil3 svelte-nlfdwu"), m(u, "d", "M254424 68164c102209,0 185066,82857 185066,185066 0,102209 -82857,185066 -185066,185066 -102209,0 -185066,-82857 -185066,-185066 0,-102209 82857,-185066 185066,-185066zm0 28190c86640,0 156876,70236 156876,156876 0,86640 -70236,156876 -156876,156876 -86640,0 -156876,-70236 -156876,-156876 0,-86640 70236,-156876 156876,-156876z"), m(f, "class", "fil1 svelte-nlfdwu"), m(f, "d", "M329531 141779c3037,10634 9793,17203 20000,20000 -10634,3037 -17203,9793 -20000,20000 -3037,-10634 -9793,-17203 -20000,-20000 10634,-3037 17203,-9793 20000,-20000z"), m(d, "class", "fil1 svelte-nlfdwu"), m(d, "d", "M165200 297389c2278,7976 7345,12902 15000,15000 -7976,2278 -12902,7345 -15000,15000 -2278,-7976 -7345,-12902 -15000,-15000 7976,-2278 12902,-7345 15000,-15000z"), m(_, "class", "fil1 svelte-nlfdwu"), m(_, "d", "M362750 205788c1519,5317 4897,8602 10000,10000 -5317,1519 -8602,4897 -10000,10000 -1519,-5317 -4897,-8602 -10000,-10000 5317,-1519 8602,-4897 10000,-10000z"), m(s, "id", "Layer_x0020_1"), m(t, "xmlns", "http://www.w3.org/2000/svg"), m(t, "xml:space", "preserve"), m(t, "width", "100%"), m(t, "height", "100%"), m(t, "version", "1.1"), te(t, "shape-rendering", "geometricPrecision"), te(t, "text-rendering", "geometricPrecision"), te(t, "image-rendering", "optimizeQuality"), te(t, "fill-rule", "evenodd"), te(t, "clip-rule", "evenodd"), m(t, "viewBox", "0 0 508847 506460"), m(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), m(t, "class", "svelte-nlfdwu"), m(e, "class", "fatepoint-button svelte-nlfdwu"), ye(e, "active", l[0])
        },
        m(v, p) {
            z(v, e, p), h(e, t), h(t, s), h(s, n), h(s, r), h(s, i), h(s, a), h(s, o), h(s, u), h(s, f), h(s, d), h(s, _)
        },
        p(v, [p]) {
            p & 1 && ye(e, "active", v[0])
        },
        i: Ne,
        o: Ne,
        d(v) {
            v && c(e)
        }
    }
}

function Ga(l, e, t) {
    let {
        active: s = !1
    } = e;
    return l.$$set = n => {
        "active" in n && t(0, s = n.active)
    }, [s]
}
class Oa extends ze {
    constructor(e) {
        super(), Ge(this, e, Ga, za, Oe, {
            active: 0
        })
    }
}

function ql(l) {
    let e, t, s, n, r, i, a, o, u, f;
    t = new Bs({
        props: {
            name: "fatepoint" + l[3] + "-" + l[2]
        }
    }), n = new Oa({
        props: {
            active: l[5] === 2
        }
    });

    function d(p, g) {
        return p[6].name ? Wa : Pa
    }
    let _ = d(l),
        v = _(l);
    return {
        c() {
            e = w("button"), ne(t.$$.fragment), s = V(), ne(n.$$.fragment), r = V(), i = w("div"), v.c(), this.h()
        },
        l(p) {
            e = k(p, "BUTTON", {
                class: !0,
                style: !0
            });
            var g = E(e);
            de(t.$$.fragment, g), s = M(g), de(n.$$.fragment, g), r = M(g), i = k(g, "DIV", {
                class: !0
            });
            var b = E(i);
            v.l(b), b.forEach(c), g.forEach(c), this.h()
        },
        h() {
            m(i, "class", "point-number svelte-1vysu9z"), m(e, "class", "container svelte-1vysu9z"), te(e, "--height", l[0] + "px"), Re(() => l[11].call(e))
        },
        m(p, g) {
            z(p, e, g), re(t, e, null), h(e, s), re(n, e, null), h(e, r), h(e, i), v.m(i, null), a = Ft(e, l[11].bind(e)), o = !0, u || (f = be(e, "click", l[8]), u = !0)
        },
        p(p, g) {
            const b = {};
            g & 12 && (b.name = "fatepoint" + p[3] + "-" + p[2]), t.$set(b);
            const A = {};
            g & 32 && (A.active = p[5] === 2), n.$set(A), _ === (_ = d(p)) && v ? v.p(p, g) : (v.d(1), v = _(p), v && (v.c(), v.m(i, null))), (!o || g & 1) && te(e, "--height", p[0] + "px")
        },
        i(p) {
            o || (j(t.$$.fragment, p), j(n.$$.fragment, p), o = !0)
        },
        o(p) {
            U(t.$$.fragment, p), U(n.$$.fragment, p), o = !1
        },
        d(p) {
            p && c(e), ie(t), ie(n), v.d(), a(), u = !1, f()
        }
    }
}

function Pa(l) {
    let e, t = l[7]("wish.epitomizedPath.text") + "",
        s;
    return {
        c() {
            e = w("span"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "SPAN", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "small svelte-1vysu9z")
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r & 128 && t !== (t = n[7]("wish.epitomizedPath.text") + "") && K(s, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Wa(l) {
    let e, t, s;
    return {
        c() {
            e = w("span"), t = J(l[5]), s = J("/2"), this.h()
        },
        l(n) {
            e = k(n, "SPAN", {
                class: !0
            });
            var r = E(e);
            t = C(r, l[5]), r.forEach(c), s = C(n, "/2"), this.h()
        },
        h() {
            m(e, "class", "svelte-1vysu9z")
        },
        m(n, r) {
            z(n, e, r), h(e, t), z(n, s, r)
        },
        p(n, r) {
            r & 32 && K(t, n[5])
        },
        d(n) {
            n && c(e), n && c(s)
        }
    }
}

function Ua(l) {
    let e, t, s = l[4] && l[1] && ql(l);
    return {
        c() {
            s && s.c(), e = Be()
        },
        l(n) {
            s && s.l(n), e = Be()
        },
        m(n, r) {
            s && s.m(n, r), z(n, e, r), t = !0
        },
        p(n, [r]) {
            n[4] && n[1] ? s ? (s.p(n, r), r & 18 && j(s, 1)) : (s = ql(n), s.c(), j(s, 1), s.m(e.parentNode, e)) : s && (ke(), U(s, 1, 1, () => {
                s = null
            }), Ee())
        },
        i(n) {
            t || (j(s), t = !0)
        },
        o(n) {
            U(s), t = !1
        },
        d(n) {
            s && s.d(n), n && c(e)
        }
    }
}

function Ya(l, e, t) {
    let s, n, r, i, a, o, u, f, d;
    q(l, ot, A => t(9, n = A)), q(l, St, A => t(2, r = A)), q(l, At, A => t(3, i = A)), q(l, ht, A => t(10, a = A)), q(l, js, A => t(4, o = A)), q(l, Et, A => t(5, u = A)), q(l, ct, A => t(6, f = A)), q(l, Le, A => t(7, d = A));
    const _ = (A, N) => {
            if (!N) return ct.set({
                name: null,
                index: null
            });
            const B = A.find(({
                type: I
            }) => I === "weapons");
            if (!B) return ct.set({
                name: null,
                index: null
            });
            const D = B.weapons.featured[N - 1].name;
            ct.set({
                name: D,
                index: N - 1
            })
        },
        v = A => {
            const N = Ct.init(i, r),
                B = N.getPoint();
            let D = N.getSelected();
            _(A, D), Et.set(B)
        },
        p = () => {
            Se("exchange"), vs.set(!0), Yn.openNotice(`fatepoint${i}-${r}`)
        };
    let g;

    function b() {
        g = this.clientHeight, t(0, g)
    }
    return l.$$.update = () => {
        l.$$.dirty & 1536 && t(1, s = n[a].type === "weapons"), l.$$.dirty & 512 && v(n)
    }, [g, s, r, i, o, u, f, d, p, n, a, b]
}
class Qn extends ze {
    constructor(e) {
        super(), Ge(this, e, Ya, Ua, Oe, {})
    }
}

function Za(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v;
    return {
        c() {
            e = Je("svg"), t = Je("defs"), s = Je("g"), n = Je("metadata"), r = Je("path"), a = Je("path"), u = Je("path"), f = Je("path"), d = Je("path"), _ = Je("path"), this.h()
        },
        l(p) {
            e = Ce(p, "svg", {
                class: !0,
                xmlns: !0,
                "xml:space": !0,
                width: !0,
                height: !0,
                version: !0,
                style: !0,
                viewBox: !0,
                "xmlns:xlink": !0
            });
            var g = E(e);
            t = Ce(g, "defs", {}), E(t).forEach(c), s = Ce(g, "g", {
                id: !0
            });
            var b = E(s);
            n = Ce(b, "metadata", {
                id: !0
            }), E(n).forEach(c), r = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(r).forEach(c), a = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(a).forEach(c), u = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(u).forEach(c), f = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(f).forEach(c), d = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(d).forEach(c), _ = Ce(b, "path", {
                class: !0,
                d: !0
            }), E(_).forEach(c), b.forEach(c), g.forEach(c), this.h()
        },
        h() {
            m(n, "id", "CorelCorpID_0Corel-Layer"), m(r, "class", i = (l[1] > 0 ? "filled" : "") + " " + (l[0] === "bg" ? "fil1" : "fil0") + " svelte-1n1ouqa"), m(r, "d", "M1237835 754784c-41627,24154 -57713,54476 -62457,79583 -33219,176299 -172756,315073 -349462,347141 -25370,4606 -50457,11941 -76748,59882 -22997,-39721 -55914,-55418 -81993,-60308 -179134,-33502 -319645,-176741 -349037,-357292 -3738,-22943 -12543,-47658 -61831,-69006l107099 0c804,211542 172526,382804 384273,382804 211731,0 383470,-171245 384274,-382804l105882 0z"), m(a, "class", o = (l[1] === 2 ? "filled" : "") + " " + (l[0] === "bg" ? "fil1" : "fil0") + " svelte-1n1ouqa"), m(a, "d", "M752463 258628c26291,50936 54372,62469 82613,68209 168468,34335 301555,166006 337946,333729 6484,29871 16476,66296 70689,90940 -2014,1079 -3971,2172 -5876,3278l-105882 0c2,-498 19,-991 19,-1489 0,-212228 -172047,-384292 -384293,-384292 -212228,0 -384292,172047 -384292,384292 0,498 17,991 19,1489l-107099 0c52566,-19719 58058,-48597 61725,-71328 28241,-175111 160956,-315250 332170,-354422 31341,-7175 75987,-11250 102279,-70406l-18 0z"), m(u, "class", "fil1 svelte-1n1ouqa"), m(u, "d", "M751489 18l60785 226720c6804,25370 40501,32740 68298,39260l-8486 39544 -1293 -691c-55223,2374 -121395,-68493 -112714,-91276l13146 -34495 -24644 -45992 -19719 54213 12845 22996c7600,13606 -8132,48987 -38357,73595 -21508,17504 -51112,28807 -80983,26788l-6307 -41971c27957,-4412 56694,-213 66792,-33768l70637 -234941 0 18zm479803 614060c4411,27957 212,56693 33768,66792l234941 70636 -226721 60786c-25370,6803 -32740,40500 -39260,68298l-39544 -8486 691 -1294c-2374,-55223 68493,-121394 91277,-112713l34494 13145 45993 -24643 -54213 -19719 -22997 12844c-13606,7601 -48986,-8131 -73595,-38356 -17504,-21508 -28807,-51113 -26787,-80983l41970 -6307 -17 0zm-345352 617231c-27957,4412 -56693,213 -66791,33768l-70637 234941 -60786 -226720c-6803,-25371 -40500,-32741 -68298,-39260l8487 -39544 1293 691c55223,-2374 121395,68493 112713,91276l-13145 34495 24644 45992 19718 -54213 -12844 -22996c-7601,-13607 8132,-48987 38356,-73595 21508,-17504 51113,-28808 80983,-26788l6307 41971 0 -18zm-617231 -345351c-4412,-27957 -213,-56693 -33768,-66792l-234941 -70636 226720 -60786c25371,-6803 32741,-40501 39261,-68298l39543 8486 -691 1294c2374,55222 -68492,121394 -91276,112713l-34495 -13146 -45992 24644 54213 19719 22996 -12845c13607,-7600 48987,8132 73595,38357 17504,21508 28808,51112 26788,80983l-41971 6307 18 0z"), m(f, "class", "fil1 svelte-1n1ouqa"), m(f, "d", "M820743 133283c91099,116664 206594,101800 284937,176298l3207 2534 -9726 50864 -22306 -17716c-61264,-58253 -147261,-57066 -223124,-121501l-32988 -90497 0 0 0 18zm375186 249185c95121,112625 59138,196106 170523,288675l-77794 -19896c-69839,-75951 -50049,-148040 -131847,-242506l-13589 -10789 52707 -15502 0 18zm170807 438293c-116665,91099 -101800,206594 -176299,284937l-2533 3207 -50865 -9727 17717 -22305c58252,-61264 57065,-147261 121501,-223124l90496 -32988 0 0 -17 0zm-249185 375186c-112625,95121 -196106,59138 -288676,170523l19896 -77794c75951,-69839 148040,-50050 242506,-131848l10789 -13588 15502 52707 -17 0zm-438293 170806c-91100,-116664 -206595,-101800 -284938,-176298l-3207 -2534 9727 -50865 22305 17717c61265,58253 147261,57066 223124,121501l32989 90497 0 0 0 -18zm-375187 -249185c-95120,-112625 -59138,-196106 -170523,-288675l77794 19895c69839,75952 50050,148041 131848,242506l13589 10790 -52708 15502 0 -18zm-170806 -438293c116664,-91099 101800,-206594 176299,-284937l2533 -3207 50865 9727 -17717 22305c-58252,61264 -57065,147261 -121501,223124l-90497 32988 0 0 18 0zm249185 -375186c112625,-95121 196106,-59138 288676,-170523l-19896 77794c-75952,69839 -148041,50050 -242506,131847l-10790 13589 -15502 -52707 18 0z"), m(d, "class", "fil1 svelte-1n1ouqa"), m(d, "d", "M1128694 1220874c26841,2374 67359,15608 98576,36975 -9850,-34495 -10559,-79052 -8539,-110269 -28843,0 -65393,-24449 -114681,-60591 21367,50936 24644,105042 24644,133903l0 -18zm-762845 -948267c-26840,-2375 -67358,-15609 -98575,-36975 9850,34494 10559,79052 8539,110268 28843,0 65393,24449 114680,60591 -21366,-50935 -24644,-105042 -24644,-133902l0 18zm762845 0c26841,-2375 67359,-15609 98576,-36975 -9850,34494 -10559,79052 -8539,110268 -28843,0 -65393,24449 -114681,60591 21367,-50935 24644,-105042 24644,-133902l0 18zm-762845 948267c-26840,2374 -67358,15608 -98575,36975 9850,-34495 10559,-79052 8539,-110269 28843,0 65393,-24449 114680,-60591 -21366,50936 -24644,105042 -24644,133903l0 -18z"), m(_, "class", "fil1 svelte-1n1ouqa"), m(_, "d", "M738201 377613l-31748 28878c21348,14794 32864,29871 44362,52867 11498,-24644 24644,-39721 44363,-49589l-34371 -32191c21385,602 42326,3029 62664,7087l22465 22464c-73754,65074 -83623,116151 -91825,226225 32864,-294221 335164,-220290 179080,-77351 42715,-116647 -96928,-114999 -175785,110073l-4164 69272c45515,-77935 86316,-197416 152027,-139908 65711,57508 -64081,113369 -139731,150521l66774 -4961c234941,-77227 236730,-207533 110375,-172808 126497,-154437 241213,144887 -75881,174456 90037,-4447 154437,3295 228670,-85944l19878 19878c4004,20020 6395,40625 7051,61672l-28878 -31748c-14794,21348 -29871,32864 -52867,44362 24644,11498 39721,24644 49589,44363l32191 -34371c-602,21385 -3029,42326 -7086,62664l-22465 22465c-65073,-73754 -116151,-83623 -226224,-91825 294221,32864 220289,335164 77351,179080 116646,42715 114999,-96928 -110074,-175785l-69272 -4164c77935,45515 197417,86316 139908,152027 -57508,65711 -113369,-64081 -150521,-139731l4961 66774c77227,234941 207533,236730 172809,110375 154436,126497 -144887,241212 -174457,-75881 4447,90037 -3295,154437 85944,228670l-19878 19878c-20020,4004 -40624,6395 -61672,7051l31748 -28878c-21348,-14794 -32864,-29871 -44362,-52867 -11498,24644 -24644,39721 -44363,49589l34371 32191c-21384,-602 -42325,-3029 -62664,-7086l-22465 -22465c73755,-65073 83623,-116151 91826,-226224 -32865,294221 -335165,220289 -179081,77351 -42715,116646 96928,114999 175785,-110074l4164 -69272c-45514,77935 -86316,197417 -152027,139908 -65711,-57508 64081,-113369 139731,-150521l-66774 4961c-234941,77227 -236730,207533 -110375,172809 -126497,154436 -241212,-144887 75881,-174457 -90036,4447 -154437,-3295 -228669,85944l-19879 -19878c-4004,-20020 -6395,-40624 -7051,-61672l28878 31748c14794,-21348 29871,-32864 52867,-44362 -24644,-11498 -39721,-24644 -49589,-44363l-32191 34371c602,-21384 3029,-42325 7086,-62664l22465 -22465c65074,73755 116151,83623 226225,91826 -294221,-32865 -220290,-335165 -77352,-179081 -116646,-42715 -114999,96928 110074,175785l69272 4164c-77935,-45514 -197417,-86316 -139908,-152027 57508,-65711 113369,64081 150521,139731l-4961 -66774c-77227,-234941 -207533,-236730 -172808,-110375 -154437,-126497 144887,-241212 174456,75881 -4447,-90036 3295,-154436 -85944,-228669l19878 -19878c20020,-4004 40625,-6396 61672,-7052z"), m(s, "id", "Layer_x0020_1"), m(e, "class", v = l[0] + " " + (l[1] > 1 ? "full" : "") + " svelte-1n1ouqa"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "xml:space", "preserve"), m(e, "width", "100%"), m(e, "height", "100%"), m(e, "version", "1.1"), te(e, "shape-rendering", "geometricPrecision"), te(e, "text-rendering", "geometricPrecision"), te(e, "image-rendering", "optimizeQuality"), te(e, "fill-rule", "evenodd"), te(e, "clip-rule", "evenodd"), m(e, "viewBox", "0 0 1500001 1500018"), m(e, "xmlns:xlink", "http://www.w3.org/1999/xlink")
        },
        m(p, g) {
            z(p, e, g), h(e, t), h(e, s), h(s, n), h(s, r), h(s, a), h(s, u), h(s, f), h(s, d), h(s, _)
        },
        p(p, [g]) {
            g & 3 && i !== (i = (p[1] > 0 ? "filled" : "") + " " + (p[0] === "bg" ? "fil1" : "fil0") + " svelte-1n1ouqa") && m(r, "class", i), g & 3 && o !== (o = (p[1] === 2 ? "filled" : "") + " " + (p[0] === "bg" ? "fil1" : "fil0") + " svelte-1n1ouqa") && m(a, "class", o), g & 3 && v !== (v = p[0] + " " + (p[1] > 1 ? "full" : "") + " svelte-1n1ouqa") && m(e, "class", v)
        },
        i: Ne,
        o: Ne,
        d(p) {
            p && c(e)
        }
    }
}

function La(l, e, t) {
    let s;
    q(l, Et, r => t(1, s = r));
    let {
        mode: n = ""
    } = e;
    return l.$$set = r => {
        "mode" in r && t(0, n = r.mode)
    }, [n, s]
}
class Ja extends ze {
    constructor(e) {
        super(), Ge(this, e, La, Za, Oe, {
            mode: 0
        })
    }
}

function Ql(l, e, t) {
    const s = l.slice();
    return s[13] = e[t], s
}

function Kl(l) {
    let e;
    return {
        c() {
            e = w("div"), this.h()
        },
        l(t) {
            e = k(t, "DIV", {
                class: !0
            }), E(e).forEach(c), this.h()
        },
        h() {
            m(e, "class", "overlay svelte-1enkcw3")
        },
        m(t, s) {
            z(t, e, s)
        },
        d(t) {
            t && c(e)
        }
    }
}

function Ca(l) {
    let e, t, s, n, r, i;
    return {
        c() {
            e = w("img"), this.h()
        },
        l(a) {
            e = k(a, "IMG", {
                src: !0,
                alt: !0,
                class: !0,
                loading: !0,
                crossorigin: !0
            }), this.h()
        },
        h() {
            Te(e.src, t = l[9][l[2]]) || m(e, "src", t), m(e, "alt", s = yt(l[2])), m(e, "class", n = Ot(l[4]) + " svelte-1enkcw3"), m(e, "loading", "lazy"), m(e, "crossorigin", "anonymous")
        },
        m(a, o) {
            z(a, e, o), r || (i = be(e, "error", Xa), r = !0)
        },
        p(a, o) {
            o & 516 && !Te(e.src, t = a[9][a[2]]) && m(e, "src", t), o & 4 && s !== (s = yt(a[2])) && m(e, "alt", s), o & 16 && n !== (n = Ot(a[4]) + " svelte-1enkcw3") && m(e, "class", n)
        },
        d(a) {
            a && c(e), r = !1, i()
        }
    }
}

function $a(l) {
    let e, t, s, n, r, i, a, o;
    return {
        c() {
            e = w("img"), n = V(), r = w("span"), this.h()
        },
        l(u) {
            e = k(u, "IMG", {
                src: !0,
                alt: !0,
                loading: !0,
                crossorigin: !0,
                class: !0
            }), n = M(u), r = k(u, "SPAN", {
                class: !0
            }), E(r).forEach(c), this.h()
        },
        h() {
            Te(e.src, t = l[9][`face/${l[7]||l[2]}`]) || m(e, "src", t), m(e, "alt", s = yt(l[2])), m(e, "loading", "lazy"), m(e, "crossorigin", "anonymous"), m(e, "class", "svelte-1enkcw3"), m(r, "class", i = "gi-" + l[3] + " " + l[3] + " icon-gradient element svelte-1enkcw3")
        },
        m(u, f) {
            z(u, e, f), z(u, n, f), z(u, r, f), a || (o = be(e, "error", Ha), a = !0)
        },
        p(u, f) {
            f & 644 && !Te(e.src, t = u[9][`face/${u[7]||u[2]}`]) && m(e, "src", t), f & 4 && s !== (s = yt(u[2])) && m(e, "alt", s), f & 8 && i !== (i = "gi-" + u[3] + " " + u[3] + " icon-gradient element svelte-1enkcw3") && m(r, "class", i)
        },
        d(u) {
            u && c(e), u && c(n), u && c(r), a = !1, o()
        }
    }
}

function xl(l) {
    let e, t;
    return {
        c() {
            e = w("span"), t = J(l[8]), this.h()
        },
        l(s) {
            e = k(s, "SPAN", {
                class: !0
            });
            var n = E(e);
            t = C(n, l[8]), n.forEach(c), this.h()
        },
        h() {
            m(e, "class", "qty svelte-1enkcw3")
        },
        m(s, n) {
            z(s, e, n), h(e, t)
        },
        p(s, n) {
            n & 256 && K(t, s[8])
        },
        d(s) {
            s && c(e)
        }
    }
}

function en(l) {
    let e;
    return {
        c() {
            e = w("i"), this.h()
        },
        l(t) {
            e = k(t, "I", {
                class: !0
            }), E(e).forEach(c), this.h()
        },
        h() {
            m(e, "class", "gi-star svelte-1enkcw3")
        },
        m(t, s) {
            z(t, e, s)
        },
        p: Ne,
        d(t) {
            t && c(e)
        }
    }
}

function Fa(l) {
    let e, t, s, n, r, i, a, o, u, f, d = (l[1] === "weapon" ? l[10](l[2]) : l[10](`${l[2]}.name`)) + "",
        _, v, p, g = !l[6] && Kl();

    function b(y, S) {
        return y[1] === "character" ? $a : Ca
    }
    let A = b(l),
        N = A(l),
        B = l[5] > 1 && xl(l),
        D = Array(l[0]),
        I = [];
    for (let y = 0; y < D.length; y += 1) I[y] = en(Ql(l, D, y));
    return {
        c() {
            e = w("div"), g && g.c(), t = V(), s = w("picture"), N.c(), n = V(), B && B.c(), i = V(), a = w("div"), o = w("div");
            for (let y = 0; y < I.length; y += 1) I[y].c();
            u = V(), f = w("span"), _ = J(d), this.h()
        },
        l(y) {
            e = k(y, "DIV", {
                class: !0
            });
            var S = E(e);
            g && g.l(S), t = M(S), s = k(S, "PICTURE", {
                class: !0,
                style: !0
            });
            var P = E(s);
            N.l(P), n = M(P), B && B.l(P), P.forEach(c), i = M(S), a = k(S, "DIV", {
                class: !0
            });
            var Y = E(a);
            o = k(Y, "DIV", {
                class: !0
            });
            var L = E(o);
            for (let T = 0; T < I.length; T += 1) I[T].l(L);
            L.forEach(c), u = M(Y), f = k(Y, "SPAN", {
                class: !0
            });
            var G = E(f);
            _ = C(G, d), G.forEach(c), Y.forEach(c), S.forEach(c), this.h()
        },
        h() {
            m(s, "class", r = "wish-result star" + l[0] + " " + l[1] + " svelte-1enkcw3"), te(s, "background-image", "url('" + l[9][`${l[0]}star-bg.webp`] + "')"), m(o, "class", "star svelte-1enkcw3"), m(f, "class", "svelte-1enkcw3"), m(a, "class", "caption svelte-1enkcw3"), m(e, "class", "content svelte-1enkcw3"), ye(e, "owned", l[6])
        },
        m(y, S) {
            z(y, e, S), g && g.m(e, null), h(e, t), h(e, s), N.m(s, null), h(s, n), B && B.m(s, null), h(e, i), h(e, a), h(a, o);
            for (let P = 0; P < I.length; P += 1) I[P].m(o, null);
            h(a, u), h(a, f), h(f, _), v || (p = be(e, "click", l[11]), v = !0)
        },
        p(y, [S]) {
            if (y[6] ? g && (g.d(1), g = null) : g || (g = Kl(), g.c(), g.m(e, t)), A === (A = b(y)) && N ? N.p(y, S) : (N.d(1), N = A(y), N && (N.c(), N.m(s, n))), y[5] > 1 ? B ? B.p(y, S) : (B = xl(y), B.c(), B.m(s, null)) : B && (B.d(1), B = null), S & 3 && r !== (r = "wish-result star" + y[0] + " " + y[1] + " svelte-1enkcw3") && m(s, "class", r), S & 513 && te(s, "background-image", "url('" + y[9][`${y[0]}star-bg.webp`] + "')"), S & 1) {
                D = Array(y[0]);
                let P;
                for (P = 0; P < D.length; P += 1) {
                    const Y = Ql(y, D, P);
                    I[P] ? I[P].p(Y, S) : (I[P] = en(), I[P].c(), I[P].m(o, null))
                }
                for (; P < I.length; P += 1) I[P].d(1);
                I.length = D.length
            }
            S & 1030 && d !== (d = (y[1] === "weapon" ? y[10](y[2]) : y[10](`${y[2]}.name`)) + "") && K(_, d), S & 64 && ye(e, "owned", y[6])
        },
        i: Ne,
        o: Ne,
        d(y) {
            y && c(e), g && g.d(), N.d(), B && B.d(), qe(I, y), v = !1, p()
        }
    }
}
const Ha = l => l.target.remove(),
    Xa = l => l.target.remove();

function qa(l, e, t) {
    let s, n;
    q(l, st, b => t(9, s = b)), q(l, Le, b => t(10, n = b));
    let {
        rarity: r = 3
    } = e, {
        type: i = "character"
    } = e, {
        name: a = "No Name"
    } = e, {
        vision: o = ""
    } = e, {
        weaponType: u = ""
    } = e, {
        qty: f = 0
    } = e, {
        isOwned: d = !0
    } = e, {
        outfit: _ = null
    } = e, v = `R${f>5?`5 + ${f-5}`:f}`;
    i === "character" && (v = `C${f>7?`6 + ${f-7}`:f-1}`);
    const p = at(),
        g = () => {
            if (!!d) return p("click", {
                name: a,
                outfit: _
            })
        };
    return l.$$set = b => {
        "rarity" in b && t(0, r = b.rarity), "type" in b && t(1, i = b.type), "name" in b && t(2, a = b.name), "vision" in b && t(3, o = b.vision), "weaponType" in b && t(4, u = b.weaponType), "qty" in b && t(5, f = b.qty), "isOwned" in b && t(6, d = b.isOwned), "outfit" in b && t(7, _ = b.outfit)
    }, [r, i, a, o, u, f, d, _, v, s, n, g]
}
class Kn extends ze {
    constructor(e) {
        super(), Ge(this, e, qa, Fa, Oe, {
            rarity: 0,
            type: 1,
            name: 2,
            vision: 3,
            weaponType: 4,
            qty: 5,
            isOwned: 6,
            outfit: 7
        })
    }
}

function tn(l, e, t) {
    const s = l.slice();
    return s[31] = e[t].name, s[32] = e[t].type, s[34] = t, s
}

function sn(l, e, t) {
    const s = l.slice();
    return s[35] = e[t], s
}

function Qa(l) {
    let e, t, s = l[10]("wish.epitomizedPath.cancelPrompt") + "",
        n, r, i, a, o, u = l[10]("wish.epitomizedPath.cancelDesc") + "",
        f;
    return {
        c() {
            e = w("div"), t = w("div"), n = J(s), r = V(), i = w("br"), a = V(), o = w("span"), f = J(u), this.h()
        },
        l(d) {
            e = k(d, "DIV", {
                class: !0,
                style: !0
            });
            var _ = E(e);
            t = k(_, "DIV", {});
            var v = E(t);
            n = C(v, s), r = M(v), i = k(v, "BR", {}), a = M(v), o = k(v, "SPAN", {
                style: !0,
                class: !0
            });
            var p = E(o);
            f = C(p, u), p.forEach(c), v.forEach(c), _.forEach(c), this.h()
        },
        h() {
            te(o, "font-size", "smaller"), te(o, "padding", "2rem"), m(o, "class", "svelte-19hszfj"), m(e, "class", "pop-up"), te(e, "display", "flex"), te(e, "width", "100%"), te(e, "height", "100%"), te(e, "justify-content", "center"), te(e, "align-items", "center")
        },
        m(d, _) {
            z(d, e, _), h(e, t), h(t, n), h(t, r), h(t, i), h(t, a), h(t, o), h(o, f)
        },
        p(d, _) {
            _[0] & 1024 && s !== (s = d[10]("wish.epitomizedPath.cancelPrompt") + "") && K(n, s), _[0] & 1024 && u !== (u = d[10]("wish.epitomizedPath.cancelDesc") + "") && K(f, u)
        },
        d(d) {
            d && c(e)
        }
    }
}

function ln(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g, b = l[10]("wish.epitomizedPath.selectWeapon") + "",
        A, N, B, D, I, y, S, P, Y, L, G, T, O, R, W, F, oe, Z, H = !l[9] && nn(l);
    v = new Ja({
        props: {
            mode: l[8] ? "counter" : "bg"
        }
    });
    const X = [xa, Ka],
        he = [];

    function _e(ce, se) {
        return ce[8] ? 0 : 1
    }
    I = _e(l), y = he[I] = X[I](l);

    function ee(ce, se) {
        return ce[8] ? so : ce[4] === null ? to : eo
    }
    let le = ee(l),
        x = le(l);
    const we = [no, lo],
        ue = [];

    function me(ce, se) {
        return ce[8] ? 0 : 1
    }
    return T = me(l), O = ue[T] = we[T](l), {
        c() {
            e = w("section"), t = w("div"), s = w("img"), r = V(), i = w("button"), a = w("i"), o = V(), u = w("div"), H && H.c(), f = V(), d = w("div"), _ = w("div"), ne(v.$$.fragment), p = V(), g = w("div"), A = J(b), N = V(), B = w("div"), D = w("div"), y.c(), S = V(), P = w("div"), Y = w("div"), x.c(), L = V(), G = w("div"), O.c(), this.h()
        },
        l(ce) {
            e = k(ce, "SECTION", {
                class: !0,
                style: !0
            });
            var se = E(e);
            t = k(se, "DIV", {
                class: !0,
                style: !0
            });
            var fe = E(t);
            s = k(fe, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), r = M(fe), i = k(fe, "BUTTON", {
                class: !0
            });
            var $ = E(i);
            a = k($, "I", {
                class: !0
            }), E(a).forEach(c), $.forEach(c), o = M(fe), u = k(fe, "DIV", {
                class: !0
            });
            var Q = E(u);
            H && H.l(Q), f = M(Q), d = k(Q, "DIV", {
                class: !0
            });
            var ae = E(d);
            _ = k(ae, "DIV", {
                class: !0
            });
            var pe = E(_);
            de(v.$$.fragment, pe), pe.forEach(c), p = M(ae), g = k(ae, "DIV", {
                class: !0
            });
            var ve = E(g);
            A = C(ve, b), ve.forEach(c), N = M(ae), B = k(ae, "DIV", {
                class: !0
            });
            var ge = E(B);
            D = k(ge, "DIV", {
                class: !0,
                style: !0
            });
            var Ae = E(D);
            y.l(Ae), Ae.forEach(c), S = M(ge), P = k(ge, "DIV", {
                class: !0
            });
            var Ue = E(P);
            Y = k(Ue, "DIV", {});
            var We = E(Y);
            x.l(We), We.forEach(c), Ue.forEach(c), ge.forEach(c), L = M(ae), G = k(ae, "DIV", {
                class: !0
            });
            var Pe = E(G);
            O.l(Pe), Pe.forEach(c), ae.forEach(c), Q.forEach(c), fe.forEach(c), se.forEach(c), this.h()
        },
        h() {
            Te(s.src, n = l[12][`fatepointbook${l[9]?"-half":""}.webp`]) || m(s, "src", n), m(s, "alt", "Fatepoint Background"), m(s, "class", "svelte-19hszfj"), m(a, "class", "gi-close svelte-19hszfj"), m(i, "class", "close-modal svelte-19hszfj"), m(_, "class", "bg svelte-19hszfj"), m(g, "class", "top svelte-19hszfj"), m(D, "class", "weapon-list svelte-19hszfj"), te(D, "--item-width", l[0] + "px"), m(P, "class", "text svelte-19hszfj"), m(B, "class", "weapon-item svelte-19hszfj"), m(G, "class", "button svelte-19hszfj"), m(d, "class", "selector svelte-19hszfj"), ye(d, "counter", l[8]), m(u, "class", "container svelte-19hszfj"), m(t, "class", "modal-content svelte-19hszfj"), te(t, "--modal-width", l[2] + "px"), Re(() => l[28].call(t)), m(e, "class", "modal svelte-19hszfj"), te(e, "height", l[1] + "px")
        },
        m(ce, se) {
            z(ce, e, se), h(e, t), h(t, s), h(t, r), h(t, i), h(i, a), h(t, o), h(t, u), H && H.m(u, null), h(u, f), h(u, d), h(d, _), re(v, _, null), h(d, p), h(d, g), h(g, A), h(d, N), h(d, B), h(B, D), he[I].m(D, null), h(B, S), h(B, P), h(P, Y), x.m(Y, null), h(d, L), h(d, G), ue[T].m(G, null), R = Ft(t, l[28].bind(t)), F = !0, oe || (Z = be(i, "click", l[25]), oe = !0)
        },
        p(ce, se) {
            (!F || se[0] & 4608 && !Te(s.src, n = ce[12][`fatepointbook${ce[9]?"-half":""}.webp`])) && m(s, "src", n), ce[9] ? H && (H.d(1), H = null) : H ? H.p(ce, se) : (H = nn(ce), H.c(), H.m(u, f));
            const fe = {};
            se[0] & 256 && (fe.mode = ce[8] ? "counter" : "bg"), v.$set(fe), (!F || se[0] & 1024) && b !== (b = ce[10]("wish.epitomizedPath.selectWeapon") + "") && K(A, b);
            let $ = I;
            I = _e(ce), I === $ ? he[I].p(ce, se) : (ke(), U(he[$], 1, 1, () => {
                he[$] = null
            }), Ee(), y = he[I], y ? y.p(ce, se) : (y = he[I] = X[I](ce), y.c()), j(y, 1), y.m(D, null)), (!F || se[0] & 1) && te(D, "--item-width", ce[0] + "px"), le === (le = ee(ce)) && x ? x.p(ce, se) : (x.d(1), x = le(ce), x && (x.c(), x.m(Y, null)));
            let Q = T;
            T = me(ce), T === Q ? ue[T].p(ce, se) : (ke(), U(ue[Q], 1, 1, () => {
                ue[Q] = null
            }), Ee(), O = ue[T], O ? O.p(ce, se) : (O = ue[T] = we[T](ce), O.c()), j(O, 1), O.m(G, null)), se[0] & 256 && ye(d, "counter", ce[8]), (!F || se[0] & 4) && te(t, "--modal-width", ce[2] + "px"), (!F || se[0] & 2) && te(e, "height", ce[1] + "px")
        },
        i(ce) {
            F || (j(v.$$.fragment, ce), j(y), j(O), Re(() => {
                W || (W = et(e, $e, {
                    duration: 80
                }, !0)), W.run(1)
            }), F = !0)
        },
        o(ce) {
            U(v.$$.fragment, ce), U(y), U(O), W || (W = et(e, $e, {
                duration: 80
            }, !1)), W.run(0), F = !1
        },
        d(ce) {
            ce && c(e), H && H.d(), ie(v), he[I].d(), x.d(), ue[T].d(), R(), ce && W && W.end(), oe = !1, Z()
        }
    }
}

function nn(l) {
    let e, t, s = l[10]("wish.epitomizedPath.text") + "",
        n, r, i, a = l[13]("wish.epitomizedPath.description"),
        o = [];
    for (let u = 0; u < a.length; u += 1) o[u] = rn(sn(l, a, u));
    return {
        c() {
            e = w("div"), t = w("h1"), n = J(s), r = V(), i = w("div");
            for (let u = 0; u < o.length; u += 1) o[u].c();
            this.h()
        },
        l(u) {
            e = k(u, "DIV", {
                class: !0
            });
            var f = E(e);
            t = k(f, "H1", {
                class: !0
            });
            var d = E(t);
            n = C(d, s), d.forEach(c), r = M(f), i = k(f, "DIV", {
                class: !0
            });
            var _ = E(i);
            for (let v = 0; v < o.length; v += 1) o[v].l(_);
            _.forEach(c), f.forEach(c), this.h()
        },
        h() {
            m(t, "class", "svelte-19hszfj"), m(i, "class", "content svelte-19hszfj"), m(e, "class", "description svelte-19hszfj")
        },
        m(u, f) {
            z(u, e, f), h(e, t), h(t, n), h(e, r), h(e, i);
            for (let d = 0; d < o.length; d += 1) o[d].m(i, null);
            l[26](i)
        },
        p(u, f) {
            if (f[0] & 1024 && s !== (s = u[10]("wish.epitomizedPath.text") + "") && K(n, s), f[0] & 8192) {
                a = u[13]("wish.epitomizedPath.description");
                let d;
                for (d = 0; d < a.length; d += 1) {
                    const _ = sn(u, a, d);
                    o[d] ? o[d].p(_, f) : (o[d] = rn(_), o[d].c(), o[d].m(i, null))
                }
                for (; d < o.length; d += 1) o[d].d(1);
                o.length = a.length
            }
        },
        d(u) {
            u && c(e), qe(o, u), l[26](null)
        }
    }
}

function rn(l) {
    let e, t, s, n = l[35] + "",
        r;
    return {
        c() {
            e = w("p"), t = J("\xB7 "), s = new Tt(!1), r = V(), this.h()
        },
        l(i) {
            e = k(i, "P", {
                class: !0
            });
            var a = E(e);
            t = C(a, "\xB7 "), s = Rt(a, !1), r = M(a), a.forEach(c), this.h()
        },
        h() {
            s.a = r, m(e, "class", "svelte-19hszfj")
        },
        m(i, a) {
            z(i, e, a), h(e, t), s.m(n, e), h(e, r)
        },
        p(i, a) {
            a[0] & 8192 && n !== (n = i[35] + "") && s.p(n)
        },
        d(i) {
            i && c(e)
        }
    }
}

function Ka(l) {
    let e, t, s = l[6],
        n = [];
    for (let i = 0; i < s.length; i += 1) n[i] = an(tn(l, s, i));
    const r = i => U(n[i], 1, 1, () => {
        n[i] = null
    });
    return {
        c() {
            for (let i = 0; i < n.length; i += 1) n[i].c();
            e = Be()
        },
        l(i) {
            for (let a = 0; a < n.length; a += 1) n[a].l(i);
            e = Be()
        },
        m(i, a) {
            for (let o = 0; o < n.length; o += 1) n[o].m(i, a);
            z(i, e, a), t = !0
        },
        p(i, a) {
            if (a[0] & 32848) {
                s = i[6];
                let o;
                for (o = 0; o < s.length; o += 1) {
                    const u = tn(i, s, o);
                    n[o] ? (n[o].p(u, a), j(n[o], 1)) : (n[o] = an(u), n[o].c(), j(n[o], 1), n[o].m(e.parentNode, e))
                }
                for (ke(), o = s.length; o < n.length; o += 1) r(o);
                Ee()
            }
        },
        i(i) {
            if (!t) {
                for (let a = 0; a < s.length; a += 1) j(n[a]);
                t = !0
            }
        },
        o(i) {
            n = n.filter(Boolean);
            for (let a = 0; a < n.length; a += 1) U(n[a]);
            t = !1
        },
        d(i) {
            qe(n, i), i && c(e)
        }
    }
}

function xa(l) {
    let e, t, s, n;
    return s = new Kn({
        props: {
            name: l[8],
            weaponType: l[6][l[7]].type,
            type: "weapon",
            rarity: 5
        }
    }), {
        c() {
            e = w("div"), t = w("button"), ne(s.$$.fragment), this.h()
        },
        l(r) {
            e = k(r, "DIV", {
                class: !0
            });
            var i = E(e);
            t = k(i, "BUTTON", {
                class: !0
            });
            var a = E(t);
            de(s.$$.fragment, a), a.forEach(c), i.forEach(c), this.h()
        },
        h() {
            m(t, "class", "svelte-19hszfj"), m(e, "class", "weapon-content svelte-19hszfj")
        },
        m(r, i) {
            z(r, e, i), h(e, t), re(s, t, null), n = !0
        },
        p(r, i) {
            const a = {};
            i[0] & 256 && (a.name = r[8]), i[0] & 192 && (a.weaponType = r[6][r[7]].type), s.$set(a)
        },
        i(r) {
            n || (j(s.$$.fragment, r), n = !0)
        },
        o(r) {
            U(s.$$.fragment, r), n = !1
        },
        d(r) {
            r && c(e), ie(s)
        }
    }
}

function an(l) {
    let e, t, s, n, r, i, a;
    s = new Kn({
        props: {
            name: l[31],
            weaponType: l[32],
            type: "weapon",
            rarity: 5
        }
    });

    function o() {
        return l[27](l[34])
    }
    return {
        c() {
            e = w("div"), t = w("button"), ne(s.$$.fragment), n = V(), this.h()
        },
        l(u) {
            e = k(u, "DIV", {
                class: !0
            });
            var f = E(e);
            t = k(f, "BUTTON", {
                class: !0
            });
            var d = E(t);
            de(s.$$.fragment, d), d.forEach(c), n = M(f), f.forEach(c), this.h()
        },
        h() {
            m(t, "class", "svelte-19hszfj"), m(e, "class", "weapon-content svelte-19hszfj"), ye(e, "active", l[4] === l[34])
        },
        m(u, f) {
            z(u, e, f), h(e, t), re(s, t, null), h(e, n), r = !0, i || (a = be(e, "click", o), i = !0)
        },
        p(u, f) {
            l = u;
            const d = {};
            f[0] & 64 && (d.name = l[31]), f[0] & 64 && (d.weaponType = l[32]), s.$set(d), f[0] & 16 && ye(e, "active", l[4] === l[34])
        },
        i(u) {
            r || (j(s.$$.fragment, u), r = !0)
        },
        o(u) {
            U(s.$$.fragment, u), r = !1
        },
        d(u) {
            u && c(e), ie(s), i = !1, a()
        }
    }
}

function eo(l) {
    let e, t = l[10]("wish.epitomizedPath.chartCourseOf", {
            values: {
                target: `<span> ${l[10](l[6][l[4]].name)} </span>`
            }
        }) + "",
        s;
    return {
        c() {
            e = new Tt(!1), s = Be(), this.h()
        },
        l(n) {
            e = Rt(n, !1), s = Be(), this.h()
        },
        h() {
            e.a = s
        },
        m(n, r) {
            e.m(t, n, r), z(n, s, r)
        },
        p(n, r) {
            r[0] & 1104 && t !== (t = n[10]("wish.epitomizedPath.chartCourseOf", {
                values: {
                    target: `<span> ${n[10](n[6][n[4]].name)} </span>`
                }
            }) + "") && e.p(t)
        },
        d(n) {
            n && c(s), n && e.d()
        }
    }
}

function to(l) {
    let e = l[10]("wish.epitomizedPath.selectWeapon") + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 1024 && e !== (e = s[10]("wish.epitomizedPath.selectWeapon") + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function so(l) {
    let e = l[10]("wish.epitomizedPath.fatePoint") + "",
        t, s, n, r, i;
    return {
        c() {
            t = J(e), s = J(" : "), n = w("span"), r = J(l[14]), i = J("/2"), this.h()
        },
        l(a) {
            t = C(a, e), s = C(a, " : "), n = k(a, "SPAN", {
                class: !0
            });
            var o = E(n);
            r = C(o, l[14]), o.forEach(c), i = C(a, "/2"), this.h()
        },
        h() {
            m(n, "class", "svelte-19hszfj")
        },
        m(a, o) {
            z(a, t, o), z(a, s, o), z(a, n, o), h(n, r), z(a, i, o)
        },
        p(a, o) {
            o[0] & 1024 && e !== (e = a[10]("wish.epitomizedPath.fatePoint") + "") && K(t, e), o[0] & 16384 && K(r, a[14])
        },
        d(a) {
            a && c(t), a && c(s), a && c(n), a && c(i)
        }
    }
}

function lo(l) {
    let e, t;
    return e = new Yt({
        props: {
            $$slots: {
                default: [ro]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("click", l[16]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 1024 | n[1] & 128 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function no(l) {
    let e, t;
    return e = new Yt({
        props: {
            type: "cancel",
            $$slots: {
                default: [io]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("click", l[17]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 1024 | n[1] & 128 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function ro(l) {
    let e = l[10]("wish.epitomizedPath.chartCourse") + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 1024 && e !== (e = s[10]("wish.epitomizedPath.chartCourse") + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function io(l) {
    let e = l[10]("wish.epitomizedPath.cancelCourse") + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 1024 && e !== (e = s[10]("wish.epitomizedPath.cancelCourse") + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function ao(l) {
    let e, t, s, n;
    e = new Zt({
        props: {
            show: l[3],
            $$slots: {
                default: [Qa]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("confirm", l[18]), e.$on("cancel", l[24]);
    let r = l[11] && ln(l);
    return {
        c() {
            ne(e.$$.fragment), t = V(), r && r.c(), s = Be()
        },
        l(i) {
            de(e.$$.fragment, i), t = M(i), r && r.l(i), s = Be()
        },
        m(i, a) {
            re(e, i, a), z(i, t, a), r && r.m(i, a), z(i, s, a), n = !0
        },
        p(i, a) {
            const o = {};
            a[0] & 8 && (o.show = i[3]), a[0] & 1024 | a[1] & 128 && (o.$$scope = {
                dirty: a,
                ctx: i
            }), e.$set(o), i[11] ? r ? (r.p(i, a), a[0] & 2048 && j(r, 1)) : (r = ln(i), r.c(), j(r, 1), r.m(s.parentNode, s)) : r && (ke(), U(r, 1, 1, () => {
                r = null
            }), Ee())
        },
        i(i) {
            n || (j(e.$$.fragment, i), j(r), n = !0)
        },
        o(i) {
            U(e.$$.fragment, i), U(r), n = !1
        },
        d(i) {
            ie(e, i), i && c(t), r && r.d(i), i && c(s)
        }
    }
}

function oo(l, e, t) {
    let s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N;
    q(l, St, Z => t(29, o = Z)), q(l, At, Z => t(30, u = Z)), q(l, Bt, Z => t(1, f = Z)), q(l, ot, Z => t(21, d = Z)), q(l, ct, Z => t(22, _ = Z)), q(l, Rs, Z => t(23, v = Z)), q(l, Le, Z => t(10, p = Z)), q(l, vs, Z => t(11, g = Z)), q(l, st, Z => t(12, b = Z)), q(l, ar, Z => t(13, A = Z)), q(l, Et, Z => t(14, N = Z));
    let B, D, I = !1,
        y = null;
    const S = Z => {
            Se(), t(4, y = Z)
        },
        P = () => {
            if (y === null) return;
            Ct.init(u, o, y + 1).set(0);
            const {
                name: H
            } = i[y];
            ct.set({
                name: H,
                index: y
            }), Se(), G()
        },
        Y = () => {
            t(3, I = !0), Se()
        },
        L = () => {
            const Z = Ct.init(u, o, y);
            t(4, y = null), ct.set({
                name: null,
                index: null
            }), Et.set(0), Z.remove(), G(), t(3, I = !1)
        },
        G = () => {
            vs.set(!1)
        };
    let T;
    Zn(() => {
        It(T, {
            sizeAutoCapable: !1,
            className: "os-theme-light"
        })
    });
    const O = () => {
            t(3, I = !1)
        },
        R = () => {
            G(), Se("close")
        };

    function W(Z) {
        Ke[Z ? "unshift" : "push"](() => {
            T = Z, t(5, T)
        })
    }
    const F = Z => S(Z);

    function oe() {
        D = this.clientWidth, t(2, D)
    }
    return l.$$.update = () => {
        l.$$.dirty[0] & 8388608 && t(9, s = v < 500), l.$$.dirty[0] & 4194304 && t(8, n = _.name), l.$$.dirty[0] & 4194304 && t(7, r = _.index), l.$$.dirty[0] & 2097152 && t(6, i = d.find(({
            type: Z
        }) => Z === "weapons") ? .weapons.featured || []), l.$$.dirty[0] & 2 && t(20, a = 16.5 / 100 * f), l.$$.dirty[0] & 1048577 && (B < 150 ? t(0, B = 150) : t(0, B = a))
    }, [B, f, D, I, y, T, i, r, n, s, p, g, b, A, N, S, P, Y, L, G, a, d, _, v, O, R, W, F, oe]
}
class uo extends ze {
    constructor(e) {
        super(), Ge(this, e, oo, ao, Oe, {}, null, [-1, -1])
    }
}

function on(l, e, t) {
    const s = l.slice();
    return s[24] = e[t].type, s[25] = e[t].character, s[26] = e[t].weapons, s[28] = t, s
}

function un(l) {
    let e, t;
    return e = new Ma({}), e.$on("close", l[20]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p: Ne,
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function fn(l) {
    let e, t, s, n, r;
    return {
        c() {
            e = w("button"), t = w("i"), this.h()
        },
        l(i) {
            e = k(i, "BUTTON", {
                class: !0,
                title: !0,
                "aria-label": !0
            });
            var a = E(e);
            t = k(a, "I", {
                class: !0
            }), E(t).forEach(c), a.forEach(c), this.h()
        },
        h() {
            m(t, "class", s = "gi-" + (l[2] ? "shrink" : "fullscreen")), m(e, "class", "fullscreen svelte-asq6ym"), m(e, "title", "FullScreen"), m(e, "aria-label", "Fullscreen")
        },
        m(i, a) {
            z(i, e, a), h(e, t), n || (r = be(e, "click", l[21]), n = !0)
        },
        p(i, a) {
            a & 4 && s !== (s = "gi-" + (i[2] ? "shrink" : "fullscreen")) && m(t, "class", s)
        },
        d(i) {
            i && c(e), n = !1, r()
        }
    }
}

function cn(l) {
    let e, t, s, n;
    return e = new ut({
        props: {
            type: "starglitter",
            $$slots: {
                default: [fo]
            },
            $$scope: {
                ctx: l
            }
        }
    }), s = new ut({
        props: {
            type: "stardust",
            $$slots: {
                default: [co]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), ne(s.$$.fragment)
        },
        l(r) {
            de(e.$$.fragment, r), t = M(r), de(s.$$.fragment, r)
        },
        m(r, i) {
            re(e, r, i), z(r, t, i), re(s, r, i), n = !0
        },
        p(r, i) {
            const a = {};
            i & 536871424 && (a.$$scope = {
                dirty: i,
                ctx: r
            }), e.$set(a);
            const o = {};
            i & 536871936 && (o.$$scope = {
                dirty: i,
                ctx: r
            }), s.$set(o)
        },
        i(r) {
            n || (j(e.$$.fragment, r), j(s.$$.fragment, r), n = !0)
        },
        o(r) {
            U(e.$$.fragment, r), U(s.$$.fragment, r), n = !1
        },
        d(r) {
            ie(e, r), r && c(t), ie(s, r)
        }
    }
}

function fo(l) {
    let e;
    return {
        c() {
            e = J(l[9])
        },
        l(t) {
            e = C(t, l[9])
        },
        m(t, s) {
            z(t, e, s)
        },
        p(t, s) {
            s & 512 && K(e, t[9])
        },
        d(t) {
            t && c(e)
        }
    }
}

function co(l) {
    let e;
    return {
        c() {
            e = J(l[10])
        },
        l(t) {
            e = C(t, l[10])
        },
        m(t, s) {
            z(t, e, s)
        },
        p(t, s) {
            s & 1024 && K(e, t[10])
        },
        d(t) {
            t && c(e)
        }
    }
}

function ho(l) {
    let e = (l[11] ? "\u221E" : l[12]) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 6144 && e !== (e = (s[11] ? "\u221E" : s[12]) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function mo(l) {
    let e, t;
    return e = new ut({
        props: {
            type: "intertwined",
            $$slots: {
                default: [po]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 536905728 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function _o(l) {
    let e, t;
    return e = new ut({
        props: {
            type: "acquaint",
            $$slots: {
                default: [vo]
            },
            $$scope: {
                ctx: l
            }
        }
    }), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 536889344 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function po(l) {
    let e = (l[11] ? "\u221E" : l[15]) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 34816 && e !== (e = (s[11] ? "\u221E" : s[15]) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function vo(l) {
    let e = (l[11] ? "\u221E" : l[14]) + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 18432 && e !== (e = (s[11] ? "\u221E" : s[14]) + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function dn(l) {
    let e, t;

    function s() {
        return l[23](l[28])
    }
    return e = new ui({
        props: {
            type: l[24],
            index: l[28],
            character: l[25] || "",
            weapons: l[26] || [],
            active: l[4] === l[28]
        }
    }), e.$on("click", s), {
        c() {
            ne(e.$$.fragment)
        },
        l(n) {
            de(e.$$.fragment, n)
        },
        m(n, r) {
            re(e, n, r), t = !0
        },
        p(n, r) {
            l = n;
            const i = {};
            r & 65536 && (i.type = l[24]), r & 65536 && (i.character = l[25] || ""), r & 65536 && (i.weapons = l[26] || []), r & 16 && (i.active = l[4] === l[28]), e.$set(i)
        },
        i(n) {
            t || (j(e.$$.fragment, n), t = !0)
        },
        o(n) {
            U(e.$$.fragment, n), t = !1
        },
        d(n) {
            ie(e, n)
        }
    }
}

function hn(l) {
    let e, t;
    return e = new Qn({}), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function go(l) {
    let e, t, s, n, r, i, a, o, u, f, d = l[6]("wish.wishTitle") + "",
        _, v, p, g, b, A, N, B, D, I, y, S, P, Y, L, G, T, O, R, W, F, oe, Z, H, X, he, _e, ee;
    e = new uo({});
    let le = l[1] && un(l),
        x = (!l[7] || !l[8]) && fn(l),
        we = l[0] && cn(l);
    I = new ut({
        props: {
            type: "primogem",
            $$slots: {
                default: [ho]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    const ue = [_o, mo],
        me = [];

    function ce(ae, pe) {
        return ae[13] ? 0 : 1
    }
    S = ce(l), P = me[S] = ue[S](l);
    let se = l[16],
        fe = [];
    for (let ae = 0; ae < se.length; ae += 1) fe[ae] = dn(on(l, se, ae));
    const $ = ae => U(fe[ae], 1, 1, () => {
        fe[ae] = null
    });
    let Q = l[0] && hn();
    return {
        c() {
            ne(e.$$.fragment), t = V(), le && le.c(), s = V(), n = w("div"), r = w("div"), i = w("h1"), a = w("img"), u = V(), f = w("span"), _ = J(d), v = V(), p = w("button"), g = w("i"), b = V(), x && x.c(), A = V(), N = w("div"), B = w("div"), we && we.c(), D = V(), ne(I.$$.fragment), y = V(), P.c(), Y = V(), L = w("button"), G = w("i"), O = V(), R = w("div"), W = w("div"), F = w("img"), Z = V();
            for (let ae = 0; ae < fe.length; ae += 1) fe[ae].c();
            H = V(), Q && Q.c(), this.h()
        },
        l(ae) {
            de(e.$$.fragment, ae), t = M(ae), le && le.l(ae), s = M(ae), n = k(ae, "DIV", {
                id: !0,
                style: !0,
                class: !0
            });
            var pe = E(n);
            r = k(pe, "DIV", {
                class: !0
            });
            var ve = E(r);
            i = k(ve, "H1", {
                class: !0
            });
            var ge = E(i);
            a = k(ge, "IMG", {
                src: !0,
                alt: !0,
                crossorigin: !0,
                class: !0
            }), u = M(ge), f = k(ge, "SPAN", {});
            var Ae = E(f);
            _ = C(Ae, d), Ae.forEach(c), v = M(ge), p = k(ge, "BUTTON", {
                class: !0,
                title: !0,
                "aria-label": !0
            });
            var Ue = E(p);
            g = k(Ue, "I", {
                class: !0
            }), E(g).forEach(c), Ue.forEach(c), b = M(ge), x && x.l(ge), ge.forEach(c), A = M(ve), N = k(ve, "DIV", {
                class: !0
            });
            var We = E(N);
            B = k(We, "DIV", {
                class: !0
            });
            var Pe = E(B);
            we && we.l(Pe), D = M(Pe), de(I.$$.fragment, Pe), y = M(Pe), P.l(Pe), Pe.forEach(c), Y = M(We), L = k(We, "BUTTON", {
                class: !0,
                title: !0
            });
            var Ze = E(L);
            G = k(Ze, "I", {
                class: !0
            }), E(G).forEach(c), Ze.forEach(c), We.forEach(c), ve.forEach(c), O = M(pe), R = k(pe, "DIV", {
                class: !0
            });
            var De = E(R);
            W = k(De, "DIV", {
                class: !0,
                style: !0
            });
            var Ve = E(W);
            F = k(Ve, "IMG", {
                src: !0,
                alt: !0,
                crossorigin: !0,
                class: !0
            }), Ve.forEach(c), Z = M(De);
            for (let je = 0; je < fe.length; je += 1) fe[je].l(De);
            H = M(De), Q && Q.l(De), De.forEach(c), pe.forEach(c), this.h()
        },
        h() {
            Te(a.src, o = l[5]["brand.png"]) || m(a, "src", o), m(a, "alt", "Brand"), m(a, "crossorigin", "anonymous"), m(a, "class", "svelte-asq6ym"), m(g, "class", "gi-help"), m(p, "class", "help svelte-asq6ym"), m(p, "title", "Setting"), m(p, "aria-label", "Setting"), m(i, "class", "wish-title svelte-asq6ym"), m(B, "class", "fates"), m(G, "class", "gi-close"), m(L, "class", "close"), m(L, "title", "Change Banner"), m(N, "class", "budget svelte-asq6ym"), m(r, "class", "top svelte-asq6ym"), Te(F.src, oe = l[5]["brand.png"]) || m(F, "src", oe), m(F, "alt", "Brand"), m(F, "crossorigin", "anonymous"), m(F, "class", "svelte-asq6ym"), m(W, "class", "bg svelte-asq6ym"), m(W, "style", l[3]), m(R, "class", "banner-button svelte-asq6ym"), m(n, "id", "header"), m(n, "style", l[3]), m(n, "class", "svelte-asq6ym")
        },
        m(ae, pe) {
            re(e, ae, pe), z(ae, t, pe), le && le.m(ae, pe), z(ae, s, pe), z(ae, n, pe), h(n, r), h(r, i), h(i, a), h(i, u), h(i, f), h(f, _), h(i, v), h(i, p), h(p, g), h(i, b), x && x.m(i, null), h(r, A), h(r, N), h(N, B), we && we.m(B, null), h(B, D), re(I, B, null), h(B, y), me[S].m(B, null), h(N, Y), h(N, L), h(L, G), h(n, O), h(n, R), h(R, W), h(W, F), h(R, Z);
            for (let ve = 0; ve < fe.length; ve += 1) fe[ve].m(R, null);
            h(R, H), Q && Q.m(R, null), he = !0, _e || (ee = [be(p, "click", l[20]), be(L, "click", l[19])], _e = !0)
        },
        p(ae, [pe]) {
            l = ae, l[1] ? le ? (le.p(l, pe), pe & 2 && j(le, 1)) : (le = un(l), le.c(), j(le, 1), le.m(s.parentNode, s)) : le && (ke(), U(le, 1, 1, () => {
                le = null
            }), Ee()), (!he || pe & 32 && !Te(a.src, o = l[5]["brand.png"])) && m(a, "src", o), (!he || pe & 64) && d !== (d = l[6]("wish.wishTitle") + "") && K(_, d), !l[7] || !l[8] ? x ? x.p(l, pe) : (x = fn(l), x.c(), x.m(i, null)) : x && (x.d(1), x = null), l[0] ? we ? (we.p(l, pe), pe & 1 && j(we, 1)) : (we = cn(l), we.c(), j(we, 1), we.m(B, D)) : we && (ke(), U(we, 1, 1, () => {
                we = null
            }), Ee());
            const ve = {};
            pe & 536877056 && (ve.$$scope = {
                dirty: pe,
                ctx: l
            }), I.$set(ve);
            let ge = S;
            if (S = ce(l), S === ge ? me[S].p(l, pe) : (ke(), U(me[ge], 1, 1, () => {
                    me[ge] = null
                }), Ee(), P = me[S], P ? P.p(l, pe) : (P = me[S] = ue[S](l), P.c()), j(P, 1), P.m(B, null)), (!he || pe & 32 && !Te(F.src, oe = l[5]["brand.png"])) && m(F, "src", oe), (!he || pe & 8) && m(W, "style", l[3]), pe & 327696) {
                se = l[16];
                let Ae;
                for (Ae = 0; Ae < se.length; Ae += 1) {
                    const Ue = on(l, se, Ae);
                    fe[Ae] ? (fe[Ae].p(Ue, pe), j(fe[Ae], 1)) : (fe[Ae] = dn(Ue), fe[Ae].c(), j(fe[Ae], 1), fe[Ae].m(R, H))
                }
                for (ke(), Ae = se.length; Ae < fe.length; Ae += 1) $(Ae);
                Ee()
            }
            l[0] ? Q ? pe & 1 && j(Q, 1) : (Q = hn(), Q.c(), j(Q, 1), Q.m(R, null)) : Q && (ke(), U(Q, 1, 1, () => {
                Q = null
            }), Ee()), (!he || pe & 8) && m(n, "style", l[3])
        },
        i(ae) {
            if (!he) {
                j(e.$$.fragment, ae), j(le), j(we), j(I.$$.fragment, ae), j(P), T || Re(() => {
                    T = Me(r, Ye, {
                        y: -20,
                        duration: 800
                    }), T.start()
                });
                for (let pe = 0; pe < se.length; pe += 1) j(fe[pe]);
                j(Q), X || Re(() => {
                    X = Me(R, l[17], {
                        mobile: l[0]
                    }), X.start()
                }), he = !0
            }
        },
        o(ae) {
            U(e.$$.fragment, ae), U(le), U(we), U(I.$$.fragment, ae), U(P), fe = fe.filter(Boolean);
            for (let pe = 0; pe < fe.length; pe += 1) U(fe[pe]);
            U(Q), he = !1
        },
        d(ae) {
            ie(e, ae), ae && c(t), le && le.d(ae), ae && c(s), ae && c(n), x && x.d(), we && we.d(), ie(I), me[S].d(), qe(fe, ae), Q && Q.d(), _e = !1, jt(ee)
        }
    }
}

function bo(l, e, t) {
    let s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N, B;
    q(l, Bt, G => t(22, r = G)), q(l, ht, G => t(4, i = G)), q(l, Xt, G => t(0, a = G)), q(l, st, G => t(5, o = G)), q(l, Le, G => t(6, u = G)), q(l, Ns, G => t(7, f = G)), q(l, Ht, G => t(8, d = G)), q(l, _t, G => t(9, _ = G)), q(l, pt, G => t(10, v = G)), q(l, qt, G => t(11, p = G)), q(l, dt, G => t(12, g = G)), q(l, is, G => t(13, b = G)), q(l, nt, G => t(14, A = G)), q(l, rt, G => t(15, N = G)), q(l, ot, G => t(16, B = G));
    const D = (G, T) => T.mobile ? Ye(G, {
            x: -20,
            duration: 1e3
        }) : Ye(G, {
            y: -20,
            duration: 1e3
        }),
        I = G => {
            i !== G && (ht.set(G), Se("changebanner"))
        },
        y = () => {
            ds.set("previous"), Nt.set("previous-banner"), Se("prevbanner")
        };
    let S = !1;
    const P = () => {
            Se(S ? "close" : "click"), t(1, S = !S)
        },
        Y = () => {
            if (n) {
                if (document.exitFullscreen) return document ? .exitFullscreen();
                if (document.webkitExitFullscreen) return document ? .webkitExitFullscreen();
                if (document.msExitFullscreen) return document ? .msExitFullscreen()
            } else {
                const G = document.body;
                if (G.requestFullscreen) return G.requestFullscreen();
                if (G.webkitRequestFullscreen) return G.webkitRequestFullscreen();
                if (G.msRequestFullscreen) return G ? .msRequestFullscreen()
            }
        },
        L = G => I(G);
    return l.$$.update = () => {
        l.$$.dirty & 4194305 && t(3, s = a ? `height: ${r}px` : ""), l.$$.dirty & 4194304 && t(2, n = r === window.screen.height)
    }, [a, S, n, s, i, o, u, f, d, _, v, p, g, b, A, N, B, D, I, y, P, Y, r, L]
}
class wo extends ze {
    constructor(e) {
        super(), Ge(this, e, bo, go, Oe, {})
    }
}

function mn(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g;
    return e = new Qn({}), r = new tt({
        props: {
            type: "starglitter"
        }
    }), d = new tt({
        props: {
            type: "stardust"
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), s = w("div"), n = w("div"), ne(r.$$.fragment), i = V(), a = w("span"), o = J(l[7]), u = V(), f = w("div"), ne(d.$$.fragment), _ = V(), v = w("span"), p = J(l[8]), this.h()
        },
        l(b) {
            de(e.$$.fragment, b), t = M(b), s = k(b, "DIV", {
                class: !0
            });
            var A = E(s);
            n = k(A, "DIV", {
                class: !0
            });
            var N = E(n);
            de(r.$$.fragment, N), i = M(N), a = k(N, "SPAN", {
                class: !0
            });
            var B = E(a);
            o = C(B, l[7]), B.forEach(c), N.forEach(c), u = M(A), f = k(A, "DIV", {
                class: !0
            });
            var D = E(f);
            de(d.$$.fragment, D), _ = M(D), v = k(D, "SPAN", {
                class: !0
            });
            var I = E(v);
            p = C(I, l[8]), I.forEach(c), D.forEach(c), A.forEach(c), this.h()
        },
        h() {
            m(a, "class", "svelte-fyne08"), m(n, "class", "starglitter svelte-fyne08"), m(v, "class", "svelte-fyne08"), m(f, "class", "stardust svelte-fyne08"), m(s, "class", "wish svelte-fyne08")
        },
        m(b, A) {
            re(e, b, A), z(b, t, A), z(b, s, A), h(s, n), re(r, n, null), h(n, i), h(n, a), h(a, o), h(s, u), h(s, f), re(d, f, null), h(f, _), h(f, v), h(v, p), g = !0
        },
        p(b, A) {
            (!g || A & 128) && K(o, b[7]), (!g || A & 256) && K(p, b[8])
        },
        i(b) {
            g || (j(e.$$.fragment, b), j(r.$$.fragment, b), j(d.$$.fragment, b), g = !0)
        },
        o(b) {
            U(e.$$.fragment, b), U(r.$$.fragment, b), U(d.$$.fragment, b), g = !1
        },
        d(b) {
            ie(e, b), b && c(t), b && c(s), ie(r), ie(d)
        }
    }
}

function _n(l) {
    let e, t;
    return e = new Bs({
        props: {
            name: l[0],
            style: "transform: translateX(70%) translateY(-80%)"
        }
    }), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n & 1 && (r.name = s[0]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function ko(l) {
    let e, t = l[9]("shop.text") + "",
        s, n, r = l[2] && _n(l);
    return {
        c() {
            r && r.c(), e = V(), s = J(t)
        },
        l(i) {
            r && r.l(i), e = M(i), s = C(i, t)
        },
        m(i, a) {
            r && r.m(i, a), z(i, e, a), z(i, s, a), n = !0
        },
        p(i, a) {
            i[2] ? r ? (r.p(i, a), a & 4 && j(r, 1)) : (r = _n(i), r.c(), j(r, 1), r.m(e.parentNode, e)) : r && (ke(), U(r, 1, 1, () => {
                r = null
            }), Ee()), (!n || a & 512) && t !== (t = i[9]("shop.text") + "") && K(s, t)
        },
        i(i) {
            n || (j(r), n = !0)
        },
        o(i) {
            U(r), n = !1
        },
        d(i) {
            r && r.d(i), i && c(e), i && c(s)
        }
    }
}

function Eo(l) {
    let e = l[9]("inventory.text") + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 512 && e !== (e = s[9]("inventory.text") + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function yo(l) {
    let e = l[9]("history.text") + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n & 512 && e !== (e = s[9]("history.text") + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function pn(l) {
    let e, t, s = l[9]("wish.rollButton", {
            values: {
                count: "\xD71"
            }
        }) + "",
        n, r, i, a, o, u, f, d, _, v;
    return a = new tt({
        props: {
            type: l[4]
        }
    }), {
        c() {
            e = w("button"), t = w("div"), n = J(s), r = V(), i = w("div"), ne(a.$$.fragment), o = V(), u = w("span"), f = J("x 1"), this.h()
        },
        l(p) {
            e = k(p, "BUTTON", {
                class: !0,
                style: !0
            });
            var g = E(e);
            t = k(g, "DIV", {
                class: !0
            });
            var b = E(t);
            n = C(b, s), b.forEach(c), r = M(g), i = k(g, "DIV", {
                class: !0
            });
            var A = E(i);
            de(a.$$.fragment, A), o = M(A), u = k(A, "SPAN", {
                style: !0,
                class: !0
            });
            var N = E(u);
            f = C(N, "x 1"), N.forEach(c), A.forEach(c), g.forEach(c), this.h()
        },
        h() {
            m(t, "class", "top"), te(u, "margin-left", "7px"), m(u, "class", "svelte-fyne08"), ye(u, "red", l[5] < 1 && !l[11]), m(i, "class", "bottom svelte-fyne08"), m(e, "class", "single wish-button svelte-fyne08"), te(e, "background-image", "url(" + l[10]["button.webp"] + ")")
        },
        m(p, g) {
            z(p, e, g), h(e, t), h(t, n), h(e, r), h(e, i), re(a, i, null), h(i, o), h(i, u), h(u, f), d = !0, _ || (v = be(e, "click", l[13]), _ = !0)
        },
        p(p, g) {
            (!d || g & 512) && s !== (s = p[9]("wish.rollButton", {
                values: {
                    count: "\xD71"
                }
            }) + "") && K(n, s);
            const b = {};
            g & 16 && (b.type = p[4]), a.$set(b), g & 2080 && ye(u, "red", p[5] < 1 && !p[11]), (!d || g & 1024) && te(e, "background-image", "url(" + p[10]["button.webp"] + ")")
        },
        i(p) {
            d || (j(a.$$.fragment, p), d = !0)
        },
        o(p) {
            U(a.$$.fragment, p), d = !1
        },
        d(p) {
            p && c(e), ie(a), _ = !1, v()
        }
    }
}

function vn(l) {
    let e, t;
    return {
        c() {
            e = w("span"), t = J("-20%"), this.h()
        },
        l(s) {
            e = k(s, "SPAN", {
                class: !0
            });
            var n = E(e);
            t = C(n, "-20%"), n.forEach(c), this.h()
        },
        h() {
            m(e, "class", "discount svelte-fyne08")
        },
        m(s, n) {
            z(s, e, n), h(e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}

function Ao(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g, b, A = l[9]("wish.rollButton", {
            values: {
                count: "\xD710"
            }
        }) + "",
        N, B, D, I, y, S, P, Y, L, G, T, O = !l[6] && mn(l);
    i = new ps({
        props: {
            $$slots: {
                default: [ko]
            },
            $$scope: {
                ctx: l
            }
        }
    }), i.$on("click", l[23]), o = new ps({
        props: {
            $$slots: {
                default: [Eo]
            },
            $$scope: {
                ctx: l
            }
        }
    }), o.$on("click", l[24]), f = new ps({
        props: {
            $$slots: {
                default: [yo]
            },
            $$scope: {
                ctx: l
            }
        }
    }), f.$on("click", l[25]);
    let R = l[1] !== "beginner" && pn(l),
        W = l[1] === "beginner" && vn();
    return I = new tt({
        props: {
            type: l[4]
        }
    }), {
        c() {
            e = w("div"), t = w("div"), O && O.c(), s = V(), n = w("div"), r = w("div"), ne(i.$$.fragment), a = V(), ne(o.$$.fragment), u = V(), ne(f.$$.fragment), d = V(), _ = w("div"), R && R.c(), v = V(), p = w("button"), W && W.c(), g = V(), b = w("div"), N = J(A), B = V(), D = w("div"), ne(I.$$.fragment), y = V(), S = w("span"), P = J("x "), Y = J(l[3]), this.h()
        },
        l(F) {
            e = k(F, "DIV", {
                id: !0,
                style: !0,
                class: !0
            });
            var oe = E(e);
            t = k(oe, "DIV", {
                class: !0
            });
            var Z = E(t);
            O && O.l(Z), Z.forEach(c), s = M(oe), n = k(oe, "DIV", {
                class: !0
            });
            var H = E(n);
            r = k(H, "DIV", {
                class: !0
            });
            var X = E(r);
            de(i.$$.fragment, X), a = M(X), de(o.$$.fragment, X), u = M(X), de(f.$$.fragment, X), X.forEach(c), d = M(H), _ = k(H, "DIV", {
                class: !0
            });
            var he = E(_);
            R && R.l(he), v = M(he), p = k(he, "BUTTON", {
                class: !0,
                style: !0
            });
            var _e = E(p);
            W && W.l(_e), g = M(_e), b = k(_e, "DIV", {
                class: !0
            });
            var ee = E(b);
            N = C(ee, A), ee.forEach(c), B = M(_e), D = k(_e, "DIV", {
                class: !0
            });
            var le = E(D);
            de(I.$$.fragment, le), y = M(le), S = k(le, "SPAN", {
                style: !0,
                class: !0
            });
            var x = E(S);
            P = C(x, "x "), Y = C(x, l[3]), x.forEach(c), le.forEach(c), _e.forEach(c), he.forEach(c), H.forEach(c), oe.forEach(c), this.h()
        },
        h() {
            m(t, "class", "footer-info svelte-fyne08"), m(r, "class", "left menu-button svelte-fyne08"), m(b, "class", "top"), te(S, "margin-left", "7px"), m(S, "class", "svelte-fyne08"), ye(S, "red", l[5] < 10 && !l[11]), m(D, "class", "bottom svelte-fyne08"), m(p, "class", "ten wish-button svelte-fyne08"), te(p, "background-image", "url(" + l[10]["button.webp"] + ")"), m(_, "class", "right roll-button svelte-fyne08"), m(n, "class", "row svelte-fyne08"), m(e, "id", "footer"), te(e, "width", "100%"), te(e, "height", "100%"), m(e, "class", "svelte-fyne08")
        },
        m(F, oe) {
            z(F, e, oe), h(e, t), O && O.m(t, null), h(e, s), h(e, n), h(n, r), re(i, r, null), h(r, a), re(o, r, null), h(r, u), re(f, r, null), h(n, d), h(n, _), R && R.m(_, null), h(_, v), h(_, p), W && W.m(p, null), h(p, g), h(p, b), h(b, N), h(p, B), h(p, D), re(I, D, null), h(D, y), h(D, S), h(S, P), h(S, Y), L = !0, G || (T = be(p, "click", l[14]), G = !0)
        },
        p(F, [oe]) {
            F[6] ? O && (ke(), U(O, 1, 1, () => {
                O = null
            }), Ee()) : O ? (O.p(F, oe), oe & 64 && j(O, 1)) : (O = mn(F), O.c(), j(O, 1), O.m(t, null));
            const Z = {};
            oe & 134218245 && (Z.$$scope = {
                dirty: oe,
                ctx: F
            }), i.$set(Z);
            const H = {};
            oe & 134218240 && (H.$$scope = {
                dirty: oe,
                ctx: F
            }), o.$set(H);
            const X = {};
            oe & 134218240 && (X.$$scope = {
                dirty: oe,
                ctx: F
            }), f.$set(X), F[1] !== "beginner" ? R ? (R.p(F, oe), oe & 2 && j(R, 1)) : (R = pn(F), R.c(), j(R, 1), R.m(_, v)) : R && (ke(), U(R, 1, 1, () => {
                R = null
            }), Ee()), F[1] === "beginner" ? W || (W = vn(), W.c(), W.m(p, g)) : W && (W.d(1), W = null), (!L || oe & 512) && A !== (A = F[9]("wish.rollButton", {
                values: {
                    count: "\xD710"
                }
            }) + "") && K(N, A);
            const he = {};
            oe & 16 && (he.type = F[4]), I.$set(he), (!L || oe & 8) && K(Y, F[3]), oe & 2080 && ye(S, "red", F[5] < 10 && !F[11]), (!L || oe & 1024) && te(p, "background-image", "url(" + F[10]["button.webp"] + ")")
        },
        i(F) {
            L || (j(O), j(i.$$.fragment, F), j(o.$$.fragment, F), j(f.$$.fragment, F), j(R), j(I.$$.fragment, F), L = !0)
        },
        o(F) {
            U(O), U(i.$$.fragment, F), U(o.$$.fragment, F), U(f.$$.fragment, F), U(R), U(I.$$.fragment, F), L = !1
        },
        d(F) {
            F && c(e), O && O.d(), ie(i), ie(o), ie(f), R && R.d(), W && W.d(), ie(I), G = !1, T()
        }
    }
}

function Io(l, e, t) {
    let s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N, B, D, I;
    q(l, At, R => t(17, f = R)), q(l, ht, R => t(18, d = R)), q(l, ot, R => t(19, _ = R)), q(l, is, R => t(20, v = R)), q(l, rt, R => t(21, p = R)), q(l, nt, R => t(22, g = R)), q(l, Xt, R => t(6, b = R)), q(l, _t, R => t(7, A = R)), q(l, pt, R => t(8, N = R)), q(l, Le, R => t(9, B = R)), q(l, st, R => t(10, D = R)), q(l, qt, R => t(11, I = R));
    let y = [];
    const S = R => (Nt.set(R), ds.set(R), ["inventory", "history"].includes(R) ? Se(R) : R === "shop" ? Se("shopopen") : Se()),
        P = at(),
        Y = () => {
            Se("roll"), P("singleRoll")
        },
        L = () => {
            Se("roll"), P("multiRoll")
        },
        G = () => S("shop"),
        T = () => S("inventory"),
        O = () => S("history");
    return l.$$.update = () => {
        l.$$.dirty & 7340032 && t(5, s = v ? g : p), l.$$.dirty & 1048576 && t(4, n = v ? "acquaint" : "intertwined"), l.$$.dirty & 786432 && t(16, r = _[d]), l.$$.dirty & 65536 && t(1, i = r.type + (isNaN(r.index) ? "" : r.index)), l.$$.dirty & 2 && t(3, a = i === "beginner" ? 8 : 10), l.$$.dirty & 131072 && t(15, o = Jn.filter(({
            version: R
        }) => R ? .toString() === f) || []), l.$$.dirty & 32768 && t(2, u = o.length > 0), l.$$.dirty & 32769 && o.forEach(({
            version: R
        }) => {
            const W = R.toString();
            y.includes(W) || t(0, y = [...y, `outfits-${W}`, `recomended-${W}`])
        })
    }, [y, i, u, a, n, s, b, A, N, B, D, I, S, Y, L, o, r, f, d, _, v, p, g, G, T, O]
}
class Do extends ze {
    constructor(e) {
        super(), Ge(this, e, Io, Ao, Oe, {})
    }
}

function gn(l) {
    let e, t, s, n, r, i = l[12]("shop.insufficient") + "",
        a;
    return {
        c() {
            e = w("br"), t = V(), s = w("br"), n = V(), r = w("span"), a = J(i), this.h()
        },
        l(o) {
            e = k(o, "BR", {}), t = M(o), s = k(o, "BR", {}), n = M(o), r = k(o, "SPAN", {
                class: !0
            });
            var u = E(r);
            a = C(u, i), u.forEach(c), this.h()
        },
        h() {
            m(r, "class", "red")
        },
        m(o, u) {
            z(o, e, u), z(o, t, u), z(o, s, u), z(o, n, u), z(o, r, u), h(r, a)
        },
        p(o, u) {
            u[0] & 4096 && i !== (i = o[12]("shop.insufficient") + "") && K(a, i)
        },
        d(o) {
            o && c(e), o && c(t), o && c(s), o && c(n), o && c(r)
        }
    }
}

function No(l) {
    let e, t, s, n = l[12]("shop.fateNeeded", {
            values: {
                rollQty: `<span class="yellow">${l[2]}</span>`,
                currency: l[12](`shop.item.${l[10]}`)
            }
        }) + "",
        r, i, a, o, u = l[12]("shop.primoNeeded", {
            values: {
                primoPrice: `<span class="${l[3]<l[2]*160?"red":"yellow"}"> ${l[2]*160} </span>`
            }
        }) + "",
        f, d = l[3] < l[2] * 160 && gn(l);
    return {
        c() {
            e = w("div"), t = w("div"), s = new Tt(!1), r = V(), i = w("br"), a = V(), o = new Tt(!1), f = V(), d && d.c(), this.h()
        },
        l(_) {
            e = k(_, "DIV", {
                class: !0
            });
            var v = E(e);
            t = k(v, "DIV", {});
            var p = E(t);
            s = Rt(p, !1), r = M(p), i = k(p, "BR", {}), a = M(p), o = Rt(p, !1), f = M(p), d && d.l(p), p.forEach(c), v.forEach(c), this.h()
        },
        h() {
            s.a = r, o.a = f, m(e, "class", "exchange svelte-1ird0jc")
        },
        m(_, v) {
            z(_, e, v), h(e, t), s.m(n, t), h(t, r), h(t, i), h(t, a), o.m(u, t), h(t, f), d && d.m(t, null)
        },
        p(_, v) {
            v[0] & 5124 && n !== (n = _[12]("shop.fateNeeded", {
                values: {
                    rollQty: `<span class="yellow">${_[2]}</span>`,
                    currency: _[12](`shop.item.${_[10]}`)
                }
            }) + "") && s.p(n), v[0] & 4108 && u !== (u = _[12]("shop.primoNeeded", {
                values: {
                    primoPrice: `<span class="${_[3]<_[2]*160?"red":"yellow"}"> ${_[2]*160} </span>`
                }
            }) + "") && o.p(u), _[3] < _[2] * 160 ? d ? d.p(_, v) : (d = gn(_), d.c(), d.m(t, null)) : d && (d.d(1), d = null)
        },
        d(_) {
            _ && c(e), d && d.d()
        }
    }
}

function bn(l) {
    let e, t;
    return e = new cs({
        props: {
            $$slots: {
                default: [To]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("close", l[30]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 4096 | n[1] & 128 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function To(l) {
    let e = l[12]("wish.result.meteorFailed") + "",
        t;
    return {
        c() {
            t = J(e)
        },
        l(s) {
            t = C(s, e)
        },
        m(s, n) {
            z(s, t, n)
        },
        p(s, n) {
            n[0] & 4096 && e !== (e = s[12]("wish.result.meteorFailed") + "") && K(t, e)
        },
        d(s) {
            s && c(t)
        }
    }
}

function Ro(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N, B, D, I, y = l[12]("wish.result.skip") + "",
        S, P, Y, L, G, T;
    e = new Zt({
        props: {
            title: l[12]("shop.paimonBargains"),
            sfx: !1,
            button: l[11],
            show: l[1],
            $$slots: {
                default: [No]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("cancel", l[16]), e.$on("confirm", l[17]);
    let O = l[9] && bn(l);
    return {
        c() {
            ne(e.$$.fragment), t = V(), O && O.c(), s = V(), n = w("div"), r = w("div"), i = w("video"), o = V(), u = w("video"), d = V(), _ = w("video"), p = V(), g = w("video"), A = V(), N = w("video"), D = V(), I = w("button"), S = J(y), P = V(), Y = w("i"), this.h()
        },
        l(R) {
            de(e.$$.fragment, R), t = M(R), O && O.l(R), s = M(R), n = k(R, "DIV", {
                class: !0,
                style: !0
            });
            var W = E(n);
            r = k(W, "DIV", {
                class: !0
            });
            var F = E(r);
            i = k(F, "VIDEO", {
                src: !0,
                type: !0,
                class: !0
            }), E(i).forEach(c), o = M(F), u = k(F, "VIDEO", {
                src: !0,
                type: !0,
                class: !0
            }), E(u).forEach(c), d = M(F), _ = k(F, "VIDEO", {
                src: !0,
                type: !0,
                class: !0
            }), E(_).forEach(c), p = M(F), g = k(F, "VIDEO", {
                src: !0,
                type: !0,
                class: !0
            }), E(g).forEach(c), A = M(F), N = k(F, "VIDEO", {
                src: !0,
                type: !0,
                class: !0
            }), E(N).forEach(c), D = M(F), I = k(F, "BUTTON", {
                class: !0
            });
            var oe = E(I);
            S = C(oe, y), P = M(oe), Y = k(oe, "I", {
                class: !0
            }), E(Y).forEach(c), oe.forEach(c), F.forEach(c), W.forEach(c), this.h()
        },
        h() {
            i.muted = l[14], Te(i.src, a = l[15]["3star-single.mp4"]) || m(i, "src", a), m(i, "type", "video/mp4"), m(i, "class", "svelte-1ird0jc"), u.muted = l[14], Te(u.src, f = l[15]["4star-single.mp4"]) || m(u, "src", f), m(u, "type", "video/mp4"), m(u, "class", "svelte-1ird0jc"), _.muted = l[14], Te(_.src, v = l[15]["4star.mp4"]) || m(_, "src", v), m(_, "type", "video/mp4"), m(_, "class", "svelte-1ird0jc"), g.muted = l[14], Te(g.src, b = l[15]["5star-single.mp4"]) || m(g, "src", b), m(g, "type", "video/mp4"), m(g, "class", "svelte-1ird0jc"), N.muted = l[14], Te(N.src, B = l[15]["5star.mp4"]) || m(N, "src", B), m(N, "type", "video/mp4"), m(N, "class", "svelte-1ird0jc"), m(Y, "class", "gi-caret-up svelte-1ird0jc"), m(I, "class", "skip svelte-1ird0jc"), m(r, "class", "video svelte-1ird0jc"), m(n, "class", "wish-output svelte-1ird0jc"), te(n, "height", l[13] + "px"), ye(n, "show", l[0])
        },
        m(R, W) {
            re(e, R, W), z(R, t, W), O && O.m(R, W), z(R, s, W), z(R, n, W), h(n, r), h(r, i), l[31](i), h(r, o), h(r, u), l[32](u), h(r, d), h(r, _), l[33](_), h(r, p), h(r, g), l[34](g), h(r, A), h(r, N), l[35](N), h(r, D), h(r, I), h(I, S), h(I, P), h(I, Y), L = !0, G || (T = be(I, "click", l[18]), G = !0)
        },
        p(R, W) {
            const F = {};
            W[0] & 4096 && (F.title = R[12]("shop.paimonBargains")), W[0] & 2048 && (F.button = R[11]), W[0] & 2 && (F.show = R[1]), W[0] & 5132 | W[1] & 128 && (F.$$scope = {
                dirty: W,
                ctx: R
            }), e.$set(F), R[9] ? O ? (O.p(R, W), W[0] & 512 && j(O, 1)) : (O = bn(R), O.c(), j(O, 1), O.m(s.parentNode, s)) : O && (ke(), U(O, 1, 1, () => {
                O = null
            }), Ee()), (!L || W[0] & 16384) && (i.muted = R[14]), (!L || W[0] & 32768 && !Te(i.src, a = R[15]["3star-single.mp4"])) && m(i, "src", a), (!L || W[0] & 16384) && (u.muted = R[14]), (!L || W[0] & 32768 && !Te(u.src, f = R[15]["4star-single.mp4"])) && m(u, "src", f), (!L || W[0] & 16384) && (_.muted = R[14]), (!L || W[0] & 32768 && !Te(_.src, v = R[15]["4star.mp4"])) && m(_, "src", v), (!L || W[0] & 16384) && (g.muted = R[14]), (!L || W[0] & 32768 && !Te(g.src, b = R[15]["5star-single.mp4"])) && m(g, "src", b), (!L || W[0] & 16384) && (N.muted = R[14]), (!L || W[0] & 32768 && !Te(N.src, B = R[15]["5star.mp4"])) && m(N, "src", B), (!L || W[0] & 4096) && y !== (y = R[12]("wish.result.skip") + "") && K(S, y), (!L || W[0] & 8192) && te(n, "height", R[13] + "px"), W[0] & 1 && ye(n, "show", R[0])
        },
        i(R) {
            L || (j(e.$$.fragment, R), j(O), L = !0)
        },
        o(R) {
            U(e.$$.fragment, R), U(O), L = !1
        },
        d(R) {
            ie(e, R), R && c(t), O && O.d(R), R && c(s), R && c(n), l[31](null), l[32](null), l[33](null), l[34](null), l[35](null), G = !1, T()
        }
    }
}

function jo(l, e, t) {
    let s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N;
    q(l, Jt, x => t(24, o = x)), q(l, is, x => t(25, u = x)), q(l, dt, x => t(3, f = x)), q(l, ht, x => t(26, d = x)), q(l, ot, x => t(27, _ = x)), q(l, rt, x => t(28, v = x)), q(l, nt, x => t(29, p = x)), q(l, Le, x => t(12, g = x)), q(l, Bt, x => t(13, b = x)), q(l, Pt, x => t(14, A = x)), q(l, st, x => t(15, N = x));
    let {
        showMeteor: B = !1
    } = e, {
        meteorStar: D = 3
    } = e, {
        singleMeteor: I = !0
    } = e, {
        showConvertModal: y = !1
    } = e, {
        rollCount: S = 0
    } = e, P, Y, L, G, T, O = !1;
    const R = at(),
        W = () => {
            R("cancelModal")
        },
        F = async () => {
            await new Promise((we, ue) => {
                if (f < r * 160) return ue("not enough primogem");
                if (dt.update(me => {
                        const ce = me - r * 160;
                        return kt.set("primogem", ce), ce
                    }), u) {
                    nt.update(me => {
                        const ce = me + r;
                        return kt.set("acquaint", ce), we("ok"), ce
                    });
                    return
                }
                rt.update(me => {
                    const ce = me + r;
                    return kt.set("intertwined", ce), we("ok"), ce
                })
            }), R("confirmModal")
        },
        oe = () => {
            [P, Y, L, G, T].forEach(x => {
                x.load(), x.style.display = "none"
            }), R("skiped")
        },
        Z = (x, we = !0) => {
            let ue = P;
            if (we && x !== 3 && (ue = x === 5 ? G : Y), we || (ue = x === 5 ? T : L), ue.error || isNaN(ue.duration)) return t(9, O = !0), console.error("Can't play Meteor Animation because it cannot be loaded", ue.error), R("endAnimation");
            ue.style.display = "unset", ue.play()
        };
    it(() => {
        [P, Y, L, G, T].forEach(x => {
            x.addEventListener("ended", () => {
                x.style.display = "none", x.load(), R("endAnimation")
            })
        })
    });
    const H = () => t(9, O = !1);

    function X(x) {
        Ke[x ? "unshift" : "push"](() => {
            P = x, t(4, P)
        })
    }

    function he(x) {
        Ke[x ? "unshift" : "push"](() => {
            Y = x, t(5, Y)
        })
    }

    function _e(x) {
        Ke[x ? "unshift" : "push"](() => {
            L = x, t(6, L)
        })
    }

    function ee(x) {
        Ke[x ? "unshift" : "push"](() => {
            G = x, t(7, G)
        })
    }

    function le(x) {
        Ke[x ? "unshift" : "push"](() => {
            T = x, t(8, T)
        })
    }
    return l.$$set = x => {
        "showMeteor" in x && t(0, B = x.showMeteor), "meteorStar" in x && t(19, D = x.meteorStar), "singleMeteor" in x && t(20, I = x.singleMeteor), "showConvertModal" in x && t(1, y = x.showConvertModal), "rollCount" in x && t(21, S = x.rollCount)
    }, l.$$.update = () => {
        l.$$.dirty[0] & 838860800 && t(22, s = u ? p : v), l.$$.dirty[0] & 201326592 && t(23, n = _[d] ? .type === "beginner"), l.$$.dirty[0] & 14680064 && t(2, r = (n && S > 1 ? 8 : S) - s), l.$$.dirty[0] & 12 && t(11, i = f < r * 160 ? "cancel" : "all"), l.$$.dirty[0] & 33554432 && t(10, a = u ? "acquaint" : "intertwined"), l.$$.dirty[0] & 18350081 && B && (o ? R("skiped") : Z(D, I))
    }, [B, y, r, f, P, Y, L, G, T, O, a, i, g, b, A, N, W, F, oe, D, I, S, s, n, o, u, d, _, v, p, H, X, he, _e, ee, le]
}
class Bo extends ze {
    constructor(e) {
        super(), Ge(this, e, jo, Ro, Oe, {
            showMeteor: 0,
            meteorStar: 19,
            singleMeteor: 20,
            showConvertModal: 1,
            rollCount: 21
        }, null, [-1, -1])
    }
}

function wn(l) {
    let e, t, s, n, r, i, a;
    return {
        c() {
            e = w("div"), t = w("div"), s = w("picture"), n = w("img"), this.h()
        },
        l(o) {
            e = k(o, "DIV", {
                style: !0
            });
            var u = E(e);
            t = k(u, "DIV", {
                style: !0
            });
            var f = E(t);
            s = k(f, "PICTURE", {
                class: !0
            });
            var d = E(s);
            n = k(d, "IMG", {
                src: !0,
                alt: !0,
                crossorigin: !0,
                class: !0
            }), d.forEach(c), f.forEach(c), u.forEach(c), this.h()
        },
        h() {
            Te(n.src, r = l[0]) || m(n, "src", r), m(n, "alt", l[1]), m(n, "crossorigin", "anonymous"), m(n, "class", "svelte-1jd7bt1"), m(s, "class", "svelte-1jd7bt1"), te(t, "position", "relative"), te(t, "overflow", "hidden"), te(e, "position", "relative"), te(e, "width", "100%")
        },
        m(o, u) {
            z(o, e, u), h(e, t), h(t, s), h(s, n), i || (a = be(n, "error", l[4]), i = !0)
        },
        p(o, u) {
            u & 1 && !Te(n.src, r = o[0]) && m(n, "src", r), u & 2 && m(n, "alt", o[1])
        },
        d(o) {
            o && c(e), i = !1, a()
        }
    }
}

function So(l) {
    let e, t, s = !l[3] && wn(l);
    return {
        c() {
            e = w("div"), s && s.c(), this.h()
        },
        l(n) {
            e = k(n, "DIV", {
                class: !0,
                style: !0
            });
            var r = E(e);
            s && s.l(r), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", t = "wrapper " + l[2] + " svelte-1jd7bt1"), te(e, "min-height", "100px"), te(e, "width", "100%"), ye(e, "image-error", l[3])
        },
        m(n, r) {
            z(n, e, r), s && s.m(e, null)
        },
        p(n, [r]) {
            n[3] ? s && (s.d(1), s = null) : s ? s.p(n, r) : (s = wn(n), s.c(), s.m(e, null)), r & 4 && t !== (t = "wrapper " + n[2] + " svelte-1jd7bt1") && m(e, "class", t), r & 12 && ye(e, "image-error", n[3])
        },
        i: Ne,
        o: Ne,
        d(n) {
            n && c(e), s && s.d()
        }
    }
}

function Vo(l, e, t) {
    let {
        src: s = ""
    } = e, {
        alt: n = ""
    } = e, {
        wrapperClass: r
    } = e, {
        isError: i = !1
    } = e;
    const a = at(),
        o = () => {
            a("error")
        };
    return l.$$set = u => {
        "src" in u && t(0, s = u.src), "alt" in u && t(1, n = u.alt), "wrapperClass" in u && t(2, r = u.wrapperClass), "isError" in u && t(3, i = u.isError)
    }, [s, n, r, i, o]
}
class hs extends ze {
    constructor(e) {
        super(), Ge(this, e, Vo, So, Oe, {
            src: 0,
            alt: 1,
            wrapperClass: 2,
            isError: 3
        })
    }
}

function Mo(l) {
    let e, t, s = l[2]("wish.banner.novice") + "",
        n, r, i, a = l[5](l[2]("wish.banner.beginner")) + "",
        o, u, f, d, _, v = l[2]("wish.banner.beginnerSet", {
            values: {
                character: l[4]
            }
        }) + "",
        p, g, b, A, N, B, D, I = l[2]("wish.banner.wishDescription") + "",
        y, S, P, Y = l[2]("wish.banner.beginnerNote") + "",
        L, G, T, O, R, W, F, oe, Z, H = l[2]("wish.banner.up") + "",
        X, he, _e, ee, le = l[2](`${l[0].character}.title`) + "",
        x, we, ue, me, ce = l[2]("wish.banner.beginnerChance", {
            values: {
                chances: `${l[6]}/20`
            }
        }) + "",
        se;
    return {
        c() {
            e = w("div"), t = w("div"), n = J(s), r = V(), i = w("h1"), u = V(), f = w("div"), d = w("div"), _ = w("div"), p = J(v), g = V(), b = w("div"), A = w("div"), N = w("i"), B = V(), D = w("p"), y = J(I), S = V(), P = w("div"), L = J(Y), T = V(), O = w("div"), R = w("div"), W = w("span"), F = J(l[4]), oe = V(), Z = w("span"), X = J(H), _e = V(), ee = w("div"), x = J(le), ue = V(), me = w("div"), se = J(ce), this.h()
        },
        l(fe) {
            e = k(fe, "DIV", {
                class: !0
            });
            var $ = E(e);
            t = k($, "DIV", {
                class: !0
            });
            var Q = E(t);
            n = C(Q, s), Q.forEach(c), r = M($), i = k($, "H1", {
                class: !0
            });
            var ae = E(i);
            ae.forEach(c), u = M($), f = k($, "DIV", {
                class: !0
            });
            var pe = E(f);
            d = k(pe, "DIV", {
                class: !0
            });
            var ve = E(d);
            _ = k(ve, "DIV", {
                class: !0
            });
            var ge = E(_);
            p = C(ge, v), ge.forEach(c), g = M(ve), b = k(ve, "DIV", {
                class: !0
            });
            var Ae = E(b);
            A = k(Ae, "DIV", {
                class: !0
            });
            var Ue = E(A);
            N = k(Ue, "I", {
                class: !0
            }), E(N).forEach(c), Ue.forEach(c), B = M(Ae), D = k(Ae, "P", {
                class: !0
            });
            var We = E(D);
            y = C(We, I), We.forEach(c), Ae.forEach(c), S = M(ve), P = k(ve, "DIV", {
                class: !0
            });
            var Pe = E(P);
            L = C(Pe, Y), Pe.forEach(c), ve.forEach(c), pe.forEach(c), T = M($), O = k($, "DIV", {
                class: !0
            });
            var Ze = E(O);
            R = k(Ze, "DIV", {
                class: !0,
                style: !0
            });
            var De = E(R);
            W = k(De, "SPAN", {
                class: !0
            });
            var Ve = E(W);
            F = C(Ve, l[4]), Ve.forEach(c), oe = M(De), Z = k(De, "SPAN", {
                class: !0
            });
            var je = E(Z);
            X = C(je, H), je.forEach(c), De.forEach(c), Ze.forEach(c), _e = M($), ee = k($, "DIV", {
                class: !0
            });
            var He = E(ee);
            x = C(He, le), He.forEach(c), ue = M($), me = k($, "DIV", {
                class: !0
            });
            var lt = E(me);
            se = C(lt, ce), lt.forEach(c), $.forEach(c), this.h()
        },
        h() {
            m(t, "class", "top svelte-1w0zyjv"), m(i, "class", "card-stroke svelte-1w0zyjv"), m(_, "class", "set svelte-1w0zyjv"), m(N, "class", "gi-primo-star"), m(A, "class", "icon svelte-1w0zyjv"), m(D, "class", "text svelte-1w0zyjv"), m(b, "class", "desc svelte-1w0zyjv"), m(P, "class", "note"), m(d, "class", "content"), m(f, "class", "info svelte-1w0zyjv"), m(W, "class", "svelte-1w0zyjv"), m(Z, "class", "up svelte-1w0zyjv"), m(R, "class", "charName svelte-1w0zyjv"), te(R, "position", "relative"), m(O, "class", "featured svelte-1w0zyjv"), m(ee, "class", "char-title svelte-1w0zyjv"), m(me, "class", "chances svelte-1w0zyjv"), m(e, "class", "frame-content svelte-1w0zyjv"), ye(e, "error", l[1])
        },
        m(fe, $) {
            z(fe, e, $), h(e, t), h(t, n), h(e, r), h(e, i), i.innerHTML = a, h(e, u), h(e, f), h(f, d), h(d, _), h(_, p), h(d, g), h(d, b), h(b, A), h(A, N), h(b, B), h(b, D), h(D, y), h(d, S), h(d, P), h(P, L), l[7](f), h(e, T), h(e, O), h(O, R), h(R, W), h(W, F), h(R, oe), h(R, Z), h(Z, X), h(e, _e), h(e, ee), h(ee, x), h(e, ue), h(e, me), h(me, se)
        },
        p(fe, [$]) {
            $ & 4 && s !== (s = fe[2]("wish.banner.novice") + "") && K(n, s), $ & 4 && a !== (a = fe[5](fe[2]("wish.banner.beginner")) + "") && (i.innerHTML = a), $ & 20 && v !== (v = fe[2]("wish.banner.beginnerSet", {
                values: {
                    character: fe[4]
                }
            }) + "") && K(p, v), $ & 4 && I !== (I = fe[2]("wish.banner.wishDescription") + "") && K(y, I), $ & 4 && Y !== (Y = fe[2]("wish.banner.beginnerNote") + "") && K(L, Y), $ & 16 && K(F, fe[4]), $ & 4 && H !== (H = fe[2]("wish.banner.up") + "") && K(X, H), $ & 5 && le !== (le = fe[2](`${fe[0].character}.title`) + "") && K(x, le), $ & 4 && ce !== (ce = fe[2]("wish.banner.beginnerChance", {
                values: {
                    chances: `${fe[6]}/20`
                }
            }) + "") && K(se, ce), $ & 2 && ye(e, "error", fe[1])
        },
        i(fe) {
            o || Re(() => {
                o = Me(i, Ye, {
                    x: 10,
                    duration: 700
                }), o.start()
            }), G || Re(() => {
                G = Me(f, Ye, {
                    x: 15,
                    duration: 700
                }), G.start()
            }), he || Re(() => {
                he = Me(O, Ye, {
                    x: 10,
                    duration: 700
                }), he.start()
            }), we || Re(() => {
                we = Me(ee, Ye, {
                    x: 10,
                    duration: 700
                }), we.start()
            })
        },
        o: Ne,
        d(fe) {
            fe && c(e), l[7](null)
        }
    }
}

function zo(l, e, t) {
    let s, n;
    q(l, Le, d => t(2, n = d));
    let {
        character: r = ""
    } = e, {
        isError: i = !1
    } = e;
    const a = d => {
            const _ = d.split(" ");
            return `${_[0]} <span class="geo"> ${_.slice(1).join(" ")}</span>`
        },
        o = 20 - gs.get();
    let u;
    it(() => {
        It(u, {
            sizeAutoCapable: !1,
            className: "os-theme-light",
            scrollbars: {
                visibility: "hidden"
            }
        })
    });

    function f(d) {
        Ke[d ? "unshift" : "push"](() => {
            u = d, t(3, u)
        })
    }
    return l.$$set = d => {
        "character" in d && t(0, r = d.character), "isError" in d && t(1, i = d.isError)
    }, l.$$.update = () => {
        l.$$.dirty & 5 && t(4, s = n(`${r.character}.name`))
    }, [r, i, n, u, s, a, o, f]
}
class Go extends ze {
    constructor(e) {
        super(), Ge(this, e, zo, Mo, Oe, {
            character: 0,
            isError: 1
        })
    }
}

function kn(l, e, t) {
    const s = l.slice();
    return s[8] = e[t], s
}

function En(l) {
    let e, t, s, n = l[1](`${l[8]}.name`) + "",
        r, i, a, o = l[1](`${l[8]}.title`) + "",
        u, f;
    return {
        c() {
            e = w("div"), t = w("div"), s = w("div"), r = J(n), i = V(), a = w("div"), u = J(o), this.h()
        },
        l(d) {
            e = k(d, "DIV", {
                class: !0
            });
            var _ = E(e);
            t = k(_, "DIV", {
                class: !0
            });
            var v = E(t);
            s = k(v, "DIV", {
                class: !0
            });
            var p = E(s);
            r = C(p, n), p.forEach(c), i = M(v), a = k(v, "DIV", {
                class: !0
            });
            var g = E(a);
            u = C(g, o), g.forEach(c), v.forEach(c), _.forEach(c), this.h()
        },
        h() {
            m(s, "class", "item-name svelte-12ald68"), m(a, "class", "char-title svelte-12ald68"), m(t, "class", "group-content svelte-12ald68"), m(e, "class", "group " + l[8] + " svelte-12ald68")
        },
        m(d, _) {
            z(d, e, _), h(e, t), h(t, s), h(s, r), h(t, i), h(t, a), h(a, u)
        },
        p(d, _) {
            _ & 2 && n !== (n = d[1](`${d[8]}.name`) + "") && K(r, n), _ & 2 && o !== (o = d[1](`${d[8]}.title`) + "") && K(u, o)
        },
        i(d) {
            f || Re(() => {
                f = Me(e, Ye, {
                    x: 10,
                    duration: 700
                }), f.start()
            })
        },
        o: Ne,
        d(d) {
            d && c(e)
        }
    }
}

function Oo(l) {
    let e, t, s = l[1]("wish.banner.standard") + "",
        n, r, i, a = l[5](l[1]("wish.banner.name.wanderlust")) + "",
        o, u, f, d, _, v = l[1]("wish.banner.standard") + "",
        p, g, b, A, N, B, D, I = l[1]("wish.banner.wishDescription") + "",
        y, S, P, Y = l[1]("wish.banner.standardNote") + "",
        L, G, T = l[1]("wish.banner.viewDetails") + "",
        O, R, W, F, oe, Z, H, X = l[1](l[4]) + "",
        he, _e, ee, le = l[1]("wish.banner.etc") + "",
        x, we, ue, me = l[1]("wish.banner.allWeaponTypes") + "",
        ce, se, fe = l[3],
        $ = [];
    for (let Q = 0; Q < fe.length; Q += 1) $[Q] = En(kn(l, fe, Q));
    return {
        c() {
            e = w("div"), t = w("div"), n = J(s), r = V(), i = w("h1"), u = V(), f = w("div"), d = w("div"), _ = w("div"), p = J(v), g = V(), b = w("div"), A = w("div"), N = w("i"), B = V(), D = w("div"), y = J(I), S = V(), P = w("div"), L = J(Y), G = V(), O = J(T), W = V();
            for (let Q = 0; Q < $.length; Q += 1) $[Q].c();
            F = V(), oe = w("div"), Z = w("div"), H = w("div"), he = J(X), _e = V(), ee = w("span"), x = J(le), we = V(), ue = w("div"), ce = J(me), this.h()
        },
        l(Q) {
            e = k(Q, "DIV", {
                class: !0
            });
            var ae = E(e);
            t = k(ae, "DIV", {
                class: !0
            });
            var pe = E(t);
            n = C(pe, s), pe.forEach(c), r = M(ae), i = k(ae, "H1", {
                class: !0
            });
            var ve = E(i);
            ve.forEach(c), u = M(ae), f = k(ae, "DIV", {
                class: !0
            });
            var ge = E(f);
            d = k(ge, "DIV", {
                class: !0
            });
            var Ae = E(d);
            _ = k(Ae, "DIV", {
                class: !0
            });
            var Ue = E(_);
            p = C(Ue, v), Ue.forEach(c), g = M(Ae), b = k(Ae, "DIV", {
                class: !0
            });
            var We = E(b);
            A = k(We, "DIV", {
                class: !0
            });
            var Pe = E(A);
            N = k(Pe, "I", {
                class: !0
            }), E(N).forEach(c), Pe.forEach(c), B = M(We), D = k(We, "DIV", {
                class: !0
            });
            var Ze = E(D);
            y = C(Ze, I), Ze.forEach(c), We.forEach(c), S = M(Ae), P = k(Ae, "DIV", {
                class: !0
            });
            var De = E(P);
            L = C(De, Y), G = M(De), O = C(De, T), De.forEach(c), Ae.forEach(c), ge.forEach(c), W = M(ae);
            for (let gt = 0; gt < $.length; gt += 1) $[gt].l(ae);
            F = M(ae), oe = k(ae, "DIV", {
                class: !0
            });
            var Ve = E(oe);
            Z = k(Ve, "DIV", {
                class: !0
            });
            var je = E(Z);
            H = k(je, "DIV", {
                class: !0
            });
            var He = E(H);
            he = C(He, X), _e = M(He), ee = k(He, "SPAN", {
                class: !0
            });
            var lt = E(ee);
            x = C(lt, le), lt.forEach(c), He.forEach(c), we = M(je), ue = k(je, "DIV", {
                class: !0
            });
            var Qe = E(ue);
            ce = C(Qe, me), Qe.forEach(c), je.forEach(c), Ve.forEach(c), ae.forEach(c), this.h()
        },
        h() {
            m(t, "class", "top bg-wanderlust svelte-12ald68"), m(i, "class", "card-stroke svelte-12ald68"), m(_, "class", "set card-stroke svelte-12ald68"), m(N, "class", "gi-primo-star"), m(A, "class", "icon svelte-12ald68"), m(D, "class", "text svelte-12ald68"), m(b, "class", "desc svelte-12ald68"), m(P, "class", "note card-stroke"), m(d, "class", "content"), m(f, "class", "info svelte-12ald68"), m(ee, "class", "svelte-12ald68"), m(H, "class", "item-name svelte-12ald68"), m(ue, "class", "all svelte-12ald68"), m(Z, "class", "group-content svelte-12ald68"), m(oe, "class", "group skyward svelte-12ald68"), m(e, "class", "frame-content svelte-12ald68"), ye(e, "old", l[2])
        },
        m(Q, ae) {
            z(Q, e, ae), h(e, t), h(t, n), h(e, r), h(e, i), i.innerHTML = a, h(e, u), h(e, f), h(f, d), h(d, _), h(_, p), h(d, g), h(d, b), h(b, A), h(A, N), h(b, B), h(b, D), h(D, y), h(d, S), h(d, P), h(P, L), h(P, G), h(P, O), l[7](f), h(e, W);
            for (let pe = 0; pe < $.length; pe += 1) $[pe].m(e, null);
            h(e, F), h(e, oe), h(oe, Z), h(Z, H), h(H, he), h(H, _e), h(H, ee), h(ee, x), h(Z, we), h(Z, ue), h(ue, ce)
        },
        p(Q, [ae]) {
            if (ae & 2 && s !== (s = Q[1]("wish.banner.standard") + "") && K(n, s), ae & 2 && a !== (a = Q[5](Q[1]("wish.banner.name.wanderlust")) + "") && (i.innerHTML = a), ae & 2 && v !== (v = Q[1]("wish.banner.standard") + "") && K(p, v), ae & 2 && I !== (I = Q[1]("wish.banner.wishDescription") + "") && K(y, I), ae & 2 && Y !== (Y = Q[1]("wish.banner.standardNote") + "") && K(L, Y), ae & 2 && T !== (T = Q[1]("wish.banner.viewDetails") + "") && K(O, T), ae & 10) {
                fe = Q[3];
                let pe;
                for (pe = 0; pe < fe.length; pe += 1) {
                    const ve = kn(Q, fe, pe);
                    $[pe] ? ($[pe].p(ve, ae), j($[pe], 1)) : ($[pe] = En(ve), $[pe].c(), j($[pe], 1), $[pe].m(e, F))
                }
                for (; pe < $.length; pe += 1) $[pe].d(1);
                $.length = fe.length
            }
            ae & 2 && X !== (X = Q[1](Q[4]) + "") && K(he, X), ae & 2 && le !== (le = Q[1]("wish.banner.etc") + "") && K(x, le), ae & 2 && me !== (me = Q[1]("wish.banner.allWeaponTypes") + "") && K(ce, me)
        },
        i(Q) {
            o || Re(() => {
                o = Me(i, Ye, {
                    x: 10,
                    duration: 700
                }), o.start()
            }), R || Re(() => {
                R = Me(f, Ye, {
                    x: 15,
                    duration: 700
                }), R.start()
            });
            for (let ae = 0; ae < fe.length; ae += 1) j($[ae]);
            se || Re(() => {
                se = Me(oe, Ye, {
                    x: 10,
                    duration: 700
                }), se.start()
            })
        },
        o: Ne,
        d(Q) {
            Q && c(e), l[7](null), qe($, Q)
        }
    }
}

function Po(l, e, t) {
    let s;
    q(l, Le, d => t(1, s = d));
    let {
        data: n = {}
    } = e;
    const r = n.character.name === "wanderlust-invocation-1",
        i = r ? ["jean", "diluc"] : ["qiqi", "mona", "keqing"],
        a = r ? "skyward-blade" : "skyward-spine",
        o = d => {
            const _ = r ? "old" : "wanderlust-flat",
                v = d.split(" ");
            return `${v[0]} <span class="${_}"> ${v.slice(1).join(" ")}</span>`
        };
    let u;
    it(() => {
        It(u, {
            sizeAutoCapable: !1,
            className: "os-theme-light",
            scrollbars: {
                visibility: "hidden"
            }
        })
    });

    function f(d) {
        Ke[d ? "unshift" : "push"](() => {
            u = d, t(0, u)
        })
    }
    return l.$$set = d => {
        "data" in d && t(6, n = d.data)
    }, [u, s, r, i, a, o, n, f]
}
class Wo extends ze {
    constructor(e) {
        super(), Ge(this, e, Po, Oo, Oe, {
            data: 6
        })
    }
}

function Uo(l) {
    let e, t, s = l[3]("wish.banner.events") + "",
        n, r, i = l[0] ? l[8] === "ja-JP" ? "2" : "\u2014 2" : "",
        a, o, u, f, d = l[9](l[7]) + "",
        _, v, p, g, b, A = l[3]("wish.banner.probIncreased") + "",
        N, B, D, I, y, S, P, Y = l[3]("wish.banner.wishDescription") + "",
        L, G, T, O, R = l[3]("wish.banner.eventNote") + "",
        W, F, oe = l[3]("wish.banner.viewDetails") + "",
        Z, H, X, he, _e, ee, le = l[3](`${l[1]}.name`) + "",
        x, we, ue, me = l[3]("wish.banner.up") + "",
        ce, se, fe, $ = l[3](`${l[1]}.title`) + "",
        Q, ae, pe;
    return {
        c() {
            e = w("div"), t = w("div"), n = J(s), r = V(), a = J(i), u = V(), f = w("h1"), v = V(), p = w("div"), g = w("div"), b = w("div"), N = J(A), B = V(), D = w("div"), I = w("div"), y = w("i"), S = V(), P = w("div"), L = J(Y), T = V(), O = w("div"), W = J(R), F = V(), Z = J(oe), X = V(), he = w("div"), _e = w("div"), ee = w("span"), x = J(le), we = V(), ue = w("span"), ce = J(me), se = V(), fe = w("div"), Q = J($), this.h()
        },
        l(ve) {
            e = k(ve, "DIV", {
                class: !0
            });
            var ge = E(e);
            t = k(ge, "DIV", {
                class: !0
            });
            var Ae = E(t);
            n = C(Ae, s), r = M(Ae), a = C(Ae, i), Ae.forEach(c), u = M(ge), f = k(ge, "H1", {
                class: !0
            });
            var Ue = E(f);
            Ue.forEach(c), v = M(ge), p = k(ge, "DIV", {
                class: !0
            });
            var We = E(p);
            g = k(We, "DIV", {
                class: !0
            });
            var Pe = E(g);
            b = k(Pe, "DIV", {
                class: !0
            });
            var Ze = E(b);
            N = C(Ze, A), Ze.forEach(c), B = M(Pe), D = k(Pe, "DIV", {
                class: !0,
                style: !0
            });
            var De = E(D);
            I = k(De, "DIV", {
                class: !0
            });
            var Ve = E(I);
            y = k(Ve, "I", {
                class: !0
            }), E(y).forEach(c), Ve.forEach(c), S = M(De), P = k(De, "DIV", {
                class: !0
            });
            var je = E(P);
            L = C(je, Y), je.forEach(c), De.forEach(c), T = M(Pe), O = k(Pe, "DIV", {
                class: !0
            });
            var He = E(O);
            W = C(He, R), F = M(He), Z = C(He, oe), He.forEach(c), Pe.forEach(c), We.forEach(c), X = M(ge), he = k(ge, "DIV", {
                class: !0,
                style: !0
            });
            var lt = E(he);
            _e = k(lt, "DIV", {
                class: !0
            });
            var Qe = E(_e);
            ee = k(Qe, "SPAN", {
                class: !0
            });
            var gt = E(ee);
            x = C(gt, le), gt.forEach(c), we = M(Qe), ue = k(Qe, "SPAN", {
                class: !0
            });
            var Dt = E(ue);
            ce = C(Dt, me), Dt.forEach(c), Qe.forEach(c), se = M(lt), fe = k(lt, "DIV", {
                class: !0
            });
            var Lt = E(fe);
            Q = C(Lt, $), Lt.forEach(c), lt.forEach(c), ge.forEach(c), this.h()
        },
        h() {
            m(t, "class", o = "top bg-" + l[5] + " svelte-1vc59b5"), m(f, "class", "card-stroke svelte-1vc59b5"), m(b, "class", "set card-stroke svelte-1vc59b5"), m(y, "class", "gi-primo-star"), m(I, "class", "icon svelte-1vc59b5"), m(P, "class", "text svelte-1vc59b5"), m(D, "class", G = "desc bg-" + l[5] + " svelte-1vc59b5"), te(D, "opacity", "90%"), m(O, "class", "note card-stroke"), m(g, "class", "content svelte-1vc59b5"), m(p, "class", "info svelte-1vc59b5"), m(ee, "class", "svelte-1vc59b5"), m(ue, "class", "up svelte-1vc59b5"), m(_e, "class", "char-name svelte-1vc59b5"), m(fe, "class", "char-title svelte-1vc59b5"), m(he, "class", "character svelte-1vc59b5"), m(he, "style", ae = "" + (l[6] + $t(l[2]))), m(e, "class", "frame-content svelte-1vc59b5")
        },
        m(ve, ge) {
            z(ve, e, ge), h(e, t), h(t, n), h(t, r), h(t, a), h(e, u), h(e, f), f.innerHTML = d, h(e, v), h(e, p), h(p, g), h(g, b), h(b, N), h(g, B), h(g, D), h(D, I), h(I, y), h(D, S), h(D, P), h(P, L), h(g, T), h(g, O), h(O, W), h(O, F), h(O, Z), l[12](p), h(e, X), h(e, he), h(he, _e), h(_e, ee), h(ee, x), h(_e, we), h(_e, ue), h(ue, ce), h(he, se), h(he, fe), h(fe, Q)
        },
        p(ve, [ge]) {
            ge & 8 && s !== (s = ve[3]("wish.banner.events") + "") && K(n, s), ge & 257 && i !== (i = ve[0] ? ve[8] === "ja-JP" ? "2" : "\u2014 2" : "") && K(a, i), ge & 32 && o !== (o = "top bg-" + ve[5] + " svelte-1vc59b5") && m(t, "class", o), ge & 128 && d !== (d = ve[9](ve[7]) + "") && (f.innerHTML = d), ge & 8 && A !== (A = ve[3]("wish.banner.probIncreased") + "") && K(N, A), ge & 8 && Y !== (Y = ve[3]("wish.banner.wishDescription") + "") && K(L, Y), ge & 32 && G !== (G = "desc bg-" + ve[5] + " svelte-1vc59b5") && m(D, "class", G), ge & 8 && R !== (R = ve[3]("wish.banner.eventNote") + "") && K(W, R), ge & 8 && oe !== (oe = ve[3]("wish.banner.viewDetails") + "") && K(Z, oe), ge & 10 && le !== (le = ve[3](`${ve[1]}.name`) + "") && K(x, le), ge & 8 && me !== (me = ve[3]("wish.banner.up") + "") && K(ce, me), ge & 10 && $ !== ($ = ve[3](`${ve[1]}.title`) + "") && K(Q, $), ge & 68 && ae !== (ae = "" + (ve[6] + $t(ve[2]))) && m(he, "style", ae)
        },
        i(ve) {
            _ || Re(() => {
                _ = Me(f, Ye, {
                    x: 15,
                    duration: 700
                }), _.start()
            }), H || Re(() => {
                H = Me(p, Ye, {
                    x: 15,
                    duration: 700
                }), H.start()
            }), pe || Re(() => {
                pe = Me(he, Ye, {
                    x: 10,
                    duration: 700
                }), pe.start()
            })
        },
        o: Ne,
        d(ve) {
            ve && c(e), l[12](null)
        }
    }
}

function Yo(l, e, t) {
    let s, n, r, i, a;
    q(l, Le, A => t(3, i = A)), q(l, Wt, A => t(8, a = A));
    let {
        data: o = {}
    } = e, {
        event2: u = !1
    } = e;
    const f = A => A.split("-").slice(0, -1).join("-");
    let d, _, v;
    const p = A => {
        const N = A.split(" ");
        return `<span class="${n}-flat">${N[0]}</span> ${N.slice(1).join(" ")}`
    };
    let g;
    it(() => {
        It(g, {
            sizeAutoCapable: !1,
            className: "os-theme-light",
            scrollbars: {
                visibility: "hidden"
            }
        })
    });

    function b(A) {
        Ke[A ? "unshift" : "push"](() => {
            g = A, t(4, g)
        })
    }
    return l.$$set = A => {
        "data" in A && t(10, o = A.data), "event2" in A && t(0, u = A.event2)
    }, l.$$.update = () => {
        l.$$.dirty & 1024 && t(1, {
            character: d,
            name: _,
            textOffset: v
        } = o, d, (t(11, _), t(10, o)), (t(2, v), t(10, o))), l.$$.dirty & 2056 && t(7, s = i(`wish.banner.name.${f(_)}`, {
            default: "UnReleased Banner"
        })), l.$$.dirty & 2 && t(5, n = lr.find(({
            name: A
        }) => A === d).vision), l.$$.dirty & 4 && t(6, r = `--text-width: calc(${v?.w||30} / 100 * var(--content-width));`)
    }, [u, d, v, i, g, n, r, s, a, p, o, _, b]
}
class Zo extends ze {
    constructor(e) {
        super(), Ge(this, e, Yo, Uo, Oe, {
            data: 10,
            event2: 0
        })
    }
}

function yn(l) {
    let e, t = l[0]("wish.epitomizedPath.courseSetFor", {
            values: {
                selectedCourse: l[0](l[1].name)
            }
        }) + "",
        s;
    return {
        c() {
            e = w("div"), s = J(t), this.h()
        },
        l(n) {
            e = k(n, "DIV", {
                class: !0
            });
            var r = E(e);
            s = C(r, t), r.forEach(c), this.h()
        },
        h() {
            m(e, "class", "selected svelte-1jz8d8q"), ye(e, "fill", l[2] === 2)
        },
        m(n, r) {
            z(n, e, r), h(e, s)
        },
        p(n, r) {
            r & 3 && t !== (t = n[0]("wish.epitomizedPath.courseSetFor", {
                values: {
                    selectedCourse: n[0](n[1].name)
                }
            }) + "") && K(s, t), r & 4 && ye(e, "fill", n[2] === 2)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Lo(l) {
    let e, t, s = l[0]("wish.banner.weapons") + "",
        n, r, i, a = l[7](l[0]("wish.banner.name.epitome-invocation")) + "",
        o, u, f, d, _ = l[0]("wish.banner.probIncreased") + "",
        v, p, g, b, A, N, B, D = l[0]("wish.banner.wishDescription") + "",
        I, y, S, P = l[0]("wish.banner.viewDetails") + "",
        Y, L, G, T, O, R, W = l[0](`${l[3][0].name}`) + "",
        F, oe, Z, H = l[0]("wish.banner.up") + "",
        X, he, _e, ee = l[0](`${l[3][1].name}`) + "",
        le, x, we, ue, me, ce, se = l[0](`${l[4][0]}`) + "",
        fe, $, Q, ae, pe = l[0]("wish.banner.etc") + "",
        ve, ge, Ae, Ue = l[0]("wish.banner.up") + "",
        We, Pe, Ze, De = l[1].name && yn(l);
    return {
        c() {
            e = w("div"), t = w("div"), n = J(s), r = V(), i = w("h1"), u = V(), f = w("div"), d = w("div"), v = J(_), p = V(), g = w("div"), b = w("div"), A = w("i"), N = V(), B = w("div"), I = J(D), y = V(), S = w("div"), Y = J(P), G = V(), T = w("div"), O = w("div"), R = w("span"), F = J(W), oe = V(), Z = w("span"), X = J(H), he = V(), _e = w("div"), le = J(ee), we = V(), ue = w("div"), me = w("div"), ce = w("span"), fe = J(se), $ = J(","), Q = V(), ae = w("span"), ve = J(pe), ge = V(), Ae = w("span"), We = J(Ue), Ze = V(), De && De.c(), this.h()
        },
        l(Ve) {
            e = k(Ve, "DIV", {
                class: !0
            });
            var je = E(e);
            t = k(je, "DIV", {
                class: !0
            });
            var He = E(t);
            n = C(He, s), He.forEach(c), r = M(je), i = k(je, "H1", {
                class: !0
            });
            var lt = E(i);
            lt.forEach(c), u = M(je), f = k(je, "DIV", {
                class: !0
            });
            var Qe = E(f);
            d = k(Qe, "DIV", {
                class: !0
            });
            var gt = E(d);
            v = C(gt, _), gt.forEach(c), p = M(Qe), g = k(Qe, "DIV", {
                class: !0,
                style: !0
            });
            var Dt = E(g);
            b = k(Dt, "DIV", {
                class: !0
            });
            var Lt = E(b);
            A = k(Lt, "I", {
                class: !0
            }), E(A).forEach(c), Lt.forEach(c), N = M(Dt), B = k(Dt, "DIV", {
                class: !0
            });
            var Ss = E(B);
            I = C(Ss, D), Ss.forEach(c), Dt.forEach(c), y = M(Qe), S = k(Qe, "DIV", {
                class: !0
            });
            var Vs = E(S);
            Y = C(Vs, P), Vs.forEach(c), Qe.forEach(c), G = M(je), T = k(je, "DIV", {
                class: !0,
                style: !0
            });
            var Qt = E(T);
            O = k(Qt, "DIV", {
                class: !0
            });
            var Kt = E(O);
            R = k(Kt, "SPAN", {
                class: !0
            });
            var Ms = E(R);
            F = C(Ms, W), Ms.forEach(c), oe = M(Kt), Z = k(Kt, "SPAN", {
                class: !0
            });
            var zs = E(Z);
            X = C(zs, H), zs.forEach(c), Kt.forEach(c), he = M(Qt), _e = k(Qt, "DIV", {
                class: !0
            });
            var Gs = E(_e);
            le = C(Gs, ee), Gs.forEach(c), Qt.forEach(c), we = M(je), ue = k(je, "DIV", {
                class: !0,
                style: !0
            });
            var Os = E(ue);
            me = k(Os, "DIV", {
                class: !0
            });
            var Vt = E(me);
            ce = k(Vt, "SPAN", {
                class: !0
            });
            var ms = E(ce);
            fe = C(ms, se), $ = C(ms, ","), ms.forEach(c), Q = M(Vt), ae = k(Vt, "SPAN", {
                class: !0
            });
            var Ps = E(ae);
            ve = C(Ps, pe), Ps.forEach(c), ge = M(Vt), Ae = k(Vt, "SPAN", {
                class: !0
            });
            var Ws = E(Ae);
            We = C(Ws, Ue), Ws.forEach(c), Vt.forEach(c), Os.forEach(c), Ze = M(je), De && De.l(je), je.forEach(c), this.h()
        },
        h() {
            m(t, "class", "top bg-epitome svelte-1jz8d8q"), m(i, "class", "svelte-1jz8d8q"), m(d, "class", "set card-stroke svelte-1jz8d8q"), m(A, "class", "gi-primo-star"), m(b, "class", "icon svelte-1jz8d8q"), m(B, "class", "text svelte-1jz8d8q"), m(g, "class", "desc bg-epitome  svelte-1jz8d8q"), te(g, "opacity", "90%"), m(S, "class", "note card-stroke svelte-1jz8d8q"), m(f, "class", "info svelte-1jz8d8q"), m(R, "class", "svelte-1jz8d8q"), m(Z, "class", "up svelte-1jz8d8q"), m(O, "class", "weapon-name first-wp svelte-1jz8d8q"), m(_e, "class", "weapon-name second-wp svelte-1jz8d8q"), m(T, "class", "featured svelte-1jz8d8q"), m(T, "style", "" + (l[6] + $t(l[5] ? .featured))), m(ce, "class", "svelte-1jz8d8q"), m(ae, "class", "etc svelte-1jz8d8q"), m(Ae, "class", "up svelte-1jz8d8q"), m(me, "class", "weapon-name svelte-1jz8d8q"), m(ue, "class", "rateup svelte-1jz8d8q"), m(ue, "style", $t(l[5] ? .rateup)), m(e, "class", "frame-content svelte-1jz8d8q")
        },
        m(Ve, je) {
            z(Ve, e, je), h(e, t), h(t, n), h(e, r), h(e, i), i.innerHTML = a, h(e, u), h(e, f), h(f, d), h(d, v), h(f, p), h(f, g), h(g, b), h(b, A), h(g, N), h(g, B), h(B, I), h(f, y), h(f, S), h(S, Y), h(e, G), h(e, T), h(T, O), h(O, R), h(R, F), h(O, oe), h(O, Z), h(Z, X), h(T, he), h(T, _e), h(_e, le), h(e, we), h(e, ue), h(ue, me), h(me, ce), h(ce, fe), h(ce, $), h(me, Q), h(me, ae), h(ae, ve), h(me, ge), h(me, Ae), h(Ae, We), h(e, Ze), De && De.m(e, null)
        },
        p(Ve, [je]) {
            je & 1 && s !== (s = Ve[0]("wish.banner.weapons") + "") && K(n, s), je & 1 && a !== (a = Ve[7](Ve[0]("wish.banner.name.epitome-invocation")) + "") && (i.innerHTML = a), je & 1 && _ !== (_ = Ve[0]("wish.banner.probIncreased") + "") && K(v, _), je & 1 && D !== (D = Ve[0]("wish.banner.wishDescription") + "") && K(I, D), je & 1 && P !== (P = Ve[0]("wish.banner.viewDetails") + "") && K(Y, P), je & 1 && W !== (W = Ve[0](`${Ve[3][0].name}`) + "") && K(F, W), je & 1 && H !== (H = Ve[0]("wish.banner.up") + "") && K(X, H), je & 1 && ee !== (ee = Ve[0](`${Ve[3][1].name}`) + "") && K(le, ee), je & 1 && se !== (se = Ve[0](`${Ve[4][0]}`) + "") && K(fe, se), je & 1 && pe !== (pe = Ve[0]("wish.banner.etc") + "") && K(ve, pe), je & 1 && Ue !== (Ue = Ve[0]("wish.banner.up") + "") && K(We, Ue), Ve[1].name ? De ? De.p(Ve, je) : (De = yn(Ve), De.c(), De.m(e, null)) : De && (De.d(1), De = null)
        },
        i(Ve) {
            o || Re(() => {
                o = Me(i, Ye, {
                    x: 10,
                    duration: 700
                }), o.start()
            }), L || Re(() => {
                L = Me(f, Ye, {
                    x: 10,
                    duration: 700
                }), L.start()
            }), x || Re(() => {
                x = Me(T, Ye, {
                    x: 10,
                    duration: 700
                }), x.start()
            }), Pe || Re(() => {
                Pe = Me(ue, Ye, {
                    x: 10,
                    duration: 700
                }), Pe.start()
            })
        },
        o: Ne,
        d(Ve) {
            Ve && c(e), De && De.d()
        }
    }
}

function Jo(l, e, t) {
    let s, n, r;
    q(l, Le, v => t(0, s = v)), q(l, ct, v => t(1, n = v)), q(l, Et, v => t(2, r = v));
    let {
        data: i = {}
    } = e;
    const {
        featured: a,
        rateup: o,
        textOffset: u
    } = i, d = `--text-width: calc(${u?.featured?.w||29} / 100 * var(--content-width));`, _ = v => {
        const p = v.split(" ");
        return `<span class="epitome-flat">${p[0]}</span> ${p.slice(1).join(" ")}`
    };
    return l.$$set = v => {
        "data" in v && t(8, i = v.data)
    }, [s, n, r, a, o, u, d, _, i]
}
class Co extends ze {
    constructor(e) {
        super(), Ge(this, e, Jo, Lo, Oe, {
            data: 8
        })
    }
}

function $o(l) {
    let e, t, s, n, r;
    return e = new hs({
        props: {
            isError: l[7],
            src: l[8][`${l[4].name}`],
            alt: "Standard Banner",
            wrapperClass: "card-image " + (l[7] ? "skeleton" : "")
        }
    }), e.$on("error", l[10]), n = new Wo({
        props: {
            data: l[0]
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), s = w("div"), ne(n.$$.fragment), this.h()
        },
        l(i) {
            de(e.$$.fragment, i), t = M(i), s = k(i, "DIV", {
                class: !0
            });
            var a = E(s);
            de(n.$$.fragment, a), a.forEach(c), this.h()
        },
        h() {
            m(s, "class", "frame svelte-zreuui")
        },
        m(i, a) {
            re(e, i, a), z(i, t, a), z(i, s, a), re(n, s, null), r = !0
        },
        p(i, a) {
            const o = {};
            a & 128 && (o.isError = i[7]), a & 272 && (o.src = i[8][`${i[4].name}`]), a & 128 && (o.wrapperClass = "card-image " + (i[7] ? "skeleton" : "")), e.$set(o);
            const u = {};
            a & 1 && (u.data = i[0]), n.$set(u)
        },
        i(i) {
            r || (j(e.$$.fragment, i), j(n.$$.fragment, i), r = !0)
        },
        o(i) {
            U(e.$$.fragment, i), U(n.$$.fragment, i), r = !1
        },
        d(i) {
            ie(e, i), i && c(t), i && c(s), ie(n)
        }
    }
}

function Fo(l) {
    let e, t, s, n, r, i;
    e = new hs({
        props: {
            isError: l[7],
            src: l[8][`${l[4].name}`],
            alt: "Character Event Banner",
            wrapperClass: "card-image skeleton-event"
        }
    }), e.$on("error", l[10]);
    let a = (!l[4].name || l[7]) && An(l);
    return r = new Zo({
        props: {
            data: l[4],
            event2: l[1] === 2
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), a && a.c(), s = V(), n = w("div"), ne(r.$$.fragment), this.h()
        },
        l(o) {
            de(e.$$.fragment, o), t = M(o), a && a.l(o), s = M(o), n = k(o, "DIV", {
                class: !0
            });
            var u = E(n);
            de(r.$$.fragment, u), u.forEach(c), this.h()
        },
        h() {
            m(n, "class", "frame skeleton-event svelte-zreuui")
        },
        m(o, u) {
            re(e, o, u), z(o, t, u), a && a.m(o, u), z(o, s, u), z(o, n, u), re(r, n, null), i = !0
        },
        p(o, u) {
            const f = {};
            u & 128 && (f.isError = o[7]), u & 272 && (f.src = o[8][`${o[4].name}`]), e.$set(f), !o[4].name || o[7] ? a ? (a.p(o, u), u & 144 && j(a, 1)) : (a = An(o), a.c(), j(a, 1), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
            const d = {};
            u & 16 && (d.data = o[4]), u & 2 && (d.event2 = o[1] === 2), r.$set(d)
        },
        i(o) {
            i || (j(e.$$.fragment, o), j(a), j(r.$$.fragment, o), i = !0)
        },
        o(o) {
            U(e.$$.fragment, o), U(r.$$.fragment, o), i = !1
        },
        d(o) {
            ie(e, o), o && c(t), a && a.d(o), o && c(s), o && c(n), ie(r)
        }
    }
}

function Ho(l) {
    let e, t, s, n, r;
    return e = new hs({
        props: {
            isError: l[7],
            src: l[8][`${l[3].name}`],
            alt: "Weapon Banner",
            wrapperClass: "card-image skeleton-event"
        }
    }), e.$on("error", l[10]), n = new Co({
        props: {
            data: l[3]
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), s = w("div"), ne(n.$$.fragment), this.h()
        },
        l(i) {
            de(e.$$.fragment, i), t = M(i), s = k(i, "DIV", {
                class: !0
            });
            var a = E(s);
            de(n.$$.fragment, a), a.forEach(c), this.h()
        },
        h() {
            m(s, "class", "frame skeleton-event svelte-zreuui")
        },
        m(i, a) {
            re(e, i, a), z(i, t, a), z(i, s, a), re(n, s, null), r = !0
        },
        p(i, a) {
            const o = {};
            a & 128 && (o.isError = i[7]), a & 264 && (o.src = i[8][`${i[3].name}`]), e.$set(o);
            const u = {};
            a & 8 && (u.data = i[3]), n.$set(u)
        },
        i(i) {
            r || (j(e.$$.fragment, i), j(n.$$.fragment, i), r = !0)
        },
        o(i) {
            U(e.$$.fragment, i), U(n.$$.fragment, i), r = !1
        },
        d(i) {
            ie(e, i), i && c(t), i && c(s), ie(n)
        }
    }
}

function Xo(l) {
    let e, t, s, n, r;
    return e = new hs({
        props: {
            isError: l[7],
            src: l[8].beginner,
            alt: "Weapon Banner",
            wrapperClass: "card-image skeleton"
        }
    }), e.$on("error", l[10]), n = new Go({
        props: {
            character: l[4]
        }
    }), {
        c() {
            ne(e.$$.fragment), t = V(), s = w("div"), ne(n.$$.fragment), this.h()
        },
        l(i) {
            de(e.$$.fragment, i), t = M(i), s = k(i, "DIV", {
                class: !0
            });
            var a = E(s);
            de(n.$$.fragment, a), a.forEach(c), this.h()
        },
        h() {
            m(s, "class", "frame skeleton svelte-zreuui")
        },
        m(i, a) {
            re(e, i, a), z(i, t, a), z(i, s, a), re(n, s, null), r = !0
        },
        p(i, a) {
            const o = {};
            a & 128 && (o.isError = i[7]), a & 256 && (o.src = i[8].beginner), e.$set(o);
            const u = {};
            a & 16 && (u.character = i[4]), n.$set(u)
        },
        i(i) {
            r || (j(e.$$.fragment, i), j(n.$$.fragment, i), r = !0)
        },
        o(i) {
            U(e.$$.fragment, i), U(n.$$.fragment, i), r = !1
        },
        d(i) {
            ie(e, i), i && c(t), i && c(s), ie(n)
        }
    }
}

function An(l) {
    let e, t, s, n, r, i;
    return {
        c() {
            e = w("div"), t = w("img"), this.h()
        },
        l(a) {
            e = k(a, "DIV", {
                class: !0
            });
            var o = E(e);
            t = k(o, "IMG", {
                class: !0,
                src: !0,
                alt: !0,
                crossorigin: !0
            }), o.forEach(c), this.h()
        },
        h() {
            m(t, "class", "splash-art svelte-zreuui"), Te(t.src, s = l[8][`splash-art/${l[4].character}`]) || m(t, "src", s), m(t, "alt", "character"), m(t, "crossorigin", "anonymous"), m(e, "class", "character svelte-zreuui")
        },
        m(a, o) {
            z(a, e, o), h(e, t), r || (i = be(t, "error", Qo), r = !0)
        },
        p(a, o) {
            o & 272 && !Te(t.src, s = a[8][`splash-art/${a[4].character}`]) && m(t, "src", s)
        },
        i(a) {
            n || Re(() => {
                n = Me(e, Ye, {
                    x: 20,
                    duration: 850
                }), n.start()
            })
        },
        o: Ne,
        d(a) {
            a && c(e), r = !1, i()
        }
    }
}

function qo(l) {
    let e, t, s, n, r, i = l[9]("details.text") + "",
        a, o, u, f, d;
    const _ = [Xo, Ho, Fo, $o],
        v = [];

    function p(g, b) {
        return g[2] === "beginner" ? 0 : g[2] === "weapons" ? 1 : g[2] === "events" ? 2 : g[2] === "standard" ? 3 : -1
    }
    return ~(t = p(l)) && (s = v[t] = _[t](l)), {
        c() {
            e = w("div"), s && s.c(), n = V(), r = w("button"), a = J(i), this.h()
        },
        l(g) {
            e = k(g, "DIV", {
                class: !0,
                style: !0
            });
            var b = E(e);
            s && s.l(b), n = M(b), r = k(b, "BUTTON", {
                class: !0
            });
            var A = E(r);
            a = C(A, i), A.forEach(c), b.forEach(c), this.h()
        },
        h() {
            m(r, "class", "detail svelte-zreuui"), m(e, "class", "card svelte-zreuui"), te(e, "--content-width", l[5] + "px"), te(e, "--content-height", l[6] + "px"), Re(() => l[12].call(e))
        },
        m(g, b) {
            z(g, e, b), ~t && v[t].m(e, null), h(e, n), h(e, r), h(r, a), o = Ft(e, l[12].bind(e)), u = !0, f || (d = be(r, "click", l[11]), f = !0)
        },
        p(g, [b]) {
            let A = t;
            t = p(g), t === A ? ~t && v[t].p(g, b) : (s && (ke(), U(v[A], 1, 1, () => {
                v[A] = null
            }), Ee()), ~t ? (s = v[t], s ? s.p(g, b) : (s = v[t] = _[t](g), s.c()), j(s, 1), s.m(e, n)) : s = null), (!u || b & 512) && i !== (i = g[9]("details.text") + "") && K(a, i), (!u || b & 32) && te(e, "--content-width", g[5] + "px"), (!u || b & 64) && te(e, "--content-height", g[6] + "px")
        },
        i(g) {
            u || (j(s), u = !0)
        },
        o(g) {
            U(s), u = !1
        },
        d(g) {
            g && c(e), ~t && v[t].d(), o(), f = !1, d()
        }
    }
}
const Qo = l => l.target.remove();

function Ko(l, e, t) {
    let s, n;
    q(l, st, b => t(8, s = b)), q(l, Le, b => t(9, n = b));
    let {
        data: r = {}
    } = e, {
        index: i = -1
    } = e, a, o, u, f, d, _ = !1;
    const v = () => {
            t(7, _ = !0)
        },
        p = () => (Nt.set("details"), ds.set("details"), Se());

    function g() {
        f = this.clientWidth, d = this.clientHeight, t(5, f), t(6, d)
    }
    return l.$$set = b => {
        "data" in b && t(0, r = b.data), "index" in b && t(1, i = b.index)
    }, l.$$.update = () => {
        l.$$.dirty & 1 && t(2, {
            type: a,
            weapons: o,
            character: u
        } = r, a, (t(3, o), t(0, r)), (t(4, u), t(0, r)))
    }, [r, i, a, o, u, f, d, _, s, n, v, p, g]
}
class xo extends ze {
    constructor(e) {
        super(), Ge(this, e, Ko, qo, Oe, {
            data: 0,
            index: 1
        })
    }
}

function In(l, e, t) {
    const s = l.slice();
    return s[12] = e[t], s[14] = t, s
}

function Dn(l) {
    let e, t, s, n;
    return t = new xo({
        props: {
            data: l[12],
            index: l[14]
        }
    }), {
        c() {
            e = w("div"), ne(t.$$.fragment), this.h()
        },
        l(r) {
            e = k(r, "DIV", {
                class: !0,
                style: !0
            });
            var i = E(e);
            de(t.$$.fragment, i), i.forEach(c), this.h()
        },
        h() {
            m(e, "class", "banner-item svelte-1t97xn4"), m(e, "style", l[1])
        },
        m(r, i) {
            z(r, e, i), re(t, e, null), n = !0
        },
        p(r, i) {
            const a = {};
            i & 4 && (a.data = r[12]), t.$set(a), (!n || i & 2) && m(e, "style", r[1])
        },
        i(r) {
            n || (j(t.$$.fragment, r), s || Re(() => {
                s = Me(e, Ye, {
                    x: 25,
                    duration: 580
                }), s.start()
            }), n = !0)
        },
        o(r) {
            U(t.$$.fragment, r), n = !1
        },
        d(r) {
            r && c(e), ie(t)
        }
    }
}

function Nn(l) {
    let e, t, s = l[3] === l[14] && Dn(l);
    return {
        c() {
            s && s.c(), e = Be()
        },
        l(n) {
            s && s.l(n), e = Be()
        },
        m(n, r) {
            s && s.m(n, r), z(n, e, r), t = !0
        },
        p(n, r) {
            n[3] === n[14] ? s ? (s.p(n, r), r & 8 && j(s, 1)) : (s = Dn(n), s.c(), j(s, 1), s.m(e.parentNode, e)) : s && (ke(), U(s, 1, 1, () => {
                s = null
            }), Ee())
        },
        i(n) {
            t || (j(s), t = !0)
        },
        o(n) {
            U(s), t = !1
        },
        d(n) {
            s && s.d(n), n && c(e)
        }
    }
}

function Tn(l) {
    let e, t, s, n, r, i;
    return {
        c() {
            e = w("button"), t = w("i"), this.h()
        },
        l(a) {
            e = k(a, "BUTTON", {
                class: !0,
                style: !0
            });
            var o = E(e);
            t = k(o, "I", {
                class: !0
            }), E(t).forEach(c), o.forEach(c), this.h()
        },
        h() {
            m(t, "class", "gi-arrow-left"), m(e, "class", "left svelte-1t97xn4"), te(e, "margin-right", "auto")
        },
        m(a, o) {
            z(a, e, o), h(e, t), n = !0, r || (i = be(e, "click", l[10]), r = !0)
        },
        p: Ne,
        i(a) {
            n || (a && Re(() => {
                s || (s = et(e, $e, {
                    duration: 200
                }, !0)), s.run(1)
            }), n = !0)
        },
        o(a) {
            a && (s || (s = et(e, $e, {
                duration: 200
            }, !1)), s.run(0)), n = !1
        },
        d(a) {
            a && c(e), a && s && s.end(), r = !1, i()
        }
    }
}

function Rn(l) {
    let e, t, s, n, r, i;
    return {
        c() {
            e = w("button"), t = w("i"), this.h()
        },
        l(a) {
            e = k(a, "BUTTON", {
                class: !0,
                style: !0
            });
            var o = E(e);
            t = k(o, "I", {
                class: !0
            }), E(t).forEach(c), o.forEach(c), this.h()
        },
        h() {
            m(t, "class", "gi-arrow-right"), m(e, "class", "left svelte-1t97xn4"), te(e, "margin-left", "auto")
        },
        m(a, o) {
            z(a, e, o), h(e, t), n = !0, r || (i = be(e, "click", l[11]), r = !0)
        },
        p: Ne,
        i(a) {
            n || (a && Re(() => {
                s || (s = et(e, $e, {
                    duration: 200
                }, !0)), s.run(1)
            }), n = !0)
        },
        o(a) {
            a && (s || (s = et(e, $e, {
                duration: 200
            }, !1)), s.run(0)), n = !1
        },
        d(a) {
            a && c(e), a && s && s.end(), r = !1, i()
        }
    }
}

function eu(l) {
    let e, t, s, n, r, i = l[2],
        a = [];
    for (let d = 0; d < i.length; d += 1) a[d] = Nn(In(l, i, d));
    const o = d => U(a[d], 1, 1, () => {
        a[d] = null
    });
    let u = l[3] > 0 && Tn(l),
        f = l[3] < l[2].length - 1 && Rn(l);
    return {
        c() {
            e = w("div");
            for (let d = 0; d < a.length; d += 1) a[d].c();
            t = V(), s = w("div"), u && u.c(), n = V(), f && f.c(), this.h()
        },
        l(d) {
            e = k(d, "DIV", {
                class: !0,
                style: !0
            });
            var _ = E(e);
            for (let p = 0; p < a.length; p += 1) a[p].l(_);
            t = M(_), s = k(_, "DIV", {
                class: !0
            });
            var v = E(s);
            u && u.l(v), n = M(v), f && f.l(v), v.forEach(c), _.forEach(c), this.h()
        },
        h() {
            m(s, "class", "navigate svelte-1t97xn4"), m(e, "class", "banner-container svelte-1t97xn4"), m(e, "style", l[0])
        },
        m(d, _) {
            z(d, e, _);
            for (let v = 0; v < a.length; v += 1) a[v].m(e, null);
            h(e, t), h(e, s), u && u.m(s, null), h(s, n), f && f.m(s, null), r = !0
        },
        p(d, [_]) {
            if (_ & 14) {
                i = d[2];
                let v;
                for (v = 0; v < i.length; v += 1) {
                    const p = In(d, i, v);
                    a[v] ? (a[v].p(p, _), j(a[v], 1)) : (a[v] = Nn(p), a[v].c(), j(a[v], 1), a[v].m(e, t))
                }
                for (ke(), v = i.length; v < a.length; v += 1) o(v);
                Ee()
            }
            d[3] > 0 ? u ? (u.p(d, _), _ & 8 && j(u, 1)) : (u = Tn(d), u.c(), j(u, 1), u.m(s, n)) : u && (ke(), U(u, 1, 1, () => {
                u = null
            }), Ee()), d[3] < d[2].length - 1 ? f ? (f.p(d, _), _ & 12 && j(f, 1)) : (f = Rn(d), f.c(), j(f, 1), f.m(s, null)) : f && (ke(), U(f, 1, 1, () => {
                f = null
            }), Ee()), (!r || _ & 1) && m(e, "style", d[0])
        },
        i(d) {
            if (!r) {
                for (let _ = 0; _ < i.length; _ += 1) j(a[_]);
                j(u), j(f), r = !0
            }
        },
        o(d) {
            a = a.filter(Boolean);
            for (let _ = 0; _ < a.length; _ += 1) U(a[_]);
            U(u), U(f), r = !1
        },
        d(d) {
            d && c(e), qe(a, d), u && u.d(), f && f.d()
        }
    }
}

function tu(l, e, t) {
    let s, n, r, i, a, o, u, f, d;
    q(l, Rs, g => t(7, a = g)), q(l, Bt, g => t(8, o = g)), q(l, Xt, g => t(9, u = g)), q(l, ot, g => t(2, f = g)), q(l, ht, g => t(3, d = g));
    const _ = g => {
            if (Se("changebanner"), g === "next") return ht.update(b => b + 1);
            if (g === "previous") return ht.update(b => b - 1)
        },
        v = () => _("previous"),
        p = () => _("next");
    return l.$$.update = () => {
        l.$$.dirty & 384 && t(6, s = a / 2.1 > o), l.$$.dirty & 64 && t(5, n = s ? "width: 90vh" : ""), l.$$.dirty & 800 && t(1, r = u ? `max-width: ${150/100*o}px;` : n), l.$$.dirty & 384 && t(0, i = o > 800 || o > a || o / a > .5 ? "align-items:center;" : "")
    }, [i, r, f, d, _, n, s, a, o, u, v, p]
}
class su extends ze {
    constructor(e) {
        super(), Ge(this, e, tu, eu, Oe, {})
    }
}

function jn(l) {
    let e, t;
    return e = new ei({
        props: {
            list: l[7],
            skipSplashOneByOne: l[4]
        }
    }), e.$on("wishEnd", l[16]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 128 && (r.list = s[7]), n[0] & 16 && (r.skipSplashOneByOne = s[4]), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function lu(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g, b, A, N, B;
    document.title = e = l[9]("title", {
        default: Ls
    });
    let D = l[1] && jn(l);
    return o = new wo({}), f = new Bo({
        props: {
            showMeteor: l[0],
            singleMeteor: l[2],
            meteorStar: l[3],
            showConvertModal: l[5],
            rollCount: l[6]
        }
    }), f.$on("cancelModal", l[12]), f.$on("confirmModal", l[13]), f.$on("endAnimation", l[14]), f.$on("skiped", l[15]), p = new su({}), A = new Do({}), A.$on("multiRoll", l[25]), A.$on("singleRoll", l[26]), {
        c() {
            t = V(), s = w("div"), n = V(), D && D.c(), r = V(), i = w("section"), a = w("div"), ne(o.$$.fragment), u = V(), ne(f.$$.fragment), d = V(), _ = w("div"), v = w("div"), ne(p.$$.fragment), g = V(), b = w("div"), ne(A.$$.fragment), this.h()
        },
        l(I) {
            tr('[data-svelte="svelte-kwnc3m"]', document.head).forEach(c), t = M(I), s = k(I, "DIV", {
                class: !0
            }), E(s).forEach(c), n = M(I), D && D.l(I), r = M(I), i = k(I, "SECTION", {
                style: !0,
                class: !0
            });
            var S = E(i);
            a = k(S, "DIV", {
                class: !0
            });
            var P = E(a);
            de(o.$$.fragment, P), P.forEach(c), u = M(S), de(f.$$.fragment, S), d = M(S), _ = k(S, "DIV", {
                class: !0
            });
            var Y = E(_);
            v = k(Y, "DIV", {
                class: !0
            });
            var L = E(v);
            de(p.$$.fragment, L), L.forEach(c), g = M(Y), b = k(Y, "DIV", {
                class: !0
            });
            var G = E(b);
            de(A.$$.fragment, G), G.forEach(c), Y.forEach(c), S.forEach(c), this.h()
        },
        h() {
            m(s, "class", "overlay svelte-8u02rw"), m(a, "class", "col top svelte-8u02rw"), m(v, "class", "item svelte-8u02rw"), m(b, "class", "col button svelte-8u02rw"), m(_, "class", "col banner svelte-8u02rw"), te(i, "background-image", "url('" + l[10]["wish-background.webp"] + "')"), m(i, "class", "svelte-8u02rw")
        },
        m(I, y) {
            z(I, t, y), z(I, s, y), z(I, n, y), D && D.m(I, y), z(I, r, y), z(I, i, y), h(i, a), re(o, a, null), h(i, u), re(f, i, null), h(i, d), h(i, _), h(_, v), re(p, v, null), h(_, g), h(_, b), re(A, b, null), B = !0
        },
        p(I, y) {
            (!B || y[0] & 512) && e !== (e = I[9]("title", {
                default: Ls
            })) && (document.title = e), I[1] ? D ? (D.p(I, y), y[0] & 2 && j(D, 1)) : (D = jn(I), D.c(), j(D, 1), D.m(r.parentNode, r)) : D && (ke(), U(D, 1, 1, () => {
                D = null
            }), Ee());
            const S = {};
            y[0] & 1 && (S.showMeteor = I[0]), y[0] & 4 && (S.singleMeteor = I[2]), y[0] & 8 && (S.meteorStar = I[3]), y[0] & 32 && (S.showConvertModal = I[5]), y[0] & 64 && (S.rollCount = I[6]), f.$set(S), (!B || y[0] & 1024) && te(i, "background-image", "url('" + I[10]["wish-background.webp"] + "')")
        },
        i(I) {
            B || (j(D), j(o.$$.fragment, I), j(f.$$.fragment, I), j(p.$$.fragment, I), j(A.$$.fragment, I), N || Re(() => {
                N = Me(b, Ye, {
                    y: 20,
                    duration: 1e3
                }), N.start()
            }), B = !0)
        },
        o(I) {
            U(D), U(o.$$.fragment, I), U(f.$$.fragment, I), U(p.$$.fragment, I), U(A.$$.fragment, I), B = !1
        },
        d(I) {
            I && c(t), I && c(s), I && c(n), D && D.d(I), I && c(r), I && c(i), ie(o), ie(f), ie(p), ie(A)
        }
    }
}

function nu(l, e, t) {
    let s, n, r, i, a, o, u, f, d, _, v, p, g, b, A;
    q(l, _t, ue => t(29, i = ue)), q(l, pt, ue => t(30, a = ue)), q(l, qt, ue => t(31, o = ue)), q(l, ot, ue => t(18, u = ue)), q(l, St, ue => t(19, f = ue)), q(l, At, ue => t(20, d = ue)), q(l, rt, ue => t(21, _ = ue)), q(l, nt, ue => t(22, v = ue)), q(l, is, ue => t(23, p = ue)), q(l, ht, ue => t(24, g = ue)), q(l, Le, ue => t(9, b = ue)), q(l, st, ue => t(10, A = ue));
    let N = !1,
        B = !1,
        D = !0,
        I = 3,
        y = !1,
        S = !1,
        P = 0,
        Y = [],
        L;
    const G = (ue, me) => {
            !ue || !me || (L = Sr.init(ue, me))
        },
        T = () => u.filter(({
            type: ce
        }) => ce === "events").findIndex(({
            character: ce
        }) => ce.name === s.character.name),
        O = async (ue, me) => {
            t(6, P = ue);
            const ce = [],
                se = me === "beginner" && ue > 1 ? 8 : ue,
                fe = me === "events" ? T() : 0;
            if (r < se && !o) return t(5, S = !0);
            for (let $ = 0; $ < ue; $++) {
                const Q = await jr(me, fe, L);
                ce.push(Q)
            }
            t(7, Y = ce), oe(), !o && (W(), R(me))
        },
        R = ue => {
            const me = ["beginner", "standard"].includes(ue);
            (me ? nt : rt).update(se => {
                const fe = se - (ue === "beginner" && P > 1 ? 8 : P);
                return kt.set(me ? "acquaint" : "intertwined", fe), fe
            })
        },
        W = () => {
            const ue = me => {
                const ce = Y.reduce((fe, {
                    fateQty: $,
                    fateType: Q
                }) => fe + (Q === me ? $ : 0), 0);
                (me === "stardust" ? pt : _t).update(fe => {
                    const $ = fe + ce;
                    return kt.set(me, $), $
                })
            };
            ue("starglitter"), ue("stardust")
        },
        F = ue => Y.reduce((me, {
            fateType: ce,
            fateQty: se
        }) => me + (ce === ue ? se : 0), 0),
        oe = () => {
            zt.set(!1);
            const ue = Y.map(({
                rarity: me
            }) => me);
            t(2, D = ue.length === 1), t(3, I = 3), ue.includes(4) && t(3, I = 4), ue.includes(5) && t(3, I = 5), t(0, B = !0)
        },
        Z = () => {
            t(5, S = !1), Se()
        },
        H = () => {
            O(P, n), t(5, S = !1), Se()
        },
        X = () => {
            t(0, B = !1), t(1, N = !0)
        },
        he = () => {
            P > 8 && t(4, y = !0), t(0, B = !1), t(1, N = !0)
        },
        _e = mt("bgToggle"),
        ee = mt("handleObtained"),
        le = () => {
            if (_e(!1), t(4, y = !1), o) return t(1, N = !1), zt.set(!0);
            const ue = [{
                item: "stardust",
                value: F("stardust")
            }, {
                item: "starglitter",
                value: F("starglitter")
            }];
            a < 1 && i < 1 ? zt.set(!0) : ee(ue), t(1, N = !1)
        },
        x = () => O(10, n),
        we = () => O(1, n);
    return l.$$.update = () => {
        l.$$.dirty[0] & 17039360 && t(17, s = u[g]), l.$$.dirty[0] & 131072 && t(8, n = s.type), l.$$.dirty[0] & 14680064 && (r = p ? v : _), l.$$.dirty[0] & 1572864 && G(d, f), l.$$.dirty[0] & 1 && B && _e(!0)
    }, [B, N, D, I, y, S, P, Y, n, b, A, O, Z, H, X, he, le, s, u, f, d, _, v, p, g, x, we]
}
class ru extends ze {
    constructor(e) {
        super(), Ge(this, e, nu, lu, Oe, {}, null, [-1, -1])
    }
}

function Bn(l) {
    let e, t;
    return e = new cs({
        props: {
            autoclose: !0,
            $$slots: {
                default: [iu]
            },
            $$scope: {
                ctx: l
            }
        }
    }), e.$on("close", l[24]), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        p(s, n) {
            const r = {};
            n[0] & 16384 | n[1] & 4096 && (r.$$scope = {
                dirty: n,
                ctx: s
            }), e.$set(r)
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function iu(l) {
    let e, t = l[14]("wish.loadFailed") + "",
        s;
    return {
        c() {
            e = new Tt(!1), s = Be(), this.h()
        },
        l(n) {
            e = Rt(n, !1), s = Be(), this.h()
        },
        h() {
            e.a = s
        },
        m(n, r) {
            e.m(t, n, r), z(n, s, r)
        },
        p(n, r) {
            r[0] & 16384 && t !== (t = n[14]("wish.loadFailed") + "") && e.p(t)
        },
        d(n) {
            n && c(s), n && e.d()
        }
    }
}

function Sn(l) {
    let e, t, s;
    var n = l[5];

    function r(i) {
        return {
            props: {
                items: i[10]
            }
        }
    }
    return n && (e = new n(r(l)), e.$on("close", l[16])), {
        c() {
            e && ne(e.$$.fragment), t = Be()
        },
        l(i) {
            e && de(e.$$.fragment, i), t = Be()
        },
        m(i, a) {
            e && re(e, i, a), z(i, t, a), s = !0
        },
        p(i, a) {
            const o = {};
            if (a[0] & 1024 && (o.items = i[10]), n !== (n = i[5])) {
                if (e) {
                    ke();
                    const u = e;
                    U(u.$$.fragment, 1, 0, () => {
                        ie(u, 1)
                    }), Ee()
                }
                n ? (e = new n(r(i)), e.$on("close", i[16]), ne(e.$$.fragment), j(e.$$.fragment, 1), re(e, t.parentNode, t)) : e = null
            } else n && e.$set(o)
        },
        i(i) {
            s || (e && j(e.$$.fragment, i), s = !0)
        },
        o(i) {
            e && U(e.$$.fragment, i), s = !1
        },
        d(i) {
            i && c(t), e && ie(e, i)
        }
    }
}

function Vn(l) {
    let e, t, s, n, r, i, a;
    return {
        c() {
            e = w("video"), t = w("source"), n = w("track"), this.h()
        },
        l(o) {
            e = k(o, "VIDEO", {
                poster: !0,
                class: !0
            });
            var u = E(e);
            t = k(u, "SOURCE", {
                src: !0,
                type: !0
            }), n = k(u, "TRACK", {
                kind: !0
            }), u.forEach(c), this.h()
        },
        h() {
            Te(t.src, s = "https://cdn.wishsimulator.app/videos/bg.webm") || m(t, "src", s), m(t, "type", "video/webm"), m(n, "kind", "captions"), e.muted = !0, e.loop = !0, e.autoplay = !0, m(e, "poster", r = l[15]["wish-background.webp"]), m(e, "class", "svelte-1tov902"), ye(e, "hide", l[0] !== "index" || l[13])
        },
        m(o, u) {
            z(o, e, u), h(e, t), h(e, n), a = !0
        },
        p(o, u) {
            (!a || u[0] & 32768 && r !== (r = o[15]["wish-background.webp"])) && m(e, "poster", r), u[0] & 8193 && ye(e, "hide", o[0] !== "index" || o[13])
        },
        i(o) {
            a || (o && Re(() => {
                i || (i = et(e, $e, {
                    duration: 2e3
                }, !0)), i.run(1)
            }), a = !0)
        },
        o(o) {
            o && (i || (i = et(e, $e, {
                duration: 2e3
            }, !1)), i.run(0)), a = !1
        },
        d(o) {
            o && c(e), o && i && i.end()
        }
    }
}

function Mn(l) {
    let e, t;
    return e = new ru({}), {
        c() {
            ne(e.$$.fragment)
        },
        l(s) {
            de(e.$$.fragment, s)
        },
        m(s, n) {
            re(e, s, n), t = !0
        },
        i(s) {
            t || (j(e.$$.fragment, s), t = !0)
        },
        o(s) {
            U(e.$$.fragment, s), t = !1
        },
        d(s) {
            ie(e, s)
        }
    }
}

function zn(l) {
    let e, t, s;
    var n = l[1];

    function r(i) {
        return {}
    }
    return n && (e = new n(r())), {
        c() {
            e && ne(e.$$.fragment), t = Be()
        },
        l(i) {
            e && de(e.$$.fragment, i), t = Be()
        },
        m(i, a) {
            e && re(e, i, a), z(i, t, a), s = !0
        },
        p(i, a) {
            if (n !== (n = i[1])) {
                if (e) {
                    ke();
                    const o = e;
                    U(o.$$.fragment, 1, 0, () => {
                        ie(o, 1)
                    }), Ee()
                }
                n ? (e = new n(r()), ne(e.$$.fragment), j(e.$$.fragment, 1), re(e, t.parentNode, t)) : e = null
            }
        },
        i(i) {
            s || (e && j(e.$$.fragment, i), s = !0)
        },
        o(i) {
            e && U(e.$$.fragment, i), s = !1
        },
        d(i) {
            i && c(t), e && ie(e, i)
        }
    }
}

function Gn(l) {
    let e, t, s;
    var n = l[2];

    function r(i) {
        return {
            props: {
                page: "details"
            }
        }
    }
    return n && (e = new n(r())), {
        c() {
            e && ne(e.$$.fragment), t = Be()
        },
        l(i) {
            e && de(e.$$.fragment, i), t = Be()
        },
        m(i, a) {
            e && re(e, i, a), z(i, t, a), s = !0
        },
        p(i, a) {
            if (n !== (n = i[2])) {
                if (e) {
                    ke();
                    const o = e;
                    U(o.$$.fragment, 1, 0, () => {
                        ie(o, 1)
                    }), Ee()
                }
                n ? (e = new n(r()), ne(e.$$.fragment), j(e.$$.fragment, 1), re(e, t.parentNode, t)) : e = null
            }
        },
        i(i) {
            s || (e && j(e.$$.fragment, i), s = !0)
        },
        o(i) {
            e && U(e.$$.fragment, i), s = !1
        },
        d(i) {
            i && c(t), e && ie(e, i)
        }
    }
}

function On(l) {
    let e, t, s;
    var n = l[2];

    function r(i) {
        return {
            props: {
                page: "history"
            }
        }
    }
    return n && (e = new n(r())), {
        c() {
            e && ne(e.$$.fragment), t = Be()
        },
        l(i) {
            e && de(e.$$.fragment, i), t = Be()
        },
        m(i, a) {
            e && re(e, i, a), z(i, t, a), s = !0
        },
        p(i, a) {
            if (n !== (n = i[2])) {
                if (e) {
                    ke();
                    const o = e;
                    U(o.$$.fragment, 1, 0, () => {
                        ie(o, 1)
                    }), Ee()
                }
                n ? (e = new n(r()), ne(e.$$.fragment), j(e.$$.fragment, 1), re(e, t.parentNode, t)) : e = null
            }
        },
        i(i) {
            s || (e && j(e.$$.fragment, i), s = !0)
        },
        o(i) {
            e && U(e.$$.fragment, i), s = !1
        },
        d(i) {
            i && c(t), e && ie(e, i)
        }
    }
}

function Pn(l) {
    let e, t, s;
    var n = l[4];

    function r(i) {
        return {}
    }
    return n && (e = new n(r())), {
        c() {
            e && ne(e.$$.fragment), t = Be()
        },
        l(i) {
            e && de(e.$$.fragment, i), t = Be()
        },
        m(i, a) {
            e && re(e, i, a), z(i, t, a), s = !0
        },
        p(i, a) {
            if (n !== (n = i[4])) {
                if (e) {
                    ke();
                    const o = e;
                    U(o.$$.fragment, 1, 0, () => {
                        ie(o, 1)
                    }), Ee()
                }
                n ? (e = new n(r()), ne(e.$$.fragment), j(e.$$.fragment, 1), re(e, t.parentNode, t)) : e = null
            }
        },
        i(i) {
            s || (e && j(e.$$.fragment, i), s = !0)
        },
        o(i) {
            e && U(e.$$.fragment, i), s = !1
        },
        d(i) {
            i && c(t), e && ie(e, i)
        }
    }
}

function Wn(l) {
    let e, t, s;
    var n = l[3];

    function r(i) {
        return {}
    }
    return n && (e = new n(r())), {
        c() {
            e && ne(e.$$.fragment), t = Be()
        },
        l(i) {
            e && de(e.$$.fragment, i), t = Be()
        },
        m(i, a) {
            e && re(e, i, a), z(i, t, a), s = !0
        },
        p(i, a) {
            if (n !== (n = i[3])) {
                if (e) {
                    ke();
                    const o = e;
                    U(o.$$.fragment, 1, 0, () => {
                        ie(o, 1)
                    }), Ee()
                }
                n ? (e = new n(r()), ne(e.$$.fragment), j(e.$$.fragment, 1), re(e, t.parentNode, t)) : e = null
            }
        },
        i(i) {
            s || (e && j(e.$$.fragment, i), s = !0)
        },
        o(i) {
            e && U(e.$$.fragment, i), s = !1
        },
        d(i) {
            i && c(t), e && ie(e, i)
        }
    }
}

function au(l) {
    let e, t, s, n, r, i, a, o, u, f, d, _, v, p, g = l[8] && Bn(l),
        b = l[9] && Sn(l);
    var A = tl;

    function N(T) {
        return {
            props: {
                show: T[12]
            }
        }
    }
    A && (s = new A(N(l)));
    var B = l[6];

    function D(T) {
        return {
            props: {
                show: T[11]
            }
        }
    }
    B && (r = new B(D(l)));
    let I = l[7] && Vn(l),
        y = l[0] === "index" && Mn(),
        S = l[0] === "previous-banner" && zn(l),
        P = l[0] === "details" && Gn(l),
        Y = l[0] === "history" && On(l),
        L = l[0] === "inventory" && Pn(l),
        G = l[0] === "shop" && Wn(l);
    return {
        c() {
            g && g.c(), e = V(), b && b.c(), t = V(), s && ne(s.$$.fragment), n = V(), r && ne(r.$$.fragment), i = V(), I && I.c(), a = V(), y && y.c(), o = V(), S && S.c(), u = V(), P && P.c(), f = V(), Y && Y.c(), d = V(), L && L.c(), _ = V(), G && G.c(), v = Be()
        },
        l(T) {
            g && g.l(T), e = M(T), b && b.l(T), t = M(T), s && de(s.$$.fragment, T), n = M(T), r && de(r.$$.fragment, T), i = M(T), I && I.l(T), a = M(T), y && y.l(T), o = M(T), S && S.l(T), u = M(T), P && P.l(T), f = M(T), Y && Y.l(T), d = M(T), L && L.l(T), _ = M(T), G && G.l(T), v = Be()
        },
        m(T, O) {
            g && g.m(T, O), z(T, e, O), b && b.m(T, O), z(T, t, O), s && re(s, T, O), z(T, n, O), r && re(r, T, O), z(T, i, O), I && I.m(T, O), z(T, a, O), y && y.m(T, O), z(T, o, O), S && S.m(T, O), z(T, u, O), P && P.m(T, O), z(T, f, O), Y && Y.m(T, O), z(T, d, O), L && L.m(T, O), z(T, _, O), G && G.m(T, O), z(T, v, O), p = !0
        },
        p(T, O) {
            T[8] ? g ? (g.p(T, O), O[0] & 256 && j(g, 1)) : (g = Bn(T), g.c(), j(g, 1), g.m(e.parentNode, e)) : g && (ke(), U(g, 1, 1, () => {
                g = null
            }), Ee()), T[9] ? b ? (b.p(T, O), O[0] & 512 && j(b, 1)) : (b = Sn(T), b.c(), j(b, 1), b.m(t.parentNode, t)) : b && (ke(), U(b, 1, 1, () => {
                b = null
            }), Ee());
            const R = {};
            if (O[0] & 4096 && (R.show = T[12]), A !== (A = tl)) {
                if (s) {
                    ke();
                    const F = s;
                    U(F.$$.fragment, 1, 0, () => {
                        ie(F, 1)
                    }), Ee()
                }
                A ? (s = new A(N(T)), ne(s.$$.fragment), j(s.$$.fragment, 1), re(s, n.parentNode, n)) : s = null
            } else A && s.$set(R);
            const W = {};
            if (O[0] & 2048 && (W.show = T[11]), B !== (B = T[6])) {
                if (r) {
                    ke();
                    const F = r;
                    U(F.$$.fragment, 1, 0, () => {
                        ie(F, 1)
                    }), Ee()
                }
                B ? (r = new B(D(T)), ne(r.$$.fragment), j(r.$$.fragment, 1), re(r, i.parentNode, i)) : r = null
            } else B && r.$set(W);
            T[7] ? I ? (I.p(T, O), O[0] & 128 && j(I, 1)) : (I = Vn(T), I.c(), j(I, 1), I.m(a.parentNode, a)) : I && (ke(), U(I, 1, 1, () => {
                I = null
            }), Ee()), T[0] === "index" ? y ? O[0] & 1 && j(y, 1) : (y = Mn(), y.c(), j(y, 1), y.m(o.parentNode, o)) : y && (ke(), U(y, 1, 1, () => {
                y = null
            }), Ee()), T[0] === "previous-banner" ? S ? (S.p(T, O), O[0] & 1 && j(S, 1)) : (S = zn(T), S.c(), j(S, 1), S.m(u.parentNode, u)) : S && (ke(), U(S, 1, 1, () => {
                S = null
            }), Ee()), T[0] === "details" ? P ? (P.p(T, O), O[0] & 1 && j(P, 1)) : (P = Gn(T), P.c(), j(P, 1), P.m(f.parentNode, f)) : P && (ke(), U(P, 1, 1, () => {
                P = null
            }), Ee()), T[0] === "history" ? Y ? (Y.p(T, O), O[0] & 1 && j(Y, 1)) : (Y = On(T), Y.c(), j(Y, 1), Y.m(d.parentNode, d)) : Y && (ke(), U(Y, 1, 1, () => {
                Y = null
            }), Ee()), T[0] === "inventory" ? L ? (L.p(T, O), O[0] & 1 && j(L, 1)) : (L = Pn(T), L.c(), j(L, 1), L.m(_.parentNode, _)) : L && (ke(), U(L, 1, 1, () => {
                L = null
            }), Ee()), T[0] === "shop" ? G ? (G.p(T, O), O[0] & 1 && j(G, 1)) : (G = Wn(T), G.c(), j(G, 1), G.m(v.parentNode, v)) : G && (ke(), U(G, 1, 1, () => {
                G = null
            }), Ee())
        },
        i(T) {
            p || (j(g), j(b), s && j(s.$$.fragment, T), r && j(r.$$.fragment, T), j(I), j(y), j(S), j(P), j(Y), j(L), j(G), p = !0)
        },
        o(T) {
            U(g), U(b), s && U(s.$$.fragment, T), r && U(r.$$.fragment, T), U(I), U(y), U(S), U(P), U(Y), U(L), U(G), p = !1
        },
        d(T) {
            g && g.d(T), T && c(e), b && b.d(T), T && c(t), s && ie(s, T), T && c(n), r && ie(r, T), T && c(i), I && I.d(T), T && c(a), y && y.d(T), T && c(o), S && S.d(T), T && c(u), P && P.d(T), T && c(f), Y && Y.d(T), T && c(d), L && L.d(T), T && c(_), G && G.d(T), T && c(v)
        }
    }
}
const ku = !0;

function ou(l, e, t) {
    let s, n, r, i, a, o, u, f, d, _;
    q(l, Nt, se => t(0, n = se)), q(l, Ts, se => t(19, r = se)), q(l, St, se => t(20, i = se)), q(l, At, se => t(21, a = se)), q(l, ot, se => t(30, o = se)), q(l, Pt, se => t(22, u = se)), q(l, zt, se => t(23, f = se)), q(l, Le, se => t(14, d = se)), q(l, st, se => t(15, _ = se));
    let v, p, g, b, A, N, B;
    const D = async () => {
            t(1, v = (await Ie(() =>
                import ("./PreviousBannerList-6bd846aa.js"), ["./PreviousBannerList-6bd846aa.js", "./preload-helper-176e53da.js", "./historyIdb-feead984.js", "./localstore-babdf033.js", "./stores-db8fba2f.js", "./index-900c1e47.js", "./index-a80b06f5.js", "./runtime.esm-0af339e4.js", "./outfits-eb53be92.js", "./index-80f68401.js", "./WishListResult-3d7b1182.js", "./audio-6d737711.js", "./Icon-2b2a573e.js", "../assets/Icon-d3e43583.css", "./env-51d3792f.js", "../assets/WishListResult-42b90934.css", "../assets/PreviousBannerList-6c84e51c.css"],
                import.meta.url)).default), t(2, p = (await Ie(() =>
                import ("./GachaInfo-f2769581.js"), ["./GachaInfo-f2769581.js", "./index-a80b06f5.js", "./outfits-eb53be92.js", "./runtime.esm-0af339e4.js", "./index-900c1e47.js", "./stores-db8fba2f.js", "./localstore-babdf033.js", "./audio-6d737711.js", "./preload-helper-176e53da.js", "./historyIdb-feead984.js", "./env-51d3792f.js", "./Iklan-32f8e378.js", "./WishListResult-3d7b1182.js", "./Icon-2b2a573e.js", "../assets/Icon-d3e43583.css", "../assets/WishListResult-42b90934.css", "../assets/GachaInfo-316b2607.css"],
                import.meta.url)).default), t(4, b = (await Ie(() =>
                import ("./MainInventory-c9a3faf7.js"), ["./MainInventory-c9a3faf7.js", "./index-a80b06f5.js", "./outfits-eb53be92.js", "./runtime.esm-0af339e4.js", "./index-900c1e47.js", "./index-80f68401.js", "./WishListResult-3d7b1182.js", "./audio-6d737711.js", "./localstore-babdf033.js", "./Icon-2b2a573e.js", "./stores-db8fba2f.js", "../assets/Icon-d3e43583.css", "./env-51d3792f.js", "../assets/WishListResult-42b90934.css", "./historyIdb-feead984.js", "./preload-helper-176e53da.js", "../assets/MainInventory-46be802a.css"],
                import.meta.url)).default), t(3, g = (await Ie(() =>
                import ("./MainShop-02d917ea.js"), ["./MainShop-02d917ea.js", "./index-a80b06f5.js", "./outfits-eb53be92.js", "./runtime.esm-0af339e4.js", "./index-900c1e47.js", "./env-51d3792f.js", "./stores-db8fba2f.js", "./localstore-babdf033.js", "./audio-6d737711.js", "./historyIdb-feead984.js", "./preload-helper-176e53da.js", "./WishListResult-3d7b1182.js", "./Icon-2b2a573e.js", "../assets/Icon-d3e43583.css", "../assets/WishListResult-42b90934.css", "./accessKey-21d29ba4.js", "../assets/accessKey-1c352f6d.css", "../assets/MainShop-9d5fc905.css"],
                import.meta.url)).default), t(5, A = (await Ie(() =>
                import ("./Obtained-c3e14a56.js"), ["./Obtained-c3e14a56.js", "./index-a80b06f5.js", "./runtime.esm-0af339e4.js", "./index-900c1e47.js", "./outfits-eb53be92.js", "./audio-6d737711.js", "./localstore-babdf033.js", "./Icon-2b2a573e.js", "./stores-db8fba2f.js", "../assets/Icon-d3e43583.css", "../assets/Obtained-f6c87532.css"],
                import.meta.url)).default), t(6, N = (await Ie(() =>
                import ("./WelkinCheckin-876881d4.js"), ["./WelkinCheckin-876881d4.js", "./index-a80b06f5.js", "./runtime.esm-0af339e4.js", "./index-900c1e47.js", "./localstore-babdf033.js", "./stores-db8fba2f.js", "../assets/WelkinCheckin-dec76556.css"],
                import.meta.url)).default)
        },
        I = async () => {
            ({
                setBannerVersionAndPhase: B
            } = await Ie(() =>
                import ("./importLocalData-ae55aada.js"), ["./importLocalData-ae55aada.js", "./stores-db8fba2f.js", "./index-900c1e47.js", "./index-a80b06f5.js", "./localstore-babdf033.js", "./historyIdb-feead984.js", "./preload-helper-176e53da.js", "./runtime.esm-0af339e4.js"],
                import.meta.url))
        };
    let y = !1,
        S = !1;
    const P = () => {
        t(7, S = ft.get("animatedBG"))
    };
    wt("animateBG", P);
    let Y = !1;
    const L = Cn.featured;
    let G, T, O, R = [];
    const W = se => {
            if (!(o.length < 2)) return se ? ot.update(fe => (fe.unshift({
                type: "beginner",
                character: L
            }), fe)) : ot.update(fe => fe.filter(({
                type: $
            }) => $ !== "beginner"))
        },
        F = mt("bannerLoaded"),
        oe = se => {
            R = se ? [{
                type: "beginner",
                character: L
            }] : [], Array.isArray(G) ? G.forEach(fe => R.push({
                type: "events",
                character: fe
            })) : R.push({
                type: "events",
                character: G
            }), R.push({
                type: "weapons",
                weapons: T
            }), R.push({
                type: "standard",
                character: O
            }), ot.set(R), js.set(!!T.fatepointsystem), Nt.set("index"), F()
        },
        Z = async (se, fe) => {
            try {
                if (!se) return;
                const {
                    data: $
                } = await ss(Object.assign({
                    "../lib/data/banners/events/1.0.json": () => Ie(() =>
                        import ("./1.0-61c69dfc.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/1.1.json": () => Ie(() =>
                        import ("./1.1-e1af04de.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/1.2.json": () => Ie(() =>
                        import ("./1.2-f4153b42.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/1.3.json": () => Ie(() =>
                        import ("./1.3-7d064ecd.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/1.4.json": () => Ie(() =>
                        import ("./1.4-3cc5ca59.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/1.5.json": () => Ie(() =>
                        import ("./1.5-4d85a4af.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/1.6.json": () => Ie(() =>
                        import ("./1.6-6735b16b.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.0.json": () => Ie(() =>
                        import ("./2.0-c07fe7aa.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.1.json": () => Ie(() =>
                        import ("./2.1-bdea6bb8.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.2.json": () => Ie(() =>
                        import ("./2.2-218365e0.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.3.json": () => Ie(() =>
                        import ("./2.3-0aa8553c.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.4.json": () => Ie(() =>
                        import ("./2.4-858e66ef.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.5.json": () => Ie(() =>
                        import ("./2.5-2e65cacd.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.6.json": () => Ie(() =>
                        import ("./2.6-53579726.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.7.json": () => Ie(() =>
                        import ("./2.7-ec80a2ed.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/2.8.json": () => Ie(() =>
                        import ("./2.8-adfabfdb.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/3.0.json": () => Ie(() =>
                        import ("./3.0-b1378883.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/3.1.json": () => Ie(() =>
                        import ("./3.1-a47c785e.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/3.2.json": () => Ie(() =>
                        import ("./3.2-c037698e.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/3.3.json": () => Ie(() =>
                        import ("./3.3-013f586b.js"), [],
                        import.meta.url),
                    "../lib/data/banners/events/3.4.json": () => Ie(() =>
                        import ("./3.4-45fd5e10.js"), [],
                        import.meta.url)
                }), `../lib/data/banners/events/${se}.json`), {
                    banners: Q
                } = $.find(({
                    phase: Ae
                }) => Ae === fe), {
                    events: ae,
                    weapons: pe,
                    standardVersion: ve
                } = Q, {
                    standard: ge
                } = await ss(Object.assign({
                    "../lib/data/banners/standard/1.json": () => Ie(() =>
                        import ("./1-d7bdd9fc.js"), [],
                        import.meta.url),
                    "../lib/data/banners/standard/2.json": () => Ie(() =>
                        import ("./2-8d6c51aa.js"), [],
                        import.meta.url),
                    "../lib/data/banners/standard/3.json": () => Ie(() =>
                        import ("./3-1a1dd4bb.js"), [],
                        import.meta.url)
                }), `../lib/data/banners/standard/${ve}.json`);
                return G = ae.item, T = pe, O = ge.featured, oe(r)
            } catch ($) {
                t(8, Y = !0), console.error("Can't Switch banner because it unavailable !", $)
            }
        };
    it(async () => {
        await I(), P(), D(), t(17, y = !0), B(), window.addEventListener("blur", () => Se("wishBacksound", {
            paused: y
        })), window.addEventListener("focus", () => {
            if (s) return Se("wishBacksound")
        }), window.addEventListener("popstate", se => {
            se.state.page || n !== "index" && Nt.set("index")
        })
    });
    let H = !1,
        X = {};
    wt("handleObtained", (se, fe = 0) => {
        if (Array.isArray(se)) {
            se.forEach(({
                item: $,
                value: Q
            }) => {
                t(10, X[$] = Q, X)
            }), t(9, H = !0);
            return
        }
        t(10, X[se] = fe, X), t(9, H = !0)
    });
    const _e = () => {
        t(9, H = !1), t(10, X = {}), Se("close"), n === "index" && zt.set(!0)
    };
    let ee = !1,
        le = !0;
    wt("closeDisclaimer", () => {
        ht.set(0), t(12, le = !1);
        const {
            remaining: se,
            diff: fe,
            latestCheckIn: $
        } = Zs.getData();
        if (t(11, ee = se > 0 && se - fe >= 0 && fe > 0), $ && Zs.checkin(), !ee) return zt.set(!0)
    }), wt("closeWelkin", () => t(11, ee = !1));
    let ue = !1;
    wt("bgToggle", se => {
        t(13, ue = se)
    });
    const ce = () => t(8, Y = !1);
    return l.$$.update = () => {
        l.$$.dirty[0] & 12582913 && t(18, s = f && n === "index" && !u), l.$$.dirty[0] & 393216 && (s ? Se("wishBacksound") : y && Se("wishBacksound", {
            paused: !0
        })), l.$$.dirty[0] & 3145728 && Z(a, i), l.$$.dirty[0] & 524288 && W(r)
    }, [n, v, p, g, b, A, N, S, Y, H, X, ee, le, ue, d, _, _e, y, s, r, i, a, u, f, ce]
}
class Eu extends ze {
    constructor(e) {
        super(), Ge(this, e, ou, au, Oe, {}, null, [-1, -1])
    }
}
export {
    zi as E, yi as F, Kn as I, Zt as M, Bs as N, Eu as P, cs as T, ei as W, Ut as a, ds as b, br as c, Vr as d, Mr as e, ut as f, bs as g, ku as p
};