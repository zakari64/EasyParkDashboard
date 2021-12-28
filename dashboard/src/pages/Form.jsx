import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import "./form.css";

function Form() {
  return (
    <section className="contact">
      <div className="title">Ajout Utilisateur</div>
      <div  className="cnt">
        <form className="inputs">
          <input type="text" placeholder="Entrez Nom ..."  />
          <input type="text" placeholder="Entrez Prénom ..."  />
          <input type="email" placeholder="Entrez email ..." />
          <input type="text" placeholder="Entrez Telephone ..."  />
          <div className="btn">
            <Button variant="outlined" size="medium" style={{background:'#1F90D9', marginTop:'20px'}}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Form;
