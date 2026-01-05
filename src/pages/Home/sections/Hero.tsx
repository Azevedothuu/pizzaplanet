import type { JSX } from 'react';
import backgroundImage from '@assets/Hero-bg.jpg';
import Icon from '@assets/PizzaPlanet-icon.png';
import { Navbar } from '@components/navbar';
import { Button } from '@components/buttons';

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
      {/* Image */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <div className="flex justify-center items-center flex-col pt-20 ">
          <div className='flex flex-col items-center gap-20 text-center px-4 '>
            <img
            src={Icon}
            alt="Icone"
            className="w-auto h-full"
            />
            <a href="#about-us-section" className="transition-all duration-300 hover:scale-120">
              <Button>Meet US</Button>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
