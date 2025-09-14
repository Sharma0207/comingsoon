import React from "react";

const MainContent = ({ toggleGame }) => (
  <main className="max-w-4xl mx-auto text-center">
    <h2 className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-16 sm:mb-24">
      its{" "}
      <span className="relative inline-block">
        <span className="relative inline-block">
          <span className="relative z-10">none</span>
          <span className="absolute left-0 top-1/2 h-[8px] bg-white animate-strike"></span>
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-[60%] gap-20">
          flex
        </span>
      </span>{" "}
      of your business
    </h2>

    <p className="text-xl sm:text-2xl mb-6">
      See you soon, until then up for a Tic Tac Toe game?
    </p>

    <button
      onClick={toggleGame}
      className="border border-white px-6 py-4 text-lg"
    >
      Play Tic Tac Toe
    </button>
  </main>
);

export default MainContent;
