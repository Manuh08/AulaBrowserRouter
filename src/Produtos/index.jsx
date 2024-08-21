import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Produtos() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'BIZ', preco: 'R$ 10,000' },
    { id: 2, nome: 'BMW', preco: 'R$ 20,000' },
    { id: 3, nome: 'BROS 160', preco: 'R$ 30,000' },
    { id: 4, nome: 'KAWASAKI', preco: 'R$ 40,000' },
    { id: 5, nome: 'SUZUKI', preco: 'R$ 50,000' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
  }

  const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter((produto)=> {
        if (remover == false) {
            if (produto.id !== id) {
                return produto
            } else {
                remover = true;
                return null
            }
        } else {
            return produto
        }
    });
    setListaPedidos(listaAux);
  }
  return (
    <>
    <Header titulo={"Meu mundo"}/>
   
    
    <div>
         <h1>MotoFlow</h1>

          {
         listaProdutos.map((produto)=>
         <div key={produto.id}>
         <p>{produto.nome}</p>
         <p>{produto.preco}</p>
         <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
         </div>
         )
          }
          {
            listaPedidos.map((produto)=>
            <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            <button onClick={()=> removerPedido(produto.id)}>Remover</button>
            </div>
            )
          }
    </div>
    <Footer desenvolvedor={"Manuela"}/>
    </>
  );
}