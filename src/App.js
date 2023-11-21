import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Artistry from './pages/Artistry';
import Services from './pages/Services';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Header from './pages/components/Header';
import AsideLeft from './pages/components/AsideLeft';
import AsideRight from './pages/components/AsideRight';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <AsideLeft />
        <AsideRight />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/artistry" exact element={<Artistry />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/aboutme" exact element={<AboutMe />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
