import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { TextField } from "@material-ui/core";
import imgEvaluacion from "../imgEvaluacion.jpg";
import medidas from "../medidas.png";


// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));

// const marks = [
//   {
//     value: 0,
//     label: "0°C",
//   },
//   {
//     value: 20,
//     label: "20°C",
//   },
//   {
//     value: 37,
//     label: "37°C",
//   },
//   {
//     value: 100,
//     label: "100°C",
//   },
// ];

// function valuetext(value) {
//   return `${value}°C`;
// }

// const classes = useStyles();

// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

// export default function RadioButtonsGroup() {
//   const [value, setValue] = React.useState("female");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend">Gender</FormLabel>
//       <RadioGroup
//         aria-label="gender"
//         name="gender1"
//         value={value}
//         onChange={handleChange}
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//         <FormControlLabel value="other" control={<Radio />} label="Other" />
//         <FormControlLabel
//           value="disabled"
//           disabled
//           control={<Radio />}
//           label="(Disabled option)"
//         />
//       </RadioGroup>
//     </FormControl>
//   );
// }

class EvaluacionView extends Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.onChange = this.onChange.bind(this);
  }

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
      alert("Eres una jirafa, ¿mides " + e.target.value + "? :o");
      this.setState({ value: "" });
    }
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
        <form autoComplete="off" onSubmit={this.addData}>
          <table>
            <tr>
              <td>
                <tr>
                  <TextField
                    label="Estatura(cm)"
                    type="numeric"
                    keyboardType="numeric"
                    onChange={(e) => this.onChange(e)}
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
                <tr>
                  <TextField
                    label="Peso(gr)"
                    type="numeric"
                    keyboardType="numeric"
                    onChange={(e) => this.onCambios(e)}
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
                <tr></tr>
                <tr>
                  <TextField
                    label="Edad"
                    keyboardType="numeric"
                    onChange={(e) => this.onChange(e)}
                    input
                    value={this.state.value}
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
                <tr>
                  <TextField
                    label="Grasa(%)"
                    keyboardType="numeric"
                    onChange={(e) => this.onChange(e)}
                    input
                    value={this.state.value}
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
                <tr>
                  <TextField
                    label="Complexión"
                    type="text"
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                <tr>
                  <img
                    src={imgEvaluacion}
                    className="App-logo"
                    alt="imgEvaluacion"
                  />
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
                <img
                    src={medidas}
                    className="App-logo"
                    alt="medidas"
                  />                    
                </tr>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default EvaluacionView;
