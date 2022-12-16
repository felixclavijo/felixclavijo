import React from "react";
import "./NewsDesarrollo.scss";
import SubTitle from "../../Components/SubTitle/SubTitle";
function NewsDesarrollo() {
  return (
    <div className="news_desarrollo">
      <hr className="line_decoration_right" />
      <SubTitle
        title="¡ Inverti en el mundo de las construcciones !"
        desc="Invertí en desarrollos de la más alta calidad, de forma transparente y profesional"
        txt_decoration={true}
      />
      <div style={{ marginLeft: "auto", width: "50%" }}>
        <hr className="line_decoration_left" />
      </div>



      
    </div>
  );
}
export default NewsDesarrollo;
