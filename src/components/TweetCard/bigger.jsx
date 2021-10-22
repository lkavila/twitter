import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../'
import TweetButton from './TweetButton'
import { Spinner, ReplayModal } from '../'

const Tweet = ({ loadingT, tweet, createComment, replies = 0, likes = 0, addLike }) => {
    let breakContent = "break-words";
    const [open, setOpen] = useState(false)

    return (
        <>
            {loadingT ?
                <Spinner size={8} />
                : (
                    <>
                        <div name="tweet-container" className="container mx-auto border-r border-l border-grey-textTwitter border-opacity-25 px-4 py-1 max-w-screen-sm">
                            <Link to={`/${tweet?.user?.username}`}>
                                <div name="image-user" className="flex flex-row mb-6">
                                    <Avatar />
                                    <div name="info-user" className="px-4">
                                        <p> <b>{tweet?.user?.name}</b></p>
                                        <p className="text-grey-textTwitter">@{tweet?.user?.username}</p>
                                    </div>
                                </div>
                            </Link>

                            <div name="contenido-tweet">
                                <article className={`text-2xl mb-4 whitespace-pre-wrap ${breakContent}`}>{tweet?.content}</article>
                                {(tweet?.image) ?
                                    <div name="iamge">
                                        <img alt="media-tweet-bigger" src={tweet?.image} className="rounded-2xl border-grey border cursor-pointer" />
                                    </div>
                                    : null}


                                <div name="info-tweet" className="py-2 border-b border-grey-textTwitter border-opacity-25">
                                    <p className="text-grey-textTwitter"> 11:30 am <span>.</span> {tweet?.createdAt} <span>.</span> Twitter from </p>
                                </div>

                                <div name="numbers-tweet" className="py-2 border-b border-grey-textTwitter border-opacity-25">
                                    <p className="text-grey-textTwitter">
                                        <b className="text-black">
                                            {replies}{' '}
                                        </b>
                                        Replies
                                        <span />
                                        {'  '}
                                        <span />
                                        <b className="text-black">
                                            {likes}{' '}
                                        </b>
                                        Likes
                                    </p>
                                </div>

                                <div name="botones" className="container mx-auto flex flex-row justify-between md:py-1 border-b border-grey-textTwitter border-opacity-25">
                                    <TweetButton reply hoverColor="#1DA1F2" title="Reply" num={replies} onClick={() => setOpen(!open)} />
                                    <TweetButton retweet hoverColor="rgb(0, 186, 124)" title="Retweet" />
                                    <TweetButton like hoverColor="rgb(249, 24, 128)" title="Like" num={likes} onClick={() => addLike(1, tweet._id)} />
                                    <TweetButton share hoverColor="#1DA1F2" title="Share" />
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            <ReplayModal {...tweet} open={open} setOpen={setOpen} createComment={createComment} />
        </>

    )

}
export default Tweet;