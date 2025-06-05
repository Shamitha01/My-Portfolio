import { FaReact, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";

const skillData = [
  { name: "React", icon: <FaReact size={30} className="text-white"/> },
  { name: "Tailwind", icon: <FaCss3Alt size={30} className="text-white"/> },
  { name: "JavaScript", icon: <FaJs size={30} className="text-white"/> },
  { name: "SQL", icon: <FaDatabase size={30} className="text-white"/> },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 p-10">

      <h2 className="text-center text-3xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillData.map((skill) => (
          <div
            key={skill.name}
            className="bg-black p-4 rounded-xl shadow-lg text-center hover:scale-105 transition transform duration-300 flex flex-col items-center hover:shadow-amber-400/40 hover:shadow-xl"

            >
            {skill.icon}
            <span className="mt-2 text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
