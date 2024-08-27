import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../global.css";
import ListarProdutos from "../components/ListarProduto";

export default function Produtos() {
  const [listaProdutos, setProdutos] = useState([
  
    { id: 1, 
      nome: 'Berloque', 
      preco: 'R$68,90', 
      imagem:"https://static3.tcdn.com.br/img/img_prod/449226/berloque_nossa_senhora_aparecida_2750_1_20170606161916.jpg",
      descrição: 'Prata Nossa Senhora Aparecida',
      categoria:['Berloque']
    },
    { id: 2, 
      nome: 'Berloque',
      preco: 'R$ 68,90', 
      imagem:"https://static3.tcdn.com.br/img/img_prod/449226/berloque_divino_espirito_santo_644_1_20170825180110.jpg",
      descrição: 'Pombo que Traz a Sorte pelas Asas Prata',
      categoria:['Berloque']
    },
    { id: 3, 
      nome: 'Berloque', 
      preco: 'R$ 68,90 ', 
      imagem:"https://th.bing.com/th/id/R.b3125887bcbf602e67b92797e65be107?rik=G3jgaRIUXneDPg&pid=ImgRaw&r=0",
      descrição: 'Berloque Coração Cravejado da Sorte',
      categoria:['Berloque']
    },
    { id: 4, 
      nome: 'Berloque',
      preco: 'R$ 68,90 ', 
      imagem:"https://images.tcdn.com.br/img/img_prod/463054/berloque_mapa_mundi_5387_1_64e05a70ff5eb95969096676d2dbb928.jpg",
      descrição: 'Viagem Encantada com o Ceú de Prata',
      categoria:['Berloque']
    },
    { id: 5, 
      nome: 'Berloque', 
      preco: 'R$ 68,90', 
      imagem:"https://static3.tcdn.com.br/img/img_prod/449226/berloque_ceu_e_lua_14651_1_20221125191922.jpg",
      descrição: 'Noite Estrelada de Van Gogh Prata',
      categoria:['Berloque']
    },
    { id: 6, 
      nome: 'Brinco', 
      preco: 'R$ 120,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/180_brinco_de_prata_argola_cravejada_estrela_pendurada_1_2_cm_34101_1_317a1a25c3a830bdf9c6714f8223fded_20230329092116.jpg",
      descrição: 'Cravejado na argola Estrela',
      categoria:['Brinco']
    },
    { id: 7, 
      nome: 'Brinco', 
      preco: 'R$ 124,90', 
      imagem:"https://th.bing.com/th/id/OIP.NNRnrONdyuuB16rGgEimZgHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
      descrição: 'Cravejada na Argola Triangulo',
      categoria:['Brinco']
    },
    { id: 8, 
      nome: 'Brinco', 
      preco: 'R$ 125,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/180_brinco_de_prata_6_pontos_de_luz_pendurados_brilho_crescente_40149_1_eed9b4d795b1a2209315a66ffc09cdc0.jpg",
      descrição: 'Corrente de Prata com Estrela',
      categoria:['Brinco']
    },
    { id: 9, 
      nome: 'Brinco', 
      preco: 'R$ 110,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/brinco_de_prata_lua_e_cristal_azul_37837_1_ea9f7c555f5677e797edf457dd0eccff_20230329092155.jpg",
      descrição: 'Lua Prata e Cristal Azul',
      categoria:['Brinco']
    },
    { id: 10, 
      nome: 'Brinco', 
      preco: 'R$ 100,90', 
      imagem:"https://static3.tcdn.com.br/img/img_prod/449226/brinco_gota_com_bola_de_prata_7996_1_20180609124435.jpg",
      descrição: 'Brinco com Gota de Prata Redondo',
      categoria:['Brinco']
    },
    { id: 11, 
      nome: 'Colar', 
      preco: 'R$ 147,90', 
      imagem:"https://th.bing.com/th/id/OIP.KluYgr2SAtXtjOcZ87hyhwHaHJ?rs=1&pid=ImgDetMain",
      descrição: 'Colar de Lua e Ródio Zultanite Oval',
      categoria:['Colar']
    },
    { id: 12, 
      nome: 'Colar', 
      preco: 'R$ 134,90', 
      imagem:"https://static3.tcdn.com.br/img/img_prod/449226/180_colar_de_prata_estrela_e_conchas_33869_1_b51964021e4ea58dcd1e361c86803b87_20221125192344.jpg",
      descrição: 'Colar de Prata Estrela e Concha',
      categoria:['Brinco']
    },
    { id: 13, 
      nome: 'Anel', 
      preco: 'R$ 100,00', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/anel_de_prata_ceu_azul_ceu_de_prata_14703_1_37b645dfbcb74032fe697af69987a122_20230329091530.jpg",
      descrição: 'Anel de Prata Pedra Ágata Céu Azul',
      categoria:['Anel']
    },
    { id: 14, 
      nome: 'Pulseira', 
      preco: 'R$ 150,90', 
      imagem:"https://i.pinimg.com/originals/b1/b8/27/b1b827d3f6529caab397eb0a0a6cd669.jpg",
      descrição: 'Pulseira de Prata bolinhas e Cruz ',
      categoria:['Pulseira']
    },
    { id: 15, 
      nome: 'Pulseira', 
      preco: 'R$ 190,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/180_pulseira_de_prata_coracoes_coloridos_19cm_40565_1_6a4c5ecaa7d22d367bdb7144e70244f5.jpg",
      descrição: 'Prata Coração Colorida da Amizade',
      categoria:['Pulseira']
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
<ListarProdutos Produtos={listaProdutos}/>
    
  
<Footer Creditos={"Manuela Soares Pacheco"}/>
    </>
  );
}