import "./Home.css";
import profileimg from "../../assets/me.jpg";

const Home = () => {
  return (
    <div className="home_container">
      <div className="text_container">
        <p>Olá, sou</p>
        <h1>Diogo Uoma</h1>
        <p>Desenvolvedor Fullstack</p>
      </div>
      <div className="img_container">
        <img src={profileimg} alt="foto de perfil" />
      </div>
    </div>
  );
};

export default Home;
