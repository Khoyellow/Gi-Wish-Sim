import {
    d as L,
    w as ce
} from "./index-900c1e47.js";
var ze = function(t) {
    return $e(t) && !Je(t)
};

function $e(e) {
    return !!e && typeof e == "object"
}

function Je(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || Ye(e)
}
var Qe = typeof Symbol == "function" && Symbol.for,
    qe = Qe ? Symbol.for("react.element") : 60103;

function Ye(e) {
    return e.$$typeof === qe
}

function Ke(e) {
    return Array.isArray(e) ? [] : {}
}

function j(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? I(Ke(e), e, t) : e
}

function et(e, t, r) {
    return e.concat(t).map(function(n) {
        return j(n, r)
    })
}

function tt(e, t) {
    if (!t.customMerge) return I;
    var r = t.customMerge(e);
    return typeof r == "function" ? r : I
}

function rt(e) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
        return e.propertyIsEnumerable(t)
    }) : []
}

function ge(e) {
    return Object.keys(e).concat(rt(e))
}

function Ie(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}

function nt(e, t) {
    return Ie(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
}

function it(e, t, r) {
    var n = {};
    return r.isMergeableObject(e) && ge(e).forEach(function(i) {
        n[i] = j(e[i], r)
    }), ge(t).forEach(function(i) {
        nt(e, i) || (Ie(e, i) && r.isMergeableObject(t[i]) ? n[i] = tt(i, r)(e[i], t[i], r) : n[i] = j(t[i], r))
    }), n
}

function I(e, t, r) {
    r = r || {}, r.arrayMerge = r.arrayMerge || et, r.isMergeableObject = r.isMergeableObject || ze, r.cloneUnlessOtherwiseSpecified = j;
    var n = Array.isArray(t),
        i = Array.isArray(e),
        a = n === i;
    return a ? n ? r.arrayMerge(e, t, r) : it(e, t, r) : j(t, r)
}
I.all = function(t, r) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function(n, i) {
        return I(n, i, r)
    }, {})
};
var at = I,
    st = at,
    ie = function(e, t) {
        return ie = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(r, n) {
            r.__proto__ = n
        } || function(r, n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
        }, ie(e, t)
    };

function J(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    ie(e, t);

    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
var p = function() {
    return p = Object.assign || function(t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
        }
        return t
    }, p.apply(this, arguments)
};

function Y(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = t.length, a; n < i; n++)(a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var c;
(function(e) {
    e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
})(c || (c = {}));
var x;
(function(e) {
    e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
})(x || (x = {}));
var P;
(function(e) {
    e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
})(P || (P = {}));

function ve(e) {
    return e.type === x.literal
}

function ot(e) {
    return e.type === x.argument
}

function Pe(e) {
    return e.type === x.number
}

function Ne(e) {
    return e.type === x.date
}

function Oe(e) {
    return e.type === x.time
}

function Le(e) {
    return e.type === x.select
}

function Me(e) {
    return e.type === x.plural
}

function ht(e) {
    return e.type === x.pound
}

function Ce(e) {
    return e.type === x.tag
}

function we(e) {
    return !!(e && typeof e == "object" && e.type === P.number)
}

function ae(e) {
    return !!(e && typeof e == "object" && e.type === P.dateTime)
}
var Re = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    ut = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

function lt(e) {
    var t = {};
    return e.replace(ut, function(r) {
        var n = r.length;
        switch (r[0]) {
            case "G":
                t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
                break;
            case "y":
                t.year = n === 2 ? "2-digit" : "numeric";
                break;
            case "Y":
            case "u":
            case "U":
            case "r":
                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
                throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
                t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
                break;
            case "w":
            case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
                t.day = ["numeric", "2-digit"][n - 1];
                break;
            case "D":
            case "F":
            case "g":
                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
                t.weekday = n === 4 ? "short" : n === 5 ? "narrow" : "short";
                break;
            case "e":
                if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                t.weekday = ["short", "long", "narrow", "short"][n - 4];
                break;
            case "c":
                if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                t.weekday = ["short", "long", "narrow", "short"][n - 4];
                break;
            case "a":
                t.hour12 = !0;
                break;
            case "b":
            case "B":
                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
                t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
                break;
            case "H":
                t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
                break;
            case "K":
                t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
                break;
            case "k":
                t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
                break;
            case "j":
            case "J":
            case "C":
                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
                t.minute = ["numeric", "2-digit"][n - 1];
                break;
            case "s":
                t.second = ["numeric", "2-digit"][n - 1];
                break;
            case "S":
            case "A":
                throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
                t.timeZoneName = n < 4 ? "short" : "long";
                break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
        }
        return ""
    }), t
}
var ft = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

function ct(e) {
    if (e.length === 0) throw new Error("Number skeleton cannot be empty");
    for (var t = e.split(ft).filter(function(f) {
            return f.length > 0
        }), r = [], n = 0, i = t; n < i.length; n++) {
        var a = i[n],
            s = a.split("/");
        if (s.length === 0) throw new Error("Invalid number skeleton");
        for (var h = s[0], l = s.slice(1), u = 0, o = l; u < o.length; u++) {
            var b = o[u];
            if (b.length === 0) throw new Error("Invalid number skeleton")
        }
        r.push({
            stem: h,
            options: l
        })
    }
    return r
}

function mt(e) {
    return e.replace(/^(.*?)-/, "")
}
var ye = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    Ue = /^(@+)?(\+|#+)?[rs]?$/g,
    pt = /(\*)(0+)|(#+)(0+)|(0+)/g,
    Ge = /^(0+)$/;

function de(e) {
    var t = {};
    return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ue, function(r, n, i) {
        return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), ""
    }), t
}

function De(e) {
    switch (e) {
        case "sign-auto":
            return {
                signDisplay: "auto"
            };
        case "sign-accounting":
        case "()":
            return {
                currencySign: "accounting"
            };
        case "sign-always":
        case "+!":
            return {
                signDisplay: "always"
            };
        case "sign-accounting-always":
        case "()!":
            return {
                signDisplay: "always",
                currencySign: "accounting"
            };
        case "sign-except-zero":
        case "+?":
            return {
                signDisplay: "exceptZero"
            };
        case "sign-accounting-except-zero":
        case "()?":
            return {
                signDisplay: "exceptZero",
                currencySign: "accounting"
            };
        case "sign-never":
        case "+_":
            return {
                signDisplay: "never"
            }
    }
}

function bt(e) {
    var t;
    if (e[0] === "E" && e[1] === "E" ? (t = {
            notation: "engineering"
        }, e = e.slice(2)) : e[0] === "E" && (t = {
            notation: "scientific"
        }, e = e.slice(1)), t) {
        var r = e.slice(0, 2);
        if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ge.test(e)) throw new Error("Malformed concise eng/scientific notation");
        t.minimumIntegerDigits = e.length
    }
    return t
}

function He(e) {
    var t = {},
        r = De(e);
    return r || t
}

