import anxious from '../type_pics/anxious.png'

export default function AnxiousPage(){
    return <div className="type-description">
        <h1>Anxious Rosie</h1>
        <p>Quote: <b><i>"Too many people ;-;"</i></b></p>
        <img src={anxious}/>
        <div className="description">
            <p>The anxious type often worries about everything.
            Being naturally timid it hides and runs from the unpredictability of the world.
                It can be very kind and sweet but is terrified of what the world can do.

            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + Cute
                    </li>
                    <li>
                        + the high anxiety protects from a lot of danger
                    </li>
                    <li>
                        + is always prepared for something bad to happen
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - high anxiety makes it impossible to do loads of social tasks
                    </li>
                    <li>
                        - misses a lot of life by running away and hiding
                    </li>
                    <li>
                        - often over worries about things that are not dangerous
                    </li>
                </ul>

            </div>
        </div>
    </div>
}