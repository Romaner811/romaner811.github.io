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
        <a
            href="https://www.facebook.com/events/548901462452901/"
            target="_blank"
        >MatrixJam</a>,
        a unique game jam where all the games are united into a "matrix" game.
        `,
        work: `
        my part:
        <ul>
        <li> Strategically integrating UnityEvents. </li>
        <li> Code of a puzzle. </li>
        <li> Internal "sub-scene" management. </li>
        <li> Refactor players' interaction to be focus oriented. </li>
        <li> object outlining of focused item. </li>
        <li> use API for matrix integration. </li>
        <li> "pull-requesting" our efforts into the matrix' repository. </li>
        </ul>
        `,
        extra: `
        also:
        <ul>
        <li> @Nir9000 - delicate game&amp;level design, amazing pixel-art,
             and lots of programming too. </li>
        <li> @IdoToov - audio designed, composed and integrated everything you
             can hear. <br />
             (note: has experience with unreal, his first time with unity!)
        </li>
        <li> We all did early playtesting with friends and family :) </li>
        </ul>
        <p> As of 26.08.2020 The united matrix game is not out yet released,
        but you can see this 
        <a
            href="https://www.dropbox.com/s/kd601klqqyexx7s/MatrixJamGamesShowcase.mp4?dl=0&fbclid=IwAR1q9AtXxA26r8kKQSI-Xcic95Ims4hfPnT_GHOOySsL0p_l3q2-Li41vnk"
            target="_blank"
        >showcase</a> of other games for this jam. </p>
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
        description: `
        The robot is re-using his hands as ammunition against the dark forces
        of a polluting factory. <br />
        Built for the
        <a
            href="https://www.facebook.com/events/596245601316096/"
            target="_blank"
        >Jamuslala game jam</a>
        about renewable energy and resources (a.k.a 5R).
        `,
        work: `
        Turns out I'm responsible for most of the evil in this game:
        <ul>
        <li> Health &amp; Damage </li>
        <li> Enemt AI +debug-gizmos </li>
        <li> Refactoring of motion for reuse on enemies </li>
        <li> Enemy Guns & Bullets </li>
        <li> Bullet pooling </li>
        </ul>
        `,
        extra: `
        credis:
        <ul>
        <li> @Yedelstein - initial concept, game&amp;level-design,
             and programming. </li>
        <li> @Nir9000 - cool pixel-art & cutscenes, level-design, programming,
             UI building, and sound search and integration. </li>
        <li title="SFX: 'The Essential Retro Video Game Sound Effects Collection' by Juhani Junkala
Music: 'Fueled By Fire' By OurMusicBox">
            we used free <i>sounds</i> and <i>music</i> found on the internet. </li>
        </ul>
        <p> Note: We started a slow-paced work the day after the theme
        announced which was a week before of the jam itself. </p>
        <p> Fun-fact: during the development
        <a
            href="https://itch.io/jam/gmtk-2020/rate/695669"
            target="_blank"
        >@Nir9000</a>
        and I were soloing in the
        GMTKJam2020.</p>
        <p> See other games submitted for <a
            href="https://itch.io/jam/jamuslala"
            target="_blank"
        >Jamuslala game jam</a>. </p>
        `
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
        description: `
        Considering the theme "out of controll" of the 
        <a
            href="https://itch.io/jam/gmtk-2020"
            target="_blank"
        >GMTKJam2020</a>
        which this
        game was built for, collecting the coins os twistedly harder than
        it seems.
        `,
        work: `
        Well now I know that TDD (test driven development) is not for
        jams... <br />
        I defined the test cases for every feature and built a scene with a
        checklist for each category...
        `,
        extra: `
        Unfortunately I didn't manage to finish and upload the game on
        time. And for the first time I realized how level design is crucial
        and time-consuming.<br />
        I tought I can drop a level in the last 20 minutes of the jam, where
        in fact even uploading the game took more than that.
        `
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
        description: `
        This match-3 game is an interview-assignment,
        shows my first 3 days of unity experience.
        `,
        work: `
        As a pure programmer I'm for the first time tackling the approach of
        "making games not systems".<br />
        Starting design with OOP and C# interfaces planning resulted in a
        "system" I couldn't fit into unity. It was input-oriented and did not
        support delayed-gradual representation (animation) of the board.<br />
        So I had to forget all I learned, and start over. this time "thinking
        unity" and with a "getting things done as fast as possible" approach.
        `,
        extra: `
        I stopped working and decided to get interviewer feedback before
        continuing to bugfixing and polishing.
        `
    },
];

for (let i = 0; i < games_list.length; i++)
{
    games[games_list[i].slug] = games_list[i];
}

