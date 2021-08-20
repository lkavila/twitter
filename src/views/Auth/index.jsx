import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const Root = () => {
    return (
        <>
            <Helmet>
                <title>Twitter. Es lo que esta pasando</title>
                <meta name="title" content="Twitter. Es lo que esta pasando" />
                <meta name="description" content="Twitter es la mejor red social que existe." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/login" />
                <meta property="og:title" content="Twitter. Es lo que esta pasando" />
                <meta property="og:description" content="Twitter es la mejor red social que existe." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://localhost:3000/login" />
                <meta property="twitter:title" content="Twitter. Es lo que esta pasando" />
                <meta property="twitter:description" content="Twitter es la mejor red social que existe." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
            </Helmet>
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