function xt(e) {
    for (var t = {}, r = 0, n = e; r < n.length; r++) {
        var i = n[r];
        switch (i.stem) {
            case "percent":
            case "%":
                t.style = "percent";
                continue;
            case "%x100":
                t.style = "percent", t.scale = 100;
                continue;
            case "currency":
                t.style = "currency", t.currency = i.options[0];
                continue;
            case "group-off":
            case ",_":
                t.useGrouping = !1;
                continue;
            case "precision-integer":
            case ".":
                t.maximumFractionDigits = 0;
                continue;
            case "measure-unit":
            case "unit":
                t.style = "unit", t.unit = mt(i.options[0]);
                continue;
            case "compact-short":
            case "K":
                t.notation = "compact", t.compactDisplay = "short";
                continue;
            case "compact-long":
            case "KK":
                t.notation = "compact", t.compactDisplay = "long";
                continue;
            case "scientific":
                t = p(p(p({}, t), {
                    notation: "scientific"
                }), i.options.reduce(function(l, u) {
                    return p(p({}, l), He(u))
                }, {}));
                continue;
            case "engineering":
                t = p(p(p({}, t), {
                    notation: "engineering"
                }), i.options.reduce(function(l, u) {
                    return p(p({}, l), He(u))
                }, {}));
                continue;
            case "notation-simple":
                t.notation = "standard";
                continue;
            case "unit-width-narrow":
                t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                continue;
            case "unit-width-short":
                t.currencyDisplay = "code", t.unitDisplay = "short";
                continue;
            case "unit-width-full-name":
                t.currencyDisplay = "name", t.unitDisplay = "long";
                continue;
            case "unit-width-iso-code":
                t.currencyDisplay = "symbol";
                continue;
            case "scale":
                t.scale = parseFloat(i.options[0]);
                continue;
            case "integer-width":
                if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                i.options[0].replace(pt, function(l, u, o, b, f, E) {
                    if (u) t.minimumIntegerDigits = o.length;
                    else {
                        if (b && f) throw new Error("We currently do not support maximum integer digits");
                        if (E) throw new Error("We currently do not support exact integer digits")
                    }
                    return ""
                });
                continue
        }
        if (Ge.test(i.stem)) {
            t.minimumIntegerDigits = i.stem.length;
            continue
        }
        if (ye.test(i.stem)) {
            if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(ye, function(l, u, o, b, f, E) {
                return o === "*" ? t.minimumFractionDigits = u.length : b && b[0] === "#" ? t.maximumFractionDigits = b.length : f && E ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + E.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), ""
            });
            var a = i.options[0];
            a === "w" ? t = p(p({}, t), {
                trailingZeroDisplay: "stripIfInteger"
            }) : a && (t = p(p({}, t), de(a)));
            continue
        }
        if (Ue.test(i.stem)) {
            t = p(p({}, t), de(i.stem));
            continue
        }
        var s = De(i.stem);
        s && (t = p(p({}, t), s));
        var h = bt(i.stem);
        h && (t = p(p({}, t), h))
    }
    return t
}
var W = {
    AX: ["H"],
    BQ: ["H"],
    CP: ["H"],
    CZ: ["H"],
    DK: ["H"],
    FI: ["H"],
    ID: ["H"],
    IS: ["H"],
    ML: ["H"],
    NE: ["H"],
    RU: ["H"],
    SE: ["H"],
    SJ: ["H"],
    SK: ["H"],
    AS: ["h", "H"],
    BT: ["h", "H"],
    DJ: ["h", "H"],
    ER: ["h", "H"],
    GH: ["h", "H"],
    IN: ["h", "H"],
    LS: ["h", "H"],
    PG: ["h", "H"],
    PW: ["h", "H"],
    SO: ["h", "H"],
    TO: ["h", "H"],
    VU: ["h", "H"],
    WS: ["h", "H"],
    "001": ["H", "h"],
    AL: ["h", "H", "hB"],
    TD: ["h", "H", "hB"],
    "ca-ES": ["H", "h", "hB"],
    CF: ["H", "h", "hB"],
    CM: ["H", "h", "hB"],
    "fr-CA": ["H", "h", "hB"],
    "gl-ES": ["H", "h", "hB"],
    "it-CH": ["H", "h", "hB"],
    "it-IT": ["H", "h", "hB"],
    LU: ["H", "h", "hB"],
    NP: ["H", "h", "hB"],
    PF: ["H", "h", "hB"],
    SC: ["H", "h", "hB"],
    SM: ["H", "h", "hB"],
    SN: ["H", "h", "hB"],
    TF: ["H", "h", "hB"],
    VA: ["H", "h", "hB"],
    CY: ["h", "H", "hb", "hB"],
    GR: ["h", "H", "hb", "hB"],
    CO: ["h", "H", "hB", "hb"],
    DO: ["h", "H", "hB", "hb"],
    KP: ["h", "H", "hB", "hb"],
    KR: ["h", "H", "hB", "hb"],
    NA: ["h", "H", "hB", "hb"],
    PA: ["h", "H", "hB", "hb"],
    PR: ["h", "H", "hB", "hb"],
    VE: ["h", "H", "hB", "hb"],
    AC: ["H", "h", "hb", "hB"],
    AI: ["H", "h", "hb", "hB"],
    BW: ["H", "h", "hb", "hB"],
    BZ: ["H", "h", "hb", "hB"],
    CC: ["H", "h", "hb", "hB"],
    CK: ["H", "h", "hb", "hB"],
    CX: ["H", "h", "hb", "hB"],
    DG: ["H", "h", "hb", "hB"],
    FK: ["H", "h", "hb", "hB"],
    GB: ["H", "h", "hb", "hB"],
    GG: ["H", "h", "hb", "hB"],
    GI: ["H", "h", "hb", "hB"],
    IE: ["H", "h", "hb", "hB"],
    IM: ["H", "h", "hb", "hB"],
    IO: ["H", "h", "hb", "hB"],
    JE: ["H", "h", "hb", "hB"],
    LT: ["H", "h", "hb", "hB"],
    MK: ["H", "h", "hb", "hB"],
    MN: ["H", "h", "hb", "hB"],
    MS: ["H", "h", "hb", "hB"],
    NF: ["H", "h", "hb", "hB"],
    NG: ["H", "h", "hb", "hB"],
    NR: ["H", "h", "hb", "hB"],
    NU: ["H", "h", "hb", "hB"],
    PN: ["H", "h", "hb", "hB"],
    SH: ["H", "h", "hb", "hB"],
    SX: ["H", "h", "hb", "hB"],
    TA: ["H", "h", "hb", "hB"],
    ZA: ["H", "h", "hb", "hB"],
    "af-ZA": ["H", "h", "hB", "hb"],
    AR: ["H", "h", "hB", "hb"],
    CL: ["H", "h", "hB", "hb"],
    CR: ["H", "h", "hB", "hb"],
    CU: ["H", "h", "hB", "hb"],
    EA: ["H", "h", "hB", "hb"],
    "es-BO": ["H", "h", "hB", "hb"],
    "es-BR": ["H", "h", "hB", "hb"],
    "es-EC": ["H", "h", "hB", "hb"],
    "es-ES": ["H", "h", "hB", "hb"],
    "es-GQ": ["H", "h", "hB", "hb"],
    "es-PE": ["H", "h", "hB", "hb"],
    GT: ["H", "h", "hB", "hb"],
    HN: ["H", "h", "hB", "hb"],
    IC: ["H", "h", "hB", "hb"],
    KG: ["H", "h", "hB", "hb"],
    KM: ["H", "h", "hB", "hb"],
    LK: ["H", "h", "hB", "hb"],
    MA: ["H", "h", "hB", "hb"],
    MX: ["H", "h", "hB", "hb"],
    NI: ["H", "h", "hB", "hb"],
    PY: ["H", "h", "hB", "hb"],
    SV: ["H", "h", "hB", "hb"],
    UY: ["H", "h", "hB", "hb"],
    JP: ["H", "h", "K"],
    AD: ["H", "hB"],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AT: ["H", "hB"],
    AW: ["H", "hB"],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BR: ["H", "hB"],
    CG: ["H", "hB"],
    CI: ["H", "hB"],
    CV: ["H", "hB"],
    DE: ["H", "hB"],
    EE: ["H", "hB"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GF: ["H", "hB"],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GW: ["H", "hB"],
    HR: ["H", "hB"],
    IL: ["H", "hB"],
    IT: ["H", "hB"],
    KZ: ["H", "hB"],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    MF: ["H", "hB"],
    MQ: ["H", "hB"],
    MZ: ["H", "hB"],
    NC: ["H", "hB"],
    NL: ["H", "hB"],
    PM: ["H", "hB"],
    PT: ["H", "hB"],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    SI: ["H", "hB"],
    SR: ["H", "hB"],
    ST: ["H", "hB"],
    TG: ["H", "hB"],
    TR: ["H", "hB"],
    WF: ["H", "hB"],
    YT: ["H", "hB"],
    BD: ["h", "hB", "H"],
    PK: ["h", "hB", "H"],
    AZ: ["H", "hB", "h"],
    BA: ["H", "hB", "h"],
    BG: ["H", "hB", "h"],
    CH: ["H", "hB", "h"],
    GE: ["H", "hB", "h"],
    LI: ["H", "hB", "h"],
    ME: ["H", "hB", "h"],
    RS: ["H", "hB", "h"],
    UA: ["H", "hB", "h"],
    UZ: ["H", "hB", "h"],
    XK: ["H", "hB", "h"],
    AG: ["h", "hb", "H", "hB"],
    AU: ["h", "hb", "H", "hB"],
    BB: ["h", "hb", "H", "hB"],
    BM: ["h", "hb", "H", "hB"],
    BS: ["h", "hb", "H", "hB"],
    CA: ["h", "hb", "H", "hB"],
    DM: ["h", "hb", "H", "hB"],
    "en-001": ["h", "hb", "H", "hB"],
    FJ: ["h", "hb", "H", "hB"],
    FM: ["h", "hb", "H", "hB"],
    GD: ["h", "hb", "H", "hB"],
    GM: ["h", "hb", "H", "hB"],
    GU: ["h", "hb", "H", "hB"],
    GY: ["h", "hb", "H", "hB"],
    JM: ["h", "hb", "H", "hB"],
    KI: ["h", "hb", "H", "hB"],
    KN: ["h", "hb", "H", "hB"],
    KY: ["h", "hb", "H", "hB"],
    LC: ["h", "hb", "H", "hB"],
    LR: ["h", "hb", "H", "hB"],
    MH: ["h", "hb", "H", "hB"],
    MP: ["h", "hb", "H", "hB"],
    MW: ["h", "hb", "H", "hB"],
    NZ: ["h", "hb", "H", "hB"],
    SB: ["h", "hb", "H", "hB"],
    SG: ["h", "hb", "H", "hB"],
    SL: ["h", "hb", "H", "hB"],
    SS: ["h", "hb", "H", "hB"],
    SZ: ["h", "hb", "H", "hB"],
    TC: ["h", "hb", "H", "hB"],
    TT: ["h", "hb", "H", "hB"],
    UM: ["h", "hb", "H", "hB"],
    US: ["h", "hb", "H", "hB"],
    VC: ["h", "hb", "H", "hB"],
    VG: ["h", "hb", "H", "hB"],
    VI: ["h", "hb", "H", "hB"],
    ZM: ["h", "hb", "H", "hB"],
    BO: ["H", "hB", "h", "hb"],
    EC: ["H", "hB", "h", "hb"],
    ES: ["H", "hB", "h", "hb"],
    GQ: ["H", "hB", "h", "hb"],
    PE: ["H", "hB", "h", "hb"],
    AE: ["h", "hB", "hb", "H"],
    "ar-001": ["h", "hB", "hb", "H"],
    BH: ["h", "hB", "hb", "H"],
    DZ: ["h", "hB", "hb", "H"],
    EG: ["h", "hB", "hb", "H"],
    EH: ["h", "hB", "hb", "H"],
    HK: ["h", "hB", "hb", "H"],
    IQ: ["h", "hB", "hb", "H"],
    JO: ["h", "hB", "hb", "H"],
    KW: ["h", "hB", "hb", "H"],
    LB: ["h", "hB", "hb", "H"],
    LY: ["h", "hB", "hb", "H"],
    MO: ["h", "hB", "hb", "H"],
    MR: ["h", "hB", "hb", "H"],
    OM: ["h", "hB", "hb", "H"],
    PH: ["h", "hB", "hb", "H"],
    PS: ["h", "hB", "hb", "H"],
    QA: ["h", "hB", "hb", "H"],
    SA: ["h", "hB", "hb", "H"],
    SD: ["h", "hB", "hb", "H"],
    SY: ["h", "hB", "hb", "H"],
    TN: ["h", "hB", "hb", "H"],
    YE: ["h", "hB", "hb", "H"],
    AF: ["H", "hb", "hB", "h"],
    LA: ["H", "hb", "hB", "h"],
    CN: ["H", "hB", "hb", "h"],
    LV: ["H", "hB", "hb", "h"],
    TL: ["H", "hB", "hb", "h"],
    "zu-ZA": ["H", "hB", "hb", "h"],
    CD: ["hB", "H"],
    IR: ["hB", "H"],
    "hi-IN": ["hB", "h", "H"],
    "kn-IN": ["hB", "h", "H"],
    "ml-IN": ["hB", "h", "H"],
    "te-IN": ["hB", "h", "H"],
    KH: ["hB", "h", "H", "hb"],
    "ta-IN": ["hB", "h", "hb", "H"],
    BN: ["hb", "hB", "h", "H"],
    MY: ["hb", "hB", "h", "H"],
    ET: ["hB", "hb", "h", "H"],
    "gu-IN": ["hB", "hb", "h", "H"],
    "mr-IN": ["hB", "hb", "h", "H"],
    "pa-IN": ["hB", "hb", "h", "H"],
    TW: ["hB", "hb", "h", "H"],
    KE: ["hB", "hb", "H", "h"],
    MM: ["hB", "hb", "H", "h"],
    TZ: ["hB", "hb", "H", "h"],
    UG: ["hB", "hb", "H", "h"]
};

function Et(e, t) {
    for (var r = "", n = 0; n < e.length; n++) {
        var i = e.charAt(n);
        if (i === "j") {
            for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === i;) a++, n++;
            var s = 1 + (a & 1),
                h = a < 2 ? 1 : 3 + (a >> 1),
                l = "a",
                u = gt(t);
            for ((u == "H" || u == "k") && (h = 0); h-- > 0;) r += l;
            for (; s-- > 0;) r = u + r
        } else i === "J" ? r += "H" : r += i
    }
    return r
}

