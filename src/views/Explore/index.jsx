import { useEffect } from 'react'
import Metadata from '../../lib/metadata'
import { TweetCardSmall, TrendingsBar, Spinner } from '../../components'
import Template from '../../template'
import { useHistory } from "react-router-dom";
import { useExplore } from '../../hooks/useExplore'
const Explore = () => {
    const { setUsername, username, loading, explore } = useExplore()
    const history = useHistory();
    useEffect(() => {
        if (history.location.search) {
            setUsername(history.location.search.split('=')[1])
        }
    })
    return (
        <>
            <Metadata title={'Welcome to twitter.'} description="Twitter is the best social network out there, log in here." route='home' ></Metadata>
            <Template
                content={
                    <>
                        <article>
                            <section className='sticky top-0 bg-white h-14 px-4 flex items-center border-b border-r border-l border-grey-textTwitter border-opacity-25 text-lg font-black'>
                                Explore
                            </section>
                            <div>
                                {loading ?
                                    (
                                        <div className='w-full h-40 flex justify-center items-center' >
                                            <Spinner size={8} />
                                        </div>
                                    ) :
                                    (
                                        explore?.map((tweet, index) =>
                                            <section key={index}>
                                                <TweetCardSmall content={tweet.text} createdAt={tweet.created_at} user={{user:username,username:username}} />
                                            </section>
                                        )
                                    )
                                }
                            </div>
                        </article>
                    </>
                }
                aside={<TrendingsBar />}
            />
        </>
    );
}
export default Explore;