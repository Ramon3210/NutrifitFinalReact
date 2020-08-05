import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

class PrivacidadView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="css-privacidad">
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

<p>
Aviso de Privacidad
INSTITUTO AVANZADO DE NUTRICION Y BIENESTAR S DE RL DE CV (NUTREST), con domicilio en Zamora 33, colonia Condesa, Delegación Cuauhtémoc en el Distrito Federal, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:

¿Para qué fines utilizaremos sus datos personales?

Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:

Finalidad principal A
Generar una historia clínica
Mejorar la salud del paciente por medio de la buena alimentación
Elaborar y proporcionar a los pacientes de tratamientos y programas de nutrición para ayudar al mejoramiento de la salud
De manera adicional, utilizaremos su información personal para las siguientes finalidades que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
Envío de correos electrónicos informativos y con promociones.
En caso de que no desee que sus datos personales sean tratados para estos fines adicionales, desde este momento usted nos puede comunicar lo anterior, enviando un correo a info@nutrest.com.mx en donde manifieste la señalada negativa.

La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.

¿Qué datos personales utilizaremos para estos fines?

Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:

Cupón de descuento y quien se lo otorga
Nombre(s), Apellido Paterno, Apellido Materno
Sexo
Estado Civil
¿Quiénes viven con usted?
Escolaridad
Ocupación
Correo electrónico
Teléfono local
Teléfono personal
Estado, Delegación o Municipio, Colonia, Calle y Número
Nombramiento de padre o tutor en caso de menor de edad
Aceptación de compromiso como paciente para:
Asistir a citas
Cancelar citas cuando sea necesario
Respetar el tiempo de consulta
Seguir las recomendaciones otorgadas por NUTREST y su personal
Tener en todo momento buena actitud
Autorización para enviar la información anterior con la finalidad de que se genere una historia clínica
Declaración bajo protesta de decir verdad de que la información proporcionada es verdad.
Además de los datos personales mencionados anteriormente, para las finalidades informadas en el presente aviso de privacidad utilizaremos los siguientes datos personales considerados como sensibles, que requieren de especial protección:
Explicación breve del motivo de la consulta y padecimientos
Manifestación respecto a padecimientos de otra enfermedad
Información respecto a padecimientos de enfermedades de madre, padre o hermanos.
¿Con quién compartimos su información personal y para qué fines?

Le informamos que sus datos personales no serán transferidos ni tratados dentro y fuera del país, por personas distintas a esta empresa. Si usted no manifiesta su oposición para que sus datos personales sean transferidos, se entenderá que ha otorgado su consentimiento para ello.

¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?

Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos. Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta; que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa; así como oponerse al uso de sus datos personales para fines específicos.

Para el ejercicio de cualquiera de los derechos previamente mencionados, usted deberá presentar la solicitud respectiva enviando un correo a info@nutrest.com.mx.

¿Cómo puede revocar su consentimiento para el uso de sus datos personales?

Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.

Para revocar su consentimiento deberá presentar su solicitud enviando un correo a info@nutrest.com.mx

El uso de tecnologías de rastreo en nuestro portal de Internet

Le informamos que en nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de Internet, así como brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página.

¿Cómo puede conocer los cambios a este aviso de privacidad?

El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.

Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestro portal https://nutrest.com.mx
</p>

            </div>
         );
    }
}
 
export default PrivacidadView;