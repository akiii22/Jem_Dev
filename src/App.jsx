import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navabar from "./components/Navabar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navabar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
