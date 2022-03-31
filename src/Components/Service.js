import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactBnbGallery from "react-bnb-gallery";

import "./Service.css";

const photos = [
  {
    photo: "https://www.avanzaentucarrera.com/orientacion/comp/uploads/2014/02/T%C3%A9cnico-superior-en-mantenimiento-electr%C3%B3nico-848x449.jpg",
    caption: "ELECTRONIC",
    subcaption: "Electronics deals with attending, solving and studying issues related to the transformation of electricity",
    thumbnail: "https://www.avanzaentucarrera.com/orientacion/comp/uploads/2014/02/T%C3%A9cnico-superior-en-mantenimiento-electr%C3%B3nico-848x449.jpg",
    color: "white" 
  },
  {
    photo: "https://muchosnegociosrentables.com/wp-content/uploads/2021/11/que-se-hace-en-un-taller-de-carpinteria.jpg",
    caption: "CARPENTRY",
    subcaption: "Carpentry is the trade of working with wood to create useful and pleasant objects for the human being.",
    thumbnail: "https://muchosnegociosrentables.com/wp-content/uploads/2021/11/que-se-hace-en-un-taller-de-carpinteria.jpg"
  },
  {
    photo: "https://www.informeconstruccion.com/informeconstruccion/fotos/notas/2019/01/22/6004_20190122111653.jpg",
    caption: "PLUMBING",
    subcaption: "plumbing is the activity related to the installation and maintenance of pipe networks for the supply of drinking water and evacuation of wastewater",
    thumbnail: "https://www.informeconstruccion.com/informeconstruccion/fotos/notas/2019/01/22/6004_20190122111653.jpg"
  },
  {
    photo: "https://img.motoryracing.com/noticias/portada/25000/25615-n.jpg",
    caption: "MECHANICAL",
    subcaption: "mechanical deal with the construction, assembly and maintenance of industrial equipment and machinery.",
    thumbnail: "https://img.motoryracing.com/noticias/portada/25000/25615-n.jpg"
  },
  {
    photo: "https://static.comunicae.com/photos/notas/1183746/1492514614_cerrajeros_barnaclau_24h.jpg",
    caption: "LOCKSMITH",
    subcaption: "locksmith Person whose job is to make and fix keys, keys and other metal objects.",
    thumbnail: "https://static.comunicae.com/photos/notas/1183746/1492514614_cerrajeros_barnaclau_24h.jpg"
  }
];

function App() {
  const [galleryOpened, setGalleryOpened] = useState(true);
  const toggleGallery = () => setGalleryOpened(!galleryOpened);

  return (
    <div className="App">
      <h1>Armando Services</h1>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={toggleGallery}
      >
        Click here to view
      </button>
      <ReactBnbGallery
        show={galleryOpened}
        photos={photos}
        onClose={toggleGallery}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;