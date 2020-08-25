'use strict';

var collabs = { }

let collabs_list = [
    {
        id: "Romaner811",
        name: "Roman Kuzminsky",
        link: {
            github: "https://github.com/romaner811",
            itch: "https://romaner811.itch.io/",
            linkedin: "https://www.linkedin.com/in/romaner811",
            portfolio: "https://romaner811.github.io/"
        },
        skills: [
            skill.tech.unity,
            skill.tech.csharp,
            skill.tech.git
        ]
    },
    
    {
        id: "Nir9000",
        name: "Nir Zaid",
        link: {
            itch: "https://nir-zaid.itch.io/",
            linkedin: "https://www.linkedin.com/in/nir-zaid-2214371a4/"
        },
        skills: [
            skill.other.gd,
            
            skill.tech.unity,
            skill.tech.csharp,
            
            skill.art.pixel
        ]
    },
    
    {
        id: "IdoToov",
        name: "Ido Toov",
        link: {
            portfolio: "https://www.idotoov.com/portfolio",
            linkedin: "https://www.linkedin.com/in/ido-toov/"
        },
        skills: [
            skill.audio.design,
            skill.audio.music,
            skill.audio.integ
        ]
    },
    
    {
        id: "Yedelstein",
        name: "Yehuda Edelstein",
        link: {
            itch: "https://dmfr56.itch.io/",
        },
        skills: [
            skill.other.gd,
            
            skill.tech.unity,
            skill.tech.csharp
        ]
    }
];

for (let i = 0; i < collabs_list.length; i++)
{
    collabs[collabs_list[i].id] = collabs_list[i];
}
