import Header from '../components/Header';
import Footer from '../components/Footer';
import '../global.css';
import ListarProdutos from '../components/ListarProduto';
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home() {
    const [listaProdutos, setProdutos] = useState([
        { id: 1, 
            nome: 'Anel', preco: 'R$69,90', 
            imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTot7HB8TqHe2VO_5Kvm9yumhWtjfkS_RiY4Q&s",
            descrição: 'Anel de prata seta lisa',
          },
          { id: 2, 
            nome: 'Anel', preco: 'R$169,90 ', 
            imagem:"https://images.tcdn.com.br/img/img_prod/1195965/anel_de_prata_rodio_zultanite_oval_cravejado_40609_1_144bdd1c76aaf0c015ad2138d1fca8c4.jpg",
            descrição: 'Anel de Prata Banhado a Ródio Zultanite Oval Cravejado',
          },
          { id: 3, 
            nome: 'Anel', preco: 'R$95,90', 
            imagem:"https://images.tcdn.com.br/img/img_prod/1195965/anel_de_prata_retangulo_azul_16051_1_8f07d39c73b714c8ee6ca1b11278c0d5_20230329091537.jpg",
            descrição: 'Anel de Prata Retângulo Azul',
          },
          { id: 4, 
            nome: 'Anel', preco: 'R$ 74,90  ', 
            imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUVegPsVIqk_OG6f96KG7_ihLFM3QS8GuNw&s",
            descrição: 'Anel de Prata Nó de Coração',
          },
          { id: 5, 
            nome: 'Anel', preco: 'R$109,90  ', 
            imagem:"https://images.tcdn.com.br/img/img_prod/1195965/anel_de_prata_aro_patinhas_esmaltadas_32689_1_b2ab9512b94911baaa07a5ae5ca93e44_20230329091758.jpg",
            descrição: 'Anel de Prata Aro Patinhas Esmaltadas',
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

    return(

        <>
         <Header/>
        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
             >
                
                <div>
                    <img class="carousel" src="https://static3.tcdn.com.br/img/img_prod/449226/1617281209_banner_berloques.jpg" alt="Slide 2" />
                </div>
                
                <div>
                    <img class="carousel" src="https://static3.tcdn.com.br/img/img_prod/449226/1617281927_banner_personalizados.jpg" alt="Slide 3" />
                </div>

                

            </Carousel>
            <ListarProdutos Produtos={listaProdutos}/>
    
            <Footer Creditos={"Manuela Soares Pacheco"}/>
        </>
    );
}