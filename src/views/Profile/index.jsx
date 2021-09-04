import Metadata from "../../lib/metadata";
import { Nav, Avatar, TweetCardSmall } from '../../components'
const Profile = () => {
    return (
        <>
            <Metadata title="Perfil Twitter" description="Twitter es la mejor red social que existe, mira tu perfil aquí." route="profile" />
            <Nav />
            <section name="profile">
                <section name="top-profile">
                    <h3>Nombre completo</h3>
                    <p>(numero tweets/likes)</p>
                </section>
                <section name="datos-usuario">
                    <div>
                        <Avatar />
                    </div>
                    <Avatar />
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

                    <TweetCardSmall />

                    <TweetCardSmall />

                </section>

            </section>

        </>

    );
}

export default Profile;