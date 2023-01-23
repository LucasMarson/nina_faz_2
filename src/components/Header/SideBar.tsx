import Link from "next/link";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <div className="flex z-auto -mr-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            <svg
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              className="w-10 h-10 text-black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex z-auto -mr-2 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              className="w-10 h-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      <div
        className={`top-full right-0 py-5 w-full max-w-[250px] rounded-lg  bg-[#58d9f6] absolute ${
          isOpen ? "translate-x-0 right-4" : "hidden"
        } ease-in-out duration-300`}
      >
        <div className="mx-8">
          <div className="flex flex-col w-full">
          <Link
          href="#"
          className=" 
            font-bold
            border-transparent
            border-b-2
            rounded-none 
            hover:border-b-2
            hover:text-pink-500
            hover:border-pink-500
          "
        >
          Recadinhos
        </Link>
          </div>
        </div>
      </div>
    </>
  );
}