function gt(e) {
    var t = e.hourCycle;
    if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
        case "h24":
            return "k";
        case "h23":
            return "H";
        case "h12":
            return "h";
        case "h11":
            return "K";
        default:
            throw new Error("Invalid hourCycle")
    }
    var r = e.language,
        n;
    r !== "root" && (n = e.maximize().region);
    var i = W[n || ""] || W[r || ""] || W["".concat(r, "-001")] || W["001"];
    return i[0]
}
var K, vt = new RegExp("^".concat(Re.source, "*")),
    yt = new RegExp("".concat(Re.source, "*$"));

function m(e, t) {
    return {
        start: e,
        end: t
    }
}
var dt = !!String.prototype.startsWith,
    Ht = !!String.fromCodePoint,
    Tt = !!Object.fromEntries,
    Bt = !!String.prototype.codePointAt,
    _t = !!String.prototype.trimStart,
    At = !!String.prototype.trimEnd,
    St = !!Number.isSafeInteger,
    It = St ? Number.isSafeInteger : function(e) {
        return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
    },
    se = !0;
try {
    var Pt = je("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    se = ((K = Pt.exec("a")) === null || K === void 0 ? void 0 : K[0]) === "a"
} catch {
    se = !1
}
var Te = dt ? function(t, r, n) {
        return t.startsWith(r, n)
    } : function(t, r, n) {
        return t.slice(n, n + r.length) === r
    },
    oe = Ht ? String.fromCodePoint : function() {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        for (var n = "", i = t.length, a = 0, s; i > a;) {
            if (s = t[a++], s > 1114111) throw RangeError(s + " is not a valid code point");
            n += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320)
        }
        return n
    },
    Be = Tt ? Object.fromEntries : function(t) {
        for (var r = {}, n = 0, i = t; n < i.length; n++) {
            var a = i[n],
                s = a[0],
                h = a[1];
            r[s] = h
        }
        return r
    },
    Fe = Bt ? function(t, r) {
        return t.codePointAt(r)
    } : function(t, r) {
        var n = t.length;
        if (!(r < 0 || r >= n)) {
            var i = t.charCodeAt(r),
                a;
            return i < 55296 || i > 56319 || r + 1 === n || (a = t.charCodeAt(r + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536
        }
    },
    Nt = _t ? function(t) {
        return t.trimStart()
    } : function(t) {
        return t.replace(vt, "")
    },
    Ot = At ? function(t) {
        return t.trimEnd()
    } : function(t) {
        return t.replace(yt, "")
    };

function je(e, t) {
    return new RegExp(e, t)
}
var he;
if (se) {
    var _e = je("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    he = function(t, r) {
        var n;
        _e.lastIndex = r;
        var i = _e.exec(t);
        return (n = i[1]) !== null && n !== void 0 ? n : ""
    }
} else he = function(t, r) {
    for (var n = [];;) {
        var i = Fe(t, r);
        if (i === void 0 || Ve(i) || wt(i)) break;
        n.push(i), r += i >= 65536 ? 2 : 1
    }
    return oe.apply(void 0, n)
};
var Lt = function() {
    function e(t, r) {
        r === void 0 && (r = {}), this.message = t, this.position = {
            offset: 0,
            line: 1,
            column: 1
        }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons
    }
    return e.prototype.parse = function() {
        if (this.offset() !== 0) throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1)
    }, e.prototype.parseMessage = function(t, r, n) {
        for (var i = []; !this.isEOF();) {
            var a = this.char();
            if (a === 123) {
                var s = this.parseArgument(t, n);
                if (s.err) return s;
                i.push(s.val)
            } else {
                if (a === 125 && t > 0) break;
                if (a === 35 && (r === "plural" || r === "selectordinal")) {
                    var h = this.clonePosition();
                    this.bump(), i.push({
                        type: x.pound,
                        location: m(h, this.clonePosition())
                    })
                } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
                    if (n) break;
                    return this.error(c.UNMATCHED_CLOSING_TAG, m(this.clonePosition(), this.clonePosition()))
                } else if (a === 60 && !this.ignoreTag && ue(this.peek() || 0)) {
                    var s = this.parseTag(t, r);
                    if (s.err) return s;
                    i.push(s.val)
                } else {
                    var s = this.parseLiteral(t, r);
                    if (s.err) return s;
                    i.push(s.val)
                }
            }
        }
        return {
            val: i,
            err: null
        }
    }, e.prototype.parseTag = function(t, r) {
        var n = this.clonePosition();
        this.bump();
        var i = this.parseTagName();
        if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
                type: x.literal,
                value: "<".concat(i, "/>"),
                location: m(n, this.clonePosition())
            },
            err: null
        };
        if (this.bumpIf(">")) {
            var a = this.parseMessage(t + 1, r, !0);
            if (a.err) return a;
            var s = a.val,
                h = this.clonePosition();
            if (this.bumpIf("</")) {
                if (this.isEOF() || !ue(this.char())) return this.error(c.INVALID_TAG, m(h, this.clonePosition()));
                var l = this.clonePosition(),
                    u = this.parseTagName();
                return i !== u ? this.error(c.UNMATCHED_CLOSING_TAG, m(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                    val: {
                        type: x.tag,
                        value: i,
                        children: s,
                        location: m(n, this.clonePosition())
                    },
                    err: null
                } : this.error(c.INVALID_TAG, m(h, this.clonePosition())))
            } else return this.error(c.UNCLOSED_TAG, m(n, this.clonePosition()))
        } else return this.error(c.INVALID_TAG, m(n, this.clonePosition()))
    }, e.prototype.parseTagName = function() {
        var t = this.offset();
        for (this.bump(); !this.isEOF() && Ct(this.char());) this.bump();
        return this.message.slice(t, this.offset())
    }, e.prototype.parseLiteral = function(t, r) {
        for (var n = this.clonePosition(), i = "";;) {
            var a = this.tryParseQuote(r);
            if (a) {
                i += a;
                continue
            }
            var s = this.tryParseUnquoted(t, r);
            if (s) {
                i += s;
                continue
            }
            var h = this.tryParseLeftAngleBracket();
            if (h) {
                i += h;
                continue
            }
            break
        }
        var l = m(n, this.clonePosition());
        return {
            val: {
                type: x.literal,
                value: i,
                location: l
            },
            err: null
        }
    }, e.prototype.tryParseLeftAngleBracket = function() {
        return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Mt(this.peek() || 0)) ? (this.bump(), "<") : null
    }, e.prototype.tryParseQuote = function(t) {
        if (this.isEOF() || this.char() !== 39) return null;
        switch (this.peek()) {
            case 39:
                return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35:
                if (t === "plural" || t === "selectordinal") break;
                return null;
            default:
                return null
        }
        this.bump();
        var r = [this.char()];
        for (this.bump(); !this.isEOF();) {
            var n = this.char();
            if (n === 39)
                if (this.peek() === 39) r.push(39), this.bump();
                else {
                    this.bump();
                    break
                }
            else r.push(n);
            this.bump()
        }
        return oe.apply(void 0, r)
    }, e.prototype.tryParseUnquoted = function(t, r) {
        if (this.isEOF()) return null;
        var n = this.char();
        return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), oe(n))
    }, e.prototype.parseArgument = function(t, r) {
        var n = this.clonePosition();
        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(c.EXPECT_ARGUMENT_CLOSING_BRACE, m(n, this.clonePosition()));
        if (this.char() === 125) return this.bump(), this.error(c.EMPTY_ARGUMENT, m(n, this.clonePosition()));
        var i = this.parseIdentifierIfPossible().value;
        if (!i) return this.error(c.MALFORMED_ARGUMENT, m(n, this.clonePosition()));
        if (this.bumpSpace(), this.isEOF()) return this.error(c.EXPECT_ARGUMENT_CLOSING_BRACE, m(n, this.clonePosition()));
        switch (this.char()) {
            case 125:
                return this.bump(), {
                    val: {
                        type: x.argument,
                        value: i,
                        location: m(n, this.clonePosition())
                    },
                    err: null
                };
            case 44:
                return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(c.EXPECT_ARGUMENT_CLOSING_BRACE, m(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
            default:
                return this.error(c.MALFORMED_ARGUMENT, m(n, this.clonePosition()))
        }
    }, e.prototype.parseIdentifierIfPossible = function() {
        var t = this.clonePosition(),
            r = this.offset(),
            n = he(this.message, r),
            i = r + n.length;
        this.bumpTo(i);
        var a = this.clonePosition(),
            s = m(t, a);
        return {
            value: n,
            location: s
        }
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
        var a, s = this.clonePosition(),
            h = this.parseIdentifierIfPossible().value,
            l = this.clonePosition();
        switch (h) {
            case "":
                return this.error(c.EXPECT_ARGUMENT_TYPE, m(s, l));
            case "number":
            case "date":
            case "time":
                {
                    this.bumpSpace();
                    var u = null;
                    if (this.bumpIf(",")) {
                        this.bumpSpace();
                        var o = this.clonePosition(),
                            b = this.parseSimpleArgStyleIfPossible();
                        if (b.err) return b;
                        var f = Ot(b.val);
                        if (f.length === 0) return this.error(c.EXPECT_ARGUMENT_STYLE, m(this.clonePosition(), this.clonePosition()));
                        var E = m(o, this.clonePosition());
                        u = {
                            style: f,
                            styleLocation: E
                        }
                    }
                    var v = this.tryParseArgumentClose(i);
                    if (v.err) return v;
                    var y = m(i, this.clonePosition());
                    if (u && Te(u ? .style, "::", 0)) {
                        var B = Nt(u.style.slice(2));
                        if (h === "number") {
                            var b = this.parseNumberSkeletonFromString(B, u.styleLocation);
                            return b.err ? b : {
                                val: {
                                    type: x.number,
                                    value: n,
                                    location: y,
                                    style: b.val
                                },
                                err: null
                            }
                        } else {
                            if (B.length === 0) return this.error(c.EXPECT_DATE_TIME_SKELETON, y);
                            var w = B;
                            this.locale && (w = Et(B, this.locale));
                            var f = {
                                    type: P.dateTime,
                                    pattern: w,
                                    location: u.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? lt(w) : {}
                                },
                                S = h === "date" ? x.date : x.time;
                            return {
                                val: {
                                    type: S,
                                    value: n,
                                    location: y,
                                    style: f
                                },
                                err: null
                            }
                        }
                    }
                    return {
                        val: {
                            type: h === "number" ? x.number : h === "date" ? x.date : x.time,
                            value: n,
                            location: y,
                            style: (a = u ? .style) !== null && a !== void 0 ? a : null
                        },
                        err: null
                    }
                }
            case "plural":
            case "selectordinal":
            case "select":
                {
                    var d = this.clonePosition();
                    if (this.bumpSpace(), !this.bumpIf(",")) return this.error(c.EXPECT_SELECT_ARGUMENT_OPTIONS, m(d, p({}, d)));this.bumpSpace();
                    var R = this.parseIdentifierIfPossible(),
                        _ = 0;
                    if (h !== "select" && R.value === "offset") {
                        if (!this.bumpIf(":")) return this.error(c.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, m(this.clonePosition(), this.clonePosition()));
                        this.bumpSpace();
                        var b = this.tryParseDecimalInteger(c.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, c.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                        if (b.err) return b;
                        this.bumpSpace(), R = this.parseIdentifierIfPossible(), _ = b.val
                    }
                    var k = this.tryParsePluralOrSelectOptions(t, h, r, R);
                    if (k.err) return k;
                    var v = this.tryParseArgumentClose(i);
                    if (v.err) return v;
                    var Ee = m(i, this.clonePosition());
                    return h === "select" ? {
                        val: {
                            type: x.select,
                            value: n,
                            options: Be(k.val),
                            location: Ee
                        },
                        err: null
                    } : {
                        val: {
                            type: x.plural,
                            value: n,
                            options: Be(k.val),
                            offset: _,
                            pluralType: h === "plural" ? "cardinal" : "ordinal",
                            location: Ee
                        },
                        err: null
                    }
                }
            default:
                return this.error(c.INVALID_ARGUMENT_TYPE, m(s, l))
        }
    }, e.prototype.tryParseArgumentClose = function(t) {
        return this.isEOF() || this.char() !== 125 ? this.error(c.EXPECT_ARGUMENT_CLOSING_BRACE, m(t, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
        })
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
        for (var t = 0, r = this.clonePosition(); !this.isEOF();) {
            var n = this.char();
            switch (n) {
                case 39:
                    {
                        this.bump();
                        var i = this.clonePosition();
                        if (!this.bumpUntil("'")) return this.error(c.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, m(i, this.clonePosition()));this.bump();
                        break
                    }
                case 123:
                    {
                        t += 1,
                        this.bump();
                        break
                    }
                case 125:
                    {
                        if (t > 0) t -= 1;
                        else return {
                            val: this.message.slice(r.offset, this.offset()),
                            err: null
                        };
                        break
                    }
                default:
                    this.bump();
                    break
            }
        }
        return {
            val: this.message.slice(r.offset, this.offset()),
            err: null
        }
    }, e.prototype.parseNumberSkeletonFromString = function(t, r) {
        var n = [];
        try {
            n = ct(t)
        } catch {
            return this.error(c.INVALID_NUMBER_SKELETON, r)
        }
        return {
            val: {
                type: P.number,
                tokens: n,
                location: r,
                parsedOptions: this.shouldParseSkeletons ? xt(n) : {}
            },
            err: null
        }
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
        for (var a, s = !1, h = [], l = new Set, u = i.value, o = i.location;;) {
            if (u.length === 0) {
                var b = this.clonePosition();
                if (r !== "select" && this.bumpIf("=")) {
                    var f = this.tryParseDecimalInteger(c.EXPECT_PLURAL_ARGUMENT_SELECTOR, c.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (f.err) return f;
                    o = m(b, this.clonePosition()), u = this.message.slice(b.offset, this.offset())
                } else break
            }
            if (l.has(u)) return this.error(r === "select" ? c.DUPLICATE_SELECT_ARGUMENT_SELECTOR : c.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, o);
            u === "other" && (s = !0), this.bumpSpace();
            var E = this.clonePosition();
            if (!this.bumpIf("{")) return this.error(r === "select" ? c.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : c.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, m(this.clonePosition(), this.clonePosition()));
            var v = this.parseMessage(t + 1, r, n);
            if (v.err) return v;
            var y = this.tryParseArgumentClose(E);
            if (y.err) return y;
            h.push([u, {
                value: v.val,
                location: m(E, this.clonePosition())
            }]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, o = a.location
        }
        return h.length === 0 ? this.error(r === "select" ? c.EXPECT_SELECT_ARGUMENT_SELECTOR : c.EXPECT_PLURAL_ARGUMENT_SELECTOR, m(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(c.MISSING_OTHER_CLAUSE, m(this.clonePosition(), this.clonePosition())) : {
            val: h,
            err: null
        }
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
        var n = 1,
            i = this.clonePosition();
        this.bumpIf("+") || this.bumpIf("-") && (n = -1);
        for (var a = !1, s = 0; !this.isEOF();) {
            var h = this.char();
            if (h >= 48 && h <= 57) a = !0, s = s * 10 + (h - 48), this.bump();
            else break
        }
        var l = m(i, this.clonePosition());
        return a ? (s *= n, It(s) ? {
            val: s,
            err: null
        } : this.error(r, l)) : this.error(t, l)
    }, e.prototype.offset = function() {
        return this.position.offset
    }, e.prototype.isEOF = function() {
        return this.offset() === this.message.length
    }, e.prototype.clonePosition = function() {
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
        }
    }, e.prototype.char = function() {
        var t = this.position.offset;
        if (t >= this.message.length) throw Error("out of bound");
        var r = Fe(this.message, t);
        if (r === void 0) throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        return r
    }, e.prototype.error = function(t, r) {
        return {
            val: null,
            err: {
                kind: t,
                message: this.message,
                location: r
            }
        }
    }, e.prototype.bump = function() {
        if (!this.isEOF()) {
            var t = this.char();
            t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2)
        }
    }, e.prototype.bumpIf = function(t) {
        if (Te(this.message, t, this.offset())) {
            for (var r = 0; r < t.length; r++) this.bump();
            return !0
        }
        return !1
    }, e.prototype.bumpUntil = function(t) {
        var r = this.offset(),
            n = this.message.indexOf(t, r);
        return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
    }, e.prototype.bumpTo = function(t) {
        if (this.offset() > t) throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
        for (t = Math.min(t, this.message.length);;) {
            var r = this.offset();
            if (r === t) break;
            if (r > t) throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
        }
    }, e.prototype.bumpSpace = function() {
        for (; !this.isEOF() && Ve(this.char());) this.bump()
    }, e.prototype.peek = function() {
        if (this.isEOF()) return null;
        var t = this.char(),
            r = this.offset(),
            n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
        return n ? ? null
    }, e
}();

function ue(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90
}

function Mt(e) {
    return ue(e) || e === 47
}

function Ct(e) {
    return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
}

function Ve(e) {
    return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233
}

function wt(e) {
    return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094
}

function le(e) {
    e.forEach(function(t) {
        if (delete t.location, Le(t) || Me(t))
            for (var r in t.options) delete t.options[r].location, le(t.options[r].value);
        else Pe(t) && we(t.style) || (Ne(t) || Oe(t)) && ae(t.style) ? delete t.style.location : Ce(t) && le(t.children)
    })
}

function Rt(e, t) {
    t === void 0 && (t = {}), t = p({
        shouldParseSkeletons: !0,
        requiresOtherClause: !0
    }, t);
    var r = new Lt(e, t).parse();
    if (r.err) {
        var n = SyntaxError(c[r.err.kind]);
        throw n.location = r.err.location, n.originalMessage = r.err.message, n
    }
    return t ? .captureLocation || le(r.val), r.val
}

function ee(e, t) {
    var r = t && t.cache ? t.cache : Vt,
        n = t && t.serializer ? t.serializer : jt,
        i = t && t.strategy ? t.strategy : Gt;
    return i(e, {
        cache: r,
        serializer: n
    })
}

function Ut(e) {
    return e == null || typeof e == "number" || typeof e == "boolean"
}

function Xe(e, t, r, n) {
    var i = Ut(n) ? n : r(n),
        a = t.get(i);
    return typeof a > "u" && (a = e.call(this, n), t.set(i, a)), a
}

function ke(e, t, r) {
    var n = Array.prototype.slice.call(arguments, 3),
        i = r(n),
        a = t.get(i);
    return typeof a > "u" && (a = e.apply(this, n), t.set(i, a)), a
}

function me(e, t, r, n, i) {
    return r.bind(t, e, n, i)
}

function Gt(e, t) {
    var r = e.length === 1 ? Xe : ke;
    return me(e, this, r, t.cache.create(), t.serializer)
}

function Dt(e, t) {
    return me(e, this, ke, t.cache.create(), t.serializer)
}

function Ft(e, t) {
    return me(e, this, Xe, t.cache.create(), t.serializer)
}
var jt = function() {
    return JSON.stringify(arguments)
};

function pe() {
    this.cache = Object.create(null)
}
pe.prototype.get = function(e) {
    return this.cache[e]
};
pe.prototype.set = function(e, t) {
    this.cache[e] = t
};
var Vt = {
        create: function() {
            return new pe
        }
    },
    te = {
        variadic: Dt,
        monadic: Ft
    },
    N;
(function(e) {
    e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
})(N || (N = {}));
var Q = function(e) {
        J(t, e);

        function t(r, n, i) {
            var a = e.call(this, r) || this;
            return a.code = n, a.originalMessage = i, a
        }
        return t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
        }, t
    }(Error),
    Ae = function(e) {
        J(t, e);

        function t(r, n, i, a) {
            return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), N.INVALID_VALUE, a) || this
        }
        return t
    }(Q),
    Xt = function(e) {
        J(t, e);

        function t(r, n, i) {
            return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), N.INVALID_VALUE, i) || this
        }
        return t
    }(Q),
    kt = function(e) {
        J(t, e);

        function t(r, n) {
            return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), N.MISSING_VALUE, n) || this
        }
        return t
    }(Q),
    g;
