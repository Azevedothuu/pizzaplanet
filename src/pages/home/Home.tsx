import type { JSX } from 'react';
import { AboutUS, Hero, Restaurant } from './sections';

export function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <AboutUS />
      <Restaurant />
    </>
  );
}
