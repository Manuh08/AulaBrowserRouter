<<<<<<< HEAD
export default function Header(){
    return(
       <>
        <header>
            <Link to= "/home">
            <p>Home</p>
            </Link> 

            <Link to= "/ofertas">
            <p>Ofertas</p>
            </Link> 

            <Link to= "/produtos">
            <p>Produtos</p>
            </Link> 

        </header>
        </>
    );
} 
=======
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
>>>>>>> 0ed2b0abfc6a7ed304cee3bbb595c1b7b0052d09
