import "./MainCard.css";

import { FaGithub, FaPlay } from "react-icons/fa";

const MainCard = ({ name, description }) => {
  return (
    <div className="card">
      <div className="name_card">
        <h2>{name}</h2>
      </div>
      <div className="info">
        <p>{description}</p>
        <div className="buttons">
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaPlay />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
