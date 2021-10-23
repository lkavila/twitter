import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import TweetButton from './TweetButton';
import { Avatar, DropDownMenu } from '../';
import { BsPersonPlus, BsCardList, BsCodeSlash, BsFlag, BsTrash } from 'react-icons/bs'
import { IoVolumeMuteOutline } from 'react-icons/io5'
import { MdBlock } from 'react-icons/md'
import { FiBarChart2 } from 'react-icons/fi'
import { VscPinned } from 'react-icons/vsc'
import { useTweets } from '../../hooks/useTweets';



const SmallTweet = (props) => {
    const { _id, user, createdAt = "30/02/2021", content, image = null, replies = 0, retweets = 0, likes = 0 } = props
    const { name, username } = user;
    const myUserName = useContext(AuthContext).user.username;
    const { deleteMyTweet } = useTweets();
    let opctions;
    if (myUserName === username) {
        opctions =
            [{ Icon: BsTrash, text: "Delete", iconColor: "red", textColor: "text-redTwitter-realRed", func: deleteMyTweet, params: [_id] },
            { Icon: VscPinned, text: "Pin to your profile" },
            { Icon: BsCardList, text: `Add/remove @${username} from Lists` },
            { Icon: BsCodeSlash, text: `Embed Tweet` },
            { Icon: FiBarChart2, text: "View Tweet activity" }]
    } else {
        opctions = [{ Icon: BsPersonPlus, text: `Follow @${username}` },
        { Icon: BsCardList, text: `Add/remove @${username} from Lists` },
        { Icon: IoVolumeMuteOutline, text: `Mute @${username}` },
        { Icon: MdBlock, text: `Block @${username}` },
        { Icon: BsCodeSlash, text: `Embed Tweet` },
        { Icon: BsFlag, text: `Report Tweet` }]
    }
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

                <div className="flex flex-row justify-between">
                    <Link to={`/${username}`} name="info-usuario" >
                        <p className="text-sm text-grey-textTwitter"> <strong className="text-black">{name}</strong> @{username} <span className="mb-4 text-md">.</span> {createdAt}</p>
                    </Link>

                    <div className="hover:bg-blueTwitter-lighter p-2 w-8 h-8 rounded-full -mb-1" >
                        <DropDownMenu
                            elements={opctions}
                        />
                    </div>
                </div>

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