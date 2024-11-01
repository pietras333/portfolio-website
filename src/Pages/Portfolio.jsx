import { useState } from "react";
import Project from "../Components/Project";
import LinkIcon from "../Assets/Icons/link.png";
import ArrowLeft from "../Assets/Icons/arrowLeft.png";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const CopyMailToClipboard = () => {
    navigator.clipboard.writeText("wendtpiotr333@gmail.com");
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <section
      id="portfolio"
      className="w-full h-screen max-xl:h-screen flex flex-col max-xl:flex-col relative"
    >
      <section className="w-full h-2/3 max-xl:h-fit max-xl:flex max-xl:flex-col max-xl:items-center">
        <h2 className="text-3xl max-xl:p-4 mt-[2%] pl-[15%] font-light max-xl:w-full max-xl:mt-[2%] max-xl:text-left">
          Portfolio
        </h2>
        <ol className="pl-[15%] mt-[2%] max-xl:w-11/12 w-full h-2/3 max-xl:h-fit flex flex-col flex-wrap mr-[15%] max-xl:m-0 max-xl:p-0 max-xl:flex-nowrap">
          <Project
            name={"Weather App"}
            technologiesIcons={["react", "js"]}
            url={"https://github.com/pietras333/weather-app-react"}
          />
          <Project
            name={"Unit Converter"}
            technologiesIcons={["react", "js"]}
            url={"https://github.com/pietras333/unit-converter"}
          />
          <Project
            name={"Productivity App"}
            technologiesIcons={["react", "js", "nodejs", "mongo", "csharp"]}
            url={"https://github.com/pietras333/productivity-app"}
          />
          <Project
            name={"React Login"}
            technologiesIcons={["react", "js"]}
            url={"https://github.com/pietras333/basic-login-control-react"}
          />
          <Project
            name={"Horror Game"}
            technologiesIcons={["csharp", "unity"]}
            url={"https://github.com/pietras333/horror-school-project"}
          />
          <Project
            name={"JS Slider"}
            technologiesIcons={["js"]}
            url={"https://github.com/pietras333/js-slider"}
          />
          <Project
            name={"FPS Game"}
            technologiesIcons={["csharp", "unity"]}
            url={"https://github.com/pietras333/flailberts-funhouse"}
          />
          <Project
            name={"Codewars Solutions"}
            technologiesIcons={["js", "csharp"]}
            url={"https://github.com/pietras333/codewars-solutions"}
          />
          <Project
            name={"Unity Scripts"}
            technologiesIcons={["csharp", "unity"]}
            url={"https://github.com/pietras333/unity-scripts-csharp"}
          />
          <Project
            name={"Expense Tracker"}
            technologiesIcons={["react", "js"]}
            url={"https://github.com/pietras333/expense-tracker-react"}
          />
        </ol>
        <caption className="flex opacity-50 pl-[15%] max-xl:p-0 max-xl:text-xs max-xl:items-center max-xl:hidden">
          Click the &nbsp;
          <img
            src={LinkIcon}
            alt="Link icon"
            className="w-[30px] h-[30px] max-xl:w-[15px] max-xl:h-[15px]"
          />
          &nbsp; symbol to move to &nbsp;
          <span className="text-[#FF006F]">GitHub</span>
          &nbsp; repository with this project.
        </caption>
      </section>
      <section className="w-full h-1/3 max-xl:hidden">
        <h3 className="pl-[15%] text-6xl font-bold">
          Coding is about making <br /> solutions that work
        </h3>
        {/* bg-[#e84118] */}
      </section>

      <section className="absolute max-lg:static max-lg:p-4 max-lg:bg-[#303030] max-lg:justify-between max-lg:text-[#ebebeb] max-lg:w-full max-lg:right-0 right-32 max-xl:right-20 max-xl:left-auto bottom-10 max-md:text-sm tracking-widest flex justify-center items-center">
        <p
          onClick={CopyMailToClipboard}
          className="max-lg:text-[#00A8FF] max-lg:hover:border-b-[#00A8FF] max-lg:border-b-[#00A8FF] text-[#e84118] border-b-[#e84118] hover:max-lg:border-b-transparent max-lg:mr-1 max-lg:text-xs border-b-2 border-transparent relative hover:cursor-pointer"
        >
          wendtpiotr333@gmail.com
          <caption
            className={`${
              showModal ? "opacity-100" : "opacity-0"
            } bg-[#ebebeb] absolute max-lg:bg-[#303030] text-left hover:max-lg:border-b-[#303030] top-0 left-0 w-full transition-opacity duration-300`}
          >
            Copied to clipboard
          </caption>
        </p>
        <button
          onClick={() => window.open("mailto:wendtpiotr333@gmail.com")}
          className="flex flex-col justify-center items-center max-lg:ml-1 opacity-50 hover:opacity-100 max-lg:opacity-100 max-lg:bg-[#00A8FF] max-lg:rounded-lg max-lg:flex-row-reverse max-lg:p-4 max-lg:w-1/2"
        >
          <img
            src={ArrowLeft}
            alt="Arrow down and left"
            className="w-[60px] h-[60px] max-lg:w-[20px] max-lg:h-[20px] max-lg:invert"
          />
          <p className="max-lg:text-xs w-full">Reach Out</p>
        </button>
      </section>
    </section>
  );
};

export default Portfolio;
