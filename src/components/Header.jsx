import React, { useState, useEffect } from "react";
import { logoDark } from "../assets";
import Container from "./Container";
import { Menu } from "lucide-react";
import { Link } from "react-scroll";
import { navigation } from "../constants";
import { Dialog, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-20 w-full text-whiteText/80 fixed top-0 left-0 z-50 duration-300 ${
        isScrolled ? "bg-blackText" : "bg-transparent"
      }`}
    >
      <Container className="h-full flex items-center justify-between">
        <img src={logoDark} alt="logoDark" className="w-32" />
        <div className="hidden md:inline-flex items-center gap-x-6 uppercase text-xs lg:text-sm font-medium tracking-wide">
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              activeClass="active"
              to={item?.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white duration-200 cursor-pointer relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-whiteText inline-block absolute bottom-0 left-0 -translate-x-[110%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </div>
        <Menu
          onClick={toggleMenu}
          size={25}
          className="hover:text-white cursor-pointer md:hidden"
        />
      </Container>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 md:hidden text-white/80"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/90">
          <DialogPanel className="w-[94%] space-y-4 bg-primary p-6 border border-lightText rounded-md absolute top-10 m-5 bg-black">
            <div className="flex items-center justify-between gap-5">
              <h3 className="font-semibold text-xl">Navigation Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40"
              >
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-5 pt-5 cursor-pointer">
              {navigation?.map((item) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={item?.title}
                  activeClass="active"
                  to={item?.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-white relative group flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-white" />{" "}
                  {item?.title}
                  <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300" />
                </Link>
              ))}
            </div>
            <SocialLinks />
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default Header;
