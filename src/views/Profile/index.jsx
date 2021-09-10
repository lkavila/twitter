import { useHistory } from 'react-router-dom'
import Metadata from "../../lib/metadata";
import { Avatar, TweetCardSmall, TrendingsBar, ActionButton } from '../../components'
import { HiArrowLeft, HiOutlineMail } from 'react-icons/hi'
import { BsThreeDots } from 'react-icons/bs'
import { CgCalendarDates } from 'react-icons/cg'
import Template from '../../template'

const Profile = () => {
    const history = useHistory()
    return (
        <>
            <Metadata title="Perfil Twitter" description="Twitter es la mejor red social que existe, mira tu perfil aquí." route="profile" />
            <Template
                content={
                    <>
                        <section className='container max-w-2xl border border-grey-lighter' name="profile">
                            <section name="top-profile" className="h-14 cursor-pointer flex flex-row items-center pl-2">
                                <ActionButton onClick={() => history.goBack()}>
                                    <HiArrowLeft size={20} />
                                </ActionButton>

                                <div className="px-4">
                                    <h1 className="font-bold text-xl">Nombre completo</h1>
                                    <p className="text-grey">(numero tweets)</p>
                                </div>
                            </section>
                            <section name="datos-usuario">
                                <div className="cursor-pointer h-29">
                                    <img alt="portada" src="https://pbs.twimg.com/profile_banners/2541159535/1587044172/1500x500" />
                                </div>

                                <div className="flex flex-row justify-between mr-4 ml-4">
                                    <div className='w-1/4 ' >
                                        <div className="-mt-16 cursor-pointer flex rounded-full border-4 border-white">
                                            <Avatar className="w-full h-auto" />
                                        </div>
                                    </div>

                                    <div className="flex flex-row space-x-2 > * + * mt-3 h-9">
                                        <ActionButton outline>
                                            <BsThreeDots size={20} />
                                        </ActionButton>
                                        <ActionButton outline>
                                            <HiOutlineMail size={20} />
                                        </ActionButton>
                                        <ActionButton fill title='Follow' />
                                    </div>
                                </div>

                                <div name="info-details" className="m-4 space-y-4">
                                    <div>
                                        <h1 className="font-bold text-2xl text-black">Nombre completo</h1>
                                        <p className="text-grey">@username</p>
                                    </div>

                                    <p name="profile-description">Profile description</p>
                                    <div className="flex flex-row text-grey">
                                        <CgCalendarDates size={20} /> <p>Joined August 2021</p>
                                    </div>

                                    <div className="flex flex-row text-grey space-x-2">
                                        <strong className="text-black">45</strong> 
                                        <p>Following</p>
                                        <strong className="text-black">4</strong>
                                        <p>Followers</p>
                                    </div>
                                </div>

                            </section>

                            <section name="tweets" className="py-2 text-grey  overflow-hidden">
                                <button className="hover:bg-grey-light w-36 font-bold">Tweets</button>
                                <button className="hover:bg-grey-light w-40 font-bold">Tweets & replies</button>
                                <button className="hover:bg-grey-light w-36 font-bold">Media</button>
                                <button className="hover:bg-grey-light w-36 font-bold">Likes</button>
                            </section>
                            <div>
                                <TweetCardSmall />

                                <TweetCardSmall />
                            </div>

                        </section>
                    </>
                }
                aside={<TrendingsBar />}
            />
        </>

    );
}

export default Profile;