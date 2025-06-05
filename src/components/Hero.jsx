import { Typewriter } from "react-simple-typewriter";
import photo from "../assets/photo.jpg";

export default function Hero() {
  return (
    <section className="text-center py-8 px-4 relative overflow-hidden">
      {/* Background Shape */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-400 rounded-full blur-3xl opacity-20 z-0"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl font-extrabold mb-2 text-black">
            Hi, I'm Shamitha
          </h1>

          <p className="text-2xl font-bold text-black mb-1 min-h-[30px]">
            <Typewriter
              words={[
                "Frontend Developer",
                "React & Tailwind Enthusiast",
                "UI/UX Explorer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="text-black font-medium text-xl max-w-xl mb-4">
            I’m a frontend developer focused on crafting beautiful, interactive,
            and accessible user interfaces using modern web technologies like React and Tailwind CSS.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-center flex-1">
          <img
            src={photo}
            alt="Profile"
            className="w-[250px] h-[250px] mt-4 rounded-full border-4 border-black shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
