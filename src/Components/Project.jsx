import DotIcon from "../Assets/Icons/dot.png";
import LinkIcon from "../Assets/Icons/link.png";
import ReactIcon from "../Assets/Icons/react.png";
import JSIcon from "../Assets/Icons/js.png";
import NodeJSIcon from "../Assets/Icons/nodejs.png";
// import TailwindIcon from "../Assets/Icons/tailwind.png";
import MongoDBIcon from "../Assets/Icons/mongo.png";
import ExpressIcon from "../Assets/Icons/express.png";
import CSharpIcon from "../Assets/Icons/csharp.png";
import UnityIcon from "../Assets/Icons/unity.png";

const iconMap = {
  js: JSIcon,
  nodejs: NodeJSIcon,
  // tailwind: TailwindIcon,
  mongo: MongoDBIcon,
  express: ExpressIcon,
  csharp: CSharpIcon,
  unity: UnityIcon,
  react: ReactIcon,
};

const Project = ({ technologiesIcons, name, url }) => {
  const GetAccordingIcon = (iconName) =>
    iconMap[iconName.toLowerCase()] || DotIcon;

  return (
    <li className="flex items-center mt-4 max-xl:p-2">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={LinkIcon}
          alt="Link icon"
          className="w-[30px] h-[30px] max-xl:w-[20px] max-xl:h-[20px] opacity-75 hover:cursor-pointer hover:opacity-100"
        />
      </a>
      <img
        src={DotIcon}
        alt="Dot icon"
        className="w-[15px] h-[15px] opacity-75 ml-4 max-xl:w-[10px] max-xl:h-[10px] max-xl:max-w-fit max-xl:max-h-fit"
      />
      <p className="w-[180px] pl-4 max-xl:text-sm">{name}</p>
      <section className="h-full w-fit flex">
        {technologiesIcons.map((iconEl) => (
          <img
            src={GetAccordingIcon(iconEl)}
            alt={`${iconEl} icon`}
            className="opacity-50 w-[50px] h-[50px] max-xl:w-[30px] max-xl:h-[30px] max-xl:max-w-fit max-xl:max-h-fit"
          />
        ))}
      </section>
    </li>
  );
};

export default Project;
