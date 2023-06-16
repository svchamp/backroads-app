import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Tours from './components/Tours';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
