import { email } from "../utils/IconEmail";
import { Github } from "../utils/IconGit";
import { Linkedin } from "../utils/IconLinkedin";
import { Wpp } from "../utils/IconWpp";

const SocialMedia = () => (
  <div className="flex gap-2 items-center justify-center">
    <p>{Wpp()}</p>
    <p>{Linkedin()}</p>
    <p>{Github()}</p>
    <p>{email}</p>
  </div>
);

export default SocialMedia;