(function(e) {
    e[e.literal = 0] = "literal", e[e.object = 1] = "object"
})(g || (g = {}));

function Wt(e) {
    return e.length < 2 ? e : e.reduce(function(t, r) {
        var n = t[t.length - 1];
        return !n || n.type !== g.literal || r.type !== g.literal ? t.push(r) : n.value += r.value, t
    }, [])
}

function Zt(e) {
    return typeof e == "function"
}

function Z(e, t, r, n, i, a, s) {
    if (e.length === 1 && ve(e[0])) return [{
        type: g.literal,
        value: e[0].value
    }];
    for (var h = [], l = 0, u = e; l < u.length; l++) {
        var o = u[l];
        if (ve(o)) {
            h.push({
                type: g.literal,
                value: o.value
            });
            continue
        }
        if (ht(o)) {
            typeof a == "number" && h.push({
                type: g.literal,
                value: r.getNumberFormat(t).format(a)
            });
            continue
        }
        var b = o.value;
        if (!(i && b in i)) throw new kt(b, s);
        var f = i[b];
        if (ot(o)) {
            (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), h.push({
                type: typeof f == "string" ? g.literal : g.object,
                value: f
            });
            continue
        }
        if (Ne(o)) {
            var E = typeof o.style == "string" ? n.date[o.style] : ae(o.style) ? o.style.parsedOptions : void 0;
            h.push({
                type: g.literal,
                value: r.getDateTimeFormat(t, E).format(f)
            });
            continue
        }
        if (Oe(o)) {
            var E = typeof o.style == "string" ? n.time[o.style] : ae(o.style) ? o.style.parsedOptions : n.time.medium;
            h.push({
                type: g.literal,
                value: r.getDateTimeFormat(t, E).format(f)
            });
            continue
        }
        if (Pe(o)) {
            var E = typeof o.style == "string" ? n.number[o.style] : we(o.style) ? o.style.parsedOptions : void 0;
            E && E.scale && (f = f * (E.scale || 1)), h.push({
                type: g.literal,
                value: r.getNumberFormat(t, E).format(f)
            });
            continue
        }
        if (Ce(o)) {
            var v = o.children,
                y = o.value,
                B = i[y];
            if (!Zt(B)) throw new Xt(y, "function", s);
            var w = Z(v, t, r, n, i, a),
                S = B(w.map(function(_) {
                    return _.value
                }));
            Array.isArray(S) || (S = [S]), h.push.apply(h, S.map(function(_) {
                return {
                    type: typeof _ == "string" ? g.literal : g.object,
                    value: _
                }
            }))
        }
        if (Le(o)) {
            var d = o.options[f] || o.options.other;
            if (!d) throw new Ae(o.value, f, Object.keys(o.options), s);
            h.push.apply(h, Z(d.value, t, r, n, i));
            continue
        }
        if (Me(o)) {
            var d = o.options["=".concat(f)];
            if (!d) {
                if (!Intl.PluralRules) throw new Q(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, N.MISSING_INTL_API, s);
                var R = r.getPluralRules(t, {
                    type: o.pluralType
                }).select(f - (o.offset || 0));
                d = o.options[R] || o.options.other
            }
            if (!d) throw new Ae(o.value, f, Object.keys(o.options), s);
            h.push.apply(h, Z(d.value, t, r, n, i, f - (o.offset || 0)));
            continue
        }
    }
    return Wt(h)
}

