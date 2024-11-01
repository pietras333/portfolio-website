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
  const [visiblePage, setVisiblePage] = useState("home");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const CopyMailToClipboard = () => {
    // check if user allows clipboard access
    if (!navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText("wendtpiotr333@gmail.com");

    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 2000);
  };

  const ScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    const portfolioSection = document.getElementById("portfolio");
    const aboutMeSection = document.getElementById("aboutMe");
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsNavbarVisible(!entry.isIntersecting); // Hide navbar when Resume is in view
          if (entry.isIntersecting) {
            setVisiblePage(entry.target.id);
            console.log(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed (0.5 = 50% visibility)
    );
    console.log(visiblePage);

    if (resumeSection) observer.observe(resumeSection);
    if (portfolioSection) observer.observe(portfolioSection);

    if (aboutMeSection) observer.observe(aboutMeSection);
    if (contactSection) observer.observe(contactSection);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (resumeSection) observer.unobserve(resumeSection);
      if (portfolioSection) observer.unobserve(portfolioSection);
      if (aboutMeSection) observer.unobserve(aboutMeSection);
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  return (
    <nav
      className={`w-full z-10 sticky top-0 max-md:h-32 flex justify-around max-md:justify-between max-md:items-center text-3xl max-lg:text-2xl ${
        isAtTop ? "h-32" : "h-52 max-md:h-32"
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
        <li
          onClick={() => ScrollToSection("aboutMe")}
          className={`p-4 bg-[#ebebeb] border-b-4 hover:cursor-pointer ${
            visiblePage === "aboutMe"
              ? `border-[#303030] hover:opacity-100`
              : " hover:border-[#303030] opacity-50 hover:opacity-100 border-transparent"
          }`}
        >
          About
        </li>
        <li
          onClick={() => ScrollToSection("resume")}
          className={`p-4 bg-[#ebebeb] border-b-4 hover:cursor-pointer ${
            visiblePage === "resume"
              ? `border-[#303030] hover:opacity-100`
              : " hover:border-[#303030] opacity-50 hover:opacity-100 border-transparent"
          }`}
        >
          Résumé
        </li>
        <li
          onClick={() => ScrollToSection("portfolio")}
          className={`p-4 bg-[#ebebeb] border-b-4 hover:cursor-pointer ${
            visiblePage === "portfolio"
              ? `border-[#303030] hover:opacity-100`
              : " hover:border-[#303030] opacity-50 hover:opacity-100 border-transparent"
          }`}
        >
          Portfolio
        </li>
        <li
          onClick={() => {
            window.open("mailto:wendtpiotr333@gmail.com");
            CopyMailToClipboard();
          }}
          className="opacity-50 hover:opacity-100 hover:cursor-pointer relative"
        >
          Contact
          <section
            className={`${
              isModalVisible ? "opacity-100" : "opacity-0"
            } absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#ebebeb] text-[#FF006F]`}
          >
            Thanks!
          </section>
        </li>
      </ul>
      <ul className="w-1/3 h-full flex justify-end items-center max-md:hidden">
        <li>
          <a
            href="https://leetcode.com/u/wendtt/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={leetcode}
              className={`opacity-80 hover:cursor-pointer hover:opacity-100 max-xl:w-[60px] max-lg:w-[50px] ${
                isScrolled ? "w-[50px]" : "w-[80px]"
              }`}
              alt="leetcode"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.codewars.com/users/pietras333"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={codewars}
              className={`opacity-80 hover:cursor-pointer hover:opacity-100 max-xl:w-[60px] max-lg:w-[50px] ${
                isScrolled ? "w-[50px]" : "w-[80px]"
              }`}
              alt="codewars"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pietras333"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              className={`opacity-80 hover:cursor-pointer hover:opacity-100 max-xl:w-[60px] max-lg:w-[50px] ${
                isScrolled ? "w-[50px]" : "w-[80px]"
              }`}
              alt="github"
            />
          </a>
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
