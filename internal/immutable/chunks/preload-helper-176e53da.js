const h = function() {
        const t = document.createElement("link").relList;
        return t && t.supports && t.supports("modulepreload") ? "modulepreload" : "preload"
    }(),
    m = function(o, t) {
        return new URL(o, t).href
    },
    u = {},
    k = function(t, i, c) {
        if (!i || i.length === 0) return t();
        const a = document.getElementsByTagName("link");
        return Promise.all(i.map(e => {
            if (e = m(e, c), e in u) return;
            u[e] = !0;
            const r = e.endsWith(".css"),
                f = r ? '[rel="stylesheet"]' : "";
            if (!!c)
                for (let s = a.length - 1; s >= 0; s--) {
                    const l = a[s];
                    if (l.href === e && (!r || l.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${e}"]${f}`)) return;
            const n = document.createElement("link");
            if (n.rel = r ? "stylesheet" : h, r || (n.as = "script", n.crossOrigin = ""), n.href = e, document.head.appendChild(n), r) return new Promise((s, l) => {
                n.addEventListener("load", s), n.addEventListener("error", () => l(new Error(`Unable to preload CSS for ${e}`)))
            })
        })).then(() => t())
    };
export {
    k as _
};