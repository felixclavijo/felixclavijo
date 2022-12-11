import React, { useContext, useEffect, useState } from "react";
import ModalGallery from "../../Components/ModalGallery/ModalGallery";
import { ThemeContext } from "../../context/ThemeContext";
import "./Gallery.scss";

// prettier-ignore
function Gallery() {
	const [modal, setModal] = useState(false);
	const [imageindex, setImageIndex] = useState();

	const { setApp_height } = useContext(ThemeContext)

	const getImage = (index) => {
		setImageIndex(index);
		setModal(true);
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
			image: require("../../assets/ImagesGallery/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg"),
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

	const galleryImg = (e, i) => {
		if(e.target.clientHeight) {
			if(e.target.clientHeight < document.getElementsByClassName('col-md')[i].clientHeight) {
				e.target.style.height = '100%'
				e.target.style.width = null
			} else {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
			if(e.target.clientHeight < document.getElementsByClassName('col-md')[i].clientHeight) {
				e.target.style.width = null
				e.target.style.height = '100%'
			}
			if(e.target.clientWidth < document.getElementsByClassName('col-md')[i].clientWidth) {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
		} else {
			var all_col = document.getElementsByClassName('col-md')
			var all_img = document.getElementsByClassName('gallery_img')
			for(var j=0; j < all_col.length; j++) {
				if(all_col[j].clientHeight > all_img[j].clientHeight) {
					all_img[j].style.height = '100%'
					all_img[j].style.width = null
				} else {
					all_img[j].style.width = '100%'
					all_img[j].style.height = null
				}
				if(all_col[j].clientWidth > all_img[j].clientWidth) {
					all_img[j].style.width = '100%'
					all_img[j].style.height = null
				}
			}
		}
	}
	
	useEffect(() => {
		setApp_height(document.getElementsByClassName('App')[0].clientHeight)

		window.addEventListener('resize', galleryImg)
        
        return () => window.removeEventListener('resize', galleryImg)
	}, [setApp_height])

	return (
		<div className="Gallery">
		<div className="title-gallery">
			<h2>GALERIA DE PROYECTOS</h2>
			<hr className="line_hr" />
		</div>

		<div className="container-fluid">
			<div className="grid">
				{
					data?.map((d, i) => 
						<div className="col-md p-1" key={i}>
							<div className="overlay" onClick={() => getImage(i)}>
								<div className="img_container">
									<img src={d.image} alt="gallery" className="gallery_img" onLoad={(e) => galleryImg(e, i)}/>
								</div>
								<div className="gallery_text">
									<h3 className="title">{d.title}</h3>
									<p className="p-subtitle">{d.subtitle}</p>
								</div>
							</div>
						</div>
					)
				}
			</div>
		</div>
		<ModalGallery
			data={data}
			setModal={setModal}
			modal={modal}
			imageindex={imageindex}
			setImageIndex={setImageIndex}
		/>
		</div>
	);
}

export default Gallery;