function zt(e, t) {
    return t ? p(p(p({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
        return r[n] = p(p({}, e[n]), t[n] || {}), r
    }, {})) : e
}

function $t(e, t) {
    return t ? Object.keys(e).reduce(function(r, n) {
        return r[n] = zt(e[n], t[n]), r
    }, p({}, e)) : e
}

function re(e) {
    return {
        create: function() {
            return {
                get: function(t) {
                    return e[t]
                },
                set: function(t, r) {
                    e[t] = r
                }
            }
        }
    }
}

function Jt(e) {
    return e === void 0 && (e = {
        number: {},
        dateTime: {},
        pluralRules: {}
    }), {
        getNumberFormat: ee(function() {
            for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return new((t = Intl.NumberFormat).bind.apply(t, Y([void 0], r, !1)))
        }, {
            cache: re(e.number),
            strategy: te.variadic
        }),
        getDateTimeFormat: ee(function() {
            for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return new((t = Intl.DateTimeFormat).bind.apply(t, Y([void 0], r, !1)))
        }, {
            cache: re(e.dateTime),
            strategy: te.variadic
        }),
        getPluralRules: ee(function() {
            for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return new((t = Intl.PluralRules).bind.apply(t, Y([void 0], r, !1)))
        }, {
            cache: re(e.pluralRules),
            strategy: te.variadic
        })
    }
}
var Qt = function() {
    function e(t, r, n, i) {
        var a = this;
        if (r === void 0 && (r = e.defaultLocale), this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }, this.format = function(s) {
                var h = a.formatToParts(s);
                if (h.length === 1) return h[0].value;
                var l = h.reduce(function(u, o) {
                    return !u.length || o.type !== g.literal || typeof u[u.length - 1] != "string" ? u.push(o.value) : u[u.length - 1] += o.value, u
                }, []);
                return l.length <= 1 ? l[0] || "" : l
            }, this.formatToParts = function(s) {
                return Z(a.ast, a.locales, a.formatters, a.formats, s, void 0, a.message)
            }, this.resolvedOptions = function() {
                return {
                    locale: a.resolvedLocale.toString()
                }
            }, this.getAst = function() {
                return a.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            this.ast = e.__parse(t, {
                ignoreTag: i ? .ignoreTag,
                locale: this.resolvedLocale
            })
        } else this.ast = t;
        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
        this.formats = $t(e.formats, n), this.formatters = i && i.formatters || Jt(this.formatterCache)
    }
    return Object.defineProperty(e, "defaultLocale", {
        get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
        },
        enumerable: !1,
        configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
        var r = Intl.NumberFormat.supportedLocalesOf(t);
        return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0])
    }, e.__parse = Rt, e.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0
            },
            currency: {
                style: "currency"
            },
            percent: {
                style: "percent"
            }
        },
        date: {
            short: {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
            },
            medium: {
                month: "short",
                day: "numeric",
                year: "numeric"
            },
            long: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        },
        time: {
            short: {
                hour: "numeric",
                minute: "numeric"
            },
            medium: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            },
            long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            },
            full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            }
        }
    }, e
}();
const qt = Qt,
    H = {},
    Yt = (e, t, r) => r && (t in H || (H[t] = {}), e in H[t] || (H[t][e] = r), r),
    We = (e, t) => {
        if (t == null) return;
        if (t in H && e in H[t]) return H[t][e];
        const r = X(t);
        for (let n = 0; n < r.length; n++) {
            const i = Kt(r[n], e);
            if (i) return Yt(e, t, i)
        }
    };
