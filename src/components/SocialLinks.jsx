import { Linkedin } from "lucide-react";
import { MailSearch } from "lucide-react";
import { Github, Youtube, Facebook } from "lucide-react";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="text-xl pt-2 text-white/50 flex items-center gap-x-2">
      <a
        href="https://github.com/"
        className="border border-white/20 inline-flex p-2 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
      >
        <Github />
      </a>
      <a
        href="https://www.youtube.com/@reactjsBD"
        className="border border-white/20 inline-flex p-2 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
      >
        <Youtube />
      </a>
      <a
        href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
        className="border border-white/20 inline-flex p-2 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
      >
        <Linkedin />
      </a>
      <a
        href="https://www.youtube.com/@reactjsBD"
        className="border border-white/20 inline-flex p-2 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
      >
        <Facebook />
      </a>
      <a
        href="https://www.youtube.com/@reactjsBD"
        className="border border-white/20 inline-flex p-2 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
      >
        <MailSearch />
      </a>
    </div>
  );
};

export default SocialLinks;
