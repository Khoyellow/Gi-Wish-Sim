const e = 2.2,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: {
                    name: "farewell-of-snezhnaya-3",
                    character: "tartaglia",
                    buttonBoxPosition: {
                        w: 160,
                        t: 22
                    },
                    textOffset: {
                        l: 50.5
                    }
                },
                rateup: ["yanfei", "chongyun", "ningguang"]
            },
            weapons: {
                name: "epitome-invocation-19",
                fatepointsystem: !0,
                featured: [{
                    name: "polar-star",
                    type: "bow",
                    buttonBoxPosition: {
                        w: 70,
                        t: 2,
                        l: 35
                    }
                }, {
                    name: "memory-of-dust",
                    type: "catalyst",
                    buttonBoxPosition: {
                        t: 30,
                        w: 65,
                        l: 65
                    }
                }],
                rateup: ["favonius-lance", "rust", "eye-of-perception", "akuoumaru", "favonius-sword"],
                textOffset: {
                    featured: {
                        l: 42.2,
                        t: 67
                    },
                    rateup: {
                        l: 76.5,
                        b: 19
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
                    name: "moment-of-bloom-2",
                    character: "hu-tao",
                    buttonBoxPosition: {
                        w: 160,
                        t: 22
                    },
                    textOffset: {
                        l: 56
                    }
                },
                rateup: ["thoma", "diona", "sayu"]
            },
            weapons: {
                name: "epitome-invocation-20",
                fatepointsystem: !0,
                featured: [{
                    name: "elegy-for-the-end",
                    type: "bow",
                    buttonBoxPosition: {
                        t: 10,
                        w: 70,
                        l: 35
                    }
                }, {
                    name: "staff-of-homa",
                    type: "polearm",
                    buttonBoxPosition: {
                        t: 15,
                        w: 90,
                        l: 60
                    }
                }],
                rateup: ["wavebreaker_s-fin", "mouun_s-moon", "the-widsith", "rainslasher", "sacrificial-sword"],
                textOffset: {
                    featured: {
                        l: 38.5,
                        t: 68
                    },
                    rateup: {
                        l: 74,
                        b: 18
                    }
                }
            }
        }
    }],
    a = {
        patch: 2.2,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};