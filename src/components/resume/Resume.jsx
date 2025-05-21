import { AiOutlineDownload } from "react-icons/ai";
import pdf from "./MariaSolZito.pdf";
import { TitleCard } from "../Title";

export const ResumeNew = () => {
  return (
    <div id="resume" className="border w-4/5 m-auto p-4">
      <TitleCard name="Resume" />
      <div className="border bg-cardB m-auto">
        <a
          href={pdf}
          target="_blank"
          className="flex items-center gap-2 text-white p-2"
        >
          <AiOutlineDownload />
          Download CV
        </a>
      </div>
    </div>
  );
};
