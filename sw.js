try {
    self["workbox:core:6.5.3"] && _()
} catch {}
const M = (a, ...e) => {
        let t = a;
        return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t
    },
    I = M;
class l extends Error {
    constructor(e, t) {
        const s = I(e, t);
        super(s), this.name = e, this.details = t
    }
}
const S = new Set,
    f = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: typeof registration < "u" ? registration.scope : ""
    },
    P = a => [f.prefix, a, f.suffix].filter(e => e && e.length > 0).join("-"),
    W = a => {
        for (const e of Object.keys(f)) a(e)
    },
    R = {
        updateDetails: a => {
            W(e => {
                typeof a[e] == "string" && (f[e] = a[e])
            })
        },
        getGoogleAnalyticsName: a => a || P(f.googleAnalytics),
        getPrecacheName: a => a || P(f.precache),
        getPrefix: () => f.prefix,
        getRuntimeName: a => a || P(f.runtime),
        getSuffix: () => f.suffix
    };

function K(a, e) {
    const t = new URL(a);
    for (const s of e) t.searchParams.delete(s);
    return t.href
}
async function D(a, e, t, s) {
    const n = K(e.url, t);
    if (e.url === n) return a.match(e, s);
    const r = Object.assign(Object.assign({}, s), {
            ignoreSearch: !0
        }),
        c = await a.keys(e, r);
    for (const i of c) {
        const o = K(i.url, t);
        if (n === o) return a.match(i, s)
    }
}
let w;

function A() {
    if (w === void 0) {
        const a = new Response("");
        if ("body" in a) try {
            new Response(a.body), w = !0
        } catch {
            w = !1
        }
        w = !1
    }
    return w
}
class j {
    constructor() {
        this.promise = new Promise((e, t) => {
            this.resolve = e, this.reject = t
        })
    }
}
async function F() {
    for (const a of S) await a()
}
const q = a => new URL(String(a), location.href).href.replace(new RegExp(`^${location.origin}`), "");

function H(a) {
    return new Promise(e => setTimeout(e, a))
}

function x(a, e) {
    const t = e();
    return a.waitUntil(t), t
}
async function $(a, e) {
    let t = null;
    if (a.url && (t = new URL(a.url).origin), t !== self.location.origin) throw new l("cross-origin-copy-response", {
        origin: t
    });
    const s = a.clone(),
        n = {
            headers: new Headers(s.headers),
            status: s.status,
            statusText: s.statusText
        },
        r = e ? e(n) : n,
        c = A() ? s.body : await s.blob();
    return new Response(c, r)
}

function B() {
    self.addEventListener("activate", () => self.clients.claim())
}

function V(a) {
    R.updateDetails(a)
}

function G() {
    self.skipWaiting()
}
try {
    self["workbox:precaching:6.5.3"] && _()
} catch {}
const Q = "__WB_REVISION__";

function z(a) {
    if (!a) throw new l("add-to-cache-list-unexpected-type", {
        entry: a
    });
    if (typeof a == "string") {
        const r = new URL(a, location.href);
        return {
            cacheKey: r.href,
            url: r.href
        }
    }
    const {
        revision: e,
        url: t
    } = a;
    if (!t) throw new l("add-to-cache-list-unexpected-type", {
        entry: a
    });
    if (!e) {
        const r = new URL(t, location.href);
        return {
            cacheKey: r.href,
            url: r.href
        }
    }
    const s = new URL(t, location.href),
        n = new URL(t, location.href);
    return s.searchParams.set(Q, e), {
        cacheKey: s.href,
        url: n.href
    }
}
class J {
    constructor() {
        this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({
            request: e,
            state: t
        }) => {
            t && (t.originalRequest = e)
        }, this.cachedResponseWillBeUsed = async ({
            event: e,
            state: t,
            cachedResponse: s
        }) => {
            if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
                const n = t.originalRequest.url;
                s ? this.notUpdatedURLs.push(n) : this.updatedURLs.push(n)
            }
            return s
        }
    }
}
class X {
    constructor({
        precacheController: e
    }) {
        this.cacheKeyWillBeUsed = async ({
            request: t,
            params: s
        }) => {
            const n = s ? .cacheKey || this._precacheController.getCacheKeyForURL(t.url);
            return n ? new Request(n, {
                headers: t.headers
            }) : t
        }, this._precacheController = e
    }
}
try {
    self["workbox:strategies:6.5.3"] && _()
} catch {}

