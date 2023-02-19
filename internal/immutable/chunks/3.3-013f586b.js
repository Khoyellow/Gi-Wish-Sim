const e = 3.3,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 3,
            events: {
                item: [{
                    name: "from-ashes-reborn-1",
                    character: "wanderer",
                    buttonBoxPosition: {
                        w: 120,
                        t: 27
                    },
                    textOffset: {
                        l: 58.5,
                        b: 10.5
                    }
                }, {
                    name: "oni_s-royale-3",
                    character: "arataki-itto",
                    buttonBoxPosition: {
                        w: 190,
                        t: 30,
                        l: 50
                    },
                    textOffset: {
                        w: 30,
                        l: 56,
                        b: 10
                    }
                }],
                rateup: ["faruzan", "gorou", "yanfei"]
            },
            weapons: {
                name: "epitome-invocation-39",
                fatepointsystem: !0,
                featured: [{
                    name: "tulaytullah_s-remembrance",
                    type: "catalyst",
                    buttonBoxPosition: {
                        w: 70,
                        t: 30,
                        l: 35
                    }
                }, {
                    name: "redhorn-stonethresher",
                    type: "claymore",
                    buttonBoxPosition: {
                        t: 10,
                        w: 70,
                        l: 60
                    }
                }],
                rateup: ["eye-of-perception", "favonius-warbow", "wavebreaker_s-fin", "favonius-greatsword", "sacrificial-sword"],
                textOffset: {
                    featured: {
                        l: 42.5,
                        t: 65,
                        w: 30.5
                    },
                    rateup: {
                        l: 78,
                        w: 18,
                        b: 26
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
                    name: "reign-of-serenity-3",
                    character: "raiden-shogun",
                    buttonBoxPosition: {
                        w: 160,
                        t: 5
                    },
                    textOffset: {
                        l: 47,
                        b: 8.5
                    }
                }, {
                    name: "azure-excursion-2",
                    character: "kamisato-ayato",
                    buttonBoxPosition: {
                        w: 140,
                        t: 35,
                        l: 50
                    },
                    textOffset: {
                        l: 47,
                        b: 8.5
                    }
                }],
                rateup: ["rosaria", "sayu", "kujou-sara"]
            },
            weapons: {
                name: "epitome-invocation-40",
                fatepointsystem: !0,
                featured: [{
                    name: "engulfing-lightning",
                    type: "polearm",
                    buttonBoxPosition: {
                        w: 80,
                        t: 20,
                        l: 25
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
                rateup: ["akuoumaru", "favonius-lance", "lion_s-roar", "mouun_s-moon", "sacrificial-fragments"],
                textOffset: {
                    featured: {
                        w: 34,
                        l: 35.5,
                        t: 67.5
                    },
                    rateup: {
                        l: 75,
                        b: 19
                    }
                }
            }
        }
    }],
    a = {
        patch: 3.3,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};