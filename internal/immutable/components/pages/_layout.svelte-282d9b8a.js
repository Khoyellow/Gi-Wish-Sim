import {
    S as Oe,
    i as Me,
    s as Se,
    a as K,
    e as ne,
    c as F,
    b as te,
    f as J,
    g as le,
    t as ee,
    d as ce,
    h as c,
    E as Z,
    F as Ke,
    o as We,
    k as d,
    q as x,
    l as u,
    m as k,
    r as $,
    n as o,
    p as re,
    G as l,
    H as pe,
    A as _e,
    C as Ne,
    I as Fe,
    u as Ge,
    J as ge,
    K as Ye,
    L as ke,
    v as ze,
    M as Je,
    w as Be,
    N as ye,
    O as oe,
    x as Ue,
    P as Qe,
    y as Ce,
    Q as ue,
    R as Xe,
    T as Ze,
    U as xe,
    V as $e,
    W as et
} from "../../chunks/index-a80b06f5.js";
import {
    _ as C
} from "../../chunks/preload-helper-176e53da.js";
import {
    D as tt,
    k as at
} from "../../chunks/runtime.esm-0af339e4.js";
import {
    p as st
} from "../../chunks/stores-7f31061a.js";
import {
    a as rt,
    i as we,
    m as ie,
    s as ot,
    b as He,
    c as Ee,
    v as nt,
    d as Le,
    e as it,
    f as lt,
    g as ct
} from "../../chunks/stores-db8fba2f.js";
import {
    D as me,
    K as pt,
    H as se,
    A as fe
} from "../../chunks/env-51d3792f.js";
import {
    _ as dt,
    d as ut,
    H as mt,
    m as ft,
    u as ht
} from "../../chunks/historyIdb-feead984.js";
import {
    importLocalBalance as wt
} from "../../chunks/importLocalData-ae55aada.js";
import {
    o as qe,
    d as bt,
    a as _t,
    f as de
} from "../../chunks/outfits-eb53be92.js";
import {
    b as gt
} from "../../chunks/localstore-babdf033.js";
import {
    I as vt
} from "../../chunks/Iklan-32f8e378.js";

function kt(t = {}) {
    const {
        immediate: e = !1,
        onNeedRefresh: a,
        onOfflineReady: r,
        onRegistered: s,
        onRegisteredSW: i,
        onRegisterError: n
    } = t;
    let p, v, R, y;
    const j = async (L = !0) => {
        await R, L && p ? .addEventListener("controlling", b => {
            b.isUpdate && window.location.reload()
        }), await y ? .()
    };
    async function B() {
        if ("serviceWorker" in navigator) {
            const {
                Workbox: L,
                messageSW: b
            } = await C(() =>
                import ("../../chunks/workbox-window.prod.es5-9f0a6626.js"), [],
                import.meta.url);
            y = async () => {
                v && v.waiting && await b(v.waiting, {
                    type: "SKIP_WAITING"
                })
            }, p = new L("./sw.js", {
                scope: "./",
                type: "classic"
            }), p.addEventListener("activated", _ => {
                _.isUpdate || r ? .()
            }); {
                const _ = () => {
                    a ? .()
                };
                p.addEventListener("waiting", _), p.addEventListener("externalwaiting", _)
            }
            p.register({
                immediate: e
            }).then(_ => {
                v = _, i ? i("./sw.js", _) : s ? .(_)
            }).catch(_ => {
                n ? .(_)
            })
        }
    }
    return R = B(), j
}
const yt = new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i),
    Et = new RegExp(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i),
    Lt = t => yt.test(t) || Et.test(t.substr(0, 4)),
    At = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54",
    It = () => {
        const t = screen.orientation ? .angle;
        return !(t === 90 || t === 270) && window.matchMedia("screen and (max-width: 760px)").matches
    },
    Dt = () => {
        const t = navigator.userAgent || navigator.vendor || window.opera || At;
        return navigator ? .userAgentData ? .mobile || Lt(t) || It()
    },
    Tt = async () => {
        try {
            if (!("wakeLock" in navigator)) return;
            let e = await navigator.wakeLock.request("screen");
            window.addEventListener("focus", async () => {
                e = await navigator.wakeLock.request("screen")
            }), window.addEventListener("blur", async () => {
                await e.release(), e = null
            })
        } catch {}
    },
    he = "" + new URL("../../assets/meta-picture-02985178.jpg",
        import.meta.url).href;
