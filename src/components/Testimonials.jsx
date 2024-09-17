import { Tabs } from "../components/ui/tabs";
import { featureDeal, featureOne } from "../assets/index";
import { Star } from "lucide-react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-redBg to-lightDarkBg">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-redBg to-lightDarkBg">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-redBg to-lightDarkBg">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-redBg to-lightDarkBg">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-redBg to-lightDarkBg">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <section
      id="testimony"
      className="bg-testimonial-image bg-center bg-no-repeat bg-cover pt-20 pb-40"
    >
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}

const DummyContent = () => {
  return (
    <div className=" bg-lightDarkBg mt-10 h-[80%] p-5 md:p-10 rounded-lg flex flex-col gap-2 md:gap-5 justify-center">
      <div className="hidden md:inline-flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star fill="#b90807" color="#b90807" />
          <Star fill="#b90807" color="#b90807" />
          <Star fill="#b90807" color="#b90807" />
          <Star fill="#b90807" color="#b90807" />
          <Star fill="#b90807" color="#b90807" />
        </div>
        <Quote fill="#3c3c3c" color="#3c3c3c" size={60} />
      </div>
      <div className="border-b pb-5 border-b-[#2f2f2f]">
        <p className="text-sm md:text-lg font-normal text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui pariatur
          accusamus excepturi quam laudantium fugit sint nostrum doloremque
          tempore dolore? Dolorem cum rerum ullam enim, nostrum dolore! Fugit,
          debitis officia.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={featureDeal}
          alt="image"
          className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover"
        />
        <div>
          <p className="text-lg md:text-2xl">Rachel Jackson</p>
          <p className="text-sm md:text-base font-medium">New York</p>
        </div>
      </div>
    </div>
    // <img
    //   src={featureOne}
    //   alt="dummy image"
    //   width="1000"
    //   height="1000"
    //   className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    // />
  );
};
