import { useState } from 'react'
import { Link } from 'react-router-dom';
import TweetButton from './TweetButton'
import { Avatar, ReplayModal } from '../'

const SmallTweet = (props) => {
    const { _id, user, createdAt = "30/02/2021", content, image = null, replies = 0, retweets = 0, likes = 0, createComment } = props
    const { name, username } = user;
    const [open, setOpen] = useState(false)
    return (
        <>
            <div name="tweet-container" className="container mx-auto flex flex-row border-t border-r border-l border-grey-textTwitter border-opacity-25 px-2 py-2 max-w-screen-sm hover:bg-grey-lighter cursor-pointer">
                <Link to={`/${username}`} name="info-usuario-avatar" >
                    <div name="avatar" className="min-w-max w-16 mr-2">
                        <Avatar />
                    </div>
                </Link>
                <div name="tweet">
                    <Link to={`/${username}`} name="info-usuario" >

                        <p className="text-sm text-grey-textTwitter"> <strong className="text-black">{name}</strong> @{username} <span className="mb-4 text-md">.</span> {createdAt}</p>
                    </Link>
                    <div name="contenido-tweet" className="max-w-screen-sm">
                        <Link to={`/username/tweet/${_id}`}>
                            <article className="text-sm text-grey-contentTwitter mb-2.5">
                                {content}
                            </article>
                        </Link>

                        {(image) ?
                            <div name="media">
                                <img alt="media-tweet" src={image} className="rounded-2xl border-grey border" />
                            </div>
                            : null}
                        <div name="botones" className="container mx-auto flex flex-row justify-between md:py-1">
                            <TweetButton reply hoverColor="#1DA1F2" title="Reply" num={replies} onClick={() => setOpen(!open)} />
                            <TweetButton retweet hoverColor="rgb(0, 186, 124)" title="Retweet" num={retweets} />
                            <TweetButton like hoverColor="rgb(249, 24, 128)" title="Like" num={likes} />
                            <TweetButton share hoverColor="#1DA1F2" title="Share" />
                            <div></div>
                            {//<TweetButton unlike style={{ color: 'rgb(249, 24, 128)' }} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ReplayModal {...props} open={open} setOpen={setOpen} createComment={createComment} />
        </>
    );

}

export default SmallTweet;