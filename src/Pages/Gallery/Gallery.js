import React, { useContext, useEffect, useState } from "react";
import ModalGallery from "../../Components/ModalGallery/ModalGallery";
import { ThemeContext } from "../../context/ThemeContext";
import "./Gallery.scss";

// prettier-ignore
function Gallery() {
	const [modalg, setModalg] = useState(null);
	const [tempImageSrc, setTempImageSrc] = useState("");

	const { setApp_height } = useContext(ThemeContext)

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
							<div className="overlay" onClick={() => getImage(i.image)}>
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

		<div className="containerg">
			<div className="row grid-gall">
				{/* {
					data?.map((i, index) => (
						<div className="col-md" key={index}>
							<div className="overlay" onClick={() => getImage(i.image)}>
								<div className="containeri">
								<div className="img_container">
									<img src={i.image} alt="img" className="img_fe" />
								</div>
								<div className="bottom-left">
									<h3 style={{ float: "left", textAlign: "left" }}>
										{i.title}
									</h3>
									<p className="p-subtitle">
										{i.subtitle}
									</p>
								</div>
								</div>
							</div>
						</div>
					))
				} */}
				{/* <div className="containerg">
					<div className="row grid-gall">
						{
							data?.map((i) => (
								<div className="col-sm">
									<div className="overlay" onClick={() => getImage(i.image)}>
										<img src={i.image} alt="img" />
									</div>
									<div className="bottom-left">{i.title}</div>
								</div>
							))
						}
					</div>
				</div> */}
				{
					modalg && (
						<ModalGallery
							setModalg={setModalg}
							modalg={modalg}
							tempImageSrc={tempImageSrc}
						/>
					)
				}
			</div>
		</div>
		{
			modalg && (
				<ModalGallery
					setModalg={setModalg}
					modalg={modalg}
					tempImageSrc={tempImageSrc}
				/>
			)
		}
		</div>
	);
}

export default Gallery;
