import React from "react";
import "./ModalProject.scss";
function ModalProject({ imgp }) {
  console.log(imgp, "image in modal");
  return (
    <div
      className="modal fade m-project"
      id="exampleModal"
      tabindex="-1"
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
            <div className="row">
              <div >
                <img
                className="project_modal_img"
                  src={
                    imgp?.img
                      ? imgp?.img
                      : "/static/media/test1.a999ca50641770d988dd.png"
                  }
                  key={imgp?.key}
                  alt="img_modal"
                />
              </div>
              <div >
                <div className="title-project">
                  <h4 style={{ fontSize: "30px" }}>
                    Proyecto Galeria Comercial
                  </h4>
                  <hr className="line_hr" />
            
                </div>
                <div className="box-modal-datap">



          
                <div className="box-subdiv-modal-datap">
                    <div className="rowdata">
                      <p className="datap1">Dirección: </p>
                      <p className="datap2">Entre Rios 2162</p>
                    </div>
                    <div className="rowdata">
                      <p className="datap1" >Ciudad: </p>
                      <p className="datap2">Buenos Aires, Argentina</p>
                    </div>
                    <div className="rowdata">
                      <p className="datap1">Año de proyecto: </p>
                      <p className="datap2">2017</p>
                    </div>
                    <div className="rowdata">
                      <p className="datap1">Estado: </p>
                      <p className="datap2">En construcción</p>
                    </div>
                    <div className="rowdata">
                      <p className="datap1">Superficie: </p>
                      <p className="datap2">3412 m2</p>
                    </div>
                    <div className="rowdata">
                      <p className="datap1">Unidades: </p>
                      <p className="datap2">63 viviendad</p>
                    </div>
                    <div className="rowdata">
                      <p className="datap1">Local: </p>
                      <p className="datap2">1 local comercial</p>
                    </div>
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