let be;
const M = ce({});

function xe(e) {
    return e in be
}

function Kt(e, t) {
    if (!xe(e)) return null;
    const r = function(n) {
        return be[n] || null
    }(e);
    return function(n, i) {
        if (i == null) return;
        if (i in n) return n[i];
        const a = i.split(".");
        let s = n;
        for (let h = 0; h < a.length; h++)
            if (typeof s == "object") {
                if (h > 0) {
                    const l = a.slice(h, a.length).join(".");
                    if (l in s) {
                        s = s[l];
                        break
                    }
                }
                s = s[a[h]]
            } else s = void 0;
        return s
    }(r, t)
}

function er(e, ...t) {
    delete H[e], M.update(r => (r[e] = st.all([r[e] || {}, ...t]), r))
}
const xr = L([M], ([e]) => Object.keys(e));
M.subscribe(e => be = e);
const D = {};

function F(e) {
    return D[e]
}

function $(e) {
    return e != null && X(e).some(t => {
        var r;
        return (r = F(t)) === null || r === void 0 ? void 0 : r.size
    })
}

function tr(e, t) {
    return Promise.all(t.map(n => (function(i, a) {
        D[i].delete(a), D[i].size === 0 && delete D[i]
    }(e, n), n().then(i => i.default || i)))).then(n => er(e, ...n))
}
const U = {};

