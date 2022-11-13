import villain from '../type_pics/villain.png'

export default function VillainPage(){
    return <div className="type-description">
        <h1>Villain Rosie</h1>
        <p>Quote: <b><i>"You get what you deserve."</i></b></p>
        <img src={villain}/>
        <div className="description">
            <p>
               The villain Rosie has lost all hope in humanity.
                They harbor a lot of hate and resentment towards the world and would rather watch it burn at times.
                Having seen how cruel the world is instead of retreating inwards like the 'Anxious Rosie',
                The Villain Rosie went on the offensive. Who knows what her next plan is....
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + great at making evil plans
                    </li>
                    <li>
                        + exercises a lot so is very strong and agile
                    </li>
                    <li>
                        + can use her skills in fascinating ways to accomplish goals at all costs
                    </li>
                    <li>
                        + Under the right circumstances can fight for good
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - Very negative view of people and humanity
                    </li>
                    <li>
                        - rude
                    </li>
                    <li>
                        - hatred and judgement towards others
                    </li>
                </ul>

            </div>
        </div>
    </div>
}