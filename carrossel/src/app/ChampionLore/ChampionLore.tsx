// components/ChampionLore.tsx
import React from 'react';

type ChampionLoreProps = {
  name: string;
  lore: string;
};

const ChampionLore: React.FC<ChampionLoreProps> = ({ name, lore }) => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-2">{lore}</p>
    </div>
  );
};

export default ChampionLore;
