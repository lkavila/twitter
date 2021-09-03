import { Link } from 'react-router-dom'
import Metadata from "../../../lib/metadata";

const SignUp = () => {
    return (
        <>
            <Metadata title="Únete a Twitter hoy mismo." description="Únete hoy a Twitter. Regístrate Iniciar sesión. Sigue lo que te interesa. Entérate de lo que está hablando la gente. Únete a la conversación." route="register" />
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