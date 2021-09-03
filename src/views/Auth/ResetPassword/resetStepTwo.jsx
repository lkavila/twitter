import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";

const ResetPasswordStepTwo = () => {
    return (
        <div>
            <Metadata/>

            <h2>¿Como quieres cambiar tu contraseña?</h2>
            <br />
            <div>
                <div>
                    <img src="" alt="Icono de usuario  "></img>
                    <b>nombre completo</b>
                    <p>@username</p>
                </div>
                <form method="post" >
                    <p>Puedes usar la información asociada a tu cuenta</p>
                    <input type="radio" required id="send-reset-email" name="send-reset-email" /><label>Enviar un email ******@****.***</label><br></br>
                    <Link style={{ textDecoration: 'none' }} to="/reset-password"><button>Siguiente</button></Link>
                </form>
                <Link style={{ textDecoration: 'none' }} to="#">¿No tienes acceso?</Link>
            </div>
        </div>

    );
}

export default ResetPasswordStepTwo;