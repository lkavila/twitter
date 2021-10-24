import { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import TweetButton from './TweetButton';
import { Avatar, DropDownMenu, ReplayModal } from '../';
import { BsPersonPlus, BsCardList, BsCodeSlash, BsFlag, BsTrash } from 'react-icons/bs'
import { IoVolumeMuteOutline } from 'react-icons/io5'
import { MdBlock } from 'react-icons/md'
import { FiBarChart2 } from 'react-icons/fi'
import { VscPinned } from 'react-icons/vsc'

const SmallTweet = (props) => {
    const { _id, user, createdAt, content, comment, image = null, replies = 0, retweets = 0, likes = 0, createComment = {}, createLike = {}, deleteMyTweet, autor } = props
    const { name, username } = user;
    const myUser = useContext(AuthContext).user;
    const myUsername = myUser.username
    const userId = myUser._id
    let opctions;
    if (myUsername === username) {
        opctions =
            [{ Icon: BsTrash, text: "Delete", iconColor: "red", textColor: "text-redTwitter-realRed", func: deleteMyTweet, params: [_id, userId] },
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
    const [open, setOpen] = useState(false)

    let breakContent = "";
    if (content?.length === content?.replaceAll(" ", "12")?.length) {
        //En caso de que el contenido sea letras sin espacios, se rompen (style break-all)
        breakContent = "break-all";
    }
    const handleLike = () => {
        if (typeof (createLike) === 'function')
            createLike(1, _id)
    }
    return (
        <div name="tweet-container" className="container flex flex-row border-t border-r border-l border-grey-textTwitter border-opacity-25 px-2 py-2 max-w-screen-sm hover:bg-grey-lighter cursor-pointer">
            <Link
                to={`/${username}`} >
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
                        <DropDownMenu elements={opctions} />
                    </div>
                </div>
                <div name="content-tweet">
                    <Link to={`/username/tweet/${_id}`}>
                        <div name="contenido-tweet" className="max-w-screen-sm">
                            <article className={`text-sm text-grey-contentTwitter mb-2.5 whitespace-pre-wrap ${breakContent}`} >
                                {autor && (
                                    <span className='text-grey-textTwitter' >
                                        Replying to
                                        <span className='text-blueTwitter'> @{autor}</span>
                                    </span>
                                )}
                                <p>
                                    {content}
                                    {comment}
                                </p>
                            </article>

                            {(image) ?
                                <div name="media">
                                    <img alt="media-tweet" src={image} className="rounded-2xl border-grey border" />
                                </div>
                                : null}
                        </div>
                    </Link>

                    <div className="container">
                        <div name="botones" className="flex flex-row justify-between mr-20 md:py-1">
                            <TweetButton reply hoverColor="#1DA1F2" title="Reply" num={replies} onClick={() => setOpen(!open)} />
                            <TweetButton retweet hoverColor="rgb(0, 186, 124)" title="Retweet" num={retweets} />
                            <TweetButton like hoverColor="rgb(249, 24, 128)" title="Like" num={likes} onClick={handleLike} />
                            <TweetButton share hoverColor="#1DA1F2" title="Share" />
                        </div>
                    </div>
                </div>
            </div>
            <ReplayModal {...props} open={open} setOpen={setOpen} createComment={createComment} />
        </div>
    );

}

export default SmallTweet;