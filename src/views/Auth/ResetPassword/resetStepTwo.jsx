import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";
import { Form, Input, Button, Avatar } from '../../../components'
const ResetPasswordStepTwo = () => {
    return (
        <>
            <Metadata />
            <section>
                <h2>¿Como quieres cambiar tu contraseña?</h2>
                <div>
                    <Avatar alt="Icono de usuario" />
                    <strong>nombre completo</strong>
                    <p>@username</p>
                </div>
                <p>Puedes usar la información asociada a tu cuenta</p>
                <Form>
                    <Input id="send-reset-email" type="radio" name="send-reset-email" label='Enviar un email ******@****.***' required />
                    <Link style={{ textDecoration: 'none' }} to="/reset-password">
                        <Button title='Siguiente' />
                    </Link>
                </Form>
                <Link style={{ textDecoration: 'none' }} to="#">¿No tienes acceso?</Link>
            </section>
        </>

    );
}

export default ResetPasswordStepTwo;