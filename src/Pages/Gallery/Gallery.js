import React, { useState } from "react";
import ModalGallery from "../../Components/ModalGallery/ModalGallery";
import "./Gallery.scss";

function Gallery() {
    const [modalg, setModalg] = useState(null);
    const [tempImageSrc, setTempImageSrc]= useState ('')

    const  getImage =(imgSrc)=>{
setTempImageSrc(imgSrc)
setModalg(true)
    }
  let data = [
    {
      id: 1,
      title: "Obra Publica",
      image:
        "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
    },
    {
      id: 2,
      title: "Casa Mercdes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52yAGeb9Ogu2TAcFFno_ou4HqjFGlTME1GS2r0ULRuciYP8FtpyHLSVOJ4dElgh-Zzb4&usqp=CAU",
    },
    {
      id: 3,
      title: "Casa Mercdes",
      image:
        "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
    },
    {
      id: 4,
      image:
        "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
    },
    {
      id: 5,
      title: "Galeria Comercial",
      image:
        "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
    },
    {
      id: 6,
      image:
        "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
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
            <div className="col-sm">
            <div className="overlay" onClick={()=>getImage(i.image)}>
              <img src={i.image} alt="img" />
              </div>
              <div className="bottom-left">{ i.title}</div>
            </div>
          ))}
        </div>

  
      </div>
      {modalg && <ModalGallery setModalg={setModalg} modalg={modalg} tempImageSrc={tempImageSrc}/>}


    </div>
  );
}

export default Gallery;
