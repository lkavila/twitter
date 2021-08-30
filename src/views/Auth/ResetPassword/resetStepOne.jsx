import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";

const ResetPasswordStepOne = () => {
    return (
        <div>
            <Metadata title="Cambiar contraseña" description="Escribe tu nombre de usuario o correo para encontrar tu cuenta" route="search-account"/>

            <h2>Encuentra tu cuenta de Twitter</h2>

            <div>
                <form method="post" >
                    <label>Ingresa tu correo, número de celular o nombre de usuario</label>
                    <input type="text" required></input>
                    <Link style={{ textDecoration: 'none' }} to="/send-reset-password"><button>Buscar</button></Link>
                </form>
            </div>
        </div>

    );
}

export default ResetPasswordStepOne;