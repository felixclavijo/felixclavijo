import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { CheckImage, readURL } from "../../AdminFunctions/AdminFunctions";
import ChooseFile from "../ChooseFile/ChooseFile";
import InputArea from "../InputArea/InputArea";
import Inputbox from "../Inputbox/Inputbox";

import "./DevProAcoordion.scss";

// prettier-ignore
function DevProAcoordion({ devnews, ...props}) {

    const { admin, adminInsert } = props

	const formikRef = useRef()

    const [upd_images, setUpdImages] = useState(devnews?.image)
    const [imgerror, setImgError] = useState(false)

    const initialValues = {
        id: devnews?.id,
        image: devnews?.image,
        title: devnews?.title,
        description: devnews?.description
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
        if(!values.description) errors.description = "Required"
        if(upd_images.length === 0) setImgError(true)
        return errors
    }

	const handleChange = (e, values) => {
		formikRef.current?.handleChange(e)
		var update = {
			...admin,
			devpro: {
				...admin.devpro,
				data: admin.devpro.data.map((el, i) => 
					i === devnews?.id-1 
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
        <div className="devproaccordion">
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
										value={devnews?.title}
										placeholder="Type Here"
										onChange={(e) => handleChange(e, values)}
										handleBlur={handleBlur}
										error={errors.title}
										touched={touched.title}
									/>
								</div>
								<div className="row">
									<div className="col-md-6 d-flex justify-content-center align-items-center">
                                        <div className="img_box">
								            <img id={`acoordionDevpro${devnews?.id}`} src={typeof devnews?.image === 'object' ? readURL(devnews?.image, `acoordionDevpro${devnews?.id}`) : devnews?.image} className="h-100" alt="newsImage" />
                                        </div>
									</div>
									<div className="col-md-6">
										<ChooseFile
											name="Choose Image"
											id={`bgupd`+devnews?.id}
											onChange={(e) => {
												var val = CheckImage(e)
												if(val !== null) {
													if(e.target.files.length !== 0) {
														setImgError(false)
														var updImg = {
															...admin,
															devpro: {
																...admin.devpro,
																data: admin.devpro.data.map((el, i) => 
																	i === devnews?.id-1 
																	? {
																		...values,
																		image: e.target.files[0]
																	}
																	: el
																),
															}
														}
														adminInsert(updImg)
														setUpdImages(e.target.files[0])
													}
												}
											}}
										/>
										{imgerror ? <div className="text-danger text-start">Required</div> : null}
                                        <InputArea name='News Description' type='text' value={devnews?.description} placeholder='Type Here' rows={5}
                                            onChange={(e) => {
                                                adminInsert({
                                                    ...admin,
                                                    devpro: {
                                                        ...admin.devpro,
                                                        data: admin.devpro.data.map((el, i) => 
                                                            i === devnews?.id-1 
                                                            ? {
                                                                ...values,
                                                                description: e.target.value
                                                            }
                                                            : el
                                                        ),
                                                    }
                                                })
                                            }}
                                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(DevProAcoordion);
