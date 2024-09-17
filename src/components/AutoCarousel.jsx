import React from "react";
import { Card, Carousel } from "./ui/cards";
import SectionTitle from "./SectionTitle";
import {
  featureDeal,
  featureFour,
  featureOne,
  featureThree,
  featureTwo,
} from "../assets";

export function AutoCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-darkBg text-center">
      <SectionTitle no="03" title="Features" className="justify-center" />
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get all of our Features deal
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src={featureOne}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md mt-5"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Fashion next stage",
    title: "You can do more with AI.",
    src: featureDeal,
    content: <DummyContent />,
  },
  {
    category: "Summer Sadness",
    title: "Enhance your productivity.",
    src: featureTwo,
    content: <DummyContent />,
  },
  {
    category: "Drowning Aqua Silk",
    title: "Launching the new Apple Vision Pro.",
    src: featureThree,
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: featureFour,
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: featureOne,
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: featureDeal,
    content: <featureDeal />,
  },
];
