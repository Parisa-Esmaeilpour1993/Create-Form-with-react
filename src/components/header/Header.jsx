import React from "react";
import headerBackgroundImage from "../../assets/images/waves-split.svg";
import Button from "../../base/button/Button";

export default function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header
      className="relative h-32 flex pt-2 mb-2 text-white bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("${headerBackgroundImage}")` }}
    >
      <h1 className="text-xl font-bold p-2 relative z-10">Contact Manager</h1>
      <Button
        label={isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        onClick={toggleDarkMode}
        className={`absolute right-4 top-7 p-2 rounded-md text-black shadow-lg
              animate-pulse ${isDarkMode ? "bg-gray-50" : "bg-gray-400"} `}
      />
    </header>
  );
}
