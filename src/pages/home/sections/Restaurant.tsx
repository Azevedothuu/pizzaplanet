import { Card } from '@components/card';
import { Typography } from '@components/typography';
import type { JSX } from 'react';
import PhotoRestaurant from '@assets/Restaurant-photo.jpg';
import { Button } from '@components/buttons';
import PhotoBuzz from '@assets/Pizzaplanet-restaurant.jpg';
import PhotoPizza from '@assets/photo-pizza.jpg';

export function Restaurant(): JSX.Element {
  return (
    <section id="restaurant">
      <div className="flex justify-center mt-10 mb-10">
        <Typography variant="h1">Come and see</Typography>
      </div>
      <div className="p-8 flex flex-col md:flex-row gap-8 justify-center items-center">
        <Card
          title="Welcome to Pizza Planet"
          description="Inspired by the Toy Story movie universe, our pizzeria was created 
          with the purpose 
          of rescuing childhood memories and awakening feelings that marked an essential 
          phase of life. 
          Every detail of the environment was designed to lead you to an emotional 
          experience, capable of 
          rekindling the essence of your inner child.
          Pizza Planet values the past and the way good experiences have always been built: around the 
          table, with simplicity, imagination, and connection. Here, more than serving pizzas, we seek to 
          provide moments that bring lightness, nostalgia, and genuine joy.
          Feel at home. Relive memories.
          Pizza Planet is an invitation to reconnect with the childhood that 
          still lives within you."
          image={PhotoBuzz}
          Button={<Button>Make a Reservation</Button>}
          //here, open drawer to reservation form
        />
        <Card
          title="A classic, cozy space made for lingering."
          description="Pizza Planet offers a cozy and classic space, designed so that each customer
           feels truly at ease from the very first moment. The 
          ambiance evokes the atmosphere of traditional pizzerias, where comfort, simplicity, and attention to detail have always 
          been a priority.
          The decor is welcoming, with elements that subtly and elegantly recall childhood, without excess. The soft lighting, 
          the well-distributed layout, and the 
          family atmosphere create an ideal place for quiet conversations, fond memories, and unhurried meals.
          Here, time slows down. Pizza Planet values ​​the old-fashioned way of welcoming guests: tables that bring you closer 
          together, a warm and inviting atmosphere, 
          and the feeling of being in a place made to stay, not just to pass through."
          image={PhotoRestaurant}
        />
        <Card
          title="More than pizza, a timeless experience."
          description="At Pizza Planet, every visit is meant to be memorable. From the aroma that 
          fills the room to the care in every detail, the experience goes beyond the plate. It’s about slowing down, 
          sharing stories, and enjoying moments the way they’ve always been meant to be enjoyed. Our commitment is to 
          quality, tradition, and creating an atmosphere where generations come together. Pizza Planet is not just a destination — 
          it’s a place where memories are made, revisited, and shared, time and time again. Here, comfort meets tradition, and every 
          moment invites you to stay a little longer, just like in the good old days. Because some experiences are meant to be lived 
          calmly, around the table."
          image={PhotoPizza}
        />
      </div>
    </section>
  );
}
