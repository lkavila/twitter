import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";

const ResetPasswordStepThree = () => {
    return (
        <div>

            <Metadata/>

            <div>
                <img src="" alt="Icono de usuario"></img>
            </div>
            <h2>Escribe tu nueva contraseña</h2>
            <br />
            <div>

                <form method="post" >
                    <input type="text" id="reset-password" name="reset-password" required placeholder="Ingresa tu nueva contraseña" /><br />
                    <input type="text" id="reset-password-confirm" name="reset-password-confirm" required placeholder="Confirma tu nueva contraseña" /><br />
                    <Link style={{ textDecoration: 'none' }} to="/login"><input type="submit" value="Actualizar" /></Link>
                </form>
            </div>
        </div>

    );
}

export default ResetPasswordStepThree;