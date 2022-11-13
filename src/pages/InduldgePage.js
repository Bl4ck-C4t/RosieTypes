import induldge from '../type_pics/induldge.png'

export default function InduldgePage(){
    return <div className="type-description">
        <h1>Indulging Rosie</h1>
        <p>Quote: <b><i>"Do you have time for one more game?"</i></b></p>
        <img src={induldge}/>
        <div className="description">
            <p>
                Who would play with you while chewing on some tangerines?
                It is the Induldging Rosie! Always looking for the next fun thing to do, she
                belives in quotes such as: "You live only once!" and "Live is too short", so she
                lives it to the max!! Good games, movies, food it's all fun when she comes in!
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + Is happy most of the time
                    </li>
                    <li>
                        + Knows how to have fun
                    </li>
                    <li>
                        + Fairly relaxed most of the time
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - Procrastinates things a lot
                    </li>
                    <li>
                        - Can have a hard time choosing between work and fun times
                    </li>
                </ul>

            </div>
        </div>
    </div>
}