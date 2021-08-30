import { Link } from 'react-router-dom';

const Nav = () => {
    return (

        <nav>
            <img src="" alt="logo de twitter"></img>
            <br />
            <ul>
                <li><Link style={{ textDecoration: 'none' }} to="/home">Home</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="#">Explorar</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="#">Notificaciones</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="#">Mensajes</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="#">BookMarks</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="#">Listas</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/profile">Perfil</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="#">Más</Link></li>

            </ul>
            <br />
            <button>Tweet</button>
            <br />
            <div>
                <img src="" alt="foto-perfil" />
                <div>
                    <b>Nombre completo</b>
                    <br />
                    @username
                </div>
            </div>
        </nav>
    );
}

export default Nav;