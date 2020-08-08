import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { TextField } from "@material-ui/core";
import imgDatos from "../imgDatos.png";

//import { Button } from "@material-ui/core";
//import Dropdown from "react-dropdown";
//import "react-dropdown/style.css";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import {
  Button,
  Container,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";

// const ocupacion = [
//   "Profesionista",
//   "Comerciante",
//   "Ama de casa",
//   "Deportista",
//   "Campesino",
//   "Chofer",
//   "Servidor público",
//   "Estudiante",
//   "Otro(s)",
// ];

class DatosView extends Component {
  titulo = "DATOS DE MIS PACIENTES:";

  frmNombre = React.createRef();
  frmApaterno = React.createRef();
  frmAmaterno = React.createRef();
  frmEmail = React.createRef();
  frmTelefono = React.createRef();
  frmFechaNacimiento = React.createRef();



  constructor(props) {
    super(props);
    this.state = {
      value: "Paciente1",
      edit: false,
      idPaciente: 0,
      pacientes: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  addPaciente = event => {
    event.preventDefault();

    //const url = 'https://loop-back-app.mybluemix.net/api/pacientes';

    console.log("Sí entra");

    const data = {
      nombre: this.frmNombre.value,
      aPaterno: this.frmApaterno.value,
      aMaterno: this.frmAmaterno.value,
      email: this.frmEmail.value,
      telefono: this.frmTelefono.value,
      fechaNacimiento: this.frmFechaNacimiento.value,
    }

    if (!this.state.edit) {
      const url = "https://loop-back-app.mybluemix.net/api/pacientes/";
      axios.post(url, data).then(res => console.log(res.data));
      this.frmNombre.value = "";
      this.frmApaterno.value = "";
      this.frmAmaterno.value = "";
      this.frmEmail.value = "";
      this.frmTelefono.value = "";
      this.frmFechaNacimiento.value = "";

      this.frmNombre.focus();
      this.frmApaterno.focus();
      this.frmAmaterno.focus();
      this.frmEmail.focus();
      this.frmTelefono.focus();
      this.frmFechaNacimiento.focus();
    } else {
      const url = "https://loop-back-app.mybluemix.net/api/pacientes/" + this.state.id;
      const data = {
        nombre: this.frmNombre.value,
        aPaterno: this.frmApaterno.value,
        aMaterno: this.frmAmaterno.value,
        email: this.frmEmail.value,
        telefono: this.frmTelefono.value,
        fechaNacimiento: this.frmFechaNacimiento.value,
      }
      axios.put(url, data).then(res => console.log(res.data));
    }
    this.loadPaciente();
  }

  viewPaciente = (id) => event => {
    event.preventDefault();

    this.frmNombre.value = "";
    this.frmApaterno.value = "";
    this.frmAmaterno.value = "";
    this.frmEmail.value = "";
    this.frmTelefono.value = "";
    this.frmFechaNacimiento.value = "";
    this.frmNombre.focus();
    this.frmApaterno.focus();
    this.frmAmaterno.focus();
    this.frmEmail.focus();
    this.frmTelefono.focus();
    this.frmFechaNacimiento.focus();
    this.frmNombre.value = this.state.pacientes[id];
    this.frmApaterno.value = this.state.pacientes[id];
    this.frmAmaterno.value = this.state.pacientes[id];
    this.frmEmail.value = this.state.pacientes[id];
    this.frmTelefono.value = this.state.pacientes[id];
    this.frmFechaNacimiento.value = this.state.pacientes[id];
  }

  editPaciente = (id, row) => event => {
    event.preventDefault();
    var newState = this.state;
    newState.edit = true;
    newState.id = id;
    this.setState(newState);

    this.frmNombre.focus();
    this.frmNombre.value = "";
    this.frmNombre.value = this.state.pacientes[row].nombre;
    this.frmApaterno.focus();
    this.frmApaterno.value = "";
    this.frmApaterno.value = this.state.pacientes[row].aPaterno;
    this.frmAmaterno.focus();
    this.frmAmaterno.value = "";
    this.frmAmaterno.value = this.state.pacientes[row].aMaterno;
    this.frmEmail.focus();
    this.frmEmail.value = "";
    this.frmEmail.value = this.state.pacientes[row].email;
    this.frmTelefono.focus();
    this.frmTelefono.value = "";
    this.frmTelefono.value = this.state.pacientes[row].telefono;
    this.frmFechaNacimiento.focus();
    this.frmFechaNacimiento.value = "";
    this.frmFechaNacimiento.value = this.state.pacientes[row].fechaNacimiento;
    this.loadPaciente();
  }

  deletePaciente = (id) => event => {
    event.preventDefault();
    const url = "https://loop-back-app.mybluemix.net/api/pacientes/" + id;
    axios.delete(url).then(res => console.log(res.data));
    this.loadPaciente();
  }

  loadPaciente() {
    axios.get("https://loop-back-app.mybluemix.net/api/pacientes/").then(res => {
      this.setState({ pacientes: res.data });
    });
  }

  componentDidMount() {
    this.loadPaciente();
  }

  render() {
    return (
      <div className="css-datos">
        <Container maxWidth="xs">
          <Link to="/">
            <Button
              variant="contained"
              color="default"
              size="small"
              startIcon={<HomeIcon />}
            >
              Regresar
            </Button>
          </Link>
        </Container>

        <h1>{this.props.name}</h1>
        <form autoComplete="off" onSubmit={this.addPaciente}>
          <table>
            <tr>
              <td>
                <tr>
                  <TextField
                    label=""
                    placeholder="Nombre(s)"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmNombre = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Apellido paterno"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmApaterno = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Apellido materno"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmAmaterno = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Correo electrónico"
                    type="email"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmEmail = e)}
                  />
                </tr>
                  <TextField
                    label=""
                    placeholder="Número telefónico"
                    type="numeric"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmTelefono = e)}
                  />
                <tr>
                  <TextField
                    label=""
                    placeholder="Fecha de nacimiento"
                    type="date"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmFechaNacimiento = e)}
                  />
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                {/* <h8>Ocupación:</h8>
                <Dropdown
                  options={ocupacion}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Combo box"
                      variant="outlined"
                      //value={this.state.selectValue}
                      //onChange={this.handleChange}
                    />
                  )}
                />  */}
                <tr>
                  <img src={imgDatos} className="App-logo" alt="imgDatos" />
                </tr>
                <tr>
                  <Link to="/">
                    <Button
                      className="css-ButtonSave"
                      variant="contained"
                      color="default"
                      size="bigger"
                      onClick={this.addPaciente}
                    >
                      Guardar los datos del paciente
                    </Button>
                  </Link>
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td></td>
            </tr>
          </table>

          {/* <List
            component="nav"
            subheader={
              <ListSubheader component="div">{this.titulo}</ListSubheader>
            }
          >
            {this.state.pacientes.map((paciente, index) => (
              <ListItem button key={index}>
                <ListItemIcon onClick={this.viewPaciente(index)}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText inset primary={paciente.nombre} />
                <ListItemText inset primary={paciente.aPaterno} />
                <ListItemText inset primary={paciente.aMaterno} />
                <ListItemText inset primary={paciente.email} />
                <ListItemText inset primary={paciente.telefono} />
                <ListItemText inset primary={paciente.fechaNacimiento} />
                <ListItemIcon onClick={this.editPaciente(paciente.id, index)}>
                  <EditIcon />
                </ListItemIcon>
                <ListItemIcon onClick={this.deletePaciente(paciente.id)}>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            ))}
          </List> */}

