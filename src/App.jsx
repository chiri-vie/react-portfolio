import {Hero} from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Testimonial } from "@/sections/Testimonial";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";


function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
    </main>
  </div>
}

export default App
