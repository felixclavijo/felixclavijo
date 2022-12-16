import React from "react";
import "./ModalContact.scss";
function ModalContact() {
  return (
    <div
      className="modal fade"
      id="contactModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Contacto</h1> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <button type="button" className="btn btn-c" style={{ backgroundColor:"#48C857", color: "white"}}>
                WHATSAPP
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-c" style={{ backgroundColor:"#DD0BFF", color: "white"}}>
               INSTAGRAM
              </button>
            </div>
            <div>
              <button type="button" class="btn btn-primary btn-c">
                FACEBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalContact;
