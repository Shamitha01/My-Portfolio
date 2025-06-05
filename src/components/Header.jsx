import logo from "../assets/Logo-bg-amber.png"
export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="flex justify-between items-center p-6 sticky top-0 z-50 bg-black text-white shadow-md shadow-amber-300/40">
      <div className="text-2xl font-bold cursor-pointer" onClick={scrollToTop}><img className="w-11 h-11" src={logo} alt="My Logo" /></div>
      <nav className="space-x-4 text-white font-medium">
        <button onClick={scrollToTop} className="hover:text-amber-400 transition-colors duration-300 py-1 px-3">Home</button>
        <a href="#education" className="hover:text-amber-400 transition-colors duration-300 py-1 px-3">Education</a>
        <a href="#skills" className="hover:text-amber-400 transition-colors duration-300 py-1 px-3">Skills</a>
        <a href="#company" className="hover:text-amber-400 transition-colors duration-300 py-1 px-3">Experience</a>
        <a href="#projects" className="hover:text-amber-400 transition-colors duration-300 py-1 px-3">Projects</a>
        <a href="#contact" className="hover:text-amber-400 transition-colors duration-300 py-1 px-3">Contact</a>
      </nav>
    </header>
  );
}