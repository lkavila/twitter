import { Link } from 'react-router-dom'
import Metadata from '../../lib/metadata'
import { Nav, TweetCardSmall, Form, Button, Input } from '../../components'
const Home = () => {
    return (
        <>
            <Metadata title={'Bienvenido a Twitter.'} description="Twitter es la mejor red social que existe, inicia sesión aquí." route='home' ></Metadata>
            <Nav />
            <section>
                <h2>Home</h2>
                <TweetCardSmall />
            </section>
            <aside>
                <section>
                    <Form>
                        <Input id="search" type="text" name="search" title="Busqueda en twitter" />
                        <Button title='Buscar' />
                    </Form>
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