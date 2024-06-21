// pages/index.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/About';
import Packages from './components/Packages';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Packages />
      <Footer/>
    </div>
  );
};

export default Home;
