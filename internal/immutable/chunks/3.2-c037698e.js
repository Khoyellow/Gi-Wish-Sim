const e = 3.2,
    t = [{
        phase: 1,
        banners: {
            standardVersion: 3,
            events: {
                item: [{
                    name: "the-moongrass-enlightenment-1",
                    character: "nahida",
                    buttonBoxPosition: {
                        w: 130,
                        t: 30
                    },
                    textOffset: {
                        l: 48,
                        b: 8.5
                    }
                }, {
                    name: "tapestry-of-golden-flames-3",
                    character: "yoimiya",
                    buttonBoxPosition: {
                        w: 140,
                        t: 20,
                        l: 40
                    },
                    textOffset: {
                        l: 50
                    }
                }],
                rateup: ["bennett", "razor", "noelle"]
            },
            weapons: {
                name: "epitome-invocation-37",
                fatepointsystem: !0,
                featured: [{
                    name: "a-thousand-floating-dreams",
                    type: "catalyst",
                    buttonBoxPosition: {
                        w: 70,
                        t: 30,
                        l: 65
                    }
                }, {
                    name: "thundering-pulse",
                    type: "bow",
                    buttonBoxPosition: {
                        w: 70,
                        t: 10,
                        l: 35
                    }
                }],
                rateup: ["rust", "favonius-lance", "the-widsith", "the-flute", "sacrificial-greatsword"],
                textOffset: {
                    featured: {
                        l: 42.5,
                        t: 62
                    },
                    rateup: {
                        l: 79,
                        b: 22
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
                    name: "everbloom-violet-2",
                    character: "yae-miko",
                    buttonBoxPosition: {
                        w: 170,
                        t: 24,
                        l: 50
                    },
                    textOffset: {
                        l: 46.6,
                        b: 13
                    }
                }, {
                    name: "farewell-of-snezhnaya-4",
                    character: "tartaglia",
                    buttonBoxPosition: {
                        w: 160,
                        t: 22
                    },
                    textOffset: {
                        l: 47,
                        b: 9
                    }
                }],
                rateup: ["layla", "thoma", "shikanoin-heizou"]
            },
            weapons: {
                name: "epitome-invocation-38",
                fatepointsystem: !0,
                featured: [{
                    name: "kagura_s-verity",
                    type: "catalyst",
                    buttonBoxPosition: {
                        w: 65,
                        t: 40,
                        l: 64
                    }
                }, {
                    name: "polar-star",
                    type: "bow",
                    buttonBoxPosition: {
                        w: 70,
                        t: 2,
                        l: 35
                    }
                }],
                rateup: ["favonius-sword", "the-stringless", "dragon_s-bane", "the-bell", "favonius-codex"],
                textOffset: {
                    featured: {
                        l: 42.5,
                        t: 67
                    },
                    rateup: {
                        l: 70.5,
                        b: 22
                    }
                }
            }
        }
    }],
    a = {
        patch: 3.2,
        data: t
    };
export {
    t as data, a as
    default, e as patch
};