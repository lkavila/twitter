import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <section name="nav">
            <img src="" alt="logo de twitter"></img>
            <br></br>
            <nav>
                <ul>
                    <li><Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
                    <li><Link style={{ textDecoration: 'none' }} to="#">Explorar</Link></li>
                    <li><Link style={{ textDecoration: 'none' }} to="#">Notificaciones</Link></li>
                    <li><Link style={{ textDecoration: 'none' }} to="#">Mensajes</Link></li>
                    <li><Link style={{ textDecoration: 'none' }} to="#">BookMarks</Link></li>
                    <li><Link style={{ textDecoration: 'none' }} to="#">Listas</Link></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/profile">Perfil</Link></li>
                    <li><Link style={{ textDecoration: 'none' }} to="#">Más</Link></li>

                </ul>
            </nav>
            <br></br>
            <button>Tweet</button>
            <br></br><br></br><br></br>

            <div>
                <img src="" alt="foto-perfil" />
                <div>
                    <b>Nombre completo</b>
                    <br></br>
                    @username
                </div>
            </div>
        </section>
    );
}

export default Nav;