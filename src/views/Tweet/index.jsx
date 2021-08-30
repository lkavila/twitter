import Nav from '../../components/Nav';
import Tweet from '../../components/TweetCard/bigger';
import Metadata from "../../lib/metadata";

const TweetPage = () => {

    return (
        <>
            <Metadata title="Mi Tweet" description="(Contenido del tweet)" route="profile:username/id" />
            <Nav />
            <section>
                <Tweet />
            </section>
        </>
    )

}

export default TweetPage