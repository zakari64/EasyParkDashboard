import React from "react";
import "../pages/succes.css";
import check from "../assets/images/checked.png";

function Succes() {
  return (
    <section className="wrap">
      <div className="wrapper">
        <img src={check} alt="" />
        <div className="title">Vous avez reservé une place !!!</div>
      </div>
    </section>
  );
}

export default Succes;
