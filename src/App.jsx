import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-700 text-white min-h-screen">
      <Header />
      <Home />
    </div>
  );
}
