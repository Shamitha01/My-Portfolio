import {FaBriefcase } from "react-icons/fa";
export default function Company() {
  return (
    <section id="company" className="scroll-mt-24 px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold  mb-8 text-center">Experience</h2>

      <div className="space-y-6 flex flex-col items-center">
        <div className="bg-black p-6 rounded-xl shadow-md w-full max-w-3xl">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <FaBriefcase className="text-white" />
            Frontend Developer
          </h3>
          <p className="text-white">XYZ Corp (2022 - Present)</p>
          <p className="text-white text-sm mt-1">📍 Bengaluru | Building scalable UI components | Leading frontend migration to React</p>
        </div>
      </div>
    </section>
  );
}
