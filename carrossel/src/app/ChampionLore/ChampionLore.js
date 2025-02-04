// components/Carousel.tsx
'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChampionLore from '@/components/ChampionLore';

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