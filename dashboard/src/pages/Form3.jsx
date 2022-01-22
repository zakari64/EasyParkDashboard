import React from "react";
import "./form3.css";
import Button from "@mui/material/Button";

function Form3() {
  return (
    <section>
      <div className="title">Réserver votre place</div>
      <div className="form">
        <div className="inputs1">
          <label for="">De</label>
          <input type="time" />
          <label for="">A</label>
          <input type="time" />

          <label for="">Entrez la marge de retard</label>
          <input type="text" />

          <div className="btn">
            <Button
              style={{
                padding: "10px",
                backgroundColor: "#1F90D9",
              }}
              variant="outlined"
            >
              Envoyer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Form3;
