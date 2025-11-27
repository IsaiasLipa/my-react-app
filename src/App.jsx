import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { translations } from './i18n.js'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <>
      <Header texts={translations[language].header} />
      <main className="app-content">
        <Home id="home" texts={translations[language].home} />

        <About id="about" texts={translations[language].aboutUs} />
        <Contact id="contact" texts={translations[language].contact} />
      </main>
      <button
        onClick={() => setLanguage( language === 'en' ? 'es' : 'en')}
      >
        {language === 'en' ? 'Espanol' : 'English'}
      </button>
    </>
  )
}

export default App
