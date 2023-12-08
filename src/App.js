import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
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
          <Route path="/blog" exact element={<Blog />} />
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
