const projects = [
  { title: "Project One", description: "A cool app", image: "https://via.placeholder.com/300" },
  { title: "Project Two", description: "Another app", image: "https://via.placeholder.com/300" },
  { title: "Project Three", description: "Yet another one", image: "https://via.placeholder.com/300" },
  { title: "Project Four", description: "Useful project", image: "https://via.placeholder.com/300" },
  { title: "Project Five", description: "Creative solution", image: "https://via.placeholder.com/300" },
  { title: "Project Six", description: "Amazing tool", image: "https://via.placeholder.com/300" },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 p-10">
      <h2 className="text-3xl font-semibold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
