import trueR from '../type_pics/true.png'

export default function TruePage(){
    return <div className="type-description">
        <h1>True Rosie</h1>
        <p>Quote: <b><i>"Take care!"</i></b></p>
        <img src={trueR}/>
        <div className="description">
            <p>
                With a little bit from all types the True Rosie is able to act as
                any of the personalities for a while. She loves working, playing and
                learning new things. Sometimes confident and sometimes shy, the true Rosie
                tries to uphold her ideals and move towards a higher goal. She may not be
                the best at everything but she is more then enough the way she is!
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + reads loads of books
                    </li>
                    <li>
                        + adaptable to the enviourment
                    </li>
                    <li>
                        + solves problems over time
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - Abilities are more spread out rather then focused on one 1 skill
                    </li>
                    <li>
                        - gets misunderstood
                    </li>
                    <li>
                        - is cute but doesn't realise it
                    </li>
                </ul>

            </div>
        </div>
    </div>
}