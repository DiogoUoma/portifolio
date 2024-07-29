import "./contato.css";
import { AiFillLinkedin, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contato() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="contato">
      <div className="contato-container" data-aos="fade-up">
        <h1>CONTATOS</h1>
        <p>Fique a vontade para me mandar um oi 😁</p>
        <div className="card-contato">
          <div className="icon-card">
            <a href="mailto:diogouoma3105@gmail.com">
              <AiFillMail className="icon-contato" />
            </a>
          </div>
          <div className="icon-card">
            <a href="https://wa.me/44999073105">
              <AiOutlineWhatsApp className="icon-contato" />
            </a>
          </div>
          <div className="icon-card">
            <a href="https://linkedin.com/in/DiogoUoma">
              <AiFillLinkedin className="icon-contato" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
