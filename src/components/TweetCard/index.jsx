import { Link } from 'react-router-dom';

const SmallTweet = () => {
    return (
        <article>
            <Link style={{ textDecoration: 'none' }} to="/username/tweet">
                <div name="tweet">
                    <div name="info-usuario">
                        <img src="" alt="foto de perfil usuario" />
                        <p> <b>Nombre completo</b> @username <span>.</span> fecha tweet</p>
                    </div>

                    <div name="contenido-tweet">
                        <p>Que pasa chavales!! Todo bien todo correcto?</p>
                        <div name="botones">
                            <button>Reply</button>
                            <button>Retweet</button>
                            <button>Like/Unlike</button>
                            <button>Share</button>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );

}

export default SmallTweet;