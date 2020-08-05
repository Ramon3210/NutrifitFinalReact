import React, { Component } from "react";
import { Container, Button, TextField } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

// import {
//   MenuIcon,
//   SearchIcon,
//   AccountCircle,
//   MailIcon,
//   NotificationsIcon,
//   MoreIcon
// } from "@material-ui/icons";

class Login extends Component {
  state = {
    hardcodedUser: {
      user: "iserm",
      password: "123"
    },
    usuario: "",
    password: "",
    error: false,
  };

  handleInputUser = event => {
    const usuario = event.target.value;
    this.setState({ usuario: usuario });
  };

  handleInputPass = event => {
    const password = event.target.value;
    this.setState({ password });
  };

  handleSubmit = () => {
    const { usuario } = this.state;
    const { password } = this.state;

    if (usuario === this.state.hardcodedUser.user) {
      if (password === this.state.hardcodedUser.password) {
        this.setState({ error: false })
        const { history } = this.props;
        if (history) history.push('/main');
      } else {
        this.setState({ error: true })
      }
    } else {
      this.setState({ error: true })
    }
  };

  render() {
    return (
      <Container maxWidth="sm">
        <form>
          <TextField
            id="user"
            label="Usuario"
            onChange={evento => this.handleInputUser(evento)}
            value={this.state.usuario}
            error={this.state.error}
          />
          <br />
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            onChange={evento => this.handleInputPass(evento)}
            value={this.state.password}
            error={this.state.error}
          />
          <br />
          <br />

          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Iniciar sesion
          </Button>
        </form>
      </Container>
    );
  }
}

export default withRouter(Login);