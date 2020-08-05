import React, { Component } from 'react';
import Header from './Header';
import PrivacidadView from '../view/PrivacidadView';
import Footer from './Footer';

class Privacidad extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="AVISO DE PRIVACIDAD" />
                <PrivacidadView />
                <Footer />
            </div>
         );
    }
}
 
export default Privacidad;