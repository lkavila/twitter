import { Link } from 'react-router-dom';
import TweetButton from './TweetButton'
import { Avatar } from '../'

const SmallTweet = (props) => {
    const { _id, user, createdAt = "30/02/2021", content, image = null, replies = 0, retweets = 0, likes = 0 } = props
    const { name, username } = user;
    let breakContent = "";
    if (content.length === content.replaceAll(" ", "12").length) {//En caso de que el contenido sea letras sin espacios, se rompen (style break-all)
        breakContent = "break-all";
    }
    return (
        <div name="tweet-container" className="container flex flex-row border-t border-r border-l border-grey-textTwitter border-opacity-25 px-2 py-2 max-w-screen-sm hover:bg-grey-lighter cursor-pointer">
            <Link to={`/${username}`} name="info-usuario-avatar" >
                <div name="avatar" className="min-w-max w-16 mr-2">
                    <Avatar />
                </div>
            </Link>
            <div name="tweet" className="container max-w-screen-sm">
                <Link to={`/${username}`} name="info-usuario" >

                    <p className="text-sm text-grey-textTwitter"> <strong className="text-black">{name}</strong> @{username} <span className="mb-4 text-md">.</span> {createdAt}</p>
                </Link>

                <div name="contenido-tweet" className="max-w-screen-sm">
                    <Link to={`/username/tweet/${_id}`}>
                        <article className={`text-sm text-grey-contentTwitter mb-2.5 whitespace-pre-wrap ${breakContent}`} >
                            {content}
                        </article>
                    </Link>

                    {(image) ?
                        <div name="media">
                            <img alt="media-tweet" src={image} className="rounded-2xl border-grey border" />
                        </div>
                        : null}
                </div>
                <div className="container">
                    <div name="botones" className="flex flex-row justify-between mr-20 md:py-1">
                        <TweetButton reply hoverColor="#1DA1F2" title="Reply" num={replies} />
                        <TweetButton retweet hoverColor="rgb(0, 186, 124)" title="Retweet" num={retweets} />
                        <TweetButton like hoverColor="rgb(249, 24, 128)" title="Like" num={likes} />
                        <TweetButton share hoverColor="#1DA1F2" title="Share" />
                    </div>
                </div>

            </div>
        </div>
    );

}

export default SmallTweet;