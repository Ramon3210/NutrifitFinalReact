import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-footer">
                <h3>© 2020 Todos los derechos reservados | Nutrifit | <Link to="/privacidad"> Aviso de Privacidad </Link></h3>
            </div>
         );
    }
}
 
export default Footer;