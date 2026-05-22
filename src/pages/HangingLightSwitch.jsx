import { useState } from "react";

export default function HangingLightSwitch() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (!dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setDark(!dark);
  };

  return (
    <div className="fixed top-0 right-10 z-50 flex flex-col items-center cursor-pointer select-none">
      {/* string */}
      <div className="w-px h-20 bg-[#c9c9c9]" />

      {/* knob */}
      <div
        onClick={toggleTheme}
        className={`
          w-10 h-10 rounded-full shadow-lg border
          transition-all duration-300
          ${dark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"}
        `}
      />

      {/* little glow */}
      <div
        className={`w-3 h-3 rounded-full mt-2 transition-all duration-300 ${
          dark ? "bg-yellow-300 shadow-[0_0_20px_5px_rgba(255,220,120,0.6)]" : "bg-gray-300"
        }`}
      />
    </div>
  );
}