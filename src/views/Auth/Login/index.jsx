import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";

const Login = () => {
    return (
        <div>

            <Metadata title="Iniciar sesión en Twitter" description="Twitter es la mejor red social que existe, inicia sesión aquí." route="login"/>

            <div>
                <img src="../../../assets/img/twitter-blue.svg" alt="Imagen no disponible" />
                <h1>Iniciar sesión en Twitter</h1>
            </div>

            <form method='post'>
                <input type='text' id="username" name="username" required placeholder="Télefono, correo o usuario" />
                <br />
                <input type='text' id="password" name="password" required placeholder="Contraseña" />
                <br />
                <Link style={{ textDecoration: 'none' }} to="/home"><input type="submit" value="Iniciar sesión" /></Link>
            </form>

            <div>
                <Link style={{ textDecoration: 'none' }} to="/search-account">¿Olvidaste tu contraseña?</Link>
                <span> . </span>
                <Link style={{ textDecoration: 'none' }} to="/signup">Registrate en Twitter</Link>
            </div>
        </div>

    );
}

export default Login;