import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RoupasIcon from '../../imagens/icons/camiseta.png';
import SuplementosIcon from '../../imagens/icons/proteina.png';
import AcessoriosIcon from '../../imagens/icons/acessorios.png';

import { CarrosselP } from './styled';



export default function CarrosselProdutos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],

  };

  return (
    <CarrosselP>
      <div className='carrosselProdutos'>
        <h2>Produtos</h2>

        <Slider {...settings}>
          <div>
            <img src={RoupasIcon} />
          </div>
          <div>
            <img src={SuplementosIcon} />
          </div>
          <div>
            <img src={AcessoriosIcon} />
          </div>
        </Slider>
      </div>
    </CarrosselP>

  );
};



