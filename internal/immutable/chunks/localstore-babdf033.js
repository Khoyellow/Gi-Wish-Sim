const l = {
        set(t, e) {
            return localStorage.setItem(`${t}5sPity`, e), e
        },
        get(t) {
            let e = parseInt(localStorage.getItem(`${t}5sPity`));
            return e > 90 ? 0 : e || 0
        }
    },
    g = {
        set(t, e) {
            return localStorage.setItem(`${t}4sPity`, e), e
        },
        get(t) {
            let e = parseInt(localStorage.getItem(`${t}4sPity`));
            return e > 11 ? 0 : e || 0
        }
    },
    f = {
        set(t) {
            return localStorage.setItem("beginnerRoll", t), t
        },
        get() {
            let t = parseInt(localStorage.getItem("beginnerRoll"));
            return t > 20 ? 20 : t || 0
        }
    },
    h = {
        _getData() {
            const t = localStorage.getItem("guaranteedStatus");
            return t ? JSON.parse(t) : {
                status: {}
            }
        },
        set(t, e = !1) {
            const {
                status: a
            } = this._getData();
            a[t] = !!e, localStorage.setItem("guaranteedStatus", JSON.stringify({
                status: a
            }))
        },
        get(t) {
            const {
                status: e
            } = this._getData();
            return !!e[t]
        }
    },
    u = {
        set(t, e) {
            return localStorage.setItem(t, e), e
        },
        get(t) {
            const e = localStorage.getItem(t);
            return e !== null && e !== "undefined" ? parseInt(e) : null
        }
    },
    d = {
        set(t, e) {
            localStorage.setItem("version", `${t}-${e}`)
        },
        get() {
            return localStorage.getItem("version")
        },
        clear() {
            return localStorage.removeItem("version")
        }
    },
    S = {
        set(t) {
            return localStorage.setItem("firstshare", t)
        },
        get() {
            return localStorage.getItem("firstshare")
        },
        check() {
            return localStorage.getItem("firstshare") !== "yes"
        }
    },
    p = {
        getData() {
            const t = localStorage.getItem("fatepoint");
            return t ? JSON.parse(t) : {
                data: []
            }
        },
        init(t, e, a = null) {
            return this.patch = t, this.phase = e, this.selected = a, this.data = this.getData().data, this.selectedPhase = this.data.find(s => s.patch === t && s.phase === e), this
        },
        set(t) {
            const {
                patch: e,
                phase: a,
                selected: s
            } = this;
            this.selectedPhase || this.data.push({
                patch: e,
                phase: a,
                selected: s,
                point: t
            });
            const n = this.data.findIndex(r => r.patch === e && r.phase === a);
            this.data[n].point = t, this.data[n].selected = s, localStorage.setItem("fatepoint", JSON.stringify({
                data: this.data
            }))
        },
        getSelected() {
            return this.selectedPhase === void 0 ? null : this.selectedPhase.selected
        },
        getPoint() {
            const {
                selectedPhase: t
            } = this;
            return t ? t.point : 0
        },
        remove() {
            const {
                patch: t,
                phase: e,
                data: a
            } = this, s = a.findIndex(r => r.patch === t && r.phase === e), n = a.filter((r, o) => o !== s);
            localStorage.setItem("fatepoint", JSON.stringify({
                data: n
            }))
        }
    },
    I = {
        _getData() {
            const t = localStorage.getItem("config");
            return t ? JSON.parse(t) : {
                config: {}
            }
        },
        get(t) {
            const {
                config: e
            } = this._getData();
            return e[t] || null
        },
        set(t, e) {
            const {
                config: a
            } = this._getData();
            a[t] = e, localStorage.setItem("config", JSON.stringify({
                config: a
            }))
        }
    },
    m = {
        _get() {
            const t = localStorage.getItem("outfits");
            return t ? JSON.parse(t) : {
                outfits: []
            }
        },
        get(t) {
            const {
                outfits: e
            } = this._get();
            return e.find(({
                name: a
            }) => a === t)
        },
        check(t) {
            const {
                outfits: e
            } = this._get();
            return e.filter(({
                name: s
            }) => s === t).length > 0
        },
        set(t, e = !1) {
            const {
                outfits: a
            } = this._get();
            if (this.check(t)) {
                const s = a.findIndex(({
                    name: n
                }) => n === t);
                a[s].isSet = e
            } else a.push({
                name: t,
                isSet: e
            });
            localStorage.setItem("outfits", JSON.stringify({
                outfits: a
            }))
        }
    },
    D = {
        getData() {
            const t = localStorage.getItem("welkin");
            if (!t) return {
                remaining: 0,
                diff: 0
            };
            const e = JSON.parse(t),
                a = new Date().getTime() - 3 * 3600 * 1e3,
                s = new Date(a).toDateString(),
                n = Math.abs(new Date(s) - new Date(e.latestCheckIn));
            return e.diff = Math.ceil(n / (1e3 * 60 * 60 * 24)), e
        },
        checkin(t = "checkin") {
            let {
                remaining: e,
                latestCheckIn: a
            } = this.getData();
            const s = new Date().getTime() - 3 * 3600 * 1e3,
                n = new Date(s).toDateString();
            if (!a && t !== "checkin") {
                const i = {
                    remaining: 29,
                    latestCheckIn: n,
                    diff: 0
                };
                return localStorage.setItem("welkin", JSON.stringify(i))
            }
            if (t !== "checkin") {
                const c = {
                    remaining: (e < 1 ? 29 : 30) + e,
                    latestCheckIn: n,
                    diff: 0
                };
                return localStorage.setItem("welkin", JSON.stringify(c))
            }
            const r = Math.abs(new Date(n) - new Date(a)),
                o = Math.ceil(r / (1e3 * 60 * 60 * 24));
            e = e - o, e = e < 0 ? 0 : e, a = n, localStorage.setItem("welkin", JSON.stringify({
                remaining: e,
                latestCheckIn: a,
                diff: 0
            }))
        }
    };
export {
    u as a, f as b, d as c, p as d, l as e, m as f, h as g, D as h, S as i, I as l, g as p
};