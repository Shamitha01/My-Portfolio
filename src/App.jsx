import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css"
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <div className="bg-gradient-to-br from-amber-200 to-amber-400
  text-black min-h-screen">
      <Header />
      <Home />
      <Toaster />
    </div>
  );
}
