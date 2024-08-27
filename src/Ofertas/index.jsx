
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../global.css";
import ListarProdutos from "../components/ListarProduto";

export default function Oferta() {
  const [listaProdutos, setProdutos] = useState([
  
    { id: 1, 
      nome: 'Anel', 
      preco2: ' De: R$129,00 ',
      preco: ' Por: R$89,00 ',
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/anel_de_prata_aro_torcido_e_cravejado_28202_1_d7cb122fd11b7e5d3811df29e7a6956c_20230329091701.jpg",
      descrição: 'Prata Torcido Cravejado',
      categoria:['Anel']
    },
    { id: 2, 
      nome: 'Colar', 
      preco2: ' De: R$ 169,90', 
      preco: ' Por: R$ 69,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/colar_de_prata_feminino_lua_e_estrelas_32987_1_2d47667728f317c2638031c3c82ce1a1_20230329091414.jpg",
      descrição: 'Prata Lua e Estrela',
      categoria:['Colar']
    },
    { id: 3, 
      nome: 'Pulseira', 
      preco2: ' De: R$ 76,42 ', 
      preco:' Por: R$ 56,42 ', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/pulseira_de_prata_riviera_estrela_zirconia_azul_41863_1_4a678e65624a19aee9171c89569f9147.jpg",
      descrição: 'Ródio Riviera Estrela Zircônia ',
      categoria:['Pulseira']
    },
    { id: 4, 
      nome: 'Berloque', 
      preco2: ' De: R$ 89,90 ', 
      preco: ' Por: R$ 69,90 ', 
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvhiJeexudwohOEaYPuv2tDL3zDZhEwpO6A&s",
      descrição: 'Prata Chave Zircônia Lilás',
      categoria:['Berloque']
    },
    { id: 5, 
      nome: 'Brinco', 
      preco2: ' De: R$ 124,90', 
      preco: ' Por: R$ 78,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/brinco_de_prata_borboleta_metade_cravejada_colecao_essencia_37197_1_8a79f7bd6eceb34670493b14346462cf_20230329092149.jpg",
      descrição: 'Borboleta de prata Metade Cravejada',
      categoria:['Brinco']
    },
    { id: 6, 
      nome: 'Anel', 
      preco2:' De: R$ 128,90', 
      preco:' Por: R$ 98,90', 
      imagem:"https://images.tcdn.com.br/img/img_prod/1195965/180_anel_de_prata_dois_fio_oval_17957_1_c965f2c3a8ec0bbbc21a74e32bb9b87a_20230329091543.jpg",
      descrição: 'Prata Dois Fios Oval Elegante',
      categoria:['Anel']
    },
    { id: 7, 
      nome: 'Colar', 
      preco2:' De: R$ 119,90',
      preco:' Por: R$ 75,90', 
      imagem:"https://static3.tcdn.com.br/img/editor/up/449226/Colar_de_Prata_Saturno.jpg",
      descrição: 'Colar de Prata Saturno',
      categoria:['Colar']
    },
    { id: 8, 
      nome: 'Pulseira', 
      preco2:' De: R$ 149,90 ', 
      preco:' Por: R$ 85,90 ', 
      imagem:"https://i.pinimg.com/originals/52/d1/30/52d1300b6b700b88d719be65f99694b8.jpg",
      descrição: 'Prata Enfeites de Zircônia',
      categoria:['Pulseira']
    },
    { id: 9, 
      nome: 'Berloque', 
      preco2: ' De: R$ 79,90', 
      preco: ' Por: R$ 50,90', 
      imagem:"https://images.tcdn.com.br/img/editor/up/1195965/berloque_de_prata925_patua_protecao.jpg",
      descrição: 'Prata 925 Patuá Proteção',
      categoria:['Berloque']
    },
    { id: 10, 
      nome: 'Brinco', 
      preco2:' De: $ 119,90', 
      preco: ' Por: R$ 60,90', 
      imagem:"https://static3.tcdn.com.br/img/img_prod/449226/180_brinco_de_prata_corrente_lua_e_estrela_lisa_34950_1_731d487639097a421cda9930fbbffd15_20221125193003.jpg",
      descrição: 'Prata Corrente Lua e Estrela ',
      categoria:['Brinco']
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