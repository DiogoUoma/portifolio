
import './App.css';
import Head from './Components/Head';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Conhecimentos from './Components/Conhecimentos';
import Sobre from './Components/Sobre';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Head />
      <Main />
      <Sobre />
      <Conhecimentos />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
