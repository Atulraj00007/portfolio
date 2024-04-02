import './App.css';
import Header from './components/header/Header';
import Home from "./components/home/Home"
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Services from './components/services/Services'
import Qualification from './components/qualification/Qualification';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
