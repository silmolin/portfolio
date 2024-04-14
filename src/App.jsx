import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./components/Test";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="Services">Parallax</section>
    <section>Servicios</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contacto">Contacto</section>
    {/* <Test/> */}
  </div>;
};

export default App;
