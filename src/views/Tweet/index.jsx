import { useHistory } from 'react-router-dom'
import Metadata from "../../lib/metadata"
import { TweetCardBig, TrendingsBar, ActionButton } from '../../components'
import { HiArrowLeft } from 'react-icons/hi'
import Template from '../../template'

const TweetPage = () => {

    const history = useHistory()
    return (
        <>
            <Metadata title="Mi Tweet" description="(Contenido del tweet)" route="profile:username/id" />

            <Template
                content={
                    <>
                        <section name="top-tweet" className="sticky top-0 bg-white h-14 px-4 flex items-center border-b border-r border-l border-grey-textTwitter border-opacity-25 text-lg font-black">
                            <ActionButton onClick={() => history.goBack()}>
                                <HiArrowLeft size={20} />
                            </ActionButton>
                            <h1 className="font-bold text-xl">Tweet</h1>
                        </section>
                        <section className='container w-auto border border-grey-lighter' name="tweet-bigger">
                            <TweetCardBig />
                        </section>
                    </>
                }
                aside={<TrendingsBar />}
            >

            </Template>

        </>
    )
}

export default TweetPage