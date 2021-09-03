import Nav from '../../components/Nav';
import TweetCard from '../../components/TweetCard'
import Metadata from "../../lib/metadata";
import UserImg from "../../assets/img/default-user-image.png"
const Profile = () => {
    return (
        <div>
            <Metadata title="Perfil Twitter" description="Twitter es la mejor red social que existe, mira tu perfil aquí." route="profile" />

            <Nav />

            <section name="profile">
                <section name="top-profile">
                    <h3>Nombre completo</h3>
                    <p>(numero tweets/likes)</p>
                </section>
                <section name="datos-usuario">
                    <div>
                        <img src={UserImg} alt="Imagen de portada" style={{ width: '100px', height: '100px' }} />
                    </div>
                    <img src={UserImg} alt="Imagen de perfil" style={{ width: '100px', height: '100px' }} />
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