import { Link } from 'react-router-dom';

import TweetButton from './TweetButton'
import { Avatar } from '../'
const SmallTweet = () => {
    return (
        <div className="container mx-auto flex flex-row border border-grey-light border-opacity-25 md:py-2 max-w-screen-sm">
            <div className="lg:px-4">
                <Avatar />
            </div>


            <div>

                <div name="tweet">
                    <div name="info-usuario">

                        <p> <b>Nombre completo</b> @username <span>.</span> fecha tweet</p>
                    </div>
                    <div name="contenido-tweet" className="max-w-screen-sm">
                        <Link style={{ textDecoration: 'none' }} to="/username/tweet">
                            <article>Que pasa chavales!! Todo bien todo correcto? sjkfhjasb fdskjf sjkdh fjsdb gjds gjdshg jksdhkgh sdkhg jkdfh jkghdfkj hgdfjkh gkdjfh kgjhdfjk ghdkjfh</article>
                        </Link>
                        {(0 > 5) ? <img alt="media" /> : <div></div>}
                        <div name="botones" className="container mx-auto flex flex-row justify-between md:py-2.5">
                            <TweetButton reply hoverColor="#1DA1F2" title="Reply" num={34} style={{ transform: 'rotateY(180deg)' }} />
                            <TweetButton retweet hoverColor="rgb(0, 186, 124)" title="Retweet" num={34} style={{ transform: 'rotate(90deg)' }} />
                            <TweetButton like hoverColor="rgb(249, 24, 128)" title="Like" num={34} />
                            <TweetButton share hoverColor="#1DA1F2" title="Share" />
                            <div></div>
                            {//<TweetButton unlike style={{ color: 'rgb(249, 24, 128)' }} />
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default SmallTweet;