import { Link } from 'react-router-dom';
import Metadata from "../../lib/metadata";
import { Button } from '../../components'
const Root = () => {
    return (
        <>
            <Metadata />
            <section>
                <h1>Lo que esta sucediendo ahora</h1>
                <h2>Únete a Twitter hoy.</h2>
                <Button name="signupgoolge" id="signupgoolge" aria-label="Registrate con Google" title="Registrate con Google" />
                <Button name="signufacebook" id="signufacebook" aria-label="Registrate con Facebook" title="Registrate con Facebook" />
                <Link style={{ textDecoration: 'none' }} to="/signup">
                    <Button title='Registrate con télefono o con correo eléctronico' />
                </Link>
                <p>
                    Al registrarse, usted acepta los  Términos de Servicio  y la Política de  Privacidad, incluido el Uso de  Cookies.
                </p>
                <br />
                <label>¿Ya tienes una cuenta?  </label>
                <Link style={{ textDecoration: 'none' }} to="/login">Iniciar sesión</Link>
            </section>
        </>
    );
}
export default Root;