import {
    S as j,
    i as H,
    s as U,
    k as h,
    a as V,
    l as m,
    m as b,
    c as w,
    h as u,
    n as k,
    b as p,
    G as A,
    H as I,
    P as N,
    f as D,
    t as M,
    E as q,
    Y as x,
    ab as K,
    ac as E,
    q as z,
    r as C,
    u as O,
    A as B,
    T as P,
    U as Y,
    V as F,
    W as G
} from "./index-a80b06f5.js";
import {
    Y as L
} from "./runtime.esm-0af339e4.js";
import {
    l as v
} from "./localstore-babdf033.js";

function W(n) {
    let t;
    return {
        c() {
            t = h("i"), this.h()
        },
        l(e) {
            t = m(e, "I", {
                class: !0
            }), b(t).forEach(u), this.h()
        },
        h() {
            k(t, "class", "gi-times svelte-nlndo9")
        },
        m(e, s) {
            p(e, t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function J(n) {
    let t;
    return {
        c() {
            t = h("i"), this.h()
        },
        l(e) {
            t = m(e, "I", {
                class: !0
            }), b(t).forEach(u), this.h()
        },
        h() {
            k(t, "class", "gi-circle-o svelte-nlndo9")
        },
        m(e, s) {
            p(e, t, s)
        },
        d(e) {
            e && u(t)
        }
    }
}

function Q(n) {
    let t, e = (n[1] || (n[0] === "confirm" ? n[3]("confirmButton") : n[3]("cancelButton"))) + "",
        s;
    return {
        c() {
            t = h("span"), s = z(e)
        },
        l(a) {
            t = m(a, "SPAN", {});
            var i = b(t);
            s = C(i, e), i.forEach(u)
        },
        m(a, i) {
            p(a, t, i), A(t, s)
        },
        p(a, i) {
            i & 11 && e !== (e = (a[1] || (a[0] === "confirm" ? a[3]("confirmButton") : a[3]("cancelButton"))) + "") && O(s, e)
        },
        i: B,
        o: B,
        d(a) {
            a && u(t)
        }
    }
}

function R(n) {
    let t;
    const e = n[7].default,
        s = P(e, n, n[6], null);
    return {
        c() {
            s && s.c()
        },
        l(a) {
            s && s.l(a)
        },
        m(a, i) {
            s && s.m(a, i), t = !0
        },
        p(a, i) {
            s && s.p && (!t || i & 64) && Y(s, e, a, a[6], t ? G(e, a[6], i, null) : F(a[6]), null)
        },
        i(a) {
            t || (D(s, a), t = !0)
        },
        o(a) {
            M(s, a), t = !1
        },
        d(a) {
            s && s.d(a)
        }
    }
}

function X(n) {
    let t, e, s, a, i, d, _;

    function y(l, r) {
        return l[0] === "confirm" ? J : W
    }
    let f = y(n),
        o = f(n);
    const g = [R, Q],
        c = [];

    function T(l, r) {
        return l[4] ? 0 : 1
    }
    return s = T(n), a = c[s] = g[s](n), {
        c() {
            t = h("button"), o.c(), e = V(), a.c(), this.h()
        },
        l(l) {
            t = m(l, "BUTTON", {
                class: !0
            });
            var r = b(t);
            o.l(r), e = w(r), a.l(r), r.forEach(u), this.h()
        },
        h() {
            t.disabled = n[2], k(t, "class", "svelte-nlndo9")
        },
        m(l, r) {
            p(l, t, r), o.m(t, null), A(t, e), c[s].m(t, null), i = !0, d || (_ = I(t, "click", N(n[5])), d = !0)
        },
        p(l, [r]) {
            f !== (f = y(l)) && (o.d(1), o = f(l), o && (o.c(), o.m(t, e))), a.p(l, r), (!i || r & 4) && (t.disabled = l[2])
        },
        i(l) {
            i || (D(a), i = !0)
        },
        o(l) {
            M(a), i = !1
        },
        d(l) {
            l && u(t), o.d(), c[s].d(), d = !1, _()
        }
    }
}

function Z(n, t, e) {
    let s;
    q(n, L, c => e(3, s = c));
    let {
        $$slots: a = {},
        $$scope: i
    } = t;
    const d = t.$$slots;
    let {
        type: _ = "confirm"
    } = t, {
        text: y = ""
    } = t, {
        disabled: f = !1
    } = t;
    const o = x(),
        g = () => o("click");
    return n.$$set = c => {
        e(9, t = K(K({}, t), E(c))), "type" in c && e(0, _ = c.type), "text" in c && e(1, y = c.text), "disabled" in c && e(2, f = c.disabled), "$$scope" in c && e(6, i = c.$$scope)
    }, t = E(t), [_, y, f, s, d, g, i, a]
}
class nt extends j {
    constructor(t) {
        super(), H(this, t, Z, X, U, {
            type: 0,
            text: 1,
            disabled: 2
        })
    }
}
const $ = async n => {
        const t = new TextEncoder().encode(n),
            e = await crypto.subtle.digest("SHA-256", t);
        return Array.from(new Uint8Array(e)).map(i => i.toString(16).padStart(2, "0")).join("")
    },
    tt = async () => {
        const n = new Date().toISOString(),
            t = await fetch(`https://gist.githubusercontent.com/AguzzTN54/3816708e01827a5c64f4903242ede7b0/raw?date=${n}`),
            {
                hash: e,
                previousKey: s
            } = await t.json();
        return {
            baseKey: e,
            previousKey: s
        }
    },
    S = async n => {
        const {
            baseKey: t,
            previousKey: e
        } = await tt(), s = await $(n ? .trim()), a = t === s, i = a ? "none" : e[s] || null;
        return {
            isKeyValid: a,
            expiryDate: i
        }
    },
    it = {
        _set(n) {
            const t = n.trim().split("").reverse().join("");
            v.set("adKey", t)
        },
        clear() {
            return v.set("adKey", null)
        },
        async checkLocal() {
            const n = v.get("adKey"),
                t = n ? .split("").reverse().join("");
            try {
                if (!n) return {
                    validity: !1,
                    storedKey: t,
                    status: "ok"
                };
                const {
                    isKeyValid: e,
                    expiryDate: s
                } = await S(t);
                return {
                    validity: e,
                    expiryDate: s,
                    storedKey: t,
                    status: "ok"
                }
            } catch {
                return {
                    validity: !1,
                    storedKey: t,
                    status: "offline"
                }
            }
        },
        async verify(n) {
            try {
                const {
                    isKeyValid: t,
                    expiryDate: e
                } = await S(n);
                return t && this._set(n), {
                    validity: t,
                    msg: t ? "success" : e && e !== "none" ? "menu.keyExpired1" : "menu.invalidKey"
                }
            } catch {
                return {
                    validity: !1,
                    msg: "connectionFailed"
                }
            }
        }
    };
export {
    nt as B, it as a
};