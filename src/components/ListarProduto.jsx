
export default function listarProdutos({Produtos}) {
  return(
<div class="card-container">
  {Produtos.map((produto) => (
      <div key={produto.id} class="card-produto">
          <p>{produto.nome}</p>
          <img src={produto.imagem} id="home" />
          <p>{produto.descrição}</p>
          <p class="riscado">{produto.preco2}</p>
          <p>{produto.preco}</p>
          <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
      </div>
  ))}
</div>

  );
}