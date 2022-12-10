import React from "react";
import "./ModalGallery.scss";
// import { motion } from "framer-motion";
function ModalGallery({ modalg, setModalg, tempImageSrc }) {
    // const CloseModalg = (e) => {
    //     setModalg(false);
    // };
    // console.log(modalg, "modalg");

    return (
        <div className="modal_content">
            <img src={tempImageSrc} alt="modal" />
            <p style={{ color: "white", fontSize: "20px" }}>
                {" "}
                Casa de verano de los angeles, contruida con mano de obra y
                materiales reciclabes, el enfoque fue en la comodidad del
                cliente
            </p>
        </div>
    );
}
export default ModalGallery;
