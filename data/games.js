'use strict';

var skill = {
    other: {
        mgr: "Management",
        gd: "Game Design"
    },    
    art: {
        pixel: "Pixel Art"
    },
    audio: {
        design: "Audio Design",
        music: "Composition",
        integ: "Audio Integration"
    },
    tech: {
        unity: "Unity",
        csharp: "Programming: C#",
        git: "GIT"
    }
};

var collabs = {
    "romaner811": {
        name: "Roman Kuzminsky",
        link: "https://romaner811.github.io/",
        skills: [
            skill.tech.unity,
            skill.tech.csharp,
            skill.tech.git
        ],
    },
    
    "nir9000": {
        name: "Nir Zaid",
        link: "https://nir-zaid.itch.io/",
        skills: [
            skill.other.gd,
            
            skill.tech.unity,
            skill.tech.csharp,
            
            skill.art.pixel
        ],
    },
    
    "iDoTea": {
        name: "Ido Toov",
        link: "https://www.idotoov.com/portfolio",
        skills: [
            skill.audio.design,
            skill.audio.music,
            skill.audio.integ
        ],
    },
    
    "Yedelstein": {
        name: "Yehuda Yedelstein",
        link: "https://dmfr56.itch.io/",
        skills: [
            skill.other.gd,
            
            skill.tech.unity,
            skill.tech.csharp
        ],
    },
};

var tag = {
    engine: { unity: "unity" },
    event: { jam: "game-jam" },
    dim: { 2: "2D", 3: "3D" },
    art: { pixel: "pixel-art", primitive: "primitive-shapes" },
    team: { solo: "solo", team: "team" }
};

