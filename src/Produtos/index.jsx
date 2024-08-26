import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../global.css";
import ListarProduto from "../components/ListarProduto";

export default function Produtos() {
  const [listaProdutos, setProdutos] = useState([
    
    { id: 1, 
      nome: 'Anel', preco: 'R$129,90 ', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/anel_de_prata_aro_torcido_e_cravejado_28202_1_d7cb122fd11b7e5d3811df29e7a6956c_20230329091701.jpg",
      descrição: 'Anel de Prata Torcido Cravejado',
      categoria:['','']
    },
    { id: 2, 
      nome: 'Colar', preco: 'R$ 169,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/colar_de_prata_feminino_lua_e_estrelas_32987_1_2d47667728f317c2638031c3c82ce1a1_20230329091414.jpg",
      descrição: 'Colar de prata Lua e Estrela',
      categoria:['','']
    },
    { id: 3, 
      nome: 'Pulseira', preco: 'R$ 76,42 ', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/pulseira_de_prata_riviera_estrela_zirconia_azul_41863_1_4a678e65624a19aee9171c89569f9147.jpg",
      descrição: 'Pulseira de Prata Banhada a Ródio Riviera Estrela Zircônia Azul',
      categoria:['','']
    },
    { id: 4, 
      nome: 'Berloque', preco: 'R$ 89,90 ', 
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvhiJeexudwohOEaYPuv2tDL3zDZhEwpO6A&s",
      descrição: 'Berloque de Prata Chave Zircônia Lilás',
      categoria:['','']
    },
    { id: 5, 
      nome: 'Brinco', preco: 'R$ 124,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/brinco_de_prata_borboleta_metade_cravejada_colecao_essencia_37197_1_8a79f7bd6eceb34670493b14346462cf_20230329092149.jpg",
      descrição: 'Brinco de Prata Borboleta Metade Cravejada',
      categoria:['','']
    }
   
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
<listarProduto Produtos={listaProdutos}/>
    
  
    <Footer desenvolvedor={"Manuela"}/>
    </>
  );
}