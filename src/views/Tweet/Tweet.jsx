import { Helmet } from 'react-helmet';

const Tweet = () => {
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

            <div name="tweet">
                <div name="info-usuario">
                    <img src="" alt="foto de perfil usuario" />
                    <p> <b>Nombre completo</b> @username <span>.</span> fecha tweet</p>
                </div>

                <div name="contenido-tweet">
                    <p style={{ fontSize: 20 }}>Que pasa chavales!! Todo bien todo correcto?</p>
                </div>

                <div name="info-tweet">
                    <p> hora <span>.</span> fecha de tweet <span>.</span> Twitter from </p>
                    <hr />
                    <p> <b>0</b> Retweets <span> </span>  <b>0</b> Quote tweets <span> </span> <b>0</b> Likes </p>
                    <hr />
                    <button>Reply</button>
                    <button>Retweet</button>
                    <button>Like/Unlike</button>
                    <button>Share</button>
                    <hr />
                </div>

            </div>
        </>
    )

}
export default Tweet;