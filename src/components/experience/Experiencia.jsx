import { useState } from "react";
import { CardGeneral } from "../card/CardGeneral";
import { Title } from "../Title";


export const experienceData = [
  {
    name: "ByTech / Front End Developer & Designer UX/UI",
    img: "/foto.png",
    tools: ["React", "TypeScript", "Tailwind", "Figma","Adobe Colors", "GitHub"],
    description: "Worked for a technology ecommerce client located in Argentina. For this client I have: - Interface design with Figma, defining color palettes, logos and fonts. - Development of a website with fluid user experience and reusable components.",
  },
  {
    name: "Vinoteca / Front End Developer ",
    img: "/foto.png",
    tools: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Shandcn",
      "Figma",
      "GitHub",
      "Keycloak",
    ],
    description:
      "Worked for a Wine cellar client located in Argentina For this client I have: - Use Figma to design the interface, defining color palettes, logo, typography, and structure. - Develop a website where it offers a fluid user experience; Create reusable components, with a responsive design to adapt to different devices. - To ensure the security of customer data, Keycloak was used. Work on customizing each component and page of it so that it integrates perfectly with the website.",
  },
  {
    name: "Tourism Blog / Front End Developer & Designer",
    img: "/foto.png",
    tools: [
      "Html",
      "Css",
      "Bootstrap",
      "Javascript",
      "Figma",
      "Adobe colors",
      "Google fonts",
      "FontAwesome",
      "GitHub",
      "Trello",
    ],
    description:
      "Worked for a tourism blog in Argentina For this client I have: - I designed the initial blog layout, defining the structure of the pages and the layout of the topics. - I considered how to organize the information so that users can easily navigate and at the same time, it is visually appealing and easy to read. - I worked with a color palette inspired by the vibrant culture of Buenos Aires and we selected a typography that reflects the elegance and passion of the city. - I implemented validations for forms, making sure that users can communicate effectively.",
  },
  {
    name: "Digital House / Full Stack Developer",
    img: "/foto.png",
    tools: [
      "React JS", "React-calendar", "Material UI", "Font Awesome", "Figma", "Trello", "Java","Spring boot",
      "IntelliJ", "MySql Server"
    ],
    description:
      "Worked for an instrument ecommerce. For this client I have: - I established a color scheme and logo that reflects the harmony and diversity of the instruments. - The application structure was carefully planned to offer intuitive navigation and a pleasant experience for users. - I implemented a CRUD system to manage the available instruments. - I developed components to display the rating of each instrument. - I created validations for the rental forms, ensuring that users provide accurate information. I designed a calendar structure so that customers could easily select rental dates. - I implemented search filters so that users could quickly find the instruments they needed."
  },
];

const Experience =()=>{
  const [data, setData] = useState(experienceData)
    return(
        <div id="experience" className="mx-2 m-auto bg-cardB">
          <Title name={"Experience"}/>
          <div className="grid md:grid-cols-2 gap-4 p-2">
            {data.map((ele) => <CardGeneral {...ele}/>)}
          </div>
        </div>
    )
}

export default Experience;