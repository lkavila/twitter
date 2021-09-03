import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";
import { Form, Input, Button } from '../../../components'
const ResetPasswordStepOne = () => {
    return (
        <>
            <Metadata title="Cambiar contraseña" description="Escribe tu nombre de usuario o correo para encontrar tu cuenta" route="search-account" />
            <section>
                <h2>Encuentra tu cuenta de Twitter</h2>
                <Form>
                    <Input id='encuentraCuenta' type="text" name='encuentraCuenta' label='Ingresa tu correo, número de celular o nombre de usuario' required />
                    <Link style={{ textDecoration: 'none' }} to="/send-reset-password">
                        <Button title='Buscar' />
                    </Link>
                </Form>
            </section>
        </>
    );
}

export default ResetPasswordStepOne;