import Metadata from '../../lib/metadata'
import { TrendingsBar } from '../../components'
import Template from '../../template'
const Notifications = () => {
    return (
        <>
            <Metadata title={'Welcome to twitter.'} description="Twitter is the best social network out there, log in here." route='home' ></Metadata>
            <Template
                content={
                    <>
                        <article>
                            <section className='sticky top-0 bg-white h-14 px-4 flex items-center border-b border-r border-l border-grey-textTwitter border-opacity-25 text-lg font-black'>
                                Notifications
                            </section>
                            <div>
                                Notifications
                            </div>
                        </article>
                    </>
                }
                aside={<TrendingsBar />}
            />
        </>
    );
}
export default Notifications;