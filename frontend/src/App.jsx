import Navbar from './features/common/Navbar'
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./features/common/Footer";
import Form from "./features/form/Form";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Form />
      <Footer />
    </>
  );
}

export default App;
