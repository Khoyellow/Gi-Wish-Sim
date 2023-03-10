const e = 1.4,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: {
                    name: "ballad-in-goblets-2",
                    character: "venti",
                    buttonBoxPosition: {
                        w: 180,
                        t: 30,
                        l: 50
                    },
                    textOffset: {
                        l: 57,
                        b: 6
                    }
                },
                rateup: ["razor", "sucrose", "noelle"]
            },
            weapons: {
                name: "epitome-invocation-9",
                fatepointsystem: !1,
                featured: [{
                    name: "elegy-for-the-end",
                    type: "bow",
                    buttonBoxPosition: {
                        w: 70,
                        t: 10,
                        l: 35
                    }
                }, {
                    name: "skyward-blade",
                    type: "sword",
                    buttonBoxPosition: {
                        w: 80,
                        t: 5,
                        l: 60
                    }
                }],
                rateup: ["favonius-warbow", "wine-and-song", "dragon_s-bane", "favonius-greatsword", "the-alley-flash"],
                textOffset: {
                    featured: {
                        l: 40,
                        t: 72
                    },
                    rateup: {
                        l: 74,
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
                    name: "farewell-of-snezhnaya-2",
                    character: "tartaglia",
                    buttonBoxPosition: {
                        w: 160,
                        t: 22
                    },
                    textOffset: {
                        l: 57.5,
                        b: 6
                    }
                },
                rateup: ["barbara", "fischl", "rosaria"]
            },
            weapons: {
                name: "epitome-invocation-10",
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
                    name: "lost-prayer-to-the-sacred-winds",
                    type: "catalyst",
                    buttonBoxPosition: {
                        w: 65,
                        t: 40,
                        l: 65
                    }
                }],
                rateup: ["alley-hunter", "favonius-codex", "sacrificial-greatsword", "favonius-lance", "favonius-sword"],
                textOffset: {
                    featured: {
                        l: 44,
                        t: 72
                    },
                    rateup: {
                        l: 75,
                        b: 16
                    }
                }
            }
        }
    }],
    a = {
        patch: 1.4,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};