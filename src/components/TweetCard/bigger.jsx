import UserImg from "../../assets/img/default-user-image.png"

const Tweet = () => {
    return (
            <article>
                <div name="tweet">
                    <div name="info-usuario">
                    <img src={UserImg} alt="Imagen de perfil" style={{ width: '100px', height: '100px' }} />
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
            </article>
    )

}
export default Tweet;