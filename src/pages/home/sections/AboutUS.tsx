import type { JSX } from 'react';
import { Typography } from '@components/typography';
import TeamPizza from '@assets/team-pizza.jpg';
import PastaFood from '@assets/pasta-food.jpg';

export function AboutUS(): JSX.Element {
  return (
    <section id="about-us-section">
      <div>
        <div className="flex justify-center mt-10 mb-10">
          <Typography variant="h1">About Us</Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
          {/* Left Column */}
          <div className="flex flex-col items-center">
            <Typography
              variant="body1"
              className="text-justify font-bold mx-10 pt-4 mb-10"
            >
              We are a fictional team of international exchange students from
              Hoi An, Vietnam, united by our passion for technology, creativity,
              and — of course — pizza. Inspired by the rich culture and vibrant
              spirit of our hometown, we created a project influenced by the
              playful and futuristic world of Pizza Planet. By combining diverse
              skills, perspectives, and ideas, we transform cultural diversity
              into collaboration, learning, and innovation across borders.
            </Typography>
            <img
              src={TeamPizza}
              className="w-full max-w-md rounded-xl"
              alt="pizza planet team"
            />
          </div>
          {/* Right Column */}
          <div className="flex flex-col items-center">
            <Typography variant="body1" className=" font-bold mx-10 pt-4 mb-10">
              We are dedicated to serving our customers in the best way
              possible, always prioritizing quality, respect, and attention to
              every detail. We believe that a great experience is built through
              care, consistency, and genuine dedication. From the moment someone
              interacts with our project to the final result, our goal is to
              deliver something enjoyable, reliable, and meaningful. Inspired by
              the spirit of Pizza Planet, we strive to create an environment
              where people feel welcome, appreciated, and confident in the
              experience we provide.
            </Typography>
            <img
              src={PastaFood}
              alt="Macarrão"
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
