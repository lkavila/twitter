import { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { Avatar } from '../'
import { GiEarthAmerica } from "react-icons/gi";
import ButtonsRow from "./buttonsRow"

const TweetInput = ({ addTweet }) => {
    const { user } = useContext(AuthContext);
    const [content, setContent] = useState("");
    const textArea = useRef(null);
    const handleChange = (event) => {
        textArea.current.style.height = "1px";
        textArea.current.style.height = (textArea.current.scrollHeight) + "px";
        setContent(event.target.value)
    }
    return (
        <div name="tweet-container" className="container w-auto flex flex-row border-t border-r border-l border-grey-textTwitter border-opacity-25 px-2 py-2 max-w-screen-sm">
            <Link to={`/${user.username}`} name="info-usuario-avatar" >
                <div name="avatar" className="min-w-max w-16 mr-2">
                    <Avatar />
                </div>
            </Link>
            <div className="container flex flex-col space-y-3 mt-3">
                <textarea
                    ref={textArea}
                    id="tweet-content"
                    className="container outline-none resize-none md:max-w-lg sm:max-w-md xs:max-w-sm max-w-xs w-full text-xl"
                    onChange={handleChange}
                    value={content}
                    placeholder="What's hapenning?"
                    maxLength="1000"
                >
                    {
                        content.substring(0, 280)
                    }

                </textarea>
                <p className="bg-redTwitter-light text-xl whitespace-pre-wrap break-all max-w-none">
                    {content.slice(280)}
                </p>
                <div className="flex flex-row hover:bg-blueTwitter-lighter w-1/3 cursor-pointer -ml-4 px-3 py-1 rounded-full">
                    <GiEarthAmerica size="18" color="dodgerblue" className="mr-2" />
                    <p className="text-blueTwitter font-bold text-sm">Everyone can see</p>
                </div>

                <div className="border-t border-grey-aside" />

                <ButtonsRow content={content} setContent={setContent} addTweet={addTweet} />
            </div>

        </div>
    )
}

export default TweetInput