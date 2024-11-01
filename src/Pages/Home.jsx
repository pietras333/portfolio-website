import charSitting from "../Assets/char-sitting.png";
import arrow from "../Assets/arrow.png";

const Home = () => {
  const ScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className="w-full h-screen flex flex-col bg-[#ebebeb]">
      <section className="w-full h-full flex flex-col bg-dotGrid bg-cover">
        <section className="w-full h-full flex max-md:flex-col">
          <section className="home-left h-full w-1/2 max-md:h-1/2 flex flex-col justify-start items-center max-xl:w-full max-md:items-start ">
            <section className="max-xl:ml-10">
              <caption className="w-full mt-10 flex text-3xl max-lg:text-xl max-md:text-lg font-light bg-[#ebebeb]">
                Wendt Piotr
              </caption>
              <h1 className="text-7xl max-md:text-5xl max-xl:text-6xl max-lg:text-5xl max-md:leading-loose max-md:bg-transparent leading-snug font-semibold bg-[#ebebeb]">
                Programmer <br />
                from <br className="hidden max-lg:block" />{" "}
                <span className="bg-vector1 bg-contain bg-no-repeat bg-bottom">
                  Poland
                </span>
              </h1>
              <p className="text-xl mt-8 opacity-50 w-[600px] h-[60px] bg-[#ebebeb] max-md:text-xs max-xl:text-lg max-md:w-full">
                Mastering new languages, exploring technologies, or building
                projects -I make every second count
              </p>
              <button className="mt-8 max-md:mt-0 w-[260px] max-md:w-[200px] h-[60px] max-xl:w-[220px] bg-[#00A8FF] text-2xl max-md:text-lg max-xl:text-lg text-white font-light opacity-80 max-md:opacity-80 hover:opacity-100">
                Résumé
              </button>
            </section>
          </section>
          <section className="home-right w-1/2 max-md:w-full max-md:h-1/2 h-full flex flex-col justify-center items-center relative">
            <img
              src={charSitting}
              alt="character sitting with laptop"
              className="w-[600px] max-lg:hidden max-xl:w-[400px]"
            />
            <button
              onClick={() => ScrollToSection("aboutMe")}
              className="max-xl:hidden opacity-50 hover:opacity-100 absolute right-16 bottom-16 max-lg:right-8 max-md:text-sm tracking-widest max-lg:w-[200px]  flex flex-col justify-center items-center"
            >
              <img
                src={arrow}
                alt="arrow down"
                className="w-[90px] h-[90px] max-md:w-[40px] max-md:h-[40px] max-lg:w-[50px] max-lg:h-[50px] "
              />
              Scroll Down
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Home;
