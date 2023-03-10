const e = 2.3,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: [{
                    name: "secretum-secretorum-2",
                    character: "albedo",
                    buttonBoxPosition: {
                        w: 170,
                        t: 28,
                        l: 50
                    },
                    textOffset: {
                        l: 55.5,
                        b: 9
                    }
                }, {
                    name: "born-of-ocean-swell-2",
                    character: "eula",
                    buttonBoxPosition: {
                        w: 140,
                        t: 32
                    },
                    textOffset: {
                        l: 57,
                        b: 11
                    }
                }],
                rateup: ["bennett", "noelle", "rosaria"]
            },
            weapons: {
                name: "epitome-invocation-21",
                fatepointsystem: !0,
                featured: [{
                    name: "freedom-sworn",
                    type: "sword",
                    buttonBoxPosition: {
                        t: -10,
                        w: 100,
                        l: 30
                    }
                }, {
                    name: "song-of-broken-pines",
                    type: "claymore",
                    buttonBoxPosition: {
                        t: 10,
                        w: 80,
                        l: 60
                    }
                }],
                rateup: ["lion_s-roar", "alley-hunter", "wine-and-song", "dragon_s-bane", "sacrificial-greatsword"],
                textOffset: {
                    featured: {
                        t: 68,
                        w: 30
                    },
                    rateup: {
                        l: 71,
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
                    name: "oni_s-royale-1",
                    character: "arataki-itto",
                    buttonBoxPosition: {
                        w: 190,
                        t: 30,
                        l: 50
                    },
                    textOffset: {
                        l: 50,
                        b: 9.5
                    }
                },
                rateup: ["barbara", "xiangling", "gorou"]
            },
            weapons: {
                name: "epitome-invocation-22",
                fatepointsystem: !0,
                featured: [{
                    name: "skyward-harp",
                    type: "bow",
                    buttonBoxPosition: {
                        t: 10,
                        w: 80,
                        l: 35
                    }
                }, {
                    name: "redhorn-stonethresher",
                    type: "claymore",
                    buttonBoxPosition: {
                        t: 10,
                        w: 80,
                        l: 60
                    }
                }],
                rateup: ["the-alley-flash", "mitternachts-waltz", "sacrificial-fragments", "favonius-lance", "the-bell"],
                textOffset: {
                    featured: {
                        t: 67,
                        w: 30
                    },
                    rateup: {
                        b: 19,
                        l: 71
                    }
                }
            }
        }
    }],
    a = {
        patch: 2.3,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};