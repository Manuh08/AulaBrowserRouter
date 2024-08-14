import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <nav>
            <ul>
                <Link to="/home">
                <li>Home</li>
                </Link>

                <Link to="/oferta">
                <li>Oferta</li>
                </Link>
            </ul>
        </nav>
        </>
    );
}