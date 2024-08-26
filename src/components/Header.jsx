
import { Link } from "react-router-dom";

export default function Header(){
    return(
       <>
        <header class="hed">
            <Link to= "/">
            <h1 class='header-link'>Home</h1>
            </Link> 

            <Link to= "/oferta">
            <h1 class='header-link'>Ofertas</h1>
            </Link> 

            <Link to= "/produtos">
            <h1 class='header-link'>Produtos</h1>
            </Link> 

        </header>
        </>
    );
}

