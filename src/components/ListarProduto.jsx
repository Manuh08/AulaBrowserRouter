export default function listarProdutos({Produtos}) {
    return(
        <div>

        {
       Produtos.map((produto)=>
       <div key={produto.id}>
       <p>{produto.nome}</p>
      <img src={produto.imagem}/>
      <p>{produto.descrição}</p>
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
    );
}