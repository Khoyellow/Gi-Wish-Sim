const e = 1.5,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: {
                    name: "gentry-of-hermitage-2",
                    character: "zhongli",
                    buttonBoxPosition: {
                        w: 120,
                        t: 25,
                        l: 70
                    }
                },
                rateup: ["yanfei", "noelle", "diona"]
            },
            weapons: {
                name: "epitome-invocation-11",
                fatepointsystem: !1,
                featured: [{
                    name: "summit-shaper",
                    type: "sword",
                    buttonBoxPosition: {
                        w: 90,
                        t: -10,
                        l: 30
                    }
                }, {
                    name: "memory-of-dust",
                    type: "catalyst",
                    buttonBoxPosition: {
                        w: 65,
                        t: 30,
                        l: 65
                    }
                }],
                rateup: ["sacrificial-bow", "eye-of-perception", "lithic-blade", "lithic-spear", "the-flute"],
                textOffset: {
                    featured: {
                        l: 43,
                        t: 71
                    },
                    rateup: {
                        l: 75,
                        b: 18
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
                    name: "born-of-ocean-swell-1",
                    character: "eula",
                    buttonBoxPosition: {
                        w: 140,
                        t: 32
                    }
                },
                rateup: ["beidou", "xinyan", "xingqiu"]
            },
            weapons: {
                name: "epitome-invocation-12",
                fatepointsystem: !1,
                featured: [{
                    name: "song-of-broken-pines",
                    type: "claymore",
                    buttonBoxPosition: {
                        w: 80,
                        t: 10,
                        l: 35
                    }
                }, {
                    name: "aquila-favonia",
                    type: "sword",
                    buttonBoxPosition: {
                        w: 80,
                        t: -10,
                        l: 65
                    }
                }],
                rateup: ["rust", "sacrificial-fragments", "rainslasher", "dragon_s-bane", "sacrificial-sword"],
                textOffset: {
                    featured: {
                        l: 39.5,
                        t: 71
                    },
                    rateup: {
                        l: 71,
                        b: 19
                    }
                }
            }
        }
    }],
    a = {
        patch: 1.5,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};