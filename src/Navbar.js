import {Link} from "react-router-dom";
// ["Saviour", "Villain", "Anxious", "Confident", "Workaholic", "True", "Enigma", "Smart",
//     "Indulging", "Romantic"]

export default function Navbar() {
    return ( //
        <nav className="nav">
            <Link to="/" id="site-title"> Home </Link>
            <ul>
                <li>
                    <Link to="/anxious">
                        Anxious
                    </Link>
                </li>
                <li>
                    <Link to="/saviour">
                        Saviour
                    </Link>
                </li>
                <li>
                    <Link to="/villain">
                        Villain
                    </Link>
                </li>
                <li>
                    <Link to="/confident">
                        Confident
                    </Link>
                </li>
                <li>
                    <Link to="/workaholic">
                        Workaholic
                    </Link>
                </li>
                <li>
                    <Link to="/true">
                        True
                    </Link>
                </li>
                <li>
                    <Link to="/enigma">
                        Enigma
                    </Link>
                </li>
                <li>
                    <Link to="/smart">
                        Smart
                    </Link>
                </li>
                <li>
                    <Link to="/indulging">
                        Indulging
                    </Link>
                </li>
                <li>
                    <Link to="/romantic">
                        Romantic
                    </Link>
                </li>
            </ul>
        </nav>

    )
}