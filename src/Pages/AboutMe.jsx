import arrow from "../Assets/arrow.png";
import charUpStairs from "../Assets/charUpStairs.png";

const AboutMe = () => {
  const ScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="aboutMe"
      className="w-full h-screen flex flex-col bg-[#ebebeb] relative"
    >
      <section className="w-full h-fit flex  max-xl:flex-col-reverse">
        <section className="home-left h-fit w-1/2 max-md:h-3/4 flex flex-col justify-start items-start pl-32 max-md:pl-0 max-xl:w-full max-md:items-center max-md:justify-start ">
          <img
            src={charUpStairs}
            alt="character moving up stairs"
            className="hidden max-md:w-[200px] max-md:block max-md:opacity-75"
          />
          <caption className="max-lg:text-base text-2xl mt-44 max-md:w-3/4 max-md:m-0 opacity-50 max-lg:w-3/4 w-[800px] h-[60px] text-start bg-[#ebebeb] max-md:text-xs max-xl:text-lg">
            Mastering new languages, exploring technologies, or building
            projects -I make every second count
          </caption>
          <p className="text-xl max-xl:text-right max-lg:text-left mt-8 max-md:mt-0 opacity-100 w-[600px] h-[60px] max-md:text-sm max-md:h-fit max-xl:text-lg max-md:w-4/5">
            I'm Piotr Wendt, an 18-year-old developer from Poland with a
            lifelong passion for computers. I began my journey at age 12,
            starting with <span className="text-[#00A8FF]">Scratch</span> and
            soon moving on to desktop development with
            <span className="text-[#00A8FF]"> .NET</span> and
            <span className="text-[#00A8FF]"> C#</span>. After dabbling in game
            development with{" "}
            <span className="text-[#00A8FF]">Unreal Engine</span>, I shifted to
            <span className="text-[#00A8FF]"> Unity</span>, applying my C#
            skills to create simple games. My interest then expanded to web
            development, where I learned
            <span className="text-[#00A8FF]"> HTML</span>,
            <span className="text-[#00A8FF]"> CSS</span>,
            <span className="text-[#00A8FF]"> JavaScript</span>, and
            <span className="text-[#00A8FF]"> React</span>, building several web
            apps. I later explored full-stack development using
            <span className="text-[#00A8FF]"> Node.js</span>,
            <span className="text-[#00A8FF]"> Express</span>,
            <span className="text-[#00A8FF]"> MongoDB</span>, and
            <span className="text-[#00A8FF]"> Tailwind CSS</span>. Along the
            way, I documented my progress on
            <span className="text-[#00A8FF]"> GitHub</span> using
            <span className="text-[#00A8FF]"> GIT</span> and completed courses
            on CodeCademy. Recently, I graduated from Technical School as an IT
            Specialist, gaining valuable hands-on experience through internships
            and passing exams in hardware, software,
            <span className="text-[#FF006F]"> programming</span>, and database
            design.
          </p>
        </section>
        <section className="home-right max-xl:items-center max-xl:w-full max-xl:flex-row max-xl:h-1/6 w-1/2  max-xl:justify-center h-full flex flex-col justify-start items-end relative">
          <h2 className="text-5xl mt-52 max-md:mt-10 mr-52 max-xl:mt-52 max-xl:mr-0 max-md:text-5xl max-xl:text-6xl max-lg:text-5xl max-md:leading-loose max-md:bg-transparent leading-snug font-semibold bg-[#ebebeb]">
            <span className="bg-vector2 bg-contain bg-no-repeat bg-bottom">
              About Me
            </span>
          </h2>
          <img
            src={charUpStairs}
            alt="character moving up stairs"
            className="w-[600px] max-xl:hidden max-xl:w-[400px] mr-52 mt-[-5rem]"
          />
        </section>
      </section>
      <button
        onClick={() => ScrollToSection("resume")}
        className="max-lg:hidden opacity-50 hover:opacity-100 absolute right-0 left-0 max-xl:right-20 max-xl:left-auto bottom-10 max-lg:right-8 max-md:text-sm tracking-widest max-lg:w-[200px]  flex flex-col justify-center items-center"
      >
        <img
          src={arrow}
          alt="arrow down"
          className="w-[90px] h-[90px] max-md:w-[40px] max-md:h-[40px] max-lg:w-[50px] max-lg:h-[50px]"
        />
        Let's go down
      </button>
    </section>
  );
};

export default AboutMe;
