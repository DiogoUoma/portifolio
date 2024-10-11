import "./App.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
