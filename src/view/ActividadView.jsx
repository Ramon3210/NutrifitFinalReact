import { TextField } from "@material-ui/core";
import actividades from "../actividades.jpg";
//import medidas from "../medidas.png";

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
//import medidas from "../medidas.png";
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
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";

class ActividadView extends Component {

  titulo = "ACTIVIDADES DE MIS PACIENTES:";

  frmEnELTrabajo = React.createRef();
  frmTrayectoTrabajo = React.createRef();
  frmFinSemana = React.createRef();
  frmEnCasa = React.createRef();
  frmOtraActividad = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      value: "Actividad",
      edit: false,
      idActividad: 0,
      actividades: [],
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

  addActividad = event => {
    event.preventDefault();

    //const url = 'https://loop-back-app.mybluemix.net/api/pacientes';

    console.log("Sí entra");

    const data = {
      enElTrabajo: this.frmEnELTrabajo.value,
      trayectoTrabajo: this.frmTrayectoTrabajo.value,
      finSemana: this.frmFinSemana.value,
      enCasa: this.frmEnCasa.value,
      otraActividad: this.frmOtraActividad.value,
    }

    if (!this.state.edit) {
      const url = "https://loop-back-app.mybluemix.net/api/actividades/";
      axios.post(url, data).then(res => console.log(res.data));

      this.frmEnELTrabajo.value = "";
      this.frmTrayectoTrabajo.value = "";
      this.frmFinSemana.value = "";
      this.frmEnCasa.value = "";
      this.frmOtraActividad.value = "";

      this.frmEnELTrabajo.focus();
      this.frmTrayectoTrabajo.focus();
      this.frmFinSemana.focus();
      this.frmEnCasa.focus();
      this.frmOtraActividad.focus();
    } else {
      const url = "https://loop-back-app.mybluemix.net/api/actividades/" + this.state.id;

      const data = {
        enElTrabajo: this.frmEnELTrabajo.value,
        trayectoTrabajo: this.frmTrayectoTrabajo.value,
        finSemana: this.frmFinSemana.value,
        enCasa: this.frmEnCasa.value,
        otraActividad: this.frmOtraActividad.value,
      }

      axios.put(url, data).then(res => console.log(res.data));
    }
    this.loadActividad();
  }

  viewActividad = (id) => event => {
    event.preventDefault();

    this.frmEnELTrabajo.value = "";
    this.frmTrayectoTrabajo.value = "";
    this.frmFinSemana.value = "";
    this.frmEnCasa.value = "";
    this.frmOtraActividad.value = "";

    this.frmEnELTrabajo.focus();
    this.frmTrayectoTrabajo.focus();
    this.frmFinSemana.focus();
    this.frmEnCasa.focus();
    this.frmOtraActividad.focus();

    this.frmEnELTrabajo.value = this.state.actividades[id];
    this.frmTrayectoTrabajo.value = this.state.actividades[id];
    this.frmFinSemana.value = this.state.actividades[id];
    this.frmEnCasa.value = this.state.actividades[id];
    this.frmOtraActividad.value = this.state.actividades[id];
  }

  editActividad = (id, row) => event => {
    event.preventDefault();
    var newState = this.state;
    newState.edit = true;
    newState.id = id;
    this.setState(newState);

    this.frmEnELTrabajo.value = "";
    this.frmTrayectoTrabajo.value = "";
    this.frmFinSemana.value = "";
    this.frmEnCasa.value = "";
    this.frmOtraActividad.value = "";

    this.frmEnELTrabajo.focus();
    this.frmTrayectoTrabajo.focus();
    this.frmFinSemana.focus();
    this.frmEnCasa.focus();
    this.frmOtraActividad.focus();

    this.frmEnELTrabajo.value = this.state.actividades[row].enElTrabajo;
    this.frmTrayectoTrabajo.value = this.state.actividades[row].trayectoTrabajo;
    this.frmFinSemana.value = this.state.actividades[row].finSemana;
    this.frmEnCasa.value = this.state.actividades[row].enCasa;
    this.frmOtraActividad.value = this.state.actividades[row].otraActividad;

    this.loadActividad();
  }

  deleteActividad = (id) => event => {
    event.preventDefault();
    const url = "https://loop-back-app.mybluemix.net/api/actividades/" + id;
    axios.delete(url).then(res => console.log(res.data));
    this.loadComida();
  }

  loadActividad() {
    axios.get("https://loop-back-app.mybluemix.net/api/actividades/").then(res => {
      this.setState({ actividades: res.data });
    });
  }

  componentDidMount() {
    this.loadActividad();
  }

