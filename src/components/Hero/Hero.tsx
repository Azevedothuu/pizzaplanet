import type { JSX } from 'react';
import backgroundImage from '../../assets/Hero-bg.jpg';
import Icon from '../../assets/PizzaPlanet-icon.png';

import { Navbar } from '../navbar';

export function Hero(): JSX.Element {
  return (
    <section
      className="relative flex h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Imagem escurecida */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo da Hero  */}
      <div className="relative z-10 w-full">
        <Navbar />
        <div className="flex justify-center items-center flex-col gap-8">
          <div>
            <img
            src={Icon}
            alt="Icone"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-90 h-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
