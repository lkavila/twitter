import Metadata from '../../lib/metadata'
import { TweetCardSmall, TrendingsBar, TweetInput, Spinner } from '../../components'
import Template from '../../template'

import { useTweets } from '../../hooks/useTweets'

const Home = () => {
    const { tweets, loadingT, addTweet } = useTweets()
    return (
        <>
            <Metadata title={'Welcome to twitter.'} description="Twitter is the best social network out there, log in here." route='home' ></Metadata>
            <Template
                content={
                    <>
                        <article>
                            <section className='sticky top-0 bg-white h-14 px-4 flex items-center border-b border-r border-l border-grey-textTwitter border-opacity-25 text-lg font-black'>
                                Home
                            </section>
                            <section>
                                <TweetInput addTweet={addTweet} />
                            </section>
                            <div>
                                {loadingT ? (
                                    <Spinner size={8} />
                                ) : (
                                    tweets?.map((tweet, index) =>
                                        <section key={index}>
                                            <TweetCardSmall {...tweet} />
                                        </section>
                                    )
                                )}
                            </div>
                        </article>
                    </>
                }
                aside={<TrendingsBar />}
            />
        </>
    );
}
export default Home;