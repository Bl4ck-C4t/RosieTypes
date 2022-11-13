import work from '../type_pics/work.png'

export default function WorkocholicPage(){
    return <div className="type-description">
        <h1>Workaholic Rosie</h1>
        <p>Quote: <b><i>"Dashing off to do some work..."</i></b></p>
        <img src={work}/>
        <div className="description">
            <p>
                Haven't slept for 4 weeks, the Workaholic Rosie lives by the phrase:
                <i>"work hard, play... ehhh when you have time"</i>.
                The obsessive nature they have can cause them to over focus on one thing until they finish it,
                which makes them the perfect worker. Always scheduling, the Workaholic Rosie is always working on the
                next job.
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + has amazing work ethic
                    </li>
                    <li>
                        + a master at scheduling
                    </li>
                    <li>
                        + has extensive knowledge and loads of experience
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - overworked
                    </li>
                    <li>
                        - doesn't get enough sleep at times
                    </li>
                    <li>
                        - has no free time at all
                    </li>
                </ul>

            </div>
        </div>
    </div>
}