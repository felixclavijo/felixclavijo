import React from "react";
import "./ModalProject.scss";

// prettier-ignore
function ModalProject({ imgp }) {
	// console.log(imgp, "image in modal");
	return (
		<div
			className="modal fade m-project"
			id="exampleModal"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
							<div>
								<img className="project_modal_img w-100" src={imgp ? imgp?.image[0] : null} key={imgp?.id} alt="img_modal" />
							</div>
							<div>
								<div className="title-project">
									<h4 style={{ fontSize: "30px" }}>
										Proyecto {imgp?.title}
									</h4>
									<hr className="line_hr" />
						
								</div>
								<div className="box-modal-datap">
									<div className="box-subdiv-modal-datap">
										<div className="rowdata">
											<p className="datap1">Dirección: </p>
											<p className="datap2">{imgp?.Direccion}</p>
										</div>
										<div className="rowdata">
											<p className="datap1" >Ciudad: </p>
											<p className="datap2">{imgp?.Ciudad}</p>
										</div>
										<div className="rowdata">
											<p className="datap1">Año de proyecto: </p>
											<p className="datap2">{imgp?.Año}</p>
										</div>
										<div className="rowdata">
											<p className="datap1">Estado: </p>
											<p className="datap2">{imgp?.Estado}</p>
										</div>
										<div className="rowdata">
											<p className="datap1">Superficie: </p>
											<p className="datap2">{imgp?.Superficie}</p>
										</div>
										<div className="rowdata">
											<p className="datap1">Unidades: </p>
											<p className="datap2">{imgp?.Unidades}</p>
										</div>
										<div className="rowdata">
											<p className="datap1">Local: </p>
											<p className="datap2">{imgp?.Local}</p>
										</div>
									</div>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ModalProject;
