import { Helmet } from 'react-helmet';
import Nav from '../../../components/Nav';
import TweetCard from '../../../components/TweetCard';

const Profile = () => {
    return (
        <div>
            <Helmet>
                <title>Perfil</title>
                <meta name="title" content="Perfil" />
                <meta name="description" content="Twitter es la mejor red social que existe, mira tu perfil aquí." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/profile" />
                <meta property="og:title" content="Perfil" />
                <meta property="og:description" content="Twitter es la mejor red social que existe, mira tu perfil aquí." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://localhost:3000/profile" />
                <meta property="twitter:title" content="Perfil" />
                <meta property="twitter:description" content="Twitter es la mejor red social que existe, mira tu perfil aquí." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
            </Helmet>

            <Nav />

            <section name="profile">
                <section name="top-profile">
                    <h3>Nombre completo</h3>
                    <p>(numero tweets/likes)</p>
                </section>
                <section name="datos-usuario">
                    <div>
                        <img src="" alt="Imagen de portada" />
                    </div>
                    <img src="" alt="Imagen de perfil" />
                    <h3>Nombre completo</h3>
                    <p>@username</p>
                    <p>Fecha registro</p>
                    <p> <b>número</b> seguidos      <b>número</b> seguidores</p>
                    <button>Configurar perfil</button>
                </section>

                <section name="tweets">
                    <button>Tweets</button>
                    <button>Tweets y replicas</button>
                    <button>Media</button>
                    <button>Likes</button>
                    <br></br>

                    <TweetCard />

                    <br></br>

                    <TweetCard />

                </section>

            </section>

        </div>

    );
}

export default Profile;