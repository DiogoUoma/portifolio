import './main.css';

function Main() {
    return(
        <div className="mainContainer">
            <div className='myImage'>
                <img src={require('../../imagens/programmer.png')} alt="minha foto" />
            </div>
            <div className="mainText">
                <div className='text'>
                    <p>Hello World,</p>
                    <h1>Diogo, Desenvolvedor Front-end.</h1>
                    <p>Bem-vindo!</p>
                </div>
                <div className='socials'>
                    <a href="https://www.linkedin.com/in/diogo-uoma-b93355205/">
                        <img src={require('../../imagens/linkedin.png')} alt="logo linkedin" />
                    </a>
                    <a href="https://github.com/DiogoUoma">
                        <img src={require('../../imagens/github.png')} alt="logo github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;