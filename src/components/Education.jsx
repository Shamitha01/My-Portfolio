import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-black mb-8 text-center">Education</h2>

      <div className="space-y-6 flex flex-col items-center">
        <div className="bg-black p-6 rounded-xl shadow-md w-full max-w-3xl">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <FaGraduationCap className="text-white" />
            Bachelor of Technology in Computer Science
          </h3>
          <p className="text-white">ABC University (2018 - 2022)</p>
          <p className="text-white text-sm mt-1">📍 Hyderabad | GPA: 8.6 | Dean’s List (3 semesters)</p>
        </div>

        <div className="bg-black p-6 rounded-xl shadow-md w-full max-w-3xl">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <FaGraduationCap className="text-white" />
            Intermediate - MPC
          </h3>
          <p className="text-white">XYZ Junior College (2016 - 2018)</p>
          <p className="text-white text-sm mt-1">📍 Warangal | GPA: 9.1 | State Merit Certificate</p>
        </div>
      </div>
    </section>
  );
}