function b(a) {
    return typeof a == "string" ? new Request(a) : a
}
class Y {
    constructor(e, t) {
        this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new j, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
        for (const s of this._plugins) this._pluginStateMap.set(s, {});
        this.event.waitUntil(this._handlerDeferred.promise)
    }
    async fetch(e) {
        const {
            event: t
        } = this;
        let s = b(e);
        if (s.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
            const c = await t.preloadResponse;
            if (c) return c
        }
        const n = this.hasCallback("fetchDidFail") ? s.clone() : null;
        try {
            for (const c of this.iterateCallbacks("requestWillFetch")) s = await c({
                request: s.clone(),
                event: t
            })
        } catch (c) {
            if (c instanceof Error) throw new l("plugin-error-request-will-fetch", {
                thrownErrorMessage: c.message
            })
        }
        const r = s.clone();
        try {
            let c;
            c = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
            for (const i of this.iterateCallbacks("fetchDidSucceed")) c = await i({
                event: t,
                request: r,
                response: c
            });
            return c
        } catch (c) {
            throw n && await this.runCallbacks("fetchDidFail", {
                error: c,
                event: t,
                originalRequest: n.clone(),
                request: r.clone()
            }), c
        }
    }
    async fetchAndCachePut(e) {
        const t = await this.fetch(e),
            s = t.clone();
        return this.waitUntil(this.cachePut(e, s)), t
    }
    async cacheMatch(e) {
        const t = b(e);
        let s;
        const {
            cacheName: n,
            matchOptions: r
        } = this._strategy, c = await this.getCacheKey(t, "read"), i = Object.assign(Object.assign({}, r), {
            cacheName: n
        });
        s = await caches.match(c, i);
        for (const o of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await o({
            cacheName: n,
            matchOptions: r,
            cachedResponse: s,
            request: c,
            event: this.event
        }) || void 0;
        return s
    }
    async cachePut(e, t) {
        const s = b(e);
        await H(0);
        const n = await this.getCacheKey(s, "write");
        if (!t) throw new l("cache-put-with-no-response", {
            url: q(n.url)
        });
        const r = await this._ensureResponseSafeToCache(t);
        if (!r) return !1;
        const {
            cacheName: c,
            matchOptions: i
        } = this._strategy, o = await self.caches.open(c), h = this.hasCallback("cacheDidUpdate"), g = h ? await D(o, n.clone(), ["__WB_REVISION__"], i) : null;
        try {
            await o.put(n, h ? r.clone() : r)
        } catch (u) {
            if (u instanceof Error) throw u.name === "QuotaExceededError" && await F(), u
        }
        for (const u of this.iterateCallbacks("cacheDidUpdate")) await u({
            cacheName: c,
            oldResponse: g,
            newResponse: r.clone(),
            request: n,
            event: this.event
        });
        return !0
    }
    async getCacheKey(e, t) {
        const s = `${e.url} | ${t}`;
        if (!this._cacheKeys[s]) {
            let n = e;
            for (const r of this.iterateCallbacks("cacheKeyWillBeUsed")) n = b(await r({
                mode: t,
                request: n,
                event: this.event,
                params: this.params
            }));
            this._cacheKeys[s] = n
        }
        return this._cacheKeys[s]
    }
    hasCallback(e) {
        for (const t of this._strategy.plugins)
            if (e in t) return !0;
        return !1
    }
    async runCallbacks(e, t) {
        for (const s of this.iterateCallbacks(e)) await s(t)
    }* iterateCallbacks(e) {
        for (const t of this._strategy.plugins)
            if (typeof t[e] == "function") {
                const s = this._pluginStateMap.get(t);
                yield r => {
                    const c = Object.assign(Object.assign({}, r), {
                        state: s
                    });
                    return t[e](c)
                }
            }
    }
    waitUntil(e) {
        return this._extendLifetimePromises.push(e), e
    }
    async doneWaiting() {
        let e;
        for (; e = this._extendLifetimePromises.shift();) await e
    }
    destroy() {
        this._handlerDeferred.resolve(null)
    }
    async _ensureResponseSafeToCache(e) {
        let t = e,
            s = !1;
        for (const n of this.iterateCallbacks("cacheWillUpdate"))
            if (t = await n({
                    request: this.request,
                    response: t,
                    event: this.event
                }) || void 0, s = !0, !t) break;
        return s || t && t.status !== 200 && (t = void 0), t
    }
}
class T {
    constructor(e = {}) {
        this.cacheName = R.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
    }
    handle(e) {
        const [t] = this.handleAll(e);
        return t
    }
    handleAll(e) {
        e instanceof FetchEvent && (e = {
            event: e,
            request: e.request
        });
        const t = e.event,
            s = typeof e.request == "string" ? new Request(e.request) : e.request,
            n = "params" in e ? e.params : void 0,
            r = new Y(this, {
                event: t,
                request: s,
                params: n
            }),
            c = this._getResponse(r, s, t),
            i = this._awaitComplete(c, r, s, t);
        return [c, i]
    }
    async _getResponse(e, t, s) {
        await e.runCallbacks("handlerWillStart", {
            event: s,
            request: t
        });
        let n;
        try {
            if (n = await this._handle(t, e), !n || n.type === "error") throw new l("no-response", {
                url: t.url
            })
        } catch (r) {
            if (r instanceof Error) {
                for (const c of e.iterateCallbacks("handlerDidError"))
                    if (n = await c({
                            error: r,
                            event: s,
                            request: t
                        }), n) break
            }
            if (!n) throw r
        }
        for (const r of e.iterateCallbacks("handlerWillRespond")) n = await r({
            event: s,
            request: t,
            response: n
        });
        return n
    }
    async _awaitComplete(e, t, s, n) {
        let r, c;
        try {
            r = await e
        } catch {}
        try {
            await t.runCallbacks("handlerDidRespond", {
                event: n,
                request: s,
                response: r
            }), await t.doneWaiting()
        } catch (i) {
            i instanceof Error && (c = i)
        }
        if (await t.runCallbacks("handlerDidComplete", {
                event: n,
                request: s,
                response: r,
                error: c
            }), t.destroy(), c) throw c
    }
}
class d extends T {
    constructor(e = {}) {
        e.cacheName = R.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(d.copyRedirectedCacheableResponsesPlugin)
    }
    async _handle(e, t) {
        const s = await t.cacheMatch(e);
        return s || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
    }
    async _handleFetch(e, t) {
        let s;
        const n = t.params || {};
        if (this._fallbackToNetwork) {
            const r = n.integrity,
                c = e.integrity,
                i = !c || c === r;
            s = await t.fetch(new Request(e, {
                integrity: e.mode !== "no-cors" ? c || r : void 0
            })), r && i && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, s.clone()))
        } else throw new l("missing-precache-entry", {
            cacheName: this.cacheName,
            url: e.url
        });
        return s
    }
    async _handleInstall(e, t) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const s = await t.fetch(e);
        if (!await t.cachePut(e, s.clone())) throw new l("bad-precaching-response", {
            url: e.url,
            status: s.status
        });
        return s
    }
    _useDefaultCacheabilityPluginIfNeeded() {
        let e = null,
            t = 0;
        for (const [s, n] of this.plugins.entries()) n !== d.copyRedirectedCacheableResponsesPlugin && (n === d.defaultPrecacheCacheabilityPlugin && (e = s), n.cacheWillUpdate && t++);
        t === 0 ? this.plugins.push(d.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1)
    }
}
d.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({
        response: a
    }) {
        return !a || a.status >= 400 ? null : a
    }
};
d.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({
        response: a
    }) {
        return a.redirected ? await $(a) : a
    }
};
class Z {
    constructor({
        cacheName: e,
        plugins: t = [],
        fallbackToNetwork: s = !0
    } = {}) {
        this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new d({
            cacheName: R.getPrecacheName(e),
            plugins: [...t, new X({
                precacheController: this
            })],
            fallbackToNetwork: s
        }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
    }
    get strategy() {
        return this._strategy
    }
    precache(e) {
        this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0)
    }
    addToCacheList(e) {
        const t = [];
        for (const s of e) {
            typeof s == "string" ? t.push(s) : s && s.revision === void 0 && t.push(s.url);
            const {
                cacheKey: n,
                url: r
            } = z(s), c = typeof s != "string" && s.revision ? "reload" : "default";
            if (this._urlsToCacheKeys.has(r) && this._urlsToCacheKeys.get(r) !== n) throw new l("add-to-cache-list-conflicting-entries", {
                firstEntry: this._urlsToCacheKeys.get(r),
                secondEntry: n
            });
            if (typeof s != "string" && s.integrity) {
                if (this._cacheKeysToIntegrities.has(n) && this._cacheKeysToIntegrities.get(n) !== s.integrity) throw new l("add-to-cache-list-conflicting-integrities", {
                    url: r
                });
                this._cacheKeysToIntegrities.set(n, s.integrity)
            }
            if (this._urlsToCacheKeys.set(r, n), this._urlsToCacheModes.set(r, c), t.length > 0) {
                const i = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                console.warn(i)
            }
        }
    }
    install(e) {
        return x(e, async () => {
            const t = new J;
            this.strategy.plugins.push(t);
            for (const [r, c] of this._urlsToCacheKeys) {
                const i = this._cacheKeysToIntegrities.get(c),
                    o = this._urlsToCacheModes.get(r),
                    h = new Request(r, {
                        integrity: i,
                        cache: o,
                        credentials: "same-origin"
                    });
                await Promise.all(this.strategy.handleAll({
                    params: {
                        cacheKey: c
                    },
                    request: h,
                    event: e
                }))
            }
            const {
                updatedURLs: s,
                notUpdatedURLs: n
            } = t;
            return {
                updatedURLs: s,
                notUpdatedURLs: n
            }
        })
    }
    activate(e) {
        return x(e, async () => {
            const t = await self.caches.open(this.strategy.cacheName),
                s = await t.keys(),
                n = new Set(this._urlsToCacheKeys.values()),
                r = [];
            for (const c of s) n.has(c.url) || (await t.delete(c), r.push(c.url));
            return {
                deletedURLs: r
            }
        })
    }
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys
    }
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()]
    }
    getCacheKeyForURL(e) {
        const t = new URL(e, location.href);
        return this._urlsToCacheKeys.get(t.href)
    }
    getIntegrityForCacheKey(e) {
        return this._cacheKeysToIntegrities.get(e)
    }
    async matchPrecache(e) {
        const t = e instanceof Request ? e.url : e,
            s = this.getCacheKeyForURL(t);
        if (s) return (await self.caches.open(this.strategy.cacheName)).match(s)
    }
    createHandlerBoundToURL(e) {
        const t = this.getCacheKeyForURL(e);
        if (!t) throw new l("non-precached-url", {
            url: e
        });
        return s => (s.request = new Request(e), s.params = Object.assign({
            cacheKey: t
        }, s.params), this.strategy.handle(s))
    }
}
let L;
const E = () => (L || (L = new Z), L);
try {
    self["workbox:routing:6.5.3"] && _()
} catch {}
const v = "GET",
    U = a => a && typeof a == "object" ? a : {
        handle: a
    };
