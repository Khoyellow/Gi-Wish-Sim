const e = 2.8,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: [{
                    name: "leaves-in-the-wind-2",
                    character: "kaedehara-kazuha",
                    buttonBoxPosition: {
                        w: 110,
                        t: 32
                    }
                }, {
                    name: "sparkling-steps-3",
                    character: "klee",
                    buttonBoxPosition: {
                        w: 110,
                        t: 32
                    }
                }],
                rateup: ["shikanoin-heizou", "thoma", "ningguang"]
            },
            weapons: {
                name: "epitome-invocation-31",
                fatepointsystem: !0,
                featured: [{
                    name: "freedom-sworn",
                    type: "sword",
                    buttonBoxPosition: {
                        w: 100,
                        t: -20,
                        l: 25
                    }
                }, {
                    name: "lost-prayer-to-the-sacred-winds",
                    type: "catalyst",
                    buttonBoxPosition: {
                        w: 60,
                        t: 40,
                        l: 65
                    }
                }],
                rateup: ["the-alley-flash", "mitternachts-waltz", "the-widsith", "favonius-lance", "rainslasher"]
            }
        }
    }, {
        phase: 2,
        banners: {
            standardVersion: 2,
            events: {
                item: {
                    name: "tapestry-of-golden-flames-2",
                    character: "yoimiya",
                    buttonBoxPosition: {
                        w: 140,
                        t: 20,
                        l: 40
                    },
                    textOffset: {
                        l: 50
                    }
                },
                rateup: ["bennett", "xinyan", "yun-jin"]
            },
            weapons: {
                name: "epitome-invocation-32",
                fatepointsystem: !0,
                featured: [{
                    name: "thundering-pulse",
                    type: "bow",
                    buttonBoxPosition: {
                        w: 70,
                        t: 10,
                        l: 35
                    }
                }, {
                    name: "summit-shaper",
                    type: "sword",
                    buttonBoxPosition: {
                        w: 90,
                        t: -10,
                        l: 60
                    }
                }],
                rateup: ["wine-and-song", "alley-hunter", "the-flute", "sacrificial-greatsword", "dragon_s-bane"],
                textOffset: {
                    featured: {
                        l: 35,
                        t: 68
                    },
                    rateup: {
                        l: 70,
                        b: 22
                    }
                }
            }
        }
    }],
    a = {
        patch: 2.8,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};