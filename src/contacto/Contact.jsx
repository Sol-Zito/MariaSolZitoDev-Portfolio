import { Title } from "../components/Title";
import { email } from "../utils/IconEmail";
import { Github } from "../utils/IconGit";
import { Linkedin } from "../utils/IconLinkedin";
import { Wpp } from "../utils/IconWpp";

const Contact = () => {
  return (
    <div id="contact" className="bg-cardB w-5/6 m-auto p-4">
      <Title name="Contact" />
      <div className="bg-background text-center items-center m-auto p-2">
        <p>
          <strong>Zito Maria Sol</strong>
        </p>
        <div className="grid grid-cols-2 gap-2 pt-4 w-4/5 m-auto">
          <p className="flex">
            {Wpp("black")}
            <a
              href="tel:+5493415623126"
              target="_blank"
              className="hidden md:flex"
            >
              : +5493415623126
            </a>
          </p>
          <p className="flex">
            {Linkedin("black")}
            <a
              href="http://www.linkedin.com/in/solzito1998"
              target="_blank"
              className="hidden md:flex"
            >
              : //www.linkedin.com/in/solzito1998
            </a>
          </p>
          <p className="flex">
            {Github("black")}
            <a
              href="https://github.com/Sol-Zito"
              target="_blank"
              className="hidden md:flex"
            >
              : //github.com/Sol-Zito
            </a>{" "}
          </p>
          <p className="flex">
            {email}
            <a
              href="mailto:solzito.1889@gmail.com?subject=Asunto%20del%20correo&body=Hola,%20esta%20es%20una%20prueba."
              className="hidden md:flex"
            >
              : solzito.1889@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div>
        <p className="text-background py-2">
          Thank you for taking the time to view my portfolio. Any advice is more
          than welcome. Above are all my contact information, should you have
          any questions. Best regards!
        </p>
      </div>
    </div>
  );
};

export default Contact;
