import './head.css'

function Head() {
    return(
        <div className="Container">
            <div className="LogoName">
                <h1>&lt;DIOGO /&gt;</h1>
            </div>
            <div>
                <ul className="infoList">
                    <li>
                        <a onClick={() =>window.scrollTo({ top: 800, behavior: "smooth" })}>Sobre mim</a>
                    </li>
                    <li>
                        <a onClick={() =>window.scrollTo({ top: 1400, behavior: "smooth" })}>Conhecimentos</a>
                    </li>
                    <li>
                        <a onClick={() =>window.scrollTo({ top: 2000, behavior: "smooth" })}>Projetos</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Head;