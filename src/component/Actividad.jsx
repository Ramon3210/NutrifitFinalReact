import React from 'react'
import Header from './Header';
import ActividadView from '../view/ActividadView';
import Footer from './Footer';

class Actividad extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="ACTIVIDAD FISICA" />
                <ActividadView />
                <Footer />
            </div>
         );
    }
}
 
export default Actividad;