'use strict';

/*
    play-link will be generated using the name (property / key) and the value of field "user"
    
    https://<user>.itch.io/<slug>
*/

var games = { };

let games_list = [
    {
        slug: "under-pressure",
        user: "nir-zaid",
        src: "https://github.com/Romaner811/Under-Pressure-MatrixJam-/tree/standalone",
        team: [ "Nir9000", "Romaner811", "IdoToov" ],
        tags: [
            tag.engine.unity,
            tag.dim[2],
            tag.art.pixel,
            tag.event.jam, "matrix-jam", "2020", "GameDevelopersIsrael",
            tag.team.team, "TeamMonk", "id-11",
            tag.genre.puzzle,
            "escape", "maze"
        ],
        description: `
        The rushy escape puzzle-maze was made for the
        <a href="https://www.facebook.com/events/tel-aviv-israel/matrix-jam-one-game-to-rule-them-all/548901462452901/">MatrixJam</a>,
        a unique game jam where all the games are united into a "matrix" game.
        `,
        work: `
        my part:
        <ul>
        <li> strategically integrating UnityEvents. </li>
        <li> code of a puzzle. </li>
        <li> internal "sub-scene" management. </li>
        <li> players' focus oriented interaction. </li>
        <li> object outlining of focused item. </li>
        <li> use API for matrix integration. </li>
        <li> "pull-requesting" our efforts into the matrix' repository. </li>
        </ul>
        `,
        extra: `
        also:
        <ul>
        <li> @Nir9000 - delicate game design, amazing pixel-art, and actually
            most of the programming too. </li>
        <li> @IdoToov - audio designed, composed and integrated everything you
            can hear.
            (integration? he is not a programmer but all 'Play(SomeCoolSound)'
            lines were placed by him!)
        </li>
        <li> also we all did early playtesting with friends and family :) </li>
        </ul>
        `
    },
    
    {
        slug: "rc-kl",
        user: "dmfr56",
        src: null,
        team: [ "Yedelstein", "Nir9000", "Romaner811" ],
        tags: [
            tag.engine.unity,
            tag.dim[2],
            tag.art.pixel,
            tag.event.jam, "jamuslala", "2020", "MakeGamesJLM",
            tag.team.team,
            tag.genre.topdown, tag.genre.shooter,
            "5R", "renewable-resource"
        ],
        description: "[description] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu arcu ac lacus vestibulum pharetra sed vel urna. Morbi a interdum magna, eget mattis mi. Nam volutpat congue sapien quis cursus. Fusce tristique libero nulla, at condimentum ipsum porta rhoncus. Suspendisse vulputate justo a fringilla feugiat. Mauris augue neque, suscipit ac nunc lobortis, tristique maximus purus. Etiam ut nunc eu augue ultricies suscipit. Quisque nulla lectus, ultricies a risus eget, aliquam aliquet elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec semper mi sit amet arcu ornare, egestas volutpat sapien pellentesque. Curabitur scelerisque est quis tellus pretium fermentum. Pellentesque iaculis arcu at mauris vestibulum maximus. Morbi nec accumsan tellus. Nullam eget enim quis odio venenatis ullamcorper. Etiam scelerisque, urna vel laoreet egestas, massa sem auctor tellus, a euismod tellus lectus ac nunc.",
        work: "[work] Sed commodo lorem vitae finibus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis suscipit aliquet feugiat. Aliquam viverra ac augue vitae laoreet. Quisque sed egestas diam, sed imperdiet massa. Nam quis tristique tortor. Aenean aliquet sodales ipsum, nec tristique nisl condimentum et.",
    },
    
    {
        slug: "OutOfCoinTroll",
        user: "romaner811",
        src: "https://github.com/Romaner811/GMTK-Jam-2020-OutOfCoinTroll",
        team: [ "Romaner811" ],
        tags: [
            tag.engine.unity,
            tag.dim[3],
            tag.art.primitive,
            tag.event.jam, "GMTK", "2020", "out-of-control",
            tag.team.solo,
            tag.genre.puzzle
        ],
        description: "[description] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu arcu ac lacus vestibulum pharetra sed vel urna. Morbi a interdum magna, eget mattis mi. Nam volutpat congue sapien quis cursus.",
        work: "[work] Sed commodo lorem vitae finibus sagittis. ",
    },
    
    {
        slug: "TreeInArrow",
        user: "romaner811",
        src: "https://github.com/Romaner811/TreeInArrow",
        team: [ "Romaner811" ],
        tags: [
            tag.engine.unity,
            tag.dim[2],
            tag.art.primitive,
            tag.team.solo,
            tag.genre.puzzle
        ],
        description: "[description] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu arcu ac lacus vestibulum pharetra sed vel urna. Morbi a interdum magna, eget mattis mi. Nam volutpat congue sapien quis cursus. Fusce tristique libero nulla, at condimentum ipsum porta rhoncus. Suspendisse vulputate justo a fringilla feugiat. Mauris augue neque, suscipit ac nunc lobortis, tristique maximus purus. Etiam ut nunc eu augue ultricies suscipit. Quisque nulla lectus, ultricies a risus eget, aliquam aliquet elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec semper mi sit amet arcu ornare, egestas volutpat sapien pellentesque. Curabitur scelerisque est quis tellus pretium fermentum. Pellentesque iaculis arcu at mauris vestibulum maximus. Morbi nec accumsan tellus. Nullam eget enim quis odio venenatis ullamcorper.",
        work: "[work] Sed commodo lorem vitae finibus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis suscipit aliquet feugiat. Aliquam viverra ac augue vitae laoreet. Quisque sed egestas diam, sed imperdiet massa. Nam quis tristique tortor.",
    },
];

for (let i = 0; i < games_list.length; i++)
{
    games[games_list[i].slug] = games_list[i];
}

