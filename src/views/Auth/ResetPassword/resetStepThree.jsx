import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";
import { Form, Input, Button, Avatar } from '../../../components'
const ResetPasswordStepThree = () => {
    return (
        <>
            <Metadata />
            <section>
                <Avatar alt="Icono de usuario" />
                <h2>Escribe tu nueva contraseña</h2>
                <Form>
                    <Input id="reset-password" type="text" name="reset-password" title="Ingresa tu nueva contraseña" required />
                    <Input id="reset-password-confirm" type="text" name="reset-password-confirm" title="Confirma tu nueva contraseña" required />
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <Button title='Actualizar'/>
                    </Link>
                </Form>
            </section>
        </>
    );
}

export default ResetPasswordStepThree;