import React from "react";

export default function Button({ buttonText, bgColor }) {
  return (
    <button
      className={`${
        bgColor == "blue" ? "bg-blue-800 text-white" : "bg-white text-black"
      } border px-6 py-2 rounded-lg border-blue-800 ${
        bgColor == "blue" ? "hover:bg-blue-900" : "hover:bg-gray-100"
      } transition-all ease-in-out flex`}
    >
      {buttonText}
      {buttonText === "View More" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mx-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      )}
    </button>
  );
}
