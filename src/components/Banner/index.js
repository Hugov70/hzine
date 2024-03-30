import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerGym from "../.././imagens/bannerGym.jpg";
import BannerGym2 from "../.././imagens/bannerGym2.jpg";

import { Bannerr } from './styled';


export default function Banner (){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Bannerr>
          <div className='carrossel'>
      <Slider {...settings}>
        <div>
          <img src={BannerGym} />
        </div>
        <div>
        <img src={BannerGym2} />
        </div>
      </Slider>
    </div>
    </Bannerr>
  );
};

