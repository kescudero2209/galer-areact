import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import image from './assets/images';
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
    <body class="text-bg-light">
      <Header title="Galería de gatos con React" />
      <section>
      <Card src={image.img1} alt="Gato Absinio" title="Gato Absinio" description="Raza de gato de constitución media" />
      <Card src={image.img2} alt="Gato Asiático" title="Gato Asiático" description="Raza de gato esbelta y elegante" />
      <Card src={image.img3} alt="Gato Balinés" title="Gato Balinés" description="Raza de gato esbelta y elegante" />
      <Card src={image.img4} alt="Gato Bengalí" title="Gato Bengalí" description="Raza de gato esbelta y elegante" />
      <Card src={image.img5} alt="Gato Bobtail" title="Gato Bobtail" description="Raza de gato esbelta y elegante" />
      <Card src={image.img6} alt="Gato Bombay" title="Gato Bombay" description="Raza de gato de constitución media" />
      <Card src={image.img7} alt="Gato Bosque de Noruega" title="Gato Bosque de Noruega" description="Raza de gato más grande y robusta" />
      <Card src={image.img8} alt="Gato Bosque de Siberia" title="Gato Bosque de Siberia" description="Raza de gato más grande y robusta" />
  </section>
  <Footer parrafo="Galería de imágenes sobre gatos"/>
  </body>
  </>
  );
}

export default App;