<TableContainer component={Paper}>
            <Table className={"Table"} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Nombre(s)</TableCell>
                  <TableCell align="center">Apellido paterno</TableCell>
                  <TableCell align="center">Apellido materno</TableCell>
                  <TableCell align="center">Correo electrónico</TableCell>
                  <TableCell align="center">Número telefónico</TableCell>
                  <TableCell align="center">Fecha de nacimiento</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.pacientes.map((paciente, index) => (
                  <TableRow key={paciente.name}>
                    <ListItemIcon onClick={this.viewPaciente(index)}>
                      <TableCell align="center">
                        <PersonIcon />
                      </TableCell>
                    </ListItemIcon>

                    {/* <TableCell component="th" scope="row">
                      {evaluacion.name}
                    </TableCell>  */}

                    <TableCell align="center">{paciente.nombre}</TableCell>
                    <TableCell align="center">{paciente.aPaterno}</TableCell>
                    <TableCell align="center">{paciente.aMaterno}</TableCell>
                    <TableCell align="center">{paciente.email}</TableCell>
                    <TableCell align="center">{paciente.telefono}</TableCell>
                    <TableCell align="center">{paciente.fechaNacimiento}</TableCell>
                    <ListItemIcon
                      onClick={this.editPaciente(paciente.id, index)}
                    >
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemIcon
                      onClick={this.deletePaciente(paciente.id)}
                    >
                      <DeleteIcon />
                    </ListItemIcon>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </form>
      </div>
    );
  }
}

export default DatosView;
