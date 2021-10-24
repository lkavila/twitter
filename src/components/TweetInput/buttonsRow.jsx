import { useState, useEffect } from 'react';
import { Button } from '../'
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlineGif } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import CircularProgress from "./circularProgress"

const Icon = (Icon, display = 'block') => {
    return (
        <div className={`p-1 hover:bg-blueTwitter-lighter rounded-full cursor-pointer m-0.5 ${display} md:block`}>
            <Icon size="22" color="dodgerblue"> </Icon>
        </div>
    );
}

const ButtonsRow = ({ content, addTweet = {}, setContent, createComment = {}, _id, setOpen = {}, setTweetReplies = {}, tweetReplies = {} }) => {
    const [disable, setDisable] = useState(false)
    const handleClik = () => {
        if (_id) {
            createComment(content, _id)
            if (typeof (setTweetReplies) === 'function')
                setTweetReplies(tweetReplies + 1)
        } else {
            addTweet(content)
        }
        setContent("")
        if (typeof (setOpen) === 'function')
            setOpen(false)
    }
    useEffect(() => {
        if (content.length > 280 && content.length < 1) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [content])
    return (
        <div className="container flex flex-col xs:flex-row justify-between  items-center">

            <div className="container justify-start grid grid-flow-col auto-cols-max gap-0">
                {Icon(AiOutlinePicture)}
                {Icon(AiOutlineGif)}
                {Icon(AiOutlineBarChart, 'hidden')}
                {Icon(HiOutlineEmojiHappy)}
                {Icon(AiOutlineSchedule, 'hidden')}
            </div>

            <div className="container space-x-4 xs:justify-end justify-start items-center grid grid-flow-col auto-cols-max gap-0">

                {
                    content.length > 0
                        ? <>
                            <div className="-mr-6 -ml-6">
                                <CircularProgress content={content} />
                            </div>
                            <div className="border-r border-grey-light h-4 w-1" />
                            <div className="border border-grey-light rounded-full w-6 h-6 hover:bg-blueTwitter-lighter content-center">
                                <BsPlus color="dodgerblue" size="21"></BsPlus>
                            </div>
                        </>
                        :
                        <></>
                }




                <div>
                    <Button onClick={handleClik} to={'#'} title='Tweet' className={`rounded-full text-center ${disable ? "cursor-default opacity-60 hover:bg-blueTwitter" : ""}`} width='w-24' height='h-8' />
                </div>
            </div>

        </div>
    );
}

export default ButtonsRow