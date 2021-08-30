import Metadata from "../../lib/metadata";

const Tweet = () => {
    return (
        <>
            <Metadata title="Mi Tweet" description="(Contenido del tweet)" route="profile:username/id" />

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