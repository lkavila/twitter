import Metadata from "../../lib/metadata"
import { TweetCardBig, TrendingsBar } from '../../components'
import Template from '../../template'

const TweetPage = () => {
    return (
        <>
            <Metadata title="Mi Tweet" description="(Contenido del tweet)" route="profile:username/id" />

            <Template
                content={

                    <section className='container w-auto border border-grey-lighter' name="tweet-bigger">
                        <TweetCardBig />
                    </section>
                }
                aside={<TrendingsBar />}
            >

            </Template>

        </>
    )
}

export default TweetPage