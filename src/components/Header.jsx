
import { Link } from "react-router-dom";

export default function Header(){
    return(
       <>
        <header>
            <Link to= "/">
            <h1 class='header-link'>Homer</h1>
            </Link> 

            <Link to= "/oferta">
            <h1 class='header-link'>Ofertas</h1>
            </Link> 

            <Link to= "/produtos">
            <h1 class='header-link'>Produto</h1>
            </Link> 

        </header>
        </>
    );
}

