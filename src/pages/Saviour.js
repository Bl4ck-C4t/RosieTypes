import saviour from '../type_pics/savioir.png'

export default function SaviourPage(){
    return <div className="type-description">
        <h1>Saviour Rosie</h1>
        <p>Quote: <b><i>"It's in my nature to help!"</i></b></p>
        <img src={saviour}/>
        <div className="description">
            <p>
            The saviour loves helping others accomplish their goals.
                They hate seeing anyone suffer and have a generally positive view of humanity.
                The saviour type would stop at nothing to help those unfortunate souls who need it most!
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + exteremely helpful
                    </li>
                    <li>
                        + kind
                    </li>
                    <li>
                        + selfless
                    </li>
                    <li>
                        + would help anyone
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - can often end up helping the wrong person
                    </li>
                    <li>
                        - selflessness causes them to give too much of themselves to others
                    </li>
                    <li>
                        - has a hard time saying 'no' or establishing any boundaries, unless absolutely necessary
                    </li>
                </ul>

            </div>
        </div>
    </div>
}