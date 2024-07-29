import "./head.css";

function Head() {
  return (
    <header>
      <div className="head-container">
        <h1>PORTIFÓLIO</h1>
        <ul>
          <li className="lista-link">
            <a href="#início">
              <p style={{ color: "#fff" }}>INICIO</p>
            </a>
          </li>
          <li className="lista-link">
            <a href="#sobre">
              <p style={{ color: "#fff" }}>SOBRE</p>
            </a>
          </li>
          <li className="lista-link">
            <a href="#projetos">
              <p style={{ color: "#fff" }}>PROJETOS</p>
            </a>
          </li>
          <li className="lista-link">
            <a href="#contato">
              <p style={{ color: "#fff" }}>CONTATO</p>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Head;
