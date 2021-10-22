import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, TweetCardSmall } from '../'
import { useTweets } from '../../hooks/useTweets'
import tweetsJson from '../../components/TweetCard/tweets.json'
import TweetButton from './TweetButton'
import { Spinner } from '../'

const Tweet = () => {
    const { id } = useParams();
    const [data, setData] = useState(true);
    const [tweet, setTweet] = useState({});
    const { loadingT, getOneTweet } = useTweets();
    let breakContent = "break-words";
    useEffect(() => {
        if (data) {
            setData(false)
            getOneTweet(id)
                .then((data) => {
                    setTweet(data.tweet)

                })
                .catch((erro) => {
                    console.log(erro)
                })
        }
    }, [id, getOneTweet, tweet, data,])



    return (
        <>
            {loadingT ?
                <Spinner size={8} />
                : (
                    <>
                        <div name="tweet-container" className="container mx-auto border-r border-l border-grey-textTwitter border-opacity-25 px-4 py-1 max-w-screen-sm">
                            <Link to={`/${tweet.user?.username}`}>
                                <div name="image-user" className="flex flex-row mb-6">
                                    <Avatar />
                                    <div name="info-user" className="px-4">
                                        <p> <b>{tweet.user?.name}</b></p>
                                        <p className="text-grey-textTwitter">@{tweet.user?.username}</p>
                                    </div>
                                </div>
                            </Link>

                            <div name="contenido-tweet">
                                <article className={`text-2xl mb-4 whitespace-pre-wrap ${breakContent}`}>{tweet.content}</article>
                                {(tweet.image) ?
                                    <div name="iamge">
                                        <img alt="media-tweet-bigger" src={tweet.image} className="rounded-2xl border-grey border cursor-pointer" />
                                    </div>
                                    : null}


                                <div name="info-tweet" className="py-2 border-b border-grey-textTwitter border-opacity-25">
                                    <p className="text-grey-textTwitter"> 11:30 am <span>.</span> {tweet.createdAt} <span>.</span> Twitter from </p>
                                </div>

                                <div name="numbers-tweet" className="py-2 border-b border-grey-textTwitter border-opacity-25">
                                    <p className="text-grey-textTwitter"> <b className="text-black">{17}</b> Retweets <span> </span>  <b className="text-black">{12}</b> Quote tweets <span> </span> <b className="text-black">{tweet.likes}</b> Likes </p>
                                </div>

                                <div name="botones" className="container mx-auto flex flex-row justify-between md:py-1 border-b border-grey-textTwitter border-opacity-25">
                                    <TweetButton reply hoverColor="#1DA1F2" title="Reply" />
                                    <TweetButton retweet hoverColor="rgb(0, 186, 124)" title="Retweet" />
                                    <TweetButton like hoverColor="rgb(249, 24, 128)" title="Like" />
                                    <TweetButton share hoverColor="#1DA1F2" title="Share" />
                                    <div></div>
                                </div>
                            </div>


                        </div>
                        <div>
                            {
                                tweetsJson.tweets.filter((t) => t.tweetReplyId === parseInt(id, 10))
                                    .map((replyTweet) =>
                                        <section>
                                            <TweetCardSmall {...replyTweet} />
                                        </section>)

                            }
                        </div>
                    </>
                )
            }
        </>

    )

}
export default Tweet;