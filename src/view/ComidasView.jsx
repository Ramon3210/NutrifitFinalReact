import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { TextField } from "@material-ui/core";
import frutillas from "../assets/frutillas.png";
//import medidas from "../medidas.png";
import "react-dropdown/style.css";

import AppleIcon from "@material-ui/icons/Apple";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";

import CakeIcon from '@material-ui/icons/Cake';

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
  Checkbox,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";

class ComidasView extends Component {
  titulo = "ALIMENTACIÓN DE MIS PACIENTES:";

  frmLitrosAguaDiario = React.createRef();
  frmAlmuerzo = React.createRef();
  frmColacionUno = React.createRef();
  frmAlimento = React.createRef();
  frmColacionDos = React.createRef();
  frmCena = React.createRef();
  frmTe = React.createRef();

  frmCkeck1 = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      value: "Comida",
      edit: false,
      idComida: 0,
      comidas: [],
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

  addComida = (event) => {
    event.preventDefault();

    //const url = 'http://localhost:5000/api/pacientes';

    console.log("Sí entra");

    const data = {
      litrosAguaDiario: this.frmLitrosAguaDiario.value,
      almuerzo: this.frmAlmuerzo.value,
      colacionUno: this.frmColacionUno.value,
      alimento: this.frmAlimento.value,
      colacionDos: this.frmColacionDos.value,
      cena: this.frmCena.value,
      te: this.frmTe.value,
    };

    if (!this.state.edit) {
      const url = "http://localhost:5000/api/comidas/";
      axios.post(url, data).then((res) => console.log(res.data));

      this.frmLitrosAguaDiario.value = "";
      this.frmAlmuerzo.value = "";
      this.frmColacionUno.value = "";
      this.frmAlimento.value = "";
      this.frmColacionDos.value = "";
      this.frmCena.value = "";
      this.frmTe.value = "";

      this.frmLitrosAguaDiario.focus();
      this.frmAlmuerzo.focus();
      this.frmColacionUno.focus();
      this.frmAlimento.focus();
      this.frmColacionDos.focus();
      this.frmCena.focus();
      this.frmTe.focus();
    } else {
      const url = "http://localhost:5000/api/comidas/" + this.state.id;

      const data = {
        litrosAguaDiario: this.frmLitrosAguaDiario.value,
        almuerzo: this.frmAlmuerzo.value,
        colacionUno: this.frmColacionUno.value,
        alimento: this.frmAlimento.value,
        colacionDos: this.frmColacionDos.value,
        cena: this.frmCena.value,
        te: this.frmTe.value,
      };

      axios.put(url, data).then((res) => console.log(res.data));
    }
    this.loadComida();
  };

  viewComida = (id) => (event) => {
    event.preventDefault();

    this.frmLitrosAguaDiario.value = "";
    this.frmAlmuerzo.value = "";
    this.frmColacionUno.value = "";
    this.frmAlimento.value = "";
    this.frmColacionDos.value = "";
    this.frmCena.value = "";
    this.frmTe.value = "";

    this.frmLitrosAguaDiario.focus();
    this.frmAlmuerzo.focus();
    this.frmColacionUno.focus();
    this.frmAlimento.focus();
    this.frmColacionDos.focus();
    this.frmCena.focus();
    this.frmTe.focus();

    this.frmLitrosAguaDiario.value = this.state.comidas[id];
    this.frmAlmuerzo.value = this.state.comidas[id];
    this.frmColacionUno.value = this.state.comidas[id];
    this.frmAlimento.value = this.state.comidas[id];
    this.frmColacionDos.value = this.state.comidas[id];
    this.frmCena.value = this.state.comidas[id];
    this.frmTe.value = this.state.comidas[id];
  };

  editComida = (id, row) => (event) => {
    event.preventDefault();
    var newState = this.state;
    newState.edit = true;
    newState.id = id;
    this.setState(newState);

    this.frmLitrosAguaDiario.value = "";
    this.frmAlmuerzo.value = "";
    this.frmColacionUno.value = "";
    this.frmAlimento.value = "";
    this.frmColacionDos.value = "";
    this.frmCena.value = "";
    this.frmTe.value = "";

    this.frmLitrosAguaDiario.focus();
    this.frmAlmuerzo.focus();
    this.frmColacionUno.focus();
    this.frmAlimento.focus();
    this.frmColacionDos.focus();
    this.frmCena.focus();
    this.frmTe.focus();

    this.frmLitrosAguaDiario.value = this.state.comidas[row].litrosAguaDiario;
    this.frmAlmuerzo.value = this.state.comidas[row].almuerzo;
    this.frmColacionUno.value = this.state.comidas[row].colacionUno;
    this.frmAlimento.value = this.state.comidas[row].alimento;
    this.frmColacionDos.value = this.state.comidas[row].colacionDos;
    this.frmCena.value = this.state.comidas[row].cena;
    this.frmTe.value = this.state.comidas[row].te;

    this.loadComida();
  };

