const e = 2.6,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: [{
                    name: "azure-excursion-1",
                    character: "kamisato-ayato",
                    buttonBoxPosition: {
                        w: 140,
                        t: 35,
                        l: 50
                    },
                    textOffset: {
                        l: 48,
                        b: 11
                    }
                }, {
                    name: "ballad-in-goblets-3",
                    character: "venti",
                    buttonBoxPosition: {
                        w: 180,
                        t: 30,
                        l: 50
                    },
                    textOffset: {
                        l: 53.5,
                        b: 11
                    }
                }],
                rateup: ["sucrose", "xiangling", "yun-jin"]
            },
            weapons: {
                name: "epitome-invocation-27",
                fatepointsystem: !0,
                featured: [{
                    name: "elegy-for-the-end",
                    type: "bow",
                    buttonBoxPosition: {
                        t: 5,
                        w: 80,
                        l: 35
                    }
                }, {
                    name: "haran-geppaku-futsu",
                    type: "sword",
                    buttonBoxPosition: {
                        t: -35,
                        w: 120,
                        l: 55
                    }
                }],
                rateup: ["the-flute", "rust", "dragon_s-bane", "the-widsith", "sacrificial-greatsword"],
                textOffset: {
                    featured: {
                        w: 33,
                        l: 39.5,
                        t: 67
                    },
                    rateup: {
                        l: 79
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
                    name: "the-heron_s-court-2",
                    character: "kamisato-ayaka",
                    buttonBoxPosition: {
                        w: 82,
                        t: 32
                    },
                    textOffset: {
                        l: 44,
                        b: 10,
                        w: 32
                    }
                },
                rateup: ["razor", "rosaria", "sayu"]
            },
            weapons: {
                name: "epitome-invocation-28",
                fatepointsystem: !0,
                featured: [{
                    name: "mistsplitter-reforged",
                    type: "sword",
                    buttonBoxPosition: {
                        w: 80,
                        t: -20,
                        l: 30
                    }
                }, {
                    name: "the-unforged",
                    type: "claymore",
                    buttonBoxPosition: {
                        w: 60,
                        t: 10,
                        l: 60
                    }
                }],
                rateup: ["favonius-codex", "favonius-lance", "favonius-warbow", "favonius-sword", "the-bell"],
                textOffset: {
                    featured: {
                        w: 32,
                        l: 39,
                        t: 67
                    },
                    rateup: {
                        l: 76.5
                    }
                }
            }
        }
    }],
    a = {
        patch: 2.6,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};