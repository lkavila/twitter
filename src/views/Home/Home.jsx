import { Helmet } from 'react-helmet';
import Nav from '../../components/Nav';
import TweetCard from '../../components/TweetCard'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home / Twitter</title>
                <meta name="title" content="Bienvenido a Twitter." />
                <meta name="description" content="Twitter es la mejor red social que existe, inicia sesión aquí." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/login" />
                <meta property="og:title" content="Noticias, actualidad" />
                <meta property="og:description" content="Twitter es la mejor red social que existe, inicia sesión aquí." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://localhost:3000/login" />
                <meta property="twitter:title" content="Busca a quien seguir" />
                <meta property="twitter:description" content="Twitter es la mejor red social que existe, inicia sesión aquí." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
            </Helmet>
            <Nav />
            <section>
                <h2>Home</h2>
                <TweetCard />
            </section>
            <aside>
                <section>
                    <form>
                        <input type="text" name="search" id="search" aria-label="Busqueda en twitter" placeholder='Search on Twitter' />
                        <button type="submit">Buscar</button>
                    </form>
                </section>
                <section>
                    <h2>What’s happening</h2>
                    <Link>Show more</Link>
                </section>
                <section>
                    <h2>Who to follow</h2>
                    <Link>Show more</Link>
                </section>

            </aside>
        </>
    );
}
export default Home;