import enigma from '../type_pics/enigma.png'

export default function EnigmaPage(){
    return <div className="type-description">
        <h1>Enigma Rosie</h1>
        <p>Quote: <b><i>"You don't know me at all."</i></b></p>
        <img src={enigma}/>
        <div className="description">
            <p>
                The Enigma Rosie is mysterious and secretive.
                She hides information about herself and doesn't speak much.
                To avoid talking about her self she can deflect the conversation to ask about the other person instead.
                Who knows what secret life she lives behind the curtains 0_0
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + doesn't reveal much about themselves (not much that an enemy could use)
                    </li>
                    <li>
                        + keeps track of information
                    </li>
                    <li>
                        + Underplays her strengths, which can surprise opponents if she were to make a move.
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - Often misunderstood
                    </li>
                    <li>
                        - Due to her concealing information people start to assume a lot
                    </li>
                    <li>
                        - has to sometimes lie to conceal true identity
                    </li>
                </ul>

            </div>
        </div>
    </div>
}