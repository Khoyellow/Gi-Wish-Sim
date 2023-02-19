import {
    h as f,
    j as i,
    k as p,
    l as d,
    o as h,
    q as V,
    u as B,
    r as w,
    t as q,
    w as c,
    x as g,
    y as I,
    z as S
} from "./stores-db8fba2f.js";
import {
    a as t,
    l as n,
    c as m
} from "./localstore-babdf033.js";
import {
    n as b
} from "./historyIdb-feead984.js";
const v = () => {
        const o = t.get("genesis");
        o !== null && f.set(o);
        let e = t.get("primogem");
        e === null ? (i.subscribe(u => {
            e = u
        }), t.set("primogem", e)) : i.set(e);
        const s = t.get("stardust");
        s !== null && p.set(s);
        const a = t.get("starglitter");
        a !== null && d.set(a);
        const l = t.get("intertwined");
        l !== null && h.set(l);
        const r = t.get("acquaint");
        r !== null && V.set(r), B.set(n.get("wishAmount") === "unlimited"), w.set(!!n.get("muted")), q.set(!!n.get("animeoff")), b.onLoadCheck(), console.log("Balance Updated")
    },
    x = () => {
        localStorage.getItem("storageVersion") !== c && (m.clear(), localStorage.setItem("storageVersion", c));
        const e = m.get();
        if (!e) return g.set(I);
        const [s, a] = e.split("-");
        S.set(parseInt(a)), g.set(s), console.log(`Banner version set to ${s} phase ${a}`)
    };
export {
    v as importLocalBalance, x as setBannerVersionAndPhase
};