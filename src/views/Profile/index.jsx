import Metadata from "../../lib/metadata";
import { Nav, Avatar, TweetCardSmall, TrendingsBar, Button } from '../../components'
import { HiArrowLeft, HiOutlineMail } from 'react-icons/hi'
import { BsThreeDots } from 'react-icons/bs'
import { CgCalendarDates } from 'react-icons/cg'

const Profile = () => {
    return (
        <>
            <Metadata title="Perfil Twitter" description="Twitter es la mejor red social que existe, mira tu perfil aquí." route="profile" />
            <div className='flex justify-center' >
                <div className='mr-2 sticky top-0'>
                    <Nav />
                </div>

                <section className='container max-w-2xl border border-grey-lighter' name="profile">
                    <section name="top-profile" className="cursor-pointer flex flex-row">
                        <div className="hover:bg-grey-lighter w-10 h-10 m-2 rounded-full">
                            <HiArrowLeft size={17} className="m-3" />
                        </div>

                        <div className="px-4">
                            <h1 className="font-bold text-2xl">Nombre completo</h1>
                            <p className="text-grey">(numero tweets)</p>
                        </div>
                    </section>
                    <section name="datos-usuario">
                        <div className="cursor-pointer h-29">
                            <img alt="portada" src="https://pbs.twimg.com/profile_banners/2541159535/1587044172/1500x500" />
                        </div>

                        <div className="flex flex-row justify-between mr-4 ml-4">
                            <div className="-mt-12 cursor-pointer flex rounded-full border-4 border-white">
                                <Avatar size={20} className="" />
                            </div>

                            <div className="flex flex-row space-x-2 > * + * mt-3 h-9">
                                <div className="border border-grey-light cursor-pointer rounded-full hover:bg-grey-lighter p-2">
                                    <BsThreeDots size={20} />
                                </div>
                                <div className="border border-grey-light cursor-pointer rounded-full hover:bg-grey-lighter p-2">
                                    <HiOutlineMail size={20} />
                                </div>
                                <div>
                                    <button className="bg-black text-white rounded-full w-20 h-9 hover:opacity-75 font-bold">Follow</button>
                                </div>
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

                    <section name="tweets" className="flex flex-row justify-around max-w-full h-12 text-grey  ">
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
                <TrendingsBar />

            </div>

        </>

    );
}

export default Profile;