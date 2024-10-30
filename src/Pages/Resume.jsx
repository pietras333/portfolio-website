import CiscoLogo from "../Assets/Icons/cisco-logo.png";
import CodeLogo from "../Assets/Icons/code-logo.png";
import CodecademyLogo from "../Assets/Icons/codecademy-logo.png";
import ZSTLogo from "../Assets/Icons/zst-logo.png";
import DownloadIcon from "../Assets/Icons/download.png";

const Resume = () => {
  return (
    <section className="w-full h-screen flex flex-col bg-[#ebebeb]">
      <h2 className="text-4xl font-light flex flex-col justify-center items-center h-[20%] leading-snug bg-[#ebebeb]">
        <h3 className="font-normal opacity-50 tracking-widest text-2xl">
          Wendt Piotr
        </h3>
        Résumé
      </h2>
      <section className="w-full h-[80%] flex max-xl:flex-col-reverse">
        <section className="w-1/5 h-full flex flex-col p-4 text-[#303030]">
          <h2 className="text-3xl opacity-70 h-[10%]">Education</h2>
          <h3 className="w-full text-xl">
            Zespół Szkół Technicznych <br /> im. Hipolita Cegielskiego w Pile
          </h3>
          <ol className="flex flex-col text-xl h-[30%]">
            <li className="opacity-60">Date of Graduation: 2025</li>
            <li className="opacity-60">Diploma in Information Technology</li>
          </ol>
          <p className="text-xl mt-4">Areas of Study</p>
          <ol className="flex flex-col text-xl h-[70%]">
            <li className="opacity-60">Web Development</li>
            <li className="opacity-60">Network Theory</li>
            <li className="opacity-60">Databse Managment</li>
            <li className="opacity-60">Software & Hardware Fundamentals</li>
            <li className="opacity-60">Proficency in English Language</li>
          </ol>
        </section>
        <section className="w-1/5 h-full flex flex-col p-4 text-[#303030] ">
          <h2 className="text-3xl opacity-70 h-[10%]">Certifications</h2>
          <caption className="font-light text-sm opacity-50 w-full text-left">
            Hover & Click to download the documents
          </caption>
          <ol className="flex flex-col w-full h-[90%]">
            <li className="flex w-5/6 items-center ">
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Fundamentals Of
                Cybersecurity Skill Path
              </p>
            </li>

            <li className="flex w-5/6 items-center">
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Introduction to
                Game Development Course
              </p>
            </li>
            <li className="flex w-5/6 items-center">
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Learn C# Course
              </p>
            </li>
            <li className="flex w-5/6 items-center">
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Learn Git & GitHub
                Course
              </p>
            </li>
            <li className="flex w-5/6 items-center">
              <img
                src={CodecademyLogo}
                alt="Codecademy Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Learn How To Code
                Course
              </p>
            </li>
            <li className="flex w-5/6 items-center">
              <img
                src={CiscoLogo}
                alt="Cisco academy Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2023&nbsp;</span>Introduction to
                Cybersecurity
              </p>
            </li>
            <li className="flex w-5/6 items-center">
              <img
                src={ZSTLogo}
                alt="ZST School Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2022&nbsp;</span>Introduction to IoT
              </p>
            </li>
            <li className="flex w-5/6 items-center">
              <img
                src={CiscoLogo}
                alt="Cisco academy Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                <span className="font-bold">2024&nbsp;</span>Learn-A-Thon
                Participant
              </p>
            </li>
          </ol>
        </section>
        <section className="w-2/5 h-full flex flex-col p-4 text-[#303030] ">
          <h2 className="text-3xl opacity-70 h-[10%]">Skills & Competenties</h2>
          <ol className="flex flex-col w-full h-[90%] flex-wrap">
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Programming Languages (Javascript, C#, Python)
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Version Control <br /> (Git, GitHub)
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">Object-Oriented Design</p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Database Design & Managment <br />
                (MySQL, MongoDB)
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Network Design & Managment
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Hardware Repair & Composement
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Network Security Managment
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Documentation, Estimation & Technical Writing
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Frameworks & Libraries <br /> (ReactJS, TailwindCSS, Express,
                .NET)
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Backend Development <br /> (RESTful APIs)
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Unity Engine & its packages <br /> (Relay, Lobby, NGO)
              </p>
            </li>

            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">Arduino basics</p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Game development knowledge
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Basics of image Processing
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Windows & Linux Server Knowledge
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Windows & Linux OS Knowledge
              </p>
            </li>
            <li className="flex w-1/2 items-center h-[60px]">
              <img
                src={CodeLogo}
                alt="Code Logo"
                className="w-[60px] h-[60px] opacity-50"
              />
              <p className="text-wrap text-base ml-2">
                Scrum & Agile Development Methodologies
              </p>
            </li>
          </ol>
        </section>
        <section className="w-1/5 h-full flex flex-col p-4 items-start text-[#303030]">
          <h2 className="text-3xl opacity-70 h-[10%]">Soft Skills</h2>
          <ol className="flex flex-col text-xl h-[90%]">
            <li className="opacity-60">Problem Solving</li>
            <li className="opacity-60">Analytical Thinking</li>
            <li className="opacity-60">Teamwork and Collaboration</li>
            <li className="opacity-60">Continous Learning & Open Mind</li>
            <li className="opacity-60">Critical Thinking</li>
          </ol>
        </section>
      </section>
    </section>
  );
};

export default Resume;
