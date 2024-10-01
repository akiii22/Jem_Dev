import { useState } from "react";

function Navabar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-primary px-4 py-2 shadow-lg shadow-stone-800">
        <img src="/logo.png" alt="logo" className="mb-2 w-20" />
        <div className="block px-10 sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden w-full px-6 sm:block">
          <ul className="flex justify-around gap-4 tracking-widest text-secondary">
            <li className="text-[22px] font-semibold">
              <a
                href="#home"
                className="transition-all duration-200 ease-in hover:border-b-4 hover:border-secondary"
              >
                Home
              </a>
            </li>
            <li className="text-[22px] font-semibold">
              <a
                href="#about"
                className="transition-all duration-200 ease-in hover:border-b-4 hover:border-secondary"
              >
                About
              </a>
            </li>
            <li className="text-[22px] font-semibold">
              <a
                href="#projects"
                className="transition-all duration-200 ease-in hover:border-b-4 hover:border-secondary"
              >
                Projects
              </a>
            </li>
            <li className="text-[22px] font-semibold">
              <a
                href="#tech"
                className="transition-all duration-200 ease-in hover:border-b-4 hover:border-secondary"
              >
                TechStack
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="sticky top-32 z-50 m-0 bg-tertiary px-6 py-2 shadow-lg shadow-stone-800 sm:hidden">
          <ul className="mt-3 flex flex-col gap-4 tracking-widest text-primary">
            <li className="text-[22px] font-semibold">
              <a
                href="#home"
                className="scale-x-0 transition-all duration-200 ease-in hover:border-b-4 hover:border-secondary"
              >
                Home
              </a>
            </li>
            <li className="text-[22px] font-semibold">
              <a
                href="#about"
                className="transition-all duration-200 ease-in hover:border-b-4 hover:border-secondary"
              >
                About
              </a>
            </li>
            <li className="text-[22px] font-semibold">
              <a
                href="#projects"
                className="transition-all duration-200 ease-in hover:border-b-4 hover:border-secondary"
              >
                Projects
              </a>
            </li>
            <li className="text-[22px] font-semibold">
              <a
                href="#tech"
                className="transition-all duration-200 ease-in hover:border-b-4 hover:border-secondary"
              >
                TechStack
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navabar;
