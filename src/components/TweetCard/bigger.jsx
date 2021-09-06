import { useParams } from 'react-router-dom';
import { Avatar, TweetCardSmall } from '../'
import tweetsJson from '../../components/TweetCard/tweets.json'
import TweetButton from './TweetButton'

const Tweet = () => {
    const { id } = useParams();
    const tweet = tweetsJson.tweets.find(t => t.id === parseInt(id, 10))
    return (
        <>
            <div name="tweet-container" className="container mx-auto border-r border-l border-grey-textTwitter border-opacity-25 px-4 py-1 max-w-screen-sm">
                <div name="image-user" className="flex flex-row mb-6">
                    <Avatar />
                    <div name="info-user" className="px-4">
                        <p> <b>{tweet.user}</b></p>
                        <p className="text-grey-textTwitter">@{tweet.username}</p>
                    </div>

                </div>

                <div name="contenido-tweet">
                    <article className="text-2xl mb-4">{tweet.content}</article>
                    {(tweet.image) ?
                        <div name="iamge">
                            <img alt="media" src={tweet.image} className="rounded-2xl border-grey border cursor-pointer" />
                        </div>
                        : null}


                    <div name="info-tweet" className="py-2 border-b border-grey-textTwitter border-opacity-25">
                        <p className="text-grey-textTwitter"> 11:30 am <span>.</span> {tweet.date} <span>.</span> Twitter from </p>
                    </div>

                    <div name="numbers-tweet" className="py-2 border-b border-grey-textTwitter border-opacity-25">
                        <p className="text-grey-textTwitter"> <b className="text-black">{tweet.retweets}</b> Retweets <span> </span>  <b className="text-black">{tweet.replies}</b> Quote tweets <span> </span> <b className="text-black">{tweet.likes}</b> Likes </p>
                    </div>

                    <div name="botones" className="container mx-auto flex flex-row justify-between md:py-1 border-b border-grey-textTwitter border-opacity-25">
                        <TweetButton reply hoverColor="#1DA1F2" title="Reply" style={{ transform: 'rotateY(180deg)' }} />
                        <TweetButton retweet hoverColor="rgb(0, 186, 124)" title="Retweet" style={{ transform: 'rotate(90deg)' }} />
                        <TweetButton like hoverColor="rgb(249, 24, 128)" title="Like" />
                        <TweetButton share hoverColor="#1DA1F2" title="Share" />
                        <div></div>
                        {//<TweetButton unlike style={{ color: 'rgb(249, 24, 128)' }} />
                        }
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
export default Tweet;