  render() {
    return (
      <div className="css-actividad">
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
        <form autoComplete="off" onSubmit={this.addActividad}>
          <table>
            <tr>
              <td>
              <tr>
                  <TextField
                    label=""
                    placeholder="En el trabajo"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmEnELTrabajo = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Trayecto al trabajo"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmTrayectoTrabajo = e)}
                  />
                </tr>
                <tr></tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Fin de semana"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmFinSemana = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="En casa"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmEnCasa = e)}
                  />
                </tr>
                <tr>
                  <TextField
                    label=""
                    placeholder="Otra actividad"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={(e) => (this.frmOtraActividad = e)}
                  />
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                <tr>
                  <img
                    src={actividades}
                    className="App-logo"
                    alt="actividades"
                  />
                </tr>
                <tr>
                  <Link to="/">
                    <Button
                      className="css-ButtonSave"
                      variant="contained"
                      color="default"
                      size="bigger"
                      onClick={this.addActividad}
                    >
                      Guardar actividades de mi paciente
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
            {this.state.actividades.map((actividad, index) => (
              <ListItem button key={index}>
                <ListItemIcon onClick={this.viewActividad(index)}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText inset primary={actividad.enElTrabajo} />
                <ListItemText inset primary={actividad.trayectoTrabajo} />
                <ListItemText inset primary={actividad.finSemana} />
                <ListItemText inset primary={actividad.enCasa} />
                <ListItemText inset primary={actividad.otraActividad} />
                <ListItemIcon onClick={this.editActividad(actividad.id, index)}>
                  <EditIcon />
                </ListItemIcon>
                <ListItemIcon onClick={this.deleteActividad(actividad.id)}>
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
                  <TableCell align="center">En el trabajo</TableCell>
                  <TableCell align="center">Trayecto al trabajo</TableCell>
                  <TableCell align="center">Fin de semana</TableCell>
                  <TableCell align="center">En casa</TableCell>
                  <TableCell align="center">Otra actividad</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.actividades.map((actividad, index) => (
                  <TableRow key={actividad.name}>
                    <ListItemIcon onClick={this.viewActividad(index)}>
                      <TableCell align="center">
                        <PersonIcon />
                      </TableCell>
                    </ListItemIcon>

                    {/* <TableCell component="th" scope="row">
                      {evaluacion.name}
                    </TableCell>  */}

                    <TableCell align="center" color="green">{actividad.enElTrabajo}</TableCell>
                    <TableCell align="center">{actividad.trayectoTrabajo}</TableCell>
                    <TableCell align="center">{actividad.finSemana}</TableCell>
                    <TableCell align="center">{actividad.enCasa}</TableCell>
                    <TableCell align="center">{actividad.otraActividad}</TableCell>

                    <ListItemIcon
                      onClick={this.editActividad(actividad.id, index)}
                    >
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemIcon
                      onClick={this.deleteActividad(actividad.id)}
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

export default ActividadView;






// import { TextField } from "@material-ui/core"
// import React, { Component } from "react";
// import ReactDOM from 'react-dom'
// import MaterialTable from "material-table";

// const [state, setState] = React.useState({
//   columns: [
//     { title: "Name", field: "name" },
//     { title: "Surname", field: "surname" },
//     { title: "Birth Year", field: "birthYear", type: "numeric" },
//     {
//       title: "Birth Place",
//       field: "birthCity",
//       lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
//     },
//   ],
//   data: [
//     { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
//     {
//       name: "Zerya Betül",
//       surname: "Baran",
//       birthYear: 2017,
//       birthCity: 34,
//     },
//   ],
// });

// class ActividadView extends Component {
//   render() {
//     return (
//       <MaterialTable
//         title="Editable Example"
//         columns={state.columns}
//         data={state.data}
//         editable={{
//           onRowAdd: (newData) =>
//             new Promise((resolve) => {
//               setTimeout(() => {
//                 resolve();
//                 setState((prevState) => {
//                   const data = [...prevState.data];
//                   data.push(newData);
//                   return { ...prevState, data };
//                 });
//               }, 600);
//             }),
//           onRowUpdate: (newData, oldData) =>
//             new Promise((resolve) => {
//               setTimeout(() => {
//                 resolve();
//                 if (oldData) {
//                   setState((prevState) => {
//                     const data = [...prevState.data];
//                     data[data.indexOf(oldData)] = newData;
//                     return { ...prevState, data };
//                   });
//                 }
//               }, 600);
//             }),
//           onRowDelete: (oldData) =>
//             new Promise((resolve) => {
//               setTimeout(() => {
//                 resolve();
//                 setState((prevState) => {
//                   const data = [...prevState.data];
//                   data.splice(data.indexOf(oldData), 1);
//                   return { ...prevState, data };
//                 });
//               }, 600);
//             }),
//         }}
//       />
//     );
//   }
// }
// ReactDOM.render(<ActividadView />, document.getElementById('react-div'));
// export default ActividadView;
