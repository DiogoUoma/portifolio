import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Projects from "./components/Projetcts";

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