function Ze(e) {
    if (!$(e)) return e in U ? U[e] : Promise.resolve();
    const t = function(r) {
        return X(r).map(n => {
            const i = F(n);
            return [n, i ? [...i] : []]
        }).filter(([, n]) => n.length > 0)
    }(e);
    return U[e] = Promise.all(t.map(([r, n]) => tr(r, n))).then(() => {
        if ($(e)) return Ze(e);
        delete U[e]
    }), U[e]
}

function Er(e, t) {
    F(e) || function(n) {
        D[n] = new Set
    }(e);
    const r = F(e);
    F(e).has(t) || (xe(e) || M.update(n => (n[e] = {}, n)), r.add(t))
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function A(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
    }
    return r
}

function rr({
    locale: e,
    id: t
}) {
    console.warn(`[svelte-i18n] The message "${t}" was not found in "${X(e).join('", "')}".${$(T())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`)
}
const G = {
    fallbackLocale: null,
    loadingDelay: 200,
    formats: {
        number: {
            scientific: {
                notation: "scientific"
            },
            engineering: {
                notation: "engineering"
            },
            compactLong: {
                notation: "compact",
                compactDisplay: "long"
            },
            compactShort: {
                notation: "compact",
                compactDisplay: "short"
            }
        },
        date: {
            short: {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
            },
            medium: {
                month: "short",
                day: "numeric",
                year: "numeric"
            },
            long: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        },
        time: {
            short: {
                hour: "numeric",
                minute: "numeric"
            },
            medium: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            },
            long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            },
            full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            }
        }
    },
    warnOnMissingMessages: !0,
    handleMissingMessage: void 0,
    ignoreTag: !0
};

