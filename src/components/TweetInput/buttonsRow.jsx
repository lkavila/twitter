import { Button } from '../'
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlineGif } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

const Icon = (Icon, display = 'block') => {
    return (
        <div className={`p-1 hover:bg-blueTwitter-lighter rounded-full cursor-pointer m-0.5 ${display} md:block`}>
            <Icon size="22" color="blue"> </Icon>
        </div>
    );
}

const ButtonsRow = ({ content, addTweet, setContent }) => {
    const handleClik = () => {
        addTweet(content)
        setContent("")
    }
    return (
        <div className="container flex felx-col justify-between  items-center">

            <div className="container justify-start grid grid-flow-col auto-cols-max gap-0">
                {Icon(AiOutlinePicture)}
                {Icon(AiOutlineGif)}
                {Icon(AiOutlineBarChart, 'hidden')}
                {Icon(HiOutlineEmojiHappy)}
                {Icon(AiOutlineSchedule, 'hidden')}
            </div>

            <div className="container space-x-4 justify-end items-center grid grid-flow-col auto-cols-max gap-0">
                <div>
                    CircularBar
                </div>
                <p>|</p>
                <div className="border border-grey-light rounded-full w-6 h-6 hover:bg-blueTwitter-lighter content-center">
                    <BsPlus color="blue" size="20"></BsPlus>
                </div>

                <div>
                    <Button onClick={handleClik} to={'#'} title='Tweet' className='rounded-full text-center' width='w-24' height='h-8' />
                </div>
            </div>

        </div>
    );
}

export default ButtonsRow