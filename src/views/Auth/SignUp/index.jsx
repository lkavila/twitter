import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <Helmet>
                <title>Únete a Twitter hoy mismo.</title>
                <meta name="description" content="Únete hoy a Twitter. Regístrate Iniciar sesión. Sigue lo que te interesa. Entérate de lo que está hablando la gente. Únete a la conversación." />
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
            <section>
                <img src="" alt="Imagen no disponible" />
                <h2>Crea tu cuenta</h2>
                <form>
                    <input id="namedInput" type="text" name="name" required placeholder='Nombre' />
                    <br />
                    <input id="emailInput" type="email" name="email" required placeholder='Correo o numero de telefono' />
                    <br />
                    <h3>Fecha de nacimiento</h3>
                    <p>Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</p>
                    <input id="birthdayInput" type="date" name="birthday" />
                    <br />
                    <input id="passwordInput" type='password' name="password" required placeholder='Contraseña' />
                    <br />
                    <button aria-label="Registrarse en Twitter">Registrarse</button>
                </form>
                <Link style={{ textDecoration: 'none' }} to="/login">Iniciar Sesión</Link>
            </section>
        </>
    );
}

export default SignUp;