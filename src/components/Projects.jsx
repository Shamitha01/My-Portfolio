import {FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import QuizPhoto from "../assets/project-photos/The-react-quiz-app.png";
import PizzaPhoto from "../assets/project-photos/Fast-react-pizza.png";
import OasisPhoto from "../assets/project-photos/The-wild-oasis.png";
export default function Projects() {
  const projects = [
    {
      title: "The react quiz app",
      description: "15 questions related to React.js with timer 😊",
      image: QuizPhoto,
      github: "https://github.com/yourusername/react-quiz-app",
      demo: "https://quiz-app-demo.vercel.app/"
    },
    {
      title: "Fast Pizza React Co",
      description: "Pizza ordering app with minimal features",
      image: PizzaPhoto,
      github: "https://github.com/yourusername/pizza-app",
      demo: "https://fastpizza.vercel.app/"
    },
    {
      title: "The wild oasis",
      description: "Website for cabin management for hotel employees",
      image: OasisPhoto,
      github: "https://github.com/yourusername/the-wild-oasis",
      demo: "https://the-wild-oasis.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-amber-400/40 transition-transform duration-300 border border-black"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline flex items-center gap-1">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline flex items-center gap-1">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
