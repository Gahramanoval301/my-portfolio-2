import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div className="app-wrapper">
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>;

    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Services "><Parallax type="services" /></section>
    <Services/>
    <section id="Contact">
      <Contact />
    </section>
  </div>
};

export default App;
