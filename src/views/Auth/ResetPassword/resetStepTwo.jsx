import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ResetPasswordStepTwo = () => {
    return (
        <div>
            <Helmet>
                <title>Cambiar contraseña</title>
                <meta name="title" content="Cambiar contraseña" />
                <meta name="description" content="Twitter es la mejor red social que existe, si no recuerdas tu contraseña, puedes cambiarla aquí." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/login" />
                <meta property="og:title" content="Cambiar contraseña" />
                <meta property="og:description" content="Twitter es la mejor red social que existe, si no recuerdas tu contraseña, puedes cambiarla aquí." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://localhost:3000/login" />
                <meta property="twitter:title" content="Cambiar contraseña" />
                <meta property="twitter:description" content="Twitter es la mejor red social que existe, si no recuerdas tu contraseña, puedes cambiarla aquí." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
            </Helmet>
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