function O() {
    return G
}

function gr(e) {
    const {
        formats: t
    } = e, r = A(e, ["formats"]), n = e.initialLocale || e.fallbackLocale;
    return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = rr : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(G, r, {
        initialLocale: n
    }), t && ("number" in t && Object.assign(G.formats.number, t.number), "date" in t && Object.assign(G.formats.date, t.date), "time" in t && Object.assign(G.formats.time, t.time)), C.set(n)
}
const ne = ce(!1);
let fe;
const z = ce(null);

function Se(e) {
    return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse()
}

function X(e, t = O().fallbackLocale) {
    const r = Se(e);
    return t ? [...new Set([...r, ...Se(t)])] : r
}

function T() {
    return fe ? ? void 0
}
z.subscribe(e => {
    fe = e ? ? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e)
});
const C = Object.assign(Object.assign({}, z), {
        set: e => {
            if (e && function(t) {
                    if (t == null) return;
                    const r = X(t);
                    for (let n = 0; n < r.length; n++) {
                        const i = r[n];
                        if (xe(i)) return i
                    }
                }(e) && $(e)) {
                const {
                    loadingDelay: t
                } = O();
                let r;
                return typeof window < "u" && T() != null && t ? r = window.setTimeout(() => ne.set(!0), t) : ne.set(!0), Ze(e).then(() => {
                    z.set(e)
                }).finally(() => {
                    clearTimeout(r), ne.set(!1)
                })
            }
            return z.set(e)
        }
    }),
    vr = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0],
    q = e => {
        const t = Object.create(null);
        return r => {
            const n = JSON.stringify(r);
            return n in t ? t[n] : t[n] = e(r)
        }
    },
    V = (e, t) => {
        const {
            formats: r
        } = O();
        if (e in r && t in r[e]) return r[e][t];
        throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`)
    },
    nr = q(e => {
        var {
            locale: t,
            format: r
        } = e, n = A(e, ["locale", "format"]);
        if (t == null) throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
        return r && (n = V("number", r)), new Intl.NumberFormat(t, n)
    }),
    ir = q(e => {
        var {
            locale: t,
            format: r
        } = e, n = A(e, ["locale", "format"]);
        if (t == null) throw new Error('[svelte-i18n] A "locale" must be set to format dates');
        return r ? n = V("date", r) : Object.keys(n).length === 0 && (n = V("date", "short")), new Intl.DateTimeFormat(t, n)
    }),
    ar = q(e => {
        var {
            locale: t,
            format: r
        } = e, n = A(e, ["locale", "format"]);
        if (t == null) throw new Error('[svelte-i18n] A "locale" must be set to format time values');
        return r ? n = V("time", r) : Object.keys(n).length === 0 && (n = V("time", "short")), new Intl.DateTimeFormat(t, n)
    }),
    sr = (e = {}) => {
        var {
            locale: t = T()
        } = e, r = A(e, ["locale"]);
        return nr(Object.assign({
            locale: t
        }, r))
    },
    or = (e = {}) => {
        var {
            locale: t = T()
        } = e, r = A(e, ["locale"]);
        return ir(Object.assign({
            locale: t
        }, r))
    },
    hr = (e = {}) => {
        var {
            locale: t = T()
        } = e, r = A(e, ["locale"]);
        return ar(Object.assign({
            locale: t
        }, r))
    },
    ur = q((e, t = T()) => new qt(e, t, O().formats, {
        ignoreTag: O().ignoreTag
    })),
    lr = (e, t = {}) => {
        var r, n, i, a;
        let s = t;
        typeof e == "object" && (s = e, e = s.id);
        const {
            values: h,
            locale: l = T(),
            default: u
        } = s;
        if (l == null) throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
        let o = We(e, l);
        if (o) {
            if (typeof o != "string") return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof o}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), o
        } else o = (a = (i = (n = (r = O()).handleMissingMessage) === null || n === void 0 ? void 0 : n.call(r, {
            locale: l,
            id: e,
            defaultValue: u
        })) !== null && i !== void 0 ? i : u) !== null && a !== void 0 ? a : e;
        if (!h) return o;
        let b = o;
        try {
            b = ur(o, l).format(h)
        } catch (f) {
            console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, f.message)
        }
        return b
    },
    fr = (e, t) => hr(t).format(e),
    cr = (e, t) => or(t).format(e),
    mr = (e, t) => sr(t).format(e),
    pr = (e, t = T()) => We(e, t),
    yr = L([C, M], () => lr);
L([C], () => fr);
L([C], () => cr);
L([C], () => mr);
const dr = L([C, M], () => pr);
export {
    gr as $, C as D, vr as F, yr as Y, xr as f, ne as k, dr as o, Er as y
};