import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";
import Projects from "./components/Projects";
import About from './components/About'
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased bg-gradient-to-b from-black to-neutral-700">
      <Navbar />
      <Gradient />
      <div className="fixed inset-0 bg-fixed bg-cover bg-center"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <hr className="w-full border-t border-white opacity-30" />
        <div className="mb-1"></div>
        <About />
        <hr className="w-full border-t border-white opacity-30" />
        <div className="mb-1"></div>
        <Projects />
      </div>
      <Footer />
    </div>
  )
}