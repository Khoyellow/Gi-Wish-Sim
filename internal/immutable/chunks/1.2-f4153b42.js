const e = 1.2,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 1,
            events: {
                item: {
                    name: "secretum-secretorum-1",
                    character: "albedo",
                    buttonBoxPosition: {
                        w: 170,
                        t: 28,
                        l: 50
                    },
                    textOffset: {
                        l: 56.5,
                        b: 5.5
                    }
                },
                rateup: ["bennett", "sucrose", "fischl"]
            },
            weapons: {
                name: "epitome-invocation-5",
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
                    name: "skyward-atlas",
                    type: "catalyst",
                    buttonBoxPosition: {
                        w: 65,
                        t: 50,
                        l: 70
                    }
                }],
                rateup: ["the-stringless", "favonius-lance", "favonius-greatsword", "lion_s-roar", "the-widsith"],
                textOffset: {
                    featured: {
                        l: 46,
                        t: 76
                    },
                    rateup: {
                        l: 76,
                        b: 18.5
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
                    name: "adrift-in-the-harbor-1",
                    character: "ganyu",
                    buttonBoxPosition: {
                        w: 200,
                        t: 25
                    },
                    textOffset: {
                        l: 59.5,
                        b: 12
                    }
                },
                rateup: ["beidou", "xinyan", "xingqiu"]
            },
            weapons: {
                name: "epitome-invocation-6",
                fatepointsystem: !1,
                featured: [{
                    name: "amos-bow",
                    type: "bow",
                    buttonBoxPosition: {
                        w: 70,
                        t: 0,
                        l: 35
                    }
                }, {
                    name: "skyward-pride",
                    type: "claymore",
                    buttonBoxPosition: {
                        w: 80,
                        t: 10,
                        l: 60
                    }
                }],
                rateup: ["favonius-warbow", "the-bell", "eye-of-perception", "dragon_s-bane", "sacrificial-sword"],
                textOffset: {
                    featured: {
                        l: 46,
                        t: 77
                    },
                    rateup: {
                        l: 75,
                        b: 17
                    }
                }
            }
        }
    }],
    a = {
        patch: 1.2,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};