
export default function listarProdutos({Produtos}) {

  const adicionarItemPedidos = (objeto) =>{
    setListarPedidos([...setListarPedidos,objeto]);
  }
    return(
      <>
      <div class="card-produtos">
        
       {Produtos.map((produto)=>
       <div key={produto.id} class="card-produtos">
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
    );
}