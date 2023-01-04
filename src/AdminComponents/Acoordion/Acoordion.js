import React, { useState, useEffect, useRef } from "react";
import "./Acoordion.scss";
import img from "./../../assets/arrowdown.png";
import { FaTrash } from "react-icons/fa";
import Inputbox from "../Inputbox/Inputbox";
import ChooseFile from "../ChooseFile/ChooseFile";
export default function Accordion({ name }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <span>{name}</span>
        <div>
          <FaTrash className="icon-trash" />
          <img className={toggle && "activei"} src={img} />
        </div>
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <div aria-hidden={toggle ? "true" : "false"} className="accordion-body">
          <div style={{ padding: "5px" }}>
            <div style={{ width: "49%" }}>
              <Inputbox
                stylei={true}
                name="title"
                type="text"
                defaultValue={"equis"}
                placeholder="Type Here"
                onChange={(e) => e}
              />
            </div>

            <div>slice images</div>

            <div className="row">
              <div className="col">
                <div style={{ marginBottom: "2%" }}>
                  <Inputbox
                    stylei={true}
                    name="title"
                    type="text"
                    defaultValue={""}
                    placeholder="Type Here"
                    onChange={(e) => e}
                  />
                </div>

                <div style={{ marginBottom: "2%" }}>
                  <Inputbox
                    stylei={true}
                    name="title"
                    type="text"
                    defaultValue={""}
                    placeholder="Type Here"
                    onChange={(e) => e}
                  />
                </div>
                <div style={{ marginBottom: "2%" }}>
                  <Inputbox
                    stylei={true}
                    name="title"
                    type="text"
                    defaultValue={""}
                    placeholder="Type Here"
                    onChange={(e) => e}
                  />
                </div>
                <div style={{  marginBottom: "2%"}}>
                  <Inputbox
                    stylei={true}
                    name="title"
                    type="text"
                    defaultValue={""}
                    placeholder="Type Here"
                    onChange={(e) => e}
                  />
                </div>
              </div>
              <div className="col">
              <div style={{ marginBottom: "2%"}}>
                  <Inputbox
                    stylei={true}
                    name="title"
                    type="text"
                    defaultValue={""}
                    placeholder="Type Here"
                    onChange={(e) => e}
                  />
                </div>
                <div style={{ marginBottom: "2%" }}>
                  <Inputbox
                    stylei={true}
                    name="title"
                    type="text"
                    defaultValue={""}
                    placeholder="Type Here"
                    onChange={(e) => e}
                  />
                </div>
                <div style={{marginBottom: "2%" }}>
                  <Inputbox
                    stylei={true}
                    name="title"
                    type="text"
                    defaultValue={""}
                    placeholder="Type Here"
                    onChange={(e) => e}
                  />
                </div>
                <ChooseFile
                  name="Choose Image"
                  id="bgimg"
                  onChange={(e) => e}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
