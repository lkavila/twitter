import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ResetPasswordStepThree = () => {
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