import Metadata from "../../lib/metadata"
import { Nav, TweetCardBig } from '../../components'

const TweetPage = () => {
    return (
        <>
            <Metadata title="Mi Tweet" description="(Contenido del tweet)" route="profile:username/id" />
            <Nav />
            <section>
                <TweetCardBig />
            </section>
        </>
    )
}

export default TweetPage