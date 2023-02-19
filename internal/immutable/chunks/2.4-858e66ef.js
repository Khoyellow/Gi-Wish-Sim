const e = 2.4,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: [{
                    name: "the-transcendent-one-returns-1",
                    character: "shenhe",
                    buttonBoxPosition: {
                        w: 180,
                        t: 20,
                        l: 30
                    },
                    textOffset: {
                        l: 57,
                        b: 11
                    }
                }, {
                    name: "invitation-to-mundane-life-2",
                    character: "xiao",
                    buttonBoxPosition: {
                        w: 140,
                        t: 30,
                        l: 50
                    },
                    textOffset: {
                        l: 57,
                        b: 12.5
                    }
                }],
                rateup: ["yun-jin", "ningguang", "chongyun"]
            },
            weapons: {
                name: "epitome-invocation-23",
                fatepointsystem: !0,
                featured: [{
                    name: "calamity-queller",
                    type: "polearm",
                    buttonBoxPosition: {
                        w: 80,
                        t: 10,
                        l: 30
                    }
                }, {
                    name: "primordial-jade-winged-spear",
                    type: "polearm",
                    buttonBoxPosition: {
                        w: 80,
                        t: 10,
                        l: 60
                    }
                }],
                rateup: ["favonius-warbow", "the-widsith", "favonius-greatsword", "lithic-spear", "the-flute"],
                textOffset: {
                    featured: {
                        l: 41.5,
                        t: 68.5
                    },
                    rateup: {
                        l: 78
                    }
                }
            }
        }
    }, {
        phase: 2,
        banners: {
            standardVersion: 2,
            events: {
                item: [{
                    name: "gentry-of-hermitage-3",
                    character: "zhongli",
                    buttonBoxPosition: {
                        w: 110,
                        t: 25,
                        l: 66
                    },
                    textOffset: {
                        l: 57,
                        b: 12
                    }
                }, {
                    name: "adrift-in-the-harbor-2",
                    character: "ganyu",
                    buttonBoxPosition: {
                        w: 200,
                        t: 25
                    },
                    textOffset: {
                        l: 57,
                        b: 12
                    }
                }],
                rateup: ["xingqiu", "yanfei", "beidou"]
            },
            weapons: {
                name: "epitome-invocation-24",
                fatepointsystem: !0,
                featured: [{
                    name: "vortex-vanquisher",
                    type: "polearm",
                    buttonBoxPosition: {
                        w: 80,
                        t: 20,
                        l: 25
                    }
                }, {
                    name: "amos-bow",
                    type: "bow",
                    buttonBoxPosition: {
                        w: 70,
                        l: 68,
                        t: 0
                    }
                }],
                rateup: ["sacrificial-bow", "lithic-blade", "favonius-codex", "favonius-sword", "dragon_s-bane"],
                textOffset: {
                    featured: {
                        l: 41.5,
                        t: 68,
                        w: 27
                    },
                    rateup: {
                        l: 78
                    }
                }
            }
        }
    }],
    a = {
        patch: 2.4,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};