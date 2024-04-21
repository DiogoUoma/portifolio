import './main.css'
import React from 'react';

function Conhecimentos() {
    return(
        <div className='container'>
            <h2>Conhecimentos</h2>
            <div className="conhecimentos">
                <ul>
                    <li>
                        <img src={require('../../imagens/tecnologias/html.png')} alt="html logo" />
                    </li>
                    <li>
                        <img src={require('../../imagens/tecnologias/css.png')} alt="css logo" />
                    </li>
                    <li>
                        <img src={require('../../imagens/tecnologias/javascript.png')} alt="javascript logo" />
                    </li>
                    <li>
                        <img src={require('../../imagens/tecnologias/react.png')} alt="react logo" />
                    </li>
                    <li>
                        <img src={require('../../imagens/tecnologias/git.png')} alt="git logo" />
                    </li>
                    <li>
                        <img src={require('../../imagens/github.png')} alt="github logo" />
                    </li>
                </ul>
            </div>
            <h2>Aprendendo</h2>
            <div className='learning'>
                <ul>
                    <li>
                        <img src={require('../../imagens/tecnologias/angular.png')} alt="angular logo" />
                    </li>
                    <li>
                        <img src={require('../../imagens/tecnologias/csharp.jpg')} alt="c# logo" />
                    </li>
                    <li>
                        <img src={require('../../imagens/tecnologias/nodejs.png')} alt="nodejs logo" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Conhecimentos;