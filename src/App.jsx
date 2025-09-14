import React, { useState } from "react";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import TicTacToe from "./component/TicTacToeGame";
import FlexIrlLogo from "./component/FlexIrlLogo";

export default function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 font-sans">
      {/* <FlexIrlLogo /> */}
      <Header />
      <MainContent toggleGame={() => setShowGame(!showGame)} />
      {showGame && <TicTacToe />}
    </div>
  );
}
