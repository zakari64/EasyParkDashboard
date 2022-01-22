import React from "react";
import "./form3.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Form3() {
  return (
    <section>
      <div className="title">Réserver votre place</div>
      <div className="form">
        <div className="inputs1">
          <input type="text" placeholder="Entrez le nom " />
          <input type="text" placeholder="Entrez le prenom" />
        </div>
        <div className="inputs2">
          <input type="text" placeholder="Type de véhicule" />
          <input type="text" placeholder="Immatriculation" />
        </div>
        <div className="inputs3">
          <input type="time" placeholder="De" />
          <input type="time" placeholder="A" />
        </div>
        <div className="inputs4">
          <input type="number" placeholder="Marge de retard en (min)" />
        </div>

        <div className="btn">
          <Link to="/layout/Succes">
            <Button
              style={{
                padding: "10px",
                backgroundColor: "#1F90D9",
              }}
              variant="outlined"
            >
              Envoyer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Form3;
