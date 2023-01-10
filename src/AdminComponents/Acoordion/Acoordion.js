import React, { useRef, useState } from "react";
import "./Acoordion.scss";
// import { FaTrash } from "react-icons/fa";
import Inputbox from "../Inputbox/Inputbox";
import ChooseFile from "../ChooseFile/ChooseFile";
import ImageSlider from "../ImageSlider/ImageSlider";
import { connect } from "react-redux";
import { Formik } from "formik";
import { CheckImage } from "../../AdminFunctions/AdminFunctions";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// prettier-ignore
function Accordion({ gallery, ...props }) {

	const { admin, adminInsert } = props

	const formikRef = useRef()

    const [upd_images, setUpdImages] = useState(gallery.image)
    const [imgerror, setImgError] = useState(false)

    const initialValues = {
        id: gallery.id,
        title: gallery.title,
        Direccion: gallery.Direccion,
        Ciudad: gallery.Ciudad,
        Año: gallery.Año,
        Local: gallery.Local,
        Estado: gallery.Estado,
        Superficie: gallery.Superficie,
        Unidades: gallery.Unidades,
        image: gallery.image,
    }

    const onSubmit = (values, {resetForm}) => {
		console.log(values)
        if(!imgerror) {
            // values.id = admin?.projects.data.length + 1
            // values.image = selected_images
            // var upd = {
            //     ...admin,
            //     projects: {
            //         ...admin.projects,
            //         data: [
            //             ...admin.projects.data,
            //             values
            //         ]
            //     }
            // }
            // adminInsert(upd)
            // setSelectedImages([])
            // resetForm()
        }
    }

    const validate = (values) => {
        const errors = {}
        if(!values.title) errors.title = "Required"
        if(!values.Direccion) errors.Direccion = "Required"
        if(!values.Ciudad) errors.Ciudad = "Required"
        if(!values.Año) errors.Año = "Required"
        if(!values.Local) errors.Local = "Required"
        if(!values.Estado) errors.Estado = "Required"
        if(!values.Superficie) errors.Superficie = "Required"
        if(!values.Unidades) errors.Unidades = "Required"
        if(upd_images.length === 0) setImgError(true)
        return errors
    }

	const handleChange = (e, values) => {
		formikRef.current?.handleChange(e)
		var update = {
			...admin,
			projects: {
				...admin.projects,
				data: admin.projects.data.map((el, i) => 
					i === gallery.id-1 
					? {
						...values,
						[e.target.name]: e.target.value
					}
					: el
				),
			}
		}
		adminInsert(update)
	}

    return (
        <div className="accordion">
			<Formik
				innerRef={formikRef}
				initialValues={initialValues}
				validate={validate}
				onSubmit={onSubmit}
			>
				{
					({ values, errors, touched, handleBlur, handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<div className="container-fluid">
								<div className="title_accordion">
									<Inputbox
										name="title"
										type="text"
										defaultValue={gallery.title}
										placeholder="Type Here"
										onChange={(e) => handleChange(e, values)}
										handleBlur={handleBlur}
										error={errors.title}
										touched={touched.title}
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
											onChange={(e) => handleChange(e, values)}
											error={errors.Direccion}
											touched={touched.Direccion}
										/>
										<Inputbox
											name="Ciudad"
											type="text"
											defaultValue={gallery.Ciudad}
											placeholder="Type Here"
											onChange={(e) => handleChange(e, values)}
											error={errors.Ciudad}
											touched={touched.Ciudad}
										/>
										<Inputbox
											name="Año"
											type="text"
											defaultValue={gallery.Año}
											placeholder="Type Here"
											onChange={(e) => handleChange(e, values)}
											error={errors.Año}
											touched={touched.Año}
										/>
										<Inputbox
											name="Local"
											type="text"
											defaultValue={gallery.Local}
											placeholder="Type Here"
											onChange={(e) => handleChange(e, values)}
											error={errors.Local}
											touched={touched.Local}
										/>
									</div>
									<div className="col-md">
										<Inputbox
											name="Estado"
											type="text"
											defaultValue={gallery.Estado}
											placeholder="Type Here"
											onChange={(e) => handleChange(e, values)}
											error={errors.Estado}
											touched={touched.Estado}
										/>
										<Inputbox
											name="Superficie"
											type="text"
											defaultValue={gallery.Superficie}
											placeholder="Type Here"
											onChange={(e) => handleChange(e, values)}
											error={errors.Superficie}
											touched={touched.Superficie}
										/>
										<Inputbox
											name="Unidades"
											type="text"
											defaultValue={gallery.Unidades}
											placeholder="Type Here"
											onChange={(e) => handleChange(e, values)}
											error={errors.Unidades}
											touched={touched.Unidades}
										/>
										<ChooseFile
											name="Choose Image"
											id={`bgupd`+gallery.id}
											onChange={(e) => {
												var val = CheckImage(e)
												if(val !== null) {
													if(e.target.files.length !== 0) {
														setImgError(false)
														var updImg = {
															...admin,
															projects: {
																...admin.projects,
																data: admin.projects.data.map((el, i) => 
																	i === gallery.id-1 
																	? {
																		...values,
																		image: [...el.image, e.target.files[0]]
																	}
																	: el
																),
															}
														}
														adminInsert(updImg)
														setUpdImages([...values.image, e.target.files[0]])
													}
												}
											}}
										/>
										{imgerror ? <div className="text-danger text-start">Required</div> : null}
									</div>
								</div>
							</div>
						</form>
					)
				}
			</Formik>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        adminInsert: (val) => {
            dispatch({
                type: "ADMIN",
                item: val,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
