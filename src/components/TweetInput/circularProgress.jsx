import { useState, useEffect } from 'react';
import { ProgressBar } from '../'

const CircularProgress = ({ content }) => {
    const [size, setSize] = useState(24)
    const [barColor, setBarColor] = useState("dodgerblue")
    const [textColor, setTextColor] = useState("grey")
    useEffect(() => {
        if (content.length < 260) {
            setSize(24)
            setTextColor("transparent")
            setBarColor("dodgerblue")
        }
        if (content.length >= 260 && content.length < 280) {
            setSize(30)
            setTextColor("grey")
            setBarColor("gold")
        }
        if (content.length >= 280 && content.length <= 289) {
            setBarColor("red")
            setTextColor("red")
        }
        if (content.length > 289) {
            setBarColor("transparent")
            setTextColor("red")
        }

    }, [content])

    return (
        <div className="container flex felx-col justify-between  items-center">
            <div>
                <ProgressBar
                    progress={content.length}
                    size={size}
                    strokeWidth={2}
                    circleOneStroke={barColor === 'transparent' ? barColor : '#d9edfe'}
                    circleTwoStroke={barColor}
                    textColor={textColor}
                />
            </div>
        </div>
    );
}

export default CircularProgress