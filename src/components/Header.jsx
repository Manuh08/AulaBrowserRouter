
import { Link } from "react-router-dom";

export default function Header(){
    return(
       <>
        <header>
            <Link to= "/">
            <p>Home</p>
            </Link> 

            <Link to= "/oferta">
            <p>Ofertas</p>
            </Link> 

            <Link to= "/produtos">
            <p>Produtos</p>
            </Link> 

        </header>
        </>
    );
}

