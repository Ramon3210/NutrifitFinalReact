import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Button } from "@material-ui/core";
import logoNUTRICION from "../logoNUTRICION.png";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="App-content">
        <Container maxWidth="sm">
          <Link to="/datos">
            <Button variant="contained" color="default">
              Datos
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/evaluacion">
            <Button variant="contained" color="default">
              Evaluación
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/comidas">
            <Button variant="contained" color="default">
              Comidas
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/actividad">
            <Button variant="contained" color="default">
              Actividad física
            </Button>
          </Link>
          <img src={logoNUTRICION} className="App-logo" alt="logoNUTRICION" />
        </Container>
      </div>
    );
  }
}

export default Content;
