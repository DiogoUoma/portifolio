import './about.css';

function Sobre() {
    return(
        <div className='container'>
            <h1>Sobre mim</h1>
            <div className="aboutMeContainer">
                <div className='textAboutMe'>
                    <h2>Olá,</h2>
                    <h3>
                        Me chamo Diogo, tenho 23 anos sou formado em Engenharia de Software pela universidade Unicesumar, desde de sempre fui apaixonado por jogos
                        o que dispertou o meu interesse pela área de programação, então comecei a estudar um pouco até que decidi levar como minha 
                        carreira, atualmente estou fazendo pós-graduação em desenvolvimento full stack, mas mantenho um foco a mais no Front-end. 
                        Possuo um perfil curioso gosto de estudar coisas novas e sempre aprimorar aquilo que já possuo conhecimento. 
                    </h3>
                </div>
                <img src={require("../../imagens/eu.jpg")} alt="imagem minha" />
            </div>
        </div>
    );
}

export default Sobre;