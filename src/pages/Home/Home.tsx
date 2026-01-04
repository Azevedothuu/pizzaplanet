import type { JSX } from 'react';
import { AboutUS, Hero } from './sections';

export function Home(): JSX.Element {
  return (
    <>
    <Hero />
    <AboutUS />
    </>
  );
}