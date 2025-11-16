import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';

import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Projects from './pages/Projects/projects.jsx';
import Contact from './pages/Contact/contact.jsx';

import './styles/global.css';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App