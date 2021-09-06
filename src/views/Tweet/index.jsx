import Metadata from "../../lib/metadata"
import { Nav, TweetCardBig, TrendingsBar } from '../../components'

const TweetPage = () => {
    return (
        <>
            <Metadata title="Mi Tweet" description="(Contenido del tweet)" route="profile:username/id" />
            <div className='flex justify-center' >
                <div className='mr-2 sticky top-0'>
                    <Nav />
                </div>

                <section className='container w-104 border border-grey-lighter' name="tweet-bigger">
                    <TweetCardBig />
                </section>

                <section >
                    <TrendingsBar />
                </section>
            </div>
        </>
    )
}

export default TweetPage