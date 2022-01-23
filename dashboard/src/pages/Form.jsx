import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import "./form.css";

function Form() {
  return (
    <section className="contact">
      <div className="title">Ajout d'employé</div>
      <div  className="cnt">
        <form className="inputs">
          <input type="text" placeholder="Entrez Nom ..."  />
          <input type="text" placeholder="Entrez Prénom ..."  />
          <input type="date" placeholder="Entrez date de naissance ..." />
          <input type="text" placeholder="Entrez N° voiture ..."  />
          <div className="btn">
            <Button variant="outlined" size="medium" style={{background:'#1F90D9', marginTop:'20pxq'}}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Form;
