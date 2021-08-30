import Nav from '../../components/Nav';
import TweetCard from '../../components/TweetCard'
import { Link } from 'react-router-dom'
import Metadata from '../../lib/metadata'
const Home = () => {
    return (
        <>
            <Metadata title={'Bienvenido a Twitter.'} description="Twitter es la mejor red social que existe, inicia sesión aquí." route='home' ></Metadata>
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