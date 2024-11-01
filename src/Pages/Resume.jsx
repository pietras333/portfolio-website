import CiscoLogo from "../Assets/Icons/cisco-logo.png";
import CodeLogo from "../Assets/Icons/code-logo.png";
import CodecademyLogo from "../Assets/Icons/codecademy-logo.png";
import ZSTLogo from "../Assets/Icons/zst-logo.png";
import Arrow from "../Assets/arrow.png";
import { motion } from "framer-motion";

const Resume = () => {
  const ScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="resume"
      className="w-full h-screen max-xl:h-fit flex flex-col bg-[#ebebeb] relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl font-light flex flex-col justify-center items-center h-[20%] max-xl:h-[5%] leading-snug bg-[#ebebeb]"
      >
        <h3 className="font-normal opacity-50 tracking-widest text-2xl">
          Wendt Piotr
        </h3>
        Résumé
      </motion.h2>
      <section className="w-full h-[80%] flex max-xl:flex-col">
        <section className="w-1/5 h-full flex flex-col max-xl:w-full p-4 text-[#303030]">
          <h2 className="text-3xl opacity-70 h-[10%]">Education</h2>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full text-xl"
          >
            Zespół Szkół Technicznych <br /> im. Hipolita Cegielskiego w Pile
          </motion.h3>
          <ol className="flex flex-col text-xl h-[30%]">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Date of Graduation: 2025
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Diploma in Information Technology
            </motion.li>
          </ol>
          <p className="text-xl mt-4">Areas of Study</p>
          <ol className="flex flex-col text-xl h-[70%]">
            <motion.li
              className="opacity-60"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Web Development
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Network Theory
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Databse Managment
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Software & Hardware Fundamentals
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Proficency in English Language
            </motion.li>
          </ol>
        </section>
        <section className="w-1/5 h-full flex flex-col max-xl:w-full p-4 text-[#303030] ">
          <h2 className="text-3xl opacity-70 h-[10%]">Certifications</h2>
          <caption className="max-xl:hidden font-light text-sm opacity-50 w-full text-left">
            Hover & Click to download the documents
          </caption>
          <ol className="flex flex-col w-full h-[90%] ">
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-5/6 items-center "
            >
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Fundamentals Of
                Cybersecurity Skill Path
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-5/6 items-center"
            >
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Introduction to
                Game Development Course
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.25 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-5/6 items-center"
            >
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Learn C# Course
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-5/6 items-center"
            >
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Learn Git & GitHub
                Course
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.35 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-5/6 items-center"
            >
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Learn How To Code
                Course
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-5/6 items-center"
            >
              <img
                src={CiscoLogo}
                alt="Cisco academy Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2023&nbsp;</span>Introduction to
                Cybersecurity
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.45 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-5/6 items-center"
            >
              <img
                src={ZSTLogo}
                alt="ZST School Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2022&nbsp;</span>Introduction to IoT
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-5/6 items-center"
            >
              <img
                src={CiscoLogo}
                alt="Cisco academy Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Learn-A-Thon
                Participant
              </p>
            </motion.li>
          </ol>
        </section>
        <section className="w-2/5 h-full flex flex-col p-4 max-xl:w-full text-[#303030] ">
          <h2 className="text-3xl opacity-70 h-[10%]">Skills & Competenties</h2>
          <ol className="flex flex-col w-full h-[90%] max-xl:h-full flex-wrap max-xl:flex-nowrap max-xl:justify-center max-xl:items-center">
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Programming Languages (Javascript, C#, Python)
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Version Control <br /> (Git, GitHub)
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">Object-Oriented Design</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.25 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Database Design & Managment <br />
                (MySQL, MongoDB)
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Network Design & Managment
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.35 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Hardware Repair & Composement
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Network Security Managment
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.45 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Documentation, Estimation & Technical Writing
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Frameworks & Libraries <br /> (ReactJS, TailwindCSS, Express,
                .NET)
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.55 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Backend Development <br /> (RESTful APIs)
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Unity Engine & its packages <br /> (Relay, Lobby, NGO)
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.65 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">Arduino basics</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Game development knowledge
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.75 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Basics of image Processing
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Windows & Linux Server Knowledge
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.85 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Windows & Linux OS Knowledge
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-1/2 items-center h-[60px] max-xl:w-full"
            >
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50 max-xl:h-[40px] max-xl:w-[40px]"
              />
              <p className="text-wrap text-base ml-2">
                Scrum & Agile Development Methodologies
              </p>
            </motion.li>
          </ol>
        </section>
        <section className="w-1/5 h-full flex flex-col p-4 items-start max-xl:w-full text-[#303030]">
          <h2 className="text-3xl opacity-70 h-[10%]">Soft Skills</h2>
          <ol className="flex flex-col text-xl h-[90%]">
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.95 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Problem Solving
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 1.05 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Analytical Thinking
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 1.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Teamwork and Collaboration
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 1.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Continous Learning & Open Mind
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 1.25 }}
              viewport={{ once: true, amount: 0.5 }}
              className="opacity-60"
            >
              Critical Thinking
            </motion.li>
          </ol>
        </section>
      </section>
      <button
        onClick={() => ScrollToSection("portfolio")}
        className=" max-xl:hidden opacity-50 hover:opacity-100 absolute left-16 bottom-16 max-lg:right-8 max-md:text-sm tracking-widest max-lg:w-[200px] flex flex-col justify-center items-center"
      >
        <img
          src={Arrow}
          alt="arrow down"
          className="w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] max-lg:w-[50px] max-lg:h-[50px] "
        />
      </button>
    </section>
  );
};

export default Resume;
