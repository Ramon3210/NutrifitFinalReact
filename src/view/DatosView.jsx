import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { TextField } from "@material-ui/core";
import imgDatos from "../imgDatos.png";

//import { Button } from "@material-ui/core";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import {
  Button,
  Container,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";

//     import MultiSelect from "react-multi-select-component";
// import { ReactComponent } from '*.svg';
//    import 'react-multi-select-component/style.css';

//import './styles/App.css';

//     import * as React from 'react'

//     // const Example: React.FC = () => {
//         const options = [
//           { label: "Grapes ðŸ‡", value: "grapes" },
//           { label: "Mango ðŸ¥­", value: "mango" },
//           { label: "Strawberry ðŸ“", value: "strawberry", disabled: true },
//         ];

//    const [selected, setSelected] = React.useState([]);

const ocupacion = [
  "Profesionista",
  "Comerciante",
  "Ama de casa",
  "Deportista",
  "Campesino",
  "Chofer",
  "Servidor pÃºblico",
  "Estudiante",
  "Otro(s)",
];

var pacientesList = [];

class DatosView extends Component {
  // constructor() {
  //   super();
  //   this.state = { value: "" };
  //   this.onChange = this.onChange.bind(this);
  // }

  addData(event) {
    console.log("Agregar datos");
    event.preventDefault();
    console.log(this);
  }

  onChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }

    if (e.target.value > 120) {
      alert("Edad invÃ¡lida");
      this.setState({ value: "" });
    }
  }

  handleChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  constructor(props) {
    super(props);
    this.state = {
      pacientes: [],
      edit: false,
      idPaciente: 0,
    };
  }
  state = {};

  titulo = "DATOS DE MIS PACIENTES:";

  frmNombre = React.createRef();
  frmApaterno = React.createRef();
  frmAmaterno = React.createRef();
  frmEmail = React.createRef();
  frmTelefono = React.createRef();
  frmFechaNacimiento = React.createRef();
  //frmOcupacion = React.createRef();

  addPaciente = (event) => {
    event.preventDefault();

    var newPacientes = this.state;

    //var valores = [this.frmNombre.value, " ", this.frmApaterno.value];

    const url = "http://localhost:3000/api/pacientes";

    const data = {
      nombre: this.frmNombre.value,
      aPaterno: this.frmApaterno.value,
      aMaterno: this.frmAmaterno.value,
      email: this.frmEmail.value,
      tel: this.frmTelefono.value,
      fecha: this.frmFechaNacimiento.value,
      //ocup: this.frmOcupacion.value,
    };

    // if (!this.state.edit) {
    //   newPacientes.pacientes.push(data);
    //   newPacientes.pacientes.sort();
    // } else {
    //   newPacientes.pacientes[this.state.id] = data;
    //   newPacientes.edit = false;
    //   newPacientes.id = 0;
    // }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

    this.frmNombre.value = "";
    this.frmApaterno.value = "";
    this.frmAmaterno.value = "";
    this.frmEmail.value = "";
    this.frmTelefono.value = "";
    this.frmFechaNacimiento.value = "";

    //this.setState({ newPacientes });
    this.loadPaciente();
  };

  viewPaciente = (id) => (event) => {
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
    //this.frmOcupacion.selectValue = this.state.pacientes[id];
  };

  editPaciente = (id, row) => (event) => {
    event.preventDefault();
    // var newState = this.state;
    // newState.edit = true;
    // newState.id = id;

    // this.setState(newState);

    // this.frmNombre.focus();
    // this.frmNombre.value = this.state.pacientes[row].nombre;
    // this.frmApaterno.focus();
    // this.frmApaterno.value = this.state.pacientes[row].aPaterno;
    // this.frmAmaterno.focus();
    // this.frmAmaterno.value = this.state.pacientes[row].aMaterno;
    // this.frmEmail.focus();
    // this.frmEmail.value = this.state.pacientes[row].email;
    // this.frmTelefono.focus();
    // this.frmTelefono.value = this.state.pacientes[row].tel;
    // this.frmFechaNacimiento.focus();
    // this.frmFechaNacimiento.value = this.state.pacientes[row].fecha;
    //this.frmOcupacion.selectValue = this.state.pacientes[row].ocup;
  };

  deletePaciente = (id) => (event) => {
    event.preventDefault();
    console.log('Delete action');

    const url ='http://localhost:3000/api/pacientes/'+id;

    fetch(url, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );

      console.log(url);
     
      this.loadPaciente();
    // console.log("Borrar paciente");
    // console.log(id);

    // this.frmNombre.value = "";
     //this.frmApaterno.value = "";
    // this.frmAmaterno.value = "";
    // this.frmEmail.value = "";
    // this.frmTelefono.value = "";
    // this.frmFechaNacimiento.value = "";
    // this.frmNombre.focus();
    // this.frmApaterno.focus();
    // this.frmAmaterno.focus();
    // this.frmEmail.focus();
    // this.frmTelefono.focus();
    // this.frmFechaNacimiento.focus();

    // delete this.state.pacientes[id];

    // var newPacientes = this.state.pacientes;
    // this.setState({ pacientes: newPacientes });
  };

  loadPaciente() {
    fetch("http://localhost:3000/api/pacientes")
      .then((response) => response.json())
      .then((json) => this.setState({pacientes: json}))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.loadPaciente();
  };

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
        {/* </div><form autoComplete="off" onSubmit={this.addData}> */}
        <form autoComplete="off" onSubmit={this.addPaciente}>
          <table>
            <tr>
              <td>
                <tr>
                  <TextField
                    label="Nombre(s)"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmNombre = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label="Apellido paterno"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmApaterno = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label="Apellido materno"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmAmaterno = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label="Correo electrónico"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmEmail = e)}
                  />
                </tr>
                <div>
                  <TextField
                    label="Número telefónico"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmTelefono = e)}
                  />
                </div>
                <tr>
                  <TextField
                    paceholder=""
                    label="Fecha de nacimiento"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmFechaNacimiento = e)}
                  />
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                <h8>Ocupación:</h8>
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
                />
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
              <td>
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
                      <ListItemIcon
                        //onClick={this.editPaciente(paciente.id, index)}
                        onClick={this.editPaciente(index, index)}
                      >
                        <EditIcon />
                      </ListItemIcon>
                      <ListItemIcon onClick={this.deletePaciente(index)}>
                        <DeleteIcon />
                      </ListItemIcon>
                    </ListItem>
                  ))}
                </List> */}

                {/* <div>
                    <h1>Select Fruits</h1>
                    <pre>{JSON.stringify(selected)}</pre>
                    <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select"}
                    />
                </div> */}
              </td>
            </tr>
          </table>

          <List
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
                <ListItemText inset primary={paciente.tel} />
                <ListItemText inset primary={paciente.fecha} />
                {/* <ListItemText inset primary={paciente.ocup} /> */}
                <ListItemIcon
                  //onClick={this.editPaciente(paciente.id, index)}
                  onClick={this.editPaciente(index)}
                >
                  <EditIcon />
                </ListItemIcon>
                <ListItemIcon onClick={this.deletePaciente(index)}>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </form>
      </div>
    );
  }
}

export default DatosView;
