import homeImage from '../assets/homeImage.png';
import './Home.css';

export default function Home() {
    return (
        <div className="hero">
            <img src={homeImage} alt="Home" className="hero-image" />

            <div className="hero-text">
                <p>Helping you get there because we care</p>
            </div>

            <button className='book-button'> Book your trip now</button>
        </div>

    );
}