import {
    l as I
} from "./localstore-babdf033.js";
import {
    n as g,
    p as O
} from "./stores-db8fba2f.js";
import {
    _ as c
} from "./preload-helper-176e53da.js";
import {
    y as w,
    $ as C,
    F as V
} from "./runtime.esm-0af339e4.js";
const L = (e, t) => {
        const n = e[t];
        return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((o, s) => {
            (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(s.bind(null, new Error("Unknown variable dynamic import: " + t)))
        })
    },
    j = ["en-US", "id-ID", "it-IT", "ja-JP", "pt-BR", "ru-RU", "th-TH", "vi-VN", "zh-CN"],
    N = ["en-US", "ja-JP", "pt-BR", "ru-RU", "vi-VN", "zh-CN"],
    k = () => {
        const t = localStorage.getItem("locale") || V();
        return j.find(o => o.includes(t)) || "en-US"
    },
    ne = () => {
        j.forEach(t => {
            w(t, () => L(Object.assign({
                "../../locales/en-US.json": () => c(() =>
                    import ("./en-US-1726bde3.js"), [],
                    import.meta.url),
                "../../locales/id-ID.json": () => c(() =>
                    import ("./id-ID-a803abad.js"), [],
                    import.meta.url),
                "../../locales/it-IT.json": () => c(() =>
                    import ("./it-IT-825932a1.js"), [],
                    import.meta.url),
                "../../locales/ja-JP.json": () => c(() =>
                    import ("./ja-JP-8fbc5f8a.js"), [],
                    import.meta.url),
                "../../locales/pt-BR.json": () => c(() =>
                    import ("./pt-BR-24b9fc20.js"), [],
                    import.meta.url),
                "../../locales/ru-RU.json": () => c(() =>
                    import ("./ru-RU-294f8330.js"), [],
                    import.meta.url),
                "../../locales/th-TH.json": () => c(() =>
                    import ("./th-TH-eb6fc969.js"), [],
                    import.meta.url),
                "../../locales/vi-VN.json": () => c(() =>
                    import ("./vi-VN-70005804.js"), [],
                    import.meta.url),
                "../../locales/zh-CN.json": () => c(() =>
                    import ("./zh-CN-57ee0090.js"), [],
                    import.meta.url)
            }), `../../locales/${t}.json`))
        }), N.forEach(t => {
            w(t, () => L(Object.assign({
                "../../locales/items/en-US.json": () => c(() =>
                    import ("./en-US-6534de52.js"), [],
                    import.meta.url),
                "../../locales/items/ja-JP.json": () => c(() =>
                    import ("./ja-JP-7da04ed3.js"), [],
                    import.meta.url),
                "../../locales/items/pt-BR.json": () => c(() =>
                    import ("./pt-BR-88836ecd.js"), [],
                    import.meta.url),
                "../../locales/items/ru-RU.json": () => c(() =>
                    import ("./ru-RU-51f8c17f.js"), [],
                    import.meta.url),
                "../../locales/items/vi-VN.json": () => c(() =>
                    import ("./vi-VN-7d4ff59b.js"), [],
                    import.meta.url),
                "../../locales/items/zh-CN.json": () => c(() =>
                    import ("./zh-CN-b9295beb.js"), [],
                    import.meta.url)
            }), `../../locales/items/${t}.json`))
        });
        const e = k();
        C({
            fallbackLocale: "en-US",
            initialLocale: e
        })
    },
    P = () => I.get("notice") || [],
    S = (e = []) => I.set("notice", e),
    oe = {
        openNotice(e) {
            const t = P();
            t.includes(e) || (t.push(e), S(t), g.set(t))
        },
        onLoadCheck() {
            const e = P();
            g.set(e)
        }
    },
    b = [{
        country: ["br"],
        currency: "BRL",
        symbol: "R$",
        format: "{symbol}{nominal}",
        list: {
            welkin: 27.9,
            genesis: {
                60: 4.9,
                300: 27.9,
                980: 84.9,
                1980: 169.9,
                3280: 279.9,
                6480: 549.9
            }
        }
    }, {
        country: ["cn"],
        currency: "CNY",
        symbol: "\xA5",
        format: "{symbol}{nominal}",
        list: {
            welkin: 30,
            genesis: {
                60: 6,
                300: 30,
                980: 98,
                1980: 198,
                3280: 328,
                6480: 648
            }
        }
    }, {
        country: ["ad", "at", "be", "cy", "gr", "es", "fr", "de", "fi", "it", "pt", "nl"],
        currency: "EUR",
        symbol: "\u20AC",
        format: "{symbol}{nominal}",
        list: {
            welkin: 4.49,
            genesis: {
                60: .99,
                300: 4.49,
                980: 14.99,
                1980: 29.99,
                3280: 49.99,
                6480: 99.99
            }
        }
    }, {
        country: ["uk"],
        currency: "GBP",
        symbol: "\xA3",
        format: "{symbol}{nominal}",
        list: {
            welkin: 4.49,
            genesis: {
                60: .89,
                300: 4.49,
                980: 12.99,
                1980: 25.99,
                3280: 44.99,
                6480: 89.99
            }
        }
    }, {
        country: ["id"],
        currency: "IDR",
        symbol: "IDR",
        format: "{symbol} {nominal}",
        list: {
            welkin: 75e3,
            genesis: {
                60: 15e3,
                300: 75e3,
                980: 219e3,
                1980: 439e3,
                3280: 739e3,
                6480: 1499e3
            }
        }
    }, {
        country: ["ja"],
        currency: "JPY",
        symbol: "\xA5",
        format: "{symbol}{nominal}",
        list: {
            welkin: 610,
            genesis: {
                60: 120,
                300: 610,
                980: 1840,
                1980: 3680,
                3280: 6100,
                6480: 12e3
            }
        }
    }, {
        country: ["ko"],
        currency: "KRW",
        symbol: "\u20A9",
        format: "{symbol}{nominal}",
        list: {
            welkin: 5900,
            genesis: {
                60: 1200,
                300: 5900,
                980: 19e3,
                1980: 37e3,
                3280: 65e3,
                6480: 119e3
            }
        }
    }, {
        country: ["ph"],
        currency: "PHP",
        symbol: "\u20B1",
        format: "{symbol}{nominal}",
        list: {
            welkin: 249,
            genesis: {
                60: 49,
                300: 249,
                980: 749,
                1980: 1490,
                3280: 2490,
                6480: 4990
            }
        }
    }, {
        country: ["ru"],
        currency: "RUB",
        symbol: "\u20BD",
        format: "{nominal}{symbol}",
        list: {
            welkin: 499,
            genesis: {
                60: 99,
                300: 499,
                980: 1390,
                1980: 2790,
                3280: 4690,
                6480: 9490
            }
        }
    }, {
        country: ["th"],
        currency: "THB",
        symbol: "\u0E3F",
        format: "{symbol}{nominal}",
        list: {
            welkin: 179,
            genesis: {
                60: 35,
                300: 179,
                980: 549,
                1980: 1100,
                3280: 1800,
                6480: 3700
            }
        }
    }, {
        country: ["us"],
        currency: "USD",
        symbol: "US$",
        format: "{symbol}{nominal}",
        list: {
            welkin: 4.99,
            genesis: {
                60: .99,
                300: 4.99,
                980: 14.99,
                1980: 29.99,
                3280: 49.99,
                6480: 99.99
            }
        }
    }, {
        country: ["vn"],
        currency: "VND",
        symbol: "\u0111",
        format: "{nominal}{symbol}",
        list: {
            welkin: 109e3,
            genesis: {
                60: 22e3,
                300: 109e3,
                980: 329e3,
                1980: 699e3,
                3280: 1099e3,
                6480: 2199e3
            }
        }
    }],
    re = {
        versionReset: [1, 2.1, 3.1],
        topupBonus: {
            300: 30,
            980: 110,
            1980: 260,
            3280: 600,
            6480: 1600
        }
    },
    se = b.map(({
        symbol: e,
        currency: t
    }) => ({
        symbol: e,
        currency: t
    })),
    U = e => e.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    ie = {
        init(e = null) {
            const {
                symbol: t,
                list: n,
                format: o
            } = this.checkUsedCurrency(e);
            this._symbol = t, this._list = n, this._format = o;
            const {
                welkin: s,
                genesis: i
            } = n, r = {
                genesis: {}
            };
            r.welkin = this.formatPrice(s), Object.keys(i).forEach(m => {
                r.genesis[m] = this.formatPrice(i[m])
            }), O.set(r)
        },
        checkUsedCurrency(e) {
            const t = e || I.get("currency") || k();
            return b.find(({
                country: o,
                currency: s
            }) => {
                const i = t === s,
                    r = o.find(l => t.toLocaleLowerCase().includes(l));
                return i || t.length < 6 && r
            }) || b.find(({
                currency: o
            }) => o === "USD")
        },
        formatPrice(e) {
            const t = e.toFixed(2).toString(),
                n = U(t);
            return this._format.replace("{symbol}", this._symbol).replace("{nominal}", n)
        },
        getTotalSpend(e) {
            const t = this._list.genesis[60] / 60,
                n = e * 160 * t;
            return this.formatPrice(n)
        }
    },
    M = (e, t) => t.some(n => e instanceof n);
let v, B;

function x() {
    return v || (v = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function F() {
    return B || (B = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const T = new WeakMap,
    h = new WeakMap,
    A = new WeakMap,
    f = new WeakMap,
    E = new WeakMap;

function H(e) {
    const t = new Promise((n, o) => {
        const s = () => {
                e.removeEventListener("success", i), e.removeEventListener("error", r)
            },
            i = () => {
                n(d(e.result)), s()
            },
            r = () => {
                o(e.error), s()
            };
        e.addEventListener("success", i), e.addEventListener("error", r)
    });
    return t.then(n => {
        n instanceof IDBCursor && T.set(n, e)
    }).catch(() => {}), E.set(t, e), t
}

function W(e) {
    if (h.has(e)) return;
    const t = new Promise((n, o) => {
        const s = () => {
                e.removeEventListener("complete", i), e.removeEventListener("error", r), e.removeEventListener("abort", r)
            },
            i = () => {
                n(), s()
            },
            r = () => {
                o(e.error || new DOMException("AbortError", "AbortError")), s()
            };
        e.addEventListener("complete", i), e.addEventListener("error", r), e.addEventListener("abort", r)
    });
    h.set(e, t)
}
let D = {
    get(e, t, n) {
        if (e instanceof IDBTransaction) {
            if (t === "done") return h.get(e);
            if (t === "objectStoreNames") return e.objectStoreNames || A.get(e);
            if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return d(e[t])
    },
    set(e, t, n) {
        return e[t] = n, !0
    },
    has(e, t) {
        return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
    }
};

function $(e) {
    D = e(D)
}

function J(e) {
    return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
        const o = e.call(_(this), t, ...n);
        return A.set(o, t.sort ? t.sort() : [t]), d(o)
    } : F().includes(e) ? function(...t) {
        return e.apply(_(this), t), d(T.get(this))
    } : function(...t) {
        return d(e.apply(_(this), t))
    }
}

function K(e) {
    return typeof e == "function" ? J(e) : (e instanceof IDBTransaction && W(e), M(e, x()) ? new Proxy(e, D) : e)
}

function d(e) {
    if (e instanceof IDBRequest) return H(e);
    if (f.has(e)) return f.get(e);
    const t = K(e);
    return t !== e && (f.set(e, t), E.set(t, e)), t
}
const _ = e => E.get(e);

function z(e, t, {
    blocked: n,
    upgrade: o,
    blocking: s,
    terminated: i
} = {}) {
    const r = indexedDB.open(e, t),
        m = d(r);
    return o && r.addEventListener("upgradeneeded", l => {
        o(d(r.result), l.oldVersion, l.newVersion, d(r.transaction))
    }), n && r.addEventListener("blocked", () => n()), m.then(l => {
        i && l.addEventListener("close", () => i()), s && l.addEventListener("versionchange", () => s())
    }).catch(() => {}), m
}

function ce(e, {
    blocked: t
} = {}) {
    const n = indexedDB.deleteDatabase(e);
    return t && n.addEventListener("blocked", () => t()), d(n).then(() => {})
}
const q = ["get", "getKey", "getAll", "getAllKeys", "count"],
    Y = ["put", "add", "delete", "clear"],
    p = new Map;

function R(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
    if (p.get(t)) return p.get(t);
    const n = t.replace(/FromIndex$/, ""),
        o = t !== n,
        s = Y.includes(n);
    if (!(n in (o ? IDBIndex : IDBObjectStore).prototype) || !(s || q.includes(n))) return;
    const i = async function(r, ...m) {
        const l = this.transaction(r, s ? "readwrite" : "readonly");
        let y = l.store;
        return o && (y = y.index(m.shift())), (await Promise.all([y[n](...m), s && l.done]))[0]
    };
    return p.set(t, i), i
}
$(e => ({ ...e,
    get: (t, n, o) => R(t, n) || e.get(t, n, o),
    has: (t, n) => !!R(t, n) || e.has(t, n)
}));
const G = 1,
    Q = "WishSimulator",
    a = "history";
let u;
u = z(Q, G, {
    upgrade(e) {
        const t = e.createObjectStore(a, {
            keyPath: "id",
            autoIncrement: !0
        });
        t.createIndex("banner", "banner", {
            unique: !1
        }), t.createIndex("name", "name", {
            unique: !1
        })
    }
});
const ae = {
    async historyCount() {
        return (await u).count(a)
    },
    async getList(e) {
        return (await u).getAllFromIndex(a, "banner", e)
    },
    async countItem(e) {
        return (await u).countFromIndex(a, "name", e)
    },
    async getByName(e) {
        return (await u).getAllFromIndex(a, "name", e)
    },
    async resetHistory(e) {
        try {
            const t = await u;
            return (await t.getAllKeysFromIndex(a, "banner", e)).forEach(o => t.delete(a, o)), "success"
        } catch {
            return "failed"
        }
    },
    async clearIDB() {
        return (await u).clear(a)
    },
    async getAllHistories() {
        return (await u).getAll(a)
    },
    async addHistory(e) {
        if (!!e.hasOwnProperty("banner")) return (await u).put(a, e)
    },
    async delete(e) {
        if (!!e) return (await u).delete(a, e)
    }
};
export {
    ae as H, L as _, se as a, ce as d, re as g, ne as m, oe as n, ie as u
};