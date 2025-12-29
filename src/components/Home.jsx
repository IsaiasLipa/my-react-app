import homeImage from '../assets/homeImage.png';
import './Home.css';

export default function Home({texts}) {
    return (
        <div className="hero">
            <img src={homeImage} alt="Home" className="hero-image" />

            <div className="hero-text">
                <p>{texts.title}</p>
            </div>

            <a className='book-button' href="#contact"> {texts.cta}</a>
        </div>
    );
}