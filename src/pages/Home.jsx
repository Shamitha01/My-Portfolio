import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Company from "../components/Company";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div id="home">
      <motion.div {...fadeInUp}><Hero /></motion.div>
      <motion.div {...fadeInUp}><Education /></motion.div>
      <motion.div {...fadeInUp}><Skills /></motion.div>
      <motion.div {...fadeInUp}><Company /></motion.div>
      <motion.div {...fadeInUp}><Projects /></motion.div>
      <motion.div {...fadeInUp}><ContactForm /></motion.div>
      <Footer />
    </div>
  );
}
