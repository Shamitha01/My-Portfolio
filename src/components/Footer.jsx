export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6">
      <p className="mb-2">Connect with me:</p>
      <div className="space-x-4">
        <a href="mailto:your.email@example.com" className="hover:underline">
          Email
        </a>
        <a href="https://linkedin.com" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}