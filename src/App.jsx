
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <About />

      <Projects />

      <Services />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;

