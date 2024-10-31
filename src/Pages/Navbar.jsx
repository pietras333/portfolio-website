import code from "../Assets/Icons/code.png";
import leetcode from "../Assets/Icons/leetcode.png";
import codewars from "../Assets/Icons/codewars.png";
import github from "../Assets/Icons/github.png";
import hamburger from "../Assets/Icons/hamburger.png";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if the user has scrolled from the top
      if (scrollPosition > 0) {
        setIsScrolled(true);
        setIsAtTop(false);
      } else {
        setIsScrolled(false);
        setIsAtTop(true);
      }
    };

    const resumeSection = document.getElementById("resume");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsNavbarVisible(!entry.isIntersecting); // Hide navbar when Resume is in view
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed (0.5 = 50% visibility)
    );

    if (resumeSection) observer.observe(resumeSection);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (resumeSection) observer.unobserve(resumeSection);
    };
  }, []);

  return (
    <nav
      className={`w-full  z-10 sticky top-0 h-52 max-md:h-32 flex justify-around max-md:justify-between max-md:items-center text-3xl max-lg:text-2xl ${
        isScrolled ? "opacity-70 h-32" : "opacity-100 h-52 max-md:h-32 "
      } bg-[#ebebeb] ${isNavbarVisible ? "opacity-100" : "opacity-0"}`}
    >
      <ul className="w-1/8 max-md:w-fit  h-full flex justify-start items-center ">
        <img
          src={code}
          alt="code"
          className="opacity-60 max-md:w-[40px] max-xl:w-[60px] max-lg:w-[50px] ml-10"
        />
      </ul>
      <ul className="w-1/3 max-xl:text-lg max-lg:text-base h-full flex justify-around items-center max-md:hidden">
        <li className="p-4 bg-[#ebebeb] border-b-4 border-transparent hover:cursor-pointer hover:border-[#303030] opacity-50 hover:opacity-100">
          About
        </li>
        <li className="p-4 bg-[#ebebeb] border-b-4 border-transparent hover:cursor-pointer hover:border-[#303030] opacity-50 hover:opacity-100">
          Résumé
        </li>
        <li className="p-4 bg-[#ebebeb] border-b-4 border-transparent hover:cursor-pointer hover:border-[#303030] opacity-50 hover:opacity-100">
          Projects
        </li>
        <li className="p-4 bg-[#ebebeb] border-b-4 border-transparent hover:cursor-pointer hover:border-[#303030] opacity-50 hover:opacity-100">
          Contact
        </li>
      </ul>
      <ul className="w-1/3 h-full flex justify-end items-center max-md:hidden">
        <li>
          <img
            src={leetcode}
            className={`opacity-80 hover:cursor-pointer hover:opacity-100 max-xl:w-[60px] max-lg:w-[50px] ${
              isScrolled ? "w-[50px]" : "w-[80px]"
            }`}
            alt="leetcode"
          />
        </li>
        <li>
          <img
            src={codewars}
            className={`opacity-80 hover:cursor-pointer hover:opacity-100 max-xl:w-[60px] max-lg:w-[50px] ${
              isScrolled ? "w-[50px]" : "w-[80px]"
            }`}
            alt="codewars"
          />
        </li>
        <li>
          <img
            src={github}
            className={`opacity-80 hover:cursor-pointer hover:opacity-100 max-xl:w-[60px] max-lg:w-[50px] ${
              isScrolled ? "w-[50px]" : "w-[80px]"
            }`}
            alt="github"
          />
        </li>
      </ul>
      <img
        src={hamburger}
        className="opacity-60 hidden max-md:block w-[40px] h-[40px] mr-10"
        alt="hamburger"
      />
    </nav>
  );
};

export default Navbar;
