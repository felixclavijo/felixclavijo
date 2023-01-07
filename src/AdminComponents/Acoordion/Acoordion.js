import React, { useEffect } from "react";
import "./Acoordion.scss";
// import { FaTrash } from "react-icons/fa";
import Inputbox from "../Inputbox/Inputbox";
import ChooseFile from "../ChooseFile/ChooseFile";
import ImageSlider from "../ImageSlider/ImageSlider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// prettier-ignore
export default function Accordion({ gallery }) {
    // const [toggle, setToggle] = useState(false);
    // const [heightEl, setHeightEl] = useState();

    // const refHeight = useRef();

    useEffect(() => {
        // console.log(refHeight);
        // setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    // const toggleState = () => {
    //     setToggle(!toggle);
    // };

    // console.log(selected_images);
    return (
        <div className="accordion">
			<div className="container-fluid">
				<div className="title_accordion">
					<Inputbox
						name="title"
						type="text"
						defaultValue={gallery.title}
						placeholder="Type Here"
						onChange={(e) => e}
					/>
				</div>
				<ImageSlider id={gallery.id} images={gallery.image} />
				<div className="row">
					<div className="col-md">
						<Inputbox
							name="Direccion"
							type="text"
							defaultValue={gallery.Direccion}
							placeholder="Type Here"
							onChange={(e) => e}
						/>
						<Inputbox
							name="Ciudad"
							type="text"
							defaultValue={gallery.Ciudad}
							placeholder="Type Here"
							onChange={(e) => e}
						/>
						<Inputbox
							name="Año"
							type="text"
							defaultValue={gallery.Año}
							placeholder="Type Here"
							onChange={(e) => e}
						/>
						<Inputbox
							name="Local"
							type="text"
							defaultValue={gallery.Local}
							placeholder="Type Here"
							onChange={(e) => e}
						/>
					</div>
					<div className="col-md">
						<Inputbox
							name="Estado"
							type="text"
							defaultValue={gallery.Estado}
							placeholder="Type Here"
							onChange={(e) => e}
						/>
						<Inputbox
							name="Superficie"
							type="text"
							defaultValue={gallery.Superficie}
							placeholder="Type Here"
							onChange={(e) => e}
						/>
						<Inputbox
							name="Unidades"
							type="text"
							defaultValue={gallery.Unidades}
							placeholder="Type Here"
							onChange={(e) => e}
						/>
						<ChooseFile
							name="Choose Image"
							id="bgimg"
							onChange={(e) => e}
						/>
					</div>
				</div>
			</div>
        </div>
    );
}
