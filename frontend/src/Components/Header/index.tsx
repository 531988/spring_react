import logo from "../../assets/img/logo.jpg";
import './styles.css';

function Header() {
    return (

        <header>
        <div className ="dsmeta-logo-container">
            <img src= {logo} alt="DSMeta" />
            <h1>AAC-Security</h1>
            <p>Desenvolvido por
                <a href="https://www.instagram.com/alexs.alexsandrocosta/"> @AAC-Security</a>
            </p>
        </div>
    </header>


    )
}
export default Header