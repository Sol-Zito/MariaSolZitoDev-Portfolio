import { Title } from "../components/Title";
import { email } from "../utils/IconEmail";
import { Github } from "../utils/IconGit";
import { Linkedin } from "../utils/IconLinkedin";
import { Wpp } from "../utils/IconWpp";

const Contact = () => {
  return (
    <div id="contact" className="border bg-cardB m-auto p-2">
      <Title name="Contact" />
      <div className="bg-background border text-center items-center m-auto py-4">
        <div className="flex flex-cols gap-4 justify-center m-auto pb-2">
          <p>{Wpp("black")}</p>
          <p>{Linkedin("black")}</p>
          <p>{Github("black")}</p>
          <p>{email}</p>
        </div>
        <hr />
        <p className="w-4/5 m-auto p-2">
          Thank you for taking the time to view my portfolio. Any advice is more
          than welcome. Above are all my contact information, should you have
          any questions. Best regards!
        </p>
      </div>
    </div>
  );
};

export default Contact;
