import "./sobre.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imagem from "../../assets/mainImg.png";

function Sobre() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="sobre">
      <div className="sobre-container" data-aos="fade-up">
        <h1>SOBRE</h1>
        <div className="sobre-info">
          <img src={imagem} alt="imagem sobre" />
          <div className="sobre-texto">
            <h4>
              Olá! Meu nome é Diogo Uoma, possuo 23 anos e sou formado em
              Engenharia de Software pela Unicesumar e sou apaixonado por criar
              experiências digitais que encantam e facilitam a vida dos
              usuários. Com formação em Engenharia de Software e especialização
              em desenvolvimento front-end, combino minha paixão por design com
              habilidades técnicas para construir interfaces modernas e
              responsivas.
            </h4>
            <br />
            <h4>
              Minha jornada profissional tem sido marcada por projetos
              desafiadores, nos quais pude aplicar meu conhecimento em HTML, CSS
              e JavaScript para transformar conceitos em realidade visual. Tenho
              experiência sólida no uso de frameworks como React.js e Angular,
              que utilizo para desenvolver aplicações web dinâmicas e
              eficientes.
            </h4>
            <br />
            <h4>
              Além de me dedicar à criação de interfaces intuitivas, também
              prezo pela performance e pela usabilidade em cada projeto que
              desenvolvo. Busco constantemente melhorar minhas habilidades
              técnicas e acompanhar as últimas tendências em tecnologia
              front-end, garantindo que minhas soluções estejam sempre alinhadas
              com as melhores práticas do mercado.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
