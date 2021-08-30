import { Helmet } from "react-helmet";
import twitter_image from '../assets/img/twitter-blue.svg'

const Metadata = ({ title = 'Twitter. Es lo que esta pasando', description = 'Somos una de las redes sociales más grandes del mundo.', image = "../assets/img/twitter-blue.svg", route = '' }) => {
    const baseRoute = 'http://localhost:3000/'
    return (
        <Helmet>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:url" content={baseRoute + route} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={twitter_image} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={baseRoute + route} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={twitter_image} />
        </Helmet>
    );
}

export default Metadata;
