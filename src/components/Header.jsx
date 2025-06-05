export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="flex justify-between items-center p-6 sticky top-0 z-50 bg-black text-white">
      <div className="text-2xl font-bold cursor-pointer" onClick={scrollToTop}>MyLogo</div>
      <nav className="space-x-4 text-white font-medium">
        <button onClick={scrollToTop} className=" text-white font-medium py-1 px-3 rounded transition-colors duration-300">Home</button>
        <a href="#skills" className="text-white font-medium py-1 px-3 rounded transition-colors duration-300">Skills</a>
        <a href="#company" className="text-white font-medium py-1 px-3 rounded transition-colors duration-300">Experience</a>
        <a href="#projects" className="text-white font-medium py-1 px-3 rounded transition-colors duration-300">Projects</a>
        <a href="#contact" className="text-white font-medium py-1 px-3 rounded transition-colors duration-300">Contact</a>
      </nav>
    </header>
  );
}