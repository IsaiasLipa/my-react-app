import homeImage from '../assets/homeImage.png';
import './Home.css';

export default function Home({texts}) {
    return (
        <div className="hero">
            <img src={homeImage} alt="Home" className="hero-image" />

            <div className="hero-text">
                <p>{texts.title}</p>
            </div>

            <button className='book-button'> {texts.cta}</button>
        </div>

    );
}