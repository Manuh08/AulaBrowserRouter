import { useState } from "react";

export default function listarProdutos({Produtos}) {

  const [listaPedidos, setListarPedidos] = useState ([]);
  const adicionarItemPedidos = (objeto) =>{
    setListarPedidos([...setListarPedidos,objeto]);
  }
    return(
      <>
        <div>

        {
       Produtos.map((produto)=>
       <div key={produto.id}>
       <p>{produto.nome}</p>
      <img src={produto.imagem}id="home"/>
      <p>{produto.descrição}</p>
      <p>{produto.preco}</p>
       <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
       </div>
       )
        }
        
  </div>
  </>
    )
}