"use client";

import React from "react";

import { InfiniteMovingCards } from "./UI/infiniteCards";

const Testimonial = () => {
  const HERO_TEXT = "Testimonial";
  const testimonials = [
    {
      quote:
        "This app is a lifesaver! As someone who frequents Metro Vancouver, finding a clean and accessible washroom has always been a challenge. This app makes it so easy and convenient. I love that it shows the 3 closest washrooms near my location.",
      name: "Atsuki",
      title: "Frequent Traveler",
    },
    {
      quote:
        "I used to struggle with finding washrooms in the city, especially when I'm with my kids. This app has made our outings stress-free. It quickly finds the nearest washrooms and provides all the necessary details.",
      name: "James Peterson",
      title: "Parent",
    },
    {
      quote:
        "An incredible tool for anyone in Metro Vancouver. Whether you're a local or a visitor, this app is essential. It not only shows the nearest washrooms but also ensures they are clean and accessible. Highly recommend it!",
      name: "Sophia Lee",
      title: "Local Resident",
    },
    {
      quote:
        "As a senior, having quick access to washroom information is crucial. This app has been a great help. It shows the closest facilities and gives me peace of mind when I'm out and about.",
      name: "John Smith",
      title: "Senior Citizen",
    },
    {
      quote:
        "This app has truly transformed my experience in Metro Vancouver. No more wandering around in search of a washroom. It's quick, accurate, and user-friendly. A must-have app for everyone!",
      name: "Linda Williams",
      title: "Tourist",
    },
  ];

  return (
    <section
      id="testimonial"
      className="p-6 my-12 flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
        {HERO_TEXT}
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
