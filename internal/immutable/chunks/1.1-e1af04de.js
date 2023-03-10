const e = 1.1,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 1,
            events: {
                item: {
                    name: "farewell-of-snezhnaya-1",
                    character: "tartaglia",
                    buttonBoxPosition: {
                        w: 160,
                        t: 22
                    },
                    textOffset: {
                        l: 44.5,
                        b: 11
                    }
                },
                rateup: ["beidou", "ninggnang", "diona"]
            },
            weapons: {
                name: "epitome-invocation-3",
                fatepointsystem: !1,
                featured: [{
                    name: "skyward-harp",
                    type: "bow",
                    buttonBoxPosition: {
                        w: 80,
                        t: 10,
                        l: 35
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
                rateup: ["rust", "favonius-lance", "rainslasher", "the-flute", "eye-of-perception"],
                textOffset: {
                    featured: {
                        l: 41,
                        t: 76
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
            standardVersion: 1,
            events: {
                item: {
                    name: "gentry-of-hermitage-1",
                    character: "zhongli",
                    buttonBoxPosition: {
                        w: 120,
                        t: 25,
                        l: 70
                    },
                    textOffset: {
                        l: 52
                    }
                },
                rateup: ["razor", "xinyan", "chongyun"]
            },
            weapons: {
                name: "epitome-invocation-4",
                fatepointsystem: !1,
                featured: [{
                    name: "vortex-vanquisher",
                    type: "polearm",
                    buttonBoxPosition: {
                        w: 90,
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
                rateup: ["favonius-warbow", "the-bell", "favonius-codex", "dragon_s-bane", "lion_s-roar"],
                textOffset: {
                    featured: {
                        l: 41.5,
                        t: 75
                    },
                    rateup: {
                        l: 77,
                        b: 17
                    }
                }
            }
        }
    }],
    a = {
        patch: 1.1,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};