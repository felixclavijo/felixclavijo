import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Accordion from "../Acoordion/Acoordion";

import "./AddProject.scss";
import { connect } from "react-redux";
import ChooseFile from "../ChooseFile/ChooseFile";
import Inputbox from "../Inputbox/Inputbox";
import ImageSlider from "../ImageSlider/ImageSlider";
import { Formik } from "formik";

// prettier-ignore
function AddProject(props) {

    const { admin, adminInsert } = props

    const [selected_images, setSelectedImages] = useState([])
    const [imgerror, setImgError] = useState(false)

    const initialValues = {
        id: 0,
        title: "",
        Direccion: "",
        Ciudad: "",
        Año: "",
        Local: "",
        Estado: "",
        Superficie: "",
        Unidades: "",
        image: [],
    }

    const onSubmit = (values, {resetForm}) => {
        if(!imgerror) {
            values.id = admin?.projects.data.length + 1
            values.image = selected_images
            var upd = {
                ...admin,
                projects: {
                    ...admin.projects,
                    data: [
                        ...admin.projects.data,
                        values
                    ]
                }
            }
            adminInsert(upd)
            setSelectedImages([])
            resetForm()
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
        if(selected_images.length === 0) setImgError(true)
        return errors
    }

    return (
        <div className="modal fade" id="addproject" tabIndex="-1" role="dialog" aria-labelledby="addprojectLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Project</h4>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <FontAwesomeIcon icon="close" />
                            </span>
                        </button>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={onSubmit}
                    >
                        {
                            ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, resetForm}) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-body">
                                        <div className="accordion">
                                            <div className="container-fluid">
                                                <div className="title_accordion">
                                                    <Inputbox
                                                        name="title"
                                                        type="text"
                                                        value={values.title}
                                                        placeholder="Type Here"
                                                        onChange={handleChange}
                                                        handleBlur={handleBlur}
                                                        error={errors.title}
                                                        touched={touched.title}
                                                    />
                                                </div>
                                                <ImageSlider id={values.id} images={selected_images} />
                                                <div className="row">
                                                    <div className="col-md">
                                                        <Inputbox
                                                            name="Direccion"
                                                            type="text"
                                                            value={values.Direccion}
                                                            placeholder="Type Here"
                                                            onChange={handleChange}
                                                            error={errors.Direccion}
                                                            touched={touched.Direccion}
                                                        />
                                                        <Inputbox
                                                            name="Ciudad"
                                                            type="text"
                                                            value={values.Ciudad}
                                                            placeholder="Type Here"
                                                            onChange={handleChange}
                                                            error={errors.Ciudad}
                                                            touched={touched.Ciudad}
                                                        />
                                                        <Inputbox
                                                            name="Año"
                                                            type="text"
                                                            value={values.Año}
                                                            placeholder="Type Here"
                                                            onChange={handleChange}
                                                            error={errors.Año}
                                                            touched={touched.Año}
                                                        />
                                                        <Inputbox
                                                            name="Local"
                                                            type="text"
                                                            value={values.Local}
                                                            placeholder="Type Here"
                                                            onChange={handleChange}
                                                            error={errors.Local}
                                                            touched={touched.Local}
                                                        />
                                                    </div>
                                                    <div className="col-md">
                                                        <Inputbox
                                                            name="Estado"
                                                            type="text"
                                                            value={values.Estado}
                                                            placeholder="Type Here"
                                                            onChange={handleChange}
                                                            error={errors.Estado}
                                                            touched={touched.Estado}
                                                        />
                                                        <Inputbox
                                                            name="Superficie"
                                                            type="text"
                                                            value={values.Superficie}
                                                            placeholder="Type Here"
                                                            onChange={handleChange}
                                                            error={errors.Superficie}
                                                            touched={touched.Superficie}
                                                        />
                                                        <Inputbox
                                                            name="Unidades"
                                                            type="text"
                                                            value={values.Unidades}
                                                            placeholder="Type Here"
                                                            onChange={handleChange}
                                                            error={errors.Unidades}
                                                            touched={touched.Unidades}
                                                        />
                                                        <ChooseFile
                                                            name="Choose Image"
                                                            id="bgimg"
                                                            onChange={(e) => {
                                                                setImgError(false)
                                                                setSelectedImages([...selected_images, e.target.files[0]])
                                                            }}
                                                        />
                                                        {imgerror ? <div className="text-danger text-start">Required</div> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn" data-bs-dismiss="modal" 
                                            onClick={() => {
                                                setImgError(false)
                                                setSelectedImages([])
                                                resetForm()
                                            }}
                                        >Close</button>
                                        <button type="submit" className="btn" disabled={imgerror}>Save</button>
                                    </div>
                                </form>
                            )
                        }
                    </Formik>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
