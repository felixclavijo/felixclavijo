import React, { useState } from "react";
import ModalGallery from "../../Components/ModalGallery/ModalGallery";
import "./Gallery.scss";

function Gallery() {
  const [modalg, setModalg] = useState(null);
  const [tempImageSrc, setTempImageSrc] = useState("");

  const getImage = (imgSrc) => {
    setTempImageSrc(imgSrc);
    setModalg(true);
  };

  let data = [
    {
      id: 1,
      title: "Obra Publica",
      subtitle: "Construcción de edificio municipal",
      image: require("../../assets/ImagesGallery/test1.png"),
    },
    {
      id: 2,

      image: require("../../assets/ImagesGallery/test2.png"),
    },
    {
      id: 3,
      title: "Casa Mercedes",
      subtitle: "Casa contemporanea con tecnologia",
      image: require("../../assets/ImagesGallery/test3.png"),
    },
    {
      id: 4,
      image: require("../../assets/ImagesGallery/test4.png"),
    },
    {
      id: 5,

      image: require("../../assets/ImagesGallery/test5.png"),
    },
    {
      id: 6,
      title: "Galeria Comercial",
      subtitle: "Diferentes locales de comercio en una galeria",
      image:
        "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
    },
    {
      id: 7,

      image: require("../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.48 PM.jpeg"),
    },
    {
      id: 8,
      title: "Obra de desarrollo",
      subtitle: "Desarrollo de obra",
      image: require("../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.47 PM.jpeg"),
    },
  ];

  return (
    <div className="Gallery">
      <div className="title-gallery">
        <p>GALERIA DE PROYECTOS</p>
      </div>

      <div className="containerg">
        <div className="row grid-gall">
          {data.map((i) => (
            <div className="col-sm" style={{ marginTop: "3%" }}>
              <div className="overlay" onClick={() => getImage(i.image)}>
                <div class="containeri">
                  <img src={i.image} alt="img" />
                  <div className="bottom-left">
                    <h3 style={{ float: "left", textAlign: "left" }}>
                      {i.title}
                    </h3>
                    <p
                     className="p-subtitle"
                    >
                      {i.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalg && (
        <ModalGallery
          setModalg={setModalg}
          modalg={modalg}
          tempImageSrc={tempImageSrc}
        />
      )}
    </div>
  );
}

export default Gallery;
