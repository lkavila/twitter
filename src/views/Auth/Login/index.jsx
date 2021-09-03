import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";
import { Form, Input, Button, Logo } from '../../../components'
const Login = () => {
    return (
        <>
            <Metadata title="Iniciar sesión en Twitter" description="Twitter es la mejor red social que existe, inicia sesión aquí." route="login" />
            <section>
                <Logo />
                <h1>Iniciar sesión en Twitter</h1>
                <Form>
                    <Input id="username" type='text' name="username" title="Télefono, correo o usuario" required />
                    <Input id="password" type='text' name="password" title="Contraseña" required />
                    <Link style={{ textDecoration: 'none' }} to="/home">
                        <Button title='"Iniciar sesión"' />
                    </Link>
                </Form>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/search-account">¿Olvidaste tu contraseña?</Link>
                    <span> . </span>
                    <Link style={{ textDecoration: 'none' }} to="/signup">Registrate en Twitter</Link>
                </div>
            </section>
        </>

    );
}

export default Login;