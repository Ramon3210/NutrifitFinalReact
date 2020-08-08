import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { TextField } from "@material-ui/core";
import imgEvaluacion from "../imgEvaluacion.jpg";
import medidas from "../medidas.png";

//import { Button } from "@material-ui/core";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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
  List,
  ListItem,
  ListSubheader,
  TableItemIcon,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";

const complexion = ["Ectomorfo", "Mesomorfo", "Endomorfo"];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const inputProps = {
  disabled: true,
};

//const classes = useStyles();

class EvaluacionView extends Component {
  titulo = "EVALUACIÓN DE MIS PACIENTES:";

  frmEstatura = React.createRef();
  frmPeso = React.createRef();
  frmEdad = React.createRef();
  frmPorcentajeGrasa = React.createRef();
  frmComplexion = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      value: "Complexión",
      edit: false,
      idEvaluacion: 0,
      evaluaciones: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ selectValue: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  addEvaluacion = (event) => {
    event.preventDefault();

    //const url = 'https://loop-back-app.mybluemix.net/api/pacientes';

    console.log("Sí entra");

    const data = {
      estatura: this.frmEstatura.value,
      peso: this.frmPeso.value,
      edad: this.frmEdad.value,
      porcentajeGrasa: this.frmPorcentajeGrasa.value,
      complexion: this.frmComplexion.value,
    };

    if (!this.state.edit) {
      const url = "https://loop-back-app.mybluemix.net/api/evaluaciones/";
      axios.post(url, data).then((res) => console.log(res.data));

      this.frmEstatura.value = "";
      this.frmPeso.value = "";
      this.frmEdad.value = "";
      this.frmPorcentajeGrasa.value = "";
      this.frmComplexion.value = "";

      this.frmEstatura.focus();
      this.frmPeso.focus();
      this.frmEdad.focus();
      this.frmPorcentajeGrasa.focus();
      this.frmComplexion.focus();
    } else {
      const url = "https://loop-back-app.mybluemix.net/api/evaluaciones/" + this.state.id;

      const data = {
        estatura: this.frmEstatura.value,
        peso: this.frmPeso.value,
        edad: this.frmEdad.value,
        porcentajeGrasa: this.frmPorcentajeGrasa.value,
        complexion: this.frmComplexion.value,
      };

      axios.put(url, data).then((res) => console.log(res.data));
    }
    this.loadEvaluacion();
  };

  viewEvaluacion = (id) => (event) => {
    event.preventDefault();

    this.frmEstatura.value = "";
    this.frmPeso.value = "";
    this.frmEdad.value = "";
    this.frmPorcentajeGrasa.value = "";
    this.frmComplexion.value = "";

    this.frmEstatura.focus();
    this.frmPeso.focus();
    this.frmEdad.focus();
    this.frmPorcentajeGrasa.focus();
    this.frmComplexion.focus();

    this.frmEstatura.value = this.state.evaluaciones[id];
    this.frmPeso.value = this.state.evaluaciones[id];
    this.frmEdad.value = this.state.evaluaciones[id];
    this.frmPorcentajeGrasa.value = this.state.evaluaciones[id];
    this.frmComplexion.value = this.state.evaluaciones[id];
  };

  editEvaluacion = (id, row) => (event) => {
    event.preventDefault();
    var newState = this.state;
    newState.edit = true;
    newState.id = id;
    this.setState(newState);

    this.frmEstatura.focus();
    this.frmEstatura.value = "";
    this.frmEstatura.value = this.state.evaluaciones[row].estatura;
    this.frmPeso.focus();
    this.frmPeso.value = "";
    this.frmPeso.value = this.state.evaluaciones[row].peso;
    this.frmEdad.focus();
    this.frmEdad.value = "";
    this.frmEdad.value = this.state.evaluaciones[row].edad;
    this.frmPorcentajeGrasa.focus();
    this.frmPorcentajeGrasa.value = "";
    this.frmPorcentajeGrasa.value = this.state.evaluaciones[
      row
    ].porcentajeGrasa;
    this.frmComplexion.focus();
    this.frmComplexion.value = "";
    this.frmComplexion.value = this.state.evaluaciones[row].complexion;
    this.loadEvaluacion();
  };

  deleteEvaluacion = (id) => (event) => {
    event.preventDefault();
    const url = "https://loop-back-app.mybluemix.net/api/evaluaciones/" + id;
    axios.delete(url).then((res) => console.log(res.data));
    this.loadEvaluacion();
  };

