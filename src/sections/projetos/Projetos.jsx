import "./projetos.css";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import loginFirebase from "../../assets/assets-projetos/login-firebase.png";
import filmeAxios from "../../assets/assets-projetos/filme-axios.png";

function Projetos() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="projetos">
      <div className="projetos-container" data-aos="fade-up">
        <h1>PROJETOS</h1>
        <div className="projetos-lista">
          <a href="#" className="link_projetos">
            <div className="card_projetos">
              <img src={loginFirebase} />
              <h2>Login com Firebase</h2>
              <p>
                Um sistemas simples de login
                <br /> utilizando React e Firebase
              </p>
              <div className="icon-container">
                <FaGithub className="icon" />
                <FaExternalLinkSquareAlt className="icon" />
              </div>
            </div>
          </a>

          <a href="#" className="link_projetos">
            <div className="card_projetos">
              <img src={filmeAxios} />
              <h2>Projeto Filmes</h2>
              <p>
                Catalogo de filmes
                <br /> consumindo api com axios
              </p>
              <div className="icon-container">
                <FaGithub className="icon" />
                <FaExternalLinkSquareAlt className="icon" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