class m {
    constructor(e, t, s = v) {
        this.handler = U(t), this.match = e, this.method = s
    }
    setCatchHandler(e) {
        this.catchHandler = U(e)
    }
}
class ee extends m {
    constructor(e, t, s) {
        const n = ({
            url: r
        }) => {
            const c = e.exec(r.href);
            if (!!c && !(r.origin !== location.origin && c.index !== 0)) return c.slice(1)
        };
        super(n, t, s)
    }
}
class te {
    constructor() {
        this._routes = new Map, this._defaultHandlerMap = new Map
    }
    get routes() {
        return this._routes
    }
    addFetchListener() {
        self.addEventListener("fetch", e => {
            const {
                request: t
            } = e, s = this.handleRequest({
                request: t,
                event: e
            });
            s && e.respondWith(s)
        })
    }
    addCacheListener() {
        self.addEventListener("message", e => {
            if (e.data && e.data.type === "CACHE_URLS") {
                const {
                    payload: t
                } = e.data, s = Promise.all(t.urlsToCache.map(n => {
                    typeof n == "string" && (n = [n]);
                    const r = new Request(...n);
                    return this.handleRequest({
                        request: r,
                        event: e
                    })
                }));
                e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0))
            }
        })
    }
    handleRequest({
        request: e,
        event: t
    }) {
        const s = new URL(e.url, location.href);
        if (!s.protocol.startsWith("http")) return;
        const n = s.origin === location.origin,
            {
                params: r,
                route: c
            } = this.findMatchingRoute({
                event: t,
                request: e,
                sameOrigin: n,
                url: s
            });
        let i = c && c.handler;
        const o = e.method;
        if (!i && this._defaultHandlerMap.has(o) && (i = this._defaultHandlerMap.get(o)), !i) return;
        let h;
        try {
            h = i.handle({
                url: s,
                request: e,
                event: t,
                params: r
            })
        } catch (u) {
            h = Promise.reject(u)
        }
        const g = c && c.catchHandler;
        return h instanceof Promise && (this._catchHandler || g) && (h = h.catch(async u => {
            if (g) try {
                return await g.handle({
                    url: s,
                    request: e,
                    event: t,
                    params: r
                })
            } catch (N) {
                N instanceof Error && (u = N)
            }
            if (this._catchHandler) return this._catchHandler.handle({
                url: s,
                request: e,
                event: t
            });
            throw u
        })), h
    }
    findMatchingRoute({
        url: e,
        sameOrigin: t,
        request: s,
        event: n
    }) {
        const r = this._routes.get(s.method) || [];
        for (const c of r) {
            let i;
            const o = c.match({
                url: e,
                sameOrigin: t,
                request: s,
                event: n
            });
            if (o) return i = o, (Array.isArray(i) && i.length === 0 || o.constructor === Object && Object.keys(o).length === 0 || typeof o == "boolean") && (i = void 0), {
                route: c,
                params: i
            }
        }
        return {}
    }
    setDefaultHandler(e, t = v) {
        this._defaultHandlerMap.set(t, U(e))
    }
    setCatchHandler(e) {
        this._catchHandler = U(e)
    }
    registerRoute(e) {
        this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
    }
    unregisterRoute(e) {
        if (!this._routes.has(e.method)) throw new l("unregister-route-but-not-found-with-method", {
            method: e.method
        });
        const t = this._routes.get(e.method).indexOf(e);
        if (t > -1) this._routes.get(e.method).splice(t, 1);
        else throw new l("unregister-route-route-not-registered")
    }
}
let y;
const se = () => (y || (y = new te, y.addFetchListener(), y.addCacheListener()), y);

