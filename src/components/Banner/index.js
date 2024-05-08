import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerMainLandscape from '../../imagens/banners/bannerMainLandscape.png';
import bannerMainPortrait from '../../imagens/banners/bannerMainPortrait.png'
import bannerMain2Landscape from '../../imagens/banners/bannerMain2Landscape.png';
import bannerMain2Portrait from '../../imagens/banners/bannerMain2Portrait.png';

import { Bannerr } from './styled';


export default function Banner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            {window.innerWidth >= 600 ? <img src={bannerMainLandscape} /> : <img src={bannerMainPortrait} />}
          </div>
          <div>
            {window.innerWidth >= 600 ? <img src={bannerMain2Landscape} /> : <img src={bannerMain2Portrait} />}
          </div>
        </Slider>
      </div>
    </Bannerr>
  );
};