const Rt = [{
        dir: "background",
        paths: ["constellation.webp", "detailbg.webp", "element-anemo-bg.webp", "element-cryo-bg.webp", "element-dendro-bg.webp", "element-electro-bg.webp", "element-geo-bg.webp", "element-hydro-bg.webp", "element-pyro-bg.webp", "outfit-background.webp", "splash-background.webp", "wish-background.webp"]
    }, {
        dir: "utility",
        paths: ["3star-bg.webp", "4star-bg.webp", "5star-bg.webp", "acquaint-fate.webp", "book.webp", "book-select-bg.webp", "bow-white.svg", "brand.png", "button.webp", "donate-bnb.png", "donate-btc.png", "donate-dana.png", "donate-ethereum.png", "donate-gopay.png", "donate-kofi.png", "donate-linkaja.png", "donate-ovo.png", "donate-saweria.webp", "donate-shopeepay.png", "donate-solana.png", "fatepointbook-half.webp", "fatepointbook.webp", "genesis-60.webp", "genesis-300.webp", "genesis-980.webp", "genesis-1980.webp", "genesis-3280.webp", "genesis-6480.webp", "genesis-bg.webp", "genesis.webp", "history-select-bg.webp", "imbroke.webp", "menu-active.png", "modal-bg-icon.png", "paypal.png", "primogem.webp", "shop-nav-bg.webp", "welkin-card.webp", "welkin-moon-girl.webp", "welkin.webp"]
    }],
    Ae = [{
        dir: "background",
        paths: ["splash-background.webp"]
    }, {
        dir: "utility",
        paths: ["bg-bow.webp", "bg-catalyst.webp", "bg-claymore.webp", "bg-polearm.webp", "bg-sword.webp", "bg-bonus.webp", "bow-white.svg", "catalyst-white.svg", "claymore-white.svg", "genshin-logo-cn.webp", "genshin-logo.webp", "icon-anemo.svg", "icon-cryo.svg", "icon-dendro.svg", "icon-electro.svg", "icon-geo.svg", "icon-hydro.svg", "icon-pyro.svg", "intertwined-fate.webp", "masterless-stardust.webp", "masterless-starglitter.webp", "polearm-white.svg", "resultcard-bg.svg", "stella-fortuna-4star.webp", "stella-fortuna-5star.webp", "sword-white.svg"]
    }],
    Pt = ["3star-single.mp4", "4star-single.mp4", "4star.mp4", "5star-single.mp4", "5star.mp4"],
    Vt = () => {
        const t = [];
        for (let e = 0; e < 25; e++) t.push(`bg${e+1}.webp`);
        return {
            dir: "background",
            paths: t
        }
    },
    jt = () => ({
        dir: "characters/outfit",
        paths: qe.filter(({
            version: e
        }) => !!e).map(({
            name: e
        }) => `thumbnail/${e}.webp`)
    }),
    Ot = async () => {
        const t = {};
        qe.forEach(({
            name: e
        }) => {
            t[`face/${e}`] = `https://cdn.wishsimulator.app/images/characters/outfit/face/${e}.webp`, t[`splash-art/${e}`] = `https://cdn.wishsimulator.app/images/characters/outfit/splash-art/${e}.webp`
        }), bt.forEach(({
            name: e,
            rarity: a
        }) => {
            t[`face/${e}`] = `https://cdn.wishsimulator.app/images/characters/face/${e}.webp`, t[`splash-art/${e}`] = `https://cdn.wishsimulator.app/images/characters/splash-art/${a}star/${e}.webp`
        }), _t.forEach(({
            name: e,
            weaponType: a,
            rarity: r
        }) => {
            t[e] = `https://cdn.wishsimulator.app/images/weapons/${a}/${r}star/${e}.webp`
        });
        for await (const e of rt) {
            const a = await dt(Object.assign({
                    "../data/banners/events/1.0.json": () => C(() =>
                        import ("../../chunks/1.0-61c69dfc.js"), [],
                        import.meta.url),
                    "../data/banners/events/1.1.json": () => C(() =>
                        import ("../../chunks/1.1-e1af04de.js"), [],
                        import.meta.url),
                    "../data/banners/events/1.2.json": () => C(() =>
                        import ("../../chunks/1.2-f4153b42.js"), [],
                        import.meta.url),
                    "../data/banners/events/1.3.json": () => C(() =>
                        import ("../../chunks/1.3-7d064ecd.js"), [],
                        import.meta.url),
                    "../data/banners/events/1.4.json": () => C(() =>
                        import ("../../chunks/1.4-3cc5ca59.js"), [],
                        import.meta.url),
                    "../data/banners/events/1.5.json": () => C(() =>
                        import ("../../chunks/1.5-4d85a4af.js"), [],
                        import.meta.url),
                    "../data/banners/events/1.6.json": () => C(() =>
                        import ("../../chunks/1.6-6735b16b.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.0.json": () => C(() =>
                        import ("../../chunks/2.0-c07fe7aa.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.1.json": () => C(() =>
                        import ("../../chunks/2.1-bdea6bb8.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.2.json": () => C(() =>
                        import ("../../chunks/2.2-218365e0.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.3.json": () => C(() =>
                        import ("../../chunks/2.3-0aa8553c.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.4.json": () => C(() =>
                        import ("../../chunks/2.4-858e66ef.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.5.json": () => C(() =>
                        import ("../../chunks/2.5-2e65cacd.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.6.json": () => C(() =>
                        import ("../../chunks/2.6-53579726.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.7.json": () => C(() =>
                        import ("../../chunks/2.7-ec80a2ed.js"), [],
                        import.meta.url),
                    "../data/banners/events/2.8.json": () => C(() =>
                        import ("../../chunks/2.8-adfabfdb.js"), [],
                        import.meta.url),
                    "../data/banners/events/3.0.json": () => C(() =>
                        import ("../../chunks/3.0-b1378883.js"), [],
                        import.meta.url),
                    "../data/banners/events/3.1.json": () => C(() =>
                        import ("../../chunks/3.1-a47c785e.js"), [],
                        import.meta.url),
                    "../data/banners/events/3.2.json": () => C(() =>
                        import ("../../chunks/3.2-c037698e.js"), [],
                        import.meta.url),
                    "../data/banners/events/3.3.json": () => C(() =>
                        import ("../../chunks/3.3-013f586b.js"), [],
                        import.meta.url),
                    "../data/banners/events/3.4.json": () => C(() =>
                        import ("../../chunks/3.4-45fd5e10.js"), [],
                        import.meta.url)
                }), `../data/banners/events/${e.toFixed(1)}.json`),
                {
                    data: r
                } = a.default;
            r.forEach(({
                banners: s
            }) => {
                t[s.weapons.name] = `https://cdn.wishsimulator.app/images/banner/weapons/${s.weapons.name}.webp`;
                const i = s.events.item;
                Array.isArray(i) ? i.forEach(({
                    name: n
                }) => {
                    t[n] = `https://cdn.wishsimulator.app/images/banner/character-events/${n}.webp`
                }) : t[i.name] = `https://cdn.wishsimulator.app/images/banner/character-events/${i.name}.webp`
            })
        }
        return t["wanderlust-invocation-1"] = "https://cdn.wishsimulator.app/images/banner/standard/wanderlust-invocation-1.webp", t["wanderlust-invocation-2"] = "https://cdn.wishsimulator.app/images/banner/standard/wanderlust-invocation-2.webp", t.beginner = "https://cdn.wishsimulator.app/images/banner/beginner/beginner.webp", t
    },
    Ie = t => {
        const e = [],
            a = [Vt(), jt(), ...Ae, ...Rt];
        return (t === "preview" ? Ae : a).forEach(({
            dir: s,
            paths: i
        }) => {
            i.forEach(n => {
                const v = {
                    path: `https://cdn.wishsimulator.app/images/${s}/${n}`,
                    asset: n
                };
                e.push(v)
            })
        }), t === "preview" || Pt.forEach(s => {
            const n = {
                path: `https://cdn.wishsimulator.app/videos/${s}`,
                asset: s
            };
            e.push(n)
        }), e
    },
    Mt = async t => {
        try {
            const e = await fetch(t);
            if (e.headers.get("Content-Type") === "text/html") throw new Error("Failed to load Assets");
            const r = await e.blob();
            return (window.URL || window.webkitURL).createObjectURL(r)
        } catch (e) {
            return console.error(e), "error"
        }
    };

function De(t) {
    let e, a, r, s, i, n, p, v, R, y, j, B, L, b, _, N, V, A, P, H, z;
    return {
        c() {
            e = d("div"), a = d("div"), r = d("div"), s = x(`An error occurred while trying to load some assets, this may affect your wish experience.\r
				`), i = d("br"), n = K(), p = d("small"), v = d("small"), R = x(`If you think this is a mistake, please contact me on\r
						`), y = d("a"), j = x(`Discord\r
						`), B = x("!"), L = K(), b = d("div"), _ = d("button"), N = x("Reload"), V = K(), A = d("button"), P = x("Open Anyway"), this.h()
        },
        l(I) {
            e = u(I, "DIV", {
                class: !0
            });
            var O = k(e);
            a = u(O, "DIV", {
                class: !0
            });
            var E = k(a);
            r = u(E, "DIV", {
                class: !0
            });
            var m = k(r);
            s = $(m, `An error occurred while trying to load some assets, this may affect your wish experience.\r
				`), i = u(m, "BR", {}), n = F(m), p = u(m, "SMALL", {});
            var G = k(p);
            v = u(G, "SMALL", {});
            var U = k(v);
            R = $(U, `If you think this is a mistake, please contact me on\r
						`), y = u(U, "A", {
                href: !0,
                style: !0
            });
            var Y = k(y);
            j = $(Y, `Discord\r
						`), Y.forEach(c), B = $(U, "!"), U.forEach(c), G.forEach(c), m.forEach(c), L = F(E), b = u(E, "DIV", {
                class: !0
            });
            var f = k(b);
            _ = u(f, "BUTTON", {
                class: !0
            });
            var D = k(_);
            N = $(D, "Reload"), D.forEach(c), V = F(f), A = u(f, "BUTTON", {
                class: !0
            });
            var Q = k(A);
            P = $(Q, "Open Anyway"), Q.forEach(c), f.forEach(c), E.forEach(c), O.forEach(c), this.h()
        },
        h() {
            o(y, "href", "https://discord.com/users/523179264116523018"), re(y, "color", "#7289da"), o(r, "class", "msg"), o(_, "class", "reload svelte-1lek7ds"), o(A, "class", "open svelte-1lek7ds"), o(b, "class", "btn svelte-1lek7ds"), o(a, "class", "modal-content svelte-1lek7ds"), o(e, "class", "modal svelte-1lek7ds")
        },
        m(I, O) {
            te(I, e, O), l(e, a), l(a, r), l(r, s), l(r, i), l(r, n), l(r, p), l(p, v), l(v, R), l(v, y), l(y, j), l(v, B), l(a, L), l(a, b), l(b, _), l(_, N), l(b, V), l(b, A), l(A, P), H || (z = [pe(_, "click", t[8]), pe(A, "click", t[7])], H = !0)
        },
        p: _e,
        d(I) {
            I && c(e), H = !1, Ne(z)
        }
    }
}

function Te(t) {
    let e, a, r, s, i, n, p, v, R, y, j, B, L, b, _, N, V, A, P, H, z, I, O, E, m, G, U, Y;
    const f = [Wt, St],
        D = [];

    function Q(M, X) {
        return M[4] < 0 ? 0 : 1
    }
    E = Q(t), m = D[E] = f[E](t);
    let T = t[5] && !t[6] && Re();
    return {
        c() {
            e = d("div"), a = d("div"), r = d("div"), s = d("div"), i = d("i"), n = K(), p = d("i"), v = K(), R = d("i"), y = K(), j = d("i"), B = K(), L = d("i"), b = K(), _ = d("i"), N = K(), V = d("i"), A = K(), P = d("div"), H = d("div"), z = K(), I = d("div"), O = K(), m.c(), G = K(), T && T.c(), this.h()
        },
        l(M) {
            e = u(M, "DIV", {
                class: !0
            });
            var X = k(e);
            a = u(X, "DIV", {
                class: !0
            });
            var q = k(a);
            r = u(q, "DIV", {
                class: !0
            });
            var S = k(r);
            s = u(S, "DIV", {
                class: !0
            });
            var g = k(s);
            i = u(g, "I", {
                class: !0
            }), k(i).forEach(c), n = F(g), p = u(g, "I", {
                class: !0
            }), k(p).forEach(c), v = F(g), R = u(g, "I", {
                class: !0
            }), k(R).forEach(c), y = F(g), j = u(g, "I", {
                class: !0
            }), k(j).forEach(c), B = F(g), L = u(g, "I", {
                class: !0
            }), k(L).forEach(c), b = F(g), _ = u(g, "I", {
                class: !0
            }), k(_).forEach(c), N = F(g), V = u(g, "I", {
                class: !0
            }), k(V).forEach(c), g.forEach(c), A = F(S), P = u(S, "DIV", {
                class: !0
            });
            var h = k(P);
            H = u(h, "DIV", {
                class: !0
            }), k(H).forEach(c), z = F(h), I = u(h, "DIV", {
                class: !0,
                style: !0
            }), k(I).forEach(c), h.forEach(c), S.forEach(c), O = F(q), m.l(q), G = F(q), T && T.l(q), q.forEach(c), X.forEach(c), this.h()
        },
        h() {
            o(i, "class", "gi-pyro"), o(p, "class", "gi-hydro"), o(R, "class", "gi-anemo"), o(j, "class", "gi-electro"), o(L, "class", "gi-dendro"), o(_, "class", "gi-cryo"), o(V, "class", "gi-geo"), o(s, "class", "icon"), o(H, "class", "unfilled svelte-1lek7ds"), o(I, "class", "filled animate svelte-1lek7ds"), re(I, "width", t[4].toFixed(2) + "%"), o(P, "class", "blend svelte-1lek7ds"), o(r, "class", "progress svelte-1lek7ds"), o(a, "class", "content svelte-1lek7ds"), o(e, "class", "loader svelte-1lek7ds")
        },
        m(M, X) {
            te(M, e, X), l(e, a), l(a, r), l(r, s), l(s, i), l(s, n), l(s, p), l(s, v), l(s, R), l(s, y), l(s, j), l(s, B), l(s, L), l(s, b), l(s, _), l(s, N), l(s, V), l(r, A), l(r, P), l(P, H), l(P, z), l(P, I), l(a, O), D[E].m(a, null), l(a, G), T && T.m(a, null), Y = !0
        },
        p(M, X) {
            (!Y || X & 16) && re(I, "width", M[4].toFixed(2) + "%");
            let q = E;
            E = Q(M), E === q ? D[E].p(M, X) : (le(), ee(D[q], 1, 1, () => {
                D[q] = null
            }), ce(), m = D[E], m ? m.p(M, X) : (m = D[E] = f[E](M), m.c()), J(m, 1), m.m(a, G)), M[5] && !M[6] ? T || (T = Re(), T.c(), T.m(a, null)) : T && (T.d(1), T = null)
        },
        i(M) {
            Y || (J(m), U && U.end(1), Y = !0)
        },
        o(M) {
            ee(m), U = Fe(e, de, {
                duration: 500,
                delay: 1e3
            }), Y = !1
        },
        d(M) {
            M && c(e), D[E].d(), T && T.d(), M && U && U.end()
        }
    }
}

function St(t) {
    let e, a = (t[4] > 99 ? 100 : t[4].toFixed()) + "",
        r, s, i;
    return {
        c() {
            e = d("div"), r = x(a), s = x("%"), this.h()
        },
        l(n) {
            e = u(n, "DIV", {
                class: !0
            });
            var p = k(e);
            r = $(p, a), s = $(p, "%"), p.forEach(c), this.h()
        },
        h() {
            o(e, "class", "text svelte-1lek7ds")
        },
        m(n, p) {
            te(n, e, p), l(e, r), l(e, s)
        },
        p(n, p) {
            p & 16 && a !== (a = (n[4] > 99 ? 100 : n[4].toFixed()) + "") && Ge(r, a)
        },
        i(n) {
            i || ge(() => {
                i = Ye(e, de, {}), i.start()
            })
        },
        o: _e,
        d(n) {
            n && c(e)
        }
    }
}

function Wt(t) {
    let e, a, r, s;
    return {
        c() {
            e = d("div"), a = x("Connecting"), this.h()
        },
        l(i) {
            e = u(i, "DIV", {
                class: !0
            });
            var n = k(e);
            a = $(n, "Connecting"), n.forEach(c), this.h()
        },
        h() {
            o(e, "class", "text connecting svelte-1lek7ds")
        },
        m(i, n) {
            te(i, e, n), l(e, a), s = !0
        },
        p: _e,
        i(i) {
            s || (ge(() => {
                r || (r = ke(e, de, {}, !0)), r.run(1)
            }), s = !0)
        },
        o(i) {
            r || (r = ke(e, de, {}, !1)), r.run(0), s = !1
        },
        d(i) {
            i && c(e), i && r && r.end()
        }
    }
}

function Re(t) {
    let e, a, r, s, i;
    return {
        c() {
            e = d("div"), a = d("i"), r = K(), s = d("span"), i = x("Rotate for better experience"), this.h()
        },
        l(n) {
            e = u(n, "DIV", {
                class: !0
            });
            var p = k(e);
            a = u(p, "I", {
                class: !0
            }), k(a).forEach(c), r = F(p), s = u(p, "SPAN", {
                class: !0
            });
            var v = k(s);
            i = $(v, "Rotate for better experience"), v.forEach(c), p.forEach(c), this.h()
        },
        h() {
            o(a, "class", "gi-rotate-phone svelte-1lek7ds"), o(s, "class", "svelte-1lek7ds"), o(e, "class", "rotate svelte-1lek7ds")
        },
        m(n, p) {
            te(n, e, p), l(e, a), l(e, r), l(e, s), l(s, i)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Nt(t) {
    let e, a, r, s = t[2] && !t[3] && De(t),
        i = !((t[0] || t[1]) && t[3] && t[4] >= 100) && Te(t);
    return {
        c() {
            s && s.c(), e = K(), i && i.c(), a = ne()
        },
        l(n) {
            s && s.l(n), e = F(n), i && i.l(n), a = ne()
        },
        m(n, p) {
            s && s.m(n, p), te(n, e, p), i && i.m(n, p), te(n, a, p), r = !0
        },
        p(n, [p]) {
            n[2] && !n[3] ? s ? s.p(n, p) : (s = De(n), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), (n[0] || n[1]) && n[3] && n[4] >= 100 ? i && (le(), ee(i, 1, 1, () => {
                i = null
            }), ce()) : i ? (i.p(n, p), p & 27 && J(i, 1)) : (i = Te(n), i.c(), J(i, 1), i.m(a.parentNode, a))
        },
        i(n) {
            r || (J(i), r = !0)
        },
        o(n) {
            ee(i), r = !1
        },
        d(n) {
            s && s.d(n), n && c(e), i && i.d(n), n && c(a)
        }
    }
}

function zt(t, e, a) {
    let r, s;
    Z(t, we, b => a(5, r = b)), Z(t, ie, b => a(6, s = b));
    let {
        isBannerLoaded: i = !1
    } = e, {
        directLoad: n = !1
    } = e, p = !1, v = !1, R = -1;
    const y = Ke("loaded"),
        j = () => {
            y(), a(3, v = !0)
        },
        B = async b => {
            const _ = b === "preview",
                N = [];
            let V = 0;
            const A = _ ? Ie("preview") : Ie();
            for await (const z of A) {
                V++;
                const {
                    path: I,
                    asset: O
                } = z, E = await Mt(I);
                E === "error" && a(2, p = !0), N.push({
                    url: E,
                    name: O
                }), a(4, R = V / A.length * 100)
            }
            const P = await Promise.all(N),
                H = await Ot();
            He.update(z => (z = {}, P.forEach(({
                url: I,
                name: O
            }) => z[O] = I), { ...z,
                ...H
            })), p === !1 && j()
        };
    We(() => {
        B(n ? "preview" : ""), gt.get() > 19 && ot.set(!1)
    });
    const L = () => window.location.reload();
    return t.$$set = b => {
        "isBannerLoaded" in b && a(0, i = b.isBannerLoaded), "directLoad" in b && a(1, n = b.directLoad)
    }, [i, n, p, v, R, r, s, j, L]
}
class Bt extends Oe {
    constructor(e) {
        super(), Me(this, e, zt, Nt, Se, {
            isBannerLoaded: 0,
            directLoad: 1
        })
    }
}
const {
    getByName: Ut,
    addHistory: Ct
} = mt, Pe = async (t, e) => {
    (await Ut(t)).forEach(async r => {
        r.name = e, await Ct(r)
    })
}, Ht = async () => {
    Pe("sagonomiya-kokomi", "sangonomiya-kokomi"), Pe("alhaitam", "alhaitham"), await ut("workbox-expiration")
};
const {
    document: W,
    window: be
} = Xe;

function qt(t) {
    let e;
    return {
        c() {
            e = d("link"), this.h()
        },
        l(a) {
            e = u(a, "LINK", {
                rel: !0,
                href: !0
            }), this.h()
        },
        h() {
            o(e, "rel", "manifest"), o(e, "href", "/appmanifest.json")
        },
        m(a, r) {
            te(a, e, r)
        },
        d(a) {
            a && c(e)
        }
    }
}

function Ve(t) {
    let e, a;
    return e = new vt({
        props: {
            head: !0
        }
    }), {
        c() {
            ze(e.$$.fragment)
        },
        l(r) {
            Be(e.$$.fragment, r)
        },
        m(r, s) {
            Ue(e, r, s), a = !0
        },
        i(r) {
            a || (J(e.$$.fragment, r), a = !0)
        },
        o(r) {
            ee(e.$$.fragment, r), a = !1
        },
        d(r) {
            Ce(e, r)
        }
    }
}

function je(t) {
    let e;
    const a = t[20].default,
        r = Ze(a, t, t[19], null);
    return {
        c() {
            r && r.c()
        },
        l(s) {
            r && r.l(s)
        },
        m(s, i) {
            r && r.m(s, i), e = !0
        },
        p(s, i) {
            r && r.p && (!e || i & 524288) && xe(r, a, s, s[19], e ? et(a, s[19], i, null) : $e(s[19]), null)
        },
        i(s) {
            e || (J(r, s), e = !0)
        },
        o(s) {
            ee(r, s), e = !1
        },
        d(s) {
            r && r.d(s)
        }
    }
}

function Kt(t) {
    let e, a, r, s, i, n, p, v, R, y, j, B, L, b, _, N, V, A, P, H, z, I, O, E, m, G, U, Y, f, D, Q, T, M, X;
    ge(t[21]);
    let q = qt(),
        S = t[5] && t[6] && Ve();
    O = new Bt({
        props: {
            isBannerLoaded: t[4],
            directLoad: t[8]
        }
    });
    let g = !t[12] && t[5] && je(t);
    return {
        c() {
            e = d("meta"), a = d("meta"), r = d("meta"), s = d("link"), i = d("meta"), n = d("meta"), p = d("meta"), v = d("meta"), R = d("meta"), y = d("meta"), j = d("meta"), B = d("meta"), L = d("meta"), b = d("meta"), _ = d("meta"), N = d("link"), V = d("link"), A = d("link"), P = d("link"), q && q.c(), H = ne(), S && S.c(), z = ne(), I = K(), ze(O.$$.fragment), E = K(), m = d("main"), g && g.c(), G = K(), U = d("a"), Y = x("WishSimulator.App"), f = K(), D = d("img"), this.h()
        },
        l(h) {
            const w = Je('[data-svelte="svelte-1by4p03"]', W.head);
            e = u(w, "META", {
                name: !0,
                content: !0
            }), a = u(w, "META", {
                name: !0,
                content: !0
            }), r = u(w, "META", {
                property: !0,
                content: !0
            }), s = u(w, "LINK", {
                rel: !0,
                href: !0,
                title: !0
            }), i = u(w, "META", {
                property: !0,
                content: !0
            }), n = u(w, "META", {
                property: !0,
                content: !0
            }), p = u(w, "META", {
                property: !0,
                content: !0
            }), v = u(w, "META", {
                property: !0,
                content: !0
            }), R = u(w, "META", {
                property: !0,
                content: !0
            }), y = u(w, "META", {
                name: !0,
                content: !0
            }), j = u(w, "META", {
                property: !0,
                content: !0
            }), B = u(w, "META", {
                property: !0,
                content: !0
            }), L = u(w, "META", {
                name: !0,
                content: !0
            }), b = u(w, "META", {
                name: !0,
                content: !0
            }), _ = u(w, "META", {
                name: !0,
                content: !0
            }), N = u(w, "LINK", {
                rel: !0,
                href: !0,
                as: !0,
                type: !0,
                crossorigin: !0
            }), V = u(w, "LINK", {
                rel: !0,
                href: !0,
                as: !0,
                type: !0,
                crossorigin: !0
            }), A = u(w, "LINK", {
                rel: !0,
                href: !0,
                as: !0,
                type: !0,
                crossorigin: !0
            }), P = u(w, "LINK", {
                rel: !0,
                href: !0,
                as: !0,
                type: !0,
                crossorigin: !0
            }), q && q.l(w), H = ne(), S && S.l(w), z = ne(), w.forEach(c), I = F(h), Be(O.$$.fragment, h), E = F(h), m = u(h, "MAIN", {
                class: !0,
                style: !0
            });
            var ae = k(m);
            g && g.l(ae), G = F(ae), U = u(ae, "A", {
                href: !0,
                class: !0,
                title: !0
            });
            var ve = k(U);
            Y = $(ve, "WishSimulator.App"), ve.forEach(c), f = F(ae), D = u(ae, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), ae.forEach(c), this.h()
        },
        h() {
            o(e, "name", "description"), o(e, "content", me), o(a, "name", "keywords"), o(a, "content", pt), o(r, "property", "al:web:url"), o(r, "content", se), o(s, "rel", "fluid-icon"), o(s, "href", "" + (se + he)), o(s, "title", fe), o(i, "property", "og:url"), o(i, "content", se), o(n, "property", "og:type"), o(n, "content", "website"), o(p, "property", "og:title"), o(p, "content", fe), o(v, "property", "og:description"), o(v, "content", me), o(R, "property", "og:image"), o(R, "content", "" + (se + he)), o(y, "name", "twitter:card"), o(y, "content", "summary_large_image"), o(j, "property", "twitter:domain"), o(j, "content", se.replace("https://", "").replace("http://", "")), o(B, "property", "twitter:url"), o(B, "content", se), o(L, "name", "twitter:title"), o(L, "content", fe), o(b, "name", "twitter:description"), o(b, "content", me), o(_, "name", "twitter:image"), o(_, "content", "" + (se + he)), o(N, "rel", "preload"), o(N, "href", "https://cdn.wishsimulator.app/fonts/optimized_global_web.woff2"), o(N, "as", "font"), o(N, "type", "font/woff2"), o(N, "crossorigin", ""), o(V, "rel", "preload"), o(V, "href", "https://cdn.wishsimulator.app/fonts/optimized_th_web.woff2"), o(V, "as", "font"), o(V, "type", "font/woff2"), o(V, "crossorigin", ""), o(A, "rel", "preload"), o(A, "href", "https://cdn.wishsimulator.app/fonts/optimized_jp_web.woff2"), o(A, "as", "font"), o(A, "type", "font/woff2"), o(A, "crossorigin", ""), o(P, "rel", "preload"), o(P, "href", "https://cdn.wishsimulator.app/fonts/optimized_zh_web.woff2"), o(P, "as", "font"), o(P, "type", "font/woff2"), o(P, "crossorigin", ""), o(U, "href", "/"), o(U, "class", "uid"), o(U, "title", "Try Your Luck by this Simulator"), ye(D.src, Q = t[13][`genshin-logo${t[2]?"-cn":""}.webp`]) || o(D, "src", Q), o(D, "alt", "genshin logo"), o(D, "class", "logo"), oe(D, "yuanshen", t[2]), o(m, "class", t[3]), re(m, "height", t[11] ? `${t[11]}px` : "100vh"), re(m, "--genshin-font", "var(--gi-" + t[9] + "-font)"), oe(m, "mobile", t[10]), oe(m, "preview", t[7])
        },
        m(h, w) {
            l(W.head, e), l(W.head, a), l(W.head, r), l(W.head, s), l(W.head, i), l(W.head, n), l(W.head, p), l(W.head, v), l(W.head, R), l(W.head, y), l(W.head, j), l(W.head, B), l(W.head, L), l(W.head, b), l(W.head, _), l(W.head, N), l(W.head, V), l(W.head, A), l(W.head, P), q && q.m(W.head, null), l(W.head, H), S && S.m(W.head, null), l(W.head, z), te(h, I, w), Ue(O, h, w), te(h, E, w), te(h, m, w), g && g.m(m, null), l(m, G), l(m, U), l(U, Y), l(m, f), l(m, D), T = !0, M || (X = [pe(be, "resize", t[21]), pe(U, "click", Qe(t[22]))], M = !0)
        },
        p(h, [w]) {
            h[5] && h[6] ? S ? w & 96 && J(S, 1) : (S = Ve(), S.c(), J(S, 1), S.m(z.parentNode, z)) : S && (le(), ee(S, 1, 1, () => {
                S = null
            }), ce());
            const ae = {};
            w & 16 && (ae.isBannerLoaded = h[4]), w & 256 && (ae.directLoad = h[8]), O.$set(ae), !h[12] && h[5] ? g ? (g.p(h, w), w & 4128 && J(g, 1)) : (g = je(h), g.c(), J(g, 1), g.m(m, G)) : g && (le(), ee(g, 1, 1, () => {
                g = null
            }), ce()), (!T || w & 8196 && !ye(D.src, Q = h[13][`genshin-logo${h[2]?"-cn":""}.webp`])) && o(D, "src", Q), w & 4 && oe(D, "yuanshen", h[2]), (!T || w & 8) && o(m, "class", h[3]), (!T || w & 2048) && re(m, "height", h[11] ? `${h[11]}px` : "100vh"), (!T || w & 512) && re(m, "--genshin-font", "var(--gi-" + h[9] + "-font)"), w & 1032 && oe(m, "mobile", h[10]), w & 136 && oe(m, "preview", h[7])
        },
        i(h) {
            T || (J(S), J(O.$$.fragment, h), J(g), T = !0)
        },
        o(h) {
            ee(S), ee(O.$$.fragment, h), ee(g), T = !1
        },
        d(h) {
            c(e), c(a), c(r), c(s), c(i), c(n), c(p), c(v), c(R), c(y), c(j), c(B), c(L), c(b), c(_), c(N), c(V), c(A), c(P), q && q.d(h), c(H), S && S.d(h), c(z), h && c(I), Ce(O, h), h && c(E), h && c(m), g && g.d(), M = !1, Ne(X)
        }
    }
}

function Ft(t, e, a) {
    let r, s, i, n, p, v, R, y, j, B, L, b, _, N, V, A;
    Z(t, we, f => a(23, R = f)), Z(t, st, f => a(16, y = f)), Z(t, Ee, f => a(24, j = f)), Z(t, it, f => a(17, B = f)), Z(t, lt, f => a(18, L = f)), Z(t, tt, f => a(3, b = f)), Z(t, ie, f => a(10, _ = f)), Z(t, Le, f => a(11, N = f)), Z(t, at, f => a(12, V = f)), Z(t, He, f => a(13, A = f));
    let {
        $$slots: P = {},
        $$scope: H
    } = e, z, I, O = !1, E = !1, m = !1;
    const G = () => {
        if (j) return ie.set(!0);
        const f = screen.orientation ? .angle || 0,
            D = f === 90 || f === 270;
        ie.set(D)
    };
    ue("bannerLoaded", () => a(4, O = !0)), ue("loaded", () => a(5, E = !0)), ue("showAd", f => a(6, m = f)), ft(), We(() => {
        if (y.url.host.includes("cdn.")) return window.location.replace("https://wishsimulator.app/");
        const D = ["adkey", "install", "privacy-policy", "screen"];
        if (n[1] && !D.includes(n[1].toLowerCase())) return window.location.replace("/");
        const Q = new URL(window.location.href),
            T = new URLSearchParams(Q.search);
        Ee.set(T.get("pwa") === "true" || !!T.get("pwasc")), kt(), Tt(), Ht(), wt(), ht.init(), we.set(Dt() || I < 601), R && G(), window.addEventListener("orientationchange", () => {
            R && G()
        }), document.addEventListener("contextmenu", M => M.preventDefault())
    });

    function U() {
        a(0, z = be.innerHeight), a(1, I = be.innerWidth)
    }
    const Y = () => window.location.replace("/");
    return t.$$set = f => {
        "$$scope" in f && a(19, H = f.$$scope)
    }, t.$$.update = () => {
        if (t.$$.dirty & 8 && a(15, r = b ? .toLowerCase() || ""), t.$$.dirty & 32768 && a(2, s = r.includes("cn") || r.includes("ja")), t.$$.dirty & 32772 && a(9, i = s || r.includes("th") ? r.split("-")[0] : "global"), t.$$.dirty & 2 && nt.set(I), t.$$.dirty & 1 && Le.set(z), t.$$.dirty & 65536 && a(14, n = y.url.pathname.split("/")), t.$$.dirty & 16384 && a(8, p = n[1] !== ""), t.$$.dirty & 16384 && a(7, v = n[1] === "screen"), t.$$.dirty & 393216 && L.length > 0) {
            const {
                type: f
            } = L[B];
            ct.set(f === "standard" || f === "beginner")
        }
    }, [z, I, s, b, O, E, m, v, p, i, _, N, V, A, n, r, y, B, L, H, P, U, Y]
}
class sa extends Oe {
    constructor(e) {
        super(), Me(this, e, Ft, Kt, Se, {})
    }
}
export {
    sa as
    default
};