function p(a, e, t) {
    let s;
    if (typeof a == "string") {
        const r = new URL(a, location.href),
            c = ({
                url: i
            }) => i.href === r.href;
        s = new m(c, e, t)
    } else if (a instanceof RegExp) s = new ee(a, e, t);
    else if (typeof a == "function") s = new m(a, e, t);
    else if (a instanceof m) s = a;
    else throw new l("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
    });
    return se().registerRoute(s), s
}

function ae(a, e = []) {
    for (const t of [...a.searchParams.keys()]) e.some(s => s.test(t)) && a.searchParams.delete(t);
    return a
}

function* ne(a, {
    ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/],
    directoryIndex: t = "index.html",
    cleanURLs: s = !0,
    urlManipulation: n
} = {}) {
    const r = new URL(a, location.href);
    r.hash = "", yield r.href;
    const c = ae(r, e);
    if (yield c.href, t && c.pathname.endsWith("/")) {
        const i = new URL(c.href);
        i.pathname += t, yield i.href
    }
    if (s) {
        const i = new URL(c.href);
        i.pathname += ".html", yield i.href
    }
    if (n) {
        const i = n({
            url: r
        });
        for (const o of i) yield o.href
    }
}
class re extends m {
    constructor(e, t) {
        const s = ({
            request: n
        }) => {
            const r = e.getURLsToCacheKeys();
            for (const c of ne(n.url, t)) {
                const i = r.get(c);
                if (i) {
                    const o = e.getIntegrityForCacheKey(i);
                    return {
                        cacheKey: i,
                        integrity: o
                    }
                }
            }
        };
        super(s, e.strategy)
    }
}

function ce(a) {
    const e = E(),
        t = new re(e, a);
    p(t)
}
const ie = "-precache-",
    oe = async (a, e = ie) => {
        const s = (await self.caches.keys()).filter(n => n.includes(e) && n.includes(self.registration.scope) && n !== a);
        return await Promise.all(s.map(n => self.caches.delete(n))), s
    };

function le() {
    self.addEventListener("activate", a => {
        const e = R.getPrecacheName();
        a.waitUntil(oe(e).then(t => {}))
    })
}

function he(a) {
    E().precache(a)
}

