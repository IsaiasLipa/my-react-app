
import './Header.css';
import Logo1_White from '../assets/Logo1_White.png';

export default function Header() {

    return (
        <header className="header">
            <nav className="nav-bar">
                    <div className="logo-background">   <img src={Logo1_White} alt="Lipaid Logo"  className="logo"/> </div>
                    <div className="nav-buttons">
                        <div className="nav-buttons">
                            <a className='nav-button' href="#home">Home</a>
                            <a className='nav-button' href="#about">About</a>
                            <a className='nav-button' href="#contact">Contact</a>
                        </div>
                    </div>
            </nav>
        </header>

    );
}
