import Project from "../Components/Project";
import LinkIcon from "../Assets/Icons/link.png";
import Arrow from "../Assets/arrow.png";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full h-screen max-xl:h-fit flex flex-col max-xl:flex-col relative"
    >
      <section className="w-full h-2/3 max-xl:h-fit max-xl:flex max-xl:flex-col max-xl:items-center">
        <h2 className="text-3xl max-xl:p-4 mt-[2%] pl-[15%] font-light max-xl:w-full max-xl:mt-[2%] max-xl:text-left">
          Portfolio
        </h2>
        <ol className="pl-[15%] mt-[2%] max-xl:w-11/12 w-full h-2/3 max-xl:h-fit flex flex-col flex-wrap mr-[15%] max-xl:m-0 max-xl:p-0 max-xl:flex-nowrap">
          <Project name={"Weather App"} technologiesIcons={["react", "js"]} />
          <Project
            name={"Unit Converter"}
            technologiesIcons={["react", "js"]}
          />
          <Project
            name={"Productivity App"}
            technologiesIcons={["react", "js", "nodejs", "mongo", "csharp"]}
          />
          <Project name={"React Login"} technologiesIcons={["react", "js"]} />
          <Project
            name={"Horror Game"}
            technologiesIcons={["csharp", "unity"]}
          />
          <Project name={"JS Slider"} technologiesIcons={["js"]} />
          <Project name={"FPS Game"} technologiesIcons={["csharp", "unity"]} />
          <Project
            name={"Codewars Solutions"}
            technologiesIcons={["js", "csharp"]}
          />
          <Project
            name={"Unity Scripts"}
            technologiesIcons={["csharp", "unity"]}
          />
          <Project
            name={"Expense Tracker"}
            technologiesIcons={["react", "js"]}
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
      </section>
      <button className="max-lg:hidden opacity-50 hover:opacity-100 absolute right-32 max-xl:right-20 max-xl:left-auto bottom-10 max-lg:right-8 max-md:text-sm tracking-widest max-lg:w-[200px]  flex flex-col justify-center items-center">
        <img
          src={Arrow}
          alt="Arrow down"
          className="w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px] max-lg:w-[50px] max-lg:h-[50px]"
        />
        Reach Out
      </button>
    </section>
  );
};

export default Portfolio;