function ue(a, e) {
    he(a), ce(e)
}
class fe extends T {
    async _handle(e, t) {
        let s = await t.cacheMatch(e),
            n;
        if (!s) try {
            s = await t.fetchAndCachePut(e)
        } catch (r) {
            r instanceof Error && (n = r)
        }
        if (!s) throw new l("no-response", {
            url: e.url,
            error: n
        });
        return s
    }
}
const de = {
    cacheWillUpdate: async ({
        response: a
    }) => a.status === 200 || a.status === 0 ? a : null
};
class k extends T {
    constructor(e = {}) {
        super(e), this.plugins.some(t => "cacheWillUpdate" in t) || this.plugins.unshift(de), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
    }
    async _handle(e, t) {
        const s = [],
            n = [];
        let r;
        if (this._networkTimeoutSeconds) {
            const {
                id: o,
                promise: h
            } = this._getTimeoutPromise({
                request: e,
                logs: s,
                handler: t
            });
            r = o, n.push(h)
        }
        const c = this._getNetworkPromise({
            timeoutId: r,
            request: e,
            logs: s,
            handler: t
        });
        n.push(c);
        const i = await t.waitUntil((async () => await t.waitUntil(Promise.race(n)) || await c)());
        if (!i) throw new l("no-response", {
            url: e.url
        });
        return i
    }
    _getTimeoutPromise({
        request: e,
        logs: t,
        handler: s
    }) {
        let n;
        return {
            promise: new Promise(c => {
                n = setTimeout(async () => {
                    c(await s.cacheMatch(e))
                }, this._networkTimeoutSeconds * 1e3)
            }),
            id: n
        }
    }
    async _getNetworkPromise({
        timeoutId: e,
        request: t,
        logs: s,
        handler: n
    }) {
        let r, c;
        try {
            c = await n.fetchAndCachePut(t)
        } catch (i) {
            i instanceof Error && (r = i)
        }
        return e && clearTimeout(e), (r || !c) && (c = await n.cacheMatch(t)), c
    }
}
try {
    self["workbox:cacheable-response:6.5.3"] && _()
} catch {}
class pe {
    constructor(e = {}) {
        this._statuses = e.statuses, this._headers = e.headers
    }
    isResponseCacheable(e) {
        let t = !0;
        return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some(s => e.headers.get(s) === this._headers[s])), t
    }
}
class ge {
    constructor(e) {
        this.cacheWillUpdate = async ({
            response: t
        }) => this._cacheableResponse.isResponseCacheable(t) ? t : null, this._cacheableResponse = new pe(e)
    }
}
const C = "v1";
B();
G();
le();
V({
    prefix: "WishSim",
    precache: "Core",
    suffix: C
});
let O = [{
    "revision": "611ebcd97e396e4d620123b5933dc042",
    "url": "adkey.html"
}, {
    "revision": "25da334300e788034489ab27f2cadc0e",
    "url": "google77966abbed90508f.html"
}, {
    "revision": "fd54761e531b8e5a9c76daa930877ee3",
    "url": "icons.css"
}, {
    "revision": "a3cbc5c881b04abb382382488be95c80",
    "url": "index.html"
}, {
    "revision": "61efc9d1b2ac41b2605e31f713a2b8b0",
    "url": "install.html"
}, {
    "revision": "25a13c39651bbf4331b36adc49f3a25a",
    "url": "internal/immutable/assets/_error-ffb2f0f1.css"
}, {
    "revision": "f212120c3a2231fb4ecb497ab12bbb1d",
    "url": "internal/immutable/assets/_layout-68774e84.css"
}, {
    "revision": "48f132fb705809cf2cb7766417232df5",
    "url": "internal/immutable/assets/_page-1877199c.css"
}, {
    "revision": "c1f63420f5ebb3ad0b606fbade35f0cf",
    "url": "internal/immutable/assets/_page-35903308.css"
}, {
    "revision": "c2e2da842b770c3a709ec40a036b0880",
    "url": "internal/immutable/assets/_page-3c659a81.css"
}, {
    "revision": "411f50db4ae1f94d64567d246eaa72a9",
    "url": "internal/immutable/assets/_page-57a3ecd0.css"
}, {
    "revision": "78e1c42f2aa1d5e15fb1bf78bf34ace7",
    "url": "internal/immutable/assets/_page-a55faf15.css"
}, {
    "revision": "22356c4c450efb667774f992618f0592",
    "url": "internal/immutable/assets/_page-f21e230d.css"
}, {
    "revision": "01fc6d3c5c4d32a9d8192b7a13be7afa",
    "url": "internal/immutable/assets/accessKey-1c352f6d.css"
}, {
    "revision": "af8e6a0a4f1ac26c173a1266442aec02",
    "url": "internal/immutable/assets/GachaInfo-316b2607.css"
}, {
    "revision": "02c077edb577990d231e7404bb553bb2",
    "url": "internal/immutable/assets/Icon-d3e43583.css"
}, {
    "revision": "10a61e52bfa764281486f18b85e8eb82",
    "url": "internal/immutable/assets/MainInventory-46be802a.css"
}, {
    "revision": "190e80a0b999dd9a31b76f7c75c88de7",
    "url": "internal/immutable/assets/MainShop-9d5fc905.css"
}, {
    "revision": "86bdf3d7bd8f988fee22bcc48c3542e2",
    "url": "internal/immutable/assets/Obtained-f6c87532.css"
}, {
    "revision": "cab7d80ec60de85dfdcbf333e4aebbf6",
    "url": "internal/immutable/assets/PreviousBannerList-6c84e51c.css"
}, {
    "revision": "2d00b574d63038f80e2829f699a56548",
    "url": "internal/immutable/assets/WelkinCheckin-dec76556.css"
}, {
    "revision": "59c5fc10018baac8bd53812dddfd763f",
    "url": "internal/immutable/assets/WishListResult-42b90934.css"
}, {
    "revision": "9f05b2536f35f6a9ea39f545b9ea3d2b",
    "url": "internal/immutable/chunks/_layout-0ebf6292.js"
}, {
    "revision": "30705ba23cb00c6b50168cfd58ede260",
    "url": "internal/immutable/chunks/_page-4b5c4f6d.js"
}, {
    "revision": "a73e2cdd0169cd54b8f9510b37ce9f62",
    "url": "internal/immutable/chunks/0-eb908e61.js"
}, {
    "revision": "467f3abfc82b28800e5c4410be198955",
    "url": "internal/immutable/chunks/1-2e6dd754.js"
}, {
    "revision": "09d1bdacfe0e6d11c7a0069786e48325",
    "url": "internal/immutable/chunks/1-d7bdd9fc.js"
}, {
    "revision": "a432ca48b21bf19978bbd019185360e5",
    "url": "internal/immutable/chunks/1.0-61c69dfc.js"
}, {
    "revision": "4910284a7caa4487fbfda1b547e16178",
    "url": "internal/immutable/chunks/1.1-e1af04de.js"
}, {
    "revision": "5b187d80b09fc936910f6f42522a932a",
    "url": "internal/immutable/chunks/1.2-f4153b42.js"
}, {
    "revision": "d12653d77bc1e203617ae3d5b3a8db60",
    "url": "internal/immutable/chunks/1.3-7d064ecd.js"
}, {
    "revision": "61a642186166cfefe8f562bd8eb31c08",
    "url": "internal/immutable/chunks/1.4-3cc5ca59.js"
}, {
    "revision": "e2f6bc73dc8fae441baba47cece0d92c",
    "url": "internal/immutable/chunks/1.5-4d85a4af.js"
}, {
    "revision": "748bc638563ebd9b4c24e2b30e5bb453",
    "url": "internal/immutable/chunks/1.6-6735b16b.js"
}, {
    "revision": "e9590e561ddc22ef5eefc7963c652cfd",
    "url": "internal/immutable/chunks/2-07978606.js"
}, {
    "revision": "4187ebbeacbf9c8837e6e2682a4d5ef4",
    "url": "internal/immutable/chunks/2-8d6c51aa.js"
}, {
    "revision": "3caf4ec1fd0f68152f13aa01a9ca930f",
    "url": "internal/immutable/chunks/2.0-c07fe7aa.js"
}, {
    "revision": "496e4bd81dd5112757fda4a4fe15d29c",
    "url": "internal/immutable/chunks/2.1-bdea6bb8.js"
}, {
    "revision": "b6078bf402ac788ec14c9f30ce751a11",
    "url": "internal/immutable/chunks/2.2-218365e0.js"
}, {
    "revision": "90123fcbcb027557ab573aa02c445005",
    "url": "internal/immutable/chunks/2.3-0aa8553c.js"
}, {
    "revision": "0843833d737b8b869698c7c904edb500",
    "url": "internal/immutable/chunks/2.4-858e66ef.js"
}, {
    "revision": "d490733cc27c3621976f9b2f58fc5551",
    "url": "internal/immutable/chunks/2.5-2e65cacd.js"
}, {
    "revision": "d162a7810c1165a0f560e4a68e5a1499",
    "url": "internal/immutable/chunks/2.6-53579726.js"
}, {
    "revision": "b8c684fd3ff728065b242d96991762d3",
    "url": "internal/immutable/chunks/2.7-ec80a2ed.js"
}, {
    "revision": "aa753cf2fd3200db0bda010328bf820a",
    "url": "internal/immutable/chunks/2.8-adfabfdb.js"
}, {
    "revision": "f07cc0edc79b2285b9300bd3c307efd9",
    "url": "internal/immutable/chunks/3-1a1dd4bb.js"
}, {
    "revision": "9876afdbfdcd3e1591441625a1a93d09",
    "url": "internal/immutable/chunks/3-dfe1b315.js"
}, {
    "revision": "b9e8e81f1858d56b76665b3df2b3354e",
    "url": "internal/immutable/chunks/3.0-b1378883.js"
}, {
    "revision": "e48304936e8fc9fec10175d2695d3aec",
    "url": "internal/immutable/chunks/3.1-a47c785e.js"
}, {
    "revision": "734eb1c322053dfdd545db02915946b8",
    "url": "internal/immutable/chunks/3.2-c037698e.js"
}, {
    "revision": "61d8c265e1a344e7bfe2a4eb2d4221e8",
    "url": "internal/immutable/chunks/3.3-013f586b.js"
}, {
    "revision": "e60c7a9fa2f0e501b489de5cb7bc8688",
    "url": "internal/immutable/chunks/3.4-45fd5e10.js"
}, {
    "revision": "65961e6da38b1e35cb937fef9d1ec4f2",
    "url": "internal/immutable/chunks/4-3cdbe39e.js"
}, {
    "revision": "f4670a032dc681f694fadeb13e940489",
    "url": "internal/immutable/chunks/5-2960f1e0.js"
}, {
    "revision": "7acbc5cb656b169c5f737a19bbba2ab4",
    "url": "internal/immutable/chunks/6-4fcf8065.js"
}, {
    "revision": "2b1bdff9671a21cde7f8a24b3b9324c4",
    "url": "internal/immutable/chunks/7-c363a50d.js"
}, {
    "revision": "5e49135adb41ca2b29217b78177c5c1a",
    "url": "internal/immutable/chunks/8-468da715.js"
}, {
    "revision": "f1690b441fc7a83f72d04a48d1d67411",
    "url": "internal/immutable/chunks/accessKey-21d29ba4.js"
}, {
    "revision": "e533231950ee86fb431363d7d4b3ff53",
    "url": "internal/immutable/chunks/audio-6d737711.js"
}, {
    "revision": "0e05d2e654a36ad004d544c589389c10",
    "url": "internal/immutable/chunks/en-US-1726bde3.js"
}, {
    "revision": "c122623ebfd424d222e83f8fc75a782d",
    "url": "internal/immutable/chunks/en-US-6534de52.js"
}, {
    "revision": "6fc694d6809cd99add7c382a636a139c",
    "url": "internal/immutable/chunks/env-51d3792f.js"
}, {
    "revision": "bbc5d7605c156fa903463005fbd843a0",
    "url": "internal/immutable/chunks/GachaInfo-f2769581.js"
}, {
    "revision": "fda5f0eaf8303c6839bab63315210186",
    "url": "internal/immutable/chunks/historyIdb-feead984.js"
}, {
    "revision": "bc6a4574dace8d7f7955f6a7e866ce24",
    "url": "internal/immutable/chunks/Icon-2b2a573e.js"
}, {
    "revision": "e395db12259c5acc2303726c966d1153",
    "url": "internal/immutable/chunks/id-ID-a803abad.js"
}, {
    "revision": "be4f493a02a8566372d13e557fbe98f6",
    "url": "internal/immutable/chunks/Iklan-32f8e378.js"
}, {
    "revision": "ada2685d43376fe239b798b0dc5fd449",
    "url": "internal/immutable/chunks/importLocalData-ae55aada.js"
}, {
    "revision": "71affa335818e89b1c91b528106536bc",
    "url": "internal/immutable/chunks/index-80f68401.js"
}, {
    "revision": "5066667181b04ea8b263708ab7584000",
    "url": "internal/immutable/chunks/index-900c1e47.js"
}, {
    "revision": "d39a2fe192f8058a4004ac2927f17c32",
    "url": "internal/immutable/chunks/index-a80b06f5.js"
}, {
    "revision": "59527008bca3fc468e64649cca3e531e",
    "url": "internal/immutable/chunks/it-IT-825932a1.js"
}, {
    "revision": "0cf37b849e935562a9633f97d9e00c01",
    "url": "internal/immutable/chunks/ja-JP-7da04ed3.js"
}, {
    "revision": "63f1bdb602a5f0fd5d4ebc92defad911",
    "url": "internal/immutable/chunks/ja-JP-8fbc5f8a.js"
}, {
    "revision": "0eb1a9ca0a4a9233d5b1e3020ab27daa",
    "url": "internal/immutable/chunks/localstore-babdf033.js"
}, {
    "revision": "09d2bebdebae0e093997f8a4365d7ee3",
    "url": "internal/immutable/chunks/MainInventory-c9a3faf7.js"
}, {
    "revision": "45bc92d0eaca0afd3856652a8fc11459",
    "url": "internal/immutable/chunks/MainShop-02d917ea.js"
}, {
    "revision": "247050bbde4b9e8bf4b7321daece9d5b",
    "url": "internal/immutable/chunks/Obtained-c3e14a56.js"
}, {
    "revision": "321d16f14aad8a300cb8e4de78a9ddd8",
    "url": "internal/immutable/chunks/outfits-eb53be92.js"
}, {
    "revision": "02c605681ba12e962421711edcf214c4",
    "url": "internal/immutable/chunks/preload-helper-176e53da.js"
}, {
    "revision": "25464c151ed9b154443b075f1208ca42",
    "url": "internal/immutable/chunks/PreviousBannerList-6bd846aa.js"
}, {
    "revision": "058f89fa22053a7444532e5a12b651d8",
    "url": "internal/immutable/chunks/pt-BR-24b9fc20.js"
}, {
    "revision": "fc72c182457a3dc996644234d6372b08",
    "url": "internal/immutable/chunks/pt-BR-88836ecd.js"
}, {
    "revision": "1c9764d2cd6575cd465f816fee3be0b1",
    "url": "internal/immutable/chunks/ru-RU-294f8330.js"
}, {
    "revision": "a04fecc0fa4e6a1bb6d0cca1f029ca25",
    "url": "internal/immutable/chunks/ru-RU-51f8c17f.js"
}, {
    "revision": "83f902e22ef569f590acad89f5190e4d",
    "url": "internal/immutable/chunks/runtime.esm-0af339e4.js"
}, {
    "revision": "f4b0fcfc54c7092d890d9cdc37bb1548",
    "url": "internal/immutable/chunks/singletons-419e91c9.js"
}, {
    "revision": "b6035926319c6135db5a15469415fd0e",
    "url": "internal/immutable/chunks/stores-7f31061a.js"
}, {
    "revision": "06341cc4244717d9398ae4076f06d622",
    "url": "internal/immutable/chunks/stores-db8fba2f.js"
}, {
    "revision": "28da5ae52b985b76cd32241d4fe70d9e",
    "url": "internal/immutable/chunks/th-TH-eb6fc969.js"
}, {
    "revision": "8be3c5d08b0bd15fbe9244409c4b7fa8",
    "url": "internal/immutable/chunks/vi-VN-70005804.js"
}, {
    "revision": "726c94e25bb940f2f07dc6c0711e2aaa",
    "url": "internal/immutable/chunks/vi-VN-7d4ff59b.js"
}, {
    "revision": "ff69731f51a0bf5794fe33c6692b999a",
    "url": "internal/immutable/chunks/WelkinCheckin-876881d4.js"
}, {
    "revision": "c911a86aa176da8649bd19404134222d",
    "url": "internal/immutable/chunks/WishListResult-3d7b1182.js"
}, {
    "revision": "b8c9397a5a7bdb9aee024d2c57d41845",
    "url": "internal/immutable/chunks/workbox-window.prod.es5-9f0a6626.js"
}, {
    "revision": "59ecc93145449ff2ba3ab9fd50b1c2a0",
    "url": "internal/immutable/chunks/zh-CN-57ee0090.js"
}, {
    "revision": "a27165f3d8fb7e87ae109662557b3b84",
    "url": "internal/immutable/chunks/zh-CN-b9295beb.js"
}, {
    "revision": "74a8e68154802913a8f3cf983d059690",
    "url": "internal/immutable/components/pages/_error.svelte-c534edc6.js"
}, {
    "revision": "09c506311ebeec7049f16d6ed1226653",
    "url": "internal/immutable/components/pages/_layout.svelte-282d9b8a.js"
}, {
    "revision": "4be7630ffa6b573b3908915bd399de50",
    "url": "internal/immutable/components/pages/_page.svelte-a1fb743f.js"
}, {
    "revision": "9ca56fa32c330a21f3deaf97dd114ff7",
    "url": "internal/immutable/components/pages/adkey/_page.svelte-669752bf.js"
}, {
    "revision": "deb0b49e8832da106359b9761f13f7f2",
    "url": "internal/immutable/components/pages/install/_page.svelte-2d2e97fc.js"
}, {
    "revision": "eaa4261238db0f985308089a8435ae77",
    "url": "internal/immutable/components/pages/privacy-policy/_page.svelte-b39bd509.js"
}, {
    "revision": "57d4f8dd44c14717a51da5b5f9e15d06",
    "url": "internal/immutable/components/pages/screen/_page.svelte-98d3e5aa.js"
}, {
    "revision": "7259dc65529b355cb5281804ea3583a6",
    "url": "internal/immutable/components/pages/screen/chars/_page.svelte-841487af.js"
}, {
    "revision": "8d3cb335b707ed9780966fd2168f025a",
    "url": "internal/immutable/components/pages/screen/wishlist/_page.svelte-c6669315.js"
}, {
    "revision": "bb21119a8f9a8941139a7a1e7bb4e73b",
    "url": "internal/immutable/modules/pages/_layout.js-04cad6c0.js"
}, {
    "revision": "f6ac0d84a1660b992c61120242054867",
    "url": "internal/immutable/start-02cd3a46.js"
}, {
    "revision": "2d3aa462739a8b4161dbca28efc4dded",
    "url": "privacy-policy.html"
}, {
    "revision": "2393d81799d7544b8b4bcba9c4998178",
    "url": "screen.html"
}, {
    "revision": "f1ea02cd64552d9e7039f74e4e69a47c",
    "url": "screen/chars.html"
}, {
    "revision": "7199b00dcacb902557e225a86c5bbde2",
    "url": "screen/wishlist.html"
}, {
    "revision": "f17753c8af8064e6f2e06c43fcd58261",
    "url": "./icons/icon-72x72.png"
}, {
    "revision": "7d1a3f61d25d7d4e187259192da7d8d9",
    "url": "./icons/icon-96x96.png"
}, {
    "revision": "df7aadf86f955f6267e64984e62697ec",
    "url": "./icons/icon-128x128.png"
}, {
    "revision": "a3a455aa4d4dcebc6ea2da216c8d8a3d",
    "url": "./icons/icon-144x144.png"
}, {
    "revision": "f7a80542c08f0911421e387dfb217088",
    "url": "./icons/icon-152x152.png"
}, {
    "revision": "741faac62b62076a15e390ad96197cd1",
    "url": "./icons/icon-192x192.png"
}, {
    "revision": "c68930fc0b17a8bd5ee195b3c11ae1a1",
    "url": "./icons/icon-256x256.png"
}, {
    "revision": "594e368523bd1ccd3af55c859667a5de",
    "url": "./icons/icon-384x384.png"
}, {
    "revision": "cd9c18119c342e45a86e53967794814f",
    "url": "./icons/icon-512x512.png"
}, {
    "revision": "8b96e9a7ae0b4685f1abb78f812a3a7e",
    "url": "appmanifest.json"
}];
O = [];
ue(O, {
    ignoreURLParametersMatching: [/.*/]
});
p("/", new k({
    cacheName: `Static-${C}`
}));
p(new RegExp(".(?:/?pwa=true|/?pwasc)"), new k({
    cacheName: `Static-${C}`,
    plugins: [{
        cachedResponseWillBeUsed: ({
            cachedResponse: a
        }) => a || caches.match("/"),
        cacheWillUpdate: () => null
    }]
}));
p(({
    url: a
}) => a.href.includes("videos") || a.href.includes("images") || a.href.includes("sfx"), new fe({
    cacheName: `Static-${C}`
}));
p(({
    url: a
}) => (a.href.match(new RegExp(".(?:woff|woff2|ttf)$")) || []).length > 0, new k({
    cacheName: `Static-${C}`,
    plugins: [new ge({
        statuses: [0, 200]
    })]
}));
p(new RegExp(".(?:css|js|json)$"), new k({
    cacheName: "Chunks"
}));