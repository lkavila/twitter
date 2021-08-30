import { Link } from 'react-router-dom';
import Metadata from "../../lib/metadata";
const Root = () => {
    return (
        <>
            <Metadata/>

            <section>
                <h1>Lo que esta sucediendo ahora</h1>
                <h2>Únete a Twitter hoy.</h2>

                <section>
                    <input type="button" name="signupgoolge" id="signupgoolge" aria-label="Registrate con Google" value="Registrate con Google" /><br />
                    <input type="button" name="signufacebook" id="signufacebook" aria-label="Registrate con Facebook" value="Registrate con Facebook" /><br />
                    <Link style={{ textDecoration: 'none' }} to="/signup">
                        <button>Registrate con télefono o con correo eléctronico</button>
                    </Link>
                </section>
                <p>
                    Al registrarse, usted acepta los  Términos de Servicio  y la Política de  Privacidad, incluido el Uso de  Cookies.
                </p>
                <br></br>
                <label>¿Ya tienes una cuenta?  </label>
                <Link style={{ textDecoration: 'none' }} to="/login">Iniciar sesión</Link>
            </section>


        </>
    );
}
export default Root;