import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>My first react app</title>
                <meta name="hola" content="wasaaa bro" />
            </Helmet>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Explorar</li>
                    <li>Perfil</li>
                </ul>
            </nav>
            <section>
                <h2>Time line</h2>
            </section>
            <aside>
                <section>
                    <input type="text" name="search" id="search" aria-label="Busqueda en twitter" />
                    <button type="submit">Buscar</button>
                </section>
                <section>
                    <h2>Que pasa</h2>
                </section>

            </aside>
        </>
    );
}
export default Home;