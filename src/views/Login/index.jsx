import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Iniciar sesión</title>
                <meta name="title" content="Iniciar sesión" />
                <meta name="description" content="Twitter es la mejor red social que existe, inicia sesión aquí." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/login" />
                <meta property="og:title" content="Iniciar sesión" />
                <meta property="og:description" content="Twitter es la mejor red social que existe, inicia sesión aquí." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://localhost:3000/login" />
                <meta property="twitter:title" content="Iniciar sesión" />
                <meta property="twitter:description" content="Twitter es la mejor red social que existe, inicia sesión aquí." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
            </Helmet>
            <div>
                <img src="" alt="Imagen no disponible" />
                <h1>Iniciar sesión en Twitter</h1>
            </div>

            <form method='post'>
                <input type='text' id="username" name="username" required placeholder="Télefono, correo o usuario" />
                <br />
                <input type='text' id="password" name="password" required placeholder="Contraseña" />
                <br />
                <input type="submit" value="Iniciar sesión" />
            </form>

            <div>
                <Link style={{ textDecoration: 'none' }} to="/signup">¿Olvidaste tu contraseña?</Link>
                <span> . </span>
                <Link style={{ textDecoration: 'none' }} to="/signup">Registrate en Twitter</Link>
            </div>
        </div>

    );
}

export default Login;