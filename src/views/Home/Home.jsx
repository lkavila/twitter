import Metadata from '../../lib/metadata'
import { TweetCardSmall, TrendingsBar, TweetInput } from '../../components'
import Template from '../../template'
import { useEffect, useState } from 'react'
import { getTweets } from '../../services/tweetService'

const Home = () => {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        getTweets()
            .then(data => {
                setTweets(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
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
                                <TweetInput />
                            </section>
                            <div>

                                {tweets?.map((tweet, index) =>
                                    <section key={index}>
                                        <TweetCardSmall {...tweet} />
                                    </section>
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