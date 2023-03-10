const e = 2.7,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 2,
            events: {
                item: [{
                    name: "discerner-of-enigmas-1",
                    character: "yelan",
                    buttonBoxPosition: {
                        w: 110,
                        t: 32,
                        l: 50
                    },
                    textOffset: {
                        l: 49,
                        b: 11
                    }
                }, {
                    name: "invitation-to-mundane-life-3",
                    character: "xiao",
                    buttonBoxPosition: {
                        w: 130,
                        t: 30,
                        l: 50
                    },
                    textOffset: {
                        l: 49,
                        b: 11
                    }
                }],
                rateup: ["yanfei", "barbara", "noelle"]
            },
            weapons: {
                name: "epitome-invocation-29",
                fatepointsystem: !0,
                featured: [{
                    name: "aqua-simulacra",
                    type: "bow",
                    buttonBoxPosition: {
                        t: 5,
                        w: 80,
                        l: 35
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
                rateup: ["lithic-spear", "sacrificial-bow", "sacrificial-sword", "eye-of-perception", "favonius-greatsword"],
                textOffset: {
                    featured: {
                        l: 44,
                        t: 68
                    },
                    rateup: {
                        l: 76,
                        b: 22
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
                    name: "oni_s-royale-2",
                    character: "arataki-itto",
                    buttonBoxPosition: {
                        w: 190,
                        t: 30,
                        l: 50
                    },
                    textOffset: {
                        w: 30,
                        l: 49,
                        b: 11
                    }
                },
                rateup: ["kuki-shinobu", "chongyun", "gorou"]
            },
            weapons: {
                name: "epitome-invocation-30",
                fatepointsystem: !0,
                featured: [{
                    name: "redhorn-stonethresher",
                    type: "claymore",
                    buttonBoxPosition: {
                        t: 10,
                        w: 70,
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
                rateup: ["lithic-blade", "the-stringless", "sacrificial-fragments", "dragon_s-bane", "lion_s-roar"],
                textOffset: {
                    featured: {
                        w: 28,
                        l: 41.5,
                        t: 67.5
                    },
                    rateup: {
                        l: 76,
                        b: 22
                    }
                }
            }
        }
    }],
    a = {
        patch: 2.7,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};