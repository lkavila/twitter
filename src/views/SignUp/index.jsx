import { Helmet } from 'react-helmet';

const SignUp = () => {
    return (
        <>
            <Helmet>
                <title>Únete a Twitter hoy mismo.</title>
                <meta name="description" content="Únete hoy a Twitter. Regístrate Iniciar sesión. Sigue lo que te interesa. Entérate de lo que está hablando la gente. Únete a la conversación." />
            </Helmet>
            <section>
                <h2>Registrate en twitter</h2>
                <form>
                    <label htmlFor="namedInput">Nombre:</label>
                    <input id="namedInput" type="text" name="name" />
                    <label htmlFor="emailInput">Correo:</label>
                    <input id="emailInput" type="email" name="email" />
                    <label htmlFor="birthdayInput">Fecha de nacimiento:</label>
                    <input id="birthdayInput" type="date" name="birthday" />
                    <label htmlFor="passwordInput">Contraseña:</label>
                    <input id="passwordInput" type="email" name="password" />
                    <button aria-label="Registrarse en Twitter">Registrarse</button>
                </form>
            </section>
        </>
    );
}

export default SignUp;