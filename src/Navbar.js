import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" id="site-title"> Home </Link>
            <ul>
                <li>
                    <Link to="/type1">
                        type 1
                    </Link>
                </li>
                <li>
                    <Link to="/type2">
                        type 2
                    </Link>
                </li>
                <li>
                    <Link to="/type3">
                        type 3
                    </Link>
                </li>
            </ul>
        </nav>

    )
}