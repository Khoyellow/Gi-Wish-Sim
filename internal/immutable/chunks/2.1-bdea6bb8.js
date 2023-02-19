const e = 2.1,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: {
                    name: "reign-of-serenity-1",
                    character: "raiden-shogun",
                    buttonBoxPosition: {
                        w: 180,
                        t: 10
                    },
                    textOffset: {
                        l: 61,
                        b: 13
                    }
                },
                rateup: ["xiangling", "sucrose", "kujou-sara"]
            },
            weapons: {
                name: "epitome-invocation-17",
                fatepointsystem: !0,
                featured: [{
                    name: "engulfing-lightning",
                    type: "polearm",
                    buttonBoxPosition: {
                        w: 80,
                        t: 20,
                        l: 30
                    }
                }, {
                    name: "the-unforged",
                    type: "claymore",
                    buttonBoxPosition: {
                        w: 60,
                        t: 20,
                        l: 60
                    }
                }],
                rateup: ["the-bell", "sacrificial-bow", "favonius-lance", "the-widsith", "lion_s-roar"],
                textOffset: {
                    featured: {
                        l: 39.5,
                        w: 30
                    },
                    rateup: {
                        l: 76
                    }
                }
            }
        }
    }, {
        phase: 2,
        banners: {
            standardVersion: 2,
            events: {
                item: {
                    name: "drifting-luminescence-1",
                    character: "sangonomiya-kokomi",
                    buttonBoxPosition: {
                        w: 180,
                        t: 25,
                        l: 55
                    },
                    textOffset: {
                        w: 23,
                        l: 51
                    }
                },
                rateup: ["rosaria", "xingqiu", "beidou"]
            },
            weapons: {
                name: "epitome-invocation-18",
                fatepointsystem: !0,
                featured: [{
                    name: "primordial-jade-cutter",
                    type: "sword",
                    buttonBoxPosition: {
                        w: 100,
                        t: -14,
                        l: 30
                    }
                }, {
                    name: "everlasting-moonglow",
                    type: "catalyst",
                    buttonBoxPosition: {
                        w: 80,
                        t: 20,
                        l: 60
                    }
                }],
                rateup: ["dragon_s-bane", "the-stringless", "favonius-codex", "favonius-greatsword", "the-flute"],
                textOffset: {
                    featured: {
                        l: 42,
                        w: 30,
                        t: 66
                    },
                    rateup: {
                        l: 75.5
                    }
                }
            }
        }
    }],
    a = {
        patch: 2.1,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};