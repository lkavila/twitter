import Nav from '../Nav';
import SmallTweet from '../Tweet/SmallTweet';
import Metadata from "../../lib/metadata";

const Profile = () => {
    return (
        <div>
            <Metadata title="Perfil Twitter" description="Twitter es la mejor red social que existe, mira tu perfil aquí." route="profile"/>

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

                    <SmallTweet />

                    <br></br>

                    <SmallTweet />

                </section>

            </section>

        </div>

    );
}

export default Profile;