var games = {
    "under-pressure": {
        user: "nir-zaid",
        team: [ "nir9000", "romaner811", "iDoTea" ],
        src: "https://github.com/Romaner811/Under-Pressure-MatrixJam-/tree/standalone",
        tags: [
            tag.engine.unity,
            tag.dim[2],
            tag.art.pixel,
            tag.event.jam,
            tag.team.team
        ],
        description: "<description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu arcu ac lacus vestibulum pharetra sed vel urna. Morbi a interdum magna, eget mattis mi. Nam volutpat congue sapien quis cursus. Fusce tristique libero nulla, at condimentum ipsum porta rhoncus. Suspendisse vulputate justo a fringilla feugiat. Mauris augue neque, suscipit ac nunc lobortis, tristique maximus purus. Etiam ut nunc eu augue ultricies suscipit. Quisque nulla lectus, ultricies a risus eget, aliquam aliquet elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec semper mi sit amet arcu ornare, egestas volutpat sapien pellentesque. Curabitur scelerisque est quis tellus pretium fermentum. Pellentesque iaculis arcu at mauris vestibulum maximus. Morbi nec accumsan tellus. Nullam eget enim quis odio venenatis ullamcorper. Etiam scelerisque, urna vel laoreet egestas, massa sem auctor tellus, a euismod tellus lectus ac nunc.",
        work: "<work>Sed commodo lorem vitae finibus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis suscipit aliquet feugiat. Aliquam viverra ac augue vitae laoreet. Quisque sed egestas diam, sed imperdiet massa. Nam quis tristique tortor. Aenean aliquet sodales ipsum, nec tristique nisl condimentum et.",
    },
    "rc-kl": {
        user: "dmfr56",
        team: [ "Yedelstein", "nir9000", "romaner811" ],
        src: null,
        tags: [
            tag.engine.unity,
            tag.dim[2],
            tag.art.pixel,
            tag.event.jam,
            tag.team.team
        ],
        description: "<description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu arcu ac lacus vestibulum pharetra sed vel urna. Morbi a interdum magna, eget mattis mi. Nam volutpat congue sapien quis cursus. Fusce tristique libero nulla, at condimentum ipsum porta rhoncus. Suspendisse vulputate justo a fringilla feugiat. Mauris augue neque, suscipit ac nunc lobortis, tristique maximus purus. Etiam ut nunc eu augue ultricies suscipit. Quisque nulla lectus, ultricies a risus eget, aliquam aliquet elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec semper mi sit amet arcu ornare, egestas volutpat sapien pellentesque. Curabitur scelerisque est quis tellus pretium fermentum. Pellentesque iaculis arcu at mauris vestibulum maximus. Morbi nec accumsan tellus. Nullam eget enim quis odio venenatis ullamcorper. Etiam scelerisque, urna vel laoreet egestas, massa sem auctor tellus, a euismod tellus lectus ac nunc.",
        work: "<work>Sed commodo lorem vitae finibus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis suscipit aliquet feugiat. Aliquam viverra ac augue vitae laoreet. Quisque sed egestas diam, sed imperdiet massa. Nam quis tristique tortor. Aenean aliquet sodales ipsum, nec tristique nisl condimentum et.",
    },
    "OutOfCoinTroll": {
        user: "romaner811",
        team: [ "romaner811" ],
        src: "https://github.com/Romaner811/GMTK-Jam-2020-OutOfCoinTroll",
        tags: [
            tag.engine.unity,
            tag.dim[3],
            tag.art.primitive,
            tag.event.jam,
            tag.team.solo
        ],
        description: "<description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu arcu ac lacus vestibulum pharetra sed vel urna. Morbi a interdum magna, eget mattis mi. Nam volutpat congue sapien quis cursus. Fusce tristique libero nulla, at condimentum ipsum porta rhoncus. Suspendisse vulputate justo a fringilla feugiat. Mauris augue neque, suscipit ac nunc lobortis, tristique maximus purus. Etiam ut nunc eu augue ultricies suscipit. Quisque nulla lectus, ultricies a risus eget, aliquam aliquet elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec semper mi sit amet arcu ornare, egestas volutpat sapien pellentesque. Curabitur scelerisque est quis tellus pretium fermentum. Pellentesque iaculis arcu at mauris vestibulum maximus. Morbi nec accumsan tellus. Nullam eget enim quis odio venenatis ullamcorper. Etiam scelerisque, urna vel laoreet egestas, massa sem auctor tellus, a euismod tellus lectus ac nunc.",
        work: "<work>Sed commodo lorem vitae finibus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis suscipit aliquet feugiat. Aliquam viverra ac augue vitae laoreet. Quisque sed egestas diam, sed imperdiet massa. Nam quis tristique tortor. Aenean aliquet sodales ipsum, nec tristique nisl condimentum et.",
    },
    "TreeInArrow": {
        user: "romaner811",
        team: [ "romaner811" ],
        src: "https://github.com/Romaner811/TreeInArrow",
        tags: [
            tag.engine.unity,
            tag.dim[2],
            tag.art.primitive,
            tag.team.solo
        ],
        description: "<description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu arcu ac lacus vestibulum pharetra sed vel urna. Morbi a interdum magna, eget mattis mi. Nam volutpat congue sapien quis cursus. Fusce tristique libero nulla, at condimentum ipsum porta rhoncus. Suspendisse vulputate justo a fringilla feugiat. Mauris augue neque, suscipit ac nunc lobortis, tristique maximus purus. Etiam ut nunc eu augue ultricies suscipit. Quisque nulla lectus, ultricies a risus eget, aliquam aliquet elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec semper mi sit amet arcu ornare, egestas volutpat sapien pellentesque. Curabitur scelerisque est quis tellus pretium fermentum. Pellentesque iaculis arcu at mauris vestibulum maximus. Morbi nec accumsan tellus. Nullam eget enim quis odio venenatis ullamcorper. Etiam scelerisque, urna vel laoreet egestas, massa sem auctor tellus, a euismod tellus lectus ac nunc.",
        work: "<work>Sed commodo lorem vitae finibus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis suscipit aliquet feugiat. Aliquam viverra ac augue vitae laoreet. Quisque sed egestas diam, sed imperdiet massa. Nam quis tristique tortor. Aenean aliquet sodales ipsum, nec tristique nisl condimentum et.",
    },
};
