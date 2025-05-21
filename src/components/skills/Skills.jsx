import { useState } from "react";
import { Title } from "../Title";
import {
  SiAdobe,
  SiAngular,
  SiCanva,
  SiCss3,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import {
  FaFileExcel,
  FaFilePowerpoint,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa6";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";

export const data = [
  {
    area: "Front End",
    tools: [
      { id: "1F", skill: "React", icon: SiReact },
      { id: "2F", skill: "Javascript", icon: SiJavascript },
      { id: "3F", skill: "TypeScript", icon: SiTypescript },
      { id: "4F", skill: "Next.js", icon: SiNextdotjs },
      { id: "5F", skill: "Angular", icon: SiAngular },
      { id: "6F", skill: "HTML", icon: SiHtml5 },
      { id: "7F", skill: "CSS", icon: SiCss3 },
      {
        id: "8F",
        skill: "Libreries: Material UI , Tailwind ,Bootstrap",
        icon: null,
      },
    ],
  },
  {
    area: "UX/UI",
    tools: [
      { id: "1U", skill: "Figma", icon: SiFigma },
      { id: "2U", skill: "Canva", icon: SiCanva },
      { id: "3U", skill: "Adobe Colors", icon: SiAdobe },
    ],
  },
  {
    area: "Back end",
    tools: [
      { id: "1B", skill: "Java", icon: FaJava },
      { id: "2B", skill: "Spring Boot", icon: SiSpringboot },
      { id: "3B", skill: "Python", icon: SiPython },
      { id: "4B", skill: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    area: "Database",
    tools: [
      { id: "1D", skill: "SQL Server", icon: null },
      { id: "2D", skill: "MySQL", icon: SiMysql },
      { id: "3D", skill: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    area: "General",
    tools: [
      { id: "1G", skill: "Postman", icon: SiPostman },
      { id: "2G", skill: "Power Point", icon: FaFilePowerpoint },
      { id: "3G", skill: "EXCEL", icon: FaFileExcel },
      { id: "4G", skill: "POWER BI", icon: FaMicrosoft },
    ],
  },
  {
    area: "TEAM ORGANIZATION",
    tools: [
      { id: "1T", skill: "JIRA", icon: SiJira },
      { id: "2T", skill: "TRELLO", icon: SiTrello },
      { id: "3T", skill: "GITHUB", icon: SiGithub },
    ],
  },
];

export const Skills = () => {
  const [dataHard, setData] = useState(data);
  const [dataSoft, setDatasoft] = useState([
    "Effective communication",
    "Teamwork",
    "Problem solving",
    "Adaptability",
    "Responsibility",
    "Autonomy",
    "Critical thinking",
  ]);

  return (
    <div className="mx-2 m-auto bg-cardB p-2">
      <Title name="Hard Skills" />
      <div className="bg-background grid md:grid-cols-3 grid-flow-rows gap-2 p-2 shadow-lg">
        {dataHard.map((dataSkill) => (
          <>
            <ul className="uppercase border p-2 hover:scale-105 hover:bg-cardB hover:text-white border-2">
              {dataSkill.area}:
              {dataSkill.tools.map((tool) => (
                <p className="flex gap-2" key={tool.id}>
                  {tool.icon ? <tool.icon /> : "◾"}
                  <li key={tool.id}>{tool.skill}</li>
                </p>
              ))}
            </ul>
          </>
        ))}
      </div>
      <Title name="Soft Skills" />
      <ul className="bg-background grid md:grid-cols-3 p-2 shadow-lg">
        {dataSoft.map((ele) => (
          <li key={ele}>🤝{ele}</li>
        ))}
      </ul>
    </div>
  );
};
