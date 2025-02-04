'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChampionLore from '../ChampionLore/ChampionLore';

const champions = [
  {
    name: "Aphelios",
    image: "/Apelhios.jpeg",
    lore: "Aphelios, o Arma dos Fiéis, luta em silêncio e mata seus inimigos com um arsenal de armas de pedra lunar."
  },
  {
    name: "Jinx",
    image: "/Jinx.jpg",
    lore: "Jinx, a Geniáca do Caos, é uma criminosa maníaca que vive para espalhar destruição e pânico por Piltover e Zaun."
  },
  {
    name: "Rek'Sai",
    image: "/RekSai.jpg",
    lore: "Rek'Sai, a Rainha da Xer'Sai, é uma predadora voraz que ronda as areias de Shurima em busca de presas."
  }
];
 const Carousel = () => {

      const [currentChampion, setCurrentChampion] = useState(champions[0]);

      const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (_: number, next: number) => setCurrentChampion(champions[next])
      };


      return(
        <div className='w-full max-w-4x1 mx-auto'>
          <Slider {...settings}>
            {champions.map((champion, index) => (
              <div key={index}>
                <img src={champion.image} alt={champion.name} className='-full h-64 object-cover rounded-lg' />
              </div>
            ))}
          </Slider>
          <ChampionLore name={currentChampion.name} lore={currentChampion.lore} />
        </div>
      )
 }

 export default Carousel;