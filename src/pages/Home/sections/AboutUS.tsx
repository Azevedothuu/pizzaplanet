import type { JSX } from "react";
import { Typography } from "@components/typography";
import TeamPizza from "@assets/team-pizza.jpg";
import PastaFood from "@assets/pasta-food.jpg";

export function AboutUS(): JSX.Element {
  return (
    <section id="about-us-section">
      <div>
        <div className="flex justify-center mt-10 mb-10">
          <Typography 
          variant="h1"          
          >About Us
          </Typography>
        </div>
        <div className="grid grid-cols-2 p-2 gap-2">
          {/* Left Column */}
          <div className="flex flex-col items-center">
            <Typography variant="body1" className="text-justify mx-10 mb-10">
              We are a fictional team of international exchange students from
              Hoi An, Vietnam, united by our passion for technology, creativity,
              and — of course — pizza. Coming from a city known for its rich
              culture, historic streets, and vibrant flavors, we brought our
              background and experiences together to create a project inspired
              by the playful and futuristic spirit of Pizza Planet. Each member
              of our team contributes with different skills, perspectives, and
              ideas, transforming our cultural diversity into innovation. This
              project represents more than just a creative exercise — it is a
              symbol of collaboration, learning, and the exchange of knowledge
              across borders. Just like Pizza Planet, we believe that great
              ideas are born when imagination, teamwork, and fun come together.
            </Typography>
            <img 
            src={TeamPizza} 
            className="w-lg rounded-xl" 
            alt="pizza planet team" 
            />
          </div>
          {/* Right Column */}
          <div  className="flex flex-col items-center">
            <Typography variant="body1" className="mb-5">
              We are dedicated to serving our customers in the best way possible,
              always prioritizing quality, respect, and attention to every detail.
              We believe that a great experience is built through care,
              consistency, and genuine dedication. From the moment someone
              interacts with our project to the final result, our goal is to
              deliver something enjoyable, reliable, and meaningful. Inspired by
              the spirit of Pizza Planet, we strive to create an environment where
              people feel welcome, appreciated, and confident in the experience we
              provide.
            </Typography>
            <img 
            src={PastaFood} 
            alt="Macarrão" 
            className="rounded-xl w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
