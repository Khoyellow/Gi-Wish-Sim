const e = 3.4,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 3,
            events: {
                item: [{
                    name: "caution-in-confidence-1",
                    character: "alhaitham",
                    buttonBoxPosition: {
                        w: 130,
                        t: 24,
                        l: 55
                    },
                    textOffset: {
                        l: 48.5
                    }
                }, {
                    name: "invitation-to-mundane-life-4",
                    character: "xiao",
                    buttonBoxPosition: {
                        w: 130,
                        t: 30,
                        l: 50
                    },
                    textOffset: {
                        l: 48.5
                    }
                }],
                rateup: ["yaoyao", "xinyan", "yun-jin"]
            },
            weapons: {
                name: "epitome-invocation-41",
                fatepointsystem: !0,
                featured: [{
                    name: "light-of-foliar-incision",
                    type: "sword",
                    buttonBoxPosition: {
                        t: -15,
                        w: 90,
                        l: 30
                    }
                }, {
                    name: "primordial-jade-winged-spear",
                    type: "polearm",
                    buttonBoxPosition: {
                        t: 10,
                        w: 70,
                        l: 60
                    }
                }],
                rateup: ["lithic-spear", "the-widsith", "the-flute", "rainslasher", "sacrificial-bow"],
                textOffset: {
                    featured: {
                        l: 38.5,
                        t: 62,
                        w: 30.5
                    },
                    rateup: {
                        l: 72.5,
                        b: 22.5
                    }
                }
            }
        }
    }, {
        phase: 2,
        banners: {
            standardVersion: 3,
            events: {
                item: [{
                    name: "moment-of-bloom-3",
                    character: "hu-tao",
                    buttonBoxPosition: {
                        w: 160,
                        t: 22
                    },
                    textOffset: {
                        l: 51
                    }
                }, {
                    name: "discerner-of-enigmas-2",
                    character: "yelan",
                    buttonBoxPosition: {
                        w: 95,
                        t: 32,
                        l: 50
                    },
                    textOffset: {
                        l: 51
                    }
                }],
                rateup: ["xingqiu", "ningguang", "beidou"]
            },
            weapons: {
                name: "epitome-invocation-42",
                fatepointsystem: !0,
                featured: [{
                    name: "staff-of-homa",
                    type: "polearm",
                    buttonBoxPosition: {
                        t: 15,
                        w: 90,
                        l: 60
                    }
                }, {
                    name: "aqua-simulacra",
                    type: "bow",
                    buttonBoxPosition: {
                        t: 5,
                        w: 80,
                        l: 35
                    }
                }],
                rateup: ["lithic-blade", "rust", "favonius-sword", "favonius-codex", "dragon_s-bane"],
                textOffset: {
                    featured: {
                        l: 38.5,
                        t: 67
                    },
                    rateup: {
                        l: 72.5,
                        b: 22.5
                    }
                }
            }
        }
    }],
    a = {
        patch: 3.4,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};