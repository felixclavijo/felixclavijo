import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import { CheckImage, readURL } from "../../AdminFunctions/AdminFunctions";
import ChooseFile from "../ChooseFile/ChooseFile";
import InputArea from "../InputArea/InputArea";
import Inputbox from "../Inputbox/Inputbox";

import "./AddDevPro.scss";

// prettier-ignore

function AddDevPro(props) {

    const { admin, adminInsert } = props

    const [selected_images, setSelectedImages] = useState('')
    const [imgerror, setImgError] = useState(false)

    const initialValues = {
        id: 0,
        image: "",
        title: "",
        description: ""
    }

    const onSubmit = (values, {resetForm}) => {
        if(!imgerror) {
            values.id = admin?.devpro.data.length + 1
            values.image = selected_images
            var upd = {
                ...admin,
                devpro: {
                    ...admin.devpro,
                    data: [
                        ...admin.devpro.data,
                        values
                    ]
                }
            }
            adminInsert(upd)
            setSelectedImages('')
            resetForm()
        }
    }

    const validate = (values) => {
        const errors = {}
        if(!values.title) errors.title = "Required"
        if(!values.description) errors.description = "Required"
        if(selected_images.length === 0) setImgError(true)
        return errors
    }

    return (
        <div className="modal fade" id="adddevpro" tabIndex="-1" role="dialog" aria-labelledby="adddevproLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add DevPro</h4>
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
                            ({ values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm }) => (
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
                                                <div className="row">
                                                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                                                        <div className="img_box">
                                                            {
                                                                selected_images === ''
                                                                ? <span>No Image Selected</span>
                                                                : <img id={'devpro'+values.id} src={typeof selected_images === 'object' ? readURL(selected_images, 'devpro'+values.id) : selected_images} className="h-100" alt="newsImage" />
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ChooseFile
                                                            name="Choose Image"
                                                            id={`bgupd`}
                                                            onChange={(e) => {
                                                                var val = CheckImage(e)
                                                                if(val !== null) {
                                                                    if(e.target.files.length !== 0) {
                                                                        setImgError(false)
                                                                        setSelectedImages(e.target.files[0])
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                        {imgerror ? <div className="text-danger text-start">Required</div> : null}
                                                        <InputArea 
                                                            name='description' 
                                                            type='text' 
                                                            value={values.description} 
                                                            placeholder='Type Here' 
                                                            rows={5}
                                                            onChange={handleChange}
                                                            handleBlur={handleBlur}
                                                            error={errors.description}
                                                            touched={touched.description}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn" data-bs-dismiss="modal" 
                                            onClick={() => {
                                                setImgError(false)
                                                setSelectedImages('')
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

export default connect(mapStateToProps, mapDispatchToProps)(AddDevPro);
