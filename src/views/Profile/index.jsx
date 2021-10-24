import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import Metadata from "../../lib/metadata";
import { Avatar, TweetCardSmall, TrendingsBar, ActionButton, SetupModal, Spinner } from '../../components'
import { HiArrowLeft, HiOutlineMail } from 'react-icons/hi'
import { BsThreeDots } from 'react-icons/bs'
import { CgCalendarDates } from 'react-icons/cg'
import Template from '../../template'
import { useProfile } from '../../hooks/useProfile'
import { AuthContext } from '../../context/AuthContext'

const Profile = () => {

    const history = useHistory()
    const { username } = useParams()
    const { tweets, user, loading, setUsername, addComment, addLike, deleteMyTweet } = useProfile()
    const [modal, setModal] = useState(false);
    const myUsername = useContext(AuthContext)?.user?.username;

    useEffect(() => {
        setUsername(username)
    })


    if (user === undefined) {
        return (
            <>
                <Metadata title="Perfil Twitter" description="Twitter es la mejor red social que existe, mira tu perfil aquí." route="profile" />
                <Template
                    content={
                        <section className='container max-w-2xl border border-grey-lighter' name="profile">
                            <section name="top-profile" className="cursor-pointer flex flex-row items-center">
                                <div className="hover:bg-grey-lighter w-10 h-10 m-2 rounded-full">
                                    <ActionButton onClick={() => history.goBack()}>
                                        <HiArrowLeft size={20} />
                                    </ActionButton>

                                </div>
                                <div className="px-2">
                                    <h1 className="font-bold text-xl">Profile</h1>
                                </div>
                            </section>
                            <section name="datos-usuario">
                                <div className="bg-grey bg-opacity-40 max-w-full h-48">
                                </div>
                                <div className="flex flex-row justify-between mr-4 ml-4">
                                    <div className="-mt-20 flex rounded-full border-4 border-white">
                                        <Avatar size={32} className="" />
                                    </div>
                                </div>
                                <div name="info-details" className="m-4 space-y-4">
                                    <div>
                                        <h1 className="font-bold text-2xl text-black">@{username}</h1>
                                    </div>
                                </div>
                            </section>
                            <div className="container flex flex-col justify-center text-left mt-16 mx-20 mb-96  w-3/6">
                                <p className="font-bold text-3xl">This account doesn’t exist</p>
                                <p className="text-grey">Try searching for another.</p>
                            </div>
                        </section>
                    }
                    aside={<TrendingsBar />}
                />
            </>
        )
    }
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
                                    <h1 className="font-bold text-xl">{user.name}</h1>
                                    <p className="text-grey">Tweets {user.numTweets}</p>
                                </div>
                            </section>
                            <section name="datos-usuario">
                                <div className="bg-grey bg-opacity-40 max-w-full h-48">
                                </div>

                                <div className="flex flex-row justify-between mr-4 ml-4">
                                    <div className='w-1/4 ' >
                                        <div className="-mt-16 cursor-pointer flex rounded-full border-4 border-white">
                                            <Avatar className="w-full h-auto" />
                                        </div>
                                    </div>

                                    <SetupModal open={modal} setOpen={setModal} />

                                    {
                                        user.username && (user.username === myUsername ?
                                            <div>
                                                <button className="mt-3 rounded-full w-36 border-grey-light border h-9 hover:bg-opacity-75 hover:bg-grey-lighter font-bold"
                                                    onClick={() => setModal(true)}>
                                                    Set up profile
                                                </button>
                                            </div>
                                            :
                                            <div className="flex flex-row space-x-2 mt-3 h-9">
                                                <ActionButton outline>
                                                    <BsThreeDots size={20} />
                                                </ActionButton>
                                                <ActionButton outline>
                                                    <HiOutlineMail size={20} />
                                                </ActionButton>
                                                <ActionButton fill title='Follow' />
                                            </div>)
                                    }

                                </div>

                                <div name="info-details" className="m-4 space-y-4">
                                    <div>
                                        <h1 className="font-bold text-2xl text-black">{user.name}</h1>
                                        <p className="text-grey">@{user.username}</p>
                                    </div>

                                    <p name="profile-description">{user.profileBio}</p>
                                    <div className="flex flex-row text-grey">
                                        <CgCalendarDates size={20} /> <p>Joined {user.joinDate}</p>
                                    </div>

                                    <div className="flex flex-row text-grey space-x-2">

                                        <div className=" flex flex-row cursor-pointer space-x-2 hover:underline">
                                            <strong className="text-black">{user.following}</strong>
                                            <p>Following</p>
                                        </div>
                                        <div className="flex flex-row cursor-pointer space-x-2 hover:underline">
                                            <strong className="text-black">{user.followers}</strong>
                                            <p>Followers</p>
                                        </div>


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

                                {loading ? (
                                    <Spinner size={8} />
                                ) : (
                                    tweets?.map((tweet, index) =>
                                        <section key={index}>
                                            <TweetCardSmall createComment={addComment} createLike={addLike} deleteMyTweet={deleteMyTweet} replies={tweet.comments?.length}  {...tweet} user={user} />
                                        </section>
                                    )
                                )}

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