  loadEvaluacion() {
    axios.get("https://loop-back-app.mybluemix.net/api/evaluaciones/").then((res) => {
      this.setState({ evaluaciones: res.data });
    });
  }

  componentDidMount() {
    this.loadEvaluacion();
  }

  render() {
    return (
      <div className="css-evaluacion">
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
        <h1>{this.props.name}</h1>
        <form autoComplete="off" onSubmit={this.addEvaluacion}>
          <table>
            <tr>
              <td>
                <tr>
                  <TextField
                    label=""
                    placeholder="Estatura(cm)"
                    type="numeric"
                    keyboardType="numeric"
                    //onChange={(e) => this.onChange(e)}
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmEstatura = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Peso(gr)"
                    type="numeric"
                    keyboardType="numeric"
                    //onChange={(e) => this.onCambios(e)}
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmPeso = e)}
                  />
                </tr>
                <tr></tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Edad"
                    keyboardType="numeric"
                    //onChange={(e) => this.onChange(e)}
                    //input
                    //value={this.state.value}
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmEdad = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Grasa(%)"
                    keyboardType="numeric"
                    //onChange={(e) => this.onChange(e)}
                    //input
                    //value={this.state.value}
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmPorcentajeGrasa = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Complexión"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={this.frmComplexion.value}
                    inputRef={(e) => (this.frmComplexion = e)}
                    inputProps={inputProps}
                  />
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                {/* <h8>Complexión:</h8> */}
                <Dropdown
                  options={complexion}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 150 }}
                  value={this.frmComplexion.value}
                  // onChange={this.handleChange}
                  // inputRef ={e=>(this.frmComplexion=e)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Combo box"
                      variant="outlined"
                    />
                  )}
                />

                <tr>
                  <img
                    src={imgEvaluacion}
                    className="App-logo"
                    alt="imgEvaluacion"
                  />
                </tr>
                <tr>
                  <Link to="/">
                    <Button
                      className="css-ButtonSave"
                      variant="contained"
                      color="default"
                      size="bigger"
                      onClick={this.addEvaluacion}
                    >
                      Guardar evaluación del paciente
                    </Button>
                  </Link>
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                <tr>
                  <img src={medidas} className="App-logo" alt="medidas" />
                </tr>
              </td>
            </tr>
          </table>
          {/* <List
            component="nav"
            subheader={
              <ListSubheader component="div">{this.titulo}</ListSubheader>
            }
          >
            {this.state.evaluaciones.map((evaluacion, index) => (
              <ListItem button key={index}>
                <ListItemIcon onClick={this.viewEvaluacion(index)}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText inset primary={evaluacion.estatura} />
                <ListItemText inset primary={evaluacion.peso} />
                <ListItemText inset primary={evaluacion.edad} />
                <ListItemText inset primary={evaluacion.porcentajeGrasa} />
                <ListItemText inset primary={evaluacion.complexion} />
                <ListItemIcon
                  onClick={this.editEvaluacion(evaluacion.id, index)}
                >
                  <EditIcon />
                </ListItemIcon>
                <ListItemIcon onClick={this.deleteEvaluacion(evaluacion.id)}>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            ))}
          </List> */}

          <TableContainer component={Paper}>
            <Table className={"Table"} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Paciente</TableCell>
                  <TableCell align="center">Estatura(cm)</TableCell>
                  <TableCell align="center">Peso(gr)</TableCell>
                  <TableCell align="center">Edad</TableCell>
                  <TableCell align="center">Grasa&nbsp;(%)</TableCell>
                  <TableCell align="center">Complexión</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.evaluaciones.map((evaluacion, index) => (
                  <TableRow key={evaluacion.name}>
                    <ListItemIcon onClick={this.viewEvaluacion(index)}>
                      <TableCell align="center">
                        <PersonIcon />
                      </TableCell>
                    </ListItemIcon>

                    {/* <TableCell component="th" scope="row">
                      {evaluacion.name}
                    </TableCell>  */}

                    <TableCell align="center" color="green">
                      {evaluacion.estatura}
                    </TableCell>
                    <TableCell align="center">{evaluacion.peso}</TableCell>
                    <TableCell align="center">{evaluacion.edad}</TableCell>
                    <TableCell align="center">
                      {evaluacion.porcentajeGrasa}
                    </TableCell>
                    <TableCell align="center">
                      {evaluacion.complexion}
                    </TableCell>

                    <ListItemIcon
                      onClick={this.editEvaluacion(evaluacion.id, index)}
                    >
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemIcon
                      onClick={this.deleteEvaluacion(evaluacion.id)}
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

export default EvaluacionView;
