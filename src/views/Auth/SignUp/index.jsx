import { Link } from 'react-router-dom'
import Metadata from "../../../lib/metadata";
import {Input, Form,Button , Logo} from '../../../components'
const SignUp = () => {
    return (
        <>
            <Metadata title="Únete a Twitter hoy mismo." description="Únete hoy a Twitter. Regístrate Iniciar sesión. Sigue lo que te interesa. Entérate de lo que está hablando la gente. Únete a la conversación." route="register" />
            <section>
                <Logo/>
                <h2>Crea tu cuenta</h2>
                <Form>
                    <Input id="namedInput" type="text" name="name" title='Nombre' required/>
                    <Input id="emailInput" type="email" name="email" title='Correo o numero de telefono' required/>
                    <h3>Fecha de nacimiento</h3>
                    <p>Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</p>
                    <Input id="birthdayInput" type="date" name="birthday" required/>
                    <Input id="passwordInput" type='password' name="password" title='Contraseña' required/>
                    <Button aria-label="Registrarse en Twitter" title='Registrarse'/>
                </Form>
                <Link style={{ textDecoration: 'none' }} to="/login">Iniciar Sesión</Link>
            </section>
        </>
    );
}

export default SignUp;