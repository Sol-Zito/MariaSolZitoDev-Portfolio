import { useState } from "react";

const Header = () => {
  const navLinks = [
    {
      id: 1,
      title: "ABOUT",
      Link: "/",
    },
    {
      id: 2,
      title: "EXPERIENCE",
      Link: "#experience",
    },
    {
      id: 3,
      title: "PROJECTS",
      Link: "#projects",
    },
    {
      id: 4,
      title: "SKILLS",
      Link: "#skills",
    },
    {
      id: 5,
      title: "RESUME",
      Link: "#resume",
    },
    {
      id: 6,
      title: "CONTACT",
      Link: "#contact",
    },
  ];
  const [isOpen, setIsOpne] = useState(false);
  const toggleVar = () => setIsOpne(!isOpen);
  return (
    <>
      <header className="fixed z-20 w-full flex justify-around items-center bg-header py-2 border rounded-b-lg">
        <div className="py-2 px-3 bg-background text-black font-semibold rounded-3xl text-base">
          <p className="">ZMS</p>
        </div>
        <nav className="hidden md:block">
          <ul className="flex justify-between gap-4 text-white md:text-lg">
            {navLinks.map((ele) => (
              <li
                key={ele.id}
                className="group transition duration-300 ease-in-out"
              >
                <a
                  href={ele.Link}
                  className="bg-left-bottom bg-gradient-to-r from-cardB to-green bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-300 ease-out"
                >
                  {ele.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="md:hidden sm:block">
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-x-1 font-semibold text-white text-lg"
              aria-expanded="false"
              onClick={toggleVar}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="white"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </span>

              <svg
                class="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="flex-auto rounded-3xl bg-cardB bg-10% text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <ul className="text-white md:text-lg" onClick={toggleVar}>
                      {navLinks.map((ele) => (
                        <li
                          key={ele.id}
                          className="group transition duration-300 ease-in-out mt-2"
                        >
                          <a
                            href={ele.Link}
                            className="bg-left-bottom bg-gradient-to-r from-cardB to-green bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-300 ease-out"
                          >
                            {ele.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
