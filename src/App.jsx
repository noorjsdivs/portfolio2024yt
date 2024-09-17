import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <main className="relative">
      <Header />
      <Banner />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
