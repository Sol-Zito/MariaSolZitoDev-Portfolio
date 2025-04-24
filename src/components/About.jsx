import { email } from "../utils/IconEmail";
import { Github } from "../utils/IconGit";
import { Linkedin } from "../utils/IconLinkedin";
import { Wpp } from "../utils/IconWpp";
import { Title } from "./Title";

const About = () => {
  return (
    <div className="bg-background grid md:grid-col-3 md:grid-row-2 gap-2 mx-2 mt-5">
      <div className="md:row-start-1 md:col-start-1 text-center m-auto md:ml-8">
        <h2>
          Zito Maria Sol
          <br />
          Fullstack Developer
        </h2>
        <div></div>
        <div className="flex gap-2 justify-around ">
          <p>{Wpp("black")}</p>
          <p>{Linkedin("black")}</p>
          <p>{Github("black")}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="md:row-start-1 md:col-start-2 md:col-end-2 bg-cardB py-4 text-white">
        <Title name="About me" />
        <p className="text-center px-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p className="text-center px-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
};

export default About;
