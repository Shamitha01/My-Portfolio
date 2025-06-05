import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6 border-t border-amber-500/30">
      <p className="mb-2">Connect with me:</p>
      <div className="space-x-6 flex justify-center items-center">
        <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-amber-400 transition">
          <FaEnvelope /> Email
        </a>
        <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-amber-400 transition">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </footer>
  );
}