  deleteComida = (id) => (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/api/comidas/" + id;
    axios.delete(url).then((res) => console.log(res.data));
    this.loadComida();
  };

  loadComida() {
    axios.get("http://localhost:5000/api/comidas/").then((res) => {
      this.setState({ comidas: res.data });
    });
  }

  componentDidMount() {
    this.loadComida();
  }

  render() {
    return (
      <div className="css-comidas">
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
        <form autoComplete="off" onSubmit={this.addComida}>
          <table>
            <tr>
              <td>
                <tr>
                  <TextField
                    label=""
                    placeholder="Litros de agua diario"
                    type="numeric"
                    keyboardType="numeric"
                    //onChange={(e) => this.onChange(e)}
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmLitrosAguaDiario = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Almuerzo"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmAlmuerzo = e)}
                  />
                </tr>
                <tr></tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Colación uno"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmColacionUno = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Comida"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmAlimento = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Colación dos"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmColacionDos = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Cena"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmCena = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Té o infusión"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmTe = e)}
                  />
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                <tr>
                  <img src={frutillas} className="App-logo" alt="frutillas" />
                </tr>
                <tr>
                  <Link to="/">
                    <Button
                      className="css-ButtonSave"
                      variant="contained"
                      color="default"
                      size="bigger"
                      onClick={this.addComida}
                    >
                      Guardar alimentación de mi paciente
                    </Button>
                  </Link>
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                {/* <tr>
                        <div className={classes.root}>
                          <Typography id="discrete-slider-always" gutterBottom>
                            Always visible
                          </Typography>
                          <Slider
                            defaultValue={80}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-always"
                            step={10}
                            marks={marks}
                            valueLabelDisplay="on"
                          />
                        </div>
                      </tr> */}
                <tr>
                  {/* <img src={medidas} className="App-logo" alt="medidas" /> */}

                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<AppleIcon />}
                        name="checkedH"
                      />
                    }
                    label="Manzana"
                  />

                  {/* <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        inputRef={e => (this.frmCkeck1 = e)}
                        value="10"
                    /> */}
                </tr>

                <tr>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<EmojiFoodBeverageIcon />}
                        name="checkedH"
                        color="primary"
                      />
                    }
                    label="Té"
                    
                  />
                </tr>

                <tr>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<CakeIcon />}
                        name="checkedH"
                        color="teciary"
                      />
                    }
                    label="Pastel"
                    
                  />
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
            {this.state.comidas.map((comida, index) => (
              <ListItem button key={index}>
                <ListItemIcon onClick={this.viewComida(index)}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText inset primary={comida.litrosAguaDiario} />
                <ListItemText inset primary={comida.almuerzo} />
                <ListItemText inset primary={comida.colacionUno} />
                <ListItemText inset primary={comida.alimento} />
                <ListItemText inset primary={comida.colacionDos} />
                <ListItemText inset primary={comida.cena} />
                <ListItemText inset primary={comida.te} />
                <ListItemIcon onClick={this.editComida(comida.id, index)}>
                  <EditIcon />
                </ListItemIcon>
                <ListItemIcon onClick={this.deleteComida(comida.id)}>
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
                  <TableCell align="center">Litros de agua diario</TableCell>
                  <TableCell align="center">Almuerzo</TableCell>
                  <TableCell align="center">Colación uno</TableCell>
                  <TableCell align="center">Comida</TableCell>
                  <TableCell align="center">Colación dos</TableCell>
                  <TableCell align="center">Cena</TableCell>
                  <TableCell align="center">Té o infusión</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.comidas.map((comida, index) => (
                  <TableRow key={comida.name}>
                    <ListItemIcon onClick={this.viewComida(index)}>
                      <TableCell align="center">
                        <PersonIcon />
                      </TableCell>
                    </ListItemIcon>

                    {/* <TableCell component="th" scope="row">{comida.name}</TableCell>  */}

                    <TableCell align="center" color="green">{comida.litrosAguaDiario}</TableCell>
                    <TableCell align="center">{comida.almuerzo}</TableCell>
                    <TableCell align="center">{comida.colacionUno}</TableCell>
                    <TableCell align="center">{comida.alimento}</TableCell>
                    <TableCell align="center">{comida.colacionDos}</TableCell>
                    <TableCell align="center">{comida.cena}</TableCell>
                    <TableCell align="center">{comida.te}</TableCell>

                    <ListItemIcon
                      onClick={this.editComida(comida.id, index)}
                    >
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemIcon
                      onClick={this.deleteComida(comida.id)}
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

export default ComidasView;
