import { Link } from 'react-router-dom'
import Metadata from '../../lib/metadata'
import tweetsJson from '../../components/TweetCard/tweets.json'
import { Nav, TweetCardSmall, Form, Button, Input } from '../../components'
const Home = () => {
    const tweets = tweetsJson.tweets
    return (
        <>
            <Metadata title={'Bienvenido a Twitter.'} description="Twitter es la mejor red social que existe, inicia sesión aquí." route='home' ></Metadata>
            <div className='flex justify-center' >
                <div className='mr-2 sticky top-0'>
                    <Nav />
                </div>
                <article>
                    {tweets.map((tweet) =>
                        <section>
                            <TweetCardSmall {...tweet} />
                        </section>
                    )}
                </article>
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
            </div>
        </>
    );
}
export default Home;