import "./banner.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="inicio">
      <div className="banner-container" data-aos="fade-up">
        <div className="text-container">
          <h3>Olá! 🖐 Sou o Diogo Uoma.</h3>
          <h1>DESENVOLVEDOR</h1>
          <h1>FRONT-END</h1>
        </div>

        <div className="icon-container">
          <div className="link-container">
            <a href="https://www.github.com/DiogoUoma">
              <FaGithubSquare className="icon-banner" />
              <p>GITHUB</p>
            </a>
          </div>

          <div className="link-container">
            <a href="https://linkedin.com/in/diogouoma">
              <FaLinkedin className="icon-banner" />
              <p>LINKEDIN</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
