
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from './pages/NotFound';



function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Html" element={< Html />} />
        <Route path="/Css" element={<Css />} />
        <Route path="/Logo" element={<Logo />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter >
  );
};

export default App;
