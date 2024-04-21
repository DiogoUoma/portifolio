import './footer.css';

function Footer() {
    return(
        <div className='footerContainer'>
            <footer>
                <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='buttonTopo'>Voltar ao Topo ↑</a>
            </footer>
        </div>
    );
}

export default Footer;