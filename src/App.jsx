import "./App.css";

import Head from "./components/head/Head.jsx";
import Banner from "./sections/banner/Banner.jsx";
import Sobre from "./sections/sobre/Sobre.jsx";
import Projetos from "./sections/projetos/Projetos.jsx";
import Contato from "./sections/contato/Contato.jsx";

function App() {
  return (
    <div className="App">
      <Head />
      <Banner />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
