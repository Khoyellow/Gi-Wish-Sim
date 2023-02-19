import {
    X as h
} from "./index-a80b06f5.js";

function d(a) {
    const e = a - 1;
    return e * e * e + 1
}

function T(a, {
    delay: e = 0,
    duration: i = 400,
    easing: r = h
} = {}) {
    const o = +getComputedStyle(a).opacity;
    return {
        delay: e,
        duration: i,
        easing: r,
        css: t => `opacity: ${t*o}`
    }
}

function P(a, {
    delay: e = 0,
    duration: i = 400,
    easing: r = d,
    x: o = 0,
    y: t = 0,
    opacity: m = 0
} = {}) {
    const n = getComputedStyle(a),
        s = +n.opacity,
        l = n.transform === "none" ? "" : n.transform,
        p = s * (1 - m);
    return {
        delay: e,
        duration: i,
        easing: r,
        css: (y, w) => `
			transform: ${l} translate(${(1-y)*o}px, ${(1-y)*t}px);
			opacity: ${s-p*w}`
    }
}
const c = [{
        name: "light-of-foliar-incision",
        rarity: 5,
        limited: !0,
        weaponType: "sword"
    }, {
        name: "tulaytullah_s-remembrance",
        rarity: 5,
        limited: !0,
        weaponType: "catalyst"
    }, {
        name: "a-thousand-floating-dreams",
        rarity: 5,
        weaponType: "catalyst",
        limited: !0
    }, {
        name: "key-of-khaj-nisut",
        rarity: 5,
        weaponType: "sword",
        limited: !0
    }, {
        name: "xiphos-moonlight",
        rarity: 4,
        weaponType: "sword",
        limited: !0
    }, {
        name: "wandering-evenstar",
        rarity: 4,
        weaponType: "catalyst",
        limited: !0
    }, {
        name: "staff-of-the-scarlet-sands",
        rarity: 5,
        weaponType: "polearm",
        limited: !0
    }, {
        name: "makhaira-aquamarine",
        rarity: 4,
        weaponType: "claymore",
        limited: !0
    }, {
        name: "hunter_s-path",
        rarity: 5,
        weaponType: "bow",
        limited: !0
    }, {
        name: "aqua-simulacra",
        rarity: 5,
        weaponType: "bow",
        limited: !0
    }, {
        name: "redhorn-stonethresher",
        rarity: 5,
        weaponType: "claymore",
        limited: !0
    }, {
        name: "haran-geppaku-futsu",
        rarity: 5,
        weaponType: "sword",
        limited: !0
    }, {
        name: "kagura_s-verity",
        rarity: 5,
        weaponType: "catalyst",
        limited: !0
    }, {
        name: "calamity-queller",
        rarity: 5,
        weaponType: "polearm",
        limited: !0
    }, {
        name: "mouun_s-moon",
        rarity: 4,
        weaponType: "bow",
        limited: !0
    }, {
        name: "wavebreaker_s-fin",
        rarity: 4,
        weaponType: "polearm",
        limited: !0
    }, {
        name: "polar-star",
        rarity: 5,
        weaponType: "bow",
        limited: !0
    }, {
        name: "akuoumaru",
        rarity: 4,
        weaponType: "claymore",
        limited: !0
    }, {
        name: "everlasting-moonglow",
        rarity: 5,
        weaponType: "catalyst",
        limited: !0
    }, {
        name: "engulfing-lightning",
        rarity: 5,
        weaponType: "polearm",
        limited: !0
    }, {
        name: "thundering-pulse",
        rarity: 5,
        limited: !0,
        weaponType: "bow",
        style: ""
    }, {
        name: "mistsplitter-reforged",
        rarity: 5,
        weaponType: "sword",
        limited: !0
    }, {
        name: "freedom-sworn",
        rarity: 5,
        weaponType: "sword",
        limited: !0
    }, {
        name: "mitternachts-waltz",
        rarity: 4,
        weaponType: "bow",
        limited: !0
    }, {
        name: "song-of-broken-pines",
        rarity: 5,
        weaponType: "claymore",
        limited: !0
    }, {
        name: "alley-hunter",
        rarity: 4,
        weaponType: "bow",
        limited: !0
    }, {
        name: "elegy-for-the-end",
        rarity: 5,
        weaponType: "bow",
        limited: !0
    }, {
        name: "the-alley-flash",
        rarity: 4,
        weaponType: "sword",
        limited: !0
    }, {
        name: "wine-and-song",
        rarity: 4,
        weaponType: "catalyst",
        limited: !0
    }, {
        name: "staff-of-homa",
        rarity: 5,
        weaponType: "polearm",
        limited: !0
    }, {
        name: "lithic-blade",
        rarity: 4,
        weaponType: "claymore",
        limited: !0
    }, {
        name: "lithic-spear",
        rarity: 4,
        weaponType: "polearm",
        limited: !0
    }, {
        name: "primordial-jade-cutter",
        rarity: 5,
        weaponType: "sword",
        limited: !0
    }, {
        name: "primordial-jade-winged-spear",
        rarity: 5,
        weaponType: "polearm"
    }, {
        name: "summit-shaper",
        rarity: 5,
        weaponType: "sword",
        limited: !0
    }, {
        name: "vortex-vanquisher",
        rarity: 5,
        weaponType: "polearm",
        limited: !0
    }, {
        name: "the-unforged",
        rarity: 5,
        weaponType: "claymore",
        limited: !0
    }, {
        name: "memory-of-dust",
        rarity: 5,
        weaponType: "catalyst",
        limited: !0
    }, {
        name: "eye-of-perception",
        rarity: 4,
        weaponType: "catalyst"
    }, {
        name: "rainslasher",
        rarity: 4,
        weaponType: "claymore"
    }, {
        name: "rust",
        rarity: 4,
        weaponType: "bow"
    }, {
        name: "lost-prayer-to-the-sacred-winds",
        rarity: 5,
        weaponType: "catalyst"
    }, {
        name: "wolf_s-gravestone",
        rarity: 5,
        weaponType: "claymore"
    }, {
        name: "amos-bow",
        rarity: 5,
        weaponType: "bow"
    }, {
        name: "aquila-favonia",
        rarity: 5,
        weaponType: "sword"
    }, {
        name: "skyward-pride",
        rarity: 5,
        weaponType: "claymore"
    }, {
        name: "skyward-atlas",
        rarity: 5,
        weaponType: "catalyst",
        style: "left: 80%"
    }, {
        name: "skyward-harp",
        rarity: 5,
        weaponType: "bow"
    }, {
        name: "skyward-spine",
        rarity: 5,
        weaponType: "polearm"
    }, {
        name: "skyward-blade",
        rarity: 5,
        weaponType: "sword"
    }, {
        name: "the-flute",
        rarity: 4,
        weaponType: "sword"
    }, {
        name: "the-widsith",
        rarity: 4,
        weaponType: "catalyst"
    }, {
        name: "dragon_s-bane",
        rarity: 4,
        weaponType: "polearm"
    }, {
        name: "lion_s-roar",
        rarity: 4,
        weaponType: "sword"
    }, {
        name: "sacrificial-bow",
        rarity: 4,
        weaponType: "bow"
    }, {
        name: "sacrificial-fragments",
        rarity: 4,
        weaponType: "catalyst"
    }, {
        name: "sacrificial-greatsword",
        rarity: 4,
        weaponType: "claymore"
    }, {
        name: "sacrificial-sword",
        rarity: 4,
        weaponType: "sword"
    }, {
        name: "favonius-greatsword",
        rarity: 4,
        weaponType: "claymore"
    }, {
        name: "favonius-sword",
        rarity: 4,
        weaponType: "sword"
    }, {
        name: "favonius-warbow",
        rarity: 4,
        weaponType: "bow"
    }, {
        name: "favonius-codex",
        rarity: 4,
        weaponType: "catalyst"
    }, {
        name: "favonius-lance",
        rarity: 4,
        weaponType: "polearm"
    }, {
        name: "the-bell",
        rarity: 4,
        weaponType: "claymore"
    }, {
        name: "the-stringless",
        rarity: 4,
        weaponType: "bow"
    }, {
        name: "black-tassel",
        rarity: 3,
        weaponType: "polearm"
    }, {
        name: "bloodtained-greatsword",
        rarity: 3,
        weaponType: "claymore"
    }, {
        name: "cool-steel",
        rarity: 3,
        weaponType: "sword"
    }, {
        name: "debate-club",
        rarity: 3,
        weaponType: "claymore"
    }, {
        name: "emerald-orb",
        rarity: 3,
        weaponType: "catalyst"
    }, {
        name: "ferrous-shadow",
        rarity: 3,
        weaponType: "claymore"
    }, {
        name: "harbinger-of-dawn",
        rarity: 3,
        weaponType: "sword"
    }, {
        name: "magic-guide",
        rarity: 3,
        weaponType: "catalyst"
    }, {
        name: "raven-bow",
        rarity: 3,
        weaponType: "bow"
    }, {
        name: "sharpshooter_s-oath",
        rarity: 3,
        weaponType: "bow"
    }, {
        name: "skyrider-sword",
        rarity: 3,
        weaponType: "sword"
    }, {
        name: "slingshot",
        rarity: 3,
        weaponType: "bow"
    }, {
        name: "thrilling-tales-of-dragon-slayers",
        rarity: 3,
        weaponType: "catalyst"
    }],
    B = {
        data: c
    },
    u = ["amber", "kaeya", "lisa"],
    v = [{
        name: "alhaitham",
        vision: "dendro",
        rarity: 5,
        wishBoxPosition: {
            t: 90,
            l: 80,
            h: 200
        }
    }, {
        name: "yaoyao",
        vision: "dendro",
        rarity: 4,
        release: "3.4-1",
        wishBoxPosition: {
            t: 63,
            l: 35,
            h: 140
        }
    }, {
        name: "wanderer",
        vision: "anemo",
        rarity: 5,
        wishBoxPosition: {
            t: 73,
            l: 60,
            h: 185
        }
    }, {
        name: "faruzan",
        vision: "anemo",
        rarity: 4,
        release: "3.3-1",
        wishBoxPosition: {
            t: 73,
            l: 78,
            h: 185
        }
    }, {
        name: "layla",
        vision: "cryo",
        rarity: 4,
        release: "3.2-2",
        wishBoxPosition: {
            h: 160,
            t: 65
        }
    }, {
        name: "nahida",
        vision: "dendro",
        rarity: 5,
        wishBoxPosition: {
            l: 70,
            t: 45
        }
    }, {
        name: "nilou",
        vision: "hydro",
        rarity: 5,
        wishBoxPosition: {
            l: 70,
            h: 200,
            t: 66
        }
    }, {
        name: "cyno",
        vision: "electro",
        rarity: 5,
        wishBoxPosition: {
            t: 83,
            l: 40,
            h: 195
        }
    }, {
        name: "candace",
        vision: "hydro",
        rarity: 4,
        release: "3.1-1",
        wishBoxPosition: {
            l: 35,
            h: 170,
            t: 60
        }
    }, {
        name: "dori",
        vision: "electro",
        rarity: 4,
        release: "3.0-2",
        wishBoxPosition: {
            l: -15,
            h: 180,
            t: 65
        }
    }, {
        name: "tighnari",
        vision: "dendro",
        rarity: 5,
        wishBoxPosition: {
            l: 50,
            h: 195,
            t: 85
        }
    }, {
        name: "collei",
        vision: "dendro",
        rarity: 4,
        release: "3.0-1",
        wishBoxPosition: {
            l: 140,
            h: 170,
            t: 65
        }
    }, {
        name: "shikanoin-heizou",
        vision: "anemo",
        rarity: 4,
        release: "2.8-1",
        wishBoxPosition: {
            t: 65,
            l: 25
        }
    }, {
        name: "kuki-shinobu",
        vision: "electro",
        rarity: 4,
        release: "2.7-2",
        wishBoxPosition: {
            h: 160,
            t: 66,
            l: 15
        }
    }, {
        name: "yelan",
        vision: "hydro",
        rarity: 5,
        wishBoxPosition: {
            h: 220,
            t: 82,
            l: 80
        }
    }, {
        name: "kamisato-ayato",
        vision: "hydro",
        rarity: 5,
        wishBoxPosition: {
            h: 210,
            l: 100,
            t: 90
        }
    }, {
        name: "yae-miko",
        vision: "electro",
        rarity: 5,
        wishBoxPosition: {
            h: 210,
            t: 87,
            l: 10
        }
    }, {
        name: "shenhe",
        vision: "cryo",
        rarity: 5,
        wishBoxPosition: {
            h: 190,
            l: -15,
            t: 78
        }
    }, {
        name: "yun-jin",
        vision: "geo",
        rarity: 4,
        release: "2.4-1",
        wishBoxPosition: {
            h: 165,
            l: 70,
            t: 70
        }
    }, {
        name: "arataki-itto",
        vision: "geo",
        rarity: 5,
        wishBoxPosition: {
            t: 85,
            l: 75,
            h: 195
        }
    }, {
        name: "gorou",
        vision: "geo",
        rarity: 4,
        release: "2.3-2",
        wishBoxPosition: {
            l: 100,
            h: 165,
            t: 65
        }
    }, {
        name: "thoma",
        vision: "pyro",
        rarity: 4,
        release: "2.2-2",
        wishBoxPosition: {
            l: 80,
            h: 160,
            t: 70
        }
    }, {
        name: "sangonomiya-kokomi",
        vision: "hydro",
        rarity: 5,
        wishBoxPosition: {
            h: 190,
            l: 65
        }
    }, {
        name: "raiden-shogun",
        vision: "electro",
        rarity: 5,
        wishBoxPosition: {
            t: 80,
            l: 95,
            h: 200
        }
    }, {
        name: "kujou-sara",
        vision: "electro",
        rarity: 4,
        release: "2.1-1",
        wishBoxPosition: {
            h: 210,
            t: 85
        }
    }, {
        name: "yoimiya",
        vision: "pyro",
        rarity: 5,
        wishBoxPosition: {
            t: 66,
            l: 40
        }
    }, {
        name: "sayu",
        vision: "anemo",
        rarity: 4,
        release: "2.0-2",
        wishBoxPosition: {
            t: 63,
            h: 185,
            l: -50
        }
    }, {
        name: "kamisato-ayaka",
        vision: "cryo",
        rarity: 5,
        wishBoxPosition: {
            l: 40
        }
    }, {
        name: "kaedehara-kazuha",
        vision: "anemo",
        rarity: 5,
        wishBoxPosition: {
            h: 230,
            t: 90,
            l: 70
        }
    }, {
        name: "eula",
        vision: "cryo",
        rarity: 5,
        wishBoxPosition: {
            t: 83,
            h: 200
        }
    }, {
        name: "yanfei",
        vision: "pyro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            l: 160,
            t: 70
        }
    }, {
        name: "rosaria",
        vision: "cryo",
        rarity: 4,
        release: "1.4-2",
        wishBoxPosition: {
            h: 175,
            t: 80,
            l: 60
        }
    }, {
        name: "hu-tao",
        vision: "pyro",
        rarity: 5,
        wishBoxPosition: {
            l: -110,
            h: 200,
            t: 70
        }
    }, {
        name: "xiao",
        vision: "anemo",
        rarity: 5,
        wishBoxPosition: {
            t: 50
        }
    }, {
        name: "ganyu",
        vision: "cryo",
        rarity: 5,
        wishBoxPosition: {
            t: 79,
            h: 175,
            l: 55
        }
    }, {
        name: "albedo",
        vision: "geo",
        rarity: 5,
        wishBoxPosition: {
            l: 22,
            t: 72,
            h: 190
        }
    }, {
        name: "zhongli",
        vision: "geo",
        rarity: 5,
        wishBoxPosition: {
            t: 80,
            l: 80,
            h: 200
        }
    }, {
        name: "xinyan",
        vision: "pyro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            h: 200,
            t: 72
        }
    }, {
        name: "tartaglia",
        vision: "hydro",
        rarity: 5,
        wishBoxPosition: {
            l: 120,
            h: 225,
            t: 75
        }
    }, {
        name: "diona",
        vision: "cryo",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            t: 50,
            l: 80,
            h: 190
        }
    }, {
        name: "klee",
        vision: "pyro",
        rarity: 5,
        wishBoxPosition: {
            t: 43,
            h: 160,
            l: 45
        }
    }, {
        name: "venti",
        vision: "anemo",
        rarity: 5,
        wishBoxPosition: {
            t: 70,
            l: 90
        }
    }, {
        name: "keqing",
        vision: "electro",
        rarity: 5,
        wishBoxPosition: {
            t: 70,
            l: 25
        }
    }, {
        name: "mona",
        vision: "hydro",
        rarity: 5,
        wishBoxPosition: {
            l: 55,
            h: 190
        }
    }, {
        name: "qiqi",
        vision: "cryo",
        rarity: 5,
        wishBoxPosition: {
            t: 55
        }
    }, {
        name: "diluc",
        vision: "pyro",
        rarity: 5
    }, {
        name: "jean",
        vision: "anemo",
        rarity: 5,
        wishBoxPosition: {
            t: 80,
            h: 190,
            l: 85
        }
    }, {
        name: "sucrose",
        vision: "anemo",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            h: 175,
            t: 72
        }
    }, {
        name: "chongyun",
        vision: "cryo",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            t: 70,
            l: 40,
            h: 190
        }
    }, {
        name: "noelle",
        vision: "geo",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            t: 70
        }
    }, {
        name: "bennett",
        vision: "pyro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            l: -22,
            t: 55,
            h: 190
        }
    }, {
        name: "fischl",
        vision: "electro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            t: 65,
            l: 10,
            h: 170
        }
    }, {
        name: "ningguang",
        vision: "geo",
        rarity: 4,
        release: "1.0-0"
    }, {
        name: "xingqiu",
        vision: "hydro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            h: 200,
            t: 80,
            l: 40
        }
    }, {
        name: "beidou",
        vision: "electro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            l: 35
        }
    }, {
        name: "xiangling",
        vision: "pyro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            l: 120,
            t: 66,
            h: 175
        }
    }, {
        name: "razor",
        vision: "electro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            l: -5,
            t: 65
        }
    }, {
        name: "barbara",
        vision: "hydro",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            t: 75,
            h: 155
        }
    }, {
        name: "lisa",
        vision: "electro",
        rarity: 4,
        release: "1.0-0"
    }, {
        name: "kaeya",
        vision: "cryo",
        rarity: 4,
        release: "1.0-0",
        wishBoxPosition: {
            l: 20,
            t: 82,
            h: 190
        }
    }, {
        name: "amber",
        rarity: 4,
        vision: "pyro",
        release: "1.0-0",
        wishBoxPosition: {
            t: 55,
            h: 170,
            l: 120
        }
    }],
    g = {
        onlyStandard: u,
        data: v
    },
    f = [{
        name: "5-star-outrider",
        characterName: "amber",
        rarity: 4
    }, {
        name: "favonian-fevotion",
        characterName: "jean",
        rarity: 4
    }, {
        name: "executor_s-thorns",
        characterName: "rosaria",
        rarity: 4
    }, {
        name: "flowing-fate",
        characterName: "mona",
        rarity: 4,
        wishBoxPosition: {
            l: 35,
            h: 190
        }
    }, {
        version: 1.6,
        name: "sea-breeze-dandelion",
        characterName: "jean",
        rarity: 4,
        price: 1680,
        promoPrice: 1350,
        wishBoxPosition: {
            t: 90,
            h: 200,
            l: 20
        }
    }, {
        version: 1.6,
        name: "summertime-sparkle",
        characterName: "barbara",
        rarity: 4,
        price: 1680,
        wishBoxPosition: {
            t: 72,
            l: 140,
            h: 185
        }
    }, {
        version: 2.4,
        name: "opulent-splendor",
        characterName: "keqing",
        rarity: 4,
        price: 1680,
        promoPrice: 1350,
        wishBoxPosition: {
            t: 83
        }
    }, {
        version: 2.4,
        name: "orchid_s-evening-gown",
        characterName: "ningguang",
        rarity: 4,
        price: 1680,
        wishBoxPosition: {
            h: 200,
            t: 90,
            l: 23
        }
    }, {
        version: 2.8,
        name: "ein-immernachtstraum",
        characterName: "fischl",
        rarity: 4,
        price: 1680,
        wishBoxPosition: {
            l: 15
        }
    }, {
        version: 2.8,
        name: "red-dead-of-night",
        characterName: "diluc",
        rarity: 5,
        price: 2480,
        promoPrice: 1980,
        wishBoxPosition: {
            l: -54,
            h: 200,
            t: 85
        },
        cardBoxPosition: {
            l: -45
        }
    }, {
        version: 3.4,
        name: "a-sobriquet-under-shade",
        characterName: "lisa",
        rarity: 4,
        price: 1680,
        wishBoxPosition: {
            l: -45,
            t: 70
        }
    }, {
        version: 3.4,
        name: "springbloom-missive",
        characterName: "kamisato-ayaka",
        rarity: 4,
        price: 1680,
        promoPrice: 1350,
        wishBoxPosition: {
            l: 60,
            h: 190,
            t: 70
        },
        cardBoxPosition: {
            l: -10,
            w: 90,
            t: -35
        }
    }];
export {
    c as a, P as b, g as c, v as d, d as e, T as f, f as o, B as w
};