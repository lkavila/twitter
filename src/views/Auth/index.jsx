import { Link } from 'react-router-dom';
import Metadata from "../../lib/metadata";
import { Button, Logo } from '../../components'
const Root = () => {
    return (
        <>
            <Metadata />
            <div className='flex flex-row '>
                <aside className='w-1/2 h-screen bg-blueTwitter flex justify-center items-center'>
                    <Logo white className="w-96 h-96 fill-current text-green-600" />
                </aside>
                <section className='w-1/2 h-screen'>
                    <Logo />
                    <h1>Lo que esta sucediendo ahora</h1>
                    <h2>Únete a Twitter hoy.</h2>
                    <Button name="signupgoolge" id="signupgoolge" aria-label="Registrate con Google" title="Registrate con Google" />
                    <Button name="signufacebook" id="signufacebook" aria-label="Registrate con Facebook" title="Registrate con Facebook" />
                    <Link style={{ textDecoration: 'none' }} to="/signup">
                        <Button title='Registrate con télefono o con correo eléctronico' />
                    </Link>
                    <p>
                        Al registrarse, usted acepta los  Términos de Servicio  y la Política de  Privacidad, incluido el Uso de  Cookies.
                    </p>
                    <br />
                    <label>¿Ya tienes una cuenta?  </label>
                    <Link style={{ textDecoration: 'none' }} to="/login">Iniciar sesión</Link>
                </section>
            </div>
        </>
    );
}
export default Root;