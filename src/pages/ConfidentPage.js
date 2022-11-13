import confident from '../type_pics/confident.png'

export default function ConfidentPage(){
    return <div className="type-description">
        <h1>Confident Rosie</h1>
        <p>Quote: <b><i>"Haha, I love making friends!!"</i></b></p>
        <img src={confident}/>
        <div className="description">
            <p>
                The confident type doesn't worry about almost anything. They belive in the idea of
                'live and let live'. Loves to make friends and get other's point of view,
                The confident rosie has no problems dealing with most things,
                however they often feel like they are missing something.
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + confident
                    </li>
                    <li>
                        + isn't afraid to jump into an adventure
                    </li>
                    <li>
                        + no problem saying 'no'
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - feels like there is something missing
                    </li>
                    <li>
                        - talking too much can sometimes get them in trouble
                    </li>
                    <li>
                        - Isn't cautious which causes them to often get in trouble (not that it bothers them :P)
                    </li>
                </ul>

            </div>
        </div>
    </div>
}