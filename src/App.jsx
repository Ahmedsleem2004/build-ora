
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      <main className="w-full overflow-x-hidden bg-black">
        <Navbar />

        <div id="home">
          <Hero isReady={!loading} />
        </div>

        <About />

        <Projects />

        <Services />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;

