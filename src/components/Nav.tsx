import { Link } from "react-router-dom";

export function Nav (){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Hem</Link>
                </li>
                <li>
                    <Link to="/contact">Kontakt</Link>
                </li>
                <li>
                    <Link to="/booking">Boka bord</Link>
                </li>
            </ul>
        </nav>
    )
};