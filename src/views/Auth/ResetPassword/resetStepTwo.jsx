import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ResetPasswordStepOne = () => {
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
                    <img src=""></img>
                </div>
                <form method="post" >
                    <label>Ingresa tu correo, número de celular o nombre de usuario</label>
                    <input type="text" required></input>
                    <input type="button"><Link style={{ textDecoration: 'none' }} to="/send-password-reset">Buscar</Link></input>
                </form>
            </div>
        </div>

    );
}

export default ResetPasswordStepOne;