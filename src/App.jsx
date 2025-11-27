import './App.css'
import {translations} from './i18n.js'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
function App() {


  return (
    <>
     <Header/>
     <main className="app-content">
        <Home id="home"/>

        <About id="about"/>
        <Contact id="contact"/>
      </main>
    </>
  )
}

export default App
