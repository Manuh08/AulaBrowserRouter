import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from "react";


export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        { id: 1, nome: 'Aneu', preco: 'R$ 10,000' },
        { id: 2, nome: 'Brincu', preco: 'R$ 20,000' },
        { id: 3, nome: 'Colar de perulas', preco: 'R$ 30,000' },
        { id: 4, nome: 'KAWASAKI', preco: 'R$ 40,000' },
        { id: 5, nome: 'SUZUKI', preco: 'R$ 50,000' }
      ]);

    return(
        <>
        <Header/>

        
        
            <Footer Creditos={"Manuela Soares Pacheco"}/>
        </>
    );
}