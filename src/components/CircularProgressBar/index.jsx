import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';


const ProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
        textColor
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((280 - progress) / 280) * circumference;
        setOffset(progressOffset);

        circleRef.current.style = 'transition: stroke-dashoffset 10ms ease-in-out';

    }, [setOffset, progress, circumference, offset]);

    return (
        <>
            <svg
                className="block m-5 max-w-full"
                width={size}
                height={size}
            >
                <circle
                    className="object-none"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="object-none origin-center transform -rotate-90"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text
                    x={progress > 280 ? center - 10 : center - 5}
                    y={`${center + 3}`}
                    fill={textColor}
                    className="text-center text-xs align-middle font-bold mr-3">
                    {progress >= 260 ? 280 - progress : null}
                </text>
            </svg>
        </>
    );
}

ProgressBar.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired
}

export default ProgressBar;