import smart from '../type_pics/smart.png'

export default function SmartPage(){
    return <div className="type-description">
        <h1>Smart Rosie</h1>
        <p>Quote: <b><i>"Yesss I love puzzles!!!"</i></b></p>
        <img src={smart}/>
        <div className="description">
            <p>
                An infinite iq and knowledge about everything (but to experience).
                The Smart Rosie may look intimidating at first,
                but she means to appear that way. Fascinated by puzzles and mysteries she only whishes to
                learn more and understand the true nature of reality!
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + Knows a ton
                    </li>
                    <li>
                        + Master of puzzles and games
                    </li>
                    <li>
                        + Has knowledge about things most people do not.
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - Knowing too much can sometimes paralyze her when making choices
                    </li>
                    <li>
                        - Can sometimes obsess over trying to do something perfectly
                    </li>
                    <li>
                        - Doesn't feel confident in most of her skills
                    </li>
                </ul>

            </div>
        </div>
    </div>
}