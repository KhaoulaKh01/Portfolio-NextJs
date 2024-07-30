
//page.js
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
//import Testimonials from "@/Components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Skills />
      <Projects />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </main>
  );
}
