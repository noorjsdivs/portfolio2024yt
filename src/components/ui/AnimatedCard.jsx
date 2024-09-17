import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function AnimatedCard({ item }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-lightDarkBg relative group/card  dark:hover:shadow-2xl border-black/[0.1] h-auto rounded-xl p-6 border hover:bg-redBg/90 duration-500 ease-in-out">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {item?.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={item?.image}
            className="32 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Get Offer
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
