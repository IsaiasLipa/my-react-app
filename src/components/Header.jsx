
import './Header.css';
import Logo1_White from '../assets/Logo1_White.png';

export default function Header( {texts}) {
    return (
        <header className="header">
            <nav className="nav-bar">
                    <div className="logo-background">   <img src={Logo1_White} alt="Lipaid Logo"  className="logo"/> </div>
                    <div className="nav-buttons">
                        <div className="nav-buttons">
                            <a className='nav-button' href="#home"> {texts.home}</a>
                            <a className='nav-button' href="#about"> {texts.about} </a>
                            <a className='nav-button' href="#contact"> {texts.contact}</a>
                        </div>
                    </div>
            </nav>
        </header>

    );
}
