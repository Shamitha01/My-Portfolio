export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="flex justify-between items-center p-6 sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-lg text-white">
      <div className="text-2xl font-bold cursor-pointer" onClick={scrollToTop}>MyLogo</div>
      <nav className="space-x-4 text-white font-medium">
        <button onClick={scrollToTop} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded transition-colors duration-300">Home</button>
        <a href="#skills" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded transition-colors duration-300">Skills</a>
        <a href="#company" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded transition-colors duration-300">Experience</a>
        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded transition-colors duration-300">Projects</a>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded transition-colors duration-300">Contact</a>
      </nav>
    </header>
  );
}