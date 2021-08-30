import Nav from '../../components/Nav';
import Tweet from './Tweet';
import { Helmet } from 'react-helmet';

const TweetPage = () => {

    return (
        <>
            <Helmet>
                <title>Tweet</title>
                <meta name="title" content="Tweet" />
                <meta name="description" content="Contenido del tweet" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/profile:username/id" />
                <meta property="og:title" content="Tweet" />
                <meta property="og:description" content="Contenido del tweet" />
                <meta property="og:image" content="(Imagen del tweet)" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://localhost:3000/profile:username/id" />
                <meta property="twitter:title" content="Tweet" />
                <meta property="twitter:description" content="Contenido del tweet" />
                <meta property="twitter:image" content="(Imagen del tweet)" />
            </Helmet>
            <Nav />
            <section>
                <Tweet />
            </section>
        </>
    )

}

export default TweetPage