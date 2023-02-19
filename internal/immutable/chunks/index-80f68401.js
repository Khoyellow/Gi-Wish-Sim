import {
    e as $
} from "./outfits-eb53be92.js";
import {
    D as w
} from "./index-a80b06f5.js";

function O(p, {
    from: t,
    to: s
}, d = {}) {
    const o = getComputedStyle(p),
        l = o.transform === "none" ? "" : o.transform,
        [c, h] = o.transformOrigin.split(" ").map(parseFloat),
        r = t.left + t.width * c / s.width - (s.left + c),
        a = t.top + t.height * h / s.height - (s.top + h),
        {
            delay: f = 0,
            duration: e = n => Math.sqrt(n) * 120,
            easing: g = $
        } = d;
    return {
        delay: f,
        duration: w(e) ? e(Math.sqrt(r * r + a * a)) : e,
        easing: g,
        css: (n, i) => {
            const x = i * r,
                y = i * a,
                m = n + i * t.width / s.width,
                u = n + i * t.height / s.height;
            return `transform: ${l} translate(${x}px, ${y}px) scale(${m}, ${u});`
        }
    }
}
export {
    O as f
};