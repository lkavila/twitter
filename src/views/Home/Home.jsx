import Metadata from '../../lib/metadata'
import tweetsJson from '../../components/TweetCard/tweets.json'
import { Nav, TweetCardSmall, SearchBar, AsideCard, TrendingCard, FooterNav } from '../../components'
const Home = () => {
    const tweets = tweetsJson.tweets
    return (
        <>
            <Metadata title={'Welcome to twitter.'} description="Twitter is the best social network out there, log in here." route='home' ></Metadata>
            <div className='flex justify-center' >
                <div className='mr-2 sticky top-0'>
                    <Nav />
                </div>
                <article className='w-104 sticky' >
                    <section className='sticky top-0 bg-white h-14 px-4 flex items-center border-b border-r border-l border-grey-textTwitter border-opacity-25 text-lg font-black'>
                        Home
                    </section>
                    <div>

                        {tweets.map((tweet) =>
                            <section>
                                <TweetCardSmall {...tweet} />
                            </section>
                        )}
                    </div>
                </article>
                <aside className='w-96 px-8'>
                    <div className='sticky -top-3/4 space-y-3'>
                        <section className='sticky top-0'>
                            <SearchBar />
                        </section>
                        <div className='space-y-3 '>
                            <section>
                                <AsideCard title='What’s happening'>
                                    <TrendingCard />
                                    <TrendingCard />
                                    <TrendingCard />
                                    <TrendingCard />
                                </AsideCard>
                            </section>
                            <section>
                                <AsideCard title='Who to follow'>
                                    <TrendingCard />
                                    <TrendingCard />
                                    <TrendingCard />
                                    <TrendingCard />
                                </AsideCard>
                            </section>
                            <FooterNav />
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
export default Home;