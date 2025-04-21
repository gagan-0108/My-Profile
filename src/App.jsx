import { Toaster } from "react-hot-toast";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Toaster 
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          maxWidth: '500px',
          padding: '16px 24px',
          fontSize: '1.1rem',
          fontWeight: '500',
        },
      }}
    />
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;