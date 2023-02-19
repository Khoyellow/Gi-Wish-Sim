const n = "Akuoumaru",
    a = "V\u0169 T\xE0i",
    i = "Cung R\u1EC9 S\xE9t",
    t = "N\u1ECF K\xE9o",
    e = {
        name: "Albedo",
        title: "Kreideprinz"
    },
    o = {
        name: "Alhaitham",
        title: "L\u1EDDi Khuy\xEAn T\u1EADn T\xECnh"
    },
    h = {
        name: "Amber",
        title: "Qu\xE1n Qu\xE2n Bay L\u01B0\u1EE3n"
    },
    s = {
        name: "Barbara",
        title: "Th\u1EA7n T\u01B0\u1EE3ng T\u1ECFa S\xE1ng"
    },
    l = {
        name: "Beidou",
        title: "Long V\u01B0\u01A1ng Kh\xF4ng V\u01B0\u01A1ng Mi\u1EC7n"
    },
    g = {
        name: "Bennett",
        title: "Th\u1EED Th\xE1ch C\u1EE7a L\u1EEDa"
    },
    r = {
        name: "Candace",
        title: "Th\u1EC1 Nguy\u1EC7n \xC1nh Kim"
    },
    u = {
        name: "Chongyun",
        title: "B\xF2ng H\xECnh B\u0103ng Gi\xE1"
    },
    m = {
        name: "Collei",
        title: "M\u1EA7m Non T\xE1i Sinh"
    },
    c = {
        name: "Cyno",
        title: "Ph\xE1n Quy\u1EBFt \u1EA8n M\u1EADt"
    },
    T = {
        name: "Diluc",
        title: "M\u1EB7t T\u1ED1i C\u1EE7a B\xECnh Minh"
    },
    y = {
        name: "Diona",
        title: "\u0110\u1EB7c Ch\u1EBF Qu\xE1n R\u01B0\u1EE3u \u0110u\xF4i M\xE8o"
    },
    d = {
        name: "Dori",
        title: "Kho B\xE1u V\u01B0\u1EDDn M\u01A1"
    },
    C = {
        name: "Eula",
        title: "V\u0169 \u0110i\u1EC7u B\u1ECDt Bi\u1EC3n"
    },
    K = {
        name: "Faruzan",
        title: "Ng\u01B0\u1EDDi Gi\u1EA3i B\xED \u1EA8n"
    },
    f = {
        name: "Fischl",
        title: "C\xF4ng Ch\xFAa \u0110\u1ECBnh T\u1ED9i"
    },
    k = {
        name: "Ganyu",
        title: "Ng\u01B0\u1EDDi B\u1EA3o V\u1EC7 T\u1EADn T\xE2m"
    },
    N = {
        name: "Gorou",
        title: "Chi\u1EBFn Khuy\u1EC3n Nanh Nh\u1ECDn"
    },
    S = {
        name: "Jean",
        title: "K\u1EF5 S\u0129 B\u1ED3 C\xF4ng Anh"
    },
    b = {
        name: "Kaeya",
        title: "H\xE0n Phong Ki\u1EBFm S\u0129"
    },
    w = {
        name: "Keqing",
        title: "S\u1EA5m Ch\u1EDBp Tr\u01B0\u1EDBc C\u01A1n M\u01B0a"
    },
    p = {
        name: "Klee",
        title: "M\u1EB7t Tr\u1EDDi Ch\u1EA1y Tr\u1ED1n"
    },
    H = {
        name: "Layla",
        title: "Sao \u0110\xEAm K\u1EF3 \u1EA2o"
    },
    V = {
        name: "Lisa",
        title: "Ma N\u1EEF T\u01B0\u1EDDng Vi"
    },
    M = {
        name: "Mona",
        title: "Th\u1EE7y K\xEDnh Thi\xEAn Tinh"
    },
    B = {
        name: "Nahida",
        title: "K\u1EBFt Tinh B\u1EA1ch Th\u1EA3o"
    },
    L = {
        name: "Nilou",
        title: "V\u0169 \u0110i\u1EC7u \xC1nh Sen"
    },
    P = {
        name: "Ningguang",
        title: "Y\u1EC3m Nguy\u1EC7t Thi\xEAn Quy\u1EC1n"
    },
    v = {
        name: "Noelle",
        title: "\u0110\xF3a Hoa Ch\u01B0a Vinh Danh"
    },
    G = {
        name: "Qiqi",
        title: "\u0110\xEAm H\u1ED3n V\u1EC1 L\u1EA1nh Gi\xE1"
    },
    q = {
        name: "Razor",
        title: "Thi\u1EBFu Ni\xEAn S\xF3i"
    },
    z = {
        name: "Rosaria",
        title: "\xC2n \u0110i\u1EC1n M\u0169 Gai"
    },
    R = {
        name: "Sayu",
        title: "Ninja Mujina"
    },
    D = {
        name: "Shenhe",
        title: "Thi\xEAn Th\u1EC3 C\xF4 \u0110\u1ED9c"
    },
    x = {
        name: "Sucrose",
        title: "\u0110\u1ED9 Ng\u1ECDt V\xF4 H\u1EA1i"
    },
    Q = {
        name: "Tartaglia",
        title: "Childe"
    },
    X = {
        name: "Thoma",
        title: "Ng\u01B0\u1EDDi B\u1EA3o V\u1EC7 Ph\u01B0\u01A1ng Xa"
    },
    j = {
        name: "Tighnari",
        title: "D\u1EA1o B\u01B0\u1EDBc R\u1EEBng Xanh"
    },
    A = {
        name: "Venti",
        title: "Nh\xE0 Th\u01A1 C\xF3 M\xE0u C\u1EE7a Gi\xF3"
    },
    _ = {
        name: "K\u1EBB Lang Thang",
        title: "\u0110o\u1EA1n Tuy\u1EC7t Th\u1EBF Gian"
    },
    Y = {
        name: "Xiangling",
        title: "V\u1EA1n D\xE2n B\xE1ch V\u1ECB"
    },
    F = {
        name: "Xiao",
        title: "H\u1ED9 Ph\xE1p D\u1EA1 Xoa"
    },
    J = {
        name: "Xingqiu",
        title: "Tu\u1ED5i Tr\u1EBB T\xE0i Cao"
    },
    E = {
        name: "Xinyan",
        title: "Giai \u0110i\u1EC7u N\xF3ng B\u1ECFng"
    },
    I = {
        name: "Yanfei",
        title: "C\u01A1 Tr\xED Ng\xE2y Th\u01A1"
    },
    U = {
        name: "Yaoyao",
        title: "Nh\u1EE5y Hoa Ho\u1EA1t B\xE1t"
    },
    Z = {
        name: "Yelan",
        title: "Lan Sinh U C\u1ED1c"
    },
    O = {
        name: "Yoimiya",
        title: "V\u0169 \u0110i\u1EC7u B\xE3o L\u1EEDa"
    },
    W = {
        name: "Zhongli",
        title: "Nham V\u01B0\u01A1ng \u0110\u1EBF Qu\xE2n"
    },
    $ = {
        "a-thousand-floating-dreams": "C\xF5i M\u1ED9ng Ng\xE0n \u0110\xEAm",
        akuoumaru: n,
        "alley-hunter": "Th\u1EE3 S\u0103n H\u1EBBm T\u1ED1i",
        "amos-bow": "Cung Amos",
        "aqua-simulacra": "Nh\u01B0\u1EE3c Th\u1EE7y",
        "aquila-favonia": "Phong \u01AFng Ki\u1EBFm",
        "black-tassel": "H\u1EAFc Anh Th\u01B0\u01A1ng",
        "bloodtained-greatsword": "Ki\u1EBFm Huy\u1EBFt R\u1ED3ng",
        "calamity-queller": "H\u1EE7y Di\u1EC7t",
        "cool-steel": "L\xE3nh Nh\u1EABn",
        "debate-club": "G\u1EADy Thu Ph\u1EE5c",
        "dragon_s-bane": "Tai \u01AF\u01A1ng C\u1EE7a R\u1ED3ng",
        "elegy-for-the-end": "Ti\u1EBFng Th\u1EDF D\xE0i V\xF4 T\u1EADn",
        "emerald-orb": "Qu\u1EA3 C\u1EA7u Ng\u1ECDc",
        "engulfing-lightning": "\u0110o\u1EA1n Th\u1EA3o Tr\u01B0\u1EDDng \u0110ao",
        "everlasting-moonglow": "V\u1EA7ng Tr\u0103ng B\u1EA5t Di\u1EC7t",
        "eye-of-perception": "Chi\xEAu T\xE2m",
        "favonius-codex": "T\xE2y Phong M\u1EADt \u0110i\u1EC3n",
        "favonius-greatsword": "\u0110\u1EA1i Ki\u1EBFm T\xE2y Phong",
        "favonius-lance": "Th\u01B0\u01A1ng T\xE2y Phong",
        "favonius-sword": "T\xE2y Phong Ki\u1EBFm",
        "favonius-warbow": "Cung T\xE2y Phong",
        "ferrous-shadow": "Ki\u1EBFm Thi\u1EBFt \u1EA2nh",
        "freedom-sworn": "L\u1EDDi Th\u1EC1 T\u1EF1 Do C\u1ED5 X\u01B0a",
        "haran-geppaku-futsu": "Haran Geppaku Futsu",
        "harbinger-of-dawn": "Th\u1EA7n Ki\u1EBFm L\xEA Minh",
        "hunter_s-path": "Con \u0110\u01B0\u1EDDng Th\u1EE3 S\u0103n",
        "kagura_s-verity": "Ch\xE2n \xDD C\u1EE7a Kagura",
        "key-of-khaj-nisut": "Ch\xECa Kh\xF3a Khaj-Nisut",
        "lion_s-roar": "Ti\u1EBFng H\xE9t C\u1EE7a R\u1ED3ng",
        "light-of-foliar-incision": "\xC1nh L\xE1 Ph\xE1n Quy\u1EBFt",
        "lithic-blade": "Thi\xEAn Nham C\u1ED5 Ki\u1EBFm",
        "lithic-spear": "Th\u01B0\u01A1ng Thi\xEAn Nham",
        "lost-prayer-to-the-sacred-winds": "\u0110i\u1EC3n T\xEDch T\xE2y Phong",
        "magic-guide": "T\xF3m T\u1EAFt Ma Ph\xE1p",
        "makhaira-aquamarine": "S\u1EAFc N\u01B0\u1EDBc Makhaira",
        "memory-of-dust": "Kh\xF3a Tr\u1EA7n Th\u1EBF",
        "mistsplitter-reforged": "\xC1nh S\xE1ng \u0110\xEAm S\u01B0\u01A1ng M\xF9",
        "mitternachts-waltz": "\u0110i\u1EC7u Van Ban \u0110\xEAm",
        "mouun_s-moon": "\xC1nh Tr\u0103ng Mouun",
        "polar-star": "Ng\xF4i Sao C\u1EF1c \u0110\xF4ng",
        "primordial-jade-cutter": "B\xE0n Nham K\u1EBFt L\u1EE5c",
        "primordial-jade-winged-spear": "H\xF2a Ph\xE1c Di\xEAn",
        rainslasher: a,
        "raven-bow": "Cung L\xF4ng V\u1ECBt",
        "redhorn-stonethresher": "X\xEDch Gi\xE1c Ph\xE1 Th\u1EA1ch \u0110ao",
        rust: i,
        "sacrificial-bow": "Cung T\u1EBF L\u1EC5",
        "sacrificial-fragments": "M\u1EA3nh Ch\u01B0\u01A1ng T\u1EBF L\u1EC5",
        "sacrificial-greatsword": "\u0110\u1EA1i Ki\u1EBFm T\u1EBF L\u1EC5",
        "sacrificial-sword": "Ki\u1EBFm T\u1EBF L\u1EC5",
        "sharpshooter_s-oath": "L\u1EDDi Th\u1EC1 X\u1EA1 Th\u1EE7 Th\u1EA7n",
        "skyrider-sword": "Ki\u1EBFm Phi Thi\xEAn",
        "skyward-atlas": "Quy\u1EC3n Thi\xEAn Kh\xF4ng",
        "skyward-blade": "Thi\xEAn Kh\xF4ng Ki\u1EBFm",
        "skyward-harp": "C\xE1nh Thi\xEAn Kh\xF4ng",
        "skyward-pride": "Thi\xEAn Kh\xF4ng Ki\xEAu Ng\u1EA1o",
        "skyward-spine": "X\u01B0\u01A1ng S\u1ED1ng Thi\xEAn Kh\xF4ng",
        slingshot: t,
        "song-of-broken-pines": "Ti\u1EBFng Gi\xF3 Trong R\u1EEBng Th\xF4ng",
        "staff-of-homa": "Tr\u01B0\u1EE3ng H\u1ED9 Ma",
        "staff-of-the-scarlet-sands": "Quy\u1EC1n Tr\u01B0\u1EE3ng C\xE1t \u0110\u1ECF",
        "summit-shaper": "Ki\u1EBFm Ch\u01B0\u1EDBc Phong",
        "the-alley-flash": "Tia S\xE1ng N\u01A1i H\u1EBBm T\u1ED1i",
        "the-bell": "Ki\u1EBFm Chu\xF4ng",
        "the-flute": "Ki\u1EBFm S\xE1o",
        "the-stringless": "Tuy\u1EC7t Huy\u1EC1n",
        "the-unforged": "Ki\u1EBFm V\xF4 C\xF4ng",
        "the-widsith": "Ch\u01B0\u01A1ng Nh\u1EA1c Lang Thang",
        "thrilling-tales-of-dragon-slayers": "C\xE2u Chuy\u1EC7n Di\u1EC7t R\u1ED3ng",
        "thundering-pulse": "S\u1EA5m S\xE9t Rung \u0110\u1ED9ng",
        "tulaytullah_s-remembrance": "H\u1ED3i \u1EE8c Tulaytullah",
        "vortex-vanquisher": "Gi\xE1o N\u1ECBnh Th\u1EA7n",
        "wavebreaker_s-fin": "V\xE2y C\xE1 Ch\u1EBB S\xF3ng",
        "wine-and-song": "R\u01B0\u1EE3u V\xE0 Th\u01A1 N\u01A1i H\u1EBBm T\u1ED1i",
        "wandering-evenstar": "Sao \u0110\xEAm Rong Ru\u1ED5i",
        "wolf_s-gravestone": "\u0110\u01B0\u1EDDng C\xF9ng C\u1EE7a S\xF3i",
        "xiphos-moonlight": "\xC1nh Tr\u0103ng Xiphos",
        albedo: e,
        alhaitham: o,
        amber: h,
        "arataki-itto": {
            name: "Arataki Itto",
            title: "Qu\xE1i Ki\u1EC7t Hanamizaka"
        },
        barbara: s,
        beidou: l,
        bennett: g,
        candace: r,
        chongyun: u,
        collei: m,
        cyno: c,
        diluc: T,
        diona: y,
        dori: d,
        eula: C,
        faruzan: K,
        fischl: f,
        ganyu: k,
        gorou: N,
        "hu-tao": {
            name: "Hu Tao",
            title: "Tuy\u1EBFt T\u1EC5 Mai H\u01B0\u01A1ng"
        },
        jean: S,
        "kaedehara-kazuha": {
            name: "Kaedehara Kazuha",
            title: "L\xE1 \u0110\u1ECF \u0110u\u1ED5i S\xF3ng"
        },
        kaeya: b,
        "kamisato-ayaka": {
            name: "Kamisato Ayaka",
            title: "B\u1EA1ch H\u1EA1c S\u01B0\u01A1ng Hoa"
        },
        "kamisato-ayato": {
            name: "Kamisato Ayato",
            title: "Tr\u1EE5 C\u1ED9t V\u1EEFng V\xE0ng"
        },
        keqing: w,
        klee: p,
        "kujou-sara": {
            name: "Kujou Sara",
            title: "H\u1EAFc V\u0169 Ti\u1EC5n"
        },
        "kuki-shinobu": {
            name: "Kuki Shinobu",
            title: "G\u1EA1t B\u1ECF Phi\u1EC1n N\xE3o"
        },
        layla: H,
        lisa: V,
        mona: M,
        nahida: B,
        nilou: L,
        ningguang: P,
        noelle: v,
        qiqi: G,
        "raiden-shogun": {
            name: "Raiden Shogun",
            title: "Nh\u1EA5t T\xE2m T\u1ECBnh Th\u1ED5"
        },
        razor: q,
        rosaria: z,
        "sangonomiya-kokomi": {
            name: "Sangonomiya Kokomi",
            title: "Tr\xED Tu\u1EC7 Tr\xE2n Ch\xE2u"
        },
        sayu: R,
        shenhe: D,
        "shikanoin-heizou": {
            name: "Shikanoin Heizou",
            title: "Con Tim Giao H\xF2a"
        },
        sucrose: x,
        tartaglia: Q,
        thoma: X,
        tighnari: j,
        venti: A,
        wanderer: _,
        xiangling: Y,
        xiao: F,
        xingqiu: J,
        xinyan: E,
        "yae-miko": {
            name: "Yae Miko",
            title: "Ti\u1EBFu Ng\u1EA1o Th\u1EBF Gian"
        },
        yanfei: I,
        yaoyao: U,
        yelan: Z,
        yoimiya: O,
        "yun-jin": {
            name: "Yun Jin",
            title: "M\u1EF9 Nh\xE2n Tr\xEAn S\xE2n Kh\u1EA5u"
        },
        zhongli: W
    };
export {
    n as akuoumaru, e as albedo, o as alhaitham, h as amber, s as barbara, l as beidou, g as bennett, r as candace, u as chongyun, m as collei, c as cyno, $ as
    default, T as diluc, y as diona, d as dori, C as eula, K as faruzan, f as fischl, k as ganyu, N as gorou, S as jean, b as kaeya, w as keqing, p as klee, H as layla, V as lisa, M as mona, B as nahida, L as nilou, P as ningguang, v as noelle, G as qiqi, a as rainslasher, q as razor, z as rosaria, i as rust, R as sayu, D as shenhe, t as slingshot, x as sucrose, Q as tartaglia, X as thoma, j as tighnari, A as venti, _ as wanderer, Y as xiangling, F as xiao, J as xingqiu, E as xinyan, I as yanfei, U as yaoyao, Z as yelan, O as yoimiya, W as zhongli
};