import romantic from '../type_pics/romantic.png'

export default function RomanticPage(){
    return <div className="type-description">
        <h1>Romantic Rosie</h1>
        <p>Quote: <b><i>"Aww, i know exactly what you mean ;)"</i></b></p>
        <img src={romantic}/>
        <div className="description">
            <p>
                A romantic at heart, the Romantic Rosie is always searching for love.
                It's a glass of tea that can never end. Hugging, petting and kissing are what
                she thinks about the most. So, she keeps on searching for as long as it takes.
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + Can be very sweet to people
                    </li>
                    <li>
                        + Knows what to say to cause attraction
                    </li>
                    <li>
                        + Huggable
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - Can be too blinded by love
                    </li>
                    <li>
                        - Induldges in things too much
                    </li>
                    <li>
                        - Can let her love distract her from other important things.
                    </li>
                </ul>

            </div>
        </div>
    </div>
}