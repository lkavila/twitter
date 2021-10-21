import React, { useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi";


const TweetButton = (props) => {
    const { reply, like, unlike, retweet, share, num, color = 'gray', hoverColor, style, size = 18, title, onClick } = props
    let Icon, bgHoverColor, textHoverColor

    const [iconColor, setIconColor] = useState(color);

    if (reply) {
        Icon = FaRegComment
        textHoverColor = 'blueTwitter'
        bgHoverColor = 'blueTwitter-lighter'
    } else if (retweet) {
        Icon = AiOutlineRetweet
        textHoverColor = 'greenTwitter'
        bgHoverColor = 'greenTwitter-light'
    } else if (share) {
        Icon = FiShare
        textHoverColor = 'blueTwitter'
        bgHoverColor = 'blueTwitter-lighter'
    } else if (like) {
        Icon = IoHeartOutline
        textHoverColor = 'redTwitter'
        bgHoverColor = 'redTwitter-light'
    } else if (unlike) {
        Icon = IoHeartSharp
        textHoverColor = 'redTwitter'
        bgHoverColor = 'redTwitter-light'
    }

    return (
        <div >
            <button name={title} id={title} className={`container flex flex-row hover:text-${textHoverColor}`} onMouseOver={() => setIconColor(hoverColor)} onMouseLeave={() => setIconColor(color)} onClick={onClick} >
                <div className={`transition duration-500 hover:bg-${bgHoverColor} rounded-full p-2.5`}>
                    <Icon size={size} color={iconColor} title={title} style={style} />
                </div>

                <p id={title} className="px-1 py-2.5 text-xs">{num > 0 ? num : null}</p>
            </button>

        </div>
    )
}

export default TweetButton;